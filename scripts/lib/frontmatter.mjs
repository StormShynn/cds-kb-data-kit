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

/**
 * Unwrap one scalar value read off a frontmatter line. Free-text fields
 * (description, semantic_en/vi, keywords) are written by src/template.mjs's
 * yamlScalar() as real JSON-style double-quoted strings (needed so github.com's
 * YAML-based frontmatter renderer doesn't choke on an embedded ": ") — for
 * those, JSON.parse recovers the original text with escapes undone (a bare
 * strip would leave literal `\"...\"` and `\\n` sequences in place). Older,
 * not-yet-regenerated files (and structured fields like release_state that
 * were never quoted at all) fall back to the previous plain strip.
 */
function unquoteScalar(raw) {
  const trimmed = raw.trim();
  if (trimmed.length >= 2 && trimmed[0] === '"' && trimmed[trimmed.length - 1] === '"') {
    try { return JSON.parse(trimmed); } catch { /* not valid JSON — fall through */ }
  }
  return trimmed.replace(/^['"]|['"]$/g, '').trim();
}

/** Read a single `key: value` scalar out of a frontmatter block. */
export function scalar(fm, key) {
  const m = fm.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'));
  if (!m) return '';
  return unquoteScalar(m[1]);
}

/** Read a YAML block-list (`key:\n  - a\n  - b`) out of a frontmatter block. */
export function listBlock(fm, key) {
  const m = fm.match(new RegExp(`^${key}:\\r?\\n((?:[ \\t]*-[ \\t].*\\r?\\n?)*)`, 'm'));
  if (!m) return [];
  return m[1].split('\n').map((l) => unquoteScalar(l.replace(/^[ \t]*-[ \t]+/, ''))).filter(Boolean);
}
