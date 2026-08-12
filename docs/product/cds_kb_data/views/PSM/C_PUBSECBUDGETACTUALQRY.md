---
name: C_PUBSECBUDGETACTUALQRY
description: "Budget Commitment and Actual Items Query"
app_component: PSM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECBUDGETACTUALQRY')/$value
semantic_en: "Budget Commitment and Actual Items Query"
semantic_vi: "Budget Commitment and Actual Items Query — CDS view tiêu dùng dựa trên Budget Commitment and Actual Items Query."
keywords:
  - "budget"
  - "commitment"
  - "and"
  - "actual"
  - "items"
  - "query"
  - "source"
  - "ledger"
  - "company"
  - "code"
  - "fiscal"
  - "year"
  - "accounting"
  - "document"
tags:
  - PSM
  - budget
  - component:PSM
  - consumption-view
---
# C_PUBSECBUDGETACTUALQRY

**Budget Commitment and Actual Items Query**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECBUDGETACTUALQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SourceLedger` |  | |  |  | `CHAR(2)` | Source Ledger |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `FinancialPlanningReqTransSqnc` |  | |  |  | `NUMC(23)` | Financial Planning Request Transaction Sequence Number |
| `FinancialPlanningDataPacket` |  | |  |  | `NUMC(6)` | Financial Planning Data Packet Number |
| `ActualPlanJournalEntryItem` |  | |  |  | `CHAR(12)` | Actual Plan Journal Entry Item |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `ActualPlanCode` |  | |  |  | `CHAR(1)` | Actual Plan Code |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `localized` |  | |  | `_CostCenter._Text.CostCenterName as CostCenterName : localized` |  |  |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | WBS Element External ID |
| `PartnerWBSElementExternalID` |  | |  |  | `CHAR(24)` | Partner WBS Element External ID |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `PartnerCostCenter` |  | |  |  | `CHAR(10)` | Partner Cost Center |
| `PartnerFunctionalArea` |  | |  |  | `CHAR(16)` | Partner Functional Area |
| `OriginCostCenter` |  | |  |  | `CHAR(10)` | Origin Cost Center |
| `CostCenterHierarchy` |  | |  | `{ selectionType : #HIERARCHY_NODE, multipleSelections : true,mandatory: false, hierarchyBinding : [{ type : #CONSTANT,value: 'A000' }, { type : #USER_INPUT, value:'P_CostCenterHierarchyName', variableSequence: 141 } ] } @AnalyticsDetails.query.displayHierarchy: #FILTER CostCenterHierarchy` | `CHAR(42)` | Cost Center Hierarchy |
| `FundHierarchy` |  | |  |  | `CHAR(42)` | Fund Hierarchy |
| `GrantHierarchy` |  | |  | `GrantHierarchyNode` | `CHAR(50)` | Grant Hierarchy Node |
| `FunctionalAreaHierarchy` |  | |  |  | `CHAR(42)` | Functional Area Hierarchy |
| `BudgetAccountHierarchy` |  | |  |  | `CHAR(42)` | Budget Account Hierarchy |
| `CtrlObjForFund` |  | |  |  | `CHAR(50)` | Control Object for a Fund |
| `CtrlObjForFunctionalArea` |  | |  |  | `CHAR(50)` | Control Object for a Functional Area |
| `CtrlObjForBudgetPeriod` |  | |  |  | `CHAR(50)` | Control Object for a Budget Period |
| `CtrlObjForCostCenter` |  | |  |  | `CHAR(50)` | Control Object for a Cost Center |
| `CtrlObjForWBSElement` |  | |  |  | `CHAR(50)` | Control Object for a WBS Element |
| `CtrlObjForBudgetAccount` |  | |  |  | `CHAR(50)` | Control Object for a Budget Account |
| `CtrlObjForGrant` |  | |  |  | `CHAR(50)` | Control Object for a Grant |
| `CtrlObjForSponsoredClass` |  | |  |  | `CHAR(50)` | Control Object for a Sponsored Class |
| `CtrlObjForSponsoredProgram` |  | |  |  | `CHAR(50)` | Control Object for a Sponsored Program |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `FinancialTransactionType` |  | |  |  | `CHAR(3)` | Financial Transaction Type |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `PlanningCategory` |  | |  |  | `CHAR(10)` | Plan Category |
| `IsCommitment` |  | |  |  | `CHAR(1)` | Indicator: Is Commitment |
| `Fund` |  | |  |  | `CHAR(10)` | Fund |
| `PartnerFund` |  | |  |  | `CHAR(10)` | Partner Fund |
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `GranteeMgmtSponsor` |  | |  |  | `CHAR(10)` | Grant Sponsor |
| `SponsoredClass` |  | |  |  | `CHAR(20)` | Sponsored Class |
| `SponsoredProgram` |  | |  |  | `CHAR(20)` | Sponsored Program |
| `GteeMBudgetValidityNumber` |  | |  |  | `CHAR(3)` | Budget Validity Number |
| `PartnerGrant` |  | |  |  | `CHAR(20)` | Partner Grant |
| `BudgetPeriod` |  | |  |  | `CHAR(10)` | Budget Period |
| `PartnerBudgetPeriod` |  | |  |  | `CHAR(10)` | FM: Partner Budget Period |
| `CashLedgerAccount` |  | |  |  | `CHAR(10)` | Cash Origin Account |
| `PubSecBudgetAccount` |  | |  |  | `CHAR(10)` | Budget Account |
| `PubSecBudgetCnsmpnDate` |  | |  |  | `DATS(8)` | Budget Consumption Date |
| `PubSecBudgetCnsmpnFsclPeriod` |  | |  |  | `NUMC(3)` | CC Fiscal Period for Budget Consumption Date |
| `PubSecBudgetCnsmpnFsclYear` |  | |  |  | `NUMC(4)` | CC Fiscal Year for Budget Consumption Date |
| `PubSecBudgetCnsmpnType` |  | |  |  | `CHAR(2)` | Budget Consumption Type |
| `PubSecBudgetCnsmpnTypeGroup` |  | |  |  | `CHAR(2)` | Budget Consumption Type Group |
| `PubSecBudgetCnsmpnAmtType` |  | |  |  | `CHAR(4)` | Budget Consumption Amount Type |
| `PubSecBudgetIsRelevant` |  | |  |  | `CHAR(1)` | Budget-Relevant Indicator |
| `PubSecBdgtAcctRevnExpnCode` |  | |  |  | `CHAR(1)` | Expense or Revenue on Budget Account |
| `FundType` |  | |  |  | `CHAR(6)` | Fund Type |
| `GranteeMgmtFundType` |  | |  |  | `CHAR(1)` | Fund Type for Grants Management |
| `BudgetProcess` |  | |  |  | `CHAR(4)` | Budget Process Type |
| `BudgetingType` |  | |  |  | `CHAR(8)` | Budget Type (Subcategory) |
| `BudgetDocWorkFlowStatus` |  | |  |  | `CHAR(1)` | Workflow Status for a Budget Document |
| `AvailabilityControlProfile` |  | |  |  | `CHAR(6)` | Budget Availability Control Profile for Public Sector Mgmt |
| `BudgetDocument` |  | |  |  | `CHAR(10)` | Budget Document Number |
| `PurchaseOrder` |  | |  |  | `CHAR(10)` | Purchase Order Number |
| `PurchaseRequisition` |  | |  |  | `CHAR(10)` | Purchase Requisition Number |
| `EarmarkedFundsDocument` |  | |  |  | `CHAR(10)` | Document Number for Earmarked Funds |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `AmountInTransactionCurrency` |  | |  | `curr_to_decfloat_amount(AmountInTransactionCurrency)` | `DECF(34)` |  |
| `AmountInCompanyCodeCurrency` |  | |  | `curr_to_decfloat_amount(AmountInCompanyCodeCurrency)` | `DECF(34)` |  |
| `AmountInGlobalCurrency` |  | |  | `curr_to_decfloat_amount(AmountInGlobalCurrency)` | `DECF(34)` |  |
| `PubSecExpnBdgtAmtInCoCodeCrcy` |  | |  | `curr_to_decfloat_amount( PubSecExpnBdgtAmtInCoCodeCrcy )` | `DECF(34)` |  |
| `PubSecExpnCmtmtAmtInCoCodeCrcy` |  | |  | `curr_to_decfloat_amount( PubSecExpnCmtmtAmtInCoCodeCrcy )` | `DECF(34)` |  |
| `PubSecExpnActlAmtInCoCodeCrcy` |  | |  | `curr_to_decfloat_amount( PubSecExpnActlAmtInCoCodeCrcy )` | `DECF(34)` |  |
| `PubSecRevnBdgtAmtInCoCodeCrcy` |  | |  | `curr_to_decfloat_amount( PubSecRevnBdgtAmtInCoCodeCrcy )` | `DECF(34)` |  |
| `PubSecRevnCmtmtAmtInCoCodeCrcy` |  | |  | `curr_to_decfloat_amount( PubSecRevnCmtmtAmtInCoCodeCrcy )` | `DECF(34)` |  |
| `PubSecRevnActlAmtInCoCodeCrcy` |  | |  | `curr_to_decfloat_amount( PubSecRevnActlAmtInCoCodeCrcy )` | `DECF(34)` |  |
| `PubSecExpnBdgtAmtInGlobalCrcy` |  | |  | `curr_to_decfloat_amount( PubSecExpnBdgtAmtInGlobalCrcy )` | `DECF(34)` |  |
| `PubSecExpnCmtmtAmtInGlobalCrcy` |  | |  | `curr_to_decfloat_amount( PubSecExpnCmtmtAmtInGlobalCrcy )` | `DECF(34)` |  |
| `PubSecExpnActlAmtInGlobalCrcy` |  | |  | `curr_to_decfloat_amount( PubSecExpnActlAmtInGlobalCrcy )` | `DECF(34)` |  |
| `PubSecDiffExpnAmtInGlobalCrcy` |  | |  | `$projection.PubSecExpnBdgtAmtInGlobalCrcy - $projection.PubSecExpnActlAmtInGlobalCrcy - $projection.PubSecExpnCmtmtAmtInGlobalCrcy` | `DECF(34)` |  |
| `PubSecRevnBdgtAmtInGlobalCrcy` |  | |  | `curr_to_decfloat_amount( PubSecRevnBdgtAmtInGlobalCrcy )` | `DECF(34)` |  |
| `PubSecRevnCmtmtAmtInGlobalCrcy` |  | |  | `curr_to_decfloat_amount( PubSecRevnCmtmtAmtInGlobalCrcy )` | `DECF(34)` |  |
| `PubSecRevnActlAmtInGlobalCrcy` |  | |  | `curr_to_decfloat_amount( PubSecRevnActlAmtInGlobalCrcy )` | `DECF(34)` |  |
| `PubSecDiffRevnAmtInGlobalCrcy` |  | |  | `$projection.PubSecRevnBdgtAmtInGlobalCrcy - $projection.PubSecRevnActlAmtInGlobalCrcy - $projection.PubSecRevnCmtmtAmtInGlobalCrcy` | `DECF(34)` |  |
| `PubSecIsConsumableBudget` |  | |  |  | `CHAR(1)` | Include Consumable Budget (AVC) |
| `_DocumentStore` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECBUDGETACTUALQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECBUDGETACTUALQRY')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_ALLOWED
@EndUserText.label: 'Budget Commitment and Actual Items Query'
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@ObjectModel.supportedCapabilities: [#ANALYTICAL_QUERY]
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
     } 
}
@Analytics.document.defaultAssociationToStorage: '_DocumentStore'


define transient view entity C_PubSecBudgetActualQry
provider contract analytical_query
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
as projection on I_PubSecBdgtActlItemCube
{
  SourceLedger,
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
  @UI.textArrangement: #TEXT_LAST
  CompanyCode,
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: true }
  @Consumption.derivation: { lookupEntity: 'I_CalendarDate',
        resultElement: 'CalendarYear', binding: [
        { targetElement : 'CalendarDate' , type : #PARAMETER, value : 'P_KeyDate' } ]
       }
  @AnalyticsDetails.query.variableSequence: 40
  @AnalyticsDetails.query.axis: #FREE
  FiscalYear,
  @AnalyticsDetails.query.axis: #FREE
  AccountingDocument,
  FinancialPlanningReqTransSqnc,
  FinancialPlanningDataPacket,
  ActualPlanJournalEntryItem,
  
  @AnalyticsDetails.query.axis: #FREE
  @UI.textArrangement: #TEXT_LAST
  GLAccount,
  @AnalyticsDetails.query.axis: #FREE
  ActualPlanCode,
  @AnalyticsDetails.query.axis: #FREE
  @UI.textArrangement: #TEXT_LAST
  ProfitCenter,
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 140
  @AnalyticsDetails.query.axis: #FREE
  @UI.textArrangement: #TEXT_LAST
  @ObjectModel.text.element: [ 'CostCenterName' ]
  CostCenter,
  @Semantics.text: true
  _CostCenter._Text.CostCenterName                     as CostCenterName : localized,
  
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 150
  @AnalyticsDetails.query.axis: #FREE
  @UI.textArrangement: #TEXT_LAST
  WBSElementExternalID,
  @AnalyticsDetails.query.axis: #FREE
  PartnerWBSElementExternalID,
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 130
  @AnalyticsDetails.query.axis: #FREE
  @UI.textArrangement: #TEXT_LAST
  FunctionalArea,
  @AnalyticsDetails.query.axis: #FREE
  @UI.textArrangement: #TEXT_LAST
  Segment,
  @AnalyticsDetails.query.axis: #FREE
  PartnerCostCenter,
  @AnalyticsDetails.query.axis: #FREE
  PartnerFunctionalArea,
  @AnalyticsDetails.query.axis: #FREE
  OriginCostCenter,
  @Consumption.filter :
  { selectionType : #HIERARCHY_NODE, multipleSelections : true,mandatory: false,
   hierarchyBinding :
   [{ type : #CONSTANT,value: 'A000' },
   { type : #USER_INPUT, value:'P_CostCenterHierarchyName', variableSequence: 141 }


   ] }
  @AnalyticsDetails.query.displayHierarchy: #FILTER
  CostCenterHierarchy,
  @Consumption.filter: {  selectionType: #HIERARCHY_NODE, multipleSelections: true, mandatory: false,
                    hierarchyBinding : [{type : #USER_INPUT, value : 'P_FundHierarchyName', variableSequence: 101} ] }
  // @EndUserText.label: 'Fund Hierarchy Node'
  @AnalyticsDetails.query.displayHierarchy: #FILTER
  // @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #SHOW
  FundHierarchy,
  @Consumption.filter: {  selectionType: #HIERARCHY_NODE, multipleSelections: true, mandatory: false,
                        hierarchyBinding : [{type : #USER_INPUT, value : 'P_GrantHierarchyName', variableSequence: 161} ] }
  @EndUserText.label: 'Grant Hierarchy '
  @AnalyticsDetails.query.displayHierarchy: #FILTER
  //@AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #SHOW
  GrantHierarchyNode as GrantHierarchy,
  @Consumption.filter: {  selectionType: #HIERARCHY_NODE, multipleSelections: true, mandatory: false,
                      hierarchyBinding : [{type : #USER_INPUT, value : 'P_FuncAreaHierarchyName', variableSequence: 131} ] }
  @EndUserText.label: 'Functional Area Hierarchy'
  @AnalyticsDetails.query.displayHierarchy: #FILTER
  //@AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #SHOW
  FunctionalAreaHierarchy,
  @Consumption.filter: {  selectionType: #HIERARCHY_NODE, multipleSelections: true, mandatory: false,
                      hierarchyBinding : [{type : #USER_INPUT, value : 'P_BudActHierarchyName', variableSequence: 121} ] }

  @AnalyticsDetails.query.displayHierarchy: #FILTER
  // @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #SHOW
  BudgetAccountHierarchy,
  @AnalyticsDetails.query.axis: #FREE
  @UI.textArrangement: #TEXT_ONLY
  CtrlObjForFund,
  @AnalyticsDetails.query.axis: #FREE
  @UI.textArrangement: #TEXT_ONLY
  CtrlObjForFunctionalArea,
  @AnalyticsDetails.query.axis: #FREE
  @UI.textArrangement: #TEXT_ONLY
  CtrlObjForBudgetPeriod,
  @AnalyticsDetails.query.axis: #FREE
  @UI.textArrangement: #TEXT_ONLY
  CtrlObjForCostCenter,
  @AnalyticsDetails.query.axis: #FREE
  @UI.textArrangement: #TEXT_ONLY
  CtrlObjForWBSElement,
  @AnalyticsDetails.query.axis: #FREE
  @UI.textArrangement: #TEXT_ONLY
  CtrlObjForBudgetAccount,
  @AnalyticsDetails.query.axis: #FREE
  @UI.textArrangement: #TEXT_ONLY
  CtrlObjForGrant,
  @AnalyticsDetails.query.axis: #FREE
  @UI.textArrangement: #TEXT_ONLY
  CtrlObjForSponsoredClass,
  @AnalyticsDetails.query.axis: #FREE
  @UI.textArrangement: #TEXT_ONLY
  CtrlObjForSponsoredProgram,
  @AnalyticsDetails.query.axis: #FREE
  BusinessTransactionType,
  @AnalyticsDetails.query.axis: #FREE
  FinancialTransactionType,
  @AnalyticsDetails.query.axis: #FREE
  AccountingDocumentType,
  @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: false, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 60
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  PostingDate,
  @AnalyticsDetails.query.axis: #FREE
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 70
  PlanningCategory,
  @AnalyticsDetails.query.axis: #FREE
  IsCommitment,
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 100
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #SHOW
  @UI.textArrangement: #TEXT_LAST
  Fund,
  @AnalyticsDetails.query.axis: #FREE
  PartnerFund,
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 160
  @AnalyticsDetails.query.axis: #FREE
  GrantID,
  @AnalyticsDetails.query.axis: #FREE  
  GranteeMgmtSponsor,
  @AnalyticsDetails.query.axis: #FREE
  SponsoredClass,
  @AnalyticsDetails.query.axis: #FREE
  SponsoredProgram,
  @AnalyticsDetails.query.axis: #FREE
  GteeMBudgetValidityNumber,
  @AnalyticsDetails.query.axis: #FREE
  PartnerGrant,
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 110
  @AnalyticsDetails.query.axis: #FREE
  BudgetPeriod,
  @AnalyticsDetails.query.axis: #FREE
  PartnerBudgetPeriod,
  @AnalyticsDetails.query.axis: #FREE
  CashLedgerAccount,
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 120
  @AnalyticsDetails.query.axis: #FREE
  @UI.textArrangement: #TEXT_LAST
  PubSecBudgetAccount,
  @AnalyticsDetails.query.axis: #FREE
  PubSecBudgetCnsmpnDate,
  @AnalyticsDetails.query.axis: #FREE
  PubSecBudgetCnsmpnFsclPeriod,
  @AnalyticsDetails.query.axis: #FREE
  PubSecBudgetCnsmpnFsclYear,
  @AnalyticsDetails.query.axis: #FREE
  PubSecBudgetCnsmpnType,
  @AnalyticsDetails.query.axis: #FREE
  PubSecBudgetCnsmpnTypeGroup,
  @AnalyticsDetails.query.axis: #FREE
  PubSecBudgetCnsmpnAmtType,
  @AnalyticsDetails.query.axis: #FREE
  PubSecBudgetIsRelevant,
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 201
  @AnalyticsDetails.query.axis: #FREE
  PubSecBdgtAcctRevnExpnCode,
  @AnalyticsDetails.query.axis: #FREE
  FundType,
  @AnalyticsDetails.query.axis: #FREE
  GranteeMgmtFundType,
  @AnalyticsDetails.query.axis: #FREE
  BudgetProcess,
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 180
  @AnalyticsDetails.query.axis: #FREE
  BudgetingType,
  @AnalyticsDetails.query.axis: #FREE
  BudgetDocWorkFlowStatus,
  @AnalyticsDetails.query.axis: #FREE 
  AvailabilityControlProfile,
  
  @AnalyticsDetails.query.axis: #FREE
  BudgetDocument,
  @AnalyticsDetails.query.axis: #FREE
  PurchaseOrder,
  @AnalyticsDetails.query.axis: #FREE
  PurchaseRequisition,
  @AnalyticsDetails.query.axis: #FREE
  EarmarkedFundsDocument,
  
  @AnalyticsDetails.query.axis: #FREE
  TransactionCurrency,
  @AnalyticsDetails.query.axis: #FREE
  CompanyCodeCurrency,
  @AnalyticsDetails.query.axis: #FREE
  GlobalCurrency,
  @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
  @AnalyticsDetails.query.hidden : true
  @Aggregation.default: #SUM
  curr_to_decfloat_amount(AmountInTransactionCurrency) as AmountInTransactionCurrency,
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @AnalyticsDetails.query.hidden : true
  @Aggregation.default: #SUM
  curr_to_decfloat_amount(AmountInCompanyCodeCurrency) as AmountInCompanyCodeCurrency,
  @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
  @AnalyticsDetails.query.hidden : true
  @Aggregation.default: #SUM
  curr_to_decfloat_amount(AmountInGlobalCurrency) as AmountInGlobalCurrency,
  
 
  @EndUserText.label: 'Budget Expense Amt in Company Code Crcy'
  @Aggregation.default: #SUM
  @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
  curr_to_decfloat_amount( PubSecExpnBdgtAmtInCoCodeCrcy ) as PubSecExpnBdgtAmtInCoCodeCrcy,
  @EndUserText.label: 'Cmtmt Expense Amt in Company Code Crcy'
  @Aggregation.default: #SUM
  @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
  curr_to_decfloat_amount( PubSecExpnCmtmtAmtInCoCodeCrcy ) as PubSecExpnCmtmtAmtInCoCodeCrcy,
  @EndUserText.label: 'Actual Expense Amt in Company Code Crcy'
  @Aggregation.default: #SUM
  @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
  curr_to_decfloat_amount( PubSecExpnActlAmtInCoCodeCrcy ) as PubSecExpnActlAmtInCoCodeCrcy,
  @Aggregation.default: #SUM
  @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
  curr_to_decfloat_amount( PubSecRevnBdgtAmtInCoCodeCrcy ) as PubSecRevnBdgtAmtInCoCodeCrcy,
  @Aggregation.default: #SUM
  @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
  curr_to_decfloat_amount( PubSecRevnCmtmtAmtInCoCodeCrcy ) as PubSecRevnCmtmtAmtInCoCodeCrcy,
  @Aggregation.default: #SUM
  @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
  curr_to_decfloat_amount( PubSecRevnActlAmtInCoCodeCrcy ) as PubSecRevnActlAmtInCoCodeCrcy,
  
  
  
  
  @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #SUM
  curr_to_decfloat_amount( PubSecExpnBdgtAmtInGlobalCrcy ) as PubSecExpnBdgtAmtInGlobalCrcy,
  @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #SUM
  curr_to_decfloat_amount( PubSecExpnCmtmtAmtInGlobalCrcy ) as PubSecExpnCmtmtAmtInGlobalCrcy,
  @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #SUM
  curr_to_decfloat_amount( PubSecExpnActlAmtInGlobalCrcy ) as PubSecExpnActlAmtInGlobalCrcy,
  @EndUserText.label: 'Expn Amount Difference in Global Crcy'
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default : #FORMULA
  //@AnalyticsDetails.query.formula : '$projection.PubSecExpnBdgtAmtInGlobalCrcy - $projection.PubSecExpnActlAmtInGlobalCrcy - $projection.PubSecExpnCmtmtAmtInGlobalCrcy'
  //cast( 1 as psm_amt_expn_diff_grp_curr ) as PubSecDiffExpnAmtInGlobalCrcy,
  $projection.PubSecExpnBdgtAmtInGlobalCrcy - $projection.PubSecExpnActlAmtInGlobalCrcy - $projection.PubSecExpnCmtmtAmtInGlobalCrcy as PubSecDiffExpnAmtInGlobalCrcy,
  
  @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
  @AnalyticsDetails.query.hidden : true
  @Aggregation.default: #SUM
  curr_to_decfloat_amount( PubSecRevnBdgtAmtInGlobalCrcy ) as PubSecRevnBdgtAmtInGlobalCrcy,
  @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
  @AnalyticsDetails.query.hidden : true
  @Aggregation.default: #SUM
  curr_to_decfloat_amount( PubSecRevnCmtmtAmtInGlobalCrcy ) as  PubSecRevnCmtmtAmtInGlobalCrcy,
  @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
  @AnalyticsDetails.query.hidden : true
  @Aggregation.default: #SUM
  curr_to_decfloat_amount( PubSecRevnActlAmtInGlobalCrcy ) as PubSecRevnActlAmtInGlobalCrcy,
  @EndUserText.label: 'Difference in Global Currency (Revenue)'
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @AnalyticsDetails.query.hidden : true
  @Aggregation.default : #FORMULA
  //@AnalyticsDetails.query.formula : '$projection.PubSecRevnBdgtAmtInGlobalCrcy - $projection.PubSecRevnActlAmtInGlobalCrcy - $projection.PubSecRevnCmtmtAmtInGlobalCrcy'
  //cast( 1 as psm_amt_revn_diff_grp_curr ) as PubSecDiffRevnAmtInGlobalCrcy
  $projection.PubSecRevnBdgtAmtInGlobalCrcy - $projection.PubSecRevnActlAmtInGlobalCrcy - $projection.PubSecRevnCmtmtAmtInGlobalCrcy as PubSecDiffRevnAmtInGlobalCrcy,
  
  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 200
  @AnalyticsDetails.query.axis: #FREE
  PubSecIsConsumableBudget,
  
  _DocumentStore
  
  
 }
```
