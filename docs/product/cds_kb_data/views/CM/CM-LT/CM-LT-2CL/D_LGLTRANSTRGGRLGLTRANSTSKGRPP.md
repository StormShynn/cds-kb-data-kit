---
name: D_LGLTRANSTRGGRLGLTRANSTSKGRPP
description: "D Lgltranstrggrlgltranstskgrpp"
semantic_vi: "View này hiển thị mối quan hệ nhóm nhiệm vụ giao dịch pháp lý và các nhóm nhiệm vụ tương ứng. Nó được sử dụng để quản lý và phân tích các kết nối giữa giao dịch pháp lý và các nhiệm vụ liên quan."
keywords:
  - "legal transaction"
  - "task group"
  - "giao dịch pháp lý"
  - "nhóm nhiệm vụ"
  - "sap cds"
  - "cm-lt-2cl"
  - "component"
  - "lob:other"
  - "nhiệm vụ"
  - "quản lý"
  - "phân tích"
semantic_en: "This view exposes legal transaction task group relationships and their corresponding task group assignments. It is used to manage and analyze the connections between legal transactions and their associated tasks."
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
# D_LGLTRANSTRGGRLGLTRANSTSKGRPP

**D Lgltranstrggrlgltranstskgrpp**

| Property | Value |
|---|---|
| App Component | `CM-LT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LglCntntMTaskGroupUUID` |  | |  | `lcm_uuid` |  |  |
| `LglCntntMWrkflwDocLink` |  | |  | `lcm_lt_wrkflw_doclink` |  |  |
| `LglCntntMContextUUID` |  | |  | `lcm_uuid` |  |  |
| `LegalTransactionUUID` |  | |  | `lcm_uuid` |  |  |

## Source Code

```abap
@EndUserText.label: 'Trigger LegalTrans TaskGroup Actn Param'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_LglTransTrggrLglTransTskGrpP
{
  LglCntntMTaskGroupUUID : lcm_uuid;
  LglCntntMWrkflwDocLink : lcm_lt_wrkflw_doclink;
  LglCntntMContextUUID   : lcm_uuid;
  LegalTransactionUUID   : lcm_uuid;
}
```
