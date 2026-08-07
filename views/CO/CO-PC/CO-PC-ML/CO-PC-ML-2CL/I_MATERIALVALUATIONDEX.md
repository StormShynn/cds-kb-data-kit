---
name: I_MATERIALVALUATIONDEX
description: This CDS view provides information about the stock valuation for materials like quantity and value of the total stock and the inventory price. This view is intended to be used for data extraction. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: CO-PC-ML-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MATERIALVALUATIONDEX')/$value
semantic_en: This CDS view provides information about the stock valuation for materials like quantity and value of the total stock and the inventory price. This view is intended to be used for data extraction. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - CO
  - bo:companycode
  - CO-PC
  - CO-PC-ML
  - CO-PC-ML-2CL
  - component:CO-PC-ML-2CL
  - interface-view
  - inventory
  - lob:controlling
  - material
  - stock
  - metadata-only
---
# I_MATERIALVALUATIONDEX

**This CDS view provides information about the stock valuation for materials like quantity and value of the total stock and the inventory price. This view is intended to be used for data extraction. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CO-PC-ML-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MATERIALVALUATIONDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CostEstimate` |  | |  |  | `NUMC(12)` | Cost Estimate Number for Cost Est. w/o Qty Structure |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CurrencyRole` |  | |  |  | `CHAR(2)` | External Currency Type and Valuation View |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `ValuationArea` |  | |  |  | `CHAR(4)` | Valuation Area |
| `InventoryValuationType` |  | |  |  | `CHAR(10)` | Valuation Type |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `InventoryValuationCategory` |  | |  |  | `CHAR(1)` | Valuation Category |
| `MaterialValuationClass` |  | |  |  | `CHAR(4)` | Valuation Class |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales and Distribution Document Number |
| `SalesOrderItem` |  | |  |  | `NUMC(6)` | Item number of the SD document |
| `Supplier` |  | |  |  | `CHAR(10)` | Account Number of Supplier |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element |
| `InventorySpecialStockType` |  | |  |  | `CHAR(1)` | Special Stock Indicator |
| `CurPlanProjSlsOrdValnStrategy` |  | |  |  | `CHAR(1)` | Val. Strat. for Current Plan Price, Sales Order/Proj. Stock |
| `PriceDeterminationControl` |  | |  |  | `CHAR(1)` | Material Price Determination: Control |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Valuation Unit of Measure |
| `MaterialPriceUnitQty` |  | |  |  | `DEC(5)` | Price Unit |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `MaterialPriceControl` |  | |  |  | `CHAR(1)` | Price Control Indicator |
| `InventoryPrice` |  | |  |  | `CURR(23)` | Material Ledger Price |
| `StandardPrice` |  | |  |  | `CURR(23)` |  |
| `MovingAveragePrice` |  | |  |  | `CURR(23)` |  |
| `TotalVltdStockQuantity` |  | |  |  | `QUAN(23)` | Valuation Quantity |
| `TotalValuatedStockAmount` |  | |  |  | `CURR(13)` | Value of Total Valuated Stock |
| `LedgerValnCrcyRoleIsUsedInLogs` |  | |  |  | `CHAR(1)` | Indicator: currency type is used in logistic reporting |
| `LedgerName` |  | |  |  | `CHAR(60)` | Ledger Name |
| `CurrencyRoleName` |  | |  |  | `CHAR(60)` | Currency Type Description |
