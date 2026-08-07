---
name: C_SALESANALYTICSQRY_1
description: "This CDS view provides the prerequisites for answering the following business questions: What is my sales volume in comparison with previous months? Where can I increase my sales volume in the current period, for example, with open orders, open billing requests and open deliveries?"
app_component: SD-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SALESANALYTICSQRY_1')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: What is my sales volume in comparison with previous months? Where can I increase my sales volume in the current period, for example, with open orders, open billing requests and open deliveries?"
semantic_vi: "Sales Volume and Open Sales - Query — CDS view tiêu dùng dựa trên I_SalesAnalyticsCube_1."
keywords:
  - "Sales Volume and Open Sales - Query"
  - "sales"
  - "volume"
  - "and"
  - "open"
  - "query"
  - "document"
  - "item"
  - "schedule"
  - "line"
  - "billing"
  - "plan"
tags:
  - SD
  - billing
  - bo:billingdocument
  - component:SD-ANA-2CL
  - consumption-view
  - lob:sales & distribution
  - order
  - SD-ANA
  - SD-ANA-2CL
---
# C_SALESANALYTICSQRY_1

**This CDS view provides the prerequisites for answering the following business questions: What is my sales volume in comparison with previous months? Where can I increase my sales volume in the current period, for example, with open orders, open billing requests and open deliveries?**

| Property | Value |
|---|---|
| App Component | `SD-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SALESANALYTICSQRY_1')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesDocument` | ✓ | |  |  | `CHAR(10)` | Sales Document |
| `SalesDocumentItem` | ✓ | |  |  | `NUMC(6)` | Sales Document Item |
| `ScheduleLine` | ✓ | |  |  | `NUMC(4)` | Schedule Line Number |
| `BillingPlan` | ✓ | |  |  | `CHAR(10)` | Billing Plan Number / Invoicing Plan Number |
| `BillingPlanItem` | ✓ | |  |  | `NUMC(6)` | Item for billing plan/invoice plan/payment cards |
| `DeliveryDocument` | ✓ | |  |  | `CHAR(10)` | Delivery |
| `DeliveryDocumentItem` | ✓ | |  |  | `NUMC(6)` | Delivery Item |
| `BillingDocument` | ✓ | |  |  | `CHAR(10)` | Billing Document |
| `BillingDocumentItem` | ✓ | |  |  | `NUMC(6)` | Billing Item |
| `SoldToParty` |  | |  |  | `CHAR(10)` | Sold-to Party |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `AdditionalCustomerGroup1` |  | |  |  | `CHAR(3)` | Customer Group 1 |
| `AdditionalCustomerGroup2` |  | |  |  | `CHAR(3)` | Customer Group 2 |
| `AdditionalCustomerGroup3` |  | |  |  | `CHAR(3)` | Customer Group 3 |
| `AdditionalCustomerGroup4` |  | |  |  | `CHAR(3)` | Customer Group 4 |
| `AdditionalCustomerGroup5` |  | |  |  | `CHAR(3)` | Customer Group 5 |
| `SDDocumentCategory` |  | |  |  | `CHAR(4)` | SD Document Category |
| `SDDocumentObject` |  | |  |  | `CHAR(1)` | SD Document Object |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `PartnerCompany` |  | |  |  | `CHAR(6)` | Company ID of Trading Partner |
| `SalesOffice` |  | |  |  | `CHAR(4)` | Sales Office |
| `SalesGroup` |  | |  |  | `CHAR(3)` | Sales Group |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `ProductHierarchyNode` |  | |  |  | `CHAR(18)` | Product Hierarchy |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Material Group |
| `ProductGroup` |  | |  |  | `CHAR(9)` | Product Group |
| `AdditionalMaterialGroup1` |  | |  |  | `CHAR(3)` | Material Group 1 |
| `AdditionalMaterialGroup2` |  | |  |  | `CHAR(3)` | Material Group 2 |
| `AdditionalMaterialGroup3` |  | |  |  | `CHAR(3)` | Material Group 3 |
| `AdditionalMaterialGroup4` |  | |  |  | `CHAR(3)` | Material Group 4 |
| `AdditionalMaterialGroup5` |  | |  |  | `CHAR(3)` | Material Group 5 |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `BillingDocumentDate` |  | |  |  | `DATS(8)` | Date of Billing |
| `BillingDocumentDateYear` |  | |  |  | `NUMC(4)` | Year of Billing |
| `BillingDocDateCalendarQuarter` |  | |  |  | `NUMC(1)` | Calendar Quarter of Billing |
| `BillingDocDateCalendarMonth` |  | |  |  | `NUMC(2)` | Calendar Month of Billing |
| `BillingDocDateYearQuarter` |  | |  |  | `NUMC(5)` | Quarter/Year of Billing |
| `BillingDocDateYearMonth` |  | |  |  | `NUMC(6)` | Month/Year of Billing |
| `DeliveryDate` |  | |  |  | `DATS(8)` | Schedule Line Date |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Order |
| `OpnSOForOrdReltdInvcsNetAmtDC` |  | |  |  | `CURR(19)` | Open Sales Orders for Ord.Reltd Billing Net Amount IDC |
| `OpnSlsOrdsForOrdReltdInvcsQty` |  | |  |  | `QUAN(15)` | Open Sales Orders for Order-Related Billing Quantity |
| `OpnRetsOrdReltdInvcsNetAmtInDC` |  | |  |  | `CURR(19)` | Open Returns For Order Rel Invoices Net Amnt in Displ Curr |
| `OpnRetsForOrdReltdInvcsQty` |  | |  |  | `QUAN(15)` | Open Return For Order Related Invoices Quantity |
| `OpnSlsOrdsForDelivAmtInDspCrcy` |  | |  |  | `CURR(19)` | Open Sales Orders for Deliveries Net Amt in Displ. Crcy |
| `OpnSlsOrdrsForDelivQuantity` |  | |  |  | `QUAN(15)` | Open Confirmed Sales Orders for Deliveries Quantity in BU |
| `OpnSlsOrdsForInvcPlansNetAmtDC` |  | |  |  | `CURR(19)` | Open Sls Orders for Billing Plans Net Amt in Displ. Crcy |
| `OpnOutbDelivsForInvcNetAmtInDC` |  | |  |  | `CURR(19)` | Net Amount of Open Deliveries for Invoices(Display Currency) |
| `OpnOutbDelivsForInvcQty` |  | |  |  | `QUAN(13)` | Quantity of Open Deliveries for Invoices |
| `ShpdNotInvcdDelivsNetAmtInDC` |  | |  |  | `CURR(19)` | Value of Deliveries Shipped But Not Invoiced (Display Curr.) |
| `ShpdNotInvcdDelivsQuantity` |  | |  |  | `QUAN(15)` | Quantity of Deliveries Shipped But Not Invoiced (SKU) |
| `CustCrdtMemoNetAmtInDspCrcy` |  | |  |  | `CURR(19)` | Net Value of Credit Memos |
| `CustCreditMemoQuantity` |  | |  |  | `QUAN(15)` | Quantity of Credit Memos |
| `SlsVolumeNetAmtInDspCrcy` |  | |  |  | `CURR(19)` | Net Value of Invoiced Sales |
| `SalesVolumeQuantity` |  | |  |  | `QUAN(15)` | Sales Volume Quantity |
| `SlsProfitMargNetAmtInDspCrcy` |  | |  |  | `CURR(19)` | Profit Margin Amount in Display Currency |
| `CustCrdtMemoPrftMargNetAmtInDC` |  | |  |  | `CURR(19)` | Credit Memo Profit Margin Net Value in Display Currency |
| `SalesProfitMargin` |  | |  | `cast(1 as prf_marg_ratio)` | `DEC(13)` | Profit Margin Ratio |
| `OpenSalesOrdersNetAmountInDC` |  | |  | `cast(1 as opn_ord_amt_idc)` | `CURR(19)` | Open Sales Orders Net Amount In Display Currency |
| `OpenSlsOrdsForInvcsNetAmtInDC` |  | |  | `cast(1 as opn_ord_for_invc_net_amt_in_dc)` | `CURR(19)` | Open Sales Orders for Invoices Net Amount in Display Crcy |
| `NetSlsVolumeNetAmtInDC` |  | |  | `cast(1 as net_sls_vol_net_amt_idc )` | `CURR(19)` | Net Sales Volume in Display Currency |
| `NetSlsProfitMargNetAmtInDC` |  | |  | `cast(1 as net_prf_marg_net_amt_idc )` | `CURR(19)` | Net Profit Margin Net Value in Display Currency |
| `NetSalesCostAmountInDC` |  | |  | `cast(1 as netsalescostamountindc )` | `CURR(19)` | Net Sales Cost Amount in Display Currency |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SALESANALYTICSQRY_1')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SALESANALYTICSQRY_1')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XL
@EndUserText.label: 'Sales Volume and Open Sales - Query'
@Analytics.query:true
@VDM.viewType: #CONSUMPTION
@AccessControl.authorizationCheck:#PRIVILEGED_ONLY
@AbapCatalog.sqlViewName: 'CSDSLSANALYTICQ1'
@AbapCatalog.compiler.compareFilter: true
@OData.publish: true
@Metadata.allowExtensions: true  --AT: 10.12.2019 CE2005
@Metadata.ignorePropagatedAnnotations: true --AT^2: 15.4.2019
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@ObjectModel.supportedCapabilities:  [ #ANALYTICAL_QUERY ]

///////////////////////////////////////////////////
// IMPORTANT NOTE  (26.2.2018)                   //
//                                               //
//This is the successor of C_SalesAnalyticsQry.  //
//                                               //
//The extensibility of C_SalesAnalyticsQry_1     //
//now allows to handle the three                 //
//SDDocuments: Orders, Deliveries and Invoices.  //
//                                               //
///////////////////////////////////////////////////

--AT15.2.2022 APL adoption (usage of APL- cube currency conversion instead of AE currency conversion)

define view C_SalesAnalyticsQry_1 
 with parameters
    @Consumption.defaultValue: 'M'
    @Consumption.valueHelpDefinition: [{
      entity: {
        name:'I_ExchangeRateType',
        element:'ExchangeRateType'
      }
    }]      
    P_ExchangeRateType : kurst,
    P_DisplayCurrency  : vdm_v_display_currency
   
as select from I_SalesAnalyticsCube_1(P_ExchangeRateType:$parameters.P_ExchangeRateType, P_DisplayCurrency: $parameters.P_DisplayCurrency) as SAC
{    
//Keys
  key SalesDocument,
  @EndUserText.label:'Sales Item'
  key SalesDocumentItem,
  key ScheduleLine,
  key BillingPlan,
  key BillingPlanItem,
  key DeliveryDocument,
  @EndUserText.label:'Delivery Item'
  key DeliveryDocumentItem,
//  key PrelimBillingDocument,
//  key PrelimBillingDocumentItem,
  key BillingDocument,
  @EndUserText.label:'Billing Item'
  key BillingDocumentItem,

//Dimensions
  //Customer
//  @Consumption.semanticObject: 'Customer'
  @AnalyticsDetails.query.display: #KEY_TEXT
  SoldToParty,
  @AnalyticsDetails.query.display: #KEY_TEXT
  Customer,
  @AnalyticsDetails.query.display: #KEY_TEXT
  CustomerGroup,
--AT 29.04.2019: AdditionalCustomerGroup1..5 added
  @Analytics.internalName: #LOCAL
  @AnalyticsDetails.query.display: #KEY_TEXT   
  AdditionalCustomerGroup1,
  @Analytics.internalName: #LOCAL
  @AnalyticsDetails.query.display: #KEY_TEXT
  AdditionalCustomerGroup2,
  @Analytics.internalName: #LOCAL
  @AnalyticsDetails.query.display: #KEY_TEXT
  AdditionalCustomerGroup3,
  @Analytics.internalName: #LOCAL
  @AnalyticsDetails.query.display: #KEY_TEXT
  AdditionalCustomerGroup4,
  @Analytics.internalName: #LOCAL
  @AnalyticsDetails.query.display: #KEY_TEXT
  AdditionalCustomerGroup5,
  
  // ----- Category -----
  @AnalyticsDetails.query.display: #KEY_TEXT
  SDDocumentCategory,  
  @AnalyticsDetails.query.display: #KEY_TEXT
  SDDocumentObject,
  

  //Organization
  @AnalyticsDetails.query.display: #KEY_TEXT
  SalesOrganization,
  @AnalyticsDetails.query.display: #KEY_TEXT
  DistributionChannel,
  @AnalyticsDetails.query.display: #KEY_TEXT
  Division,
  @AnalyticsDetails.query.display: #KEY_TEXT
  @Analytics.internalName: #LOCAL
  PartnerCompany,                                  -- AT BK1.7.2021 CE2111

  //Team View
  @AnalyticsDetails.query.display: #KEY_TEXT
  SalesOffice,
  @AnalyticsDetails.query.display: #KEY_TEXT
  SalesGroup,

  //Geographical Dimensions
  @AnalyticsDetails.query.display: #KEY_TEXT
  SalesDistrict,
  
  //Product
  @AnalyticsDetails.query.display: #KEY_TEXT
  @API.element.releaseState: #DEPRECATED  --AT25.10.2019 add Product/deprecate Material
  @API.element.successor: 'Product'
  Material,
  @AnalyticsDetails.query.display: #KEY_TEXT
  Product,
  @AnalyticsDetails.query.display: #KEY_TEXT
  ProductHierarchyNode,
  @AnalyticsDetails.query.display: #KEY_TEXT
  @API.element.releaseState: #DEPRECATED
  @API.element.successor: 'ProductGroup'
  MaterialGroup,                        --AT25.10.2019 add ProductGroup/deprecate MaterialGroup
  @AnalyticsDetails.query.display: #KEY_TEXT
  @Analytics.internalName: #LOCAL
  ProductGroup,
  @Analytics.internalName: #LOCAL
  @AnalyticsDetails.query.display: #KEY_TEXT
  AdditionalMaterialGroup1,
  @Analytics.internalName: #LOCAL
  @AnalyticsDetails.query.display: #KEY_TEXT
  AdditionalMaterialGroup2,
  @Analytics.internalName: #LOCAL
  @AnalyticsDetails.query.display: #KEY_TEXT
  AdditionalMaterialGroup3,
  @Analytics.internalName: #LOCAL
  @AnalyticsDetails.query.display: #KEY_TEXT
  AdditionalMaterialGroup4,
  @Analytics.internalName: #LOCAL
  @AnalyticsDetails.query.display: #KEY_TEXT
  AdditionalMaterialGroup5,  
  
  ProfitCenter,
  
  //Time Points & Periods
  BillingDocumentDate,
  @Semantics.calendar.year
  BillingDocumentDateYear, 
  --@Semantics.calendar.quarter
  @Analytics.internalName: #LOCAL 
  @AnalyticsDetails.query.display: #KEY_TEXT
  BillingDocDateCalendarQuarter,  --AT 31.1.2019 CE1905
  --@Semantics.calendar.month
  @Analytics.internalName: #LOCAL --AT^2 3.5.2019: added  
  @AnalyticsDetails.query.display: #KEY_TEXT
  BillingDocDateCalendarMonth,    --AT 31.1.2019 CE1905
  @Semantics.calendar.yearQuarter 
  BillingDocDateYearQuarter,
  @Semantics.calendar.yearMonth 
  BillingDocDateYearMonth,
  DeliveryDate,     --AT14.10.2021 CE2202 expose DeliveryDate from I_SLAnalytics (CFD Jira SDANALYTICS01-873)
  
  //Misc
  SalesOrder,

  // Measures
  //Measures Sales Document Item
  // Open Sales with order related invoicing  (open = not invoiced) 
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'DisplayCurrency'
  OpnSOForOrdReltdInvcsNetAmtDC,   --AT15.2.2022 APL adoption 
//  @DefaultAggregation: #FORMULA
//  @Semantics.amount.currencyCode: 'DisplayCurrency'
//  cast (currency_conversion(
//    amount => OpnSOForOrdReltdInvcsNetAmount,
//    source_currency => TransactionCurrency,
//    target_currency => :P_DisplayCurrency,
//    exchange_rate_date => CalendarDate,
//    exchange_rate_type => :P_ExchangeRateType
//  ) as opn_ords_for_ordrelinv_amt_idc) as  OpnSOForOrdReltdInvcsNetAmtDC,
   
  
  @DefaultAggregation: #SUM
  @Semantics.quantity.unitOfMeasure: 'BaseUnit'
  OpnSlsOrdsForOrdReltdInvcsQty, 
  
  // Open Returns with order related invoicing  (open = not invoiced) 
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'DisplayCurrency'
  OpnRetsOrdReltdInvcsNetAmtInDC , --AT15.2.2022 APL adoption 
//  @DefaultAggregation: #FORMULA
//  @Semantics.amount.currencyCode: 'DisplayCurrency'
//  cast (currency_conversion(
//    amount => OpnRetsForOrdReltdInvcsNetAmt,
//    source_currency => TransactionCurrency,
//    target_currency => :P_DisplayCurrency,
//    exchange_rate_date => CalendarDate,
//    exchange_rate_type => :P_ExchangeRateType
//  ) as opn_rets_for_invc_net_amt_idc) as  OpnRetsOrdReltdInvcsNetAmtInDC, 
  
  
  @DefaultAggregation: #SUM
  @Semantics.quantity.unitOfMeasure: 'BaseUnit'
  OpnRetsForOrdReltdInvcsQty ,

  //Measures Schedule Line
  // Open Orders (open = not forwarded to delivery processing with delivery related invoicing) 
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'DisplayCurrency'
  OpnSlsOrdsForDelivAmtInDspCrcy, --AT15.2.2022 APL adoption 
//  @DefaultAggregation: #FORMULA
//  @Semantics.amount.currencyCode: 'DisplayCurrency'
//  cast (currency_conversion(
//    amount => OpenSlsOrdersForDelivNetAmount,
//    source_currency => TransactionCurrency,
//    target_currency => :P_DisplayCurrency,
//    exchange_rate_date => CalendarDate,
//    exchange_rate_type => :P_ExchangeRateType
//  ) as opn_ord_for_del_amt_idc) as  OpnSlsOrdsForDelivAmtInDspCrcy, 
  
  
  @DefaultAggregation: #SUM
  @Semantics.quantity.unitOfMeasure: 'BaseUnit'
  OpnSlsOrdrsForDelivQuantity,    
   
  //Measures for Billing Plan Due Date 
  // Open Sales with billing plan related invoicing (open = not invoiced)
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'DisplayCurrency'
  OpnSlsOrdsForInvcPlansNetAmtDC, --AT15.2.2022 APL adoption 
//  @DefaultAggregation: #FORMULA
//  @Semantics.amount.currencyCode: 'DisplayCurrency'
//  cast (currency_conversion(
//    amount => OpnSlsOrdsForInvcPlansNetAmt,
//    source_currency => TransactionCurrency,
//    target_currency => :P_DisplayCurrency,
//    exchange_rate_date => CalendarDate,
//    exchange_rate_type => :P_ExchangeRateType
//  ) as opn_ord_for_iplan_amt_idc) as  OpnSlsOrdsForInvcPlansNetAmtDC,    
  
  
  //MeasuresDeliveryDocumentItem
 // Open Deliveries (open =  not invoiced, can be shipped or not)
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'DisplayCurrency'
  OpnOutbDelivsForInvcNetAmtInDC, --AT15.2.2022 APL adoption 
//  @DefaultAggregation: #FORMULA
//  @Semantics.amount.currencyCode: 'DisplayCurrency'
//  cast (currency_conversion(
//    amount => OpnOutbDelivsForInvcNetAmt,
//    source_currency => TransactionCurrency,
//    target_currency => :P_DisplayCurrency,
//    exchange_rate_date => CalendarDate,
//    exchange_rate_type => :P_ExchangeRateType
//  ) as opn_dlv_for_inv_amt_idc) as  OpnOutbDelivsForInvcNetAmtInDC,        
  
  @DefaultAggregation: #SUM
  @Semantics.quantity.unitOfMeasure: 'BaseUnit'
  OpnOutbDelivsForInvcQty,
  
 // OpenButShipped Deliveries (open =  not invoiced, shipped)
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'DisplayCurrency'
  ShpdNotInvcdDelivsNetAmtInDC,     --AT15.2.2022 APL adoption             --AT 25.4.2018: new for CE1808
// @DefaultAggregation: #FORMULA
//  @Semantics.amount.currencyCode: 'DisplayCurrency'
//  cast (currency_conversion(
//    amount => ShpdNotInvcdDelivsNetAmount,
//    source_currency => TransactionCurrency,
//    target_currency => :P_DisplayCurrency,
//    exchange_rate_date => CalendarDate,
//    exchange_rate_type => :P_ExchangeRateType
//  ) as opn_shppd_dlv_for_inv_amt_idc) as   ShpdNotInvcdDelivsNetAmtInDC,             --AT 25.4.2018: new for CE1808,   
   
  @DefaultAggregation: #SUM
  @Semantics.quantity.unitOfMeasure: 'BaseUnit'
  ShpdNotInvcdDelivsQuantity,                                                        --AT 25.4.2018: new for CE1808,       
   
  //MeasuresBillingDocumentItem
  // Credit Memo
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'DisplayCurrency'
  CustCrdtMemoNetAmtInDspCrcy,      --AT15.2.2022 APL adoption 
//  @DefaultAggregation: #FORMULA
//  @Semantics.amount.currencyCode: 'DisplayCurrency'
//  cast (currency_conversion(
//    amount => CustomerCreditMemoNetAmount,
//    source_currency => TransactionCurrency,
//    target_currency => :P_DisplayCurrency,
//    exchange_rate_date => CalendarDate,
//    exchange_rate_type => :P_ExchangeRateType
//  ) as mc_gunetwr) as  CustCrdtMemoNetAmtInDspCrcy,     
  
  
  @DefaultAggregation: #SUM
  @Semantics.quantity.unitOfMeasure: 'BaseUnit'
  CustCreditMemoQuantity,
  
  // Sales Volume
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'DisplayCurrency'
  SlsVolumeNetAmtInDspCrcy,     --AT15.2.2022 APL adoption 
//  @DefaultAggregation: #FORMULA
//  @Semantics.amount.currencyCode: 'DisplayCurrency'
//  cast (currency_conversion(
//    amount => SalesVolumeNetAmount,
//    source_currency => TransactionCurrency,
//    target_currency => :P_DisplayCurrency,
//    exchange_rate_date => CalendarDate,
//    exchange_rate_type => :P_ExchangeRateType
//  ) as mc_umnetwr) as  SlsVolumeNetAmtInDspCrcy,    
  
////  @DefaultAggregation: #SUM
////  @Semantics.amount.currencyCode: 'DisplayCurrency'
////  PrelimBillgSlsVolNetAmtInDC,                                                  -- AT 18.12.2018: new for CE1905
//  @DefaultAggregation: #FORMULA
//  @Semantics.amount.currencyCode: 'DisplayCurrency'
//  cast (currency_conversion(
//    amount => PrelimBillgSlsVolNetAmt,
//    source_currency => TransactionCurrency,
//    target_currency => :P_DisplayCurrency,
//    exchange_rate_date => CalendarDate,
//    exchange_rate_type => :P_ExchangeRateType
//  ) as prelim_sls_vlm_net_amt_idc) as  PrelimBillgSlsVolNetAmtInDC,    
  
  @DefaultAggregation: #SUM
  @Semantics.quantity.unitOfMeasure: 'BaseUnit'
  SalesVolumeQuantity,
  
  // Sales Profit Margin 
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'DisplayCurrency'
  SlsProfitMargNetAmtInDspCrcy,     --AT15.2.2022 APL adoption 
//  @DefaultAggregation: #FORMULA
//  @Semantics.amount.currencyCode: 'DisplayCurrency'
//  cast (currency_conversion(
//    amount => SalesProfitMarginNetAmount,
//    source_currency => TransactionCurrency,
//    target_currency => :P_DisplayCurrency,
//    exchange_rate_date => CalendarDate,
//    exchange_rate_type => :P_ExchangeRateType
//  ) as prf_marg_net_amt_idc) as  SlsProfitMargNetAmtInDspCrcy,      
   

  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'DisplayCurrency'
  CustCrdtMemoPrftMargNetAmtInDC,     --AT15.2.2022 APL adoption                     -- AT 13.04.2018: added for CE1808  
//  @DefaultAggregation: #FORMULA
//  @Semantics.amount.currencyCode: 'DisplayCurrency'
//  cast (currency_conversion(
//    amount => CustCrdtMemoPrftMargNetAmt,
//    source_currency => TransactionCurrency,
//    target_currency => :P_DisplayCurrency,
//    exchange_rate_date => CalendarDate,
//    exchange_rate_type => :P_ExchangeRateType
//  ) as cm_prf_marg_net_amt_idc ) as  CustCrdtMemoPrftMargNetAmtInDC,              -- AT 13.04.2018: added for CE1808
  
--AT 29.04.2019: AdditionalCustomerGroup1..5 added only to cube, not to query
//  @DefaultAggregation: #FORMULA
//  @Semantics.amount.currencyCode: 'DisplayCurrency'
//  cast (currency_conversion(
//    amount => Subtotal1Amount,
//    source_currency => TransactionCurrency,
//    target_currency => :P_DisplayCurrency,
//    exchange_rate_date => CalendarDate,
//    exchange_rate_type => :P_ExchangeRateType
//  ) as subtotalamount1_idc ) as  Subtotal1AmountInDC,
//  
//  @DefaultAggregation: #FORMULA
//  @Semantics.amount.currencyCode: 'DisplayCurrency'
//  cast (currency_conversion(
//    amount => Subtotal2Amount,
//    source_currency => TransactionCurrency,
//    target_currency => :P_DisplayCurrency,
//    exchange_rate_date => CalendarDate,
//    exchange_rate_type => :P_ExchangeRateType
//  ) as subtotalamount2_idc ) as  Subtotal2AmountInDC,
//  
//  @DefaultAggregation: #FORMULA
//  @Semantics.amount.currencyCode: 'DisplayCurrency'
//  cast (currency_conversion(
//    amount => Subtotal3Amount,
//    source_currency => TransactionCurrency,
//    target_currency => :P_DisplayCurrency,
//    exchange_rate_date => CalendarDate,
//    exchange_rate_type => :P_ExchangeRateType
//  ) as subtotalamount3_idc ) as  Subtotal3AmountInDC,
//  
//  @DefaultAggregation: #FORMULA
//  @Semantics.amount.currencyCode: 'DisplayCurrency'
//  cast (currency_conversion(
//    amount => Subtotal4Amount,
//    source_currency => TransactionCurrency,
//    target_currency => :P_DisplayCurrency,
//    exchange_rate_date => CalendarDate,
//    exchange_rate_type => :P_ExchangeRateType
//  ) as subtotalamount4_idc ) as  Subtotal4AmountInDC,
//  
//  @DefaultAggregation: #FORMULA
//  @Semantics.amount.currencyCode: 'DisplayCurrency'
//  cast (currency_conversion(
//    amount => Subtotal5Amount,
//    source_currency => TransactionCurrency,
//    target_currency => :P_DisplayCurrency,
//    exchange_rate_date => CalendarDate,
//    exchange_rate_type => :P_ExchangeRateType
//  ) as subtotalamount5_idc ) as  Subtotal5AmountInDC,
//  
//  @DefaultAggregation: #FORMULA
//  @Semantics.amount.currencyCode: 'DisplayCurrency'
//  cast (currency_conversion(
//    amount => Subtotal6Amount,
//    source_currency => TransactionCurrency,
//    target_currency => :P_DisplayCurrency,
//    exchange_rate_date => CalendarDate,
//    exchange_rate_type => :P_ExchangeRateType
//  ) as subtotalamount6_idc ) as  Subtotal6AmountInDC,
  
  
  // Measures calculated by Analytical Engine  ---(calculated after aggregation -> Analytical Engine)
  // Sales Profit Margin 
  @AnalyticsDetails.query.decimals: 3
  @AnalyticsDetails.query.formula: 'NDIV0($projection.SlsProfitMargNetAmtInDspCrcy / $projection.SlsVolumeNetAmtInDspCrcy)'
  cast(1 as prf_marg_ratio) as SalesProfitMargin,
  
  // Open Sales Orders incl. Order/Billing Plan related                
  // (= 'Open Orders' + 'Open Sales with order related invoicing' + 'Open Sales with billing plan related invoicing') 
  @AnalyticsDetails.query.decimals: 2
  @AnalyticsDetails.query.formula: '$projection.OpnSlsOrdsForDelivAmtInDspCrcy + $projection.OpnSOForOrdReltdInvcsNetAmtDC + $projection.OpnSlsOrdsForInvcPlansNetAmtDC'
  cast(1 as opn_ord_amt_idc) as OpenSalesOrdersNetAmountInDC,
  
  // Open Billing Requests                                           
  // (= 'Open Sales with order related invoicing' + 'Open billing plan related invoicing')
  @AnalyticsDetails.query.decimals: 2
  @AnalyticsDetails.query.formula: '$projection.OpnSOForOrdReltdInvcsNetAmtDC + $projection.OpnSlsOrdsForInvcPlansNetAmtDC'
  cast(1 as opn_ord_for_invc_net_amt_in_dc) as OpenSlsOrdsForInvcsNetAmtInDC,
  
  // SaleVolume - CreditMemos                                          
  // (= 'SalesVolume' - 'Credit Memos')
  @AnalyticsDetails.query.decimals: 2
  @AnalyticsDetails.query.formula: '$projection.SlsVolumeNetAmtInDspCrcy - $projection.CustCrdtMemoNetAmtInDspCrcy'
  cast(1 as net_sls_vol_net_amt_idc ) as NetSlsVolumeNetAmtInDC ,
  
   @AnalyticsDetails.query.decimals: 2
   @AnalyticsDetails.query.formula: '$projection.SlsProfitMargNetAmtInDspCrcy - $projection.CustCrdtMemoPrftMargNetAmtInDC'
   cast(1 as net_prf_marg_net_amt_idc ) as NetSlsProfitMargNetAmtInDC ,         -- AT 13.04.2018: added for CE1808  
   
   @AnalyticsDetails.query.decimals: 2
   @AnalyticsDetails.query.formula: '$projection.NetSlsVolumeNetAmtInDC - $projection.NetSlsProfitMargNetAmtInDC'
   cast(1 as netsalescostamountindc ) as NetSalesCostAmountInDC ,               --AT 7.5.2018 added for CE1808
  
  // Currency 
  @Semantics.currencyCode: true
  @UI.hidden: true
  DisplayCurrency,
  
  // Unit of Measure
  @Semantics.unitOfMeasure: true
  BaseUnit
}
```
