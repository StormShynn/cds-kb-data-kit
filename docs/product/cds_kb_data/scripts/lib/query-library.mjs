// scripts/lib/query-library.mjs — shared query-library schema helpers.
// Used by cds_kb_mcp (import), build/sync scripts, and mirrored in Query Builder JS.
//
// Schema (backward compatible):
//   - Legacy entries (no id/kind) are treated as recipes.
//   - kind: "recipe" | "variant" (default "recipe")
//   - variant requires recipeId; inherits views/select/… from recipe, may override
//     title/description/contributor/select/where/groupBy/having/orderBy/viewName/featured.
//   - featured: optional; Query Builder embeds only featured entries in DATA.L and
//     fetches the full index/query-library.json at runtime.

import crypto from 'node:crypto';

const OVERRIDE_KEYS = [
  'title',
  'description',
  'contributor',
  'select',
  'where',
  'groupBy',
  'having',
  'orderBy',
  'viewName',
  'featured',
  'rawNote',
];

/**
 * @param {string} title
 * @returns {string}
 */
export function slugifyLibraryId(title) {
  return String(title || 'query')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 64) || 'query';
}

/**
 * @param {unknown} entry
 * @returns {'recipe'|'variant'}
 */
export function entryKind(entry) {
  if (entry && typeof entry === 'object' && entry.kind === 'variant') return 'variant';
  return 'recipe';
}

/**
 * @param {object[]} library
 * @returns {Map<string, object>}
 */
export function indexLibraryById(library) {
  const map = new Map();
  for (const entry of Array.isArray(library) ? library : []) {
    if (entry?.id) map.set(String(entry.id), entry);
  }
  return map;
}

/**
 * Merge a variant onto its recipe. Returns a full loadable shape.
 * If recipe is missing, returns the variant as-is (caller may warn).
 *
 * @param {object} entry
 * @param {Map<string, object>|object[]} libraryOrById
 * @returns {object}
 */
export function resolveLibraryEntry(entry, libraryOrById) {
  if (!entry || typeof entry !== 'object') return entry;
  if (entryKind(entry) !== 'variant') {
    return { ...entry, kind: entry.kind || 'recipe' };
  }
  const byId = libraryOrById instanceof Map
    ? libraryOrById
    : indexLibraryById(libraryOrById);
  const recipe = entry.recipeId ? byId.get(String(entry.recipeId)) : null;
  if (!recipe || entryKind(recipe) === 'variant') {
    return { ...entry, kind: 'variant' };
  }
  const resolved = {
    ...recipe,
    kind: 'variant',
    id: entry.id,
    recipeId: entry.recipeId,
  };
  delete resolved.featured;
  for (const key of OVERRIDE_KEYS) {
    if (entry[key] !== undefined && entry[key] !== null && entry[key] !== '') {
      resolved[key] = entry[key];
    }
  }
  // Prefer variant title/description even when empty string was intentional? keep overrides above.
  if (entry.title) resolved.title = entry.title;
  if (entry.description !== undefined) resolved.description = entry.description;
  return resolved;
}

/**
 * Stable fingerprint for near-duplicate detection (views + clauses, not title).
 * @param {object} entry — preferably resolved
 * @returns {string}
 */
export function shapeFingerprint(entry) {
  const views = (entry?.views || []).map((v) => ({
    alias: v?.alias || '',
    name: (v?.name || '').toUpperCase(),
    mode: v?.mode || null,
    joinType: v?.joinType || null,
    on: v?.on || null,
    raw: v?.raw || null,
  }));
  const payload = JSON.stringify({
    views,
    select: entry?.select || '',
    where: entry?.where || '',
    groupBy: entry?.groupBy || '',
    having: entry?.having || '',
    orderBy: entry?.orderBy || '',
    rawNote: entry?.rawNote || '',
  });
  return crypto.createHash('sha256').update(payload).digest('hex').slice(0, 16);
}

/**
 * Lightweight manifest row for search/list without full clause bodies.
 * @param {object} entry
 * @param {Map<string, object>|object[]} libraryOrById
 */
export function toIndexEntry(entry, libraryOrById) {
  const resolved = resolveLibraryEntry(entry, libraryOrById);
  return {
    id: entry?.id || null,
    kind: entryKind(entry),
    recipeId: entry?.recipeId || null,
    title: entry?.title || resolved?.title || null,
    description: entry?.description ?? resolved?.description ?? null,
    contributor: entry?.contributor ?? resolved?.contributor ?? null,
    views: (resolved?.views || []).map((v) => v.name).filter(Boolean),
    viewName: entry?.viewName ?? resolved?.viewName ?? null,
    featured: entry?.featured === true,
    fingerprint: shapeFingerprint(resolved),
  };
}

/**
 * @param {object[]} library
 * @returns {{ schemaVersion: number, count: number, entries: object[], warnings: string[] }}
 */
export function buildLibraryIndex(library) {
  const list = Array.isArray(library) ? library : [];
  const byId = indexLibraryById(list);
  const warnings = [];
  const seenIds = new Set();
  const fingerprintOwners = new Map();

  for (const entry of list) {
    if (!entry?.id) {
      warnings.push(`entry "${entry?.title || '(untitled)'}" is missing id`);
    } else if (seenIds.has(entry.id)) {
      warnings.push(`duplicate id "${entry.id}"`);
    } else {
      seenIds.add(entry.id);
    }
    if (entryKind(entry) === 'variant') {
      if (!entry.recipeId) warnings.push(`variant "${entry.id || entry.title}" missing recipeId`);
      else if (!byId.has(String(entry.recipeId))) {
        warnings.push(`variant "${entry.id || entry.title}" references missing recipe "${entry.recipeId}"`);
      } else if (entryKind(byId.get(String(entry.recipeId))) === 'variant') {
        warnings.push(`variant "${entry.id || entry.title}" recipeId points at another variant`);
      }
    }
    const fp = shapeFingerprint(resolveLibraryEntry(entry, byId));
    const prev = fingerprintOwners.get(fp);
    if (prev) warnings.push(`near-duplicate shape: "${prev}" and "${entry.id || entry.title}" (fingerprint ${fp})`);
    else fingerprintOwners.set(fp, entry.id || entry.title || '(untitled)');
  }

  return {
    schemaVersion: 1,
    count: list.length,
    entries: list.map((e) => toIndexEntry(e, byId)),
    warnings,
  };
}

/**
 * Entries safe to embed in query-builder.html DATA.L (bootstrap before fetch).
 * @param {object[]} library
 * @returns {object[]}
 */
export function featuredLibraryEntries(library) {
  const list = Array.isArray(library) ? library : [];
  const featured = list.filter((e) => e && e.featured === true);
  return featured.length ? featured : list.slice(0, Math.min(4, list.length));
}
