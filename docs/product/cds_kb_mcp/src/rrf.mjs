/**
 * Reciprocal Rank Fusion (Cormack et al.) — fuse parallel ranked lists.
 * score(d) = Σ_i 1 / (k + rank_i(d)) where rank is 1-based.
 *
 * Pure helpers so hybrid search and unit tests share one implementation.
 */

/** Default RRF dampening constant (standard IR default). */
export const RRF_K = 60;

/**
 * @param {Array<Array<object>>} rankedLists — each list best-first
 * @param {{ k?: number, getId?: (item: object) => string }} [opts]
 * @returns {Array<object & { score: number, _rrf: number }>} fused, best-first
 */
export function reciprocalRankFusion(rankedLists, opts = {}) {
  const k = opts.k ?? RRF_K;
  const getId = opts.getId || ((item) => String(item?.name ?? item?.id ?? '').toUpperCase());
  const scores = new Map();
  const items = new Map();

  for (const list of rankedLists) {
    if (!Array.isArray(list) || list.length === 0) continue;
    list.forEach((item, idx) => {
      const id = getId(item);
      if (!id) return;
      const add = 1 / (k + idx + 1);
      scores.set(id, (scores.get(id) || 0) + add);
      if (!items.has(id)) items.set(id, item);
    });
  }

  return [...scores.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([id, rrf]) => {
      const base = items.get(id);
      return { ...base, score: rrf, _rrf: rrf };
    });
}

/**
 * Build a cosine-ranked list from candidates that already have vectors.
 * Candidates missing a vector are omitted (they still survive via BM25 in RRF).
 *
 * @param {Array<object>} candidates
 * @param {Float32Array|number[]} queryVec
 * @param {(name: string) => Float32Array|number[]|null|undefined} getVec
 * @param {(a: number[], b: number[]) => number} cosine
 * @returns {Array<object & { _cos: number }>}
 */
export function rankByCosine(candidates, queryVec, getVec, cosine) {
  if (!queryVec || !Array.isArray(candidates) || candidates.length === 0) return [];
  return candidates
    .map((r) => {
      const name = String(r.name || '');
      const vec = getVec(name);
      const cos = vec ? cosine(queryVec, vec) : null;
      return cos == null ? null : { ...r, _cos: cos };
    })
    .filter(Boolean)
    .sort((a, b) => b._cos - a._cos);
}
