---
name: C_PUBSECCUMLTVBDGTCNSMPNQ
description: Query for Cumulative Budget - Query
app_component: PSM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECCUMLTVBDGTCNSMPNQ')/$value
semantic_en: Query for Cumulative Budget - Query
tags:
  - PSM
  - budget
  - component:PSM
  - consumption-view
  - metadata-only
---
# C_PUBSECCUMLTVBDGTCNSMPNQ

**Query for Cumulative Budget - Query**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECCUMLTVBDGTCNSMPNQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalPeriodEndDate` |  | |  |  | `DATS(8)` | End Date of Fiscal Period |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `ActualPlanCode` |  | |  |  | `CHAR(1)` | Actual Plan Code |
| `BudgetAmountInCompanyCodeCrcy` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `ConsumedAmountInCCCrcy` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `AvailableAmountInCCCrcy` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `PubSecBudgetCnsmpnDate` |  | |  |  | `DATS(8)` | Budget Consumption Date |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `BudgetPeriod` |  | |  |  | `CHAR(10)` | Budget Period |
| `Fund` |  | |  |  | `CHAR(10)` | Fund |
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `PubSecBudgetAccount` |  | |  |  | `CHAR(10)` | Budget Account |
| `PubSecBdgtAcctRevnExpnCode` |  | |  |  | `CHAR(1)` | Expense or Revenue on Budget Account |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | WBS Element External ID |
| `PartnerWBSElementExternalID` |  | |  |  | `CHAR(24)` | Partner WBS Element External ID |
| `GrantType` |  | |  |  | `CHAR(2)` | Grant Type |
| `GranteeMgmtSponsor` |  | |  |  | `CHAR(10)` | Grant Sponsor |
| `SponsoredClass` |  | |  |  | `CHAR(20)` | Sponsored Class |
| `SponsoredProgram` |  | |  |  | `CHAR(20)` | Sponsored Program |
| `BudgetingType` |  | |  |  | `CHAR(8)` | Budget Type (Subcategory) |
| `GranteeMgmtFundType` |  | |  |  | `CHAR(1)` | Fund Type for Grants Management |
| `GrantLifecycleStatus` |  | |  |  | `CHAR(5)` | Lifecycle Status |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `PubSecBudgetIsRelevant` |  | |  |  | `CHAR(1)` | Budget-Relevant Indicator |
| `PubSecBudgetCnsmpnTypeGroup` |  | |  |  | `CHAR(2)` | Budget Consumption Type Group |
| `AmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `BdgtConsumableAmtInGlobalCrcy` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `BdgtConsumedAmtInGlobalCrcy` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `BdgtAvailableAmtInGlobalCrcy` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `FinancialManagementArea` |  | |  |  | `CHAR(4)` | Financial Management Area |
| `FundType` |  | |  |  | `CHAR(6)` | Fund Type |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
