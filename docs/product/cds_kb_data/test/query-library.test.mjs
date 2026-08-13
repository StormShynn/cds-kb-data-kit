import test from 'node:test';
import assert from 'node:assert/strict';
import {
  buildLibraryIndex,
  entryKind,
  featuredLibraryEntries,
  resolveLibraryEntry,
  shapeFingerprint,
  slugifyLibraryId,
} from '../scripts/lib/query-library.mjs';

test('slugifyLibraryId', () => {
  assert.equal(slugifyLibraryId('Open purchase orders'), 'open-purchase-orders');
});

test('resolveLibraryEntry merges variant onto recipe', () => {
  const library = [
    {
      id: 'po-open',
      kind: 'recipe',
      title: 'Open POs',
      views: [{ alias: 't1', name: 'I_PURCHASEORDERAPI01' }],
      select: 'PurchaseOrder, Supplier',
      where: "PurchasingProcessingStatus = '02'",
      orderBy: 'PurchaseOrderDate',
    },
    {
      id: 'po-open-by-supplier',
      kind: 'variant',
      recipeId: 'po-open',
      title: 'Open POs by supplier',
      orderBy: 'Supplier, PurchaseOrderDate',
    },
  ];
  const resolved = resolveLibraryEntry(library[1], library);
  assert.equal(resolved.kind, 'variant');
  assert.equal(resolved.id, 'po-open-by-supplier');
  assert.equal(resolved.recipeId, 'po-open');
  assert.equal(resolved.title, 'Open POs by supplier');
  assert.deepEqual(resolved.views, library[0].views);
  assert.equal(resolved.select, 'PurchaseOrder, Supplier');
  assert.equal(resolved.where, "PurchasingProcessingStatus = '02'");
  assert.equal(resolved.orderBy, 'Supplier, PurchaseOrderDate');
});

test('shapeFingerprint ignores title but sees clause changes', () => {
  const a = {
    views: [{ alias: 't1', name: 'I_SALESORDER' }],
    select: 'SalesOrder',
    orderBy: 'CreationDate DESC',
  };
  const b = { ...a, title: 'Different title' };
  const c = { ...a, orderBy: 'SoldToParty' };
  assert.equal(shapeFingerprint(a), shapeFingerprint(b));
  assert.notEqual(shapeFingerprint(a), shapeFingerprint(c));
});

test('buildLibraryIndex flags missing recipe and featured helper', () => {
  const library = [
    { id: 'a', kind: 'recipe', featured: true, title: 'A', views: [{ name: 'I_A' }], select: 'X' },
    { id: 'b', kind: 'variant', recipeId: 'missing', title: 'B' },
    { id: 'c', kind: 'recipe', title: 'C', views: [{ name: 'I_C' }], select: 'Y' },
  ];
  const index = buildLibraryIndex(library);
  assert.equal(index.count, 3);
  assert.equal(index.entries[0].views[0], 'I_A');
  assert.ok(index.warnings.some((w) => /missing recipe/.test(w)));
  assert.deepEqual(
    featuredLibraryEntries(library).map((e) => e.id),
    ['a'],
  );
  assert.equal(entryKind(library[1]), 'variant');
});
