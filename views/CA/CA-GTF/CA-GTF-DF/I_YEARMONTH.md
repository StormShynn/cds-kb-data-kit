---
name: I_YEARMONTH
description: Yearmonth
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
# I_YEARMONTH

**Yearmonth**

| Property | Value |
|---|---|
| App Component | `CA-GTF-DF` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `YearMonth` | ✓ | |  | `yearmonth` |
| `CalendarMonth` |  | |  | `calendarmonth` |
| `CalendarYear` |  | |  | `calendaryear` |
| `CalendarQuarter` |  | |  | `calendarquarter` |
| `IsLeapYear` |  | |  | `isleapyear` |
| `NumberOfDays` |  | |  | `numberofdays` |
| `FirstDayOfMonthDate` |  | |  | `firstdayofmonthdate` |
| `LastDayOfMonthDate` |  | |  | `lastdayofmonthdate` |
| `HalfYear` |  | |  | `halfyear` |
| `_CalendarMonth` | | ✓ | | |
| `_CalendarQuarter` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CalendarMonth` | `I_CalendarMonth` | [0..1] |
| `_CalendarQuarter` | `I_CalendarQuarter` | [1..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE //Inserted by VDM CDS Suite Plugin
@ObjectModel.representativeKey: 'YearMonth'
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XL
@AbapCatalog.sqlViewName: 'IYEARMONTH'
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Year Month'
@Analytics : {dataCategory: #DIMENSION, dataExtraction.enabled : true}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations:true
@Search.searchable: true

define view I_YearMonth
  as select from scal_tt_month as month
    inner join   scal_tt_year  as year on month.calendaryear = year.calendaryear
  association [0..1] to I_CalendarMonth   as _CalendarMonth   on $projection.CalendarMonth = _CalendarMonth.CalendarMonth
  association [1..1] to I_CalendarQuarter as _CalendarQuarter on $projection.CalendarQuarter = _CalendarQuarter.CalendarQuarter
{
      @Search.defaultSearchElement : true
  key month.yearmonth           as YearMonth,
      @ObjectModel.foreignKey.association:  '_CalendarMonth'
      month.calendarmonth       as CalendarMonth,

      month.calendaryear        as CalendarYear,
      @ObjectModel.foreignKey.association:  '_CalendarQuarter'
      month.calendarquarter     as CalendarQuarter,
      year.isleapyear           as IsLeapYear,
      month.numberofdays        as NumberOfDays,
      month.firstdayofmonthdate as FirstDayOfMonthDate,
      month.lastdayofmonthdate  as LastDayOfMonthDate,
      month.halfyear            as HalfYear,
      _CalendarMonth,
      _CalendarQuarter
}
```
