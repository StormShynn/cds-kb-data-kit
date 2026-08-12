#!/usr/bin/env node
// scripts/backfill-atc-state.mjs
// One-time (re-runnable, idempotent) backfill: stamps atc_state (+
// atc_successor when SAP names one) onto every existing view .md's
// frontmatter from SAP's own ABAP Cloud released-objects list
// (scripts/lib/hub-extensibility.mjs's fetchAtcReleaseMap — the same public
// dataset ATC/Clean Core checks use). This is a THIRD, independent signal
// from release_state and dev_ext_status — see
// docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md.
// Unlike the Hub's extensibility catalog, this dataset also names a concrete
// successor object when one deprecates/replaces another (e.g. I_COSTELEMENT
// -> notToBeReleased, successor I_GLACCOUNT) — a genuinely actionable
// "use this instead" pointer this KB previously discarded.
//
// Surgical: inserts/updates only the `atc_state: ...` / `atc_successor: ...`
// frontmatter lines (right after dev_ext_status, or release_state if
// dev_ext_status is absent) — everything else in the file is copied through
// byte-for-byte. A view with no entry in SAP's dataset (~7,566 DDLS entries
// total — much smaller than the ~19k extensibility catalog) is left
// untouched: absence means "unknown", never "released" or "deprecated".
//
// Usage:
//   node scripts/backfill-atc-state.mjs [dataDir] [--dry-run] [--limit N]

import fs from 'node:fs/promises';
import path from 'node:path';
import { listViewFiles } from './lib/view-files.mjs';
import { runPool } from './lib/concurrency.mjs';
import { fetchAtcReleaseMap } from './lib/hub-extensibility.mjs';

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
const DEV_EXT_LINE_RE = /^dev_ext_status:.*$/m;
const ATC_STATE_LINE_RE = /^atc_state:\s*(.+)$/m;
const ATC_SUCCESSOR_LINE_RE = /^atc_successor:\s*(.+)$/m;

/** Returns the updated file content, or null if no change is needed. */
function applyAtcFields(content, state, successor) {
  let updated = content;
  let changed = false;
  const nl = content.includes('\r\n') ? '\r\n' : '\n';
  const insertAfterRe = DEV_EXT_LINE_RE.test(content) ? DEV_EXT_LINE_RE : REL_STATE_LINE_RE;

  const stateMatch = updated.match(ATC_STATE_LINE_RE);
  if (stateMatch) {
    if (stateMatch[1].trim() !== state) {
      updated = updated.replace(ATC_STATE_LINE_RE, () => `atc_state: ${state}`);
      changed = true;
    }
  } else if (insertAfterRe.test(updated)) {
    updated = updated.replace(insertAfterRe, (line) => `${line}${nl}atc_state: ${state}`);
    changed = true;
  } else {
    return null; // no release_state line at all — not a view file we recognize
  }

  if (successor) {
    const succMatch = updated.match(ATC_SUCCESSOR_LINE_RE);
    if (succMatch) {
      if (succMatch[1].trim() !== successor) {
        updated = updated.replace(ATC_SUCCESSOR_LINE_RE, () => `atc_successor: ${successor}`);
        changed = true;
      }
    } else {
      updated = updated.replace(ATC_STATE_LINE_RE, (line) => `${line}${nl}atc_successor: ${successor}`);
      changed = true;
    }
  }

  return changed ? updated : null;
}

async function main() {
  const opts = parseArgs();
  const viewsDir = path.join(opts.dataDir, 'views');

  console.log('📡 Fetching ATC released-objects list from SAP...');
  const atcMap = await fetchAtcReleaseMap();
  console.log(`   ${atcMap.size} DDLS (CDS view) entries with a known ATC state`);
  if (atcMap.size === 0) {
    console.error('❌ ATC released-objects fetch returned nothing — aborting rather than writing no-op files.');
    process.exit(1);
  }

  let files = await listViewFiles(viewsDir);
  if (opts.limit > 0) files = files.slice(0, opts.limit);
  console.log(`📋 Checking ${files.length} view file(s)...`);

  const stats = { released: 0, deprecated: 0, notToBeReleased: 0, withSuccessor: 0, unchanged: 0, noData: 0, changed: 0, errors: 0 };

  await runPool(files, 32, async ({ name, relPath }) => {
    const filePath = path.join(viewsDir, ...relPath.split('/'));
    const entry = atcMap.get(name);
    if (!entry) {
      stats.noData++;
      return;
    }
    const { state, successor } = entry;
    if (state === 'released') stats.released++;
    else if (state === 'deprecated') stats.deprecated++;
    else if (state === 'notToBeReleased') stats.notToBeReleased++;
    if (successor) stats.withSuccessor++;

    try {
      const content = await fs.readFile(filePath, 'utf-8');
      const updated = applyAtcFields(content, state, successor);
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
  console.log(`   In ATC dataset: released=${stats.released}, deprecated=${stats.deprecated}, notToBeReleased=${stats.notToBeReleased} (${stats.withSuccessor} with a named successor)`);
  console.log(`   No entry in ATC dataset (left untouched): ${stats.noData}`);
  console.log(`   Files ${opts.dryRun ? 'that would be' : ''} changed: ${stats.changed}`);
  console.log(`   Already correct: ${stats.unchanged}`);
  if (stats.errors) console.log(`   Errors: ${stats.errors}`);
  console.log(opts.dryRun ? '✅ Dry-run done — nothing written.\n' : '✅ Done!\n');
}

main().catch((err) => {
  console.error(`❌ Error: ${err.message}`);
  process.exit(1);
});
