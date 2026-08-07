---
name: I_SCHEDULINGFLOATPROFILE
description: Schedulingfloatprofile
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
# I_SCHEDULINGFLOATPROFILE

**Schedulingfloatprofile**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Plant` | ✓ | |  | `werks` |  |  |
| `SchedulingFloatProfile` | ✓ | |  | `cast(fhori as vdm_fhori preserving type)` |  |  |
| `OpeningPeriodInWorkDays` |  | |  | `erhor` |  |  |
| `ReleasePeriodInWorkDays` |  | |  | `cast(freiz as vdm_freiz preserving type)` |  |  |
| `FloatAfterProductionInWorkDays` |  | |  | `cast(sichz as vdm_sichz preserving type)` |  |  |
| `FloatBeforeProductionInWrkDays` |  | |  | `cast(vorgz as vdm_vorgz preserving type)` |  |  |
| `_Plant` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Plant` | `I_Plant` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISCHEDLFLOATPRFL'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.buffering: {status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 001}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Consumption.ranked: true
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.sapObjectNodeType.name: 'SchedulingFloatProfile' 
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #SQL_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel.representativeKey: 'SchedulingFloatProfile'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Scheduling Float Profile'

define view I_SchedulingFloatProfile
  as select from t436a
  
  association [1..1] to I_Plant as _Plant on $projection.Plant = _Plant.Plant
  {
      @ObjectModel.foreignKey.association: '_Plant'
  key werks                                    as Plant,
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  key cast(fhori as vdm_fhori preserving type) as SchedulingFloatProfile,

      // Floats
      erhor                                    as OpeningPeriodInWorkDays,
      cast(freiz as vdm_freiz preserving type) as ReleasePeriodInWorkDays,
      cast(sichz as vdm_sichz preserving type) as FloatAfterProductionInWorkDays,
      cast(vorgz as vdm_vorgz preserving type) as FloatBeforeProductionInWrkDays,

      // Associations
      _Plant
  };
```
