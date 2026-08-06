---
name: C_PUBSECGRANTNEXTSTSHISTQRY
description: Grant Next Status History - Query
app_component: PSM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECGRANTNEXTSTSHISTQRY')/$value
semantic_en: Grant Next Status History - Query
tags:
  - PSM
  - component:PSM
  - consumption-view
  - metadata-only
---
# C_PUBSECGRANTNEXTSTSHISTQRY

**Grant Next Status History - Query**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECGRANTNEXTSTSHISTQRY')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `GrantID` | `CHAR(20)` | Grant |
| `ChangeDocObjectClass` | `CHAR(15)` | Object Class |
| `CreationDate` | `DATS(8)` |  |
| `CreationTime` | `TIMS(6)` |  |
| `GrantStatus` | `CHAR(5)` | Grant Status |
| `ChangeDocNewFieldValue` | `CHAR(254)` | New Content of Changed Field |
| `ChangeDocPreviousFieldValue` | `CHAR(254)` | Old Content of Changed Field |
| `IsChangeDocument` | `INT1(3)` |  |
| `GrantAuthznGrp` | `CHAR(10)` | Grants Management: Authorization Groups |
| `GrantIsNotRelevantGrant` | `CHAR(1)` | Identify the Not Relevant Grant |
| `NumberOfGteeMMasterDataRecords` | `INT1(3)` |  |
| `GrantToNextStatusInPercent` | `DECF(34)` |  |
| `GrantPreviousStatusInPercent` | `DECF(34)` |  |
| `GranteeMgmtSponsor` | `CHAR(10)` | Grant Sponsor |
| `GrantLifecycleStatus` | `CHAR(5)` | Lifecycle Status |
