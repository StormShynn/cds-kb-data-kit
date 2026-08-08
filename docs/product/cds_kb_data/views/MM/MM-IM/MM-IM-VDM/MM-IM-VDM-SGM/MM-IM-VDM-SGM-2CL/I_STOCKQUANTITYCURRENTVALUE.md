---
name: I_STOCKQUANTITYCURRENTVALUE
description: "This CDS view provides the prerequisites for answering the following business question: What is the current material stock quantity and the current material stock value for a particular stock where \"the stock value is valuated\" by the price at period end?"
app_component: MM-IM-VDM-SGM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STOCKQUANTITYCURRENTVALUE')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business question: What is the current material stock quantity and the current material stock value for a particular stock where \"the stock value is valuated\" by the price at period end?"
tags:
  - MM
  - bo:inventory
  - component:MM-IM-VDM-SGM-2CL
  - interface-view
  - lob:sourcing & procurement
  - material
  - MM-IM
  - MM-IM-VDM
  - MM-IM-VDM-SGM
  - MM-IM-VDM-SGM-2CL
  - stock
  - metadata-only
---
# I_STOCKQUANTITYCURRENTVALUE

**This CDS view provides the prerequisites for answering the following business question: What is the current material stock quantity and the current material stock value for a particular stock where "the stock value is valuated" by the price at period end?**

| Property | Value |
|---|---|
| App Component | `MM-IM-VDM-SGM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STOCKQUANTITYCURRENTVALUE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Product` |  | |  |  | `CHAR(40)` | Material for Stock Mamangement |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `StorageLocation` |  | |  |  | `CHAR(4)` | Storage Location |
| `Batch` |  | |  |  | `CHAR(10)` | Batch Number (Stock Identifier) |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier for Special Stock |
| `SDDocument` |  | |  |  | `CHAR(10)` | Sales Order Number of Valuated Sales Order Stock |
| `SDDocumentItem` |  | |  |  | `NUMC(6)` | Sales Order Item of Valuated Sales Order Stock |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | Valuated Sales Order Stock WBS Element |
| `Customer` |  | |  |  | `CHAR(10)` | Customer for Special Stock |
| `SpecialStockIdfgStockOwner` |  | |  |  | `CHAR(10)` | Add. Supplier for Special Stock |
| `InventoryStockType` |  | |  |  | `CHAR(2)` | Stock Type of Goods Movement (Stock Identifier) |
| `InventorySpecialStockType` |  | |  |  | `CHAR(1)` | Special Stock Type |
| `MaterialBaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `MatlWrhsStkQtyInMatlBaseUnit` |  | |  |  | `QUAN(17)` | Stock Quantity in Base Unit of Measure |
| `StockValueInCCCrcy` |  | |  |  | `CURR(17)` | Stock Value in Company Code Currency |
| `StockValueInDisplayCurrency` |  | |  |  | `CURR(17)` | Stock Value in Display Currency |
| `ProductGroup` |  | |  |  | `CHAR(9)` | Product Group |
| `ProductType` |  | |  |  | `CHAR(4)` | Product Type |
