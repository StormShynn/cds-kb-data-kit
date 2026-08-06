---
name: I_RACURRENTACCOUNTINGPERIOD
description: Current Accounting Period
app_component: FI-RA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RACURRENTACCOUNTINGPERIOD')/$value
semantic_en: Current Accounting Period
tags:
  - FI
  - account
  - component:FI-RA-2CL
  - FI-RA
  - FI-RA-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_RACURRENTACCOUNTINGPERIOD

**Current Accounting Period**

| Property | Value |
|---|---|
| App Component | `FI-RA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RACURRENTACCOUNTINGPERIOD')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `CompanyCode` | `CHAR(4)` | Company Code |
| `AccountingPrinciple` | `CHAR(4)` | Accounting Principle |
| `FiscalYearCurrentPeriod` | `NUMC(7)` | Fiscal Year + Fiscal Period |
| `CurrentFiscalYear` | `NUMC(4)` | Fiscal Year |
| `CurrentFiscalPeriod` | `NUMC(3)` | Fiscal Period |
