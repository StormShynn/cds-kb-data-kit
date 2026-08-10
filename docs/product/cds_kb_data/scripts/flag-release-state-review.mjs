#!/usr/bin/env node
// scripts/flag-release-state-review.mjs
//
// Cross-checks every local view currently tagged `release_state: released`
// against SAP Business Accelerator Hub's own live RELEASED-view list (the
// same data check-coverage.mjs already fetches every 6h into coverage.json —
// see report.extra there) and flags the ones the Hub doesn't currently
// confirm.
//
// Why this exists: most views were added via a path that defaults
// `release_state` straight to 'released' with no automatic SAP-side check
// (see batch_add.mjs's --list/--dir entries, or an explicit --app-component
// flag) — only the Hub-catalog-fetch path (add_hub_metadata.mjs) is
// "SAP-confirmed, not a guess". This script closes that gap: it doesn't
// re-fetch the Hub itself (coverage.json is already refreshed 6-hourly by
// check-coverage.yml), it just re-slices that same data for this specific
// question.
//
// Deliberately read-only: it never edits any view .md file or flips
// release_state itself. The Hub's artifact list only reflects the current
// moment — a view genuinely released in the past can disappear from it
// (deprecated, renamed, moved to a different container) without ever having
// been wrong, so "not on the Hub's list right now" is a signal for a human
// to look at, not grounds to auto-relabel as unverified.
//
// Usage:
//   node scripts/flag-release-state-review.mjs [dataDir]

import path from 'node:path';
import { readJson, writeJson } from './lib/json-file.mjs';

const DATA_DIR = process.argv[2] || '.';

async function main() {
  const report = await readJson(path.join(DATA_DIR, 'coverage.json'), null);
  if (!report) {
    console.error('❌ coverage.json not found — run `npm run check-coverage` first.');
    process.exit(1);
  }

  const viewPaths = await readJson(path.join(DATA_DIR, 'index', 'view-paths.json'), {});

  const candidates = (report.extra || [])
    .filter((e) => e.releaseState === 'released')
    .map((e) => ({
      name: e.name,
      path: viewPaths[e.name] || null,
      appComponent: e.appComponent || '',
      description: e.description || '',
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

  const output = {
    generatedAt: new Date().toISOString(),
    coverageGeneratedAt: report.generatedAt,
    hubContainer: report.hubContainer,
    note:
      "Locally tagged release_state: released, but not on the Hub's current " +
      'RELEASED list for this container as of coverageGeneratedAt. Not proof ' +
      "the view is wrong — the Hub reflects the current moment only (deprecated/" +
      'renamed/different-container views drop off it too) — needs a human look, ' +
      'not an automatic relabel. release_state is left untouched by this script.',
    totalCandidates: candidates.length,
    candidates,
  };

  const outFile = path.join(DATA_DIR, 'release-state-review.json');
  await writeJson(outFile, output);

  console.log(`📡 Hub snapshot used: coverage.json generated ${report.generatedAt}`);
  console.log(`📂 Local views tagged released but not on Hub's current list: ${candidates.length}`);
  console.log(`📝 Written to ${outFile}`);
}

main().catch((err) => {
  console.error(`❌ Error: ${err.message}`);
  process.exit(1);
});
