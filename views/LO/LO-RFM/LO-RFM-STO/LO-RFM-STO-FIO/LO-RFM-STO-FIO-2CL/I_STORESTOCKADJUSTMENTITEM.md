---
name: I_STORESTOCKADJUSTMENTITEM
description: Store Stock Adjustment Item
app_component: LO-RFM-STO-FIO-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STORESTOCKADJUSTMENTITEM')/$value
semantic_en: Store Stock Adjustment Item
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
# I_STORESTOCKADJUSTMENTITEM

**Store Stock Adjustment Item**

| Property | Value |
|---|---|
| App Component | `LO-RFM-STO-FIO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STORESTOCKADJUSTMENTITEM')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Store` |  | |  |  | `CHAR(4)` | Retail plant |
| `StoreStockAdjustmentUUID` |  | |  |  | `RAW(16)` | Unique Identifier for New Stock Adjustment |
| `Product` |  | |  |  | `CHAR(40)` | Material Number |
| `StockAdjustmentQuantity` |  | |  |  | `QUAN(13)` | Stock Adjustment Quantity |
| `UnitOfMeasure` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `ProductSalesPrice` |  | |  |  | `CURR(23)` | Product Sales Price |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `PaymentServiceProviderName` |  | |  |  | `CHAR(40)` | Service Provider |
| `ProductClaimDescription` |  | |  |  | `CHAR(50)` | Comment |
| `CreationDateTime` |  | |  |  | `DEC(21)` | Creation date and time of Stock Adjustment |
| `LastChangeDateTime` |  | |  |  | `DEC(21)` | UTC Time Stamp in Long Form (YYYYMMDDhhmmssmmmuuun) |
