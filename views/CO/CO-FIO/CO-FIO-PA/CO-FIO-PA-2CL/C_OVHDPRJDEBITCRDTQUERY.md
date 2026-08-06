---
name: C_OVHDPRJDEBITCRDTQUERY
description: Overhead Project Debit Credit - Query
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_OVHDPRJDEBITCRDTQUERY')/$value
semantic_en: Overhead Project Debit Credit - Query
keywords:
  - Overhead Project Debit Credit - Query
  - Overhead Project Debit Credit - Query
  - Overhead Project Debit Credit - Query
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
# C_OVHDPRJDEBITCRDTQUERY

**Overhead Project Debit Credit - Query**

| Property | Value |
|---|---|
| App Component | `CO-FIO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_OVHDPRJDEBITCRDTQUERY')/$value) |

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
| `OriginProfitCenter` | `CHAR(10)` | Origin Profit Center |
| `FunctionalArea` | `CHAR(16)` | Functional Area |
| `SoldProductGroup` | `CHAR(9)` | Product Sold Group |
| `SoldProduct` | `CHAR(40)` | Product Sold |
| `Customer` | `CHAR(10)` | Customer Number |
| `CustomerGroup` | `CHAR(2)` | Customer Group |
| `SalesDocument` | `CHAR(10)` | Sales Document |
| `SalesOrder` | `CHAR(10)` | Sales Order |
| `ChartOfAccounts` | `CHAR(4)` | Chart of Accounts |
| `Project` | `CHAR(24)` | Project (external ID) |
| `ProjectExternalID` | `CHAR(24)` | Project Number (External) Edited |
| `PersonWorkAgreement` | `NUMC(8)` | Personnel Number |
| `ProcessingStatus` | `CHAR(2)` | Object Processing Status |
| `ProjectProfileCode` | `CHAR(7)` | Project Profile |
| `WBSElementExternalID` | `CHAR(24)` | WBS Element External ID |
| `Segment` | `CHAR(10)` | Segment for Segmental Reporting |
| `Currency` | `CUKY(5)` | Currency Key |
| `DebitCreditCode` | `CHAR(1)` | Debit/Credit Code |
| `GLAccount` | `CHAR(10)` | G/L Account |
| `AmountInDisplayCurrency` | `CURR(23)` | Amount in Display Currency |
| `BaseUnit` | `UNIT(3)` | Base Unit of Measure |
| `Quantity` | `QUAN(23)` | Quantity |
| `CostCenter` | `CHAR(10)` | Cost Center |
| `ProjectManager` | `CHAR(10)` | Business Partner Number |
| `ControllingDebitCreditCode` | `CHAR(1)` | CO Debit/Credit Indicator |
| `FinancialPlanningReqTransSqnc` | `NUMC(23)` | Financial Planning Request Transaction Sequence Number |
| `FinancialPlanningDataPacket` | `NUMC(6)` | Financial Planning Data Packet Number |
| `SourceLedger` | `CHAR(2)` | Source Ledger |
| `AccountingDocument` | `CHAR(10)` | Journal Entry |
| `ActualPlanJournalEntryItem` | `CHAR(12)` | Actual Plan Journal Entry Item |
