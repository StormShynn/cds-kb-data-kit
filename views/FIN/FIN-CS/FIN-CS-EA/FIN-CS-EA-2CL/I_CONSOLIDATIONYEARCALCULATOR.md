---
name: I_CONSOLIDATIONYEARCALCULATOR
description: This CDS view provides values for Fiscal Year and Fiscal Period and their calculated properties, such as Next Fiscal Period, Previous Fiscal Year, and Fiscal Year Variant. Currently, the Fiscal Year Variant is restricted to the value K4.
app_component: FIN-CS-EA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONSOLIDATIONYEARCALCULATOR')/$value
semantic_en: This CDS view provides values for Fiscal Year and Fiscal Period and their calculated properties, such as Next Fiscal Period, Previous Fiscal Year, and Fiscal Year Variant. Currently, the Fiscal Year Variant is restricted to the value K4.
tags:
  - FIN
  - bo:companycode
  - component:FIN-CS-EA-2CL
  - FIN-CS
  - FIN-CS-EA
  - FIN-CS-EA-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_CONSOLIDATIONYEARCALCULATOR

**This CDS view provides values for Fiscal Year and Fiscal Period and their calculated properties, such as Next Fiscal Period, Previous Fiscal Year, and Fiscal Year Variant. Currently, the Fiscal Year Variant is restricted to the value K4.**

| Property | Value |
|---|---|
| App Component | `FIN-CS-EA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONSOLIDATIONYEARCALCULATOR')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `FiscalYearVariant` | `CHAR(2)` | Fiscal Year Variant |
| `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` | `NUMC(3)` | Fiscal Period |
| `NextFiscalPeriod` | `NUMC(3)` | Next Fiscal Period |
| `PreviousPeriodBackShift1` | `NUMC(3)` | Previous Period Back Shift1 |
| `PreviousFiscalYear` | `NUMC(4)` | Fiscal Year |
| `NextFiscalYear` | `NUMC(4)` | Fiscal Year |
| `FiscalYearShift2` | `NUMC(4)` | Fiscal Year |
| `FiscalYearShift3` | `NUMC(4)` | Fiscal Year |
