---
name: D_LGLTRANSSTRTLGLTRANSPHSEP
description: "D Lgltransstrtlgltransphsep"
semantic_vi: "View này hiển thị danh sách các giai đoạn giao dịch pháp lý cho một UUID giai đoạn cụ thể, được sử dụng để quản lý và theo dõi giao dịch pháp lý theo cách có cấu trúc."
keywords:
  - "legal transaction"
  - "giai đoạn giao dịch pháp lý"
  - "phase uuid"
  - "transaction phase"
  - "giai đoạn giao dịch"
  - "legal transaction management"
  - "quản lý giao dịch pháp lý"
  - "sap cm"
  - "cm lt"
  - "component cm lt 2cl"
semantic_en: "This view exposes a list of legal transaction phases for a specific phase UUID, used to manage and track legal transactions in a structured manner."
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
# D_LGLTRANSSTRTLGLTRANSPHSEP

**D Lgltransstrtlgltransphsep**

| Property | Value |
|---|---|
| App Component | `CM-LT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LglCntntMPhaseUUID` |  | |  | `lcm_uuid` |  |  |

## Source Code

```abap
@EndUserText.label: 'Legal Trans Start Phase Action Parameter'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_LglTransStrtLglTransPhseP
{
  LglCntntMPhaseUUID : lcm_uuid;
}
```
