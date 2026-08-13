# Execution Plan: cds-kb-mcp tech upgrade batch (7 items)

Date: 2026-08-13

## Status

Completed

## Outcome

Add seven operator-visible technology upgrades to cds-kb-mcp and its supporting
data pipeline:

1. **Local embeddings** — hybrid search (`search_mode=hybrid`) becomes free and
   keyless: embeddings built with transformers.js (ONNX, `all-MiniLM-L6-v2`)
   instead of a paid OpenAI API key; server embeds the query in-process the same
   way when no `CDS_KB_EMBED_API_KEY` is set.
2. **MCP Completions** — `completion/complete` support on prompt arguments
   (`explain_view.name`) and the `cds://view/{name}` resource template, per the
   SDK v2 (`completable()` + `completeCallback`) mechanism.
3. **Usage collector KV → Durable Objects** — the Cloudflare Worker moves counts
   from Workers KV (free-tier 1,000 writes/day limit, documented in
   `worker/README.md`) to a Durable Object's SQLite-backed storage.
4. **Edge caching on the domain proxy** — `domain-proxy/worker.js` caches stable
   paths (`/health`, `/metrics`, `/.well-known/*`) via the Cache API while
   keeping `/mcp` no-store.
5. **Structured JSON logging** — server logs become one-JSON-object-per-line
   (parseable by the BTP log drain / Grafana) instead of free-text
   `console.error`.
6. **`view_changelog` MCP tool** — expose `changelog.json` (already in the data
   repo) as a new tool on all three data-source backends.
7. **Dynamic Client Registration (RFC 7591)** — `POST /oauth/register` on the
   in-process OAuth 2.1 server; registered clients accepted by
   authorize/token; `registration_endpoint` published in the AS metadata.

## Context

- Product: `docs/product/cds_kb_data`, `docs/product/cds_kb_mcp`
- `search_mode=hybrid` is dormant: `README.md` documents that
  `index/embeddings.json` is only produced when `CDS_KB_EMBED_API_KEY` exists
  (`scripts/build-embeddings.mjs` exits 0 without it), and the server's
  `embedQueryText()` also requires the key. A local ONNX model removes both
  gates.
- The usage collector (`worker/src/index.mjs`) stores per-view counts in KV
  metadata; `worker/README.md` documents the 1,000 writes/day free-plan limit.
- `domain-proxy/worker.js` sets `cache: "no-store"` on every response; stable
  JSON endpoints are safe to edge-cache.
- All server logging is free-text `console.error`; `push-mcp-metrics.yml` and
  the BTP log drain (recent commits) exist but cannot parse it.
- `docs/product/cds_kb_data/changelog.json` is a tracked array of
  `{viewName, action, timestamp, source, fields, associations, tags, sourceUrl}`;
  no MCP surface reads it.
- `src/oauth.mjs` accepts exactly one static `client_id`
  (`CDS_KB_OAUTH_CLIENT_ID`, default `cds-kb-client`); no RFC 7591 endpoint.

## Scope

In scope:

- `docs/product/cds_kb_mcp/src/server.mjs` — completions, `view_changelog`
  tool, JSON logging, local query embedding, version bump.
- `docs/product/cds_kb_mcp/src/datasource.mjs` — `getChangelog()` on
  Local/Remote/S3.
- `docs/product/cds_kb_mcp/src/oauth.mjs` + `src/server.mjs` mount — DCR.
- `docs/product/cds_kb_mcp/src/log.mjs` (new) — JSON logging helper; migrate
  `console.error` calls in server/datasource/usage-tracker/oauth.
- `docs/product/cds_kb_data/scripts/build-embeddings.mjs` + `package.json` +
  `.github/workflows/build-embeddings.yml` — local (transformers.js) mode.
- `docs/product/cds_kb_mcp/package.json` + `build.mjs` — add
  `@huggingface/transformers` (external from the esbuild bundle).
- `docs/product/cds_kb_mcp/worker/src/index.mjs` + `worker/wrangler.toml` +
  `worker/README.md` — Durable Object storage.
- `docs/product/cds_kb_mcp/domain-proxy/worker.js` + `domain-proxy/README.md`
  — edge caching.
- `docs/product/cds_kb_mcp/test_tools.mjs` — smoke test for `view_changelog`.
- `docs/product/cds_kb_mcp/README.md` — tools count (14), completions, DCR,
  local embeddings, changelog tool, KV→DO.
- Rebuild `dist/cds-kb-mcp.cjs`.

Out of scope:

- Generating `embeddings.json` in this environment (transformers.js must
  download ~90 MB model; CI does it weekly) — code + workflow only, plus a
  `--limit`-bounded local smoke if the model cache exists.
- Deploying the Worker / domain proxy (needs Cloudflare credentials) —
  automation + docs only.
- Migrating existing KV counts into the DO (fresh start; `/totals` reads
  current state).

## Approach

Implement as independent groups, then validate:

1. **Foundation**: `src/log.mjs` JSON logger; replace `console.error` in
   server.mjs / datasource.mjs / usage-tracker.mjs / oauth.mjs / metrics.mjs
   warn path. Low risk, touches every other group's diff surface.
2. **Data-source + tool**: `getChangelog()` on all three backends; load in
   `loadIndex()`; register tool 14 `view_changelog` (filters: `action`,
   `source`, `since`, `limit`); smoke test TEST 16.
3. **Completions**: `completable()` on `explain_view.name` (view-name
   suggestions from `docsByName`); `completeCallback` for the
   `cds://view/{name}` template. SDK auto-registers the handler + capability
   when the schema is completable (verified in `mcp-D7GmuPnv.cjs`).
4. **DCR**: in-memory client registry in `oauth.mjs`, `POST /oauth/register`
   (RFC 7591 body), authorize/token accept registered clients, metadata gains
   `registration_endpoint`; mount + rate-limit in server.mjs.
5. **Local embeddings**: data-side `build-embeddings.mjs` gets a local branch
   (transformers.js `feature-extraction`, `Xenova/all-MiniLM-L6-v2`, mean
   pooling + normalize); workflow runs it whenever the API key is absent;
   server `embedQueryText()` falls back to the same local pipeline when
   `CDS_KB_EMBED_API_KEY` is unset (dynamic import, cached extractor, failures
   → BM25-only). `@huggingface/transformers` external in `build.mjs`.
6. **Worker**: `UsageCounter` Durable Object (in-memory Map + write-through
   `state.storage`), `/ping` routes through the DO stub, `/totals` reads from
   the DO; `wrangler.toml` gains the DO binding + `[[migrations]]`; README
   updated (KV known-limit note replaced by DO note).
7. **Domain proxy**: Cache API for `GET/HEAD` on `/health` (10s), `/metrics`
   (10s), `/.well-known/*` (1h); everything else stays no-store.
8. **Docs + bundle**: README updates, `SERVER_VERSION` bump 2.3.0 → 2.4.0,
   `npm run build`.

## Risks And Recovery

- **transformers.js on the server**: ~90 MB model download on first embed and
  onnxruntime native binding — failure must degrade to BM25-only (already the
  fallback shape). Bundle: esbuild `external`, so the dist file stays small and
  the dependency is optional at runtime (`CDS_KB_EMBED_API_KEY` unset +
  `CDS_KB_EMBED_LOCAL` not opted in → never imported). Revert = drop the
  dynamic-import branch.
- **Completions shape**: SDK v2 only completes prompt args + resource template
  variables (not tool input args) — scope is exactly that; no client-facing
  regression since the capability is only advertised when a completable schema
  exists.
- **DO migration**: `/totals` contract (`{view: count}`) unchanged, so
  `pull-usage-stats.mjs` keeps working; KV namespace stays in `wrangler.toml`
  only if needed for rollback — prefer removing it (README updated).
- **Logging change**: `test_tools.mjs` reads stdout only; stderr JSON lines
  won't break tests. Revert = `git checkout` touched files.
- New tool changes `tools/list` + bundle size — covered by `npm test` + build.

## Progress

- [x] Survey complete (SDK completions shape, changelog shape, KV limits, oauth)
- [x] Plan file under `docs/plans/active/`
- [x] Group 1: `src/log.mjs` + console.error migration
- [x] Group 2: `getChangelog()` + `view_changelog` tool + TEST 15.5
- [x] Group 3: completions (prompt args + resource template)
- [x] Group 4: DCR in oauth.mjs + mount
- [x] Group 5: local embeddings (data script + workflow + server fallback)
- [x] Group 6: Worker KV → Durable Object
- [x] Group 7: domain-proxy edge caching
- [x] Group 8: README + version bump + dist rebuild
- [x] Validate: build, `npm test` (data + mcp), YAML lint
- [x] Move plan to completed

## Decisions

- 2026-08-13: Local embed model pinned to `Xenova/all-MiniLM-L6-v2`
  (384-dim) — small, fast on CPU, stable ONNX export; model name recorded in
  `embeddings.json.model` so server + builder agree.
- 2026-08-13: `@huggingface/transformers` is a real dependency but esbuild
  `external`; the dist bundle never contains it, so single-file deployments
  keep their size and simply never enable local hybrid.
- 2026-08-13: DCR registry is in-memory (same lifetime as auth codes) —
  documented; a restart invalidates registered clients (clients re-register).

## Validation

- `npm test` (mcp): all 17 checks pass including new TEST 15.5 `view_changelog`
  (returns real `added` entries from `changelog.json`).
- `npm test` (data): 21/21 pass after `build-embeddings.mjs` local-mode change
  + `@huggingface/transformers` devDep install.
- `npm run build`: `dist/cds-kb-mcp.cjs` rebuilds; grep confirms
  `@huggingface/transformers` stays external (only the dynamic-import string
  appears), bundle size unchanged vs. committed dist (~8.1 MB).
- Live stdio probe: `completion/complete` on `explain_view.name` returns 25
  real view names; `initialize` advertises `completions:{}` + server 2.4.0.
- Live HTTP probe: `POST /oauth/register` returns a `dyn_*` client id;
  AS metadata includes `registration_endpoint`.
- Local embeddings end-to-end: `build-embeddings.mjs --limit 3` produced
  `index/embeddings.json` (dim=384, mode=local) via transformers.js; server
  `search_cds search_mode=hybrid` ran with the local model (no
  "local query embedding failed" log) and returned ranked results; temp file
  removed afterwards.
- YAML lint (`yaml-lint`): both edited workflows parse OK.

## Result

Shipped cds-kb-mcp **2.4.0** with all seven upgrades:

1. **Local embeddings**: `build-embeddings.mjs` now defaults to transformers.js
   (ONNX `Xenova/all-MiniLM-L6-v2`) when no API key; `build-embeddings.yml`
   always produces `index/embeddings.json` (with a HuggingFace model cache
   step); server `embedQueryText()` falls back to the same local pipeline
   (lazy dynamic import, cached extractor, BM25 degradation on failure).
2. **Completions**: `explain_view.name` prompt arg + `cds://view/{name}`
   resource template complete against the loaded index (25 max).
3. **KV → DO**: usage collector counts now live in a `UsageCounter` Durable
   Object (SQLite-backed, atomic); `wrangler.toml` binding + migration;
   `/ping`→`/totals` contract unchanged; worker README updated.
4. **Edge caching**: domain proxy caches `/health` (10s), `/metrics` (10s),
   `/.well-known/*` (1h) via Cache API; `/mcp` stays `no-store`.
5. **JSON logging**: `src/log.mjs` emits one JSON object per line on stderr;
   all `console.error` call sites migrated (server/datasource/usage-tracker).
6. **`view_changelog`**: `getChangelog()` on Local/Remote/S3; tool 14 filters
   by action/source/since/limit.
7. **DCR**: `POST /oauth/register` (RFC 7591), in-memory registry, authorize/
   token accept registered clients, `registration_endpoint` in AS metadata.

Operator follow-ups (credentials not available here):

1. Run `build-embeddings.yml` once (or wait for the weekly run) so
   `index/embeddings.json` gets committed — hosted `kb_info` then reports
   `embeddings: yes` and hybrid is live for everyone.
2. Deploy the usage worker with `deploy-usage-worker.yml` (add
   `CLOUDFLARE_API_TOKEN` / `CLOUDFLARE_ACCOUNT_ID` secrets, set `PULL_TOKEN`
   via wrangler) — the DO binding+migration are already in `wrangler.toml`.
3. If the current KV-based collector is deployed anywhere, redeploy from this
   repo so it moves to the Durable Object (start-of-iteration wrangler.toml
   still had the KV namespace id).
