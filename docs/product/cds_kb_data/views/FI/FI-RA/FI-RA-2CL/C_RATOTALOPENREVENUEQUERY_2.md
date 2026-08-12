---
name: C_RATOTALOPENREVENUEQUERY_2
description: "This CDS views disclose the aggregate amount of the transaction price allocated to the performance obligations that are unsatisfied (or partially unsatisfied) as of the end of the reporting period. This CDS view provides the prerequisites for answering the following business questions: What is the total open revenue at the end of the reporting period in the document currency? What is the total open revenue of time-based performance obligations at the end of the reporting period in the document currency? What is the total open revenue of event-based performance obligations at the end of the reporting period in the document currency? What is the total open revenue in the display currency? What is the total open revenue for each account assignment, for example, by profit centre? What is the total open revenue for each performance obligation type?"
app_component: FI-RA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RATOTALOPENREVENUEQUERY_2')/$value
semantic_en: "This CDS views disclose the aggregate amount of the transaction price allocated to the performance obligations that are unsatisfied (or partially unsatisfied) as of the end of the reporting period. This CDS view provides the prerequisites for answering the following business questions: What is the total open revenue at the end of the reporting period in the document currency? What is the total open revenue of time-based performance obligations at the end of the reporting period in the document currency? What is the total open revenue of event-based performance obligations at the end of the reporting period in the document currency? What is the total open revenue in the display currency? What is the total open revenue for each account assignment, for example, by profit centre? What is the total open revenue for each performance obligation type?"
semantic_vi: "Remaining Performance Obligations — CDS view tiêu dùng dựa trên Remaining Performance Obligations."
keywords:
  - "Remaining Performance Obligations - Total Open Revenue"
  - "remaining"
  - "performance"
  - "obligations"
  - "company"
  - "code"
  - "accounting"
  - "principle"
  - "obligation"
  - "type"
  - "class"
tags:
  - FI
  - account
  - bo:companycode
  - component:FI-RA-2CL
  - consumption-view
  - document
  - FI-RA
  - FI-RA-2CL
  - lob:finance
  - transaction
---
# C_RATOTALOPENREVENUEQUERY_2

**This CDS views disclose the aggregate amount of the transaction price allocated to the performance obligations that are unsatisfied (or partially unsatisfied) as of the end of the reporting period. This CDS view provides the prerequisites for answering the following business questions: What is the total open revenue at the end of the reporting period in the document currency? What is the total open revenue of time-based performance obligations at the end of the reporting period in the document currency? What is the total open revenue of event-based performance obligations at the end of the reporting period in the document currency? What is the total open revenue in the display currency? What is the total open revenue for each account assignment, for example, by profit centre? What is the total open revenue for each performance obligation type?**

| Property | Value |
|---|---|
| App Component | `FI-RA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RATOTALOPENREVENUEQUERY_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | | `_RAOpenRevCube` | `CompanyCode` | `CHAR(4)` | Company Code |
| `AccountingPrinciple` |  | | `_RAOpenRevCube` | `AccountingPrinciple` | `CHAR(4)` | Accounting Principle |
| `PerformanceObligation` |  | | `_RAOpenRevCube` | `PerformanceObligation` | `CHAR(16)` | Performance Obligation |
| `RAPerformanceObligationType` |  | | `_RAOpenRevCube` | `RAPerformanceObligationType` | `CHAR(10)` | Revenue Accounting Performance Obligation Type |
| `PerformanceObligationClass` |  | | `_RAOpenRevCube` | `PerformanceObligationClass` | `CHAR(30)` | Performance Obligation Name |
| `DisplayCurrency` |  | |  | `cast($parameters.P_DisplayCurrency as vdm_v_display_currency preserving type)` | `CUKY(5)` | Display Currency |
| `SalesDocumentCurrency` |  | | `_RAOpenRevCube` | `SalesDocumentCurrency` | `CUKY(5)` | SD Document Currency |
| `RevenueAccountingContract` |  | | `_RAOpenRevCube` | `RevenueAccountingContract` | `CHAR(14)` | Revenue Contract |
| `RevnAcctgContractCreationDate` |  | |  |  | `DATS(8)` | Created On |
| `BusinessPartner` |  | | `_RAOpenRevCube` | `BusinessPartner` | `CHAR(10)` | Business Partner Number |
| `BusinessPartnerName` |  | | `_RAOpenRevCube._BusinessPartner` | `BusinessPartnerName` | `CHAR(81)` |  |
| `Customer` |  | | `_RAOpenRevCube` | `Customer` | `CHAR(10)` | Customer Number |
| `CustomerName` |  | | `_RAOpenRevCube._Customer` | `CustomerName` | `CHAR(80)` | Name of Customer |
| `RevnAcctgSalesOrganization` |  | | `_RAOpenRevCube` | `RevnAcctgSalesOrganization` | `CHAR(20)` | Sales Organization for Revenue Accounting |
| `FunctionalArea` |  | | `_RAOpenRevCube` | `FunctionalArea` | `CHAR(16)` | Functional Area |
| `localized` |  | |  | `_FunctionalArea._Text.FunctionalAreaName: localized` |  |  |
| `BusinessArea` |  | | `_RAOpenRevCube` | `BusinessArea` | `CHAR(4)` | Business Area |
| `Segment` |  | | `_RAOpenRevCube` | `Segment` | `CHAR(10)` | Segment for Segmental Reporting |
| `ProfitCenter` |  | | `_RAOpenRevCube` | `ProfitCenter` | `CHAR(10)` | Profit Center |
| `CostCenter` |  | | `_RAOpenRevCube` | `CostCenter` | `CHAR(10)` | Cost Center |
| `OrderID` |  | | `_RAOpenRevCube` | `OrderID` | `CHAR(12)` | Order Number |
| `SalesOrder` |  | | `_RAOpenRevCube` | `SalesOrder` | `CHAR(10)` | Account assignment Sales Order |
| `WBSElementExternalID` |  | | `_RAOpenRevCube` | `WBSElementExternalID` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `RevnAcctgPerfOblgnStatus` |  | | `_RAOpenRevCube` | `RevnAcctgPerfOblgnStatus` | `CHAR(1)` | Performance Obligation Status |
| `RAInitialEffectiveDate` |  | | `_RAOpenRevCube` | `RAInitialEffectiveDate` | `DATS(8)` | Initial effect. date when POB is created & becomes effective |
| `RAContractIsUniversal` |  | | `_RAOpenRevCube` | `RAContractIsUniversal` | `CHAR(1)` | Universal Revenue Recognition Contract |
| `RATotalOpenRevenueInDspCrcy` |  | |  | `case _RAOpenRevCube.RevnAcctgConditionCategory when 'P' then currency_conversion(amount => RATotalOpenRevnInSlsDocCrcy, source_currency => SalesDocumentCurrency, target_currency => $parameters.P_DisplayCurrency, exchange_rate_type => $parameters.P_ExchangeRateType, exchange_rate_date => $parameters.P_ExchangeRateDate) else null end` | `CURR(23)` |  |
| `RAEventBasedOpenRevnInDspCrcy` |  | |  | `case _RAOpenRevCube.RevnAcctgConditionCategory when 'P' then currency_conversion(amount => RAEventBsdOpenRevnInSlsDocCrcy, source_currency => SalesDocumentCurrency, target_currency => $parameters.P_DisplayCurrency, exchange_rate_type => $parameters.P_ExchangeRateType, exchange_rate_date => $parameters.P_ExchangeRateDate) else null end` | `CURR(23)` |  |
| `RATimeBasedOpenRevnInDspCrcy` |  | |  | `case _RAOpenRevCube.RevnAcctgConditionCategory when 'P' then currency_conversion(amount => RATimeBsdOpenRevnInSlsDocCrcy, source_currency => SalesDocumentCurrency, target_currency => $parameters.P_DisplayCurrency, exchange_rate_type => $parameters.P_ExchangeRateType, exchange_rate_date => $parameters.P_ExchangeRateDate) else null end` | `CURR(23)` |  |
| `RAOpenCostInDspCrcy` |  | |  | `case _RAOpenRevCube.RevnAcctgConditionCategory when 'C' then currency_conversion(amount => RAOpenCostInCoCodeCrcy, source_currency => SalesDocumentCurrency, target_currency => $parameters.P_DisplayCurrency, exchange_rate_type => $parameters.P_ExchangeRateType, exchange_rate_date => $parameters.P_ExchangeRateDate) else null end` | `CURR(23)` |  |
| `RAEventBasedOpenCostInDspCrcy` |  | |  | `case _RAOpenRevCube.RevnAcctgConditionCategory when 'C' then currency_conversion(amount => RAEventBsdOpenCostInSlsDocCrcy, source_currency => SalesDocumentCurrency, target_currency => $parameters.P_DisplayCurrency, exchange_rate_type => $parameters.P_ExchangeRateType, exchange_rate_date => $parameters.P_ExchangeRateDate) else null end` | `CURR(23)` |  |
| `RATimeBasedOpenCostInDspCrcy` |  | |  | `case _RAOpenRevCube.RevnAcctgConditionCategory when 'C' then currency_conversion(amount => RATimeBsdOpenCostInSlsDocCrcy, source_currency => SalesDocumentCurrency, target_currency => $parameters.P_DisplayCurrency, exchange_rate_type => $parameters.P_ExchangeRateType, exchange_rate_date => $parameters.P_ExchangeRateDate) else null end` | `CURR(23)` |  |
| `RATotalOpenRevnInSlsDocCrcy` |  | |  | `case _RAOpenRevCube.RevnAcctgConditionCategory when 'P' then RATotalOpenRevnInSlsDocCrcy else null end` | `CURR(23)` | Open Revenue up to the Current Period |
| `RAEventBsdOpenRevnInSlsDocCrcy` |  | |  | `case _RAOpenRevCube.RevnAcctgConditionCategory when 'P' then RAEventBsdOpenRevnInSlsDocCrcy else null end` | `CURR(23)` | Open Revenue up to the Current Period |
| `RATimeBsdOpenRevnInSlsDocCrcy` |  | |  | `case _RAOpenRevCube.RevnAcctgConditionCategory when 'P' then RATimeBsdOpenRevnInSlsDocCrcy else null end` | `CURR(23)` | Open Revenue up to the Current Period |
| `RAOpenCostInCoCodeCrcy` |  | |  | `case _RAOpenRevCube.RevnAcctgConditionCategory when 'C' then RAOpenCostInCoCodeCrcy else null end` | `CURR(23)` | Open Revenue up to the Current Period |
| `RAEventBsdOpenCostInSlsDocCrcy` |  | |  | `case _RAOpenRevCube.RevnAcctgConditionCategory when 'C' then RAEventBsdOpenCostInSlsDocCrcy else null end` | `CURR(23)` | Open Revenue up to the Current Period |
| `RATimeBsdOpenCostInSlsDocCrcy` |  | |  | `case _RAOpenRevCube.RevnAcctgConditionCategory when 'C' then RATimeBsdOpenCostInSlsDocCrcy else null end` | `CURR(23)` | Open Revenue up to the Current Period |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RATOTALOPENREVENUEQUERY_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RATOTALOPENREVENUEQUERY_2')/$value)*

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false

@AccessControl.authorizationCheck: #NOT_ALLOWED

@Analytics.technicalName: 'CRATTOPNRVNQRY2'

@EndUserText.label: 'Remaining Performance Obligations'

@Metadata.ignorePropagatedAnnotations: true // Views which are released to contract C1 or C2 shall be annotated with this

@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY ]
@ObjectModel.usageType: { serviceQuality: #D, sizeCategory: #XXL, dataClass: #MIXED }

@AccessControl.personalData.blocking: #REQUIRED

@VDM.viewType: #CONSUMPTION

define transient view entity C_RATotalOpenRevenueQuery_2
  provider contract analytical_query
  with parameters

    @AnalyticsDetails.query.variableSequence: 30
    P_FiscalYear       : fis_gjahr,

    @AnalyticsDetails.query.variableSequence: 40
    P_FiscalPeriod     : fins_fiscalperiod,

    @AnalyticsDetails.query.variableSequence: 50
    P_DisplayCurrency  : vdm_v_display_currency,

    @AnalyticsDetails.query.variableSequence: 60
    @Consumption.defaultValue: 'M'
    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ExchangeRateType', element: 'ExchangeRateType' } } ]
    P_ExchangeRateType : kurst,

    // @Consumption.hidden: true
    @AnalyticsDetails.query.variableSequence: 65
    @Environment.systemField: #SYSTEM_DATE
    P_ExchangeRateDate : vdm_v_exchange_rate_date

  as projection on I_RATotalOpenRevenueCube_2(
                     P_FiscalYear   : $parameters.P_FiscalYear,
                     P_FiscalPeriod : $parameters.P_FiscalPeriod) as _RAOpenRevCube

{
  /**** Dimensions ****/

  @AnalyticsDetails.query: { variableSequence: 10, axis: #FREE, totals: #SHOW }
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: false, mandatory: true }
  @UI.textArrangement: #TEXT_LAST
  _RAOpenRevCube.CompanyCode,

  @AnalyticsDetails.query: { variableSequence: 20, axis: #FREE, totals: #SHOW }
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: false, mandatory: true }
  @UI.textArrangement: #TEXT_LAST
  _RAOpenRevCube.AccountingPrinciple,

  @AnalyticsDetails.query: { axis: #FREE, totals: #SHOW }
  _RAOpenRevCube.PerformanceObligation,

  @AnalyticsDetails.query: { variableSequence: 140, axis: #ROWS, totals: #SHOW }
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  // commented-out value help definitions are not C1-released and therefore could not be added:
  @UI.textArrangement: #TEXT_LAST
  _RAOpenRevCube.RAPerformanceObligationType,

  @AnalyticsDetails.query: { axis: #FREE, totals: #SHOW }
  _RAOpenRevCube.PerformanceObligationClass,

  // @AnalyticsDetails.query.axis: #COLUMNS
  // @AnalyticsDetails.query.display: #TEXT
  // _RAOpenRevCube.PerfOblgnFulfillmentType,

  @AnalyticsDetails.query.totals: #SHOW
  cast($parameters.P_DisplayCurrency as vdm_v_display_currency preserving type) as DisplayCurrency,

  @AnalyticsDetails.query.totals: #SHOW
  _RAOpenRevCube.SalesDocumentCurrency,

  @AnalyticsDetails.query: { variableSequence: 70, axis: #FREE, totals: #SHOW }
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  _RAOpenRevCube.RevenueAccountingContract,

  /** Filter from Contract **/
  @AnalyticsDetails.query: { variableSequence: 150, totals: #HIDE }
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  RevnAcctgContractCreationDate,

  @AnalyticsDetails.query: { variableSequence: 125, axis: #FREE, totals: #SHOW }
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @ObjectModel.text.element: [ 'BusinessPartnerName' ]
  _RAOpenRevCube.BusinessPartner,

  @EndUserText.label: 'Business Partner Name'
  @EndUserText.quickInfo: 'Name of Business Partner'
  @Semantics.text: true
  _RAOpenRevCube._BusinessPartner.BusinessPartnerName,

  @AnalyticsDetails.query: { variableSequence: 130, axis: #FREE, totals: #SHOW }
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @ObjectModel.text.element: [ 'CustomerName' ]
  _RAOpenRevCube.Customer,

  @Semantics.text: true
  _RAOpenRevCube._Customer.CustomerName,

  @AnalyticsDetails.query: { axis: #FREE, totals: #SHOW }
  _RAOpenRevCube.RevnAcctgSalesOrganization,

  @AnalyticsDetails.query: { variableSequence: 80, axis: #FREE, totals: #SHOW }
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @ObjectModel.text.element: [ 'FunctionalAreaName' ]
  _RAOpenRevCube.FunctionalArea,

  @Semantics.text: true
  _FunctionalArea._Text.FunctionalAreaName: localized,

  @AnalyticsDetails.query: { variableSequence: 90, axis: #FREE, totals: #SHOW }
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @ObjectModel.text.element: [ 'BusinessAreaName' ]
  _RAOpenRevCube.BusinessArea,

  @Semantics.text: true
  _BusinessArea._Text.BusinessAreaName: localized,

  @AnalyticsDetails.query: { variableSequence: 100, axis: #FREE, totals: #SHOW }
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @ObjectModel.text.element: [ 'SegmentName' ]
  _RAOpenRevCube.Segment,

  @Semantics.text: true
  _Segment._Text.SegmentName: localized,

  @AnalyticsDetails.query: { variableSequence: 110, axis: #FREE, totals: #SHOW }
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @ObjectModel.text.element: [ 'ProfitCenterName' ]
  _RAOpenRevCube.ProfitCenter,

  @Semantics.text: true
  _ProfitCenter[1:     ValidityEndDate   >= $session.system_date
                   and ValidityStartDate <= $session.system_date]._Text.ProfitCenterName: localized,

  @AnalyticsDetails.query: { axis: #FREE, totals: #SHOW }
  @ObjectModel.text.element: [ 'CostCenterName' ]
  _RAOpenRevCube.CostCenter,

  @Semantics.text: true
  _CostCenter[1:     ValidityEndDate   >= $session.system_date
                 and ValidityStartDate <= $session.system_date]._Text.CostCenterName: localized,

  @AnalyticsDetails.query: { variableSequence: 120, axis: #FREE, totals: #SHOW }
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  _RAOpenRevCube.OrderID,

  @AnalyticsDetails.query: { axis: #FREE, totals: #SHOW }
  _RAOpenRevCube.SalesOrder,

  @AnalyticsDetails.query: { variableSequence: 140, axis: #FREE, totals: #SHOW }
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  _RAOpenRevCube.WBSElementExternalID,

  @AnalyticsDetails.query: { axis: #FREE, totals: #SHOW }
  _RAOpenRevCube.RevnAcctgPerfOblgnStatus,

  @AnalyticsDetails.query: { axis: #FREE, totals: #SHOW }
  _RAOpenRevCube.RAInitialEffectiveDate,
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: false, mandatory: false }
  _RAOpenRevCube.RAContractIsUniversal,

  /**** Open Revenues in Display Currency ****/

//  @Aggregation.default: #SUM
  @EndUserText.label: 'Total Revenue in Display Currency'
  @Semantics.amount.currencyCode: 'DisplayCurrency'
  case _RAOpenRevCube.RevnAcctgConditionCategory
    when 'P' then
      currency_conversion(amount             => RATotalOpenRevnInSlsDocCrcy,
                          source_currency    => SalesDocumentCurrency,
                          target_currency    => $parameters.P_DisplayCurrency,
                          exchange_rate_type => $parameters.P_ExchangeRateType,
                          exchange_rate_date => $parameters.P_ExchangeRateDate)
        else null
  end                                                                           as RATotalOpenRevenueInDspCrcy,

//  @Aggregation.default: #SUM
  @EndUserText.label: 'Event Based Revenue in Display Currency'
  @Semantics.amount.currencyCode: 'DisplayCurrency'
  case _RAOpenRevCube.RevnAcctgConditionCategory
    when 'P' then
      currency_conversion(amount             => RAEventBsdOpenRevnInSlsDocCrcy,
                          source_currency    => SalesDocumentCurrency,
                          target_currency    => $parameters.P_DisplayCurrency,
                          exchange_rate_type => $parameters.P_ExchangeRateType,
                          exchange_rate_date => $parameters.P_ExchangeRateDate)
        else null
  end                                                                           as RAEventBasedOpenRevnInDspCrcy,

//  @Aggregation.default: #SUM
  @EndUserText.label: 'Time Based Revenue in Display Currency'
  @Semantics.amount.currencyCode: 'DisplayCurrency'
  case _RAOpenRevCube.RevnAcctgConditionCategory
    when 'P' then
      currency_conversion(amount             => RATimeBsdOpenRevnInSlsDocCrcy,
                          source_currency    => SalesDocumentCurrency,
                          target_currency    => $parameters.P_DisplayCurrency,
                          exchange_rate_type => $parameters.P_ExchangeRateType,
                          exchange_rate_date => $parameters.P_ExchangeRateDate)
        else null
  end                                                                           as RATimeBasedOpenRevnInDspCrcy,

//  @Aggregation.default: #SUM
  @AnalyticsDetails.query.hidden: true
  @EndUserText.label: 'Total Cost in Display Currency'
  @Semantics.amount.currencyCode: 'DisplayCurrency'
  case _RAOpenRevCube.RevnAcctgConditionCategory
    when 'C' then
      currency_conversion(amount             => RAOpenCostInCoCodeCrcy,
                          source_currency    => SalesDocumentCurrency,
                          target_currency    => $parameters.P_DisplayCurrency,
                          exchange_rate_type => $parameters.P_ExchangeRateType,
                          exchange_rate_date => $parameters.P_ExchangeRateDate)
        else null
  end                                                                           as RAOpenCostInDspCrcy,

//  @Aggregation.default: #SUM
  @AnalyticsDetails.query.hidden: true
  @EndUserText.label: 'Event Based Cost in Display Currency'
  @Semantics.amount.currencyCode: 'DisplayCurrency'
  case _RAOpenRevCube.RevnAcctgConditionCategory
    when 'C' then
      currency_conversion(amount             => RAEventBsdOpenCostInSlsDocCrcy,
                          source_currency    => SalesDocumentCurrency,
                          target_currency    => $parameters.P_DisplayCurrency,
                          exchange_rate_type => $parameters.P_ExchangeRateType,
                          exchange_rate_date => $parameters.P_ExchangeRateDate)
        else null
  end                                                                           as RAEventBasedOpenCostInDspCrcy,

//  @Aggregation.default: #SUM
  @AnalyticsDetails.query.hidden: true
  @EndUserText.label: 'Time Based Cost in Display Currency'
  @Semantics.amount.currencyCode: 'DisplayCurrency'
  case _RAOpenRevCube.RevnAcctgConditionCategory
    when 'C' then
      currency_conversion(amount             => RATimeBsdOpenCostInSlsDocCrcy,
                          source_currency    => SalesDocumentCurrency,
                          target_currency    => $parameters.P_DisplayCurrency,
                          exchange_rate_type => $parameters.P_ExchangeRateType,
                          exchange_rate_date => $parameters.P_ExchangeRateDate)
        else null
  end                                                                           as RATimeBasedOpenCostInDspCrcy,

  /**** Open Revenues in Sales Document Currency ****/

  @Aggregation.default: #SUM
  @AnalyticsDetails.query.axis: #COLUMNS
  @EndUserText.label: 'Total Revenue in Document Currency'
  @Semantics.amount.currencyCode: 'SalesDocumentCurrency'
  case _RAOpenRevCube.RevnAcctgConditionCategory
    when 'P' then RATotalOpenRevnInSlsDocCrcy
    else  null
  end                                                                           as RATotalOpenRevnInSlsDocCrcy,

  @Aggregation.default: #SUM
  @AnalyticsDetails.query.axis: #COLUMNS
  @EndUserText.label: 'Event Based Revenue in Document Currency'
  @Semantics.amount.currencyCode: 'SalesDocumentCurrency'
  case _RAOpenRevCube.RevnAcctgConditionCategory
    when 'P' then RAEventBsdOpenRevnInSlsDocCrcy
    else null
  end                                                                           as RAEventBsdOpenRevnInSlsDocCrcy,

  @Aggregation.default: #SUM
  @AnalyticsDetails.query.axis: #COLUMNS
  @EndUserText.label: 'Time Based Revenue in Document Currency'
  @Semantics.amount.currencyCode: 'SalesDocumentCurrency'
  case _RAOpenRevCube.RevnAcctgConditionCategory
    when 'P' then RATimeBsdOpenRevnInSlsDocCrcy
    else null
  end                                                                           as RATimeBsdOpenRevnInSlsDocCrcy,

  @Aggregation.default: #SUM
  @AnalyticsDetails.query: { axis: #COLUMNS, hidden: true }
  @EndUserText.label: 'Total Cost in Company Code Currency'
  @Semantics.amount.currencyCode: 'SalesDocumentCurrency'
  case _RAOpenRevCube.RevnAcctgConditionCategory
    when 'C' then RAOpenCostInCoCodeCrcy
    else null
  end                                                                           as RAOpenCostInCoCodeCrcy,

  @Aggregation.default: #SUM
  @AnalyticsDetails.query: { axis: #COLUMNS, hidden: true }
  @EndUserText.label: 'Event Based Cost in CompanyCode Currency'
  @Semantics.amount.currencyCode: 'SalesDocumentCurrency'
  case _RAOpenRevCube.RevnAcctgConditionCategory
    when 'C' then RAEventBsdOpenCostInSlsDocCrcy
    else null
  end                                                                           as RAEventBsdOpenCostInSlsDocCrcy,

  @Aggregation.default: #SUM
  @AnalyticsDetails.query: { axis: #COLUMNS, hidden: true }
  @EndUserText.label: 'Time Based Cost in Company Code Currency'
  @Semantics.amount.currencyCode: 'SalesDocumentCurrency'
  case _RAOpenRevCube.RevnAcctgConditionCategory
    when 'C' then RATimeBsdOpenCostInSlsDocCrcy
    else null
  end                                                                           as RATimeBsdOpenCostInSlsDocCrcy
}
```
