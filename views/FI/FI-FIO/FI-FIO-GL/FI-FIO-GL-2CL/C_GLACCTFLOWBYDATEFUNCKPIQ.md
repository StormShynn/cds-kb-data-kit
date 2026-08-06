---
name: C_GLACCTFLOWBYDATEFUNCKPIQ
description: GL Account Flow by Date Function
app_component: FI-FIO-GL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GLACCTFLOWBYDATEFUNCKPIQ')/$value
semantic_en: GL Account Flow by Date Function
tags:
  - FI
  - account
  - component:FI-FIO-GL-2CL
  - consumption-view
  - FI-FIO
  - FI-FIO-GL
  - FI-FIO-GL-2CL
  - lob:finance
  - metadata-only
---
# C_GLACCTFLOWBYDATEFUNCKPIQ

**GL Account Flow by Date Function**

| Property | Value |
|---|---|
| App Component | `FI-FIO-GL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GLACCTFLOWBYDATEFUNCKPIQ')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `GLAccountHierarchy` | `CHAR(42)` | Financial Statement Version |
| `DateFunction` | `CHAR(32)` | Relative Date Function ID |
| `PlanningCategory` | `CHAR(10)` | Plan Category |
| `Ledger` | `CHAR(2)` | Ledger in General Ledger Accounting |
| `FiscalYearVariant` | `CHAR(2)` | Fiscal Year Variant |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `GLAccount` | `CHAR(10)` | G/L Account |
| `GLAccountFlowType` | `CHAR(10)` | G/L Account Flow Type |
| `GLAccountTypeFlowType` | `CHAR(12)` | G/L Account Flow Type For G/L Account Type |
| `ProfitCenter` | `CHAR(10)` | Profit Center |
| `GlobalCurrency` | `CUKY(5)` | Global Currency |
| `FiscalYearPeriod` | `NUMC(7)` |  |
| `FiscalPeriod` | `NUMC(3)` | Fiscal Period |
| `FiscalQuarter` | `NUMC(1)` | Fiscal Quarter |
| `FiscalYearQuarter` | `NUMC(5)` | Fiscal Year + Fiscal Quarter |
| `ChartOfAccounts` | `CHAR(4)` | Chart of Accounts |
| `ControllingArea` | `CHAR(4)` | Controlling Area |
| `CostCenter` | `CHAR(10)` | Cost Center |
| `FunctionalArea` | `CHAR(16)` | Functional Area |
| `Segment` | `CHAR(10)` | Segment for Segmental Reporting |
| `SemanticTag` | `CHAR(10)` | Semantic Tag of a Hierarchy Node |
| `Customer` | `CHAR(10)` | Customer Number |
| `CustomerGroup` | `CHAR(2)` | Customer Group |
| `Supplier` | `CHAR(10)` | Supplier |
| `SoldProduct` | `CHAR(40)` | Product Sold |
| `SoldProductGroup` | `CHAR(9)` | Product Sold Group |
| `IsBalanceSheetAccount` | `CHAR(1)` | Is Balance Sheet Account |
| `ActualPlanCode` | `CHAR(1)` | Actual Plan Code |
| `AmountInGlobalCurrency` | `CURR(23)` | Amount in Global Currency |
| `InvertedAmountInGlobalCurrency` | `CURR(23)` | Inverted Amount in Global Currency |
| `WorkingCapitalAmtInGlobCrcy` | `CURR(23)` | Working Capital Amount in Global Currency |
| `WorkingCapitalGlobCrcyPercent` | `DEC(10)` | Working Capital Global Currency Percent |
| `CurrentAssetAmtInGlobCrcy` | `CURR(23)` | Current Asset Amount In Global Currency |
| `CurrentLiabilityAmtInGlobCrcy` | `CURR(23)` | Current Liability Amount in Global Currency |
| `ShEquityAmtInGlobCrcy` | `CURR(23)` | Shareholder Equity Amount In Global Currency |
| `AssetAmtInGlobCrcy` | `CURR(23)` | Asset Amount in Global Currency |
| `LiabilityEquityAmtInGlobCrcy` | `CURR(23)` | Liability and Equity Amount In Global Currency |
| `OpgActyCashAmtInGlobCrcy` | `CURR(23)` | Operating Cash Flow Amount in Global Currency |
| `GrossMarginGlobCrcyPct` | `DEC(23)` | Gross Margin Global Currency Percent |
| `OpgMargGlobCrcyPercent` | `DEC(23)` | Operating Margin Global Currency Percent |
| `ProfitMarginGlobCrcyPercent` | `DEC(23)` | Profit Margin Global Currency Percent |
| `ReturnOnEquityGlobCrcyPct` | `DEC(23)` | Return on Equity Global Currency Percent |
| `ReturnOnAssetGlobCrcyPercent` | `DEC(23)` | Return on Asset Global Currency Percent |
| `RetOnInvestmentGlobCrcyPct` | `DEC(23)` | Return on Investment Global Currency Percent |
| `GrossProfitAmtInGlobCrcy` | `CURR(23)` | Gross Profit Amount in Global Currency |
| `OpgProfitAmtInGlobCrcy` | `CURR(23)` | Operating Profit Amount in Global Currency |
| `CostOfGoodsSoldAmtInGlobCrcy` | `CURR(23)` | Cost Of Goods Sold Amount In Global Currency |
| `GrossRevenueAmtInGlobCrcy` | `CURR(23)` | Gross Revenue Amount in Global Currency |
| `RecognizedRevnAmtInGlobCrcy` | `CURR(23)` | Recognized Revenue Amount In Global Currency |
| `AssetTurnoverGlobCrcyPercent` | `DEC(23)` | Asset Turnover Global Currency Percent |
| `InvtryTurnoverGlobCrcyPct` | `DEC(23)` | Inventory Turnover Global Currency Percent |
| `EBTAmountInGlobCrcy` | `CURR(23)` | EBT Amount in Global Currency |
| `EBITAmountInGlobCrcy` | `CURR(23)` | EBIT Amount in Global Currency |
| `EBITDAAmountInGlobCrcy` | `CURR(23)` | EBITDA Amount in Global Currency |
| `NetIncomeAmtInGlobCrcy` | `CURR(23)` | Net Income Amount in Global Currency |
| `TotalOpgExpnInGlobCrcy` | `CURR(23)` | Total Operating Expense Amount in Global Currency |
| `OpgExpnInGlobCrcy` | `CURR(23)` | Operating Expense Amount in Global Currency |
| `OthOpgExpnInGlobCrcy` | `CURR(23)` | Other Operating Expense Amount in Global Currency |
| `StrtgInventoryAmtInGlobCrcy` | `CURR(23)` | Starting Inventory Amount in Global Currency |
| `ChgsInventoryAmtInGlobCrcy` | `CURR(23)` | Changes of Inventory Amount in Global Currency |
| `InventoryAmtInGlobCrcy` | `CURR(23)` | Inventory Amount in Global Currency |
| `IncomeTaxAmtInGlobCrcy` | `CURR(23)` | Income Tax Amount in Global Currency |
| `InterestAmtInGlobCrcy` | `CURR(23)` | Interest Amount in Global Currency |
| `TngblAstDeprAmtInGlobCrcy` | `CURR(23)` | Tangible Asset Depreciation Amount in Global Currency |
| `IntngblAssetAmtznAmtInGlobCrcy` | `CURR(23)` | Intangible Asset Amortization Amount in Global Currency |
| `FxdAssetRtrmtAmtInGlobCrcy` | `CURR(23)` | Fixed Asset Retirement Amount in Global Currency |
| `ChgsProvisionAmtInGlobCrcy` | `CURR(23)` | Changes Provision Amount in Global Currency |
| `ProvisionAmtInGlobCrcy` | `CURR(23)` | Provisions Amount in Global Currency |
| `ChgsAcctsRblAmtInGlobCrcy` | `CURR(23)` | Changes of Accounts Receivable Amount in Global Currency |
| `AcctsRblAmtInGlobCrcy` | `CURR(23)` | Accounts Receivable Amount in Global Currency |
| `ChgsAcctsOthRblAmtInGlobCrcy` | `CURR(23)` | Changes of Accounts Other Receivable Amount in Global Crcy |
| `AcctsOthRblAmtInGlobCrcy` | `CURR(23)` | Accounts Other Receivables Amount in Global Currency |
| `ChgsAcctsPyblAmtInGlobCrcy` | `CURR(23)` | Changes of Accounts Payable Amount in Global Currency |
| `AcctsPyblAmtInGlobCrcy` | `CURR(23)` | Accounts Payable Amount in Global Currency |
| `ChgsAcctsOthPyblAmtInGlobCrcy` | `CURR(23)` | Changes of Accounts Other Payable Amount in Global Crcy |
| `AcctsOthPyblAmtInGlobCrcy` | `CURR(23)` | Accounts Other Payable Amount in Global Currency |
| `EBITDAMarginGlobCrcyPercent` | `DEC(23)` | EBITDA Margin Global Currency Percent |
| `EBITMarginGlobCrcyPercent` | `DEC(23)` | EBIT Margin Global Currency Percent |
| `RetOnCptlEmployedGlobCrcyPct` | `DEC(23)` | Return on Capital Employed Global Currency Percent |
| `DebtToEquityGlobCrcyPercent` | `DEC(23)` | Debt to Equity Global Currency Percent |
| `DebtToAssetGlobCrcyPercent` | `DEC(23)` | Debt to Asset Global Currency Percent |
| `InterestCoverageGlobCrcyPct` | `DEC(23)` | Interest Coverage Global Currency Percent |
| `DegOfFinLeverageGlobCrcyRatio` | `DEC(10)` | Degree of Financial Leverage Global Currency Ratio |
| `OpgIncomeAmtInGlobCrcy` | `CURR(23)` | Operating Income Amount In Global Currency |
| `LedgerFiscalYear` | `NUMC(4)` | Fiscal Year of Ledger |
