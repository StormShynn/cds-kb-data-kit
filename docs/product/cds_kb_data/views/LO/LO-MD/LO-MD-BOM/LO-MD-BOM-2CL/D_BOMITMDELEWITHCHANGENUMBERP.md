---
name: D_BOMITMDELEWITHCHANGENUMBERP
description: "D Bomitmdelewithchangenumberp"
semantic_vi: "View D_BOMITMDELEWITHCHANGENUMBERP hiển thị việc xóa mục trong BOM kèm theo số thay đổi, thường được sử dụng khi quản lý tài liệu thay đổi kỹ thuật cho mục chỉnh sửa."
keywords:
  - "bom"
  - "engineering change document"
  - "đơn thay đổi kỹ thuật"
  - "xóa mục trong bom"
  - "số thay đổi"
  - "tài liệu thay đổi kỹ thuật"
  - "lo-md-bom"
  - "logistics general"
  - "ekko"
  - "sap cds"
semantic_en: "The D_BOMITMDELEWITHCHANGENUMBERP view exposes BOM item deletions with change numbers, typically used when managing engineering change documents for editing."
app_component: LO-MD-BOM-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-BOM
  - bom
  - component:LO-MD-BOM-2CL
  - lob:Logistics General
---
# D_BOMITMDELEWITHCHANGENUMBERP

**D Bomitmdelewithchangenumberp**

| Property | Value |
|---|---|
| App Component | `LO-MD-BOM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EngineeringChangeDocForEdit` |  | |  | `aennr` |  |  |

## Source Code

```abap
@EndUserText.label: 'Delete BOM Item with change number'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel: { 
  supportedCapabilities: [#DATA_STRUCTURE],
  modelingPattern: #DATA_STRUCTURE      
 }
define abstract entity D_BOMItmDeleWithChangeNumberP   {
  
 
  EngineeringChangeDocForEdit : aennr;
  
}
```
