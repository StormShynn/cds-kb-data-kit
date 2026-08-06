#!/usr/bin/env node
// scripts/check-coverage.mjs
// Compare the live SAP Business Accelerator Hub CDS View catalog against the
// local KB and write a coverage report (JSON + HTML).
//
// The Hub's public artifact-listing endpoint returns every RELEASED CDS view
// for a product container in one call (name, description, release state —
// no DDL source). This answers "what's actually missing" with a real,
// SAP-confirmed list, instead of guessing from a GitHub filename search.
//
// A second bulk call (fetchExtensibilityMap, see below) joins in each view's
// Developer Extensibility release state — a RELEASED CDS view can still be
// "Not Released" for that specific contract (e.g. C_BILLOFOPERATIONSBASICOPDEX).
// It's shown as a filterable column, not baked into hubTotal/missingTotal,
// since this KB isn't scoped to dev-extensible views only.
//
// A third call (fetchAtcReleaseMap) cross-references SAP's own ABAP Cloud
// "released objects" list (github.com/SAP/abap-atc-cr-cv-s4hc, no API key —
// the same public dataset ATC uses for Clean Core checks) as a second,
// independent signal for the same question. Confirmed by direct comparison:
// every "Not Released" view from the Hub is completely absent from that
// list too (0 contradictions), and its "released" DDLS entries are the
// exact same 5,663 names this KB already has full DDL for — but ~125 views
// the Hub calls Released aren't in it, so it's shown alongside, not used to
// override the Hub-derived column.
//
// Usage:
//   node scripts/check-coverage.mjs [dataDir]

import fs from 'node:fs/promises';
import path from 'node:path';
import { listViewFiles } from './lib/view-files.mjs';
import { runPool } from './lib/concurrency.mjs';
import { escapeHtml } from './lib/html-escape.mjs';

const DATA_DIR = process.argv[2] || '.';
const VIEWS_DIR = path.join(DATA_DIR, 'views');
const HUB_CONTAINER = 'SAPS4HANACloud';
const HUB_URL =
  `https://api.sap.com/api/1.0/container/${HUB_CONTAINER}/artifacts` +
  `?containerType=product&$filter=${encodeURIComponent("Type eq 'CDSVIEW'")}&$top=100000`;

// The artifacts endpoint above has no per-extensibility-contract field. This
// OData collection is the only place the Hub exposes it — but it's a global
// registry (~19k rows across every product, not just SAPS4HANACloud), so it's
// filtered with $select down to the two fields actually used here. Confirmed
// 1:1, no dupes: every RELEASED CDSVIEW artifact's Name matches exactly one
// TechnicalName here (both already uppercase), so a plain Map join is enough
// — no need for the one-request-per-view detail endpoint (hubMetadataUrl).
const EXT_URL =
  'https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews' +
  '?$format=json&$select=TechnicalName,ReleaseStateDeveloperExtensibility&$inlinecount=allpages';

// SAP's official ABAP Cloud released-objects list (public_cloud scope, which
// matches this KB's default systemType — see add_hub_metadata.mjs). Plain
// static JSON on GitHub, no auth, no rate-limit uncertainty like the Hub's
// undocumented OData collection above.
const ATC_RELEASE_URL =
  'https://raw.githubusercontent.com/SAP/abap-atc-cr-cv-s4hc/main/src/objectReleaseInfoLatest.json';

// Both Hub calls above already work with zero auth — confirmed empirically
// (every run in this file's history) and, for EXT_URL's entity set
// specifically, previously confirmed in src/fetcher.mjs's fetchFromHubCatalog
// too. This key is optional and unused today; it exists as a fallback in
// case the Hub ever tightens anonymous access, and to match the same
// `APIKey` header convention StormShynn/mcp-sap-docs uses for the same
// catalog.svc service. Distinct from this repo's SAP_API_KEY (src/fetcher.mjs
// fetchFromSAPApi), which is for a user's own subscribed sandbox service.
const SAP_API_HUB_KEY = process.env.SAP_API_HUB_KEY || '';

function sapHeaders(extra) {
  const headers = { 'User-Agent': 'cds-kb-mcp-coverage-check', Accept: 'application/json', ...extra };
  if (SAP_API_HUB_KEY) headers.APIKey = SAP_API_HUB_KEY;
  return headers;
}

// ── Fetch ───────────────────────────────────────────────────────────────────

async function fetchHubCatalog() {
  const resp = await fetch(HUB_URL, {
    headers: sapHeaders(),
    signal: AbortSignal.timeout(60000),
  });
  if (!resp.ok) throw new Error(`Hub catalog fetch failed (${resp.status})`);
  return await resp.json();
}

/**
 * Name -> "Released" | "Not Released", sourced from EXT_URL. Never throws —
 * this column is a display/filter aid, not part of the missing/full/metadata
 * counts, so a Hub hiccup here shouldn't fail the whole coverage run.
 */
async function fetchExtensibilityMap() {
  try {
    const resp = await fetch(EXT_URL, {
      headers: sapHeaders(),
      signal: AbortSignal.timeout(120000),
    });
    if (!resp.ok) throw new Error(`Extensibility catalog fetch failed (${resp.status})`);
    const data = await resp.json();
    const map = new Map();
    for (const r of data.d.results) {
      if (r.ReleaseStateDeveloperExtensibility != null) {
        map.set(r.TechnicalName, r.ReleaseStateDeveloperExtensibility);
      }
    }
    return map;
  } catch (err) {
    console.error(`⚠️  Extensibility catalog fetch failed, continuing without it: ${err.message}`);
    return new Map();
  }
}

/**
 * Name -> "released" | "deprecated" | "notToBeReleased", for TADIR object
 * type DDLS (CDS view sources) only, sourced from ATC_RELEASE_URL. Same
 * never-throws contract as fetchExtensibilityMap — a cross-reference column,
 * not a dependency for the core counts.
 */
async function fetchAtcReleaseMap() {
  try {
    const resp = await fetch(ATC_RELEASE_URL, {
      headers: { 'User-Agent': 'cds-kb-mcp-coverage-check', Accept: 'application/json' },
      signal: AbortSignal.timeout(120000),
    });
    if (!resp.ok) throw new Error(`ATC released-objects fetch failed (${resp.status})`);
    const data = await resp.json();
    const map = new Map();
    for (const entry of data.objectReleaseInfo || []) {
      if ((entry.tadirObject || '').toUpperCase() === 'DDLS' && entry.tadirObjName) {
        map.set(entry.tadirObjName.toUpperCase(), entry.state);
      }
    }
    return map;
  } catch (err) {
    console.error(`⚠️  ATC released-objects fetch failed, continuing without it: ${err.message}`);
    return new Map();
  }
}

/**
 * Read every local view file (concurrently — there are thousands) and pull
 * out its recorded source_url, if any. This is what lets the report show
 * which entries actually have a traceable link back to where their content
 * came from, vs. old/pre-fix entries that don't.
 */
async function loadLocalViewInfo() {
  const mdFiles = await listViewFiles(VIEWS_DIR);
  const entries = await runPool(mdFiles, 32, async ({ name, relPath }) => {
    try {
      const content = await fs.readFile(path.join(VIEWS_DIR, ...relPath.split('/')), 'utf-8');
      const sourceUrl = /^source_url:\s*(.+)$/m.exec(content);
      const description = /^description:\s*(.+)$/m.exec(content);
      const appComponent = /^app_component:\s*(.+)$/m.exec(content);
      const releaseState = /^release_state:\s*(.+)$/m.exec(content);
      const sourceAvailable = /^source_available:\s*(true|false)\s*$/m.exec(content);
      return [name, {
        sourceUrl: sourceUrl ? sourceUrl[1].trim() : null,
        description: description ? description[1].trim() : '',
        appComponent: appComponent ? appComponent[1].trim() : '',
        releaseState: releaseState ? releaseState[1].trim() : '',
        sourceAvailable: sourceAvailable ? sourceAvailable[1] === 'true' : null,
      }];
    } catch {
      return [name, { sourceUrl: null, description: '', appComponent: '', releaseState: '', sourceAvailable: null }];
    }
  });
  return new Map(entries);
}

function formatDateTime(value) {
  if (!value) return '';
  const d = new Date(value);
  if (isNaN(d.getTime())) return '';
  return d.toISOString().slice(0, 16).replace('T', ' ');
}

/**
 * hub-metadata-manifest.json (written by scripts/add_hub_metadata.mjs) lists
 * every view THIS project fetched metadata-only from the Hub catalog — used
 * here only to label rows as "metadata-only" vs "full" in the report, never
 * to decide what's safe to overwrite (that check lives in add_hub_metadata.mjs).
 */
async function loadHubMetadataManifest() {
  try {
    return JSON.parse(await fs.readFile(path.join(DATA_DIR, 'hub-metadata-manifest.json'), 'utf-8'));
  } catch {
    return {};
  }
}

// ── Diff ────────────────────────────────────────────────────────────────────

// The per-view Hub catalog endpoint (see src/fetcher.mjs fetchFromHubCatalog)
// — used here only to build a display link for metadata-only rows, not to
// call it (that would be one request per view; this report only ever makes
// the single bulk artifacts call above).
function hubMetadataUrl(name) {
  return `https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('${encodeURIComponent(name)}')/$value`;
}

function buildReport(hubArtifacts, localInfo, manifest, extMap, atcMap) {
  const localNames = new Set(localInfo.keys());
  const rows = hubArtifacts
    .filter(a => a.State === 'RELEASED')
    .map(a => {
      const name = a.Name.toUpperCase();
      const local = localInfo.get(name);
      const inLocal = !!local;
      const manifestEntry = manifest[name];
      // The file's own source_available field (set at write time from
      // whether real DDL was fetched, see src/template.mjs) is the live
      // signal — it stays correct if a metadata-only entry is later
      // backfilled with real DDL. The manifest only records fetch history,
      // so relying on it alone would pin a backfilled view at
      // 'metadata-only' forever; it's kept as a fallback for any file
      // predating this field.
      const status = !inLocal
        ? 'missing'
        : typeof local.sourceAvailable === 'boolean'
          ? (local.sourceAvailable ? 'full' : 'metadata-only')
          : manifestEntry ? 'metadata-only' : 'full';
      // A local source_url (recorded at fetch time) is the authoritative
      // link. Older entries fetched before that was tracked won't have one
      // — that gap is deliberately visible here rather than papered over.
      const sourceUrl = (local && local.sourceUrl) || (status === 'metadata-only' ? hubMetadataUrl(name) : null);
      return {
        name,
        displayName: a.DisplayName || '',
        description: a.Description || '',
        regId: a.reg_id || '',
        createdAt: a.CreatedAt || null,
        modifiedAt: a.ModifiedAt || null,
        inLocal,
        status,
        lastFetchedAt: manifestEntry ? manifestEntry.fetchedAt : null,
        sourceUrl,
        // Independent of `status` above — RELEASED-but-not-dev-extensible
        // views still count as missing/full/metadata-only, this only feeds
        // the report's "Hide Dev-Ext: Not Released" toggle.
        devExtStatus: extMap.get(name) || null,
        // Second, independent opinion on the same question (see ATC_RELEASE_URL
        // above) — shown next to devExtStatus for cross-reference, never used
        // to override it.
        atcState: atcMap.get(name) || null,
      };
    })
    .sort((a, b) => a.name.localeCompare(b.name));

  const hubNames = new Set(rows.map(r => r.name));
  // Kept as its own list (not merged into `rows`) because these views have no
  // Hub record at all right now — no reg_id/CreatedAt/ModifiedAt to show, only
  // whatever this KB recorded locally when it was originally fetched.
  const extra = [...localNames]
    .filter(n => !hubNames.has(n))
    .sort()
    .map(n => {
      const local = localInfo.get(n) || {};
      return {
        name: n,
        description: local.description || '',
        appComponent: local.appComponent || '',
        releaseState: local.releaseState || '',
      };
    });

  return {
    generatedAt: new Date().toISOString(),
    hubContainer: HUB_CONTAINER,
    hubTotal: rows.length,
    localTotal: localNames.size,
    matchedTotal: rows.filter(r => r.inLocal).length,
    missingTotal: rows.filter(r => r.status === 'missing').length,
    metadataOnlyTotal: rows.filter(r => r.status === 'metadata-only').length,
    fullTotal: rows.filter(r => r.status === 'full').length,
    extraTotal: extra.length,
    rows,
    extra,
  };
}

// ── HTML report ─────────────────────────────────────────────────────────────

function renderHtml(report) {
  // Escape `</script` so a view description containing it can't break out of
  // the inline <script> block below.
  // sourceUrl is intentionally NOT embedded here — this HTML is published to
  // GitHub Pages (public), and source links (GitHub file paths, pastebin
  // origins, etc.) shouldn't be exposed on a public page even as raw data in
  // a <script> block. It stays in coverage.json inside the repo instead.
  const rowsJson = JSON.stringify(report.rows.map(r => [
    r.name, r.displayName, r.description, r.status,
    formatDateTime(r.createdAt), formatDateTime(r.modifiedAt), formatDateTime(r.lastFetchedAt),
    r.regId || '', r.devExtStatus || '', r.atcState || '',
  ])).replace(/<\/script/gi, '<\\/script');
  const extraRowsJson = JSON.stringify(report.extra.map(r => [
    r.name, r.description, r.appComponent, r.releaseState,
  ])).replace(/<\/script/gi, '<\\/script');

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>CDS Knowledge Base · Hub Coverage</title>
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
    --status-warning: #fab219;
    --status-critical: #d03b3b;
  }
  * { box-sizing: border-box; }
  body.viz-root {
    margin: 0;
    background: var(--page-plane);
    color: var(--text-primary);
    font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
  }
  .container { max-width: 1340px; margin: 0 auto; padding: 32px 20px 64px; }
  h1 { font-size: 22px; font-weight: 600; margin: 0 0 4px; }
  h1 span { color: var(--text-secondary); font-weight: 400; }
  .subtitle { color: var(--text-muted); font-size: 13px; margin: 0 0 28px; }

  .kpi-row { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px; margin-bottom: 28px; }
  .stat-tile { background: var(--surface-1); border: 1px solid var(--border); border-radius: 8px; padding: 16px 18px; }
  .stat-label { font-size: 12px; color: var(--text-secondary); margin-bottom: 6px; }
  .stat-value { font-size: 28px; font-weight: 600; font-variant-numeric: proportional-nums; }
  .stat-value.good { color: var(--status-good); }
  .stat-value.warning { color: var(--status-warning); }
  .stat-value.critical { color: var(--status-critical); }

  .filters { display: flex; gap: 8px; align-items: center; margin-bottom: 12px; flex-wrap: wrap; }
  .filters input[type="text"] {
    flex: 1; min-width: 200px; background: var(--surface-1); border: 1px solid var(--border);
    color: var(--text-primary); border-radius: 6px; padding: 8px 12px; font-size: 13px;
  }
  .filters button {
    background: var(--surface-1); border: 1px solid var(--border); color: var(--text-secondary);
    border-radius: 6px; padding: 8px 14px; font-size: 13px; cursor: pointer;
  }
  .filters button[aria-pressed="true"] { color: var(--text-primary); border-color: var(--text-secondary); }
  .row-count { color: var(--text-muted); font-size: 12px; margin-bottom: 8px; }

  table { width: 100%; border-collapse: collapse; font-size: 13px; }
  thead th {
    text-align: left; font-weight: 600; color: var(--text-secondary); font-size: 12px;
    border-bottom: 1px solid var(--gridline); padding: 8px 10px; position: sticky; top: 0; background: var(--page-plane);
  }
  tbody td { padding: 7px 10px; border-bottom: 1px solid var(--gridline); vertical-align: top; }
  tbody tr:hover { background: rgba(255,255,255,0.03); }
  tr.view-row { cursor: pointer; }
  .toggle-icon { display: inline-block; width: 14px; color: var(--text-muted); }
  tr.detail-row:hover { background: none; }
  tr.detail-row td { cursor: default; padding: 4px 10px 16px 32px; border-bottom: 1px solid var(--gridline); }
  .detail-empty { color: var(--text-muted); font-size: 12px; }
  .detail-table { border-collapse: collapse; font-size: 12px; margin-top: 6px; }
  .detail-table caption { text-align: left; color: var(--text-secondary); font-size: 12px; margin-bottom: 4px; caption-side: top; }
  .detail-table th { text-align: left; color: var(--text-muted); font-weight: 600; padding: 3px 12px 3px 0; border-bottom: 1px solid var(--gridline); }
  .detail-table td { padding: 3px 12px 3px 0; color: var(--text-secondary); vertical-align: top; }
  .detail-table + .detail-table { margin-top: 14px; }
  .status-cell { white-space: nowrap; }
  .status-good { color: var(--status-good); }
  .status-warning { color: var(--status-warning); }
  .status-critical { color: var(--status-critical); }
  .name-cell { font-variant-numeric: tabular-nums; white-space: nowrap; }
  .desc-cell { color: var(--text-secondary); }
  .date-cell { color: var(--text-muted); white-space: nowrap; font-variant-numeric: tabular-nums; font-size: 12px; }
  .ext-cell { white-space: nowrap; font-size: 12px; }
  .ext-cell.not-released { color: var(--status-warning); }
  .ext-cell.released { color: var(--text-muted); }
  .atc-cell { white-space: nowrap; font-size: 12px; color: var(--text-muted); }
  .atc-cell.deprecated, .atc-cell.notToBeReleased { color: var(--status-warning); }

  details { margin-top: 32px; }
  summary { cursor: pointer; color: var(--text-secondary); font-size: 13px; }

  .footer { color: var(--text-muted); font-size: 12px; margin-top: 32px; }
</style>
</head>
<body class="viz-root" data-palette="#0ca30c,#fab219,#d03b3b">
<div class="container">
  <h1>CDS Knowledge Base · <span>Hub Coverage</span></h1>
  <p class="subtitle">Compared against SAP Business Accelerator Hub, container "${escapeHtml(report.hubContainer)}" · generated ${new Date(report.generatedAt).toISOString().slice(0, 16).replace('T', ' ')} UTC</p>

  <div class="kpi-row">
    <div class="stat-tile">
      <div class="stat-label">Released on Hub</div>
      <div class="stat-value">${report.hubTotal.toLocaleString()}</div>
    </div>
    <div class="stat-tile">
      <div class="stat-label">Full DDL</div>
      <div class="stat-value good">${report.fullTotal.toLocaleString()}</div>
    </div>
    <div class="stat-tile">
      <div class="stat-label">Metadata-only (Hub)</div>
      <div class="stat-value warning">${report.metadataOnlyTotal.toLocaleString()}</div>
    </div>
    <div class="stat-tile">
      <div class="stat-label">Missing from KB</div>
      <div class="stat-value critical">${report.missingTotal.toLocaleString()}</div>
    </div>
    <div class="stat-tile">
      <div class="stat-label">In KB, not on Hub list</div>
      <div class="stat-value">${report.extraTotal.toLocaleString()}</div>
    </div>
    <div class="stat-tile">
      <div class="stat-label">Total in KB (.md files)</div>
      <div class="stat-value">${report.localTotal.toLocaleString()}</div>
    </div>
  </div>

  <details open>
    <summary>${report.hubTotal.toLocaleString()} view(s) currently RELEASED on the Hub — search &amp; filter by status</summary>
    <div class="filters" style="margin-top:12px">
      <input type="text" id="search" placeholder="Filter by name or description…" />
      <button data-status="all" aria-pressed="true">All</button>
      <button data-status="missing" aria-pressed="false">✗ Missing</button>
      <button data-status="metadata-only" aria-pressed="false">◐ Metadata-only</button>
      <button data-status="full" aria-pressed="false">✓ Full DDL</button>
      <label style="display:flex;align-items:center;gap:6px;color:var(--text-secondary);font-size:13px;cursor:pointer;white-space:nowrap">
        <input type="checkbox" id="hideNotDevExt" />
        Hide Dev-Ext: Not Released
      </label>
    </div>
    <div class="row-count" id="rowCount"></div>

    <table>
      <thead>
        <tr>
          <th style="width:70px">Status</th>
          <th style="width:200px">Name</th>
          <th>Description</th>
          <th style="width:110px">Dev Extensibility</th>
          <th style="width:110px">ATC Release State</th>
          <th style="width:110px">Created</th>
          <th style="width:110px">Modified</th>
          <th style="width:110px">Last Fetched</th>
        </tr>
      </thead>
      <tbody id="tbody"></tbody>
    </table>
  </details>

  <details open>
    <summary>${report.extraTotal} view(s) in the KB but not on the Hub's current released list — possibly deprecated, renamed, or from a different container</summary>
    <div class="filters" style="margin-top:12px">
      <input type="text" id="extraSearch" placeholder="Filter by name, description, or app component…" />
      <button data-release="all" aria-pressed="true">All</button>
      <button data-release="released">Released</button>
      <button data-release="unverified">Unverified</button>
    </div>
    <div class="row-count" id="extraRowCount"></div>
    <table>
      <thead>
        <tr>
          <th style="width:200px">Name</th>
          <th>Description</th>
          <th style="width:120px">App Component</th>
          <th style="width:130px">Local Release State</th>
        </tr>
      </thead>
      <tbody id="extraTbody"></tbody>
    </table>
  </details>

  <div class="footer">
    Source: api.sap.com Business Accelerator Hub catalog (public, unauthenticated), single bulk call · Created/Modified are the Hub's own timestamps for that view; Last Fetched is when this KB last pulled it.<br />
    Dev Extensibility comes from a second bulk call (the Hub's CdsViewsContent.CdsViews OData collection), joined by view name · "Not Released" means the view can't be extended via ABAP developer extensibility even though it's RELEASED for consumption — it's still counted in every stat above, use the checkbox to hide it.<br />
    ATC Release State is a third, independent signal: SAP's own ABAP Cloud "released objects" list (github.com/SAP/abap-atc-cr-cv-s4hc, no API key) filtered to CDS view (DDLS) entries · shown for cross-reference only, it never changes Dev Extensibility or any stat above — the two agree on every "Not Released" case seen so far, but ~125 views the Hub calls Released aren't in this list at all ("—").<br />
    Not shown: the Hub API also returns Version, Created By, and Modified By, but every sampled record shares the same values (Version "1.0", both by a redacted system account) — they carry no distinguishing information for this report. Each row's internal Hub registry ID is available as a tooltip on its name. Recorded source links are kept in this repo's coverage.json, not published here.
  </div>
</div>

<script src="index/view-fields.js"></script>
<script>
  // index/view-fields.js (built by enrich_index.mjs, not regenerated by this
  // script) sets window.__VIEW_FIELDS__. Loaded as an external script tag
  // above, not via fetch() — fetch() to a sibling file is blocked by Chrome
  // under file://, which is how this report is normally opened.
  // Missing/failed-to-load is handled gracefully: expand just shows "no
  // field data available".
  const VIEW_FIELDS = window.__VIEW_FIELDS__ || {};
  const expandedNames = new Set();

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  function renderDetailTable(table, caption) {
    if (!table || !table.rows.length) return '';
    const head = '<tr>' + table.header.map(h => '<th>' + escapeHtml(h) + '</th>').join('') + '</tr>';
    const body = table.rows.map(r => '<tr>' + r.map(c => '<td>' + escapeHtml(c) + '</td>').join('') + '</tr>').join('');
    return '<table class="detail-table"><caption>' + caption + ' (' + table.rows.length + ')</caption>' +
      '<thead>' + head + '</thead><tbody>' + body + '</tbody></table>';
  }

  function renderDetailRow(name, colspan) {
    const data = VIEW_FIELDS[name];
    const fieldsHtml = data ? renderDetailTable(data.f, 'Fields') : '';
    const assocHtml = data ? renderDetailTable(data.a, 'Associations') : '';
    const body = fieldsHtml || assocHtml
      ? fieldsHtml + assocHtml
      : '<span class="detail-empty">No field data available' + (data ? '' : ' — not in the KB yet') + '.</span>';
    return '<tr class="detail-row"><td colspan="' + colspan + '">' + body + '</td></tr>';
  }

  // Both tables below filter their rows by the same "does column 0/1/2
  // contain the query" text search, then render into a <tbody> capped at
  // 2,000 rows with the same overflow notice — factored out here so the two
  // render()/renderExtra() functions only carry what's actually different
  // between the two tables (columns, row markup, colspan).
  function matchesSearch(r, q) {
    return !q || r[0].includes(q) || r[1].toUpperCase().includes(q) || r[2].toUpperCase().includes(q);
  }

  function renderRowsInto(tbodyEl, countEl, filtered, total, rowHtml, colspan) {
    countEl.textContent = filtered.length.toLocaleString() + ' of ' + total.toLocaleString() + ' views';
    tbodyEl.innerHTML = filtered.slice(0, 2000).map(rowHtml).join('');
    if (filtered.length > 2000) {
      tbodyEl.innerHTML += '<tr><td colspan="' + colspan + '" style="color:var(--text-muted);padding:12px 10px">Showing first 2,000 matches — refine the filter to narrow further.</td></tr>';
    }
  }

  const rows = ${rowsJson}; // [name, displayName, description, status, createdAt, modifiedAt, lastFetchedAt, regId, devExtStatus, atcState]
  const STATUS_BADGE = {
    'full': '<span class="status-good">✓ Full DDL</span>',
    'metadata-only': '<span class="status-warning">◐ Metadata-only</span>',
    'missing': '<span class="status-critical">✗ Missing</span>',
  };
  const tbody = document.getElementById('tbody');
  const rowCount = document.getElementById('rowCount');
  const search = document.getElementById('search');
  const buttons = document.querySelectorAll('.filters button');
  const hideNotDevExt = document.getElementById('hideNotDevExt');
  let statusFilter = 'all';

  function render() {
    const q = search.value.trim().toUpperCase();
    const filtered = rows.filter(r => {
      if (statusFilter !== 'all' && r[3] !== statusFilter) return false;
      if (hideNotDevExt.checked && r[8] === 'Not Released') return false;
      return matchesSearch(r, q);
    });
    renderRowsInto(tbody, rowCount, filtered, rows.length, r => {
      const [name, displayName, description, status, createdAt, modifiedAt, lastFetchedAt, regId, devExtStatus, atcState] = r;
      const devExtClass = devExtStatus === 'Not Released' ? 'not-released' : devExtStatus === 'Released' ? 'released' : '';
      const expanded = expandedNames.has(name);
      const row = '<tr class="view-row" data-name="' + escapeHtml(name) + '"><td class="status-cell">' + (STATUS_BADGE[status] || status) + '</td>' +
        '<td class="name-cell" title="Hub registry ID: ' + (regId || 'n/a') + '"><span class="toggle-icon">' + (expanded ? '▾' : '▸') + '</span>' + name + '</td>' +
        '<td class="desc-cell">' + (displayName || description || '').replace(/</g, '&lt;') + '</td>' +
        '<td class="ext-cell ' + devExtClass + '">' + (devExtStatus || '—') + '</td>' +
        '<td class="atc-cell ' + (atcState || '') + '">' + (atcState || '—') + '</td>' +
        '<td class="date-cell">' + (createdAt || '—') + '</td>' +
        '<td class="date-cell">' + (modifiedAt || '—') + '</td>' +
        '<td class="date-cell">' + (lastFetchedAt || '—') + '</td></tr>';
      return expanded ? row + renderDetailRow(name, 8) : row;
    }, 8);
  }

  tbody.addEventListener('click', e => {
    const tr = e.target.closest('tr.view-row');
    if (!tr) return;
    const name = tr.dataset.name;
    if (expandedNames.has(name)) expandedNames.delete(name); else expandedNames.add(name);
    render();
  });

  search.addEventListener('input', render);
  hideNotDevExt.addEventListener('change', render);
  buttons.forEach(b => b.addEventListener('click', () => {
    buttons.forEach(x => x.setAttribute('aria-pressed', 'false'));
    b.setAttribute('aria-pressed', 'true');
    statusFilter = b.dataset.status;
    render();
  }));

  render();

  const extraRows = ${extraRowsJson}; // [name, description, appComponent, releaseState]
  const extraSearch = document.getElementById('extraSearch');
  const extraTbody = document.getElementById('extraTbody');
  const extraRowCount = document.getElementById('extraRowCount');
  const extraButtons = document.querySelectorAll('[data-release]');
  let extraReleaseFilter = 'all';

  function renderExtra() {
    const q = extraSearch.value.trim().toUpperCase();
    const filtered = extraRows.filter(r => {
      if (extraReleaseFilter !== 'all' && r[3] !== extraReleaseFilter) return false;
      return matchesSearch(r, q);
    });
    renderRowsInto(extraTbody, extraRowCount, filtered, extraRows.length, r => {
      const [name, description, appComponent, releaseState] = r;
      const expanded = expandedNames.has(name);
      const row = '<tr class="view-row" data-name="' + escapeHtml(name) + '"><td class="name-cell"><span class="toggle-icon">' + (expanded ? '▾' : '▸') + '</span>' + name + '</td>' +
        '<td class="desc-cell">' + (description || '').replace(/</g, '&lt;') + '</td>' +
        '<td class="date-cell">' + (appComponent || '—') + '</td>' +
        '<td class="date-cell">' + (releaseState || '—') + '</td></tr>';
      return expanded ? row + renderDetailRow(name, 4) : row;
    }, 4);
  }

  extraTbody.addEventListener('click', e => {
    const tr = e.target.closest('tr.view-row');
    if (!tr) return;
    const name = tr.dataset.name;
    if (expandedNames.has(name)) expandedNames.delete(name); else expandedNames.add(name);
    renderExtra();
  });

  extraSearch.addEventListener('input', renderExtra);
  extraButtons.forEach(b => b.addEventListener('click', () => {
    extraButtons.forEach(x => x.setAttribute('aria-pressed', 'false'));
    b.setAttribute('aria-pressed', 'true');
    extraReleaseFilter = b.dataset.release;
    renderExtra();
  }));
  renderExtra();
</script>
</body>
</html>
`;
}

// ── Main ────────────────────────────────────────────────────────────────────

async function main() {
  console.log('📡 Fetching SAP Business Accelerator Hub catalog...');
  const [hubArtifacts, extMap, atcMap] = await Promise.all([
    fetchHubCatalog(),
    fetchExtensibilityMap(),
    fetchAtcReleaseMap(),
  ]);
  console.log(`   ${hubArtifacts.length} artifact(s) returned, ${extMap.size} with a Developer Extensibility state, ${atcMap.size} in SAP's ATC released-objects list`);

  console.log('📂 Reading local views...');
  const localInfo = await loadLocalViewInfo();
  console.log(`   ${localInfo.size} local view(s)`);

  const manifest = await loadHubMetadataManifest();

  const report = buildReport(hubArtifacts, localInfo, manifest, extMap, atcMap);

  console.log(`✅ Released on Hub: ${report.hubTotal} | Full: ${report.fullTotal} | Metadata-only: ${report.metadataOnlyTotal} | Missing: ${report.missingTotal} | In KB not on Hub: ${report.extraTotal}`);

  await fs.writeFile(path.join(DATA_DIR, 'coverage.json'), JSON.stringify(report, null, 2), 'utf-8');
  await fs.writeFile(path.join(DATA_DIR, 'coverage-report.html'), renderHtml(report), 'utf-8');
  console.log(`📝 Written to ${DATA_DIR}/coverage.json and ${DATA_DIR}/coverage-report.html`);
}

main().catch(err => {
  console.error(`❌ Error: ${err.message}`);
  process.exit(1);
});
