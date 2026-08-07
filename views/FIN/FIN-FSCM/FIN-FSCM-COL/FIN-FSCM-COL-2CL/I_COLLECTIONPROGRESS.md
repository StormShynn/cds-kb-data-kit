---
name: I_COLLECTIONPROGRESS
description: "Collection Progress - Cube"
app_component: FIN-FSCM-COL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLECTIONPROGRESS')/$value
semantic_en: "Collection Progress - Cube"
tags:
  - FIN
  - component:FIN-FSCM-COL-2CL
  - FIN-FSCM
  - FIN-FSCM-COL
  - FIN-FSCM-COL-2CL
  - interface-view
  - lob:controlling
  - lob:finance
  - metadata-only
---
# I_COLLECTIONPROGRESS

**Collection Progress - Cube**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLECTIONPROGRESS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CollectionSegment` |  | |  |  | `CHAR(10)` | Collection Segment |
| `CollectionSpecialist` |  | |  |  | `CHAR(12)` | Collection Specialist |
| `CollectionGroup` |  | |  |  | `CHAR(10)` | Collection Group |
| `CollectionPriority` |  | |  |  | `NUMC(1)` | Priority of Worklist Item |
| `CollectionSpecialistName` |  | |  |  | `CHAR(80)` | User Description |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `ExchangeRateType` |  | |  |  | `CHAR(4)` | Exchange Rate Type |
| `NumberOfWorklistItems` |  | |  |  | `INT4(10)` | Number of Worklist Items |
| `NumberOfCompletedItems` |  | |  |  | `INT4(10)` | Number of Completed Items |
| `NumberOfCustomerReachedItems` |  | |  |  | `INT4(10)` | Number of Customer Reached |
| `PromisedAmount` |  | |  |  | `CURR(23)` | Promised Amount |
| `CollectableAmount` |  | |  |  | `CURR(23)` | Collectable Amount |
