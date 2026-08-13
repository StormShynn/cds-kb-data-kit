---
name: D_SERIALIZEDMATLITMCHGSRLNMBRP
description: "D Serializedmatlitmchgsrlnmbrp"
semantic_vi: "Bản ghi thay đổi vật liệu có ký hiệu hóa là được lưu trữ trong view này, bao gồm số vật liệu có ký hiệu hóa, lý do thay đổi và số ký hiệu hóa. Nó được sử dụng để quản lý và phân tích các thay đổi của vật liệu có ký hiệu hóa trong bảo trì nhà máy."
keywords:
  - "serialized material item"
  - "plant maintenance"
  - "thay đổi vật liệu có ký hiệu hóa"
  - "bảo trì nhà máy"
  - "sap pm"
  - "sap eqm"
  - "equipment maintenance"
  - "đơn vị sản xuất"
semantic_en: "Serialized material item changes are tracked in this view, including the serialized material item number, change reason, and serial number. It is used to manage and analyze changes to serialized items in plant maintenance."
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
# D_SERIALIZEDMATLITMCHGSRLNMBRP

**D Serializedmatlitmchgsrlnmbrp**

| Property | Value |
|---|---|
| App Component | `PM-EQM-EQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SerialNumber` |  | |  | `gernr` |  |  |

## Source Code

```abap
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@EndUserText.label: 'Change Serial Number Action Parameters'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_SerializedMatlItmChgSrlNmbrP
{
 // @ObjectModel.mandatory: true
  @EndUserText.label: 'Serial Number'
 //  @Consumption.valueHelpDefinition: [
  //{ entity:  { name:    'C_MATERIALSERIALNUMBERVH',
//                    element: 'SerialNumber' }, useForValidation:false}]
  SerialNumber : gernr;
}
```
