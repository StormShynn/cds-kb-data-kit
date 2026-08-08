#!/usr/bin/env node
// scripts/enrich_ddl_fields.mjs
// Backfill Type/Description onto Full-DDL views' Fields table from the Hub
// catalog's per-view field metadata (see src/fetcher.mjs
// fetchFromHubCatalog) — DDL parsing alone only ever gives a field's
// name/key/source expression, never a data type; the Hub has type/length/
// description for any RELEASED view regardless of whether we already have
// its DDL. This never touches the DDL source itself, or the Key/
// Association/Via/Source columns already derived from it — purely
// additive, matching Hub fields onto already-parsed DDL fields by name
// (case-insensitive). A DDL field with no Hub match (e.g. a computed/
// derived column with no counterpart on the Hub, or the Hub simply doesn't
// have this view) just keeps what it already had.
//
// Tracks progress in ddl-field-enrichment-manifest.json so a re-run
// doesn't re-hit the Hub for views already processed (found or not); add a
// name to ddl-field-enrichment-request.json to force a re-check (e.g.
// after the Hub adds/changes field metadata for that view).
//
// Small, slow batches on purpose — same reasoning as
// scripts/add_hub_metadata.mjs: this hits a public, unauthenticated SAP
// endpoint with no published rate limit.
//
// Usage:
//   node scripts/enrich_ddl_fields.mjs                # everything due, small batch
//   node scripts/enrich_ddl_fields.mjs --limit 50
//   node scripts/enrich_ddl_fields.mjs --dry-run

import fs from 'node:fs/promises';
import path from 'node:path';
import { fetchViewDDL } from '../src/fetcher.mjs';
import { parseDDL, readDDLContent } from '../src/parser.mjs';
import { renderFieldsTable, renderAssociationsTable } from '../src/template.mjs';
import { listViewFiles, findExistingView } from './lib/view-files.mjs';
import { readJson, writeJson } from './lib/json-file.mjs';
import { runPool } from './lib/concurrency.mjs';

const DATA_DIR = '.';
const VIEWS_DIR = path.join(DATA_DIR, 'views');
const MANIFEST_FILE = path.join(DATA_DIR, 'ddl-field-enrichment-manifest.json');
const REQUEST_FILE = path.join(DATA_DIR, 'ddl-field-enrichment-request.json');

function parseArgs() {
  const args = process.argv.slice(2);
  const opts = { limit: 50, concurrency: 3, delayMs: 250, dryRun: false };
  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case '--limit': opts.limit = parseInt(args[++i], 10) || 0; break;
      case '--concurrency': opts.concurrency = parseInt(args[++i], 10) || 3; break;
      case '--delay-ms': opts.delayMs = parseInt(args[++i], 10) || 0; break;
      case '--dry-run': opts.dryRun = true; break;
      case '--help': case '-h':
        console.log('Usage: node scripts/enrich_ddl_fields.mjs [--limit N] [--concurrency N] [--delay-ms N] [--dry-run]');
        process.exit(0);
      default:
        console.error(`Unknown option: ${args[i]}`);
        process.exit(1);
    }
  }
  return opts;
}

/** Scan local view files (concurrently — there are thousands) for DDL-backed views not yet processed. */
async function scanCandidates(manifest) {
  const files = await listViewFiles(VIEWS_DIR);
  const results = await runPool(files, 32, async ({ name, relPath }) => {
    if (manifest[name]) return null;
    const filePath = path.join(VIEWS_DIR, ...relPath.split('/'));
    let content;
    try {
      content = await fs.readFile(filePath, 'utf-8');
    } catch {
      return null;
    }
    if (!/^source_available:\s*true\s*$/m.test(content)) return null;
    return { name, filePath };
  });
  return results.filter(Boolean);
}

/** Build the prioritized work queue: requested > new (discovered by the scan). */
async function buildWorkQueue() {
  const manifest = await readJson(MANIFEST_FILE, {});
  const requests = await readJson(REQUEST_FILE, []);

  const seen = new Set();
  const queue = [];

  for (const name of requests) {
    const upper = name.toUpperCase();
    if (seen.has(upper)) continue;
    seen.add(upper);
    queue.push({ name: upper, reason: 'requested' });
  }

  const candidates = await scanCandidates(manifest);
  for (const c of candidates) {
    if (seen.has(c.name)) continue;
    seen.add(c.name);
    queue.push({ name: c.name, reason: 'new', filePath: c.filePath });
  }

  return { queue, manifest, requests };
}

// Splits the file into [head, tail] at the first of "## Fields" /
// "## Associations" / "## Source Code" (head) and at "## Source Code"
// itself (tail) — same surgical patch shape as scripts/reparse-fields.mjs,
// so the property table above and the DDL block below are carried through
// byte-for-byte, and only the middle gets rebuilt.
function splitSections(content) {
  const firstOfThree = /^## (?:Fields|Associations|Source Code)[ \t]*\r?\n/m.exec(content);
  const head = firstOfThree ? content.slice(0, firstOfThree.index) : content;
  const sourceMatch = /^## Source Code[ \t]*\r?\n/m.exec(content);
  const tail = sourceMatch ? content.slice(sourceMatch.index) : '';
  return { head, tail };
}

function rebuild(content, fieldsTable, assocTable) {
  const nl = content.includes('\r\n') ? '\r\n' : '\n';
  const { head, tail } = splitSections(content);
  const middle = [fieldsTable, assocTable].filter(Boolean);
  let out = head.replace(/\s+$/, '');
  for (const part of middle) out += '\n\n' + part;
  out += tail ? '\n\n' + tail.replace(/\s+$/, '') + '\n' : '\n';
  return nl === '\r\n' ? out.replace(/\r?\n/g, '\r\n') : out;
}

async function processItem(item, opts, manifest, stats) {
  const { name, reason } = item;
  const filePath = item.filePath || await findExistingView(VIEWS_DIR, name);
  if (!filePath) {
    console.warn(`   ⚠️  ${name} (${reason}): file not found locally, skipping`);
    stats.skipped++;
    return;
  }

  let content;
  try {
    content = await fs.readFile(filePath, 'utf-8');
  } catch {
    stats.skipped++;
    return;
  }

  if (!/^source_available:\s*true\s*$/m.test(content)) {
    console.log(`   ⏭️  ${name} (${reason}): no DDL, nothing to enrich — skipping`);
    stats.skipped++;
    return;
  }

  let ddl;
  try {
    ddl = await readDDLContent(filePath);
  } catch (e) {
    console.error(`   ❌ ${name} (${reason}): cannot extract DDL (${e.message})`);
    stats.errors++;
    return;
  }
  if (!ddl || !ddl.trim()) {
    stats.skipped++;
    return;
  }

  const parsed = parseDDL(ddl, { viewName: name });

  let hubResult;
  try {
    hubResult = await fetchViewDDL(name, { source: 'hub-catalog' });
  } catch (err) {
    manifest[name] = { attemptedAt: new Date().toISOString(), found: false, reason: err.message };
    stats.notOnHub++;
    console.log(`   ✗ ${name} (${reason}): not on Hub catalog (${err.message})`);
    return;
  } finally {
    // Space out requests to this public, unauthenticated endpoint rather
    // than firing them back-to-back.
    if (opts.delayMs > 0) await new Promise(r => setTimeout(r, opts.delayMs));
  }

  const hubByName = new Map((hubResult.syntheticFields || []).map(f => [f.name.toUpperCase(), f]));

  let matched = 0;
  for (const f of parsed.fields) {
    const hf = hubByName.get(f.name.toUpperCase());
    if (hf) {
      f.dataType = hf.dataType || '';
      f.length = hf.length || '';
      f.description = hf.description || '';
      matched++;
    }
  }

  if (matched === 0) {
    manifest[name] = { attemptedAt: new Date().toISOString(), found: true, matched: 0 };
    stats.noMatch++;
    console.log(`   ℹ️  ${name} (${reason}): on the Hub, but no field names matched — nothing to add`);
    return;
  }

  const newFieldsTable = renderFieldsTable(parsed);
  const newAssocTable = renderAssociationsTable(parsed);
  const newContent = rebuild(content, newFieldsTable, newAssocTable);

  if (opts.dryRun) {
    console.log(`   📄 ${name} (${reason}): would enrich ${matched}/${parsed.fields.length} field(s) [dry-run]`);
    stats.previewed++;
    return;
  }

  await fs.writeFile(filePath, newContent, 'utf-8');
  manifest[name] = { attemptedAt: new Date().toISOString(), found: true, matched };
  console.log(`   ✅ ${name} (${reason}): enriched ${matched}/${parsed.fields.length} field(s)`);
  stats.enriched++;
}

async function main() {
  const opts = parseArgs();

  console.log('📋 Scanning for Full-DDL views not yet checked against the Hub catalog...');
  const { queue, manifest, requests } = await buildWorkQueue();
  const counts = queue.reduce((acc, i) => ((acc[i.reason] = (acc[i.reason] || 0) + 1), acc), {});
  console.log(`   ${queue.length} candidate(s) — requested: ${counts.requested || 0}, new: ${counts.new || 0}`);

  let items = queue;
  if (opts.limit > 0 && items.length > opts.limit) {
    console.log(`   Capping this run to ${opts.limit} (re-run to continue with the rest)`);
    items = items.slice(0, opts.limit);
  }

  if (items.length === 0) {
    console.log('Nothing to do.');
    return;
  }

  const stats = { enriched: 0, noMatch: 0, notOnHub: 0, skipped: 0, previewed: 0, errors: 0, total: items.length };
  const resolvedRequests = new Set();

  for (const item of items) {
    await processItem(item, opts, manifest, stats);
    if (manifest[item.name] && !opts.dryRun) resolvedRequests.add(item.name);
  }

  if (!opts.dryRun) {
    await writeJson(MANIFEST_FILE, manifest);
    const remaining = requests.filter(n => !resolvedRequests.has(n.toUpperCase()));
    if (remaining.length !== requests.length) {
      await writeJson(REQUEST_FILE, remaining);
    }
  }

  console.log('\n' + '═'.repeat(50));
  console.log('📊 Summary:');
  console.log(`   Total checked:  ${stats.total}`);
  console.log(`   Enriched:       ${stats.enriched}`);
  if (stats.noMatch) console.log(`   No field match: ${stats.noMatch}`);
  if (stats.notOnHub) console.log(`   Not on Hub:     ${stats.notOnHub}`);
  if (stats.skipped) console.log(`   Skipped:        ${stats.skipped}`);
  if (stats.previewed) console.log(`   Previewed:      ${stats.previewed}`);
  if (stats.errors) console.log(`   Errors:         ${stats.errors}`);
  console.log('✅ Done!\n');
}

main().catch(err => {
  console.error(`❌ Error: ${err.message}`);
  process.exit(1);
});
