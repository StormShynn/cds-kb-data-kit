# cds-kb-mcp

A **dataless** MCP server that gives AI agents instant, ranked access to SAP
S/4HANA CDS views via semantic search, business taxonomy, and on-demand
definition retrieval. In this harness it sits beside
[`../cds_kb_data`](../cds_kb_data) and auto-uses that tree when present.

> **TL;DR (end users):** Prefer the hosted server — no install. Point a Streamable
> HTTP client at `/mcp`, or bridge `/sse` with `supergateway`. See
> [Client Configuration](#client-configuration).
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
| **Search ranking**  | Field-boosted MiniSearch (`name×3`, `semanticDescription×2.5`, `synonyms×2`)                               |
| **Module aliasing** | Filter by `"Finance"` / `"Procurement"` / `"Sales"` instead of `FI` / `MM` / `SD`                          |
| **Tools**           | 7 MCP tools: `search_cds`, `get_cds_view`, `get_views_by_tag`, `get_taxonomy`, `get_views_by_field`, `get_view_dependencies`, `kb_info` |
| **Bundle**          | Single ~1.9 MB `.cjs` file (unminified), Node ≥ 18                                                          |
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

1. **Node.js**: Only needed for Option 1/2 (the `supergateway` bridge) or local stdio. Option 0 (direct Streamable HTTP) needs nothing installed — the client talks to the URL itself. If you do need Node, minimum version **Node.js v18** or above — verify with `node -v`.
2. **Network Connectivity**:
   - Outbound HTTPS access to the hosted server — primary: `https://cds-kb-mcp-production.up.railway.app`, fallback: `https://cds-kb-mcp.cfapps.ap21.hana.ondemand.com`
   - Option 1/2 only: access to `registry.npmjs.org` to fetch `supergateway`. If your machine is behind a corporate firewall/VPN/proxy that blocks npm registry downloads, either use Option 0 instead, or use the global installation method (**Option 2** below).
3. **Compatible IDE**: An IDE supporting MCP (e.g. Cursor, Claude Desktop, VS Code, Gemini IDE, Claude Code).

---

## Client Configuration

Because the MCP server is hosted remotely, **most end users do not need to clone this repository or install any local dependencies**. For harness/local wiring, see [Harness monorepo (local)](#harness-monorepo-local) above.

The server exposes two transports side by side — pick whichever your client supports, both hit the same tools/data:

- **`/mcp` (Streamable HTTP)** — the current MCP transport spec. Connect directly with just a URL, no extra process. Use this if your client (Claude Code, recent Claude Desktop/Cursor/VS Code builds, etc.) supports remote MCP servers natively.
- **`/sse` (legacy SSE)** — the older transport. For clients that only speak local stdio, bridge it with the `supergateway` package as shown below.

Two hosted endpoints are available for either transport — start with **Primary**, and switch to **Fallback** only if the primary is unreachable from your network.

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

Locks the `supergateway` version to `2.0.0`. This works on all devices with Node.js v18 or above, and prevents NPM from dynamically fetching the latest v3.x which requires Node v20+.

Add one of these blocks to your `mcpServers` configuration file (e.g., `claude_desktop_config.json` or `mcp_config.json`):

**Primary:**

```json
{
  "mcpServers": {
    "cds-kb": {
      "command": "npx",
      "args": [
        "-y",
        "supergateway@2.0.0",
        "--sse",
        "https://cds-kb-mcp-production.up.railway.app/sse"
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
        "supergateway@2.0.0",
        "--sse",
        "https://cds-kb-mcp.cfapps.ap21.hana.ondemand.com/sse"
      ]
    }
  }
}
```

### Option 2: Global Installation (Offline & Network-Resilient)

Best for enterprise environments behind corporate firewalls, VPNs, or proxy servers where running `npx` dynamically on every IDE startup might fail or time out.

1. Install `supergateway` globally on your machine once:

   ```bash
   npm install -g supergateway@2.0.0
   ```

2. Update your IDE's `mcpServers` configuration to call the globally installed binary directly (no `npx`):

   **Primary:**

   ```json
   {
     "mcpServers": {
       "cds-kb": {
         "command": "supergateway",
         "args": [
           "--sse",
           "https://cds-kb-mcp-production.up.railway.app/sse"
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
           "--sse",
           "https://cds-kb-mcp.cfapps.ap21.hana.ondemand.com/sse"
         ]
       }
     }
   }
   ```

   *(Note for Windows users: If your IDE cannot locate the global command, use `supergateway.cmd` as the command, or specify the absolute path to your global `npm` prefix).*

Once configured, restart your IDE. The tools will immediately be available for your agent to use.

---

## Tools Reference

The server exposes **seven tools**. They are designed so an AI agent can go from a vague business question to a complete CDS view definition in two or three calls.

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

Returns: ranked list with `name`, `score`, `module`, short description, and path.

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

Report the active data source, view count, enrichment coverage, and index build timestamp. Use this to verify which version of the KB you're talking to.

```text
source: local:D:\...\docs\product\cds_kb_data
views: 10617
enriched: 3267
modules: ...
builtAt: 2026-08-11T08:58:41.307Z
```

---

## Architecture

```text
┌──────────────────────────────────────────────────────────────────┐
│                         AI Client (Claude)                       │
│              search_cds("vendor open items", "FI")               │
└──────────────────────────┬───────────────────────────────────────┘
                           │  MCP / JSON-RPC — stdio, or HTTP via /mcp (Streamable HTTP) / /sse (legacy SSE)
┌──────────────────────────▼───────────────────────────────────────┐
│                   cds-kb-mcp (this server)                       │
│  tools: search_cds · get_cds_view · get_views_by_tag · …         │
│                       │                                          │
│  ┌────────────────────▼───────────────────┐                      │
│  │   MiniSearch (in-memory index)         │                      │
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
       └──────────┘
```
