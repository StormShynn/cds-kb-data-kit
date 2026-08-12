# cds-kb-mcp

A **dataless** MCP server that gives AI agents instant, ranked access to SAP
S/4HANA CDS views via semantic search, business taxonomy, on-demand definition
retrieval, and CDS DDL compose/generate/validate. Built on the **MCP SDK v2**
(spec `2026-07-28`, stateless Streamable HTTP + stdio). In this harness it sits
beside [`../cds_kb_data`](../cds_kb_data) and auto-uses that tree when present.

> **TL;DR (end users):** Prefer the hosted server — no install. Point a Streamable
> HTTP client at `/mcp`. See [Client Configuration](#client-configuration).
>
> **TL;DR (this monorepo):** `cd docs/product/cds_kb_mcp && npm start` — resolves
> sibling `../cds_kb_data` automatically. Use `npm run start:remote` only when you
> intentionally want the GitHub data remote.

**Benchmark vs. raw file access:** ~830× faster, ~94× cheaper in tokens, better top-3 relevance — full numbers in [BENCHMARK.md](./BENCHMARK.md).

---

## Table of Contents

- [What you get](#what-you-get)
- [Harness monorepo (local)](#harness-monorepo-local)
- [Prerequisites](#prerequisites)
- [Client Configuration](#client-configuration) — hosted MCP for end users
- [Tools Reference](#tools-reference)
- [Resources & Prompts](#resources--prompts)
- [Hosted auth](#hosted-auth) — API key, JWKS, **OAuth 2.1**
- [Usage ranking](#usage-ranking)
- [Operations](#operations) — `/health`, `/metrics`, rate limits
- [Architecture](#architecture)

---

## What you get

Coverage numbers below track `../cds_kb_data/index/version.json` (rebuild when
the data index changes).

|                     |                                                                                                            |
| ------------------- | ---------------------------------------------------------------------------------------------------------- |
| **Coverage**        | ~10,600 CDS views (see `version.json` `viewCount`)                                                         |
| **Enrichment**      | Semantic description + synonyms where present (`enrichedCount` in `version.json`)                          |
| **Taxonomy**        | Lines of Business → Business Objects → keyword map (EN + VI)                                               |
| **Search ranking**  | Field-boosted MiniSearch (`name×3`, `semanticDescription×2.5`, `synonyms×2`) + optional **vector hybrid** (`index/embeddings.json`) + **usageCount** popularity boost |
| **Module aliasing** | Filter by `"Finance"` / `"Procurement"` / `"Sales"` instead of `FI` / `MM` / `SD`                          |
| **Tools**           | 12 MCP tools — every one declares an `outputSchema` and returns JSON `structuredContent`                   |
| **Resources**       | `cds://view/{name}`, `cds://taxonomy`, `cds://stats` — attachable straight into agent context              |
| **Prompts**         | `explain_view`, `compose_query`, `validate_ddl` — one-call packaged workflows                              |
| **Auth**            | API key, remote JWKS, and full **OAuth 2.1 + PKCE** authorization server                                   |
| **Bundle**          | Single ~2 MB `.cjs` file (unminified), Node ≥ 20                                                           |
| **Data isolation**  | Server ships **no view data**. Harness sibling `cds_kb_data`, or GitHub remote / local `--data`.           |

---

## Harness monorepo (local)

```text
docs/product/
  cds_kb_data/     # views + index (source of truth for local/dev)
  cds_kb_mcp/      # this server
```

```bash
cd docs/product/cds_kb_mcp
npm install
npm start                 # auto: ../cds_kb_data if index exists
npm run start:local       # explicit --data ../cds_kb_data
npm run start:remote      # GitHub remote (needs token if private)
npm test                  # smoke tools against sibling data
```

Cursor / Claude **stdio** against the sibling data tree:

```json
{
  "mcpServers": {
    "cds-kb": {
      "command": "node",
      "args": [
        "D:/path/to/harness/docs/product/cds_kb_mcp/src/server.mjs",
        "--data",
        "D:/path/to/harness/docs/product/cds_kb_data"
      ]
    }
  }
}
```

Omit `--data` in this repo: the server still finds `../cds_kb_data` via sibling
auto-detect. Hosted deploys set `CDS_KB_REMOTE` (see `render.yaml`) so they never
accidentally depend on a missing local tree.

Open both folders in one VS Code/Cursor window via `cds-kb.code-workspace`.

---

## Prerequisites

Before configuring your client, ensure your local machine meets the following requirements:

1. **Node.js**: Only needed for Option 1/2 (the `supergateway` bridge) or local stdio. Option 0 (direct Streamable HTTP) needs nothing installed — the client talks to the URL itself. Minimum version **Node.js v20** or above — verify with `node -v`. (This server itself requires Node ≥ 20; the MCP SDK v2 requires it.)
2. **Network Connectivity**:
   - Outbound HTTPS access to the hosted server — primary: `https://cds-kb-mcp-production.up.railway.app`, fallback: `https://cds-kb-mcp.cfapps.ap21.hana.ondemand.com`
   - Option 1/2 only: access to `registry.npmjs.org` to fetch `supergateway`. If your machine is behind a corporate firewall/VPN/proxy that blocks npm registry downloads, either use Option 0 instead, or use the global installation method (**Option 2** below).
3. **Compatible IDE**: An IDE supporting MCP (e.g. Cursor, Claude Desktop, VS Code, Gemini IDE, Claude Code).

---

## Client Configuration

Because the MCP server is hosted remotely, **most end users do not need to clone this repository or install any local dependencies**. For harness/local wiring, see [Harness monorepo (local)](#harness-monorepo-local) above.

The server exposes **Streamable HTTP** on a single **`/mcp`** endpoint (the current MCP transport spec — stateless per request). The legacy SSE transport was removed with the SDK v2 upgrade; clients that only speak local stdio bridge `/mcp` with `supergateway` as shown below.

Two hosted endpoints are available for either transport — start with **Primary**, and switch to **Fallback** only if the primary is unreachable from your network.

> **Hosting on the cheap:** if you host this server yourself, **SAP BTP Cloud
> Foundry has a free tier** (no card needed for Trial) and the repo ships a
> ready-to-push `manifest.yml` — see [mcp_btp_deployment_guide.md](./mcp_btp_deployment_guide.md),
> Part A. It needs a `CDS_KB_DATA_TOKEN` GitHub PAT because the data repo is private.

### Option 0: Direct Streamable HTTP (Recommended if your client supports it)

No extra package, no bridge process — just a URL:

```json
{
  "mcpServers": {
    "cds-kb": {
      "type": "http",
      "url": "https://cds-kb-mcp-production.up.railway.app/mcp"
    }
  }
}
```

Fallback: `"url": "https://cds-kb-mcp.cfapps.ap21.hana.ondemand.com/mcp"`.

The exact config key for a remote HTTP server (`"type": "http"` vs `"transport"` vs a dedicated `claude mcp add --transport http` CLI flag) varies by client — check your client's own MCP docs if the block above isn't accepted verbatim. If your client has no remote-HTTP option at all, use Option 1 or 2 below instead.

### Option 1: Lock Version with npx (Recommended & Easiest, for stdio-only clients)

`supergateway` v3 connects to a remote **Streamable HTTP** endpoint via `--streamableHttp` and exposes it locally over stdio. Add one of these blocks to your `mcpServers` configuration file (e.g., `claude_desktop_config.json` or `mcp_config.json`):

**Primary:**

```json
{
  "mcpServers": {
    "cds-kb": {
      "command": "npx",
      "args": [
        "-y",
        "supergateway@3.4.3",
        "--streamableHttp",
        "https://cds-kb-mcp-production.up.railway.app/mcp"
      ]
    }
  }
}
```

**Fallback (SAP BTP Cloud Foundry):**

```json
{
  "mcpServers": {
    "cds-kb": {
      "command": "npx",
      "args": [
        "-y",
        "supergateway@3.4.3",
        "--streamableHttp",
        "https://cds-kb-mcp.cfapps.ap21.hana.ondemand.com/mcp"
      ]
    }
  }
}
```

### Option 2: Global Installation (Offline & Network-Resilient)

Best for enterprise environments behind corporate firewalls, VPNs, or proxy servers where running `npx` dynamically on every IDE startup might fail or time out.

1. Install `supergateway` globally on your machine once:

   ```bash
   npm install -g supergateway@3.4.3
   ```

2. Update your IDE's `mcpServers` configuration to call the globally installed binary directly (no `npx`):

   **Primary:**

   ```json
   {
     "mcpServers": {
       "cds-kb": {
         "command": "supergateway",
         "args": [
           "--streamableHttp",
           "https://cds-kb-mcp-production.up.railway.app/mcp"
         ]
       }
     }
   }
   ```

   **Fallback (SAP BTP Cloud Foundry):**

   ```json
   {
     "mcpServers": {
       "cds-kb": {
         "command": "supergateway",
         "args": [
           "--streamableHttp",
           "https://cds-kb-mcp.cfapps.ap21.hana.ondemand.com/mcp"
         ]
       }
     }
   }
   ```

   *(Note for Windows users: If your IDE cannot locate the global command, use `supergateway.cmd` as the command, or specify the absolute path to your global `npm` prefix).*

   Need a custom header (e.g. API key)? Pass `--header "Authorization: Bearer <KEY>"` — see `supergateway --help`.

Once configured, restart your IDE. The tools will immediately be available for your agent to use.

---

## Tools Reference

The server exposes **twelve tools**. Every tool declares an **`outputSchema`** (JSON Schema) and returns both human-readable `content` **and** machine-parseable **`structuredContent`** — so programmatic/agentic integrations can parse results without regex. The flow: search → pick a view → **compose → generate → validate** CDS DDL without leaving MCP.

### 1. `search_cds`

Find CDS views by business meaning, name, tag, or classic SAP keyword (`VBAK`, `BSEG`, etc.). Returns a ranked shortlist.

**Vietnamese is fully supported.** Search is accent-insensitive — `đơn mua hàng`, `don mua hang` and `đơn mua hang` all find the same purchase-order views, thanks to the data repo merging Vietnamese synonyms (`viKeywords` + `viModuleKeywords` from `taxonomy.json`) into every view. Short lowercase queries match exactly instead of prefix/fuzzy-colliding with English terms, so `bán hàng` finds sales views, not bank views.

| Parameter | Type     | Required | Description                                                                            |
| --------- | -------- | -------- | -------------------------------------------------------------------------------------- |
| `query`   | string   | ✓        | Natural language or keyword (e.g. `"overdue customer invoices"`)                       |
| `module`  | string   | optional | Module filter — code (`FI`, `SD`, `MM`) or natural name (`"Finance"`, `"Procurement"`) |
| `lob`     | string   | optional | Line-of-business filter (partial match)                                                |
| `bo`      | string   | optional | Business object filter (partial match, e.g. `"salesorder"`)                            |
| `limit`   | int 1-50 | optional | Max results (default 10)                                                               |

Returns: ranked list with `name`, `score`, `module`, short description, and path. Ranking blends BM25 (MiniSearch) + cosine similarity when `index/embeddings.json` is present + `usageCount` popularity boost when `index/usage-stats.json` is present.

```text
1. **I_CAOPENITEMLIST**  [FI-FIO-AR-2CL]  (score 14.2)
   List of open items across customer and vendor accounts.
   path: views/FI/I_CAOPENITEMLIST.md
2. **I_PARKEDOPLACCTGDOCRBLSITEM**  ...
```

### 2. `get_cds_view`

Fetch one view's definition by exact name. Default: full markdown (metadata + fields + associations + source). Use `sections` to slim down the response.

| Parameter  | Type     | Required | Description                                                                 |
| ---------- | -------- | -------- | --------------------------------------------------------------------------- |
| `name`     | string   | ✓        | Exact view name (case-insensitive), e.g. `I_SalesDocument`                  |
| `sections` | string[] | optional | Subset of `["metadata", "fields", "associations", "source"]`. Default: all. |

Typical pattern: `search_cds` → pick a hit → `get_cds_view(name, sections=["metadata", "fields"])` to confirm the field list without pulling 5-10 KB of DDL source.

### 3. `get_views_by_tag`

Deterministic listing by tag. Use when `search_cds` is too fuzzy.

| Parameter | Type      | Required | Description                                        |
| --------- | --------- | -------- | -------------------------------------------------- |
| `tag`     | string    | ✓        | Exact tag, e.g. `"bo:salesorder"`, `"lob:finance"` |
| `limit`   | int 1-200 | optional | Default 50                                         |

Discover valid tags with `get_taxonomy` first.

### 4. `get_taxonomy`

Returns the semantic map: 12 Lines of Business → 829 Business Objects, each with keywords and synonyms. Useful for the agent to orient itself before issuing a search, or to discover valid tags for `get_views_by_tag`.

No parameters.

### 5. `get_views_by_field`

Exact lookup by field name, raw DDIC column, or table/CDS view name (not fuzzy
search). Prefer this when you already have a concrete name from ABAP/DDL.

| Parameter | Type      | Required | Description |
|---|---|---|---|
| `name` | string | ✓ | e.g. `CompanyCode`, `VWERK`, `I_JournalEntryItem` |
| `limit` | int 1-100 | optional | Max results per category (default 30) |

### 6. `get_view_dependencies`

Views that are built FROM or associate to a given view/table (uses `table-index.json`).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `name` | string | ✓ | View or table name |
| `limit` | int | optional | Max results |

### 7. `kb_info`

Report the active data source, server version, view count, enrichment %, private overlay count, DDL/metadata completeness, and index build timestamp.

```text
source: local:D:\...\docs\product\cds_kb_data
server: cds-kb-mcp 2.0.0
views: 10619
enriched: 3267 (30.8%)
privateOverlay: 1
withDdl: ...
metadataOnly: ...
withAccessControl: ...
modules: ...
builtAt: 2026-08-11T...
```

### 8. `suggest_base_views`

Recommend concrete (non-abstract, non-unverified) CDS views to use as the `FROM` base when writing a new view. Same ranking knobs as `search_cds`, with hard filters for abstract/unverified.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `query` | string | ✓ | Business intent / keywords |
| `module` / `lob` / `bo` | string | optional | Same facet filters as `search_cds` |
| `limit` | int 1-20 | optional | Default 5 |

### 9. `compose_query`

Build OpenSQL + a CDS `define view entity` skeleton from the Query Builder JSON shape (`views[]`, `select`, `where`, `groupBy`, `having`, `orderBy`, `viewName`).

### 10. `generate_cds_view`

Generate annotated DDL (`@AccessControl`, `@EndUserText.label` + compose body) from `baseView` or `views[]`. Pass `select`/`where` yourself — it does not invent field lists from Hub metadata alone.

### 11. `validate_cds_ddl`

Parse DDL with `@abaplint/core` CDSParser. Returns soft diagnostics (`ok` / `parsed` / `name` / counts) — never crashes the MCP process. No SAP connection.

### 12. `propose_query_library_entry`

Build a JSON snippet + markdown PR body for `index/query-library.json`. With `GITHUB_TOKEN` + `CDS_KB_PROPOSE_REPO=owner/name`, opens a **draft** PR on `propose/query-*` (never merges). On API failure, still returns the local snippet.

---

## Resources & Prompts

Beyond tools, the server exposes MCP **resources** and **prompts** — the two other
primitives of the 2026 MCP spec. Agents can *attach* resources directly into their
context (saving tokens vs. tool round-trips) and load canned prompts in one call.

### Resources

| URI | Description |
| --- | --- |
| `cds://view/{name}` | Full markdown definition of one CDS view by name (dynamic template) |
| `cds://taxonomy` | The full LOB → Business Object → keyword taxonomy (EN + VI) |
| `cds://stats` | Live KB stats: view count, enrichment %, index build time, auth mode |

Example client usage (pseudo-config):

```json
{
  "mcpServers": { "cds-kb": { "type": "http", "url": "https://.../mcp" } },
  "resources": [
    { "uri": "cds://view/I_GLACCOUNT", "mimeType": "text/markdown" },
    { "uri": "cds://taxonomy", "mimeType": "application/json" }
  ]
}
```

### Prompts

| Name | Arguments | Purpose |
| --- | --- | --- |
| `explain_view` | `name` (required) | Fetch a view and explain it in plain language: what it represents, key fields, associations, when to use it |
| `compose_query` | `intent` (required) | Turn a business need into a composed CDS query (uses `search_cds` + `compose_query`) |
| `validate_ddl` | `ddl` (required) | Validate a pasted DDL snippet with `validate_cds_ddl` and explain the diagnostics |

---

## Hosted auth

Hosted `/mcp` is **open (no auth)** unless the deploy sets one of the auth modes below. Local stdio needs no API key.

| Mode | Env | Client |
| --- | --- | --- |
| OAuth 2.1 + PKCE | `CDS_KB_OAUTH_SECRET` (≥ 32 chars, HS256 signing key; optional `CDS_KB_OAUTH_CLIENT_ID` default `cds-kb-client`, `CDS_KB_OAUTH_TOKEN_TTL`, `CDS_KB_PUBLIC_URL`) | Client runs the standard authorization-code + PKCE flow against `/oauth/authorize` + `/oauth/token`; server publishes AS metadata at `/.well-known/oauth-authorization-server` and Protected Resource Metadata at `/.well-known/oauth-protected-resource` — modern MCP clients (Claude Desktop, Cursor, VS Code) auto-discover and run this flow |
| API key | `API_KEY` | `Authorization: Bearer <API_KEY>` or `?api_key=<API_KEY>` |
| JWKS / JWT | `CDS_KB_JWKS_URL` (+ optional `CDS_KB_JWT_ISSUER`, `CDS_KB_JWT_AUDIENCE`) | `Authorization: Bearer <JWT>` verified via remote JWKS (`jose`) |
| Combined | any of the above | A valid OAuth token, JWT, or API key all pass |

OAuth notes:

- To enable, set `CDS_KB_OAUTH_SECRET` to a secret of at least 32 characters
  (HS256 signing key). The server itself acts as the authorization server:
  `/oauth/authorize` (validates the request, enforces PKCE S256, and redirects
  back with a one-time code) and `/oauth/token` (code + verifier → JWT) are
  served in-process. **`/oauth/token` must be reachable at a public HTTPS URL**
  for real clients; the issuer/redirect is derived from `X-Forwarded-Proto`/`Host`
  or `CDS_KB_PUBLIC_URL`. Access tokens are HS256-signed JWTs pinned to that
  issuer — no external IdP needed. Want a real login/consent screen or an
  external IdP instead? Put an API Management / Approuter + XSUAA gateway in
  front of the app on SAP BTP — see `mcp_btp_deployment_guide.md`.
- Access tokens are signed JWTs (HS256) with `jose`; no external IdP needed. Want
  to delegate to an external provider instead? Put an API Management / Approuter +
  XSUAA gateway in front of the app on SAP BTP — see `mcp_btp_deployment_guide.md`.

### S3 / MinIO data source

When `CDS_KB_S3_BUCKET`, `CDS_KB_S3_ACCESS_KEY_ID`, and `CDS_KB_S3_SECRET_ACCESS_KEY` are set (and `--data` / `CDS_KB_DATA` are not), the server loads the index and views from S3-compatible storage. Optional: `CDS_KB_S3_PREFIX`, `CDS_KB_S3_REGION` (default `us-east-1`), `CDS_KB_S3_ENDPOINT`, `CDS_KB_S3_FORCE_PATH_STYLE=true` (MinIO). Cache lives under `~/.cache/cds-kb/s3-<hash>/`.

Precedence: `--data` / `CDS_KB_DATA` → S3 (when configured) → `--remote` / `CDS_KB_REMOTE` → sibling `cds_kb_data` → default GitHub remote.

---

## Usage ranking

`search_cds` / `suggest_base_views` multiply MiniSearch scores by `usageCount` (and lightly by `referencedByCount`). `usageCount` stays `0` (no-op ×1) until:

1. Hosted/local instances set `CDS_KB_USAGE_ENDPOINT` (see `worker/`), and
2. The data repo’s `pull-usage-stats` workflow writes `index/usage-stats.json`, and
3. `enrich_index.mjs` rebuilds the search index.

Missing Worker secrets → ranking still works; popularity just does not nudge results yet.

### Hybrid (vector) search

The data repo ships `scripts/build-embeddings.mjs` (`npm run build-embeddings` in
`cds_kb_data`, needs `CDS_KB_EMBED_API_KEY`; no-op when unset). When it produces
`index/embeddings.json`, `search_cds` combines BM25 + cosine similarity for the
top candidates. Until then, search runs BM25-only — which is already strong.

---

## Operations

| Endpoint | Purpose |
| --- | --- |
| `GET /health` | Liveness: `{"status":"ok","views":...,"uptimeSeconds":...}` — no auth required |
| `GET /metrics` | Prometheus-text counters + latency histogram: `cds_kb_http_requests_total`, `cds_kb_mcp_request_duration_ms`, process gauges |
| `POST /mcp` (+ `GET`/`DELETE` for stateless sessions) | Streamable HTTP MCP endpoint |
| `GET /oauth/authorize`, `POST /oauth/token` | OAuth 2.1 authorization server (enabled via `CDS_KB_OAUTH_SECRET`) |
| `GET /.well-known/oauth-protected-resource`, `/.well-known/oauth-authorization-server` | OAuth discovery metadata |

Rate limiting: a fixed-window limiter (default 120 req/min per IP; tune with
`CDS_KB_RATE_LIMIT_MAX` / `CDS_KB_RATE_LIMIT_WINDOW_SECONDS`) protects `/mcp`,
`/oauth/authorize`, and `/oauth/token`. Responds `429` with `Retry-After`.
`/health` and the well-known metadata endpoints are never limited.

### Local dev with MCP Inspector

```bash
npx @modelcontextprotocol/inspector node src/server.mjs --data ../cds_kb_data
```

---

## Architecture

```text
┌──────────────────────────────────────────────────────────────────┐
│                         AI Client (Claude)                       │
│   search → suggest_base_views → compose_query → generate/validate│
│   resources: cds://view/… · prompts: explain_view / …            │
└──────────────────────────┬───────────────────────────────────────┘
                           │  MCP / JSON-RPC — stdio, or Streamable HTTP at /mcp
┌──────────────────────────▼───────────────────────────────────────┐
│              cds-kb-mcp 2.0.0 (MCP SDK v2, spec 2026-07-28)      │
│  tools (12, outputSchema+structuredContent) · resources · prompts│
│  rate limit → auth (API key | JWKS | OAuth 2.1+PKCE) → handlers   │
│                       │                                          │
│  ┌────────────────────▼───────────────────┐                      │
│  │   MiniSearch (BM25) + embeddings cos   │                      │
│  │   + RAP facets / usageCount boost      │                      │
│  └────────────────────┬───────────────────┘                      │
│                       │                                          │
│  ┌────────────────────▼───────────────────┐                      │
│  │   DataSource (Local | Remote)          │                      │
│  │   • sibling cds_kb_data auto-detect    │                      │
│  │   • ETag cache / SWR when remote       │                      │
│  └─────────┬───────────────────┬──────────┘                      │
└────────────┼───────────────────┼─────────────────────────────────┘
             │                   │
       ┌─────▼────┐         ┌────▼──────────────┐
       │ Local FS │         │ GitHub Contents / │
       │ cds_kb_  │         │ raw.githubusercontent │
       │ data/    │         └───────────────────┘
       │ (+ overlays/private)                   │
       └──────────┘
```
