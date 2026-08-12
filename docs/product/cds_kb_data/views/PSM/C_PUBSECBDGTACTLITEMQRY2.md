---
name: C_PUBSECBDGTACTLITEMQRY2
description: "Budget and Commitment/Actual Items Query"
app_component: PSM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECBDGTACTLITEMQRY2')/$value
semantic_en: "Budget and Commitment/Actual Items Query"
semantic_vi: "Budget and Commitment/Actual Items Query — CDS view tiêu dùng dựa trên I_PubSecBdgtActlItemCube."
keywords:
  - "budget"
  - "and"
  - "commitment/actual"
  - "items"
  - "query"
  - "ledger"
  - "company"
  - "code"
  - "account"
  - "fund"
  - "hierarchy"
tags:
  - PSM
  - budget
  - component:PSM
  - consumption-view
---
# C_PUBSECBDGTACTLITEMQRY2

**Budget and Commitment/Actual Items Query**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECBDGTACTLITEMQRY2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `Fund` |  | |  |  | `CHAR(10)` | Fund |
| `FundHierarchy` |  | |  |  | `CHAR(42)` | Fund Hierarchy |
| `FunctionalAreaHierarchy` |  | |  |  | `CHAR(42)` | Functional Area Hierarchy |
| `BudgetAccountHierarchy` |  | |  |  | `CHAR(42)` | Budget Account Hierarchy |
| `CostCenterHierarchy` |  | |  | `{ selectionType : #HIERARCHY_NODE, multipleSelections : true,mandatory: false, hierarchyBinding : [{ type : #CONSTANT,value: 'A000' }, { type : #USER_INPUT, value:'P_CostCenterHierarchyName', variableSequence: 141 } ] } @AnalyticsDetails.query.displayHierarchy: #FILTER CostCenterHierarchy` | `CHAR(42)` | Cost Center Hierarchy |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `FinancialTransactionType` |  | |  |  | `CHAR(3)` | Financial Transaction Type |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `IsCommitment` |  | |  |  | `CHAR(1)` | Indicator: Is Commitment |
| `PlanningCategory` |  | |  |  | `CHAR(10)` | Plan Category |
| `ActualPlanCode` |  | |  |  | `CHAR(1)` | Actual Plan Code |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `AmountInTransactionCurrency` |  | |  |  | `CURR(23)` | Amount in Transaction Currency |
| `AmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `PubSecExpnBdgtAmtInGlobalCrcy` |  | |  |  | `CURR(25)` | Budget Expense Amount in Global Currency |
| `PubSecExpnCmtmtAmtInGlobalCrcy` |  | |  |  | `CURR(25)` | Commitment Expense Amount in Global Currency |
| `PubSecExpnActlAmtInGlobalCrcy` |  | |  |  | `CURR(25)` | Actual Expense Amount in Global Currency |
| `PubSecDiffExpnAmtInGlobalCrcy` |  | |  | `cast( 1 as psm_amt_expn_diff_grp_curr )` | `CURR(25)` | Expense Amount Difference in Global Currency |
| `PubSecRevnBdgtAmtInGlobalCrcy` |  | |  |  | `CURR(25)` | Budget Revenue Amount in Global Currency |
| `PubSecRevnCmtmtAmtInGlobalCrcy` |  | |  |  | `CURR(25)` | Commitment Revenue Amount in Global Currency |
| `PubSecRevnActlAmtInGlobalCrcy` |  | |  |  | `CURR(25)` | Actual Revenue Amount in Global Currency |
| `PubSecDiffRevnAmtInGlobalCrcy` |  | |  | `cast( 1 as psm_amt_revn_diff_grp_curr )` | `CURR(25)` | Revenue Amount Difference in Global Currency |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | WBS Element External ID |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `BudgetPeriod` |  | |  |  | `CHAR(10)` | Budget Period |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `GrantHierarchyNode` |  | |  |  | `CHAR(50)` | Grant Hierarchy Node |
| `GranteeMgmtSponsor` |  | |  |  | `CHAR(10)` | Grant Sponsor |
| `SponsoredClass` |  | |  |  | `CHAR(20)` | Sponsored Class |
| `SponsoredProgram` |  | |  |  | `CHAR(20)` | Sponsored Program |
| `GteeMBudgetValidityNumber` |  | |  |  | `CHAR(3)` | Budget Validity Number |
| `CtrlObjForFund` |  | |  |  | `CHAR(50)` | Control Object for a Fund |
| `CtrlObjForFunctionalArea` |  | |  |  | `CHAR(50)` | Control Object for a Functional Area |
| `CtrlObjForBudgetPeriod` |  | |  |  | `CHAR(50)` | Control Object for a Budget Period |
| `CtrlObjForCostCenter` |  | |  |  | `CHAR(50)` | Control Object for a Cost Center |
| `CtrlObjForWBSElement` |  | |  |  | `CHAR(50)` | Control Object for a WBS Element |
| `CtrlObjForBudgetAccount` |  | |  |  | `CHAR(50)` | Control Object for a Budget Account |
| `CtrlObjForGrant` |  | |  |  | `CHAR(50)` | Control Object for a Grant |
| `CtrlObjForSponsoredClass` |  | |  |  | `CHAR(50)` | Control Object for a Sponsored Class |
| `CtrlObjForSponsoredProgram` |  | |  |  | `CHAR(50)` | Control Object for a Sponsored Program |
| `CashLedgerAccount` |  | |  |  | `CHAR(10)` | Cash Origin Account |
| `PubSecBudgetAccount` |  | |  |  | `CHAR(10)` | Budget Account |
| `PubSecBudgetCnsmpnDate` |  | |  |  | `DATS(8)` | Budget Consumption Date |
| `PubSecBudgetCnsmpnFsclPeriod` |  | |  |  | `NUMC(3)` | CC Fiscal Period for Budget Consumption Date |
| `PubSecBudgetCnsmpnFsclYear` |  | |  |  | `NUMC(4)` | CC Fiscal Year for Budget Consumption Date |
| `PubSecBudgetCnsmpnType` |  | |  |  | `CHAR(2)` | Budget Consumption Type |
| `PubSecBudgetCnsmpnTypeGroup` |  | |  |  | `CHAR(2)` | Budget Consumption Type Group |
| `PubSecBudgetCnsmpnAmtType` |  | |  |  | `CHAR(4)` | Budget Consumption Amount Type |
| `PubSecBudgetIsRelevant` |  | |  |  | `CHAR(1)` | Budget-Relevant Indicator |
| `PubSecIsConsumableBudget` |  | |  |  | `CHAR(1)` | Include Consumable Budget (AVC) |
| `PubSecBdgtAcctRevnExpnCode` |  | |  |  | `CHAR(1)` | Expense or Revenue on Budget Account |
| `FundType` |  | |  |  | `CHAR(6)` | Fund Type |
| `GranteeMgmtFundType` |  | |  |  | `CHAR(1)` | Fund Type for Grants Management |
| `BudgetingType` |  | |  |  | `CHAR(8)` | Budget Type (Subcategory) |
| `BudgetProcess` |  | |  |  | `CHAR(4)` | Budget Process Type |
| `BudgetDocWorkFlowStatus` |  | |  |  | `CHAR(1)` | Workflow Status for a Budget Document |
| `AvailabilityControlProfile` |  | |  |  | `CHAR(6)` | Budget Availability Control Profile for Public Sector Mgmt |
| `BudgetDocument` |  | |  |  | `CHAR(10)` | Budget Document Number |
| `PurchaseOrder` |  | |  |  | `CHAR(10)` | Purchase Order Number |
| `PurchaseRequisition` |  | |  |  | `CHAR(10)` | Purchase Requisition Number |
| `EarmarkedFundsDocument` |  | |  |  | `CHAR(10)` | Document Number for Earmarked Funds |
| `OriginCostCenter` |  | |  |  | `CHAR(10)` | Origin Cost Center |
| `PartnerFund` |  | |  |  | `CHAR(10)` | Partner Fund |
| `PartnerBudgetPeriod` |  | |  |  | `CHAR(10)` | FM: Partner Budget Period |
| `PartnerCostCenter` |  | |  |  | `CHAR(10)` | Partner Cost Center |
| `PartnerFunctionalArea` |  | |  |  | `CHAR(16)` | Partner Functional Area |
| `PartnerGrant` |  | |  |  | `CHAR(20)` | Partner Grant |
| `PartnerWBSElementExternalID` |  | |  |  | `CHAR(24)` | Partner WBS Element External ID |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECBDGTACTLITEMQRY2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECBDGTACTLITEMQRY2')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CPSMS4CBDACTAQ2'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Budget and Commitment/Actual Items Query'

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

define view C_PubSecBdgtActlItemQry2
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

  as select from I_PubSecBdgtActlItemCube as Cube
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
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  Cube.CompanyCode,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  Cube.GLAccount,

  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 100
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  Cube.Fund,

  @Consumption.filter: {  selectionType: #HIERARCHY_NODE, multipleSelections: true, mandatory: false,
                    hierarchyBinding : [{type : #USER_INPUT, value : 'P_FundHierarchyName', variableSequence: 101} ] }
  // @EndUserText.label: 'Fund Hierarchy Node'
  @AnalyticsDetails.query.displayHierarchy: #FILTER
  // @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #SHOW
  Cube.FundHierarchy,

  @Consumption.filter: {  selectionType: #HIERARCHY_NODE, multipleSelections: true, mandatory: false,
                      hierarchyBinding : [{type : #USER_INPUT, value : 'P_FuncAreaHierarchyName', variableSequence: 131} ] }
  @EndUserText.label: 'Functional Area Hierarchy'
  @AnalyticsDetails.query.displayHierarchy: #FILTER
  //@AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #SHOW
  Cube.FunctionalAreaHierarchy,
  @Consumption.filter: {  selectionType: #HIERARCHY_NODE, multipleSelections: true, mandatory: false,
                      hierarchyBinding : [{type : #USER_INPUT, value : 'P_BudActHierarchyName', variableSequence: 121} ] }

  @AnalyticsDetails.query.displayHierarchy: #FILTER
  // @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #SHOW
  Cube.BudgetAccountHierarchy,

  @Consumption.filter :
  { selectionType : #HIERARCHY_NODE, multipleSelections : true,mandatory: false,
   hierarchyBinding :
   [{ type : #CONSTANT,value: 'A000' },
   { type : #USER_INPUT, value:'P_CostCenterHierarchyName', variableSequence: 141 }


   ] }
  @AnalyticsDetails.query.displayHierarchy: #FILTER
  CostCenterHierarchy,

  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @Consumption.derivation: { lookupEntity: 'I_CalendarDate',
        resultElement: 'CalendarYear', binding: [
        { targetElement : 'CalendarDate' , type : #PARAMETER, value : 'P_KeyDate' } ]
       }
  @AnalyticsDetails.query.variableSequence: 40
  @AnalyticsDetails.query.axis: #FREE
  Cube.FiscalYear,

  @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: false, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 60
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  Cube.PostingDate,

  @AnalyticsDetails.query.axis: #FREE
  Cube.FinancialTransactionType,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  Cube.Segment,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  Cube.ProfitCenter,

  @AnalyticsDetails.query.axis: #FREE
  Cube.AccountingDocument,

  // PSM: Additional detail
  @AnalyticsDetails.query.axis: #FREE
  Cube.IsCommitment,
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: false, mandatory: true }
  @Consumption.hidden: true
  @AnalyticsDetails.query.variableSequence: 70
  Cube.PlanningCategory,
  @AnalyticsDetails.query.axis: #FREE
  Cube.ActualPlanCode,

  ///////////////////////////////////////////////////////////////////////
  // Measures - Amounts
  ///////////////////////////////////////////////////////////////////////
  @Semantics.currencyCode: true
  @AnalyticsDetails.query.axis: #FREE
  Cube.CompanyCodeCurrency,
  @Semantics.currencyCode: true
  @AnalyticsDetails.query.axis: #FREE
  Cube.TransactionCurrency,
  @Semantics.currencyCode: true
  @AnalyticsDetails.query.axis: #FREE
  Cube.GlobalCurrency,

  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @AnalyticsDetails.query.hidden : true
  @DefaultAggregation: #SUM
  Cube.AmountInCompanyCodeCurrency,
  @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
  @AnalyticsDetails.query.hidden : true
  @DefaultAggregation: #SUM
  Cube.AmountInTransactionCurrency,
  @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
  @AnalyticsDetails.query.hidden : true
  @DefaultAggregation: #SUM
  Cube.AmountInGlobalCurrency,

  // Amounts in Global Currency
  @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  Cube.PubSecExpnBdgtAmtInGlobalCrcy,
  @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  Cube.PubSecExpnCmtmtAmtInGlobalCrcy,
  @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  Cube.PubSecExpnActlAmtInGlobalCrcy,
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation : #FORMULA
  @AnalyticsDetails.query.formula : '$projection.PubSecExpnBdgtAmtInGlobalCrcy - $projection.PubSecExpnActlAmtInGlobalCrcy - $projection.PubSecExpnCmtmtAmtInGlobalCrcy'
  cast( 1 as psm_amt_expn_diff_grp_curr ) as PubSecDiffExpnAmtInGlobalCrcy,

  @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
  @AnalyticsDetails.query.hidden : true
  @DefaultAggregation: #SUM
  Cube.PubSecRevnBdgtAmtInGlobalCrcy,
  @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
  @AnalyticsDetails.query.hidden : true
  @DefaultAggregation: #SUM
  Cube.PubSecRevnCmtmtAmtInGlobalCrcy,
  @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
  @AnalyticsDetails.query.hidden : true
  @DefaultAggregation: #SUM
  Cube.PubSecRevnActlAmtInGlobalCrcy,
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @AnalyticsDetails.query.hidden : true
  @DefaultAggregation : #FORMULA
  @AnalyticsDetails.query.formula : '$projection.PubSecRevnBdgtAmtInGlobalCrcy - $projection.PubSecRevnActlAmtInGlobalCrcy - $projection.PubSecRevnCmtmtAmtInGlobalCrcy'
  cast( 1 as psm_amt_revn_diff_grp_curr ) as PubSecDiffRevnAmtInGlobalCrcy,

  ///////////////////////////////////////////////////////////////////////
  // Dimensions
  ///////////////////////////////////////////////////////////////////////

  @AnalyticsDetails.query.axis: #FREE
  Cube.AccountingDocumentType,

  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 140
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  Cube.CostCenter,
  _CostCenter[1:ValidityEndDate   >= $parameters.P_KeyDate and
                ValidityStartDate <= $parameters.P_KeyDate]._Text[1:Language = $parameters.P_Language].CostCenterName,
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 150
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  Cube.WBSElementExternalID,
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 130
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  Cube.FunctionalArea,
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 110
  @AnalyticsDetails.query.axis: #FREE
  Cube.BudgetPeriod,
  @AnalyticsDetails.query.axis: #FREE
  Cube.BusinessTransactionType,
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 160
  @AnalyticsDetails.query.axis: #FREE
  Cube.GrantID,
  @Consumption.filter: {  selectionType: #HIERARCHY_NODE, multipleSelections: true, mandatory: false,
                        hierarchyBinding : [{type : #USER_INPUT, value : 'P_GrantHierarchyName', variableSequence: 161} ] }
  @EndUserText.label: 'Grant Hierarchy '
  @AnalyticsDetails.query.displayHierarchy: #FILTER
  //@AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #SHOW
  Cube.GrantHierarchyNode,
  @AnalyticsDetails.query.axis: #FREE
  Cube.GranteeMgmtSponsor,
  @AnalyticsDetails.query.axis: #FREE
  Cube.SponsoredClass,
  @AnalyticsDetails.query.axis: #FREE
  Cube.SponsoredProgram,
  @AnalyticsDetails.query.axis: #FREE
  Cube.GteeMBudgetValidityNumber,

  // Control Objects
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #TEXT
  Cube.CtrlObjForFund,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #TEXT
  Cube.CtrlObjForFunctionalArea,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #TEXT
  Cube.CtrlObjForBudgetPeriod,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #TEXT
  Cube.CtrlObjForCostCenter,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #TEXT
  Cube.CtrlObjForWBSElement,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #TEXT
  Cube.CtrlObjForBudgetAccount,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #TEXT
  Cube.CtrlObjForGrant,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #TEXT
  Cube.CtrlObjForSponsoredClass,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #TEXT
  Cube.CtrlObjForSponsoredProgram,

  // New Cash Ledger Fields
  @AnalyticsDetails.query.axis: #FREE
  Cube.CashLedgerAccount,
  // New Public Sector fields
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 120
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  Cube.PubSecBudgetAccount,
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
  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: false }       
  @AnalyticsDetails.query.variableSequence: 181
  Cube.PubSecIsConsumableBudget,
  @AnalyticsDetails.query.axis: #FREE
  Cube.PubSecBdgtAcctRevnExpnCode,
  @AnalyticsDetails.query.axis: #FREE
  Cube.FundType,
  @AnalyticsDetails.query.axis: #FREE
  Cube.GranteeMgmtFundType,
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 180
  @AnalyticsDetails.query.axis: #FREE
  Cube.BudgetingType,
  @AnalyticsDetails.query.axis: #FREE
  Cube.BudgetProcess,
  @AnalyticsDetails.query.axis: #FREE
  Cube.BudgetDocWorkFlowStatus,
  @AnalyticsDetails.query.axis: #FREE
  Cube.AvailabilityControlProfile,

  @AnalyticsDetails.query.axis: #FREE
  Cube.BudgetDocument,
  @AnalyticsDetails.query.axis: #FREE
  Cube.PurchaseOrder,
  @AnalyticsDetails.query.axis: #FREE
  Cube.PurchaseRequisition,
  @AnalyticsDetails.query.axis: #FREE
  Cube.EarmarkedFundsDocument,

  @AnalyticsDetails.query.axis: #FREE
  Cube.OriginCostCenter,
  @AnalyticsDetails.query.axis: #FREE
  Cube.PartnerFund,
  @AnalyticsDetails.query.axis: #FREE
  Cube.PartnerBudgetPeriod,
  @AnalyticsDetails.query.axis: #FREE
  Cube.PartnerCostCenter,
  @AnalyticsDetails.query.axis: #FREE
  Cube.PartnerFunctionalArea,
  @AnalyticsDetails.query.axis: #FREE
  Cube.PartnerGrant,
  @AnalyticsDetails.query.axis: #FREE
  Cube.PartnerWBSElementExternalID

}
```
