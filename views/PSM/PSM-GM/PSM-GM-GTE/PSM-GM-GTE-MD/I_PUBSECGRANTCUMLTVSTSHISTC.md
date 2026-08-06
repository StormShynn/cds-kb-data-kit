---
name: I_PUBSECGRANTCUMLTVSTSHISTC
description: Grant Cumulative Status - Cube
app_component: PSM-GM-GTE-MD
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECGRANTCUMLTVSTSHISTC')/$value
semantic_en: Grant Cumulative Status - Cube
tags:
  - PSM
  - component:PSM-GM-GTE-MD
  - interface-view
  - PSM-GM
  - PSM-GM-GTE
  - PSM-GM-GTE-MD
  - metadata-only
---
# I_PUBSECGRANTCUMLTVSTSHISTC

**Grant Cumulative Status - Cube**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE-MD` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECGRANTCUMLTVSTSHISTC')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `GrantID` | `CHAR(20)` | Grant |
| `ChangeDocObjectClass` | `CHAR(15)` | Object Class |
| `CreationDate` | `DATS(8)` |  |
| `CreationTime` | `TIMS(6)` |  |
| `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `FiscalYearPeriod` | `NUMC(7)` | Fiscal Year + Fiscal Period |
| `FiscalPeriodStartDate` | `DATS(8)` | Start Date of Fiscal Period |
| `FiscalPeriodEndDate` | `DATS(8)` | End Date of Fiscal Period |
| `GrantStatus` | `CHAR(5)` | Grant Status |
| `GrantAuthznGrp` | `CHAR(10)` | Grants Management: Authorization Groups |
| `GrantIsNotRelevantGrant` | `CHAR(1)` | Identify the Not Relevant Grant |
| `ChangeDocNewFieldValue` | `CHAR(254)` | New Content of Changed Field |
| `ChangeDocPreviousFieldValue` | `CHAR(254)` | Old Content of Changed Field |
| `IsChangeDocument` | `INT1(3)` |  |
| `NumberOfGteeMMasterDataRecords` | `INT1(3)` |  |
| `FiscalYearVariant` | `CHAR(2)` | Fiscal Year Variant |
| `GranteeMgmtSponsor` | `CHAR(10)` | Grant Sponsor |
| `GrantLifecycleStatus` | `CHAR(5)` | Lifecycle Status |
