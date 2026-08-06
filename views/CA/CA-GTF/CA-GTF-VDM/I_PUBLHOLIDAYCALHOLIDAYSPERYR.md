---
name: I_PUBLHOLIDAYCALHOLIDAYSPERYR
description: Public Holidays Per Year
app_component: CA-GTF-VDM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBLHOLIDAYCALHOLIDAYSPERYR')/$value
semantic_en: Public Holidays Per Year
tags:
  - CA
  - CA-GTF
  - CA-GTF-VDM
  - component:CA-GTF-VDM
  - interface-view
  - lob:cross_application components
  - metadata-only
---
# I_PUBLHOLIDAYCALHOLIDAYSPERYR

**Public Holidays Per Year**

| Property | Value |
|---|---|
| App Component | `CA-GTF-VDM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBLHOLIDAYCALHOLIDAYSPERYR')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `PublicHolidayCalendar` | `CHAR(2)` | Public Holiday Calendar |
| `CalendarYear` | `NUMC(4)` | Year stored |
| `Month01HolidaysString` | `CHAR(31)` | Calendar: Month01WorkingDays |
| `Month02HolidaysString` | `CHAR(31)` | Calendar:Month02WorkingDays |
| `Month03HolidaysString` | `CHAR(31)` | Calendar:Month03WorkingDays |
| `Month04HolidaysString` | `CHAR(31)` | Calendar:Month04WorkingDays |
| `Month05HolidaysString` | `CHAR(31)` | Calendar:Month05WorkingDaysString |
| `Month06HolidaysString` | `CHAR(31)` | Month06WorkingDaysString |
| `Month07HolidaysString` | `CHAR(31)` | Calendar:Month07WorkingDays |
| `Month08HolidaysString` | `CHAR(31)` | Calendar:Month08WorkingDays |
| `Month09HolidaysString` | `CHAR(31)` | Calendar:Month09WorkingDaysString |
| `Month10HolidaysString` | `CHAR(31)` | Calendar:Month10WorkingDaysString |
| `Month11HolidaysString` | `CHAR(31)` | Calendar:Month11WorkingDays |
| `Month12HolidaysString` | `CHAR(31)` | Calendar:Month12WorkingDays |
| `NumberOfHolidays` | `NUMC(3)` | Number of days in year |
| `NumberOfHolidaysOnSaturday` | `NUMC(3)` | Public holidays on Saturday |
| `NumberOfHolidaysOnSunday` | `NUMC(3)` | Public holidays on Sunday |
