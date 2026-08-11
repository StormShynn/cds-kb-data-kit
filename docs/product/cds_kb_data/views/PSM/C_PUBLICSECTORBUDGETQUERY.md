---
name: C_PUBLICSECTORBUDGETQUERY
description: "Budget Line Items Query"
app_component: PSM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBLICSECTORBUDGETQUERY')/$value
semantic_en: "Budget Line Items Query"
semantic_vi: "Budget Line Items Query — CDS view tiêu dùng dựa trên Budget Line Items Query."
keywords:
  - "budget"
  - "line"
  - "items"
  - "query"
  - "financial"
  - "planning"
  - "trans"
  - "sqnc"
  - "data"
  - "packet"
  - "entry"
  - "item"
  - "controlling"
  - "area"
  - "company"
tags:
  - PSM
  - budget
  - component:PSM
  - consumption-view
---
# C_PUBLICSECTORBUDGETQUERY

**Budget Line Items Query**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBLICSECTORBUDGETQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialPlanningReqTransSqnc` |  | |  |  | `NUMC(23)` | Financial Planning Request Transaction Sequence Number |
| `FinancialPlanningDataPacket` |  | |  |  | `NUMC(6)` | Financial Planning Data Packet Number |
| `FinancialPlanningEntryItem` |  | |  |  | `INT4(10)` | Financial Planning Entry Item |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `FinancialTransactionType` |  | |  |  | `CHAR(3)` | Transaction Type |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `localized` |  | |  | `_CostCenter._Text.CostCenterName as CostCenterName : localized` |  |  |
| `ProjectExternalID` |  | |  |  | `CHAR(24)` | Project External ID |
| `PartnerProjectExternalID` |  | |  |  | `CHAR(24)` | Partner Project External ID |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | WBS Element External ID |
| `PartnerWBSElementExternalID` |  | |  |  | `CHAR(24)` | Partner WBS Element External ID |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `CostCtrActivityType` |  | |  |  | `CHAR(6)` | Activity Type |
| `PartnerCompanyCode` |  | |  |  | `CHAR(4)` | Company Code of Partner |
| `PartnerBusinessArea` |  | |  |  | `CHAR(4)` | Partner Business Area |
| `PartnerSegment` |  | |  |  | `CHAR(10)` | Partner Segment for Segmental Reporting |
| `PartnerProfitCenter` |  | |  |  | `CHAR(10)` | Partner Profit Center |
| `PartnerCostCenter` |  | |  |  | `CHAR(10)` | Partner Cost Center |
| `PartnerFunctionalArea` |  | |  |  | `CHAR(16)` | Partner Functional Area |
| `PartnerCostCtrActivityType` |  | |  |  | `CHAR(6)` | Partner Cost Center Activity Type |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `ReferenceDocumentType` |  | |  |  | `CHAR(5)` | Reference Document Type |
| `ReferenceDocumentContext` |  | |  |  | `CHAR(10)` | Reference Document Context |
| `ReferenceDocument` |  | |  |  | `CHAR(10)` | Reference Doc. Number |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `AmountInTransactionCurrency` |  | |  | `curr_to_decfloat_amount(AmountInTransactionCurrency)` | `DECF(34)` |  |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `AmountInCompanyCodeCurrency` |  | |  | `curr_to_decfloat_amount(AmountInCompanyCodeCurrency)` | `DECF(34)` |  |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `AmountInGlobalCurrency` |  | |  | `curr_to_decfloat_amount(AmountInGlobalCurrency)` | `DECF(34)` |  |
| `CostCenterHierarchy` |  | |  | `{ selectionType : #HIERARCHY_NODE, multipleSelections : true,mandatory: false, hierarchyBinding : [{ type : #CONSTANT,value: 'A000' }, { type : #USER_INPUT, value:'P_CostCenterHierarchyName', variableSequence: 141 } ] } @AnalyticsDetails.query.displayHierarchy: #FILTER CostCenterHierarchy` | `CHAR(42)` | Cost Center Hierarchy |
| `FundHierarchy` |  | |  |  | `CHAR(42)` | Fund Hierarchy |
| `GrantHierarchy` |  | |  |  | `CHAR(42)` | Grant Hierarchy |
| `FunctionalAreaHierarchy` |  | |  |  | `CHAR(42)` | Functional Area Hierarchy |
| `BudgetAccountHierarchy` |  | |  |  | `CHAR(42)` | Budget Account Hierarchy |
| `PubSecExpnBdgtAmtInTransCrcy` |  | |  | `curr_to_decfloat_amount( PubSecExpnBdgtAmtInTransCrcy )` | `DECF(34)` |  |
| `PubSecExpnBdgtAmtInCoCodeCrcy` |  | |  | `curr_to_decfloat_amount( PubSecExpnBdgtAmtInCoCodeCrcy )` | `DECF(34)` |  |
| `PubSecExpnBdgtAmtInGlobalCrcy` |  | |  | `curr_to_decfloat_amount( PubSecExpnBdgtAmtInGlobalCrcy )` | `DECF(34)` |  |
| `PubSecRevnBdgtAmtInTransCrcy` |  | |  | `curr_to_decfloat_amount( PubSecRevnBdgtAmtInTransCrcy )` | `DECF(34)` |  |
| `PubSecRevnBdgtAmtInCoCodeCrcy` |  | |  | `curr_to_decfloat_amount( PubSecRevnBdgtAmtInCoCodeCrcy )` | `DECF(34)` |  |
| `PubSecRevnBdgtAmtInGlobalCrcy` |  | |  | `curr_to_decfloat_amount( PubSecRevnBdgtAmtInGlobalCrcy )` | `DECF(34)` |  |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `PlanningCategory` |  | |  |  | `CHAR(10)` | Plan Category |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `FinancialManagementArea` |  | |  |  | `CHAR(4)` | Financial Management Area |
| `Fund` |  | |  |  | `CHAR(10)` | Fund |
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `GranteeMgmtSponsor` |  | |  |  | `CHAR(10)` | Grant Sponsor |
| `SponsoredClass` |  | |  |  | `CHAR(20)` | Sponsored Class |
| `SponsoredProgram` |  | |  |  | `CHAR(20)` | Sponsored Program |
| `GteeMBudgetValidityNumber` |  | |  |  | `CHAR(3)` | Budget Validity Number |
| `PubSecBudgetAccount` |  | |  |  | `CHAR(10)` | Budget Account |
| `BudgetPeriod` |  | |  |  | `CHAR(10)` | Budget Period |
| `PubSecBdgtAcctRevnExpnCode` |  | |  |  | `CHAR(1)` | Expense or Revenue on Budget Account |
| `FundType` |  | |  |  | `CHAR(6)` | Fund Type |
| `GranteeMgmtFundType` |  | |  |  | `CHAR(1)` | Fund Type for Grants Management |
| `BudgetProcess` |  | |  |  | `CHAR(4)` | Budget Process Type |
| `BudgetingType` |  | |  |  | `CHAR(8)` | Budget Type (Subcategory) |
| `BudgetDocWorkFlowStatus` |  | |  |  | `CHAR(1)` | Workflow Status for a Budget Document |
| `PubSecIsConsumableBudget` |  | |  |  | `CHAR(1)` | Include Consumable Budget (AVC) |
| `BudgetDocument` |  | |  |  | `CHAR(10)` | Budget Document Number |
| `_DocumentStore` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBLICSECTORBUDGETQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBLICSECTORBUDGETQUERY')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_ALLOWED
@EndUserText.label: 'Budget Line Items Query'
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@ObjectModel.supportedCapabilities: [#ANALYTICAL_QUERY]
@VDM.viewType: #CONSUMPTION
//@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
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

define transient view entity C_PublicSectorBudgetQuery
  provider contract analytical_query
  with parameters
    @Consumption.hidden: true
    @Semantics.businessDate.at: true
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate      : vdm_v_key_date,
    @Consumption.hidden: true
    @Environment.systemField: #USER
    P_BusinessUser : syuname

  as projection on I_PubSecBdgtLineItemCube
{
  FinancialPlanningReqTransSqnc,
  FinancialPlanningDataPacket,
  FinancialPlanningEntryItem,
  @AnalyticsDetails.query.axis: #FREE
  @UI.textArrangement: #TEXT_LAST
  ControllingArea,
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
  @AnalyticsDetails.query.hidden : true
  @AnalyticsDetails.query.axis: #FREE
  Ledger,
  @AnalyticsDetails.query.axis: #FREE
  @UI.textArrangement: #TEXT_LAST
  GLAccount,
  @AnalyticsDetails.query.axis: #FREE
  ChartOfAccounts,
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: true }
  @Consumption.derivation: { lookupEntity: 'I_CalendarDate',
        resultElement: 'CalendarYear', binding: [
        { targetElement : 'CalendarDate' , type : #PARAMETER, value : 'P_KeyDate' } ]
       }
  @AnalyticsDetails.query.variableSequence: 40
  @AnalyticsDetails.query.axis: #FREE
  FiscalYear,
  @Consumption.hidden: true
  @AnalyticsDetails.query.axis: #FREE
  LedgerFiscalYear,
  @AnalyticsDetails.query.axis: #FREE
  BusinessTransactionType,
  @AnalyticsDetails.query.axis: #FREE
  FinancialTransactionType,
  @AnalyticsDetails.query.axis: #FREE
  BusinessArea,
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

  @AnalyticsDetails.query.axis: #FREE
  ProjectExternalID,
  @AnalyticsDetails.query.axis: #FREE
  PartnerProjectExternalID,
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
  CostCtrActivityType,
  @AnalyticsDetails.query.axis: #FREE
  PartnerCompanyCode,
  @AnalyticsDetails.query.axis: #FREE
  PartnerBusinessArea,
  @AnalyticsDetails.query.axis: #FREE
  PartnerSegment,
  @AnalyticsDetails.query.axis: #FREE
  PartnerProfitCenter,
  @AnalyticsDetails.query.axis: #FREE
  PartnerCostCenter,
  @AnalyticsDetails.query.axis: #FREE
  PartnerFunctionalArea,
  @AnalyticsDetails.query.axis: #FREE
  PartnerCostCtrActivityType,
  @AnalyticsDetails.query.axis: #FREE
  OrderID,
  @AnalyticsDetails.query.axis: #FREE
  ReferenceDocumentType,
  @AnalyticsDetails.query.axis: #FREE
  ReferenceDocumentContext,
  @AnalyticsDetails.query.axis: #FREE
  ReferenceDocument,

  ///////////////////////////////////////////////////////////////////////
  // Measures - Amounts
  ///////////////////////////////////////////////////////////////////////

  @AnalyticsDetails.query.axis: #FREE
  TransactionCurrency,
  @EndUserText.label: 'Amount in Transaction Currency'
  @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
  //@AnalyticsDetails.query.hidden : true
  @Aggregation.default: #SUM
  curr_to_decfloat_amount(AmountInTransactionCurrency) as AmountInTransactionCurrency,
  @AnalyticsDetails.query.axis: #FREE
  CompanyCodeCurrency,
  @EndUserText.label: 'Amount in Company Code Currency'
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  //@AnalyticsDetails.query.hidden : true
  @Aggregation.default: #SUM
  curr_to_decfloat_amount(AmountInCompanyCodeCurrency) as AmountInCompanyCodeCurrency,
  @AnalyticsDetails.query.axis: #FREE
  GlobalCurrency,
  @EndUserText.label: 'Amount in Global Currency'
  @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
  //@AnalyticsDetails.query.hidden : true
  @Aggregation.default: #SUM
  curr_to_decfloat_amount(AmountInGlobalCurrency)      as AmountInGlobalCurrency,


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
  @EndUserText.label: 'Fund Hierarchy'
  @AnalyticsDetails.query.displayHierarchy: #FILTER
  // @AnalyticsDetails.query.axis: #ROWS
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
                        hierarchyBinding : [{type : #USER_INPUT, value : 'P_FuncAreaHierarchyName', variableSequence: 131} ] }
  @EndUserText.label: 'Functional Area Hierarchy'
  @AnalyticsDetails.query.displayHierarchy: #FILTER
  //@AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #SHOW
  //FndsMgmtRptgFctArForHierarchy,
  FunctionalAreaHierarchy,
  @Consumption.filter: {  selectionType: #HIERARCHY_NODE, multipleSelections: true, mandatory: false,
                       hierarchyBinding : [{type : #USER_INPUT, value : 'P_BudActHierarchyName', variableSequence: 121} ] }

  @AnalyticsDetails.query.displayHierarchy: #FILTER
  // @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #SHOW
  BudgetAccountHierarchy,

  // Add the PSM amounts
  @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
  @AnalyticsDetails.query.hidden : true
  @Aggregation.default: #SUM
  curr_to_decfloat_amount( PubSecExpnBdgtAmtInTransCrcy ) as PubSecExpnBdgtAmtInTransCrcy,
  @EndUserText.label: 'Budget Expense Amt in Company Code Crcy'
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @AnalyticsDetails.query.hidden : true
  @Aggregation.default: #SUM
  curr_to_decfloat_amount( PubSecExpnBdgtAmtInCoCodeCrcy ) as PubSecExpnBdgtAmtInCoCodeCrcy,
  @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #SUM
  curr_to_decfloat_amount( PubSecExpnBdgtAmtInGlobalCrcy ) as PubSecExpnBdgtAmtInGlobalCrcy,
  @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
  @AnalyticsDetails.query.hidden : true
  @Aggregation.default: #SUM
  curr_to_decfloat_amount( PubSecRevnBdgtAmtInTransCrcy ) as PubSecRevnBdgtAmtInTransCrcy,
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @AnalyticsDetails.query.hidden : true
  @Aggregation.default: #SUM
  curr_to_decfloat_amount( PubSecRevnBdgtAmtInCoCodeCrcy ) as PubSecRevnBdgtAmtInCoCodeCrcy,
  @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
  @AnalyticsDetails.query.hidden : true
  @Aggregation.default: #SUM
  curr_to_decfloat_amount( PubSecRevnBdgtAmtInGlobalCrcy ) as PubSecRevnBdgtAmtInGlobalCrcy,
  @AnalyticsDetails.query.axis: #FREE
  FiscalYearVariant,
  @AnalyticsDetails.query.axis: #FREE
  FiscalPeriod,
  @AnalyticsDetails.query.axis: #FREE
  FiscalYearPeriod,
  @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: false, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 60
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  PostingDate,
  @AnalyticsDetails.query.axis: #FREE
  Plant,
  @AnalyticsDetails.query.axis: #FREE
  Product,
  @AnalyticsDetails.query.axis: #FREE
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 50
  PlanningCategory,
  @AnalyticsDetails.query.axis: #FREE
  SoldProduct,
  @AnalyticsDetails.query.axis: #FREE
  CustomerGroup,
  @AnalyticsDetails.query.axis: #FREE
  FinancialManagementArea,
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 100
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.keyDisplay:#NOT_COMPOUND
  @UI.textArrangement: #TEXT_LAST
  Fund,
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
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 120
  @AnalyticsDetails.query.axis: #FREE
  @UI.textArrangement: #TEXT_LAST
  PubSecBudgetAccount,
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 110
  @AnalyticsDetails.query.axis: #FREE
  BudgetPeriod,
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

  // PSM: Additional detail
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 180
  @AnalyticsDetails.query.axis: #FREE
  BudgetingType,
  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 190
  @AnalyticsDetails.query.axis: #FREE
  BudgetDocWorkFlowStatus,
  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: false, defaultValue: 'X' }
  @AnalyticsDetails.query.variableSequence: 200
  @AnalyticsDetails.query.axis: #FREE
  PubSecIsConsumableBudget,
  @AnalyticsDetails.query.axis: #FREE
  BudgetDocument,
  
  _DocumentStore


}
```
