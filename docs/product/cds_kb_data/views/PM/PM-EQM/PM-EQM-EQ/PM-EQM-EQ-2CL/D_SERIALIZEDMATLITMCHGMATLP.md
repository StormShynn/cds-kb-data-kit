---
name: D_SERIALIZEDMATLITMCHGMATLP
description: "D Serializedmatlitmchgmatlp"
semantic_vi: "Dữ liệu quản lý thay đổi vật liệu được phân loại theo vật liệu trong bảo trì nhà máy, được sử dụng để quản lý các thay đổi đối với vật liệu trong ngữ cảnh được phân loại."
keywords:
  - "serialized material item change master data"
  - "plant maintenance"
  - "dữ liệu quản lý thay đổi vật liệu"
  - "bảo trì nhà máy"
  - "sap pm"
  - "pm-eqm-eq-2cl"
  - "component pm-eqm-eq-2cl"
  - "lob plant maintenance"
semantic_en: "Serialized material item change master data for plant maintenance, used to manage changes to material items in a serialized context."
app_component: PM-EQM-EQ-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-EQM
  - PM-EQM-EQ
  - component:PM-EQM-EQ-2CL
  - lob:Plant Maintenance
---
# D_SERIALIZEDMATLITMCHGMATLP

**D Serializedmatlitmchgmatlp**

| Property | Value |
|---|---|
| App Component | `PM-EQM-EQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Material` |  | |  | `matnr` |  |  |

## Source Code

```abap
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@EndUserText.label: 'Change Material Action Parameters'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #NONE
define abstract entity D_SerializedMatlItmChgMatlP
{
  @Consumption.valueHelpDefinition: [
  { entity:  
    { name: 'I_MaterialStdVH',
      element: 'Material' },
    useForValidation : true
  }]
  //@ObjectModel.mandatory: true
  @EndUserText.label: 'Material'
  Material : matnr;
}
```
