---
name: I_STOREPICKINGREQUESTITEM
description: Store Picking Request Item
app_component: LO-RFM-STO-FIO-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STOREPICKINGREQUESTITEM')/$value
semantic_en: Store Picking Request Item
tags:
  - LO
  - component:LO-RFM-STO-FIO-2CL
  - interface-view
  - LO-RFM
  - LO-RFM-STO
  - LO-RFM-STO-FIO
  - LO-RFM-STO-FIO-2CL
  - lob:finance
  - lob:logistics general
  - metadata-only
---
# I_STOREPICKINGREQUESTITEM

**Store Picking Request Item**

| Property | Value |
|---|---|
| App Component | `LO-RFM-STO-FIO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STOREPICKINGREQUESTITEM')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `Store` | `CHAR(4)` | Retail plant |
| `StorePickingRequest` | `CHAR(10)` | Store Picking Request ID |
| `StorePickingRequestItem` | `NUMC(6)` | Store Picking Request Item ID |
| `Product` | `CHAR(40)` | Material Number |
| `RequestedQuantity` | `QUAN(13)` | Requested Item Quantity |
| `ProductPickedQuantity` | `QUAN(13)` | Picked Item Quantity |
| `UnitOfMeasure` | `UNIT(3)` | Base Unit of Measure |
| `StorePickingRequestItemStatus` | `CHAR(2)` | Store Picking Request Item Status |
| `StoreReferenceOrder` | `CHAR(10)` | Order Number of the Reference Document |
| `StoreReferenceOrderItem` | `NUMC(6)` | Item Number of the Reference Document |
| `StoreItemOverallStatus` | `CHAR(1)` | Store Picking Request Item Overall Status |
| `RequestedStorePickingReqItem` | `NUMC(6)` | Requested Item Number of Substitute Product |
| `StorePkngReqItemIsSubstituted` | `CHAR(1)` | Substitution Flag for Store Picking Request Item |
| `ProductRemainingQuantity` | `QUAN(13)` | Remaining Quantity |
| `RetailStoreProdIsPickingCmpltd` | `CHAR(1)` | Picking completed flag for Store Picking Request Item |
| `RetailStoreProdIsNonStock` | `CHAR(1)` | Retail Store Non Stock Product flag |
| `StorePkngReqItemIsHigherLvl` | `CHAR(1)` | Higher Level Item Flag for Store Picking Request Item |
| `RetailStoreProductIsEmpties` | `CHAR(1)` | Retail Store Empties Product Flag |
