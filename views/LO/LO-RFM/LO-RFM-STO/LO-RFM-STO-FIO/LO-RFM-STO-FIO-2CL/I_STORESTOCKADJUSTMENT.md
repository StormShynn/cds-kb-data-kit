---
name: I_STORESTOCKADJUSTMENT
description: Store Stock Adjustment
app_component: LO-RFM-STO-FIO-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STORESTOCKADJUSTMENT')/$value
semantic_en: Store Stock Adjustment
tags:
  - LO
  - bo:inventory
  - component:LO-RFM-STO-FIO-2CL
  - interface-view
  - LO-RFM
  - LO-RFM-STO
  - LO-RFM-STO-FIO
  - LO-RFM-STO-FIO-2CL
  - lob:finance
  - lob:logistics general
  - stock
  - metadata-only
---
# I_STORESTOCKADJUSTMENT

**Store Stock Adjustment**

| Property | Value |
|---|---|
| App Component | `LO-RFM-STO-FIO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STORESTOCKADJUSTMENT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Store` |  | |  |  | `CHAR(4)` | Retail plant |
| `StoreStockAdjustmentUUID` |  | |  |  | `RAW(16)` | Unique Identifier for New Stock Adjustment |
| `GoodsMovementType` |  | |  |  | `CHAR(3)` | Movement Type (Inventory Management) |
| `StockAdjustmentReason` |  | |  |  | `CHAR(4)` | Stock Adjustment Reason |
| `StorageLocation` |  | |  |  | `CHAR(4)` | Storage Location |
| `StockAdjustmentStatus` |  | |  |  | `CHAR(2)` | Processing Status of the Stock Adjustment |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `CreationDateTime` |  | |  |  | `DEC(21)` | Creation date and time of Stock Adjustment |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | User Who Last Changed the Business Document |
| `LastChangeDateTime` |  | |  |  | `DEC(21)` | UTC Time Stamp in Long Form (YYYYMMDDhhmmssmmmuuun) |
| `CreationDate` |  | |  |  | `DATS(8)` | Date |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Date |
| `MaterialDocument` |  | |  |  | `CHAR(10)` | Number of Material Document |
