// scripts/lib/concurrency.mjs
// Shared worker-pool helper for scripts that need to process many items (view
// files, Hub fetches) with a bounded number in flight at once.

/** Run `fn` over `items` with at most `concurrency` in flight at once. */
export async function runPool(items, concurrency, fn) {
  const results = new Array(items.length);
  let next = 0;
  async function worker() {
    while (next < items.length) {
      const i = next++;
      results[i] = await fn(items[i], i);
    }
  }
  await Promise.all(Array.from({ length: Math.min(concurrency, items.length) }, worker));
  return results;
}
