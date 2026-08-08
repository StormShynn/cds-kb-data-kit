---
name: I_PLANNINGPERIODSCHEDULELINE
description: "PLANNINGPERIODSchedule Line"
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - interface-view
  - schedule-line
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_PLANNINGPERIODSCHEDULELINE

**PLANNINGPERIODSchedule Line**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MRPPlant` | ✓ | |  | `cast(ppsl.werks as werks_d preserving type)` |  |  |
| `MRPPlanningCalendar` | ✓ | |  | `cast(ppsl.mrppp as mrppp preserving type)` |  |  |
| `PlngPerdScheduleLineEndDate` | ✓ | |  | `cast(ppsl.ppbis as vdm_ppbis preserving type)` |  |  |
| `PlngPerdScheduleLineStartDate` | ✓ | |  | `cast(ppsl.ppvon as vdm_ppvon preserving type)` |  |  |
| `PlngPerdScheduleLineInternalID` |  | |  | `cast(ppsl.pperi as vdm_pperi preserving type)` |  |  |
| `PlngPerdScheduleLineIsFixed` |  | |  | `cast(ppsl.ppfix as vdm_ppfix preserving type)` |  |  |
| `_Plant` | | ✓ | | | | |
| `_PlanningCalendar` | | ✓ | | | | |
| `_PlanningPeriod` | | ✓ | | | | |
| `_StartDate` | | ✓ | | | | |
| `_EndDate` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Plant` | `I_Plant` | [1..1] |
| `_PlanningCalendar` | `I_MRPPlanningCalendar` | [1..1] |
| `_PlanningPeriod` | `I_MRPPlanningPeriod` | [1..1] |
| `_StartDate` | `I_CalendarDate` | [1..1] |
| `_EndDate` | `I_CalendarDate` | [1..1] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #FACT
@Analytics.technicalName: 'IPLNGCALSCHEDLLI'
@Analytics.internalName: #LOCAL
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Schedule Line for MRP Planning Period'

define view entity I_PlanningPeriodScheduleLine
  as select from t439i as ppsl

  association [1..1] to I_Plant               as _Plant            on  $projection.MRPPlant = _Plant.Plant
  association [1..1] to I_MRPPlanningCalendar as _PlanningCalendar on  $projection.MRPPlant            = _PlanningCalendar.MRPPlant
                                                                   and $projection.MRPPlanningCalendar = _PlanningCalendar.MRPPlanningCalendar
  association [1..1] to I_MRPPlanningPeriod   as _PlanningPeriod   on  $projection.MRPPlant            = _PlanningPeriod.MRPPlant
                                                                   and $projection.MRPPlanningCalendar = _PlanningPeriod.MRPPlanningCalendar
  association [1..1] to I_CalendarDate        as _StartDate        on  $projection.PlngPerdScheduleLineStartDate = _StartDate.CalendarDate                                                                     
  association [1..1] to I_CalendarDate        as _EndDate          on  $projection.PlngPerdScheduleLineEndDate = _EndDate.CalendarDate
{
      // Key
      @ObjectModel.foreignKey.association: '_Plant'
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
  key cast(ppsl.werks as werks_d   preserving type) as MRPPlant,
      @ObjectModel.foreignKey.association: '_PlanningCalendar'
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  key cast(ppsl.mrppp as mrppp     preserving type) as MRPPlanningCalendar,
      @ObjectModel.foreignKey.association: '_EndDate'
  key cast(ppsl.ppbis as vdm_ppbis preserving type) as PlngPerdScheduleLineEndDate,
      @ObjectModel.foreignKey.association: '_StartDate'
  key cast(ppsl.ppvon as vdm_ppvon preserving type) as PlngPerdScheduleLineStartDate,

      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      cast(ppsl.pperi as vdm_pperi preserving type) as PlngPerdScheduleLineInternalID,
      @Semantics.booleanIndicator
      cast(ppsl.ppfix as vdm_ppfix preserving type) as PlngPerdScheduleLineIsFixed,
  
      // Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _PlanningPeriod,
      _Plant,
      _PlanningCalendar,
      _StartDate,
      _EndDate
};
```
