// scripts/lib/hub-extensibility.mjs
// Single source of truth for fetching SAP's independent, per-view release
// signals that this KB's own release_state does NOT cover:
//
//   - fetchExtensibilityMap(): four related-but-distinct flags from the same
//     Hub OData row, all confirmed present on CdsViewsContent.CdsViews (see
//     docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md):
//       - devExt (ReleaseStateDeveloperExtensibility) — can this entity be
//         used via `association to`/`select from` in a custom ABAP Developer
//         Extensibility CDS view.
//       - keyUserExt (ReleaseStateKeyUserExtensibility) — can this entity be
//         used as a data source when building a new custom CDS view via the
//         no-code/low-code "Custom CDS Views" (Key User Extensibility) app.
//         Independent from devExt — an entity can be released for one and
//         not the other.
//       - extensibleKeyUser (ExtensibleWithKeyUserExtensibility) — can
//         CUSTOM FIELDS be added directly to THIS entity itself via Key User
//         Extensibility. A different question from keyUserExt above (using
//         the entity as a source vs. extending the entity itself).
//       - extensibleDevExt (ExtensibleWithDeveloperExtensibility) — same
//         question as extensibleKeyUser, for ABAP Developer Extensibility.
//     A view can be release_state: released (SAP confirms it exists / is a
//     public API) while devExt/keyUserExt is "Not Released" and/or
//     extensibleKeyUser/extensibleDevExt is "No" — none of these five flags
//     implies any other.
//   - fetchAtcReleaseMap(): SAP's own ABAP Cloud "released objects" list
//     (the same public dataset ATC/Clean Core checks use) — a second,
//     independent opinion on release/deprecation, PLUS (uniquely) a
//     concrete successor object name when one deprecates/replaces another
//     (e.g. I_COSTELEMENT -> notToBeReleased, successor I_GLACCOUNT).
//
// Extracted from scripts/check-coverage.mjs so scripts/backfill-dev-ext-status.mjs
// / scripts/backfill-extensibility-signals.mjs / scripts/backfill-atc-state.mjs
// (and any future consumer) share the exact same fetch/parse logic instead of
// hand-copied implementations drifting from each other.

// This OData collection is the only place the Hub exposes these flags — a
// global registry (~19k rows across every SAP product, not just S/4HANA
// Cloud), so it's filtered with $select down to the fields actually used
// here. One unpaged call returns every row (confirmed empirically:
// $inlinecount reports ~19,122 and the same count comes back with no
// $skiptoken/$top needed).
const EXT_URL =
  'https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews' +
  '?$format=json&$select=TechnicalName,ReleaseStateDeveloperExtensibility,' +
  'ReleaseStateKeyUserExtensibility,ExtensibleWithKeyUserExtensibility,' +
  'ExtensibleWithDeveloperExtensibility&$inlinecount=allpages';

// Optional, unused today (confirmed empirically that EXT_URL works with zero
// auth) — kept as a fallback in case the Hub ever tightens anonymous access.
const SAP_API_HUB_KEY = process.env.SAP_API_HUB_KEY || '';

function sapHeaders(extra) {
  const headers = { 'User-Agent': 'cds-kb-mcp-coverage-check', Accept: 'application/json', ...extra };
  if (SAP_API_HUB_KEY) headers.APIKey = SAP_API_HUB_KEY;
  return headers;
}

/**
 * Name -> { devExt, keyUserExt, extensibleKeyUser, extensibleDevExt }, raw
 * SAP strings ("Released"/"Not Released"/"Yes"/"No"), not normalized —
 * callers decide their own storage convention (normalizeDevExtStatus /
 * normalizeYesNo below). A key is present only if the Hub row had at least
 * one non-null flag; individual properties may still be null/undefined if
 * that specific flag was absent on the row.
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
      if (
        r.ReleaseStateDeveloperExtensibility == null &&
        r.ReleaseStateKeyUserExtensibility == null &&
        r.ExtensibleWithKeyUserExtensibility == null &&
        r.ExtensibleWithDeveloperExtensibility == null
      ) continue;
      map.set(r.TechnicalName, {
        devExt: r.ReleaseStateDeveloperExtensibility ?? null,
        keyUserExt: r.ReleaseStateKeyUserExtensibility ?? null,
        extensibleKeyUser: r.ExtensibleWithKeyUserExtensibility ?? null,
        extensibleDevExt: r.ExtensibleWithDeveloperExtensibility ?? null,
      });
    }
    return map;
  } catch (err) {
    console.error(`⚠️  Extensibility catalog fetch failed, continuing without it: ${err.message}`);
    return new Map();
  }
}

/** "Released" / "Not Released" (raw SAP string) -> this KB's frontmatter convention. Shared by devExt and keyUserExt — same raw shape from the Hub. */
export function normalizeDevExtStatus(raw) {
  if (!raw) return null;
  return String(raw).trim().toLowerCase().replace(/\s+/g, '_');
}

/** "Yes" / "No" (raw SAP string) -> this KB's frontmatter convention ("yes"/"no"). */
export function normalizeYesNo(raw) {
  if (!raw) return null;
  return String(raw).trim().toLowerCase();
}

// SAP's official ABAP Cloud released-objects list (public_cloud scope, which
// matches this KB's default systemType — see add_hub_metadata.mjs). Plain
// static JSON on GitHub, no auth, no rate-limit uncertainty like the Hub's
// undocumented OData collection above. Confirmed empirically: ~7,566 DDLS
// (CDS view source) entries, states are already lowerCamelCase
// ('released' | 'deprecated' | 'notToBeReleased') — no normalization needed,
// unlike fetchExtensibilityMap's "Not Released" (with a space).
const ATC_RELEASE_URL =
  'https://raw.githubusercontent.com/SAP/abap-atc-cr-cv-s4hc/main/src/objectReleaseInfoLatest.json';

/**
 * Name -> { state: 'released'|'deprecated'|'notToBeReleased', successor: string|null }
 * for TADIR object type DDLS (CDS view sources) only. `successor` is the
 * replacement object's name when SAP's dataset names exactly one (never
 * more than one, confirmed empirically for DDLS) — null otherwise, including
 * for state 'released' (a released object has no successor by definition).
 * Never throws — same never-throws contract as fetchExtensibilityMap.
 */
export async function fetchAtcReleaseMap() {
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
        map.set(entry.tadirObjName.toUpperCase(), {
          state: entry.state,
          successor: entry.successors?.[0]?.tadirObjName || null,
        });
      }
    }
    return map;
  } catch (err) {
    console.error(`⚠️  ATC released-objects fetch failed, continuing without it: ${err.message}`);
    return new Map();
  }
}
