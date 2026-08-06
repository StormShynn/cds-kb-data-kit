---
name: C_PUBSECFNDSMBDGTACTLQRY1
description: Fund Budget Cmtmt and Actuals - Query
app_component: PSM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECFNDSMBDGTACTLQRY1')/$value
semantic_en: Fund Budget Cmtmt and Actuals - Query
tags:
  - PSM
  - budget
  - component:PSM
  - consumption-view
  - metadata-only
---
# C_PUBSECFNDSMBDGTACTLQRY1

**Fund Budget Cmtmt and Actuals - Query**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECFNDSMBDGTACTLQRY1')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `Ledger` | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `GLAccount` | `CHAR(10)` | G/L Account |
| `ChartOfAccounts` | `CHAR(4)` | Chart of Accounts |
| `Fund` | `CHAR(10)` | Fund |
| `FundType` | `CHAR(6)` | Fund Type |
| `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` | `NUMC(3)` | Fiscal Period |
| `PostingDate` | `DATS(8)` | Posting Date |
| `Segment` | `CHAR(10)` | Segment for Segmental Reporting |
| `ProfitCenter` | `CHAR(10)` | Profit Center |
| `FinancialManagementArea` | `CHAR(4)` | Financial Management Area |
| `ControllingArea` | `CHAR(4)` | Controlling Area |
| `CostCenter` | `CHAR(10)` | Cost Center |
| `CostCenterName` | `CHAR(20)` | Cost Center Name |
| `WBSElementExternalID` | `CHAR(24)` | WBS Element External ID |
| `FunctionalArea` | `CHAR(16)` | Functional Area |
| `GrantID` | `CHAR(20)` | Grant |
| `PubSecBudgetCnsmpnDate` | `DATS(8)` | Budget Consumption Date |
| `PubSecBudgetCnsmpnTypeGroup` | `CHAR(2)` | Budget Consumption Type Group |
| `CompanyCodeCurrency` | `CUKY(5)` | Company Code Currency |
| `AmountInCompanyCodeCurrency` | `CURR(23)` | Amount in Company Code Currency |
