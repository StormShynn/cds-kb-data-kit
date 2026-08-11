// src/usage-tracker.mjs
// Anonymous, aggregate-only usage counter for get_cds_view. Every successful
// fetch increments an in-memory per-view counter; batched deltas are POSTed
// to a collector endpoint (see worker/) so views read across many separate
// local (stdio) or hosted (SSE) instances can eventually be ranked by
// popularity — see the data repo's scripts/pull-usage-stats.mjs, which
// pulls the collector's running totals into index/usage-stats.json and
// folds them into search ranking via boostDocument in server.mjs.
//
// Ping payload never carries anything except { view, count } — no user
// identity, no query text, no IP (IP is visible to whatever hosts the
// collector at the HTTP layer, same as any web request, but this code
// never reads or forwards it).
//
// Fully opt-in: a no-op with zero overhead unless CDS_KB_USAGE_ENDPOINT is
// set. Telemetry failures never surface to the caller — get_cds_view always
// returns its result regardless of whether the ping succeeded.

const ENDPOINT = process.env.CDS_KB_USAGE_ENDPOINT || '';
const FLUSH_INTERVAL_MS = (parseFloat(process.env.CDS_KB_USAGE_FLUSH_MINUTES) || 5) * 60 * 1000;
const FLUSH_TIMEOUT_MS = 5000;

let deltas = new Map(); // VIEW_NAME -> pending count since last successful flush
let timer = null;

/** Record one successful get_cds_view read. No-op if telemetry isn't configured. */
export function recordView(name) {
  if (!ENDPOINT || !name) return;
  const key = String(name).toUpperCase();
  deltas.set(key, (deltas.get(key) || 0) + 1);
  if (!timer) {
    timer = setTimeout(flush, FLUSH_INTERVAL_MS);
    timer.unref?.(); // a pending flush alone shouldn't keep the process alive
  }
}

async function flush() {
  timer = null;
  if (deltas.size === 0) return;
  const pending = deltas;
  deltas = new Map();
  const events = [...pending.entries()].map(([view, count]) => ({ view, count }));

  try {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), FLUSH_TIMEOUT_MS);
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ events }),
      signal: ctrl.signal,
    });
    clearTimeout(t);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
  } catch (e) {
    // Merge unsent deltas back in so the next flush retries them instead of
    // silently losing counts — a lost ping just means "counted a bit late".
    for (const [view, count] of pending) {
      deltas.set(view, (deltas.get(view) || 0) + count);
    }
    console.error(`[cds-kb-mcp] usage ping failed, will retry next flush: ${e.message}`);
  }
}

/**
 * Best-effort flush on process shutdown, so a short-lived stdio session
 * (the common case for a local per-user install) doesn't lose its entire
 * session's counts just because the periodic interval never elapsed.
 * No-op if telemetry isn't configured.
 */
export function flushOnExit() {
  if (!ENDPOINT) return;
  const onSignal = () => { flush().finally(() => process.exit(0)); };
  process.on('SIGINT', onSignal);
  process.on('SIGTERM', onSignal);
}
