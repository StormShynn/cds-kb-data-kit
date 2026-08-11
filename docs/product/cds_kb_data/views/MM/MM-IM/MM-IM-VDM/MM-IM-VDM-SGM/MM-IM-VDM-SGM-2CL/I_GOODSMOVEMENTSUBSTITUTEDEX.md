---
name: I_GOODSMOVEMENTSUBSTITUTEDEX
description: "The system contains actual material document data and substitute data for material documents that have been archived. Both are necessary to calculate current stocks. This CDS view is used for data extraction of the substitute material document data and should be used in combination with the CDS view I_GoodsMovementDocumentDEX, for actual material document data, so that stocks can be calculated. You may build your own BW content based on the data provided by this view. This CDS view provides the data to answer the following business questions: Which material has been posted to which stock type? Which material has been posted to which special stock type and to which reference object? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: MM-IM-VDM-SGM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GOODSMOVEMENTSUBSTITUTEDEX')/$value
semantic_en: "The system contains actual material document data and substitute data for material documents that have been archived. Both are necessary to calculate current stocks. This CDS view is used for data extraction of the substitute material document data and should be used in combination with the CDS view I_GoodsMovementDocumentDEX, for actual material document data, so that stocks can be calculated. You may build your own BW content based on the data provided by this view. This CDS view provides the data to answer the following business questions: Which material has been posted to which stock type? Which material has been posted to which special stock type and to which reference object? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Material document substitute extraction — CDS view tổng hợp (transactional data) dựa trên I_MaterialDocumentRecord."
keywords:
  - "material"
  - "document"
  - "substitute"
  - "extraction"
  - "key1"
  - "key2"
  - "key3"
  - "key4"
  - "key5"
tags:
  - MM
  - bo:companycode
  - component:MM-IM-VDM-SGM-2CL
  - document
  - interface-view
  - lob:sourcing & procurement
  - material
  - MM-IM
  - MM-IM-VDM
  - MM-IM-VDM-SGM
  - MM-IM-VDM-SGM-2CL
  - stock
---
# I_GOODSMOVEMENTSUBSTITUTEDEX

**The system contains actual material document data and substitute data for material documents that have been archived. Both are necessary to calculate current stocks. This CDS view is used for data extraction of the substitute material document data and should be used in combination with the CDS view I_GoodsMovementDocumentDEX, for actual material document data, so that stocks can be calculated. You may build your own BW content based on the data provided by this view. This CDS view provides the data to answer the following business questions: Which material has been posted to which stock type? Which material has been posted to which special stock type and to which reference object? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `MM-IM-VDM-SGM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GOODSMOVEMENTSUBSTITUTEDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaterialDocumentKey1` | ✓ | |  |  | `RAW(4)` | Key field 1 |
| `MaterialDocumentKey2` | ✓ | |  |  | `RAW(4)` | Key field 2 |
| `MaterialDocumentKey3` | ✓ | |  |  | `RAW(5)` | Key field 3 |
| `MaterialDocumentKey4` | ✓ | |  |  | `RAW(1)` | Key field 4 |
| `MaterialDocumentKey5` | ✓ | |  |  | `RAW(1)` | Key field 5 |
| `MaterialDocumentKey6` | ✓ | |  |  | `RAW(1)` | Key field 6 |
| `StockIdentifyingMaterial` |  | |  |  | `CHAR(40)` | Material for Stock Mamangement |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `StockIdfgStorageLocation` |  | |  |  | `CHAR(4)` | Storage Location (Stock Identifier) |
| `StockIdentifyingBatch` |  | |  |  | `CHAR(10)` | Batch Number (Stock Identifier) |
| `SpecialStockIdfgSupplier` |  | |  |  | `CHAR(10)` | Supplier for Special Stock |
| `SpecialStockIdfgSalesOrder` |  | |  |  | `CHAR(10)` | Sales Order Number of Valuated Sales Order Stock |
| `SpecialStockIdfgSalesOrderItem` |  | |  |  | `NUMC(6)` | Sales Order Item of Valuated Sales Order Stock |
| `SpecialStockIdfgWBSElement` |  | |  | `cast(SpecialStockIdfgWBSElement as nsdm_wbselement_internal_id preserving type)` | `NUMC(8)` | Valuated Sales Order Stock WBS Element |
| `SpecialStockIdfgCustomer` |  | |  |  | `CHAR(10)` | Customer for Special Stock |
| `InventorySpecialStockType` |  | |  |  | `CHAR(1)` | Special Stock Type |
| `InventoryStockType` |  | |  |  | `CHAR(2)` | Stock Type of Goods Movement (Stock Identifier) |
| `SpecialStockIdfgStockOwner` |  | |  |  | `CHAR(10)` | Add. Supplier for Special Stock |
| `ResourceID` |  | |  | `cast(ResourceID as nsdm_resourcename preserving type )` | `CHAR(40)` | Resource |
| `CostEstimate` |  | |  |  | `NUMC(12)` | Cost Estimate Number - Product Costing |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `InventorySpecialStockValnType` |  | |  |  | `CHAR(1)` | Separate Valuation Type |
| `MatlStkChangeQtyInBaseUnit` |  | |  |  | `QUAN(31)` | Stock Quantity |
| `MatlCnsmpnQtyInMatlBaseUnit` |  | |  |  | `QUAN(31)` | Consumption Quantity |
| `MaterialBaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `GoodsMovementStkAmtInCCCrcy` |  | |  |  | `CURR(13)` | Amount in Local Currency with Sign of Stock Quantity |
| `GoodsMvtCnsmpnAmtInCCCrcy` |  | |  |  | `CURR(13)` | Amount in Local Currency with Sign of Consumption Quantity |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `InventoryValuationType` |  | |  |  | `CHAR(10)` | Valuation Type |
| `DocumentDate` |  | |  |  | `DATS(8)` | Document Date in Document |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date in the Document |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Period Year |
| `YearDay` |  | |  |  | `NUMC(7)` | Year-Day-Combination |
| `YearWeek` |  | |  |  | `NUMC(6)` | Year-Week-Combination |
| `YearMonth` |  | |  |  | `NUMC(6)` | Year-Month-Combination |
| `YearQuarter` |  | |  |  | `NUMC(5)` | Year-Quarter-Combination |
| `CalendarQuarter` |  | |  |  | `NUMC(1)` | Quarter (1 - 4) |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Month (1 - 12) |
| `CalendarWeek` |  | |  |  | `NUMC(2)` | Calendar Week (1 - 53) |
| `CalendarDayOfYear` |  | |  | `cast(CalendarDay as nsdm_day_of_year preserving type)` | `NUMC(3)` | Day of Year (1 - 366) |
| `WeekDay` |  | |  |  | `NUMC(1)` | Day of Week |
| `_SpecStkIdfgSupplierByPlant` | | ✓ | | | | |
| `_SpecStockIdfgCustByPlant` | | ✓ | | | | |
| `_SpecialStockIdfgSupplier` | | ✓ | | | | |
| `_SpecialStockIdfgStockOwner` | | ✓ | | | | |
| `_SpecialStockIdfgCustomer` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SpecStkIdfgSupplierByPlant` | `I_SupplierCompanyByPlant` | [0..1] |
| `_SpecStockIdfgCustByPlant` | `I_CustomerCompanyByPlant` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GOODSMOVEMENTSUBSTITUTEDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GOODSMOVEMENTSUBSTITUTEDEX')/$value)*

```abap
@EndUserText.label: 'Material document substitute extraction'
@AccessControl: {
                   authorizationCheck: #CHECK,
                   personalData.blocking: #NOT_REQUIRED
                }
@ObjectModel: {
                usageType: {
                             sizeCategory: #XXL,
                             serviceQuality: #C,
                             dataClass:#TRANSACTIONAL
                           },
                sapObjectNodeType.name : 'MaterialStock',                           
//                semanticKey: ['MaterialDocumentYear', 'MaterialDocument', 'MaterialDocumentItem'],
                supportedCapabilities: [#EXTRACTION_DATA_SOURCE]
} 
@VDM: {
        viewType: #COMPOSITE,
        lifecycle.contract.type: #PUBLIC_LOCAL_API
      }
@Analytics: {
              dataCategory: #FACT,
              internalName: #LOCAL,
              dataExtraction.enabled: true                                                       
    
           }
@Metadata: {
             ignorePropagatedAnnotations: true
           }

define view entity I_GoodsMovementSubstituteDEX
  as select from I_MaterialDocumentRecord 
  
association [0..1] to I_SupplierCompanyByPlant as _SpecStkIdfgSupplierByPlant on  $projection.SpecialStockIdfgSupplier = _SpecStkIdfgSupplierByPlant.Supplier
                                                                              and $projection.Plant = _SpecStkIdfgSupplierByPlant.Plant  
                                                                                 
association [0..1] to I_CustomerCompanyByPlant as _SpecStockIdfgCustByPlant   on  $projection.SpecialStockIdfgCustomer = _SpecStockIdfgCustByPlant.Customer
                                                                              and $projection.Plant    = _SpecStockIdfgCustByPlant.Plant                                                                                 
 
{
// Technical key fields
  @Consumption.hidden: true
      key MaterialDocumentKey1,
  @Consumption.hidden: true
      key MaterialDocumentKey2,
  @Consumption.hidden: true
      key MaterialDocumentKey3,
  @Consumption.hidden: true
      key MaterialDocumentKey4,
  @Consumption.hidden: true
      key MaterialDocumentKey5,
  @Consumption.hidden: true
      key MaterialDocumentKey6,  
    
// Warehouse stock identifier
      StockIdentifyingMaterial,
      Plant,
      StockIdfgStorageLocation,
      StockIdentifyingBatch,
      SpecialStockIdfgSupplier,
      SpecialStockIdfgSalesOrder,
      SpecialStockIdfgSalesOrderItem,
-- CAST to get rid of conversion exit
      cast(SpecialStockIdfgWBSElement as nsdm_wbselement_internal_id preserving type) as SpecialStockIdfgWBSElement,  
      SpecialStockIdfgCustomer,
      InventorySpecialStockType,
      InventoryStockType,
      SpecialStockIdfgStockOwner,
      cast(ResourceID as nsdm_resourcename preserving type ) as ResourceID,
      
      // Warehouse stock grouping fields     
      CostEstimate, 
      CompanyCode, 
      InventorySpecialStockValnType,   
       
      // Quantities
      @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit'
//      @DefaultAggregation: #NONE
      MatlStkChangeQtyInBaseUnit,
      @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit'
//      @DefaultAggregation: #NONE
      MatlCnsmpnQtyInMatlBaseUnit,    
      MaterialBaseUnit,  

      // Amounts
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
//      @DefaultAggregation: #NONE
      GoodsMovementStkAmtInCCCrcy,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
//      @DefaultAggregation: #NONE
      GoodsMvtCnsmpnAmtInCCCrcy,    
      CompanyCodeCurrency,  

      // other fields 
      InventoryValuationType,
   
      //Periods and time     
      @Semantics.businessDate.at: true
      DocumentDate,      
      PostingDate,
      @Semantics.fiscal.yearVariant: true
      FiscalYearVariant,
      FiscalYear,
      @Semantics.fiscal.yearPeriod: true
      FiscalYearPeriod,
      YearDay,
      @Semantics.calendar.yearWeek: true
      YearWeek,
      @Semantics.calendar.yearMonth: true
      YearMonth,
      @Semantics.calendar.yearQuarter: true
      YearQuarter,
      @Semantics.calendar.quarter: true
      CalendarQuarter,
      @Semantics.calendar.month: true
      CalendarMonth,
      @Semantics.calendar.week: true
      CalendarWeek,
      @Semantics.calendar.dayOfYear: true
//      CalendarDay, GTN 2 digits but field 3 digits
      cast(CalendarDay as nsdm_day_of_year preserving type) as CalendarDayOfYear,     
      WeekDay,  
      
      _SpecialStockIdfgSupplier,
      _SpecialStockIdfgStockOwner,
      _SpecialStockIdfgCustomer,
      _SpecStkIdfgSupplierByPlant,
      _SpecStockIdfgCustByPlant
            
}
where MaterialDocumentRecordType = 'MIG_DELTA' or MaterialDocumentRecordType = 'AG_MDOC_CF' 
   or MaterialDocumentRecordType = 'ARC_DELTA' or MaterialDocumentRecordType = 'PURGE_CF'
```
