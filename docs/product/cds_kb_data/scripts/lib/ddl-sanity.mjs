// scripts/lib/ddl-sanity.mjs
// Guards against writing non-DDL content into the knowledge base — added
// after a live incident (2026-08-10): a vsp CLI fetch batch ran with an
// already-expired SAP session cookie, vsp.exe returned an HTTP 200 SAML SSO
// login redirect page instead of an error (so the batch's own consecutive-
// failure cookie-expiry detection never tripped, since it only checked the
// process exit code and whether stdout was non-empty), and the pipeline
// wrote that raw HTML into 799 view files as if it were real DDL — field
// names even got "parsed" out of the page's inline JavaScript
// (`+escape(url)+&quot`, `secure`, `partitioned&quot`).
//
// Both fetch time (run-vsp-batch.mjs's fetchBatch) and apply time
// (apply_vsp_ddl.mjs) call these, so a bad response is rejected at whichever
// layer sees it first — apply_vsp_ddl.mjs can also be invoked directly
// against pre-fetched files that never went through fetchBatch's check.

/**
 * A real ABAP CDS DDL source always contains a `define ...` statement
 * (define view / define view entity / define abstract entity / ...); an
 * HTML error or login-redirect page starts with '<' and never does.
 */
export function looksLikeAbapDdl(text) {
  const trimmed = (text || '').trim();
  if (!trimmed) return false;
  if (trimmed.startsWith('<')) return false; // HTML/XML, not DDL
  return /\bdefine\b/i.test(trimmed);
}

// Real ABAP identifiers (field names, table/view names) are a letter or
// underscore followed by letters/digits/underscores — nothing else, no
// punctuation like the '+', '(', ')', '&', or quote characters that showed
// up in the SAML-page incident's "parsed" field names.
const ABAP_IDENTIFIER_RE = /^[A-Za-z_]\w*$/;
export function isValidAbapIdentifier(name) {
  return typeof name === 'string' && ABAP_IDENTIFIER_RE.test(name);
}
