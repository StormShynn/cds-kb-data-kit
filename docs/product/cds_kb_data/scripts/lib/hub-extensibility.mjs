// scripts/lib/hub-extensibility.mjs
// Single source of truth for fetching SAP's "Released for Developer
// Extensibility" state per CDS view — a signal genuinely distinct from this
// KB's own release_state (sourced from the Hub's general artifact catalog,
// see add_hub_metadata.mjs). A view can be release_state: released (SAP
// confirms it exists / is a public API) while ReleaseStateDeveloperExtensibility
// is "Not Released" (can't `association to`/`select from` it in a custom
// ABAP Developer Extensibility CDS view — see
// docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md
// for why these two must never be conflated).
//
// Extracted from scripts/check-coverage.mjs so scripts/backfill-dev-ext-status.mjs
// (and any future consumer) share the exact same fetch/parse logic instead of
// a second hand-copied implementation drifting from this one.

// This OData collection is the only place the Hub exposes Developer
// Extensibility state — a global registry (~19k rows across every SAP
// product, not just S/4HANA Cloud), so it's filtered with $select down to
// the two fields actually used here. One unpaged call returns every row
// (confirmed empirically: $inlinecount reports ~19,122 and the same count
// comes back with no $skiptoken/$top needed).
const EXT_URL =
  'https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews' +
  '?$format=json&$select=TechnicalName,ReleaseStateDeveloperExtensibility&$inlinecount=allpages';

// Optional, unused today (confirmed empirically that EXT_URL works with zero
// auth) — kept as a fallback in case the Hub ever tightens anonymous access.
const SAP_API_HUB_KEY = process.env.SAP_API_HUB_KEY || '';

function sapHeaders(extra) {
  const headers = { 'User-Agent': 'cds-kb-mcp-coverage-check', Accept: 'application/json', ...extra };
  if (SAP_API_HUB_KEY) headers.APIKey = SAP_API_HUB_KEY;
  return headers;
}

/**
 * Name -> "Released" | "Not Released", sourced from EXT_URL (raw SAP
 * strings, not normalized — callers decide their own storage convention).
 * Never throws — this is a display/enrichment aid, not a hard dependency,
 * so a Hub hiccup here shouldn't fail the whole caller.
 */
export async function fetchExtensibilityMap() {
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

/** "Released" / "Not Released" (raw SAP string) -> this KB's frontmatter convention. */
export function normalizeDevExtStatus(raw) {
  if (!raw) return null;
  return String(raw).trim().toLowerCase().replace(/\s+/g, '_');
}
