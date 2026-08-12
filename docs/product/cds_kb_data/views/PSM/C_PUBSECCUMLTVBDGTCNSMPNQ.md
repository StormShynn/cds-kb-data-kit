---
name: C_PUBSECCUMLTVBDGTCNSMPNQ
description: "Query for Cumulative Budget - Query"
app_component: PSM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECCUMLTVBDGTCNSMPNQ')/$value
semantic_en: "Query for Cumulative Budget - Query"
semantic_vi: "Query for Cumulative Budget - Query — CDS view tiêu dùng dựa trên I_PubSecCumltvBdgtCnsmpnC."
keywords:
  - "query"
  - "for"
  - "cumulative"
  - "budget"
  - "ledger"
  - "company"
  - "code"
  - "fiscal"
  - "year"
  - "period"
  - "date"
  - "currency"
tags:
  - PSM
  - budget
  - component:PSM
  - consumption-view
---
# C_PUBSECCUMLTVBDGTCNSMPNQ

**Query for Cumulative Budget - Query**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECCUMLTVBDGTCNSMPNQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalPeriodEndDate` |  | |  |  | `DATS(8)` | End Date of Fiscal Period |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `ActualPlanCode` |  | |  |  | `CHAR(1)` | Actual Plan Code |
| `BudgetAmountInCompanyCodeCrcy` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `ConsumedAmountInCCCrcy` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `AvailableAmountInCCCrcy` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `PubSecBudgetCnsmpnDate` |  | |  |  | `DATS(8)` | Budget Consumption Date |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `BudgetPeriod` |  | |  |  | `CHAR(10)` | Budget Period |
| `Fund` |  | |  |  | `CHAR(10)` | Fund |
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `PubSecBudgetAccount` |  | |  |  | `CHAR(10)` | Budget Account |
| `PubSecBdgtAcctRevnExpnCode` |  | |  |  | `CHAR(1)` | Expense or Revenue on Budget Account |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | WBS Element External ID |
| `PartnerWBSElementExternalID` |  | |  |  | `CHAR(24)` | Partner WBS Element External ID |
| `GrantType` |  | |  |  | `CHAR(2)` | Grant Type |
| `GranteeMgmtSponsor` |  | |  |  | `CHAR(10)` | Grant Sponsor |
| `SponsoredClass` |  | |  |  | `CHAR(20)` | Sponsored Class |
| `SponsoredProgram` |  | |  |  | `CHAR(20)` | Sponsored Program |
| `BudgetingType` |  | |  |  | `CHAR(8)` | Budget Type (Subcategory) |
| `GranteeMgmtFundType` |  | |  |  | `CHAR(1)` | Fund Type for Grants Management |
| `GrantLifecycleStatus` |  | |  |  | `CHAR(5)` | Lifecycle Status |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `PubSecBudgetIsRelevant` |  | |  |  | `CHAR(1)` | Budget-Relevant Indicator |
| `PubSecBudgetCnsmpnTypeGroup` |  | |  |  | `CHAR(2)` | Budget Consumption Type Group |
| `AmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `BdgtConsumableAmtInGlobalCrcy` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `BdgtConsumedAmtInGlobalCrcy` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `BdgtAvailableAmtInGlobalCrcy` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `FinancialManagementArea` |  | |  |  | `CHAR(4)` | Financial Management Area |
| `FundType` |  | |  |  | `CHAR(6)` | Fund Type |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECCUMLTVBDGTCNSMPNQ')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECCUMLTVBDGTCNSMPNQ')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CPUBSECCUMLTV'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Query for Cumulative Budget - Query'

@VDM.viewType: #CONSUMPTION


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
     modelingPattern: #ANALYTICAL_QUERY,
     supportedCapabilities: [ #ANALYTICAL_QUERY ]
}
@OData.publish: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true



define view C_PubSecCumltvBdgtCnsmpnQ
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


  as select from I_PubSecCumltvBdgtCnsmpnC as Cube
{
  //SourceLedger,
  @AnalyticsDetails.query.hidden : true
  @AnalyticsDetails.query.axis: #FREE
  Ledger,
  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: true}
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
  CompanyCode,
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @Consumption.derivation: { lookupEntity: 'I_CalendarDate',
        resultElement: 'CalendarYear', binding: [
        { targetElement : 'CalendarDate' , type : #PARAMETER, value : 'P_KeyDate' } ]
       }
  @AnalyticsDetails.query.variableSequence: 40
  @AnalyticsDetails.query.axis: #FREE
  Cube.FiscalYear,
  @AnalyticsDetails.query.axis: #FREE
  FiscalPeriodEndDate,
  @Semantics.currencyCode: true
  @AnalyticsDetails.query.axis: #FREE
  CompanyCodeCurrency,
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @DefaultAggregation: #SUM
  AmountInCompanyCodeCurrency,
  @AnalyticsDetails.query.axis: #FREE
  ActualPlanCode,
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @DefaultAggregation: #SUM
  @EndUserText: { label:  'Budget Amount in Company Code Currency'}
  BudgetAmountInCompanyCodeCrcy,
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @DefaultAggregation: #SUM
  @EndUserText: { label:  'Consumed Amount in Company Code Currency'}
  ConsumedAmountInCCCrcy,
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @DefaultAggregation: #SUM
  @EndUserText: { label:  'Available Amount in CC Currency'}
  AvailableAmountInCCCrcy,
  FiscalYearVariant,
  PubSecBudgetCnsmpnDate,
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 140
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  Cube.CostCenter,
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 110
  @AnalyticsDetails.query.axis: #FREE
  Cube.BudgetPeriod,
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 100
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  Cube.Fund,
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 160
  @AnalyticsDetails.query.axis: #FREE
  Cube.GrantID,
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 120
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  Cube.PubSecBudgetAccount,
  @AnalyticsDetails.query.axis: #FREE
  Cube.PubSecBdgtAcctRevnExpnCode,
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 150
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  Cube.WBSElementExternalID,
  Cube._WBSElementExternalID,
  @AnalyticsDetails.query.axis: #FREE
  Cube.PartnerWBSElementExternalID,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  Cube.GrantType,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  Cube.GranteeMgmtSponsor,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  Cube.SponsoredClass,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  Cube.SponsoredProgram,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  Cube.BudgetingType,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  Cube.GranteeMgmtFundType,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  Cube.GrantLifecycleStatus,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  Cube.GlobalCurrency,
  @AnalyticsDetails.query.axis: #FREE
  PubSecBudgetIsRelevant,
  @AnalyticsDetails.query.axis: #FREE
  PubSecBudgetCnsmpnTypeGroup,
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  Cube.AmountInGlobalCurrency,

  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  @EndUserText: { label:  'Budget Amount'}
  BdgtConsumableAmtInGlobalCrcy,
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  @EndUserText: { label:  'Consumed Amount'}
  BdgtConsumedAmtInGlobalCrcy,
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  @EndUserText: { label:  'Available Amount'}
  BdgtAvailableAmtInGlobalCrcy,

  Cube._CostCenter,
  Cube.ControllingArea,
  Cube.FinancialManagementArea,
  Cube._Fund,
  Cube.FundType,
  Cube.ProfitCenter,
  Cube.Segment,
  Cube.ChartOfAccounts,
  Cube._ChartOfAccounts

}
```
