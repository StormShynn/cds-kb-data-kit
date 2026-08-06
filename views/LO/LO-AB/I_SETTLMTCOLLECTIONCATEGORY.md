---
name: I_SETTLMTCOLLECTIONCATEGORY
description: This CDS view is used to select the settlement classification category. Values: Inactive 1 - Active at header level 2 - Active at item level
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTCOLLECTIONCATEGORY')/$value
semantic_en: This CDS view is used to select the settlement classification category. Values: Inactive 1 - Active at header level 2 - Active at item level
tags:
  - LO
  - bo:companycode
  - component:LO-AB
  - interface-view
  - LO-AB
  - lob:logistics general
  - metadata-only
---
# I_SETTLMTCOLLECTIONCATEGORY

**This CDS view is used to select the settlement classification category. Values: Inactive 1 - Active at header level 2 - Active at item level**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTCOLLECTIONCATEGORY')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `SettlmtCollectionCategory` | `CHAR(1)` | Collection Category for Settlement |
| `DomainValue` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
