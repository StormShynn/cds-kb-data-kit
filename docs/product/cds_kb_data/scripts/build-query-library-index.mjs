#!/usr/bin/env node
// scripts/build-query-library-index.mjs
// Build lightweight index/query-library-index.json from query-library.json.
// Validates ids, recipe/variant links, and near-duplicate fingerprints.

import fs from 'node:fs/promises';
import path from 'node:path';
import { buildLibraryIndex } from './lib/query-library.mjs';

const DATA_DIR = '.';
const LIB = path.join(DATA_DIR, 'index', 'query-library.json');
const OUT = path.join(DATA_DIR, 'index', 'query-library-index.json');

async function main() {
  const library = JSON.parse(await fs.readFile(LIB, 'utf8'));
  if (!Array.isArray(library)) throw new Error('query-library.json must be an array');

  const index = buildLibraryIndex(library);
  const { warnings, ...payload } = index;
  payload.generatedAt = new Date().toISOString();

  await fs.writeFile(OUT, JSON.stringify(payload, null, 2) + '\n', 'utf8');
  console.log(`✅ Wrote ${OUT} (${payload.count} entries)`);
  for (const w of warnings) console.warn(`⚠ ${w}`);
  if (warnings.some((w) => /duplicate id|missing recipe|points at another variant/.test(w))) {
    process.exitCode = 1;
  }
}

main().catch((err) => {
  console.error(`❌ ${err.message}`);
  process.exit(1);
});
