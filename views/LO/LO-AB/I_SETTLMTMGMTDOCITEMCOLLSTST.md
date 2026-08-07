---
name: I_SETTLMTMGMTDOCITEMCOLLSTST
description: This CDS view exposes fixed values of the field Status for Collection of Settlement Document Item. The following fixed values have been maintained: " Not Relevant 1 Open 2 Locked 3 Settled 6 Completed Through Cancellation
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCITEMCOLLSTST')/$value
semantic_en: This CDS view exposes fixed values of the field Status for Collection of Settlement Document Item. The following fixed values have been maintained: " Not Relevant 1 Open 2 Locked 3 Settled 6 Completed Through Cancellation
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
# I_SETTLMTMGMTDOCITEMCOLLSTST

**This CDS view exposes fixed values of the field Status for Collection of Settlement Document Item. The following fixed values have been maintained: " Not Relevant 1 Open 2 Locked 3 Settled 6 Completed Through Cancellation**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCITEMCOLLSTST')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtMgmtDocItemCollSts` |  | |  |  | `CHAR(1)` | Status for Collection of Settlement Document Item |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `SettlmtMgmtDocItemCollStsName` |  | |  |  | `CHAR(60)` | Description of Settlement Document Item Collection Status |
| `DomainValue` |  | |  |  | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
