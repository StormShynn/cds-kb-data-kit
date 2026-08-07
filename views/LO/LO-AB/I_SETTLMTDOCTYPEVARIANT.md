---
name: I_SETTLMTDOCTYPEVARIANT
description: This CDS view exposes the values for Variant of the Settlement Document Type such as Generic, Supplier Settlement List, Customer Settlement List, etc. The following fixed values have been maintained: '' Generic B Settlement Document D Supplier Settlement List C Customer Settlement List K Settlement Document List A Supplier Billing Document H Expense Settlement L Supplier Settlement G Customer Settlement W Supplier Settlement List Entry V Settlement Document Collection
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCTYPEVARIANT')/$value
semantic_en: This CDS view exposes the values for Variant of the Settlement Document Type such as Generic, Supplier Settlement List, Customer Settlement List, etc. The following fixed values have been maintained: '' Generic B Settlement Document D Supplier Settlement List C Customer Settlement List K Settlement Document List A Supplier Billing Document H Expense Settlement L Supplier Settlement G Customer Settlement W Supplier Settlement List Entry V Settlement Document Collection
tags:
  - LO
  - billing
  - bo:billingdocument
  - component:LO-AB
  - customer
  - document
  - interface-view
  - LO-AB
  - lob:logistics general
  - supplier
  - metadata-only
---
# I_SETTLMTDOCTYPEVARIANT

**This CDS view exposes the values for Variant of the Settlement Document Type such as Generic, Supplier Settlement List, Customer Settlement List, etc. The following fixed values have been maintained: '' Generic B Settlement Document D Supplier Settlement List C Customer Settlement List K Settlement Document List A Supplier Billing Document H Expense Settlement L Supplier Settlement G Customer Settlement W Supplier Settlement List Entry V Settlement Document Collection**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCTYPEVARIANT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtDocTypeVariant` |  | |  |  | `CHAR(1)` | Settlement Document Type Variant |
| `DomainValue` |  | |  |  | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
