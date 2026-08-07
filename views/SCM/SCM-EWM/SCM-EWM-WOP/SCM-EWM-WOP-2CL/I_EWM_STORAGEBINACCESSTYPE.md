---
name: I_EWM_STORAGEBINACCESSTYPE
description: "Ewm Storagebinaccesstype"
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
  - component:SCM-EWM-WOP-2CL
  - lob:Other
---
# I_EWM_STORAGEBINACCESSTYPE

**Ewm Storagebinaccesstype**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `'EWMStorageBinAccessType'` |  | |  | `representativeKey: 'EWMStorageBinAccessType'` |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Storage Bin Access Type'
@VDM.viewType:#BASIC
@ObjectModel:
  {
    representativeKey: 'EWMStorageBinAccessType',
    usageType.serviceQuality: #A,
    usageType.sizeCategory : #S,
    usageType.dataClass: #CUSTOMIZING
  }
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                      #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@Analytics.internalName:#LOCAL
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IEWMSTORBINACCTY'
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true 
define view entity I_EWM_StorageBinAccessType
  as select from /scwm/tbin_at
  association [0..1] to I_EWM_WarehouseNumber_2     as _Warehouse on  $projection.EWMWarehouse = _Warehouse.EWMWarehouse
  association [0..*] to I_EWM_StorageBinAccTypeText as _Text      on  $projection.EWMStorageBinAccessType = _Text.EWMStorageBinAccessType
                                                                  and $projection.EWMWarehouse            = _Text.EWMWarehouse
{
      @ObjectModel.foreignKey.association: '_Warehouse'
  key lgnum  as EWMWarehouse,
      @ObjectModel.text.association: '_Text'
  key bin_at as EWMStorageBinAccessType,
      _Text,
      _Warehouse
}
```
