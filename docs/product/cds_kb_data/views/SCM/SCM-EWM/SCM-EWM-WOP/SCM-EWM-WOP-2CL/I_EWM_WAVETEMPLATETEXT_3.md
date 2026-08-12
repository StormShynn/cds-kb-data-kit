---
name: I_EWM_WAVETEMPLATETEXT_3
description: "Ewm Wavetemplatetext 3"
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_EWM_WAVETEMPLATETEXT_3

**Ewm Wavetemplatetext 3**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `langu` |  |  |
| `EWMWarehouse` | ✓ | |  | `lgnum` |  |  |
| `EWMWaveTemplate` | ✓ | |  | `cast( tmplt as ewm_de_wavetemplate )` |  |  |
| `EWMWaveTemplateName` |  | |  | `text` |  |  |
| `_Warehouse` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Warehouse` | `I_EWM_WarehouseNumber_2` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Warehouse Wave Template - Text'
@VDM.viewType:#BASIC
@Metadata.ignorePropagatedAnnotations:true

@ObjectModel.representativeKey: 'EWMWaveTemplate'
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IEWMWAVETPT3'
@ObjectModel.usageType: {serviceQuality: #A,
                         dataClass: #CUSTOMIZING,
                         sizeCategory: #M}
@Analytics.internalName:#LOCAL
@ObjectModel.supportedCapabilities:[ #CDS_MODELING_DATA_SOURCE ]
@Search.searchable: true
define view entity I_EWM_WaveTemplateText_3
  as select from /scwm/wv_tmpltt as WaveTemplateText
  association [0..1] to I_EWM_WarehouseNumber_2 as _Warehouse on $projection.EWMWarehouse = _Warehouse.EWMWarehouse
{
      
      @Semantics.language: true
  key langu                                  as Language,
  
  @ObjectModel.foreignKey.association:'_Warehouse'  
  key lgnum                                  as EWMWarehouse,
  key cast( tmplt as ewm_de_wavetemplate )   as EWMWaveTemplate,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      text                                   as EWMWaveTemplateName, //WaveTemplateName，
      _Warehouse
}
```
