---
name: D_VARCONFIGNTBLCNTNTRTRVBYKDTP
description: "D Varconfigntblcntntrtrvbykdtp"
semantic_vi: "View này hiển thị nội dung bảng cấu hình biến theo ngày khóa cho các giao dịch Logistics General. Nó được sử dụng để lấy dữ liệu cấu hình biến cho một ngày cụ thể."
keywords:
  - "logistics general"
  - "variable configuration"
  - "cấu hình biến"
  - "transactional data"
  - "data retrieval"
  - "lo"
  - "lo-vch"
  - "lo-vch-api"
  - "transactional processing"
  - "cấu hình"
  - "ngày khóa"
semantic_en: "This view exposes variable configuration table content by key date for Logistics General transactions. It is used to retrieve variable configuration data for a specific date."
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
  - transactional-processing
  - component:LO-VCH-API-2CL
  - lob:Logistics General
---
# D_VARCONFIGNTBLCNTNTRTRVBYKDTP

**D Varconfigntblcntntrtrvbykdtp**

| Property | Value |
|---|---|
| App Component | `LO-VCH-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `KeyDate` |  | |  | `vdm_v_key_date` |  |  |

## Source Code

```abap
@EndUserText.label: 'Abs. Entity for Content Read by Key Date'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_VarConfignTblCntntRtrvByKDtP
{
  KeyDate : vdm_v_key_date;
}
```
