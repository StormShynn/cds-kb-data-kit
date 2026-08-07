---
name: I_CALENDARDATE
description: "Calendardate"
app_component: CA-GTF-DF
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-DF
  - interface-view
  - component:CA-GTF-DF
  - lob:Cross-Application Components
---
# I_CALENDARDATE

**Calendardate**

| Property | Value |
|---|---|
| App Component | `CA-GTF-DF` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CalendarDate` | ✓ | |  | `calendardate` |  |  |
| `CalendarYear` |  | |  | `calendaryear` |  |  |
| `CalendarQuarter` |  | |  | `calendarquarter` |  |  |
| `CalendarMonth` |  | |  | `calendarmonth` |  |  |
| `CalendarWeek` |  | |  | `calendarweek` |  |  |
| `CalendarDay` |  | |  | `calendarday` |  |  |
| `YearMonth` |  | |  | `yearmonth` |  |  |
| `YearQuarter` |  | |  | `yearquarter` |  |  |
| `YearWeek` |  | |  | `yearweek` |  |  |
| `WeekDay` |  | |  | `weekday` |  |  |
| `FirstDayOfWeekDate` |  | |  | `firstdayofweekdate` |  |  |
| `FirstDayOfMonthDate` |  | |  | `firstdayofmonthdate` |  |  |
| `LastDayOfMonthDate` |  | |  | `lastdayofmonthdate` |  |  |
| `CalendarDayOfYear` |  | |  | `calendardayofyear` |  |  |
| `YearDay` |  | |  | `yearday` |  |  |
| `_CalendarMonth` | | ✓ | | | | |
| `_CalendarQuarter` | | ✓ | | | | |
| `_CalendarYear` | | ✓ | | | | |
| `_WeekDay` | | ✓ | | | | |
| `_YearMonth` | | ✓ | | | | |
| `_YearWeek` | | ✓ | | | | |
| `_CalendarWeek` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CalendarMonth` | `I_CalendarMonth` | [1..1] |
| `_CalendarQuarter` | `I_CalendarQuarter` | [1..1] |
| `_CalendarYear` | `I_CalendarYear` | [1..1] |
| `_WeekDay` | `I_WeekDay` | [1..1] |
| `_YearMonth` | `I_YearMonth` | [1..1] |
| `_YearWeek` | `I_YEARWEEK` | [1..1] |
| `_CalendarWeek` | `I_CALENDARWEEK` | [1..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.representativeKey: 'CalendarDate'
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XL 
@AbapCatalog.sqlViewName: 'ICALENDARDATE'
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Date'
@Analytics : {dataCategory: #DIMENSION, dataExtraction.enabled : true}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations:true
@Search.searchable: true

define view I_CalendarDate as select from scal_tt_date
// inner join I_SAPClient as _SAPClient on sapclient is not null
association [1..1] to I_CalendarMonth as _CalendarMonth
  on _CalendarMonth.CalendarMonth = scal_tt_date.calendarmonth
association [1..1] to I_CalendarQuarter as _CalendarQuarter
  on _CalendarQuarter.CalendarQuarter = scal_tt_date.calendarquarter
association [1..1] to I_CalendarYear as _CalendarYear
on _CalendarYear.CalendarYear = scal_tt_date.calendaryear
association [1..1] to I_WeekDay as _WeekDay
  on _WeekDay.WeekDay = scal_tt_date.weekday
association [1..1] to I_YearMonth as _YearMonth
  on _YearMonth.YearMonth = scal_tt_date.yearmonth
association [1..1] to I_YEARWEEK as _YearWeek
  on _YearWeek.YearWeek = scal_tt_date.yearweek
association [1..1] to I_CALENDARWEEK as _CalendarWeek
  on _CalendarWeek.CalendarWeek = scal_tt_date.calendarweek
{   
    key scal_tt_date.calendardate as CalendarDate,
    @ObjectModel.foreignKey.association: '_CalendarYear'
    scal_tt_date.calendaryear as CalendarYear,
    @ObjectModel.foreignKey.association: '_CalendarQuarter'
    scal_tt_date.calendarquarter as CalendarQuarter,
    @ObjectModel.foreignKey.association: '_CalendarMonth'
    scal_tt_date.calendarmonth as CalendarMonth,
    @ObjectModel.foreignKey.association: '_CalendarWeek'
    scal_tt_date.calendarweek as CalendarWeek,
    scal_tt_date.calendarday as CalendarDay,
    @ObjectModel.foreignKey.association: '_YearMonth'
    scal_tt_date.yearmonth as YearMonth,
    scal_tt_date.yearquarter as YearQuarter,
    @Search.defaultSearchElement : true
    @Search.ranking: #HIGH
    @ObjectModel.foreignKey.association: '_YearWeek'
    scal_tt_date.yearweek as YearWeek,
    @ObjectModel.foreignKey.association: '_WeekDay'
    scal_tt_date.weekday as WeekDay,

    scal_tt_date.firstdayofweekdate as FirstDayOfWeekDate,
    scal_tt_date.firstdayofmonthdate as FirstDayOfMonthDate,
    scal_tt_date.lastdayofmonthdate as LastDayOfMonthDate,
    scal_tt_date.calendardayofyear as CalendarDayOfYear,
    scal_tt_date.yearday as YearDay,
    _WeekDay,
    _CalendarMonth,
    _CalendarQuarter,
    _CalendarYear,
    _CalendarWeek,
    _YearMonth,
    _YearWeek
    
}
```
