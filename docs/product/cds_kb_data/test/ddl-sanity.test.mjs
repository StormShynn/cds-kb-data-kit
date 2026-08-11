// test/ddl-sanity.test.mjs
// Regression tests for scripts/lib/ddl-sanity.mjs, written from the real
// 2026-08-10 incident: a vsp CLI fetch batch ran with an expired SAP session
// cookie, vsp.exe returned an HTTP 200 SAML SSO login redirect page instead
// of an error, and the pipeline wrote that raw HTML into 799 view files as
// if it were real DDL. The fixture below is that actual page (trimmed),
// pulled from one of the affected view files before it was reverted.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { looksLikeAbapDdl, isValidAbapIdentifier } from '../scripts/lib/ddl-sanity.mjs';

const REAL_SAML_REDIRECT_PAGE = `<html><head><meta http-equiv="cache-control" content="no-cache" /></head><body onload="javascript:var url=window.location.hash;if(url&&(0!==url.length)){document.cookie=&quot;anchor=&quot;+escape(url)+&quot;; path=/; secure; samesite=none; partitioned&quot;}document.forms[0].submit()"><form method="POST" action="https://accounts.cloud.sap/saml2/idp/sso"><input type="hidden" name="SAMLRequest" value="abc123"></form></body></html>`;

test('looksLikeAbapDdl rejects the exact SAML login page that caused the 2026-08-10 incident', () => {
  assert.equal(looksLikeAbapDdl(REAL_SAML_REDIRECT_PAGE), false);
});

test('looksLikeAbapDdl rejects any HTML/XML response', () => {
  assert.equal(looksLikeAbapDdl('<?xml version="1.0"?><error>not found</error>'), false);
  assert.equal(looksLikeAbapDdl('<!DOCTYPE html><html><body>404</body></html>'), false);
});

test('looksLikeAbapDdl rejects empty/whitespace-only content', () => {
  assert.equal(looksLikeAbapDdl(''), false);
  assert.equal(looksLikeAbapDdl('   \n  '), false);
  assert.equal(looksLikeAbapDdl(undefined), false);
});

test('looksLikeAbapDdl accepts real DDL regardless of which define/entity variant it uses', () => {
  assert.equal(looksLikeAbapDdl(`@EndUserText.label: 'X'\ndefine view I_Foo as select from bar { key id }`), true);
  assert.equal(looksLikeAbapDdl(`define root abstract entity D_FooP { key id : matnr; }`), true);
  assert.equal(looksLikeAbapDdl(`// leading comment\ndefine view entity C_Foo as projection on I_Foo { key id }`), true);
});

test('isValidAbapIdentifier rejects the exact garbage field names parsed out of the SAML page', () => {
  assert.equal(isValidAbapIdentifier('+escape(url)+&quot'), false);
  assert.equal(isValidAbapIdentifier('partitioned&quot'), false);
});

test('isValidAbapIdentifier accepts real field/table names', () => {
  assert.equal(isValidAbapIdentifier('MATNR'), true);
  assert.equal(isValidAbapIdentifier('ProductType'), true);
  assert.equal(isValidAbapIdentifier('_Text'), true);
});

test('isValidAbapIdentifier rejects non-string input without throwing', () => {
  assert.equal(isValidAbapIdentifier(undefined), false);
  assert.equal(isValidAbapIdentifier(null), false);
  assert.equal(isValidAbapIdentifier(42), false);
});
