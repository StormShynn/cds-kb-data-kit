---
name: I_EWM_WAVETYPE_3
description: "Ewm Wavetype 3"
app_component: SCM-EWM-WOP-2CL
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
  - SCM
  - SCM-EWM
  - SCM-EWM-WOP
  - interface-view
  - component:SCM-EWM-WOP-2CL
  - lob:Other
---
# I_EWM_WAVETYPE_3

**Ewm Wavetype 3**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
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
| `EWMWarehouse` | ✓ | |  | `lgnum` |  |  |
| `EWMWaveType` | ✓ | |  | `wave_type` |  |  |
| `_Warehouse` | | ✓ | | | | |
| `_WaveTypeText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Warehouse` | `I_EWM_WarehouseNumber_2` | [0..1] |
| `_WaveTypeText` | `I_EWM_WaveTypeText_3` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Warehouse Wave Type'

@VDM.viewType:#BASIC

@ObjectModel.representativeKey: 'EWMWaveType'
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IEWMWAVETYPE3'
@Analytics.internalName: #LOCAL
@ObjectModel.usageType: {serviceQuality: #A,
                         dataClass: #CUSTOMIZING,
                         sizeCategory: #M}
                         
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                      #SQL_DATA_SOURCE,                                      
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
                         
@Metadata.ignorePropagatedAnnotations:true
define view entity I_EWM_WaveType_3
  as select from /scwm/twavetype

  association [0..1] to I_EWM_WarehouseNumber_2 as _Warehouse    on  $projection.EWMWarehouse = _Warehouse.EWMWarehouse
  association [0..*] to I_EWM_WaveTypeText_3    as _WaveTypeText on  $projection.EWMWarehouse = _WaveTypeText.EWMWarehouse
                                                                 and $projection.EWMWaveType  = _WaveTypeText.EWMWaveType
{
      @ObjectModel.foreignKey.association: '_Warehouse'
  key lgnum     as EWMWarehouse,
      _Warehouse,

  key wave_type as EWMWaveType,
      _WaveTypeText


}
```
