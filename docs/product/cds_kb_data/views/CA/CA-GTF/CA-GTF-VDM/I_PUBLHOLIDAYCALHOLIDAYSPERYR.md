---
name: I_PUBLHOLIDAYCALHOLIDAYSPERYR
description: "Public Holidays Per Year"
app_component: CA-GTF-VDM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBLHOLIDAYCALHOLIDAYSPERYR')/$value
semantic_en: "Public Holidays Per Year"
semantic_vi: "Public Holidays Per Year — CDS view giao diện dựa trên thocs."
keywords:
  - "public"
  - "holidays"
  - "per"
  - "year"
  - "holiday"
  - "calendar"
  - "month01"
  - "string"
  - "month02"
  - "month03"
tags:
  - CA
  - CA-GTF
  - CA-GTF-VDM
  - component:CA-GTF-VDM
  - interface-view
  - lob:cross_application components
---
# I_PUBLHOLIDAYCALHOLIDAYSPERYR

**Public Holidays Per Year**

| Property | Value |
|---|---|
| App Component | `CA-GTF-VDM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBLHOLIDAYCALHOLIDAYSPERYR')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PublicHolidayCalendar` | ✓ | |  | `ident` | `CHAR(2)` | Public Holiday Calendar |
| `CalendarYear` | ✓ | |  | `jahr` | `NUMC(4)` | Year stored |
| `Month01HolidaysString` |  | |  | `cast(fcal.mon01 as tamon01 preserving type)` | `CHAR(31)` | Calendar: Month01WorkingDays |
| `Month02HolidaysString` |  | |  | `cast(fcal.mon02 as tamon02 preserving type)` | `CHAR(31)` | Calendar:Month02WorkingDays |
| `Month03HolidaysString` |  | |  | `cast(fcal.mon03 as tamon03 preserving type)` | `CHAR(31)` | Calendar:Month03WorkingDays |
| `Month04HolidaysString` |  | |  | `cast(fcal.mon04 as tamon04 preserving type)` | `CHAR(31)` | Calendar:Month04WorkingDays |
| `Month05HolidaysString` |  | |  | `cast(fcal.mon05 as tamon05 preserving type)` | `CHAR(31)` | Calendar:Month05WorkingDaysString |
| `Month06HolidaysString` |  | |  | `cast(fcal.mon06 as tamon06 preserving type)` | `CHAR(31)` | Month06WorkingDaysString |
| `Month07HolidaysString` |  | |  | `cast(fcal.mon07 as tamon07 preserving type)` | `CHAR(31)` | Calendar:Month07WorkingDays |
| `Month08HolidaysString` |  | |  | `cast(fcal.mon08 as tamon08 preserving type)` | `CHAR(31)` | Calendar:Month08WorkingDays |
| `Month09HolidaysString` |  | |  | `cast(fcal.mon09 as tamon09 preserving type)` | `CHAR(31)` | Calendar:Month09WorkingDaysString |
| `Month10HolidaysString` |  | |  | `cast(fcal.mon10 as tamon10 preserving type)` | `CHAR(31)` | Calendar:Month10WorkingDaysString |
| `Month11HolidaysString` |  | |  | `cast(fcal.mon11 as tamon11 preserving type)` | `CHAR(31)` | Calendar:Month11WorkingDays |
| `Month12HolidaysString` |  | |  | `cast(fcal.mon12 as tamon12 preserving type)` | `CHAR(31)` | Calendar:Month12WorkingDays |
| `NumberOfHolidays` |  | |  | `fenum` | `NUMC(3)` | Number of days in year |
| `NumberOfHolidaysOnSaturday` |  | |  | `samfe` | `NUMC(3)` | Public holidays on Saturday |
| `NumberOfHolidaysOnSunday` |  | |  | `sonfe` | `NUMC(3)` | Public holidays on Sunday |
| `_CalendarYear` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CalendarYear` | `I_CalendarYear` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBLHOLIDAYCALHOLIDAYSPERYR')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBLHOLIDAYCALHOLIDAYSPERYR')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ICALPH'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Public Holidays Per Year'
@AccessControl.authorizationCheck: #NOT_REQUIRED  
@AccessControl.personalData.blocking: #NOT_REQUIRED
@VDM.viewType: #BASIC  
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.type: #INHERITED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass:#CUSTOMIZING
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@ObjectModel.representativeKey: 'PublicHolidayCalendar'
@Analytics:{ dataExtraction: { enabled : true  }}
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]

define view I_PublHolidayCalHolidaysPerYr as select from thocs as fcal
association [0..1] to I_CalendarYear as _CalendarYear on $projection.CalendarYear = _CalendarYear.CalendarYear
{
//THOCS
key ident as PublicHolidayCalendar,
@ObjectModel.foreignKey.association: '_CalendarYear'
key jahr as CalendarYear,
cast(fcal.mon01 as tamon01 preserving type) as Month01HolidaysString,
cast(fcal.mon02 as tamon02 preserving type) as Month02HolidaysString,
cast(fcal.mon03 as tamon03 preserving type) as Month03HolidaysString,
cast(fcal.mon04 as tamon04 preserving type) as Month04HolidaysString,
cast(fcal.mon05 as tamon05 preserving type) as Month05HolidaysString,
cast(fcal.mon06 as tamon06 preserving type) as Month06HolidaysString,
cast(fcal.mon07 as tamon07 preserving type) as Month07HolidaysString,
cast(fcal.mon08 as tamon08 preserving type) as Month08HolidaysString,
cast(fcal.mon09 as tamon09 preserving type) as Month09HolidaysString,
cast(fcal.mon10 as tamon10 preserving type) as Month10HolidaysString,
cast(fcal.mon11 as tamon11 preserving type) as Month11HolidaysString,
cast(fcal.mon12 as tamon12 preserving type) as Month12HolidaysString,
fenum as NumberOfHolidays,
samfe as NumberOfHolidaysOnSaturday,
sonfe as NumberOfHolidaysOnSunday,
// Associations
      _CalendarYear
}
```
