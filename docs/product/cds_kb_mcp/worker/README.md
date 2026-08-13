# cds-kb-usage-collector

Anonymous usage-ping collector for `cds-kb-mcp`, deployed as a Cloudflare
Worker. Every running MCP server instance (local `stdio` or hosted `SSE`)
batches its own view-read counts and posts them here; a separate,
token-gated endpoint lets the data repo's scheduled job pull the running
totals and fold them into search ranking (see
`../cds_kb_data/scripts/pull-usage-stats.mjs` and
`server.mjs`'s `boostDocument`).

No account/identity data ever reaches this Worker — only `{view, count}` for
view popularity, and (optionally) anonymous query **shapes**
(`{shapeId, views, selectFieldCount, selectFieldHash, flags, count}`) that
never include WHERE literals, titles, contributors, or raw notes.

**Also hosts the Query Builder Propose Issue bot** (`POST /propose-issue`):
creates a GitHub Issue with a bot token so visitors need not be logged into
GitHub. Same Worker keeps one deploy URL and reuses Durable Object rate
limits (see plan `docs/plans/active/ai-sap-learn-share-loop.md`, decision C1).

## Endpoints

| Method | Path | Auth | Purpose |
|---|---|---|---|
| POST | `/ping` | public (rate-limited) | View-read deltas `{events:[{view,count}]}` |
| GET | `/totals` | `?token=PULL_TOKEN` | Cumulative view counts |
| DELETE | `/totals` | `?token=PULL_TOKEN&view=NAME[,NAME2,...]` and/or `&prefix=PFX` | Surgical delete of specific view(s) — see "Resetting counts" below |
| POST | `/ping-shapes` | public + CORS (rate-limited) | Anonymous query shapes from MCP (`CDS_KB_SHAPE_TELEMETRY=1`) or Query Builder opt-in |
| GET | `/shape-totals` | `?token=PULL_TOKEN` | Cumulative shape aggregates |
| DELETE | `/shape-totals` | `?token=PULL_TOKEN&shapeId=HASH[,HASH2,...]` | Surgical delete of specific shape(s) |
| OPTIONS | `/ping-shapes`, `/propose-issue` | public | CORS preflight for the browser builder |
| POST | `/propose-issue` | public + CORS (stricter rate limit) | Create curated-library GitHub Issue (`title`, `body`\|`markdown`, `kind`: `query`\|`cds`) |

### `POST /propose-issue`

JSON body:

```json
{
  "title": "Query library: Open purchase orders",
  "body": "## Propose … markdown …",
  "kind": "query"
}
```

- `kind`: `query` (default) or `cds` — curated query shape vs curated CDS snippet (C4).
- Honeypot fields `website` / `company` / `url` / `hp`: if non-empty, returns soft success and creates nothing.
- Rejects oversized title/body and obvious secret patterns (tokens, private keys, etc.).
- Never logs the full body (only kind + lengths).
- Labels: `query-library`, plus `cds-snippet` when `kind=cds` (retries without labels if the repo lacks them).
- Response: `{ "issueUrl": "https://github.com/…/issues/N" }` or `{ "error": "…" }`.

**Abuse limits:** **8 proposals / IP / hour** (Durable Object bucket, separate from the 120/min ping limiter).

## Storage: Durable Object (not KV)

Per-view counts live in a single `UsageCounter` **Durable Object** with
SQLite-backed storage (`wrangler.toml`'s `USAGE_DO` binding + migration).
KV was replaced because its free-plan 1,000 writes/day account-wide limit
was the bottleneck once real usage arrived: the DO has no such per-day
write cap, writes are atomic, and a single instance means `/totals` reads
are trivially consistent. The `/ping` → `/totals` wire contract is
unchanged, so the data repo's `pull-usage-stats.mjs` needs no edits.

**Avoiding test pollution in the first place:** never smoke-test against the
deployed URL. Run `wrangler dev` locally (Miniflare simulates the Durable
Object) and point your test pings at `http://127.0.0.1:<port>` instead. If
you must hit prod for some reason, name fake views with one of the
`TEST_VIEW_PATTERN` prefixes in `worker/src/index.mjs` — `ZZTEST_`,
`RATETEST`, `SMOKETEST` — and `/ping`/`/ping-shapes` silently drop them
before they ever reach storage.

**Resetting counts:**

- **Specific entries** (e.g. a real smoke-test that slipped past the prefix
  guard, or wasn't tagged): `DELETE /totals?token=PULL_TOKEN&view=NAME` (comma-
  separate multiple names) or `&prefix=PFX` to match every view starting with
  that prefix. Same shape for shapes: `DELETE /shape-totals?token=PULL_TOKEN&shapeId=HASH`.
  Requires at least one of `view`/`prefix` (or `shapeId`) — this route can
  never wipe everything, by design.
- **Everything** (full reset): bump the `idFromName('global-vN')` instance
  name in `worker/src/index.mjs` to a fresh value and redeploy; `idFromName`
  creates a new Durable Object with empty storage and `/totals` starts at
  zero. The old instance's storage is abandoned (nothing reads it anymore),
  not deleted.

## Deploy

Requires a free Cloudflare account.

```bash
cd docs/product/cds_kb_mcp/worker
npm install -g wrangler        # or use `npx wrangler ...` below instead
wrangler login

# 1. (Durable Objects need no namespace creation — the binding + migration
#    in wrangler.toml create the class on first deploy. Nothing to paste.)

# 2. Set the secret that gates the /totals read endpoint
wrangler secret put PULL_TOKEN
# -> paste any long random string when prompted; keep a copy, you'll need
#    it again as CDS_KB_USAGE_PULL_TOKEN in the data repo's GitHub secrets

# 3. Issue bot secret (required for live Propose without visitor GitHub login)
wrangler secret put GITHUB_ISSUE_TOKEN
# -> fine-grained PAT: Issues write on PROPOSE_REPO only
#    (or classic PAT with public_repo). Least privilege preferred.
# Optional: change target repo via wrangler.toml [vars] PROPOSE_REPO
#    (default StormShynn/cds-kb-mcp-data-kit)

# 4. Deploy
wrangler deploy
# -> prints the live URL, e.g. https://cds-kb-usage-collector.<you>.workers.dev
```

**Go-live checklist for Propose bot**

1. Create label `query-library` (and optionally `cds-snippet`) on `PROPOSE_REPO`.
2. `wrangler secret put GITHUB_ISSUE_TOKEN`
3. `wrangler deploy`
4. Confirm Query Builder `PROPOSE_ISSUE_ENDPOINT` points at
   `https://cds-kb-usage-collector.<you>.workers.dev/propose-issue`
5. Without the secret, `/propose-issue` returns 503 and the builder falls back
   to the GitHub deep-link + clipboard path.

## Wire it up

**On every `cds-kb-mcp` instance you want reporting usage** (local installs
you distribute, or your own hosted SSE deployment), set:

```bash
CDS_KB_USAGE_ENDPOINT=https://cds-kb-usage-collector.<you>.workers.dev/ping
```

Unset (the default), the server never pings anywhere — this is opt-in, not
on by default.

`kb_info` reports `usageEndpoint: set|unset` and `usageStatsConfigured: yes|no`
(so you can confirm the MCP sees the collector / folded usage-stats without
guessing).

**In the data tree** (`docs/product/cds_kb_data`), add two repository secrets for
the `pull-usage-stats.yml` workflow:

- `CDS_KB_USAGE_ENDPOINT` → `https://cds-kb-usage-collector.<you>.workers.dev/totals`
- `CDS_KB_USAGE_PULL_TOKEN` → the same string you gave `PULL_TOKEN` above

## Local checks

```bash
cd docs/product/cds_kb_mcp/worker
node test-propose-sanitize.mjs
```

## Known limits (v1)

- Durable Objects still bill on requests (free tier includes a generous
  monthly allowance) and per-key storage — nothing near KV's 1,000
  writes/day ceiling, but a genuinely huge user base should consider
  batching further client-side (raise `CDS_KB_USAGE_FLUSH_MINUTES`) and/or
  sharding the DO by a hash of the view name.
- `/ping` is rate-limited in code: fixed window of **120 requests/min per IP**
  (returns 429 + `Retry-After`). A real cds-kb-mcp instance flushes once per
  ~5 min, so this is ~600x headroom while still stopping abuse loops. `/totals`
  gets the same limiter as defense-in-depth behind `PULL_TOKEN`. The buckets
  live inside the Durable Object (`#rateLimited`, `RATE_LIMIT_MAX` /
  `RATE_LIMIT_WINDOW_MS` at the top of `worker/src/index.mjs`) because the DO
  is the one global single-instance — a per-isolate map would split the window
  across Worker isolates and never trip. Raise the constants if you ever see
  legitimate 429s.
- `/propose-issue` uses a **separate** bucket: **8 / IP / hour**.
- This is a directional popularity signal, not an exact count: any instance
  running with telemetry disabled, offline, or killed before a flush
  contributes nothing for that period.
- Migrating existing counts from the old KV namespace is not automated — a
  fresh deploy starts from zero (acceptable: the signal is directional).
- Issue bot does **not** open PRs and never merges library changes.
