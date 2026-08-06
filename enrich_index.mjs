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

let taxonomy = null;
try {
  taxonomy = JSON.parse(await fs.readFile(path.join(dataRoot, 'index', 'taxonomy.json'), 'utf-8'));
  console.log('Loaded taxonomy with', Object.keys(taxonomy.tagToKeywords || {}).length, 'tag→keyword maps.');
} catch { console.log('No taxonomy.json found, skipping taxonomy synonyms.'); }

// Reads the "## Fields" / "## Associations" markdown table under a view's
// body, if any — used to power coverage-report.html's expandable field list
// (see view-fields.js below) without re-parsing the .md on every page view.
// Line-scanned rather than regex-matched across the whole body: a single
// regex trying to bound "everything up to the next heading" is easy to get
// wrong across the two different table shapes template.mjs can emit (see
// its renderFieldsTable) plus the trailing ```abap block some views have
// right after Associations.
function parseMdTable(content, heading) {
  const lines = content.split(/\r?\n/);
  const headingIdx = lines.findIndex((l) => l.trim() === `## ${heading}`);
  if (headingIdx === -1) return null;

  const tableLines = [];
  for (let i = headingIdx + 1; i < lines.length; i++) {
    const line = lines[i];
    if (line.trim().startsWith('|')) tableLines.push(line.trim());
    else if (tableLines.length > 0) break;
    else if (line.trim() !== '') break;
  }
  if (tableLines.length < 2) return null;

  const cells = (line) => line.split('|').slice(1, -1).map((s) => s.trim().replace(/`/g, ''));
  return { header: cells(tableLines[0]), rows: tableLines.slice(2).map(cells) };
}

// ── Build one document per view file (source of truth) ──────────────────────
console.log('Scanning view files...');
const viewFiles = await listViewFiles(viewsDir);

const docs = [];
const fieldsMap = {};
let enriched = 0, withLabel = 0, withBo = 0, synCount = 0;

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
