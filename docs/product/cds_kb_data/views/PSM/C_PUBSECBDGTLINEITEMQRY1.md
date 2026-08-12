---
name: C_PUBSECBDGTLINEITEMQRY1
description: "Budget Line Items Query"
app_component: PSM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECBDGTLINEITEMQRY1')/$value
semantic_en: "Budget Line Items Query"
semantic_vi: "Budget Line Items Query — CDS view tiêu dùng dựa trên I_PubSecBdgtLineItemCube."
keywords:
  - "budget"
  - "line"
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
# C_PUBSECBDGTLINEITEMQRY1

**Budget Line Items Query**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECBDGTLINEITEMQRY1')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `Fund` |  | |  |  | `CHAR(10)` | Fund |
| `FundHierarchy` |  | |  |  | `CHAR(42)` | Fund Hierarchy |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `FinancialTransactionType` |  | |  |  | `CHAR(3)` | Transaction Type |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `FunctionalAreaHierarchy` |  | |  |  | `CHAR(42)` | Functional Area Hierarchy |
| `BudgetAccountHierarchy` |  | |  |  | `CHAR(42)` | Budget Account Hierarchy |
| `CostCenterHierarchy` |  | |  | `{ selectionType : #HIERARCHY_NODE, multipleSelections : true,mandatory: false, hierarchyBinding : [{ type : #CONSTANT,value: 'A000' }, { type : #USER_INPUT, value:'P_CostCenterHierarchyName', variableSequence: 141 } ] } @AnalyticsDetails.query.displayHierarchy: #FILTER CostCenterHierarchy` | `CHAR(42)` | Cost Center Hierarchy |
| `BudgetingType` |  | |  |  | `CHAR(8)` | Budget Type (Subcategory) |
| `BudgetProcess` |  | |  |  | `CHAR(4)` | Budget Process Type |
| `PlanningCategory` |  | |  |  | `CHAR(10)` | Plan Category |
| `PubSecBdgtAcctRevnExpnCode` |  | |  |  | `CHAR(1)` | Expense or Revenue on Budget Account |
| `BudgetDocWorkFlowStatus` |  | |  |  | `CHAR(1)` | Workflow Status for a Budget Document |
| `PubSecIsConsumableBudget` |  | |  |  | `CHAR(1)` | Include Consumable Budget (AVC) |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `AmountInTransactionCurrency` |  | |  |  | `CURR(23)` | Amount in Transaction Currency |
| `AmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `PubSecExpnBdgtAmtInCoCodeCrcy` |  | |  |  | `CURR(25)` | Budget Expense Amount in Company Code Currency |
| `PubSecExpnBdgtAmtInTransCrcy` |  | |  |  | `CURR(25)` | Budget Expense Amount in Transaction Currency |
| `PubSecExpnBdgtAmtInGlobalCrcy` |  | |  |  | `CURR(25)` | Budget Expense Amount in Global Currency |
| `PubSecRevnBdgtAmtInCoCodeCrcy` |  | |  |  | `CURR(25)` | Budget Revenue Amount in Company Code Currency |
| `PubSecRevnBdgtAmtInTransCrcy` |  | |  |  | `CURR(25)` | Budget Revenue Amount in Transaction Currency |
| `PubSecRevnBdgtAmtInGlobalCrcy` |  | |  |  | `CURR(25)` | Budget Revenue Amount in Global Currency |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `CostCtrActivityType` |  | |  |  | `CHAR(6)` | Activity Type |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element Internal ID |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | WBS Element External ID |
| `ProjectInternalID` |  | |  |  | `NUMC(8)` | Project Internal ID |
| `ProjectExternalID` |  | |  |  | `CHAR(24)` | Project External ID |
| `PartnerCostCtrActivityType` |  | |  |  | `CHAR(6)` | Partner Cost Center Activity Type |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `BudgetPeriod` |  | |  |  | `CHAR(10)` | Budget Period |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `FinancialManagementArea` |  | |  |  | `CHAR(4)` | Financial Management Area |
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `GrantHierarchy` |  | |  |  | `CHAR(42)` | Grant Hierarchy |
| `GranteeMgmtSponsor` |  | |  |  | `CHAR(10)` | Grant Sponsor |
| `PubSecBudgetAccount` |  | |  |  | `CHAR(10)` | Budget Account |
| `FundType` |  | |  |  | `CHAR(6)` | Fund Type |
| `GranteeMgmtFundType` |  | |  |  | `CHAR(1)` | Fund Type for Grants Management |
| `SponsoredClass` |  | |  |  | `CHAR(20)` | Sponsored Class |
| `SponsoredProgram` |  | |  |  | `CHAR(20)` | Sponsored Program |
| `GteeMBudgetValidityNumber` |  | |  |  | `CHAR(3)` | Budget Validity Number |
| `BudgetDocument` |  | |  |  | `CHAR(10)` | Budget Document Number |
| `PartnerBusinessArea` |  | |  |  | `CHAR(4)` | Partner Business Area |
| `PartnerCompanyCode` |  | |  |  | `CHAR(4)` | Company Code of Partner |
| `PartnerCostCenter` |  | |  |  | `CHAR(10)` | Partner Cost Center |
| `PartnerFunctionalArea` |  | |  |  | `CHAR(16)` | Partner Functional Area |
| `PartnerProfitCenter` |  | |  |  | `CHAR(10)` | Partner Profit Center |
| `PartnerSegment` |  | |  |  | `CHAR(10)` | Partner Segment for Segmental Reporting |
| `PartnerWBSElementInternalID` |  | |  |  | `NUMC(8)` | Partner WBS Element Internal ID |
| `PartnerWBSElementExternalID` |  | |  |  | `CHAR(24)` | Partner WBS Element External ID |
| `PartnerProjectInternalID` |  | |  |  | `NUMC(8)` | Partner Project Internal ID |
| `PartnerProjectExternalID` |  | |  |  | `CHAR(24)` | Partner Project External ID |
| `ReferenceDocument` |  | |  |  | `CHAR(10)` | Reference Doc. Number |
| `ReferenceDocumentContext` |  | |  |  | `CHAR(10)` | Reference Document Context |
| `ReferenceDocumentType` |  | |  |  | `CHAR(5)` | Reference Document Type |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECBDGTLINEITEMQRY1')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECBDGTLINEITEMQRY1')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CPSMS4CBDLNAQ1'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Budget Line Items Query'

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

define view C_PubSecBdgtLineItemQry1 
  with parameters
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_LANGUAGE
    P_Language : sylangu,
    @Consumption.hidden: true
    @Semantics.businessDate.at: true
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate  : vdm_v_key_date,
    @Consumption.hidden: true
    @Environment.systemField: #USER
    P_BusinessUser: syuname
    
  as select from I_PubSecBdgtLineItemCube as Cube
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

  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: true }
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

  @AnalyticsDetails.query.axis: #FREE
  Cube.FinancialTransactionType,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  Cube.Segment,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  Cube.ProfitCenter,

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

// PSM: Additional detail
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 180
  @AnalyticsDetails.query.axis: #FREE
  Cube.BudgetingType,
  @AnalyticsDetails.query.axis: #FREE
  Cube.BudgetProcess,
  @AnalyticsDetails.query.axis: #FREE
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: false, mandatory: true }
  @AnalyticsDetails.query.variableSequence: 50
  Cube.PlanningCategory,  
  @AnalyticsDetails.query.axis: #FREE
  Cube.PubSecBdgtAcctRevnExpnCode,
  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false }       
  @AnalyticsDetails.query.variableSequence: 190
  @AnalyticsDetails.query.axis: #FREE
  Cube.BudgetDocWorkFlowStatus,
  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: false, defaultValue: 'X' }       
  @AnalyticsDetails.query.variableSequence: 200
  @AnalyticsDetails.query.axis: #FREE
  Cube.PubSecIsConsumableBudget,

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
  
  // Add the PSM amounts
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @AnalyticsDetails.query.hidden : true
  @DefaultAggregation: #SUM
  Cube.PubSecExpnBdgtAmtInCoCodeCrcy,
  @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
  @AnalyticsDetails.query.hidden : true
  @DefaultAggregation: #SUM
  Cube.PubSecExpnBdgtAmtInTransCrcy,
  @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  Cube.PubSecExpnBdgtAmtInGlobalCrcy,
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @AnalyticsDetails.query.hidden : true
  @DefaultAggregation: #SUM
  Cube.PubSecRevnBdgtAmtInCoCodeCrcy,
  @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
  @AnalyticsDetails.query.hidden : true
  @DefaultAggregation: #SUM
  Cube.PubSecRevnBdgtAmtInTransCrcy,
  @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
  @AnalyticsDetails.query.hidden : true
  @DefaultAggregation: #SUM
  Cube.PubSecRevnBdgtAmtInGlobalCrcy,

  ///////////////////////////////////////////////////////////////////////
  // Measures - Quantities
  ///////////////////////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////////////////////
  // Dimensions
  ///////////////////////////////////////////////////////////////////////

  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 140
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  Cube.CostCenter,
  _CostCenter[1:ValidityEndDate   >= $parameters.P_KeyDate and 
                ValidityStartDate <= $parameters.P_KeyDate]._Text[1:Language = $parameters.P_Language].CostCenterName,

  @AnalyticsDetails.query.axis: #FREE
  Cube.ChartOfAccounts,
  @AnalyticsDetails.query.axis: #FREE    
  Cube.Product, 
  @AnalyticsDetails.query.axis: #FREE
  Cube.Plant,
  @AnalyticsDetails.query.axis: #FREE
  Cube.CostCtrActivityType,
  @AnalyticsDetails.query.axis: #FREE
  Cube.OrderID,
  @Consumption.hidden: true
  @API.element.releaseState: #DEPRECATED
  @API.element.successor:   'WBSElementExternalID'
  @VDM.lifecycle.status:    #DEPRECATED
  @VDM.lifecycle.successor: 'WBSElementExternalID'
  Cube.WBSElementInternalID,
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 150
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  Cube.WBSElementExternalID,  
  @Consumption.hidden: true
  @API.element.releaseState: #DEPRECATED
  @API.element.successor:   'ProjectExternalID'
  @VDM.lifecycle.status:    #DEPRECATED
  @VDM.lifecycle.successor: 'ProjectExternalID'
  Cube.ProjectInternalID,
  @AnalyticsDetails.query.axis: #FREE
  Cube.ProjectExternalID,
  @AnalyticsDetails.query.axis: #FREE
  Cube.PartnerCostCtrActivityType,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  Cube.ControllingArea,
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
  @AnalyticsDetails.query.axis: #FREE
  Cube.CustomerGroup,
  @AnalyticsDetails.query.axis: #FREE
  Cube.FinancialManagementArea,
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 160
  @AnalyticsDetails.query.axis: #FREE
  Cube.GrantID,
   @Consumption.filter: {  selectionType: #HIERARCHY_NODE, multipleSelections: true, mandatory: false,
                        hierarchyBinding : [{type : #USER_INPUT, value : 'P_GrantHierarchyName', variableSequence: 161} ] }
 // @EndUserText.label: 'Grant Hierarchy Node'
   @AnalyticsDetails.query.displayHierarchy: #FILTER
   //@AnalyticsDetails.query.axis: #ROWS
   @AnalyticsDetails.query.totals: #SHOW         
  Cube.GrantHierarchy,
  @AnalyticsDetails.query.axis: #FREE
  Cube.GranteeMgmtSponsor,
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 120
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  Cube.PubSecBudgetAccount,
  @AnalyticsDetails.query.axis: #FREE
  Cube.FundType,
  @AnalyticsDetails.query.axis: #FREE
  Cube.GranteeMgmtFundType,
  @AnalyticsDetails.query.axis: #FREE
  Cube.SponsoredClass,
  @AnalyticsDetails.query.axis: #FREE
  Cube.SponsoredProgram,
  @AnalyticsDetails.query.axis: #FREE
  Cube.GteeMBudgetValidityNumber,
  @AnalyticsDetails.query.axis: #FREE
  Cube.BudgetDocument,
  
  // New Cash Ledger Fields
  @AnalyticsDetails.query.axis: #FREE
  Cube.PartnerBusinessArea,
  @AnalyticsDetails.query.axis: #FREE
  Cube.PartnerCompanyCode,
  @AnalyticsDetails.query.axis: #FREE
  Cube.PartnerCostCenter,
  @AnalyticsDetails.query.axis: #FREE
  Cube.PartnerFunctionalArea,
  @AnalyticsDetails.query.axis: #FREE
  Cube.PartnerProfitCenter,
  @AnalyticsDetails.query.axis: #FREE
  Cube.PartnerSegment,
  @Consumption.hidden: true
  @API.element.releaseState: #DEPRECATED
  @API.element.successor:   'PartnerWBSElementExternalID'
  @VDM.lifecycle.status:    #DEPRECATED
  @VDM.lifecycle.successor: 'PartnerWBSElementExternalID'
  Cube.PartnerWBSElementInternalID, 
  @AnalyticsDetails.query.axis: #FREE
  Cube.PartnerWBSElementExternalID,
  @Consumption.hidden: true
  @API.element.releaseState: #DEPRECATED
  @API.element.successor:   'PartnerProjectExternalID'
  @VDM.lifecycle.status:    #DEPRECATED
  @VDM.lifecycle.successor: 'PartnerProjectExternalID'
  Cube.PartnerProjectInternalID,
  @AnalyticsDetails.query.axis: #FREE
  Cube.PartnerProjectExternalID,
  @AnalyticsDetails.query.axis: #FREE
  Cube.ReferenceDocument,
  @AnalyticsDetails.query.axis: #FREE
  Cube.ReferenceDocumentContext,
  @AnalyticsDetails.query.axis: #FREE
  Cube.ReferenceDocumentType,
  @AnalyticsDetails.query.axis: #FREE
  Cube.SoldProduct,  
  @AnalyticsDetails.query.axis: #FREE
  Cube.BusinessArea,
  @Consumption.hidden: true
  @AnalyticsDetails.query.axis: #FREE
  Cube.LedgerFiscalYear,
  @AnalyticsDetails.query.axis: #FREE
  Cube.FiscalYearPeriod,
  @AnalyticsDetails.query.axis: #FREE
  Cube.FiscalYearVariant

}
```
