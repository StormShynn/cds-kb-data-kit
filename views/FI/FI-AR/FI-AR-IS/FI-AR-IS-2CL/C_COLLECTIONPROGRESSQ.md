---
name: C_COLLECTIONPROGRESSQ
description: Collection Progress Query
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_COLLECTIONPROGRESSQ')/$value
semantic_en: Collection Progress Query
tags:
  - FI
  - component:FI-AR-IS-2CL
  - consumption-view
  - FI-AR
  - FI-AR-IS
  - FI-AR-IS-2CL
  - lob:finance
  - metadata-only
---
# C_COLLECTIONPROGRESSQ

**Collection Progress Query**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_COLLECTIONPROGRESSQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CollectionGroup` |  | |  |  | `CHAR(10)` | Collection Group |
| `CollectionSegment` |  | |  |  | `CHAR(10)` | Collection Segment |
| `CollectionSpecialist` |  | |  |  | `CHAR(12)` | Collection Specialist |
| `CollectionSpecialistName` |  | |  |  | `CHAR(80)` | Full Name of Person |
| `CollectionGroupName` |  | |  |  | `CHAR(60)` | Name of Collection Group |
| `CollectionSegmentName` |  | |  |  | `CHAR(50)` | Name of Collection Segment |
| `CollectionPriority` |  | |  |  | `NUMC(1)` | Priority of Worklist Item |
| `CollectionPriorityName` |  | |  |  | `CHAR(15)` | Name of Priority of Worklist Items |
| `ExchangeRateType` |  | |  |  | `CHAR(4)` | Exchange Rate Type |
| `NumberOfWorklistItems` |  | |  |  | `INT4(10)` | Number of Worklist Items |
| `NumberOfCompletedItems` |  | |  |  | `INT4(10)` | Number of Completed Items |
| `NumberOfCustomerReachedItems` |  | |  |  | `INT4(10)` | Number of Customer Reached |
| `PromisedAmount` |  | |  |  | `CURR(23)` | Promised Amount |
| `CollectableAmount` |  | |  |  | `CURR(23)` | Collectable Amount |
| `CollectionProgressRatio` |  | |  |  | `DEC(5)` | Collection Progress Ratio |
| `CollectionProgressRate` |  | |  |  | `FLTP(16)` |  |
