---
name: I_SETTLMTDOCSIGNADJMTTEXT
description: This CDS view exposes fixed values of the field Settlement Document Sign Adjustment. The following fixed values have been maintained: 1 No 2 For Credit Memos 3 For Invoices 4 According to Customizing Settings in Settlement Doc Type
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCSIGNADJMTTEXT')/$value
semantic_en: This CDS view exposes fixed values of the field Settlement Document Sign Adjustment. The following fixed values have been maintained: 1 No 2 For Credit Memos 3 For Invoices 4 According to Customizing Settings in Settlement Doc Type
tags:
  - LO
  - bo:billingdocument
  - component:LO-AB
  - document
  - interface-view
  - invoice
  - LO-AB
  - lob:logistics general
  - metadata-only
---
# I_SETTLMTDOCSIGNADJMTTEXT

**This CDS view exposes fixed values of the field Settlement Document Sign Adjustment. The following fixed values have been maintained: 1 No 2 For Credit Memos 3 For Invoices 4 According to Customizing Settings in Settlement Doc Type**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCSIGNADJMTTEXT')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `SettlmtDocSignAdjustment` | `CHAR(1)` | Adjust Plus/Minus Sign |
| `Language` | `LANG(1)` | Language Key |
| `SettlmtDocSignAdjustmentName` | `CHAR(60)` | Short Text for Fixed Values |
| `DomainValue` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
