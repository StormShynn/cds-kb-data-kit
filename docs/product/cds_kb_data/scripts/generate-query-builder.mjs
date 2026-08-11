#!/usr/bin/env node
// scripts/generate-query-builder.mjs
// Generates query-builder.html: a self-contained, offline-first page that
// helps compose a SELECT / FROM / WHERE / GROUP BY / HAVING / ORDER BY
// statement against ONE chosen CDS view, using that view's real field names
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

async function main() {
  console.log('📋 Reading view-paths.json and scanning view frontmatter...');
  const viewPaths = JSON.parse(await fs.readFile(path.join(DATA_DIR, 'index', 'view-paths.json'), 'utf-8').catch(() => '{}'));

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

  const embedded = JSON.stringify({ M: viewMeta, P: viewPaths }).replace(/<\/script/gi, '<\\/script');

  const html = renderHtml(embedded, { viewCount: Object.keys(viewMeta).length });

  await fs.writeFile(OUTPUT_FILE, html, 'utf-8');
  const sizeKb = (Buffer.byteLength(html) / 1024).toFixed(0);
  console.log(`✅ Wrote ${OUTPUT_FILE} (${sizeKb} KB) — ${Object.keys(viewMeta).length} view(s). Needs index/view-fields.js alongside it at runtime.`);
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
  .container { max-width: 980px; margin: 0 auto; padding: 32px 20px 64px; }
  h1 { font-size: 22px; font-weight: 600; margin: 0 0 4px; }
  h1 span { color: var(--text-secondary); font-weight: 400; }
  .subtitle { color: var(--text-muted); font-size: 13px; margin: 0 0 4px; }
  .disclaimer {
    color: var(--status-warn); font-size: 12px; margin: 0 0 24px; padding: 8px 12px;
    background: rgba(217,167,44,0.08); border: 1px solid var(--status-warn); border-radius: 6px;
  }

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

  .builder { display: none; margin-top: 24px; }
  .builder.open { display: block; }
  .section { margin-top: 22px; }
  .section h2 { font-size: 13px; color: var(--text-secondary); margin: 0 0 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; }
  .section .subhint { color: var(--text-muted); font-size: 12px; margin: -6px 0 10px; }

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
  .output-bar { display: flex; align-items: center; gap: 10px; margin-bottom: 8px; }
  .output-bar .copied { color: var(--status-good); font-size: 12px; display: none; }

  .stats { color: var(--text-muted); font-size: 12px; margin-top: 32px; border-top: 1px solid var(--gridline); padding-top: 16px; }
</style>
</head>
<body class="viz-root">
<div class="container">
  <h1>CDS Knowledge Base <span>· Query Builder</span></h1>
  <p class="subtitle">Pick one CDS view, then compose SELECT / WHERE / GROUP BY / HAVING / ORDER BY against its real field names — no need to retype or guess field spelling.</p>
  <p class="disclaimer">⚠️ This only generates reference syntax from field names in this data repo. It does not connect to, validate against, or run anything on a real SAP system — check the output before using it.</p>

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

  <div id="builder" class="builder">
    <div class="section">
      <h2>Select</h2>
      <p class="subhint">Tick fields to include. Pick an aggregate to wrap a field (e.g. SUM), or leave "—" for a plain column. Nothing ticked = <code>SELECT *</code>.</p>
      <div class="field-grid" id="selectFields"></div>
    </div>

    <div class="section">
      <h2>Where</h2>
      <div class="raw-toggle"><input type="checkbox" id="whereRawToggle" /><label for="whereRawToggle">Type raw WHERE text instead of using the builder below</label></div>
      <textarea id="whereRaw" class="raw" style="display:none" placeholder="e.g. ProductType = 'FERT' AND IsMarkedForDeletion = ''"></textarea>
      <div id="whereRows"></div>
      <button id="whereAdd" class="link">+ add condition</button>
    </div>

    <div class="section">
      <h2>Group By</h2>
      <p class="subhint">Fields not ticked here that ARE ticked above with an aggregate are fine; a plain (non-aggregated) SELECT field should usually also be ticked here.</p>
      <div class="field-grid" id="groupByFields"></div>
    </div>

    <div class="section">
      <h2>Having</h2>
      <p class="subhint">Filters applied after GROUP BY — typically on an aggregate, e.g. <code>COUNT(*) &gt; 1</code>.</p>
      <div id="havingRows"></div>
      <button id="havingAdd" class="link">+ add condition</button>
    </div>

    <div class="section">
      <h2>Order By</h2>
      <div id="orderRows"></div>
      <button id="orderAdd" class="link">+ add sort field</button>
    </div>

    <div class="section">
      <h2>Generated query</h2>
      <div class="output-bar">
        <button id="copyBtn">📋 Copy</button>
        <span class="copied" id="copiedMsg">Copied!</span>
      </div>
      <pre id="output"></pre>
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

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  }

  function viewsIndex() {
    return (typeof window.__VIEW_FIELDS__ === 'object' && window.__VIEW_FIELDS__) || {};
  }

  // ── View picker ──────────────────────────────────────────────────────────
  const viewq = document.getElementById('viewq');
  const viewResults = document.getElementById('viewResults');
  const picked = document.getElementById('picked');
  const builder = document.getElementById('builder');
  let currentView = null;
  let currentFields = []; // [{name, isKey, source, type, description}]

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

  function renderViewResults() {
    const term = viewq.value.trim();
    if (!term) { viewResults.classList.remove('open'); viewResults.innerHTML = ''; return; }
    const matches = searchViews(term);
    if (matches.length === 0) {
      viewResults.innerHTML = '<div class="vrow" style="cursor:default;color:var(--text-muted)">No view name matches "' + escapeHtml(term) + '".</div>';
      viewResults.classList.add('open');
      return;
    }
    viewResults.innerHTML = matches.map(n => {
      const meta = DATA.M[n] || ['', 0];
      const warn = meta[1] ? ' <span class="warn">⚠ not queryable</span>' : '';
      return '<div class="vrow" data-view="' + escapeHtml(n) + '"><span class="name">' + escapeHtml(n) + '</span>' + warn +
        '<span class="tag">' + escapeHtml(meta[0] || '') + '</span></div>';
    }).join('');
    viewResults.classList.add('open');
  }
  viewq.addEventListener('input', renderViewResults);
  viewResults.addEventListener('click', (e) => {
    const row = e.target.closest('.vrow[data-view]');
    if (row) selectView(row.dataset.view);
  });

  document.getElementById('pickedClear').addEventListener('click', () => {
    currentView = null;
    picked.classList.remove('open');
    builder.classList.remove('open');
    viewq.value = '';
    viewq.focus();
  });

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

  function selectView(name) {
    currentView = name;
    currentFields = fieldsOf(name);
    viewResults.classList.remove('open');
    viewq.value = name;

    const meta = DATA.M[name] || ['', 0];
    document.getElementById('pickedName').textContent = name;
    const path = DATA.P[name];
    const link = document.getElementById('pickedLink');
    if (path) { link.href = GITHUB_BLOB_BASE + path; link.style.display = ''; } else { link.style.display = 'none'; }
    document.getElementById('pickedComponent').textContent = meta[0] || '';
    document.getElementById('pickedWarn').innerHTML = meta[1]
      ? '<span class="warn" style="border:1px solid var(--status-warn);border-radius:4px;padding:1px 6px;">⚠ abstract entity/action-parameter structure — no runtime entity set to query</span>' : '';
    picked.classList.add('open');
    builder.classList.add('open');

    resetBuilderState();
    renderSelectFields();
    renderGroupByFields();
    renderWhereRows();
    renderHavingRows();
    renderOrderRows();
    buildQuery();
  }

  // ── Builder state ────────────────────────────────────────────────────────
  let selectState = {}; // fieldName -> { checked, agg }
  let groupByState = {}; // fieldName -> checked
  let whereConds = []; // { field, op, value, value2, joiner }
  let havingConds = [];
  let orderConds = []; // { field, dir }

  function resetBuilderState() {
    selectState = {};
    groupByState = {};
    for (const f of currentFields) { selectState[f.name] = { checked: false, agg: AGGS[0] }; groupByState[f.name] = false; }
    whereConds = [{ field: currentFields[0]?.name || '', op: '=', value: '', value2: '', joiner: 'AND' }];
    havingConds = [];
    orderConds = [];
    document.getElementById('whereRawToggle').checked = false;
    document.getElementById('whereRaw').style.display = 'none';
    document.getElementById('whereRaw').value = '';
  }

  function renderSelectFields() {
    const el = document.getElementById('selectFields');
    el.innerHTML = currentFields.map(f => {
      const id = 'sel_' + f.name;
      const aggOpts = AGGS.map(a => '<option value="' + a + '">' + a + '</option>').join('');
      return '<div class="field-item"><input type="checkbox" id="' + id + '" data-field="' + escapeHtml(f.name) + '" class="selChk" />' +
        '<label for="' + id + '" title="' + escapeHtml(f.source || f.name) + '">' + escapeHtml(f.name) + '</label>' +
        (f.isKey ? '<span class="key">key</span>' : '') +
        '<select id="agg_' + id + '" name="agg_' + id + '" data-field="' + escapeHtml(f.name) + '" class="selAgg">' + aggOpts + '</select></div>';
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
    el.innerHTML = currentFields.map(f => {
      const id = 'grp_' + f.name;
      return '<div class="field-item"><input type="checkbox" id="' + id + '" data-field="' + escapeHtml(f.name) + '" class="grpChk" />' +
        '<label for="' + id + '">' + escapeHtml(f.name) + '</label></div>';
    }).join('') || '<span style="color:var(--text-muted)">No parsed field list for this view yet.</span>';
    el.querySelectorAll('.grpChk').forEach(chk => chk.addEventListener('change', (e) => {
      groupByState[e.target.dataset.field] = e.target.checked; buildQuery();
    }));
  }

  function fieldOptionsHtml(selected) {
    return currentFields.map(f => '<option value="' + escapeHtml(f.name) + '"' + (f.name === selected ? ' selected' : '') + '>' + escapeHtml(f.name) + '</option>').join('');
  }

  function needsNoValue(op) { return op === 'IS NULL' || op === 'IS NOT NULL'; }
  function needsSecondValue(op) { return op === 'BETWEEN'; }

  function renderConditionRows(containerId, conds, onChange) {
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
      const evt = input.tagName === 'INPUT' ? 'input' : 'change';
      input.addEventListener(evt, (e) => {
        const idx = Number(e.target.dataset.idx);
        const role = e.target.dataset.role;
        if (role === 'remove') { conds.splice(idx, 1); renderConditionRows(containerId, conds, onChange); buildQuery(); return; }
        conds[idx][role] = e.target.value;
        if (role === 'op') renderConditionRows(containerId, conds, onChange);
        buildQuery();
      });
    });
  }

  function renderWhereRows() { renderConditionRows('whereRows', whereConds); }
  function renderHavingRows() { renderConditionRows('havingRows', havingConds); }

  document.getElementById('whereAdd').addEventListener('click', () => {
    whereConds.push({ field: currentFields[0]?.name || '', op: '=', value: '', value2: '', joiner: 'AND' });
    renderWhereRows(); buildQuery();
  });
  document.getElementById('havingAdd').addEventListener('click', () => {
    havingConds.push({ field: currentFields[0]?.name || '', op: '=', value: '', value2: '', joiner: 'AND' });
    renderHavingRows(); buildQuery();
  });
  document.getElementById('whereRawToggle').addEventListener('change', (e) => {
    document.getElementById('whereRaw').style.display = e.target.checked ? '' : 'none';
    document.getElementById('whereRows').style.display = e.target.checked ? 'none' : '';
    document.getElementById('whereAdd').style.display = e.target.checked ? 'none' : '';
    buildQuery();
  });
  document.getElementById('whereRaw').addEventListener('input', buildQuery);

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
      input.addEventListener('change', (e) => {
        const idx = Number(e.target.dataset.idx);
        const role = e.target.dataset.role;
        if (role === 'remove') { orderConds.splice(idx, 1); renderOrderRows(); buildQuery(); return; }
        orderConds[idx][role] = e.target.value;
        buildQuery();
      });
    });
  }
  document.getElementById('orderAdd').addEventListener('click', () => {
    orderConds.push({ field: currentFields[0]?.name || '', dir: 'ASC' });
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

  function buildQuery() {
    const out = document.getElementById('output');
    if (!currentView) { out.textContent = ''; return; }

    const selected = currentFields.filter(f => selectState[f.name]?.checked);
    const selectParts = selected.map(f => {
      const agg = selectState[f.name].agg;
      return agg === AGGS[0] ? f.name : agg + '(' + f.name + ')';
    });
    const selectText = selectParts.length ? selectParts.join(',\\n  ') : '*';

    const groupFields = currentFields.filter(f => groupByState[f.name]).map(f => f.name);

    let whereText = '';
    if (document.getElementById('whereRawToggle').checked) {
      whereText = document.getElementById('whereRaw').value.trim();
    } else {
      whereText = conditionsText(whereConds.filter(c => c.field));
    }

    const havingText = conditionsText(havingConds.filter(c => c.field));

    let lines = ['SELECT', '  ' + selectText, 'FROM ' + currentView];
    if (whereText) lines.push('WHERE\\n  ' + whereText);
    if (groupFields.length) lines.push('GROUP BY ' + groupFields.join(', '));
    if (havingText) lines.push('HAVING\\n  ' + havingText);
    if (orderConds.length) lines.push('ORDER BY ' + orderConds.map(c => c.field + ' ' + c.dir).join(', '));

    out.textContent = lines.join('\\n');
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

  document.getElementById('statsLine').textContent = ${JSON.stringify(`${stats.viewCount} view(s) available for the picker.`)};
</script>
</body>
</html>
`;
}

main().catch((err) => {
  console.error(`Lỗi: ${err.message}`);
  process.exit(1);
});
