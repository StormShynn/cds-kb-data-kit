#!/usr/bin/env node
// scripts/migrate-to-module-folders.mjs
// Reconcile every views/**/<NAME>.md against the folder it SHOULD be in per
// resolveViewFolder() (module by app_component, or _UNVERIFIED for
// release_state: unverified) — moves any file that's in the wrong place.
// Safe to re-run any time the folder rule changes; a no-op when everything's
// already correctly placed.
//
// Usage:
//   node scripts/migrate-to-module-folders.mjs [dataDir] [--dry-run]

import fs from 'node:fs/promises';
import path from 'node:path';
import { listViewFiles, resolveViewFolder } from './lib/view-files.mjs';
import { extractFrontmatter, scalar } from './lib/frontmatter.mjs';

const args = process.argv.slice(2);
const DATA_DIR = args[0] && !args[0].startsWith('--') ? args[0] : '.';
const DRY_RUN = args.includes('--dry-run');
const VIEWS_DIR = path.join(DATA_DIR, 'views');

async function main() {
  const files = await listViewFiles(VIEWS_DIR);
  console.log(`Found ${files.length} view file(s) under ${VIEWS_DIR}`);

  const perFolder = {};
  let moved = 0, correct = 0, errors = 0;

  for (const { name, relPath } of files) {
    const fromPath = path.join(VIEWS_DIR, ...relPath.split('/'));
    let content;
    try {
      content = await fs.readFile(fromPath, 'utf-8');
    } catch (e) {
      console.error(`❌ ${name}: cannot read (${e.message})`);
      errors++;
      continue;
    }

    const fm = extractFrontmatter(content);
    const appComponent = scalar(fm, 'app_component');
    const releaseState = scalar(fm, 'release_state');
    const folder = resolveViewFolder(appComponent, releaseState);
    const lastSlash = relPath.lastIndexOf('/');
    const currentFolder = lastSlash === -1 ? '' : relPath.slice(0, lastSlash);

    perFolder[folder] = (perFolder[folder] || 0) + 1;

    if (currentFolder === folder) {
      correct++;
      continue;
    }

    const toPath = path.join(VIEWS_DIR, folder, `${name}.md`);
    console.log(`${DRY_RUN ? '[dry-run] would move' : 'moving'} ${name}: ${currentFolder || '(flat)'} -> ${folder}`);

    if (DRY_RUN) {
      moved++;
      continue;
    }

    try {
      await fs.mkdir(path.join(VIEWS_DIR, folder), { recursive: true });
      await fs.rename(fromPath, toPath);
      moved++;
    } catch (e) {
      console.error(`❌ ${name}: move failed (${e.message})`);
      errors++;
    }
  }

  console.log(`\n${DRY_RUN ? '[dry-run] Would move' : 'Moved'} ${moved} file(s), ${correct} already correct, ${errors} error(s).`);
  console.log('\nPer-folder breakdown (target state):');
  for (const [folder, count] of Object.entries(perFolder).sort((a, b) => b[1] - a[1])) {
    console.log(`  ${folder.padEnd(12)} ${count}`);
  }
}

main().catch((e) => {
  console.error('❌ Fatal:', e.message);
  process.exit(1);
});
