#!/usr/bin/env node
// scripts/generate-field-search.mjs
// Generates field-search.html: a self-contained, offline-first page for
// "I found field/table X in some ABAP code — which CDS views involve it?"
// without needing an AI/MCP client (see get_views_by_field in cds-kb-mcp-kit
// for the same lookup, exposed as a tool instead of a page).
//
// Reads the two reverse indices enrich_index.mjs already builds
// (index/field-index.json, index/table-index.json) plus index/view-paths.json
// for "open this view" links, and embeds a trimmed copy of each directly in
// the page (no fetch() at runtime) so the SEARCH itself works when opened
// via double-click / file:// — Chrome/Edge block fetch() of local files from
// a file:// page, so anything other than embedding would silently not load
// for exactly the audience this page is for. Metadata (isKey/relation/alias)
// stays inline per entry; app component is deduped into one place per VIEW
// NAME instead of repeated per (field, view) pair, which is most of why the
// raw index files are 20MB+ but the embedded version here is a few MB.
//
// "Open this view" links point at the file's github.com blob view (rendered
// markdown — tables, headers, the DDL code fence — for free, no local
// renderer to build/maintain) rather than the local file:// path. That does
// mean this one action needs internet + the repo being reachable (it's
// public, so no login required) — the alternative, pre-rendering an HTML
// twin of all ~10k view files for a fully offline open action, was weighed
// and explicitly not chosen (roughly doubles this repo's size for upkeep
// every future edit, for a page that's already reachable in one click).
//
// Usage:
//   node scripts/generate-field-search.mjs [dataDir] [outputFile]

import fs from 'node:fs/promises';
import path from 'node:path';

const GITHUB_BLOB_BASE = 'https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/';

const args = process.argv.slice(2);
const DATA_DIR = args[0] && !args[0].startsWith('--') ? args[0] : '.';
const OUTPUT_FILE = args[1] && !args[1].startsWith('--') ? args[1] : path.join(DATA_DIR, 'field-search.html');

async function readJson(file, fallback) {
  try {
    return JSON.parse(await fs.readFile(file, 'utf-8'));
  } catch {
    return fallback;
  }
}

async function main() {
  console.log('📋 Reading field-index.json / table-index.json / raw-field-index.json / view-paths.json...');
  const fieldIndex = await readJson(path.join(DATA_DIR, 'index', 'field-index.json'), null);
  const tableIndex = await readJson(path.join(DATA_DIR, 'index', 'table-index.json'), null);
  const rawFieldIndex = await readJson(path.join(DATA_DIR, 'index', 'raw-field-index.json'), null);
  const taxonomy = await readJson(path.join(DATA_DIR, 'index', 'taxonomy.json'), null);
  const viewPaths = await readJson(path.join(DATA_DIR, 'index', 'view-paths.json'), {});
  // coverage.json (check-coverage.mjs, refreshed 6-hourly against SAP
  // Business Accelerator Hub's live artifact list) — read directly here
  // rather than threaded through enrich_index.mjs, so this ranking signal
  // doesn't depend on the index-rebuild schedule lining up with it. Used
  // below as a real, verified replacement for what used to be a naming-
  // prefix guess (I_ ahead of C_/D_/... "because I_ views feel more
  // canonical") — that guess was wrong: the Hub confirms plenty of C_/D_
  // views as RELEASED too, prefix alone says nothing about it.
  const coverage = await readJson(path.join(DATA_DIR, 'coverage.json'), null);
  const hubConfirmed = new Set((coverage?.rows || []).filter((r) => r.inLocal).map((r) => r.name));

  if (!fieldIndex || !tableIndex) {
    console.error('Missing field-index.json or table-index.json — run `npm run rebuild-index` first.');
    process.exit(1);
  }

  // One appComponent per VIEW NAME, not per (field/table, view) pair — the
  // raw indices repeat appComponent/lob/bo on every entry, which is fine for
  // a server-side reverse lookup but would multiply the embedded page size
  // by the average fan-out (a view exposes dozens of fields).
  // Per view: [appComponent, releaseState, isAbstract, isMasterData,
  // referencedByCount, usageCount, hubConfirmed] — same one-per-view dedup
  // as before, just carrying more fields so the page can rank "released"
  // (confirmed SAP-delivered) views ahead of "unverified" community-sourced
  // ones, either kind of real "define view entity" ahead of a "define
  // abstract entity" action-parameter/data structure (e.g.
  // D_BillOfMaterialCompareBOMP) — which has no runtime entity set to query
  // at all, even when released — a master-data view (@ObjectModel.
  // usageType.dataClass: #MASTER, e.g. I_Product) ahead of a transactional
  // one that merely references the same field, a view the Hub's live
  // catalog currently confirms RELEASED ahead of one it doesn't (regardless
  // of naming prefix — see hubConfirmed above), and (as a fine tie-break) a
  // view many other views build FROM/associate to, or with real recorded
  // usage, ahead of one nobody else touches — instead of suggesting any of
  // these on equal footing with the view someone actually wants.
  const viewMeta = {};
  const metaOf = (e) => [e.appComponent || '', e.releaseState || 'released', e.isAbstract ? 1 : 0, e.isMasterData ? 1 : 0, e.referencedByCount || 0, e.usageCount || 0, hubConfirmed.has(e.view) ? 1 : 0];
  const F = {};
  for (const [field, entries] of Object.entries(fieldIndex.fields)) {
    F[field] = entries.map((e) => {
      if (!(e.view in viewMeta)) viewMeta[e.view] = metaOf(e);
      return [e.view, e.isKey ? 1 : 0];
    });
  }
  const T = {};
  for (const [table, entries] of Object.entries(tableIndex.tables)) {
    T[table] = entries.map((e) => {
      if (!(e.view in viewMeta)) viewMeta[e.view] = metaOf(e);
      return [e.view, e.relation === 'source' ? 's' : 'a', e.alias || ''];
    });
  }
  // R: RAW DDIC column name (e.g. "VWERK", as seen in SE11/an old ABAP
  // report) -> the CDS-renamed semantic field a view actually exposes it
  // as (e.g. "SupplyingPlant") — see enrich_index.mjs's rawFieldIndex for
  // how this is recovered from each field's "vwerk as SupplyingPlant"-style
  // source expression. Older data repos built before this index existed
  // just get an empty R (raw-name lookups silently find nothing extra).
  const R = {};
  if (rawFieldIndex) {
    for (const [raw, entries] of Object.entries(rawFieldIndex.fields)) {
      R[raw] = entries.map((e) => {
        if (!(e.view in viewMeta)) viewMeta[e.view] = metaOf(e);
        return [e.view, e.field, e.isKey ? 1 : 0];
      });
    }
  }

  // BIZ: business-object/line-of-business keyword lookup, used only as a
  // fallback when a query matches nothing technical (no field/table/raw
  // hit at all) — a lot of what someone pastes here is a business term
  // ("Material Master"), not a technical name, and taxonomy.json already
  // has these mapped to tags (bo:material -> ["Material Master", "MARA",
  // "Product", "LO-MD-MM"]) for exactly this kind of matching elsewhere
  // (search_cds's module/bo filters). Small (829 BOs + 12 LOBs, a few
  // keywords each) — a flat list embeds cheaply next to the ~10MB the three
  // technical indices already cost.
  const BIZ = [];
  if (taxonomy) {
    for (const b of [...(taxonomy.lobs || []), ...(taxonomy.bos || [])]) {
      if (b.tag && b.keywords?.length) BIZ.push([b.tag, b.keywords]);
    }
  }

  const embedded = JSON.stringify({ F, T, R, BIZ, M: viewMeta, P: viewPaths })
    .replace(/<\/script/gi, '<\\/script');

  const html = renderHtml(embedded, {
    fieldCount: Object.keys(F).length,
    tableCount: Object.keys(T).length,
    rawFieldCount: Object.keys(R).length,
    bizCount: BIZ.length,
    viewCount: Object.keys(viewMeta).length,
  });

  await fs.writeFile(OUTPUT_FILE, html, 'utf-8');
  const sizeMb = (Buffer.byteLength(html) / 1024 / 1024).toFixed(1);
  console.log(`✅ Wrote ${OUTPUT_FILE} (${sizeMb} MB) — ${Object.keys(F).length} field name(s), ${Object.keys(T).length} table/view name(s), ${Object.keys(R).length} raw DDIC column name(s), ${BIZ.length} business term(s)`);
}

function renderHtml(embeddedJson, stats) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>CDS Knowledge Base · Field/Table Search</title>
<style>
  .viz-root {
    --surface-1: #1a1a19;
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
  .container { max-width: 900px; margin: 0 auto; padding: 32px 20px 64px; }
  h1 { font-size: 22px; font-weight: 600; margin: 0 0 4px; }
  h1 span { color: var(--text-secondary); font-weight: 400; }
  .subtitle { color: var(--text-muted); font-size: 13px; margin: 0 0 24px; }

  #q {
    width: 100%; background: var(--surface-1); border: 1px solid var(--border);
    color: var(--text-primary); border-radius: 8px; padding: 14px 16px; font-size: 16px;
    font-family: ui-monospace, "SF Mono", Consolas, monospace;
  }
  #q:focus { outline: 2px solid var(--accent); }
  .hint { color: var(--text-muted); font-size: 12px; margin: 8px 0 0; }

  .section { margin-top: 24px; }
  .section h2 { font-size: 14px; color: var(--text-secondary); margin: 0 0 10px; font-weight: 600; }
  .row {
    display: flex; align-items: baseline; gap: 10px; padding: 8px 10px;
    border-bottom: 1px solid var(--gridline); font-size: 13px; flex-wrap: wrap;
  }
  .row:hover { background: var(--surface-1); }
  .row a { color: var(--accent); text-decoration: none; font-family: ui-monospace, monospace; font-weight: 600; }
  .row a:hover { text-decoration: underline; }
  .tag { color: var(--text-muted); font-size: 11px; }
  .badge {
    font-size: 10px; padding: 1px 6px; border-radius: 4px; border: 1px solid var(--border);
    color: var(--text-secondary); white-space: nowrap;
  }
  .badge.key { color: var(--status-good); border-color: var(--status-good); }
  .badge.unverified { color: var(--status-warn); border-color: var(--status-warn); }
  .badge.abstract { color: var(--text-muted); border-color: var(--text-muted); }
  .badge.unconfirmed { color: var(--text-muted); border-color: var(--text-muted); }
  .badge.master { color: var(--accent); border-color: var(--accent); }
  .empty { color: var(--text-muted); font-size: 13px; padding: 20px 0; }
  .stats { color: var(--text-muted); font-size: 12px; margin-top: 32px; border-top: 1px solid var(--gridline); padding-top: 16px; }
</style>
</head>
<body class="viz-root">
<div class="container">
  <h1>CDS Knowledge Base <span>· Field/Table Search</span></h1>
  <p class="subtitle">Paste an exact field name, raw DDIC column name (SE11), or table/CDS-view name found in ABAP code to instantly find every local CDS view that uses it — no need to search the Hub website by hand. A raw column like <code>VWERK</code> resolves to whatever semantic name a view renamed it to (e.g. <code>SupplyingPlant</code>).</p>

  <input id="q" type="text" placeholder="e.g. MATNR, CompanyCode, VWERK, BKPF, I_JournalEntryItem…" autofocus autocomplete="off" spellcheck="false" />
  <p class="hint">Exact matches shown first; substring matches below. Case-insensitive. View names open on github.com (rendered markdown) — needs internet.</p>

  <div id="results"></div>

  <div class="stats" id="statsLine"></div>
</div>

<script>
  const DATA = ${embeddedJson};
  const q = document.getElementById('q');
  const results = document.getElementById('results');
  const statsLine = document.getElementById('statsLine');
  statsLine.textContent = ${JSON.stringify(`${stats.fieldCount} field name(s) · ${stats.tableCount} table/view name(s) · ${stats.rawFieldCount} raw DDIC column name(s) · ${stats.bizCount} business term(s) · ${stats.viewCount} view(s) covered`)};

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  }

  // Points at the file's github.com blob view — free rendered markdown
  // (tables, headers, the DDL code fence) instead of building/maintaining a
  // local renderer; the repo is public, so no login is required, but this
  // one action does need internet (the search itself stays offline).
  const GITHUB_BLOB_BASE = ${JSON.stringify(GITHUB_BLOB_BASE)};

  function viewLink(name) {
    const p = DATA.P[name];
    const label = escapeHtml(name);
    return p ? '<a href="' + escapeHtml(GITHUB_BLOB_BASE + p) + '" target="_blank" rel="noopener">' + label + '</a>' : '<span style="font-family:ui-monospace,monospace;font-weight:600">' + label + '</span>';
  }

  function unverifiedBadge(view) {
    const rs = (DATA.M[view] || [])[1];
    return rs === 'unverified'
      ? ' <span class="badge unverified" title="Community-sourced Z/Y-namespace view — not confirmed to exist in any real SAP system">unverified</span>'
      : '';
  }

  function unconfirmedBadge(view) {
    const meta = DATA.M[view] || [];
    // Only for the "released" tier — an unverified view already shows its
    // own badge above, this would just be redundant noise on top of it.
    return meta[1] === 'released' && !meta[6]
      ? ' <span class="badge unconfirmed" title="Not on the SAP Business Accelerator Hub&#39;s current live RELEASED list — may be deprecated, renamed, in a different container, or simply not yet re-checked, not necessarily wrong">not on Hub list</span>'
      : '';
  }

  function abstractBadge(view) {
    return (DATA.M[view] || [])[2]
      ? ' <span class="badge abstract" title="define abstract entity — an action-parameter/data structure, no runtime entity set to query regardless of release state">structure, not a view</span>'
      : '';
  }

  function masterDataBadge(view) {
    return (DATA.M[view] || [])[3]
      ? ' <span class="badge master" title="@ObjectModel.usageType.dataClass: #MASTER — a master-data view (e.g. Product/Customer master), not a transactional one">master data</span>'
      : '';
  }

  // Score for same-field/table/column matches, lowest (most useful) first.
  // Each condition adds a penalty, so they compose instead of needing one
  // tier per combination:
  //   +1000  abstract entity / action-parameter structure (e.g.
  //          D_BillOfMaterialCompareBOMP) — has real fields (so it still
  //          matches a field/table/raw-column lookup) but no runtime entity
  //          set at all, so it can never actually be queried — dominates
  //          every other signal below.
  //   +100   unverified — community-sourced Z/Y-namespace, not confirmed to
  //          exist in any real SAP system.
  //   +10    the field ISN'T this view's key — a view where the searched
  //          field (or table/raw column) is the actual identifier is a
  //          stronger match than one where it's just an attribute.
  //   +5     not a master-data view (@ObjectModel.usageType.dataClass:
  //          #MASTER, e.g. I_Product) — master data is what "which view has
  //          field X" usually means, ahead of a transactional view that
  //          merely references the same field.
  //   +1     NOT on the Hub's current live RELEASED list (see hubConfirmed
  //          above) — soft, not a demotion to "unverified" tier: the Hub
  //          only reflects the current moment, so a view genuinely released
  //          in the past can drop off it (deprecated/renamed/different
  //          container) without ever having been wrong. This replaced an
  //          earlier "not I_ prefix" penalty that assumed I_ views are more
  //          legitimate than C_/D_/... — that assumption was wrong (the Hub
  //          confirms plenty of C_/D_ views as RELEASED too; prefix alone
  //          says nothing about it), so it's gone rather than reworded.
  //   fine tie-break, weighted well below the +1 above so it only decides
  //   between two matches that are otherwise identical on every signal so
  //   far:
  //     -0.002 × usageCount        real runtime call telemetry (stays 0 for
  //                                every view — hence the small weight —
  //                                until pull-usage-stats.mjs's endpoint is
  //                                configured; ready for when it is).
  //     -0.001 × referencedByCount how many other views build FROM/associate
  //                                to this one right now — how central it is
  //                                to the rest of the model.
  function rankOf(view, isKey) {
    const meta = DATA.M[view] || [];
    let score = 0;
    if (meta[2]) score += 1000;
    else if (meta[1] === 'unverified') score += 100;
    if (!isKey) score += 10;
    if (!meta[3]) score += 5;
    if (!meta[6]) score += 1;
    score -= (meta[4] || 0) * 0.001;
    score -= (meta[5] || 0) * 0.002;
    return score;
  }
  function byReleaseState(entries, getIsKey) {
    const isKeyOf = getIsKey || (() => false);
    return [...entries].sort((a, b) => rankOf(a[0], isKeyOf(a)) - rankOf(b[0], isKeyOf(b)));
  }

  function fieldRow([view, isKey]) {
    const ac = (DATA.M[view] || [])[0] || '';
    return '<div class="row">' + viewLink(view) + (isKey ? ' <span class="badge key">key</span>' : '') + unverifiedBadge(view) + unconfirmedBadge(view) + abstractBadge(view) + masterDataBadge(view) +
      (ac ? ' <span class="tag">' + escapeHtml(ac) + '</span>' : '') + '</div>';
  }

  function tableRow([view, rel, alias]) {
    const ac = (DATA.M[view] || [])[0] || '';
    const relLabel = rel === 's' ? 'built FROM this' : 'associates via <code>' + escapeHtml(alias) + '</code>';
    return '<div class="row">' + viewLink(view) + ' <span class="tag">— ' + relLabel + '</span>' + unverifiedBadge(view) + unconfirmedBadge(view) + abstractBadge(view) + masterDataBadge(view) +
      (ac ? ' <span class="tag">' + escapeHtml(ac) + '</span>' : '') + '</div>';
  }

  function rawFieldRow([view, semanticField, isKey]) {
    const ac = (DATA.M[view] || [])[0] || '';
    return '<div class="row">' + viewLink(view) + ' <span class="tag">— as <code>' + escapeHtml(semanticField) + '</code></span>' +
      (isKey ? ' <span class="badge key">key</span>' : '') + unverifiedBadge(view) + unconfirmedBadge(view) + abstractBadge(view) + masterDataBadge(view) +
      (ac ? ' <span class="tag">' + escapeHtml(ac) + '</span>' : '') + '</div>';
  }

  function render() {
    const raw = q.value.trim();
    if (!raw) { results.innerHTML = ''; return; }
    const key = raw.toUpperCase();

    const fieldKeys = Object.keys(DATA.F);
    const tableKeys = Object.keys(DATA.T);
    const rawKeys = Object.keys(DATA.R);

    const fieldExact = DATA.F[key] ? byReleaseState(DATA.F[key], (e) => e[1] === 1) : null;
    const tableExact = DATA.T[key] ? byReleaseState(DATA.T[key]) : null;
    const rawExact = DATA.R[key] ? byReleaseState(DATA.R[key], (e) => e[2] === 1) : null;
    const fieldSubstr = fieldKeys.filter(k => k !== key && k.includes(key)).slice(0, 20);
    const tableSubstr = tableKeys.filter(k => k !== key && k.includes(key)).slice(0, 20);
    const rawSubstr = rawKeys.filter(k => k !== key && k.includes(key)).slice(0, 20);

    const hasTechnicalMatch = fieldExact || tableExact || rawExact || fieldSubstr.length > 0 || tableSubstr.length > 0 || rawSubstr.length > 0;

    if (!hasTechnicalMatch) {
      // Nothing technical matched at all — the query might be a business
      // term ("Material Master") rather than a field/table name. Check
      // taxonomy keywords both ways (query-in-keyword and keyword-in-query)
      // since a real term is rarely an exact match either direction ("cost
      // center" vs "Cost Center Master Data").
      const bizMatches = DATA.BIZ.filter(([, kws]) =>
        kws.some(kw => kw.toUpperCase().includes(key) || key.includes(kw.toUpperCase()))
      ).slice(0, 10);

      if (bizMatches.length === 0) {
        results.innerHTML = '<div class="empty">No field, table/view, or raw DDIC column name matches "' + escapeHtml(raw) + '".</div>';
        return;
      }

      const lines = bizMatches.map(([tag, kws]) =>
        '<div class="row"><span class="tag" style="color:var(--text-primary);font-family:ui-monospace,monospace">' + escapeHtml(tag) + '</span>' +
        ' <span class="tag">' + escapeHtml(kws.join(', ')) + '</span></div>'
      ).join('');
      results.innerHTML = '<div class="section"><h2>No exact technical match for "' + escapeHtml(raw) + '" — but it looks related to</h2>' +
        lines + '<p class="hint" style="margin-top:10px">This is a business area, not an exact field/table — use search_cds (MCP) or dashboard.html to browse views tagged with it.</p></div>';
      return;
    }

    let html = '';
    if (fieldExact) {
      html += '<div class="section"><h2>As a field — "' + escapeHtml(key) + '" (' + fieldExact.length + ' view' + (fieldExact.length === 1 ? '' : 's') + ')</h2>' +
        fieldExact.map(fieldRow).join('') + '</div>';
    }
    if (tableExact) {
      html += '<div class="section"><h2>As a table/view reference — "' + escapeHtml(key) + '" (' + tableExact.length + ' view' + (tableExact.length === 1 ? '' : 's') + ')</h2>' +
        tableExact.map(tableRow).join('') + '</div>';
    }
    if (rawExact) {
      html += '<div class="section"><h2>As a raw DDIC column (SE11/ABAP) — "' + escapeHtml(key) + '" renamed in ' + rawExact.length + ' view' + (rawExact.length === 1 ? '' : 's') + '</h2>' +
        rawExact.map(rawFieldRow).join('') + '</div>';
    }
    if (fieldSubstr.length > 0) {
      html += '<div class="section"><h2>Field names containing "' + escapeHtml(key) + '"</h2>' +
        fieldSubstr.map(k => '<div class="row"><span class="tag">' + escapeHtml(k) + '</span> <span class="tag">(' + DATA.F[k].length + ' view' + (DATA.F[k].length === 1 ? '' : 's') + ')</span></div>').join('') + '</div>';
    }
    if (tableSubstr.length > 0) {
      html += '<div class="section"><h2>Table/view names containing "' + escapeHtml(key) + '"</h2>' +
        tableSubstr.map(k => '<div class="row"><span class="tag">' + escapeHtml(k) + '</span> <span class="tag">(' + DATA.T[k].length + ' view' + (DATA.T[k].length === 1 ? '' : 's') + ')</span></div>').join('') + '</div>';
    }
    if (rawSubstr.length > 0) {
      html += '<div class="section"><h2>Raw DDIC column names containing "' + escapeHtml(key) + '"</h2>' +
        rawSubstr.map(k => '<div class="row"><span class="tag">' + escapeHtml(k) + '</span> <span class="tag">(' + DATA.R[k].length + ' view' + (DATA.R[k].length === 1 ? '' : 's') + ')</span></div>').join('') + '</div>';
    }
    results.innerHTML = html;
  }

  let debounce;
  q.addEventListener('input', () => { clearTimeout(debounce); debounce = setTimeout(render, 80); });
</script>
</body>
</html>
`;
}

main().catch(err => {
  console.error(`❌ Error: ${err.message}`);
  process.exit(1);
});
