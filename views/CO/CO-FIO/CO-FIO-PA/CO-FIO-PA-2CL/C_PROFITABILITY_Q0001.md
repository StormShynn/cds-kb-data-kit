---
name: C_PROFITABILITY_Q0001
description: Project Profitability
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PROFITABILITY_Q0001')/$value
semantic_en: Project Profitability
keywords:
  - Project Profitability
  - Project Profitability
  - Project Profitability
tags:
  - CO
  - bo:companycode
  - CO-FIO
  - CO-FIO-PA
  - CO-FIO-PA-2CL
  - component:CO-FIO-PA-2CL
  - consumption-view
  - lob:controlling
  - lob:finance
  - project
  - metadata-only
---
# C_PROFITABILITY_Q0001

**Project Profitability**

| Property | Value |
|---|---|
| App Component | `CO-FIO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PROFITABILITY_Q0001')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `CompanyCode` | `CHAR(4)` | Company Code |
| `Project` | `CHAR(24)` | Project |
| `ProjectExternalID` | `CHAR(24)` | Project Number (External) Edited |
| `WBSElement` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) |
| `WBSElementExternalID` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `Ledger` | `CHAR(2)` | Ledger in General Ledger Accounting |
| `FiscalPeriod` | `NUMC(3)` | Fiscal Period |
| `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `SoldProduct` | `CHAR(40)` | Product Sold |
| `Product` | `CHAR(40)` | Product |
| `MaterialGroup` | `CHAR(9)` | Product Sold Group (Deprecated) |
| `CostAnalysisResource` | `CHAR(10)` | Cost Analysis Resource |
| `ProfitCenter` | `CHAR(10)` | Profit Center |
| `OriginProfitCenter` | `CHAR(10)` | Origin Profit Center |
| `Customer` | `CHAR(10)` | Customer Number |
| `CustomerGroup` | `CHAR(2)` | Customer Group |
| `CustomerSupplierIndustry` | `CHAR(4)` | Customer Supplier Industry |
| `SalesOrganization` | `CHAR(4)` | Sales Organization |
| `BusinessTransactionType` | `CHAR(4)` | Business Transaction Type |
| `OrganizationDivision` | `CHAR(2)` | Division |
| `EmployeeFullName` | `CHAR(80)` | Full Name |
| `PersonnelNumber` | `NUMC(8)` | Personnel Number |
| `BillableControl` | `CHAR(2)` | Billable Control |
| `CostCenter` | `CHAR(10)` | Cost Center |
| `SemanticTag` | `CHAR(10)` | Semantic Tag of a Hierarchy Node |
| `GLAccount` | `CHAR(10)` | G/L Account |
| `GLAccountLongName` | `CHAR(50)` | G/L Account Long Name |
| `FiscalYearPeriod` | `CHAR(7)` | Fiscal Year Period |
| `DocumentItemText` | `CHAR(50)` | Item Text |
| `BilledRevenueAmtInCoCodeCrcy` | `CURR(23)` | Actual Revenue |
| `RecognizableCostAmtInCCCrcy` | `CURR(23)` | Actual Cost |
| `RecognizedRevnAmtInCCCrcy` | `CURR(23)` | Recognized Revenue |
| `RecognizedCOGSAmtInCCCrcy` | `CURR(23)` | Recognized COS |
| `RecognizedMarginAmtInCCCrcy` | `CURR(23)` | Recognized Margin |
| `AssetLiabilityAmtInCCCrcy` | `CURR(23)` | Asset/Liability Amount in Company Code Currency |
| `RevenueAdjustmentAmtInCCCrcy` | `CURR(23)` | Revenue Adjustment |
| `COGSAdjustmentAmtInCCCrcy` | `CURR(23)` | COS Adjustment |
| `DeferredCOGSAmtInCCCrcy` | `CURR(23)` | Deferred COS |
| `DeferredRevenueAmtInCCCrcy` | `CURR(23)` | Deferred Revenue |
| `AccruedRevenueAmtInCCCrcy` | `CURR(23)` | Accrued Revenue |
| `AccruedCOGSAmtInCCCrcy` | `CURR(23)` | Accrued COS |
| `Reserves` | `CURR(23)` | Reserves |
| `ProjAndSlsOrdStkAmtInCCCrcy` | `CURR(23)` | Project/Sales Order Stock |
| `MarginInPct` | `DEC(5)` | Margin in Percent |
| `DownPaymentAmtInCCCrcy` | `CURR(23)` | Customer Down Payment |
| `MnlContrAccrPnLItmAmtInCCCrcy` | `CURR(23)` | Manual Contract Accruals for Profit/Loss |
| `SoldProductGroup` | `CHAR(9)` | Product Sold Group |
| `DistributionChannel` | `CHAR(2)` | Distribution Channel |
