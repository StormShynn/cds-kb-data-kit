---
name: I_MFGORDERITEMAMOUNTCUBE
description: "With this CDS view you can retrieve data, such as the following: Scrap or yield quantity of a manufacturing order item Corresponding amounts in company code Display currency based on the material inventory price This CDS view also provides the ratio between planned and confirmed quantities in percent. This CDS view provides the prerequisites for answering the following business questions: What are the planned and confirmed quantities of a manufacturing order item? What are the amounts of the confirmed scrap and rework quantities? What is the inventory price of a manufacturing order item material at the current date?"
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MFGORDERITEMAMOUNTCUBE')/$value
semantic_en: "With this CDS view you can retrieve data, such as the following: Scrap or yield quantity of a manufacturing order item Corresponding amounts in company code Display currency based on the material inventory price This CDS view also provides the ratio between planned and confirmed quantities in percent. This CDS view provides the prerequisites for answering the following business questions: What are the planned and confirmed quantities of a manufacturing order item? What are the amounts of the confirmed scrap and rework quantities? What is the inventory price of a manufacturing order item material at the current date?"
semantic_vi: "Manufacturing Order Item Amount - Cube — CDS view giao diện dựa trên I_MfgOrderItemAmount."
keywords:
  - "manufacturing"
  - "order"
  - "item"
  - "amount"
  - "cube"
  - "category"
  - "type"
  - "product"
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
  - bo:productionorder
---
# I_MFGORDERITEMAMOUNTCUBE

**With this CDS view you can retrieve data, such as the following: Scrap or yield quantity of a manufacturing order item Corresponding amounts in company code Display currency based on the material inventory price This CDS view also provides the ratio between planned and confirmed quantities in percent. This CDS view provides the prerequisites for answering the following business questions: What are the planned and confirmed quantities of a manufacturing order item? What are the amounts of the confirmed scrap and rework quantities? What is the inventory price of a manufacturing order item material at the current date?**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MFGORDERITEMAMOUNTCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ManufacturingOrder` | ✓ | |  |  | `CHAR(12)` | Manufacturing Order ID |
| `ManufacturingOrderItem` | ✓ | |  |  | `NUMC(4)` | Manufacturing Order Item ID |
| `ManufacturingOrderCategory` |  | |  |  | `NUMC(2)` | Manufacturing Order Category |
| `ManufacturingOrderType` |  | |  |  | `CHAR(4)` | Manufacturing Order Type |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `ProductionPlant` |  | |  |  | `CHAR(4)` | Production Plant |
| `MRPPlant` |  | |  |  | `CHAR(4)` | Planning Plant for an Order |
| `MRPController` |  | |  |  | `CHAR(3)` | MRP Controller |
| `ProductionSupervisor` |  | |  |  | `CHAR(3)` | Production Supervisor |
| `MfgOrderItemIsFinallyDelivered` |  | |  |  | `CHAR(1)` | "Delivery Completed" Indicator |
| `MaterialGoodsReceiptDuration` |  | |  |  | `DEC(3)` | Goods Receipt Processing Duration in Days |
| `StorageLocation` |  | |  |  | `CHAR(4)` | Storage Location |
| `Batch` |  | |  |  | `CHAR(10)` | Batch Number |
| `InventoryValuationType` |  | |  |  | `CHAR(10)` | Inventory Valuation Type |
| `MfgOrderPlannedStartDate` |  | |  |  | `DATS(8)` | Manufacturing Order Planned Start Date |
| `MfgOrderPlannedStartTime` |  | |  |  | `TIMS(6)` | Manufacturing Order Planned Start Time |
| `MfgOrderScheduledStartDate` |  | |  |  | `DATS(8)` | Manufacturing Order Scheduled Start Date |
| `MfgOrderScheduledStartTime` |  | |  |  | `TIMS(6)` | Manufacturing Order Scheduled Start Time |
| `MfgOrderActualStartDate` |  | |  |  | `DATS(8)` | Manufacturing Order Actual Start Date |
| `MfgOrderActualStartTime` |  | |  |  | `TIMS(6)` | Manufacturing Order Actual Start Time |
| `MfgOrderPlannedEndDate` |  | |  |  | `DATS(8)` | Manufacturing Order Planned End Date |
| `MfgOrderPlannedEndTime` |  | |  |  | `TIMS(6)` | Manufacturing Order Planned End Time |
| `MfgOrderScheduledEndDate` |  | |  |  | `DATS(8)` | Manufacturing Order Scheduled End Date |
| `MfgOrderScheduledEndTime` |  | |  |  | `TIMS(6)` | Manufacturing Order Scheduled End Time |
| `MfgOrderConfirmedEndDate` |  | |  |  | `DATS(8)` | Manufacturing Order Confirmed End Date |
| `MfgOrderConfirmedEndTime` |  | |  |  | `TIMS(6)` | Manufacturing Order Confirmed End Time |
| `MfgOrderActualEndDate` |  | |  |  | `DATS(8)` | Manufacturing Order Actual End Date |
| `MfgOrderScheduledReleaseDate` |  | |  |  | `DATS(8)` | Manufacturing Order Scheduled Release Date |
| `MfgOrderActualReleaseDate` |  | |  |  | `DATS(8)` | Manufacturing Order Actual Release Date |
| `MfgOrderItemPlannedEndDate` |  | |  |  | `DATS(8)` | Manufacturing Order Item Planned End Date |
| `MfgOrderItemScheduledEndDate` |  | |  |  | `DATS(8)` | Manufacturing Order Item Scheduled End Date |
| `MfgOrderItemActualDeliveryDate` |  | |  |  | `DATS(8)` | Actual Delivery/Finish Date |
| `ReportingPeriod` |  | |  | `cast(date.ReportingPeriod as pph_reportingperiod preserving type)` | `NUMC(2)` | Reporting Period |
| `EndDateHour` |  | |  | `cast(left(item.MfgOrderConfirmedEndTime,2) as enddatehour)` | `NUMC(2)` | End Date Hour |
| `EndDateWeekDay` |  | |  | `ReportingDateWeekDay` | `NUMC(1)` | Week Day |
| `EndDateWeek` |  | |  | `ReportingDateWeek` | `NUMC(2)` | Calendar Week |
| `EndDateMonth` |  | |  | `ReportingDateMonth` | `NUMC(2)` | Calendar Month |
| `EndDateYear` |  | |  | `ReportingDateYear` | `NUMC(4)` | Calendar Year |
| `EndDateYearMonth` |  | |  | `cast(concat(date.ReportingDateYear, date.ReportingDateMonth) as vdm_yearmonth)` | `NUMC(6)` | Year Month |
| `ManufacturingOrderUnit` |  | |  | `ProductionUnit` | `UNIT(3)` | Production Unit of Measure |
| `MfgOrderItemPlannedTotalQty` |  | |  |  | `QUAN(13)` | Order Item Planned Total Quantity |
| `MfgOrderItemPlannedScrapQty` |  | |  |  | `QUAN(13)` | Order Item Planned Scrap Quantity |
| `MfgOrderItemPlannedYieldQty` |  | |  |  | `QUAN(13)` | Planned Yield Quantity |
| `MfgOrderItemGoodsReceiptQty` |  | |  |  | `QUAN(13)` | Quantity of Goods Received for the Order Item |
| `MfgOrderItemActualDeviationQty` |  | |  |  | `QUAN(13)` | Expected Surplus/Deficit For Goods Receipt |
| `MfgOrderConfirmedYieldQty` |  | |  |  | `QUAN(13)` | Confirmed Yield Quantity From Order Confirmation |
| `MfgOrderConfirmedScrapQty` |  | |  |  | `QUAN(13)` | Confirmed Scrap Quantity From Order Confirmation |
| `MfgOrderConfirmedReworkQty` |  | |  |  | `QUAN(13)` | Total Confirmed Rework Quantity |
| `MfgOrderConfirmedTotalQty` |  | |  |  | `QUAN(13)` | Total Quantity From Confirmation |
| `MfgOrderItemPlannedScrapPct` |  | |  | `case item.MfgOrderItemPlannedTotalQty when 0 then 0 else cast(division( item.MfgOrderItemPlannedScrapQty * 100, item.MfgOrderItemPlannedTotalQty, 2) as mfgorderitemplannedscrappct) end` | `DEC(5)` | Manufacturing Order Planned Item Scrap in Percent |
| `MfgOrderConfirmedScrapInPct` |  | |  | `case item.MfgOrderConfirmedTotalQty when 0 then 0 else cast(division( item.MfgOrderConfirmedScrapQty * 100, item.MfgOrderConfirmedTotalQty, 2) as mfgorderconfscrapinpct) end` | `DEC(5)` | Manufacturing Order Confirmed Scrap in Percent |
| `MfgOrderConfirmedReworkInPct` |  | |  | `case item.MfgOrderConfirmedTotalQty when 0 then 0 else cast(division( item.MfgOrderConfirmedReworkQty * 100, item.MfgOrderConfirmedTotalQty, 2) as mfgorderconfreworkinpct) end` | `DEC(5)` | Manufacturing Order Confirmed Rework in Percent |
| `MfgOrderConfirmedYieldInPct` |  | |  | `case item.MfgOrderConfirmedTotalQty when 0 then 0 else cast(division( item.MfgOrderConfirmedYieldQty * 100, item.MfgOrderConfirmedTotalQty, 2) as mfgorderconfyieldinpct) end` | `DEC(5)` | Manufacturing Order Confirmed Yield in Percent |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `CostEstimate` |  | |  |  | `NUMC(12)` | Cost Estimate Number for Product Costing |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `PlannedScrapAmountInCCCrcy` |  | |  | `cast(item.PlannedScrapAmountInCCCrcy as plndscrapamtinccrcy preserving type)` | `CURR(15)` | Planned Scrap Amount in Company Code Currency |
| `ConfirmedScrapAmountInCCCrcy` |  | |  | `cast(item.ConfirmedScrapAmountInCCCrcy as confscrapamtinccrcy preserving type)` | `CURR(15)` | Confirmed Scrap Amount in Company Code Currency |
| `ConfirmedYieldAmountInCCCrcy` |  | |  | `cast(item.ConfirmedYieldAmountInCCCrcy as confyieldamtinccrcy preserving type)` | `CURR(15)` | Confirmed Yield Amount in Company Code Currency |
| `ConfirmedReworkAmountInCCCrcy` |  | |  | `cast(item.ConfirmedReworkAmountInCCCrcy as confreworkamtinccrcy preserving type)` | `CURR(15)` | Confirmed Rework Amount in Company Code Currency |
| `InventoryPrice` |  | |  |  | `CURR(11)` | Inventory Price |
| `MaterialPriceUnitQty` |  | |  |  | `DEC(5)` | Material Price Unit Quantity |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `ValuationArea` |  | |  |  | `CHAR(4)` | Valuation Area |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalYear` |  | |  | `cast(item.FiscalYear as gjahr preserving type)` | `NUMC(4)` | Fiscal Year |
| `FiscalYear_2` |  | |  | `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `DisplayCurrency` |  | |  | `cast($parameters.P_DisplayCurrency as displaycurrency preserving type)` | `CUKY(5)` | Display Currency |
| `PlannedScrapAmountInDspCrcy` |  | |  | `cast( currency_conversion( amount => item.PlannedScrapAmountInCCCrcy, source_currency => item.CompanyCodeCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => item.CurrentDate, exchange_rate_type => :P_ExchangeRateType, error_handling => 'FAIL_ON_ERROR', round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) as plndscrapamtindispcrcy preserving type)` | `CURR(15)` | Planned Scrap Amount in Display Currency |
| `ConfirmedScrapAmountInDspCrcy` |  | |  | `cast( currency_conversion( amount => item.ConfirmedScrapAmountInCCCrcy, source_currency => item.CompanyCodeCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => item.CurrentDate, exchange_rate_type => :P_ExchangeRateType, error_handling => 'FAIL_ON_ERROR', round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) as confscrapamtindispcrcy preserving type)` | `CURR(15)` | Confirmed Scrap Amount in Display Currency |
| `ConfirmedYieldAmountInDspCrcy` |  | |  | `cast( currency_conversion( amount => item.ConfirmedYieldAmountInCCCrcy, source_currency => item.CompanyCodeCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => item.CurrentDate, exchange_rate_type => :P_ExchangeRateType, error_handling => 'FAIL_ON_ERROR', round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) as confyieldamtindispcrcy preserving type)` | `CURR(15)` | Confirmed Yield Amount in Display Currency |
| `ConfirmedReworkAmountInDspCrcy` |  | |  | `cast( currency_conversion( amount => item.ConfirmedReworkAmountInCCCrcy, source_currency => item.CompanyCodeCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => item.CurrentDate, exchange_rate_type => :P_ExchangeRateType, error_handling => 'FAIL_ON_ERROR', round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) as confreworkamtindispcrcy preserving type)` | `CURR(15)` | Confirmed Rework Amount in Display Currency |
| `_ManufacturingOrderUnit` |  | |  | `_ProductionUnit` |  |  |
| `_DisplayCurrency` | | ✓ | | | | |
| `_ReportingPeriod` | | ✓ | | | | |
| `_EndDateWeekDay` | | ✓ | | | | |
| `_Batch` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DisplayCurrency` | `I_Currency` | [0..1] |
| `_ReportingPeriod` | `I_ReportingPeriod` | [0..1] |
| `_EndDateWeekDay` | `I_WeekDay` | [0..1] |
| `_Batch` | `I_Batch` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MFGORDERITEMAMOUNTCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MFGORDERITEMAMOUNTCUBE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IMFGORDITEMAMTC'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@AccessControl.privilegedAssociations: ['_MRPController', '_ProductionSupervisor']
@Analytics.dataCategory: #CUBE
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@ObjectModel.supportedCapabilities: [#ANALYTICAL_PROVIDER]
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #XL, dataClass: #MIXED}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Manufacturing Order Item Amount - Cube'

define view I_MfgOrderItemAmountCube
  with parameters
    P_DisplayCurrency  : vdm_v_display_currency,
    P_ExchangeRateType : kurst
  as select from I_MfgOrderItemAmount as item
    inner join   P_PPH_ReportingDate3 as date on item.MfgOrderConfirmedEndDate = date.ReportingDate

  association [0..1] to I_Currency        as _DisplayCurrency on  $projection.DisplayCurrency = _DisplayCurrency.Currency
  association [0..1] to I_ReportingPeriod as _ReportingPeriod on  $projection.ReportingPeriod = _ReportingPeriod.ReportingPeriod
  association [0..1] to I_WeekDay         as _EndDateWeekDay  on  $projection.EndDateWeekDay = _EndDateWeekDay.WeekDay
  association [0..1] to I_Batch           as _Batch           on  $projection.ProductionPlant = _Batch.Plant
                                                              and $projection.Product         = _Batch.Material
                                                              and $projection.Batch           = _Batch.Batch
{
  key item.ManufacturingOrder,
  key item.ManufacturingOrderItem,

      // Category and Type
      @ObjectModel.foreignKey.association: '_MfgOrderCategory'
      item.ManufacturingOrderCategory,
      @ObjectModel.foreignKey.association: '_MfgOrderType'
      item.ManufacturingOrderType,

      // Assignments
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductStdVH', element: 'Product' } } ]
--    @ObjectModel.foreignKey.association: '_Product'
      item.Product,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlantStdVH', element: 'Plant' } } ]
      @ObjectModel.foreignKey.association: '_ProductionPlant'
      item.ProductionPlant,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlantStdVH', element: 'Plant' } } ]
      @ObjectModel.foreignKey.association: '_MRPPlant'
      item.MRPPlant,
      @ObjectModel.foreignKey.association: '_MRPController'
      item.MRPController,
      @ObjectModel.foreignKey.association: '_ProductionSupervisor'
      item.ProductionSupervisor,

      // Goods Receipt data
      item.MfgOrderItemIsFinallyDelivered,
      item.MaterialGoodsReceiptDuration,
      @ObjectModel.foreignKey.association: '_StorageLocation'
      item.StorageLocation,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_BatchStdVH', element: 'Batch' } } ]     
      item.Batch,
      @ObjectModel.foreignKey.association: '_InventoryValuationType'
      item.InventoryValuationType,

      // Order Header Dates and Times
      item.MfgOrderPlannedStartDate,
      item.MfgOrderPlannedStartTime,
      item.MfgOrderScheduledStartDate,
      item.MfgOrderScheduledStartTime,
      item.MfgOrderActualStartDate,
      item.MfgOrderActualStartTime,
      item.MfgOrderPlannedEndDate,
      item.MfgOrderPlannedEndTime,
      item.MfgOrderScheduledEndDate,
      item.MfgOrderScheduledEndTime,
      item.MfgOrderConfirmedEndDate,
      item.MfgOrderConfirmedEndTime,
      item.MfgOrderActualEndDate,
      item.MfgOrderScheduledReleaseDate,
      item.MfgOrderActualReleaseDate, 

      // Order Item Dates
      item.MfgOrderItemPlannedEndDate,
      item.MfgOrderItemScheduledEndDate,
      item.MfgOrderItemActualDeliveryDate,
      
      // Reporting Period and Dates
      @ObjectModel.foreignKey.association: '_ReportingPeriod'
      cast(date.ReportingPeriod as pph_reportingperiod preserving type)              as ReportingPeriod,
      cast(left(item.MfgOrderConfirmedEndTime,2) as enddatehour)                     as EndDateHour,
      @ObjectModel.foreignKey.association: '_EndDateWeekDay'
      date.ReportingDateWeekDay                                                      as EndDateWeekDay,
      @Semantics.calendar.week: true
      date.ReportingDateWeek                                                         as EndDateWeek,
      @Semantics.calendar.month: true
      date.ReportingDateMonth                                                        as EndDateMonth,
      @Semantics.calendar.year: true
      date.ReportingDateYear                                                         as EndDateYear,
      @Semantics.calendar.yearMonth: true
      cast(concat(date.ReportingDateYear, date.ReportingDateMonth) as vdm_yearmonth) as EndDateYearMonth,

      // Item Quantities and UoM
      @Semantics.unitOfMeasure: true
      item.ProductionUnit as ManufacturingOrderUnit,
      @Semantics.quantity.unitOfMeasure: 'ManufacturingOrderUnit'
      @Aggregation.default: #SUM
      item.MfgOrderItemPlannedTotalQty,
      @Semantics.quantity.unitOfMeasure: 'ManufacturingOrderUnit'
      @Aggregation.default: #SUM
      item.MfgOrderItemPlannedScrapQty,
      @Semantics.quantity.unitOfMeasure: 'ManufacturingOrderUnit'
      @Aggregation.default: #SUM
      item.MfgOrderItemPlannedYieldQty,
      @Semantics.quantity.unitOfMeasure: 'ManufacturingOrderUnit'
      @Aggregation.default: #SUM
      item.MfgOrderItemGoodsReceiptQty,
      @Semantics.quantity.unitOfMeasure: 'ManufacturingOrderUnit'
      @Aggregation.default: #SUM
      item.MfgOrderItemActualDeviationQty,

      // Header Quantities and UoM
      @Semantics.quantity.unitOfMeasure: 'ManufacturingOrderUnit'
      @Aggregation.default: #SUM
      item.MfgOrderConfirmedYieldQty,
      @Semantics.quantity.unitOfMeasure: 'ManufacturingOrderUnit'
      @Aggregation.default: #SUM
      item.MfgOrderConfirmedScrapQty,
      @Semantics.quantity.unitOfMeasure: 'ManufacturingOrderUnit'
      @Aggregation.default: #SUM
      item.MfgOrderConfirmedReworkQty,
      @Semantics.quantity.unitOfMeasure: 'ManufacturingOrderUnit'
      @Aggregation.default: #SUM
      item.MfgOrderConfirmedTotalQty,

      // Quantities as Percent
      @Aggregation.default: #MAX
      case item.MfgOrderItemPlannedTotalQty
        when 0 then 0
        else cast(division( item.MfgOrderItemPlannedScrapQty * 100, item.MfgOrderItemPlannedTotalQty, 2) as mfgorderitemplannedscrappct) 
      end as MfgOrderItemPlannedScrapPct,
      @Aggregation.default: #MAX
      case item.MfgOrderConfirmedTotalQty
        when 0 then 0
        else cast(division( item.MfgOrderConfirmedScrapQty * 100, item.MfgOrderConfirmedTotalQty, 2) as mfgorderconfscrapinpct) 
      end as MfgOrderConfirmedScrapInPct,
      @Aggregation.default: #MAX
      case item.MfgOrderConfirmedTotalQty
        when 0 then 0
        else cast(division( item.MfgOrderConfirmedReworkQty * 100, item.MfgOrderConfirmedTotalQty, 2) as mfgorderconfreworkinpct) 
      end as MfgOrderConfirmedReworkInPct,
      @Aggregation.default: #MAX
      case item.MfgOrderConfirmedTotalQty
        when 0 then 0
        else cast(division( item.MfgOrderConfirmedYieldQty * 100, item.MfgOrderConfirmedTotalQty, 2) as mfgorderconfyieldinpct)
      end as MfgOrderConfirmedYieldInPct,

      // Assignments FI/CO
      item.BusinessArea,
      item.CostEstimate,

      // Amounts
      @Semantics.currencyCode: true
      item.CompanyCodeCurrency,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      cast(item.PlannedScrapAmountInCCCrcy    as plndscrapamtinccrcy  preserving type) as PlannedScrapAmountInCCCrcy,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      cast(item.ConfirmedScrapAmountInCCCrcy  as confscrapamtinccrcy  preserving type) as ConfirmedScrapAmountInCCCrcy,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'      
      cast(item.ConfirmedYieldAmountInCCCrcy  as confyieldamtinccrcy  preserving type) as ConfirmedYieldAmountInCCCrcy,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'      
      cast(item.ConfirmedReworkAmountInCCCrcy as confreworkamtinccrcy preserving type) as ConfirmedReworkAmountInCCCrcy,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      item.InventoryPrice,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      @Aggregation.default: #SUM
      item.MaterialPriceUnitQty,
      @Semantics.unitOfMeasure: true
      item.BaseUnit,
      @ObjectModel.foreignKey.association: '_ValuationArea'
      item.ValuationArea,
      item.FiscalPeriod,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'FiscalYear_2'
      cast(item.FiscalYear as gjahr preserving type) as FiscalYear,
      item.FiscalYear                                as FiscalYear_2,

      @Semantics.currencyCode: true
      cast($parameters.P_DisplayCurrency as displaycurrency preserving type) as DisplayCurrency,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( currency_conversion(
        amount => item.PlannedScrapAmountInCCCrcy,
        source_currency => item.CompanyCodeCurrency,
        target_currency => :P_DisplayCurrency,
        exchange_rate_date => item.CurrentDate,
        exchange_rate_type => :P_ExchangeRateType,
        error_handling => 'FAIL_ON_ERROR',
        round => #CDSBoolean.true,
        decimal_shift => #CDSBoolean.true,
        decimal_shift_back => #CDSBoolean.true
        ) as plndscrapamtindispcrcy  preserving type) as PlannedScrapAmountInDspCrcy,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'       
      cast( currency_conversion(
        amount => item.ConfirmedScrapAmountInCCCrcy,
        source_currency => item.CompanyCodeCurrency,
        target_currency => :P_DisplayCurrency,
        exchange_rate_date => item.CurrentDate,
        exchange_rate_type => :P_ExchangeRateType,
        error_handling => 'FAIL_ON_ERROR',
        round => #CDSBoolean.true,
        decimal_shift => #CDSBoolean.true,
        decimal_shift_back => #CDSBoolean.true
        ) as confscrapamtindispcrcy  preserving type) as ConfirmedScrapAmountInDspCrcy,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'       
      cast( currency_conversion(
        amount => item.ConfirmedYieldAmountInCCCrcy,
        source_currency => item.CompanyCodeCurrency,
        target_currency => :P_DisplayCurrency,
        exchange_rate_date => item.CurrentDate,
        exchange_rate_type => :P_ExchangeRateType,
        error_handling => 'FAIL_ON_ERROR',
        round => #CDSBoolean.true,
        decimal_shift => #CDSBoolean.true,
        decimal_shift_back => #CDSBoolean.true
        ) as confyieldamtindispcrcy  preserving type) as ConfirmedYieldAmountInDspCrcy,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'       
      cast( currency_conversion(
        amount => item.ConfirmedReworkAmountInCCCrcy,
        source_currency => item.CompanyCodeCurrency,
        target_currency => :P_DisplayCurrency,
        exchange_rate_date => item.CurrentDate,
        exchange_rate_type => :P_ExchangeRateType,
        error_handling => 'FAIL_ON_ERROR',
        round => #CDSBoolean.true,
        decimal_shift => #CDSBoolean.true,
        decimal_shift_back => #CDSBoolean.true
        ) as confreworkamtindispcrcy preserving type) as ConfirmedReworkAmountInDspCrcy,

      // Associations
      item._MfgOrderCategory,
      item._MfgOrderType,
      item._ProductionPlant,
      item._ProductionSupervisor,
      item._MRPController,
      item._MRPPlant,
      item._Product,
      item._ProductionUnit as _ManufacturingOrderUnit,
      item._BaseUnit,
      item._StorageLocation,
      _Batch,
      item._InventoryValuationType,
      item._ValuationArea,
      item._CompanyCodeCurrency,
      _DisplayCurrency,
      _ReportingPeriod,
      _EndDateWeekDay
} 
  where item.LedgerValnCrcyRoleIsUsedInLogs = 'X';
```
