// worker/src/index.mjs — cds-kb-usage-collector (Cloudflare Worker)
//
// Anonymous usage-ping collector for cds-kb-mcp (+ optional Query Builder shapes)
// plus public Propose Issue bot (POST /propose-issue).
//
// Endpoints:
//   POST   /ping          body: { events: [{ view, count }, ...] }
//   GET    /totals?token=...
//   DELETE /totals?token=...&view=NAME[,NAME2,...]  and/or  &prefix=PFX
//                       Surgical cleanup for test/junk entries (e.g. a smoke
//                       test that accidentally hit prod instead of `wrangler
//                       dev`) without wiping real counts. At least one of
//                       view/prefix is required — this never does a full wipe.
//   POST   /ping-shapes   body: { events: [{ shapeId, views, selectFieldCount, selectFieldHash, flags, count }, ...] }
//                       CORS open for browser opt-in from GitHub Pages Query Builder
//   GET    /shape-totals?token=...
//   DELETE /shape-totals?token=...&shapeId=HASH[,HASH2,...]
//   OPTIONS /ping-shapes | /propose-issue — CORS preflight
//   POST   /propose-issue body: { title, body|markdown, kind?: 'query'|'cds', website?: honeypot }
//                       Creates a GitHub Issue via GITHUB_ISSUE_TOKEN (never logs full body)
//
// Shape events must NEVER include WHERE/HAVING literals, titles, contributors,
// or raw notes — only structural metadata.
//
// Test-pollution guard: real SAP CDS view names never start with `ZZTEST_`,
// `RATETEST`, or `SMOKETEST` — any /ping event using one of those prefixes is
// silently dropped before it reaches the Durable Object. When manually
// smoke-testing this worker, either run `wrangler dev` locally instead of
// pinging the deployed URL, or (if you must hit prod) name your fake views
// with the `ZZTEST_` prefix so they never persist and never need cleanup.
//
// Deploy: see ../README.md

import {
  sanitizeProposeIssueBody,
  proposeLogHint,
} from './propose-sanitize.mjs';

const MAX_EVENTS_PER_REQUEST = 500;
const MAX_VIEW_NAME_LENGTH = 100;
const MAX_COUNT_PER_EVENT = 1000;
const MAX_SHAPE_ID_LENGTH = 64;
const MAX_VIEWS_PER_SHAPE = 12;
const MAX_DELETE_KEYS_PER_REQUEST = 100;

// No real SAP CDS view is named with any of these prefixes — a /ping event
// for one of them is test/smoke-test traffic and is dropped, never counted.
const TEST_VIEW_PATTERN = /^(ZZTEST_|RATETEST|SMOKETEST)/i;

// Per-IP rate limiting lives INSIDE the Durable Object (see #rateLimited in
// UsageCounter): the DO is the one global single-instance, so buckets are
// shared across every worker isolate. A per-isolate map (tried first) splits
// the window across isolates and never trips.
const RATE_LIMIT_MAX = 120;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_BUCKETS = 10_000;

// Stricter window for Issue creation (abuse / GitHub quota).
const PROPOSE_RATE_LIMIT_MAX = 8;
const PROPOSE_RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 8 Issues / IP / hour

const DEFAULT_PROPOSE_REPO = 'StormShynn/cds-kb-mcp-data-kit';
const PROPOSE_LABEL = 'query-library';
const CDS_LABEL = 'cds-snippet';

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

function corsJson(body, status = 200) {
  return new Response(typeof body === 'string' ? body : JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json', ...CORS_HEADERS },
  });
}

function isCorsPath(pathname) {
  return pathname === '/ping-shapes' || pathname === '/propose-issue';
}

export default {
  async fetch(request, env) {
    try {
      const url = new URL(request.url);

      if (request.method === 'OPTIONS' && isCorsPath(url.pathname)) {
        return new Response(null, { status: 204, headers: CORS_HEADERS });
      }

      if (request.method === 'POST' && url.pathname === '/ping') {
        return await handlePing(request, env);
      }
      if (request.method === 'GET' && url.pathname === '/totals') {
        return await handleTotals(request, env);
      }
      if (request.method === 'DELETE' && url.pathname === '/totals') {
        return await handleDeleteTotals(request, env);
      }
      if (request.method === 'POST' && url.pathname === '/ping-shapes') {
        return await handleShapePing(request, env);
      }
      if (request.method === 'GET' && url.pathname === '/shape-totals') {
        return await handleShapeTotals(request, env);
      }
      if (request.method === 'DELETE' && url.pathname === '/shape-totals') {
        return await handleDeleteShapeTotals(request, env);
      }
      if (request.method === 'POST' && url.pathname === '/propose-issue') {
        return await handleProposeIssue(request, env);
      }
      return new Response('Not found', { status: 404 });
    } catch (e) {
      console.error('worker error:', e?.message || e);
      return new Response('Internal Server Error', { status: 500 });
    }
  },
};

function usageCounter(env) {
  // global-v7: fresh instance to drop bring-up test pollution accumulated
  // under global-v6 (I_FINALCHECK, RATETEST6, RATETEST7 — smoke-test writes,
  // not real usage) — same reset technique used for the v5 -> v6 bump.
  const id = env.USAGE_DO.idFromName('global-v7');
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
    if (view && count && !TEST_VIEW_PATTERN.test(view)) clean.push({ view, count });
  }
  if (clean.length === 0) {
    return new Response('No valid events', { status: 400 });
  }

  const resp = await usageCounter(env).fetch(new Request('https://usage-do/ping', {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'x-client-ip': clientIp(request) },
    body: JSON.stringify({ events: clean }),
  }));
  return new Response(resp.body, { status: resp.status, headers: { 'content-type': 'application/json' } });
}

async function handleTotals(request, env) {
  const token = new URL(request.url).searchParams.get('token');
  if (!env.PULL_TOKEN || token !== env.PULL_TOKEN) {
    return new Response('Unauthorized', { status: 401 });
  }

  const resp = await usageCounter(env).fetch(new Request('https://usage-do/totals', {
    headers: { 'x-client-ip': clientIp(request) },
  }));
  return new Response(resp.body, { status: resp.status, headers: { 'content-type': 'application/json' } });
}

/**
 * Surgical cleanup: DELETE /totals?token=...&view=NAME[,NAME2,...]&prefix=PFX
 * Requires at least one of view/prefix — this route can never wipe everything
 * (use the global-vN Durable Object bump in usageCounter() for that instead).
 */
async function handleDeleteTotals(request, env) {
  const params = new URL(request.url).searchParams;
  const token = params.get('token');
  if (!env.PULL_TOKEN || token !== env.PULL_TOKEN) {
    return new Response('Unauthorized', { status: 401 });
  }

  const views = (params.get('view') || '')
    .split(',')
    .map((v) => v.trim().toUpperCase().slice(0, MAX_VIEW_NAME_LENGTH))
    .filter(Boolean)
    .slice(0, MAX_DELETE_KEYS_PER_REQUEST);
  const prefix = (params.get('prefix') || '').trim().toUpperCase().slice(0, MAX_VIEW_NAME_LENGTH);

  if (views.length === 0 && !prefix) {
    return corsJson({ error: 'Specify at least one of ?view=NAME or ?prefix=PFX' }, 400);
  }

  const resp = await usageCounter(env).fetch(new Request('https://usage-do/totals', {
    method: 'DELETE',
    headers: { 'content-type': 'application/json', 'x-client-ip': clientIp(request) },
    body: JSON.stringify({ views, prefix }),
  }));
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
        .filter((v) => v && !TEST_VIEW_PATTERN.test(v))
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
    headers: { 'content-type': 'application/json', 'x-client-ip': clientIp(request) },
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

  const resp = await usageCounter(env).fetch(new Request('https://usage-do/shape-totals', {
    headers: { 'x-client-ip': clientIp(request) },
  }));
  return new Response(resp.body, { status: resp.status, headers: { 'content-type': 'application/json' } });
}

/**
 * Surgical cleanup: DELETE /shape-totals?token=...&shapeId=HASH[,HASH2,...]
 * shapeId is required — this route can never wipe everything (use the
 * global-vN Durable Object bump in usageCounter() for that instead).
 */
async function handleDeleteShapeTotals(request, env) {
  const params = new URL(request.url).searchParams;
  const token = params.get('token');
  if (!env.PULL_TOKEN || token !== env.PULL_TOKEN) {
    return new Response('Unauthorized', { status: 401 });
  }

  const shapeIds = (params.get('shapeId') || '')
    .split(',')
    .map((s) => s.trim().toLowerCase().replace(/[^a-f0-9]/g, '').slice(0, MAX_SHAPE_ID_LENGTH))
    .filter(Boolean)
    .slice(0, MAX_DELETE_KEYS_PER_REQUEST);

  if (shapeIds.length === 0) {
    return corsJson({ error: 'Specify at least one ?shapeId=HASH' }, 400);
  }

  const resp = await usageCounter(env).fetch(new Request('https://usage-do/shape-totals', {
    method: 'DELETE',
    headers: { 'content-type': 'application/json', 'x-client-ip': clientIp(request) },
    body: JSON.stringify({ shapeIds }),
  }));
  return new Response(resp.body, { status: resp.status, headers: { 'content-type': 'application/json' } });
}

async function gateProposeRate(env, ip) {
  const resp = await usageCounter(env).fetch(new Request('https://usage-do/propose-rate', {
    method: 'POST',
    headers: { 'x-client-ip': ip },
  }));
  return resp;
}

/**
 * Create a curated-library GitHub Issue for Query Builder Propose (no visitor login).
 * Secrets: GITHUB_ISSUE_TOKEN. Vars: PROPOSE_REPO (default StormShynn/cds-kb-mcp-data-kit).
 */
async function handleProposeIssue(request, env) {
  let raw;
  try {
    raw = await request.json();
  } catch {
    return corsJson({ error: 'Invalid JSON' }, 400);
  }

  const sanitized = sanitizeProposeIssueBody(raw);
  if (!sanitized.ok) {
    return corsJson({ error: sanitized.error }, sanitized.status || 400);
  }

  const ip = clientIp(request);
  // Soft-success for honeypot — do not burn rate limit or call GitHub.
  if (sanitized.value.honeypotHit) {
    console.log('propose-issue honeypot', ip);
    return corsJson({ issueUrl: null, ok: true });
  }

  const rateResp = await gateProposeRate(env, ip);
  if (rateResp.status === 429) {
    return corsJson({ error: 'Too many proposals from this IP — try again later' }, 429);
  }

  const token = (env.GITHUB_ISSUE_TOKEN || '').trim();
  if (!token) {
    console.error('propose-issue: GITHUB_ISSUE_TOKEN not configured');
    return corsJson({ error: 'Propose bot not configured' }, 503);
  }

  const repo = String(env.PROPOSE_REPO || DEFAULT_PROPOSE_REPO).trim() || DEFAULT_PROPOSE_REPO;
  if (!/^[^/\s]+\/[^/\s]+$/.test(repo)) {
    return corsJson({ error: 'Invalid PROPOSE_REPO' }, 500);
  }

  const { title, body, kind } = sanitized.value;
  const labels = [PROPOSE_LABEL];
  if (kind === 'cds') labels.push(CDS_LABEL);

  const issueBody =
    `<!-- kind: ${kind} -->\n` +
    `**Proposal kind:** \`${kind}\` (` +
    (kind === 'cds'
      ? 'curated custom CDS snippet'
      : 'curated query library shape') +
    `)\n\n` +
    body;

  console.log('propose-issue', proposeLogHint(sanitized.value), 'repo=' + repo);

  let ghResp;
  try {
    ghResp = await fetch(`https://api.github.com/repos/${repo}/issues`, {
      method: 'POST',
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        'User-Agent': 'cds-kb-usage-collector-propose',
        'X-GitHub-Api-Version': '2022-11-28',
      },
      body: JSON.stringify({ title, body: issueBody, labels }),
    });
  } catch (e) {
    console.error('propose-issue github fetch failed:', e?.message || e);
    return corsJson({ error: 'GitHub request failed' }, 502);
  }

  if (!ghResp.ok) {
    // Retry once without labels if the label does not exist on the repo.
    if (ghResp.status === 422 && labels.length) {
      const retry = await fetch(`https://api.github.com/repos/${repo}/issues`, {
        method: 'POST',
        headers: {
          Accept: 'application/vnd.github+json',
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          'User-Agent': 'cds-kb-usage-collector-propose',
          'X-GitHub-Api-Version': '2022-11-28',
        },
        body: JSON.stringify({ title, body: issueBody }),
      });
      if (retry.ok) {
        const created = await retry.json();
        const issueUrl = created.html_url || null;
        if (!issueUrl) return corsJson({ error: 'GitHub response missing html_url' }, 502);
        return corsJson({ issueUrl });
      }
      console.error('propose-issue github retry status', retry.status);
    } else {
      console.error('propose-issue github status', ghResp.status);
    }
    return corsJson({ error: 'Could not create GitHub Issue' }, 502);
  }

  const created = await ghResp.json();
  const issueUrl = created.html_url || null;
  if (!issueUrl) return corsJson({ error: 'GitHub response missing html_url' }, 502);
  return corsJson({ issueUrl });
}

/**
 * UsageCounter — view totals (v:) + shape aggregates (s:) + propose rate buckets.
 */
export class UsageCounter {
  constructor(state) {
    this.state = state;
    this.totals = new Map();
    this.shapes = new Map(); // shapeId -> { count, views, selectFieldCount, selectFieldHash, flags }
    this.hydrated = false;
    this.rateBuckets = new Map(); // ip -> { count, windowStart } — global across worker isolates
    this.proposeRateBuckets = new Map(); // ip -> { count, windowStart }
  }

  // Per-IP fixed-window limiter. Single instance => the window is shared by
  // every caller; in-memory (best-effort abuse protection, resets on eviction).
  #rateLimited(ip) {
    const now = Date.now();
    if (this.rateBuckets.size > RATE_LIMIT_MAX_BUCKETS) {
      for (const [k, v] of this.rateBuckets) {
        if (now - v.windowStart >= RATE_LIMIT_WINDOW_MS) this.rateBuckets.delete(k);
      }
    }
    const b = this.rateBuckets.get(ip);
    if (!b || now - b.windowStart >= RATE_LIMIT_WINDOW_MS) {
      this.rateBuckets.set(ip, { count: 1, windowStart: now });
      return false;
    }
    b.count++;
    return b.count > RATE_LIMIT_MAX;
  }

  #proposeRateLimited(ip) {
    const now = Date.now();
    if (this.proposeRateBuckets.size > RATE_LIMIT_MAX_BUCKETS) {
      for (const [k, v] of this.proposeRateBuckets) {
        if (now - v.windowStart >= PROPOSE_RATE_LIMIT_WINDOW_MS) this.proposeRateBuckets.delete(k);
      }
    }
    const b = this.proposeRateBuckets.get(ip);
    if (!b || now - b.windowStart >= PROPOSE_RATE_LIMIT_WINDOW_MS) {
      this.proposeRateBuckets.set(ip, { count: 1, windowStart: now });
      return false;
    }
    b.count++;
    return b.count > PROPOSE_RATE_LIMIT_MAX;
  }

  #rateLimitedResponse() {
    return new Response('Too Many Requests', { status: 429, headers: { 'retry-after': '60' } });
  }

  #requestIp(request) {
    return request.headers.get('x-client-ip') || 'unknown';
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
        return await this.#onTotals(request);
      }
      if (request.method === 'DELETE' && url.pathname === '/totals') {
        return await this.#onDeleteTotals(request);
      }
      if (request.method === 'POST' && url.pathname === '/ping-shapes') {
        return await this.#onShapePing(request);
      }
      if (request.method === 'GET' && url.pathname === '/shape-totals') {
        return await this.#onShapeTotals(request);
      }
      if (request.method === 'DELETE' && url.pathname === '/shape-totals') {
        return await this.#onDeleteShapeTotals(request);
      }
      if (request.method === 'POST' && url.pathname === '/propose-rate') {
        return await this.#onProposeRate(request);
      }
      return new Response('Not found', { status: 404 });
    } catch (e) {
      return new Response(`DO error: ${e.message}`, { status: 500 });
    }
  }

  async #onProposeRate(request) {
    if (this.#proposeRateLimited(this.#requestIp(request))) return this.#rateLimitedResponse();
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'content-type': 'application/json' },
    });
  }

  async #onPing(request) {
    if (this.#rateLimited(this.#requestIp(request))) return this.#rateLimitedResponse();

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

  async #onTotals(request) {
    if (this.#rateLimited(this.#requestIp(request))) return this.#rateLimitedResponse();
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
    if (this.#rateLimited(this.#requestIp(request))) return this.#rateLimitedResponse();

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

  async #onShapeTotals(request) {
    if (this.#rateLimited(this.#requestIp(request))) return this.#rateLimitedResponse();
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
