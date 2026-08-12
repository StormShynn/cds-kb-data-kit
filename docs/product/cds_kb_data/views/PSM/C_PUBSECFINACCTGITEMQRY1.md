---
name: C_PUBSECFINACCTGITEMQRY1
description: "Budgetary Accounting Items Query"
app_component: PSM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECFINACCTGITEMQRY1')/$value
semantic_en: "Budgetary Accounting Items Query"
semantic_vi: "Budgetary Accounting Items Query — CDS view tiêu dùng dựa trên I_PubSecFinAcctgItemCube."
keywords:
  - "budgetary"
  - "accounting"
  - "items"
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
  - account
  - bo:companycode
  - budget
  - component:PSM
  - consumption-view
---
# C_PUBSECFINACCTGITEMQRY1

**Budgetary Accounting Items Query**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECFINACCTGITEMQRY1')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `Fund` |  | |  |  | `CHAR(10)` | Fund |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `IsCommitment` |  | |  |  | `CHAR(1)` | Indicator: Is Commitment |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `AmountInTransactionCurrency` |  | |  |  | `CURR(23)` | Amount in Transaction Currency |
| `AmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `FinancialManagementArea` |  | |  |  | `CHAR(4)` | Financial Management Area |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `DebitCreditCode` |  | |  |  | `CHAR(1)` | Debit/Credit Code |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
| `PostingKey` |  | |  |  | `CHAR(2)` | Posting Key |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `AccountingDocumentItem` |  | |  |  | `NUMC(3)` | Journal Entry Posting View Item |
| `DocumentDate` |  | |  |  | `DATS(8)` | Journal Entry Date |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `PurchasingDocument` |  | |  |  | `CHAR(10)` | Purchasing Document |
| `PurchasingDocumentItem` |  | |  |  | `NUMC(5)` | Purchasing Document Item |
| `DocumentItemText` |  | |  |  | `CHAR(50)` | Item Text |
| `MasterFixedAsset` |  | |  |  | `CHAR(12)` | Fixed Asset (Main Asset Number) |
| `FixedAsset` |  | |  |  | `CHAR(4)` | Asset Subnumber |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | WBS Element External ID |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `BudgetPeriod` |  | |  |  | `CHAR(10)` | Budget Period |
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `BusinessProcess` |  | |  |  | `CHAR(12)` | Business Process |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `CashLedgerCompanyCode` |  | |  |  | `CHAR(4)` | Cash Origin Company Code |
| `CashLedgerAccount` |  | |  |  | `CHAR(10)` | Cash Origin Account |
| `PubSecBudgetAccountCoCode` |  | |  |  | `CHAR(4)` | Budget Account Company Code |
| `PubSecBudgetAccount` |  | |  |  | `CHAR(10)` | Budget Account |
| `PubSecBudgetCnsmpnDate` |  | |  |  | `DATS(8)` | Budget Consumption Date |
| `PubSecBudgetCnsmpnFsclPeriod` |  | |  |  | `NUMC(3)` | CC Fiscal Period for Budget Consumption Date |
| `PubSecBudgetCnsmpnFsclYear` |  | |  |  | `NUMC(4)` | CC Fiscal Year for Budget Consumption Date |
| `PubSecBudgetCnsmpnType` |  | |  |  | `CHAR(2)` | Budget Consumption Type |
| `PubSecBudgetCnsmpnAmtType` |  | |  |  | `CHAR(4)` | Budget Consumption Amount Type |
| `PubSecBudgetIsRelevant` |  | |  |  | `CHAR(1)` | Budget-Relevant Indicator |
| `PubSecBdgtAcctRevnExpnCode` |  | |  |  | `CHAR(1)` | Expense or Revenue on Budget Account |
| `FundType` |  | |  |  | `CHAR(6)` | Fund Type |
| `SponsoredClass` |  | |  |  | `CHAR(20)` | Sponsored Class |
| `SponsoredProgram` |  | |  |  | `CHAR(20)` | Sponsored Program |
| `PurchaseOrder` |  | |  |  | `CHAR(10)` | Purchase Order Number |
| `PurchaseRequisition` |  | |  |  | `CHAR(10)` | Purchase Requisition Number |
| `EarmarkedFundsDocument` |  | |  |  | `CHAR(10)` | Document Number for Earmarked Funds |
| `OriginCostCenter` |  | |  |  | `CHAR(10)` | Origin Cost Center |
| `PartnerBudgetPeriod` |  | |  |  | `CHAR(10)` | FM: Partner Budget Period |
| `PartnerCostCenter` |  | |  |  | `CHAR(10)` | Partner Cost Center |
| `PartnerFunctionalArea` |  | |  |  | `CHAR(16)` | Partner Functional Area |
| `PartnerFund` |  | |  |  | `CHAR(10)` | Partner Fund |
| `PartnerGrant` |  | |  |  | `CHAR(20)` | Partner Grant |
| `PartnerWBSElementExternalID` |  | |  |  | `CHAR(24)` | Partner WBS Element External ID |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECFINACCTGITEMQRY1')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECFINACCTGITEMQRY1')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CPSMS4CFIACAQ1'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Budgetary Accounting Items Query'

@VDM.viewType: #CONSUMPTION
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@Analytics: {
     query: true,
     dataExtraction.enabled: false,
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

define view C_PubSecFinAcctgItemQry1 
  with parameters
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_LANGUAGE
    P_Language : sylangu,
    @Consumption.hidden: true
    @Semantics.businessDate.at: true
    @Environment.systemField: #SYSTEM_DATE
    @AnalyticsDetails.query.variableSequence : 30
    P_KeyDate: vdm_v_key_date
   
  as select from I_PubSecFinAcctgItemCube as Cube
{

  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: false, mandatory: true}
  @Consumption.derivation: { lookupEntity: 'I_Ledger',
        resultElement: 'Ledger', binding: [
        { targetElement : 'IsLeadingLedger' , type : #CONSTANT, value : 'X' } ]
       }
  @AnalyticsDetails.query.variableSequence : 20
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  Cube.Ledger,

  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: true}
  @AnalyticsDetails.query.variableSequence : 10
  @AnalyticsDetails.query.display: #KEY_TEXT
  Cube.CompanyCode,

  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 50
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  Cube.GLAccount,
  
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 100
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  Cube.Fund,

  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @Consumption.derivation: { lookupEntity: 'I_CalendarDate',
        resultElement: 'CalendarYear', binding: [
        { targetElement : 'CalendarDate' , type : #PARAMETER, value : 'P_KeyDate' } ]
       }
  @AnalyticsDetails.query.variableSequence: 60
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY
  Cube.LedgerFiscalYear,

  @AnalyticsDetails.query.axis: #FREE
  Cube.FiscalYear,

  @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 70
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  Cube.PostingDate,

  @AnalyticsDetails.query.axis: #FREE
  Cube.Segment,

  @AnalyticsDetails.query.axis: #FREE
  Cube.ProfitCenter,

  @AnalyticsDetails.query.axis: #FREE
  Cube.AccountingDocument,

  // PSM: Additional detail
  @AnalyticsDetails.query.axis: #FREE
  Cube.IsCommitment,

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
  @Semantics.amount.currencyCode: 'TransactionCurrency'
  @AnalyticsDetails.query.hidden : true
  @DefaultAggregation: #SUM
  Cube.AmountInTransactionCurrency,
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  Cube.AmountInGlobalCurrency,
  
  ///////////////////////////////////////////////////////////////////////
  // Dimensions
  ///////////////////////////////////////////////////////////////////////

  @AnalyticsDetails.query.axis: #FREE
  Cube.ChartOfAccounts,
  @AnalyticsDetails.query.axis: #FREE
  Cube.ControllingArea,
  @AnalyticsDetails.query.axis: #FREE
  Cube.FinancialManagementArea,
  @AnalyticsDetails.query.axis: #FREE
  Cube.FiscalYearVariant,  
  @AnalyticsDetails.query.axis: #FREE
  Cube.DebitCreditCode,
  @AnalyticsDetails.query.axis: #FREE
  Cube.AccountingDocumentType,
  @AnalyticsDetails.query.axis: #FREE
  Cube.PostingKey,

  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 140
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  Cube.CostCenter,
  @AnalyticsDetails.query.axis: #FREE
  Cube.AccountingDocumentItem,
  @AnalyticsDetails.query.axis: #FREE
  Cube.DocumentDate,

  @AnalyticsDetails.query.axis: #FREE
  Cube.LedgerGLLineItem,
//  @AnalyticsDetails.query.axis: #FREE
//  Cube.CreationDate,
  @API.element.releaseState: #DEPRECATED
  @API.element.successor:   'PurchaseOrder'
  @VDM.lifecycle.status:    #DEPRECATED
  @VDM.lifecycle.successor: 'PurchaseOrder'
  Cube.PurchasingDocument,
  @API.element.releaseState: #DEPRECATED
  @API.element.successor:   'PurchaseOrder'
  @VDM.lifecycle.status:    #DEPRECATED
  @VDM.lifecycle.successor: 'PurchaseOrder'
  Cube.PurchasingDocumentItem,
  @AnalyticsDetails.query.axis: #FREE
  Cube.DocumentItemText,
  @AnalyticsDetails.query.axis: #FREE
  Cube.MasterFixedAsset,
  @AnalyticsDetails.query.axis: #FREE
  Cube.FixedAsset,
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
  
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 160
  @AnalyticsDetails.query.axis: #FREE
  Cube.GrantID,
  
  @AnalyticsDetails.query.axis: #FREE
  Cube.BusinessProcess,
  @AnalyticsDetails.query.axis: #FREE
  Cube.BusinessTransactionType,
  
  // New Cash Ledger Fields
  @AnalyticsDetails.query.axis: #FREE
  Cube.CashLedgerCompanyCode,
  @AnalyticsDetails.query.axis: #FREE
  Cube.CashLedgerAccount,
  // New Public Sector fields
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  Cube.PubSecBudgetAccountCoCode,
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
  Cube.PubSecBudgetCnsmpnAmtType,
  @AnalyticsDetails.query.axis: #FREE
  Cube.PubSecBudgetIsRelevant,
  @AnalyticsDetails.query.axis: #FREE
  Cube.PubSecBdgtAcctRevnExpnCode,
  @AnalyticsDetails.query.axis: #FREE
  Cube.FundType,
  @AnalyticsDetails.query.axis: #FREE
  Cube.SponsoredClass,
  @AnalyticsDetails.query.axis: #FREE
  Cube.SponsoredProgram,
  @AnalyticsDetails.query.axis: #FREE
  Cube.PurchaseOrder,
  @AnalyticsDetails.query.axis: #FREE
  Cube.PurchaseRequisition,
  @AnalyticsDetails.query.axis: #FREE
  Cube.EarmarkedFundsDocument,

  @AnalyticsDetails.query.axis: #FREE
  Cube.OriginCostCenter,
  @AnalyticsDetails.query.axis: #FREE
  Cube.PartnerBudgetPeriod,
  @AnalyticsDetails.query.axis: #FREE
  Cube.PartnerCostCenter,
  @AnalyticsDetails.query.axis: #FREE
  Cube.PartnerFunctionalArea,
  @AnalyticsDetails.query.axis: #FREE
  Cube.PartnerFund,
  @AnalyticsDetails.query.axis: #FREE
  Cube.PartnerGrant,
  @AnalyticsDetails.query.axis: #FREE
  Cube.PartnerWBSElementExternalID
  
}
```
