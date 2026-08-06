---
name: I_CURRENTMATLVALNPRICEDEX
description: This CDS view provides the data to answer the following business questions: What is the current valid inventory price of a material at the time of request? This view is intended to be used for data extraction. With regular data extraction, you can use this view to create a price history on target system side.
app_component: CO-PC-ML-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CURRENTMATLVALNPRICEDEX')/$value
semantic_en: This CDS view provides the data to answer the following business questions: What is the current valid inventory price of a material at the time of request? This view is intended to be used for data extraction. With regular data extraction, you can use this view to create a price history on target system side.
tags:
  - CO
  - CO-PC
  - CO-PC-ML
  - CO-PC-ML-2CL
  - component:CO-PC-ML-2CL
  - interface-view
  - inventory
  - lob:controlling
  - material
  - metadata-only
---
# I_CURRENTMATLVALNPRICEDEX

**This CDS view provides the data to answer the following business questions: What is the current valid inventory price of a material at the time of request? This view is intended to be used for data extraction. With regular data extraction, you can use this view to create a price history on target system side.**

| Property | Value |
|---|---|
| App Component | `CO-PC-ML-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CURRENTMATLVALNPRICEDEX')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `CostEstimate` | `NUMC(12)` | Cost Estimate Number for Cost Est. w/o Qty Structure |
| `Ledger` | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CurrencyRole` | `CHAR(2)` | External Currency Type and Valuation View |
| `Material` | `CHAR(40)` | Material Number |
| `ValuationArea` | `CHAR(4)` | Valuation Area |
| `InventoryValuationType` | `CHAR(10)` | Valuation Type |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `SalesOrder` | `CHAR(10)` | Sales and Distribution Document Number |
| `SalesOrderItem` | `NUMC(6)` | Item number of the SD document |
| `Supplier` | `CHAR(10)` | Account Number of Supplier |
| `WBSElementInternalID` | `NUMC(8)` | WBS Element |
| `InvtryValnSpecialStockType` | `CHAR(1)` | Special Stock Indicator |
| `InventorySpecialStockValnType` | `CHAR(1)` | Valuation of Special Stock |
| `IsSupplierStockValuation` | `CHAR(1)` | Vendor Stock Valuation Indicator |
| `InventoryPrice` | `CURR(23)` | Material Ledger Price |
| `StandardPrice` | `CURR(23)` | Material Ledger Price |
| `MovingAveragePrice` | `CURR(23)` | Material Ledger Price |
| `Currency` | `CUKY(5)` | Currency Key |
| `MaterialPriceControl` | `CHAR(1)` | Price Control Indicator |
| `MaterialPriceUnitQty` | `DEC(5)` | Price Unit |
| `BaseUnit` | `UNIT(3)` | Valuation Unit of Measure |
| `LedgerValnCrcyRoleIsUsedInLogs` | `CHAR(1)` | Indicator: currency type is used in logistic reporting |
| `LedgerName` | `CHAR(60)` | Ledger Name |
| `CurrencyRoleName` | `CHAR(60)` | Currency Type Description |
