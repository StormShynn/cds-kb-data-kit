// scripts/lib/html-escape.mjs
// Shared HTML-escaping helper for server-side (Node) HTML generation.
// Not usable for the equivalent inline <script> blocks these reports embed —
// browser-side code can't import a Node module — so an identical copy
// necessarily still lives there as a plain literal.

export function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
