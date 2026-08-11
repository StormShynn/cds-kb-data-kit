---
name: I_PRODUCTVALUATION
description: "This CDS view is a basic view and this is for maintaining multiple Valuation Areas for a Product."
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTVALUATION')/$value
semantic_en: "This CDS view is a basic view and this is for maintaining multiple Valuation Areas for a Product."
keywords:
  - "Product Valuation"
tags:
  - LO
  - bo:material
  - component:LO-MD-MM-2CL
  - interface-view
  - LO-MD
  - LO-MD-MM
  - LO-MD-MM-2CL
  - lob:logistics general
  - lob:sourcing & procurement
  - product
  - metadata-only
---
# I_PRODUCTVALUATION

**This CDS view is a basic view and this is for maintaining multiple Valuation Areas for a Product.**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTVALUATION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Product` |  | |  |  | `CHAR(40)` | Material Number |
| `ValuationArea` |  | |  |  | `CHAR(4)` | Valuation Area |
| `ValuationType` |  | |  |  | `CHAR(10)` | Valuation Type |
| `ValuationClass` |  | |  |  | `CHAR(4)` | Valuation Class |
| `PriceDeterminationControl` |  | |  |  | `CHAR(1)` | Material Price Determination: Control |
| `FiscalMonthCurrentPeriod` |  | |  |  | `NUMC(2)` | Current period (posting period) |
| `FiscalYearCurrentPeriod` |  | |  |  | `NUMC(4)` | Fiscal Year of Current Period |
| `StandardPrice` |  | |  |  | `CURR(11)` | Standard price |
| `PriceUnitQty` |  | |  |  | `DEC(5)` | Price Unit |
| `InventoryValuationProcedure` |  | |  |  | `CHAR(1)` | Price Control |
| `FutureEvaluatedAmountValue` |  | |  |  | `CURR(11)` | Future Price |
| `FuturePriceValidityStartDate` |  | |  |  | `DATS(8)` | Date as of which the price is valid |
| `PrevInvtryPriceInCoCodeCrcy` |  | |  |  | `CURR(11)` | Previous Price |
| `MovingAveragePrice` |  | |  |  | `CURR(11)` | Moving Average Price/Periodic Unit Price |
| `ValuationCategory` |  | |  |  | `CHAR(1)` | Valuation Category |
| `ProductUsageType` |  | |  |  | `CHAR(1)` | Usage of the Product |
| `ProductOriginType` |  | |  |  | `CHAR(1)` | Origin of the Product |
| `IsProducedInhouse` |  | |  |  | `CHAR(1)` | In-House Production |
| `ProdCostEstNumber` |  | |  |  | `NUMC(12)` | Cost Estimate Number - Product Costing |
| `IsMarkedForDeletion` |  | |  |  | `CHAR(1)` | Deletion flag for all material data of a valuation type |
| `ValuationMargin` |  | |  |  | `DEC(6)` | Valuation margin |
| `IsActiveEntity` |  | |  |  | `CHAR(1)` | Draft - Indicator - Is active document |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `ValuationClassSalesOrderStock` |  | |  |  | `CHAR(4)` | Valuation Class for Sales Order Stock |
| `ProjectStockValuationClass` |  | |  |  | `CHAR(4)` | Valuation Class for Project Stock |
| `PlannedPrice1InCoCodeCrcy` |  | |  |  | `CURR(11)` | Future Planned Price 1 |
| `PlannedPrice2InCoCodeCrcy` |  | |  |  | `CURR(11)` | Future Planned Price 2 |
| `PlannedPrice3InCoCodeCrcy` |  | |  |  | `CURR(11)` | Future Planned Price 3 |
| `FuturePlndPrice1ValdtyDate` |  | |  |  | `DATS(8)` | Date from Which Future Planned Price 1 Is Valid |
| `FuturePlndPrice2ValdtyDate` |  | |  |  | `DATS(8)` | Date from Which Future Planned Price 2 Is Valid |
| `FuturePlndPrice3ValdtyDate` |  | |  |  | `DATS(8)` | Date from Which Future Planned Price 3 Is Valid |
| `TaxBasedPricesPriceUnitQty` |  | |  |  | `DEC(5)` | Price unit for valuation prices based on tax/commercial law |
| `PriceLastChangeDate` |  | |  |  | `DATS(8)` | Date of Last Price Change |
| `PlannedPrice` |  | |  |  | `CURR(11)` | Future Planned Price |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `MLIsActiveAtProductLevel` |  | |  |  | `CHAR(1)` | Material Ledger Activated at Material Level |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
