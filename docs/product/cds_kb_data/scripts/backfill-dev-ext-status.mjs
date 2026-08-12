#!/usr/bin/env node
// scripts/backfill-dev-ext-status.mjs
// One-time (re-runnable, idempotent) backfill: stamps dev_ext_status onto
// every existing view .md's frontmatter from SAP's Developer Extensibility
// catalog (scripts/lib/hub-extensibility.mjs). This KB already fetches that
// signal (check-coverage.mjs, for the coverage report / add_hub_metadata.mjs's
// missing-view queue) but, before this script, never wrote it per-view — so
// search_cds/get_cds_view had no way to answer "is this usable in a custom
// Developer Extensibility CDS view" at all. See
// docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md
// for why this is a SEPARATE axis from release_state and must never be
// conflated with it (a view can be release_state: released and
// dev_ext_status: not_released at the same time).
//
// Surgical: inserts/updates only the single `dev_ext_status: ...` frontmatter
// line (right after `release_state:`) — everything else in the file (other
// frontmatter lines, property/fields/associations tables, DDL source) is
// copied through byte-for-byte. A view with no entry in the Hub's
// extensibility catalog (~19k rows, global, not S/4HANA-Cloud-scoped) is left
// untouched — no line written, since absence means "unknown", never "not
// released", and writing a wrong negative would be worse than writing nothing.
//
// Usage:
//   node scripts/backfill-dev-ext-status.mjs [dataDir] [--dry-run] [--limit N]

import fs from 'node:fs/promises';
import path from 'node:path';
import { listViewFiles } from './lib/view-files.mjs';
import { runPool } from './lib/concurrency.mjs';
import { fetchExtensibilityMap, normalizeDevExtStatus } from './lib/hub-extensibility.mjs';

function parseArgs() {
  const args = process.argv.slice(2);
  const opts = { dataDir: '.', dryRun: false, limit: 0 };
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--dry-run') opts.dryRun = true;
    else if (args[i] === '--limit') opts.limit = parseInt(args[++i], 10) || 0;
    else if (!args[i].startsWith('--')) opts.dataDir = args[i];
  }
  return opts;
}

const REL_STATE_LINE_RE = /^release_state:.*$/m;
const DEV_EXT_LINE_RE = /^dev_ext_status:\s*(.+)$/m;

/** Returns the updated file content, or null if no change is needed. */
function applyDevExtStatus(content, value) {
  const existingMatch = content.match(DEV_EXT_LINE_RE);
  if (existingMatch) {
    if (existingMatch[1].trim() === value) return null; // already correct
    return content.replace(DEV_EXT_LINE_RE, () => `dev_ext_status: ${value}`);
  }
  if (!REL_STATE_LINE_RE.test(content)) return null; // no release_state line — not a view file we recognize
  const nl = content.includes('\r\n') ? '\r\n' : '\n';
  return content.replace(REL_STATE_LINE_RE, (line) => `${line}${nl}dev_ext_status: ${value}`);
}

async function main() {
  const opts = parseArgs();
  const viewsDir = path.join(opts.dataDir, 'views');

  console.log('📡 Fetching Developer Extensibility catalog from SAP Hub...');
  const extMap = await fetchExtensibilityMap();
  console.log(`   ${extMap.size} view(s) with a known Developer Extensibility state`);
  if (extMap.size === 0) {
    console.error('❌ Extensibility catalog fetch returned nothing — aborting rather than writing no-op files.');
    process.exit(1);
  }

  let files = await listViewFiles(viewsDir);
  if (opts.limit > 0) files = files.slice(0, opts.limit);
  console.log(`📋 Checking ${files.length} view file(s)...`);

  const stats = { released: 0, not_released: 0, unchanged: 0, noData: 0, changed: 0, errors: 0 };

  await runPool(files, 32, async ({ name, relPath }) => {
    const filePath = path.join(viewsDir, ...relPath.split('/'));
    const raw = extMap.get(name)?.devExt;
    if (raw == null) {
      stats.noData++;
      return;
    }
    const value = normalizeDevExtStatus(raw);
    if (value === 'released') stats.released++;
    else if (value === 'not_released') stats.not_released++;

    try {
      const content = await fs.readFile(filePath, 'utf-8');
      const updated = applyDevExtStatus(content, value);
      if (updated === null) {
        stats.unchanged++;
        return;
      }
      stats.changed++;
      if (!opts.dryRun) {
        await fs.writeFile(filePath, updated, 'utf-8');
      }
    } catch (e) {
      stats.errors++;
      console.error(`   ❌ ${name}: ${e.message}`);
    }
  });

  console.log('\n' + '═'.repeat(50));
  console.log('📊 Summary:');
  console.log(`   In Hub extensibility catalog: released=${stats.released}, not_released=${stats.not_released}`);
  console.log(`   No entry in Hub catalog (left untouched): ${stats.noData}`);
  console.log(`   Files ${opts.dryRun ? 'that would be' : ''} changed: ${stats.changed}`);
  console.log(`   Already correct: ${stats.unchanged}`);
  if (stats.errors) console.log(`   Errors: ${stats.errors}`);
  console.log(opts.dryRun ? '✅ Dry-run done — nothing written.\n' : '✅ Done!\n');
}

main().catch((err) => {
  console.error(`❌ Error: ${err.message}`);
  process.exit(1);
});
