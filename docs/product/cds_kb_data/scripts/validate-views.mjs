#!/usr/bin/env node
// scripts/validate-views.mjs — structural sanity check over every view .md.
//
// Run on every PR (see .github/workflows/ci.yml) so the daily-fetch /
// hub-metadata-fetch / enrich-descriptions PRs can't merge files that would
// break a consumer: missing frontmatter keys, a filename that doesn't match
// its `name:`, a duplicate name in two folders, or source_available claims
// that contradict what's actually in the file.
//
// Usage: node scripts/validate-views.mjs [dataDir]

import fs from 'node:fs/promises';
import path from 'node:path';
import { listViewFiles } from './lib/view-files.mjs';
import { extractFrontmatter, scalar } from './lib/frontmatter.mjs';

const DATA_DIR = process.argv[2] || '.';
const VIEWS_DIR = path.join(DATA_DIR, 'views');

const errors = [];
const warnings = [];
const seenNames = new Map(); // NAME -> first relPath (for duplicate detection)

const files = await listViewFiles(VIEWS_DIR);
console.log(`Validating ${files.length} view file(s)...`);

for (const { name, relPath } of files) {
  const abs = path.join(VIEWS_DIR, ...relPath.split('/'));
  const content = await fs.readFile(abs, 'utf-8');

  const fm = extractFrontmatter(content);
  if (!fm) {
    errors.push(`${relPath}: missing YAML frontmatter block`);
    continue;
  }

  const fmName = scalar(fm, 'name');
  if (!fmName) errors.push(`${relPath}: missing name:`);
  else {
    // Namespaced views carry their namespace as a slash in frontmatter
    // ("/DCO/I_CUSTOMER") and the file system has no slashes in a filename,
    // so the convention here is `_` in the file name ("DCO_I_CUSTOMER").
    // Normalize before comparing, and only flag a real mismatch.
    const fmNormalized = fmName.replace(/^\//, '').replace(/\//g, '_').toUpperCase();
    if (fmNormalized !== name) {
      errors.push(`${relPath}: frontmatter name "${fmName}" does not match filename "${name}"`);
    }
  }

  const seenBefore = seenNames.get(name);
  if (seenBefore) errors.push(`${relPath}: duplicate view name "${name}" (also at ${seenBefore})`);
  else seenNames.set(name, relPath);

  if (!scalar(fm, 'description')) warnings.push(`${relPath}: missing description:`);
  const releaseState = scalar(fm, 'release_state');
  if (releaseState && !['released', 'deprecated', 'not_released', 'restricted', 'unverified'].includes(releaseState)) {
    warnings.push(`${relPath}: unusual release_state "${releaseState}"`);
  }

  const sourceAvailable = scalar(fm, 'source_available');
  const hasSourceBlock = /^## Source Code$/m.test(content);
  if (sourceAvailable === 'true' && !hasSourceBlock) {
    warnings.push(`${relPath}: source_available: true but no "## Source Code" section`);
  } else if (sourceAvailable === 'false' && hasSourceBlock) {
    warnings.push(`${relPath}: source_available: false but a "## Source Code" section exists`);
  }
}

if (warnings.length) {
  console.log(`\n⚠️  ${warnings.length} warning(s):`);
  for (const w of warnings.slice(0, 20)) console.log(`  ${w}`);
  if (warnings.length > 20) console.log(`  … and ${warnings.length - 20} more`);
}

if (errors.length) {
  console.error(`\n❌ ${errors.length} error(s):`);
  for (const e of errors.slice(0, 30)) console.error(`  ${e}`);
  if (errors.length > 30) console.error(`  … and ${errors.length - 30} more`);
  process.exit(1);
}

console.log(`\n✅ ${files.length} view file(s) OK (${warnings.length} warning(s)).`);
