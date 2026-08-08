---
name: C_GTEEMLIFECYCLESTATUSQRY
description: "Grant Life Cycle Status Changes - Query"
app_component: PSM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GTEEMLIFECYCLESTATUSQRY')/$value
semantic_en: "Grant Life Cycle Status Changes - Query"
tags:
  - PSM
  - component:PSM
  - consumption-view
  - metadata-only
---
# C_GTEEMLIFECYCLESTATUSQRY

**Grant Life Cycle Status Changes - Query**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GTEEMLIFECYCLESTATUSQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `ChangeDocObjectClass` |  | |  |  | `CHAR(15)` | Object Class |
| `CreationDate` |  | |  |  | `DATS(8)` | Creation Date of Change Document |
| `CreationTime` |  | |  |  | `TIMS(6)` | Time of Change |
| `GrantLifecycleStatus` |  | |  |  | `CHAR(5)` | Lifecycle Status |
| `GrantAuthznGrp` |  | |  |  | `CHAR(10)` | Grants Management: Authorization Groups |
| `GrantIsNotRelevantGrant` |  | |  |  | `CHAR(1)` | Identify the Not Relevant Grant |
| `ChangeDocNewFieldValue` |  | |  |  | `CHAR(254)` | New Content of Changed Field |
| `ChangeDocPreviousFieldValue` |  | |  |  | `CHAR(254)` | Old Content of Changed Field |
| `IsChangeDocument` |  | |  |  | `INT1(3)` |  |
| `NumberOfGteeMMasterDataRecords` |  | |  |  | `INT1(3)` |  |
| `GranteeMgmtSponsor` |  | |  |  | `CHAR(10)` | Grant Sponsor |
