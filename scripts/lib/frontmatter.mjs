// scripts/lib/frontmatter.mjs
// Single source of truth for reading the YAML-ish frontmatter block out of a
// view .md file. Two independent hand-rolled copies of scalar() used to
// exist (enrich_index.mjs and migrate-to-module-folders.mjs) and had already
// drifted: one stripped surrounding quotes from the value, the other didn't
// — so `app_component: "MM-PUR"` and `app_component: MM-PUR` could compare
// unequal depending on which copy ran. This keeps exactly one behavior.

/** Extract the raw text inside a file's leading `---\n...\n---` block. */
export function extractFrontmatter(md) {
  const m = md.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  return m ? m[1] : '';
}

/** Read a single `key: value` scalar out of a frontmatter block. */
export function scalar(fm, key) {
  const m = fm.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'));
  if (!m) return '';
  return m[1].trim().replace(/^['"]|['"]$/g, '').trim();
}

/** Read a YAML block-list (`key:\n  - a\n  - b`) out of a frontmatter block. */
export function listBlock(fm, key) {
  const m = fm.match(new RegExp(`^${key}:\\r?\\n((?:[ \\t]*-[ \\t].*\\r?\\n?)*)`, 'm'));
  if (!m) return [];
  return m[1].split('\n').map((l) => l.replace(/^[ \t]*-[ \t]+/, '').trim()).filter(Boolean);
}
