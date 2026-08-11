// worker/src/index.mjs — cds-kb-usage-collector (Cloudflare Worker)
//
// Anonymous usage-ping collector for cds-kb-mcp. Every running instance of
// the MCP server (local stdio or hosted SSE — see ../../src/usage-tracker.mjs)
// batches its own {view, count} deltas and POSTs them here every few
// minutes. This Worker just accumulates running totals per view name in KV
// — it never sees who's asking, only "this view name, N more reads".
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
// Counts are stored in each key's metadata (not its value) so /totals can
// list() a page of keys and read their counts in one call instead of one
// get() per key — Workers KV list() returns metadata for free.
//
// Deploy (see ../README.md for the full walkthrough):
//   wrangler kv:namespace create USAGE_KV   # then paste the id into wrangler.toml
//   wrangler secret put PULL_TOKEN
//   wrangler deploy

const MAX_EVENTS_PER_REQUEST = 500;
const MAX_VIEW_NAME_LENGTH = 100;
const MAX_COUNT_PER_EVENT = 1000; // clamps one bad/buggy client from skewing a single view's total in one request

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === 'POST' && url.pathname === '/ping') {
      return handlePing(request, env);
    }
    if (request.method === 'GET' && url.pathname === '/totals') {
      return handleTotals(request, env);
    }
    return new Response('Not found', { status: 404 });
  },
};

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

  for (const ev of events) {
    const view = String(ev?.view || '').trim().toUpperCase().slice(0, MAX_VIEW_NAME_LENGTH);
    const rawCount = Number(ev?.count);
    const count = Number.isFinite(rawCount) ? Math.max(1, Math.min(MAX_COUNT_PER_EVENT, Math.floor(rawCount))) : 0;
    if (!view || !count) continue;

    const key = `v:${view}`;
    const existing = await env.USAGE_KV.getWithMetadata(key);
    const current = existing?.metadata?.count || 0;
    await env.USAGE_KV.put(key, '', { metadata: { count: current + count } });
  }

  return new Response('ok', { status: 200 });
}

async function handleTotals(request, env) {
  const token = new URL(request.url).searchParams.get('token');
  if (!env.PULL_TOKEN || token !== env.PULL_TOKEN) {
    return new Response('Unauthorized', { status: 401 });
  }

  const totals = {};
  let cursor;
  do {
    const list = await env.USAGE_KV.list({ prefix: 'v:', cursor });
    for (const k of list.keys) {
      totals[k.name.slice(2)] = k.metadata?.count || 0;
    }
    cursor = list.cursor;
  } while (cursor);

  return new Response(JSON.stringify(totals), {
    headers: { 'content-type': 'application/json' },
  });
}
