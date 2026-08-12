#!/usr/bin/env node
// scripts/backfill-extensibility-signals.mjs
// One-time (re-runnable, idempotent) backfill for the three Hub
// extensibility signals that sit alongside dev_ext_status but were never
// captured before: ReleaseStateKeyUserExtensibility (key_user_ext_status),
// ExtensibleWithKeyUserExtensibility (extensible_key_user), and
// ExtensibleWithDeveloperExtensibility (extensible_dev_ext) — all fetched in
// the same Hub call as dev_ext_status (scripts/lib/hub-extensibility.mjs).
// See that file's header and
// docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md
// for what each one actually answers — they are NOT interchangeable with
// dev_ext_status or with each other.
//
// Unlike the original scripts/backfill-dev-ext-status.mjs (frontmatter-only,
// "everything else copied byte-for-byte" — which left the property-table row
// template.mjs already knew how to render missing from all 8,700 files it
// touched until scripts/backfill-dev-ext-status-row.mjs retrofitted it), this
// script writes BOTH the frontmatter line(s) AND the matching property-table
// row(s) in the same pass, so no view is ever left with the signal in
// frontmatter but invisible in the rendered body.
//
// Surgical: only inserts the specific frontmatter lines / table rows that are
// missing; a file already fully up to date for all three signals is skipped
// untouched. A view with no entry in the Hub's extensibility catalog (or
// whose entry has none of these three fields) is left alone — absence means
// "unknown", never a guessed negative.
//
// Usage:
//   node scripts/backfill-extensibility-signals.mjs [dataDir] [--dry-run] [--limit N]

import fs from 'node:fs/promises';
import path from 'node:path';
import { listViewFiles } from './lib/view-files.mjs';
import { runPool } from './lib/concurrency.mjs';
import { fetchExtensibilityMap, normalizeDevExtStatus, normalizeYesNo } from './lib/hub-extensibility.mjs';
import { keyUserExtStatusLabel, extensibleLabel } from '../src/template.mjs';

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

const DEV_EXT_LINE_RE = /^dev_ext_status:.*$/m;
const RELEASE_STATE_LINE_RE = /^release_state:.*$/m;
const DEV_EXT_ROW_RE = /^\| Release State \(Developer Extensibility\) \|.*\|[ \t]*$/m;
const RELEASE_STATE_ROW_RE = /^\| Release State \|.*\|[ \t]*$/m;

// Each entry: [frontmatter key, fm line-regex, row marker, row builder].
// Order matches template.mjs's renderPropertyTable exactly (key user ext
// status, then the two "extensible" flags) so a freshly-backfilled file's
// body reads identically to one rendered fresh from viewData.
const SIGNALS = [
  {
    fmKey: 'key_user_ext_status',
    fmLineRe: /^key_user_ext_status:.*$/m,
    rowMarker: 'Release State (Key User Extensibility)',
    normalize: normalizeDevExtStatus,
    buildRow: (label) =>
      `| Release State (Key User Extensibility) | ${label} — can this entity be used as a data source when building a new ` +
      `custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |`,
    label: keyUserExtStatusLabel,
    rawKey: 'keyUserExt',
  },
  {
    fmKey: 'extensible_key_user',
    fmLineRe: /^extensible_key_user:.*$/m,
    rowMarker: 'Extensible (Key User Extensibility)',
    normalize: normalizeYesNo,
    buildRow: (label) =>
      `| Extensible (Key User Extensibility) | ${label} — can custom fields be added directly to THIS entity itself via Key ` +
      `User Extensibility (a different question from "used as a data source" above) |`,
    label: extensibleLabel,
    rawKey: 'extensibleKeyUser',
  },
  {
    fmKey: 'extensible_dev_ext',
    fmLineRe: /^extensible_dev_ext:.*$/m,
    rowMarker: 'Extensible (Developer Extensibility)',
    normalize: normalizeYesNo,
    buildRow: (label) =>
      `| Extensible (Developer Extensibility) | ${label} — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |`,
    label: extensibleLabel,
    rawKey: 'extensibleDevExt',
  },
];

/**
 * Returns updated content, or null if nothing changed for this file.
 *
 * Two sequential phases (frontmatter, then property table), each with its
 * OWN running insertion point advanced after each line/row actually
 * inserted — not a fresh regex search against the same fixed anchor for
 * every signal, which would insert each new line/row right after that same
 * anchor and come out in reverse SIGNALS order. The property-table phase
 * re-matches its anchor against the already-frontmatter-updated string, so
 * it never needs to account for how much the frontmatter block grew.
 */
function applySignals(content, hubRow) {
  if (!hubRow) return null;
  const nl = content.includes('\r\n') ? '\r\n' : '\n';
  let updated = content;
  let changed = false;

  // Phase 1: frontmatter lines.
  const fmAnchor = updated.match(DEV_EXT_LINE_RE) || updated.match(RELEASE_STATE_LINE_RE);
  let fmInsertAt = fmAnchor ? fmAnchor.index + fmAnchor[0].length : null;
  for (const sig of SIGNALS) {
    const value = sig.normalize(hubRow[sig.rawKey]);
    if (!value) continue; // no signal for this axis — leave untouched
    if (sig.fmLineRe.test(updated)) {
      const existingVal = updated.match(sig.fmLineRe)[0].split(':').slice(1).join(':').trim();
      if (existingVal !== value) {
        updated = updated.replace(sig.fmLineRe, `${sig.fmKey}: ${value}`);
        changed = true;
      }
    } else if (fmInsertAt != null) {
      const inserted = nl + `${sig.fmKey}: ${value}`;
      updated = updated.slice(0, fmInsertAt) + inserted + updated.slice(fmInsertAt);
      fmInsertAt += inserted.length;
      changed = true;
    }
  }

  // Phase 2: property-table rows — anchor re-matched against `updated` as it
  // now stands (post-frontmatter), so no manual offset bookkeeping needed.
  const rowAnchor = updated.match(DEV_EXT_ROW_RE) || updated.match(RELEASE_STATE_ROW_RE);
  let rowInsertAt = rowAnchor ? rowAnchor.index + rowAnchor[0].length : null;
  for (const sig of SIGNALS) {
    const value = sig.normalize(hubRow[sig.rawKey]);
    if (!value || updated.includes(sig.rowMarker) || rowInsertAt == null) continue;
    const inserted = nl + sig.buildRow(sig.label(value));
    updated = updated.slice(0, rowInsertAt) + inserted + updated.slice(rowInsertAt);
    rowInsertAt += inserted.length;
    changed = true;
  }

  return changed ? updated : null;
}

async function main() {
  const opts = parseArgs();
  const viewsDir = path.join(opts.dataDir, 'views');

  console.log('📡 Fetching extensibility catalog from SAP Hub...');
  const extMap = await fetchExtensibilityMap();
  console.log(`   ${extMap.size} view(s) with at least one known extensibility signal`);
  if (extMap.size === 0) {
    console.error('❌ Extensibility catalog fetch returned nothing — aborting rather than writing no-op files.');
    process.exit(1);
  }

  let files = await listViewFiles(viewsDir);
  if (opts.limit > 0) files = files.slice(0, opts.limit);
  console.log(`📋 Checking ${files.length} view file(s)...`);

  const stats = { changed: 0, unchanged: 0, noData: 0, errors: 0 };

  await runPool(files, 32, async ({ name, relPath }) => {
    const hubRow = extMap.get(name);
    if (!hubRow) {
      stats.noData++;
      return;
    }
    const filePath = path.join(viewsDir, ...relPath.split('/'));
    try {
      const content = await fs.readFile(filePath, 'utf-8');
      const updated = applySignals(content, hubRow);
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
  console.log(`   Files ${opts.dryRun ? 'that would be' : ''} changed: ${stats.changed}`);
  console.log(`   Already up to date: ${stats.unchanged}`);
  console.log(`   No matching Hub entry (left untouched): ${stats.noData}`);
  if (stats.errors) console.log(`   Errors: ${stats.errors}`);
  console.log(opts.dryRun ? '✅ Dry-run done — nothing written.\n' : '✅ Done!\n');
}

main().catch((err) => {
  console.error(`❌ Error: ${err.message}`);
  process.exit(1);
});
