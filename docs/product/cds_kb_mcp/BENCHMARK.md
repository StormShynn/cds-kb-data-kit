# Benchmark — cds-kb-mcp vs. file-based KB

Head-to-head comparison between `cds-kb-mcp` (the dataless MCP) and the naive baseline: letting an AI agent `grep` + `Read` raw markdown files from the same knowledge base (7,355 CDS views, identical data).

**Use case under test:** find CDS views to build an **AR / AP aging & open-items report** for SAP S/4HANA Cloud Public Edition. Five queries cover the full report scope:

| # | Query | Intent |
|--:|---|---|
| 1 | AR open items | Customer receivable open line items |
| 2 | AP open items | Vendor / supplier payable open line items |
| 3 | Aging / overdue | Days-past-due bucket data |
| 4 | Clearing / cleared line items | BSID / BSAD / BSIK / BSAK semantics |
| 5 | BP master data | Customer ↔ Business Partner mapping |

Each query asks for top-10 views; the top hit is then followed up with a `get_cds_view` to fetch the actual definition (mimicking a real retrieval loop).

---

## 1. Headline results

| Metric | File-based (grep + read) | **cds-kb-mcp** | Ratio |
|---|---:|---:|---:|
| Wall-clock time | 15,763 ms | **19 ms** | **~830× faster** |
| Total tokens (end-to-end) | 434,937 | **4,638** | **~94× cheaper** |
| Setup tokens (one-shot) | 59,816 (README + taxonomy) | 0 | — |
| Per-query tokens (avg) | ~74,900 | ~785 + ~490 follow-up | ~58× |
| Precision @ top-3 (qualitative) | 2 / 5 | **4–5 / 5** | — |

> The MCP saves ~94× tokens *and* ~830× wall-clock time on the same task, with materially better top-3 relevance.

---

## 2. Per-query breakdown

### Token cost

| Query | File method (KB read / tokens) | MCP (search out / follow-up tokens) |
|---|---:|---:|
| AR open items | 448.7 KB / ~114,859 | 403 / 482 |
| AP open items | 336.3 KB / ~86,100 | 402 / 482 |
| Aging / overdue | 490.0 KB / ~125,439 | 382 / 169 |
| Clearing line items | 153.3 KB / ~39,243 | 363 / 168 |
| BP master data | 35.6 KB / ~9,114 | 368 / 1,152 |

### Top-3 views surfaced

Bold = a view that is clearly on-target for the task.

| Query | File-based top-3 | cds-kb-mcp top-3 |
|---|---|---|
| AR open items | `I_OPERATIONALACCTGDOCITEM`, `I_GLACCOUNTLINEITEMSEMTAG`, `DCO_I_RBLPYBLTRANSACITEMTP` | `I_ONETIMEACCOUNTCUSTOMER`, `I_PARKEDOPLACCTGDOCRBLSITEM`, **`I_CAOPENITEMLIST`** |
| AP open items | `I_BR_NFDOCUMENT` (Brazil-specific), `I_PAYMENTTERMSCONDITIONS`, `I_PARKEDOPLACCTGDOCPYBLSITEM` | `I_ONETIMEACCOUNTSUPPLIER`, **`I_PARKEDOPLACCTGDOCPYBLSITEM`**, `I_SUPPLIERINVOICEODN` |
| Aging / overdue | `I_BILLOFEXCHANGE`, `I_HIERRUNTIMEREPRESENTATION`, `I_FINANCIALSTATEMENTLEAFITEM` | `I_BR_DUETYPE`, `I_BR_DUETYPETEXT`, **`I_CAOVERDUEITEM`** |
| Clearing | `I_OPLACCTGDOCITEMCLRGHIST`, `I_WITHHOLDINGTAXITEM`, `I_CACLEARINGSTATUSTEXT` | **`I_CACLEARINGSTATUS`**, **`I_CACLEARINGCATEGORY`**, **`I_CACLEARINGINFORMATION`** |
| BP master | `I_BUSPARTOCCUPATIONTEXT`, `I_BUSINESSPARTNERADDRESSTP_3`, `I_BUSPARTADDRDEPDNTTAXNMBR` | **`I_BUSINESSPARTNERCUSTOMER`**, **`I_CUSTOMER_TO_BUSINESSPARTNER`**, **`I_BUSINESSPARTNER`** |

> The file-based method matches keywords literally — it misses the semantic `I_CAOPENITEMLIST` / `I_CAOVERDUEITEM` views because the words *"open items"* and *"overdue"* never appear together in those filenames. cds-kb-mcp finds them because the index is enriched with `semanticDescription` and `synonyms` (7,160 / 7,355 views enriched).

---

## 3. Why the gap is this large

1. **Pre-built MiniSearch index** with field boosts (`name×3`, `semanticDescription×2.5`, `synonyms×2`) — the file method has no semantic layer, just literal grep.
2. **Tool-shaped output** — MCP returns ranked JSON (`name + path + score + description`, ~80 tokens per hit). A raw `.md` file is 30–60 KB.
3. **Stateless on the AI side** — the 5.7 MB index lives in the MCP process. The agent never has to ingest the taxonomy or per-view markdown to orient itself.

---

## 4. Online vs. offline mode (within cds-kb-mcp)

Two configurations of `cds-kb-mcp` itself measured against the same suite:

| Phase | Online (cold cache) | Online (warm cache) | Offline (`--data`) |
|---|---:|---:|---:|
| Server ready (load index) | ~1,170 ms | 146 ms | ~100 ms |
| MCP `initialize` round-trip | ~1,180 ms | 147 ms | ~5 ms |
| 5 search + 5 get_cds_view | ~2,160 ms | 20.7 ms | 19 ms |
| **Total cold-start workflow** | **~3.3 s** | **~170 ms** | **~120 ms** |
| Token output to AI | 4,371 | 4,371 | 4,371 |

Key takeaways:

- Token cost is **identical** across all three configurations — network traffic stays inside the MCP process and never reaches the AI's context window.
- After warm-up, online mode is functionally indistinguishable from offline mode (~30 ms slower per workflow).
- The one-time cold-start cost (~3 s) is paid once per machine; subsequent runs reuse the cache, validated against upstream via ETag (`If-None-Match` → 304 = no re-download).

---

## 4b. Hybrid search (local embeddings) vs. pure BM25

Added in v2.4.0: `search_mode=hybrid` re-ranks the BM25 shortlist with cosine similarity against local `all-MiniLM-L6-v2` embeddings (built keyless by the data repo; query vectors embed in-process via transformers.js). This section compares the two modes directly — same server, same index, same queries.

**Method:** 12 hand-curated queries, each with one known-good target view (anchored to the view's actual `semanticDescription`). 7 are *literal* (target tokens appear in the name/description) and 5 are *paraphrase* (natural language/synonyms avoiding the name). Every query is answerable — the target appears within the top-50 in at least one mode — so the metrics measure *ranking quality*, not guessability. Each query ran through the live `search_cds` tool (stdio, `--data` local) 3× per mode; median latency reported. Full per-query breakdown + raw JSON: `bench/result_hybrid_vs_bm25.json`.

### Headline results

| Metric | BM25 | Hybrid | Δ |
|---|---:|---:|---:|
| MRR | 0.554 | **0.610** | +0.056 |
| Precision @ 1 | 0.417 | **0.500** | +0.083 |
| Precision @ 3 | 0.667 | 0.667 | 0 |
| Precision @ 5 | 0.750 | 0.667 | −0.083 |
| Precision @ 10 | 0.750 | **0.833** | +0.083 |
| Median latency / query | 33.6 ms | 42.1 ms | +8.5 ms |
| Hybrid cold start (one-time model load) | — | 742 ms | — |

### Where hybrid helps and where it doesn't

- **Rescue case (biggest win):** `"how are customers related to business partners"` → `I_CUSTOMER_TO_BUSINESSPARTNER` moved **#5 → #1** (MRR 0.2 → 1.0). No index token matches "customers related to business partners", so only the vector layer finds it.
- **Ranking lift:** `"receivables that are past due, bucketed by how late they are"` #16 → #10; `"material descriptions in different languages"` #39 → #34.
- **Neutral / slightly worse on exact-match queries:** literal queries stay #1 in both modes; `"document clearing status"` actually slipped #3 → #6 (the general-domain MiniLM dilutes precise tokens like *clearing* vs. *billing*).
- **Hard vocabulary gap is shared, not solved:** 5 of the first 15 candidate paraphrase intents (e.g., "supplier invoices on hold awaiting posting") were *unanswerable in both modes* (target outside top-50) and were dropped. The q8-quantized MiniLM does not generalize to deep SAP-jargon paraphrases beyond the index's enriched `semanticDescription` / `synonyms` — embeddings complement the synonym layer, they don't replace it.

**Verdict:** hybrid buys a modest but real ranking edge on paraphrased intents (~+10% MRR, +8 pt P@1/P@10) for ~+8 ms/query warm latency and a one-time ~0.7 s cold start — a good default when the query comes from an agent's natural language, not from the view's own vocabulary.

---

## 5. Network-resilience features (added in v1.2)

The remote backend now handles real-world network conditions gracefully:

| Feature | Effect |
|---|---|
| `AbortController` timeout per request (default 20 s) | Slow GitHub → fails fast, doesn't hang the session |
| Exponential backoff retry (default 3 attempts) on network errors and 5xx / 408 / 429 | Transient outage no longer breaks the session |
| Terminal 4xx fast-fail (404, 403) | No wasted retries on permanent errors |
| Conditional GET via `ETag` / `If-None-Match` | Cache revalidation returns 304 → no 800 KB re-download |
| Atomic cache writes (`*.tmp` + rename) | `kill -9` mid-write can't corrupt cache |
| JSON parse before persist | A truncated download never overwrites a good cache |
| Stale-while-revalidate | AI never waits on a TTL-expired cache — fresh cache arrives in background |

---

## 6. Reproducing the benchmark

Harness lives in `bench/` at the repo root:

```bash
node bench/bench_mcp.mjs           # MCP, local-mode → bench/result_mcp.json
node bench/bench_files.mjs         # File-based baseline → bench/result_files.json
node bench/bench_mcp_remote.mjs    # MCP, online cold + warm → bench/result_mcp_remote.json
node bench/bench_hybrid_vs_bm25.mjs  # Hybrid (local embeddings) vs. BM25 → bench/result_hybrid_vs_bm25.json
```

Each script writes a JSON report to `bench/*.json` with per-query timings, token estimates, and the actual view names surfaced.

---

## 7. Caveats

- **Token estimate** is `bytes ÷ 4`, not the Anthropic tokenizer. Relative ratios are reliable; absolute counts are approximate. *[Unverified]*
- **Quality scoring is qualitative**, based on SAP S/4HANA naming conventions, not a hand-curated ground truth. *[Inference]*
- Each method ran **once**; no variance measurement. Cold-start MCP load adds ~100 ms one-time on top of network.
- The file-method simulation uses `grep -l`; a smarter grep would not meaningfully cut token cost — the agent still has to read the matching files.
- Online-mode timings reflect a single network and IP geolocation. Real-world cold-start can range from ~1–6 s depending on connectivity. The relative win over the file method is unaffected.
