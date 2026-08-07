---
name: C_FUNDACCTGBALANCEITEMQ
description: Fund Accounting Balance Item - Query
app_component: PSM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FUNDACCTGBALANCEITEMQ')/$value
semantic_en: Fund Accounting Balance Item - Query
tags:
  - PSM
  - account
  - component:PSM
  - consumption-view
  - metadata-only
---
# C_FUNDACCTGBALANCEITEMQ

**Fund Accounting Balance Item - Query**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FUNDACCTGBALANCEITEMQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GLAccountHierarchy` |  | |  |  | `CHAR(42)` | Financial Statement Version |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `SemanticTag` |  | |  |  | `CHAR(10)` | Semantic Tag of a Hierarchy Node |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `Fund` |  | |  |  | `CHAR(10)` | Fund |
| `FinancialManagementArea` |  | |  |  | `CHAR(4)` | Financial Management Area |
| `FundType` |  | |  |  | `CHAR(6)` | Fund Type |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `AmtInCoCodeCrcyPerFiscalYear` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `CostCenterName` |  | |  |  | `CHAR(20)` | Cost Center Name |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `GrantType` |  | |  |  | `CHAR(2)` | Grant Type |
