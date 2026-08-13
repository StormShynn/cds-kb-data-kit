// worker/src/index.mjs — cds-kb-usage-collector (Cloudflare Worker)
//
// Anonymous usage-ping collector for cds-kb-mcp (+ optional Query Builder shapes).
//
// Endpoints:
//   POST /ping          body: { events: [{ view, count }, ...] }
//   GET  /totals?token=...
//   POST /ping-shapes   body: { events: [{ shapeId, views, selectFieldCount, selectFieldHash, flags, count }, ...] }
//                       CORS open for browser opt-in from GitHub Pages Query Builder
//   GET  /shape-totals?token=...
//   OPTIONS /ping-shapes — CORS preflight
//
// Shape events must NEVER include WHERE/HAVING literals, titles, contributors,
// or raw notes — only structural metadata.
//
// Deploy: see ../README.md

const MAX_EVENTS_PER_REQUEST = 500;
const MAX_VIEW_NAME_LENGTH = 100;
const MAX_COUNT_PER_EVENT = 1000;
const MAX_SHAPE_ID_LENGTH = 64;
const MAX_VIEWS_PER_SHAPE = 12;

const RATE_LIMIT_MAX = 120;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_BUCKETS = 10_000;
const ipBuckets = new Map();

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'content-type',
  'Access-Control-Max-Age': '86400',
};

function clientIp(request) {
  return (
    request.headers.get('CF-Connecting-IP') ||
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    'unknown'
  );
}

function rateLimited(request) {
  const ip = clientIp(request);
  const now = Date.now();
  if (ipBuckets.size > RATE_LIMIT_MAX_BUCKETS) {
    for (const [k, v] of ipBuckets) {
      if (now - v.windowStart >= RATE_LIMIT_WINDOW_MS) ipBuckets.delete(k);
    }
  }
  const b = ipBuckets.get(ip);
  if (!b || now - b.windowStart >= RATE_LIMIT_WINDOW_MS) {
    ipBuckets.set(ip, { count: 1, windowStart: now });
    return null;
  }
  b.count++;
  if (b.count > RATE_LIMIT_MAX) {
    return new Response('Too Many Requests', { status: 429, headers: { 'retry-after': '60', ...CORS_HEADERS } });
  }
  return null;
}

function corsJson(body, status = 200) {
  return new Response(typeof body === 'string' ? body : JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json', ...CORS_HEADERS },
  });
}

export default {
  async fetch(request, env) {
    try {
      const url = new URL(request.url);

      if (request.method === 'OPTIONS' && url.pathname === '/ping-shapes') {
        return new Response(null, { status: 204, headers: CORS_HEADERS });
      }

      if (request.method === 'POST' && url.pathname === '/ping') {
        const limited = rateLimited(request);
        if (limited) return limited;
        return await handlePing(request, env);
      }
      if (request.method === 'GET' && url.pathname === '/totals') {
        const limited = rateLimited(request);
        if (limited) return limited;
        return await handleTotals(request, env);
      }
      if (request.method === 'POST' && url.pathname === '/ping-shapes') {
        const limited = rateLimited(request);
        if (limited) return limited;
        return await handleShapePing(request, env);
      }
      if (request.method === 'GET' && url.pathname === '/shape-totals') {
        const limited = rateLimited(request);
        if (limited) return limited;
        return await handleShapeTotals(request, env);
      }
      return new Response('Not found', { status: 404 });
    } catch (e) {
      console.error('worker error:', e?.message || e);
      return new Response('Internal Server Error', { status: 500 });
    }
  },
};

function usageCounter(env) {
  const id = env.USAGE_DO.idFromName('global-v3');
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

function sanitizeShapeEvent(ev) {
  const shapeId = String(ev?.shapeId || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-f0-9]/g, '')
    .slice(0, MAX_SHAPE_ID_LENGTH);
  const rawCount = Number(ev?.count);
  const count = Number.isFinite(rawCount) ? Math.max(1, Math.min(MAX_COUNT_PER_EVENT, Math.floor(rawCount))) : 0;
  if (!shapeId || shapeId.length < 16 || !count) return null;

  const views = Array.isArray(ev?.views)
    ? ev.views
        .map((v) => String(v || '').trim().toUpperCase().slice(0, MAX_VIEW_NAME_LENGTH))
        .filter(Boolean)
        .slice(0, MAX_VIEWS_PER_SHAPE)
    : [];

  const selectFieldCount = Math.max(0, Math.min(500, Math.floor(Number(ev?.selectFieldCount) || 0)));
  const selectFieldHash = String(ev?.selectFieldHash || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-f0-9]/g, '')
    .slice(0, 64);

  const srcFlags = ev?.flags && typeof ev.flags === 'object' ? ev.flags : {};
  const flags = {
    hasWhere: !!srcFlags.hasWhere,
    hasGroupBy: !!srcFlags.hasGroupBy,
    hasHaving: !!srcFlags.hasHaving,
    hasOrderBy: !!srcFlags.hasOrderBy,
    hasJoin: !!srcFlags.hasJoin,
    joinCount: Math.max(0, Math.min(20, Math.floor(Number(srcFlags.joinCount) || 0))),
    hasRawNote: !!srcFlags.hasRawNote,
  };

  // Drop any accidental sensitive keys if a buggy client sends them.
  return { shapeId, views, selectFieldCount, selectFieldHash, flags, count };
}

async function handleShapePing(request, env) {
  let body;
  try {
    body = await request.json();
  } catch {
    return corsJson({ error: 'Invalid JSON' }, 400);
  }

  const events = Array.isArray(body?.events) ? body.events.slice(0, MAX_EVENTS_PER_REQUEST) : [];
  const clean = [];
  for (const ev of events) {
    const s = sanitizeShapeEvent(ev);
    if (s) clean.push(s);
  }
  if (clean.length === 0) {
    return corsJson({ error: 'No valid events' }, 400);
  }

  const resp = await usageCounter(env).fetch(new Request('https://usage-do/ping-shapes', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ events: clean }),
  }));
  return new Response(resp.body, {
    status: resp.status,
    headers: { 'content-type': 'application/json', ...CORS_HEADERS },
  });
}

async function handleShapeTotals(request, env) {
  const token = new URL(request.url).searchParams.get('token');
  if (!env.PULL_TOKEN || token !== env.PULL_TOKEN) {
    return new Response('Unauthorized', { status: 401 });
  }

  const resp = await usageCounter(env).fetch(new Request('https://usage-do/shape-totals'));
  return new Response(resp.body, { status: resp.status, headers: { 'content-type': 'application/json' } });
}

/**
 * UsageCounter — view totals (v:) + shape aggregates (s:).
 */
export class UsageCounter {
  constructor(state) {
    this.state = state;
    this.totals = new Map();
    this.shapes = new Map(); // shapeId -> { count, views, selectFieldCount, selectFieldHash, flags }
    this.hydrated = false;
  }

  async #hydrate() {
    if (this.hydrated) return;
    const list = await this.state.storage.list();
    for (const [key, value] of list) {
      if (key.startsWith('v:')) {
        this.totals.set(key.slice(2), Number(value) || 0);
      } else if (key.startsWith('s:')) {
        this.shapes.set(key.slice(2), value && typeof value === 'object' ? value : { count: Number(value) || 0 });
      }
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
      if (request.method === 'POST' && url.pathname === '/ping-shapes') {
        return await this.#onShapePing(request);
      }
      if (request.method === 'GET' && url.pathname === '/shape-totals') {
        return await this.#onShapeTotals();
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

  async #onShapePing(request) {
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
      const shapeId = String(ev?.shapeId || '');
      const count = Number(ev?.count) || 0;
      if (!shapeId || !count) continue;
      const prev = this.shapes.get(shapeId) || {
        count: 0,
        views: ev.views || [],
        selectFieldCount: ev.selectFieldCount || 0,
        selectFieldHash: ev.selectFieldHash || '',
        flags: ev.flags || {},
      };
      const next = {
        count: (Number(prev.count) || 0) + count,
        views: Array.isArray(ev.views) && ev.views.length ? ev.views : prev.views,
        selectFieldCount: ev.selectFieldCount ?? prev.selectFieldCount,
        selectFieldHash: ev.selectFieldHash || prev.selectFieldHash,
        flags: ev.flags || prev.flags,
      };
      this.shapes.set(shapeId, next);
      writes[`s:${shapeId}`] = next;
    }
    if (Object.keys(writes).length > 0) {
      await this.state.storage.put(writes);
    }
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'content-type': 'application/json' },
    });
  }

  async #onShapeTotals() {
    await this.#hydrate();
    const totals = {};
    for (const [shapeId, meta] of this.shapes) {
      totals[shapeId] = meta;
    }
    return new Response(JSON.stringify(totals), {
      headers: { 'content-type': 'application/json' },
    });
  }
}
