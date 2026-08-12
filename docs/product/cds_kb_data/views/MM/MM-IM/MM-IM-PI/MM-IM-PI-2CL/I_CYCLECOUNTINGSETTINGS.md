---
name: I_CYCLECOUNTINGSETTINGS
description: "Cyclecountingsettings"
app_component: MM-IM-PI-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
