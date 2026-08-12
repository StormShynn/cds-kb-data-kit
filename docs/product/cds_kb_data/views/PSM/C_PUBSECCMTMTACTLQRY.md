---
name: C_PUBSECCMTMTACTLQRY
description: "Commitment and Actual Items Query"
app_component: PSM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECCMTMTACTLQRY')/$value
semantic_en: "Commitment and Actual Items Query"
semantic_vi: "Commitment and Actual Items Query — CDS view tiêu dùng dựa trên Commitment and Actual Items Query."
keywords:
  - "commitment"
  - "and"
  - "actual"
  - "items"
  - "query"
  - "ledger"
  - "source"
  - "company"
  - "code"
  - "fiscal"
  - "year"
  - "accounting"
  - "document"
tags:
  - PSM
  - component:PSM
  - consumption-view
---
# C_PUBSECCMTMTACTLQRY

**Commitment and Actual Items Query**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECCMTMTACTLQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `SourceLedger` |  | |  |  | `CHAR(2)` | Source Ledger |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `IsCommitment` |  | |  |  | `CHAR(1)` | Indicator: Is Commitment |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `CostCenterHierarchy` |  | |  | `{ selectionType : #HIERARCHY_NODE, multipleSelections : true,mandatory: false, hierarchyBinding : [{ type : #CONSTANT,value: 'A000' }, { type : #USER_INPUT, value:'P_CostCenterHierarchyName', variableSequence: 35 } ] } @AnalyticsDetails.query.displayHierarchy: #FILTER CostCenterHierarchy` | `CHAR(42)` | Cost Center Hierarchy |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `PartnerCostCenter` |  | |  |  | `CHAR(10)` | Partner Cost Center |
| `PartnerFunctionalArea` |  | |  |  | `CHAR(16)` | Partner Functional Area |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `AmountInTransactionCurrency` |  | |  | `curr_to_decfloat_amount(AmountInTransactionCurrency)` | `DECF(34)` |  |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `AmountInCompanyCodeCurrency` |  | |  | `curr_to_decfloat_amount(AmountInCompanyCodeCurrency)` | `DECF(34)` |  |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `AmountInGlobalCurrency` |  | |  | `curr_to_decfloat_amount(AmountInGlobalCurrency)` | `DECF(34)` |  |
| `FundHierarchy` |  | |  |  | `CHAR(42)` | Fund Hierarchy |
| `GrantHierarchy` |  | |  |  | `CHAR(42)` | Grant Hierarchy |
| `FunctionalAreaHierarchy` |  | |  |  | `CHAR(42)` | Functional Area Hierarchy |
| `BudgetAccountHierarchy` |  | |  |  | `CHAR(42)` | Budget Account Hierarchy |
| `PubSecExpnCmtmtAmtInCoCodeCrcy` |  | |  | `curr_to_decfloat_amount( PubSecExpnCmtmtAmtInCoCodeCrcy )` | `DECF(34)` |  |
| `PubSecExpnActlAmtInCoCodeCrcy` |  | |  | `curr_to_decfloat_amount( PubSecExpnActlAmtInCoCodeCrcy )` | `DECF(34)` |  |
| `PubSecRevnCmtmtAmtInCoCodeCrcy` |  | |  | `curr_to_decfloat_amount( PubSecRevnCmtmtAmtInCoCodeCrcy )` | `DECF(34)` |  |
| `PubSecRevnActlAmtInCoCodeCrcy` |  | |  | `curr_to_decfloat_amount( PubSecRevnActlAmtInCoCodeCrcy )` | `DECF(34)` |  |
| `PubSecExpnCmtmtAmtInGlobalCrcy` |  | |  | `curr_to_decfloat_amount( PubSecExpnCmtmtAmtInGlobalCrcy )` | `DECF(34)` |  |
| `PubSecExpnActlAmtInGlobalCrcy` |  | |  | `curr_to_decfloat_amount( PubSecExpnActlAmtInGlobalCrcy )` | `DECF(34)` |  |
| `PubSecRevnCmtmtAmtInGlobalCrcy` |  | |  | `curr_to_decfloat_amount( PubSecRevnCmtmtAmtInGlobalCrcy )` | `DECF(34)` |  |
| `PubSecRevnActlAmtInGlobalCrcy` |  | |  | `curr_to_decfloat_amount( PubSecRevnActlAmtInGlobalCrcy )` | `DECF(34)` |  |
| `DebitCreditCode` |  | |  |  | `CHAR(1)` | Debit/Credit Code |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `DocumentDate` |  | |  |  | `DATS(8)` | Journal Entry Date |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
| `AccountingDocumentItem` |  | |  |  | `NUMC(3)` | Journal Entry Posting View Item |
| `PostingKey` |  | |  |  | `CHAR(2)` | Posting Key |
| `CreationDate` |  | |  |  | `DATS(8)` | Creation Date |
| `PurchaseOrder` |  | |  |  | `CHAR(10)` | Purchase Order Number |
| `DocumentItemText` |  | |  |  | `CHAR(50)` | Item Text |
| `MasterFixedAsset` |  | |  |  | `CHAR(12)` | Fixed Asset (Main Asset Number) |
| `FixedAsset` |  | |  |  | `CHAR(4)` | Asset Subnumber |
| `OriginCostCenter` |  | |  |  | `CHAR(10)` | Origin Cost Center |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | WBS Element External ID |
| `PartnerWBSElementExternalID` |  | |  |  | `CHAR(24)` | Partner WBS Element External ID |
| `Fund` |  | |  |  | `CHAR(10)` | Fund |
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `GranteeMgmtSponsor` |  | |  |  | `CHAR(10)` | Grant Sponsor |
| `BudgetPeriod` |  | |  |  | `CHAR(10)` | Budget Period |
| `PartnerFund` |  | |  |  | `CHAR(10)` | Partner Fund |
| `PartnerGrant` |  | |  |  | `CHAR(20)` | Partner Grant |
| `PartnerBudgetPeriod` |  | |  |  | `CHAR(10)` | FM: Partner Budget Period |
| `CashLedgerAccount` |  | |  |  | `CHAR(10)` | Cash Origin Account |
| `PubSecBudgetAccount` |  | |  |  | `CHAR(10)` | Budget Account |
| `PubSecBudgetCnsmpnDate` |  | |  |  | `DATS(8)` | Budget Consumption Date |
| `PubSecBudgetCnsmpnFsclPeriod` |  | |  |  | `NUMC(3)` | CC Fiscal Period for Budget Consumption Date |
| `PubSecBudgetCnsmpnFsclYear` |  | |  |  | `NUMC(4)` | CC Fiscal Year for Budget Consumption Date |
| `PubSecBudgetCnsmpnType` |  | |  |  | `CHAR(2)` | Budget Consumption Type |
| `PubSecBudgetCnsmpnAmtType` |  | |  |  | `CHAR(4)` | Budget Consumption Amount Type |
| `PubSecBudgetCnsmpnTypeGroup` |  | |  |  | `CHAR(2)` | Budget Consumption Type Group |
| `PubSecBudgetIsRelevant` |  | |  |  | `CHAR(1)` | Budget-Relevant Indicator |
| `PubSecBdgtAcctRevnExpnCode` |  | |  |  | `CHAR(1)` | Expense or Revenue on Budget Account |
| `FundType` |  | |  |  | `CHAR(6)` | Fund Type |
| `SponsoredClass` |  | |  |  | `CHAR(20)` | Sponsored Class |
| `SponsoredProgram` |  | |  |  | `CHAR(20)` | Sponsored Program |
| `GteeMBudgetValidityNumber` |  | |  |  | `CHAR(3)` | Budget Validity Number |
| `PurchaseRequisition` |  | |  |  | `CHAR(10)` | Purchase Requisition Number |
| `EarmarkedFundsDocument` |  | |  |  | `CHAR(10)` | Document Number for Earmarked Funds |
| `_DocumentStore` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECCMTMTACTLQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECCMTMTACTLQRY')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_ALLOWED
@EndUserText.label: 'Commitment and Actual Items Query'
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

define transient view entity C_PubSecCmtmtActlQry
  provider contract analytical_query
  with parameters
    @Consumption.hidden: true
    @Semantics.businessDate.at: true
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate      : vdm_v_key_date,
    @Consumption.hidden: true
    @Environment.systemField: #USER
    P_BusinessUser : syuname
  as projection on I_PubSecCmtmtActlItemCube
{
  @AnalyticsDetails.query.axis: #FREE
  Ledger,
  SourceLedger,
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
  @AnalyticsDetails.query.variableSequence: 30
  @AnalyticsDetails.query.axis: #FREE
  FiscalYear,
  @AnalyticsDetails.query.axis: #FREE
  AccountingDocument,
  @AnalyticsDetails.query.axis: #FREE
  LedgerGLLineItem,
  @Consumption.hidden: true
  LedgerFiscalYear,
  @AnalyticsDetails.query.axis: #FREE
  BusinessTransactionType,

  // PSM: Additional detail
  @AnalyticsDetails.query.axis: #FREE
  IsCommitment,
  @AnalyticsDetails.query.axis: #FREE
  @UI.textArrangement: #TEXT_LAST
  GLAccount,

  @Consumption.filter :
  { selectionType : #HIERARCHY_NODE, multipleSelections : true,mandatory: false,
    hierarchyBinding :
    [{ type : #CONSTANT,value: 'A000' },
    { type : #USER_INPUT, value:'P_CostCenterHierarchyName', variableSequence: 35 }


    ] }
  @AnalyticsDetails.query.displayHierarchy: #FILTER
  CostCenterHierarchy,

  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 140
  @AnalyticsDetails.query.axis: #FREE
  @UI.textArrangement: #TEXT_LAST
  CostCenter,
  @AnalyticsDetails.query.axis: #FREE
  @UI.textArrangement: #TEXT_LAST
  ProfitCenter,
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



  ///////////////////////////////////////////////////////////////////////
  // Measures - Amounts
  ///////////////////////////////////////////////////////////////////////
  //@Semantics.currencyCode: true
  @AnalyticsDetails.query.axis: #FREE
  TransactionCurrency,
  @Semantics.amount.currencyCode: 'TransactionCurrency'
  @AnalyticsDetails.query.hidden : true
  @Aggregation.default: #SUM
  curr_to_decfloat_amount(AmountInTransactionCurrency) as AmountInTransactionCurrency,
  //@Semantics.currencyCode: true
  @AnalyticsDetails.query.axis: #FREE
  CompanyCodeCurrency,
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @AnalyticsDetails.query.hidden : true
  @Aggregation.default: #SUM

  curr_to_decfloat_amount(AmountInCompanyCodeCurrency) as AmountInCompanyCodeCurrency,
  //@Semantics.currencyCode: true
  @AnalyticsDetails.query.axis: #FREE
  GlobalCurrency,
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @AnalyticsDetails.query.hidden : true
  @Aggregation.default: #SUM
  curr_to_decfloat_amount(AmountInGlobalCurrency)      as AmountInGlobalCurrency,


  @Consumption.filter: {  selectionType: #HIERARCHY_NODE, multipleSelections: true, mandatory: false,
                      hierarchyBinding : [{type : #USER_INPUT, value : 'P_FundHierarchyName', variableSequence: 101} ] }
  // @EndUserText.label: 'Fund Hierarchy Node'
  @AnalyticsDetails.query.displayHierarchy: #FILTER
  //@AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #SHOW
  FundHierarchy,
  @Consumption.filter: {  selectionType: #HIERARCHY_NODE, multipleSelections: true, mandatory: false,
                        hierarchyBinding : [{type : #USER_INPUT, value : 'P_GrantHierarchyName', variableSequence: 161} ] }
  // @EndUserText.label: 'Grant Hierarchy Node'
  @AnalyticsDetails.query.displayHierarchy: #FILTER
  //@AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #SHOW
  GrantHierarchy,
  @Consumption.filter: {  selectionType: #HIERARCHY_NODE, multipleSelections: true, mandatory: false,
                        hierarchyBinding : [{type : #USER_INPUT, value : 'P_FuncAreaHierarchyName', variableSequence: 101} ] }
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
  curr_to_decfloat_amount( PubSecRevnCmtmtAmtInCoCodeCrcy ) as PubSecRevnCmtmtAmtInCoCodeCrcy,
  @Aggregation.default: #SUM
  @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
  curr_to_decfloat_amount( PubSecRevnActlAmtInCoCodeCrcy ) as PubSecRevnActlAmtInCoCodeCrcy,


  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #SUM
  curr_to_decfloat_amount( PubSecExpnCmtmtAmtInGlobalCrcy ) as PubSecExpnCmtmtAmtInGlobalCrcy,
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #SUM
  curr_to_decfloat_amount( PubSecExpnActlAmtInGlobalCrcy ) as PubSecExpnActlAmtInGlobalCrcy,
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @AnalyticsDetails.query.hidden : true
  @Aggregation.default: #SUM
  curr_to_decfloat_amount( PubSecRevnCmtmtAmtInGlobalCrcy ) as PubSecRevnCmtmtAmtInGlobalCrcy,
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @AnalyticsDetails.query.hidden : true
  @Aggregation.default: #SUM
  curr_to_decfloat_amount( PubSecRevnActlAmtInGlobalCrcy ) as PubSecRevnActlAmtInGlobalCrcy,

  @AnalyticsDetails.query.axis: #FREE
  DebitCreditCode,
  @AnalyticsDetails.query.axis: #FREE
  PostingDate,
  @AnalyticsDetails.query.axis: #FREE
  DocumentDate,
  @AnalyticsDetails.query.axis: #FREE
  AccountingDocumentType,
  @AnalyticsDetails.query.axis: #FREE
  AccountingDocumentItem,
  @AnalyticsDetails.query.axis: #FREE
  PostingKey,
  @AnalyticsDetails.query.axis: #FREE
  CreationDate,
  @AnalyticsDetails.query.axis: #FREE
  PurchaseOrder,
  @AnalyticsDetails.query.axis: #FREE
  DocumentItemText,
  @AnalyticsDetails.query.axis: #FREE
  MasterFixedAsset,
  @AnalyticsDetails.query.axis: #FREE
  FixedAsset,
  @AnalyticsDetails.query.axis: #FREE
  OriginCostCenter,
  @AnalyticsDetails.query.axis: #FREE
  OrderID,
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 150
  @AnalyticsDetails.query.axis: #FREE
  @UI.textArrangement: #TEXT_LAST
  WBSElementExternalID,
  @AnalyticsDetails.query.axis: #FREE
  PartnerWBSElementExternalID,
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 100
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #SHOW
  @UI.textArrangement: #TEXT_LAST
  Fund,

  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 160
  @AnalyticsDetails.query.axis: #FREE
  GrantID,
  @AnalyticsDetails.query.axis: #FREE
  GranteeMgmtSponsor,
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 110
  @AnalyticsDetails.query.axis: #FREE
  BudgetPeriod,
  @AnalyticsDetails.query.axis: #FREE
  PartnerFund,
  @AnalyticsDetails.query.axis: #FREE
  PartnerGrant,
  @AnalyticsDetails.query.axis: #FREE
  PartnerBudgetPeriod,

  @AnalyticsDetails.query.axis: #FREE
  CashLedgerAccount,

  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 120
  @AnalyticsDetails.query.axis: #FREE
  @UI.textArrangement: #TEXT_LAST
  PubSecBudgetAccount,

  @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: false, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 60
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  PubSecBudgetCnsmpnDate,
  @AnalyticsDetails.query.axis: #FREE
  PubSecBudgetCnsmpnFsclPeriod,
  @AnalyticsDetails.query.axis: #FREE
  PubSecBudgetCnsmpnFsclYear,
  @AnalyticsDetails.query.axis: #FREE
  PubSecBudgetCnsmpnType,
  @AnalyticsDetails.query.axis: #FREE
  PubSecBudgetCnsmpnAmtType,
  @AnalyticsDetails.query.axis: #FREE
  PubSecBudgetCnsmpnTypeGroup,
  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: false, defaultValue: 'X' }
  @AnalyticsDetails.query.axis: #FREE
  PubSecBudgetIsRelevant,
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 201
  @AnalyticsDetails.query.axis: #FREE
  PubSecBdgtAcctRevnExpnCode,
  @AnalyticsDetails.query.axis: #FREE
  FundType,

  @AnalyticsDetails.query.axis: #FREE
  SponsoredClass,
  @AnalyticsDetails.query.axis: #FREE
  SponsoredProgram,
  @AnalyticsDetails.query.axis: #FREE
  GteeMBudgetValidityNumber,

  @AnalyticsDetails.query.axis: #FREE
  PurchaseRequisition,
  @AnalyticsDetails.query.axis: #FREE
  EarmarkedFundsDocument,
  
  _DocumentStore

}
```
