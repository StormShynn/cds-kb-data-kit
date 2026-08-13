// worker/src/index.mjs — cds-kb-usage-collector (Cloudflare Worker)
//
// Anonymous usage-ping collector for cds-kb-mcp. Every running instance of
// the MCP server (local stdio or hosted SSE — see ../../src/usage-tracker.mjs)
// batches its own {view, count} deltas and POSTs them here every few
// minutes. This Worker just accumulates running totals per view name — it
// never sees who's asking, only "this view name, N more reads".
//
// Storage moved from Workers KV to a Durable Object (USAGE_DO) so per-view
// counts are atomic and unbounded by KV's free-plan 1,000 writes/day limit
// (the old KV implementation's documented bottleneck). The DO keeps an
// in-memory Map and persists it to its SQLite-backed storage on every write;
// /totals reads the Map directly (single instance, so no consistency issue).
//
// Two endpoints:
//   POST /ping    body: { events: [{ view, count }, ...] }   — anyone can call this
//   GET  /totals?token=...                                    — requires PULL_TOKEN
//
// /totals is gated because it's the one place the aggregate popularity
// data (not identity — there is none here) is readable in bulk; only the
// data repo's scheduled pull job (scripts/pull-usage-stats.mjs) should read
// it, not the public internet.
//
// Deploy (see ../README.md for the full walkthrough):
//   wrangler secret put PULL_TOKEN
//   wrangler deploy

const MAX_EVENTS_PER_REQUEST = 500;
const MAX_VIEW_NAME_LENGTH = 100;
const MAX_COUNT_PER_EVENT = 1000; // clamps one bad/buggy client from skewing a single view's total in one request

export default {
  async fetch(request, env) {
    try {
      const url = new URL(request.url);

      if (request.method === 'POST' && url.pathname === '/ping') {
        return await handlePing(request, env);
      }
      if (request.method === 'GET' && url.pathname === '/totals') {
        return await handleTotals(request, env);
      }
      return new Response('Not found', { status: 404 });
    } catch (e) {
      // Surface the real error message during bring-up (curl-able instead of
      // Cloudflare's opaque 1101); will be tightened once stable.
      return new Response(`worker error: ${e.message}`, { status: 500 });
    }
  },
};

// Route a request into the single UsageCounter DO instance.
//
// Reset procedure (e.g. after test data pollutes the totals): bump this
// instance name to something new and redeploy — idFromName creates a fresh
// Durable Object with empty storage, so /totals starts at zero. The old
// instance's storage is abandoned (nothing reads it anymore); there is no
// CLI way to delete DO storage, so keep this for intentional resets only.
function usageCounter(env) {
  const id = env.USAGE_DO.idFromName('global-v2');
  return env.USAGE_DO.get(id);
}

async function handlePing(request, env) {
  let body;
  try {
    body = await request.json();
  } catch {
    return new Response('Invalid JSON', { status: 400 });
  }

  const events = Array.isArray(body?.events) ? body.events.slice(0, MAX_EVENTS_PER_REQUEST) : [];
  if (events.length === 0) {
    return new Response('No events', { status: 400 });
  }

  // Validate/clamp here (before the DO) so the DO only ever sees clean input.
  const clean = [];
  for (const ev of events) {
    const view = String(ev?.view || '').trim().toUpperCase().slice(0, MAX_VIEW_NAME_LENGTH);
    const rawCount = Number(ev?.count);
    const count = Number.isFinite(rawCount) ? Math.max(1, Math.min(MAX_COUNT_PER_EVENT, Math.floor(rawCount))) : 0;
    if (view && count) clean.push({ view, count });
  }
  if (clean.length === 0) {
    return new Response('No valid events', { status: 400 });
  }

  const resp = await usageCounter(env).fetch(new Request('https://usage-do/ping', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ events: clean }),
  }));
  return new Response(resp.body, { status: resp.status, headers: { 'content-type': 'application/json' } });
}

async function handleTotals(request, env) {
  const token = new URL(request.url).searchParams.get('token');
  if (!env.PULL_TOKEN || token !== env.PULL_TOKEN) {
    return new Response('Unauthorized', { status: 401 });
  }

  const resp = await usageCounter(env).fetch(new Request('https://usage-do/totals'));
  return new Response(resp.body, { status: resp.status, headers: { 'content-type': 'application/json' } });
}

/**
 * UsageCounter — single-instance Durable Object holding the running totals.
 *
 * - state.storage is the SQLite-backed key-value store; counts are written
 *   through on every ping batch so a restart/eviction never loses data.
 * - No per-instance write limits like Workers KV free tier (the reason KV
 *   was replaced).
 */
export class UsageCounter {
  constructor(state) {
    this.state = state;
    this.totals = new Map(); // VIEW_NAME -> count, hydrated from storage on first use
    this.hydrated = false;
  }

  async #hydrate() {
    if (this.hydrated) return;
    // Rehydrate by listing all `v:` keys and their counts in one pass.
    const list = await this.state.storage.list({ prefix: 'v:' });
    for (const [key, value] of list) {
      this.totals.set(key.slice(2), Number(value) || 0);
    }
    this.hydrated = true;
  }

  async fetch(request) {
    const url = new URL(request.url);
    try {
      if (request.method === 'POST' && url.pathname === '/ping') {
        return await this.#onPing(request);
      }
      if (request.method === 'GET' && url.pathname === '/totals') {
        return await this.#onTotals();
      }
      return new Response('Not found', { status: 404 });
    } catch (e) {
      return new Response(`DO error: ${e.message}`, { status: 500 });
    }
  }

  async #onPing(request) {
    let body;
    try {
      body = await request.json();
    } catch {
      return new Response('Invalid JSON', { status: 400 });
    }
    await this.#hydrate();

    const events = Array.isArray(body?.events) ? body.events : [];
    const writes = {};
    for (const ev of events) {
      const view = String(ev?.view || '');
      const count = Number(ev?.count) || 0;
      if (!view || !count) continue;
      const next = (this.totals.get(view) || 0) + count;
      this.totals.set(view, next);
      writes[`v:${view}`] = next;
    }
    if (Object.keys(writes).length > 0) {
      await this.state.storage.put(writes);
    }
    return new Response('ok', { status: 200 });
  }

  async #onTotals() {
    await this.#hydrate();
    const totals = {};
    for (const [view, count] of this.totals) {
      totals[view] = count;
    }
    return new Response(JSON.stringify(totals), {
      headers: { 'content-type': 'application/json' },
    });
  }
}
