---
name: I_EWM_WAVETYPETEXT_3
description: Ewm Wavetypetext 3
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SCM
  - SCM-EWM
  - SCM-EWM-WOP
  - interface-view
  - text
  - component:SCM-EWM-WOP-2CL
  - lob:Other
---
# I_EWM_WAVETYPETEXT_3

**Ewm Wavetypetext 3**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Language` | ✓ | |  | `langu` |
| `EWMWarehouse` | ✓ | |  | `lgnum` |
| `EWMWaveType` | ✓ | |  | `wave_type` |
| `EWMWaveTypeName` |  | |  | `text` |
| `_Warehouse` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Warehouse` | `I_EWM_WarehouseNumber_2` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Warehouse Wave Type - Text'

@VDM.viewType:#BASIC

@ObjectModel.representativeKey: 'EWMWaveType'
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IEWMWVTYPET3'
@ObjectModel.usageType: {serviceQuality: #A,
                         dataClass: #CUSTOMIZING,
                         sizeCategory: #M}
@Search.searchable: true
@ObjectModel.supportedCapabilities:[ #CDS_MODELING_DATA_SOURCE ]
@Metadata.ignorePropagatedAnnotations:true

define view entity I_EWM_WaveTypeText_3
  as select from /scwm/twavetypet as WaveTypeText
  association [0..1] to I_EWM_WarehouseNumber_2 as _Warehouse on $projection.EWMWarehouse = _Warehouse.EWMWarehouse

{
      
      @Semantics.language: true
  key langu     as Language,
      @ObjectModel.foreignKey.association:'_Warehouse'
  key lgnum     as EWMWarehouse,
  key wave_type as EWMWaveType,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH

      text      as EWMWaveTypeName,
      _Warehouse
}
```
