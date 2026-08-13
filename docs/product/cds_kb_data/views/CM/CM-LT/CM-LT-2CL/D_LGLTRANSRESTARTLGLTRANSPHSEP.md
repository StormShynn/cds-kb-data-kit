---
name: D_LGLTRANSRESTARTLGLTRANSPHSEP
description: "D Lgltransrestartlgltransphsep"
semantic_vi: "View D_LGLTRANSRESTARTLGLTRANSPHSEP hiển thị thông tin restart cho các giao dịch pháp lý được phân tách giai đoạn. Nó được sử dụng khi xử lý giao dịch pháp lý cần restart."
keywords:
  - "legal transaction"
  - "giao dịch pháp lý"
  - "restart"
  - "phân tách giai đoạn"
  - "sap"
  - "cm-lt-2cl"
  - "component"
  - "lob-other"
semantic_en: "The D_LGLTRANSRESTARTLGLTRANSPHSEP view exposes restart information for legal transactions in a phase-separated format. It is used when handling legal transactions that require restarts."
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
# D_LGLTRANSRESTARTLGLTRANSPHSEP

**D Lgltransrestartlgltransphsep**

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
@EndUserText.label: 'Legal Trans Restart Phase Action Param'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_LglTransRestartLglTransPhseP
{
  LglCntntMPhaseUUID : lcm_uuid;
}
```
