---
name: I_SCHEDULINGTYPE
description: Schedulingtype
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
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_SCHEDULINGTYPE

**Schedulingtype**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SchedulingType` | `cast(typ.termkz as pph_termkz preserving type)` |
| `SchedulingIsPerformedForward` | `typ.vorwt` |
| `SchedulingIsPerformedBackward` | `typ.ruekt` |
| `SchedgIsPerformedFromCurDate` | `typ.tagdt` |
| `CalcOfCapacityRqmtsIsPerformed` | `typ.nterm` |
| `SchedulingTypeIsTimeBased` | `typ.eck_uhrzt` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SchedulingTypeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPSCHEDTYPE'
@AbapCatalog.buffering: {status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 001}
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Consumption.ranked: true
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.compositionRoot: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'SchedulingType'
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.sapObjectNodeType.name: 'SchedulingType'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@Search.searchable: true
@EndUserText.label: 'Scheduling Type'

define view I_SchedulingType
  as select from t482 as typ
  association [0..*] to I_SchedulingTypeText as _Text on $projection.SchedulingType = _Text.SchedulingType
{
      @ObjectModel.text.association: '_Text'
      // Key
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  key cast(typ.termkz as pph_termkz preserving type) as SchedulingType,
  
      // Indicators
      typ.vorwt     as SchedulingIsPerformedForward,
      typ.ruekt     as SchedulingIsPerformedBackward,
      typ.tagdt     as SchedgIsPerformedFromCurDate,
      typ.nterm     as CalcOfCapacityRqmtsIsPerformed,
      typ.eck_uhrzt as SchedulingTypeIsTimeBased,

      // Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Text
};
```
