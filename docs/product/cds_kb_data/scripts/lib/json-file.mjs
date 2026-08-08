// scripts/lib/json-file.mjs
// Shared read/write helpers for the small JSON manifest/state files this
// repo's automation scripts keep alongside the data (hub-metadata-manifest.json,
// source-link-backfill-manifest.json, etc).

import fs from 'node:fs/promises';

/** Read and parse a JSON file, returning `fallback` if it's missing/invalid. */
export async function readJson(file, fallback) {
  try {
    return JSON.parse(await fs.readFile(file, 'utf-8'));
  } catch {
    return fallback;
  }
}

/** Write `data` as pretty-printed JSON, newline-terminated. */
export async function writeJson(file, data) {
  await fs.writeFile(file, JSON.stringify(data, null, 2) + '\n', 'utf-8');
}
