---
name: C_BALANCESHEETCURRENCYROLEVH
description: Balance Sheet Currency Roles
app_component: FI-FIO-GL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BALANCESHEETCURRENCYROLEVH')/$value
semantic_en: Balance Sheet Currency Roles
tags:
  - FI
  - component:FI-FIO-GL-2CL
  - consumption-view
  - FI-FIO
  - FI-FIO-GL
  - FI-FIO-GL-2CL
  - lob:finance
  - metadata-only
---
# C_BALANCESHEETCURRENCYROLEVH

**Balance Sheet Currency Roles**

| Property | Value |
|---|---|
| App Component | `FI-FIO-GL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BALANCESHEETCURRENCYROLEVH')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `Ledger` | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `CurrencyField` | `CHAR(4)` | Currency Role Field |
| `CurrencyRole` | `CHAR(2)` | Currency Type |
| `Currency` | `CUKY(5)` | Currency Key |
| `CurrencyRoleName` | `CHAR(80)` | Currency Role Name |
| `CurrencyRoleLongName` | `CHAR(100)` | Currency Role Name |
| `CurrencyFieldName` | `CHAR(60)` | Text for Currency Role Field |
