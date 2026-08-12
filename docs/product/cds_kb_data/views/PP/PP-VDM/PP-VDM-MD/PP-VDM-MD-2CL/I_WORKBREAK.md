---
name: I_WORKBREAK
description: "Workbreak"
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ShiftGrouping` | ✓ | |  | `schgrup` |  |  |
| `WorkBreakSchedule` | ✓ | |  | `paplan` |  |  |
| `WorkBreakNumber` | ✓ | |  | `paunr` |  |  |
| `WorkBreakStartTime` |  | |  | `paubeg` |  |  |
| `WorkBreakEndTime` |  | |  | `pauend` |  |  |
| `DurnUntilWorkBreakInHours` |  | |  | `stdaz` |  |  |
| `BreakDurationInSeconds` |  | |  | `padauer` |  |  |
| `_ShiftGrouping` | | ✓ | | | | |
| `_WorkBreakSchedule` | | ✓ | | | | |

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
