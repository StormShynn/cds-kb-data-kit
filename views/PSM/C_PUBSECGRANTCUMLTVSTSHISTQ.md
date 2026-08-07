---
name: C_PUBSECGRANTCUMLTVSTSHISTQ
description: "Grant Cumulative Status - Query"
app_component: PSM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECGRANTCUMLTVSTSHISTQ')/$value
semantic_en: "Grant Cumulative Status - Query"
tags:
  - PSM
  - component:PSM
  - consumption-view
  - metadata-only
---
# C_PUBSECGRANTCUMLTVSTSHISTQ

**Grant Cumulative Status - Query**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECGRANTCUMLTVSTSHISTQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `ChangeDocObjectClass` |  | |  |  | `CHAR(15)` | Object Class |
| `CreationDate` |  | |  |  | `DATS(8)` |  |
| `CreationTime` |  | |  |  | `TIMS(6)` |  |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year + Fiscal Period |
| `FiscalPeriodStartDate` |  | |  |  | `DATS(8)` | Start Date of Fiscal Period |
| `FiscalPeriodEndDate` |  | |  |  | `DATS(8)` | End Date of Fiscal Period |
| `GrantStatus` |  | |  |  | `CHAR(5)` | Grant Status |
| `GrantAuthznGrp` |  | |  |  | `CHAR(10)` | Grants Management: Authorization Groups |
| `GrantIsNotRelevantGrant` |  | |  |  | `CHAR(1)` | Identify the Not Relevant Grant |
| `ChangeDocNewFieldValue` |  | |  |  | `CHAR(254)` | New Content of Changed Field |
| `ChangeDocPreviousFieldValue` |  | |  |  | `CHAR(254)` | Old Content of Changed Field |
| `IsChangeDocument` |  | |  |  | `INT1(3)` |  |
| `NumberOfGteeMMasterDataRecords` |  | |  |  | `INT1(3)` |  |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `GranteeMgmtSponsor` |  | |  |  | `CHAR(10)` | Grant Sponsor |
