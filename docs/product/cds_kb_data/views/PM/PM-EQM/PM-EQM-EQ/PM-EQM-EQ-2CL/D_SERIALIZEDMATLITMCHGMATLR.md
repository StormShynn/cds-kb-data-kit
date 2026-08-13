---
name: D_SERIALIZEDMATLITMCHGMATLR
description: "D Serializedmatlitmchgmatlr"
semantic_vi: "View này hiển thị các vật liệu được mã hóa đã thay đổi bởi việc phát hành lô vật liệu trong bảo trì nhà máy. Nó được sử dụng để theo dõi các thay đổi của vật liệu được mã hóa khi lô vật liệu được phát hành."
keywords:
  - "serialized material"
  - "material lot release"
  - "plant maintenance"
  - "material item"
  - "change management"
  - "sap pm"
  - "sap eqm"
  - "sap eq"
  - "material lot"
  - "plant maintenance management"
semantic_en: "This view exposes serialized material items changed by a material lot release in plant maintenance. It is used to track changes to serialized materials when a material lot is released."
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
# D_SERIALIZEDMATLITMCHGMATLR

**D Serializedmatlitmchgmatlr**

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
@EndUserText.label: 'Change Material Action Result'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_SerializedMatlItmChgMatlR
{
  Material     : matnr;
  SerialNumber : gernr;
}
```
