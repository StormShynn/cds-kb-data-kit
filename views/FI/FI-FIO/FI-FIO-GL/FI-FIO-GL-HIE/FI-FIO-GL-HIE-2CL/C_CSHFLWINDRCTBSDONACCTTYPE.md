---
name: C_CSHFLWINDRCTBSDONACCTTYPE
description: Cash Flow Statement with Net Income from G/L Account Type
app_component: FI-FIO-GL-HIE-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CSHFLWINDRCTBSDONACCTTYPE')/$value
semantic_en: Cash Flow Statement with Net Income from G/L Account Type
tags:
  - FI
  - account
  - bo:salesorganization
  - component:FI-FIO-GL-HIE-2CL
  - consumption-view
  - FI-FIO
  - FI-FIO-GL
  - FI-FIO-GL-HIE
  - FI-FIO-GL-HIE-2CL
  - lob:finance
  - metadata-only
---
# C_CSHFLWINDRCTBSDONACCTTYPE

**Cash Flow Statement with Net Income from G/L Account Type**

| Property | Value |
|---|---|
| App Component | `FI-FIO-GL-HIE-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CSHFLWINDRCTBSDONACCTTYPE')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `GLAccountHierarchy` | `CHAR(42)` | Financial Statement Version |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `LedgerFiscalYear` | `NUMC(4)` | Fiscal Year of Ledger |
| `Ledger` | `CHAR(2)` | Ledger in General Ledger Accounting |
| `AssetAccountingKeyFigure` | `CHAR(10)` | Key Figure for Asset Accounting |
| `FiscalPeriod` | `NUMC(3)` | Fiscal Period |
| `FiscalQuarter` | `NUMC(1)` | Fiscal Quarter |
| `DebitCreditCode` | `CHAR(1)` | Debit/Credit Code |
| `AssetTransactionType` | `CHAR(3)` | Asset Transaction Type |
| `FinancialTransactionType` | `CHAR(3)` | Financial Transaction Type |
| `AccountingDocumentType` | `CHAR(2)` | Journal Entry Type |
| `SemanticTag` | `CHAR(10)` | Semantic Tag of a Hierarchy Node |
| `GLAccount` | `CHAR(10)` | G/L Account |
| `FunctionalArea` | `CHAR(16)` | Functional Area |
| `CostCenter` | `CHAR(10)` | Cost Center |
| `ProfitCenter` | `CHAR(10)` | Profit Center |
| `AccountingDocument` | `CHAR(10)` | Journal Entry |
| `PostingDate` | `DATS(8)` | Posting Date |
| `Segment` | `CHAR(10)` | Segment for Segmental Reporting |
| `BusinessArea` | `CHAR(4)` | Business Area |
| `CompanyCodeCurrency` | `CUKY(5)` | Company Code Currency |
| `AmountInCompanyCodeCurrency` | `CURR(23)` | Amount in Company Code Currency |
| `CashFlowAmount` | `CURR(23)` | Amount in Company Code Currency |
| `OperatingCashFlowAmount` | `CURR(23)` | Amount in Company Code Currency |
| `GLAcctNetIncomeAmtInCCCrcy` | `CURR(23)` | Net Income Amount In Company Code Currency |
| `IncomeAdjustmentAmount` | `CURR(23)` | Amount in Company Code Currency |
| `OpgTngblAssetDeprAmtInCCCrcy` | `CURR(28)` |  |
| `OpgIntngblAstAmtznAmtInCCCrcy` | `CURR(28)` |  |
| `OpgFxdAstRtrmtAmtInCCCrcy` | `CURR(28)` |  |
| `AssetLiabilityAmount` | `CURR(23)` | Amount in Company Code Currency |
| `ProvisionAmtInCCCrcy` | `CURR(28)` |  |
| `InventoryAmtInCCCrcy` | `CURR(28)` |  |
| `AcctsRblAmtInCCCrcy` | `CURR(28)` |  |
| `AcctsOthRblAmtInCCCrcy` | `CURR(28)` |  |
| `AcctsPyblAmtInCCCrcy` | `CURR(23)` | Increase (Decrease) in Accounts Payable (Net) |
| `AcctsOthPyblAmtInCCCrcy` | `CURR(23)` | Increase (Decrease) in Accounts Other Payables (Net) |
| `OperatingActyCashAmtInCCCrcy` | `CURR(23)` | Net cash generated from continuing operating activities |
| `InvestingCashFlowAmount` | `CURR(23)` | Amount in Company Code Currency |
| `FixedAssetAmount` | `CURR(23)` | Amount in Company Code Currency |
| `TangibleAssetAmount` | `CURR(23)` | Amount in Company Code Currency |
| `TangibleAstAmtInCCCrcy` | `CURR(28)` |  |
| `TangibleAstDeprAmtInCCCrcy` | `CURR(23)` | Depreciation of Tangible Assets |
| `IntangibleAssetAmount` | `CURR(23)` | Amount in Company Code Currency |
| `IntangibleAstAmtInCCCrcy` | `CURR(28)` |  |
| `IntngblAssetAmtznAmtInCCCrcy` | `CURR(23)` | Amortization of Intangible Assets |
| `InvstgFxdAstRtrmtAmtInCCCrcy` | `CURR(23)` | Gain/Loss from Retirement of Fixed Assets |
| `LongTermInvmtAmtInCCCrcy` | `CURR(28)` |  |
| `InvestingActyCashAmtInCCCrcy` | `CURR(23)` | Net cash used in continuing investing activities |
| `FinancingCashFlowAmount` | `CURR(23)` | Amount in Company Code Currency |
| `CommonStockAmtInCCCrcy` | `CURR(23)` | Increase (Decrease) in Common Stocks |
| `NotesReceivableAmtInCCCrcy` | `CURR(23)` | Increase (Decrease) in Notes Receivable |
| `FinancingActyCashAmtInCCCrcy` | `CURR(23)` | Net cash generated from financing activities |
| `NetCashAmtInCCCrcy` | `CURR(23)` | Net Cash Amount In CompanyCode Currency |
| `CashAndCashEqvlntAmtInCCCrcy` | `CURR(23)` | Change (Increase/ Decrease) in cash and cash equivalents |
| `CashValidationBalAmtInCCCrcy` | `INT1(3)` |  |
| `ChartOfAccounts` | `CHAR(4)` | Chart of Accounts |
| `FiscalYearVariant` | `CHAR(2)` | Fiscal Year Variant |
| `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `ControllingArea` | `CHAR(4)` | Controlling Area |
