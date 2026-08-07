---
name: I_FISCALCALENDARYEARTODATERNGE
description: Fiscal Calendar Year to Date Ranges
app_component: FI-GL-GL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FISCALCALENDARYEARTODATERNGE')/$value
semantic_en: Fiscal Calendar Year to Date Ranges
tags:
  - FI
  - bo:companycode
  - component:FI-GL-GL-2CL
  - FI-GL
  - FI-GL-GL
  - FI-GL-GL-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_FISCALCALENDARYEARTODATERNGE

**Fiscal Calendar Year to Date Ranges**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FISCALCALENDARYEARTODATERNGE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `CalendarDate` |  | |  |  | `DATS(8)` | Calendar Date |
| `FiscalYear` |  | |  |  | `NUMC(4)` |  |
| `FromFiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period From |
| `ToFiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period To |
| `FromFiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `ToFiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `FromPostingDate` |  | |  |  | `DATS(8)` | Posting Date From |
| `ToPostingDate` |  | |  |  | `DATS(8)` | Posting Date To |
