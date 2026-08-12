---
name: C_PUBSECBDGTPAYTITEMQRY
description: "Budget and Payment Line Items Query"
app_component: PSM-FM-IS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECBDGTPAYTITEMQRY')/$value
semantic_en: "Budget and Payment Line Items Query"
semantic_vi: "Budget and Payment Line Items Query — CDS view tiêu dùng dựa trên Budget and Payment Line Items Query."
keywords:
  - "budget"
  - "and"
  - "payment"
  - "line"
  - "items"
  - "query"
  - "ledger"
  - "company"
  - "code"
  - "segment"
  - "fund"
  - "grant"
tags:
  - PSM
  - budget
  - component:PSM-FM-IS
  - consumption-view
  - payment
  - PSM-FM
  - PSM-FM-IS
---
# C_PUBSECBDGTPAYTITEMQRY

**Budget and Payment Line Items Query**

| Property | Value |
|---|---|
| App Component | `PSM-FM-IS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECBDGTPAYTITEMQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `Fund` |  | |  |  | `CHAR(10)` | Fund |
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `CashLedgerAccount` |  | |  |  | `CHAR(10)` | Cash Origin Account |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `FundHierarchy` |  | |  |  | `CHAR(42)` | Fund Hierarchy |
| `GrantHierarchyNode` |  | |  |  | `CHAR(50)` | Grant Hierarchy Node |
| `BudgetAccountHierarchy` |  | |  |  | `CHAR(42)` | Budget Account Hierarchy |
| `CostCenterHierarchy` |  | |  |  | `CHAR(42)` | Cost Center Hierarchy |
| `ClearingDate` |  | |  |  | `DATS(8)` | Clearing Date |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `FunctionalAreaHierarchy` |  | |  |  | `CHAR(42)` | Functional Area Hierarchy |
| `PlanningCategory` |  | |  |  | `CHAR(10)` | Plan Category |
| `IsCommitment` |  | |  |  | `CHAR(1)` | Indicator: Is Commitment |
| `FinancialManagementArea` |  | |  |  | `CHAR(4)` | Financial Management Area |
| `SponsoredClass` |  | |  |  | `CHAR(20)` | Sponsored Class |
| `SponsoredProgram` |  | |  |  | `CHAR(20)` | Sponsored Program |
| `BudgetPeriod` |  | |  |  | `CHAR(10)` | Budget Period |
| `GranteeMgmtFundType` |  | |  |  | `CHAR(1)` | Fund Type for Grants Management |
| `FundType` |  | |  |  | `CHAR(6)` | Fund Type |
| `GranteeMgmtSponsor` |  | |  |  | `CHAR(10)` | Grant Sponsor |
| `PubSecBudgetAccount` |  | |  |  | `CHAR(10)` | Budget Account |
| `PubSecBudgetAccountCoCode` |  | |  |  | `CHAR(4)` | Budget Account Company Code |
| `PubSecBudgetCnsmpnDate` |  | |  |  | `DATS(8)` | Budget Consumption Date |
| `PubSecBudgetCnsmpnFsclPeriod` |  | |  |  | `NUMC(3)` | CC Fiscal Period for Budget Consumption Date |
| `PubSecBudgetCnsmpnFsclYear` |  | |  |  | `NUMC(4)` | CC Fiscal Year for Budget Consumption Date |
| `PubSecBudgetCnsmpnType` |  | |  |  | `CHAR(2)` | Budget Consumption Type |
| `PubSecBudgetCnsmpnTypeGroup` |  | |  |  | `CHAR(2)` | Budget Consumption Type Group |
| `PubSecBudgetCnsmpnAmtType` |  | |  |  | `CHAR(4)` | Budget Consumption Amount Type |
| `PubSecBudgetIsRelevant` |  | |  |  | `CHAR(1)` | Budget-Relevant Indicator |
| `BudgetProcess` |  | |  |  | `CHAR(4)` | Budget Process Type |
| `BudgetingType` |  | |  |  | `CHAR(8)` | Budget Type (Subcategory) |
| `BudgetDocWorkFlowStatus` |  | |  |  | `CHAR(1)` | Workflow Status for a Budget Document |
| `PubSecBdgtAcctRevnExpnCode` |  | |  |  | `CHAR(1)` | Expense or Revenue on Budget Account |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `PubSecExpnBdgtAmtInGlobalCrcy` |  | |  |  | `CURR(25)` | Budget Expense Amount in Global Currency |
| `PubSecExpnPaytAmtInGlobCrcy` |  | |  | `abs(Cube.PubSecExpnPaytAmtInGlobCrcy)` | `CURR(25)` |  |
| `PubSecBdgtNotPaidAmtInGlobCrcy` |  | |  | `cast(($projection.pubsecexpnbdgtamtinglobalcrcy - $projection.PubSecExpnPaytAmtInGlobCrcy) as psm_amt_bdgt_not_paid_grp_curr)` | `CURR(25)` | Budget Not Paid Amount in Global Currency |
| `PubSecInvcdTrnsfdAmtInGlobCrcy` |  | |  |  | `CURR(25)` | Invoiced/ Transferred Amount in Global Currency |
| `PubSecBdgtNotInvcTrnsfdAmtInGC` |  | |  | `cast($projection.PubSecBdgtNotPaidAmtInGlobCrcy as abap.decfloat34) - cast($projection.pubsecinvcdtrnsfdamtinglobcrcy as abap.decfloat34)` | `DECF(34)` |  |
| `PubSecExpnCmtmtAmtInGlobalCrcy` |  | |  |  | `CURR(25)` | Commitment Expense Amount in Global Currency |
| `PubSecBdgtNotCmtmtAmtInGC` |  | |  | `cast($projection.PubSecBdgtNotInvcTrnsfdAmtInGC as abap.decfloat34) - cast($projection.pubsecexpncmtmtamtinglobalcrcy as abap.decfloat34)` | `DECF(34)` |  |
| `PubSecExpnPreCmtmtAmtInGC` |  | |  |  | `CURR(25)` | Preencumbrance Expense Amount in Global Currency |
| `PubSecBdgtNotPreCmtmtAmtInGC` |  | |  | `cast( cast($projection.PubSecBdgtNotCmtmtAmtInGC as abap.decfloat34) - cast($projection.pubsecexpnprecmtmtamtingc as abap.decfloat34)as psm_amt_not_precmtmt_grp_curr)` | `CURR(25)` | Budget Not Pre-Encumbered Amount in Global Currency |
| `PubSecRevnBdgtAmtInGlobalCrcy` |  | |  |  | `CURR(25)` | Budget Revenue Amount in Global Currency |
| `PubSecRevnCollAmtInGlobCrcy` |  | |  |  | `DECF(34)` |  |
| `PubSecBdgtNotColltdAmtInGC` |  | |  | `cast( cast($projection.pubsecrevnbdgtamtinglobalcrcy as abap.decfloat34) - cast($projection.pubsecrevncollamtinglobcrcy as abap.decfloat34) as psm_amt_bdgt_not_coll_grp_curr)` | `CURR(25)` | Budget Not Collected Amount in Global Currency |
| `PubSecBlldTrnsfdAmtInGlobCrcy` |  | |  | `cast(PubSecBlldTrnsfdAmtInGlobCrcy as psm_amt_blld_trnsfd_grp_curr )` | `CURR(25)` | Billed/Transfer Amount in Global Currency |
| `PubSecBdgtNotBlldTrnsfdAmtInGC` |  | |  | `cast( cast($projection.PubSecBdgtNotColltdAmtInGC as abap.decfloat34) - cast($projection.PubSecBlldTrnsfdAmtInGlobCrcy as abap.decfloat34) as psm_amt_bdgt_not_blld_grp_curr)` | `CURR(25)` | Budget Not Billed/Transferred Amount in Global Currency |
| `PubSecFcstOfRevnAmtInGC` |  | |  |  | `CURR(25)` | Forecast of Revenue Amount in Global Currency |
| `PubSecBdgtNotFcstdAmtInGC` |  | |  | `cast(cast($projection.PubSecBdgtNotBlldTrnsfdAmtInGC as abap.decfloat34) - cast($projection.pubsecfcstofrevnamtingc as abap.decfloat34) as psm_amt_bdgt_not_for_grp_curr )` | `CURR(25)` | Budget Not Forecasted Amount in Global Currency |
| `BudgetDocument` |  | |  |  | `CHAR(10)` | Budget Document Number |
| `PurchaseOrder` |  | |  |  | `CHAR(10)` | Purchase Order Number |
| `PurchaseRequisition` |  | |  |  | `CHAR(10)` | Purchase Requisition Number |
| `EarmarkedFundsDocument` |  | |  |  | `CHAR(10)` | Document Number for Earmarked Funds |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `OriginCostCenter` |  | |  |  | `CHAR(10)` | Origin Cost Center |
| `PartnerBudgetPeriod` |  | |  |  | `CHAR(10)` | FM: Partner Budget Period |
| `PartnerFund` |  | |  |  | `CHAR(10)` | Partner Fund |
| `PartnerGrant` |  | |  |  | `CHAR(20)` | Partner Grant |
| `PartnerCostCenter` |  | |  |  | `CHAR(10)` | Partner Cost Center |
| `PartnerWBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `PartnerFunctionalArea` |  | |  |  | `CHAR(16)` | Partner Functional Area |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECBDGTPAYTITEMQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECBDGTPAYTITEMQRY')/$value)*

```abap
@AccessControl: {
    authorizationCheck: #NOT_ALLOWED,
    personalData: {
        blocking: #REQUIRED
    }
}

@VDM.viewType: #CONSUMPTION
@Metadata.ignorePropagatedAnnotations: true
@Analytics: {
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
     supportedCapabilities: [ #ANALYTICAL_QUERY ],
   modelingPattern: #ANALYTICAL_QUERY
}
@OData.publish: true
@EndUserText.label: 'Budget and Payment Line Items Query'

define transient view entity C_PubSecBdgtPaytItemQry
  provider contract analytical_query
  with parameters
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_LANGUAGE
    P_Language                : sylangu,
    @Consumption.hidden: true
    @Semantics.businessDate.at: true
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate                 : vdm_v_key_date,
    @Consumption.hidden: true
    @Environment.systemField: #USER
    P_BusinessUser            : syuname,
    @Consumption.defaultValue: '1'
    P_ClearingStatusSelection : fis_clearingstatusselection

  as projection on I_PubSecBdgtPaytItemCube ( P_ClearingStatusSelection: $parameters.P_ClearingStatusSelection ) as Cube


{
  @AnalyticsDetails.query.hidden : true
  @AnalyticsDetails.query.axis: #FREE
  Cube.Ledger,
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
  @AnalyticsDetails.query.axis: #ROWS
  @UI.textArrangement: #TEXT_LAST
  Cube.CompanyCode,
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 100
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #SHOW
  @UI.textArrangement: #TEXT_LAST
  Cube.Segment,
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 130
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #SHOW
  @UI.textArrangement: #TEXT_LAST
  Cube.Fund,
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 160
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #SHOW
  @UI.textArrangement: #TEXT_LAST
  Cube.GrantID,
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 120
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #SHOW
  @UI.textArrangement: #TEXT_LAST
  @EndUserText.label: 'Cash Origin Account'
  Cube.CashLedgerAccount,
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @Consumption.derivation: { lookupEntity: 'I_CalendarDate',
        resultElement: 'CalendarYear', binding: [
        { targetElement : 'CalendarDate' , type : #PARAMETER, value : 'P_KeyDate' } ]
       }
  @AnalyticsDetails.query.variableSequence: 40
  @AnalyticsDetails.query.axis: #FREE
  Cube.FiscalYear,
  @AnalyticsDetails.query.axis: #FREE
  Cube.FiscalPeriod,
  @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: false, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 60
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  Cube.PostingDate,
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 80
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @UI.textArrangement: #TEXT_LAST
  Cube.ProfitCenter,
  @Consumption.filter: {  selectionType: #HIERARCHY_NODE, multipleSelections: true, mandatory: false,
                   hierarchyBinding : [{type : #USER_INPUT, value : 'P_FundHierarchyName', variableSequence: 131} ] }
  @AnalyticsDetails.query.displayHierarchy: #FILTER
  @AnalyticsDetails.query.totals: #SHOW
  Cube.FundHierarchy,
  @Consumption.filter: {  selectionType: #HIERARCHY_NODE, multipleSelections: true, mandatory: false,
                       hierarchyBinding : [{type : #USER_INPUT, value : 'P_GrantHierarchyName', variableSequence: 161} ] }
  @EndUserText.label: 'Grant Hierarchy '
  @AnalyticsDetails.query.displayHierarchy: #FILTER
  @AnalyticsDetails.query.totals: #SHOW
  Cube.GrantHierarchyNode,
  @AnalyticsDetails.query.axis: #FREE
  Cube.BudgetAccountHierarchy,
  @AnalyticsDetails.query.axis: #FREE
  Cube.CostCenterHierarchy,
  @AnalyticsDetails.query.axis: #FREE
  Cube.ClearingDate,
  @AnalyticsDetails.query.axis: #FREE
  @UI.textArrangement: #TEXT_LAST
  Cube.GLAccount,
  @AnalyticsDetails.query.axis: #FREE
  Cube.CostCenter,
  @AnalyticsDetails.query.axis: #FREE
  Cube.BusinessTransactionType,
  @AnalyticsDetails.query.variableSequence: 150
  @AnalyticsDetails.query.axis: #FREE
  @UI.textArrangement: #TEXT_LAST
  Cube.WBSElementExternalID,
  @AnalyticsDetails.query.axis: #FREE
  Cube.FunctionalArea,
  @AnalyticsDetails.query.axis: #FREE
  Cube.FunctionalAreaHierarchy,
  @Consumption.hidden: true
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: false, mandatory: true }
  @AnalyticsDetails.query.variableSequence: 50
  Cube.PlanningCategory,
  @AnalyticsDetails.query.axis: #FREE
  Cube.IsCommitment,
  @AnalyticsDetails.query.axis: #FREE
  Cube.FinancialManagementArea,
  @AnalyticsDetails.query.axis: #FREE
  Cube.SponsoredClass,
  @AnalyticsDetails.query.axis: #FREE
  Cube.SponsoredProgram,
  @AnalyticsDetails.query.axis: #FREE
  Cube.BudgetPeriod,
  @AnalyticsDetails.query.axis: #FREE
  Cube.GranteeMgmtFundType,
  @AnalyticsDetails.query.axis: #FREE
  Cube.FundType,
  @AnalyticsDetails.query.axis: #FREE
  Cube.GranteeMgmtSponsor,
  //
  //  // Budgeting PSM fields
  @AnalyticsDetails.query.axis: #FREE
  Cube.PubSecBudgetAccount,
  @AnalyticsDetails.query.axis: #FREE
  Cube.PubSecBudgetAccountCoCode,
  @AnalyticsDetails.query.axis: #FREE
  Cube.PubSecBudgetCnsmpnDate,
  @AnalyticsDetails.query.axis: #FREE
  Cube.PubSecBudgetCnsmpnFsclPeriod,
  @AnalyticsDetails.query.axis: #FREE
  Cube.PubSecBudgetCnsmpnFsclYear,
  @AnalyticsDetails.query.axis: #FREE
  Cube.PubSecBudgetCnsmpnType,
  @AnalyticsDetails.query.axis: #FREE
  Cube.PubSecBudgetCnsmpnTypeGroup,
  @AnalyticsDetails.query.axis: #FREE
  Cube.PubSecBudgetCnsmpnAmtType,
  @AnalyticsDetails.query.axis: #FREE
  Cube.PubSecBudgetIsRelevant,
  @AnalyticsDetails.query.axis: #FREE
  Cube.BudgetProcess,
  @AnalyticsDetails.query.axis: #FREE
  Cube.BudgetingType,
  @AnalyticsDetails.query.axis: #FREE
  Cube.BudgetDocWorkFlowStatus,
  @AnalyticsDetails.query.axis: #FREE
  Cube.PubSecBdgtAcctRevnExpnCode,



  ///////////////////////////////////////////////////////////////////////
  // Measures - Amounts
  ///////////////////////////////////////////////////////////////////////


  @AnalyticsDetails.query.axis: #FREE
  Cube.GlobalCurrency,

  // Expense amounts
  @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
  @Aggregation.default: #SUM
  @AnalyticsDetails.query.axis: #COLUMNS
  @EndUserText.label: 'Expense Budget'
  Cube.PubSecExpnBdgtAmtInGlobalCrcy,
  @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #FORMULA
  @EndUserText.label: 'Payments'
  abs(Cube.PubSecExpnPaytAmtInGlobCrcy)                                                                                                                                          as PubSecExpnPaytAmtInGlobCrcy,
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default : #FORMULA
  @EndUserText.label: 'Budget Not Paid'
  cast(($projection.pubsecexpnbdgtamtinglobalcrcy - $projection.PubSecExpnPaytAmtInGlobCrcy) as psm_amt_bdgt_not_paid_grp_curr)                                                  as PubSecBdgtNotPaidAmtInGlobCrcy,
  @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
  @AnalyticsDetails.query.axis: #COLUMNS
  @EndUserText.label: 'Invoiced/Transfers'
  Cube.PubSecInvcdTrnsfdAmtInGlobCrcy,
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default : #FORMULA
  @EndUserText.label: 'Budget Not Invoiced/Transferred'
  cast($projection.PubSecBdgtNotPaidAmtInGlobCrcy as abap.decfloat34) - cast($projection.pubsecinvcdtrnsfdamtinglobcrcy as abap.decfloat34)                                      as PubSecBdgtNotInvcTrnsfdAmtInGC,
  @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
  @Aggregation.default: #SUM
  @EndUserText.label: 'Encumbrances'
  Cube.PubSecExpnCmtmtAmtInGlobalCrcy,
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default : #FORMULA
  @EndUserText.label: 'Budget Not Encumbered'
  cast($projection.PubSecBdgtNotInvcTrnsfdAmtInGC as abap.decfloat34) - cast($projection.pubsecexpncmtmtamtinglobalcrcy as abap.decfloat34)                                      as PubSecBdgtNotCmtmtAmtInGC,
  @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
  @Aggregation.default: #SUM
  @EndUserText.label: 'Pre-Encumbrance'
  Cube.PubSecExpnPreCmtmtAmtInGC,
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default : #FORMULA
  @EndUserText.label: 'Budget Not Pre-Encumbered'
  cast( cast($projection.PubSecBdgtNotCmtmtAmtInGC as abap.decfloat34) - cast($projection.pubsecexpnprecmtmtamtingc as abap.decfloat34)as psm_amt_not_precmtmt_grp_curr)         as PubSecBdgtNotPreCmtmtAmtInGC,

  // Revenue Amounts
  @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
  @Aggregation.default: #SUM
  @AnalyticsDetails.query.hidden: true
  @EndUserText.label: 'Revenue Budget'
  Cube.PubSecRevnBdgtAmtInGlobalCrcy,
  @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
  @Aggregation.default: #FORMULA
  @AnalyticsDetails.query.hidden: true
  @EndUserText.label: 'Collection'
  Cube.PubSecRevnCollAmtInGlobCrcy,
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @Aggregation.default : #FORMULA
  @AnalyticsDetails.query.hidden: true
  @EndUserText.label: 'Budget Not Collected'
  cast( cast($projection.pubsecrevnbdgtamtinglobalcrcy as abap.decfloat34) - cast($projection.pubsecrevncollamtinglobcrcy as abap.decfloat34) as psm_amt_bdgt_not_coll_grp_curr) as PubSecBdgtNotColltdAmtInGC,
  @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
  @Aggregation.default : #FORMULA
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.hidden: true
  @EndUserText.label: 'Billed/Transferred'
  cast(PubSecBlldTrnsfdAmtInGlobCrcy as psm_amt_blld_trnsfd_grp_curr )                                                                                                           as PubSecBlldTrnsfdAmtInGlobCrcy,
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @Aggregation.default : #FORMULA
  @AnalyticsDetails.query.hidden: true
  @EndUserText.label: 'Budget Not Billed/Transferred'
  cast( cast($projection.PubSecBdgtNotColltdAmtInGC as abap.decfloat34) - cast($projection.PubSecBlldTrnsfdAmtInGlobCrcy as abap.decfloat34) as psm_amt_bdgt_not_blld_grp_curr)  as PubSecBdgtNotBlldTrnsfdAmtInGC,
  @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
  @Aggregation.default: #SUM
  @AnalyticsDetails.query.hidden: true
  @EndUserText.label: 'Forecast of Revenue'
  Cube.PubSecFcstOfRevnAmtInGC,
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @Aggregation.default : #FORMULA
  @AnalyticsDetails.query.hidden: true
  @EndUserText.label: 'Budget Not Forecasted'
  cast(cast($projection.PubSecBdgtNotBlldTrnsfdAmtInGC as abap.decfloat34) - cast($projection.pubsecfcstofrevnamtingc as abap.decfloat34) as psm_amt_bdgt_not_for_grp_curr )     as PubSecBdgtNotFcstdAmtInGC,




  @AnalyticsDetails.query.axis: #FREE
  Cube.BudgetDocument,
  @AnalyticsDetails.query.axis: #FREE
  Cube.PurchaseOrder,
  @AnalyticsDetails.query.axis: #FREE
  Cube.PurchaseRequisition,
  @AnalyticsDetails.query.axis: #FREE
  Cube.EarmarkedFundsDocument,
  @AnalyticsDetails.query.axis: #FREE
  Cube.AccountingDocument,

  @AnalyticsDetails.query.axis: #FREE
  Cube.OriginCostCenter,
  @AnalyticsDetails.query.axis: #FREE
  Cube.PartnerBudgetPeriod,
  @AnalyticsDetails.query.axis: #FREE
  Cube.PartnerFund,
  @AnalyticsDetails.query.axis: #FREE
  Cube.PartnerGrant,
  @AnalyticsDetails.query.axis: #FREE
  Cube.PartnerCostCenter,
  @AnalyticsDetails.query.axis: #FREE
  Cube.PartnerWBSElementExternalID,
  @AnalyticsDetails.query.axis: #FREE
  Cube.PartnerFunctionalArea

}
```
