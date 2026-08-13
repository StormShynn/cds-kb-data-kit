#!/usr/bin/env node
// scripts/pull-query-shapes.mjs
// Pull aggregated anonymous query-shape totals from the usage-collector Worker
// (POST /ping-shapes → GET /shape-totals) into index/query-shape-stats.json.
//
// Shapes never include WHERE literals, titles, contributors, or raw notes —
// only view names, select field counts/hashes, and clause flags.
//
// Usage:
//   CDS_KB_USAGE_ENDPOINT=https://.../shape-totals CDS_KB_USAGE_PULL_TOKEN=xxx \
//     node scripts/pull-query-shapes.mjs
//
// If CDS_KB_USAGE_ENDPOINT points at /totals, this script rewrites the path
// to /shape-totals automatically.

import fs from 'node:fs/promises';
import path from 'node:path';

const DATA_DIR = '.';
const ENDPOINT = process.env.CDS_KB_USAGE_ENDPOINT || '';
const TOKEN = process.env.CDS_KB_USAGE_PULL_TOKEN || '';

async function main() {
  if (!ENDPOINT) {
    console.log('ℹ️  CDS_KB_USAGE_ENDPOINT not set — shape telemetry not configured, nothing to pull.');
    return;
  }

  const url = new URL(ENDPOINT);
  if (url.pathname.endsWith('/totals')) {
    url.pathname = url.pathname.replace(/\/totals$/, '/shape-totals');
  } else if (!url.pathname.endsWith('/shape-totals')) {
    url.pathname = url.pathname.replace(/\/?$/, '/') + 'shape-totals';
  }
  if (TOKEN) url.searchParams.set('token', TOKEN);

  console.log(`📡 Pulling shape totals from ${url.origin}${url.pathname}...`);
  const resp = await fetch(url, { signal: AbortSignal.timeout(20000) });
  if (!resp.ok) {
    throw new Error(`Pull failed (${resp.status}): ${await resp.text().catch(() => '')}`);
  }
  const shapes = await resp.json();

  const output = {
    fetchedAt: new Date().toISOString(),
    shapeCount: Object.keys(shapes).length,
    totalPings: Object.values(shapes).reduce((a, b) => a + (Number(b?.count) || 0), 0),
    shapes,
  };

  const outFile = path.join(DATA_DIR, 'index', 'query-shape-stats.json');
  await fs.writeFile(outFile, JSON.stringify(output, null, 2) + '\n', 'utf8');
  console.log(`✅ Wrote ${outFile} (${output.shapeCount} shape(s), ${output.totalPings} total ping(s))`);
}

main().catch((err) => {
  console.error(`❌ Error: ${err.message}`);
  process.exit(1);
});
