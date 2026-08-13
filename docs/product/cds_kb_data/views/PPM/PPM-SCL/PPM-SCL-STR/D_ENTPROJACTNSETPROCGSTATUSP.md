---
name: D_ENTPROJACTNSETPROCGSTATUSP
description: "D Entprojactnsetprocgstatusp"
semantic_vi: "View D_ENTPROJACTNSETPROCGSTATUSP cung cấp thông tin trạng thái hoạt động dự án cho quản lý dự án để theo dõi tiến độ và đưa ra quyết định có căn cứ. Nó được sử dụng để theo dõi trạng thái hoạt động và nhiệm vụ dự án."
keywords:
  - "project"
  - "activity"
  - "status"
  - "progress"
  - "project manager"
  - "ppm"
  - "scl"
  - "str"
  - "dự án"
  - "hoạt động"
  - "trạng thái"
  - "tiến độ"
semantic_en: "The D_ENTPROJACTNSETPROCGSTATUSP view provides project activity status information for project managers to track progress and make informed decisions. It is used to monitor the status of project activities and tasks."
app_component: PPM-SCL-STR
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-STR
  - status
  - component:PPM-SCL-STR
  - lob:Other
---
# D_ENTPROJACTNSETPROCGSTATUSP

**D Entprojactnsetprocgstatusp**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProcessingStatus` |  | |  | `dpr_tv_proc_status_sup` |  |  |

## Source Code

```abap
@EndUserText.label: 'Enterprise Project Action set processing status'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [ #DATA_STRUCTURE ]
define abstract entity D_EntProjActnSetProcgStatusP
{
  ProcessingStatus : dpr_tv_proc_status_sup;
}
```
