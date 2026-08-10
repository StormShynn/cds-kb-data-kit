#!/usr/bin/env node
// build-sqlite-index.mjs — Build index/search.db (SQLite FTS5) from search_index.json.
//
// Usage: node scripts/build-sqlite-index.mjs <path-to-cds-kb-data>
//
// For MCP/consumer stacks that aren't Node+MiniSearch (see CONNECTING.md §4) —
// a single portable .db file, queryable via plain SQL from any language with
// an SQLite driver. Reads search_index.json's already-built storedFields
// (the same per-view records MiniSearch indexes) rather than re-parsing every
// view .md file, so this has no parsing logic of its own to drift from
// enrich_index.mjs — run that first if views/ changed.
//
// Since schema v2 the database is more than a search index:
//   - views.source_url is read straight from each view's frontmatter (the
//     authoritative link recorded at fetch time — same signal check-coverage
//     uses), so consumers can link back without fetching the .md.
//   - fields / associations are loaded from index/view-fields.js (the exact
//     same per-view tables enrich_index.mjs writes for coverage-report.html),
//     giving per-field lookup and association-target joins in plain SQL.

import fs from 'node:fs';
import path from 'node:path';
import { DatabaseSync } from 'node:sqlite';
import { listViewFiles } from './lib/view-files.mjs';
import { extractFrontmatter, scalar } from './lib/frontmatter.mjs';

const dataRoot = process.argv[2];
if (!dataRoot) {
  console.error('Usage: node scripts/build-sqlite-index.mjs <path-to-cds-kb-data>');
  process.exit(1);
}

const indexFile = path.join(dataRoot, 'index', 'search_index.json');
const dbFile = path.join(dataRoot, 'index', 'search.db');
const fieldsFile = path.join(dataRoot, 'index', 'view-fields.js');

console.log('Reading', indexFile, '...');
const indexData = JSON.parse(fs.readFileSync(indexFile, 'utf-8'));
const mini = JSON.parse(indexData.minisearch);
const stored = mini.storedFields;
const rows = Object.values(stored);
console.log(`${rows.length} view(s) to index.`);

// ── view-fields.js -> NAME -> {f: fields table, a: associations table} ─────
// It's a JS file assigning a global (so coverage-report.html can load it with
// a plain <script> under file://), not a JSON file — strip the assignment and
// parse the JSON literal. Missing/unparseable is tolerated (older index),
// the fields/associations tables just end up empty.
let fieldsMap = {};
try {
  const js = fs.readFileSync(fieldsFile, 'utf-8');
  const json = js.replace(/^window\.__VIEW_FIELDS__\s*=\s*/, '').replace(/;\s*$/, '').trim();
  fieldsMap = JSON.parse(json);
  console.log(`Loaded field tables for ${Object.keys(fieldsMap).length} view(s).`);
} catch (err) {
  console.warn(`⚠️  Could not load ${fieldsFile} (${err.message}) — fields/associations tables will be empty.`);
}

// ── source_url per view, straight from each .md's frontmatter ───────────────
// scan every view file (concurrently, same pattern as check-coverage.mjs) for
// the authoritative source link recorded at fetch time. Only the frontmatter
// is read — no parsing of the body, so this can't drift from the data files.
const sourceUrls = new Map();
{
  const mdFiles = await listViewFiles(path.join(dataRoot, 'views'));
  const chunk = 64;
  for (let i = 0; i < mdFiles.length; i += chunk) {
    const slice = mdFiles.slice(i, i + chunk);
    await Promise.all(slice.map(async ({ name, relPath }) => {
      try {
        const content = await fs.promises.readFile(path.join(dataRoot, 'views', ...relPath.split('/')), 'utf-8');
        const url = scalar(extractFrontmatter(content), 'source_url');
        if (url) sourceUrls.set(name, url);
      } catch { /* keep whatever we have */ }
    }));
  }
}
console.log(`Loaded source_url for ${sourceUrls.size} view(s).`);

fs.rmSync(dbFile, { force: true });
const db = new DatabaseSync(dbFile);

db.exec(`
  CREATE TABLE views (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    path TEXT NOT NULL,
    description TEXT,
    semanticDescription TEXT,
    module TEXT,
    lob TEXT,
    bo TEXT,
    appComponent TEXT,
    synonyms TEXT,
    usageCount INTEGER DEFAULT 0,
    releaseState TEXT DEFAULT 'released',
    sourceUrl TEXT
  );
  CREATE INDEX idx_views_module ON views(module);
  CREATE INDEX idx_views_lob ON views(lob);
  CREATE INDEX idx_views_bo ON views(bo);
  CREATE INDEX idx_views_name ON views(name);

  CREATE VIRTUAL TABLE views_fts USING fts5(
    name, semanticDescription, description, synonyms, appComponent,
    content='views', content_rowid='id'
  );

  -- Schema v2: per-view fields (with the raw DDIC source column where the
  -- .md's Fields table carried one) and declared associations, so "which
  -- views expose field X / associate to view Y" is a plain SQL JOIN instead
  -- of parsing markdown or loading view-fields.js.
  CREATE TABLE fields (
    view_id INTEGER NOT NULL REFERENCES views(id),
    name TEXT NOT NULL,
    is_key INTEGER NOT NULL DEFAULT 0,
    source TEXT,
    type TEXT,
    description TEXT
  );
  CREATE INDEX idx_fields_view ON fields(view_id);
  CREATE INDEX idx_fields_name ON fields(name);

  CREATE TABLE associations (
    view_id INTEGER NOT NULL REFERENCES views(id),
    alias TEXT NOT NULL,
    target TEXT,
    cardinality TEXT
  );
  CREATE INDEX idx_associations_view ON associations(view_id);
  CREATE INDEX idx_associations_target ON associations(target);

  CREATE TABLE meta (key TEXT PRIMARY KEY, value TEXT);
`);

const insertView = db.prepare(`
  INSERT INTO views (id, name, path, description, semanticDescription, module, lob, bo, appComponent, synonyms, usageCount, releaseState, sourceUrl)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`);
const insertFts = db.prepare(`
  INSERT INTO views_fts (rowid, name, semanticDescription, description, synonyms, appComponent)
  VALUES (?, ?, ?, ?, ?, ?)
`);
const insertField = db.prepare(`
  INSERT INTO fields (view_id, name, is_key, source, type, description)
  VALUES (?, ?, ?, ?, ?, ?)
`);
const insertAssoc = db.prepare(`
  INSERT INTO associations (view_id, alias, target, cardinality)
  VALUES (?, ?, ?, ?)
`);

db.exec('BEGIN');
let id = 0;
let fieldCount = 0;
let assocCount = 0;
for (const r of rows) {
  id++;
  insertView.run(
    id, r.name, r.path, r.description || '', r.semanticDescription || '',
    r.module || '', r.lob || '', r.bo || '', r.appComponent || '',
    r.synonyms || '', r.usageCount || 0, r.releaseState || 'released',
    sourceUrls.get(r.name) || null,
  );
  insertFts.run(id, r.name, r.semanticDescription || '', r.description || '', r.synonyms || '', r.appComponent || '');

  const tables = fieldsMap[r.name];
  if (tables?.f) {
    // Same two shapes enrich_index.mjs handles: the current
    // "Field | Key | Association | Via | Source | Type | Description" shape
    // (where a ✓ in the Association column means the row is an association,
    // not a data field) and the older "Field | Data Source" shape.
    const isNewShape = tables.f.header[1] === 'Key';
    for (const row of tables.f.rows) {
      let fname, isKey;
      if (isNewShape) {
        if (row[2] === '✓') continue; // association row, not a data field
        fname = row[0];
        isKey = row[1] === '✓';
        insertField.run(id, fname, isKey ? 1 : 0, row[4] || null, row[5] || null, row[6] || null);
      } else {
        fname = row[0];
        isKey = fname.startsWith('key ');
        if (isKey) fname = fname.slice(4).trim();
        insertField.run(id, fname, isKey ? 1 : 0, row[1] || null, null, null);
      }
      fieldCount++;
    }
  }
  if (tables?.a) {
    for (const row of tables.a.rows) {
      insertAssoc.run(id, row[0] || '', row[1] || null, row[2] || null);
      assocCount++;
    }
  }
}
db.exec('COMMIT');

const insertMeta = db.prepare('INSERT INTO meta (key, value) VALUES (?, ?)');
insertMeta.run('schemaVersion', String(indexData.schemaVersion ?? 1));
insertMeta.run('dbSchemaVersion', '2'); // v2: + fields/associations tables, views.sourceUrl
insertMeta.run('builtAt', new Date().toISOString());
insertMeta.run('viewCount', String(rows.length));
insertMeta.run('sourceBuiltAt', indexData.builtAt ?? '');

db.close();

const sizeMB = (fs.statSync(dbFile).size / 1024 / 1024).toFixed(1);
console.log(`Wrote ${dbFile} (${sizeMB} MB, ${rows.length} views, ${fieldCount} field rows, ${assocCount} association rows).`);
console.log(`
Example queries (any SQLite client/driver):
  -- full-text, same as before:
  SELECT v.name, v.path, v.module, bm25(views_fts) AS score
  FROM views_fts
  JOIN views v ON v.id = views_fts.rowid
  WHERE views_fts MATCH 'purchase order' AND v.module = 'MM'
  ORDER BY score
  LIMIT 10;

  -- which views expose a semantic field (e.g. Material), with their source link:
  SELECT v.name, v.path, v.sourceUrl
  FROM fields f JOIN views v ON v.id = f.view_id
  WHERE f.name = 'Material'
  LIMIT 10;

  -- which views route a raw DDIC column (lowercase, e.g. vwerk) through a field:
  SELECT v.name, f.name AS semantic_field
  FROM fields f JOIN views v ON v.id = f.view_id
  WHERE f.source = 'vwerk'
  LIMIT 10;

  -- which views associate to I_CompanyCode:
  SELECT v.name, a.alias, a.cardinality
  FROM associations a JOIN views v ON v.id = a.view_id
  WHERE a.target = 'I_CompanyCode'
  LIMIT 10;
`);
