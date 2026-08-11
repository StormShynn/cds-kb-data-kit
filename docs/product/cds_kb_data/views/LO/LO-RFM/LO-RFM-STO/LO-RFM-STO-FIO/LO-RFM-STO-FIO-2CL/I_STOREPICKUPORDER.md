---
name: I_STOREPICKUPORDER
description: "Store Pickup Order"
app_component: LO-RFM-STO-FIO-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STOREPICKUPORDER')/$value
semantic_en: "Store Pickup Order"
tags:
  - LO
  - bo:purchaseorder
  - component:LO-RFM-STO-FIO-2CL
  - interface-view
  - LO-RFM
  - LO-RFM-STO
  - LO-RFM-STO-FIO
  - LO-RFM-STO-FIO-2CL
  - lob:finance
  - lob:logistics general
  - order
  - metadata-only
---
# I_STOREPICKUPORDER

**Store Pickup Order**

| Property | Value |
|---|---|
| App Component | `LO-RFM-STO-FIO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STOREPICKUPORDER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Store` |  | |  |  | `CHAR(4)` | Retail plant |
| `StorePickUpOrder` |  | |  |  | `CHAR(10)` | Store Pickup Order |
| `StoreOrderExpdHandoverDteTme` |  | |  |  | `DEC(21)` | Expected Date and Time of Order Handover |
| `Customer` |  | |  |  | `CHAR(10)` | Sold-to Party |
| `StoreOrderPickingStatus` |  | |  |  | `CHAR(2)` | Order Picking Status |
| `StoreOrderPaymentStatus` |  | |  |  | `CHAR(1)` | Store Pickup Order Payment Status |
| `StoreOrderOverallStatus` |  | |  |  | `CHAR(1)` | Pickup Order Overall Status |
| `StoreOrderRejectionReason` |  | |  |  | `CHAR(2)` | Store Pickup Order Rejection Reason |
| `NmbrOfFullyPickedItems` |  | |  |  | `CHAR(6)` | Number of Fully Picked Items |
| `NmbrOfPartiallyPickedItems` |  | |  |  | `CHAR(6)` | Count of Partially Picked Items in Store |
| `NmbrOfUnavailableItems` |  | |  |  | `CHAR(6)` | Count of Unavailable Items in Store |
| `StorePickUpOrderIsSubstnEnbld` |  | |  |  | `CHAR(1)` | Substitution Preference for Store Pickup Order |
| `NmbrOfSubstitutedItems` |  | |  |  | `CHAR(6)` | Count of Substituted Items |
