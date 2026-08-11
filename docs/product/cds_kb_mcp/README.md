# cds-kb-mcp

A **dataless** MCP server that gives AI agents instant, ranked access to **7,355 SAP S/4HANA released CDS views** via semantic search, business taxonomy, and on-demand definition retrieval.

> **TL;DR:** No installation, no data download, no cloning required. The server is centrally hosted remotely. If your MCP client supports Streamable HTTP natively, point it straight at the `/mcp` URL. Otherwise, configure it to connect via `supergateway` using the provided `/sse` URL — a fallback URL is available if the primary is unreachable. See [Client Configuration](#client-configuration).

**Benchmark vs. raw file access:** ~830× faster, ~94× cheaper in tokens, better top-3 relevance — full numbers in [BENCHMARK.md](./BENCHMARK.md).

---

## Table of Contents

- [What you get](#what-you-get)
- [Prerequisites](#prerequisites)
- [Client Configuration](#client-configuration) — The ONLY step needed to start using the MCP
- [Tools Reference](#tools-reference)
- [Architecture](#architecture)

---

## What you get

|                     |                                                                                                            |
| ------------------- | ---------------------------------------------------------------------------------------------------------- |
| **Coverage**        | 7,355 released CDS views for S/4HANA Cloud Public Edition                                                  |
| **Enrichment**      | 7,160 / 7,355 views have a semantic description + synonyms                                                 |
| **Taxonomy**        | 12 Lines of Business → 829 Business Objects → keyword map                                                  |
| **Search ranking**  | Field-boosted MiniSearch (`name×3`, `semanticDescription×2.5`, `synonyms×2`)                               |
| **Module aliasing** | Filter by `"Finance"` / `"Procurement"` / `"Sales"` instead of `FI` / `MM` / `SD`                          |
| **Tools**           | 5 MCP tools: `search_cds`, `get_cds_view`, `get_views_by_tag`, `get_taxonomy`, `kb_info`                   |
| **Bundle**          | Single ~1.9 MB `.mjs` file (unminified), Node ≥ 18, zero runtime deps to install                           |
| **Data isolation**  | The server ships **no view data**. Data lives in a separate repo, served over GitHub or via a local clone. |

---

## Prerequisites

Before configuring your client, ensure your local machine meets the following requirements:

1. **Node.js**: Only needed for Option 1/2 (the `supergateway` bridge). Option 0 (direct Streamable HTTP) needs nothing installed — the client talks to the URL itself. If you do need Node, minimum version **Node.js v18** or above — verify with `node -v`.
2. **Network Connectivity**:
   - Outbound HTTPS access to the hosted server — primary: `https://cds-kb-mcp-production.up.railway.app`, fallback: `https://cds-kb-mcp.cfapps.ap21.hana.ondemand.com`
   - Option 1/2 only: access to `registry.npmjs.org` to fetch `supergateway`. If your machine is behind a corporate firewall/VPN/proxy that blocks npm registry downloads, either use Option 0 instead, or use the global installation method (**Option 2** below).
3. **Compatible IDE**: An IDE supporting MCP (e.g. Cursor, Claude Desktop, VS Code, Gemini IDE, Claude Code).

---

## Client Configuration

Because the MCP server is hosted remotely, **you do not need to clone this repository or install any local dependencies**.

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

The server exposes **five tools**. They are designed so an AI agent can go from a vague business question to a complete CDS view definition in two or three calls.

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

### 5. `kb_info`

Report the active data source, view count, enrichment coverage, and index build timestamp. Use this to verify which version of the KB you're talking to.

```text
source: remote:https://raw.githubusercontent.com/StormShynn/cds-kb-data/main (authenticated GitHub Contents API, cache ~/.cache/cds-kb/...)
views: 7355
enriched: 7160
modules: 31
builtAt: 2026-06-25T09:13:52.301Z
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
│  ┌───────────┐ ┌───────────┐ ┌───────────┐ ┌───────────┐         │
│  │ search_cds│ │ get_view  │ │ taxonomy  │ │ kb_info   │  ...    │
│  └─────┬─────┘ └─────┬─────┘ └─────┬─────┘ └─────┬─────┘         │
│        └─────────────┴─────────────┴─────────────┘               │
│                       │                                          │
│  ┌────────────────────▼───────────────────┐                      │
│  │   MiniSearch (in-memory, 5.7 MB index) │                      │
│  └────────────────────┬───────────────────┘                      │
│                       │                                          │
│  ┌────────────────────▼───────────────────┐                      │
│  │   DataSource (Local | Remote)          │                      │
│  │   • ETag-validated cache               │                      │
│  │   • Atomic writes, SWR, retry          │                      │
│  └─────────┬───────────────────┬──────────┘                      │
└────────────┼───────────────────┼─────────────────────────────────┘
             │                   │
       ┌─────▼────┐         ┌────▼──────────────┐
       │ Local FS │         │ GitHub Raw / CDN  │
       │ cds-kb-  │         │ raw.github...     │
       │ data/    │         └───────────────────┘
       └──────────┘
```
