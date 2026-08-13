---
name: D_SERIALIZEDMATLITMCHGSRLNMBRR
description: "D Serializedmatlitmchgsrlnmbrr"
semantic_vi: "Lịch sử thay đổi vật liệu có ký hiệu hàng loạt được ghi lại trong view này, cung cấp lịch sử thay đổi cho vật liệu có ký hiệu hàng loạt trong ngữ cảnh bảo trì nhà máy."
keywords:
  - "serialized material"
  - "plant maintenance"
  - "material item changes"
  - "history of changes"
  - "vật liệu có ký hiệu hàng loạt"
  - "bảo trì nhà máy"
  - "thay đổi vật liệu có ký hiệu hàng loạt"
  - "lịch sử thay đổi"
semantic_en: "Serialized material item changes are recorded in this view, providing a history of changes to serialized materials in the plant maintenance context."
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
# D_SERIALIZEDMATLITMCHGSRLNMBRR

**D Serializedmatlitmchgsrlnmbrr**

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
| `SerialNumber` |  | |  | `gernr` |  |  |

## Source Code

```abap
@VDM.usage.type: [ #ACTION_RESULT_STRUCTURE ]
@EndUserText.label: 'Change Serial Number Action Result'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]

define abstract entity D_SerializedMatlItmChgSrlNmbrR
{
  Material     : matnr;
  SerialNumber : gernr;
}
```
