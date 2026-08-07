---
name: C_PUBSECGTEEMBDGTACTLQRY1
description: Grant Budget Cmtmt and Actuals - Query
app_component: PSM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECGTEEMBDGTACTLQRY1')/$value
semantic_en: Grant Budget Cmtmt and Actuals - Query
tags:
  - PSM
  - budget
  - component:PSM
  - consumption-view
  - metadata-only
---
# C_PUBSECGTEEMBDGTACTLQRY1

**Grant Budget Cmtmt and Actuals - Query**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECGTEEMBDGTACTLQRY1')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SourceLedger` |  | |  |  | `CHAR(2)` | Source Ledger |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `GranteeMgmtSponsor` |  | |  |  | `CHAR(10)` | Grant Sponsor |
| `ActualPlanCode` |  | |  |  | `CHAR(1)` | Actual Plan Code |
| `GrantLifecycleStatus` |  | |  |  | `CHAR(5)` | Lifecycle Status |
| `GrantStatus` |  | |  |  | `CHAR(5)` | Grant Status |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `GrantType` |  | |  |  | `CHAR(2)` | Grant Type |
| `BusPartEmplrIndstryCode` |  | |  |  | `CHAR(10)` | Industry |
| `SponsoredClass` |  | |  |  | `CHAR(20)` | Sponsored Class |
| `SponsoredProgram` |  | |  |  | `CHAR(20)` | Sponsored Program |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | WBS Element External ID |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `AmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `CityName` |  | |  |  | `CHAR(40)` | City |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `PubSecBudgetCnsmpnDate` |  | |  |  | `DATS(8)` | Budget Consumption Date |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Valid-to Date |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Valid-from Date |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `Fund` |  | |  |  | `CHAR(10)` | Fund |
| `GranteeMgmtFundType` |  | |  |  | `CHAR(1)` | Fund Type for Grants Management |
| `FundType` |  | |  |  | `CHAR(6)` | Fund Type |
| `PubSecBudgetIsRelevant` |  | |  |  | `CHAR(1)` | Budget-Relevant Indicator |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `PubSecBdgtAcctRevnExpnCode` |  | |  |  | `CHAR(1)` | Expense or Revenue on Budget Account |
| `PubSecBudgetCnsmpnTypeGroup` |  | |  |  | `CHAR(2)` | Budget Consumption Type Group |
| `BudgetProcess` |  | |  |  | `CHAR(4)` | Budget Process Type |
| `BudgetingType` |  | |  |  | `CHAR(8)` | Budget Type (Subcategory) |
| `FinancialManagementArea` |  | |  |  | `CHAR(4)` | Financial Management Area |
