# Design Plan: AI ↔ SAP (read-only) ↔ curated share loop

Date: 2026-08-13

## Status

Active — C1–C4 product decisions locked (incl. C2b no-overwrite /
gap-fill-create); C1 Issue-bot implemented in-repo (go-live = secret +
deploy); **C3 ADT vertical slice implemented in-repo** (mocked tests only;
live SAP DEV validate / deploy still outstanding).

## Outcome

A clear, safe architecture for: agents learn from SAP (read-only) → produce
reusable query/KB artifacts → propose into the curated public library, without
leaking business data or silently mutating SAP or the shared library.

Also settles product truth: Query Builder **Propose** can create a GitHub Issue
via a Worker bot when the visitor is not logged into GitHub (C1), with deep-link
+ clipboard fallback.

## Context

- Completed: `docs/plans/completed/query-library-growth.md`
- cds-kb-mcp is **dataless by default** (search/compose/propose against KB;
  optional `sap_*` tools stay `configured=false` until `SAP_ADT_*` is set)
- Query Builder Propose: Worker `POST /propose-issue` first, then
  `issues/new?title=&body=` deep-link + clipboard fallback;
  template `.github/ISSUE_TEMPLATE/query-library-proposal.yml`
- MCP `propose_query_library_entry`: draft PR only with `GITHUB_TOKEN` +
  `CDS_KB_PROPOSE_REPO`; never merges; path
  `docs/product/cds_kb_data/index/query-library.json`
- Shape telemetry: opt-in anonymous structural metadata only
- Separate skill vision: read-only SAP ABAP export via ADT/RFC MCP (no SAP writes)
- **Existing private overlay:** `docs/product/cds_kb_data/overlays/private/`
  (env `CDS_KB_OVERLAY` override) — merged by `enrich_index.mjs` (private wins)

## Scope

In scope:

- Architecture of the learn → artifact → share loop
- Data classification (MAY leave SAP vs MUST NEVER)
- Agent workflow and smallest vertical slice
- GitHub Issue-without-login truth + **C1 Worker Issue bot**
- Product decisions C1–C4 (**all locked**)

Out of scope (this task — original design pass):

- Auto-merge into `query-library.json`
- Live SAP query execution / row export into the public KB
- Changing generate-query-builder stale guard

C3 follow-up (2026-08-13): thin ADT read-only MCP slice in
`docs/product/cds_kb_mcp` — see Progress / Result. Live SAP DEV validation
remains operator-blocked.

## Approach

### A. Architecture — safe AI ↔ SAP ↔ share loop

```
┌─────────────────┐     read-only      ┌──────────────────────┐
│ SAP DEV (ADT)   │◄───────────────────│ sap-abap-export MCP  │
│ (never PRD)     │   metadata/DDL     │ (agent-facing, later)│
└─────────────────┘                    └──────────┬───────────┘
                                                  │ structural
                                                  │ artifacts only
                                                  ▼
┌─────────────────┐   search/compose   ┌──────────────────────┐
│ Public KB +     │◄───────────────────│ cds-kb-mcp (dataless)│
│ Query Builder   │   propose snippet  │ + Query Builder UI   │
│ (Pages / repo)  │                    └──────────┬───────────┘
└────────▲────────┘                               │
         │ review                                 │ propose
         │ (human)                                ▼
┌────────┴────────┐                    ┌──────────────────────┐
│ Curated library │◄── Issue / draft ──│ Share paths:         │
│ query-library.  │    PR (never auto  │ 1) QB Worker Issue   │
│ json + embed    │    merge)          │ 2) QB deep-link fb   │
│ + curated CDS   │                    │ 3) MCP draft PR      │
└─────────────────┘                    └──────────────────────┘

Private overlay (customer/repo-local): Z*/Y* CDS shapes only (SAP standard
skipped; never overwrite existing custom markdown — C2b), site-specific
filters, unpublished proposals — stay out of the public kit until curated.
Default home: overlays/private/ (see Decisions C2 / C2b).
Missing shapes: create/propose skeletons — do not overlay SAP standard.
```

**Components**

| Component | Role | Writes? |
|-----------|------|---------|
| Live SAP DEV | Source of truth for custom Z*/Y* metadata & DDL | No (read-only MCP) |
| sap-abap-export MCP | ADT export → local/private Git overlay (Z*/Y* only) | Local/private only (later) |
| cds-kb-mcp | Search/compose/propose against **published KB data** | Draft PR only if token set |
| Query Builder | Human compose + local save + Propose (bot → fallback) | Browser + Worker |
| Issue bot Worker | Creates Issues with `GITHUB_ISSUE_TOKEN` | Issues only |
| Issue / draft PR | Intake for curated library | Maintainers merge |
| Private overlay | Customer-specific artifacts | Never auto-published |
| Public library | `query-library.json` + Pages embed (+ curated CDS) | PR-reviewed only |

**Data that MAY be collected / leave SAP (toward private overlay or public propose)**

- CDS/view **names**, packages, object types, release/extensibility signals
- Field names, associations, annotations (structural)
- Sanitized OpenSQL / CDS skeletons with **placeholder** filters (no real keys)
- Query **shape** telemetry (anonymous: view count, has-where, etc.) — already opt-in
- Contributor handle / title / description for a proposal
- Curated custom CDS DDL excerpts under explicit review (C4)

**Data that MUST NEVER leave SAP (especially not into public Issues/PRs/KB)**

- Table/row contents, business documents, PII, financial amounts
- Real WHERE literals (customer numbers, company codes tied to a live tenant, etc.)
- Credentials, cookies, RFC destinations, system hostnames in public artifacts
- Full custom source dumps into the **public** kit without curation
  (private overlay / internal Git is the right home for Z*/Y* DDL)
- SAP-standard delivered objects via the SAP learn path (skip; public KB
  already covers them)

**Agent workflow (target)**

1. Discover need via cds-kb-mcp (`search_cds`, `search_query_library`, …)
2. If gap is custom Z*/Y*: sap-export MCP against DEV (read-only) → private
   overlay with **skip-if-exists** (never overwrite existing custom
   markdown); **skip SAP standard**. If still missing from KB + overlay:
   **create** skeleton / propose entry (C2b) — do not overlay standard SAP.
3. Compose reusable query shape (no live keys) via compose / Query Builder
4. Validate locally (compose warnings, release signals)
5. Propose: Worker Issue bot **or** MCP draft PR **or** QB deep-link/clipboard
6. Human review → merge → `sync-query-library-embed`
7. Optional: anonymous shape ping (opt-in only)

### B. GitHub Issue without login — product truth + C1 path

**Can browser Propose auto-create an Issue if the user is not logged into GitHub?**

**Not from the browser alone.** GitHub requires authentication. Paths:

| Path | Works without user GitHub login? | Who it serves |
|------|----------------------------------|---------------|
| 1. Deep-link `issues/new` | No — login required; body may be lost | Visitors with a GitHub account |
| 2. Clipboard + template fallback | Offline capture yes; Issue still needs login later | All visitors |
| 3. **Worker `/propose-issue` (C1)** | Yes (bot creates Issue) | Public Pages visitors |
| 4. MCP `propose_query_library_entry` + server token | Yes for the **agent host** | MCP agents / operators |

**C1 implementation choice (locked)**

Extend the existing usage collector Worker at
`docs/product/cds_kb_mcp/worker/` (same deploy URL as shape telemetry) with
`POST /propose-issue`. Reuses CORS + Durable Object rate-limit patterns; avoids
a second Worker/account surface. Sibling Worker only if abuse isolation is
needed later.

**Live go-live requirements**

- `wrangler secret put GITHUB_ISSUE_TOKEN` (fine-grained: issues write on
  `PROPOSE_REPO`, or classic `public_repo`)
- Redeploy Worker (`wrangler deploy`)
- `PROPOSE_REPO` defaults to `StormShynn/cds-kb-mcp-data-kit` (wrangler `[vars]`)

### C. Decisions (2026-08-13)

| ID | Decision | Status |
|----|----------|--------|
| **C1** | Build Worker Issue bot so Propose works without visitor GitHub login | **LOCKED YES** — implemented on usage collector Worker |
| **C2** | Keep existing overlay setup; SAP learn scope = **Z* and Y* only**; skip SAP standard | **LOCKED** (2026-08-13) — see below |
| **C2b** | Never overwrite existing custom overlay knowledge; gap-fill by **creating** CDS/query proposals (not overlaying SAP standard) | **LOCKED** (2026-08-13) — refinement of C2 |
| **C3** | SAP systems: **DEV only**, **ADT first**, **no PRD** | **LOCKED** — in-repo vertical slice shipped (mocked); live DEV test pending |
| **C4** | Public library may receive **both** curated query shapes **and** curated custom CDS snippets | **LOCKED** — Issue template + Propose payload carry `kind`: `query` \| `cds` |

#### C2 — LOCKED (2026-08-13): existing overlay + Z*/Y* only

**User decision:** keep the existing setup/process — only consider **Z*** and
**Y*** custom namespaces; **skip SAP standard** objects (“chuẩn bỏ qua”).

**Locked policy**

- Private overlay / SAP learn-export scope follows existing repo conventions
  for custom objects (**Z***, **Y***).
- Do **not** export or propose SAP-standard delivered objects into private
  overlay or the public library via the SAP learn path.
- Default placement remains existing
  `docs/product/cds_kb_data/overlays/private/` (env `CDS_KB_OVERLAY`
  override). Do not invent a new location.

**What “private overlay” means:** a local (or customer-private) folder of CDS
view markdown that `enrich_index.mjs` merges **on top of** the public
`views/**` tree. Same view name → private wins over public KB (merge
priority only — does **not** authorize clobbering existing private
custom markdown on import/sync; see C2b). Artifacts stay out of the
public kit until a human curates a propose. Never auto-published.

**Existing include convention (cite for implementers)**

- `docs/product/cds_kb_data/overlays/README.md` — customer **Z*/Y*** markdown
  under `overlays/private/`; `--overlay` keeps Z* candidates; SAP-standard
  Hub upgrade path skips them.
- `docs/product/cds_kb_data/CONNECTING.md` — private overlay described as
  optional local customer **Z*/Y***; merged with private wins.

**Include rule for SAP learn:** Z* / Y* custom namespaces only.
**Exclude rule:** SAP-standard delivered objects — do not export into overlay
or propose into the public library via this path.

**Placement (unchanged):** `overlays/private/` (+ `CDS_KB_OVERLAY`). External
private Git / machine-local paths remain optional overrides when a customer
forbids any Z*/Y* DDL near the public tree — not a new default.

Do not invent a new private-overlay home; SAP **snapshots** use a separate
gitignored path (`cds_kb_data/.sap_export` or `SAP_ADT_OUTPUT_ROOT`), then
humans promote into `overlays/private/` markdown.

#### C2b — LOCKED (2026-08-13): no overwrite custom knowledge; gap-fill by creating

**User refinement:** do **not** overwrite custom knowledge; if a needed
view/shape is **missing**, **create** CDS views / proposals to enrich
(“làm phong phú”) — not pull/replace SAP-standard source into overlay.

**Locked policy**

- On SAP learn import/sync into private overlay: **never overwrite** existing
  Z*/Y* custom markdown (or other curated overlay entries). Prefer
  **skip-if-exists**; optional new-version / side-by-side only if already
  documented and a non-destructive path is explicit — default remains skip.
- Still C2: only **Z*/Y*** from the SAP learn path; **skip SAP standard**.
- When a needed view/shape is **missing** from public KB **and** private
  overlay: the agent should **generate** a CDS view skeleton and/or
  query-library entry (via `compose_query` / `generate_cds_view` /
  propose) to enrich the public library or proposals queue — **not** by
  overlaying or replacing SAP-standard objects into private overlay.
- C4 unchanged: both query shapes **and** curated CDS snippets may enter
  via propose/review.

## Risks And Recovery

- Risk: visitors think Propose “submitted” when only a tab opened → mitigated by
  Worker success showing `issueUrl`, else clipboard + login fallback copy
- Risk: abuse of Issue bot → per-IP propose rate limit, honeypot, size/secret
  sanitization; never log full body
- Risk: agents paste live WHERE literals → template warning + scrub checklist
- Risk: conflating cds-kb-mcp with live SAP → keep MCP descriptions “dataless”
- Recovery: library remains PR-/Issue-reviewed; revert bad merges; no silent
  auto-merge; revoke `GITHUB_ISSUE_TOKEN` if abused

## Progress

- [x] Design architecture + data policy + vertical slice
- [x] Answer Issue-without-login truthfully
- [x] Product decisions C1–C4 locked (C2 + C2b: overlays/private + Z*/Y* only, skip standard, no overwrite, gap-fill create)
- [x] C1: Worker `POST /propose-issue` + Query Builder prefer-bot then fallback
- [x] C4: Issue template + Propose markdown support `query` | `cds`
- [x] User confirmed C2 (2026-08-13): keep existing overlay; Z*/Y* only; skip chuẩn
- [x] User refined C2b (2026-08-13): never overwrite custom overlay; gap-fill by creating CDS/query proposals
- [x] Tech radar #1: golden eval harness (`scripts/eval-compose.mjs` + fixtures; `npm run test:eval`)
- [x] Tech radar #2: library-first compose (`compose_query` prompt + tool descriptions)
- [x] Tech radar #3: hybrid RRF (replace 0.6/0.4 blend; `src/rrf.mjs` + `npm run test:rrf`)
- [x] C3 thin ADT slice in `cds_kb_mcp` (`src/sap/*`, `sap_*` tools, `npm run test:sap`)
- [ ] Deploy: set a **fine-grained** `GITHUB_ISSUE_TOKEN` (Issues write only)
  + `wrangler deploy`. Local Wrangler is unauthenticated; the repository
  workflow has Cloudflare credentials but lacks this least-privilege token.
- [ ] Live: SAP DEV ADT dry-run + one DDLS export. `SAP_ADT_*`, network
  reachability, and Basis-derived read authorizations are unavailable here.

## Validation

- Unit: `worker/test-propose-sanitize.mjs` (size / honeypot / secret patterns / kind)
- Unit: `cds_kb_mcp/test_rrf.mjs` (RRF fusion / cosine rank helpers)
- Unit: `cds_kb_mcp/npm run test:sap` (config rejection, namespace filter, no-overwrite,
  path containment, deterministic hash, mocked ADT requests)
- Golden: `cds_kb_mcp/npm run test:eval` (frozen search / library / compose intents)
- Focused: Query Builder Propose JS has Worker path + deep-link fallback
- Live: requires deploy + `GITHUB_ISSUE_TOKEN` (document only until operator runs it)
- Live C3: requires `SAP_ADT_*` against approved DEV + Basis auth for ADT DDL read
- Full local validation 2026-08-13: `test:sap`, `test:rrf`, `test:eval`
  (13/13), `npm test`, build, Issue sanitizer, and Worker syntax all pass
- Do not weaken generate-query-builder stale guard

## Result

C1–C4 locked. C2 (2026-08-13): keep `overlays/private/` (+ `CDS_KB_OVERLAY`);
SAP learn include **Z*/Y*** only; skip SAP standard. C2b (2026-08-13): never
overwrite existing custom overlay; if missing, create CDS/query proposals to
enrich — not overlay standard SAP. Issue bot code lives on the usage collector
Worker; go-live needs `GITHUB_ISSUE_TOKEN` + redeploy.

Tech radar shipped in-repo (2026-08-13): golden `search_cds` /
`search_query_library` / `compose_query` eval harness; library-first
`compose_query` prompt + tool copy; hybrid search uses Reciprocal Rank Fusion
over BM25 + cosine ranks (BM25 fallback when embeddings unavailable).

**C3 vertical slice (2026-08-13, in-repo, not live-complete):** optional ADT
tools on cds-kb-mcp (`sap_connection_test` … `sap_diff_snapshot`), env-based
config (DEV/HTTPS/TLS, Z*/Y* only), mocked unit tests, snapshots under
an explicit allowlisted `SAP_ADT_OUTPUT_ROOT` with skip-if-exists. Plan stays
**Active** until live DEV probe + operator auth validation. The broad GitHub CLI
credential was deliberately not reused as a public Worker secret; Issue-bot
deploy still needs a fine-grained token plus Cloudflare authentication.

## Future tech radar (2026-08-13)

Grounded in current stack (MCP 2026-07-28 SDK, MiniSearch + local ONNX
embeddings, Workers + DO SQLite, shape telemetry, Issue bot, abaplint). Not a
roadmap commitment — ranked fit × effort after Issue-bot go-live + ADT slice.

| # | Candidate | Effort | Verdict |
|---|-----------|--------|---------|
| 1 | Golden `compose_query` / search eval harness (frozen intents → expected views/fields/warnings; CI gate) | S–M | **Shipped** — `npm run test:eval` |
| 2 | Library-first compose (prefer `search_query_library` hit before open search) | S | **Shipped** — prompt + tool descriptions |
| 3 | Hybrid fusion: RRF (parallel BM25+vector) ± optional tiny rerank | S / M | **Shipped** RRF (k=60); tiny rerank still later |
| 4 | MCP elicitation / MRTR to clarify LOB/module before compose | M | Later when host clients support reliably |
| 5 | Stronger multilingual embedding (e.g. bge-m3) if VI miss rate high | M | Later — measure first |
| 6 | MCP Tasks for long ADT export jobs | M | Later with C3 scale-up |
| — | MCP Apps, Sampling, ColBERT/Qdrant, Joule/CAP AI, Worker Queues | — | **Skip** for now (redundant or wrong fit) |

Already new enough — do not chase: resources/prompts/`structuredContent`,
Streamable HTTP, MiniSearch hybrid, transformers.js ONNX, DO-backed telemetry,
abaplint validate, propose Issue bot.
