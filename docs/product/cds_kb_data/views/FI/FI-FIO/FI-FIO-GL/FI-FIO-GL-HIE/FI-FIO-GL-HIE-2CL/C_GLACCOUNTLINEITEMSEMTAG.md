---
name: C_GLACCOUNTLINEITEMSEMTAG
description: "This CDS view provides the prerequisites for answering the following business questions: What are the key figure amounts for a specific company code in a certain fiscal year? What is the ratio of margin to revenue? What is my net cash amount in company code currency?"
app_component: FI-FIO-GL-HIE-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GLACCOUNTLINEITEMSEMTAG')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: What are the key figure amounts for a specific company code in a certain fiscal year? What is the ratio of margin to revenue? What is my net cash amount in company code currency?"
semantic_vi: "G/L Line Item with Semantic Tag - Query — CDS view tiêu dùng dựa trên I_GLAccountLineItemSemTag."
keywords:
  - "g/l"
  - "line"
  - "item"
  - "with"
  - "semantic"
  - "tag"
  - "query"
  - "account"
  - "hierarchy"
  - "company"
  - "code"
  - "ledger"
  - "fiscal"
  - "year"
  - "period"
tags:
  - FI
  - bo:companycode
  - component:FI-FIO-GL-HIE-2CL
  - consumption-view
  - FI-FIO
  - FI-FIO-GL
  - FI-FIO-GL-HIE
  - FI-FIO-GL-HIE-2CL
  - lob:finance
---
# C_GLACCOUNTLINEITEMSEMTAG

**This CDS view provides the prerequisites for answering the following business questions: What are the key figure amounts for a specific company code in a certain fiscal year? What is the ratio of margin to revenue? What is my net cash amount in company code currency?**

| Property | Value |
|---|---|
| App Component | `FI-FIO-GL-HIE-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GLACCOUNTLINEITEMSEMTAG')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GLAccountHierarchy` | ✓ | |  |  | `CHAR(42)` | Financial Statement Version |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `LedgerFiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `Ledger` | ✓ | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `Project` |  | |  |  | `CHAR(24)` | Project |
| `FiscalQuarter` |  | |  |  | `NUMC(1)` | Fiscal Quarter |
| `WBSElement` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) |
| `SemanticTag` |  | |  |  | `CHAR(10)` | Semantic Tag of a Hierarchy Node |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `RevenueAmountInCompanyCodeCrcy` |  | |  |  | `CURR(23)` | Revenue Amount in Company Code Currency |
| `RevenueInGlobalCurrency` |  | |  |  | `CURR(23)` | Revenue Amount in Global Currency |
| `GrossRevenueAmtInCCCrcy` |  | |  |  | `CURR(23)` | Gross Revenue |
| `RecognizedRevnAmtInCCCrcy` |  | |  |  | `CURR(23)` | Recognized Revenue |
| `RecognizedRevnAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Recognized Revenue |
| `RevenueAdjustmentAmtInCCCrcy` |  | |  |  | `CURR(23)` | Revenue Adjustment |
| `RevenueAdjustAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Revenue Adjustment |
| `DeferredRevenueAmtInCCCrcy` |  | |  |  | `CURR(23)` | Deferred Revenue |
| `AccruedRevenueAmtInCCCrcy` |  | |  |  | `CURR(23)` | Accrued Revenue |
| `RecognizableRevenueAmtInCCCrcy` |  | |  |  | `CURR(23)` | Actual Revenue |
| `RecognizableRevnAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Actual Revenue |
| `BilledRevenueAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Actual Revenue |
| `BilledRevenueAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Actual Revenue |
| `BilledValnQtyInCostSourceUnit` |  | |  |  | `QUAN(23)` | Billed Quantity |
| `UnbilledRevnInCoCodeCrcy` |  | |  |  | `CURR(23)` | Unbilled Revenue |
| `RecognizedMarginAmtInCCCrcy` |  | |  |  | `CURR(23)` | Recognized Margin |
| `MnlContrAccrPnLItmAmtInCCCrcy` |  | |  |  | `CURR(23)` | Manual Contract Accruals Income Statement in CCCrcy |
| `CostAmountInCompanyCodeCrcy` |  | |  |  | `CURR(23)` | Cost Amount in Company Code Currency |
| `CostOfGoodsSoldAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Cost of Goods Sold - Total |
| `FxdCOGSAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Cost of Goods Sold - Fixed |
| `RecognizedCOGSAmtInCCCrcy` |  | |  |  | `CURR(23)` | Recognized COS |
| `COGSAdjustmentAmtInCCCrcy` |  | |  |  | `CURR(23)` | COS Adjustment |
| `DeferredCOGSAmtInCCCrcy` |  | |  |  | `CURR(23)` | Deferred COS |
| `AccruedCOGSAmtInCCCrcy` |  | |  |  | `CURR(23)` | Accrued COS |
| `RecognizableCostAmtInCCCrcy` |  | |  |  | `CURR(23)` | Actual Cost |
| `ImminentLossRsrvAmtInCCCrcy` |  | |  |  | `CURR(23)` | Imminent Loss Reserve |
| `SalesDeductReserveAmtInCCCrcy` |  | |  |  | `CURR(23)` | Reserves for Anticipated Sales Deductions |
| `UnrlzdCostsReserveAmtInCCCrcy` |  | |  |  | `CURR(23)` | Reserves for Unrealized Costs |
| `MnlContrAccrBalShtAmtInCCCrcy` |  | |  |  | `CURR(23)` | Manual Contract Accruals Balance Sheet in CCCrcy |
| `SalesDeductionAmountInGlobCrcy` |  | |  |  | `CURR(23)` | Sales Deduction |
| `SalesDeductionAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Sales Deduction |
| `PriceDifferenceAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Price Differences |
| `AdminOverheadAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Administration Overhead |
| `SalesOverheadAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Sales Overhead |
| `MarketingOverheadAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Marketing Overhead |
| `RnDOverheadAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Research and Development Overhead |
| `LongTermInvmtAmtInCCCrcy` |  | |  |  | `CURR(23)` | Increase (Decrease) in Long-term Investments |
| `AcctsRblAmtInCCCrcy` |  | |  |  | `CURR(23)` | Increase (Decrease) in Accounts Receivable (Net) |
| `AcctsOthRblAmtInCCCrcy` |  | |  |  | `CURR(23)` | Increase (Decrease) in Accounts Other Receivable (Net) |
| `AcctsPyblAmtInCCCrcy` |  | |  |  | `CURR(23)` | Increase (Decrease) in Accounts Payable (Net) |
| `AcctsOthPyblAmtInCCCrcy` |  | |  |  | `CURR(23)` | Increase (Decrease) in Accounts Other Payables (Net) |
| `ProvisionAmtInCCCrcy` |  | |  |  | `CURR(23)` | Increase/Decrease of Provisions |
| `NotesReceivableAmtInCCCrcy` |  | |  |  | `CURR(23)` | Increase (Decrease) in Notes Receivable |
| `TangibleAstDeprAmtInCCCrcy` |  | |  |  | `CURR(23)` | Depreciation of Tangible Assets |
| `IntngblAssetAmtznAmtInCCCrcy` |  | |  |  | `CURR(23)` | Amortization of Intangible Assets |
| `TangibleAstAmtInCCCrcy` |  | |  |  | `CURR(23)` | Purchase (Sale) of Tangible Assets |
| `IntangibleAstAmtInCCCrcy` |  | |  |  | `CURR(23)` | Purchase (Sale) of Intangible Assets |
| `FixedAssetRtrmtAmtInCCCrcy` |  | |  |  | `CURR(23)` | Gain/Loss from Retirement of Fixed Assets |
| `InventoryAmtInCCCrcy` |  | |  |  | `CURR(23)` | Increase/Decrease of Inventories |
| `CommonStockAmtInCCCrcy` |  | |  |  | `CURR(23)` | Increase (Decrease) in Common Stocks |
| `CashAndCashEqvlntAmtInCCCrcy` |  | |  |  | `CURR(23)` | Change (Increase/ Decrease) in cash and cash equivalents |
| `AssetAmtInCCCrcy` |  | |  |  | `CURR(23)` | Asset Amount In CompanyCode Currency |
| `LiabilityEquityAmtInCCCrcy` |  | |  |  | `CURR(23)` | Liabilities and Equity Amount In Company Code Currency |
| `NotAssignedAmtInCCCrcy` |  | |  |  | `CURR(23)` | Not Assigned Amount In Company Code Currency |
| `NetResultAmtInCCCrcy` |  | |  |  | `CURR(23)` | Net Result Amount In Company Code Currency |
| `PnLResultAmtInCCCrcy` |  | |  |  | `CURR(23)` | Profit for the Period |
| `GLAcctNetIncomeAmtInCCCrcy` |  | |  |  | `CURR(23)` | Net Income Amount In Company Code Currency |
| `VarblCOGSAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Cost of Goods Sold - Variable |
| `ContrbnMargin1AmtInGlobCrcy` |  | |  |  | `CURR(23)` | Contribution Margin I |
| `ContrbnMargin2AmtInGlobCrcy` |  | |  |  | `CURR(23)` | Contribution Margin II |
| `ContrbnMargin3AmtInGlobCrcy` |  | |  |  | `CURR(23)` | Contribution Margin III |
| `OperatingActyCashAmtInCCCrcy` |  | |  |  | `CURR(23)` | Net cash generated from continuing operating activities |
| `InvestingActyCashAmtInCCCrcy` |  | |  |  | `CURR(23)` | Net cash used in continuing investing activities |
| `FinancingActyCashAmtInCCCrcy` |  | |  |  | `CURR(23)` | Net cash generated from financing activities |
| `NetCashAmtInCCCrcy` |  | |  |  | `CURR(23)` | Net Cash Amount In CompanyCode Currency |
| `AssetLiabilityAmtInCCCrcy` |  | |  |  | `CURR(23)` | Asset/Liability Amount in Company Code Currency |
| `RecognizedMarginPercent` |  | |  | `0` | `INT1(3)` |  |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `BalanceTransactionCurrency` |  | |  |  | `CUKY(5)` | Balance Transaction Currency |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `FunctionalCurrency` |  | |  |  | `CUKY(5)` | Functional Currency |
| `FreeDefinedCurrency1` |  | |  |  | `CUKY(5)` | Freely Defined Currency 1 |
| `FreeDefinedCurrency2` |  | |  |  | `CUKY(5)` | Freely Defined Currency 2 |
| `FreeDefinedCurrency3` |  | |  |  | `CUKY(5)` | Freely Defined Currency 3 |
| `FreeDefinedCurrency4` |  | |  |  | `CUKY(5)` | Freely Defined Currency 4 |
| `FreeDefinedCurrency5` |  | |  |  | `CUKY(5)` | Freely Defined Currency 5 |
| `FreeDefinedCurrency6` |  | |  |  | `CUKY(5)` | Freely Defined Currency 6 |
| `FreeDefinedCurrency7` |  | |  |  | `CUKY(5)` | Freely Defined Currency 7 |
| `FreeDefinedCurrency8` |  | |  |  | `CUKY(5)` | Freely Defined Currency 8 |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `AmountInTransactionCurrency` |  | |  |  | `CURR(23)` | Amount in Transaction Currency |
| `AmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `AmountInBalanceTransacCrcy` |  | |  |  | `CURR(23)` | Amount in Balance Transaction Currency |
| `AmountInFunctionalCurrency` |  | |  |  | `CURR(23)` | Amount in Functional Currency |
| `DebitAmountInFunctionalCrcy` |  | |  |  | `CURR(23)` | Debit Amount in Functional Currency |
| `CreditAmountInFunctionalCrcy` |  | |  |  | `CURR(23)` | Credit Amount in Functional Currency |
| `AmountInFreeDefinedCurrency1` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 1 |
| `AmountInFreeDefinedCurrency2` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 2 |
| `AmountInFreeDefinedCurrency3` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 3 |
| `AmountInFreeDefinedCurrency4` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 4 |
| `AmountInFreeDefinedCurrency5` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 5 |
| `AmountInFreeDefinedCurrency6` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 6 |
| `AmountInFreeDefinedCurrency7` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 7 |
| `AmountInFreeDefinedCurrency8` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 8 |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element Internal ID |
| `ProjectInternalID` |  | |  |  | `NUMC(8)` | Project Internal ID |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `_CompanyCode` | | ✓ | | | | |
| `_JournalEntry` | | ✓ | | | | |
| `_GLAccountInChartOfAccounts` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_LedgerFiscalYearForVariant` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GLACCOUNTLINEITEMSEMTAG')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GLACCOUNTLINEITEMSEMTAG')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CFIGLACCTLITST'
@EndUserText.label: 'G/L Line Item with Semantic Tag - Query'
@VDM.viewType: #CONSUMPTION
@Analytics.query: true
@OData.publish: true
//@AccessControl.authorizationCheck: #NOT_ALLOWED
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@ObjectModel.supportedCapabilities: [#ANALYTICAL_QUERY]


define view C_GLAccountLineItemSemTag

  with parameters

    // ---> Variable gets hidden and is defaulted with todays date
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate  : sydate,

    // ---> Variable gets hidden and is defaulted with the logon language
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_LANGUAGE
    P_Language : sylangu

  as select from I_GLAccountLineItemSemTag

{

      @AnalyticsDetails.query.variableSequence : 20
      @Consumption.filter: { selectionType: #SINGLE, multipleSelections: false, mandatory: true }
      @AnalyticsDetails.query.axis: #FREE
  key GLAccountHierarchy,
      @AnalyticsDetails.query.variableSequence : 40
      //      @UI.selectionField: {position: 30, exclude: false }
      @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: true }
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #KEY_TEXT
  key CompanyCode,
      @AnalyticsDetails.query.variableSequence : 50
      @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: true }
      @AnalyticsDetails.query.axis: #FREE
  key LedgerFiscalYear,
      @AnalyticsDetails.query.variableSequence : 10
      @Consumption.filter: { selectionType: #SINGLE, multipleSelections: false, mandatory: true }
      @Consumption.derivation: { lookupEntity: 'I_Ledger',
        resultElement: 'Ledger', binding: [{ targetElement : 'IsLeadingLedger' , type : #CONSTANT, value : 'X' } ]}
      @AnalyticsDetails.query.axis: #FREE
  key Ledger,
      @AnalyticsDetails.query.variableSequence : 70
      @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false }
      @AnalyticsDetails.query.axis: #FREE
      @Semantics.fiscal.period
      FiscalPeriod,
      @AnalyticsDetails.query.variableSequence : 200
      @Consumption.filter: { selectionType: #SINGLE, multipleSelections: false, mandatory: false }
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #KEY_TEXT
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   'ProjectInternalID'
//      @VDM.lifecycle.status:    #DEPRECATED
//      @VDM.lifecycle.successor: 'ProjectInternalID'
      Project,

      @AnalyticsDetails.query.variableSequence : 60
      @Consumption.filter: { selectionType: #SINGLE, multipleSelections: false, mandatory: false }
      @AnalyticsDetails.query.axis: #FREE
      FiscalQuarter,
      @AnalyticsDetails.query.axis: #FREE
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   'WBSElementInternalID'
//      @VDM.lifecycle.status:    #DEPRECATED
//      @VDM.lifecycle.successor: 'WBSElementInternalID' 
      WBSElement,
      @AnalyticsDetails.query.axis: #ROWS
      @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false }
      @AnalyticsDetails.query.variableSequence : 30
      @AnalyticsDetails.query.display: #KEY_TEXT
      SemanticTag,
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.display: #KEY_TEXT
      GLAccount,

      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #KEY_TEXT
      FunctionalArea,

      @AnalyticsDetails.query.axis: #FREE
      CostCenter,
      @AnalyticsDetails.query.axis: #FREE
      ProfitCenter,
      @AnalyticsDetails.query.axis: #FREE
      AccountingDocument,
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #KEY_TEXT
      Segment,



      ///////////////////////////////////////////////////////////////////////
      // Key Figures
      ///////////////////////////////////////////////////////////////////////
      RevenueAmountInCompanyCodeCrcy,
      RevenueInGlobalCurrency,
      GrossRevenueAmtInCCCrcy,
      RecognizedRevnAmtInCCCrcy,
      RecognizedRevnAmtInGlobCrcy,
      RevenueAdjustmentAmtInCCCrcy,
      RevenueAdjustAmtInGlobCrcy,
      DeferredRevenueAmtInCCCrcy,
      AccruedRevenueAmtInCCCrcy,
      RecognizableRevenueAmtInCCCrcy,
      RecognizableRevnAmtInGlobCrcy,
      BilledRevenueAmtInCoCodeCrcy,
      BilledRevenueAmtInGlobCrcy,
      BilledValnQtyInCostSourceUnit,
      UnbilledRevnInCoCodeCrcy,
      RecognizedMarginAmtInCCCrcy,
      MnlContrAccrPnLItmAmtInCCCrcy,


      CostAmountInCompanyCodeCrcy,
      CostOfGoodsSoldAmtInGlobCrcy,
      FxdCOGSAmtInGlobCrcy,
      RecognizedCOGSAmtInCCCrcy,
      COGSAdjustmentAmtInCCCrcy,
      DeferredCOGSAmtInCCCrcy,
      AccruedCOGSAmtInCCCrcy,
      RecognizableCostAmtInCCCrcy,
      ImminentLossRsrvAmtInCCCrcy,
      SalesDeductReserveAmtInCCCrcy,
      UnrlzdCostsReserveAmtInCCCrcy,
      MnlContrAccrBalShtAmtInCCCrcy,
      SalesDeductionAmountInGlobCrcy,
      SalesDeductionAmtInCoCodeCrcy,
      PriceDifferenceAmtInGlobCrcy,
      AdminOverheadAmtInGlobCrcy,
      SalesOverheadAmtInGlobCrcy,
      MarketingOverheadAmtInGlobCrcy,
      RnDOverheadAmtInGlobCrcy,

      LongTermInvmtAmtInCCCrcy,
      AcctsRblAmtInCCCrcy,
      AcctsOthRblAmtInCCCrcy,
      AcctsPyblAmtInCCCrcy,
      AcctsOthPyblAmtInCCCrcy,
      ProvisionAmtInCCCrcy,
      NotesReceivableAmtInCCCrcy,
      TangibleAstDeprAmtInCCCrcy,
      IntngblAssetAmtznAmtInCCCrcy,
      TangibleAstAmtInCCCrcy,
      IntangibleAstAmtInCCCrcy,
      FixedAssetRtrmtAmtInCCCrcy,
      InventoryAmtInCCCrcy,
      CommonStockAmtInCCCrcy,
      CashAndCashEqvlntAmtInCCCrcy,

      AssetAmtInCCCrcy,
      LiabilityEquityAmtInCCCrcy,
      NotAssignedAmtInCCCrcy,
      NetResultAmtInCCCrcy,
      PnLResultAmtInCCCrcy,
      GLAcctNetIncomeAmtInCCCrcy,

      VarblCOGSAmtInGlobCrcy,
      ContrbnMargin1AmtInGlobCrcy,
      ContrbnMargin2AmtInGlobCrcy,
      ContrbnMargin3AmtInGlobCrcy,

      OperatingActyCashAmtInCCCrcy,
      InvestingActyCashAmtInCCCrcy,
      FinancingActyCashAmtInCCCrcy,
      NetCashAmtInCCCrcy,

      AssetLiabilityAmtInCCCrcy,

      //@EndUserText.label: 'Gross Margin'
      //@Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #FORMULA
      @AnalyticsDetails.query.formula : 'NDIV0($projection.RecognizedMarginAmtInCCCrcy / $projection.RecognizedRevnAmtInCCCrcy )'
      0 as RecognizedMarginPercent,

      //@EndUserText.label: 'Operating Margin'
      //@Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      //@DefaultAggregation: #FORMULA
      //@AnalyticsDetails.query.formula : 'NDIV0($projection.OperatingIncome / $projection.NetRevenue )'
      //0 as OperatingMargin,
      //
      //@EndUserText.label: 'Markup'
      //@Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      //@DefaultAggregation: #FORMULA
      //@AnalyticsDetails.query.formula : 'NDIV0($projection.GrossProfit / $projection.CostofGoodsSold )'
      //0 as Markup,
      //
      //@EndUserText.label: 'CostofRevenue'
      //@Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      //@DefaultAggregation: #FORMULA
      //@AnalyticsDetails.query.formula : 'NDIV0(($projection.CostofGoodsSold + $projection.SellingExpense) / $projection.NetRevenue )'
      //0 as CostofRevenue,


      ///////////////////////////////////////////////////////////////////////
      // Measures - Amounts
      ///////////////////////////////////////////////////////////////////////
      @Semantics.currencyCode: true
      @AnalyticsDetails.query.axis: #FREE
      CompanyCodeCurrency,
      @Semantics.currencyCode: true
      @AnalyticsDetails.query.axis: #FREE
      GlobalCurrency,
      @Semantics.currencyCode: true
      @AnalyticsDetails.query.axis: #FREE
      BalanceTransactionCurrency,
      @Semantics.currencyCode: true
      @AnalyticsDetails.query.axis: #FREE
      TransactionCurrency,
      @Semantics.currencyCode: true
      @AnalyticsDetails.query.axis: #FREE
      FunctionalCurrency,
      @Semantics.currencyCode: true
      @AnalyticsDetails.query.axis: #FREE
      FreeDefinedCurrency1,
      @Semantics.currencyCode: true
      @AnalyticsDetails.query.axis: #FREE
      FreeDefinedCurrency2,
      @Semantics.currencyCode: true
      @AnalyticsDetails.query.axis: #FREE
      FreeDefinedCurrency3,
      @Semantics.currencyCode: true
      @AnalyticsDetails.query.axis: #FREE
      FreeDefinedCurrency4,
      @Semantics.currencyCode: true
      @AnalyticsDetails.query.axis: #FREE
      FreeDefinedCurrency5,
      @Semantics.currencyCode: true
      @AnalyticsDetails.query.axis: #FREE
      FreeDefinedCurrency6,
      @Semantics.currencyCode: true
      @AnalyticsDetails.query.axis: #FREE
      FreeDefinedCurrency7,
      @Semantics.currencyCode: true
      @AnalyticsDetails.query.axis: #FREE
      FreeDefinedCurrency8,




      //  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @AnalyticsDetails.query.axis: #COLUMNS
      @DefaultAggregation: #SUM
      AmountInCompanyCodeCurrency,
      //  @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      @AnalyticsDetails.query.hidden : true
      @DefaultAggregation: #SUM
      AmountInTransactionCurrency,
      @AnalyticsDetails.query.hidden : true
      @DefaultAggregation: #SUM
      AmountInGlobalCurrency,
      @AnalyticsDetails.query.hidden : true
      @DefaultAggregation: #SUM
      AmountInBalanceTransacCrcy,
      @AnalyticsDetails.query.hidden : true
      @DefaultAggregation: #SUM
      AmountInFunctionalCurrency,
      @AnalyticsDetails.query.hidden : true
      @DefaultAggregation: #SUM
      DebitAmountInFunctionalCrcy,
      @AnalyticsDetails.query.hidden : true
      @DefaultAggregation: #SUM
      CreditAmountInFunctionalCrcy,
      @AnalyticsDetails.query.hidden : true
      @DefaultAggregation: #SUM
      AmountInFreeDefinedCurrency1,
      @AnalyticsDetails.query.hidden : true
      @DefaultAggregation: #SUM
      AmountInFreeDefinedCurrency2,
      @AnalyticsDetails.query.hidden : true
      @DefaultAggregation: #SUM
      AmountInFreeDefinedCurrency3,
      @AnalyticsDetails.query.hidden : true
      @DefaultAggregation: #SUM
      AmountInFreeDefinedCurrency4,
      @AnalyticsDetails.query.hidden : true
      @DefaultAggregation: #SUM
      AmountInFreeDefinedCurrency5,
      @AnalyticsDetails.query.hidden : true
      @DefaultAggregation: #SUM
      AmountInFreeDefinedCurrency6,
      @AnalyticsDetails.query.hidden : true
      @DefaultAggregation: #SUM
      AmountInFreeDefinedCurrency7,
      @AnalyticsDetails.query.hidden : true
      @DefaultAggregation: #SUM
      AmountInFreeDefinedCurrency8,
      WBSElementInternalID,
      ProjectInternalID,

      _CompanyCode,

      //No where used, only add to fix ATC error
      FiscalYear,
      ChartOfAccounts,
      ControllingArea,
      FiscalYearVariant,
      _JournalEntry,
      _GLAccountInChartOfAccounts,
      _CostCenter,
      _ProfitCenter,
      _LedgerFiscalYearForVariant


}
//where
//  (
//        ValidityStartDate <= $parameters.P_KeyDate
//    and ValidityEndDate   >= $parameters.P_KeyDate
//  )
//  and   FiscalPeriod      <> '000'
```
