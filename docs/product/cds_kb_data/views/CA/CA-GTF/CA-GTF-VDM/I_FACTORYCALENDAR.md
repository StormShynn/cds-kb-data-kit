---
name: I_FACTORYCALENDAR
description: "This CDS view provides the prerequisites for answering the following business questions: Which factory calendars are maintained? Which are the validity start and end years of the factory calendars? Which public holiday calendars are assigned to the factory calendars?"
app_component: CA-GTF-VDM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FACTORYCALENDAR')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: Which factory calendars are maintained? Which are the validity start and end years of the factory calendars? Which public holiday calendars are assigned to the factory calendars?"
tags:
  - CA
  - bo:plant
  - CA-GTF
  - CA-GTF-VDM
  - component:CA-GTF-VDM
  - interface-view
  - lob:cross_application components
  - metadata-only
---
# I_FACTORYCALENDAR

**This CDS view provides the prerequisites for answering the following business questions: Which factory calendars are maintained? Which are the validity start and end years of the factory calendars? Which public holiday calendars are assigned to the factory calendars?**

| Property | Value |
|---|---|
| App Component | `CA-GTF-VDM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FACTORYCALENDAR')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FactoryCalendar` |  | |  |  | `CHAR(2)` | Factory Calendar ID |
| `PublicHolidayCalendar` |  | |  |  | `CHAR(2)` | Public Holiday Calendar |
| `ValidityStartYear` |  | |  |  | `NUMC(4)` | Validity Start Year |
| `ValidityEndYear` |  | |  |  | `NUMC(4)` | Validity End Year |
| `CreationDate` |  | |  |  | `DATS(8)` | Record Creation Date |
| `CreationTime` |  | |  |  | `TIMS(6)` | Entry time |
| `MondayIsWorkingDay` |  | |  |  | `CHAR(1)` | Indicator: Monday is Working Day |
| `TuesdayIsWorkingDay` |  | |  |  | `CHAR(1)` | Indicator: Tuesday is Working Day |
| `WednesdayIsWorkingDay` |  | |  |  | `CHAR(1)` | Indicator: Wednesday is Working Day |
| `ThursdayIsWorkingDay` |  | |  |  | `CHAR(1)` | Indicator: Thursday is Working Day |
| `FridayIsWorkingDay` |  | |  |  | `CHAR(1)` | Indicator: Friday is Working Day |
| `SaturdayIsWorkingDay` |  | |  |  | `CHAR(1)` | Indicator: Saturday is Working Day |
| `SundayIsWorkingDay` |  | |  |  | `CHAR(1)` | Indicator: Sunday is Working Day |
| `HolidayIsWorkingDay` |  | |  |  | `CHAR(1)` | Indicator: Holiday is Working Day |
| `FactoryCalendarStartDayValue` |  | |  |  | `NUMC(5)` | Start of factory calendar day numbering |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Date of Last Change |
| `LastChangeTime` |  | |  |  | `TIMS(6)` | Calendar: Creation or change time |
| `FactoryCalSpclRulesAreExisting` |  | |  |  | `CHAR(1)` | Factory Calendar Special Rules Are Existing |
