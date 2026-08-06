#!/usr/bin/env node
// scripts/backfill_source_links.mjs
//
// Many existing KB entries already have DDL source (added before source-link
// tracking existed, or via the github pipeline before its sourceUrl capture
// was fixed — see add_view.mjs/batch_add.mjs) but have no recorded link back
// to where that DDL came from. This script tries to re-find that link via
// GitHub search WITHOUT touching anything else in the file: it only ever
// inserts a `source_url:` frontmatter line and a one-line note above the
// Source Code block, via a surgical text patch (never a full re-render), so
// existing fields/tags/DDL/formatting in an old file cannot change.
//
// IMPORTANT — a name match on GitHub is not proof the file is the original
// source: SAP views change over time, and other repos can have same-named
// views with different content. Every inserted link is labeled by
// confidence so this is never presented as more certain than it is:
//   - "Source" (exact): freshly fetched content is identical
//     (whitespace-normalized) to what's already stored locally.
//   - "Possible source (unverified — content differs)": the view name
//     matched but the content isn't byte-identical. Still probably the same
//     view at a different revision, but treat it as a lead, not a fact.
//
// This calls fetchFromGitHub (3 search queries per view) against GitHub's
// Code Search API, which has a much stricter rate limit than plain REST —
// so this defaults to a small, slow batch. Views already attempted (found
// or not) are tracked in source-link-backfill-manifest.json and skipped on
// future runs; add a name to source-link-backfill-request.json to force a
// retry.
//
// Usage:
//   node scripts/backfill_source_links.mjs                # small batch, in priority order
//   node scripts/backfill_source_links.mjs --limit 10
//   node scripts/backfill_source_links.mjs --dry-run
//   node scripts/backfill_source_links.mjs --github-token <token>

import fs from 'node:fs/promises';
import path from 'node:path';
import { fetchViewDDL } from '../src/fetcher.mjs';
import { listViewFiles, findExistingView } from './lib/view-files.mjs';
import { readJson, writeJson } from './lib/json-file.mjs';
import { runPool } from './lib/concurrency.mjs';

const DATA_DIR = '.';
const VIEWS_DIR = path.join(DATA_DIR, 'views');
const MANIFEST_FILE = path.join(DATA_DIR, 'source-link-backfill-manifest.json');
const REQUEST_FILE = path.join(DATA_DIR, 'source-link-backfill-request.json');

function parseArgs() {
  const args = process.argv.slice(2);
  // Small and slow on purpose — this hits GitHub's Code Search API, which is
  // rate-limited much more tightly than plain REST calls.
  const opts = { limit: 10, delayMs: 2000, dryRun: false, githubToken: '' };
  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case '--limit': opts.limit = parseInt(args[++i], 10) || 0; break;
      case '--delay-ms': opts.delayMs = parseInt(args[++i], 10) || 0; break;
      case '--dry-run': opts.dryRun = true; break;
      case '--github-token': opts.githubToken = args[++i] || ''; break;
      case '--help': case '-h':
        console.log('Usage: node scripts/backfill_source_links.mjs [--limit N] [--delay-ms N] [--dry-run] [--github-token TOKEN]');
        process.exit(0);
      default:
        console.error(`Unknown option: ${args[i]}`);
        process.exit(1);
    }
  }
  return opts;
}

function normalize(text) {
  return (text || '').replace(/\s+/g, ' ').trim();
}

/** Scan local view files (concurrently — there are thousands) for DDL-sourced entries with no source_url yet. */
async function scanLocalCandidates(manifest) {
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
    const hasSourceAvailable = /^source_available:\s*true\s*$/m.test(content);
    const hasSourceUrl = /^source_url:/m.test(content);
    return hasSourceAvailable && !hasSourceUrl ? { name, content, filePath } : null;
  });
  return results.filter(Boolean);
}

/** Build the prioritized work queue: requested > backfill (discovered by the scan). */
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

  const candidates = await scanLocalCandidates(manifest);
  for (const c of candidates) {
    if (seen.has(c.name)) continue;
    seen.add(c.name);
    queue.push({ name: c.name, reason: 'backfill', content: c.content, filePath: c.filePath });
  }

  return { queue, manifest, requests };
}

function extractStoredDdl(content) {
  const match = /```abap\n([\s\S]*?)```/.exec(content);
  return match ? match[1] : '';
}

function patchFrontmatterAndSource(content, url, confidence) {
  const linkLabel = confidence === 'exact'
    ? 'Source'
    : 'Possible source (unverified — content differs; may be a newer/older revision or a same-named view in a different repo)';

  let patched = content;
  if (/^source_available:/m.test(patched)) {
    patched = patched.replace(/^(source_available:.*)$/m, `$1\nsource_url: ${url}`);
  } else {
    patched = patched.replace(/^(release_state:.*)$/m, `$1\nsource_url: ${url}`);
  }

  patched = patched.replace(
    /^## Source Code\s*$/m,
    `## Source Code\n\n*${linkLabel}: [${url}](${url})*`
  );

  return patched;
}

async function processItem(item, opts, manifest, stats) {
  const { name, reason } = item;
  // 'backfill' items already carry the path the scan found them at;
  // 'requested' items (from source-link-backfill-request.json, bare names
  // only) need a lookup — by name anywhere in the tree, not a flat guess.
  let outputFile = item.filePath || await findExistingView(VIEWS_DIR, name);

  let content = item.content;
  if (!content) {
    if (!outputFile) {
      console.warn(`   ⚠️  ${name} (${reason}): file not found locally, skipping`);
      stats.skipped++;
      return;
    }
    try {
      content = await fs.readFile(outputFile, 'utf-8');
    } catch {
      console.warn(`   ⚠️  ${name} (${reason}): file not found locally, skipping`);
      stats.skipped++;
      return;
    }
  }

  if (!/^source_available:\s*true\s*$/m.test(content) || /^source_url:/m.test(content)) {
    console.log(`   ⏭️  ${name} (${reason}): no DDL to link, or already has a source_url — skipping`);
    stats.skipped++;
    return;
  }

  let result;
  try {
    result = await fetchViewDDL(name, { source: 'github', githubToken: opts.githubToken });
  } catch (err) {
    manifest[name] = { attemptedAt: new Date().toISOString(), found: false, reason: err.message };
    stats.notFound++;
    console.log(`   ✗ ${name} (${reason}): no match found (${err.message})`);
    return;
  } finally {
    if (opts.delayMs > 0) await new Promise(r => setTimeout(r, opts.delayMs));
  }

  const url = result.metadata.fileUrl;
  if (!url) {
    manifest[name] = { attemptedAt: new Date().toISOString(), found: false, reason: 'no fileUrl in result' };
    stats.notFound++;
    return;
  }

  const storedDdl = extractStoredDdl(content);
  const confidence = normalize(storedDdl) === normalize(result.ddl) ? 'exact' : 'name-match-only';

  if (opts.dryRun) {
    console.log(`   📄 ${name} (${reason}): would link to ${url} (${confidence}) [dry-run]`);
    stats.previewed++;
    return;
  }

  const patched = patchFrontmatterAndSource(content, url, confidence);
  await fs.writeFile(outputFile, patched, 'utf-8');
  manifest[name] = { attemptedAt: new Date().toISOString(), found: true, url, confidence };
  console.log(`   ✅ ${name} (${reason}): linked to ${url} (${confidence})`);
  stats[confidence === 'exact' ? 'linkedExact' : 'linkedPartial']++;
}

async function main() {
  const opts = parseArgs();

  console.log('📋 Scanning for DDL-sourced views with no recorded source link...');
  const { queue, manifest, requests } = await buildWorkQueue();
  const counts = queue.reduce((acc, i) => ((acc[i.reason] = (acc[i.reason] || 0) + 1), acc), {});
  console.log(`   ${queue.length} candidate(s) — requested: ${counts.requested || 0}, backfill: ${counts.backfill || 0}`);

  let items = queue;
  if (opts.limit > 0 && items.length > opts.limit) {
    console.log(`   Capping this run to ${opts.limit} (re-run to continue — GitHub's code-search API is strictly rate-limited, so batches stay small)`);
    items = items.slice(0, opts.limit);
  }

  if (items.length === 0) {
    console.log('Nothing to do.');
    return;
  }

  const stats = { linkedExact: 0, linkedPartial: 0, notFound: 0, skipped: 0, previewed: 0, total: items.length };
  const resolvedRequests = new Set();

  for (const item of items) {
    await processItem(item, opts, manifest, stats);
    if (manifest[item.name]?.found && !opts.dryRun) resolvedRequests.add(item.name);
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
  console.log(`   Total checked:      ${stats.total}`);
  console.log(`   Linked (exact):     ${stats.linkedExact}`);
  console.log(`   Linked (name-only): ${stats.linkedPartial}`);
  console.log(`   Not found:          ${stats.notFound}`);
  if (stats.skipped) console.log(`   Skipped:            ${stats.skipped}`);
  if (stats.previewed) console.log(`   Previewed:          ${stats.previewed}`);
  console.log('✅ Done!\n');
}

main().catch(err => {
  console.error(`❌ Error: ${err.message}`);
  process.exit(1);
});
