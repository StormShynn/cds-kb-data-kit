#!/usr/bin/env node
// scripts/migrate-metadata-fields-format.mjs
// One-time migration: reformat metadata-only views' Fields table from the
// old "Field | Type | Description" shape to the unified 7-column shape
// (see src/template.mjs's renderFieldsTable) that Full-DDL views already
// use. Purely a re-render of data already sitting in the file — no
// network call, no new information — so this only ever needs to run once;
// every metadata-only view written from now on (scripts/add_hub_metadata.mjs)
// already comes out in the new shape via the same renderFieldsTable.
//
// Usage:
//   node scripts/migrate-metadata-fields-format.mjs [dataDir] [--dry-run]

import fs from 'node:fs/promises';
import path from 'node:path';
import { renderFieldsTable, renderAssociationsTable } from '../src/template.mjs';
import { listViewFiles } from './lib/view-files.mjs';
import { parseMdTable } from './lib/md-table.mjs';

const args = process.argv.slice(2);
const DATA_DIR = args[0] && !args[0].startsWith('--') ? args[0] : '.';
const DRY_RUN = args.includes('--dry-run');
const VIEWS_DIR = path.join(DATA_DIR, 'views');

const OLD_HEADER = 'Field | Type | Description';

// Same surgical patch shape as scripts/reparse-fields.mjs /
// scripts/enrich_ddl_fields.mjs — only the Fields/Associations section is
// replaced, everything else (frontmatter, description, property table)
// carried through byte-for-byte.
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

  let checked = 0, changed = 0, errors = 0;

  for (const { name, relPath } of files) {
    const filePath = path.join(VIEWS_DIR, ...relPath.split('/'));
    let content;
    try {
      content = await fs.readFile(filePath, 'utf-8');
    } catch (e) {
      console.error(`❌ ${name}: cannot read (${e.message})`);
      errors++;
      continue;
    }

    const table = parseMdTable(content, 'Fields');
    if (!table || table.header.join(' | ') !== OLD_HEADER) continue;
    checked++;

    const fields = [];
    const associations = [];
    for (const row of table.rows) {
      if (row[2] === '*Association*') {
        associations.push({ alias: row[0], isInSelect: true, targetView: '' });
        continue;
      }
      let fieldName = row[0];
      const isKey = fieldName.startsWith('key ');
      if (isKey) fieldName = fieldName.slice(4).trim();
      fields.push({ name: fieldName, isKey, dataType: row[1], description: row[2] });
    }

    const newFieldsTable = renderFieldsTable({ fields, associations });
    const newAssocTable = renderAssociationsTable({ associations });
    const newContent = rebuild(content, newFieldsTable, newAssocTable);

    if (newContent === content) continue;

    changed++;
    if (DRY_RUN) {
      if (changed <= 5) console.log(`[dry-run] would change ${name}`);
    } else {
      try {
        await fs.writeFile(filePath, newContent, 'utf-8');
      } catch (e) {
        console.error(`❌ ${name}: write failed (${e.message})`);
        errors++;
      }
    }
  }

  console.log(
    `\n${DRY_RUN ? '[dry-run] Would update' : 'Updated'} ${changed} of ${checked} old-format view(s) (${errors} error(s)).`
  );
}

main().catch((e) => {
  console.error('❌ Fatal:', e.message);
  process.exit(1);
});
