---
name: I_WORKBREAKSCHEDULE
description: Workbreakschedule
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - PP-VDM-MD
  - interface-view
  - schedule-line
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_WORKBREAKSCHEDULE

**Workbreakschedule**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ShiftGrouping` | ✓ | |  | `schgrup` |
| `WorkBreakSchedule` | ✓ | |  | `paplan` |
| `_Text` | | ✓ | | |
| `_Text2` | | ✓ | | |
| `_WorkBreak` | | ✓ | | |
| `_ShiftGrouping` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_WorkBreakScheduleText` | [0..*] |
| `_Text2` | `I_WorkBreakScheduleText` | [0..*] |
| `_WorkBreak` | `I_WorkBreak` | [1..*] |
| `_ShiftGrouping` | `I_ShiftGrouping` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPWORKBREAKSCH'
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY, #VALUE_HELP_PROVIDER,#EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'WorkBreakSchedule'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Work Break Schedule'
@ObjectModel.sapObjectNodeType.name:'WorkBreakSchedule'
@Analytics.dataExtraction.enabled: true

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_WorkBreakSchedule
  as select distinct from tc37p as sched
  association [0..*] to I_WorkBreakScheduleText as _Text          on  $projection.WorkBreakSchedule = _Text.WorkBreakSchedule
  association [0..*] to I_WorkBreakScheduleText as _Text2         on  $projection.WorkBreakSchedule = _Text2.WorkBreakSchedule
                                                                  and $projection.ShiftGrouping     = _Text2.ShiftGrouping
  association [1..*] to I_WorkBreak             as _WorkBreak     on  $projection.WorkBreakSchedule = _WorkBreak.WorkBreakSchedule
  association [1..1] to I_ShiftGrouping         as _ShiftGrouping on  $projection.ShiftGrouping = _ShiftGrouping.ShiftGrouping
{
      @ObjectModel.foreignKey.association: '_ShiftGrouping'
  key sched.schgrup as ShiftGrouping,
      @ObjectModel.text.association: '_Text2'
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  key sched.paplan  as WorkBreakSchedule,

      // Associations
      _ShiftGrouping,
      _WorkBreak,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_Text2'
      _Text,
      _Text2
};
```
