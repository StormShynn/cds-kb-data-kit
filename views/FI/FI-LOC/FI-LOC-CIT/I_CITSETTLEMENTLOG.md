---
name: I_CITSETTLEMENTLOG
description: CIT Settlements Reporting Log
app_component: FI-LOC-CIT
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CITSETTLEMENTLOG')/$value
semantic_en: CIT Settlements Reporting Log
tags:
  - FI
  - bo:purchaseorder
  - component:FI-LOC-CIT
  - FI-LOC
  - FI-LOC-CIT
  - interface-view
  - lob:finance
  - lob:logistics general
  - metadata-only
---
# I_CITSETTLEMENTLOG

**CIT Settlements Reporting Log**

| Property | Value |
|---|---|
| App Component | `FI-LOC-CIT` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CITSETTLEMENTLOG')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `StatryRptgEntity` |  | |  |  | `CHAR(10)` | Reporting Entity |
| `StatryRptCategory` |  | |  |  | `CHAR(30)` | Report Category ID |
| `StatryRptRunID` |  | |  |  | `NUMC(8)` | Report Run ID |
| `CITSettlementUUID` |  | |  |  | `RAW(16)` | Global Unique ID for table |
| `CITReportingLine` |  | |  |  | `CHAR(30)` | CIT Report Line |
| `CITReportingItem` |  | |  |  | `CHAR(10)` | CIT Report Item |
| `CITReportVersion` |  | |  |  | `CHAR(30)` | CIT Report Version |
| `BRFApplication` |  | |  |  | `CHAR(30)` | BRFplus Application name |
| `CITSettlementCode` |  | |  |  | `CHAR(30)` | CIT Settlement Code |
| `CITItemAmountInDisplayCurrency` |  | |  |  | `CURR(23)` | CIT Amount |
| `Currency` |  | |  |  | `CUKY(5)` | CIT Currency |
| `ItemSignIsReversed` |  | |  |  | `CHAR(1)` | Change Item Sign in Reporting |
