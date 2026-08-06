---
name: I_LEDGERCOMPANYCODEVH
description: Company Codes for Ledger
app_component: FI-GL-GL-A-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LEDGERCOMPANYCODEVH')/$value
semantic_en: Company Codes for Ledger
tags:
  - FI
  - component:FI-GL-GL-A-2CL
  - FI-GL
  - FI-GL-GL
  - FI-GL-GL-A
  - FI-GL-GL-A-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_LEDGERCOMPANYCODEVH

**Company Codes for Ledger**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-A-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LEDGERCOMPANYCODEVH')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `Ledger` | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `CompanyCodeName` | `CHAR(25)` | Name of Company Code or Company |
| `ControllingArea` | `CHAR(4)` | Controlling Area |
| `ChartOfAccounts` | `CHAR(4)` | Chart of Accounts |
| `CityName` | `CHAR(25)` | City |
| `Currency` | `CUKY(5)` | Currency Key |
| `FiscalYearVariant` | `CHAR(2)` | Fiscal Year Variant |
