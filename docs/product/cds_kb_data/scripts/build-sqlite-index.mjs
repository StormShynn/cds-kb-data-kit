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

import fs from 'node:fs';
import path from 'node:path';
import { DatabaseSync } from 'node:sqlite';

const dataRoot = process.argv[2];
if (!dataRoot) {
  console.error('Usage: node scripts/build-sqlite-index.mjs <path-to-cds-kb-data>');
  process.exit(1);
}

const indexFile = path.join(dataRoot, 'index', 'search_index.json');
const dbFile = path.join(dataRoot, 'index', 'search.db');

console.log('Reading', indexFile, '...');
const indexData = JSON.parse(fs.readFileSync(indexFile, 'utf-8'));
const mini = JSON.parse(indexData.minisearch);
const stored = mini.storedFields;
const rows = Object.values(stored);
console.log(`${rows.length} view(s) to index.`);

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
    releaseState TEXT DEFAULT 'released'
  );
  CREATE INDEX idx_views_module ON views(module);
  CREATE INDEX idx_views_lob ON views(lob);
  CREATE INDEX idx_views_bo ON views(bo);
  CREATE INDEX idx_views_name ON views(name);

  CREATE VIRTUAL TABLE views_fts USING fts5(
    name, semanticDescription, description, synonyms, appComponent,
    content='views', content_rowid='id'
  );

  CREATE TABLE meta (key TEXT PRIMARY KEY, value TEXT);
`);

const insertView = db.prepare(`
  INSERT INTO views (id, name, path, description, semanticDescription, module, lob, bo, appComponent, synonyms, usageCount, releaseState)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`);
const insertFts = db.prepare(`
  INSERT INTO views_fts (rowid, name, semanticDescription, description, synonyms, appComponent)
  VALUES (?, ?, ?, ?, ?, ?)
`);

db.exec('BEGIN');
let id = 0;
for (const r of rows) {
  id++;
  insertView.run(
    id, r.name, r.path, r.description || '', r.semanticDescription || '',
    r.module || '', r.lob || '', r.bo || '', r.appComponent || '',
    r.synonyms || '', r.usageCount || 0, r.releaseState || 'released',
  );
  insertFts.run(id, r.name, r.semanticDescription || '', r.description || '', r.synonyms || '', r.appComponent || '');
}
db.exec('COMMIT');

const insertMeta = db.prepare('INSERT INTO meta (key, value) VALUES (?, ?)');
insertMeta.run('schemaVersion', String(indexData.schemaVersion ?? 1));
insertMeta.run('builtAt', new Date().toISOString());
insertMeta.run('viewCount', String(rows.length));
insertMeta.run('sourceBuiltAt', indexData.builtAt ?? '');

db.close();

const sizeMB = (fs.statSync(dbFile).size / 1024 / 1024).toFixed(1);
console.log(`Wrote ${dbFile} (${sizeMB} MB, ${rows.length} views).`);
console.log(`
Example query (any SQLite client/driver):
  SELECT v.name, v.path, v.module, bm25(views_fts) AS score
  FROM views_fts
  JOIN views v ON v.id = views_fts.rowid
  WHERE views_fts MATCH 'purchase order' AND v.module = 'MM'
  ORDER BY score
  LIMIT 10;
`);
