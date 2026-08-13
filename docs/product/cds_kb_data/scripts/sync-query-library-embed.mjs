#!/usr/bin/env node
// scripts/sync-query-library-embed.mjs
// Hand-sync helper:
//   1) rebuild index/query-library-index.json
//   2) embed only *featured* recipes into DATA.L inside query-builder.html
//      (full library is fetched at runtime from index/query-library.json)
// Prefer this over running the stale generate-query-builder.mjs.

import fs from 'node:fs/promises';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { featuredLibraryEntries } from './lib/query-library.mjs';

const DATA_DIR = '.';
const HTML = path.join(DATA_DIR, 'query-builder.html');
const LIB = path.join(DATA_DIR, 'index', 'query-library.json');

async function main() {
  const indexBuild = spawnSync(process.execPath, ['scripts/build-query-library-index.mjs'], {
    cwd: DATA_DIR,
    encoding: 'utf8',
    stdio: 'inherit',
  });
  if (indexBuild.status !== 0) {
    throw new Error('build-query-library-index.mjs failed');
  }

  const html = await fs.readFile(HTML, 'utf8');
  const library = JSON.parse(await fs.readFile(LIB, 'utf8'));
  if (!Array.isArray(library)) throw new Error('query-library.json must be an array');

  const featured = featuredLibraryEntries(library);
  const marker = 'const DATA = ';
  const start = html.indexOf(marker);
  if (start < 0) throw new Error('DATA blob not found in query-builder.html');
  const jsonStart = start + marker.length;
  // DATA ends at the first `;\r?\n` after the JSON object (file may be CRLF).
  const afterMatch = html.slice(jsonStart).match(/;\r?\n/);
  if (!afterMatch) throw new Error('Could not find end of DATA blob');
  const after = jsonStart + afterMatch.index;

  const data = JSON.parse(html.slice(jsonStart, after));
  // Bootstrap only — Query Builder replaces SHARED by fetching the full library.
  data.L = featured;
  const embedded = JSON.stringify(data).replace(/<\/script/gi, '<\\/script');

  const libCount = library.length;
  const featuredCount = featured.length;
  const libWord = libCount === 1 ? 'y' : 'ies';
  const viewMatch = html.match(/(\d+) view\(s\) available/);
  const viewCount = viewMatch ? viewMatch[1] : '10617';
  const statsText =
    `${viewCount} view(s) available · ${libCount} saved quer${libWord} in the shared library` +
    ` (${featuredCount} featured embedded; full list loads from index/query-library.json)` +
    ` (plus anything saved locally in your browser).`;

  let next = html.slice(0, jsonStart) + embedded + html.slice(after);
  next = next.replace(
    /document\.getElementById\('statsLine'\)\.textContent = "[^"]*";/,
    `document.getElementById('statsLine').textContent = ${JSON.stringify(statsText)};`,
  );

  await fs.writeFile(HTML, next, 'utf8');
  console.log(
    `✅ Synced DATA.L (${featuredCount} featured / ${libCount} total) and statsLine in ${HTML}`,
  );
}

main().catch((err) => {
  console.error(`❌ ${err.message}`);
  process.exit(1);
});
