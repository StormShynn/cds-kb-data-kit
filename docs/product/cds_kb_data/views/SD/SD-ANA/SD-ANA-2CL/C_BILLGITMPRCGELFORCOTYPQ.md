---
name: C_BILLGITMPRCGELFORCOTYPQ
description: "Billing Item Pricing Element for Condition Type - Query"
app_component: SD-ANA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BILLGITMPRCGELFORCOTYPQ')/$value
semantic_en: "Billing Item Pricing Element for Condition Type - Query"
semantic_vi: "Billing Item Pricing Element for Condition Type - Query — CDS view tiêu dùng dựa trên I_BillgItmPrcgElForCoTypC."
keywords:
  - "billing"
  - "item"
  - "pricing"
  - "element"
  - "for"
  - "condition"
  - "type"
  - "query"
  - "document"
  - "procedure"
  - "step"
  - "counter"
  - "application"
tags:
  - SD
  - billing
  - bo:billingdocument
  - component:SD-ANA-2CL
  - consumption-view
  - lob:sales & distribution
  - pricing
  - SD-ANA
  - SD-ANA-2CL
---
# C_BILLGITMPRCGELFORCOTYPQ

**Billing Item Pricing Element for Condition Type - Query**

| Property | Value |
|---|---|
| App Component | `SD-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BILLGITMPRCGELFORCOTYPQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillingDocument` | ✓ | |  |  | `CHAR(10)` | Billing Document |
| `BillingDocumentItem` | ✓ | |  |  | `NUMC(6)` | Billing Document Item |
| `PricingProcedureStep` | ✓ | |  |  | `NUMC(3)` | Step Number |
| `PricingProcedureCounter` | ✓ | |  |  | `NUMC(3)` | Condition Counter |
| `ConditionApplication` |  | |  |  | `CHAR(2)` | Application |
| `ConditionType` |  | |  |  | `CHAR(4)` | Condition Type |
| `ConditionCategory` |  | |  |  | `CHAR(1)` | Condition Category (Examples: Tax, Freight, Price, Cost) |
| `ConditionClass` |  | |  |  | `CHAR(1)` | Condition Class |
| `ConditionIsForStatistics` |  | |  |  | `CHAR(1)` | Condition is used for statistics |
| `ConditionControl` |  | |  |  | `CHAR(1)` | Condition Control |
| `ConditionInactiveReason` |  | |  |  | `CHAR(1)` | Condition is Inactive |
| `ReturnItemProcessingType` |  | |  |  | `CHAR(1)` | Processing Type of Return Item |
| `BillingDocumentCategory` |  | |  |  | `CHAR(1)` | Billing Category |
| `SDDocumentCategory` |  | |  |  | `CHAR(4)` | SD Document Category |
| `PricingDateTime` |  | |  |  | `CHAR(14)` | Timestamp for Pricing |
| `BillingDocumentDate` |  | |  |  | `DATS(8)` | Billing Date |
| `BillingDocumentDateYear` |  | |  |  | `NUMC(4)` | Year of Billing |
| `BillingDocDateYearQuarter` |  | |  |  | `NUMC(5)` | Quarter/Year of Billing |
| `BillingDocDateYearMonth` |  | |  |  | `NUMC(6)` | Month/Year of Billing |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Organization Division |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `SalesOffice` |  | |  |  | `CHAR(4)` | Sales Office |
| `PartnerCompany` |  | |  |  | `CHAR(6)` | Company ID of Trading Partner |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `ProductGroup` |  | |  |  | `CHAR(9)` | Product Group |
| `ConditionRecord` |  | |  |  | `CHAR(10)` | Number of Condition Record |
| `ConditionSequentialNumber` |  | |  |  | `NUMC(3)` | Sequential Number of the Condition |
| `ConditionOrigin` |  | |  |  | `CHAR(1)` | Origin of the Condition |
| `ConditionIsManuallyChanged` |  | |  |  | `CHAR(1)` | Condition Changed Manually |
| `ConditionCalculationType` |  | |  |  | `CHAR(3)` | Calculation Type for Condition |
| `ConditionAmountInDC` |  | |  |  | `CURR(23)` | Condition Value in Display Currrency |
| `NormalizedConditionAmountInDC` |  | |  |  | `CURR(23)` | Condition Value in Display Currency |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `ConditionBaseQuantity` |  | |  |  | `DEC(24)` | Quantity of the Condition Basis |
| `ConditionQuantityUnit` |  | |  |  | `UNIT(3)` | Condition Unit in the Document |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BILLGITMPRCGELFORCOTYPQ')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BILLGITMPRCGELFORCOTYPQ')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XL
@EndUserText.label: 'Billing Item Pricing Element for Condition Type - Query'
@Analytics.query:true
@VDM.viewType: #CONSUMPTION
@AccessControl.authorizationCheck:#PRIVILEGED_ONLY
@AbapCatalog.sqlViewName: 'CSDBDIPEFCOTYQ'
@AbapCatalog.compiler.compareFilter: true
@OData.publish: true
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.preserveKey:true
@Analytics.internalName:#LOCAL
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@ObjectModel.supportedCapabilities:  [ #ANALYTICAL_QUERY ]

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
//   that allow  a good focus on the relevant data                      //
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

define view C_BillgItmPrcgElForCoTypQ
  with parameters
       @Consumption.defaultValue: 'M'
       P_ExchangeRateType       : kurst,
       P_DisplayCurrency        : vdm_v_display_currency,
       @Consumption.valueHelpDefinition: [{ entity.name: 'I_SalesPricingConditionTypeVH',
                                            entity.element: 'ConditionType'
                                      }]
       P_ConditionType          : conditiontype,
       P_BillingDocumentDate    : startofquarter

as select from I_BillgItmPrcgElForCoTypC(P_ExchangeRateType:$parameters.P_ExchangeRateType, P_DisplayCurrency: $parameters.P_DisplayCurrency,
                                         P_ConditionType   :$parameters.P_ConditionType, P_BillingDocumentDate:$parameters.P_BillingDocumentDate) as PRCELC 

{
   //Key
key  BillingDocument,
key  BillingDocumentItem,
key  PricingProcedureStep,
key  PricingProcedureCounter,

   //Category
     @AnalyticsDetails.query.display: #KEY_TEXT
     ConditionApplication,
     @AnalyticsDetails.query.display: #KEY_TEXT
     ConditionType,
     @AnalyticsDetails.query.display: #KEY_TEXT
     ConditionCategory,
     @AnalyticsDetails.query.display: #KEY_TEXT
     ConditionClass,
     @AnalyticsDetails.query.display: #KEY_TEXT
     ConditionIsForStatistics,
     @AnalyticsDetails.query.display: #KEY_TEXT
     ConditionControl,
     @AnalyticsDetails.query.display: #KEY_TEXT
     ConditionInactiveReason,
     
     @AnalyticsDetails.query.display: #KEY_TEXT
     ReturnItemProcessingType,  
    
     @AnalyticsDetails.query.display: #KEY_TEXT
     BillingDocumentCategory,
     
     @AnalyticsDetails.query.display: #KEY_TEXT
     SDDocumentCategory,
     
   //Admin
     PricingDateTime,
     BillingDocumentDate,
     
     @Semantics.calendar.year
     BillingDocumentDateYear,
     @Semantics.calendar.yearQuarter
     BillingDocDateYearQuarter,
     @Semantics.calendar.yearMonth
     BillingDocDateYearMonth,
     
   //Organization
     @AnalyticsDetails.query.display: #KEY_TEXT
     SalesOrganization,
     @AnalyticsDetails.query.display: #KEY_TEXT
     DistributionChannel,
     @AnalyticsDetails.query.display: #KEY_TEXT
     OrganizationDivision,
     @AnalyticsDetails.query.display: #KEY_TEXT
     Division,
     @AnalyticsDetails.query.display: #KEY_TEXT
     SalesOffice,  
     @AnalyticsDetails.query.display: #KEY_TEXT
     @Analytics.internalName: #LOCAL
     PartnerCompany,                                  
     
   //Product  
     @AnalyticsDetails.query.display: #KEY_TEXT
     Product,
     @AnalyticsDetails.query.display: #KEY_TEXT
     ProductGroup,
     
   //Pricing
     ConditionRecord,
     ConditionSequentialNumber,
     @AnalyticsDetails.query.display: #KEY_TEXT
     ConditionOrigin,
     ConditionIsManuallyChanged,  
          
     @AnalyticsDetails.query.display: #KEY_TEXT     
     ConditionCalculationType,

-- KPI's for Billing Document Item Pricing Element-----------------------------------------
//     @DefaultAggregation: #FORMULA
//     @Semantics.amount.currencyCode: 'DisplayCurrency'
//--     @EndUserText.label: 'Condition Amount IDC'
//     cast ( currency_conversion(
//                    amount => ConditionAmount,    
//           source_currency => TransactionCurrency,
//           target_currency => :P_DisplayCurrency,
//        exchange_rate_date => BillingDocumentDate,
//        exchange_rate_type => :P_ExchangeRateType  
//     ) as cond_amt_idc ) as ConditionAmountInDC,   
     @DefaultAggregation: #SUM 
     @Semantics.amount.currencyCode: 'DisplayCurrency'     
     ConditionAmountInDC,  
     
//     @DefaultAggregation: #FORMULA
//     @Semantics.amount.currencyCode: 'DisplayCurrency'
//--     @EndUserText.label: 'Normalized Condition Amount IDC'
//     cast ( currency_conversion(
//                    amount => NormalizedConditionAmount,    
//           source_currency => TransactionCurrency,
//           target_currency => :P_DisplayCurrency,
//        exchange_rate_date => BillingDocumentDate,
//        exchange_rate_type => :P_ExchangeRateType  
//     ) as nrmlzd_cond_amt_idc ) as NormalizedConditionAmountInDC,   
     @DefaultAggregation: #SUM 
     @Semantics.amount.currencyCode: 'DisplayCurrency'
     NormalizedConditionAmountInDC,
     
     @Semantics.currencyCode: true
     DisplayCurrency,
     
     @Aggregation.default: #SUM
     @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
     @EndUserText.label: 'Condition Base Quantity'
     ConditionBaseQuantity,         
     
     @Semantics.unitOfMeasure: true
     @AnalyticsDetails.query.display: #KEY_TEXT
     ConditionQuantityUnit     
          
}
```
