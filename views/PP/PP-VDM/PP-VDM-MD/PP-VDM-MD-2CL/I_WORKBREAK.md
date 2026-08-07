---
name: I_WORKBREAK
description: Workbreak
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
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_WORKBREAK

**Workbreak**

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
| `WorkBreakNumber` | ✓ | |  | `paunr` |
| `WorkBreakStartTime` |  | |  | `paubeg` |
| `WorkBreakEndTime` |  | |  | `pauend` |
| `DurnUntilWorkBreakInHours` |  | |  | `stdaz` |
| `BreakDurationInSeconds` |  | |  | `padauer` |
| `_ShiftGrouping` | | ✓ | | |
| `_WorkBreakSchedule` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ShiftGrouping` | `I_ShiftGrouping` | [1..1] |
| `_WorkBreakSchedule` | `I_WorkBreakSchedule` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPWORKBREAK'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.buffering: {status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 002}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY,#EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'WorkBreakNumber'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Work Break'
@ObjectModel.sapObjectNodeType.name:'WorkBreak'
@Analytics.dataExtraction.enabled: true

define view I_WorkBreak
  as select from tc37p as break

  association [1..1] to I_ShiftGrouping     as _ShiftGrouping     on  $projection.ShiftGrouping     = _ShiftGrouping.ShiftGrouping
  association [1..1] to I_WorkBreakSchedule as _WorkBreakSchedule on  $projection.ShiftGrouping     = _WorkBreakSchedule.ShiftGrouping
                                                                  and $projection.WorkBreakSchedule = _WorkBreakSchedule.WorkBreakSchedule
{
      @ObjectModel.foreignKey.association: '_ShiftGrouping'
  key break.schgrup as ShiftGrouping,
      @ObjectModel.foreignKey.association: '_WorkBreakSchedule'
  key break.paplan  as WorkBreakSchedule,
      // Work Break data
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  key break.paunr   as WorkBreakNumber,
      break.paubeg  as WorkBreakStartTime,
      break.pauend  as WorkBreakEndTime,
      break.stdaz   as DurnUntilWorkBreakInHours,
      break.padauer as BreakDurationInSeconds, 

      // Associations
      _ShiftGrouping,
      _WorkBreakSchedule
};
```
