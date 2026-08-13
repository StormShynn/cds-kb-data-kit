# cds-kb-mcp domain proxy

A thin Cloudflare Worker reverse proxy that gives `cds-kb-mcp`'s hosted
endpoint a stable public domain (`https://mcp.tringhia.io.vn`), independent
of the SAP BTP Cloud Foundry trial URL behind it — which rotates every ~90
days when the trial subaccount is reclaimed and redeployed (see
[`../mcp_btp_deployment_guide.md`](../mcp_btp_deployment_guide.md), section
A.8).

Without this, every trial reset means updating README.md and every
downstream client config that hardcoded the old `cfapps.*.hana.ondemand.com`
URL. With it, only one thing changes on reset: this Worker's `BACKEND_URL`
variable.

## How it works

`worker.js` forwards every request (method, headers, body) to whatever URL
is set in the `BACKEND_URL` environment variable, and streams the response
straight back — no transformation.

Caching is selective:

- **Cached at the edge (Cache API):** `GET/HEAD /health` (10s), `/metrics`
  (10s), and `/.well-known/*` (1h — OAuth discovery, hit on every client
  connect). These are stable JSON documents that change slowly; caching them
  cuts BTP trial load and latency.
- **Never cached (`Cache-Control: no-store`):** everything else, notably
  `/mcp` (POST, and the GET/DELETE session surface) — MCP responses are
  dynamic/session-bound, and a plain GET was observed getting served from
  Cloudflare's edge cache without this.

```
client -> https://mcp.tringhia.io.vn/mcp -> Worker -> BACKEND_URL/mcp (the live BTP route)
```

## Setup (one-time)

1. Cloudflare dashboard -> Workers & Pages -> Create -> **Workers** ->
   **Create Worker** (plain "Hello World" template — **not** "Import an
   existing Git repository"; that path expects a build output directory
   this single-file Worker doesn't have and will fail with "Could not
   detect a directory containing static files").
2. Paste the contents of `worker.js` into the online editor, Deploy.
3. Settings -> Variables and Secrets -> add `BACKEND_URL` =
   `https://<current-btp-route>.cfapps.<region>.hana.ondemand.com` (Text,
   not Secret — it's not sensitive).
4. Settings -> Domains & Routes -> Add -> Custom Domain ->
   `mcp.tringhia.io.vn`. Cloudflare creates the DNS record automatically
   (requires the domain's nameservers to already point at Cloudflare).

## On every BTP trial reset

After redeploying per A.8's runbook and confirming the new route works
directly, update **only** step 3 above — the `BACKEND_URL` variable — to
the new route. Nothing else (README.md, client configs, this file) needs
to change.

## Verifying

```bash
# Same status/body as calling the BTP route directly:
curl -s https://mcp.tringhia.io.vn/mcp   # GET -> 405 {"jsonrpc":"2.0","error":...} is expected, not a failure

curl -s -X POST https://mcp.tringhia.io.vn/mcp \
  -H "Content-Type: application/json" \
  -H "Accept: application/json, text/event-stream" \
  -d '{"jsonrpc":"2.0","method":"initialize","params":{"protocolVersion":"2026-06-18","capabilities":{},"clientInfo":{"name":"test","version":"1.0"}},"id":1}'
# -> 200, an `initialize` result with serverInfo

curl -sI https://mcp.tringhia.io.vn/mcp | grep -i cache
# -> Cache-Control: no-store, CF-Cache-Status: BYPASS or DYNAMIC (never HIT)
```
