---
name: I_BUDGETPERIOD
description: "This CDS view provides the master data for budget periods, which can be used to answer the following business questions: What is the frequency for a budget period? Which funds are assigned to a budget period?"
app_component: PSM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUDGETPERIOD')/$value
semantic_en: "This CDS view provides the master data for budget periods, which can be used to answer the following business questions: What is the frequency for a budget period? Which funds are assigned to a budget period?"
keywords:
  - "Budget Period"
tags:
  - PSM
  - bo:businesspartner
  - budget
  - component:PSM
  - interface-view
  - master-data
  - metadata-only
---
# I_BUDGETPERIOD

**This CDS view provides the master data for budget periods, which can be used to answer the following business questions: What is the frequency for a budget period? Which funds are assigned to a budget period?**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUDGETPERIOD')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BudgetPeriod` |  | |  |  | `CHAR(10)` | Budget Period |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Budget Period Valid From |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Budget Period Valid To |
| `BudgetPeriodExpirationDate` |  | |  |  | `DATS(8)` | Budget Period Expiration Date |
| `BudgetPeriodReversalDate` |  | |  |  | `DATS(8)` | Budget Period Reversal Date |
| `BudgetPeriodAuthznGrp` |  | |  |  | `CHAR(10)` | Budget Period Authorization Group |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Budget Period Created by User |
| `CreationDate` |  | |  |  | `DATS(8)` | Budget Period Created on Date |
| `LastChangeUser` |  | |  |  | `CHAR(12)` | Budget Period Last Changed by User |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Budget Period Last Changed on Date |
| `BudgetPeriodPeriodicity` |  | |  |  | `CHAR(10)` | Frequency for Budget Period |
