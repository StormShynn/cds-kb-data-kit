---
name: C_INTERNALPROJECTITEMQUERY
description: Internal Project Item Query
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INTERNALPROJECTITEMQUERY')/$value
semantic_en: Internal Project Item Query
keywords:
  - Internal Project Item Query
  - Internal Project Item Query
  - Internal Project Item Query
tags:
  - CO
  - bo:project
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
# C_INTERNALPROJECTITEMQUERY

**Internal Project Item Query**

| Property | Value |
|---|---|
| App Component | `CO-FIO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INTERNALPROJECTITEMQUERY')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `Ledger` | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `LedgerFiscalYear` | `NUMC(4)` | Fiscal Year of Ledger |
| `FiscalPeriod` | `NUMC(3)` | Fiscal Period |
| `FiscalYearPeriod` | `NUMC(7)` | Fiscal Year Period |
| `AccountAssignmentType` | `CHAR(2)` | Account Assignment Type |
| `CurrencyField` | `CHAR(4)` | Currency Role Field |
| `FiscalYearVariant` | `CHAR(2)` | Fiscal Year Variant |
| `ProfitCenter` | `CHAR(10)` | Profit Center |
| `FunctionalArea` | `CHAR(16)` | Functional Area |
| `SoldProductGroup` | `CHAR(9)` | Product Sold Group |
| `SoldProduct` | `CHAR(40)` | Product Sold |
| `Customer` | `CHAR(10)` | Customer Number |
| `CustomerGroup` | `CHAR(2)` | Customer Group |
| `ChartOfAccounts` | `CHAR(4)` | Chart of Accounts |
| `Project` | `CHAR(24)` | Project (external ID) |
| `ProjectManager` | `CHAR(10)` | Business Partner Number |
| `ProjectManagerName` | `CHAR(80)` | Full Name |
| `EngagementProjectStage` | `CHAR(4)` | Commercial Project: Stage |
| `ProjectProfileCode` | `CHAR(7)` | Project Profile |
| `WBSElementExternalID` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `Segment` | `CHAR(10)` | Segment for Segmental Reporting |
| `Currency` | `CUKY(5)` | Currency Key |
| `DebitCreditCode` | `CHAR(1)` | Debit/Credit Code |
| `GLAccount` | `CHAR(10)` | G/L Account |
| `AmountInDisplayCurrency` | `CURR(23)` | Amount in Display Currency |
| `BaseUnit` | `UNIT(3)` | Base Unit of Measure |
| `Quantity` | `QUAN(23)` | Quantity |
| `ValuationQuantity` | `QUAN(23)` | Valuation Quantity |
| `CostSourceUnit` | `UNIT(3)` | Cost Source Unit |
| `SourceLedger` | `CHAR(2)` | Source Ledger |
| `AccountingDocument` | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` | `CHAR(6)` | General Ledger Journal Entry Line Item |
