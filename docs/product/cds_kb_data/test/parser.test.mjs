// test/parser.test.mjs
// Regression tests for src/parser.mjs. Node's built-in test runner — no new
// dependency, just `node --test` (see package.json's "test" script).
//
// Every fixture here traces back to a real bug found and fixed by hand this
// session, spot-checked against one real view at the time with no way to
// re-check it automatically afterward. Written up as fixtures so the next
// change to parser.mjs's regexes gets a fast, repeatable answer to "did I
// just reintroduce one of these?" instead of requiring another manual
// spot-check against live data.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { parseDDL } from '../src/parser.mjs';

test('parses a plain view: key fields, filter, source table, label', () => {
  const ddl = `
    @EndUserText.label: 'Simple Test View'
    define view C_SimpleTest
      as select from I_SourceView
    {
      key CompanyCode,
      key FiscalYear,
      Currency,
      Amount
    }
  `;
  const view = parseDDL(ddl, { viewName: 'C_SimpleTest' });
  assert.equal(view.name, 'C_SIMPLETEST');
  assert.equal(view.label, 'Simple Test View');
  assert.equal(view.sourceTable, 'I_SourceView');
  assert.deepEqual(view.fields.map(f => f.name), ['CompanyCode', 'FiscalYear', 'Currency', 'Amount']);
  assert.equal(view.fields[0].isKey, true);
  assert.equal(view.fields[2].isKey, false);
});

test('renamed field via "as" keeps both the alias and the source expression', () => {
  const ddl = `
    define view C_Rename as select from I_Source {
      key MaterialID,
      vwerk as SupplyingPlant,
      cast( WBSElementInternalID as mat_pspnr preserving type ) as WBSElementInternalID
    }
  `;
  const view = parseDDL(ddl, { viewName: 'C_Rename' });
  const plant = view.fields.find(f => f.name === 'SupplyingPlant');
  assert.ok(plant, 'SupplyingPlant field should be parsed');
  assert.equal(plant.expression, 'vwerk');
  const wbs = view.fields.find(f => f.name === 'WBSElementInternalID');
  assert.ok(wbs, 'cast-wrapped field should still be parsed under its outer alias');
  assert.match(wbs.expression, /^cast/i);
});

test('association declared and used in the select list is merged into one entry', () => {
  const ddl = `
    define view C_WithAssoc
      as select from I_Source
      association [0..1] to I_CompanyCode as _CompanyCode
        on $projection.CompanyCode = _CompanyCode.CompanyCode
    {
      key CompanyCode,
      _CompanyCode.CompanyCodeName as CompanyCodeName,
      _CompanyCode
    }
  `;
  const view = parseDDL(ddl, { viewName: 'C_WithAssoc' });
  assert.equal(view.associations.length, 1);
  const assoc = view.associations[0];
  assert.equal(assoc.alias, '_CompanyCode');
  assert.equal(assoc.targetView, 'I_CompanyCode');
  assert.equal(assoc.isInSelect, true);
  assert.match(assoc.onCondition, /CompanyCode = _CompanyCode\.CompanyCode/);
  // The flattened field through the association is a field, not a second association.
  assert.ok(view.fields.some(f => f.name === 'CompanyCodeName'));
});

test('redirected association is recorded as an association, not a field', () => {
  const ddl = `
    define view C_Redirect as projection on I_BusinessPartnerTP {
      key BusinessPartner,
      _BusinessPartner : redirected to parent I_BusinessPartnerTP_3
    }
  `;
  const view = parseDDL(ddl, { viewName: 'C_Redirect' });
  assert.ok(view.associations.some(a => a.alias === '_BusinessPartner'));
  assert.ok(!view.fields.some(f => f.name === '_BusinessPartner'));
});

test('comments (//, --, /* */) never leak into field names', () => {
  const ddl = `
    define view C_Comments as select from I_Source {
      key ID, // trailing line comment
      -- a field disabled the SAP way
      -- DisabledField,
      /* block comment
         spanning lines */
      ActiveField
    }
  `;
  const view = parseDDL(ddl, { viewName: 'C_Comments' });
  assert.deepEqual(view.fields.map(f => f.name), ['ID', 'ActiveField']);
});

test('nested-bracket annotation value does not corrupt the next field (regression)', () => {
  // Real shape seen in production DDL: a field-level annotation whose value
  // is an array containing an object, itself containing a nested array. A
  // single non-nested regex (\\[[^\\]]*\\]) stops at the FIRST `]` — the
  // inner array's, not the outer one's — leaving "}]" glued onto whatever
  // follows. Fixed by stripLeadingAnnotations' bracket-depth-aware scan.
  // No blank line/space between the annotation's closing "}]" and the field
  // name that follows it — the exact real-DDL formatting this bug needed to
  // actually corrupt something. With a newline in between (easy to test
  // with by accident), the old parser's "last identifier" fallback masked
  // the bug entirely (glued "}]AccountingDocument" still split on the
  // newline as a separate "word" from the garbage), so a looser fixture
  // here would silently test nothing.
  const ddl = `
    define view C_NestedAnnotation as select from I_Source {
      key ID,
      @Consumption.valueHelpDefinition: [{
        entity: { name: 'I_Currency', element: 'Currency' },
        additionalBinding: [{ localParameter: 'P_X', element: 'X' }]
      }]AccountingDocument,
      NextField
    }
  `;
  const view = parseDDL(ddl, { viewName: 'C_NestedAnnotation' });
  assert.deepEqual(view.fields.map(f => f.name), ['ID', 'AccountingDocument', 'NextField']);
});

test('a bracket-valued annotation inside "with parameters" does not get mistaken for the select-list start (regression)', () => {
  // Real bug found and fixed this session: findSelectListStart only handled
  // a `{`-rooted annotation value; a `[`-rooted one spanning multiple lines
  // (this exact shape) fell through to "skip to end of this line", after
  // which the *next* line's "entity:{" was mistaken for the select list's
  // opening brace — truncating every real field to ~2 bogus ones parsed out
  // of the annotation's own body instead.
  const ddl = `
    define view C_ParamAnnotation
      with parameters
        @Consumption.valueHelpDefinition: [{
           entity:{name: 'I_Currency', element :'Currency'}
        }]
        P_DisplayCurrency : vdm_v_display_currency
      as select from I_Source(P_DisplayCurrency: $parameters.P_DisplayCurrency)
    {
      key ID,
      Amount,
      Currency,
      Description
    }
  `;
  const view = parseDDL(ddl, { viewName: 'C_ParamAnnotation' });
  assert.deepEqual(view.fields.map(f => f.name), ['ID', 'Amount', 'Currency', 'Description']);
});

test('"define abstract entity" colon-typed fields parse as fields with a type expression, not associations', () => {
  const ddl = `
    define abstract entity C_AbstractParams {
      RequestID   : abp_request_id;
      IsSuccess   : abap_boolean;
      ErrorMessage: abap.string(0);
    }
  `;
  const view = parseDDL(ddl, { viewName: 'C_AbstractParams' });
  assert.deepEqual(view.fields.map(f => f.name).sort(), ['ErrorMessage', 'IsSuccess', 'RequestID'].sort());
  const requestId = view.fields.find(f => f.name === 'RequestID');
  assert.equal(requestId.expression, 'abp_request_id');
});

test('a DDL that parses to zero fields (e.g. an empty/parameter-only body) is reported, not silently defaulted', () => {
  const ddl = `
    define view C_Empty as select from I_Source {
    }
  `;
  const view = parseDDL(ddl, { viewName: 'C_Empty' });
  assert.equal(view.fields.length, 0);
});
