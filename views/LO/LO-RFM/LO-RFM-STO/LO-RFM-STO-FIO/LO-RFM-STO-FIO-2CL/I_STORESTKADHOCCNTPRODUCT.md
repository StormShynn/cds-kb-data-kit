---
name: I_STORESTKADHOCCNTPRODUCT
description: "Store Stock Ad hoc Count Product"
app_component: LO-RFM-STO-FIO-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STORESTKADHOCCNTPRODUCT')/$value
semantic_en: "Store Stock Ad hoc Count Product"
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
  - product
  - stock
  - metadata-only
---
# I_STORESTKADHOCCNTPRODUCT

**Store Stock Ad hoc Count Product**

| Property | Value |
|---|---|
| App Component | `LO-RFM-STO-FIO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STORESTKADHOCCNTPRODUCT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Store` |  | |  |  | `CHAR(4)` | Retail plant |
| `StoreStockAdhocCountUUID` |  | |  |  | `RAW(16)` | Unique identifier for New Store Stock Ad hoc Count |
| `StoreStockAdhocCntProduct` |  | |  |  | `CHAR(40)` | Store Stock Ad hoc Count Product |
| `PhysicalInventoryStockType` |  | |  |  | `CHAR(1)` | Stock type |
| `CreationDateTime` |  | |  |  | `DEC(21)` | Creation date and time of stock count |
| `LastChangeDateTime` |  | |  |  | `DEC(21)` | Changed date and time |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `GlobalTradeItemNumber` |  | |  |  | `CHAR(18)` | International Article Number (EAN/UPC) |
