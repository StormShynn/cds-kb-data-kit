// worker/test-propose-sanitize.mjs — focused unit checks (no Cloudflare runtime)
import {
  sanitizeProposeIssueBody,
  proposeLogHint,
  MAX_BODY_LENGTH,
  MAX_TITLE_LENGTH,
} from './src/propose-sanitize.mjs';

let failed = 0;
function assert(cond, msg) {
  if (!cond) {
    console.error('FAIL:', msg);
    failed++;
  } else {
    console.log('ok:', msg);
  }
}

const good = sanitizeProposeIssueBody({
  title: 'Query library: Open POs',
  body: '## Propose\n```json\n{"title":"x"}\n```',
  kind: 'query',
});
assert(good.ok && good.value.kind === 'query' && !good.value.honeypotHit, 'accepts valid query propose');

const cds = sanitizeProposeIssueBody({
  title: 'CDS: Z_CUSTOM_VIEW',
  markdown: 'define view entity Z_CUSTOM_VIEW as select from …',
  kind: 'cds',
});
assert(cds.ok && cds.value.kind === 'cds' && cds.value.body.includes('define view'), 'accepts cds via markdown field');

const badKind = sanitizeProposeIssueBody({ title: 't', body: 'b', kind: 'pr' });
assert(!badKind.ok && badKind.status === 400, 'rejects unknown kind');

const empty = sanitizeProposeIssueBody({ title: '', body: 'x' });
assert(!empty.ok, 'rejects empty title');

const honeypot = sanitizeProposeIssueBody({
  title: 'spam',
  body: 'spam',
  website: 'http://bot.example',
});
assert(honeypot.ok && honeypot.value.honeypotHit, 'honeypot returns soft-ok');

const secret = sanitizeProposeIssueBody({
  title: 'leak',
  body: 'token ghp_abcdefghijklmnopqrstuvwxyz0123456789',
  kind: 'query',
});
assert(!secret.ok, 'rejects ghp_ token pattern');

const bearer = sanitizeProposeIssueBody({
  title: 'auth',
  body: 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.aaa.bbb',
  kind: 'query',
});
assert(!bearer.ok, 'rejects bearer token pattern');

const longTitle = sanitizeProposeIssueBody({
  title: 'x'.repeat(MAX_TITLE_LENGTH + 1),
  body: 'ok',
  kind: 'query',
});
assert(!longTitle.ok, 'rejects oversized title');

const longBody = sanitizeProposeIssueBody({
  title: 'ok',
  body: 'y'.repeat(MAX_BODY_LENGTH + 1),
  kind: 'query',
});
assert(!longBody.ok, 'rejects oversized body');

const hint = proposeLogHint(good.value);
assert(hint.includes('kind=query') && !hint.includes('Propose'), 'log hint omits body text');

if (failed) {
  console.error(`\n${failed} failure(s)`);
  process.exit(1);
}
console.log('\nAll propose-sanitize checks passed.');
