# cds-kb-usage-collector

Anonymous usage-ping collector for `cds-kb-mcp`, deployed as a Cloudflare
Worker. Every running MCP server instance (local `stdio` or hosted `SSE`)
batches its own view-read counts and posts them here; a separate,
token-gated endpoint lets the data repo's scheduled job pull the running
totals and fold them into search ranking (see
`../cds_kb_data/scripts/pull-usage-stats.mjs` and
`server.mjs`'s `boostDocument`).

No account/identity data ever reaches this Worker — only `{view, count}`.

## Storage: Durable Object (not KV)

Per-view counts live in a single `UsageCounter` **Durable Object** with
SQLite-backed storage (`wrangler.toml`'s `USAGE_DO` binding + migration).
KV was replaced because its free-plan 1,000 writes/day account-wide limit
was the bottleneck once real usage arrived: the DO has no such per-day
write cap, writes are atomic, and a single instance means `/totals` reads
are trivially consistent. The `/ping` → `/totals` wire contract is
unchanged, so the data repo's `pull-usage-stats.mjs` needs no edits.

**Resetting counts:** there is no delete endpoint by design (and no CLI to
wipe DO storage). To zero the totals — e.g. after test data pollutes them —
bump the `idFromName('global-v2')` instance name in `worker/src/index.mjs`
to a fresh value and redeploy; `idFromName` creates a new Durable Object
with empty storage and `/totals` starts at zero. The old instance's storage
is abandoned (nothing reads it anymore), not deleted.

## Deploy

Requires a free Cloudflare account.

```bash
npm install -g wrangler        # or use `npx wrangler ...` below instead
wrangler login

# 1. (Durable Objects need no namespace creation — the binding + migration
#    in wrangler.toml create the class on first deploy. Nothing to paste.)

# 2. Set the secret that gates the /totals read endpoint
wrangler secret put PULL_TOKEN
# -> paste any long random string when prompted; keep a copy, you'll need
#    it again as CDS_KB_USAGE_PULL_TOKEN in the data repo's GitHub secrets

# 3. Deploy
wrangler deploy
# -> prints the live URL, e.g. https://cds-kb-usage-collector.<you>.workers.dev
```

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

## Known limits (v1)

- Durable Objects still bill on requests (free tier includes a generous
  monthly allowance) and per-key storage — nothing near KV's 1,000
  writes/day ceiling, but a genuinely huge user base should consider
  batching further client-side (raise `CDS_KB_USAGE_FLUSH_MINUTES`) and/or
  sharding the DO by a hash of the view name.
- `/ping` has no rate limiting in code — add a Cloudflare dashboard rate
  limiting rule on this route if it's ever abused (it's a public,
  unauthenticated endpoint by design, since counting doesn't need identity).
- This is a directional popularity signal, not an exact count: any instance
  running with telemetry disabled, offline, or killed before a flush
  contributes nothing for that period.
- Migrating existing counts from the old KV namespace is not automated — a
  fresh deploy starts from zero (acceptable: the signal is directional).
