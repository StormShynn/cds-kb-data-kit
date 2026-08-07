---
name: I_BILLGITMPRCGELFORCOTYPC
description: Billgitmprcgelforcotypc
app_component: SD-ANA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-ANA
  - interface-view
  - component:SD-ANA-2CL
  - lob:Sales & Distribution
---
# I_BILLGITMPRCGELFORCOTYPC

**Billgitmprcgelforcotypc**

| Property | Value |
|---|---|
| App Component | `SD-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillingDocument` | ✓ | |  |  |  |  |
| `BillingDocumentItem` | ✓ | |  |  |  |  |
| `PricingProcedureStep` | ✓ | |  |  |  |  |
| `PricingProcedureCounter` | ✓ | |  |  |  |  |
| `ConditionApplication` |  | |  |  |  |  |
| `ConditionType` |  | |  |  |  |  |
| `ConditionCategory` |  | |  |  |  |  |
| `ConditionClass` |  | |  |  |  |  |
| `ConditionIsForStatistics` |  | |  |  |  |  |
| `ConditionControl` |  | |  |  |  |  |
| `ConditionInactiveReason` |  | |  |  |  |  |
| `ReturnItemProcessingType` |  | |  |  |  |  |
| `SalesDocumentItemCategory` |  | |  |  |  |  |
| `SalesDocumentItemType` |  | |  |  |  |  |
| `BillingDocumentCategory` |  | |  |  |  |  |
| `SDDocumentCategory` |  | |  |  |  |  |
| `BillingDocumentType` |  | |  |  |  |  |
| `PricingDateTime` |  | |  |  |  |  |
| `BillingDocumentDate` |  | |  |  |  |  |
| `BillingDocumentDateYear` |  | |  | `cast(BillgDocCalDate.CalendarYear as billing_document_date_year)` |  |  |
| `BillingDocDateYearQuarter` |  | |  | `cast(BillgDocCalDate.YearQuarter as billing_doc_date_year_quarter)` |  |  |
| `BillingDocDateYearMonth` |  | |  | `cast(BillgDocCalDate.YearMonth as billing_doc_date_year_month)` |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `OrganizationDivision` |  | |  |  |  |  |
| `Division` |  | |  |  |  |  |
| `SalesOffice` |  | |  |  |  |  |
| `PartnerCompany` |  | | `_BillingDocument._SoldToParty` | `TradingPartner` |  |  |
| `Product` |  | |  |  |  |  |
| `ProductGroup` |  | |  |  |  |  |
| `ConditionRecord` |  | |  |  |  |  |
| `ConditionSequentialNumber` |  | |  |  |  |  |
| `ConditionOrigin` |  | |  |  |  |  |
| `ConditionIsManuallyChanged` |  | |  |  |  |  |
| `ConditionQuantityUnit` |  | |  |  |  |  |
| `ConditionCalculationType` |  | |  |  |  |  |
| `ConditionAmount` |  | |  |  |  |  |
| `ConditionAmountInDC` |  | |  | `cast ( currency_conversion( amount => ConditionAmount, source_currency => TransactionCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => BillingDocumentDate, exchange_rate_type => :P_ExchangeRateType, error_handling => 'FAIL_ON_ERROR', round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) as cond_amt_idc)` |  |  |
| `NormalizedConditionAmount` |  | |  |  |  |  |
| `NormalizedConditionAmountInDC` |  | |  | `cast ( currency_conversion( amount => NormalizedConditionAmount, source_currency => TransactionCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => BillingDocumentDate, exchange_rate_type => :P_ExchangeRateType, error_handling => 'FAIL_ON_ERROR', round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) as nrmlzd_cond_amt_idc)` |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `DisplayCurrency` |  | |  | `cast(:P_DisplayCurrency as vdm_v_display_currency)` |  |  |
| `ConditionBaseQuantity` |  | |  |  |  |  |
| `_BillingDocument` | | ✓ | | | | |
| `_BillingDocumentCategory` | | ✓ | | | | |
| `_SDDocumentCategory` | | ✓ | | | | |
| `_BillingDocumentType` | | ✓ | | | | |
| `_SalesDocumentItemCategory` | | ✓ | | | | |
| `_SalesDocumentItemType` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_OrganizationDivision` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_SalesOffice` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_ProductGroup` | | ✓ | | | | |
| `_ConditionApplication` | | ✓ | | | | |
| `_PricingConditionType` | | ✓ | | | | |
| `_ConditionCategory` | | ✓ | | | | |
| `_ConditionClass` | | ✓ | | | | |
| `_ConditionControl` | | ✓ | | | | |
| `_ConditionInactiveReason` | | ✓ | | | | |
| `_ConditionOrigin` | | ✓ | | | | |
| `_ConditionCalculationType` | | ✓ | | | | |
| `_ConditionQuantityUnit` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XL
@VDM.viewType: #COMPOSITE
@Analytics.dataCategory: #CUBE
@EndUserText.label: 'Billing Document Item Pricing Element - Cube'
@AbapCatalog.sqlViewName: 'ISDBDIPEFCOTYC'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@AccessControl.authorizationCheck:#CHECK
@AccessControl.personalData.blocking:#NOT_REQUIRED
@Metadata.allowExtensions: true 
@Metadata.ignorePropagatedAnnotations: true
@Analytics.internalName:#LOCAL
//@Consumption.dbHints: ['HINT(CS_JOIN_FILTER_BEFORE_REDUCTION(''PRCD_ELEMENTS'') )']                     --AT10.3.2020 hint not whitelisted ! Also &#39;  ,   \'   ,   &apos;   don't work!
//@AbapCatalog.dbHints: [{ dbSystem: #HDB, hint: 'CS_JOIN_FILTER_BEFORE_REDUCTION(''PRCD_ELEMENTS'')' }]  --AT10.3.2020 hint not whitelisted !
//@AbapCatalog.dbHints: [{ dbSystem: #HDB, hint: 'NO_SUBPLAN_SHARING' }]
//@Consumption.dbHints: ['CS_JOIN_FILTER_BEFORE_REDUCTION(''PRCD_ELEMENTS'')']  --AT16.3.2020 by Phoebe, but again SQL 468 error :(
//@Consumption.dbHints: ['NO_SUBPLAN_SHARING']
@Consumption.dbHints: ['USE_HEX_PLAN']
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@ObjectModel.supportedCapabilities:  [ #ANALYTICAL_PROVIDER, #CDS_MODELING_DATA_SOURCE ]

/////////////////////////////////////////////////////////////////////////
// IMPORTANT NOTEs  (AT Jan.2020)                                      //
//                                                                     //
// This model exposes measures based on high-data-volume entities.     //
//                                                                     //
// To achieve an acceptable performance, please consider to use        //
// this model "as restricted" as possible:                             //
// - use only the minimal viable set of dimensions and KPIs            //
// - consider using filters, like ConditionType, SalesOrganization,    //
//   Product(/Group),BillingDocumentDate, PricingDateTime, etc..,      //
//   that allow  a good focus on the relevant data                     //
//---------------------------------------------------------------------//
//  Similar to the above query, the cube also exposes the currency-    //
//  converted ConditionAmount & NormalizedConditionAmount. In standard //
//  deployment, these currency-converted amounts are OVERLAYED by the  //
//  currency-converted amounts of the query.                           //
//  This modeling allows to easily switch to the hana based currency   //
//  conversion (versus analytical engine currency conversion)          //
//  simply by defining a custom analytical query that directly exposes //
//  the amounts form the cube.                                         //
/////////////////////////////////////////////////////////////////////////

define view I_BillgItmPrcgElForCoTypC
with parameters
  P_ExchangeRateType       : kurst,
  P_DisplayCurrency        : vdm_v_display_currency,
  P_ConditionType          : conditiontype,
  P_BillingDocumentDate    : startofquarter

as select from I_BillgItmPrcgElForCoTypAn(P_ConditionType:$parameters.P_ConditionType, P_BillingDocumentDate:$parameters.P_BillingDocumentDate) as PRCELA          

left outer to one join I_CalendarDate               as BillgDocCalDate                      
                    on PRCELA.BillingDocumentDate   =  BillgDocCalDate.CalendarDate
{
   //Key
     @ObjectModel.foreignKey.association: '_BillingDocument'
key  BillingDocument,
key  BillingDocumentItem,
key  PricingProcedureStep,
key  PricingProcedureCounter,

   //Category
     @ObjectModel.foreignKey.association: '_ConditionApplication' 
     ConditionApplication,     
     @ObjectModel.foreignKey.association: '_PricingConditionType'
     ConditionType,
     @ObjectModel.foreignKey.association: '_ConditionCategory'
     ConditionCategory,
     @ObjectModel.foreignKey.association: '_ConditionClass'
     ConditionClass,
     ConditionIsForStatistics,
     @ObjectModel.foreignKey.association: '_ConditionControl'
     ConditionControl,    
     @ObjectModel.foreignKey.association: '_ConditionInactiveReason'
     ConditionInactiveReason,
     
     ReturnItemProcessingType,
     @ObjectModel.foreignKey.association: '_SalesDocumentItemCategory'
     SalesDocumentItemCategory,
     @ObjectModel.foreignKey.association: '_SalesDocumentItemType'
     SalesDocumentItemType,
       
     @ObjectModel.foreignKey.association: '_BillingDocumentCategory'  
     BillingDocumentCategory,
     @ObjectModel.foreignKey.association: '_SDDocumentCategory'
     SDDocumentCategory,
     @ObjectModel.foreignKey.association: '_BillingDocumentType'
     BillingDocumentType,

   //Admin
     PricingDateTime,
     BillingDocumentDate,
      
     @Semantics.calendar.year
     cast(BillgDocCalDate.CalendarYear as billing_document_date_year) as BillingDocumentDateYear,
     @Semantics.calendar.yearQuarter
     cast(BillgDocCalDate.YearQuarter as billing_doc_date_year_quarter) as BillingDocDateYearQuarter,
     @Semantics.calendar.yearMonth
     cast(BillgDocCalDate.YearMonth as billing_doc_date_year_month) as BillingDocDateYearMonth,
     
   // Organization
     @ObjectModel.foreignKey.association: '_SalesOrganization'
     SalesOrganization,
     @ObjectModel.foreignKey.association: '_DistributionChannel'
     DistributionChannel,
     @ObjectModel.foreignKey.association: '_OrganizationDivision'
     OrganizationDivision,
     @ObjectModel.foreignKey.association: '_Division'
     Division,
     @ObjectModel.foreignKey.association: '_SalesOffice'
     SalesOffice,
     
     --CE2111 AT BK intro of dimension TradingPartner
      @Analytics.internalName: #LOCAL      
      @ObjectModel.foreignKey.association:'_GlobalCompany'
      _BillingDocument._SoldToParty.TradingPartner as PartnerCompany,
      _BillingDocument._SoldToParty._GlobalCompany,
     
   //Product
     @ObjectModel.foreignKey.association: '_Product' 
     Product,   
     @ObjectModel.foreignKey.association: '_ProductGroup' 
     ProductGroup,     
     
     //Pricing  
     ConditionRecord,
     ConditionSequentialNumber,
     @ObjectModel.foreignKey.association: '_ConditionOrigin'
     ConditionOrigin,
     ConditionIsManuallyChanged,
      
     @ObjectModel.foreignKey.association: '_ConditionQuantityUnit'
     @Semantics.unitOfMeasure: true
     ConditionQuantityUnit,
     
     @ObjectModel.foreignKey.association: '_ConditionCalculationType'
     ConditionCalculationType,
     

     
//--KPI's for Billing Document Item Pricing Element----------------------         
     --we offer also the hana currency conversion. In standard deployment it is overlayed by the Analytical Engine currency conversion.
     @Aggregation.default: #SUM
     @Semantics.amount.currencyCode: 'TransactionCurrency'
     ConditionAmount,     
     @DefaultAggregation: #SUM 
     @Semantics.amount.currencyCode: 'DisplayCurrency'
     cast ( currency_conversion(
     amount => ConditionAmount,
     source_currency => TransactionCurrency,
     target_currency => :P_DisplayCurrency,
     exchange_rate_date => BillingDocumentDate,
     exchange_rate_type => :P_ExchangeRateType,
     error_handling => 'FAIL_ON_ERROR',
     round => #CDSBoolean.true,
     decimal_shift => #CDSBoolean.true,
     decimal_shift_back => #CDSBoolean.true
     ) as cond_amt_idc) as ConditionAmountInDC,  
     
     @Aggregation.default: #SUM
     @Semantics.amount.currencyCode: 'TransactionCurrency'
     NormalizedConditionAmount,
     --we offer also the hana currency conversion. In standard deployment it is overlayed by the Analytical Engine currency conversion.
     @DefaultAggregation: #SUM 
     @Semantics.amount.currencyCode: 'DisplayCurrency'
     cast ( currency_conversion(
     amount => NormalizedConditionAmount,
     source_currency => TransactionCurrency,
     target_currency => :P_DisplayCurrency,
     exchange_rate_date => BillingDocumentDate,
     exchange_rate_type => :P_ExchangeRateType,
     error_handling => 'FAIL_ON_ERROR',
     round => #CDSBoolean.true,
     decimal_shift => #CDSBoolean.true,
     decimal_shift_back => #CDSBoolean.true
     ) as nrmlzd_cond_amt_idc) as NormalizedConditionAmountInDC,  
     
     @ObjectModel.foreignKey.association: '_Currency'
     TransactionCurrency,
     
     @Semantics.currencyCode: true
     cast(:P_DisplayCurrency as vdm_v_display_currency) as DisplayCurrency,

     @Aggregation.default: #SUM
     @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
     @EndUserText.label: 'Condition Base Quantity'
     ConditionBaseQuantity,
     
     //Associations
     _BillingDocument,
     _BillingDocumentCategory,
     _SDDocumentCategory,
     _BillingDocumentType,
     _SalesDocumentItemCategory,
     _SalesDocumentItemType,
     _SalesOrganization,
     _DistributionChannel,
     _OrganizationDivision,
     _Division,
     _SalesOffice, 
     _Product,
     _ProductGroup,
     _ConditionApplication,
     _PricingConditionType,
     _ConditionCategory,
     _ConditionClass,
     _ConditionControl,
     _ConditionInactiveReason,
     _ConditionOrigin,
     _ConditionCalculationType,
//     _ConditionCurrency,
     _ConditionQuantityUnit,
     _Currency  

}
```
