---
name: C_MATERIALSTOCKTIMESERIES
description: "This CDS view provides the prerequisites for answering the following business question: How does the stock quantity evolve over a certain time period such as a day, week, or month?"
app_component: MM-IM-VDM-SGM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MATERIALSTOCKTIMESERIES')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business question: How does the stock quantity evolve over a certain time period such as a day, week, or month?"
semantic_vi: "Material stock for periods by type — CDS view tiêu dùng (transactional data) dựa trên I_MaterialStockTimeSeries."
keywords:
  - "material"
  - "stock"
  - "for"
  - "periods"
  - "type"
  - "period"
  - "date"
  - "year"
  - "plant"
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
  - material
---
# C_MATERIALSTOCKTIMESERIES

**This CDS view provides the prerequisites for answering the following business question: How does the stock quantity evolve over a certain time period such as a day, week, or month?**

| Property | Value |
|---|---|
| App Component | `MM-IM-VDM-SGM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MATERIALSTOCKTIMESERIES')/$value) |

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
| `CompanyCodeName` |  | |  |  | `CHAR(25)` | Name of Company Code or Company |
| `PlantName` |  | |  |  | `CHAR(30)` | Plant Name |
| `StorageLocationName` |  | |  |  | `CHAR(16)` | Storage Location Name |
| `SupplierName` |  | |  |  | `CHAR(80)` | Name of Supplier |
| `CustomerName` |  | |  |  | `CHAR(80)` | Name of Customer |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MATERIALSTOCKTIMESERIES')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MATERIALSTOCKTIMESERIES')/$value)*

```abap
@EndUserText.label: 'Material stock for periods by type'
@AccessControl.authorizationCheck:#PRIVILEGED_ONLY
@ObjectModel: {
                usageType: {
                             sizeCategory: #XXL,
                             serviceQuality: #D,
                             dataClass:#TRANSACTIONAL
                           },
                modelingPattern: #ANALYTICAL_QUERY,
                supportedCapabilities: [#ANALYTICAL_QUERY]
              }
@VDM.viewType: #CONSUMPTION
@Analytics.query : true
@Analytics.technicalName: 'CMATSTOCKTIMESER'
@Metadata.allowExtensions: true
define view entity C_MaterialStockTimeSeries
  with parameters
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_LANGUAGE
    P_Language   : sylangu,
    P_StartDate  : vdm_v_start_date,
    P_EndDate    : vdm_v_end_date,
    P_PeriodType : nsdm_period_type

  as select from I_MaterialStockTimeSeries(P_StartDate:  $parameters.P_StartDate,
                                           P_EndDate:    $parameters.P_EndDate,
                                           P_PeriodType: $parameters.P_PeriodType)
{
  // Period
  PeriodType,
  EndDate,
  YearPeriod,

  // Stock Identifier
  @AnalyticsDetails.query.axis: #ROWS
  @ObjectModel.text.element: ['MaterialName']
  Material,
  @ObjectModel.text.element: ['PlantName']
  Plant,
  @ObjectModel.text.element: ['StorageLocationName']
  StorageLocation,
  Batch,
  @ObjectModel.text.element: ['SupplierName']
  Supplier,
  SDDocument,
  SDDocumentItem,
  WBSElementInternalID,
  @ObjectModel.text.element: ['CustomerName']
  Customer,
  @ObjectModel.text.element: ['InventoryStockTypeName']
  InventoryStockType,
  @ObjectModel.text.element: ['InventorySpecialStockTypeName']
  InventorySpecialStockType,

  // Stock Groups
  CompanyCode,
  @Semantics.fiscal.yearVariant: true
  FiscalYearVariant,

  // Units
  MaterialBaseUnit,

  // Quantity
  @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit'
  @AnalyticsDetails.query.axis: #COLUMNS
  MatlWrhsStkQtyInMatlBaseUnit,

  // Names and descriptions
  _Material._Text[1: Language=$parameters.P_Language].MaterialName,
  I_MaterialStockTimeSeries._CompanyCode.CompanyCodeName,
  I_MaterialStockTimeSeries._Plant.PlantName,
  I_MaterialStockTimeSeries._StorageLocation.StorageLocationName,
  I_MaterialStockTimeSeries._Supplier.SupplierName,
  I_MaterialStockTimeSeries._Customer.CustomerName,
  _InventoryStockType._Text[1: Language=$parameters.P_Language].InventoryStockTypeName,
  _InventorySpecialStockType._Text[1: Language=$parameters.P_Language].InventorySpecialStockTypeName
}
```
