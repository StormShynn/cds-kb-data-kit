---
name: I_CYCLECOUNTINGSETTINGS
description: "Cyclecountingsettings"
app_component: MM-IM-PI-2CL
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
  - MM
  - MM-IM
  - MM-IM-PI
  - interface-view
  - component:MM-IM-PI-2CL
  - lob:Sourcing & Procurement
---
# I_CYCLECOUNTINGSETTINGS

**Cyclecountingsettings**

| Property | Value |
|---|---|
| App Component | `MM-IM-PI-2CL` |
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
| `CycleCountType` | ✓ | |  | `cast( abcin as mmim_cycle_count_type )` |  |  |
| `NmbrOfPhysInvtryPerFiscalYear` |  | |  | `cast( aninv as mmim_cycle_count_per_fisc_year )` |  |  |
| `PhysInvtryIntvlForCycCounting` |  | |  | `cast( ininv as mmim_cycle_count_interval )` |  |  |
| `PhysInvtryFloatTimeCycCounting` |  | |  | `cast( pzinv as mmim_cycle_count_float_time )` |  |  |
| `ConfigDeprecationCode` |  | |  | `cast( configurationdeprecationcode as config_deprecation_code )` |  |  |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Cycle Counting Settings'
@ObjectModel: {
                 usageType: {
                              sizeCategory: #S,
                              serviceQuality: #C,
                              dataClass:#CUSTOMIZING
                            },
                 dataCategory: #VALUE_HELP,
                 representativeKey: 'CycleCountType',
                 sapObjectNodeType: {
                                      name: 'PhysInvtryCycleCntImportance'
                                    },
                 modelingPattern: #ANALYTICAL_DIMENSION,
                 supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
               }
@Analytics.technicalName: 'ICYCCOUNTSET'
//@ObjectModel.resultSet.sizeCategory: #XS    "category XS lead to dropdown value help, without displaying plants
@VDM: {
        viewType: #BASIC
      }
@Search.searchable: true
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true

define view entity I_CycleCountingSettings
  as select from t159c
{
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key werks                                                           as Plant,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key cast( abcin as mmim_cycle_count_type )                          as CycleCountType,

      cast( aninv as mmim_cycle_count_per_fisc_year )                 as NmbrOfPhysInvtryPerFiscalYear,
      cast( ininv as mmim_cycle_count_interval )                      as PhysInvtryIntvlForCycCounting,
      cast( pzinv as mmim_cycle_count_float_time )                    as PhysInvtryFloatTimeCycCounting,
      cast( configurationdeprecationcode as config_deprecation_code ) as ConfigDeprecationCode
}
```
