---
name: C_BSORDGLACCTLINEITEMQRY
description: "This CDS view provides the data to answer the following business questions: What is the recognized revenue for my incoming solution order volume for a given time period? What is the recognized cost for my incoming solution order volume for a given time period? What is the recognized proft margin for my incoming solution order volume for a given time period? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CRM-S4-ANA-CDS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BSORDGLACCTLINEITEMQRY')/$value
semantic_en: "This CDS view provides the data to answer the following business questions: What is the recognized revenue for my incoming solution order volume for a given time period? What is the recognized cost for my incoming solution order volume for a given time period? What is the recognized proft margin for my incoming solution order volume for a given time period? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "GL Account Item for Soln Order - Query — CDS view tiêu dùng dựa trên I_BSOrdGLAcctLineItemCube."
keywords:
  - "account"
  - "item"
  - "for"
  - "soln"
  - "order"
  - "query"
  - "business"
  - "solution"
  - "company"
  - "code"
  - "fiscal"
  - "year"
  - "accounting"
  - "document"
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
  - account
  - bo:salesorder
---
# C_BSORDGLACCTLINEITEMQRY

**This CDS view provides the data to answer the following business questions: What is the recognized revenue for my incoming solution order volume for a given time period? What is the recognized cost for my incoming solution order volume for a given time period? What is the recognized proft margin for my incoming solution order volume for a given time period? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CRM-S4-ANA-CDS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BSORDGLACCTLINEITEMQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessSolutionOrder` | ✓ | |  |  | `CHAR(10)` | Transaction ID |
| `BusinessSolutionOrderItem` | ✓ | |  |  | `NUMC(6)` | Shortened Item Number in Document |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | ✓ | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` | ✓ | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `SemanticTag` | ✓ | |  |  | `CHAR(10)` | Semantic Tag of a Hierarchy Node |
| `BusSolnOrdType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `BusSolnOrdDescription` |  | |  |  | `CHAR(40)` | Transaction Description |
| `BusSolnOrdItmDescription` |  | |  |  | `CHAR(40)` | Product Description |
| `BusSolnOrdItmStatus` |  | |  |  | `CHAR(4)` | Life Cycle Status |
| `BusSolnOrdStatus` |  | |  |  | `CHAR(4)` | Life Cycle Status |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Currency |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `SalesOffice` |  | |  |  | `CHAR(4)` | Sales Office |
| `SalesGroup` |  | |  |  | `CHAR(3)` | Sales Group |
| `SoldToParty` |  | |  |  | `CHAR(10)` | Sold-To Party |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` |  |
| `BusSolnOrdRevnAmtInDC` |  | |  | `currency_conversion( amount => RevenueAmountInCompanyCodeCrcy, source_currency => CompanyCodeCurrency, target_currency => $parameters.P_DisplayCurrency, exchange_rate_type => 'M', exchange_rate_date => PostingDate )` | `CURR(23)` |  |
| `BusSolnOrdCostAmtInDC` |  | |  | `currency_conversion( amount => CostAmountInCompanyCodeCrcy, source_currency => CompanyCodeCurrency, target_currency => $parameters.P_DisplayCurrency, exchange_rate_type => 'M', exchange_rate_date => PostingDate )` | `CURR(23)` |  |
| `BusSolnOrdRecgdMargAmtInDC` |  | |  | `currency_conversion( amount => RecognizedMarginAmtInCCCrcy, source_currency => CompanyCodeCurrency, target_currency => $parameters.P_DisplayCurrency, exchange_rate_type => 'M', exchange_rate_date => PostingDate )` | `CURR(23)` |  |
| `SlsItmRevenueAmount` |  | |  | `currency_conversion( amount => SlsItmRevenueAmount, source_currency => CompanyCodeCurrency, target_currency => $parameters.P_DisplayCurrency, exchange_rate_type => 'M', exchange_rate_date => PostingDate )` | `CURR(23)` |  |
| `SrvcContrItmRevenueAmount` |  | |  | `currency_conversion( amount => SrvcContrItmRevenueAmount, source_currency => CompanyCodeCurrency, target_currency => $parameters.P_DisplayCurrency, exchange_rate_type => 'M', exchange_rate_date => PostingDate )` | `CURR(23)` |  |
| `ExpnItmRevenueAmount` |  | |  | `currency_conversion( amount => ExpnItmRevenueAmount, source_currency => CompanyCodeCurrency, target_currency => $parameters.P_DisplayCurrency, exchange_rate_type => 'M', exchange_rate_date => PostingDate )` | `CURR(23)` |  |
| `SbscrBilgItmRevenueAmount` |  | |  | `currency_conversion( amount => SbscrBilgItmRevenueAmount, source_currency => CompanyCodeCurrency, target_currency => $parameters.P_DisplayCurrency, exchange_rate_type => 'M', exchange_rate_date => PostingDate )` | `CURR(23)` |  |
| `SrvcPrtItmRevenueAmount` |  | |  | `currency_conversion( amount => SrvcPrtItmRevenueAmount, source_currency => CompanyCodeCurrency, target_currency => $parameters.P_DisplayCurrency, exchange_rate_type => 'M', exchange_rate_date => PostingDate )` | `CURR(23)` |  |
| `SrvcItmRevenueAmount` |  | |  | `currency_conversion( amount => SrvcItmRevenueAmount, source_currency => CompanyCodeCurrency, target_currency => $parameters.P_DisplayCurrency, exchange_rate_type => 'M', exchange_rate_date => PostingDate )` | `CURR(23)` |  |
| `EntProjItmRevenueAmount` |  | |  | `currency_conversion( amount => EntProjItmRevenueAmount, source_currency => CompanyCodeCurrency, target_currency => $parameters.P_DisplayCurrency, exchange_rate_type => 'M', exchange_rate_date => PostingDate )` | `CURR(23)` |  |
| `CalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `CalendarQuarter` |  | |  |  | `NUMC(1)` | Calendar Quarter |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalQuarter` |  | |  |  | `NUMC(1)` | Fiscal Quarter |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BSORDGLACCTLINEITEMQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BSORDGLACCTLINEITEMQRY')/$value)*

```abap
@EndUserText.label: 'GL Account Item for Soln Order - Query'
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM: {
  viewType: #CONSUMPTION,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
  authorizationCheck: #PRIVILEGED_ONLY,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@AbapCatalog: {
  sqlViewName: 'CBSGLLINITMQRY',
  compiler.compareFilter: true,
  preserveKey: true
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
@Metadata.ignorePropagatedAnnotations: true
@Analytics.query: true
@OData.publish: true
define view C_BSOrdGLAcctLineItemQry

  with parameters
    @Consumption.defaultValue:'EUR'
    P_DisplayCurrency : vdm_v_display_currency

  as select from I_BSOrdGLAcctLineItemCube(P_DisplayCurrency: $parameters.P_DisplayCurrency)
{
          @AnalyticsDetails.query.display: #KEY_TEXT
  key     BusinessSolutionOrder,

          @AnalyticsDetails.query.display: #KEY_TEXT
  key     BusinessSolutionOrderItem,

          @AnalyticsDetails.query.display: #KEY_TEXT
  key     CompanyCode,

          @AnalyticsDetails.query.display: #KEY_TEXT
  key     FiscalYear,

          @AnalyticsDetails.query.display: #KEY_TEXT
  key     AccountingDocument,
  key     LedgerGLLineItem,

          @AnalyticsDetails.query.display: #KEY_TEXT
  key     SemanticTag,

          @AnalyticsDetails.query.display: #KEY_TEXT
          BusSolnOrdType,
          @Semantics.text: true
          BusSolnOrdDescription,
          @Semantics.text: true
          BusSolnOrdItmDescription,
          @AnalyticsDetails.query.display: #KEY_TEXT
          BusSolnOrdItmStatus,

          @AnalyticsDetails.query.display: #KEY_TEXT
          BusSolnOrdStatus,

          @AnalyticsDetails.query.display: #KEY_TEXT
          @Semantics.currencyCode:true
          TransactionCurrency,
          @AnalyticsDetails.query.display: #KEY_TEXT
          SalesOrganization,
          @AnalyticsDetails.query.display: #KEY_TEXT
          DistributionChannel,
          @AnalyticsDetails.query.display: #KEY_TEXT
          Division,
          @AnalyticsDetails.query.display: #KEY_TEXT
          SalesOffice,
          @AnalyticsDetails.query.display: #KEY_TEXT
          SalesGroup,
          @AnalyticsDetails.query.display: #KEY_TEXT
          SoldToParty,
          PostingDate,
          @Semantics.currencyCode:true
          CompanyCodeCurrency,
          //          @UI.hidden: true
          @EndUserText.label: 'Display Currency'
          @Semantics.currencyCode: true
          DisplayCurrency,

          //        Revenue
          @EndUserText.label: 'Recognized Revenue'
          @DefaultAggregation: #FORMULA
          @Semantics: { amount : {currencyCode: 'DisplayCurrency'} }
          currency_conversion(  amount =>  RevenueAmountInCompanyCodeCrcy,
                             source_currency => CompanyCodeCurrency,
                             target_currency => $parameters.P_DisplayCurrency,
                             exchange_rate_type => 'M',
                             exchange_rate_date =>  PostingDate
                            )   as BusSolnOrdRevnAmtInDC,

          //        Cost
          @EndUserText.label: 'Recognized Cost'
          @DefaultAggregation: #FORMULA
          @Semantics: { amount : {currencyCode: 'DisplayCurrency'} }
          currency_conversion(  amount =>  CostAmountInCompanyCodeCrcy,
                             source_currency => CompanyCodeCurrency,
                             target_currency => $parameters.P_DisplayCurrency,
                             exchange_rate_type => 'M',
                             exchange_rate_date =>  PostingDate
                            )   as BusSolnOrdCostAmtInDC,

          //        Profit
          @EndUserText.label: 'Recognized Margin'
          @DefaultAggregation: #FORMULA
          @Semantics: { amount : {currencyCode: 'DisplayCurrency'} }
          currency_conversion(  amount =>  RecognizedMarginAmtInCCCrcy,
                             source_currency => CompanyCodeCurrency,
                             target_currency => $parameters.P_DisplayCurrency,
                             exchange_rate_type => 'M',
                             exchange_rate_date =>  PostingDate
                            )   as BusSolnOrdRecgdMargAmtInDC,

          @EndUserText.label: 'Sales Item'
          @DefaultAggregation: #FORMULA
          @Semantics: { amount : {currencyCode: 'DisplayCurrency'} }
          currency_conversion(  amount =>  SlsItmRevenueAmount,
                               source_currency =>  CompanyCodeCurrency,
                               target_currency => $parameters.P_DisplayCurrency,
                               exchange_rate_type => 'M',
                               exchange_rate_date =>  PostingDate
                              ) as SlsItmRevenueAmount,

          @EndUserText.label: 'Service Contract Item'
          @DefaultAggregation: #FORMULA
          @Semantics: { amount : {currencyCode: 'DisplayCurrency'} }
          currency_conversion(  amount =>  SrvcContrItmRevenueAmount,
                               source_currency =>  CompanyCodeCurrency,
                               target_currency => $parameters.P_DisplayCurrency,
                               exchange_rate_type => 'M',
                               exchange_rate_date =>  PostingDate
                              ) as SrvcContrItmRevenueAmount,

          @EndUserText.label: 'Service Expense Item'
          @DefaultAggregation: #FORMULA
          @Semantics: { amount : {currencyCode: 'DisplayCurrency'} }
          currency_conversion(  amount =>  ExpnItmRevenueAmount,
                               source_currency =>  CompanyCodeCurrency,
                               target_currency => $parameters.P_DisplayCurrency,
                               exchange_rate_type => 'M',
                               exchange_rate_date =>  PostingDate
                              ) as ExpnItmRevenueAmount,

          @EndUserText.label: 'Subscription Billing Item'
          @DefaultAggregation: #FORMULA
          @Semantics: { amount : {currencyCode: 'DisplayCurrency'} }
          currency_conversion(  amount =>  SbscrBilgItmRevenueAmount,
                               source_currency =>  CompanyCodeCurrency,
                               target_currency => $parameters.P_DisplayCurrency,
                               exchange_rate_type => 'M',
                               exchange_rate_date =>  PostingDate
                              ) as SbscrBilgItmRevenueAmount,

          @EndUserText.label: 'Service Part Item'
          @DefaultAggregation: #FORMULA
          @Semantics: { amount : {currencyCode: 'DisplayCurrency'} }
          currency_conversion(  amount =>  SrvcPrtItmRevenueAmount,
                               source_currency =>  CompanyCodeCurrency,
                               target_currency => $parameters.P_DisplayCurrency,
                               exchange_rate_type => 'M',
                               exchange_rate_date =>  PostingDate
                              ) as SrvcPrtItmRevenueAmount,

          @EndUserText.label: 'Service Item'
          @DefaultAggregation: #FORMULA
          @Semantics: { amount : {currencyCode: 'DisplayCurrency'} }
          currency_conversion(  amount =>  SrvcItmRevenueAmount,
                               source_currency =>  CompanyCodeCurrency,
                               target_currency => $parameters.P_DisplayCurrency,
                               exchange_rate_type => 'M',
                               exchange_rate_date =>  PostingDate
                              ) as SrvcItmRevenueAmount,

          @EndUserText.label: 'Project Item'
          @DefaultAggregation: #FORMULA
          @Semantics: { amount : {currencyCode: 'DisplayCurrency'} }
          currency_conversion(  amount =>  EntProjItmRevenueAmount,
                               source_currency =>  CompanyCodeCurrency,
                               target_currency => $parameters.P_DisplayCurrency,
                               exchange_rate_type => 'M',
                               exchange_rate_date =>  PostingDate
                              ) as EntProjItmRevenueAmount,

          @AnalyticsDetails.query.display: #KEY_TEXT
          @Semantics.calendar.year
          CalendarYear,
          @AnalyticsDetails.query.display: #KEY_TEXT
          @Semantics.calendar.quarter
          CalendarQuarter,
          @AnalyticsDetails.query.display: #KEY_TEXT
          @Semantics.calendar.month
          CalendarMonth,

          @AnalyticsDetails.query.display: #KEY_TEXT
          @Semantics.fiscal.yearVariant: true
          FiscalYearVariant,
          FiscalPeriod,
          FiscalQuarter

}
```
