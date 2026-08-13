---
name: D_LGLTRANSCANCELTSKGRPP
description: "D Lgltranscanceltskgrpp"
semantic_vi: "View D_LGLTRANSCANCELTSKGRPP hiển thị các bản ghi nhóm nhiệm vụ bị hủy bỏ cho các giao dịch pháp lý, có thể được sử dụng để theo dõi và quản lý các nhiệm vụ bị hủy bỏ trong một luồng làm việc."
keywords:
  - "legal transaction"
  - "giao dịch pháp lý"
  - "cancelled task"
  - "nhiệm vụ bị hủy bỏ"
  - "workflow"
  - "luồng làm việc"
  - "task group"
  - "nhóm nhiệm vụ"
  - "sap"
  - "cm-lt-2cl"
semantic_en: "The D_LGLTRANSCANCELTSKGRPP view exposes cancelled task group records for legal transactions, which can be used to track and manage cancelled tasks in a workflow."
app_component: CM-LT-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CM
  - CM-LT
  - component:CM-LT-2CL
  - lob:Other
---
# D_LGLTRANSCANCELTSKGRPP

**D Lgltranscanceltskgrpp**

| Property | Value |
|---|---|
| App Component | `CM-LT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LglTransWrkflwModInstance` |  | |  | `sibfboriid` |  |  |

## Source Code

```abap
@EndUserText.label: 'LegalTrans Cancel TaskGroup Action Param'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_LglTransCancelTskGrpP 
{
    LglTransWrkflwModInstance : sibfboriid;
}
```
