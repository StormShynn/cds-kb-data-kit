#!/usr/bin/env node
// scripts/generate-query-builder.mjs
// Generates query-builder.html: a self-contained, offline-first page that
// helps compose a SELECT / FROM / JOIN / WHERE / GROUP BY / HAVING / ORDER BY
// statement against one or more CDS views, using their real field names
// (from index/view-fields.js — the same data coverage-report.html already
// loads via <script src>, so this page doesn't need to re-embed the ~13MB of
// field data itself).
//
// This does NOT connect to, or run anything against, a real SAP system — it
// only knows what field-search.html/search.html already know from this data
// repo (field names, key/association info). Output is reference syntax for
// you to copy into wherever you'll actually run it (SE16N, ADT data preview,
// an Open SQL statement, ...), not a validated or executable query.
//
// index/query-library.json is a human-curated, git-tracked list of saved
// queries (contributed the same way as everything else in this repo — edit
// the JSON, open a PR). This script only reads and embeds it; there is no
// backend for the page itself to write to, so "Save" writes to this
// browser's localStorage (immediately usable from the "Saved queries" list
// again, survives reloads). "Generate JSON" exports the PR snippet for
// query-library.json without touching localStorage — that is what makes a
// query visible to everyone else, not just this browser.
//
// Usage:
//   node scripts/generate-query-builder.mjs [dataDir] [outputFile]

import fs from 'node:fs/promises';
import path from 'node:path';
import { listViewFiles } from './lib/view-files.mjs';
import { extractFrontmatter, scalar } from './lib/frontmatter.mjs';

const GITHUB_BLOB_BASE = 'https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/';

const args = process.argv.slice(2);
const DATA_DIR = args[0] && !args[0].startsWith('--') ? args[0] : '.';
const OUTPUT_FILE = args[1] && !args[1].startsWith('--') ? args[1] : path.join(DATA_DIR, 'query-builder.html');

// Same signal as enrich_index.mjs's isAbstractEntity (kept in sync by hand —
// this script only needs a yes/no warning badge, not the full index build,
// so it isn't worth importing enrich_index.mjs's internals for).
const DDL_BLOCK_RE = /```(?:abap|sql)?\s*\r?\n([\s\S]*?)\r?\n```/;
function isAbstractEntity(content) {
  const m = content.match(DDL_BLOCK_RE);
  if (!m) return false;
  return m[1].split('\n').some((line) => {
    const trimmed = line.trim();
    if (trimmed.startsWith('//')) return false;
    return /define\s+(root\s+)?abstract\s+entity/i.test(trimmed) || /#ACTION_PARAMETER_STRUCTURE\b/i.test(trimmed);
  });
}

async function readJson(file, fallback) {
  try {
    return JSON.parse(await fs.readFile(file, 'utf-8'));
  } catch {
    return fallback;
  }
}

async function main() {
  console.log('📋 Reading view-paths.json, query-library.json, and scanning view frontmatter...');
  const viewPaths = await readJson(path.join(DATA_DIR, 'index', 'view-paths.json'), {});
  const queryLibrary = await readJson(path.join(DATA_DIR, 'index', 'query-library.json'), []);

  const viewsDir = path.join(DATA_DIR, 'views');
  const viewFiles = await listViewFiles(viewsDir);

  // Per view: [appComponent, isAbstract] — enough to warn "this isn't a
  // queryable view" in the picker and show the module next to each result,
  // without embedding full descriptions/tags (field-search.html/search.html
  // already cover "what does this view mean" — this page is purely "help me
  // write a query against a view I've already picked").
  const viewMeta = {};
  for (const { name, relPath } of viewFiles) {
    const content = await fs.readFile(path.join(viewsDir, ...relPath.split('/')), 'utf-8');
    const fm = extractFrontmatter(content);
    viewMeta[name] = [scalar(fm, 'app_component') || '', isAbstractEntity(content) ? 1 : 0];
  }

  const embedded = JSON.stringify({ M: viewMeta, P: viewPaths, L: queryLibrary }).replace(/<\/script/gi, '<\\/script');

  const html = renderHtml(embedded, { viewCount: Object.keys(viewMeta).length, libCount: queryLibrary.length });

  await fs.writeFile(OUTPUT_FILE, html, 'utf-8');
  const sizeKb = (Buffer.byteLength(html) / 1024).toFixed(0);
  console.log(`✅ Wrote ${OUTPUT_FILE} (${sizeKb} KB) — ${Object.keys(viewMeta).length} view(s), ${queryLibrary.length} saved quer${queryLibrary.length === 1 ? 'y' : 'ies'}. Needs index/view-fields.js alongside it at runtime.`);
}

function renderHtml(embeddedJson, stats) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>CDS Knowledge Base · Query Builder</title>
<style>
  .viz-root {
    --surface-1: #1a1a19;
    --surface-2: #232322;
    --page-plane: #0d0d0d;
    --text-primary: #ffffff;
    --text-secondary: #c3c2b7;
    --text-muted: #898781;
    --gridline: #2c2c2a;
    --border: rgba(255,255,255,0.10);
    --status-good: #0ca30c;
    --status-warn: #d9a72c;
    --accent: #4c9eff;
  }
  * { box-sizing: border-box; }
  body.viz-root {
    margin: 0;
    background: var(--page-plane);
    color: var(--text-primary);
    font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
  }
  .container { max-width: 1360px; margin: 0 auto; padding: 32px 20px 64px; }
  h1 { font-size: 22px; font-weight: 600; margin: 0 0 4px; }
  h1 span { color: var(--text-secondary); font-weight: 400; }
  .subtitle { color: var(--text-muted); font-size: 13px; margin: 0 0 4px; }
  .disclaimer {
    color: var(--status-warn); font-size: 12px; margin: 0 0 20px; padding: 8px 12px;
    background: rgba(217,167,44,0.08); border: 1px solid var(--status-warn); border-radius: 6px;
  }

  .lib-section { margin: 0 0 24px; padding: 14px 16px; background: var(--surface-1); border: 1px solid var(--border); border-radius: 8px; }
  .lib-section h2 {
    font-size: 13px; color: var(--text-secondary); margin: 0 0 8px; font-weight: 600;
    text-transform: uppercase; letter-spacing: 0.04em; cursor: pointer; user-select: none;
  }
  .lib-section h2::before { content: '▾ '; display: inline-block; }
  .lib-section.collapsed h2 { margin-bottom: 0; }
  .lib-section.collapsed h2::before { content: '▸ '; }
  .lib-section.collapsed > *:not(h2) { display: none; }
  .lib-section .subhint { color: var(--text-muted); font-size: 12px; margin: 0 0 10px; }
  .lib-list { max-height: 220px; overflow-y: auto; }
  .lib-item {
    display: flex; align-items: center; gap: 10px; padding: 8px 10px; border-radius: 6px;
    border-bottom: 1px solid var(--gridline); font-size: 13px; flex-wrap: wrap;
  }
  .lib-item:last-child { border-bottom: none; }
  .lib-item .title { font-weight: 600; }
  .lib-item .desc { color: var(--text-secondary); font-size: 12px; flex-basis: 100%; }
  .lib-item .tag { color: var(--text-muted); font-size: 11px; }
  .lib-item .tag.local { color: var(--accent); border: 1px solid var(--accent); border-radius: 4px; padding: 1px 6px; }
  .lib-item button.remove-local { margin-left: 0; }
  .lib-empty { color: var(--text-muted); font-size: 12px; padding: 6px 0; }
  .import-panel { margin-top: 14px; padding-top: 12px; border-top: 1px solid var(--gridline); }
  .import-panel textarea { width: 100%; }
  .import-panel .msg { font-size: 12px; margin-top: 6px; }
  .import-panel .msg.ok { color: var(--status-good); }
  .import-panel .msg.err { color: var(--status-warn); }

  #viewq {
    width: 100%; background: var(--surface-1); border: 1px solid var(--border);
    color: var(--text-primary); border-radius: 8px; padding: 14px 16px; font-size: 16px;
    font-family: ui-monospace, "SF Mono", Consolas, monospace;
  }
  #viewq:focus { outline: 2px solid var(--accent); }
  .hint { color: var(--text-muted); font-size: 12px; margin: 8px 0 0; }

  #viewResults { margin-top: 8px; max-height: 280px; overflow-y: auto; border: 1px solid var(--border); border-radius: 8px; display: none; }
  #viewResults.open { display: block; }
  .vrow {
    display: flex; align-items: center; gap: 10px; padding: 8px 12px; cursor: pointer;
    border-bottom: 1px solid var(--gridline); font-size: 13px;
  }
  .vrow:last-child { border-bottom: none; }
  .vrow:hover { background: var(--surface-1); }
  .vrow .name { font-family: ui-monospace, monospace; font-weight: 600; }
  .vrow .tag { color: var(--text-muted); font-size: 11px; margin-left: auto; }
  .vrow .warn { color: var(--status-warn); font-size: 11px; }

  .picked {
    display: none; align-items: center; gap: 10px; margin-top: 14px; padding: 12px 14px;
    background: var(--surface-1); border: 1px solid var(--border); border-radius: 8px;
  }
  .picked.open { display: flex; flex-wrap: wrap; }
  .picked .name { font-family: ui-monospace, monospace; font-weight: 700; font-size: 15px; }
  .picked a { color: var(--accent); text-decoration: none; font-size: 12px; }
  .picked a:hover { text-decoration: underline; }
  .picked .tag { color: var(--text-muted); font-size: 12px; }
  .picked .warn {
    color: var(--status-warn); font-size: 11px; border: 1px solid var(--status-warn);
    border-radius: 4px; padding: 1px 6px;
  }
  .picked button { margin-left: auto; }

  .joins { margin-top: 10px; }
  .join-row {
    display: flex; align-items: center; gap: 8px; flex-wrap: wrap; padding: 10px;
    margin-bottom: 8px; background: var(--surface-1); border: 1px solid var(--border); border-radius: 8px;
  }
  .join-row .alias-badge {
    font-family: ui-monospace, monospace; font-size: 11px; color: var(--accent);
    border: 1px solid var(--accent); border-radius: 4px; padding: 1px 6px; flex-shrink: 0;
  }
  .join-row .viewpick { position: relative; flex: 1; min-width: 220px; }
  .join-row .join-warn { color: var(--status-warn); font-size: 11px; flex-basis: 100%; }
  .join-row .on-line { display: flex; align-items: center; gap: 6px; flex-basis: 100%; flex-wrap: wrap; }
  .join-row .raw-toggle { flex-basis: 100%; margin-bottom: 6px; }

  .builder { display: none; margin-top: 24px; }
  .builder.open { display: block; }
  .builder-grid { display: grid; grid-template-columns: minmax(0, 1.4fr) minmax(340px, 1fr); gap: 28px; align-items: start; }
  .builder-right { position: sticky; top: 20px; }
  @media (max-width: 920px) {
    .builder-grid { grid-template-columns: 1fr; }
    .builder-right { position: static; }
  }
  .section { margin-top: 22px; }
  .builder-left .section:first-child { margin-top: 0; }
  .section h2 {
    font-size: 13px; color: var(--text-secondary); margin: 0 0 10px; font-weight: 600;
    text-transform: uppercase; letter-spacing: 0.04em; cursor: pointer; user-select: none;
  }
  .section h2::before { content: '▾ '; display: inline-block; }
  .section.collapsed h2 { margin-bottom: 0; }
  .section.collapsed h2::before { content: '▸ '; }
  .section.collapsed > *:not(h2) { display: none; }
  .section .subhint { color: var(--text-muted); font-size: 12px; margin: -6px 0 10px; }

  .field-filter { width: 100%; margin-bottom: 6px; }

  .field-grid {
    display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 6px;
    max-height: 260px; overflow-y: auto; padding: 10px; background: var(--surface-1);
    border: 1px solid var(--border); border-radius: 8px;
  }
  .field-item { display: flex; align-items: center; gap: 6px; font-size: 13px; padding: 3px 4px; border-radius: 4px; }
  .field-item:hover { background: var(--surface-2); }
  .field-item label { font-family: ui-monospace, monospace; cursor: pointer; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .field-item .key { color: var(--status-good); font-size: 10px; flex-shrink: 0; }
  .field-item select { margin-left: auto; flex-shrink: 0; }

  .cond-row { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; flex-wrap: wrap; }
  .cond-row .joiner { width: 62px; flex-shrink: 0; }
  .cond-row select, .cond-row input, select, input[type=text] {
    background: var(--surface-1); border: 1px solid var(--border); color: var(--text-primary);
    border-radius: 6px; padding: 6px 8px; font-size: 13px; font-family: ui-monospace, monospace;
  }
  .cond-row .field { min-width: 180px; }
  .cond-row .op { min-width: 130px; }
  .cond-row .val { min-width: 140px; flex: 1; }
  button {
    background: var(--surface-2); border: 1px solid var(--border); color: var(--text-primary);
    border-radius: 6px; padding: 6px 12px; font-size: 12px; cursor: pointer;
  }
  button:hover { border-color: var(--accent); }
  button.link { background: none; border: none; color: var(--accent); padding: 2px 4px; }
  button.remove { color: var(--status-warn); border-color: var(--status-warn); padding: 4px 8px; }

  .raw-toggle { display: flex; align-items: center; gap: 8px; margin-bottom: 10px; font-size: 13px; color: var(--text-secondary); }
  textarea.raw {
    width: 100%; min-height: 60px; background: var(--surface-1); border: 1px solid var(--border);
    color: var(--text-primary); border-radius: 8px; padding: 10px; font-size: 13px;
    font-family: ui-monospace, monospace; resize: vertical;
  }

  #output {
    width: 100%; min-height: 160px; background: #050505; border: 1px solid var(--border);
    color: #d6f5c3; border-radius: 8px; padding: 16px; font-size: 13px;
    font-family: ui-monospace, "SF Mono", Consolas, monospace; white-space: pre-wrap;
    word-break: break-word;
  }
  /* Lightweight ABAP/SQL-keyword syntax highlighting for #output — a small
     hand-rolled tokenizer inspired by common ABAP editor conventions
     (abaplint itself is a static-analysis linter for whole programs, not a
     standalone highlighter, so it isn't embedded here — see the JS comment
     next to highlightAbap()). */
  .tok-kw { color: #7ec8ff; font-weight: 600; }
  .tok-fn { color: #c792ea; }
  .tok-str { color: #e6a45e; }
  .tok-num { color: #f78c6c; }
  .tok-op { color: #89ddff; }
  .output-bar { display: flex; align-items: center; gap: 10px; margin-bottom: 8px; }
  .output-bar .copied { color: var(--status-good); font-size: 12px; display: none; }

  .save-panel { margin-top: 20px; padding-top: 16px; border-top: 1px solid var(--gridline); }
  .save-panel input[type=text] { width: 100%; margin-bottom: 8px; }
  .save-panel textarea { width: 100%; margin-top: 8px; }
  .save-panel .subhint { margin-top: 8px; }
  .save-panel .save-actions { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 4px; }

  .stats { color: var(--text-muted); font-size: 12px; margin-top: 32px; border-top: 1px solid var(--gridline); padding-top: 16px; }
</style>
</head>
<body class="viz-root">
<div class="container">
  <h1>CDS Knowledge Base <span>· Query Builder</span></h1>
  <p class="subtitle">Pick CDS view(s) — join more than one if you need to — then compose SELECT / WHERE / GROUP BY / HAVING / ORDER BY against their real field names.</p>
  <p class="disclaimer">⚠️ This only generates reference syntax from field names in this data repo. It does not connect to, validate against, or run anything on a real SAP system — check the output before using it.</p>

  <div class="lib-section collapsed" id="libSection">
    <h2 id="libSectionToggle">📚 Saved queries (<span id="libCount">0</span>)</h2>
    <p class="subhint">Queries saved with "💾 Save" below live in this browser (localStorage) so they show up here again on reload. Sharing them with everyone else is a PR adding the generated JSON to <code>index/query-library.json</code> — same as everything else in this repo.</p>
    <input type="text" id="libFilter" class="field-filter" placeholder="Filter saved queries by title, description, or view…" autocomplete="off" spellcheck="false" />
    <div class="lib-list" id="libList"></div>
    <div class="import-panel">
      <p class="subhint" style="margin:0 0 6px">Already have a query's JSON (from a teammate, a PR, this page's own export)? Paste it here to add it straight to this browser's saved list — no need to rebuild it.</p>
      <textarea id="importInput" class="raw" placeholder='{"title": "...", "views": [...], "select": "...", ...}'></textarea>
      <button id="importBtn">Add to saved queries</button>
      <span class="msg" id="importMsg"></span>
    </div>
  </div>

  <input id="viewq" type="text" placeholder="Type a view name, e.g. I_Product, I_SalesOrderItem…" autocomplete="off" spellcheck="false" />
  <p class="hint">${stats.viewCount} view(s) available. Requires <code>index/view-fields.js</code> in the same folder (already the case if you got this page from the repo/site).</p>
  <div id="viewResults"></div>

  <div id="picked" class="picked">
    <span class="name" id="pickedName"></span>
    <a id="pickedLink" href="#" target="_blank" rel="noopener">open on GitHub ↗</a>
    <span class="tag" id="pickedComponent"></span>
    <span id="pickedWarn"></span>
    <button id="pickedClear">change view</button>
  </div>

  <div id="joinsWrap" class="joins" style="display:none">
    <div id="joinRows"></div>
    <button id="joinAdd" class="link">+ join another view</button>
  </div>

  <div id="builder" class="builder">
    <div class="builder-grid">
      <div class="builder-left">
        <div class="section">
          <h2>Select</h2>
          <p class="subhint">Tick fields to include. Pick an aggregate to wrap a field (e.g. SUM), or leave "—" for a plain column. Nothing ticked = <code>SELECT *</code>. Fields show as <code>alias.Field</code> once more than one view is joined.</p>
          <div class="raw-toggle"><input type="checkbox" id="selectRawToggle" /><label for="selectRawToggle">Type raw SELECT text instead of using the builder below</label></div>
          <textarea id="selectRaw" class="raw" style="display:none" placeholder="e.g. Product, COUNT(*) AS ProductCount"></textarea>
          <div id="selectBuilderWrap">
            <input type="text" id="selectFieldFilter" class="field-filter" placeholder="Filter fields…" autocomplete="off" spellcheck="false" />
            <div class="field-grid" id="selectFields"></div>
          </div>
        </div>

        <div class="section">
          <h2>Where</h2>
          <div class="raw-toggle"><input type="checkbox" id="whereRawToggle" /><label for="whereRawToggle">Type raw WHERE text instead of using the builder below</label></div>
          <textarea id="whereRaw" class="raw" style="display:none" placeholder="e.g. ProductType = 'FERT' AND IsMarkedForDeletion = ''"></textarea>
          <div id="whereBuilderWrap">
            <div id="whereRows"></div>
            <button id="whereAdd" class="link">+ add condition</button>
          </div>
        </div>

        <div class="section">
          <h2>Group By</h2>
          <p class="subhint">Fields not ticked here that ARE ticked above with an aggregate are fine; a plain (non-aggregated) SELECT field should usually also be ticked here.</p>
          <div class="raw-toggle"><input type="checkbox" id="groupByRawToggle" /><label for="groupByRawToggle">Type raw GROUP BY text instead of using the builder below</label></div>
          <textarea id="groupByRaw" class="raw" style="display:none" placeholder="e.g. ProductType, ProductGroup"></textarea>
          <div id="groupByBuilderWrap">
            <input type="text" id="groupByFieldFilter" class="field-filter" placeholder="Filter fields…" autocomplete="off" spellcheck="false" />
            <div class="field-grid" id="groupByFields"></div>
          </div>
        </div>

        <div class="section">
          <h2>Having</h2>
          <p class="subhint">Filters applied after GROUP BY — typically on an aggregate, e.g. <code>COUNT(*) &gt; 1</code>.</p>
          <div class="raw-toggle"><input type="checkbox" id="havingRawToggle" /><label for="havingRawToggle">Type raw HAVING text instead of using the builder below</label></div>
          <textarea id="havingRaw" class="raw" style="display:none" placeholder="e.g. COUNT(*) > 1"></textarea>
          <div id="havingBuilderWrap">
            <div id="havingRows"></div>
            <button id="havingAdd" class="link">+ add condition</button>
          </div>
        </div>

        <div class="section">
          <h2>Order By</h2>
          <div class="raw-toggle"><input type="checkbox" id="orderRawToggle" /><label for="orderRawToggle">Type raw ORDER BY text instead of using the builder below</label></div>
          <textarea id="orderRaw" class="raw" style="display:none" placeholder="e.g. ProductType ASC, Product DESC"></textarea>
          <div id="orderBuilderWrap">
            <div id="orderRows"></div>
            <button id="orderAdd" class="link">+ add sort field</button>
          </div>
        </div>
      </div>

      <div class="builder-right">
        <div class="section">
          <h2>Generated query</h2>
          <div class="output-bar">
            <button id="copyBtn">📋 Copy</button>
            <span class="copied" id="copiedMsg">Copied!</span>
          </div>
          <pre id="output"></pre>

          <div class="save-panel">
            <h2 style="font-size:13px;color:var(--text-secondary);text-transform:uppercase;letter-spacing:0.04em;margin:0 0 8px;">💾 Save this query</h2>
            <p class="subhint" style="margin-top:0">Fill in a title, then <strong>Save</strong> to add it to "📚 Saved queries" above (this browser only). Use <strong>Generate JSON</strong> for the snippet to paste into <code>index/query-library.json</code> via a PR — that does not write to localStorage.</p>
            <input type="text" id="saveTitle" placeholder="Title, e.g. Products missing a description" autocomplete="off" />
            <input type="text" id="saveDesc" placeholder="One-line description (optional)" autocomplete="off" />
            <input type="text" id="saveContributor" placeholder="Your name/handle (optional)" autocomplete="off" />
            <div class="save-actions">
              <button id="saveGenBtn" type="button">💾 Save</button>
              <button id="generateJsonBtn" type="button">{} Generate JSON</button>
            </div>
            <textarea id="saveOutput" class="raw" style="display:none" readonly></textarea>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="stats" id="statsLine"></div>
</div>

<script src="index/view-fields.js"></script>
<script>
  const DATA = ${embeddedJson};
  const GITHUB_BLOB_BASE = ${JSON.stringify(GITHUB_BLOB_BASE)};
  const AGGS = ['—', 'COUNT', 'SUM', 'AVG', 'MIN', 'MAX'];
  const OPS = ['=', '<>', '>', '<', '>=', '<=', 'LIKE', 'NOT LIKE', 'IN', 'BETWEEN', 'IS NULL', 'IS NOT NULL'];
  const JOIN_TYPES = ['INNER JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'FULL JOIN'];

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  }

  function viewsIndex() {
    return (typeof window.__VIEW_FIELDS__ === 'object' && window.__VIEW_FIELDS__) || {};
  }

  function fieldsOf(viewName) {
    const entry = viewsIndex()[viewName];
    const table = entry && entry.f;
    if (!table || !table.rows) return [];
    const isNewShape = table.header[1] === 'Key';
    const out = [];
    for (const row of table.rows) {
      if (isNewShape) {
        if (row[2] === '✓') continue; // association row, not a data field
        out.push({ name: row[0], isKey: row[1] === '✓', source: row[4] || '', type: row[5] || '', description: row[6] || '' });
      } else {
        if (row[row.length - 1] === '*Association*') continue;
        let name = row[0] || '';
        const isKey = name.startsWith('key ');
        if (isKey) name = name.slice(4).trim();
        if (name) out.push({ name, isKey, source: '', type: '', description: '' });
      }
    }
    return out;
  }

  // A view's declared CDS associations (Alias / Target View / Cardinality
  // table — the same one field-search.html reads, just here it's the
  // "Associations" table instead of "Fields"). S/4HANA Cloud Public Edition
  // consumption views overwhelmingly favor an existing association exposed
  // as a path expression (_Text.Field) over a hand-written JOIN...ON — it's
  // already authorization/cardinality-correct by construction, so this page
  // offers it as the default way to add a second view wherever one exists.
  function associationsOf(viewName) {
    const entry = viewsIndex()[viewName];
    const table = entry && entry.a;
    if (!table || !table.rows) return [];
    return table.rows
      .map((row) => ({ alias: row[0] || '', targetView: row[1] || '', cardinality: row[2] || '' }))
      .filter((a) => a.alias && a.targetView);
  }

  // ── Saved-query library ──────────────────────────────────────────────────
  // SHARED comes from index/query-library.json, embedded at build time —
  // read-only here (changing it for real means a PR, since this page has no
  // backend to write to). LOCAL_LIB is this browser's own saves, persisted
  // to localStorage so "Save" is immediately useful (shows back up here,
  // survives reloads) instead of only producing inert JSON text.
  const SHARED = Array.isArray(DATA.L) ? DATA.L : [];
  const LOCAL_LIB_KEY = 'cds-query-builder-saved-queries';
  let LOCAL_LIB = [];
  try { LOCAL_LIB = JSON.parse(localStorage.getItem(LOCAL_LIB_KEY) || '[]'); } catch { LOCAL_LIB = []; }
  function persistLocalLib() {
    try { localStorage.setItem(LOCAL_LIB_KEY, JSON.stringify(LOCAL_LIB)); } catch {}
  }
  function allSavedQueries() {
    return [...SHARED.map(q => ({ ...q, __source: 'shared' })), ...LOCAL_LIB.map(q => ({ ...q, __source: 'local' }))];
  }

  const libSection = document.getElementById('libSection');
  const libList = document.getElementById('libList');
  const libFilter = document.getElementById('libFilter');

  document.getElementById('libSectionToggle').addEventListener('click', () => {
    libSection.classList.toggle('collapsed');
  });

  function renderLibList() {
    const all = allSavedQueries();
    document.getElementById('libCount').textContent = String(all.length);
    const term = libFilter.value.trim().toUpperCase();
    const items = all.filter(q => !term ||
      (q.title || '').toUpperCase().includes(term) ||
      (q.description || '').toUpperCase().includes(term) ||
      (q.views || []).some(v => (v.name || '').toUpperCase().includes(term)));
    if (all.length === 0) {
      libList.innerHTML = '<p class="lib-empty">No saved queries yet — be the first with "💾 Save" below the builder, or paste one below.</p>';
      return;
    }
    if (items.length === 0) {
      libList.innerHTML = '<p class="lib-empty">No saved query matches "' + escapeHtml(libFilter.value) + '".</p>';
      return;
    }
    libList.innerHTML = items.map((q) => {
      const idx = all.indexOf(q);
      const viewsTag = (q.views || []).map(v => v.name).filter(Boolean).join(', ');
      const contrib = q.contributor ? ' · by ' + escapeHtml(q.contributor) : '';
      const sourceBadge = q.__source === 'local'
        ? ' <span class="tag local" title="Saved in this browser only — not yet in the shared index/query-library.json">local</span>'
        : '';
      const removeBtn = q.__source === 'local' ? '<button class="remove remove-local" data-remove="' + idx + '">✕</button>' : '';
      return '<div class="lib-item"><span class="title">' + escapeHtml(q.title || '(untitled)') + '</span>' + sourceBadge +
        '<span class="tag">' + escapeHtml(viewsTag) + contrib + '</span>' +
        '<button class="link" data-load="' + idx + '">Load ↓</button>' + removeBtn +
        (q.description ? '<span class="desc">' + escapeHtml(q.description) + '</span>' : '') +
        '</div>';
    }).join('');
  }
  libFilter.addEventListener('input', renderLibList);
  libList.addEventListener('click', (e) => {
    const loadBtn = e.target.closest('[data-load]');
    if (loadBtn) { loadSavedQuery(allSavedQueries()[Number(loadBtn.dataset.load)]); return; }
    const removeBtn = e.target.closest('[data-remove]');
    if (removeBtn) {
      // allSavedQueries() shallow-copies every entry (for the __source tag),
      // so an object-identity lookup back into LOCAL_LIB would never match —
      // SHARED always comes first in that combined array, so the LOCAL_LIB
      // index is just the combined index shifted back by SHARED's length.
      const i = Number(removeBtn.dataset.remove) - SHARED.length;
      if (i >= 0 && i < LOCAL_LIB.length) { LOCAL_LIB.splice(i, 1); persistLocalLib(); renderLibList(); }
    }
  });
  renderLibList();

  // ── Paste-to-save (import) ──────────────────────────────────────────────
  document.getElementById('importBtn').addEventListener('click', () => {
    const box = document.getElementById('importInput');
    const msg = document.getElementById('importMsg');
    let obj;
    try {
      obj = JSON.parse(box.value.replace(/,\s*$/, ''));
    } catch (err) {
      msg.className = 'msg err';
      msg.textContent = 'Not valid JSON: ' + err.message;
      return;
    }
    if (!obj || typeof obj !== 'object' || !obj.title) {
      msg.className = 'msg err';
      msg.textContent = 'Needs at least a "title" field.';
      return;
    }
    LOCAL_LIB.push(obj);
    persistLocalLib();
    renderLibList();
    box.value = '';
    msg.className = 'msg ok';
    msg.textContent = 'Added "' + obj.title + '" to this browser\\'s saved queries.';
  });

  document.getElementById('statsLine').textContent = ${JSON.stringify(`${stats.viewCount} view(s) available · ${stats.libCount} saved quer${stats.libCount === 1 ? 'y' : 'ies'} in the shared library (plus anything saved locally in your browser).`)};

  // ── Primary view picker ──────────────────────────────────────────────────
  const viewq = document.getElementById('viewq');
  const viewResults = document.getElementById('viewResults');
  const picked = document.getElementById('picked');
  const joinsWrap = document.getElementById('joinsWrap');
  const builder = document.getElementById('builder');

  // joinedViews[0] is always the FROM view (joinType/on*/raw unused on it).
  // joinedViews[i>0]: { alias, name, fields, joinType, onLeftAlias, onLeftField, onRightField, rawToggle, raw }
  // — rawToggle replaces the whole "JOIN_TYPE View AS alias ON condition"
  // line with free text (raw) instead of just the ON condition.
  let joinedViews = [];

  function searchViews(term) {
    const names = Object.keys(viewsIndex());
    const upper = term.toUpperCase();
    const starts = [], contains = [];
    for (const n of names) {
      if (!upper) continue;
      if (n.startsWith(upper)) starts.push(n);
      else if (n.includes(upper)) contains.push(n);
    }
    return [...starts.sort(), ...contains.sort()].slice(0, 40);
  }

  function viewRowsHtml(matches) {
    return matches.map(n => {
      const meta = DATA.M[n] || ['', 0];
      const warn = meta[1] ? ' <span class="warn">⚠ not queryable</span>' : '';
      return '<div class="vrow" data-view="' + escapeHtml(n) + '"><span class="name">' + escapeHtml(n) + '</span>' + warn +
        '<span class="tag">' + escapeHtml(meta[0] || '') + '</span></div>';
    }).join('');
  }

  function renderViewResults() {
    const term = viewq.value.trim();
    if (!term) { viewResults.classList.remove('open'); viewResults.innerHTML = ''; return; }
    const matches = searchViews(term);
    viewResults.innerHTML = matches.length
      ? viewRowsHtml(matches)
      : '<div class="vrow" style="cursor:default;color:var(--text-muted)">No view name matches "' + escapeHtml(term) + '".</div>';
    viewResults.classList.add('open');
  }
  viewq.addEventListener('input', renderViewResults);
  viewResults.addEventListener('click', (e) => {
    const row = e.target.closest('.vrow[data-view]');
    if (row) pickPrimaryView(row.dataset.view);
  });

  document.getElementById('pickedClear').addEventListener('click', () => {
    joinedViews = [];
    picked.classList.remove('open');
    joinsWrap.style.display = 'none';
    builder.classList.remove('open');
    viewq.value = '';
    viewq.focus();
  });

  function pickPrimaryView(name) {
    joinedViews = [{ alias: 't1', name, fields: fieldsOf(name) }];
    viewResults.classList.remove('open');
    viewq.value = name;

    const meta = DATA.M[name] || ['', 0];
    document.getElementById('pickedName').textContent = name;
    const p = DATA.P[name];
    const link = document.getElementById('pickedLink');
    if (p) { link.href = GITHUB_BLOB_BASE + p; link.style.display = ''; } else { link.style.display = 'none'; }
    document.getElementById('pickedComponent').textContent = meta[0] || '';
    document.getElementById('pickedWarn').innerHTML = meta[1]
      ? '<span class="warn" style="border:1px solid var(--status-warn);border-radius:4px;padding:1px 6px;">⚠ abstract entity/action-parameter structure — no runtime entity set to query</span>' : '';
    picked.classList.add('open');
    joinsWrap.style.display = '';
    builder.classList.add('open');

    renderJoins();
    resetClauseState();
  }

  // ── Joins ────────────────────────────────────────────────────────────────
  function nextAlias() { return 't' + (joinedViews.length + 1); }

  document.getElementById('joinAdd').addEventListener('click', () => {
    joinedViews.push({
      mode: null, // set to 'assoc' or 'join' once the row picks one or the other
      alias: nextAlias(), name: '', fields: [], joinType: JOIN_TYPES[0],
      onLeftAlias: joinedViews[0]?.alias || '', onLeftField: '', onRightField: '',
      rawToggle: false, raw: '',
    });
    renderJoins();
    resetClauseState();
  });

  function priorFieldOptions(uptoIdx) {
    const opts = [];
    for (let i = 0; i < uptoIdx; i++) {
      const v = joinedViews[i];
      for (const f of (v.fields || [])) opts.push({ alias: v.alias, name: f.name });
    }
    return opts;
  }

  // Each join row is either an existing CDS association exposed as a path
  // expression (_Alias.Field — no JOIN needed, and how S/4HANA Cloud Public
  // Edition consumption views overwhelmingly combine views: an association
  // already encodes the correct target/cardinality, so there's nothing to
  // misconfigure the way a hand-written ON condition can be) or a manual
  // JOIN for views that don't have one already. Only the primary view's own
  // declared associations are offered (not further associations of an
  // already-joined view) — deep multi-hop path chaining isn't modeled here.
  //
  // A manual-JOIN row can also be typed as one raw JOIN...ON line instead of
  // using the structured pickers below it — same escape-hatch pattern as
  // every clause section (Select/Where/...). Trade-off: a raw row's view is
  // unknown to this page, so it contributes no fields to SELECT/WHERE/
  // GROUP BY/HAVING/ORDER BY's pickers (noted inline).
  function renderJoins() {
    const el = document.getElementById('joinRows');
    const usedAssocAliases = new Set(joinedViews.filter(v => v.mode === 'assoc').map(v => v.assocAlias));
    const availableAssocs = associationsOf(joinedViews[0]?.name).filter(a => !usedAssocAliases.has(a.alias));

    el.innerHTML = joinedViews.slice(1).map((v, i0) => {
      const idx = i0 + 1;
      const base = 'join_' + idx;
      const removeBtn = '<button class="remove" data-idx="' + idx + '" data-role="removeJoin">✕ remove</button>';

      // State A: nothing picked yet — association first, manual JOIN as fallback.
      if (!v.name) {
        const assocOpts = availableAssocs.map(a =>
          '<option value="' + escapeHtml(a.alias) + '">' + escapeHtml(a.alias) + ' → ' + escapeHtml(a.targetView) + (a.cardinality ? ' ' + escapeHtml(a.cardinality) : '') + '</option>'
        ).join('');
        const assocPicker = availableAssocs.length
          ? '<select id="' + base + '_assoc" name="' + base + '_assoc" class="op" style="flex-basis:100%" data-idx="' + idx + '" data-role="pickAssoc"><option value="">— use an existing association (recommended) —</option>' + assocOpts + '</select>' +
            '<span style="flex-basis:100%;color:var(--text-muted);font-size:11px">…or type any view name below for a manual JOIN:</span>'
          : '<span style="flex-basis:100%;color:var(--text-muted);font-size:11px">' + escapeHtml(joinedViews[0]?.name || '') + ' has no (unused) declared associations — type a view name below for a manual JOIN:</span>';
        return '<div class="join-row" data-row="' + idx + '">' + assocPicker +
          '<div class="viewpick">' +
            '<input type="text" id="' + base + '_view" name="' + base + '_view" class="joinViewInput" data-idx="' + idx + '" placeholder="Type a view name…" value="" autocomplete="off" spellcheck="false" />' +
            '<div class="join-view-results" data-idx="' + idx + '" style="display:none;position:absolute;z-index:5;left:0;right:0;background:var(--page-plane);border:1px solid var(--border);border-radius:8px;max-height:220px;overflow-y:auto;"></div>' +
          '</div>' +
          removeBtn + '</div>';
      }

      const meta = DATA.M[v.name] || ['', 0];
      const abstractWarn = meta[1]
        ? '<span class="join-warn">⚠ ' + escapeHtml(v.name) + ' is an abstract entity/action-parameter structure — no runtime entity set to query</span>' : '';

      // State B: association mode — path expression, no JOIN/ON to configure.
      if (v.mode === 'assoc') {
        return '<div class="join-row" data-row="' + idx + '">' +
          '<span class="alias-badge">' + escapeHtml(v.alias) + '</span>' +
          '<span class="tag">association → ' + escapeHtml(v.name) + '</span>' +
          removeBtn + abstractWarn +
          '<span class="join-warn" style="color:var(--text-secondary);flex-basis:100%">No JOIN needed — its fields already show as <code>' + escapeHtml(v.alias) + '.Field</code> below.</span>' +
          '</div>';
      }

      // State C: manual JOIN.
      const rawToggleHtml = '<div class="raw-toggle"><input type="checkbox" id="' + base + '_rawToggle" name="' + base + '_rawToggle" class="rawToggle" data-idx="' + idx + '"' + (v.rawToggle ? ' checked' : '') + ' /><label for="' + base + '_rawToggle">Type raw JOIN text instead of using the builder below</label></div>';
      if (v.rawToggle) {
        const rawBox = '<textarea id="' + base + '_raw" name="' + base + '_raw" class="raw" data-idx="' + idx + '" data-role="raw" placeholder="e.g. LEFT JOIN I_ProductText AS ' + escapeHtml(v.alias) + ' ON t1.Product = ' + escapeHtml(v.alias) + '.Product">' + escapeHtml(v.raw || '') + '</textarea>';
        const knownWarn = '<span class="join-warn">' + escapeHtml(v.name) + '\\'s fields are still available below — only the JOIN line itself is raw text.</span>';
        return '<div class="join-row" data-row="' + idx + '">' + rawToggleHtml +
          '<span class="alias-badge">' + escapeHtml(v.alias) + '</span>' + removeBtn +
          knownWarn +
          rawBox + '</div>';
      }

      const joinTypeOpts = JOIN_TYPES.map(t => '<option' + (t === v.joinType ? ' selected' : '') + '>' + t + '</option>').join('');
      const priorOpts = priorFieldOptions(idx);
      const leftOpts = priorOpts.map(o => {
        const val = o.alias + '.' + o.name;
        const sel = v.onLeftAlias === o.alias && v.onLeftField === o.name ? ' selected' : '';
        return '<option value="' + escapeHtml(val) + '"' + sel + '>' + escapeHtml(val) + '</option>';
      }).join('');
      const rightOpts = (v.fields || []).map(f =>
        '<option' + (f.name === v.onRightField ? ' selected' : '') + '>' + escapeHtml(f.name) + '</option>'
      ).join('');
      const onBuilder = '<select id="' + base + '_onLeft" name="' + base + '_onLeft" class="field" data-idx="' + idx + '" data-role="onLeft">' + leftOpts + '</select>' +
        '<span style="color:var(--text-muted)">=</span>' +
        '<span class="alias-badge">' + escapeHtml(v.alias) + '</span>' +
        '<select id="' + base + '_onRight" name="' + base + '_onRight" class="field" data-idx="' + idx + '" data-role="onRight">' + rightOpts + '</select>';
      return '<div class="join-row" data-row="' + idx + '">' + rawToggleHtml +
        '<select id="' + base + '_joinType" name="' + base + '_joinType" class="op" data-idx="' + idx + '" data-role="joinType">' + joinTypeOpts + '</select>' +
        '<div class="viewpick">' +
          '<input type="text" id="' + base + '_view" name="' + base + '_view" class="joinViewInput" data-idx="' + idx + '" placeholder="Type a view name…" value="' + escapeHtml(v.name) + '" autocomplete="off" spellcheck="false" />' +
          '<div class="join-view-results" data-idx="' + idx + '" style="display:none;position:absolute;z-index:5;left:0;right:0;background:var(--page-plane);border:1px solid var(--border);border-radius:8px;max-height:220px;overflow-y:auto;"></div>' +
        '</div>' +
        '<span class="alias-badge">' + escapeHtml(v.alias) + '</span>' +
        removeBtn +
        abstractWarn +
        '<div class="on-line"><span style="color:var(--text-muted);font-size:12px">ON</span>' + onBuilder + '</div></div>';
    }).join('');

    el.querySelectorAll('[data-role="pickAssoc"]').forEach(sel => sel.addEventListener('change', (e) => {
      const alias = e.target.value;
      if (!alias) return;
      const assoc = availableAssocs.find(a => a.alias === alias);
      if (!assoc) return;
      const v = joinedViews[Number(e.target.dataset.idx)];
      v.mode = 'assoc';
      v.assocAlias = alias;
      v.alias = alias;
      // The Associations table's "Target View" column keeps the DDL's own
      // casing (e.g. "I_ProductText"), but window.__VIEW_FIELDS__ and
      // DATA.M are keyed by the all-uppercase view name — normalize here so
      // fieldsOf/DATA.M lookups for this row actually hit.
      v.name = assoc.targetView.toUpperCase();
      v.fields = fieldsOf(v.name);
      renderJoins();
      resetClauseState();
    }));
    el.querySelectorAll('.joinViewInput').forEach(input => {
      input.addEventListener('input', (e) => {
        const idx = Number(e.target.dataset.idx);
        const box = el.querySelector('.join-view-results[data-idx="' + idx + '"]');
        const term = e.target.value.trim();
        if (!term) { box.style.display = 'none'; box.innerHTML = ''; return; }
        const matches = searchViews(term);
        box.innerHTML = matches.length ? viewRowsHtml(matches) : '<div class="vrow" style="cursor:default;color:var(--text-muted)">No match.</div>';
        box.style.display = matches.length ? '' : 'none';
      });
    });
    el.querySelectorAll('.join-view-results').forEach(box => {
      box.addEventListener('click', (e) => {
        const row = e.target.closest('.vrow[data-view]');
        if (!row) return;
        const idx = Number(box.dataset.idx);
        const name = row.dataset.view;
        joinedViews[idx].mode = 'join';
        joinedViews[idx].name = name;
        joinedViews[idx].fields = fieldsOf(name);
        joinedViews[idx].onLeftField = ''; joinedViews[idx].onRightField = '';
        renderJoins();
        resetClauseState();
      });
    });
    el.querySelectorAll('[data-role="joinType"]').forEach(sel => sel.addEventListener('change', (e) => {
      joinedViews[Number(e.target.dataset.idx)].joinType = e.target.value; buildQuery();
    }));
    el.querySelectorAll('[data-role="onLeft"]').forEach(sel => sel.addEventListener('change', (e) => {
      const [alias, field] = e.target.value.split('.');
      const v = joinedViews[Number(e.target.dataset.idx)];
      v.onLeftAlias = alias; v.onLeftField = field; buildQuery();
    }));
    el.querySelectorAll('[data-role="onRight"]').forEach(sel => sel.addEventListener('change', (e) => {
      joinedViews[Number(e.target.dataset.idx)].onRightField = e.target.value; buildQuery();
    }));
    el.querySelectorAll('[data-role="raw"]').forEach(ta => ta.addEventListener('input', (e) => {
      joinedViews[Number(e.target.dataset.idx)].raw = e.target.value; buildQuery();
    }));
    el.querySelectorAll('.rawToggle').forEach(chk => chk.addEventListener('change', (e) => {
      const v = joinedViews[Number(e.target.dataset.idx)];
      v.rawToggle = e.target.checked;
      if (v.rawToggle && !v.raw && v.name) v.raw = joinLineText(v);
      renderJoins();
      resetClauseState();
    }));
    el.querySelectorAll('[data-role="removeJoin"]').forEach(btn => btn.addEventListener('click', (e) => {
      joinedViews.splice(Number(e.target.dataset.idx), 1);
      // Only manual-JOIN rows use sequential t2/t3/... aliases; association
      // rows keep their own declared alias (e.g. _Text) regardless of
      // position, so renumbering must skip them.
      let n = 1;
      joinedViews.forEach((v) => { if (v.mode !== 'assoc') v.alias = 't' + (n++); else n++; });
      renderJoins();
      resetClauseState();
    }));

    buildQuery();
  }

  // ── Combined field universe ──────────────────────────────────────────────
  // Qualification differs by how a view got joined:
  //   - an association row (mode 'assoc') is ALWAYS path-qualified as
  //     alias.Field (e.g. _Text.ProductDescription) — that's the whole
  //     point of a path expression, regardless of what else is joined.
  //   - the primary view is qualified with its own alias only once a real
  //     (manual) JOIN exists — real SQL joins need every side disambiguated,
  //     but a lone association off the primary doesn't need the primary
  //     itself aliased (SELECT Product, _Text.ProductDescription FROM
  //     I_Product — no "AS t1" anywhere).
  //   - a manual-JOIN row is always qualified with its own t2/t3/... alias.
  function allFields() {
    const hasManualJoin = joinedViews.some((v) => v !== joinedViews[0] && v.name && v.mode !== 'assoc');
    return joinedViews.filter(v => v.name).flatMap((v) => {
      const isPrimary = v === joinedViews[0];
      const qualify = v.mode === 'assoc' || (isPrimary ? hasManualJoin : true);
      return (v.fields || []).map(f => ({ ...f, alias: v.alias, qualifiedName: qualify ? v.alias + '.' + f.name : f.name }));
    });
  }

  // ── Builder state ────────────────────────────────────────────────────────
  let selectState = {}; // qualifiedName -> { checked, agg }
  let groupByState = {}; // qualifiedName -> checked
  let whereConds = []; // { field, op, value, value2, joiner }
  let havingConds = [];
  let orderConds = []; // { field, dir }

  const RAW_SECTIONS = ['select', 'where', 'groupBy', 'having', 'order'];

  function resetClauseState() {
    selectState = {};
    groupByState = {};
    const fields = allFields();
    for (const f of fields) { selectState[f.qualifiedName] = { checked: false, agg: AGGS[0] }; groupByState[f.qualifiedName] = false; }
    whereConds = [{ field: fields[0]?.qualifiedName || '', op: '=', value: '', value2: '', joiner: 'AND' }];
    havingConds = [];
    orderConds = [];
    for (const prefix of RAW_SECTIONS) {
      document.getElementById(prefix + 'RawToggle').checked = false;
      document.getElementById(prefix + 'Raw').style.display = 'none';
      document.getElementById(prefix + 'Raw').value = '';
      document.getElementById(prefix + 'BuilderWrap').style.display = '';
    }
    document.getElementById('selectFieldFilter').value = '';
    document.getElementById('groupByFieldFilter').value = '';

    renderSelectFields();
    renderGroupByFields();
    renderWhereRows();
    renderHavingRows();
    renderOrderRows();
    buildQuery();
  }

  // Each section (Select/Where/Group By/Having/Order By) can be typed as raw
  // text instead of using its structured builder — the builder UI covers the
  // common cases, but CASE expressions, function calls, or anything else the
  // structured rows can't represent still need an escape hatch.
  function wireRawToggle(prefix) {
    const toggle = document.getElementById(prefix + 'RawToggle');
    const raw = document.getElementById(prefix + 'Raw');
    const wrap = document.getElementById(prefix + 'BuilderWrap');
    toggle.addEventListener('change', (e) => {
      raw.style.display = e.target.checked ? '' : 'none';
      wrap.style.display = e.target.checked ? 'none' : '';
      buildQuery();
    });
    raw.addEventListener('input', buildQuery);
  }
  RAW_SECTIONS.forEach(wireRawToggle);

  // Collapse/expand each clause section (Select/Where/Group By/Having/Order
  // By) by clicking its heading — scoped to builder-left only, so the
  // sticky "Generated query" output on the right always stays visible.
  document.querySelectorAll('.builder-left .section > h2').forEach((h2) => {
    h2.addEventListener('click', () => h2.parentElement.classList.toggle('collapsed'));
  });

  // Quick filter above a field-grid: hides non-matching .field-item rows
  // instead of re-rendering, so ticked/aggregate state on visible rows is
  // never disturbed by typing into the filter.
  function wireFieldFilter(inputId, gridId) {
    document.getElementById(inputId).addEventListener('input', (e) => {
      const term = e.target.value.trim().toUpperCase();
      document.querySelectorAll('#' + gridId + ' .field-item').forEach((item) => {
        const name = item.dataset.name || '';
        item.style.display = !term || name.includes(term) ? '' : 'none';
      });
    });
  }
  wireFieldFilter('selectFieldFilter', 'selectFields');
  wireFieldFilter('groupByFieldFilter', 'groupByFields');

  function renderSelectFields() {
    const el = document.getElementById('selectFields');
    const fields = allFields();
    el.innerHTML = fields.map(f => {
      const id = 'sel_' + f.qualifiedName;
      const aggOpts = AGGS.map(a => '<option value="' + a + '">' + a + '</option>').join('');
      return '<div class="field-item" data-name="' + escapeHtml(f.qualifiedName.toUpperCase()) + '"><input type="checkbox" id="' + id + '" data-field="' + escapeHtml(f.qualifiedName) + '" class="selChk" />' +
        '<label for="' + id + '" title="' + escapeHtml(f.source || f.qualifiedName) + '">' + escapeHtml(f.qualifiedName) + '</label>' +
        (f.isKey ? '<span class="key">key</span>' : '') +
        '<select id="agg_' + id + '" name="agg_' + id + '" data-field="' + escapeHtml(f.qualifiedName) + '" class="selAgg">' + aggOpts + '</select></div>';
    }).join('') || '<span style="color:var(--text-muted)">No parsed field list for this view yet.</span>';
    el.querySelectorAll('.selChk').forEach(chk => chk.addEventListener('change', (e) => {
      selectState[e.target.dataset.field].checked = e.target.checked; buildQuery();
    }));
    el.querySelectorAll('.selAgg').forEach(sel => sel.addEventListener('change', (e) => {
      selectState[e.target.dataset.field].agg = e.target.value; buildQuery();
    }));
  }

  function renderGroupByFields() {
    const el = document.getElementById('groupByFields');
    const fields = allFields();
    el.innerHTML = fields.map(f => {
      const id = 'grp_' + f.qualifiedName;
      return '<div class="field-item" data-name="' + escapeHtml(f.qualifiedName.toUpperCase()) + '"><input type="checkbox" id="' + id + '" data-field="' + escapeHtml(f.qualifiedName) + '" class="grpChk" />' +
        '<label for="' + id + '">' + escapeHtml(f.qualifiedName) + '</label></div>';
    }).join('') || '<span style="color:var(--text-muted)">No parsed field list for this view yet.</span>';
    el.querySelectorAll('.grpChk').forEach(chk => chk.addEventListener('change', (e) => {
      groupByState[e.target.dataset.field] = e.target.checked; buildQuery();
    }));
  }

  function fieldOptionsHtml(selected) {
    return allFields().map(f => '<option value="' + escapeHtml(f.qualifiedName) + '"' + (f.qualifiedName === selected ? ' selected' : '') + '>' + escapeHtml(f.qualifiedName) + '</option>').join('');
  }

  function needsNoValue(op) { return op === 'IS NULL' || op === 'IS NOT NULL'; }
  function needsSecondValue(op) { return op === 'BETWEEN'; }

  function renderConditionRows(containerId, conds) {
    const el = document.getElementById(containerId);
    el.innerHTML = conds.map((c, i) => {
      const base = containerId + '_' + i;
      const joiner = i === 0 ? '' : '<select id="' + base + '_joiner" name="' + base + '_joiner" class="joiner" data-idx="' + i + '" data-role="joiner"><option' + (c.joiner === 'AND' ? ' selected' : '') + '>AND</option><option' + (c.joiner === 'OR' ? ' selected' : '') + '>OR</option></select>';
      const opOpts = OPS.map(o => '<option' + (o === c.op ? ' selected' : '') + '>' + o + '</option>').join('');
      const val1 = needsNoValue(c.op) ? '' : '<input type="text" id="' + base + '_value" name="' + base + '_value" class="val" data-idx="' + i + '" data-role="value" placeholder="value" value="' + escapeHtml(c.value) + '" />';
      const val2 = needsSecondValue(c.op) ? '<span style="color:var(--text-muted);font-size:12px">AND</span><input type="text" id="' + base + '_value2" name="' + base + '_value2" class="val" data-idx="' + i + '" data-role="value2" placeholder="value 2" value="' + escapeHtml(c.value2) + '" />' : '';
      return '<div class="cond-row">' + joiner +
        '<select id="' + base + '_field" name="' + base + '_field" class="field" data-idx="' + i + '" data-role="field">' + fieldOptionsHtml(c.field) + '</select>' +
        '<select id="' + base + '_op" name="' + base + '_op" class="op" data-idx="' + i + '" data-role="op">' + opOpts + '</select>' +
        val1 + val2 +
        '<button class="remove" data-idx="' + i + '" data-role="remove">✕</button></div>';
    }).join('') || '<p class="subhint">No conditions — leave empty to omit this clause.</p>';

    el.querySelectorAll('[data-role]').forEach(input => {
      const evt = input.tagName === 'BUTTON' ? 'click' : input.tagName === 'INPUT' ? 'input' : 'change';
      input.addEventListener(evt, (e) => {
        const idx = Number(e.target.dataset.idx);
        const role = e.target.dataset.role;
        if (role === 'remove') { conds.splice(idx, 1); renderConditionRows(containerId, conds); buildQuery(); return; }
        conds[idx][role] = e.target.value;
        if (role === 'op') renderConditionRows(containerId, conds);
        buildQuery();
      });
    });
  }

  function renderWhereRows() { renderConditionRows('whereRows', whereConds); }
  function renderHavingRows() { renderConditionRows('havingRows', havingConds); }

  document.getElementById('whereAdd').addEventListener('click', () => {
    whereConds.push({ field: allFields()[0]?.qualifiedName || '', op: '=', value: '', value2: '', joiner: 'AND' });
    renderWhereRows(); buildQuery();
  });
  document.getElementById('havingAdd').addEventListener('click', () => {
    havingConds.push({ field: allFields()[0]?.qualifiedName || '', op: '=', value: '', value2: '', joiner: 'AND' });
    renderHavingRows(); buildQuery();
  });

  function renderOrderRows() {
    const el = document.getElementById('orderRows');
    el.innerHTML = orderConds.map((c, i) => {
      const base = 'order_' + i;
      return '<div class="cond-row">' +
      '<select id="' + base + '_field" name="' + base + '_field" class="field" data-idx="' + i + '" data-role="field">' + fieldOptionsHtml(c.field) + '</select>' +
      '<select id="' + base + '_dir" name="' + base + '_dir" class="op" data-idx="' + i + '" data-role="dir"><option' + (c.dir === 'ASC' ? ' selected' : '') + '>ASC</option><option' + (c.dir === 'DESC' ? ' selected' : '') + '>DESC</option></select>' +
      '<button class="remove" data-idx="' + i + '" data-role="remove">✕</button></div>';
    }).join('') || '<p class="subhint">No sort fields.</p>';
    el.querySelectorAll('[data-role]').forEach(input => {
      const evt = input.tagName === 'BUTTON' ? 'click' : 'change';
      input.addEventListener(evt, (e) => {
        const idx = Number(e.target.dataset.idx);
        const role = e.target.dataset.role;
        if (role === 'remove') { orderConds.splice(idx, 1); renderOrderRows(); buildQuery(); return; }
        orderConds[idx][role] = e.target.value;
        buildQuery();
      });
    });
  }
  document.getElementById('orderAdd').addEventListener('click', () => {
    orderConds.push({ field: allFields()[0]?.qualifiedName || '', dir: 'ASC' });
    renderOrderRows(); buildQuery();
  });

  // ── Query text generation ────────────────────────────────────────────────
  function quoteValue(raw, op) {
    const v = (raw || '').trim();
    if (!v) return v;
    if (op !== 'LIKE' && op !== 'NOT LIKE' && /^-?\\d+(\\.\\d+)?$/.test(v)) return v;
    return "'" + v.replace(/'/g, "''") + "'";
  }

  function conditionText(c) {
    if (needsNoValue(c.op)) return c.field + ' ' + c.op;
    if (c.op === 'IN') {
      const items = (c.value || '').split(',').map(s => s.trim()).filter(Boolean).map(v => quoteValue(v, c.op));
      return c.field + ' IN (' + (items.join(', ') || '<value>') + ')';
    }
    if (needsSecondValue(c.op)) {
      return c.field + ' BETWEEN ' + (quoteValue(c.value, c.op) || '<value1>') + ' AND ' + (quoteValue(c.value2, c.op) || '<value2>');
    }
    return c.field + ' ' + c.op + ' ' + (quoteValue(c.value, c.op) || '<value>');
  }

  function conditionsText(conds) {
    return conds.map((c, i) => (i === 0 ? '' : '  ' + c.joiner + ' ') + conditionText(c)).join('\\n');
  }

  function joinOnText(v) {
    if (!v.onLeftAlias || !v.onLeftField || !v.onRightField) return '';
    return v.onLeftAlias + '.' + v.onLeftField + ' = ' + v.alias + '.' + v.onRightField;
  }

  // Full "JOIN_TYPE View AS alias ON condition" line for a non-raw join row
  // — used both to render that row's line in the generated query and to
  // pre-fill its raw textarea with a sensible starting point when the user
  // flips that row to raw mode instead of handing them a blank box.
  function joinLineText(v) {
    return v.joinType + ' ' + v.name + ' AS ' + v.alias + ' ON ' + (joinOnText(v) || '<join condition>');
  }

  function fromClauseLines() {
    const hasManualJoin = joinedViews.some((v) => v !== joinedViews[0] && v.name && v.mode !== 'assoc');
    return joinedViews.map((v, i) => {
      if (i === 0) return v.name ? 'FROM ' + v.name + (hasManualJoin ? ' AS ' + v.alias : '') : null;
      if (v.mode === 'assoc') return null; // path expression — nothing to add to FROM
      if (v.rawToggle) return (v.raw || '').trim() || '<join line>';
      if (!v.name) return null;
      return joinLineText(v);
    }).filter(Boolean);
  }

  function isRaw(prefix) { return document.getElementById(prefix + 'RawToggle').checked; }
  function rawText(prefix) { return document.getElementById(prefix + 'Raw').value.trim(); }

  // Small hand-rolled ABAP/SQL-style keyword highlighter for #output — good
  // enough for the fixed vocabulary this page's own generator produces (and
  // reasonable for hand-typed raw text too), not a real parser. abaplint
  // (github.com/abaplint/abaplint) is a static-analysis linter for whole
  // ABAP programs, not a lightweight standalone highlighter for a snippet
  // like this, so it isn't pulled in — bundling it would also break this
  // page's one-file, works-over-file:// design; this instead borrows its
  // general keyword/string/number color convention.
  const ABAP_KEYWORDS = new Set(['SELECT', 'FROM', 'WHERE', 'GROUP', 'BY', 'HAVING', 'ORDER', 'JOIN', 'INNER', 'LEFT', 'RIGHT', 'FULL', 'ON', 'AND', 'OR', 'AS', 'IN', 'LIKE', 'NOT', 'IS', 'NULL', 'BETWEEN', 'ASC', 'DESC']);
  const ABAP_FUNCS = new Set(['COUNT', 'SUM', 'AVG', 'MIN', 'MAX']);
  const ABAP_OPS = new Set(['=', '<>', '>', '<', '>=', '<=']);
  function highlightAbap(text) {
    // String literals first, so nothing inside them is re-tokenized as a
    // keyword/operator — split keeps the quoted segments at odd indices.
    return text.split(/('(?:[^']|'')*')/g).map((part, i) => {
      if (i % 2 === 1) return '<span class="tok-str">' + escapeHtml(part) + '</span>';
      // Word-splitting on whitespace/punctuation is enough here (this
      // page's own output always space-separates keywords/operators) —
      // simpler and less escaping-prone than a \\b-based regex alternation.
      return part.split(/(\\s+|[(),])/g).map((tok) => {
        if (!tok) return '';
        const upper = tok.toUpperCase();
        let cls = null;
        if (ABAP_FUNCS.has(upper)) cls = 'tok-fn';
        else if (ABAP_KEYWORDS.has(upper)) cls = 'tok-kw';
        else if (ABAP_OPS.has(tok)) cls = 'tok-op';
        else if (/^\\d+(\\.\\d+)?$/.test(tok)) cls = 'tok-num';
        const escaped = escapeHtml(tok);
        return cls ? '<span class="' + cls + '">' + escaped + '</span>' : escaped;
      }).join('');
    }).join('');
  }

  function buildQuery() {
    const out = document.getElementById('output');
    if (!joinedViews.length || !joinedViews[0].name) { out.textContent = ''; return; }

    let selectText;
    if (isRaw('select')) {
      selectText = rawText('select') || '*';
    } else {
      const selected = allFields().filter(f => selectState[f.qualifiedName]?.checked);
      const selectParts = selected.map(f => {
        const agg = selectState[f.qualifiedName].agg;
        return agg === AGGS[0] ? f.qualifiedName : agg + '(' + f.qualifiedName + ')';
      });
      selectText = selectParts.length ? selectParts.join(',\\n  ') : '*';
    }

    let groupText;
    if (isRaw('groupBy')) {
      groupText = rawText('groupBy');
    } else {
      groupText = allFields().filter(f => groupByState[f.qualifiedName]).map(f => f.qualifiedName).join(', ');
    }

    const whereText = isRaw('where') ? rawText('where') : conditionsText(whereConds.filter(c => c.field));
    const havingText = isRaw('having') ? rawText('having') : conditionsText(havingConds.filter(c => c.field));
    const orderText = isRaw('order') ? rawText('order') : orderConds.map(c => c.field + ' ' + c.dir).join(', ');

    let lines = ['SELECT', '  ' + selectText, ...fromClauseLines()];
    if (whereText) lines.push('WHERE\\n  ' + whereText);
    if (groupText) lines.push('GROUP BY ' + groupText);
    if (havingText) lines.push('HAVING\\n  ' + havingText);
    if (orderText) lines.push('ORDER BY ' + orderText);

    // innerHTML for the colored tokens — the Copy button still reads back
    // .textContent, which returns the plain concatenated text regardless of
    // how it was set, so highlighting never leaks into what gets copied.
    out.innerHTML = highlightAbap(lines.join('\\n'));
  }

  document.getElementById('copyBtn').addEventListener('click', () => {
    const text = document.getElementById('output').textContent;
    if (!text) return;
    navigator.clipboard?.writeText(text).then(() => {
      const msg = document.getElementById('copiedMsg');
      msg.style.display = 'inline';
      setTimeout(() => { msg.style.display = 'none'; }, 1500);
    });
  });

  // ── Save (localStorage) / Generate JSON (PR snippet) / Load ─────────────
  function currentQueryAsObject() {
    return {
      title: document.getElementById('saveTitle').value.trim(),
      description: document.getElementById('saveDesc').value.trim(),
      contributor: document.getElementById('saveContributor').value.trim() || undefined,
      views: joinedViews
        .filter((v, i) => i === 0 ? !!v.name : (v.name || (v.rawToggle && (v.raw || '').trim())))
        .map((v, i) => {
          if (i === 0) return { alias: v.alias, name: v.name, joinType: null, on: null };
          if (v.mode === 'assoc') return { alias: v.alias, name: v.name, mode: 'assoc' };
          if (v.rawToggle) return { alias: v.alias, name: v.name || null, raw: (v.raw || '').trim() };
          return { alias: v.alias, name: v.name, joinType: v.joinType, on: joinOnText(v) };
        }),
      select: isRaw('select') ? rawText('select') : (function () {
        const selected = allFields().filter(f => selectState[f.qualifiedName]?.checked);
        return selected.map(f => {
          const agg = selectState[f.qualifiedName].agg;
          return agg === AGGS[0] ? f.qualifiedName : agg + '(' + f.qualifiedName + ')';
        }).join(', ');
      })(),
      where: isRaw('where') ? rawText('where') : conditionsText(whereConds.filter(c => c.field)),
      groupBy: isRaw('groupBy') ? rawText('groupBy') : allFields().filter(f => groupByState[f.qualifiedName]).map(f => f.qualifiedName).join(', '),
      having: isRaw('having') ? rawText('having') : conditionsText(havingConds.filter(c => c.field)),
      orderBy: isRaw('order') ? rawText('order') : orderConds.map(c => c.field + ' ' + c.dir).join(', '),
    };
  }

  function showSaveOutput(text) {
    const box = document.getElementById('saveOutput');
    box.style.display = '';
    box.value = text;
  }

  function requireSaveTitle(obj) {
    if (obj.title) return true;
    showSaveOutput('Add a title first (above) — it is how this query will be found and picked in the "Saved queries" list.');
    return false;
  }

  document.getElementById('saveGenBtn').addEventListener('click', () => {
    const obj = currentQueryAsObject();
    if (!requireSaveTitle(obj)) return;
    LOCAL_LIB.push(obj);
    persistLocalLib();
    renderLibList();
    libSection.classList.remove('collapsed');
    showSaveOutput('Saved locally. Use "Generate JSON" if you also need the snippet for index/query-library.json.');
  });

  document.getElementById('generateJsonBtn').addEventListener('click', () => {
    const obj = currentQueryAsObject();
    if (!requireSaveTitle(obj)) return;
    showSaveOutput(JSON.stringify(obj, null, 2) + ',');
  });

  function loadSavedQuery(q) {
    if (!q) return;
    joinedViews = (q.views || []).map((v, i) => {
      const alias = v.alias || 't' + (i + 1);
      const name = v.name || '';
      const fields = name ? fieldsOf(name) : [];
      if (i === 0) return { alias, name, fields };
      if (v.mode === 'assoc') return { alias, name, fields, mode: 'assoc', assocAlias: alias };
      // Loaded manual joins always render in raw mode (pre-filled with the
      // saved line or reconstructed from name/joinType/on) — simplest to
      // show exactly what was saved, but the view's fields (when known)
      // still flow into the pickers via allFields(), so the query stays
      // editable rather than a frozen snippet.
      const joinType = v.joinType || JOIN_TYPES[0];
      const raw = v.raw != null ? v.raw : (name ? joinType + ' ' + name + ' AS ' + alias + ' ON ' + (v.on || '<join condition>') : '');
      return {
        alias, name, fields, joinType, mode: 'join',
        onLeftAlias: '', onLeftField: '', onRightField: '',
        rawToggle: true, raw,
      };
    });
    if (!joinedViews.length) return;

    const primary = joinedViews[0];
    viewq.value = primary.name;
    const meta = DATA.M[primary.name] || ['', 0];
    document.getElementById('pickedName').textContent = primary.name;
    const p = DATA.P[primary.name];
    const link = document.getElementById('pickedLink');
    if (p) { link.href = GITHUB_BLOB_BASE + p; link.style.display = ''; } else { link.style.display = 'none'; }
    document.getElementById('pickedComponent').textContent = meta[0] || '';
    document.getElementById('pickedWarn').innerHTML = meta[1]
      ? '<span class="warn" style="border:1px solid var(--status-warn);border-radius:4px;padding:1px 6px;">⚠ abstract entity/action-parameter structure — no runtime entity set to query</span>' : '';
    picked.classList.add('open');
    joinsWrap.style.display = '';
    builder.classList.add('open');
    renderJoins();

    resetClauseState();
    for (const prefix of ['select', 'where', 'groupBy', 'having', 'order']) {
      const key = prefix === 'groupBy' ? 'groupBy' : prefix === 'order' ? 'orderBy' : prefix;
      const val = q[key];
      if (val) {
        document.getElementById(prefix + 'RawToggle').checked = true;
        document.getElementById(prefix + 'Raw').style.display = '';
        document.getElementById(prefix + 'Raw').value = val;
        document.getElementById(prefix + 'BuilderWrap').style.display = 'none';
      }
    }
    buildQuery();
    document.getElementById('picked').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
</script>
</body>
</html>
`;
}

main().catch((err) => {
  console.error(`Lỗi: ${err.message}`);
  process.exit(1);
});
