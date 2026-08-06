---
name: I_BUDGETPERIODSTDVH
description: Budget Period
app_component: PSM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUDGETPERIODSTDVH')/$value
semantic_en: Budget Period
tags:
  - PSM
  - budget
  - component:PSM
  - interface-view
  - metadata-only
---
# I_BUDGETPERIODSTDVH

**Budget Period**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUDGETPERIODSTDVH')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `BudgetPeriod` | `CHAR(10)` | Budget Period |
| `BudgetPeriodAuthznGrp` | `CHAR(10)` | Budget Period Authorization Group |
| `BudgetPeriodName` | `CHAR(35)` | Budget Period Name |
| `ValidityStartDate` | `DATS(8)` | Budget Period Valid From |
| `ValidityEndDate` | `DATS(8)` | Budget Period Valid To |
| `BudgetPeriodExpirationDate` | `DATS(8)` | Budget Period Expiration Date |
| `BudgetPeriodPeriodicity` | `CHAR(10)` | Frequency for Budget Period |
