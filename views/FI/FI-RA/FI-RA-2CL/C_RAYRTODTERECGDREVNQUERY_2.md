---
name: C_RAYRTODTERECGDREVNQUERY_2
description: "This CDS view provides the prerequisites for answering the following business questions: How much revenue is recognized this year in the display currency? How much revenue is recognized in each period? How much revenue catch-up is calculated this year from contract changes in the display currency? What is the growth for year-over-year? What is the top 5 best business partners? What is the proportion of revenue for business units, for example, by profit centre? What is the revenue or revenue catch-up for each performance obligation or contract? This query can be used in the key user tool KPI Design or Create Reports."
app_component: FI-RA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RAYRTODTERECGDREVNQUERY_2')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: How much revenue is recognized this year in the display currency? How much revenue is recognized in each period? How much revenue catch-up is calculated this year from contract changes in the display currency? What is the growth for year-over-year? What is the top 5 best business partners? What is the proportion of revenue for business units, for example, by profit centre? What is the revenue or revenue catch-up for each performance obligation or contract? This query can be used in the key user tool KPI Design or Create Reports."
semantic_vi: "Disaggregation of Recognizable Revenue — CDS view tiêu dùng dựa trên Disaggregation of Recognizable Revenue."
keywords:
  - "Disaggregation of Recognizable Revenue"
  - "disaggregation"
  - "recognizable"
  - "revenue"
  - "performance"
  - "obligation"
  - "accounting"
  - "contract"
  - "company"
  - "code"
  - "name"
  - "principle"
tags:
  - FI
  - bo:companycode
  - component:FI-RA-2CL
  - consumption-view
  - contract
  - FI-RA
  - FI-RA-2CL
  - lob:finance
---
# C_RAYRTODTERECGDREVNQUERY_2

**This CDS view provides the prerequisites for answering the following business questions: How much revenue is recognized this year in the display currency? How much revenue is recognized in each period? How much revenue catch-up is calculated this year from contract changes in the display currency? What is the growth for year-over-year? What is the top 5 best business partners? What is the proportion of revenue for business units, for example, by profit centre? What is the revenue or revenue catch-up for each performance obligation or contract? This query can be used in the key user tool KPI Design or Create Reports.**

| Property | Value |
|---|---|
| App Component | `FI-RA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RAYRTODTERECGDREVNQUERY_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PerformanceObligation` |  | |  |  | `CHAR(16)` | Performance Obligation |
| `RevenueAccountingContract` |  | |  |  | `CHAR(14)` | Revenue Contract |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CompanyCodeName` |  | |  |  | `CHAR(25)` | Name of Company Code or Company |
| `AccountingPrinciple` |  | |  |  | `CHAR(4)` | Accounting Principle |
| `localized` |  | |  | `_AccountingPrinciple._Text.AccountingPrincipleName : localized` |  |  |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Posting Period |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `BusinessPartnerName` |  | |  |  | `CHAR(81)` |  |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CustomerName` |  | |  |  | `CHAR(80)` | Name of Customer |
| `PerfOblgnFulfillmentType` |  | |  |  | `CHAR(1)` | Fulfillment Type |
| `PerformanceObligationClass` |  | |  |  | `CHAR(30)` | Performance Obligation Name |
| `RevnAcctgSalesOrganization` |  | |  |  | `CHAR(20)` | Sales Organization for Revenue Accounting |
| `RevnAcctgPerfOblgnStatus` |  | |  |  | `CHAR(1)` | Performance Obligation Status |
| `RAPerformanceObligationType` |  | |  |  | `CHAR(10)` | Revenue Accounting Performance Obligation Type |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `OrderID` |  | |  |  | `CHAR(12)` | Order Number |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Account assignment Sales Order |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `RAContractIsUniversal` |  | |  |  | `CHAR(1)` | Universal Revenue Recognition Contract |
| `DisplayCurrency` |  | |  | `$parameters.P_DisplayCurrency` | `CUKY(5)` | Display Currency |
| `RARecognizedRevnInDspCrcy` |  | |  | `cast($projection.DeltaRecognizedRevnInDspCrcy + $projection.RecgdCatchUpAmtInDspCrcy as farr_recog_amt)` | `CURR(23)` | Recognizable Revenue up to the Current Period |
| `DeltaRecognizedRevnInDspCrcy` |  | |  | `case RADefItemCube.RevnAcctgConditionCategory when 'P' then currency_conversion(amount => RADefItemCube.DeltaRecognizedAmtInSlsDocCrcy, source_currency => RADefItemCube.SalesDocumentCurrency, target_currency => $parameters.P_DisplayCurrency, exchange_rate_date => $session.system_date) else null end` | `CURR(23)` |  |
| `RecgdCatchUpAmtInDspCrcy` |  | |  | `case RADefItemCube.RevnAcctgConditionCategory when 'P' then currency_conversion(amount => RADefItemCube.RecgdCatchUpAmtInSlsDocCrcy, source_currency => RADefItemCube.SalesDocumentCurrency, target_currency => $parameters.P_DisplayCurrency, exchange_rate_date => $session.system_date) else null end` | `CURR(23)` |  |
| `RARecgdCostAmountInDspCrcy` |  | |  | `case RADefItemCube.RevnAcctgConditionCategory when 'C' then currency_conversion(amount => RADefItemCube.DeltaRecognizedAmtInSlsDocCrcy, source_currency => RADefItemCube.SalesDocumentCurrency, target_currency => $parameters.P_DisplayCurrency, exchange_rate_date => $session.system_date) else null end` | `CURR(23)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RAYRTODTERECGDREVNQUERY_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RAYRTODTERECGDREVNQUERY_2')/$value)*

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false

@AccessControl.authorizationCheck: #NOT_ALLOWED
@AccessControl.personalData.blocking: #REQUIRED

@Analytics.technicalName: 'CRAYTDRECOGDREVQ2'

@EndUserText.label: 'Disaggregation of Recognizable Revenue'

@Metadata.ignorePropagatedAnnotations: true // Views which are released to contract C1 or C2 shall be annotated with this

@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY ]
@ObjectModel.usageType: { serviceQuality: #D, sizeCategory: #XXL, dataClass: #MIXED }

@VDM.viewType: #CONSUMPTION

define transient view entity C_RAYrToDteRecgdRevnQuery_2
  provider contract analytical_query
  with parameters
    @AnalyticsDetails.query.variableSequence: 30
    P_DisplayCurrency : vdm_v_display_currency

  as projection on I_RADefrlItemForDspCrcyCube_2 as RADefItemCube

{
  @AnalyticsDetails.query: { axis: #FREE, totals: #SHOW }
  @UI.textArrangement: #TEXT_LAST
  RADefItemCube.PerformanceObligation,

  @AnalyticsDetails.query: { variableSequence: 60, axis: #FREE, totals: #SHOW }
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  RADefItemCube.RevenueAccountingContract,

  @AnalyticsDetails.query: { variableSequence: 10, axis: #FREE, totals: #SHOW }
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: false, mandatory: true }
  @ObjectModel.text.element: [ 'CompanyCodeName' ]
  RADefItemCube.CompanyCode,

  @Semantics.text: true
  RADefItemCube._CompanyCode.CompanyCodeName,

  @AnalyticsDetails.query: { variableSequence: 20, axis: #FREE, totals: #SHOW }
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: false, mandatory: true }
  @ObjectModel.text.element: [ 'AccountingPrincipleName' ]
  RADefItemCube.AccountingPrinciple,

  @Semantics.text: true
  _AccountingPrinciple._Text.AccountingPrincipleName : localized,

  @AnalyticsDetails.query: { variableSequence: 40, axis: #ROWS, totals: #SHOW }
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: true }
  RADefItemCube.FiscalYear,

  @AnalyticsDetails.query: { variableSequence: 50, axis: #ROWS, totals: #SHOW }
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  RADefItemCube.FiscalPeriod,

  @AnalyticsDetails.query: { variableSequence: 80, axis: #ROWS, totals: #SHOW }
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @ObjectModel.text.element: [ 'BusinessPartnerName' ]
// @Analytics.hidden: true
  RADefItemCube.BusinessPartner,

  @EndUserText.label: 'Business Partner Name'
  @Semantics.text: true
  RADefItemCube._BusinessPartner.BusinessPartnerName,

  @AnalyticsDetails.query: { variableSequence: 70, axis: #FREE, totals: #SHOW }
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @ObjectModel.text.element: [ 'CustomerName' ]
  RADefItemCube.Customer,

  @Semantics.text: true
  RADefItemCube._Customer.CustomerName,

  @AnalyticsDetails.query: { variableSequence: 100, axis: #FREE, totals: #SHOW }
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @UI.textArrangement: #TEXT_LAST
  RADefItemCube.PerfOblgnFulfillmentType,

  @AnalyticsDetails.query: { variableSequence: 110, axis: #ROWS, totals: #SHOW }
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  RADefItemCube.PerformanceObligationClass,

  /** Filter from Contract **/
  @AnalyticsDetails.query: { axis: #FREE, totals: #SHOW }
  @UI.textArrangement: #TEXT_LAST
  RADefItemCube.RevnAcctgSalesOrganization,

  @AnalyticsDetails.query: { axis: #FREE, totals: #SHOW }
  @UI.textArrangement: #TEXT_LAST
  RADefItemCube.RevnAcctgPerfOblgnStatus,

  @AnalyticsDetails.query: { variableSequence: 90, axis: #FREE, totals: #SHOW }
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  RADefItemCube.RAPerformanceObligationType,

  @AnalyticsDetails.query: { variableSequence: 120, axis: #FREE, totals: #SHOW }
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @ObjectModel.text.element: [ 'FunctionalAreaName' ]
  RADefItemCube.FunctionalArea,

  @Semantics.text: true
  _FunctionalArea._Text.FunctionalAreaName : localized,

  @AnalyticsDetails.query: { variableSequence: 130, axis: #FREE, totals: #SHOW }
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @ObjectModel.text.element: [ 'BusinessAreaName' ]
  RADefItemCube.BusinessArea,

  @Semantics.text: true
  _BusinessArea._Text.BusinessAreaName : localized,

  @AnalyticsDetails.query: { variableSequence: 140, axis: #FREE, totals: #SHOW }
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @ObjectModel.text.element: [ 'SegmentName' ]
  RADefItemCube.Segment,

  @Semantics.text: true
  _Segment._Text.SegmentName : localized,

  @AnalyticsDetails.query: { variableSequence: 150, axis: #FREE, totals: #SHOW }
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @ObjectModel.text.element: [ 'ProfitCenterName' ]
  RADefItemCube.ProfitCenter,

  @Semantics.text: true
  _ProfitCenter[1:     ValidityEndDate   >= $session.system_date
                   and ValidityStartDate <= $session.system_date]._Text.ProfitCenterName : localized,

//  @AnalyticsDetails.query: { axis: #FREE, totals: #SHOW }
//  @Consumption.hidden: true
//  RADefItemCube.ProfitabilitySegment,

  @AnalyticsDetails.query: { axis: #FREE, totals: #SHOW }
  @ObjectModel.text.element: [ 'CostCenterName' ]
  RADefItemCube.CostCenter,

  @Semantics.text: true
  _CostCenter[1:     ValidityEndDate   >= $session.system_date
                 and ValidityStartDate <= $session.system_date]._Text.CostCenterName : localized,

  @AnalyticsDetails.query: { variableSequence: 160, axis: #FREE, totals: #SHOW }
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  RADefItemCube.OrderID,

  @AnalyticsDetails.query: { axis: #FREE, totals: #SHOW }
  RADefItemCube.SalesOrder,

  @AnalyticsDetails.query: { variableSequence: 170, axis: #FREE, totals: #SHOW }
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  RADefItemCube.WBSElementExternalID,

  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: false, mandatory: false }
  RADefItemCube.RAContractIsUniversal,

  @Aggregation.default: #FORMULA
  $parameters.P_DisplayCurrency              as DisplayCurrency,

  /** MEASURES **/
  @Aggregation.default: #FORMULA
  @AnalyticsDetails.query.axis: #COLUMNS
  @Semantics.amount.currencyCode: 'DisplayCurrency'
  cast($projection.DeltaRecognizedRevnInDspCrcy + $projection.RecgdCatchUpAmtInDspCrcy
       as farr_recog_amt)                    as RARecognizedRevnInDspCrcy,

  @Aggregation.default: #FORMULA
  @AnalyticsDetails.query.axis: #COLUMNS
  @Consumption.hidden: true
  @EndUserText.label: 'Recognizable Revenue' // Delta Recognizable Revenue (without Revenue Catch-Up)
  @Semantics.amount.currencyCode: 'DisplayCurrency'
  case RADefItemCube.RevnAcctgConditionCategory
    when 'P' then currency_conversion(amount             => RADefItemCube.DeltaRecognizedAmtInSlsDocCrcy,
                                      source_currency    => RADefItemCube.SalesDocumentCurrency,
                                      target_currency    => $parameters.P_DisplayCurrency,
                                      exchange_rate_date => $session.system_date)
    else null
  end                                        as DeltaRecognizedRevnInDspCrcy,

  @Aggregation.default: #FORMULA
  @AnalyticsDetails.query: { axis: #COLUMNS, hidden: true }
  @EndUserText.label: 'Revenue Catch-Up'
  @Semantics.amount.currencyCode: 'DisplayCurrency'
  case RADefItemCube.RevnAcctgConditionCategory
    when 'P' then currency_conversion(amount             => RADefItemCube.RecgdCatchUpAmtInSlsDocCrcy,
                                      source_currency    => RADefItemCube.SalesDocumentCurrency,
                                      target_currency    => $parameters.P_DisplayCurrency,
                                      exchange_rate_date => $session.system_date)
    else null
  end                                        as RecgdCatchUpAmtInDspCrcy,

  @Aggregation.default: #FORMULA
  @AnalyticsDetails.query: { axis: #COLUMNS, hidden: true }
  @EndUserText.label: 'Recognizable Cost'
  @Semantics.amount.currencyCode: 'DisplayCurrency'
  case RADefItemCube.RevnAcctgConditionCategory
    when 'C' then currency_conversion(amount             => RADefItemCube.DeltaRecognizedAmtInSlsDocCrcy,
                                      source_currency    => RADefItemCube.SalesDocumentCurrency,
                                      target_currency    => $parameters.P_DisplayCurrency,
                                      exchange_rate_date => $session.system_date)
    else null
  end                                        as RARecgdCostAmountInDspCrcy
}

where RADefItemCube.ConditionIsForStatistics = ''
```
