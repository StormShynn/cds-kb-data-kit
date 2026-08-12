---
name: C_PUBSECGTEEMBDGTACTLQRY1
description: "Grant Budget Cmtmt and Actuals - Query"
app_component: PSM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECGTEEMBDGTACTLQRY1')/$value
semantic_en: "Grant Budget Cmtmt and Actuals - Query"
semantic_vi: "Grant Budget Cmtmt and Actuals - Query — CDS view tiêu dùng dựa trên I_PubSecGteeMBdgtActlCube."
keywords:
  - "grant"
  - "budget"
  - "cmtmt"
  - "and"
  - "actuals"
  - "query"
  - "source"
  - "ledger"
  - "company"
  - "code"
  - "grantee"
  - "mgmt"
  - "sponsor"
  - "actual"
  - "plan"
tags:
  - PSM
  - budget
  - component:PSM
  - consumption-view
---
# C_PUBSECGTEEMBDGTACTLQRY1

**Grant Budget Cmtmt and Actuals - Query**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECGTEEMBDGTACTLQRY1')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SourceLedger` | ✓ | |  |  | `CHAR(2)` | Source Ledger |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `GranteeMgmtSponsor` |  | |  |  | `CHAR(10)` | Grant Sponsor |
| `ActualPlanCode` |  | |  |  | `CHAR(1)` | Actual Plan Code |
| `GrantLifecycleStatus` |  | |  |  | `CHAR(5)` | Lifecycle Status |
| `GrantStatus` |  | |  |  | `CHAR(5)` | Grant Status |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `GrantType` |  | |  |  | `CHAR(2)` | Grant Type |
| `BusPartEmplrIndstryCode` |  | |  |  | `CHAR(10)` | Industry |
| `SponsoredClass` |  | |  |  | `CHAR(20)` | Sponsored Class |
| `SponsoredProgram` |  | |  |  | `CHAR(20)` | Sponsored Program |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | WBS Element External ID |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `AmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `CityName` |  | |  |  | `CHAR(40)` | City |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `PubSecBudgetCnsmpnDate` |  | |  |  | `DATS(8)` | Budget Consumption Date |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Valid-to Date |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Valid-from Date |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `Fund` |  | |  |  | `CHAR(10)` | Fund |
| `GranteeMgmtFundType` |  | |  |  | `CHAR(1)` | Fund Type for Grants Management |
| `FundType` |  | |  |  | `CHAR(6)` | Fund Type |
| `PubSecBudgetIsRelevant` |  | |  |  | `CHAR(1)` | Budget-Relevant Indicator |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `PubSecBdgtAcctRevnExpnCode` |  | |  |  | `CHAR(1)` | Expense or Revenue on Budget Account |
| `PubSecBudgetCnsmpnTypeGroup` |  | |  |  | `CHAR(2)` | Budget Consumption Type Group |
| `BudgetProcess` |  | |  |  | `CHAR(4)` | Budget Process Type |
| `BudgetingType` |  | |  |  | `CHAR(8)` | Budget Type (Subcategory) |
| `FinancialManagementArea` |  | |  |  | `CHAR(4)` | Financial Management Area |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECGTEEMBDGTACTLQRY1')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECGTEEMBDGTACTLQRY1')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CPSMS4CGBDACTAQ1'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Grant Budget Cmtmt and Actuals - Query'

@ClientHandling.algorithm: #SESSION_VARIABLE
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
@ObjectModel.modelingPattern:#ANALYTICAL_QUERY
@OData.publish: true


define view C_PubSecGteeMBdgtActlQry1
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
  as select from I_PubSecGteeMBdgtActlCube as Cube
{
      @AnalyticsDetails.query.hidden : true
      @AnalyticsDetails.query.axis: #FREE
  key SourceLedger,
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #KEY_TEXT
      CompanyCode,
      @AnalyticsDetails.query.variableSequence: 160
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #KEY_TEXT
      GrantID,
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #KEY_TEXT
      GranteeMgmtSponsor,
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #TEXT
      ActualPlanCode,
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #TEXT_KEY
      GrantLifecycleStatus,
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #KEY_TEXT
      GrantStatus,  
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #TEXT
      ControllingArea,
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #KEY_TEXT
      GrantType,
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #KEY_TEXT
      BusPartEmplrIndstryCode,
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #TEXT_KEY
      SponsoredClass,
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #TEXT_KEY
      SponsoredProgram,

      @Semantics.currencyCode: true
      @AnalyticsDetails.query.axis: #FREE
      CompanyCodeCurrency,
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #TEXT_KEY
      CostCenter,
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #TEXT_KEY
      WBSElementExternalID,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
//      @AnalyticsDetails.query.hidden : true
      @DefaultAggregation: #SUM
      @AnalyticsDetails.query.axis: #FREE 
      AmountInCompanyCodeCurrency,
      
      @Semantics.currencyCode: true
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #KEY_TEXT
      GlobalCurrency,
      
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      
      AmountInGlobalCurrency,

      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #TEXT
      Region,
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #TEXT
      Country,
      @AnalyticsDetails.query.display: #TEXT
      CityName,
//      @AnalyticsDetails.query.axis: #FREE
//      @AnalyticsDetails.query.totals: #SHOW
//      @AnalyticsDetails.query.display: #KEY
//      CountryRegion, 

      @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: false, mandatory: false }
      @AnalyticsDetails.query.variableSequence: 60
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.totals: #SHOW
      PostingDate,

      @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: false, mandatory: false }
      @AnalyticsDetails.query.variableSequence: 60
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.totals: #SHOW
      Cube.PubSecBudgetCnsmpnDate,


      @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: false, mandatory: false }
      @AnalyticsDetails.query.variableSequence: 60
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.totals: #SHOW
      ValidityEndDate,

      @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: false, mandatory: false }
      @AnalyticsDetails.query.variableSequence: 60
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.totals: #SHOW
      ValidityStartDate,

      // Changes for Fund Overview
      @AnalyticsDetails.query.axis: #FREE
      FiscalYear,
      @AnalyticsDetails.query.axis: #FREE
      FiscalPeriod,
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #KEY_TEXT
      Fund,
      @AnalyticsDetails.query.axis: #FREE
      GranteeMgmtFundType,
      @AnalyticsDetails.query.axis: #FREE
      FundType,
      @AnalyticsDetails.query.axis: #FREE
      PubSecBudgetIsRelevant,
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #KEY_TEXT
      Segment,
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #KEY_TEXT
      ProfitCenter,
      @AnalyticsDetails.query.axis: #FREE
      PubSecBdgtAcctRevnExpnCode,
      @AnalyticsDetails.query.axis: #FREE
      PubSecBudgetCnsmpnTypeGroup,
      @AnalyticsDetails.query.axis: #FREE
      BudgetProcess,
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #KEY_TEXT
      BudgetingType,
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #KEY_TEXT
      FinancialManagementArea
}
```
