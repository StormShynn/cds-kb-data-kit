# Private overlay (W3a / W5)

Customer / Z* / Y* CDS view markdown files go under [`private/`](private/)
(same frontmatter + sections shape as `views/**/*.md`). Then rebuild:

```bash
node enrich_index.mjs .
# or: npm run rebuild-index
```

## VSP apply into the overlay

To write real DDL from a vsp fetch into the private overlay (not `views/`):

```bash
node scripts/apply_vsp_ddl.mjs --dir <folder-of-NAME.ddl-files> --overlay
# or batch JSON:
node scripts/apply_vsp_ddl.mjs batch.json --overlay
```

`--overlay` sets the write root to `overlays/private` (or `CDS_KB_OVERLAY` if set).
Z*/Y* names default to `release_state: unverified` unless the existing file already has one.
Batch pipeline:

```bash
node scripts/run-vsp-batch.mjs --overlay --count 10 --no-push
```

With `--overlay`, `run-vsp-batch` also **keeps Z\*** candidates (normally skipped for the public Hub upgrade path).

Rules:

- Same view name as a public file → **private wins** (index + `view-paths.json`).
- Override with env `CDS_KB_OVERLAY=/absolute/path/to/overlay`.
- Do not commit secrets, cookies, or customer-only DDL to a public remote.
- Do not put docs named `README.md` inside `private/` — every `.md` there is treated as a view.

Point MCP at the rebuilt local tree (`--data` / sibling auto-detect).

## SAP ADT export snapshots (not view markdown)

Read-only ADT snapshots from cds-kb-mcp `sap_export_snapshot` default to
sibling `cds_kb_data/.sap_export/` (gitignored) — **not** this overlay folder.
Promote reviewed Z*/Y* shapes into `private/` markdown manually (or via
compose/generate/propose). Never auto-merge; never overwrite existing custom
overlay files (skip-if-exists).
