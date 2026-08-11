# Private overlay (W3a)

Customer / Z* / Y* CDS view markdown files go under [`private/`](private/)
(same frontmatter + sections shape as `views/**/*.md`). Then rebuild:

```bash
node enrich_index.mjs .
# or: npm run rebuild-index
```

Rules:

- Same view name as a public file → **private wins** (index + `view-paths.json`).
- Override with env `CDS_KB_OVERLAY=/absolute/path/to/overlay`.
- Do not commit secrets, cookies, or customer-only DDL to a public remote.
- Do not put docs named `README.md` inside `private/` — every `.md` there is treated as a view.

Point MCP at the rebuilt local tree (`--data` / sibling auto-detect).
