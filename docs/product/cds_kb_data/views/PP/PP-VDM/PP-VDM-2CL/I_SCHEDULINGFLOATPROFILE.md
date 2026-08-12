---
name: I_SCHEDULINGFLOATPROFILE
description: "Schedulingfloatprofile"
app_component: PP-VDM-2CL
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
