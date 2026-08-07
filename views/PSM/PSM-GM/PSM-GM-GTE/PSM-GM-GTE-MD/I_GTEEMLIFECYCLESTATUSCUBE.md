---
name: I_GTEEMLIFECYCLESTATUSCUBE
description: Grant Life Cycle Status Changes - Cube
app_component: PSM-GM-GTE-MD
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GTEEMLIFECYCLESTATUSCUBE')/$value
semantic_en: Grant Life Cycle Status Changes - Cube
tags:
  - PSM
  - component:PSM-GM-GTE-MD
  - interface-view
  - PSM-GM
  - PSM-GM-GTE
  - PSM-GM-GTE-MD
  - metadata-only
---
# I_GTEEMLIFECYCLESTATUSCUBE

**Grant Life Cycle Status Changes - Cube**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE-MD` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GTEEMLIFECYCLESTATUSCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `ChangeDocObjectClass` |  | |  |  | `CHAR(15)` | Object Class |
| `CreationDate` |  | |  |  | `DATS(8)` | Creation Date of Change Document |
| `CreationTime` |  | |  |  | `TIMS(6)` | Time of Change |
| `GrantLifecycleStatus` |  | |  |  | `CHAR(5)` | Lifecycle Status |
| `ChangeDocNewFieldValue` |  | |  |  | `CHAR(254)` | New Content of Changed Field |
| `ChangeDocPreviousFieldValue` |  | |  |  | `CHAR(254)` | Old Content of Changed Field |
| `IsChangeDocument` |  | |  |  | `INT1(3)` |  |
| `GrantAuthznGrp` |  | |  |  | `CHAR(10)` | Grants Management: Authorization Groups |
| `GrantIsNotRelevantGrant` |  | |  |  | `CHAR(1)` | Identify the Not Relevant Grant |
| `NumberOfGteeMMasterDataRecords` |  | |  |  | `INT1(3)` |  |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `GranteeMgmtSponsor` |  | |  |  | `CHAR(10)` | Grant Sponsor |
