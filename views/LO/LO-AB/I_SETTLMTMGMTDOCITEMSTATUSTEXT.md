---
name: I_SETTLMTMGMTDOCITEMSTATUSTEXT
description: This CDS view exposes fixed values of the field Item Status. The following fixed values have been maintained: " Item is active 1 Item Is Inactive (Collective Document Has Been Generated) 2 Item Is Inactive (Settlement Document Has Been Generated)
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCITEMSTATUSTEXT')/$value
semantic_en: This CDS view exposes fixed values of the field Item Status. The following fixed values have been maintained: " Item is active 1 Item Is Inactive (Collective Document Has Been Generated) 2 Item Is Inactive (Settlement Document Has Been Generated)
tags:
  - LO
  - bo:companycode
  - component:LO-AB
  - document
  - interface-view
  - LO-AB
  - lob:logistics general
  - metadata-only
---
# I_SETTLMTMGMTDOCITEMSTATUSTEXT

**This CDS view exposes fixed values of the field Item Status. The following fixed values have been maintained: " Item is active 1 Item Is Inactive (Collective Document Has Been Generated) 2 Item Is Inactive (Settlement Document Has Been Generated)**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCITEMSTATUSTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtMgmtDocItemStatus` |  | |  |  | `CHAR(1)` | Item Status |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `SettlmtMgmtDocItemStatusName` |  | |  |  | `CHAR(60)` | Item Status Description |
| `DomainValue` |  | |  |  | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
