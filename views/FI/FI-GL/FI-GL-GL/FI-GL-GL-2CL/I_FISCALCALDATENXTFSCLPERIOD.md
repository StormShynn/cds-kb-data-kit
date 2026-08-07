---
name: I_FISCALCALDATENXTFSCLPERIOD
description: "This CDS view provides access both to the relevant fiscal calendar details of a fiscal year and a fiscal week in a fiscal year variant and to the details of the corresponding next fiscal period. The most important attributes of business entities are included, such as fiscal year, fiscal quarter, fiscal period, fiscal week with the corresponding start and end date, but also the next fiscal period together with the corresponding fiscal year with start and end date. This CDS view provides the prerequisites for answering the following business questions: What are the fiscal time frames of a calendar date? What is the next fiscal period and the corresponding fiscal year of a calendar date?"
app_component: FI-GL-GL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FISCALCALDATENXTFSCLPERIOD')/$value
semantic_en: "This CDS view provides access both to the relevant fiscal calendar details of a fiscal year and a fiscal week in a fiscal year variant and to the details of the corresponding next fiscal period. The most important attributes of business entities are included, such as fiscal year, fiscal quarter, fiscal period, fiscal week with the corresponding start and end date, but also the next fiscal period together with the corresponding fiscal year with start and end date. This CDS view provides the prerequisites for answering the following business questions: What are the fiscal time frames of a calendar date? What is the next fiscal period and the corresponding fiscal year of a calendar date?"
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
# I_FISCALCALDATENXTFSCLPERIOD

**This CDS view provides access both to the relevant fiscal calendar details of a fiscal year and a fiscal week in a fiscal year variant and to the details of the corresponding next fiscal period. The most important attributes of business entities are included, such as fiscal year, fiscal quarter, fiscal period, fiscal week with the corresponding start and end date, but also the next fiscal period together with the corresponding fiscal year with start and end date. This CDS view provides the prerequisites for answering the following business questions: What are the fiscal time frames of a calendar date? What is the next fiscal period and the corresponding fiscal year of a calendar date?**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FISCALCALDATENXTFSCLPERIOD')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `CalendarDate` |  | |  |  | `DATS(8)` | Calendar Date |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalYearStartDate` |  | |  |  | `DATS(8)` | Start Date of Fiscal Year |
| `FiscalYearEndDate` |  | |  |  | `DATS(8)` | End Date of Fiscal Year |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalPeriodStartDate` |  | |  |  | `DATS(8)` | Start Date of Fiscal Period |
| `FiscalPeriodEndDate` |  | |  |  | `DATS(8)` | End Date of Fiscal Period |
| `FiscalQuarter` |  | |  |  | `NUMC(1)` | Fiscal Quarter |
| `FiscalQuarterStartDate` |  | |  |  | `DATS(8)` | Start Date of Fiscal Quarter |
| `FiscalQuarterEndDate` |  | |  |  | `DATS(8)` | End Date of Fiscal Quarter |
| `FiscalWeek` |  | |  |  | `NUMC(2)` | Fiscal Week |
| `FiscalWeekStartDate` |  | |  |  | `DATS(8)` | Start Date of Fiscal Week |
| `FiscalWeekEndDate` |  | |  |  | `DATS(8)` | End Date of Fiscal Week |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year + Fiscal Period |
| `FiscalYearQuarter` |  | |  |  | `NUMC(5)` | Fiscal Year + Fiscal Quarter |
| `FiscalYearWeek` |  | |  |  | `NUMC(6)` | Fiscal Year + Fiscal Week |
| `NextFiscalPeriod` |  | |  |  | `NUMC(3)` | Next Fiscal Period |
| `NextFiscalPeriodFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Next Fiscal Period |
| `NextFsclPeriodFsclYearStrtDate` |  | |  |  | `DATS(8)` | Start Date of the Fiscal Year of the Next Fiscal Period |
| `NextFsclPeriodFsclYearEndDate` |  | |  |  | `DATS(8)` | End Date of the Fiscal Year of the Next Fiscal Period |
| `NextFiscalPeriodStartDate` |  | |  |  | `DATS(8)` | Start Date of Next Fiscal Period |
| `NextFiscalPeriodEndDate` |  | |  |  | `DATS(8)` | End Date of Next Fiscal Period |
| `NextFiscalYearPeriod` |  | |  |  | `NUMC(7)` | Next Fiscal Period with Fiscal Year |
| `FiscalPeriodConsecutiveNumber` |  | |  |  | `INT4(10)` | Fiscal Year Period (Numbering) |
| `NextFsclPeriodConsecutiveNmbr` |  | |  |  | `INT4(10)` | Next Fiscal Year Period (Numbering) |
