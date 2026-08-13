// propose-sanitize.mjs — pure request checks for POST /propose-issue
// Kept separate so Node can unit-test without Cloudflare runtime.

export const MAX_TITLE_LENGTH = 200;
export const MAX_BODY_LENGTH = 48_000; // under GitHub's ~65k issue body limit
export const ALLOWED_KINDS = new Set(['query', 'cds']);

/** Cheap patterns that must never land in a public Issue body. */
const SECRET_PATTERNS = [
  /-----BEGIN (?:RSA |EC |OPENSSH |DSA )?PRIVATE KEY-----/i,
  /\b(?:ghp|gho|ghu|ghs|ghr)_[A-Za-z0-9_]{20,}\b/,
  /\bgithub_pat_[A-Za-z0-9_]{20,}\b/,
  /\b(?:sk|pk)-[A-Za-z0-9]{20,}\b/,
  /\b(?:aws)?_?(?:secret)?_?access_?key[_-]?id\s*[:=]\s*\S+/i,
  /\bAKIA[0-9A-Z]{16}\b/,
  /\b(?:password|passwd|pwd|api[_-]?key|client[_-]?secret|authorization)\s*[:=]\s*['"]?[^\s'"]{8,}/i,
  /\bbearer\s+[A-Za-z0-9\-._~+/]+=*/i,
  /\bCF_API_TOKEN\b/i,
];

/**
 * @param {unknown} raw
 * @returns {{ ok: true, value: { title: string, body: string, kind: string, honeypotHit: boolean } }
 *         | { ok: false, error: string, status?: number }}
 */
export function sanitizeProposeIssueBody(raw) {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) {
    return { ok: false, error: 'Invalid JSON body', status: 400 };
  }

  // Honeypot: common bot field names. If filled, caller should pretend success.
  const honeypot =
    String(raw.website || raw.company || raw.url || raw.hp || '').trim();
  if (honeypot) {
    return {
      ok: true,
      value: {
        title: '',
        body: '',
        kind: 'query',
        honeypotHit: true,
      },
    };
  }

  const title = String(raw.title || '').trim();
  const body = String(raw.body ?? raw.markdown ?? '').trim();
  const kindRaw = String(raw.kind || 'query').trim().toLowerCase();
  const kind = ALLOWED_KINDS.has(kindRaw) ? kindRaw : '';

  if (!title) return { ok: false, error: 'title is required', status: 400 };
  if (!body) return { ok: false, error: 'body is required', status: 400 };
  if (!kind) return { ok: false, error: 'kind must be query or cds', status: 400 };
  if (title.length > MAX_TITLE_LENGTH) {
    return { ok: false, error: `title exceeds ${MAX_TITLE_LENGTH} characters`, status: 400 };
  }
  if (body.length > MAX_BODY_LENGTH) {
    return { ok: false, error: `body exceeds ${MAX_BODY_LENGTH} characters`, status: 400 };
  }

  for (const re of SECRET_PATTERNS) {
    if (re.test(title) || re.test(body)) {
      return {
        ok: false,
        error: 'Body looks like it contains a secret or credential — remove it and retry',
        status: 400,
      };
    }
  }

  return {
    ok: true,
    value: { title, body, kind, honeypotHit: false },
  };
}

/** Redacted one-line log hint — never include full body. */
export function proposeLogHint(value) {
  if (!value || value.honeypotHit) return 'honeypot';
  return `kind=${value.kind} titleLen=${(value.title || '').length} bodyLen=${(value.body || '').length}`;
}
