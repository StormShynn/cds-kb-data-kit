---
name: I_SETTLMTDATAXTRCTNCATTXT
description: "This CDS view displays data that indicates that the settlement document type is relevant for the delta update in SAP BW. The following fixed values have been maintained: \" \" Inactive X Active"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDATAXTRCTNCATTXT')/$value
semantic_en: "This CDS view displays data that indicates that the settlement document type is relevant for the delta update in SAP BW. The following fixed values have been maintained: \" \" Inactive X Active"
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
# I_SETTLMTDATAXTRCTNCATTXT

**This CDS view displays data that indicates that the settlement document type is relevant for the delta update in SAP BW. The following fixed values have been maintained: " " Inactive X Active**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDATAXTRCTNCATTXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtDataXtrctnCat` |  | |  |  | `CHAR(1)` | Settlement Document Type is Relevant for BW/4HANA Extraction |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `DomainValue` |  | |  |  | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `SettlmtDataXtrctnCatName` |  | |  |  | `CHAR(60)` | Text of Settlement Data Extraction |
