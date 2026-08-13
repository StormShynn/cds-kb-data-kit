// src/usage-tracker.mjs
// Anonymous, aggregate-only usage counter for get_cds_view (+ optional query shapes).
//
// View pings: { view, count } — never identity, never query text.
// Shape pings (opt-in via CDS_KB_SHAPE_TELEMETRY=1): structural metadata only
// (view names, select field count/hash, clause flags). Never WHERE literals,
// titles, contributors, or raw notes.
//
// Fully opt-in: no-op unless CDS_KB_USAGE_ENDPOINT is set.

import { createHash } from 'node:crypto';
import { logWarn } from './log.mjs';

const ENDPOINT = process.env.CDS_KB_USAGE_ENDPOINT || '';
const SHAPE_TELEMETRY = /^(1|true|yes)$/i.test(process.env.CDS_KB_SHAPE_TELEMETRY || '');
const FLUSH_INTERVAL_MS = (parseFloat(process.env.CDS_KB_USAGE_FLUSH_MINUTES) || 5) * 60 * 1000;
const FLUSH_TIMEOUT_MS = 5000;

let deltas = new Map(); // VIEW_NAME -> pending count
let shapeDeltas = new Map(); // shapeId -> { meta, count }
let timer = null;

function shapeEndpoint() {
  if (!ENDPOINT) return '';
  try {
    const url = new URL(ENDPOINT);
    if (url.pathname.endsWith('/ping')) {
      url.pathname = url.pathname.replace(/\/ping$/, '/ping-shapes');
    } else if (!url.pathname.endsWith('/ping-shapes')) {
      url.pathname = url.pathname.replace(/\/?$/, '/') + 'ping-shapes';
    }
    return url.toString();
  } catch {
    return '';
  }
}

/** Build a privacy-preserving shape from a saved-query / compose_query object. */
export function buildQueryShape(obj = {}) {
  const views = (Array.isArray(obj.views) ? obj.views : [])
    .map((v) => String(v?.name || '').trim().toUpperCase())
    .filter(Boolean)
    .sort();
  const selectFields = String(obj.select || '')
    .split(',')
    .map((s) => s.trim().replace(/^.*\./, '').toUpperCase())
    .filter(Boolean)
    .sort();
  const flags = {
    hasWhere: !!(obj.where && String(obj.where).trim()),
    hasGroupBy: !!(obj.groupBy && String(obj.groupBy).trim()),
    hasHaving: !!(obj.having && String(obj.having).trim()),
    hasOrderBy: !!(obj.orderBy && String(obj.orderBy).trim()),
    hasJoin: views.length > 1,
    joinCount: Math.max(0, views.length - 1),
    hasRawNote: !!(obj.rawNote && String(obj.rawNote).trim()),
  };
  const selectFieldHash = createHash('sha256').update(selectFields.join('|')).digest('hex');
  const shapeId = createHash('sha256')
    .update(JSON.stringify({ views, selectFieldHash, flags }))
    .digest('hex');
  return {
    shapeId,
    views,
    selectFieldCount: selectFields.length,
    selectFieldHash,
    flags,
  };
}

/** Record one successful get_cds_view read. No-op if telemetry isn't configured. */
export function recordView(name) {
  if (!ENDPOINT || !name) return;
  const key = String(name).toUpperCase();
  deltas.set(key, (deltas.get(key) || 0) + 1);
  scheduleFlush();
}

/**
 * Record one anonymous query shape (compose / propose / builder).
 * No-op unless CDS_KB_USAGE_ENDPOINT and CDS_KB_SHAPE_TELEMETRY=1.
 */
export function recordQueryShape(obj) {
  if (!ENDPOINT || !SHAPE_TELEMETRY || !obj) return;
  const shape = typeof obj.shapeId === 'string' ? obj : buildQueryShape(obj);
  if (!shape?.shapeId) return;
  const prev = shapeDeltas.get(shape.shapeId);
  if (prev) {
    prev.count += 1;
  } else {
    shapeDeltas.set(shape.shapeId, { meta: shape, count: 1 });
  }
  scheduleFlush();
}

function scheduleFlush() {
  if (!timer) {
    timer = setTimeout(flush, FLUSH_INTERVAL_MS);
    timer.unref?.();
  }
}

async function postJson(url, body) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), FLUSH_TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(body),
      signal: ctrl.signal,
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
  } finally {
    clearTimeout(t);
  }
}

async function flush() {
  timer = null;
  const pendingViews = deltas;
  const pendingShapes = shapeDeltas;
  deltas = new Map();
  shapeDeltas = new Map();

  if (pendingViews.size > 0 && ENDPOINT) {
    const events = [...pendingViews.entries()].map(([view, count]) => ({ view, count }));
    try {
      await postJson(ENDPOINT, { events });
    } catch (e) {
      for (const [view, count] of pendingViews) {
        deltas.set(view, (deltas.get(view) || 0) + count);
      }
      logWarn('usage ping failed, will retry next flush', { err: e });
    }
  }

  const shapesUrl = shapeEndpoint();
  if (pendingShapes.size > 0 && shapesUrl) {
    const events = [...pendingShapes.values()].map(({ meta, count }) => ({
      shapeId: meta.shapeId,
      views: meta.views,
      selectFieldCount: meta.selectFieldCount,
      selectFieldHash: meta.selectFieldHash,
      flags: meta.flags,
      count,
    }));
    try {
      await postJson(shapesUrl, { events });
    } catch (e) {
      for (const [id, row] of pendingShapes) {
        const cur = shapeDeltas.get(id);
        if (cur) cur.count += row.count;
        else shapeDeltas.set(id, row);
      }
      logWarn('shape ping failed, will retry next flush', { err: e });
    }
  }
}

export function flushOnExit() {
  if (!ENDPOINT) return;
  const onSignal = () => {
    flush().finally(() => process.exit(0));
  };
  process.on('SIGINT', onSignal);
  process.on('SIGTERM', onSignal);
}
