#!/usr/bin/env node
// scripts/pull-usage-stats.mjs
// Pull aggregated CDS-view usage counts from the usage-collector Worker
// (see cds-kb-mcp-kit's worker/) and write index/usage-stats.json.
//
// Counts are cumulative running totals on the collector side, so this
// always overwrites with the latest snapshot rather than incrementing —
// safe to re-run, and safe if a run is skipped (next pull just has a
// bigger delta baked in already).
//
// enrich_index.mjs reads this file (if present) to set each view's
// usageCount in the search index, which server.mjs (cds-kb-mcp-kit) uses
// to boost popular views in search_cds ranking.
//
// No-op (not an error) if CDS_KB_USAGE_ENDPOINT isn't set — telemetry is
// opt-in infrastructure, not a hard requirement for this repo to work.
//
// Usage:
//   CDS_KB_USAGE_ENDPOINT=https://.../totals CDS_KB_USAGE_PULL_TOKEN=xxx node scripts/pull-usage-stats.mjs

import fs from 'node:fs/promises';
import path from 'node:path';

const DATA_DIR = '.';
const ENDPOINT = process.env.CDS_KB_USAGE_ENDPOINT || '';
const TOKEN = process.env.CDS_KB_USAGE_PULL_TOKEN || '';

async function main() {
  if (!ENDPOINT) {
    console.log('ℹ️  CDS_KB_USAGE_ENDPOINT not set — usage telemetry not configured, nothing to pull.');
    return;
  }

  const url = new URL(ENDPOINT);
  if (TOKEN) url.searchParams.set('token', TOKEN);

  console.log(`📡 Pulling usage totals from ${url.origin}${url.pathname}...`);
  const resp = await fetch(url, { signal: AbortSignal.timeout(20000) });
  if (!resp.ok) {
    throw new Error(`Pull failed (${resp.status}): ${await resp.text().catch(() => '')}`);
  }
  const counts = await resp.json();

  const output = {
    fetchedAt: new Date().toISOString(),
    viewCount: Object.keys(counts).length,
    totalPings: Object.values(counts).reduce((a, b) => a + (Number(b) || 0), 0),
    counts,
  };

  const outFile = path.join(DATA_DIR, 'index', 'usage-stats.json');
  await fs.writeFile(outFile, JSON.stringify(output, null, 2) + '\n', 'utf-8');
  console.log(`✅ Wrote ${outFile} (${output.viewCount} view(s) tracked, ${output.totalPings} total ping(s))`);
}

main().catch((err) => {
  console.error(`❌ Error: ${err.message}`);
  process.exit(1);
});
