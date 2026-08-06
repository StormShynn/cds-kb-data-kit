---
name: I_STOREPICKINGREQUEST
description: Store Picking Request
app_component: LO-RFM-STO-FIO-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STOREPICKINGREQUEST')/$value
semantic_en: Store Picking Request
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
# I_STOREPICKINGREQUEST

**Store Picking Request**

| Property | Value |
|---|---|
| App Component | `LO-RFM-STO-FIO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STOREPICKINGREQUEST')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `Store` | `CHAR(4)` | Retail plant |
| `StorePickingRequest` | `CHAR(10)` | Store Picking Request ID |
| `StoreReferenceOrder` | `CHAR(10)` | Order Number of the Reference Document |
| `StoreReferenceDocumentType` | `CHAR(2)` | Document Type of the Reference Document |
| `StorePlannedPickingDateTime` | `DEC(21)` | Time Stamp of Store Picking Request |
| `StorePickingRequestStatus` | `CHAR(2)` | Store Picking Request Status |
| `HandoverShelfSpaceID` | `CHAR(20)` | Handover Shelf Space ID |
| `UserAssignedToPickingRequest` | `CHAR(12)` | User Name |
| `GrossWeight` | `QUAN(15)` | Store Picking Request Gross Weight |
| `WeightUnit` | `UNIT(3)` | Store Picking Request Gross Weight Unit of Measure |
| `GrossVolume` | `QUAN(15)` | Store Picking Request Gross Volume |
| `VolumeUnit` | `UNIT(3)` | Store Picking Request Gross Volume Unit of Measure |
| `RetailStoreCustomerReference` | `CHAR(35)` | Customer Reference |
| `RetailStoreExternalReference` | `CHAR(12)` | Your Reference |
