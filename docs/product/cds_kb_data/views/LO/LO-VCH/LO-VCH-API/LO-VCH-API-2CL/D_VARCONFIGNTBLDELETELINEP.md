---
name: D_VARCONFIGNTBLDELETELINEP
description: "D Varconfigntbldeletelinep"
semantic_vi: "View này hiển thị dữ liệu bảng cấu hình biến cho dòng xóa, được sử dụng khi cập nhật hoặc xóa bản ghi cấu hình biến."
keywords:
  - "variable configuration"
  - "deletion line"
  - "update"
  - "delete"
  - "variable configuration record"
  - "cấu hình biến"
  - "dòng xóa"
  - "cập nhật"
  - "xóa"
  - "bản ghi cấu hình biến"
semantic_en: "This view exposes variable configuration table data for deletion lines, used when updating or deleting variable configuration records."
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
# D_VARCONFIGNTBLDELETELINEP

**D Varconfigntbldeletelinep**

| Property | Value |
|---|---|
| App Component | `LO-VCH-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `VarConfignTblLineNumber` |  | |  | `vtlin` |  |  |
| `ChangeNumber` |  | |  | `aennr` |  |  |

## Source Code

```abap
@EndUserText.label: 'Abs. Entity for Delete Line'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_VarConfignTblDeleteLineP
{
  VarConfignTblLineNumber : vtlin;
  ChangeNumber            : aennr;
}
```
