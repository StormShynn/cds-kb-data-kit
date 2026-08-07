---
name: C_MATERIALSTOCKTIMESERIES
description: This CDS view provides the prerequisites for answering the following business question: How does the stock quantity evolve over a certain time period such as a day, week, or month?
app_component: MM-IM-VDM-SGM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MATERIALSTOCKTIMESERIES')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business question: How does the stock quantity evolve over a certain time period such as a day, week, or month?
tags:
  - MM
  - bo:inventory
  - component:MM-IM-VDM-SGM-2CL
  - consumption-view
  - lob:sourcing & procurement
  - MM-IM
  - MM-IM-VDM
  - MM-IM-VDM-SGM
  - MM-IM-VDM-SGM-2CL
  - stock
  - metadata-only
---
# C_MATERIALSTOCKTIMESERIES

**This CDS view provides the prerequisites for answering the following business question: How does the stock quantity evolve over a certain time period such as a day, week, or month?**

| Property | Value |
|---|---|
| App Component | `MM-IM-VDM-SGM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MATERIALSTOCKTIMESERIES')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PeriodType` |  | |  |  | `CHAR(1)` |  |
| `EndDate` |  | |  |  | `DATS(8)` | End Date of Fiscal Period |
| `YearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year + Fiscal Period |
| `Material` |  | |  |  | `CHAR(40)` | Material for Stock Mamangement |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `StorageLocation` |  | |  |  | `CHAR(4)` | Storage Location |
| `Batch` |  | |  |  | `CHAR(10)` | Batch Number (Stock Identifier) |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier for Special Stock |
| `SDDocument` |  | |  |  | `CHAR(10)` | Sales Order Number of Valuated Sales Order Stock |
| `SDDocumentItem` |  | |  |  | `NUMC(6)` | Sales Order Item of Valuated Sales Order Stock |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | Valuated Sales Order Stock WBS Element |
| `Customer` |  | |  |  | `CHAR(10)` | Customer for Special Stock |
| `InventoryStockType` |  | |  |  | `CHAR(2)` | Stock Type of Goods Movement (Stock Identifier) |
| `InventorySpecialStockType` |  | |  |  | `CHAR(1)` | Special Stock Type |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `MaterialBaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `MatlWrhsStkQtyInMatlBaseUnit` |  | |  |  | `QUAN(31)` | Stock Quantity |
| `MaterialName` |  | |  |  | `CHAR(40)` | Material Description |
| `CompanyCodeName` |  | |  |  | `CHAR(25)` | Name of Company Code or Company |
| `PlantName` |  | |  |  | `CHAR(30)` | Plant Name |
| `StorageLocationName` |  | |  |  | `CHAR(16)` | Storage Location Name |
| `SupplierName` |  | |  |  | `CHAR(80)` | Name of Supplier |
| `CustomerName` |  | |  |  | `CHAR(80)` | Name of Customer |
| `InventoryStockTypeName` |  | |  |  | `CHAR(60)` | Inventory Stock Type Name |
| `InventorySpecialStockTypeName` |  | |  |  | `CHAR(20)` | Special Stock Type Name |
