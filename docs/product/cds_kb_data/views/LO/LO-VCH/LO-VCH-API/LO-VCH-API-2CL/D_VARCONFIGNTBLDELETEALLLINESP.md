---
name: D_VARCONFIGNTBLDELETEALLLINESP
description: "D Varconfigntbldeletealllinesp"
semantic_vi: "Xóa tất cả các dòng từ bảng cấu hình biến được xác định bởi số thay đổi."
keywords:
  - "variable configuration"
  - "delete lines"
  - "change number"
  - "cấu hình biến"
  - "xóa dòng"
  - "số thay đổi"
  - "lo-vch-api-2cl"
  - "logistics general"
  - "sap cds view"
semantic_en: "Deletes all lines from a variable configuration table, identified by change number."
app_component: LO-VCH-API-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-VCH
  - LO-VCH-API
  - component:LO-VCH-API-2CL
  - lob:Logistics General
---
# D_VARCONFIGNTBLDELETEALLLINESP

**D Varconfigntbldeletealllinesp**

| Property | Value |
|---|---|
| App Component | `LO-VCH-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChangeNumber` |  | |  | `aennr` |  |  |

## Source Code

```abap
@EndUserText.label: 'Abs. Entity for Delete All Lines'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_VarConfignTblDeleteAllLinesP
{
  ChangeNumber : aennr;
}
```
