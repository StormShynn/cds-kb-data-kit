---
name: F_FISCALCALENDARDAYSHIFT
description: Fiscalcalendardayshift
app_component: FI-GL-GL-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-GL
  - fact-view
  - component:FI-GL-GL-2CL
  - lob:Finance
---
# F_FISCALCALENDARDAYSHIFT

**Fiscalcalendardayshift**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `'I_FiscalYearVariant'` | `name: 'I_FiscalYearVariant'` |
| `'FiscalYearVariant'` | `element: 'FiscalYearVariant'` |

## Source Code

```abap
@EndUserText.label: 'Fiscal Calendar Day Shift'
@Metadata.allowExtensions:false
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'ShiftedCalendarDate'
@Analytics.technicalName: 'FFIFCDSHIFT'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType: {
  dataClass: #CUSTOMIZING,
  serviceQuality: #B,
  sizeCategory: #S
}
//@AbapCatalog.buffering:{
//  status: #ACTIVE,
//  type: #FULL
//}
@ObjectModel: {
  supportedCapabilities: [#DERIVATION_FUNCTION],
  modelingPattern: #DERIVATION_FUNCTION
  }

@VDM.viewType: #DERIVATION_FUNCTION
@ObjectModel.derivationFunction: {
  applicableFor.element: ['CalendarDate'],
  result: {
    type: #SINGLE,
    multipleRecords: false,
    element: 'ShiftedCalendarDate'
  }
}

define view entity F_FiscalCalendarDayShift
  with parameters
      // No meaningful value help possible since FiscalYearVariant is required
    P_CalendarDate            : calendardate, // fins_fcalendarday,
    @Consumption.valueHelpDefinition: [{
    entity: {
      name: 'I_FiscalYearVariant',
      element: 'FiscalYearVariant' }
    }]
    P_FiscalYearVariant            : fis_periv,
      
        // No value help needed since its an integer value
    P_FsclTimePeriodOffsetDuration : fins_fscl_tper_offset_duratn
    
/*    @Consumption.valueHelpDefinition: [{
      entity: {
        name: 'I_FiscalTimeUnitValueHelp',
        element: 'FiscalTimeUnit'
      }
     }]
    P_FiscalTimePeriodOffsetUnit   : fins_fscl_tperiod_offset_unit
*/
  //  as select from I_ShiftedFiscalCalendarDate
  as select from I_FiscalCalendarDate
{

  //key P_FiscalCalendarDayShift._FiscalCalendarDate.FiscalCalendarDay as ShiftedFiscalCalendarDay,
  
  key dats_add_days($parameters.P_CalendarDate,$parameters.P_FsclTimePeriodOffsetDuration,'INITIAL') as ShiftedCalendarDate

      //  key I_ShiftedFiscalCalendarDate._FiscalCalendarDate.FiscalYearQuarter as ShiftedFiscalYearQuarter

}
where
    I_FiscalCalendarDate.FiscalYearVariant    = $parameters.P_FiscalYearVariant
and I_FiscalCalendarDate.CalendarDate         = $parameters.P_CalendarDate
```
