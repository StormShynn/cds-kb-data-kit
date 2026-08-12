---
name: C_PUBSECBDGTACTLITEMQRY1
description: "Budget and Commitment/Actual Items - Detailed Query"
app_component: PSM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECBDGTACTLITEMQRY1')/$value
semantic_en: "Budget and Commitment/Actual Items - Detailed Query"
semantic_vi: "Budget and Commitment/Actual Items - Detailed Query — CDS view tiêu dùng dựa trên I_PubSecBdgtActlItemCube."
keywords:
  - "budget"
  - "and"
  - "commitment/actual"
  - "items"
  - "detailed"
  - "query"
  - "ledger"
  - "company"
  - "code"
  - "account"
  - "fund"
  - "fiscal"
  - "year"
tags:
  - PSM
  - budget
  - component:PSM
  - consumption-view
---
# C_PUBSECBDGTACTLITEMQRY1

**Budget and Commitment/Actual Items - Detailed Query**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECBDGTACTLITEMQRY1')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `Fund` |  | |  |  | `CHAR(10)` | Fund |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
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
| `CostSourceUnit` |  | |  |  | `UNIT(3)` | Cost Source Unit |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `IsStatisticalCostCenter` |  | |  |  | `CHAR(1)` | Indicator: Cost Center is Statistical Account Assignment |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `FinancialAccountType` |  | |  |  | `CHAR(1)` | Account Type |
| `PartnerCompany` |  | |  |  | `CHAR(6)` | Company ID of Trading Partner |
| `CostCtrActivityType` |  | |  |  | `CHAR(6)` | Activity Type |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element Internal ID |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | WBS Element External ID |
| `WBSIsStatisticalWBSElement` |  | |  |  | `CHAR(1)` | Indicator: WBS Element is Statistical Account Assignment |
| `ProjectInternalID` |  | |  |  | `NUMC(8)` | Project Internal ID |
| `ProjectExternalID` |  | |  |  | `CHAR(24)` | Project External ID |
| `BillingDocumentType` |  | |  |  | `CHAR(4)` | Billing Type |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Organization Division |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type |
| `BudgetPeriod` |  | |  |  | `CHAR(10)` | Budget Period |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `FinancialManagementArea` |  | |  |  | `CHAR(4)` | Financial Management Area |
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `CtrlObjForFund` |  | |  |  | `CHAR(50)` | Control Object for a Fund |
| `CtrlObjForFunctionalArea` |  | |  |  | `CHAR(50)` | Control Object for a Functional Area |
| `CtrlObjForBudgetPeriod` |  | |  |  | `CHAR(50)` | Control Object for a Budget Period |
| `CtrlObjForCostCenter` |  | |  |  | `CHAR(50)` | Control Object for a Cost Center |
| `CtrlObjForWBSElement` |  | |  |  | `CHAR(50)` | Control Object for a WBS Element |
| `CtrlObjForBudgetAccount` |  | |  |  | `CHAR(50)` | Control Object for a Budget Account |
| `CashLedgerAccount` |  | |  |  | `CHAR(10)` | Cash Origin Account |
| `CashLedgerCompanyCode` |  | |  |  | `CHAR(4)` | Cash Origin Company Code |
| `PubSecBudgetAccount` |  | |  |  | `CHAR(10)` | Budget Account |
| `PubSecBudgetAccountCoCode` |  | |  |  | `CHAR(4)` | Budget Account Company Code |
| `PubSecBudgetCnsmpnDate` |  | |  |  | `DATS(8)` | Budget Consumption Date |
| `PubSecBudgetCnsmpnFsclPeriod` |  | |  |  | `NUMC(3)` | CC Fiscal Period for Budget Consumption Date |
| `PubSecBudgetCnsmpnFsclYear` |  | |  |  | `NUMC(4)` | CC Fiscal Year for Budget Consumption Date |
| `PubSecBudgetCnsmpnType` |  | |  |  | `CHAR(2)` | Budget Consumption Type |
| `PubSecBudgetCnsmpnAmtType` |  | |  |  | `CHAR(4)` | Budget Consumption Amount Type |
| `PubSecBudgetIsRelevant` |  | |  |  | `CHAR(1)` | Budget-Relevant Indicator |
| `PubSecBdgtAcctRevnExpnCode` |  | |  |  | `CHAR(1)` | Expense or Revenue on Budget Account |
| `FundType` |  | |  |  | `CHAR(6)` | Fund Type |
| `BudgetingType` |  | |  |  | `CHAR(8)` | Budget Type (Subcategory) |
| `BudgetProcess` |  | |  |  | `CHAR(4)` | Budget Process Type |
| `OriginCostCenter` |  | |  |  | `CHAR(10)` | Origin Cost Center |
| `OriginCostCtrActivityType` |  | |  |  | `CHAR(6)` | Origin Cost Center Activity Type |
| `PartnerAccountAssignmentType` |  | |  |  | `CHAR(2)` | Partner Account Assignment Type |
| `PartnerBudgetPeriod` |  | |  |  | `CHAR(10)` | FM: Partner Budget Period |
| `PartnerBusinessArea` |  | |  |  | `CHAR(4)` | Partner Business Area |
| `PartnerCompanyCode` |  | |  |  | `CHAR(4)` | Partner Company Code |
| `PartnerCostCenter` |  | |  |  | `CHAR(10)` | Partner Cost Center |
| `PartnerFunctionalArea` |  | |  |  | `CHAR(16)` | Partner Functional Area |
| `PartnerOrder` |  | |  |  | `CHAR(12)` | Partner Order (Deprecated) |
| `PartnerProfitCenter` |  | |  |  | `CHAR(10)` | Partner Profit Center |
| `PartnerSegment` |  | |  |  | `CHAR(10)` | Partner Segment for Segmental Reporting |
| `PartnerWBSElementInternalID` |  | |  |  | `NUMC(8)` | Partner WBS Element Internal ID |
| `PartnerWBSElementExternalID` |  | |  |  | `CHAR(24)` | Partner WBS Element External ID |
| `PartnerProjectInternalID` |  | |  |  | `NUMC(8)` | Partner Project Internal ID |
| `PartnerProjectExternalID` |  | |  |  | `CHAR(24)` | Partner Project External ID |
| `PartnerCostCtrActivityType` |  | |  |  | `CHAR(6)` | Partner Cost Center Activity Type |
| `ReferenceDocument` |  | |  |  | `CHAR(10)` | Reference Doc. Number |
| `ReferenceDocumentContext` |  | |  |  | `CHAR(10)` | Reference Document Context |
| `ReferenceDocumentType` |  | |  |  | `CHAR(5)` | Reference Document Type |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECBDGTACTLITEMQRY1')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECBDGTACTLITEMQRY1')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CPSMS4CBDACTAQ1'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Budget and Commitment/Actual Items - Detailed Query'

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

//Not needed: Replace by C_PubSecBdgtActlItemQry2 
//@OData.publish: true

define view C_PubSecBdgtActlItemQry1 
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
  @AnalyticsDetails.query.axis: #FREE
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
  // Measures - Quantities
  ///////////////////////////////////////////////////////////////////////
  @Semantics.unitOfMeasure: true
  @AnalyticsDetails.query.axis: #FREE
  Cube.CostSourceUnit,

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
  @AnalyticsDetails.query.axis: #FREE
  Cube.IsStatisticalCostCenter,
  @AnalyticsDetails.query.axis: #FREE
  Cube.LedgerGLLineItem,
  @AnalyticsDetails.query.axis: #FREE
  Cube.ChartOfAccounts,

  @AnalyticsDetails.query.axis: #FREE
  Cube.Product, 
  @AnalyticsDetails.query.axis: #FREE
  Cube.Plant,
  @AnalyticsDetails.query.axis: #FREE
  Cube.Supplier,
  @AnalyticsDetails.query.axis: #FREE
  Cube.Customer,
  @AnalyticsDetails.query.axis: #FREE
  Cube.FinancialAccountType,
  @AnalyticsDetails.query.axis: #FREE
  Cube.PartnerCompany,
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
  @AnalyticsDetails.query.axis: #FREE
  Cube.WBSIsStatisticalWBSElement,
  @Consumption.hidden: true
  @API.element.releaseState: #DEPRECATED
  @API.element.successor:   'ProjectExternalID'
  @VDM.lifecycle.status:    #DEPRECATED
  @VDM.lifecycle.successor: 'ProjectExternalID'
  Cube.ProjectInternalID,
  @AnalyticsDetails.query.axis: #FREE
  Cube.ProjectExternalID,
  @AnalyticsDetails.query.axis: #FREE
  Cube.BillingDocumentType,
  @AnalyticsDetails.query.axis: #FREE
  Cube.SalesOrganization,
  @AnalyticsDetails.query.axis: #FREE
  Cube.DistributionChannel,
  @AnalyticsDetails.query.axis: #FREE
  Cube.OrganizationDivision,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  Cube.ControllingArea,
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 130
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  Cube.FunctionalArea,
  @AnalyticsDetails.query.axis: #FREE
  Cube.AccountAssignmentType,
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
  
  // New Cash Ledger Fields
  @AnalyticsDetails.query.axis: #FREE
  Cube.CashLedgerAccount,
  @AnalyticsDetails.query.axis: #FREE
  Cube.CashLedgerCompanyCode,
  // New Public Sector fields
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 120
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
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
  Cube.PubSecBudgetCnsmpnAmtType,
  @AnalyticsDetails.query.axis: #FREE
  Cube.PubSecBudgetIsRelevant,
  @AnalyticsDetails.query.axis: #FREE
  Cube.PubSecBdgtAcctRevnExpnCode,
  @AnalyticsDetails.query.axis: #FREE
  Cube.FundType,
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 180
  @AnalyticsDetails.query.axis: #FREE
  Cube.BudgetingType,
  @AnalyticsDetails.query.axis: #FREE
  Cube.BudgetProcess,
  
  @AnalyticsDetails.query.axis: #FREE
  Cube.OriginCostCenter,
  @AnalyticsDetails.query.axis: #FREE
  Cube.OriginCostCtrActivityType,
  @AnalyticsDetails.query.axis: #FREE
  Cube.PartnerAccountAssignmentType,
  @AnalyticsDetails.query.axis: #FREE
  Cube.PartnerBudgetPeriod,
  @AnalyticsDetails.query.axis: #FREE
  Cube.PartnerBusinessArea,
  @AnalyticsDetails.query.axis: #FREE
  Cube.PartnerCompanyCode,
  @AnalyticsDetails.query.axis: #FREE
  Cube.PartnerCostCenter,
  @AnalyticsDetails.query.axis: #FREE
  Cube.PartnerFunctionalArea,
  @AnalyticsDetails.query.axis: #FREE
  Cube.PartnerOrder,
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
  Cube.PartnerCostCtrActivityType,
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
