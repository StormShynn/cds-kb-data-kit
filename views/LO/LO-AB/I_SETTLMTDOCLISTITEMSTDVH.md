---
name: I_SETTLMTDOCLISTITEMSTDVH
description: Settlement Document List Item
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCLISTITEMSTDVH')/$value
semantic_en: Settlement Document List Item
tags:
  - LO
  - component:LO-AB
  - document
  - interface-view
  - LO-AB
  - lob:logistics general
  - metadata-only
---
# I_SETTLMTDOCLISTITEMSTDVH

**Settlement Document List Item**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCLISTITEMSTDVH')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `SettlmtDocList` | `CHAR(10)` | Document Number of Settlement Document List |
| `SettlmtDocListItem` | `NUMC(6)` | Item in List |
| `BillToParty` | `CHAR(10)` | Customer in Settlement Management |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `InvoicingParty` | `CHAR(10)` | Supplier in Settlement Management |
| `PayeeParty` | `CHAR(10)` | Payee |
| `PayerParty` | `CHAR(10)` | Payer |
