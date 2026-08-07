---
name: I_SHIFTDEFINITION
description: Shiftdefinition
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
# I_SHIFTDEFINITION

**Shiftdefinition**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ShiftDefinition` | ✓ | |  | `kaptprog` |  |  |
| `ShiftGrouping` | ✓ | |  | `schgrup` |  |  |
| `ShiftEndDate` | ✓ | |  | `endda` |  |  |
| `ShiftEndTime` |  | |  | `endzt` |  |  |
| `ShiftStartDate` |  | |  | `begda` |  |  |
| `ShiftStartTime` |  | |  | `begzt` |  |  |
| `OperatingDurationInSeconds` |  | |  | `einzt` |  |  |
| `WorkBreakSchedule` |  | |  | `paplan` |  |  |
| `DailyWorkSchedule` |  | |  | `tprog` |  |  |
| `DailyWorkScheduleGroup` |  | |  | `motpr` |  |  |
| `DailyWorkScheduleVariant` |  | |  | `varia` |  |  |
| `ValidityEndDate` |  | |  | `cast(def.endda as vdm_validityend preserving type)` |  |  |
| `_Text` | | ✓ | | | | |
| `_Text2` | | ✓ | | | | |
| `_ShiftGrouping` | | ✓ | | | | |
| `_EndDate` | | ✓ | | | | |
| `_StartDate` | | ✓ | | | | |
| `_WorkBreakSchedule` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ShiftDefinitionText` | [0..*] |
| `_Text2` | `I_ShiftDefinitionText` | [0..*] |
| `_ShiftGrouping` | `I_ShiftGrouping` | [1..1] |
| `_EndDate` | `I_CalendarDate` | [1..1] |
| `_StartDate` | `I_CalendarDate` | [0..1] |
| `_WorkBreakSchedule` | `I_WorkBreakSchedule` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPSHIFTDEFTN'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.buffering: {status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 002}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Consumption.ranked: true
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY,#EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'ShiftDefinition'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Shift Definition Code'
@ObjectModel.sapObjectNodeType.name:'ShiftDefinition'
@Analytics.dataExtraction.enabled: true

define view I_ShiftDefinition
  as select from tc37a as def
  association [0..*] to I_ShiftDefinitionText as _Text              on  $projection.ShiftDefinition = _Text.ShiftDefinition
  association [0..*] to I_ShiftDefinitionText as _Text2             on  $projection.ShiftDefinition = _Text2.ShiftDefinition
                                                                    and $projection.ShiftGrouping   = _Text2.ShiftGrouping
  association [1..1] to I_ShiftGrouping       as _ShiftGrouping     on  $projection.ShiftGrouping = _ShiftGrouping.ShiftGrouping
  association [1..1] to I_CalendarDate        as _EndDate           on  $projection.ShiftEndDate   = _EndDate.CalendarDate
  association [0..1] to I_CalendarDate        as _StartDate         on  $projection.ShiftStartDate = _StartDate.CalendarDate
  association [1..1] to I_WorkBreakSchedule   as _WorkBreakSchedule on  $projection.ShiftGrouping     = _WorkBreakSchedule.ShiftGrouping
                                                                    and $projection.WorkBreakSchedule = _WorkBreakSchedule.WorkBreakSchedule
{
      @ObjectModel.text.association: '_Text2'
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  key def.kaptprog as ShiftDefinition,
      @ObjectModel.foreignKey.association: '_ShiftGrouping'
  key def.schgrup  as ShiftGrouping,
      // Dates and Times
      @ObjectModel.foreignKey.association: '_EndDate'
      @Semantics.businessDate.to: true
  key def.endda    as ShiftEndDate,
      def.endzt    as ShiftEndTime,
      @ObjectModel.foreignKey.association: '_StartDate'
      @Semantics.businessDate.from: true
      def.begda    as ShiftStartDate,
      def.begzt    as ShiftStartTime,
      def.einzt    as OperatingDurationInSeconds,

      // Work Break
      @ObjectModel.foreignKey.association: '_WorkBreakSchedule'      
      def.paplan   as WorkBreakSchedule,

      // Daily Work Schedule
      def.tprog    as DailyWorkSchedule,
      def.motpr    as DailyWorkScheduleGroup,
      def.varia    as DailyWorkScheduleVariant,
      cast(def.endda as vdm_validityend preserving type) as ValidityEndDate,

      // Associations
      _ShiftGrouping,
      _EndDate,
      _StartDate,
      _WorkBreakSchedule,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_Text2'
      _Text,
      _Text2
};
```
