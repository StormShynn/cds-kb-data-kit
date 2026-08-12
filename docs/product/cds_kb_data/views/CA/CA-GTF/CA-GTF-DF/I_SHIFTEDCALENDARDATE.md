---
name: I_SHIFTEDCALENDARDATE
description: "Shiftedcalendardate"
app_component: CA-GTF-DF
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
# I_SHIFTEDCALENDARDATE

**Shiftedcalendardate**

| Property | Value |
|---|---|
| App Component | `CA-GTF-DF` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CalendarDate` | ✓ | |  |  |  |  |
| `ShiftedCalendarDate` |  | |  | `cast( case $parameters.P_TimePeriodOffsetUnit when 'D' then dats_add_days (CalendarDate, :P_TimePeriodOffsetDuration ,'FAIL') when 'W' then dats_add_days (CalendarDate, :P_TimePeriodOffsetDuration*7 ,'FAIL') when 'M' then dats_add_months (CalendarDate, :P_TimePeriodOffsetDuration ,'FAIL') when 'Q' then dats_add_months (CalendarDate, :P_TimePeriodOffsetDuration*3 ,'FAIL') when 'Y' then dats_add_months (CalendarDate, :P_TimePeriodOffsetDuration*12 ,'FAIL') else '' end as calendardate)` |  |  |

## Source Code

```abap
@AbapCatalog: {
    sqlViewName: 'IFISCALDATE',
    compiler.compareFilter: true,
    preserveKey: true
}
@Metadata: {
    ignorePropagatedAnnotations: true
}
@ObjectModel.usageType: {
    serviceQuality: #D,
    sizeCategory: #L,
    dataClass: #CUSTOMIZING
}
@ClientHandling: {
    algorithm: #SESSION_VARIABLE
}
@AccessControl: {
    authorizationCheck: #NOT_REQUIRED
}
@VDM: {
    viewType: #COMPOSITE
}
@EndUserText: {
    label: 'Shifted Calendar Date'
}
define view I_ShiftedCalendarDate
  with parameters
    P_TimePeriodOffsetDuration : fins_tper_offset_duratn,
    P_TimePeriodOffsetUnit     : fins_tperiod_offset_unit

  as select from I_CalendarDate
{
  key CalendarDate,

      @EndUserText.label: 'Shifted Calendar Date'
      cast(
        case $parameters.P_TimePeriodOffsetUnit
            when 'D' then dats_add_days   (CalendarDate, :P_TimePeriodOffsetDuration      ,'FAIL') // Day
            when 'W' then dats_add_days   (CalendarDate, :P_TimePeriodOffsetDuration*7    ,'FAIL') // Week
            when 'M' then dats_add_months (CalendarDate, :P_TimePeriodOffsetDuration      ,'FAIL') // Month
            when 'Q' then dats_add_months (CalendarDate, :P_TimePeriodOffsetDuration*3    ,'FAIL') // Quarter
            when 'Y' then dats_add_months (CalendarDate, :P_TimePeriodOffsetDuration*12   ,'FAIL') // Year
            else ''
        end as calendardate)  as ShiftedCalendarDate
}
```
