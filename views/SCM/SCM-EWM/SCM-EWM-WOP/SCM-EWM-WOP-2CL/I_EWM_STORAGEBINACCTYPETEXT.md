---
name: I_EWM_STORAGEBINACCTYPETEXT
description: Ewm Storagebinacctypetext
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
  - text-view
  - text
  - component:SCM-EWM-WOP-2CL
  - lob:Other
---
# I_EWM_STORAGEBINACCTYPETEXT

**Ewm Storagebinacctypetext**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `'EWMStorageBinAccessType'` | `representativeKey: 'EWMStorageBinAccessType'` |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel:
  {
    representativeKey: 'EWMStorageBinAccessType',
    dataCategory: #TEXT,
    usageType.serviceQuality: #A,
    usageType.sizeCategory : #S,
    usageType.dataClass: #CUSTOMIZING
  }
@VDM:
  {
    viewType: #BASIC
  }
@EndUserText.label: 'Storage Bin Access Type - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                                      #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT                                        
define view entity I_EWM_StorageBinAccTypeText
  as select from /scwm/tbin_att
  association [0..1] to I_EWM_WarehouseNumber_2 as _Warehouse on $projection.EWMWarehouse = _Warehouse.EWMWarehouse
{
      @Semantics.language: true
  key langu                                                      as Language,
      @ObjectModel.foreignKey.association: '_Warehouse'
  key lgnum                                                      as EWMWarehouse,

  key bin_at                                                     as EWMStorageBinAccessType,

      @Semantics.text: true
      cast(text as ewm_de_storbinaccesstypedesc preserving type) as EWMStorageBinAccessTypeDesc,
      _Warehouse
}
```
