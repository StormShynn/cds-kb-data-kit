# cds-kb-usage-collector

Anonymous usage-ping collector for `cds-kb-mcp`, deployed as a Cloudflare
Worker. Every running MCP server instance (local `stdio` or hosted `SSE`)
batches its own view-read counts and posts them here; a separate,
token-gated endpoint lets the data repo's scheduled job pull the running
totals and fold them into search ranking (see
`../../sap-cds-kb-data-v1/scripts/pull-usage-stats.mjs` and
`server.mjs`'s `boostDocument`).

No account/identity data ever reaches this Worker — only `{view, count}`.

## Deploy

Requires a free Cloudflare account.

```bash
npm install -g wrangler        # or use `npx wrangler ...` below instead
wrangler login

# 1. Create the KV namespace that stores per-view counts
wrangler kv:namespace create USAGE_KV
# -> copy the printed id into wrangler.toml's kv_namespaces[0].id

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

**In the data repo** (`sap-cds-kb-data-v1`), add two repository secrets for
the `pull-usage-stats.yml` workflow:

- `CDS_KB_USAGE_ENDPOINT` → `https://cds-kb-usage-collector.<you>.workers.dev/totals`
- `CDS_KB_USAGE_PULL_TOKEN` → the same string you gave `PULL_TOKEN` above

## Known limits (v1)

- Cloudflare's free plan caps KV at 1,000 writes/day account-wide. Each
  distinct view read in a ~5-minute client flush window costs one write —
  fine for a small/medium user base, but worth watching as usage grows.
  If it becomes a bottleneck, batch further client-side (raise
  `CDS_KB_USAGE_FLUSH_MINUTES`) or move to Durable Objects / a real DB.
- `/ping` has no rate limiting in code — add a Cloudflare dashboard rate
  limiting rule on this route if it's ever abused (it's a public,
  unauthenticated endpoint by design, since counting doesn't need identity).
- This is a directional popularity signal, not an exact count: any instance
  running with telemetry disabled, offline, or killed before a flush
  contributes nothing for that period.
