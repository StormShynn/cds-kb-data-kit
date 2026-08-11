---
name: I_PRAGLACCOUNTTEXT
description: "PRA General Ledger Account - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAGLACCOUNTTEXT')/$value
semantic_en: "PRA General Ledger Account - Text"
tags:
  - IS
  - account
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
  - metadata-only
---
# I_PRAGLACCOUNTTEXT

**PRA General Ledger Account - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAGLACCOUNTTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account Number |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `GLAccountName` |  | |  |  | `CHAR(20)` | G/L Account Name |
| `GLAccountLongName` |  | |  |  | `CHAR(50)` | G/L Account Long Name |
