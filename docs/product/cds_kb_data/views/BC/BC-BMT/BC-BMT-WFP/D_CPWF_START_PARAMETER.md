---
name: D_CPWF_START_PARAMETER
description: "D Cpwf Start Parameter"
semantic_vi: "View D_CPWF_START_PARAMETER hiển thị các tham số bắt đầu luồng làm việc cho định nghĩa luồng điều kiện, có thể được sử dụng khi thiết lập hoặc kiểm tra luồng làm việc."
keywords:
  - "workflow"
  - "luồng làm việc"
  - "workflow definition"
  - "định nghĩa luồng"
  - "start parameter"
  - "tham số bắt đầu"
  - "conditional processing"
  - "xử lý điều kiện"
  - "sap"
  - "basis components"
  - "bc-bmt-wfp"
semantic_en: "The D_CPWF_START_PARAMETER view exposes workflow start parameters for conditional processing of workflow definitions, which can be used when setting up or troubleshooting workflow configurations."
app_component: BC-BMT-WFP
software_component: SAP_BASIS
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-BMT
  - BC-BMT-WFP
  - component:BC-BMT-WFP
  - lob:Basis Components
---
# D_CPWF_START_PARAMETER

**D Cpwf Start Parameter**

| Property | Value |
|---|---|
| App Component | `BC-BMT-WFP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CpWfDefId` |  | |  | `swf_cpwf_defid` |  |  |
| `PaWfDefId` |  | |  | `swf_cpwf_defid_long` |  |  |
| `RetentionTime` |  | |  | `swf_cpwf_retention` |  |  |
| `Consumer` |  | |  | `swf_cpwf_consumer` |  |  |
| `CallbackClass` |  | |  | `seoclsname` |  |  |

## Source Code

```abap
@EndUserText.label: 'Parameterfield for workflow start'
define abstract entity D_CPWF_START_PARAMETER
{
  CpWfDefId     : swf_cpwf_defid;
  PaWfDefId     : swf_cpwf_defid_long;
  RetentionTime : swf_cpwf_retention;
  Consumer      : swf_cpwf_consumer;
  CallbackClass : seoclsname;
}
```
