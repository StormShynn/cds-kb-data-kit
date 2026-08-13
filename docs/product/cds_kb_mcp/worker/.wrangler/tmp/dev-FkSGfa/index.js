var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/propose-sanitize.mjs
var MAX_TITLE_LENGTH = 200;
var MAX_BODY_LENGTH = 48e3;
var ALLOWED_KINDS = /* @__PURE__ */ new Set(["query", "cds"]);
var SECRET_PATTERNS = [
  /-----BEGIN (?:RSA |EC |OPENSSH |DSA )?PRIVATE KEY-----/i,
  /\b(?:ghp|gho|ghu|ghs|ghr)_[A-Za-z0-9_]{20,}\b/,
  /\bgithub_pat_[A-Za-z0-9_]{20,}\b/,
  /\b(?:sk|pk)-[A-Za-z0-9]{20,}\b/,
  /\b(?:aws)?_?(?:secret)?_?access_?key[_-]?id\s*[:=]\s*\S+/i,
  /\bAKIA[0-9A-Z]{16}\b/,
  /\b(?:password|passwd|pwd|api[_-]?key|client[_-]?secret|authorization)\s*[:=]\s*['"]?[^\s'"]{8,}/i,
  /\bbearer\s+[A-Za-z0-9\-._~+/]+=*/i,
  /\bCF_API_TOKEN\b/i
];
function sanitizeProposeIssueBody(raw) {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
    return { ok: false, error: "Invalid JSON body", status: 400 };
  }
  const honeypot = String(raw.website || raw.company || raw.url || raw.hp || "").trim();
  if (honeypot) {
    return {
      ok: true,
      value: {
        title: "",
        body: "",
        kind: "query",
        honeypotHit: true
      }
    };
  }
  const title = String(raw.title || "").trim();
  const body = String(raw.body ?? raw.markdown ?? "").trim();
  const kindRaw = String(raw.kind || "query").trim().toLowerCase();
  const kind = ALLOWED_KINDS.has(kindRaw) ? kindRaw : "";
  if (!title) return { ok: false, error: "title is required", status: 400 };
  if (!body) return { ok: false, error: "body is required", status: 400 };
  if (!kind) return { ok: false, error: "kind must be query or cds", status: 400 };
  if (title.length > MAX_TITLE_LENGTH) {
    return { ok: false, error: `title exceeds ${MAX_TITLE_LENGTH} characters`, status: 400 };
  }
  if (body.length > MAX_BODY_LENGTH) {
    return { ok: false, error: `body exceeds ${MAX_BODY_LENGTH} characters`, status: 400 };
  }
  for (const re of SECRET_PATTERNS) {
    if (re.test(title) || re.test(body)) {
      return {
        ok: false,
        error: "Body looks like it contains a secret or credential \u2014 remove it and retry",
        status: 400
      };
    }
  }
  return {
    ok: true,
    value: { title, body, kind, honeypotHit: false }
  };
}
__name(sanitizeProposeIssueBody, "sanitizeProposeIssueBody");
function proposeLogHint(value) {
  if (!value || value.honeypotHit) return "honeypot";
  return `kind=${value.kind} titleLen=${(value.title || "").length} bodyLen=${(value.body || "").length}`;
}
__name(proposeLogHint, "proposeLogHint");

// src/index.mjs
var MAX_EVENTS_PER_REQUEST = 500;
var MAX_VIEW_NAME_LENGTH = 100;
var MAX_COUNT_PER_EVENT = 1e3;
var MAX_SHAPE_ID_LENGTH = 64;
var MAX_VIEWS_PER_SHAPE = 12;
var MAX_DELETE_KEYS_PER_REQUEST = 100;
var TEST_VIEW_PATTERN = /^(ZZTEST_|RATETEST|SMOKETEST)/i;
var RATE_LIMIT_MAX = 120;
var RATE_LIMIT_WINDOW_MS = 6e4;
var RATE_LIMIT_MAX_BUCKETS = 1e4;
var PROPOSE_RATE_LIMIT_MAX = 8;
var PROPOSE_RATE_LIMIT_WINDOW_MS = 60 * 60 * 1e3;
var DEFAULT_PROPOSE_REPO = "StormShynn/cds-kb-mcp-data-kit";
var PROPOSE_LABEL = "query-library";
var CDS_LABEL = "cds-snippet";
var CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "content-type",
  "Access-Control-Max-Age": "86400"
};
function clientIp(request) {
  return request.headers.get("CF-Connecting-IP") || request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
}
__name(clientIp, "clientIp");
function corsJson(body, status = 200) {
  return new Response(typeof body === "string" ? body : JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json", ...CORS_HEADERS }
  });
}
__name(corsJson, "corsJson");
function isCorsPath(pathname) {
  return pathname === "/ping-shapes" || pathname === "/propose-issue";
}
__name(isCorsPath, "isCorsPath");
var src_default = {
  async fetch(request, env) {
    try {
      const url = new URL(request.url);
      if (request.method === "OPTIONS" && isCorsPath(url.pathname)) {
        return new Response(null, { status: 204, headers: CORS_HEADERS });
      }
      if (request.method === "POST" && url.pathname === "/ping") {
        return await handlePing(request, env);
      }
      if (request.method === "GET" && url.pathname === "/totals") {
        return await handleTotals(request, env);
      }
      if (request.method === "DELETE" && url.pathname === "/totals") {
        return await handleDeleteTotals(request, env);
      }
      if (request.method === "POST" && url.pathname === "/ping-shapes") {
        return await handleShapePing(request, env);
      }
      if (request.method === "GET" && url.pathname === "/shape-totals") {
        return await handleShapeTotals(request, env);
      }
      if (request.method === "DELETE" && url.pathname === "/shape-totals") {
        return await handleDeleteShapeTotals(request, env);
      }
      if (request.method === "POST" && url.pathname === "/propose-issue") {
        return await handleProposeIssue(request, env);
      }
      return new Response("Not found", { status: 404 });
    } catch (e) {
      console.error("worker error:", e?.message || e);
      return new Response("Internal Server Error", { status: 500 });
    }
  }
};
function usageCounter(env) {
  const id = env.USAGE_DO.idFromName("global-v7");
  return env.USAGE_DO.get(id);
}
__name(usageCounter, "usageCounter");
async function handlePing(request, env) {
  let body;
  try {
    body = await request.json();
  } catch {
    return new Response("Invalid JSON", { status: 400 });
  }
  const events = Array.isArray(body?.events) ? body.events.slice(0, MAX_EVENTS_PER_REQUEST) : [];
  if (events.length === 0) {
    return new Response("No events", { status: 400 });
  }
  const clean = [];
  for (const ev of events) {
    const view = String(ev?.view || "").trim().toUpperCase().slice(0, MAX_VIEW_NAME_LENGTH);
    const rawCount = Number(ev?.count);
    const count = Number.isFinite(rawCount) ? Math.max(1, Math.min(MAX_COUNT_PER_EVENT, Math.floor(rawCount))) : 0;
    if (view && count && !TEST_VIEW_PATTERN.test(view)) clean.push({ view, count });
  }
  if (clean.length === 0) {
    return new Response("No valid events", { status: 400 });
  }
  const resp = await usageCounter(env).fetch(new Request("https://usage-do/ping", {
    method: "POST",
    headers: { "content-type": "application/json", "x-client-ip": clientIp(request) },
    body: JSON.stringify({ events: clean })
  }));
  return new Response(resp.body, { status: resp.status, headers: { "content-type": "application/json" } });
}
__name(handlePing, "handlePing");
async function handleTotals(request, env) {
  const token = new URL(request.url).searchParams.get("token");
  if (!env.PULL_TOKEN || token !== env.PULL_TOKEN) {
    return new Response("Unauthorized", { status: 401 });
  }
  const resp = await usageCounter(env).fetch(new Request("https://usage-do/totals", {
    headers: { "x-client-ip": clientIp(request) }
  }));
  return new Response(resp.body, { status: resp.status, headers: { "content-type": "application/json" } });
}
__name(handleTotals, "handleTotals");
async function handleDeleteTotals(request, env) {
  const params = new URL(request.url).searchParams;
  const token = params.get("token");
  if (!env.PULL_TOKEN || token !== env.PULL_TOKEN) {
    return new Response("Unauthorized", { status: 401 });
  }
  const views = (params.get("view") || "").split(",").map((v) => v.trim().toUpperCase().slice(0, MAX_VIEW_NAME_LENGTH)).filter(Boolean).slice(0, MAX_DELETE_KEYS_PER_REQUEST);
  const prefix = (params.get("prefix") || "").trim().toUpperCase().slice(0, MAX_VIEW_NAME_LENGTH);
  if (views.length === 0 && !prefix) {
    return corsJson({ error: "Specify at least one of ?view=NAME or ?prefix=PFX" }, 400);
  }
  const resp = await usageCounter(env).fetch(new Request("https://usage-do/totals", {
    method: "DELETE",
    headers: { "content-type": "application/json", "x-client-ip": clientIp(request) },
    body: JSON.stringify({ views, prefix })
  }));
  return new Response(resp.body, { status: resp.status, headers: { "content-type": "application/json" } });
}
__name(handleDeleteTotals, "handleDeleteTotals");
function sanitizeShapeEvent(ev) {
  const shapeId = String(ev?.shapeId || "").trim().toLowerCase().replace(/[^a-f0-9]/g, "").slice(0, MAX_SHAPE_ID_LENGTH);
  const rawCount = Number(ev?.count);
  const count = Number.isFinite(rawCount) ? Math.max(1, Math.min(MAX_COUNT_PER_EVENT, Math.floor(rawCount))) : 0;
  if (!shapeId || shapeId.length < 16 || !count) return null;
  const views = Array.isArray(ev?.views) ? ev.views.map((v) => String(v || "").trim().toUpperCase().slice(0, MAX_VIEW_NAME_LENGTH)).filter((v) => v && !TEST_VIEW_PATTERN.test(v)).slice(0, MAX_VIEWS_PER_SHAPE) : [];
  const selectFieldCount = Math.max(0, Math.min(500, Math.floor(Number(ev?.selectFieldCount) || 0)));
  const selectFieldHash = String(ev?.selectFieldHash || "").trim().toLowerCase().replace(/[^a-f0-9]/g, "").slice(0, 64);
  const srcFlags = ev?.flags && typeof ev.flags === "object" ? ev.flags : {};
  const flags = {
    hasWhere: !!srcFlags.hasWhere,
    hasGroupBy: !!srcFlags.hasGroupBy,
    hasHaving: !!srcFlags.hasHaving,
    hasOrderBy: !!srcFlags.hasOrderBy,
    hasJoin: !!srcFlags.hasJoin,
    joinCount: Math.max(0, Math.min(20, Math.floor(Number(srcFlags.joinCount) || 0))),
    hasRawNote: !!srcFlags.hasRawNote
  };
  return { shapeId, views, selectFieldCount, selectFieldHash, flags, count };
}
__name(sanitizeShapeEvent, "sanitizeShapeEvent");
async function handleShapePing(request, env) {
  let body;
  try {
    body = await request.json();
  } catch {
    return corsJson({ error: "Invalid JSON" }, 400);
  }
  const events = Array.isArray(body?.events) ? body.events.slice(0, MAX_EVENTS_PER_REQUEST) : [];
  const clean = [];
  for (const ev of events) {
    const s = sanitizeShapeEvent(ev);
    if (s) clean.push(s);
  }
  if (clean.length === 0) {
    return corsJson({ error: "No valid events" }, 400);
  }
  const resp = await usageCounter(env).fetch(new Request("https://usage-do/ping-shapes", {
    method: "POST",
    headers: { "content-type": "application/json", "x-client-ip": clientIp(request) },
    body: JSON.stringify({ events: clean })
  }));
  return new Response(resp.body, {
    status: resp.status,
    headers: { "content-type": "application/json", ...CORS_HEADERS }
  });
}
__name(handleShapePing, "handleShapePing");
async function handleShapeTotals(request, env) {
  const token = new URL(request.url).searchParams.get("token");
  if (!env.PULL_TOKEN || token !== env.PULL_TOKEN) {
    return new Response("Unauthorized", { status: 401 });
  }
  const resp = await usageCounter(env).fetch(new Request("https://usage-do/shape-totals", {
    headers: { "x-client-ip": clientIp(request) }
  }));
  return new Response(resp.body, { status: resp.status, headers: { "content-type": "application/json" } });
}
__name(handleShapeTotals, "handleShapeTotals");
async function handleDeleteShapeTotals(request, env) {
  const params = new URL(request.url).searchParams;
  const token = params.get("token");
  if (!env.PULL_TOKEN || token !== env.PULL_TOKEN) {
    return new Response("Unauthorized", { status: 401 });
  }
  const shapeIds = (params.get("shapeId") || "").split(",").map((s) => s.trim().toLowerCase().replace(/[^a-f0-9]/g, "").slice(0, MAX_SHAPE_ID_LENGTH)).filter(Boolean).slice(0, MAX_DELETE_KEYS_PER_REQUEST);
  if (shapeIds.length === 0) {
    return corsJson({ error: "Specify at least one ?shapeId=HASH" }, 400);
  }
  const resp = await usageCounter(env).fetch(new Request("https://usage-do/shape-totals", {
    method: "DELETE",
    headers: { "content-type": "application/json", "x-client-ip": clientIp(request) },
    body: JSON.stringify({ shapeIds })
  }));
  return new Response(resp.body, { status: resp.status, headers: { "content-type": "application/json" } });
}
__name(handleDeleteShapeTotals, "handleDeleteShapeTotals");
async function gateProposeRate(env, ip) {
  const resp = await usageCounter(env).fetch(new Request("https://usage-do/propose-rate", {
    method: "POST",
    headers: { "x-client-ip": ip }
  }));
  return resp;
}
__name(gateProposeRate, "gateProposeRate");
async function handleProposeIssue(request, env) {
  let raw;
  try {
    raw = await request.json();
  } catch {
    return corsJson({ error: "Invalid JSON" }, 400);
  }
  const sanitized = sanitizeProposeIssueBody(raw);
  if (!sanitized.ok) {
    return corsJson({ error: sanitized.error }, sanitized.status || 400);
  }
  const ip = clientIp(request);
  if (sanitized.value.honeypotHit) {
    console.log("propose-issue honeypot", ip);
    return corsJson({ issueUrl: null, ok: true });
  }
  const rateResp = await gateProposeRate(env, ip);
  if (rateResp.status === 429) {
    return corsJson({ error: "Too many proposals from this IP \u2014 try again later" }, 429);
  }
  const token = (env.GITHUB_ISSUE_TOKEN || "").trim();
  if (!token) {
    console.error("propose-issue: GITHUB_ISSUE_TOKEN not configured");
    return corsJson({ error: "Propose bot not configured" }, 503);
  }
  const repo = String(env.PROPOSE_REPO || DEFAULT_PROPOSE_REPO).trim() || DEFAULT_PROPOSE_REPO;
  if (!/^[^/\s]+\/[^/\s]+$/.test(repo)) {
    return corsJson({ error: "Invalid PROPOSE_REPO" }, 500);
  }
  const { title, body, kind } = sanitized.value;
  const labels = [PROPOSE_LABEL];
  if (kind === "cds") labels.push(CDS_LABEL);
  const issueBody = `<!-- kind: ${kind} -->
**Proposal kind:** \`${kind}\` (` + (kind === "cds" ? "curated custom CDS snippet" : "curated query library shape") + `)

` + body;
  console.log("propose-issue", proposeLogHint(sanitized.value), "repo=" + repo);
  let ghResp;
  try {
    ghResp = await fetch(`https://api.github.com/repos/${repo}/issues`, {
      method: "POST",
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "User-Agent": "cds-kb-usage-collector-propose",
        "X-GitHub-Api-Version": "2022-11-28"
      },
      body: JSON.stringify({ title, body: issueBody, labels })
    });
  } catch (e) {
    console.error("propose-issue github fetch failed:", e?.message || e);
    return corsJson({ error: "GitHub request failed" }, 502);
  }
  if (!ghResp.ok) {
    if (ghResp.status === 422 && labels.length) {
      const retry = await fetch(`https://api.github.com/repos/${repo}/issues`, {
        method: "POST",
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          "User-Agent": "cds-kb-usage-collector-propose",
          "X-GitHub-Api-Version": "2022-11-28"
        },
        body: JSON.stringify({ title, body: issueBody })
      });
      if (retry.ok) {
        const created2 = await retry.json();
        const issueUrl2 = created2.html_url || null;
        if (!issueUrl2) return corsJson({ error: "GitHub response missing html_url" }, 502);
        return corsJson({ issueUrl: issueUrl2 });
      }
      console.error("propose-issue github retry status", retry.status);
    } else {
      console.error("propose-issue github status", ghResp.status);
    }
    return corsJson({ error: "Could not create GitHub Issue" }, 502);
  }
  const created = await ghResp.json();
  const issueUrl = created.html_url || null;
  if (!issueUrl) return corsJson({ error: "GitHub response missing html_url" }, 502);
  return corsJson({ issueUrl });
}
__name(handleProposeIssue, "handleProposeIssue");
var UsageCounter = class {
  static {
    __name(this, "UsageCounter");
  }
  constructor(state) {
    this.state = state;
    this.totals = /* @__PURE__ */ new Map();
    this.shapes = /* @__PURE__ */ new Map();
    this.hydrated = false;
    this.rateBuckets = /* @__PURE__ */ new Map();
    this.proposeRateBuckets = /* @__PURE__ */ new Map();
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
    return new Response("Too Many Requests", { status: 429, headers: { "retry-after": "60" } });
  }
  #requestIp(request) {
    return request.headers.get("x-client-ip") || "unknown";
  }
  async #hydrate() {
    if (this.hydrated) return;
    const list = await this.state.storage.list();
    for (const [key, value] of list) {
      if (key.startsWith("v:")) {
        this.totals.set(key.slice(2), Number(value) || 0);
      } else if (key.startsWith("s:")) {
        this.shapes.set(key.slice(2), value && typeof value === "object" ? value : { count: Number(value) || 0 });
      }
    }
    this.hydrated = true;
  }
  async fetch(request) {
    const url = new URL(request.url);
    try {
      if (request.method === "POST" && url.pathname === "/ping") {
        return await this.#onPing(request);
      }
      if (request.method === "GET" && url.pathname === "/totals") {
        return await this.#onTotals(request);
      }
      if (request.method === "DELETE" && url.pathname === "/totals") {
        return await this.#onDeleteTotals(request);
      }
      if (request.method === "POST" && url.pathname === "/ping-shapes") {
        return await this.#onShapePing(request);
      }
      if (request.method === "GET" && url.pathname === "/shape-totals") {
        return await this.#onShapeTotals(request);
      }
      if (request.method === "DELETE" && url.pathname === "/shape-totals") {
        return await this.#onDeleteShapeTotals(request);
      }
      if (request.method === "POST" && url.pathname === "/propose-rate") {
        return await this.#onProposeRate(request);
      }
      return new Response("Not found", { status: 404 });
    } catch (e) {
      return new Response(`DO error: ${e.message}`, { status: 500 });
    }
  }
  async #onProposeRate(request) {
    if (this.#proposeRateLimited(this.#requestIp(request))) return this.#rateLimitedResponse();
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "content-type": "application/json" }
    });
  }
  async #onPing(request) {
    if (this.#rateLimited(this.#requestIp(request))) return this.#rateLimitedResponse();
    let body;
    try {
      body = await request.json();
    } catch {
      return new Response("Invalid JSON", { status: 400 });
    }
    await this.#hydrate();
    const events = Array.isArray(body?.events) ? body.events : [];
    const writes = {};
    for (const ev of events) {
      const view = String(ev?.view || "");
      const count = Number(ev?.count) || 0;
      if (!view || !count) continue;
      const next = (this.totals.get(view) || 0) + count;
      this.totals.set(view, next);
      writes[`v:${view}`] = next;
    }
    if (Object.keys(writes).length > 0) {
      await this.state.storage.put(writes);
    }
    return new Response("ok", { status: 200 });
  }
  async #onTotals(request) {
    if (this.#rateLimited(this.#requestIp(request))) return this.#rateLimitedResponse();
    await this.#hydrate();
    const totals = {};
    for (const [view, count] of this.totals) {
      totals[view] = count;
    }
    return new Response(JSON.stringify(totals), {
      headers: { "content-type": "application/json" }
    });
  }
  async #onDeleteTotals(request) {
    if (this.#rateLimited(this.#requestIp(request))) return this.#rateLimitedResponse();
    let body;
    try {
      body = await request.json();
    } catch {
      return new Response("Invalid JSON", { status: 400 });
    }
    await this.#hydrate();
    const views = Array.isArray(body?.views) ? body.views : [];
    const prefix = String(body?.prefix || "");
    const toDelete = new Set(views);
    if (prefix) {
      for (const view of this.totals.keys()) {
        if (view.startsWith(prefix)) toDelete.add(view);
      }
    }
    const deleted = [];
    const storageKeys = [];
    for (const view of toDelete) {
      if (this.totals.has(view)) {
        this.totals.delete(view);
        storageKeys.push(`v:${view}`);
        deleted.push(view);
      }
    }
    if (storageKeys.length > 0) {
      await this.state.storage.delete(storageKeys);
    }
    return new Response(JSON.stringify({ ok: true, deleted }), {
      status: 200,
      headers: { "content-type": "application/json" }
    });
  }
  async #onShapePing(request) {
    if (this.#rateLimited(this.#requestIp(request))) return this.#rateLimitedResponse();
    let body;
    try {
      body = await request.json();
    } catch {
      return new Response("Invalid JSON", { status: 400 });
    }
    await this.#hydrate();
    const events = Array.isArray(body?.events) ? body.events : [];
    const writes = {};
    for (const ev of events) {
      const shapeId = String(ev?.shapeId || "");
      const count = Number(ev?.count) || 0;
      if (!shapeId || !count) continue;
      const prev = this.shapes.get(shapeId) || {
        count: 0,
        views: ev.views || [],
        selectFieldCount: ev.selectFieldCount || 0,
        selectFieldHash: ev.selectFieldHash || "",
        flags: ev.flags || {}
      };
      const next = {
        count: (Number(prev.count) || 0) + count,
        views: Array.isArray(ev.views) && ev.views.length ? ev.views : prev.views,
        selectFieldCount: ev.selectFieldCount ?? prev.selectFieldCount,
        selectFieldHash: ev.selectFieldHash || prev.selectFieldHash,
        flags: ev.flags || prev.flags
      };
      this.shapes.set(shapeId, next);
      writes[`s:${shapeId}`] = next;
    }
    if (Object.keys(writes).length > 0) {
      await this.state.storage.put(writes);
    }
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "content-type": "application/json" }
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
      headers: { "content-type": "application/json" }
    });
  }
  async #onDeleteShapeTotals(request) {
    if (this.#rateLimited(this.#requestIp(request))) return this.#rateLimitedResponse();
    let body;
    try {
      body = await request.json();
    } catch {
      return new Response("Invalid JSON", { status: 400 });
    }
    await this.#hydrate();
    const shapeIds = Array.isArray(body?.shapeIds) ? body.shapeIds : [];
    const deleted = [];
    const storageKeys = [];
    for (const shapeId of shapeIds) {
      if (this.shapes.has(shapeId)) {
        this.shapes.delete(shapeId);
        storageKeys.push(`s:${shapeId}`);
        deleted.push(shapeId);
      }
    }
    if (storageKeys.length > 0) {
      await this.state.storage.delete(storageKeys);
    }
    return new Response(JSON.stringify({ ok: true, deleted }), {
      status: 200,
      headers: { "content-type": "application/json" }
    });
  }
};

// C:/Users/ES-NghiaBHT/AppData/Local/npm-cache/_npx/32026684e21afda6/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
var drainBody = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// C:/Users/ES-NghiaBHT/AppData/Local/npm-cache/_npx/32026684e21afda6/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    const body = JSON.stringify(error);
    const headers = {
      "Content-Type": "application/json",
      "MF-Experimental-Error-Stack": "true"
    };
    const encoded = encodeURIComponent(body);
    if (encoded.length <= 8192) {
      headers["MF-Experimental-Error-Stack-Payload"] = encoded;
    }
    return new Response(body, { status: 500, headers });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-4GqESX/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = src_default;

// C:/Users/ES-NghiaBHT/AppData/Local/npm-cache/_npx/32026684e21afda6/node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-4GqESX/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  scheduledTime;
  cron;
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  UsageCounter,
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
//# sourceMappingURL=index.js.map
