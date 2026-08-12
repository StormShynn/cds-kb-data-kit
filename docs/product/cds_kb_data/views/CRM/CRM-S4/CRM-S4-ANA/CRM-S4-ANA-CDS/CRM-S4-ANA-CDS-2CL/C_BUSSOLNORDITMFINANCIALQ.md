---
name: C_BUSSOLNORDITMFINANCIALQ
description: "This CDS view provides the data to answer the following business questions: What is my solution order volume for a given time period? What is my solution order volume by sales organization? How many solution orders do I have in a specific lifecycle status, for example, how many are in released status? What is my revenue, cost, and profit margin for a specific product/products? What is my net value of solution orders by item category over a period of time? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CRM-S4-ANA-CDS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BUSSOLNORDITMFINANCIALQ')/$value
semantic_en: "This CDS view provides the data to answer the following business questions: What is my solution order volume for a given time period? What is my solution order volume by sales organization? How many solution orders do I have in a specific lifecycle status, for example, how many are in released status? What is my revenue, cost, and profit margin for a specific product/products? What is my net value of solution orders by item category over a period of time? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Solution Order Item Financials - Query — CDS view tiêu dùng dựa trên I_BusSolnOrdItmFinancialCube."
keywords:
  - "solution"
  - "order"
  - "item"
  - "financials"
  - "query"
  - "service"
  - "object"
  - "type"
  - "business"
  - "soln"
  - "description"
tags:
  - CRM
  - bo:companycode
  - component:CRM-S4-ANA-CDS-2CL
  - consumption-view
  - CRM-S4
  - CRM-S4-ANA
  - CRM-S4-ANA-CDS
  - CRM-S4-ANA-CDS-2CL
  - order
  - product
---
# C_BUSSOLNORDITMFINANCIALQ

**This CDS view provides the data to answer the following business questions: What is my solution order volume for a given time period? What is my solution order volume by sales organization? How many solution orders do I have in a specific lifecycle status, for example, how many are in released status? What is my revenue, cost, and profit margin for a specific product/products? What is my net value of solution orders by item category over a period of time? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CRM-S4-ANA-CDS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BUSSOLNORDITMFINANCIALQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceObjectType` | ✓ | |  |  | `CHAR(10)` | Business Trans. Cat. |
| `BusinessSolutionOrder` | ✓ | |  |  | `CHAR(10)` | Transaction ID |
| `BusinessSolutionOrderItem` | ✓ | |  |  | `NUMC(6)` | Shortened Item Number in Document |
| `BusSolnOrdType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `BusSolnOrdDescription` |  | |  |  | `CHAR(40)` | Transaction Description |
| `BusSolnOrdItmDescription` |  | |  |  | `CHAR(40)` | Product Description |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `SalesOffice` |  | |  |  | `CHAR(4)` | Sales Office |
| `SalesGroup` |  | |  |  | `CHAR(3)` | Sales Group |
| `SoldToParty` |  | |  |  | `CHAR(10)` | Sold-To Party |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `ServiceDocItemCategory` |  | |  |  | `CHAR(4)` | Item Category |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date for a Business Transaction |
| `ProductGroup` |  | |  |  | `CHAR(9)` | Product Group |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` |  |
| `ServiceDocumentItemObjectType` |  | |  |  | `CHAR(10)` | CRM Item Object Type |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `BusSolnOrdOpgMarginRatio` |  | |  | `cast (0 as fis_operatingmargin_ksl)` | `DEC(23)` | Operating Margin Global Currency Percent |
| `TotBusSolnOrdItmNetAmtPerPerd` |  | |  | `currency_conversion( amount => TotBusSolnOrdItmNetAmtPerPerd, source_currency => TransactionCurrency, target_currency => $parameters.P_DisplayCurrency, exchange_rate_type => 'M', exchange_rate_date => PostingDate )` | `CURR(15)` |  |
| `BusSolnOrdRevnAmtInDC` |  | |  | `currency_conversion( amount => RevenueAmountInCompanyCodeCrcy, source_currency => CompanyCodeCurrency, target_currency => $parameters.P_DisplayCurrency, exchange_rate_type => 'M', exchange_rate_date => PostingDate )` | `CURR(23)` |  |
| `BusSolnOrdCostAmtInDC` |  | |  | `currency_conversion( amount => CostAmountInCompanyCodeCrcy, source_currency => CompanyCodeCurrency, target_currency => $parameters.P_DisplayCurrency, exchange_rate_type => 'M', exchange_rate_date => PostingDate )` | `CURR(23)` |  |
| `BusSolnOrdRecgdMargAmtInDC` |  | |  | `currency_conversion( amount => RecognizedMarginAmtInCCCrcy, source_currency => CompanyCodeCurrency, target_currency => $parameters.P_DisplayCurrency, exchange_rate_type => 'M', exchange_rate_date => PostingDate )` | `CURR(23)` |  |
| `SlsItmNetAmount` |  | |  | `currency_conversion( amount => SlsItmNetAmount, source_currency => TransactionCurrency, target_currency => $parameters.P_DisplayCurrency, exchange_rate_type => 'M', exchange_rate_date => PostingDate )` | `CURR(15)` |  |
| `ServiceContractItemNetAmount` |  | |  | `currency_conversion( amount => ServiceContractItemNetAmount, source_currency => TransactionCurrency, target_currency => $parameters.P_DisplayCurrency, exchange_rate_type => 'M', exchange_rate_date => PostingDate )` | `CURR(15)` |  |
| `ExpnItmNetAmount` |  | |  | `currency_conversion( amount => ExpnItmNetAmount, source_currency => TransactionCurrency, target_currency => $parameters.P_DisplayCurrency, exchange_rate_type => 'M', exchange_rate_date => PostingDate )` | `CURR(15)` |  |
| `SbscrBilgItmNetAmount` |  | |  | `currency_conversion( amount => SbscrBilgItmNetAmount, source_currency => TransactionCurrency, target_currency => $parameters.P_DisplayCurrency, exchange_rate_type => 'M', exchange_rate_date => PostingDate )` | `CURR(15)` |  |
| `SrvcPrtItmNetAmount` |  | |  | `currency_conversion( amount => SrvcPrtItmNetAmount, source_currency => TransactionCurrency, target_currency => $parameters.P_DisplayCurrency, exchange_rate_type => 'M', exchange_rate_date => PostingDate )` | `CURR(15)` |  |
| `SrvcItmNetAmount` |  | |  | `currency_conversion( amount => SrvcItmNetAmount, source_currency => TransactionCurrency, target_currency => $parameters.P_DisplayCurrency, exchange_rate_type => 'M', exchange_rate_date => PostingDate )` | `CURR(15)` |  |
| `EnterpriseProjectItemNetAmount` |  | |  | `currency_conversion( amount => EnterpriseProjectItemNetAmount, source_currency => TransactionCurrency, target_currency => $parameters.P_DisplayCurrency, exchange_rate_type => 'M', exchange_rate_date => PostingDate )` | `CURR(15)` |  |
| `NrOfOpenBusSolnOrders` |  | |  |  | `INT4(10)` |  |
| `NrOfReldBusSolnOrders` |  | |  |  | `INT4(10)` |  |
| `NrOfCmpltdBusSolnOrders` |  | |  |  | `INT4(10)` |  |
| `BusSolnOrdStatus` |  | |  |  | `CHAR(4)` | Life Cycle Status |
| `BusSolnOrdItmStatus` |  | |  |  | `CHAR(4)` | Life Cycle Status |
| `ServiceDocItemCreationDate` |  | |  |  | `DATS(8)` | Created On |
| `ServiceDocumentCreationDate` |  | |  |  | `DATS(8)` | Created On |
| `BusSolnOrdCreationQuarter` |  | |  |  | `NUMC(1)` | Calendar Quarter |
| `BusSolnOrdCreationMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `BusSolnOrdCreationYear` |  | |  |  | `NUMC(4)` | Calendar Year |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BUSSOLNORDITMFINANCIALQ')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BUSSOLNORDITMFINANCIALQ')/$value)*

```abap
@EndUserText.label: 'Solution Order Item Financials - Query'
@VDM: {
  viewType: #CONSUMPTION,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
  authorizationCheck: #PRIVILEGED_ONLY,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@ObjectModel: {
   usageType: {
     dataClass:      #MIXED,
     serviceQuality: #D,
     sizeCategory:   #XXL
   },
   supportedCapabilities: [#ANALYTICAL_QUERY],
   modelingPattern: #ANALYTICAL_QUERY
}
//@Metadata.allowExtensions:true
@Analytics.query: true
@Analytics.technicalName: 'CBSORDITMFINQRY'
@Metadata.ignorePropagatedAnnotations: true
@OData.publish: true
define view entity C_BusSolnOrdItmFinancialQ
  with parameters
    @Consumption.defaultValue:'EUR'
    P_DisplayCurrency : vdm_v_display_currency
  as select from I_BusSolnOrdItmFinancialCube (P_DisplayCurrency: $parameters.P_DisplayCurrency)
{
      @AnalyticsDetails.query.hidden: true
      @UI.hidden: true
      @EndUserText.label: 'Transaction Category'
  key ServiceObjectType,
      @EndUserText.label: 'Solution Order'
      @EndUserText.quickInfo: 'Business Solution Order'
      @ObjectModel.text.element: [ 'BusSolnOrdDescription']
      @AnalyticsDetails.query.display: #KEY_TEXT
  key BusinessSolutionOrder,
      @EndUserText.label: 'Solution Order Item'
      @EndUserText.quickInfo: 'Business Solution Order Item'
      @AnalyticsDetails.query.display: #KEY_TEXT
  key BusinessSolutionOrderItem,
      @EndUserText.label: 'Solution Order Type'
      @EndUserText.quickInfo: 'Business Solution Order Type'
      @AnalyticsDetails.query.display: #KEY_TEXT
      BusSolnOrdType,
      @EndUserText.label: 'Solution Order Description'
      @Semantics.text: true
      BusSolnOrdDescription,
      @EndUserText.label: 'Solution Order Item Description'
      BusSolnOrdItmDescription,
      @AnalyticsDetails.query.display: #KEY_TEXT
      DistributionChannel,
      @AnalyticsDetails.query.display: #KEY_TEXT
      Division,
      @AnalyticsDetails.query.display: #KEY_TEXT
      SalesOrganization,
      @AnalyticsDetails.query.display: #KEY_TEXT
      SalesOffice,
      @AnalyticsDetails.query.display: #KEY_TEXT
      SalesGroup,
      @AnalyticsDetails.query.display: #KEY_TEXT
      SoldToParty,
      @AnalyticsDetails.query.display: #KEY_TEXT
      Country,
      @AnalyticsDetails.query.display: #KEY_TEXT
      Region,
      @AnalyticsDetails.query.display: #KEY_TEXT
      ServiceDocItemCategory,
      Product,
      PostingDate,
      ProductGroup,
      //      @Semantics.currencyCode: true
      //      DisplayCurrency,
      @EndUserText.label: 'Display Currency'
      DisplayCurrency,
      //       @Semantics.currencyCode: true
      //      TransactionCurrency,

      ServiceDocumentItemObjectType,

      CompanyCodeCurrency,

      @EndUserText.label: 'Margin in Percent'
      @DefaultAggregation: #FORMULA
      @AnalyticsDetails.query.formula: 'NDIV0($projection.BusSolnOrdRecgdMargAmtInDC / $projection.BusSolnOrdRevnAmtInDC) * 100'
      cast (0 as fis_operatingmargin_ksl) as BusSolnOrdOpgMarginRatio,

      @EndUserText.label: 'Net Value of Solution Orders'
      @DefaultAggregation: #FORMULA
      @Semantics: { amount : {currencyCode: 'DisplayCurrency'} }
      currency_conversion(  amount =>  TotBusSolnOrdItmNetAmtPerPerd,
                         source_currency =>  TransactionCurrency,
                         target_currency => $parameters.P_DisplayCurrency,
                         exchange_rate_type => 'M',
                         exchange_rate_date =>  PostingDate
                        )                 as TotBusSolnOrdItmNetAmtPerPerd,
      @EndUserText.label: 'Recognized Revenue'
      @DefaultAggregation: #FORMULA
      @Semantics: { amount : {currencyCode: 'DisplayCurrency'} }
      currency_conversion(  amount =>  RevenueAmountInCompanyCodeCrcy,
                         source_currency =>  CompanyCodeCurrency,
                         target_currency => $parameters.P_DisplayCurrency,
                         exchange_rate_type => 'M',
                         exchange_rate_date =>  PostingDate
                        )                 as BusSolnOrdRevnAmtInDC,

      @EndUserText.label: 'Recognized Cost'
      @DefaultAggregation: #FORMULA
      @Semantics: { amount : {currencyCode: 'DisplayCurrency'} }
      currency_conversion(  amount =>  CostAmountInCompanyCodeCrcy,
                         source_currency =>  CompanyCodeCurrency,
                         target_currency => $parameters.P_DisplayCurrency,
                         exchange_rate_type => 'M',
                         exchange_rate_date =>  PostingDate
                        )                 as BusSolnOrdCostAmtInDC,
      @EndUserText.label: 'Recognized Margin'
      @DefaultAggregation: #FORMULA
      @Semantics: { amount : {currencyCode: 'DisplayCurrency'} }
      currency_conversion(  amount =>  RecognizedMarginAmtInCCCrcy,
                         source_currency =>  CompanyCodeCurrency,
                         target_currency => $parameters.P_DisplayCurrency,
                         exchange_rate_type => 'M',
                         exchange_rate_date =>  PostingDate
                        )                 as BusSolnOrdRecgdMargAmtInDC,


      @EndUserText.label: 'Sales Item'
      @DefaultAggregation: #FORMULA
      @Semantics: { amount : {currencyCode: 'DisplayCurrency'} }
      currency_conversion(  amount =>  SlsItmNetAmount,
                               source_currency =>  TransactionCurrency,
                               target_currency => $parameters.P_DisplayCurrency,
                               exchange_rate_type => 'M',
                               exchange_rate_date =>  PostingDate
                              )           as SlsItmNetAmount,
      @EndUserText.label: 'Service Contract Item'
      @DefaultAggregation: #FORMULA
      @Semantics: { amount : {currencyCode: 'DisplayCurrency'} }
      currency_conversion(  amount =>  ServiceContractItemNetAmount,
                               source_currency =>  TransactionCurrency,
                               target_currency => $parameters.P_DisplayCurrency,
                               exchange_rate_type => 'M',
                               exchange_rate_date =>  PostingDate
                              )           as ServiceContractItemNetAmount,
      @EndUserText.label: 'Service Expense Item'
      @DefaultAggregation: #FORMULA
      @Semantics: { amount : {currencyCode: 'DisplayCurrency'} }
      currency_conversion(  amount =>  ExpnItmNetAmount,
                               source_currency =>  TransactionCurrency,
                               target_currency => $parameters.P_DisplayCurrency,
                               exchange_rate_type => 'M',
                               exchange_rate_date =>  PostingDate
                              )           as ExpnItmNetAmount,
      @EndUserText.label: 'Subscription Billing Item '
      @DefaultAggregation: #FORMULA
      @Semantics: { amount : {currencyCode: 'DisplayCurrency'} }
      currency_conversion(  amount =>  SbscrBilgItmNetAmount,
                               source_currency =>  TransactionCurrency,
                               target_currency => $parameters.P_DisplayCurrency,
                               exchange_rate_type => 'M',
                               exchange_rate_date =>  PostingDate
                              )           as SbscrBilgItmNetAmount,
      @EndUserText.label: 'Service Part Item'
      @DefaultAggregation: #FORMULA
      @Semantics: { amount : {currencyCode: 'DisplayCurrency'} }
      currency_conversion(  amount =>  SrvcPrtItmNetAmount,
                               source_currency =>  TransactionCurrency,
                               target_currency => $parameters.P_DisplayCurrency,
                               exchange_rate_type => 'M',
                               exchange_rate_date =>  PostingDate
                              )           as SrvcPrtItmNetAmount,
      @EndUserText.label: 'Service Item'
      @DefaultAggregation: #FORMULA
      @Semantics: { amount : {currencyCode: 'DisplayCurrency'} }
      currency_conversion(  amount =>  SrvcItmNetAmount,
                               source_currency =>  TransactionCurrency,
                               target_currency => $parameters.P_DisplayCurrency,
                               exchange_rate_type => 'M',
                               exchange_rate_date =>  PostingDate
                              )           as SrvcItmNetAmount,
      @EndUserText.label: 'Project Item'
      @DefaultAggregation: #FORMULA
      @Semantics: { amount : {currencyCode: 'DisplayCurrency'} }
      currency_conversion(  amount =>  EnterpriseProjectItemNetAmount,
                               source_currency =>  TransactionCurrency,
                               target_currency => $parameters.P_DisplayCurrency,
                               exchange_rate_type => 'M',
                               exchange_rate_date =>  PostingDate
                              )           as EnterpriseProjectItemNetAmount,
      @EndUserText.label: 'No. of Open and In Process Solution Orders'
      @DefaultAggregation: #SUM
      NrOfOpenBusSolnOrders,
      @EndUserText.label: 'No. of Released Solution Orders'
      @DefaultAggregation: #SUM
      NrOfReldBusSolnOrders,
      @EndUserText.label: 'No. of Completed Solution Orders'
      @DefaultAggregation: #SUM
      NrOfCmpltdBusSolnOrders,
      
      @AnalyticsDetails.query.display: #KEY_TEXT
      BusSolnOrdStatus,
      @AnalyticsDetails.query.display: #KEY_TEXT
      BusSolnOrdItmStatus,
      @EndUserText.label: 'Item Created On'
      ServiceDocItemCreationDate,
      @EndUserText.label: 'Order Created On'
      ServiceDocumentCreationDate,
      @Semantics.calendar.quarter
      BusSolnOrdCreationQuarter,
      @Semantics.calendar.month
      BusSolnOrdCreationMonth,
      @Semantics.calendar.year
      BusSolnOrdCreationYear
}
```
