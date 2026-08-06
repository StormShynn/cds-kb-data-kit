---
name: I_SETTLMTCAT
description: This CDS view is used to select the settlement category. Domains: NAFKT Values: A - Final Settlement, Subsequent Settlement B - Correction Settlement, Subsequent Settlement C - Partial Settlement, Subsequent Settlement D - Pro Forma Invoice E - Expenses Settlement F - Material Adjustment G - Expenses Settlement H - Customer/Material Posting
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTCAT')/$value
semantic_en: This CDS view is used to select the settlement category. Domains: NAFKT Values: A - Final Settlement, Subsequent Settlement B - Correction Settlement, Subsequent Settlement C - Partial Settlement, Subsequent Settlement D - Pro Forma Invoice E - Expenses Settlement F - Material Adjustment G - Expenses Settlement H - Customer/Material Posting
tags:
  - LO
  - bo:billingdocument
  - component:LO-AB
  - customer
  - interface-view
  - invoice
  - LO-AB
  - lob:logistics general
  - material
  - metadata-only
---
# I_SETTLMTCAT

**This CDS view is used to select the settlement category. Domains: NAFKT Values: A - Final Settlement, Subsequent Settlement B - Correction Settlement, Subsequent Settlement C - Partial Settlement, Subsequent Settlement D - Pro Forma Invoice E - Expenses Settlement F - Material Adjustment G - Expenses Settlement H - Customer/Material Posting**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTCAT')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `SettlmtCat` | `CHAR(1)` | Settlement Category |
| `DomainValue` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
