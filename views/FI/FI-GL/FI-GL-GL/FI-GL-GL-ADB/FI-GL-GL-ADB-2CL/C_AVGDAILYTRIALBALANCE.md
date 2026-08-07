---
name: C_AVGDAILYTRIALBALANCE
description: ADB Key Figures - Query
app_component: FI-GL-GL-ADB-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_AVGDAILYTRIALBALANCE')/$value
semantic_en: ADB Key Figures - Query
keywords:
  - ADB Key Figures - Query
  - ADB Key Figures - Query
  - ADB Key Figures - Query
tags:
  - FI
  - bo:companycode
  - component:FI-GL-GL-ADB-2CL
  - consumption-view
  - FI-GL
  - FI-GL-GL
  - FI-GL-GL-ADB
  - FI-GL-GL-ADB-2CL
  - lob:finance
  - metadata-only
---
# C_AVGDAILYTRIALBALANCE

**ADB Key Figures - Query**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-ADB-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_AVGDAILYTRIALBALANCE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CompanyCodeName` |  | |  |  | `CHAR(25)` | Name of Company Code or Company |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `GLAccountName` |  | |  |  | `CHAR(20)` | G/L Account Name |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `SourceLedger` |  | |  |  | `CHAR(2)` | Source Ledger |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `FlowOfFundsLedgerFiscalYear` |  | |  |  | `NUMC(4)` | Funds of Flow Ledger Fiscal Year |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `ProfitCenterName` |  | |  |  | `CHAR(20)` | Description of Profit Center |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `FunctionalAreaName` |  | |  |  | `CHAR(25)` | Name of the Functional Area |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `SegmentName` |  | |  |  | `CHAR(50)` | Segment Name |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `CostCenterName` |  | |  |  | `CHAR(20)` | Cost Center Name |
| `PartnerProfitCenter` |  | |  |  | `CHAR(10)` | Partner Profit Center |
| `PartnerProfitCenterName` |  | |  |  | `CHAR(20)` | Description of Profit Center |
| `PartnerFunctionalArea` |  | |  |  | `CHAR(16)` | Partner Functional Area |
| `PartnerFunctionalAreaName` |  | |  |  | `CHAR(25)` | Name of the Functional Area |
| `PartnerCompany` |  | |  |  | `CHAR(6)` | Company ID of Trading Partner |
| `PartnerSegment` |  | |  |  | `CHAR(10)` | Partner Segment for Segmental Reporting |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `FinancialServicesProductGroup` |  | |  |  | `CHAR(10)` | Financial Services Product Group |
| `FinancialServicesBranch` |  | |  |  | `CHAR(10)` | Financial Services Branch |
| `FinancialDataSource` |  | |  |  | `CHAR(10)` | Financial Data Source |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `CustomerSupplierCountry` |  | |  |  | `CHAR(3)` | Customer or Supplier Country/Region |
| `CustomerSupplierIndustry` |  | |  |  | `CHAR(4)` | Customer Supplier Industry |
| `BalanceTransactionCurrency` |  | |  |  | `CUKY(5)` | Balance Transaction Currency |
| `AmountInBalanceTransacCrcy` |  | |  |  | `CURR(23)` | Amount in Balance Transaction Currency |
| `PriorDayBalInBalTransCrcy` |  | |  |  | `CURR(27)` | Prior Day Balance In Balance Transaction Currency |
| `CurDayActyAmtInBalTransCrcy` |  | |  |  | `CURR(27)` | Current Day Activity In Balance Transaction Currency |
| `PriorMonthBalInBalTransCrcy` |  | |  |  | `CURR(27)` | Prior Month Balance In Balance Transaction Currency |
| `CurMonthActyAmtInBalTransCrcy` |  | |  |  | `CURR(27)` | Current Month Activity In Balance Transaction Currency |
| `YTDBalInBalTransCrcy` |  | |  |  | `CURR(27)` | Year-to-Date Balance In Balance Transaction Currency |
| `MTDAvgDailyBalInBalTransCrcy` |  | |  |  | `CURR(27)` | Month-to-Date ADB In Balance Transaction Currency |
| `QTDAvgDailyBalInBalTransCrcy` |  | |  |  | `CURR(27)` | Quarter-to-Date ADB In Balance Transaction Currency |
| `YTDAvgDailyBalInBalTransCrcy` |  | |  |  | `CURR(27)` | Year-to-Date ADB In Balance Transaction Currency |
| `MTDAvgActyAmtInBalTransCrcy` |  | |  |  | `CURR(27)` | Month-to-Date Avg Activity In Balance Transaction Currency |
| `QTDActyAmtInBalTransCrcy` |  | |  |  | `CURR(27)` | Quarter-to-Date Acty In Balance Transaction Currency |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `PriorDayBalInCCCrcy` |  | |  |  | `CURR(27)` | Prior Day Balance In Company Code Currency |
| `CurDayActyAmtInCCCrcy` |  | |  |  | `CURR(27)` | Current Day Activity In Company Code Currency |
| `PriorMonthBalInCCCrcy` |  | |  |  | `CURR(27)` | Prior Month Balance In Company Code Currency |
| `CurMonthActyAmtInCCCrcy` |  | |  |  | `CURR(27)` | Current Month Activity In Company Code Currency |
| `YTDBalInCCCrcy` |  | |  |  | `CURR(27)` | Year-to-Date Balance In Company Code Currency |
| `MTDAvgDailyBalInCCCrcy` |  | |  |  | `CURR(27)` | Month-to-date ADB In Company Code Currency |
| `QTDAvgDailyBalInCCCrcy` |  | |  |  | `CURR(27)` | Quarter-to-Date ADB In Company Code Currency |
| `YTDAvgDailyBalInCCCrcy` |  | |  |  | `CURR(27)` | Year-to-Date ADB In Company Code Currency |
| `MTDAvgActyAmtInCCCrcy` |  | |  |  | `CURR(27)` | Month-to-Date Average Activity In Company Code Currency |
| `QTDActyAmtInCCCrcy` |  | |  |  | `CURR(27)` | Quarter-to-Date Activity In Company Code Currency |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `AmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `PriorDayBalInGlobCrcy` |  | |  |  | `CURR(27)` | Prior Day Balance In Global Currency |
| `CurDayActyAmtInGlobCrcy` |  | |  |  | `CURR(27)` | Current Day Activity In Global Currency |
| `PriorMonthBalInGlobCrcy` |  | |  |  | `CURR(27)` | Prior Month Balance In Global Currency |
| `CurMonthActyAmtInGlobCrcy` |  | |  |  | `CURR(27)` | Current Month Activity In Global Currency |
| `YTDBalInGlobCrcy` |  | |  |  | `CURR(27)` | Year-to-Date Balance In Global Currency |
| `MTDAvgDailyBalInGlobCrcy` |  | |  |  | `CURR(27)` | Month-to-Date Average Daily Balances In Global Currency |
| `QTDAvgDailyBalInGlobCrcy` |  | |  |  | `CURR(27)` | Quarter-to-Date ADB In Global Currency |
| `YTDAvgDailyBalInGlobCrcy` |  | |  |  | `CURR(27)` | Year-to-Date ADB In Global Currency |
| `MTDAvgActyAmtInGlobCrcy` |  | |  |  | `CURR(27)` | Month-to-Date Average Activity In Balance Global Currency |
| `QTDActyAmtInGlobCrcy` |  | |  |  | `CURR(27)` | Quarter-to-Date Activity In Balance GLobal Currency |
| `FreeDefinedCurrency1` |  | |  |  | `CUKY(5)` | Freely Defined Currency 1 |
| `AmountInFreeDefinedCurrency1` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 1 |
| `PriorDayBalInFDCrcy1` |  | |  |  | `CURR(27)` | Prior Day Balance In Free-Defined Currency 1 |
| `CurDayActyAmtInFDCrcy1` |  | |  |  | `CURR(27)` | Current Day Activity In Free-Defined Currency 1 |
| `PriorMonthBalInFDCrcy1` |  | |  |  | `CURR(27)` | Prior Month Balance In Free-Defined Currency 1 |
| `CurMonthActyAmtInFDCrcy1` |  | |  |  | `CURR(27)` | Current Month Activity In Free-Defined Currency 1 |
| `YTDBalInFDCrcy1` |  | |  |  | `CURR(27)` | Year-to-Date Balance In Free-Defined Currency 1 |
| `MTDAvgDailyBalInFDCrcy1` |  | |  |  | `CURR(27)` | Month-to-Date ADB In Free-Defined Currency 1 |
| `QTDAvgDailyBalInFDCrcy1` |  | |  |  | `CURR(27)` | Quarter-to-Date ADB In Free-Defined Currency 1 |
| `YTDAvgDailyBalInFDCrcy1` |  | |  |  | `CURR(27)` | Year-to-Date ADB In Free-Defined Currency 1 |
| `MTDAvgActyAmtInFDCrcy1` |  | |  |  | `CURR(27)` | Month-to-Date Avg Activity In Free-Defined Currency 1 |
| `QTDActyAmtInFDCrcy1` |  | |  |  | `CURR(27)` | Quarter-to-Date Activity In Free-Defined Currency 1 |
| `FreeDefinedCurrency2` |  | |  |  | `CUKY(5)` | Freely Defined Currency 2 |
| `AmountInFreeDefinedCurrency2` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 2 |
| `PriorDayBalInFDCrcy2` |  | |  |  | `CURR(27)` | Prior Day Balance In Free-Defined Currency 2 |
| `CurDayActyAmtInFDCrcy2` |  | |  |  | `CURR(27)` | Current Day Activity In Free-Defined Currency 2 |
| `PriorMonthBalInFDCrcy2` |  | |  |  | `CURR(27)` | Prior Month Balance In Free-Defined Currency 2 |
| `CurMonthActyAmtInFDCrcy2` |  | |  |  | `CURR(27)` | Current Month Activity In Free-Defined Currency 2 |
| `YTDBalInFDCrcy2` |  | |  |  | `CURR(27)` | Year-to-Date Balance In Free-Defined Currency 2 |
| `MTDAvgDailyBalInFDCrcy2` |  | |  |  | `CURR(27)` | Month-to-Date ADB In Free-Defined Currency 2 |
| `QTDAvgDailyBalInFDCrcy2` |  | |  |  | `CURR(27)` | Quarter-to-Date ADB In Free-Defined Currency 2 |
| `YTDAvgDailyBalInFDCrcy2` |  | |  |  | `CURR(27)` | Year-to-Date ADB In Free-Defined Currency 2 |
| `MTDAvgActyAmtInFDCrcy2` |  | |  |  | `CURR(27)` | Month-to-Date Avg Activity In Free-Defined Currency 2 |
| `QTDActyAmtInFDCrcy2` |  | |  |  | `CURR(27)` | Quarter-to-Date Avg Activity In Free-Defined Currency 2 |
| `FreeDefinedCurrency3` |  | |  |  | `CUKY(5)` | Freely Defined Currency 3 |
| `AmountInFreeDefinedCurrency3` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 3 |
| `PriorDayBalInFDCrcy3` |  | |  |  | `CURR(27)` | Prior Day Balance In Free-Defined Currency 3 |
| `CurDayActyAmtInFDCrcy3` |  | |  |  | `CURR(27)` | Current Day Activity In Free-Defined Currency 3 |
| `PriorMonthBalInFDCrcy3` |  | |  |  | `CURR(27)` | Prior Month Balance In Free-Defined Currency 3 |
| `CurMonthActyAmtInFDCrcy3` |  | |  |  | `CURR(27)` | Current Month Activity In Free-Defined Currency 3 |
| `YTDBalInFDCrcy3` |  | |  |  | `CURR(27)` | Year-to-Date Balance In Free-Defined Currency 3 |
| `MTDAvgDailyBalInFDCrcy3` |  | |  |  | `CURR(27)` | Month-to-Date ADB In Free-Defined Currency 3 |
| `QTDAvgDailyBalInFDCrcy3` |  | |  |  | `CURR(27)` | Quarter-to-Date ADB In Free-Defined Currency 3 |
| `YTDAvgDailyBalInFDCrcy3` |  | |  |  | `CURR(27)` | Year-to-Date ADB In Free-Defined Currency 3 |
| `MTDAvgActyAmtInFDCrcy3` |  | |  |  | `CURR(27)` | Month-to-Date Avg Activity In Free-Defined Currency 3 |
| `QTDActyAmtInFDCrcy3` |  | |  |  | `CURR(27)` | Quarter-to-Date Avg Activity In Free-Defined Currency 3 |
| `FreeDefinedCurrency4` |  | |  |  | `CUKY(5)` | Freely Defined Currency 4 |
| `AmountInFreeDefinedCurrency4` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 4 |
| `PriorDayBalInFDCrcy4` |  | |  |  | `CURR(27)` | Prior Day Balance In Free-Defined Currency 4 |
| `CurDayActyAmtInFDCrcy4` |  | |  |  | `CURR(27)` | Current Day Activity In Free-Defined Currency 4 |
| `PriorMonthBalInFDCrcy4` |  | |  |  | `CURR(27)` | Prior Month Balance In Free-Defined Currency 4 |
| `CurMonthActyAmtInFDCrcy4` |  | |  |  | `CURR(27)` | Current Month Activity In Free-Defined Currency 4 |
| `YTDBalInFDCrcy4` |  | |  |  | `CURR(27)` | Year-to-Date Balance In Free-Defined Currency 4 |
| `MTDAvgDailyBalInFDCrcy4` |  | |  |  | `CURR(27)` | Month-to-Date ADB In Free-Defined Currency 4 |
| `QTDAvgDailyBalInFDCrcy4` |  | |  |  | `CURR(27)` | Quarter-to-Date ADB In Free-Defined Currency 4 |
| `YTDAvgDailyBalInFDCrcy4` |  | |  |  | `CURR(27)` | Year-to-Date ADB In Free-Defined Currency 4 |
| `MTDAvgActyAmtInFDCrcy4` |  | |  |  | `CURR(27)` | Month-to-Date Avg Activity In Free-Defined Currency 4 |
| `QTDActyAmtInFDCrcy4` |  | |  |  | `CURR(27)` | Quarter-to-Date Activity In Free-Defined Currency 4 |
| `FreeDefinedCurrency5` |  | |  |  | `CUKY(5)` | Freely Defined Currency 5 |
| `AmountInFreeDefinedCurrency5` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 5 |
| `PriorDayBalInFDCrcy5` |  | |  |  | `CURR(27)` | Prior Day Balance In Free-Defined Currency 5 |
| `CurDayActyAmtInFDCrcy5` |  | |  |  | `CURR(27)` | Current Day Activity In Free-Defined Currency 5 |
| `PriorMonthBalInFDCrcy5` |  | |  |  | `CURR(27)` | Prior Month Balance In Free-Defined Currency 5 |
| `CurMonthActyAmtInFDCrcy5` |  | |  |  | `CURR(27)` | Current Month Activity In Free-Defined Currency 5 |
| `YTDBalInFDCrcy5` |  | |  |  | `CURR(27)` | Year-to-Date Balance In Free-Defined Currency 5 |
| `MTDAvgDailyBalInFDCrcy5` |  | |  |  | `CURR(27)` | Month-to-Date ADB In Free-Defined Currency 5 |
| `QTDAvgDailyBalInFDCrcy5` |  | |  |  | `CURR(27)` | Quarter-to-Date ADB In Free-Defined Currency 5 |
| `YTDAvgDailyBalInFDCrcy5` |  | |  |  | `CURR(27)` | Year-to-Date ADB In Free-Defined Currency 5 |
| `MTDAvgActyAmtInFDCrcy5` |  | |  |  | `CURR(27)` | Month-to-Date Avg Activity In Free-Defined Currency 5 |
| `QTDActyAmtInFDCrcy5` |  | |  |  | `CURR(27)` | Quarter-to-Date Activity In Free-Defined Currency 5 |
| `FreeDefinedCurrency6` |  | |  |  | `CUKY(5)` | Freely Defined Currency 6 |
| `AmountInFreeDefinedCurrency6` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 6 |
| `PriorDayBalInFDCrcy6` |  | |  |  | `CURR(27)` | Prior Day Balance In Free-Defined Currency 6 |
| `CurDayActyAmtInFDCrcy6` |  | |  |  | `CURR(27)` | Current Day Activity In Free-Defined Currency 6 |
| `PriorMonthBalInFDCrcy6` |  | |  |  | `CURR(27)` | Prior Month Balance In Free-Defined Currency 6 |
| `CurMonthActyAmtInFDCrcy6` |  | |  |  | `CURR(27)` | Current Month Activity In Free-Defined Currency 6 |
| `YTDBalInFDCrcy6` |  | |  |  | `CURR(27)` | Year-to-Date Balance In Free-Defined Currency 6 |
| `MTDAvgDailyBalInFDCrcy6` |  | |  |  | `CURR(27)` | Month-to-Date ADB In Free-Defined Currency 6 |
| `QTDAvgDailyBalInFDCrcy6` |  | |  |  | `CURR(27)` | Quarter-to-Date ADB In Free-Defined Currency 6 |
| `YTDAvgDailyBalInFDCrcy6` |  | |  |  | `CURR(27)` | Year-to-Date ADB In Free-Defined Currency 6 |
| `MTDAvgActyAmtInFDCrcy6` |  | |  |  | `CURR(27)` | Month-to-Date Avg Activity In Free-Defined Currency 6 |
| `QTDActyAmtInFDCrcy6` |  | |  |  | `CURR(27)` | Quarter-to-Date Activity In Free-Defined Currency 6 |
| `FreeDefinedCurrency7` |  | |  |  | `CUKY(5)` | Freely Defined Currency 7 |
| `AmountInFreeDefinedCurrency7` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 7 |
| `PriorDayBalInFDCrcy7` |  | |  |  | `CURR(27)` | Prior Day Balance In Free-Defined Currency 7 |
| `CurDayActyAmtInFDCrcy7` |  | |  |  | `CURR(27)` | Current Day Activity In Free-Defined Currency 7 |
| `PriorMonthBalInFDCrcy7` |  | |  |  | `CURR(27)` | Prior Month Balance In Free-Defined Currency 7 |
| `CurMonthActyAmtInFDCrcy7` |  | |  |  | `CURR(27)` | Current Month Activity In Free-Defined Currency 7 |
| `YTDBalInFDCrcy7` |  | |  |  | `CURR(27)` | Year-to-Date Balance In Free-Defined Currency 7 |
| `MTDAvgDailyBalInFDCrcy7` |  | |  |  | `CURR(27)` | Month-to-Date ADB In Free-Defined Currency 7 |
| `QTDAvgDailyBalInFDCrcy7` |  | |  |  | `CURR(27)` | Quarter-to-Date ADB In Free-Defined Currency 7 |
| `YTDAvgDailyBalInFDCrcy7` |  | |  |  | `CURR(27)` | Year-to-Date ADB In Free-Defined Currency 7 |
| `MTDAvgActyAmtInFDCrcy7` |  | |  |  | `CURR(27)` | Month-to-Date Avg Activity In Free-Defined Currency 7 |
| `QTDActyAmtInFDCrcy7` |  | |  |  | `CURR(27)` | Quarter-to-Date Activity In Free-Defined Currency 7 |
| `FreeDefinedCurrency8` |  | |  |  | `CUKY(5)` | Freely Defined Currency 8 |
| `AmountInFreeDefinedCurrency8` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 8 |
| `PriorDayBalInFDCrcy8` |  | |  |  | `CURR(27)` | Prior Day Balance In Free-Defined Currency 8 |
| `CurDayActyAmtInFDCrcy8` |  | |  |  | `CURR(27)` | Current Day Activity In Free-Defined Currency 8 |
| `PriorMonthBalInFDCrcy8` |  | |  |  | `CURR(27)` | Prior Month Balance In Free-Defined Currency 8 |
| `CurMonthActyAmtInFDCrcy8` |  | |  |  | `CURR(27)` | Current Month Activity In Free-Defined Currency 8 |
| `YTDBalInFDCrcy8` |  | |  |  | `CURR(27)` | Year-to-Date Balance In Free-Defined Currency 8 |
| `MTDAvgDailyBalInFDCrcy8` |  | |  |  | `CURR(27)` | Month-to-Date ADB In Free-Defined Currency 8 |
| `QTDAvgDailyBalInFDCrcy8` |  | |  |  | `CURR(27)` | Quarter-to-Date ADB In Free-Defined Currency 8 |
| `YTDAvgDailyBalInFDCrcy8` |  | |  |  | `CURR(27)` | Year-to-Date ADB In Free-Defined Currency 8 |
| `MTDAvgActyAmtInFDCrcy8` |  | |  |  | `CURR(27)` | Month-to-Date Avg Activity In Free-Defined Currency 8 |
| `QTDActyAmtInFDCrcy8` |  | |  |  | `CURR(27)` | Quarter-to-Date Activity In Free-Defined Currency 8 |
