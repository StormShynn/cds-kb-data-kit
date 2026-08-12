---
name: C_MFGORDERITEMSCRAPAMTQRY
description: "With this CDS view you can retrieve data , such as the following: Scrap and yield quantity of a manufacturing order item Corresponding amounts in company code Display currency based on the material inventory price This CDS view also provides the ratio between planned and confirmed quantities in percent. This CDS view provides the prerequisites for answering the following business questions: What are the planned and confirmed quantities of a manufacturing order item? What are the amounts of the confirmed scrap and rework quantities? What is the inventory price of a manufacturing order item material at the current date?"
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MFGORDERITEMSCRAPAMTQRY')/$value
semantic_en: "With this CDS view you can retrieve data , such as the following: Scrap and yield quantity of a manufacturing order item Corresponding amounts in company code Display currency based on the material inventory price This CDS view also provides the ratio between planned and confirmed quantities in percent. This CDS view provides the prerequisites for answering the following business questions: What are the planned and confirmed quantities of a manufacturing order item? What are the amounts of the confirmed scrap and rework quantities? What is the inventory price of a manufacturing order item material at the current date?"
semantic_vi: "Manufacturing Order Item Scrap Amount - Query — CDS view tiêu dùng dựa trên I_MfgOrderItemAmountCube."
keywords:
  - "manufacturing"
  - "order"
  - "item"
  - "scrap"
  - "amount"
  - "query"
  - "category"
  - "type"
  - "product"
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
  - bo:productionorder
---
# C_MFGORDERITEMSCRAPAMTQRY

**With this CDS view you can retrieve data , such as the following: Scrap and yield quantity of a manufacturing order item Corresponding amounts in company code Display currency based on the material inventory price This CDS view also provides the ratio between planned and confirmed quantities in percent. This CDS view provides the prerequisites for answering the following business questions: What are the planned and confirmed quantities of a manufacturing order item? What are the amounts of the confirmed scrap and rework quantities? What is the inventory price of a manufacturing order item material at the current date?**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MFGORDERITEMSCRAPAMTQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ManufacturingOrder` | ✓ | |  |  | `CHAR(12)` | Manufacturing Order ID |
| `ManufacturingOrderItem` | ✓ | |  |  | `NUMC(4)` | Manufacturing Order Item ID |
| `ManufacturingOrderCategory` |  | |  |  | `NUMC(2)` | Manufacturing Order Category |
| `ManufacturingOrderType` |  | |  |  | `CHAR(4)` | Manufacturing Order Type |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `ProductName` |  | |  | `_Product._Text[1: Language=$parameters.P_Language].ProductName` | `CHAR(40)` | Product Description |
| `ProductionPlant` |  | |  |  | `CHAR(4)` | Production Plant |
| `ProductionPlantName` |  | |  | `cast(item._ProductionPlant.PlantName as productionplantname preserving type)` | `CHAR(30)` | Production Plant Name |
| `MRPPlant` |  | |  |  | `CHAR(4)` | Planning Plant for an Order |
| `MRPPlantName` |  | |  | `cast(item._MRPPlant.PlantName as planningplantname preserving type)` | `CHAR(30)` | Planning Plant Name |
| `MRPController` |  | |  |  | `CHAR(3)` | MRP Controller |
| `MRPControllerName` |  | |  |  | `CHAR(18)` | MRP Controller Name |
| `ProductionSupervisor` |  | |  |  | `CHAR(3)` | Production Supervisor |
| `ProductionSupervisorName` |  | |  | `cast(item._ProductionSupervisor.ProductionSupervisorName as pph_txt_fevor preserving type)` | `CHAR(30)` | Production Supervisor Name |
| `StorageLocation` |  | |  |  | `CHAR(4)` | Storage Location |
| `StorageLocationName` |  | |  |  | `CHAR(16)` | Storage Location Name |
| `Batch` |  | |  |  | `CHAR(10)` | Batch Number |
| `InventoryValuationType` |  | |  |  | `CHAR(10)` | Inventory Valuation Type |
| `ReportingPeriod` |  | |  |  | `NUMC(2)` | Reporting Period |
| `ReportingPeriodName` |  | |  | `_ReportingPeriod._Text[1: Language=$parameters.P_Language].ReportingPeriodName` | `CHAR(60)` | Reporting Period Name |
| `MfgOrderConfirmedEndDate` |  | |  |  | `DATS(8)` | Manufacturing Order Confirmed End Date |
| `MfgOrderConfirmedEndTime` |  | |  |  | `TIMS(6)` | Manufacturing Order Confirmed End Time |
| `EndDateHour` |  | |  |  | `NUMC(2)` | End Date Hour |
| `EndDateWeekDay` |  | |  |  | `NUMC(1)` | Week Day |
| `EndDateWeekDayName` |  | |  | `cast(_EndDateWeekDay._Text[1: Language=$parameters.P_Language].WeekDayName as enddateweekdayname preserving type)` | `CHAR(60)` | End Date Week Day Name |
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

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MFGORDERITEMSCRAPAMTQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MFGORDERITEMSCRAPAMTQRY')/$value)*

```abap
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@Analytics.query: true
@Analytics.technicalName: 'CMFGORDITEMAMTQ'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@ObjectModel.supportedCapabilities: [#ANALYTICAL_QUERY]
@ObjectModel.usageType: {serviceQuality: #D, sizeCategory: #XL, dataClass: #MIXED}
@OData.publish: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #CONSUMPTION
@EndUserText.label: 'Manufacturing Order Item Scrap Amount - Query'

define view entity C_MfgOrderItemScrapAmtQry
  with parameters
    P_DisplayCurrency  : vdm_v_display_currency,
    P_ExchangeRateType : kurst,
    @Consumption.hidden : true
    @Environment.systemField : #SYSTEM_LANGUAGE
    P_Language : sylangu
  as select from I_MfgOrderItemAmountCube(P_DisplayCurrency : $parameters.P_DisplayCurrency, 
                                          P_ExchangeRateType : $parameters.P_ExchangeRateType) as item
{
  key item.ManufacturingOrder,
  key item.ManufacturingOrderItem,

      // Category and Type
      @Consumption.filter: { selectionType: #SINGLE, mandatory: false, multipleSelections: true }
      item.ManufacturingOrderCategory,
      @Consumption.filter: { selectionType: #RANGE, mandatory: false, multipleSelections: true }
      item.ManufacturingOrderType,

      // Assignments
      @ObjectModel.text.element: ['ProductName']
      @Consumption.filter: { selectionType: #RANGE, mandatory: false, multipleSelections: true }
      item.Product,
      @Semantics.text: true
      _Product._Text[1: Language=$parameters.P_Language].ProductName as ProductName,

      @AnalyticsDetails.query.axis: #ROWS
      @ObjectModel.text.element: ['ProductionPlantName']
      @Consumption.filter: { selectionType: #RANGE, mandatory: false, multipleSelections: true }
      item.ProductionPlant,
      @Semantics.text: true
      cast(item._ProductionPlant.PlantName as productionplantname preserving type) as ProductionPlantName,

      @ObjectModel.text.element: ['MRPPlantName']
      @Consumption.filter: { selectionType: #RANGE, mandatory: false, multipleSelections: true }
      item.MRPPlant,
      @Semantics.text: true
      cast(item._MRPPlant.PlantName as planningplantname preserving type) as MRPPlantName,

      @ObjectModel.text.element: ['MRPControllerName']
      @Consumption.filter: { selectionType: #RANGE, mandatory: false, multipleSelections: true }
      item.MRPController,
      @Semantics.text: true
      item._MRPController.MRPControllerName,

      @ObjectModel.text.element: ['ProductionSupervisorName']
      @Consumption.filter: { selectionType: #RANGE, mandatory: false, multipleSelections: true }
      item.ProductionSupervisor,
      @Semantics.text: true
      cast(item._ProductionSupervisor.ProductionSupervisorName as pph_txt_fevor preserving type) as ProductionSupervisorName,

      @ObjectModel.text.element: ['StorageLocationName']
      item.StorageLocation,
      @Semantics.text: true
      item._StorageLocation.StorageLocationName as StorageLocationName,
      item.Batch,
      item.InventoryValuationType,

      // Reporting Period and Dates
      @ObjectModel.text.element: ['ReportingPeriodName']
      item.ReportingPeriod,
      @Semantics.text: true
      _ReportingPeriod._Text[1: Language=$parameters.P_Language].ReportingPeriodName as ReportingPeriodName,
      item.MfgOrderConfirmedEndDate,
      item.MfgOrderConfirmedEndTime,
      item.EndDateHour,
      @ObjectModel.text.element: ['EndDateWeekDayName']     
      item.EndDateWeekDay,
      @Semantics.text: true
      cast(_EndDateWeekDay._Text[1: Language=$parameters.P_Language].WeekDayName as enddateweekdayname preserving type) as EndDateWeekDayName,
      @Semantics.calendar.week: true
      item.EndDateWeek,
      item.EndDateMonth,
      @Semantics.calendar.year: true
      item.EndDateYear,
      @Semantics.calendar.yearMonth: true
      item.EndDateYearMonth,

      // Item Quantities and UoM
      @AnalyticsDetails.query.axis: #COLUMNS
      @AnalyticsDetails.query.hidden: true
      item.ManufacturingOrderUnit,
      
      @AnalyticsDetails.query.axis: #COLUMNS
      @AnalyticsDetails.query.hidden: true
      @Semantics.quantity.unitOfMeasure: 'ManufacturingOrderUnit'
      @DefaultAggregation: #SUM
      item.MfgOrderItemPlannedTotalQty,
      
      @AnalyticsDetails.query.axis: #COLUMNS
      @AnalyticsDetails.query.hidden: true
      @Semantics.quantity.unitOfMeasure: 'ManufacturingOrderUnit'
      @DefaultAggregation: #SUM
      item.MfgOrderItemPlannedScrapQty,
      
      @AnalyticsDetails.query.axis: #COLUMNS
      @AnalyticsDetails.query.hidden: true
      @Semantics.quantity.unitOfMeasure: 'ManufacturingOrderUnit'
      @DefaultAggregation: #SUM
      item.MfgOrderItemPlannedYieldQty,
      
      @AnalyticsDetails.query.axis: #COLUMNS
      @AnalyticsDetails.query.hidden: true
      @Semantics.quantity.unitOfMeasure: 'ManufacturingOrderUnit'
      @DefaultAggregation: #SUM
      item.MfgOrderItemGoodsReceiptQty,
      
      @AnalyticsDetails.query.axis: #COLUMNS
      @AnalyticsDetails.query.hidden: true
      @Semantics.quantity.unitOfMeasure: 'ManufacturingOrderUnit'
      @DefaultAggregation: #SUM
      item.MfgOrderItemActualDeviationQty,

      // Header Quantities and UoM
      @AnalyticsDetails.query.axis: #COLUMNS
      @AnalyticsDetails.query.hidden: true
      @Semantics.quantity.unitOfMeasure: 'ManufacturingOrderUnit'
      @DefaultAggregation: #SUM
      item.MfgOrderConfirmedYieldQty,
      
      @AnalyticsDetails.query.axis: #COLUMNS
      @AnalyticsDetails.query.hidden: true
      @Semantics.quantity.unitOfMeasure: 'ManufacturingOrderUnit'
      @DefaultAggregation: #SUM
      item.MfgOrderConfirmedScrapQty,
      
      @AnalyticsDetails.query.axis: #COLUMNS
      @AnalyticsDetails.query.hidden: true
      @Semantics.quantity.unitOfMeasure: 'ManufacturingOrderUnit'
      @DefaultAggregation: #SUM
      item.MfgOrderConfirmedReworkQty,
      
      @AnalyticsDetails.query.axis: #COLUMNS
      @AnalyticsDetails.query.hidden: true
      @Semantics.quantity.unitOfMeasure: 'ManufacturingOrderUnit'
      @DefaultAggregation: #SUM
      item.MfgOrderConfirmedTotalQty,

      // Assignments FI/CO
      item.BusinessArea,
      item.CostEstimate,

      // Amounts
      item.MaterialPriceUnitQty,
      item.ValuationArea,
      item.FiscalPeriod,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'FiscalYear_2'
      item.FiscalYear,
      item.FiscalYear_2,
      
      @AnalyticsDetails.query.axis: #COLUMNS
      item.CompanyCodeCurrency,

      @AnalyticsDetails.query.axis: #COLUMNS
      @AnalyticsDetails.query.hidden: true
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'      
      item.InventoryPrice,

      @AnalyticsDetails.query.axis: #COLUMNS
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      item.PlannedScrapAmountInCCCrcy,

      @AnalyticsDetails.query.axis: #COLUMNS
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      item.ConfirmedScrapAmountInCCCrcy,

      @AnalyticsDetails.query.axis: #COLUMNS
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'      
      item.ConfirmedYieldAmountInCCCrcy,
      
      @AnalyticsDetails.query.axis: #COLUMNS
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'      
      item.ConfirmedReworkAmountInCCCrcy,
      
      // ... in display currency
      @AnalyticsDetails.query.axis: #COLUMNS
      item.DisplayCurrency,
      
      @AnalyticsDetails.query.axis: #COLUMNS
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      item.PlannedScrapAmountInDspCrcy,
      
      @AnalyticsDetails.query.axis: #COLUMNS
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'       
      item.ConfirmedScrapAmountInDspCrcy,
      
      @AnalyticsDetails.query.axis: #COLUMNS
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      item.ConfirmedYieldAmountInDspCrcy,
      
      @AnalyticsDetails.query.axis: #COLUMNS
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'      
      item.ConfirmedReworkAmountInDspCrcy,

      // Percentages
      @AnalyticsDetails.query.axis: #COLUMNS
      @DefaultAggregation: #MAX
      item.MfgOrderItemPlannedScrapPct,
      
      @AnalyticsDetails.query.axis: #COLUMNS
      @DefaultAggregation: #MAX
      item.MfgOrderConfirmedScrapInPct,
      
      @AnalyticsDetails.query.axis: #COLUMNS
      @DefaultAggregation: #MAX
      item.MfgOrderConfirmedReworkInPct,
      
      @AnalyticsDetails.query.axis: #COLUMNS
      @DefaultAggregation: #MAX
      item.MfgOrderConfirmedYieldInPct
}
where item.MfgOrderConfirmedEndDate > '19700101';
```
