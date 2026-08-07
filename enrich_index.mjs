#!/usr/bin/env node
// enrich_index.mjs — Build search_index.json from the view .md files.
//
// Usage: node enrich_index.mjs <path-to-cds-kb-data>
//
// The view .md files are the single source of truth. For each view we read the
// YAML frontmatter (name, description, app_component, tags) plus the DDL
// @EndUserText.label, and derive the searchable document. Optional frontmatter
// fields make richer enrichment possible without touching this script again:
//
//   semantic_en: <one-line English business description>
//   semantic_vi: <one-line Vietnamese business description>
//   keywords:                      # extra synonyms (any language)
//     - đơn mua hàng
//     - procurement
//
// Backward compatible: views without semantic_*/keywords fall back to the DDL
// label exactly like before. bo/lob/module are now taken from the frontmatter
// (tags + app_component), not from the previous index, so edits to the data
// repo are reflected and deleted views drop out.

import fs from 'node:fs/promises';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { listViewFiles, toPathMap } from './scripts/lib/view-files.mjs';
import { extractFrontmatter, scalar, listBlock } from './scripts/lib/frontmatter.mjs';
import { parseMdTable } from './scripts/lib/md-table.mjs';

const dataRoot = process.argv[2];
if (!dataRoot) {
  console.error('Usage: node enrich_index.mjs <path-to-cds-kb-data>');
  process.exit(1);
}

const viewsDir = path.join(dataRoot, 'views');
const indexFile = path.join(dataRoot, 'index', 'search_index.json');

// ── Read current index (for options/schemaVersion only) & taxonomy ─────────
console.log('Reading index options and taxonomy...');
const indexData = JSON.parse(await fs.readFile(indexFile, 'utf-8'));
const options = indexData.options;
if (!options.fields.includes('synonyms')) options.fields.push('synonyms');
if (!options.storeFields.includes('synonyms')) options.storeFields.push('synonyms');
// usageCount isn't tokenized/searched (no place in `fields`) — it's only
// ever read back via storedFields, for cds-kb-mcp-kit's boostDocument to
// rank popular views higher in search_cds results.
if (!options.storeFields.includes('usageCount')) options.storeFields.push('usageCount');

let taxonomy = null;
try {
  taxonomy = JSON.parse(await fs.readFile(path.join(dataRoot, 'index', 'taxonomy.json'), 'utf-8'));
  console.log('Loaded taxonomy with', Object.keys(taxonomy.tagToKeywords || {}).length, 'tag→keyword maps.');
} catch { console.log('No taxonomy.json found, skipping taxonomy synonyms.'); }

// usage-stats.json is written by scripts/pull-usage-stats.mjs, which is a
// no-op until CDS_KB_USAGE_ENDPOINT is configured — so every view's
// usageCount is just 0 (a no-op boost multiplier) until that pipeline has
// pulled real data at least once.
let usageCounts = {};
try {
  const usageStats = JSON.parse(await fs.readFile(path.join(dataRoot, 'index', 'usage-stats.json'), 'utf-8'));
  usageCounts = usageStats.counts || {};
  console.log(`Loaded usage stats for ${Object.keys(usageCounts).length} view(s).`);
} catch { console.log('No usage-stats.json found, usageCount defaults to 0 for all views.'); }

// ── Build one document per view file (source of truth) ──────────────────────
console.log('Scanning view files...');
const viewFiles = await listViewFiles(viewsDir);

const docs = [];
const fieldsMap = {};
const fieldIndex = {}; // FIELD_NAME (uppercase) -> [{ view, isKey, appComponent, lob, bo }]
const tableIndex = {}; // TABLE/VIEW NAME (uppercase) -> [{ view, relation: 'source'|'association', alias, appComponent, lob, bo }]
let enriched = 0, withLabel = 0, withBo = 0, synCount = 0;

// The immediate `as select from X` / `as projection on X` target isn't
// rendered as its own table anywhere in the .md (only association targets
// are, via the Associations table) — pull it straight out of the embedded
// DDL fenced code block instead, same pattern src/parser.mjs's
// findSelectListStart/readDDLContent use, but with no dependency on either
// (this only needs the one line, not a full parse).
const DDL_BLOCK_RE = /```(?:abap|sql)?\s*\r?\n([\s\S]*?)\r?\n```/;
function extractSourceTable(content) {
  const m = content.match(DDL_BLOCK_RE);
  if (!m) return '';
  const sm = m[1].match(/as\s+select\s+from\s+(\w+)/i) || m[1].match(/as\s+projection\s+on\s+(\w+)/i);
  return sm ? sm[1] : '';
}

for (let i = 0; i < viewFiles.length; i++) {
  const { name, relPath } = viewFiles[i];
  const content = await fs.readFile(path.join(viewsDir, ...relPath.split('/')), 'utf-8');
  const fm = extractFrontmatter(content);

  const fieldsTable = parseMdTable(content, 'Fields');
  const assocTable = parseMdTable(content, 'Associations');
  if (fieldsTable || assocTable) fieldsMap[name] = { f: fieldsTable, a: assocTable };

  const tags = listBlock(fm, 'tags');
  const lob = (tags.find((t) => t.startsWith('lob:')) || '').slice(4);
  const bo = (tags.find((t) => t.startsWith('bo:')) || '').slice(3);
  const appComponent = scalar(fm, 'app_component');
  const module = appComponent ? appComponent.split('-')[0] : '';

  // field-index.json: FIELD_NAME -> which views expose it, so a lookup like
  // "which views have a material code field" resolves straight to a
  // short list of views instead of scanning all of them. Built from the
  // same fieldsTable already parsed above — a row is a real field ("Field |
  // Data Source" or "Field | Type | Description" depending on which shape
  // renderFieldsTable used), except when its last cell is "*Association*",
  // which means the row is actually one of the view's associations
  // (appended to the same table) rather than a data field.
  if (fieldsTable) {
    // Current table shape has Key/Association as their own columns (index
    // 1/2) — see src/template.mjs's renderFieldsTable. Older files
    // reparse-fields.mjs hasn't rewritten yet (or Hub-metadata-only views,
    // which it skips entirely) still have the "key `Name`" text + trailing
    // "*Association*" cell it replaced; both are handled here so
    // field-index.json stays correct regardless of which shape a given
    // view's Fields table is currently in.
    const isNewShape = fieldsTable.header[1] === 'Key';
    for (const row of fieldsTable.rows) {
      let fieldName, isKey;
      if (isNewShape) {
        if (row[2] === '✓') continue; // association row, not a data field
        fieldName = row[0];
        isKey = row[1] === '✓';
      } else {
        if (row[row.length - 1] === '*Association*') continue;
        fieldName = row[0];
        isKey = fieldName.startsWith('key ');
        if (isKey) fieldName = fieldName.slice(4).trim();
      }
      if (!fieldName) continue;
      const key = fieldName.toUpperCase();
      (fieldIndex[key] ||= []).push({ view: name, isKey, appComponent, lob, bo });
    }
  }

  // table-index.json: TABLE/VIEW NAME -> which views build on it (as their
  // FROM source) or associate to it — the reverse lookup for "I found table
  // BKPF / view I_JournalEntryItem in some ABAP code, which of our CDS
  // views involve it" instead of grepping every DDL source block by hand.
  const sourceTable = extractSourceTable(content);
  if (sourceTable) {
    const key = sourceTable.toUpperCase();
    (tableIndex[key] ||= []).push({ view: name, relation: 'source', alias: null, appComponent, lob, bo });
  }
  if (assocTable) {
    for (const [alias, targetView] of assocTable.rows) {
      if (!targetView) continue;
      const key = targetView.toUpperCase();
      (tableIndex[key] ||= []).push({ view: name, relation: 'association', alias, appComponent, lob, bo });
    }
  }

  const label = (content.match(/@EndUserText\.label\s*:\s*'([^']+)'/) || [])[1]?.trim() || '';
  let description = scalar(fm, 'description') || label;
  if ((description.length < 40 || !description.includes(' ')) && label) description = label;

  const semEn = scalar(fm, 'semantic_en');
  const semVi = scalar(fm, 'semantic_vi');
  const semantic = [semEn, semVi].filter(Boolean).join(' — ');
  const semanticDescription = semantic || label || description;
  if (semEn || semVi) enriched++;
  if (label) withLabel++;
  if (bo) withBo++;

  // synonyms: taxonomy keywords for lob+bo + per-view frontmatter keywords
  const kw = new Set();
  const t2k = taxonomy?.tagToKeywords || {};
  if (lob && t2k[`lob:${lob.toLowerCase()}`]) for (const k of t2k[`lob:${lob.toLowerCase()}`]) kw.add(k);
  if (bo && t2k[`bo:${bo.toLowerCase()}`]) for (const k of t2k[`bo:${bo.toLowerCase()}`]) kw.add(k);
  for (const k of listBlock(fm, 'keywords')) kw.add(k);
  if (kw.size) synCount++;

  docs.push({
    id: i,
    name,
    semanticDescription,
    description,
    tagText: tags.join(' '),
    appComponent,
    synonyms: [...kw].join(' '),
    path: `views/${relPath}`,
    module,
    lob,
    bo,
    usageCount: usageCounts[name] || 0,
  });
}

console.log(`Views: ${docs.length} | with DDL label: ${withLabel} | with bo: ${withBo}`);
console.log(`Genuinely enriched (semantic_en/vi): ${enriched} | with synonyms: ${synCount}`);

// ── Build MiniSearch index ─────────────────────────────────────────────────
const MiniSearch = (await import('minisearch')).default;
const mini = new MiniSearch(options);
mini.addAll(docs);

const output = {
  schemaVersion: indexData.schemaVersion,
  builtAt: new Date().toISOString(),
  viewCount: docs.length,
  enrichedCount: enriched, // now: views with a real semantic_en/semantic_vi (not just a copied label)
  options,
  minisearch: JSON.stringify(mini),
};

try { await fs.copyFile(indexFile, indexFile + '.bak'); } catch {}
await fs.writeFile(indexFile, JSON.stringify(output), 'utf-8');
const sizeKB = (Buffer.byteLength(JSON.stringify(output)) / 1024).toFixed(0);
console.log(`\nWrote ${indexFile} (${sizeKB} KB) — viewCount=${docs.length}, enrichedCount=${enriched}`);

// ── version manifest ───────────────────────────────────────────────────────
function resolveCommit() {
  if (process.env.GITHUB_SHA) return process.env.GITHUB_SHA;
  try { return execSync(`git -C "${dataRoot}" rev-parse HEAD`, { encoding: 'utf-8' }).trim(); }
  catch { return `builtAt:${output.builtAt}`; }
}
const versionManifest = {
  schemaVersion: output.schemaVersion ?? 1,
  commit: resolveCommit(),
  builtAt: output.builtAt,
  viewCount: output.viewCount,
  enrichedCount: output.enrichedCount,
};
await fs.writeFile(path.join(dataRoot, 'index', 'version.json'), JSON.stringify(versionManifest, null, 2) + '\n', 'utf-8');
console.log(`version manifest commit=${versionManifest.commit.slice(0, 8)}`);

// ── view-paths.json — NAME -> real path, consulted by cds-kb-mcp-kit's ─────
// datasource.mjs before it falls back to guessing views/<NAME>.md. Lets
// views live in per-module subfolders without the server needing to know
// the folder scheme at all.
const pathMapFile = path.join(dataRoot, 'index', 'view-paths.json');
await fs.writeFile(pathMapFile, JSON.stringify(toPathMap(viewFiles)), 'utf-8');
console.log(`Wrote ${pathMapFile} (${viewFiles.length} entries)`);

// ── view-fields.js — NAME -> {f: fields table, a: associations table} ──────
// A .js file assigning a global, not a .json file, so coverage-report.html
// can load it with a plain <script src>: that works when the report is
// opened straight off disk (file://), unlike fetch()/XHR, which Chrome
// blocks cross-file under file://. Kept out of coverage.json/report.html
// themselves so this ~10MB of largely-static field data doesn't get
// rewritten into those on every 6-hourly check-coverage.yml run — it only
// changes here, when views/** actually changes.
const fieldsFile = path.join(dataRoot, 'index', 'view-fields.js');
const fieldsJson = JSON.stringify(fieldsMap);
await fs.writeFile(fieldsFile, `window.__VIEW_FIELDS__ = ${fieldsJson};\n`, 'utf-8');
console.log(`Wrote ${fieldsFile} (${(Buffer.byteLength(fieldsJson) / 1024 / 1024).toFixed(1)} MB, ${Object.keys(fieldsMap).length} entries)`);

// ── field-index.json — FIELD_NAME -> [{view, isKey, appComponent, lob, bo}] ─
// The reverse of view-fields.js: given a field name (e.g. "MATNR" / a
// business term already resolved to it), look up which views expose it
// instead of scanning every view's Fields table. Consumers (e.g. an MCP
// server) needing fuzzy/business-language lookup ("material code" ->
// MATNR) should resolve the term to a field name themselves (e.g. via
// taxonomy.json's keyword maps) before querying this index — it's an exact,
// case-insensitive map, not a search index.
for (const key of Object.keys(fieldIndex)) {
  fieldIndex[key].sort((a, b) => a.view.localeCompare(b.view));
}
const fieldIndexFile = path.join(dataRoot, 'index', 'field-index.json');
const fieldIndexOutput = {
  builtAt: output.builtAt,
  fieldCount: Object.keys(fieldIndex).length,
  fields: fieldIndex,
};
await fs.writeFile(fieldIndexFile, JSON.stringify(fieldIndexOutput), 'utf-8');
console.log(`Wrote ${fieldIndexFile} (${Object.keys(fieldIndex).length} distinct field name(s))`);

// ── table-index.json — TABLE/VIEW NAME -> [{view, relation, alias, appComponent, lob, bo}] ─
// Same idea as field-index.json but keyed on what a view is built FROM
// (its base source table/view) or associates TO, rather than what fields
// it exposes — "which CDS views touch table/view X" instead of "which CDS
// views have field X".
for (const key of Object.keys(tableIndex)) {
  tableIndex[key].sort((a, b) => a.view.localeCompare(b.view));
}
const tableIndexFile = path.join(dataRoot, 'index', 'table-index.json');
const tableIndexOutput = {
  builtAt: output.builtAt,
  tableCount: Object.keys(tableIndex).length,
  tables: tableIndex,
};
await fs.writeFile(tableIndexFile, JSON.stringify(tableIndexOutput), 'utf-8');
console.log(`Wrote ${tableIndexFile} (${Object.keys(tableIndex).length} distinct table/view name(s))`);
