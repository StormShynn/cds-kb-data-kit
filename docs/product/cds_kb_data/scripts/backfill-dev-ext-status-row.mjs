#!/usr/bin/env node
// scripts/backfill-dev-ext-status-row.mjs
// Companion to backfill-dev-ext-status.mjs. That script stamped
// `dev_ext_status` into frontmatter only — by design "surgical": everything
// else in the file, including the property table, was "copied through
// byte-for-byte". That left the "Release State (Developer Extensibility)"
// row template.mjs's renderPropertyTable already knows how to render (see
// devExtStatusLabel there) missing from all 8,700 already-stamped view docs:
// dev_ext_status was machine-readable (search index, cds_kb_mcp's
// releaseSignalWarnings) but invisible to a human just reading the .md file.
// See docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md
// for why that row matters.
//
// Idempotent: skips any file that already has the
// "Release State (Developer Extensibility)" row.
//
// Usage:
//   node scripts/backfill-dev-ext-status-row.mjs [dataDir] [--dry-run] [--limit N]

import fs from 'node:fs/promises';
import path from 'node:path';
import { listViewFiles } from './lib/view-files.mjs';
import { runPool } from './lib/concurrency.mjs';
import { devExtStatusLabel } from '../src/template.mjs';

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

const FM_RE = /^---\r?\n([\s\S]*?)\r?\n---/;
const DEV_EXT_FM_RE = /^dev_ext_status:\s*(.+)$/m;
const RELEASE_STATE_ROW_RE = /^\| Release State \|.*\|[ \t]*$/m;
const DEV_EXT_ROW_MARKER = 'Release State (Developer Extensibility)';

// Same absolute GitHub URL as template.mjs's renderPropertyTable — kept in
// sync manually since that string lives inline there, not exported.
const HOOK_URL =
  'https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md';

/** Returns the updated file content, or null if no change is needed. */
function insertDevExtRow(content) {
  if (content.includes(DEV_EXT_ROW_MARKER)) return null; // already has it
  const fmMatch = content.match(FM_RE);
  if (!fmMatch) return null;
  const devExtMatch = fmMatch[1].match(DEV_EXT_FM_RE);
  if (!devExtMatch) return null; // no signal for this view — leave untouched
  const label = devExtStatusLabel(devExtMatch[1].trim());
  if (!label) return null;

  const rowLineMatch = content.match(RELEASE_STATE_ROW_RE);
  if (!rowLineMatch) return null; // no property table to anchor on
  const nl = content.includes('\r\n') ? '\r\n' : '\n';
  const newRow =
    `| Release State (Developer Extensibility) | ${label} — separate from "Release State" above; see ` +
    `[dev-ext check procedure](${HOOK_URL}) before \`association to\`/\`select from\` this entity in custom ` +
    `ABAP Developer Extensibility CDS views |`;
  const insertAt = rowLineMatch.index + rowLineMatch[0].length;
  return content.slice(0, insertAt) + nl + newRow + content.slice(insertAt);
}

async function main() {
  const opts = parseArgs();
  const viewsDir = path.join(opts.dataDir, 'views');

  let files = await listViewFiles(viewsDir);
  if (opts.limit > 0) files = files.slice(0, opts.limit);
  console.log(`📋 Checking ${files.length} view file(s)...`);

  const stats = { changed: 0, alreadyHasRow: 0, noSignal: 0, errors: 0 };

  await runPool(files, 32, async ({ relPath }) => {
    const filePath = path.join(viewsDir, ...relPath.split('/'));
    try {
      const content = await fs.readFile(filePath, 'utf-8');
      const updated = insertDevExtRow(content);
      if (updated === null) {
        if (content.includes(DEV_EXT_ROW_MARKER)) stats.alreadyHasRow++;
        else stats.noSignal++;
        return;
      }
      stats.changed++;
      if (!opts.dryRun) {
        await fs.writeFile(filePath, updated, 'utf-8');
      }
    } catch (e) {
      stats.errors++;
      console.error(`   ❌ ${relPath}: ${e.message}`);
    }
  });

  console.log('\n' + '═'.repeat(50));
  console.log('📊 Summary:');
  console.log(`   Files ${opts.dryRun ? 'that would be' : ''} changed: ${stats.changed}`);
  console.log(`   Already had the row: ${stats.alreadyHasRow}`);
  console.log(`   No dev_ext_status signal (skipped): ${stats.noSignal}`);
  if (stats.errors) console.log(`   Errors: ${stats.errors}`);
  console.log(opts.dryRun ? '✅ Dry-run done — nothing written.\n' : '✅ Done!\n');
}

main().catch((err) => {
  console.error(`❌ Error: ${err.message}`);
  process.exit(1);
});
