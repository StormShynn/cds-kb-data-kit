# Product Docs

This directory contains current consumer-product behavior derived from real
accepted intent. Harness deliberately ships no fake product domains.

## CDS knowledge base (this harness)

Two sibling product folders form one stack:

| Folder | Role |
|---|---|
| `cds_kb_data/` | Data + fetch/tag/enrich pipeline (`views/`, `index/`) |
| `cds_kb_mcp/` | Dataless MCP server; auto-reads sibling `cds_kb_data` when present |

Local link: from `cds_kb_mcp/`, run `npm start` (or `npm run start:local`) — the
server resolves `../cds_kb_data` before falling back to the public GitHub remote.
Hosted deploys still set `CDS_KB_REMOTE` explicitly (see `cds_kb_mcp/render.yaml`).

When a user provides a product specification, derive smaller living documents
here instead of keeping one growing specification as the operating manual. Name
files after actual product domains, such as `overview.md`, `billing.md`,
`permissions.md`, or `api-conventions.md`.

## Current Product Contract

No consumer-specific product contract is shipped in this generic directory.
The upstream `repository-harness` contract lives in the root README, current
workflow and architecture documents, lasting decisions, optional orchestration
contract, implementation, and executable tests.

## Update Rule

When behavior changes:

1. Update the affected product document when the expected behavior changed.
2. Update the active execution plan when complex work uses one.
3. Add a lasting decision only when future work must inherit a consequential
   product, architecture, data, security, compatibility, or validation choice.
4. Add or update executable proof that exercises the behavior.

Bounded changes do not require a story packet, proof-matrix row, or Harness CLI
mutation.
