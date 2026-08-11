---
name: C_PUBSECFNDSMBDGTACTLQRY1
description: "Fund Budget Cmtmt and Actuals - Query"
app_component: PSM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECFNDSMBDGTACTLQRY1')/$value
semantic_en: "Fund Budget Cmtmt and Actuals - Query"
semantic_vi: "Fund Budget Cmtmt and Actuals - Query — CDS view tiêu dùng dựa trên I_PubSecFndsMBdgtActlCube."
keywords:
  - "fund"
  - "budget"
  - "cmtmt"
  - "and"
  - "actuals"
  - "query"
  - "ledger"
  - "company"
  - "code"
  - "account"
  - "chart"
  - "accounts"
tags:
  - PSM
  - budget
  - component:PSM
  - consumption-view
---
# C_PUBSECFNDSMBDGTACTLQRY1

**Fund Budget Cmtmt and Actuals - Query**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECFNDSMBDGTACTLQRY1')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `Fund` |  | |  |  | `CHAR(10)` | Fund |
| `FundType` |  | |  |  | `CHAR(6)` | Fund Type |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `FinancialManagementArea` |  | |  |  | `CHAR(4)` | Financial Management Area |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | WBS Element External ID |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `PubSecBudgetCnsmpnDate` |  | |  |  | `DATS(8)` | Budget Consumption Date |
| `PubSecBudgetCnsmpnTypeGroup` |  | |  |  | `CHAR(2)` | Budget Consumption Type Group |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECFNDSMBDGTACTLQRY1')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECFNDSMBDGTACTLQRY1')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CPSMS4CFMBDACTQ1'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Fund Budget Cmtmt and Actuals - Query'

@VDM.viewType: #CONSUMPTION
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@Analytics: {
     query: true,
     internalName: #LOCAL,
     settings: {
         maxProcessingEffort: #HIGH
     }
}
@ObjectModel: {
     usageType: {
         dataClass: #MIXED,
         serviceQuality: #D,
         sizeCategory: #XXL
     },
     supportedCapabilities: [ #ANALYTICAL_QUERY ]
}
@OData.publish: true
define view C_PubSecFndsMBdgtActlQry1
  with parameters
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_LANGUAGE
    P_Language     : sylangu,
    @Consumption.hidden: true
    @Semantics.businessDate.at: true
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate      : vdm_v_key_date,
    @Consumption.hidden: true
    @Environment.systemField: #USER
    P_BusinessUser : syuname

  as select from I_PubSecFndsMBdgtActlCube as Cube
{
  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: false, mandatory: false}
  @Consumption.derivation: { lookupEntity: 'I_Ledger',
          resultElement: 'Ledger' }
  @AnalyticsDetails.query.variableSequence : 10
  @AnalyticsDetails.query.axis: #FREE
  Cube.Ledger,

  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: false, mandatory: false}
  @Consumption.derivation: {
      lookupEntity: 'I_UserSettingsForCompanyCode',
        resultElement: 'CompanyCode',
        binding:  [ {
          targetElement : 'BusinessUser' ,
          type : #PARAMETER,
          value : 'P_BusinessUser'
        } ]
  }
  @AnalyticsDetails.query.variableSequence : 20
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  Cube.CompanyCode,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  Cube.GLAccount,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  Cube.ChartOfAccounts,

  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 30
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.display: #KEY_TEXT
  Cube.Fund,

  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 40
  @AnalyticsDetails.query.display: #KEY_TEXT
  @AnalyticsDetails.query.axis: #FREE
  Cube.FundType,

  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @Consumption.derivation: { lookupEntity: 'I_CalendarDate',
        resultElement: 'CalendarYear', binding: [
        { targetElement : 'CalendarDate' , type : #PARAMETER, value : 'P_KeyDate' } ]
       }
  @AnalyticsDetails.query.variableSequence: 50
  @AnalyticsDetails.query.axis: #FREE
  Cube.FiscalYear,

  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @Consumption.derivation: { lookupEntity: 'I_CalendarDate',
        resultElement: 'CalendarMonth', binding: [
        { targetElement : 'CalendarDate' , type : #PARAMETER, value : 'P_KeyDate' } ]
       }
  @AnalyticsDetails.query.variableSequence: 60
  @AnalyticsDetails.query.axis: #FREE
  Cube.FiscalPeriod,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  Cube.PostingDate,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  Cube.Segment,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  Cube.ProfitCenter,

  @AnalyticsDetails.query.axis: #FREE
  Cube.FinancialManagementArea,

  @AnalyticsDetails.query.axis: #FREE
  Cube.ControllingArea,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  Cube.CostCenter,
  _CostCenter[1:ValidityEndDate   >= $parameters.P_KeyDate and
                  ValidityStartDate <= $parameters.P_KeyDate]._Text[1:Language = $parameters.P_Language].CostCenterName,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  Cube.WBSElementExternalID,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  Cube.FunctionalArea,

  @AnalyticsDetails.query.axis: #FREE
  Cube.GrantID,
  
  @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: false, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 60
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  Cube.PubSecBudgetCnsmpnDate,

  @AnalyticsDetails.query.axis: #FREE
  Cube.PubSecBudgetCnsmpnTypeGroup,

  @Semantics.currencyCode: true
  @AnalyticsDetails.query.axis: #FREE
  Cube.CompanyCodeCurrency,

  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @AnalyticsDetails.query.hidden : true
  @DefaultAggregation: #SUM
  Cube.AmountInCompanyCodeCurrency
}
```
