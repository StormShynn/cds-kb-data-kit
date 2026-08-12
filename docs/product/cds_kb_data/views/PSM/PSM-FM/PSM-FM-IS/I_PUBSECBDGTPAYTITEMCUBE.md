---
name: I_PUBSECBDGTPAYTITEMCUBE
description: "Budget vs Payment Items - Cube"
app_component: PSM-FM-IS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECBDGTPAYTITEMCUBE')/$value
semantic_en: "Budget vs Payment Items - Cube"
semantic_vi: "Budget vs Payment Items - Cube — CDS view giao diện dựa trên P_PubSecBdgtPaytItemBasic."
keywords:
  - "budget"
  - "payment"
  - "items"
  - "cube"
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
  - component:PSM-FM-IS
  - interface-view
  - payment
  - PSM-FM
  - PSM-FM-IS
---
# I_PUBSECBDGTPAYTITEMCUBE

**Budget vs Payment Items - Cube**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECBDGTPAYTITEMCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SourceLedger` | ✓ | |  |  | `CHAR(2)` | Source Ledger |
| `Ledger` | ✓ | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | ✓ | |  |  | `CHAR(10)` | Journal Entry |
| `FinancialPlanningReqTransSqnc` | ✓ | |  |  | `NUMC(23)` | Financial Planning Request Transaction Sequence Number |
| `FinancialPlanningDataPacket` | ✓ | |  |  | `NUMC(6)` | Financial Planning Data Packet Number |
| `FinancialPlanningEntryItem` | ✓ | |  |  | `INT4(10)` | Financial Planning Entry Item |
| `LedgerGLLineItem` | ✓ | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `PlanningCategory` | ✓ | |  |  | `CHAR(10)` | Plan Category |
| `ActualPlanJournalEntryItem` |  | |  |  | `CHAR(12)` | Actual Plan Journal Entry Item |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `ReferenceDocument` |  | |  |  | `CHAR(10)` | Reference Doc. Number |
| `ReferenceDocumentType` |  | |  |  | `CHAR(5)` | Reference Document Type |
| `ReferenceDocumentItem` |  | |  |  | `NUMC(6)` | Reference Document Item |
| `SourceReferenceDocument` |  | |  |  | `CHAR(10)` | Source Reference Document |
| `SourceReferenceDocumentType` |  | |  |  | `CHAR(5)` | Source Reference Document Type |
| `SourceReferenceDocumentItem` |  | |  |  | `NUMC(6)` | Source Reference Document Item |
| `Fund` |  | |  |  | `CHAR(10)` | Fund |
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `BudgetPeriod` |  | |  |  | `CHAR(10)` | Budget Period |
| `SponsoredClass` |  | |  |  | `CHAR(20)` | Sponsored Class |
| `SponsoredProgram` |  | |  |  | `CHAR(20)` | Sponsored Program |
| `GranteeMgmtSponsor` |  | |  |  | `CHAR(10)` | Grant Sponsor |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `WBSElementExternalID` |  | | `_WBSElementExternalID` | `WBSElementExternalID` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `CashLedgerAccount` |  | |  |  | `CHAR(10)` | Cash Origin Account |
| `CashLedgerCompanyCode` |  | |  | `cast(_CashLedgerCompanyCode.CompanyCode as fis_re_bukrs preserving type )` | `CHAR(4)` | Cash Origin Company Code |
| `PubSecBudgetCnsmpnType` |  | |  |  | `CHAR(2)` | Budget Consumption Type |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `AmountInTransactionCurrency` |  | |  |  | `CURR(23)` | Amount in Transaction Currency |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `PubSecBudgetAccount` |  | |  |  | `CHAR(10)` | Budget Account |
| `PubSecBudgetAccountCoCode` |  | |  |  | `CHAR(4)` | Budget Account Company Code |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `AmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `ClearingDate` |  | |  |  | `DATS(8)` | Clearing Date |
| `FinancialManagementArea` |  | |  |  | `CHAR(4)` | Financial Management Area |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `FundType` |  | | `_FundType` | `FundType` | `CHAR(6)` | Fund Type |
| `GranteeMgmtFundType` |  | | `_GranteeMgmtFundType` | `GranteeMgmtFundType` | `CHAR(1)` | Fund Type for Grants Management |
| `PubSecBdgtAcctRevnExpnCode` |  | | `_PubSecBudgetAccount` | `PubSecBdgtAcctRevnExpnCode` | `CHAR(1)` | Expense or Revenue on Budget Account |
| `PubSecBudgetCnsmpnTypeGroup` |  | |  |  | `CHAR(2)` | Budget Consumption Type Group |
| `PubSecBudgetCnsmpnAmtType` |  | |  |  | `CHAR(4)` | Budget Consumption Amount Type |
| `PubSecBudgetCnsmpnDate` |  | |  |  | `DATS(8)` | Budget Consumption Date |
| `PubSecBudgetCnsmpnFsclPeriod` |  | |  |  | `NUMC(3)` | CC Fiscal Period for Budget Consumption Date |
| `PubSecBudgetCnsmpnFsclYear` |  | |  |  | `NUMC(4)` | CC Fiscal Year for Budget Consumption Date |
| `PubSecBudgetIsRelevant` |  | |  |  | `CHAR(1)` | Budget-Relevant Indicator |
| `BudgetingType` |  | | `_BudgetingType` | `BudgetingType` | `CHAR(8)` | Budget Type (Subcategory) |
| `BudgetProcess` |  | | `_BudgetProcess` | `BudgetProcess` | `CHAR(4)` | Budget Process Type |
| `BudgetDocWorkFlowStatus` |  | | `_BudgetDocWorkFlowStatus` | `BudgetDocWorkFlowStatus` | `CHAR(1)` | Workflow Status for a Budget Document |
| `ActualPlanCode` |  | |  |  | `CHAR(1)` | Actual Plan Code |
| `CostCenterHierarchy` |  | |  | `cast( Item.CostCenter as fis_cctr_hryid_42)` | `CHAR(42)` | Cost Center Hierarchy |
| `FundHierarchy` |  | |  | `cast(Item.Fund as fmis_hryid_fund )` | `CHAR(42)` | Fund Hierarchy |
| `GrantHierarchyNode` |  | |  | `cast (Item.GrantID as gm_hrynid_grant)` | `CHAR(50)` | Grant Hierarchy Node |
| `FunctionalAreaHierarchy` |  | |  | `cast( Item.FunctionalArea as fis_hryid_functionalarea_42)` | `CHAR(42)` | Functional Area Hierarchy |
| `BudgetAccountHierarchy` |  | |  | `cast (Item.PubSecBudgetAccount as psm_hryid_budgetaccount )` | `CHAR(42)` | Budget Account Hierarchy |
| `PubSecExpnBdgtAmtInGlobalCrcy` |  | |  |  | `CURR(25)` | Budget Expense Amount in Global Currency |
| `PubSecRevnBdgtAmtInGlobalCrcy` |  | |  |  | `CURR(25)` | Budget Revenue Amount in Global Currency |
| `PubSecExpnPaytAmtInGlobCrcy` |  | |  |  | `CURR(25)` | Payment Expense Amount in Global Currency |
| `PubSecExpnInvcAmtInGlobCrcy` |  | |  |  | `CURR(30)` |  |
| `PubSecExpnTransfAmtInGlobCrcy` |  | |  |  | `CURR(25)` | Transfer Expense Amount in Global Currency |
| `PubSecRevnInvcAmtInGlobCrcy` |  | |  |  | `CURR(25)` | Invoice Revenue Amount in Global Currency |
| `PubSecRevnTransfAmtInGlobCrcy` |  | |  |  | `CURR(25)` | Transfer Revenue Amount in Global Currency |
| `PubSecInvcdTrnsfdAmtInGlobCrcy` |  | |  | `cast( $projection.pubsecexpninvcamtinglobcrcy + $projection.pubsecexpntransfamtinglobcrcy as psm_amt_invcd_trnsfd_grp_curr)` | `CURR(25)` | Invoiced/ Transferred Amount in Global Currency |
| `PubSecRevnCollAmtInGlobCrcy` |  | |  | `(cast(Item.PubSecRevnCollAmtInGlobCrcy as abap.decfloat34) * -1)` | `DECF(34)` |  |
| `PubSecBlldTrnsfdAmtInGlobCrcy` |  | |  | `cast((Item.PubSecRevnInvcAmtInGlobCrcy + Item.PubSecRevnTransfAmtInGlobCrcy) as abap.decfloat34) * -1` | `DECF(34)` |  |
| `PubSecFcstOfRevnAmtInGC` |  | |  |  | `CURR(25)` | Forecast of Revenue Amount in Global Currency |
| `PubSecExpnCmtmtAmtInGlobalCrcy` |  | |  |  | `CURR(25)` | Commitment Expense Amount in Global Currency |
| `PubSecExpnPreCmtmtAmtInGC` |  | |  |  | `CURR(25)` | Preencumbrance Expense Amount in Global Currency |
| `PartnerCostCenter` |  | |  |  | `CHAR(10)` | Partner Cost Center |
| `PartnerFunctionalArea` |  | |  |  | `CHAR(16)` | Partner Functional Area |
| `PartnerBudgetPeriod` |  | |  |  | `CHAR(10)` | FM: Partner Budget Period |
| `PartnerFund` |  | |  |  | `CHAR(10)` | Partner Fund |
| `PartnerGrant` |  | |  |  | `CHAR(20)` | Partner Grant |
| `PartnerWBSElementExternalID` |  | | `_PartnerWBSElementExternalID` | `WBSElementExternalID` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `OriginCostCenter` |  | |  |  | `CHAR(10)` | Origin Cost Center |
| `IsCommitment` |  | |  |  | `CHAR(1)` | Indicator: Is Commitment |
| `BudgetDocument` |  | |  | `cast( case when Item.ReferenceDocumentType = 'FPL04' or Item.ReferenceDocumentType = 'FPL00' then Item.ReferenceDocument else '' end as psm_bdgt_docnr preserving type )` | `CHAR(10)` | Budget Document Number |
| `PurchaseOrder` |  | |  | `cast( case when Item.SourceReferenceDocumentType = 'PORD' then Item.SourceReferenceDocument else '' end as vdm_purchaseorder preserving type )` | `CHAR(10)` | Purchase Order Number |
| `PurchaseRequisition` |  | |  | `cast( case when Item.SourceReferenceDocumentType = 'PREQ' then Item.SourceReferenceDocument else '' end as vdm_purchaserequisition preserving type )` | `CHAR(10)` | Purchase Requisition Number |
| `EarmarkedFundsDocument` |  | |  | `cast( case when Item.SourceReferenceDocumentType = 'FMRES' then Item.SourceReferenceDocument else '' end as fmis_earmarkedfundsdoc preserving type )` | `CHAR(10)` | Document Number for Earmarked Funds |
| `_SourceLedger` | | ✓ | | | | |
| `_PubSecBudgetAccount` | | ✓ | | | | |
| `_PubSecBudgetAccountCoCode` | | ✓ | | | | |
| `_PubSecBudgetCnsmpnDate` | | ✓ | | | | |
| `_PubSecBdgtCnsmpnFsclYear` | | ✓ | | | | |
| `_PubSecBdgtCnsmpnFsclPeriod` | | ✓ | | | | |
| `_FundType` | | ✓ | | | | |
| `_BudgetAccountInChtAccts` | | ✓ | | | | |
| `_JournalEntry` | | ✓ | | | | |
| `_GranteeMgmtFundType` | | ✓ | | | | |
| `_FundHierarchy` | | ✓ | | | | |
| `_GrantHierarchy` | | ✓ | | | | |
| `_CostCenterHierarchy` | | ✓ | | | | |
| `_BudgetAccountInChtAcctsHier` | | ✓ | | | | |
| `_PlanningCategory` | | ✓ | | | | |
| `_PubSecBdgtAcctRevnExpnCode` | | ✓ | | | | |
| `_FunctionalAreaHierarchy` | | ✓ | | | | |
| `_BudgetDocWorkFlowStatus` | | ✓ | | | | |
| `_WBSElementExternalID` | | ✓ | | | | |
| `_PartnerWBSElementExternalID` | | ✓ | | | | |
| `_PartnerFund` | | ✓ | | | | |
| `_PartnerGrant` | | ✓ | | | | |
| `_PartnerBudgetPeriod` | | ✓ | | | | |
| `_BudgetProcess` | | ✓ | | | | |
| `_BudgetingType` | | ✓ | | | | |
| `_CashLedgerAccount` | | ✓ | | | | |
| `_CashLedgerCompanyCode` | | ✓ | | | | |
| `_OriginCostCenter` | | ✓ | | | | |
| `_PubSecPlanningCategory` | | ✓ | | | | |
| `_GLAccountForPublicSector` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SourceLedger` | `I_Ledger` | [0..1] |
| `_PubSecBudgetAccount` | `I_PubSecBudgetAccount` | [0..1] |
| `_PubSecBudgetAccountCoCode` | `I_CompanyCode` | [0..1] |
| `_PubSecBudgetCnsmpnDate` | `I_FiscCalendarDateForCompCode` | [0..1] |
| `_PubSecBdgtCnsmpnFsclYear` | `I_FiscalYearForVariant` | [0..1] |
| `_PubSecBdgtCnsmpnFsclPeriod` | `I_FiscalPeriodForVariant` | [0..1] |
| `_FundType` | `I_FundType` | [0..1] |
| `_BudgetAccountInChtAccts` | `I_BudgetAccountInChtAccts` | [0..1] |
| `_JournalEntry` | `I_JournalEntry` | [0..1] |
| `_GranteeMgmtFundType` | `I_GranteeMgmtFundType` | [0..1] |
| `_FundHierarchy` | `I_Fund` | [0..1] |
| `_GrantHierarchy` | `I_Grant` | [0..1] |
| `_CostCenterHierarchy` | `I_CostCenter` | [0..*] |
| `_BudgetAccountInChtAcctsHier` | `I_BudgetAccountInChtAccts` | [0..1] |
| `_PlanningCategory` | `I_PlanningCategory` | [0..1] |
| `_PubSecBdgtAcctRevnExpnCode` | `I_PubSecBdgtAcctRevnExpnCode` | [0..1] |
| `_FunctionalAreaHierarchy` | `I_FunctionalArea` | [0..1] |
| `_BudgetDocWorkFlowStatus` | `I_BudgetDocWorkFlowStatus` | [0..1] |
| `_WBSElementExternalID` | `I_WBSElementByExternalID` | [0..1] |
| `_PartnerWBSElementExternalID` | `I_WBSElementByExternalID` | [0..1] |
| `_PartnerFund` | `I_Fund` | [0..1] |
| `_PartnerGrant` | `I_Grant` | [0..1] |
| `_PartnerBudgetPeriod` | `I_BudgetPeriod` | [0..1] |
| `_BudgetProcess` | `I_BudgetProcess` | [0..1] |
| `_BudgetingType` | `I_BudgetingType` | [0..1] |
| `_CashLedgerAccount` | `I_GLAccountInCompanyCode` | [0..1] |
| `_CashLedgerCompanyCode` | `I_CompanyCode` | [0..1] |
| `_OriginCostCenter` | `I_CostCenter` | [0..*] |
| `_PubSecPlanningCategory` | `I_PubSecPlanningCategory` | [0..1] |
| `_GLAccountForPublicSector` | `I_GLAccountForPublicSector` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECBDGTPAYTITEMCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECBDGTPAYTITEMCUBE')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel:{
  usageType:{
    serviceQuality: #D,
    sizeCategory: #XXL,
    dataClass: #MIXED
  },
  modelingPattern: #ANALYTICAL_CUBE,
  supportedCapabilities: [ #ANALYTICAL_PROVIDER ]
}
@Analytics: {
  dataCategory: #CUBE,
  internalName: #LOCAL
}
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'Budget vs Payment Items - Cube'

define view entity I_PubSecBdgtPaytItemCube
  with parameters
    P_ClearingStatusSelection : fis_clearingstatusselection
  as select from P_PubSecBdgtPaytItemBasic as Item
  //   left outer join I_PubSecPlanningCategory  as _PubSecPlanningCategory on Item.PlanningCategory = _PubSecPlanningCategory.PlanningCategory
  association [0..1] to I_Ledger                      as _SourceLedger                on  $projection.SourceLedger = _SourceLedger.Ledger
  association [0..1] to I_PubSecBudgetAccount         as _PubSecBudgetAccount         on  $projection.PubSecBudgetAccountCoCode = _PubSecBudgetAccount.PubSecBudgetAccountCoCode
                                                                                      and $projection.PubSecBudgetAccount       = _PubSecBudgetAccount.PubSecBudgetAccount
  association [0..1] to I_CompanyCode                 as _PubSecBudgetAccountCoCode   on  $projection.PubSecBudgetAccountCoCode = _PubSecBudgetAccountCoCode.CompanyCode
  association [0..1] to I_FiscCalendarDateForCompCode as _PubSecBudgetCnsmpnDate      on  $projection.PubSecBudgetCnsmpnDate = _PubSecBudgetCnsmpnDate.CalendarDate
                                                                                      and $projection.CompanyCode            = _PubSecBudgetCnsmpnDate.CompanyCode
  association [0..1] to I_FiscalYearForVariant        as _PubSecBdgtCnsmpnFsclYear    on  $projection.PubSecBudgetCnsmpnFsclYear = _PubSecBdgtCnsmpnFsclYear.FiscalYear
                                                                                      and $projection.FiscalYearVariant          = _PubSecBdgtCnsmpnFsclYear.FiscalYearVariant
  association [0..1] to I_FiscalPeriodForVariant      as _PubSecBdgtCnsmpnFsclPeriod  on  $projection.PubSecBudgetCnsmpnFsclYear   = _PubSecBdgtCnsmpnFsclPeriod.FiscalYear
                                                                                      and $projection.PubSecBudgetCnsmpnFsclPeriod = _PubSecBdgtCnsmpnFsclPeriod.FiscalPeriod
                                                                                      and $projection.FiscalYearVariant            = _PubSecBdgtCnsmpnFsclPeriod.FiscalYearVariant
  association [0..1] to I_FundType                    as _FundType                    on  $projection.FinancialManagementArea = _FundType.FinancialManagementArea
                                                                                      and $projection.fundtype                = _FundType.FundType
  association [0..1] to I_BudgetAccountInChtAccts     as _BudgetAccountInChtAccts     on  $projection.ChartOfAccounts     = _BudgetAccountInChtAccts.ChartOfAccounts
                                                                                      and $projection.PubSecBudgetAccount = _BudgetAccountInChtAccts.PubSecBudgetAccount
  association [0..1] to I_JournalEntry                as _JournalEntry                on  $projection.CompanyCode        = _JournalEntry.CompanyCode
                                                                                      and $projection.FiscalYear         = _JournalEntry.FiscalYear
                                                                                      and $projection.AccountingDocument = _JournalEntry.AccountingDocument
  association [0..1] to I_GranteeMgmtFundType         as _GranteeMgmtFundType         on  $projection.GranteeMgmtFundType = _GranteeMgmtFundType.GranteeMgmtFundType

  association [0..1] to I_Fund                        as _FundHierarchy               on  $projection.FinancialManagementArea = _FundHierarchy.FinancialManagementArea
                                                                                      and $projection.FundHierarchy           = _FundHierarchy.Fund
  association [0..1] to I_Grant                       as _GrantHierarchy              on  $projection.GrantHierarchyNode = _GrantHierarchy.GrantID

  association [0..*] to I_CostCenter                  as _CostCenterHierarchy         on  $projection.ControllingArea     = _CostCenterHierarchy.ControllingArea
                                                                                      and $projection.CostCenterHierarchy = _CostCenterHierarchy.CostCenter
  association [0..1] to I_BudgetAccountInChtAccts     as _BudgetAccountInChtAcctsHier on  $projection.ChartOfAccounts        = _BudgetAccountInChtAcctsHier.ChartOfAccounts
                                                                                      and $projection.BudgetAccountHierarchy = _BudgetAccountInChtAcctsHier.PubSecBudgetAccount
  association [0..1] to I_PlanningCategory            as _PlanningCategory            on  $projection.PlanningCategory = _PlanningCategory.PlanningCategory
  association [0..1] to I_PubSecBdgtAcctRevnExpnCode  as _PubSecBdgtAcctRevnExpnCode  on  $projection.PubSecBdgtAcctRevnExpnCode = _PubSecBdgtAcctRevnExpnCode.PubSecBdgtAcctRevnExpnCode
  association [0..1] to I_FunctionalArea              as _FunctionalAreaHierarchy     on  $projection.FunctionalAreaHierarchy = _FunctionalAreaHierarchy.FunctionalArea
  association [0..1] to I_BudgetDocWorkFlowStatus     as _BudgetDocWorkFlowStatus     on  $projection.BudgetDocWorkFlowStatus = _BudgetDocWorkFlowStatus.BudgetDocWorkFlowStatus
  association [0..1] to I_WBSElementByExternalID      as _WBSElementExternalID        on  $projection.WBSElementExternalID = _WBSElementExternalID.WBSElementExternalID
  association [0..1] to I_WBSElementByExternalID      as _PartnerWBSElementExternalID on  $projection.PartnerWBSElementExternalID = _PartnerWBSElementExternalID.WBSElementExternalID
  association [0..1] to I_Fund                        as _PartnerFund                 on  $projection.FinancialManagementArea = _PartnerFund.FinancialManagementArea
                                                                                      and $projection.PartnerFund             = _PartnerFund.Fund
  association [0..1] to I_Grant                       as _PartnerGrant                on  $projection.PartnerGrant = _PartnerGrant.GrantID
  association [0..1] to I_BudgetPeriod                as _PartnerBudgetPeriod         on  $projection.PartnerBudgetPeriod = _PartnerBudgetPeriod.BudgetPeriod
  association [0..1] to I_BudgetProcess               as _BudgetProcess               on  $projection.BudgetProcess = _BudgetProcess.BudgetProcess
  association [0..1] to I_BudgetingType               as _BudgetingType               on  $projection.BudgetingType = _BudgetingType.BudgetingType
  association [0..1] to I_GLAccountInCompanyCode      as _CashLedgerAccount           on  $projection.CashLedgerCompanyCode = _CashLedgerAccount.CompanyCode
                                                                                      and $projection.CashLedgerAccount     = _CashLedgerAccount.GLAccount
  association [0..1] to I_CompanyCode                 as _CashLedgerCompanyCode       on  $projection.CashLedgerCompanyCode = _CashLedgerCompanyCode.CompanyCode
  association [0..*] to I_CostCenter                  as _OriginCostCenter            on  $projection.ControllingArea  = _OriginCostCenter.ControllingArea
                                                                                      and $projection.OriginCostCenter = _OriginCostCenter.CostCenter
  association [0..1] to I_PubSecPlanningCategory      as _PubSecPlanningCategory      on  $projection.PlanningCategory = _PubSecPlanningCategory.PlanningCategory
  association [0..*] to I_GLAccountForPublicSector    as _GLAccountForPublicSector    on  $projection.GLAccount = _GLAccountForPublicSector.GLAccount
{

         @ObjectModel.foreignKey.association: '_SourceLedger'
  key    Item.SourceLedger,
         @ObjectModel.foreignKey.association: '_Ledger'
  key    Item.Ledger,
         @ObjectModel.foreignKey.association: '_CompanyCode'
  key    Item.CompanyCode,
         @ObjectModel.foreignKey.association: '_FiscalYear'
  key    Item.FiscalYear,
         @ObjectModel.foreignKey.association: '_JournalEntry'
  key    Item.AccountingDocument,
  key    Item.FinancialPlanningReqTransSqnc,
  key    Item.FinancialPlanningDataPacket,
  key    Item.FinancialPlanningEntryItem,
  key    Item.LedgerGLLineItem,
         @ObjectModel.foreignKey.association: '_PubSecPlanningCategory'
  key    Item.PlanningCategory,
         Item.ActualPlanJournalEntryItem,
         @ObjectModel.foreignKey.association: '_GLAccountInChartOfAccounts'
         Item.GLAccount,
         @ObjectModel.foreignKey.association: '_ProfitCenter'
         Item.ProfitCenter,
         @ObjectModel.foreignKey.association: '_Segment'
         Item.Segment,
         Item.ReferenceDocument,
         @ObjectModel.foreignKey.association: '_ReferenceDocumentType'
         Item.ReferenceDocumentType,
         Item.ReferenceDocumentItem,
         Item.SourceReferenceDocument,
         Item.SourceReferenceDocumentType,
         Item.SourceReferenceDocumentItem,
         @Analytics.internalName: #LOCAL
         @ObjectModel.foreignKey.association: '_Fund'
         Item.Fund,
         @Analytics.internalName: #LOCAL
         @ObjectModel.foreignKey.association: '_Grant'
         Item.GrantID,
         @Analytics.internalName: #LOCAL
         @ObjectModel.foreignKey.association: '_BudgetPeriod'
         Item.BudgetPeriod,
         @ObjectModel.foreignKey.association: '_SponsoredClass'
         Item.SponsoredClass,
         @ObjectModel.foreignKey.association: '_SponsoredProgram'
         Item.SponsoredProgram,
         @ObjectModel.foreignKey.association: '_Sponsor'
         @Analytics.internalName: #LOCAL
         Item._Grant.GranteeMgmtSponsor                                                                                              as GranteeMgmtSponsor,
         @ObjectModel.foreignKey.association: '_CostCenter'
         Item.CostCenter,
         @ObjectModel.foreignKey.association: '_FunctionalArea'
         Item.FunctionalArea,
         @ObjectModel.foreignKey.association: '_WBSElementExternalID'
         _WBSElementExternalID.WBSElementExternalID                                                                                  as WBSElementExternalID,
         @ObjectModel.foreignKey.association: '_CashLedgerAccount'
         @Analytics.internalName: #LOCAL
         Item.CashLedgerAccount,
         @ObjectModel.foreignKey.association: '_CashLedgerCompanyCode'
         @Analytics.internalName: #LOCAL
         cast(_CashLedgerCompanyCode.CompanyCode as fis_re_bukrs preserving type )                                                   as CashLedgerCompanyCode,
         @Analytics.internalName: #LOCAL
         Item.PubSecBudgetCnsmpnType,
         Item.PostingDate,
         @Semantics.fiscal.period: true
         Item.FiscalPeriod,
         @ObjectModel.foreignKey.association: '_FiscalYearVariant'
         Item.FiscalYearVariant,
         @ObjectModel.foreignKey.association: '_BusinessTransactionType'
         Item.BusinessTransactionType,
         @DefaultAggregation: #SUM
         @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
         Item.AmountInTransactionCurrency,
         @ObjectModel.foreignKey.association: '_TransactionCurrency'
         Item.TransactionCurrency,
         @Analytics.internalName: #LOCAL
         @ObjectModel.foreignKey.association: '_BudgetAccountInChtAccts'
         Item.PubSecBudgetAccount,
         @Analytics.internalName: #LOCAL
         Item.PubSecBudgetAccountCoCode,
         @DefaultAggregation: #SUM
         @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
         Item.AmountInCompanyCodeCurrency,
         @ObjectModel.foreignKey.association: '_CompanyCodeCurrency'
         Item.CompanyCodeCurrency,
         @DefaultAggregation: #SUM
         @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
         Item.AmountInGlobalCurrency,
         @ObjectModel.foreignKey.association: '_GlobalCurrency'
         Item.GlobalCurrency,
         Item.ClearingDate,
         @ObjectModel.foreignKey.association: '_FinancialManagementArea'
         Item.FinancialManagementArea,
         @ObjectModel.foreignKey.association: '_ControllingArea'
         Item.ControllingArea,
         @ObjectModel.foreignKey.association: '_ChartOfAccounts'
         Item.ChartOfAccounts,
         @Analytics.internalName: #LOCAL
         @ObjectModel.foreignKey.association: '_FundType'
         _FundType.FundType,
         @Analytics.internalName: #LOCAL
         @ObjectModel.foreignKey.association: '_GranteeMgmtFundType'
         _GranteeMgmtFundType.GranteeMgmtFundType                                                                                    as GranteeMgmtFundType,
         @ObjectModel.foreignKey.association: '_PubSecBdgtAcctRevnExpnCode'
         @Analytics.internalName: #LOCAL
         _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode                                                                             as PubSecBdgtAcctRevnExpnCode,
         @Analytics.internalName: #LOCAL
         Item.PubSecBudgetCnsmpnTypeGroup,
         @Analytics.internalName: #LOCAL
         Item.PubSecBudgetCnsmpnAmtType,
         @ObjectModel.foreignKey.association: '_PubSecBudgetCnsmpnDate'
         @Analytics.internalName: #LOCAL
         Item.PubSecBudgetCnsmpnDate,
         @Analytics.internalName: #LOCAL
         Item.PubSecBudgetCnsmpnFsclPeriod,
         @ObjectModel.foreignKey.association: '_PubSecBdgtCnsmpnFsclYear'
         Item.PubSecBudgetCnsmpnFsclYear,
         Item.PubSecBudgetIsRelevant,
         @ObjectModel.foreignKey.association: '_BudgetingType'
         _BudgetingType.BudgetingType                                                                                                as BudgetingType,
         @ObjectModel.foreignKey.association: '_BudgetProcess'
         _BudgetProcess.BudgetProcess                                                                                                as BudgetProcess,
         @ObjectModel.foreignKey.association: '_BudgetDocWorkFlowStatus'
         _BudgetDocWorkFlowStatus.BudgetDocWorkFlowStatus                                                                            as BudgetDocWorkFlowStatus,
         Item.ActualPlanCode,




         @ObjectModel.foreignKey.association: '_CostCenterHierarchy'
         cast( Item.CostCenter as fis_cctr_hryid_42)                                                                                 as CostCenterHierarchy,
         @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
         _CostCenterHierarchy,
         @Analytics.internalName: #LOCAL
         @ObjectModel.foreignKey.association: '_FundHierarchy'
         cast(Item.Fund as fmis_hryid_fund )                                                                                         as FundHierarchy,
         @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
         _FundHierarchy,
         @Analytics.internalName: #LOCAL
         @ObjectModel.foreignKey.association: '_GrantHierarchy'
         cast (Item.GrantID as gm_hrynid_grant)                                                                                      as GrantHierarchyNode,

         @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
         _GrantHierarchy,
         @Analytics.internalName: #LOCAL
         @ObjectModel.foreignKey.association: '_FunctionalAreaHierarchy'
         cast( Item.FunctionalArea as fis_hryid_functionalarea_42)                                                                   as FunctionalAreaHierarchy,
         _FunctionalAreaHierarchy,
         @Analytics.internalName: #LOCAL
         @ObjectModel.foreignKey.association: '_BudgetAccountInChtAcctsHier'
         cast (Item.PubSecBudgetAccount as psm_hryid_budgetaccount  )                                                                as BudgetAccountHierarchy,
         @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
         _BudgetAccountInChtAcctsHier,


         // Define PSM specific amount fields to global currency
         @Aggregation.default: #SUM
         @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
         Item.PubSecExpnBdgtAmtInGlobalCrcy,
         @Aggregation.default: #SUM
         @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
         Item.PubSecRevnBdgtAmtInGlobalCrcy,
         @Aggregation.default: #SUM
         @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
         Item.PubSecExpnPaytAmtInGlobCrcy,
         @Aggregation.default: #SUM
         @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
         Item.PubSecExpnInvcAmtInGlobCrcy,
         @Aggregation.default: #SUM
         @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
         Item.PubSecExpnTransfAmtInGlobCrcy,
         @Aggregation.default: #SUM
         @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
         Item.PubSecRevnInvcAmtInGlobCrcy,
         @Aggregation.default: #SUM
         @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
         Item.PubSecRevnTransfAmtInGlobCrcy,
         @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
         @Aggregation.default: #SUM
         cast( $projection.pubsecexpninvcamtinglobcrcy + $projection.pubsecexpntransfamtinglobcrcy as psm_amt_invcd_trnsfd_grp_curr) as PubSecInvcdTrnsfdAmtInGlobCrcy,
         @Aggregation.default: #SUM
         @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
         @OData.v2.amount.noDecimalShift: true
         @EndUserText.label: 'Collection'
         (cast(Item.PubSecRevnCollAmtInGlobCrcy as abap.decfloat34) * -1)                                                            as PubSecRevnCollAmtInGlobCrcy,
         @Aggregation.default: #SUM
         @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
         @OData.v2.amount.noDecimalShift: true
         @EndUserText.label: 'Billed/Transferred'
         cast((Item.PubSecRevnInvcAmtInGlobCrcy + Item.PubSecRevnTransfAmtInGlobCrcy) as abap.decfloat34) * -1                       as PubSecBlldTrnsfdAmtInGlobCrcy,
         @Aggregation.default: #SUM
         @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
         Item.PubSecFcstOfRevnAmtInGC,
         @Aggregation.default: #SUM
         @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
         Item.PubSecExpnCmtmtAmtInGlobalCrcy,
         @Aggregation.default: #SUM
         @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
         Item.PubSecExpnPreCmtmtAmtInGC,



         @Analytics.internalName: #LOCAL
         @ObjectModel.foreignKey.association: '_PartnerCostCenter'
         Item.PartnerCostCenter,
         @Analytics.internalName: #LOCAL
         @ObjectModel.foreignKey.association: '_PartnerFunctionalArea'
         Item.PartnerFunctionalArea,
         @Analytics.internalName: #LOCAL
         @ObjectModel.foreignKey.association: '_PartnerBudgetPeriod'
         Item.PartnerBudgetPeriod,
         @Analytics.internalName: #LOCAL
         @ObjectModel.foreignKey.association: '_PartnerFund'
         Item.PartnerFund,
         @Analytics.internalName: #LOCAL
         @ObjectModel.foreignKey.association: '_PartnerGrant'
         Item.PartnerGrant,
         @Analytics.internalName: #LOCAL
         @ObjectModel.foreignKey.association: '_PartnerWBSElementExternalID'
         _PartnerWBSElementExternalID.WBSElementExternalID                                                                           as PartnerWBSElementExternalID,
         @ObjectModel.foreignKey.association: '_OriginCostCenter'
         Item.OriginCostCenter,
         Item.IsCommitment,

         @Analytics.internalName: #LOCAL
         cast(
           case
             when Item.ReferenceDocumentType = 'FPL04' or Item.ReferenceDocumentType = 'FPL00'
               then Item.ReferenceDocument
             else ''
           end as psm_bdgt_docnr preserving type )                                                                                   as BudgetDocument,
         @Analytics.internalName: #LOCAL
         cast(
           case
             when Item.SourceReferenceDocumentType = 'PORD'
               then Item.SourceReferenceDocument
             else ''
           end as vdm_purchaseorder preserving type )                                                                                as PurchaseOrder,

         @Analytics.internalName: #LOCAL
         cast(
           case
             when Item.SourceReferenceDocumentType = 'PREQ'
               then Item.SourceReferenceDocument
             else ''
           end as vdm_purchaserequisition preserving type )                                                                          as PurchaseRequisition,

         @Analytics.internalName: #LOCAL
         cast(
           case
             when Item.SourceReferenceDocumentType = 'FMRES'
               then Item.SourceReferenceDocument
             else ''
           end as fmis_earmarkedfundsdoc preserving type )                                                                           as EarmarkedFundsDocument,







         //Associations
         _PubSecBudgetAccount,
         _BudgetAccountInChtAccts,
         _FundType,
         _PubSecBdgtAcctRevnExpnCode,
         _BudgetDocWorkFlowStatus,
         _GranteeMgmtFundType,
         _PubSecBudgetAccountCoCode,
         Item._ChartOfAccounts,
         _WBSElementExternalID,
         _PartnerWBSElementExternalID,
         Item._BudgetPeriod,
         Item._BusinessTransactionType,
         Item._Grant,
         Item._Fund,
         Item._FunctionalArea,
         Item._ProfitCenter,
         Item._Segment,
         Item._SponsoredClass,
         Item._SponsoredProgram,
         Item._FiscalYear,
         Item._FiscalYearVariant,
         Item._ControllingArea,
         Item._FinancialManagementArea,
         Item._GlobalCurrency,
         Item._TransactionCurrency,
         Item._CompanyCodeCurrency,
         Item._CostCenter,
         Item._CompanyCode,
         _CashLedgerAccount,
         _CashLedgerCompanyCode,
         _BudgetingType,
         _BudgetProcess,
         Item._PartnerCostCenter,
         Item._PartnerFunctionalArea,
         _PartnerBudgetPeriod,
         _PartnerFund,
         _PartnerGrant,
         _PlanningCategory,
         //     _SourceLedger,
         _PubSecBudgetCnsmpnDate,
         _PubSecBdgtCnsmpnFsclPeriod,
         _PubSecBdgtCnsmpnFsclYear,
         Item._ReferenceDocumentType,
         Item._GLAccountInChartOfAccounts,
         Item._Ledger,
         Item._Grant._Sponsor,
         _SourceLedger,
         _OriginCostCenter,
         _JournalEntry,
         _GLAccountForPublicSector,
         _PubSecPlanningCategory
}
```
