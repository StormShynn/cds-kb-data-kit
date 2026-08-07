---
name: C_MFGORDERITEMSCRAPAMTQRY
description: With this CDS view you can retrieve data , such as the following: Scrap and yield quantity of a manufacturing order item Corresponding amounts in company code Display currency based on the material inventory price This CDS view also provides the ratio between planned and confirmed quantities in percent. This CDS view provides the prerequisites for answering the following business questions: What are the planned and confirmed quantities of a manufacturing order item? What are the amounts of the confirmed scrap and rework quantities? What is the inventory price of a manufacturing order item material at the current date?
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MFGORDERITEMSCRAPAMTQRY')/$value
semantic_en: With this CDS view you can retrieve data , such as the following: Scrap and yield quantity of a manufacturing order item Corresponding amounts in company code Display currency based on the material inventory price This CDS view also provides the ratio between planned and confirmed quantities in percent. This CDS view provides the prerequisites for answering the following business questions: What are the planned and confirmed quantities of a manufacturing order item? What are the amounts of the confirmed scrap and rework quantities? What is the inventory price of a manufacturing order item material at the current date?
tags:
  - PP
  - bo:companycode
  - component:PP-VDM-2CL
  - consumption-view
  - inventory
  - lob:manufacturing
  - material
  - order
  - plan
  - PP-VDM
  - PP-VDM-2CL
  - metadata-only
---
# C_MFGORDERITEMSCRAPAMTQRY

**With this CDS view you can retrieve data , such as the following: Scrap and yield quantity of a manufacturing order item Corresponding amounts in company code Display currency based on the material inventory price This CDS view also provides the ratio between planned and confirmed quantities in percent. This CDS view provides the prerequisites for answering the following business questions: What are the planned and confirmed quantities of a manufacturing order item? What are the amounts of the confirmed scrap and rework quantities? What is the inventory price of a manufacturing order item material at the current date?**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MFGORDERITEMSCRAPAMTQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ManufacturingOrder` |  | |  |  | `CHAR(12)` | Manufacturing Order ID |
| `ManufacturingOrderItem` |  | |  |  | `NUMC(4)` | Manufacturing Order Item ID |
| `ManufacturingOrderCategory` |  | |  |  | `NUMC(2)` | Manufacturing Order Category |
| `ManufacturingOrderType` |  | |  |  | `CHAR(4)` | Manufacturing Order Type |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `ProductName` |  | |  |  | `CHAR(40)` | Product Description |
| `ProductionPlant` |  | |  |  | `CHAR(4)` | Production Plant |
| `ProductionPlantName` |  | |  |  | `CHAR(30)` | Production Plant Name |
| `MRPPlant` |  | |  |  | `CHAR(4)` | Planning Plant for an Order |
| `MRPPlantName` |  | |  |  | `CHAR(30)` | Planning Plant Name |
| `MRPController` |  | |  |  | `CHAR(3)` | MRP Controller |
| `MRPControllerName` |  | |  |  | `CHAR(18)` | MRP Controller Name |
| `ProductionSupervisor` |  | |  |  | `CHAR(3)` | Production Supervisor |
| `ProductionSupervisorName` |  | |  |  | `CHAR(30)` | Production Supervisor Name |
| `StorageLocation` |  | |  |  | `CHAR(4)` | Storage Location |
| `StorageLocationName` |  | |  |  | `CHAR(16)` | Storage Location Name |
| `Batch` |  | |  |  | `CHAR(10)` | Batch Number |
| `InventoryValuationType` |  | |  |  | `CHAR(10)` | Inventory Valuation Type |
| `ReportingPeriod` |  | |  |  | `NUMC(2)` | Reporting Period |
| `ReportingPeriodName` |  | |  |  | `CHAR(60)` | Reporting Period Name |
| `MfgOrderConfirmedEndDate` |  | |  |  | `DATS(8)` | Manufacturing Order Confirmed End Date |
| `MfgOrderConfirmedEndTime` |  | |  |  | `TIMS(6)` | Manufacturing Order Confirmed End Time |
| `EndDateHour` |  | |  |  | `NUMC(2)` | End Date Hour |
| `EndDateWeekDay` |  | |  |  | `NUMC(1)` | Week Day |
| `EndDateWeekDayName` |  | |  |  | `CHAR(60)` | End Date Week Day Name |
| `EndDateWeek` |  | |  |  | `NUMC(2)` | Calendar Week |
| `EndDateMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `EndDateYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `EndDateYearMonth` |  | |  |  | `NUMC(6)` | Year Month |
| `ManufacturingOrderUnit` |  | |  |  | `UNIT(3)` | Production Unit of Measure |
| `MfgOrderItemPlannedTotalQty` |  | |  |  | `QUAN(13)` | Order Item Planned Total Quantity |
| `MfgOrderItemPlannedScrapQty` |  | |  |  | `QUAN(13)` | Order Item Planned Scrap Quantity |
| `MfgOrderItemPlannedYieldQty` |  | |  |  | `QUAN(13)` | Planned Yield Quantity |
| `MfgOrderItemGoodsReceiptQty` |  | |  |  | `QUAN(13)` | Quantity of Goods Received for the Order Item |
| `MfgOrderItemActualDeviationQty` |  | |  |  | `QUAN(13)` | Expected Surplus/Deficit For Goods Receipt |
| `MfgOrderConfirmedYieldQty` |  | |  |  | `QUAN(13)` | Confirmed Yield Quantity From Order Confirmation |
| `MfgOrderConfirmedScrapQty` |  | |  |  | `QUAN(13)` | Confirmed Scrap Quantity From Order Confirmation |
| `MfgOrderConfirmedReworkQty` |  | |  |  | `QUAN(13)` | Total Confirmed Rework Quantity |
| `MfgOrderConfirmedTotalQty` |  | |  |  | `QUAN(13)` | Total Quantity From Confirmation |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `CostEstimate` |  | |  |  | `NUMC(12)` | Cost Estimate Number for Product Costing |
| `MaterialPriceUnitQty` |  | |  |  | `DEC(5)` | Material Price Unit Quantity |
| `ValuationArea` |  | |  |  | `CHAR(4)` | Valuation Area |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalYear_2` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `InventoryPrice` |  | |  |  | `CURR(11)` | Inventory Price |
| `PlannedScrapAmountInCCCrcy` |  | |  |  | `CURR(15)` | Planned Scrap Amount in Company Code Currency |
| `ConfirmedScrapAmountInCCCrcy` |  | |  |  | `CURR(15)` | Confirmed Scrap Amount in Company Code Currency |
| `ConfirmedYieldAmountInCCCrcy` |  | |  |  | `CURR(15)` | Confirmed Yield Amount in Company Code Currency |
| `ConfirmedReworkAmountInCCCrcy` |  | |  |  | `CURR(15)` | Confirmed Rework Amount in Company Code Currency |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `PlannedScrapAmountInDspCrcy` |  | |  |  | `CURR(15)` | Planned Scrap Amount in Display Currency |
| `ConfirmedScrapAmountInDspCrcy` |  | |  |  | `CURR(15)` | Confirmed Scrap Amount in Display Currency |
| `ConfirmedYieldAmountInDspCrcy` |  | |  |  | `CURR(15)` | Confirmed Yield Amount in Display Currency |
| `ConfirmedReworkAmountInDspCrcy` |  | |  |  | `CURR(15)` | Confirmed Rework Amount in Display Currency |
| `MfgOrderItemPlannedScrapPct` |  | |  |  | `DEC(5)` | Manufacturing Order Planned Item Scrap in Percent |
| `MfgOrderConfirmedScrapInPct` |  | |  |  | `DEC(5)` | Manufacturing Order Confirmed Scrap in Percent |
| `MfgOrderConfirmedReworkInPct` |  | |  |  | `DEC(5)` | Manufacturing Order Confirmed Rework in Percent |
| `MfgOrderConfirmedYieldInPct` |  | |  |  | `DEC(5)` | Manufacturing Order Confirmed Yield in Percent |
