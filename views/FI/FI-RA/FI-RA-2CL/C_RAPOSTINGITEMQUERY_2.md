---
name: C_RAPOSTINGITEMQUERY_2
description: "This CDS view provides the prerequisites for answering the following business questions: How much revenue is posted in the document currency and company code currency? How much revenue is posted in each period in the document currency and company code currency? How much revenue is posted for each G/L account in the document currency and company code currency? What proportion of posted revenue belongs to each business unit? What is the posted revenue for each performance obligation or contract?"
app_component: FI-RA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RAPOSTINGITEMQUERY_2')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: How much revenue is posted in the document currency and company code currency? How much revenue is posted in each period in the document currency and company code currency? How much revenue is posted for each G/L account in the document currency and company code currency? What proportion of posted revenue belongs to each business unit? What is the posted revenue for each performance obligation or contract?"
semantic_vi: "Disaggregation of Revenue — CDS view tiêu dùng dựa trên Disaggregation of Revenue."
keywords:
  - "Disaggregation of Revenue"
  - "disaggregation"
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
  - account
  - bo:plant
  - component:FI-RA-2CL
  - consumption-view
  - contract
  - document
  - FI-RA
  - FI-RA-2CL
  - lob:finance
  - bo:purchaseorder
---
# C_RAPOSTINGITEMQUERY_2

**This CDS view provides the prerequisites for answering the following business questions: How much revenue is posted in the document currency and company code currency? How much revenue is posted in each period in the document currency and company code currency? How much revenue is posted for each G/L account in the document currency and company code currency? What proportion of posted revenue belongs to each business unit? What is the posted revenue for each performance obligation or contract?**

| Property | Value |
|---|---|
| App Component | `FI-RA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RAPOSTINGITEMQUERY_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PerformanceObligation` |  | |  |  | `CHAR(16)` | Performance Obligation |
| `RevenueAccountingContract` |  | |  |  | `CHAR(14)` | Revenue Contract |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CompanyCodeName` |  | |  |  | `CHAR(25)` | Name of Company Code or Company |
| `AccountingPrinciple` |  | |  |  | `CHAR(4)` | Accounting Principle |
| `localized` |  | |  | `RAPostingItemCube._AccountingPrinciple._Text.AccountingPrincipleName : localized` |  |  |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account Number |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `OrderID` |  | |  |  | `CHAR(12)` | Order Number |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Order Number |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `RevnAcctgContractCreationDate` |  | |  |  | `DATS(8)` | Created On |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `BusinessPartnerName` |  | |  |  | `CHAR(81)` |  |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CustomerName` |  | |  |  | `CHAR(80)` | Name of Customer |
| `PerfOblgnFulfillmentType` |  | |  |  | `CHAR(1)` | Fulfillment Type |
| `RAPerformanceObligationType` |  | |  |  | `CHAR(10)` | Revenue Accounting Performance Obligation Type |
| `RevnAcctgSalesOrganization` |  | |  |  | `CHAR(20)` | Sales Organization for Revenue Accounting |
| `SalesDocumentCurrency` |  | |  |  | `CUKY(5)` | SD Document Currency |
| `AdditionalCurrency1` |  | |  |  | `CUKY(5)` | Currency Key of Second Local Currency |
| `AdditionalCurrency2` |  | |  |  | `CUKY(5)` | Currency Key of Third Local Currency |
| `RevnAcctgPostgAmtInSlsDocCrcy` |  | |  |  | `CURR(23)` | Posting Revenue in Document Currency |
| `RevnAcctgPostgAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Posting Revenue in Company Code Currency |
| `RevnAcctgPostgAmtInAddlCrcy1` |  | |  |  | `CURR(23)` | Posting Revenue in Local Currency 2 |
| `RevnAcctgPostgAmtInAddlCrcy2` |  | |  |  | `CURR(23)` | Posting Revenue in Local Currency 3 |
| `RAPostedCostInSlsDocCrcy` |  | |  |  | `CURR(23)` | Posting Cost in Document Currency |
| `RAPostedCostAmountInCoCodeCrcy` |  | |  |  | `CURR(23)` | Posting Cost in Company Code Currency |
| `RAPostedCostAmountInAddlCrcy1` |  | |  |  | `CURR(23)` | Posting Cost in Local Currency 2 |
| `RAPostedCostAmountInAddlCrcy2` |  | |  |  | `CURR(23)` | Posting Cost in Local Currency 3 |
| `RAContractIsUniversal` |  | |  |  | `CHAR(1)` | Universal Revenue Recognition Contract |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RAPOSTINGITEMQUERY_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RAPOSTINGITEMQUERY_2')/$value)*

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false

@AccessControl.authorizationCheck: #NOT_ALLOWED
@AccessControl.personalData.blocking: #REQUIRED

@Analytics.technicalName: 'CRAPOSTITEMQUERY2'

@EndUserText.label: 'Disaggregation of Revenue'

@Metadata.ignorePropagatedAnnotations: true // views which are released to contract C1 or C2 shall be annotated with this

@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY ]
@ObjectModel.usageType: { serviceQuality: #D, sizeCategory: #XXL, dataClass: #MIXED }

@VDM.viewType: #CONSUMPTION

define transient view entity C_RAPostingItemQuery_2
  provider contract analytical_query

  as projection on I_RAPostingItemCube_2 as RAPostingItemCube

{
  @AnalyticsDetails.query: { axis: #FREE, totals: #SHOW }
  @UI.textArrangement: #TEXT_LAST
  RAPostingItemCube.PerformanceObligation,

  @AnalyticsDetails.query: { variableSequence: 50, axis: #FREE, totals: #SHOW }
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  RAPostingItemCube.RevenueAccountingContract,


  /** DIMENSIONS from Posting Table**/

  @AnalyticsDetails.query: { variableSequence: 10, axis: #ROWS, totals: #SHOW }
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: true }
  @ObjectModel.text.element: [ 'CompanyCodeName' ]
  RAPostingItemCube.CompanyCode,

  @Semantics.text: true
  RAPostingItemCube._CompanyCode.CompanyCodeName, // used to display company code description

  @AnalyticsDetails.query: { variableSequence: 20, axis: #ROWS, totals: #SHOW }
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: true }
  @ObjectModel.text.element: [ 'AccountingPrincipleName' ]
  RAPostingItemCube.AccountingPrinciple,

  @Semantics.text: true
  RAPostingItemCube._AccountingPrinciple._Text.AccountingPrincipleName : localized,

  @AnalyticsDetails.query: { variableSequence: 30, axis: #ROWS, totals: #SHOW }
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: true }
  RAPostingItemCube.FiscalYear,

  @AnalyticsDetails.query: { variableSequence: 40, axis: #ROWS, totals: #SHOW }
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  RAPostingItemCube.FiscalPeriod,

  @AnalyticsDetails.query: { axis: #FREE, totals: #SHOW }
  @UI.textArrangement: #TEXT_LAST
  RAPostingItemCube.GLAccount,

  @AnalyticsDetails.query: { variableSequence: 80, axis: #FREE, totals: #SHOW }
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @ObjectModel.text.element: [ 'FunctionalAreaName' ]
  RAPostingItemCube.FunctionalArea,

  @Semantics.text: true
  RAPostingItemCube._FunctionalArea._Text.FunctionalAreaName : localized,

  @AnalyticsDetails.query: { variableSequence: 90, axis: #FREE, totals: #SHOW }
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @ObjectModel.text.element: [ 'BusinessAreaName' ]
  RAPostingItemCube.BusinessArea,

  @Semantics.text: true
  RAPostingItemCube._BusinessArea._Text.BusinessAreaName : localized,

  @AnalyticsDetails.query: { variableSequence: 100, axis: #FREE, totals: #SHOW }
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @ObjectModel.text.element: [ 'SegmentName' ]
  RAPostingItemCube.Segment,

  @Semantics.text: true
  RAPostingItemCube._Segment._Text.SegmentName : localized,

  @AnalyticsDetails.query: { variableSequence: 110, axis: #FREE, totals: #SHOW }
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @ObjectModel.text.element: [ 'ProfitCenterName' ]
  RAPostingItemCube.ProfitCenter,

  @Semantics.text: true
  RAPostingItemCube._ProfitCenter[1:     ValidityEndDate   >= $session.system_date
                                     and ValidityStartDate <= $session.system_date]._Text.ProfitCenterName : localized,

  @AnalyticsDetails.query: { axis: #FREE, totals: #SHOW }
  @ObjectModel.text.element: [ 'CostCenterName' ]
  RAPostingItemCube.CostCenter,

  @Semantics.text: true
  RAPostingItemCube._CostCenter[1:     ValidityEndDate   >= $session.system_date
                                   and ValidityStartDate <= $session.system_date]._Text.CostCenterName : localized,

  @AnalyticsDetails.query: { variableSequence: 120, axis: #FREE, totals: #SHOW }
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  RAPostingItemCube.OrderID,

  @AnalyticsDetails.query: { axis: #FREE, totals: #SHOW }
  RAPostingItemCube.SalesOrder,

  @AnalyticsDetails.query: { variableSequence: 130, axis: #FREE, totals: #SHOW }
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  RAPostingItemCube.WBSElementExternalID,


  /** Filter from Contract **/

  @AnalyticsDetails.query: { variableSequence: 150, totals: #HIDE }
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  RAPostingItemCube.RevnAcctgContractCreationDate,


  /** DIMENSIONS from POB Table **/

  @AnalyticsDetails.query: { variableSequence: 140, axis: #FREE, totals: #SHOW }
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @ObjectModel.text.element: [ 'BusinessPartnerName' ]
  RAPostingItemCube.BusinessPartner,

  @EndUserText.label: 'Business Partner Name'
  @Semantics.text: true
  RAPostingItemCube._BusinessPartner.BusinessPartnerName,

  @AnalyticsDetails.query: { variableSequence: 60, axis: #FREE, totals: #SHOW }
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @ObjectModel.text.element: [ 'CustomerName' ]
  RAPostingItemCube.Customer,

  @Semantics.text: true
  RAPostingItemCube._Customer.CustomerName,

  @AnalyticsDetails.query: { axis: #FREE, totals: #SHOW }
  @UI.textArrangement: #TEXT_LAST
  RAPostingItemCube.PerfOblgnFulfillmentType,

  @AnalyticsDetails.query: { variableSequence: 70, axis: #FREE, totals: #SHOW }
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  RAPostingItemCube.RAPerformanceObligationType,

  @AnalyticsDetails.query: { axis: #FREE, totals: #SHOW }
  @UI.textArrangement: #TEXT_LAST
  RAPostingItemCube.RevnAcctgSalesOrganization,

  // use document currency as dimension in case of summing up different currencies
  @AnalyticsDetails.query: { axis: #FREE, totals: #SHOW }
  RAPostingItemCube.SalesDocumentCurrency           as SalesDocumentCurrency,

  RAPostingItemCube.AdditionalCurrency1,

  RAPostingItemCube.AdditionalCurrency2,


  /** MEASURES **/

  @Aggregation.default: #SUM
  @AnalyticsDetails.query.axis: #COLUMNS
  @Semantics.amount.currencyCode: 'SalesDocumentCurrency'
  RAPostingItemCube.RevnAcctgPostgAmtInSlsDocCrcy,

  @Aggregation.default: #SUM
  @AnalyticsDetails.query.axis: #COLUMNS
  @Semantics.amount.currencyCode: 'SalesDocumentCurrency'
  RAPostingItemCube.RevnAcctgPostgAmtInCoCodeCrcy,

  @Aggregation.default: #SUM
  @AnalyticsDetails.query: { axis: #COLUMNS, hidden: true }
  @Semantics.amount.currencyCode: 'AdditionalCurrency1'
  RAPostingItemCube.RevnAcctgPostgAmtInAddlCrcy1,

  @Aggregation.default: #SUM
  @AnalyticsDetails.query: { axis: #COLUMNS, hidden: true }
  @Semantics.amount.currencyCode: 'AdditionalCurrency2'
  RAPostingItemCube.RevnAcctgPostgAmtInAddlCrcy2,

  @Aggregation.default: #SUM
  @AnalyticsDetails.query: { axis: #COLUMNS, hidden: true }
  @Semantics.amount.currencyCode: 'SalesDocumentCurrency'
  RAPostingItemCube.RAPostedCostInSlsDocCrcy,

  @Aggregation.default: #SUM
  @AnalyticsDetails.query: { axis: #COLUMNS, hidden: true }
  @Semantics.amount.currencyCode: 'SalesDocumentCurrency'
  RAPostingItemCube.RAPostedCostAmountInCoCodeCrcy,

  @Aggregation.default: #SUM
  @AnalyticsDetails.query: { axis: #COLUMNS, hidden: true }
  @Semantics.amount.currencyCode: 'AdditionalCurrency1'
  RAPostingItemCube.RAPostedCostAmountInAddlCrcy1,

  @Aggregation.default: #SUM
  @AnalyticsDetails.query: { axis: #COLUMNS, hidden: true }
  @Semantics.amount.currencyCode: 'AdditionalCurrency2'
  RAPostingItemCube.RAPostedCostAmountInAddlCrcy2,

  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: false, mandatory: false }
  RAPostingItemCube.RAContractIsUniversal
}
```
