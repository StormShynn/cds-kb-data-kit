// metrics.mjs — zero-dependency Prometheus-text metrics + fixed-window rate limiter.
//
// Kept dependency-free on purpose: counters live in a Map, /metrics renders the
// Prometheus text format directly. `/health` reports liveness/readiness state.
// Rate limiting is a simple per-IP fixed window (no Redis, no external deps) —
// good enough to blunt casual abuse of a public /mcp endpoint.

import os from 'node:os';

// ── Prometheus counters / gauges / histograms ───────────────────────────────
// key -> { type: 'counter'|'gauge'|'histogram', help, labelNames, values }
// values: "l1=v1,l2=v2" -> number (histograms keep {sum, count} in `_sum`/`_count` labels).
const METRICS = new Map();
const STARTED_AT = Date.now();

function ensureMetric(name, type, help, labelNames = []) {
  let m = METRICS.get(name);
  if (!m) {
    m = { type, help, labelNames, values: new Map() };
    METRICS.set(name, m);
  }
  return m;
}

function labelKey(labelValues = {}) {
  if (!Object.keys(labelValues).length) return '';
  return Object.entries(labelValues)
    .sort(([a], [b]) => (a < b ? -1 : 1))
    .map(([k, v]) => `${k}="${String(v).replace(/"/g, '\\"')}"`)
    .join(',');
}

export function inc(name, labelValues = {}, help) {
  const m = ensureMetric(name, 'counter', help || `Counter ${name}`, Object.keys(labelValues));
  const k = labelKey(labelValues);
  m.values.set(k, (m.values.get(k) || 0) + 1);
}

export function gauge(name, value, labelValues = {}, help) {
  const m = ensureMetric(name, 'gauge', help || `Gauge ${name}`, Object.keys(labelValues));
  m.values.set(labelKey(labelValues), value);
}

export function histogram(name, value, labelValues = {}, help, buckets = [0.005, 0.01, 0.025, 0.05, 0.1, 0.25, 0.5, 1, 2.5, 5, 10]) {
  const m = ensureMetric(name, 'histogram', help || `Histogram ${name}`, Object.keys(labelValues));
  const k = labelKey(labelValues);
  const cur = m.values.get(k) || { sum: 0, count: 0, buckets: {} };
  cur.sum += value;
  cur.count += 1;
  for (const b of buckets) {
    cur.buckets[b] = (cur.buckets[b] || 0) + (value <= b ? 1 : 0);
  }
  m.values.set(k, cur);
}

/** Render all metrics in Prometheus text exposition format. */
export function renderMetrics() {
  const lines = [];
  const nowMs = Date.now();
  for (const [name, m] of METRICS) {
    lines.push(`# HELP ${name} ${m.help}`);
    lines.push(`# TYPE ${name} ${m.type}`);
    for (const [lk, v] of m.values) {
      const suffix = lk ? `{${lk}}` : '';
      if (m.type === 'histogram') {
        const b = v.buckets;
        for (const [bound, count] of Object.entries(b)) {
          lines.push(`${name}_bucket${suffix ? `{${lk},le="${bound}"}` : `{le="${bound}"}`} ${count}`);
        }
        lines.push(`${name}_bucket${suffix ? `{${lk},le="+Inf"}` : `{le="+Inf"}`} ${v.count}`);
        lines.push(`${name}_sum${suffix} ${v.sum}`);
        lines.push(`${name}_count${suffix} ${v.count}`);
      } else {
        lines.push(`${name}${suffix} ${v}`);
      }
    }
  }
  // Process-level gauges (cheap, useful for dashboards)
  lines.push(`# HELP process_uptime_seconds Server uptime in seconds.`);
  lines.push(`# TYPE process_uptime_seconds gauge`);
  lines.push(`process_uptime_seconds ${((nowMs - STARTED_AT) / 1000).toFixed(3)}`);
  lines.push(`# HELP process_start_time_seconds Unix time the server started.`);
  lines.push(`# TYPE process_start_time_seconds gauge`);
  lines.push(`process_start_time_seconds ${Math.floor(STARTED_AT / 1000)}`);
  lines.push(`# HELP node_info Node.js version and host.`);
  lines.push(`# TYPE node_info gauge`);
  lines.push(`node_info{node_version="${process.version}",host="${os.hostname()}"} 1`);
  return lines.join('\n') + '\n';
}

// ── /health ────────────────────────────────────────────────────────────────
/** Express handler for GET /health — liveness + index readiness. */
export function healthHandler(getState) {
  return (_req, res) => {
    const s = getState ? getState() : {};
    res.json({
      status: 'ok',
      server: 'cds-kb-mcp',
      uptimeSeconds: Math.floor((Date.now() - STARTED_AT) / 1000),
      views: s.viewCount ?? null,
      commit: s.commit ?? null,
      timestamp: new Date().toISOString(),
    });
  };
}

/** Express handler for GET /metrics — Prometheus text. */
export function metricsHandler(_req, res) {
  res.setHeader('Content-Type', 'text/plain; version=0.0.4; charset=utf-8');
  res.send(renderMetrics());
}

// ── Fixed-window per-IP rate limiter ───────────────────────────────────────
const DEFAULT_MAX = parseInt(process.env.CDS_KB_RATE_LIMIT_MAX || '120', 10) || 120;
const DEFAULT_WINDOW_MS = (parseFloat(process.env.CDS_KB_RATE_LIMIT_WINDOW_SECONDS) || 60) * 1000;

/**
 * Express middleware enforcing a per-IP fixed-window rate limit.
 * Returns 429 with `Retry-After` when exceeded. Bypassed entirely when
 * CDS_KB_RATE_LIMIT_MAX is 0 / "off".
 */
export function rateLimitMiddleware({
  max = DEFAULT_MAX,
  windowMs = DEFAULT_WINDOW_MS,
  keyFn = (req) => req.ip || req.socket?.remoteAddress || 'unknown',
} = {}) {
  if (!(max > 0)) return (_req, _res, next) => next();
  const hits = new Map(); // key -> { count, resetAt }

  // Periodic sweep so the map doesn't grow forever on a long-lived server.
  const sweep = setInterval(() => {
    const now = Date.now();
    for (const [k, v] of hits) {
      if (v.resetAt <= now) hits.delete(k);
    }
  }, Math.max(windowMs, 60_000));
  sweep.unref?.();

  return (req, res, next) => {
    const key = keyFn(req);
    const now = Date.now();
    const entry = hits.get(key);
    if (!entry || entry.resetAt <= now) {
      hits.set(key, { count: 1, resetAt: now + windowMs });
      res.setHeader('X-RateLimit-Limit', String(max));
      res.setHeader('X-RateLimit-Remaining', String(max - 1));
      return next();
    }
    entry.count += 1;
    const remaining = Math.max(0, max - entry.count);
    res.setHeader('X-RateLimit-Limit', String(max));
    res.setHeader('X-RateLimit-Remaining', String(remaining));
    res.setHeader('X-RateLimit-Reset', String(Math.ceil(entry.resetAt / 1000)));
    if (entry.count > max) {
      const retryAfter = Math.max(1, Math.ceil((entry.resetAt - now) / 1000));
      res.setHeader('Retry-After', String(retryAfter));
      res.status(429).json({ error: 'rate_limit_exceeded', retryAfterSeconds: retryAfter });
      return;
    }
    next();
  };
}
