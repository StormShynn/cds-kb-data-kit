#!/usr/bin/env node
// scripts/reparse-fields.mjs
// Re-derive each view's "## Fields" / "## Associations" tables from its own
// already-stored DDL, through the current parser — no re-fetch needed, the
// DDL is already sitting right there in the file's "## Source Code" block.
//
// Written after fixing three parser.mjs bugs that had been silently
// mis-structuring the Fields table for a large share of "full DDL" views
// (fields accessed through an association alias, e.g. "_Assoc.Field", were
// dropped or collapsed the Field/Data Source columns into the same
// qualified string instead of splitting local name from source). Fixing
// the parser only changes what NEW fetches produce; this script re-applies
// it to everything already in the repo, surgically — it only touches the
// Fields/Associations sections, leaving frontmatter, the description, the
// property table, and the DDL source block itself untouched.
//
// Usage:
//   node scripts/reparse-fields.mjs [dataDir] [--dry-run] [--limit N]

import fs from 'node:fs/promises';
import path from 'node:path';
import { parseDDL, readDDLContent } from '../src/parser.mjs';
import { renderFieldsTable, renderAssociationsTable } from '../src/template.mjs';
import { listViewFiles } from './lib/view-files.mjs';

const args = process.argv.slice(2);
const DATA_DIR = args[0] && !args[0].startsWith('--') ? args[0] : '.';
const DRY_RUN = args.includes('--dry-run');
const limitIdx = args.indexOf('--limit');
const LIMIT = limitIdx !== -1 ? parseInt(args[limitIdx + 1], 10) : 0;
const VIEWS_DIR = path.join(DATA_DIR, 'views');

// Splits the file into [head, tail] at the first of "## Fields" /
// "## Associations" / "## Source Code" (head) and at "## Source Code"
// itself (tail) — so the property table above and the DDL block below are
// carried through byte-for-byte, and only the middle gets rebuilt.
function splitSections(content) {
  const firstOfThree = /^## (?:Fields|Associations|Source Code)[ \t]*\r?\n/m.exec(content);
  const head = firstOfThree ? content.slice(0, firstOfThree.index) : content;
  const sourceMatch = /^## Source Code[ \t]*\r?\n/m.exec(content);
  const tail = sourceMatch ? content.slice(sourceMatch.index) : '';
  return { head, tail };
}

function rebuild(content, fieldsTable, assocTable) {
  const nl = content.includes('\r\n') ? '\r\n' : '\n';
  const { head, tail } = splitSections(content);

  const middle = [fieldsTable, assocTable].filter(Boolean);
  let out = head.replace(/\s+$/, '');
  for (const part of middle) out += '\n\n' + part;
  out += tail ? '\n\n' + tail.replace(/\s+$/, '') + '\n' : '\n';

  return nl === '\r\n' ? out.replace(/\r?\n/g, '\r\n') : out;
}

async function main() {
  const files = await listViewFiles(VIEWS_DIR);
  console.log(`Found ${files.length} view file(s) under ${VIEWS_DIR}`);

  let checked = 0, changed = 0, skippedNoDdl = 0, errors = 0;

  for (const { name, relPath } of files) {
    if (LIMIT && checked >= LIMIT) break;
    const filePath = path.join(VIEWS_DIR, ...relPath.split('/'));
    let content;
    try {
      content = await fs.readFile(filePath, 'utf-8');
    } catch (e) {
      console.error(`❌ ${name}: cannot read (${e.message})`);
      errors++;
      continue;
    }

    if (!/^source_available:\s*true\s*$/m.test(content)) continue;
    checked++;

    let ddl;
    try {
      ddl = await readDDLContent(filePath);
    } catch (e) {
      console.error(`❌ ${name}: cannot extract DDL (${e.message})`);
      errors++;
      continue;
    }
    if (!ddl || !ddl.trim()) {
      skippedNoDdl++;
      continue;
    }

    let parsed;
    try {
      parsed = parseDDL(ddl, { viewName: name });
    } catch (e) {
      console.error(`❌ ${name}: parse failed (${e.message})`);
      errors++;
      continue;
    }

    const newFieldsTable = renderFieldsTable(parsed);
    const newAssocTable = renderAssociationsTable(parsed);
    const newContent = rebuild(content, newFieldsTable, newAssocTable);

    if (newContent === content) continue;

    changed++;
    if (DRY_RUN) {
      if (changed <= 5) console.log(`[dry-run] would change ${name}`);
    } else {
      await fs.writeFile(filePath, newContent, 'utf-8');
    }
  }

  console.log(
    `\n${DRY_RUN ? '[dry-run] Would update' : 'Updated'} ${changed} of ${checked} full-DDL view(s) ` +
      `(${skippedNoDdl} had no extractable DDL, ${errors} error(s)).`
  );
}

main().catch((e) => {
  console.error('❌ Fatal:', e.message);
  process.exit(1);
});
