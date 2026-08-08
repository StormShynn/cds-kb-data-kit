---
name: I_BUDGETACCOUNTINCHTACCTS
description: "Budget Account in Chart of Accounts"
app_component: PSM-FM-MD
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUDGETACCOUNTINCHTACCTS')/$value
semantic_en: "Budget Account in Chart of Accounts"
tags:
  - PSM
  - account
  - budget
  - component:PSM-FM-MD
  - interface-view
  - PSM-FM
  - PSM-FM-MD
  - metadata-only
---
# I_BUDGETACCOUNTINCHTACCTS

**Budget Account in Chart of Accounts**

| Property | Value |
|---|---|
| App Component | `PSM-FM-MD` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUDGETACCOUNTINCHTACCTS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `PubSecBudgetAccount` |  | |  |  | `CHAR(10)` | Budget Account |
| `PubSecBudgetCnsmpnType` |  | |  |  | `CHAR(2)` | Budget Consumption Type |
| `PubSecBdgtAcctRevnExpnCode` |  | |  |  | `CHAR(1)` | Expense or Revenue on Budget Account |
| `PubSecBudgetIsRelevant` |  | |  |  | `CHAR(1)` | Budget-Relevant Indicator |
| `PubSecBdgtAcctIsPostgAllowed` |  | |  |  | `CHAR(1)` | Posting to Budget Account Allowed |
| `PubSecBdgtAcctIsBdgtAllowed` |  | |  |  | `CHAR(1)` | Budgeting Allowed for Budget Account |
| `PubSecBdgtAcctIsCarryFwd` |  | |  |  | `CHAR(1)` | Use Budget Account as Carryforward Account |
| `PubSecBdgtAcctCarryFwdTo` |  | |  |  | `CHAR(10)` | Carry Forward Budget Account To Account |
| `CashLedgerAccount` |  | |  |  | `CHAR(10)` | Cash Origin Account |
