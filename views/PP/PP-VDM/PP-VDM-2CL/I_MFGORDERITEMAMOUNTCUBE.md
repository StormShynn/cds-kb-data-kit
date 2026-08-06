---
name: I_MFGORDERITEMAMOUNTCUBE
description: With this CDS view you can retrieve data, such as the following: Scrap or yield quantity of a manufacturing order item Corresponding amounts in company code Display currency based on the material inventory price This CDS view also provides the ratio between planned and confirmed quantities in percent. This CDS view provides the prerequisites for answering the following business questions: What are the planned and confirmed quantities of a manufacturing order item? What are the amounts of the confirmed scrap and rework quantities? What is the inventory price of a manufacturing order item material at the current date?
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MFGORDERITEMAMOUNTCUBE')/$value
semantic_en: With this CDS view you can retrieve data, such as the following: Scrap or yield quantity of a manufacturing order item Corresponding amounts in company code Display currency based on the material inventory price This CDS view also provides the ratio between planned and confirmed quantities in percent. This CDS view provides the prerequisites for answering the following business questions: What are the planned and confirmed quantities of a manufacturing order item? What are the amounts of the confirmed scrap and rework quantities? What is the inventory price of a manufacturing order item material at the current date?
tags:
  - PP
  - bo:companycode
  - component:PP-VDM-2CL
  - interface-view
  - inventory
  - lob:manufacturing
  - material
  - order
  - plan
  - PP-VDM
  - PP-VDM-2CL
  - metadata-only
---
# I_MFGORDERITEMAMOUNTCUBE

**With this CDS view you can retrieve data, such as the following: Scrap or yield quantity of a manufacturing order item Corresponding amounts in company code Display currency based on the material inventory price This CDS view also provides the ratio between planned and confirmed quantities in percent. This CDS view provides the prerequisites for answering the following business questions: What are the planned and confirmed quantities of a manufacturing order item? What are the amounts of the confirmed scrap and rework quantities? What is the inventory price of a manufacturing order item material at the current date?**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MFGORDERITEMAMOUNTCUBE')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `ManufacturingOrder` | `CHAR(12)` | Manufacturing Order ID |
| `ManufacturingOrderItem` | `NUMC(4)` | Manufacturing Order Item ID |
| `ManufacturingOrderCategory` | `NUMC(2)` | Manufacturing Order Category |
| `ManufacturingOrderType` | `CHAR(4)` | Manufacturing Order Type |
| `Product` | `CHAR(40)` | Product |
| `ProductionPlant` | `CHAR(4)` | Production Plant |
| `MRPPlant` | `CHAR(4)` | Planning Plant for an Order |
| `MRPController` | `CHAR(3)` | MRP Controller |
| `ProductionSupervisor` | `CHAR(3)` | Production Supervisor |
| `MfgOrderItemIsFinallyDelivered` | `CHAR(1)` | "Delivery Completed" Indicator |
| `MaterialGoodsReceiptDuration` | `DEC(3)` | Goods Receipt Processing Duration in Days |
| `StorageLocation` | `CHAR(4)` | Storage Location |
| `Batch` | `CHAR(10)` | Batch Number |
| `InventoryValuationType` | `CHAR(10)` | Inventory Valuation Type |
| `MfgOrderPlannedStartDate` | `DATS(8)` | Manufacturing Order Planned Start Date |
| `MfgOrderPlannedStartTime` | `TIMS(6)` | Manufacturing Order Planned Start Time |
| `MfgOrderScheduledStartDate` | `DATS(8)` | Manufacturing Order Scheduled Start Date |
| `MfgOrderScheduledStartTime` | `TIMS(6)` | Manufacturing Order Scheduled Start Time |
| `MfgOrderActualStartDate` | `DATS(8)` | Manufacturing Order Actual Start Date |
| `MfgOrderActualStartTime` | `TIMS(6)` | Manufacturing Order Actual Start Time |
| `MfgOrderPlannedEndDate` | `DATS(8)` | Manufacturing Order Planned End Date |
| `MfgOrderPlannedEndTime` | `TIMS(6)` | Manufacturing Order Planned End Time |
| `MfgOrderScheduledEndDate` | `DATS(8)` | Manufacturing Order Scheduled End Date |
| `MfgOrderScheduledEndTime` | `TIMS(6)` | Manufacturing Order Scheduled End Time |
| `MfgOrderConfirmedEndDate` | `DATS(8)` | Manufacturing Order Confirmed End Date |
| `MfgOrderConfirmedEndTime` | `TIMS(6)` | Manufacturing Order Confirmed End Time |
| `MfgOrderActualEndDate` | `DATS(8)` | Manufacturing Order Actual End Date |
| `MfgOrderScheduledReleaseDate` | `DATS(8)` | Manufacturing Order Scheduled Release Date |
| `MfgOrderActualReleaseDate` | `DATS(8)` | Manufacturing Order Actual Release Date |
| `MfgOrderItemPlannedEndDate` | `DATS(8)` | Manufacturing Order Item Planned End Date |
| `MfgOrderItemScheduledEndDate` | `DATS(8)` | Manufacturing Order Item Scheduled End Date |
| `MfgOrderItemActualDeliveryDate` | `DATS(8)` | Actual Delivery/Finish Date |
| `ReportingPeriod` | `NUMC(2)` | Reporting Period |
| `EndDateHour` | `NUMC(2)` | End Date Hour |
| `EndDateWeekDay` | `NUMC(1)` | Week Day |
| `EndDateWeek` | `NUMC(2)` | Calendar Week |
| `EndDateMonth` | `NUMC(2)` | Calendar Month |
| `EndDateYear` | `NUMC(4)` | Calendar Year |
| `EndDateYearMonth` | `NUMC(6)` | Year Month |
| `ManufacturingOrderUnit` | `UNIT(3)` | Production Unit of Measure |
| `MfgOrderItemPlannedTotalQty` | `QUAN(13)` | Order Item Planned Total Quantity |
| `MfgOrderItemPlannedScrapQty` | `QUAN(13)` | Order Item Planned Scrap Quantity |
| `MfgOrderItemPlannedYieldQty` | `QUAN(13)` | Planned Yield Quantity |
| `MfgOrderItemGoodsReceiptQty` | `QUAN(13)` | Quantity of Goods Received for the Order Item |
| `MfgOrderItemActualDeviationQty` | `QUAN(13)` | Expected Surplus/Deficit For Goods Receipt |
| `MfgOrderConfirmedYieldQty` | `QUAN(13)` | Confirmed Yield Quantity From Order Confirmation |
| `MfgOrderConfirmedScrapQty` | `QUAN(13)` | Confirmed Scrap Quantity From Order Confirmation |
| `MfgOrderConfirmedReworkQty` | `QUAN(13)` | Total Confirmed Rework Quantity |
| `MfgOrderConfirmedTotalQty` | `QUAN(13)` | Total Quantity From Confirmation |
| `MfgOrderItemPlannedScrapPct` | `DEC(5)` | Manufacturing Order Planned Item Scrap in Percent |
| `MfgOrderConfirmedScrapInPct` | `DEC(5)` | Manufacturing Order Confirmed Scrap in Percent |
| `MfgOrderConfirmedReworkInPct` | `DEC(5)` | Manufacturing Order Confirmed Rework in Percent |
| `MfgOrderConfirmedYieldInPct` | `DEC(5)` | Manufacturing Order Confirmed Yield in Percent |
| `BusinessArea` | `CHAR(4)` | Business Area |
| `CostEstimate` | `NUMC(12)` | Cost Estimate Number for Product Costing |
| `CompanyCodeCurrency` | `CUKY(5)` | Currency Key |
| `PlannedScrapAmountInCCCrcy` | `CURR(15)` | Planned Scrap Amount in Company Code Currency |
| `ConfirmedScrapAmountInCCCrcy` | `CURR(15)` | Confirmed Scrap Amount in Company Code Currency |
| `ConfirmedYieldAmountInCCCrcy` | `CURR(15)` | Confirmed Yield Amount in Company Code Currency |
| `ConfirmedReworkAmountInCCCrcy` | `CURR(15)` | Confirmed Rework Amount in Company Code Currency |
| `InventoryPrice` | `CURR(11)` | Inventory Price |
| `MaterialPriceUnitQty` | `DEC(5)` | Material Price Unit Quantity |
| `BaseUnit` | `UNIT(3)` | Base Unit of Measure |
| `ValuationArea` | `CHAR(4)` | Valuation Area |
| `FiscalPeriod` | `NUMC(3)` | Fiscal Period |
| `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `FiscalYear_2` | `NUMC(4)` | Fiscal Year |
| `DisplayCurrency` | `CUKY(5)` | Display Currency |
| `PlannedScrapAmountInDspCrcy` | `CURR(15)` | Planned Scrap Amount in Display Currency |
| `ConfirmedScrapAmountInDspCrcy` | `CURR(15)` | Confirmed Scrap Amount in Display Currency |
| `ConfirmedYieldAmountInDspCrcy` | `CURR(15)` | Confirmed Yield Amount in Display Currency |
| `ConfirmedReworkAmountInDspCrcy` | `CURR(15)` | Confirmed Rework Amount in Display Currency |
