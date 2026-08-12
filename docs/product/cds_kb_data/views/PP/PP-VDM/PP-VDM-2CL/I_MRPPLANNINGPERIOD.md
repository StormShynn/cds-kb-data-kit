---
name: I_MRPPLANNINGPERIOD
description: "Mrpplanningperiod"
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - interface-view
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_MRPPLANNINGPERIOD

**Mrpplanningperiod**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MRPPlant` | ✓ | |  | `werks` |  |  |
| `MRPPlanningCalendar` | ✓ | |  | `mrppp` |  |  |
| `MRPPlanningCalendarCalcRule` |  | |  | `mrpps` |  |  |
| `ValidityStartDate` |  | |  | `datuv` |  |  |
| `ValidityEndDate` |  | |  | `datub` |  |  |
| `CreationDate` |  | |  | `erfdt` |  |  |
| `_Plant` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_ScheduleLine` | | ✓ | | | | |
| `_CalculationRule` | | ✓ | | | | |
| `_ValidityStartDate` | | ✓ | | | | |
| `_ValidityEndDate` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Plant` | `I_Plant` | [1..1] |
| `_Text` | `I_MRPPlanningPeriodText` | [0..*] |
| `_ScheduleLine` | `I_PlanningPeriodScheduleLine` | [0..*] |
| `_CalculationRule` | `I_PlanningPeriodCalcRule` | [0..1] |
| `_ValidityStartDate` | `I_CalendarDate` | [1..1] |
| `_ValidityEndDate` | `I_CalendarDate` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPMRPPLNGPERIOD'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.buffering: {status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 001}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Consumption.ranked: true
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.compositionRoot: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel.representativeKey: 'MRPPlanningCalendar'
@ObjectModel.semanticKey: ['MRPPlant', 'MRPPlanningCalendar']
@ObjectModel.sapObjectNodeType.name: 'MRPPlanningCalendar'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'MRP Planning Period'
// CDS view for the full planning period, for the key fields only refer to CDS I_MRPPlanningCalendar

define view I_MRPPlanningPeriod
  as select from t439g as per

  association [1..1] to I_Plant                      as _Plant             on  $projection.MRPPlant = _Plant.Plant
  association [0..*] to I_MRPPlanningPeriodText      as _Text              on  $projection.MRPPlant            = _Text.MRPPlant
                                                                           and $projection.MRPPlanningCalendar = _Text.MRPPlanningCalendar
  association [0..*] to I_PlanningPeriodScheduleLine as _ScheduleLine      on  $projection.MRPPlant            = _ScheduleLine .MRPPlant
                                                                           and $projection.MRPPlanningCalendar = _ScheduleLine .MRPPlanningCalendar
  association [0..1] to I_PlanningPeriodCalcRule     as _CalculationRule   on  $projection.MRPPlanningCalendarCalcRule = _CalculationRule.PlanningPeriodCalculationRule
  association [1..1] to I_CalendarDate               as _ValidityStartDate on  $projection.ValidityStartDate = _ValidityStartDate.CalendarDate                                                                     
  association [1..1] to I_CalendarDate               as _ValidityEndDate   on  $projection.ValidityEndDate = _ValidityEndDate.CalendarDate
{
      // Key
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      @ObjectModel.foreignKey.association: '_Plant'
  key per.werks as MRPPlant,
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
      @ObjectModel.text.association: '_Text'
  key per.mrppp as MRPPlanningCalendar,

      @ObjectModel.foreignKey.association: '_CalculationRule'
      per.mrpps as MRPPlanningCalendarCalcRule,
      @ObjectModel.foreignKey.association: '_ValidityStartDate'
      per.datuv as ValidityStartDate,
      @ObjectModel.foreignKey.association: '_ValidityEndDate'
      per.datub as ValidityEndDate,
      @Semantics.systemDate.createdAt: true
      per.erfdt as CreationDate,

      // Associations
      _Plant,
      _CalculationRule,
      _ValidityStartDate,
      _ValidityEndDate,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _ScheduleLine,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Text
};
```
