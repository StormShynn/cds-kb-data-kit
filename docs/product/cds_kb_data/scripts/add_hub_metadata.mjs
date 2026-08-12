#!/usr/bin/env node
// scripts/add_hub_metadata.mjs
// Fill in views missing from the KB but confirmed RELEASED on the SAP
// Business Accelerator Hub, AND keep already-fetched entries fresh, using
// field-level metadata from the Hub's public catalog (no login, no API key
// — see src/fetcher.mjs fetchFromHubCatalog).
//
// No raw DDL source is available this way (the Hub doesn't expose it
// publicly at all), so entries are written as "metadata-only": field
// name/type/length/description plus app component and business context,
// tagged release_state: released (SAP-confirmed) and tags: [..., "metadata-only"].
// This script never touches release_state/tag conventions used by the
// github-search or manual pipelines — those are untouched.
//
// Three kinds of work, in priority order:
//   1. requested  — names listed in cds-kb-data/hub-metadata-refresh-request.json
//                   (edit that file by hand to force a re-fetch; processed
//                   names are removed from it once done).
//   2. new        — views coverage.json marks as missing (not in the KB yet),
//                   except ones marked Developer Extensibility "Not Released"
//                   (see check-coverage.mjs) — the Hub itself won't let you
//                   extend those, so this pipeline doesn't auto-add them.
//   3. refresh    — views this script already wrote before (tracked in
//                   cds-kb-data/hub-metadata-manifest.json) whose Hub
//                   ModifiedAt has moved on since the last fetch.
// Entries not in the manifest are never overwritten here, even if their
// name matches a "refresh" candidate — that would mean they were added by
// a different pipeline (real DDL, GitHub), which this script must not touch.
//
// Usage:
//   node scripts/add_hub_metadata.mjs                # everything due, in priority order
//   node scripts/add_hub_metadata.mjs --limit 50      # cap this run (keeps PRs reviewable + gentle on the Hub)
//   node scripts/add_hub_metadata.mjs --dry-run
//   node scripts/add_hub_metadata.mjs --concurrency 4

import fs from 'node:fs/promises';
import path from 'node:path';
import { fetchViewDDL } from '../src/fetcher.mjs';
import { autoTagWithMetadataFlag, loadTaxonomy } from '../src/auto-tagger.mjs';
import { renderViewMd } from '../src/template.mjs';
import { addChangelogEntry } from '../src/changelog.mjs';
import { resolveViewFolder, findExistingView } from './lib/view-files.mjs';
import { readJson, writeJson } from './lib/json-file.mjs';
import { runPool } from './lib/concurrency.mjs';
import { rebuildIndex } from './lib/rebuild-index.mjs';
import { normalizeDevExtStatus } from './lib/hub-extensibility.mjs';

const DATA_DIR = '.';
const VIEWS_DIR = path.join(DATA_DIR, 'views');
const MANIFEST_FILE = path.join(DATA_DIR, 'hub-metadata-manifest.json');
const REFRESH_REQUEST_FILE = path.join(DATA_DIR, 'hub-metadata-refresh-request.json');

function parseArgs() {
  const args = process.argv.slice(2);
  // Conservative defaults on purpose: this hits a public SAP endpoint with no
  // auth, so keep the request rate low and the batch small rather than
  // hammering it — there's no published rate limit to design against.
  const opts = { limit: 50, concurrency: 3, delayMs: 250, dryRun: false, track: true, noBuild: false };
  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case '--limit': opts.limit = parseInt(args[++i], 10) || 0; break;
      case '--concurrency': opts.concurrency = parseInt(args[++i], 10) || 3; break;
      case '--delay-ms': opts.delayMs = parseInt(args[++i], 10) || 0; break;
      case '--dry-run': opts.dryRun = true; break;
      case '--no-track': opts.track = false; break;
      case '--no-build': opts.noBuild = true; break;
      case '--help': case '-h':
        console.log('Usage: node scripts/add_hub_metadata.mjs [--limit N] [--concurrency N] [--delay-ms N] [--dry-run] [--no-track] [--no-build]');
        process.exit(0);
      default:
        console.error(`Unknown option: ${args[i]}`);
        process.exit(1);
    }
  }
  return opts;
}

/** Build the prioritized work queue: requested > new > drift-detected refresh. */
async function buildWorkQueue() {
  const report = await readJson(path.join(DATA_DIR, 'coverage.json'), { rows: [] });
  const manifest = await readJson(MANIFEST_FILE, {});
  const refreshRequests = await readJson(REFRESH_REQUEST_FILE, []);

  const rowsByName = new Map(report.rows.map(r => [r.name, r]));
  const seen = new Set();
  const queue = [];
  let devExtSkipped = 0;

  for (const name of refreshRequests) {
    const upper = name.toUpperCase();
    if (seen.has(upper)) continue;
    seen.add(upper);
    queue.push({ name: upper, reason: 'requested' });
  }

  for (const row of report.rows) {
    if (row.inLocal || seen.has(row.name)) continue;
    // Only trims auto-discovery — an explicit 'requested' entry above still
    // goes through even if the Hub marks it Not Released for this contract.
    if (row.devExtStatus === 'Not Released') {
      devExtSkipped++;
      continue;
    }
    seen.add(row.name);
    queue.push({ name: row.name, reason: 'new' });
  }

  for (const [name, entry] of Object.entries(manifest)) {
    if (seen.has(name)) continue;
    const row = rowsByName.get(name);
    if (row && row.modifiedAt && entry.modifiedAt && row.modifiedAt > entry.modifiedAt) {
      seen.add(name);
      queue.push({ name, reason: 'refresh' });
    }
  }

  return { queue, manifest, refreshRequests, rowsByName, devExtSkipped };
}

async function processItem(item, opts, taxonomy, rowsByName, manifest, stats) {
  const { name, reason } = item;
  // coverage.json's row.devExtStatus already carries the Hub's Developer
  // Extensibility state (see check-coverage.mjs) for anything the Hub
  // artifacts call knows about — stamp it onto new writes here instead of
  // leaving them to rely solely on the separate backfill script.
  const row = rowsByName.get(name);
  // Looked up by name anywhere in the tree, not a flat guess — a view
  // migrated into a module folder must still be recognized as existing, or
  // this would "new"-write a duplicate metadata-only stub at the old flat
  // path right next to its real, already-migrated content.
  const existingFile = await findExistingView(VIEWS_DIR, name);
  const existedBefore = !!existingFile;

  // Never overwrite a file this script didn't create — regardless of why it
  // was queued. Covers: 'new' racing against something else that added it
  // since coverage.json was generated, and 'requested' naming a view that
  // already has real DDL (or was added by github/manual) — the bug that
  // clobbered a real entry during testing before this check was added.
  if (existedBefore && !manifest[name]) {
    console.warn(`   ⚠️  ${name} (${reason}): already exists and wasn't created by this script — skipping to avoid clobbering real data`);
    stats.skipped++;
    return 'skipped';
  }

  let result;
  try {
    result = await fetchViewDDL(name, { source: 'hub-catalog' });
  } catch (err) {
    stats.errors++;
    console.error(`   ❌ ${name} (${reason}): ${err.message}`);
    return 'error';
  } finally {
    // Space out requests to this public, unauthenticated endpoint rather
    // than firing them back-to-back.
    if (opts.delayMs > 0) await new Promise(r => setTimeout(r, opts.delayMs));
  }

  const meta = result.metadata;
  const fields = (result.syntheticFields || []).map(f => ({
    name: f.name,
    isKey: false, // the Hub doesn't expose key-field info
    dataType: f.dataType || '',
    length: f.length || '',
    description: f.description || '',
  }));

  const tags = autoTagWithMetadataFlag({
    name,
    appComponent: meta.appComponent,
    description: meta.description || meta.label,
    label: meta.label,
    fields,
  }, taxonomy, false);

  const viewData = {
    name,
    label: meta.label,
    description: meta.description || meta.label || name,
    appComponent: meta.appComponent || '',
    softwareComponent: 'SAPSCORE',
    releaseState: 'released', // SAP-confirmed via the Hub catalog, not a guess
    // Separate axis from releaseState above (see hook/quy-trinh-check-...md)
    // — only set when the Hub's extensibility catalog actually has a value;
    // undefined (not written) otherwise, never a guessed default.
    devExtStatus: normalizeDevExtStatus(row?.devExtStatus) || undefined,
    systemType: 'S/4HANA Cloud Public Edition',
    semantic_en: meta.description || meta.label || '',
    semantic_vi: '',
    keywords: meta.businessContexts || [],
    tags,
    fields,
    associations: [],
    ddlSource: '',
    sourceUrl: meta.sourceUrl || '',
  };

  const md = renderViewMd(viewData);

  if (opts.dryRun) {
    console.log(`   📄 ${name} (${reason}): ${fields.length} field(s) (dry-run)`);
    stats.previewed++;
    return 'previewed';
  }

  const outputFile = existingFile || path.join(VIEWS_DIR, resolveViewFolder(viewData.appComponent, viewData.releaseState), `${name}.md`);
  await fs.mkdir(path.dirname(outputFile), { recursive: true });
  await fs.writeFile(outputFile, md, 'utf-8');
  const action = existedBefore ? 'updated' : 'added';
  console.log(`   ✅ ${name} (${reason}): ${action} (${fields.length} fields, ${tags.length} tags)`);
  stats[action]++;

  manifest[name] = { modifiedAt: row?.modifiedAt || null, fetchedAt: new Date().toISOString() };

  if (opts.track) {
    await addChangelogEntry(DATA_DIR, {
      viewName: name,
      action,
      source: 'hub-catalog',
      fields: fields.length,
      associations: 0,
      tags: tags.length,
      sourceUrl: meta.sourceUrl || null,
    });
  }

  return action;
}

async function main() {
  const opts = parseArgs();

  console.log('📋 Building work queue (requested > new > refresh)...');
  const { queue, manifest, refreshRequests, rowsByName, devExtSkipped } = await buildWorkQueue();
  const counts = queue.reduce((acc, i) => ((acc[i.reason] = (acc[i.reason] || 0) + 1), acc), {});
  console.log(`   ${queue.length} total — requested: ${counts.requested || 0}, new: ${counts.new || 0}, refresh: ${counts.refresh || 0}`);
  if (devExtSkipped > 0) {
    console.log(`   ℹ️  ${devExtSkipped} more missing view(s) not queued — Developer Extensibility Not Released on the Hub`);
  }

  let items = queue;
  if (opts.limit > 0 && items.length > opts.limit) {
    console.log(`   Capping this run to ${opts.limit} (re-run to continue with the rest)`);
    items = items.slice(0, opts.limit);
  }

  if (items.length === 0) {
    console.log('Nothing to do.');
    return;
  }

  const taxonomy = await loadTaxonomy(DATA_DIR);
  console.log(taxonomy ? '📂 Loaded taxonomy for tagging' : '   ℹ️  No taxonomy file found, using fallback mappings');

  if (!opts.dryRun) {
    await fs.mkdir(VIEWS_DIR, { recursive: true });
  }

  const stats = { added: 0, updated: 0, skipped: 0, errors: 0, previewed: 0, total: items.length };
  // Only drop a name from the refresh-request queue once it's actually been
  // written — a 'skipped' (e.g. real data protected) or 'error' result means
  // the request is still outstanding and should stay queued for next time.
  const resolvedNames = new Set();

  let done = 0;
  await runPool(items, opts.concurrency, async (item) => {
    const status = await processItem(item, opts, taxonomy, rowsByName, manifest, stats);
    if ((status === 'added' || status === 'updated') && !opts.dryRun) resolvedNames.add(item.name);
    done++;
    if (done % 20 === 0) console.log(`   [${done}/${items.length}]`);
  });

  if (!opts.dryRun) {
    await writeJson(MANIFEST_FILE, manifest);
    const remainingRequests = refreshRequests.filter(n => !resolvedNames.has(n.toUpperCase()));
    if (remainingRequests.length !== refreshRequests.length) {
      await writeJson(REFRESH_REQUEST_FILE, remainingRequests);
    }
  }

  if (!opts.noBuild && !opts.dryRun && (stats.added > 0 || stats.updated > 0)) {
    console.log('\n🔨 Rebuilding search index...');
    await rebuildIndex(DATA_DIR);
  }

  console.log('\n' + '═'.repeat(50));
  console.log('📊 Summary:');
  console.log(`   Total:     ${stats.total}`);
  console.log(`   Added:     ${stats.added}`);
  console.log(`   Updated:   ${stats.updated}`);
  if (stats.skipped) console.log(`   Skipped:   ${stats.skipped}`);
  if (stats.errors) console.log(`   Errors:    ${stats.errors}`);
  if (stats.previewed) console.log(`   Previewed: ${stats.previewed}`);
  console.log('✅ Done!\n');
}

main().catch(err => {
  console.error(`❌ Error: ${err.message}`);
  process.exit(1);
});
