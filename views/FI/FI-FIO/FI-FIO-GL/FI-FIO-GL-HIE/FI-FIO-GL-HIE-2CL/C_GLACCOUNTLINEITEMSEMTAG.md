---
name: C_GLACCOUNTLINEITEMSEMTAG
description: This CDS view provides the prerequisites for answering the following business questions: What are the key figure amounts for a specific company code in a certain fiscal year? What is the ratio of margin to revenue? What is my net cash amount in company code currency?
app_component: FI-FIO-GL-HIE-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GLACCOUNTLINEITEMSEMTAG')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business questions: What are the key figure amounts for a specific company code in a certain fiscal year? What is the ratio of margin to revenue? What is my net cash amount in company code currency?
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
  - metadata-only
---
# C_GLACCOUNTLINEITEMSEMTAG

**This CDS view provides the prerequisites for answering the following business questions: What are the key figure amounts for a specific company code in a certain fiscal year? What is the ratio of margin to revenue? What is my net cash amount in company code currency?**

| Property | Value |
|---|---|
| App Component | `FI-FIO-GL-HIE-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GLACCOUNTLINEITEMSEMTAG')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `GLAccountHierarchy` | `CHAR(42)` | Financial Statement Version |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `LedgerFiscalYear` | `NUMC(4)` | Fiscal Year of Ledger |
| `Ledger` | `CHAR(2)` | Ledger in General Ledger Accounting |
| `FiscalPeriod` | `NUMC(3)` | Fiscal Period |
| `Project` | `CHAR(24)` | Project |
| `FiscalQuarter` | `NUMC(1)` | Fiscal Quarter |
| `WBSElement` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) |
| `SemanticTag` | `CHAR(10)` | Semantic Tag of a Hierarchy Node |
| `GLAccount` | `CHAR(10)` | G/L Account |
| `FunctionalArea` | `CHAR(16)` | Functional Area |
| `CostCenter` | `CHAR(10)` | Cost Center |
| `ProfitCenter` | `CHAR(10)` | Profit Center |
| `AccountingDocument` | `CHAR(10)` | Journal Entry |
| `Segment` | `CHAR(10)` | Segment for Segmental Reporting |
| `RevenueAmountInCompanyCodeCrcy` | `CURR(23)` | Revenue Amount in Company Code Currency |
| `RevenueInGlobalCurrency` | `CURR(23)` | Revenue Amount in Global Currency |
| `GrossRevenueAmtInCCCrcy` | `CURR(23)` | Gross Revenue |
| `RecognizedRevnAmtInCCCrcy` | `CURR(23)` | Recognized Revenue |
| `RecognizedRevnAmtInGlobCrcy` | `CURR(23)` | Recognized Revenue |
| `RevenueAdjustmentAmtInCCCrcy` | `CURR(23)` | Revenue Adjustment |
| `RevenueAdjustAmtInGlobCrcy` | `CURR(23)` | Revenue Adjustment |
| `DeferredRevenueAmtInCCCrcy` | `CURR(23)` | Deferred Revenue |
| `AccruedRevenueAmtInCCCrcy` | `CURR(23)` | Accrued Revenue |
| `RecognizableRevenueAmtInCCCrcy` | `CURR(23)` | Actual Revenue |
| `RecognizableRevnAmtInGlobCrcy` | `CURR(23)` | Actual Revenue |
| `BilledRevenueAmtInCoCodeCrcy` | `CURR(23)` | Actual Revenue |
| `BilledRevenueAmtInGlobCrcy` | `CURR(23)` | Actual Revenue |
| `BilledValnQtyInCostSourceUnit` | `QUAN(23)` | Billed Quantity |
| `UnbilledRevnInCoCodeCrcy` | `CURR(23)` | Unbilled Revenue |
| `RecognizedMarginAmtInCCCrcy` | `CURR(23)` | Recognized Margin |
| `MnlContrAccrPnLItmAmtInCCCrcy` | `CURR(23)` | Manual Contract Accruals Income Statement in CCCrcy |
| `CostAmountInCompanyCodeCrcy` | `CURR(23)` | Cost Amount in Company Code Currency |
| `CostOfGoodsSoldAmtInGlobCrcy` | `CURR(23)` | Cost of Goods Sold - Total |
| `FxdCOGSAmtInGlobCrcy` | `CURR(23)` | Cost of Goods Sold - Fixed |
| `RecognizedCOGSAmtInCCCrcy` | `CURR(23)` | Recognized COS |
| `COGSAdjustmentAmtInCCCrcy` | `CURR(23)` | COS Adjustment |
| `DeferredCOGSAmtInCCCrcy` | `CURR(23)` | Deferred COS |
| `AccruedCOGSAmtInCCCrcy` | `CURR(23)` | Accrued COS |
| `RecognizableCostAmtInCCCrcy` | `CURR(23)` | Actual Cost |
| `ImminentLossRsrvAmtInCCCrcy` | `CURR(23)` | Imminent Loss Reserve |
| `SalesDeductReserveAmtInCCCrcy` | `CURR(23)` | Reserves for Anticipated Sales Deductions |
| `UnrlzdCostsReserveAmtInCCCrcy` | `CURR(23)` | Reserves for Unrealized Costs |
| `MnlContrAccrBalShtAmtInCCCrcy` | `CURR(23)` | Manual Contract Accruals Balance Sheet in CCCrcy |
| `SalesDeductionAmountInGlobCrcy` | `CURR(23)` | Sales Deduction |
| `SalesDeductionAmtInCoCodeCrcy` | `CURR(23)` | Sales Deduction |
| `PriceDifferenceAmtInGlobCrcy` | `CURR(23)` | Price Differences |
| `AdminOverheadAmtInGlobCrcy` | `CURR(23)` | Administration Overhead |
| `SalesOverheadAmtInGlobCrcy` | `CURR(23)` | Sales Overhead |
| `MarketingOverheadAmtInGlobCrcy` | `CURR(23)` | Marketing Overhead |
| `RnDOverheadAmtInGlobCrcy` | `CURR(23)` | Research and Development Overhead |
| `LongTermInvmtAmtInCCCrcy` | `CURR(23)` | Increase (Decrease) in Long-term Investments |
| `AcctsRblAmtInCCCrcy` | `CURR(23)` | Increase (Decrease) in Accounts Receivable (Net) |
| `AcctsOthRblAmtInCCCrcy` | `CURR(23)` | Increase (Decrease) in Accounts Other Receivable (Net) |
| `AcctsPyblAmtInCCCrcy` | `CURR(23)` | Increase (Decrease) in Accounts Payable (Net) |
| `AcctsOthPyblAmtInCCCrcy` | `CURR(23)` | Increase (Decrease) in Accounts Other Payables (Net) |
| `ProvisionAmtInCCCrcy` | `CURR(23)` | Increase/Decrease of Provisions |
| `NotesReceivableAmtInCCCrcy` | `CURR(23)` | Increase (Decrease) in Notes Receivable |
| `TangibleAstDeprAmtInCCCrcy` | `CURR(23)` | Depreciation of Tangible Assets |
| `IntngblAssetAmtznAmtInCCCrcy` | `CURR(23)` | Amortization of Intangible Assets |
| `TangibleAstAmtInCCCrcy` | `CURR(23)` | Purchase (Sale) of Tangible Assets |
| `IntangibleAstAmtInCCCrcy` | `CURR(23)` | Purchase (Sale) of Intangible Assets |
| `FixedAssetRtrmtAmtInCCCrcy` | `CURR(23)` | Gain/Loss from Retirement of Fixed Assets |
| `InventoryAmtInCCCrcy` | `CURR(23)` | Increase/Decrease of Inventories |
| `CommonStockAmtInCCCrcy` | `CURR(23)` | Increase (Decrease) in Common Stocks |
| `CashAndCashEqvlntAmtInCCCrcy` | `CURR(23)` | Change (Increase/ Decrease) in cash and cash equivalents |
| `AssetAmtInCCCrcy` | `CURR(23)` | Asset Amount In CompanyCode Currency |
| `LiabilityEquityAmtInCCCrcy` | `CURR(23)` | Liabilities and Equity Amount In Company Code Currency |
| `NotAssignedAmtInCCCrcy` | `CURR(23)` | Not Assigned Amount In Company Code Currency |
| `NetResultAmtInCCCrcy` | `CURR(23)` | Net Result Amount In Company Code Currency |
| `PnLResultAmtInCCCrcy` | `CURR(23)` | Profit for the Period |
| `GLAcctNetIncomeAmtInCCCrcy` | `CURR(23)` | Net Income Amount In Company Code Currency |
| `VarblCOGSAmtInGlobCrcy` | `CURR(23)` | Cost of Goods Sold - Variable |
| `ContrbnMargin1AmtInGlobCrcy` | `CURR(23)` | Contribution Margin I |
| `ContrbnMargin2AmtInGlobCrcy` | `CURR(23)` | Contribution Margin II |
| `ContrbnMargin3AmtInGlobCrcy` | `CURR(23)` | Contribution Margin III |
| `OperatingActyCashAmtInCCCrcy` | `CURR(23)` | Net cash generated from continuing operating activities |
| `InvestingActyCashAmtInCCCrcy` | `CURR(23)` | Net cash used in continuing investing activities |
| `FinancingActyCashAmtInCCCrcy` | `CURR(23)` | Net cash generated from financing activities |
| `NetCashAmtInCCCrcy` | `CURR(23)` | Net Cash Amount In CompanyCode Currency |
| `AssetLiabilityAmtInCCCrcy` | `CURR(23)` | Asset/Liability Amount in Company Code Currency |
| `RecognizedMarginPercent` | `INT1(3)` |  |
| `CompanyCodeCurrency` | `CUKY(5)` | Company Code Currency |
| `GlobalCurrency` | `CUKY(5)` | Global Currency |
| `BalanceTransactionCurrency` | `CUKY(5)` | Balance Transaction Currency |
| `TransactionCurrency` | `CUKY(5)` | Transaction Currency |
| `FunctionalCurrency` | `CUKY(5)` | Functional Currency |
| `FreeDefinedCurrency1` | `CUKY(5)` | Freely Defined Currency 1 |
| `FreeDefinedCurrency2` | `CUKY(5)` | Freely Defined Currency 2 |
| `FreeDefinedCurrency3` | `CUKY(5)` | Freely Defined Currency 3 |
| `FreeDefinedCurrency4` | `CUKY(5)` | Freely Defined Currency 4 |
| `FreeDefinedCurrency5` | `CUKY(5)` | Freely Defined Currency 5 |
| `FreeDefinedCurrency6` | `CUKY(5)` | Freely Defined Currency 6 |
| `FreeDefinedCurrency7` | `CUKY(5)` | Freely Defined Currency 7 |
| `FreeDefinedCurrency8` | `CUKY(5)` | Freely Defined Currency 8 |
| `AmountInCompanyCodeCurrency` | `CURR(23)` | Amount in Company Code Currency |
| `AmountInTransactionCurrency` | `CURR(23)` | Amount in Transaction Currency |
| `AmountInGlobalCurrency` | `CURR(23)` | Amount in Global Currency |
| `AmountInBalanceTransacCrcy` | `CURR(23)` | Amount in Balance Transaction Currency |
| `AmountInFunctionalCurrency` | `CURR(23)` | Amount in Functional Currency |
| `DebitAmountInFunctionalCrcy` | `CURR(23)` | Debit Amount in Functional Currency |
| `CreditAmountInFunctionalCrcy` | `CURR(23)` | Credit Amount in Functional Currency |
| `AmountInFreeDefinedCurrency1` | `CURR(23)` | Amount in Freely Defined Currency 1 |
| `AmountInFreeDefinedCurrency2` | `CURR(23)` | Amount in Freely Defined Currency 2 |
| `AmountInFreeDefinedCurrency3` | `CURR(23)` | Amount in Freely Defined Currency 3 |
| `AmountInFreeDefinedCurrency4` | `CURR(23)` | Amount in Freely Defined Currency 4 |
| `AmountInFreeDefinedCurrency5` | `CURR(23)` | Amount in Freely Defined Currency 5 |
| `AmountInFreeDefinedCurrency6` | `CURR(23)` | Amount in Freely Defined Currency 6 |
| `AmountInFreeDefinedCurrency7` | `CURR(23)` | Amount in Freely Defined Currency 7 |
| `AmountInFreeDefinedCurrency8` | `CURR(23)` | Amount in Freely Defined Currency 8 |
| `WBSElementInternalID` | `NUMC(8)` | WBS Element Internal ID |
| `ProjectInternalID` | `NUMC(8)` | Project Internal ID |
| `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `ChartOfAccounts` | `CHAR(4)` | Chart of Accounts |
| `ControllingArea` | `CHAR(4)` | Controlling Area |
| `FiscalYearVariant` | `CHAR(2)` | Fiscal Year Variant |
