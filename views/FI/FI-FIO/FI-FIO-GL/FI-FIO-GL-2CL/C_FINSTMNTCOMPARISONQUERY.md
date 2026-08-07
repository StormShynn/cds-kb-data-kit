---
name: C_FINSTMNTCOMPARISONQUERY
description: Financial Statement Comparison Query
app_component: FI-FIO-GL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FINSTMNTCOMPARISONQUERY')/$value
semantic_en: Financial Statement Comparison Query
tags:
  - FI
  - bo:companycode
  - component:FI-FIO-GL-2CL
  - consumption-view
  - FI-FIO
  - FI-FIO-GL
  - FI-FIO-GL-2CL
  - lob:finance
  - metadata-only
---
# C_FINSTMNTCOMPARISONQUERY

**Financial Statement Comparison Query**

| Property | Value |
|---|---|
| App Component | `FI-FIO-GL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FINSTMNTCOMPARISONQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialStatementLeafItem` |  | |  |  | `CHAR(50)` | Financial Statement Leaf Item |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `AlternativeGLAccount` |  | |  |  | `CHAR(10)` | Alternative G/L Account Number In Company Code |
| `CountryChartOfAccounts` |  | |  |  | `CHAR(4)` | Alternative Chart of Accounts for Country/Region |
| `CorporateGroupAccount` |  | |  |  | `CHAR(10)` | Group Account Number |
| `CorporateGroupChartOfAccounts` |  | |  |  | `CHAR(4)` | Group Chart of Accts |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `AlternativeGLAccountIsUsed` |  | |  |  | `CHAR(1)` | Use Alternative Accounts |
| `PeriodBalanceAmount` |  | |  |  | `CURR(23)` | Period Balance |
| `ComparisonPeriodBalanceAmount` |  | |  |  | `CURR(23)` | Comparison Period Balance |
| `AbsoluteDifferenceAmount` |  | |  |  | `DEC(28)` | Absolute Difference (Reporting Amount - Comparison Amount) |
| `RelativeDifferenceAmount` |  | |  |  | `DEC(28)` | Relative Difference (Percentage Difference) |
| `GLAccountHierarchyKeyDate` |  | |  |  | `DATS(8)` | Key Date of the GLAccount Hierarchy |
| `ZeroBalanceAccountIsDisplayed` |  | |  |  | `CHAR(1)` | Accounts with Zero Balance are Displayed |
| `YrEndClsgPostingIsDisplayed` |  | |  |  | `CHAR(1)` | Including Year-End Closing Postings |
| `BusinessTransactionCategory` |  | |  |  | `CHAR(4)` | Business Transaction Category |
| `PerdBalSignAdjdAmtCrcy` |  | |  |  | `CUKY(5)` | Period Balance Sign Adjusted Amount Currency |
| `PeriodBalanceSignAdjdAmount` |  | |  |  | `CURR(23)` | Period Balance with Sign Adjd based on hierarchy definition |
| `ComprnPerdBalSignAdjdAmtCrcy` |  | |  |  | `CUKY(5)` | Comparison Period Balance Sign Adjusted Amount Currency |
| `ComprnPeriodBalSignAdjdAmount` |  | |  |  | `CURR(23)` | Comparison Period Balance with sign adjusted bsd on HierDef |
| `AbsltDifferenceSignAdjdAmount` |  | |  |  | `DEC(28)` | Absolute Difference Sign Adjd (Reporting - Comparison Amt) |
| `RelativeDifferenceSignAdjdAmt` |  | |  |  | `DEC(28)` | Relative Difference Sign Adjusted (Percentage Difference) |
