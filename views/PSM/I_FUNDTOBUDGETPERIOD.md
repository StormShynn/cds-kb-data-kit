---
name: I_FUNDTOBUDGETPERIOD
description: Relation between Fund and Budget Period
app_component: PSM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNDTOBUDGETPERIOD')/$value
semantic_en: Relation between Fund and Budget Period
tags:
  - PSM
  - budget
  - component:PSM
  - interface-view
  - metadata-only
---
# I_FUNDTOBUDGETPERIOD

**Relation between Fund and Budget Period**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNDTOBUDGETPERIOD')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `FinancialManagementArea` | `CHAR(4)` | Financial Management Area |
| `Fund` | `CHAR(10)` | Fund |
| `BudgetPeriod` | `CHAR(10)` | Budget Period |
| `ApplOfFundByBudgetPeriod` | `CHAR(16)` | Application of Funds by Budget Period |
| `BdgtPerdAssociationIsInactive` | `CHAR(1)` | Indicator: Fund to Budget Period assignment is inactive |
| `FundFinMgmtAreaForAuthzn` | `CHAR(4)` | FM Area for Auth Grp for Fund |
| `FundAuthznGrp` | `CHAR(10)` | Fund Authorization Group |
| `BudgetPeriodAuthznGrp` | `CHAR(10)` | Budget Period Authorization Group |
