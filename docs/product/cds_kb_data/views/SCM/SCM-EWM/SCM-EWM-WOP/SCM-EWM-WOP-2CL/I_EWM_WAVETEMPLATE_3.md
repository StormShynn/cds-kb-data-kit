---
name: I_EWM_WAVETEMPLATE_3
description: "Ewm Wavetemplate 3"
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SCM
  - SCM-EWM
  - SCM-EWM-WOP
  - interface-view
  - component:SCM-EWM-WOP-2CL
  - lob:Other
---
# I_EWM_WAVETEMPLATE_3

**Ewm Wavetemplate 3**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMWarehouse` | ✓ | |  | `lgnum` |  |  |
| `EWMWaveTemplate` | ✓ | |  | `cast( tmplt as ewm_de_wavetemplate )` |  |  |
| `EWMWaveReleaseMethod` |  | |  | `rls_mthd` |  |  |
| `EWMWaveType` |  | |  | `wave_type` |  |  |
| `EWMWaveCategory` |  | |  | `wave_cat` |  |  |
| `BehaviourDuringPickDenial` |  | |  | `bind_process` |  |  |
| `_Warehouse` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Warehouse` | `I_EWM_WarehouseNumber_2` | [0..1] |
| `_Text` | `I_EWM_WaveTemplateText_3` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Warehouse Wave Template'
@VDM.viewType:#BASIC
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'EWMWaveTemplate'
@Analytics.technicalName: 'IEWMWAVETEMPLTE3'

@ObjectModel.usageType: {serviceQuality: #A,
                         dataClass: #CUSTOMIZING,
                         sizeCategory: #M}
@Analytics.internalName:#LOCAL  
@ObjectModel.supportedCapabilities:[ #CDS_MODELING_DATA_SOURCE ]
define view entity I_EWM_WaveTemplate_3
  as select from /scwm/wv_tmplt as wavehdr
  association [0..1] to I_EWM_WarehouseNumber_2 as _Warehouse on  $projection.EWMWarehouse = _Warehouse.EWMWarehouse
  association [0..*] to I_EWM_WaveTemplateText_3  as _Text      on  $projection.EWMWaveTemplate = _Text.EWMWaveTemplate
                                                              and $projection.EWMWarehouse = _Text.EWMWarehouse
{
      @ObjectModel.foreignKey.association: '_Warehouse'
  key lgnum                                  as EWMWarehouse,
      @ObjectModel.text.association: '_Text'
  key cast( tmplt as ewm_de_wavetemplate )   as EWMWaveTemplate, 
      rls_mthd                               as EWMWaveReleaseMethod,
      wave_type                              as EWMWaveType,
      wave_cat                               as EWMWaveCategory,
      bind_process                           as BehaviourDuringPickDenial,
      //      release_retry_interval        as ReleaseRetryInterval,
      _Text,
      _Warehouse
}
```
