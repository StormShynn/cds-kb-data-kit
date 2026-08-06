---
name: C_CREDITLOSSALLOWANCE
description: Analyze Credit Loss Allowances
app_component: FI-GL-GL-G-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CREDITLOSSALLOWANCE')/$value
semantic_en: Analyze Credit Loss Allowances
tags:
  - FI
  - component:FI-GL-GL-G-2CL
  - consumption-view
  - FI-GL
  - FI-GL-GL
  - FI-GL-GL-G
  - FI-GL-GL-G-2CL
  - lob:finance
  - metadata-only
---
# C_CREDITLOSSALLOWANCE

**Analyze Credit Loss Allowances**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-G-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CREDITLOSSALLOWANCE')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `Ledger` | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `LedgerName` | `CHAR(30)` | Ledger Name |
| `CompanyCodeName` | `CHAR(25)` | Name of Company Code or Company |
| `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` | `NUMC(3)` | Posting Period |
| `BusinessPartner` | `CHAR(10)` | Business Partner Number |
| `Country` | `CHAR(3)` | Country/Region Key |
| `CreditRiskClass` | `CHAR(3)` | Risk Class |
| `GeneralLedgerAgingIncrement` | `CHAR(15)` | Aging Increment |
| `GLAccount` | `CHAR(10)` | Account Number |
| `GLAccountName` | `CHAR(20)` | G/L Account Name |
| `Customer` | `CHAR(10)` | Customer Number |
| `CustomerName` | `CHAR(80)` | Name of Customer |
| `CostCenter` | `CHAR(10)` | Cost Center |
| `CostCenterName` | `CHAR(20)` | Cost Center Name |
| `ProfitCenter` | `CHAR(10)` | Profit Center |
| `ProfitCenterName` | `CHAR(20)` | Description of Profit Center |
| `FunctionalArea` | `CHAR(16)` | Functional Area |
| `FunctionalAreaName` | `CHAR(25)` | Name of the Functional Area |
| `Segment` | `CHAR(10)` | Segment for Segmental Reporting |
| `SegmentName` | `CHAR(50)` | Segment Name |
| `LossAllowanceSortSequenceValue` | `NUMC(3)` | Sorting Order of Key Figures in a Layout |
| `LossAllowanceKeyFigure` | `CHAR(30)` | Key Figure |
| `LossAllowanceKeyFigureName` | `CHAR(70)` | Name of Key Figure |
| `DisplayCurrency` | `CUKY(5)` | Display Currency |
| `AmountInDisplayCurrency` | `CURR(23)` | Balance Amount |
