---
name: D_CNSLDTNUNITTSKRUNEXECTTASKR
description: "D Cnsldtnunittskrunexecttaskr"
semantic_vi: "Chứa thông tin về các nhiệm vụ thực hiện trong các công việc nền tảng được tích hợp, cho phép theo dõi và quản lý các nhiệm vụ này."
keywords:
  - "consolidated unit task run execution"
  - "background job"
  - "công việc nền tảng"
  - "task management"
  - "fin-cs-cor"
  - "fin-cs-cor-mon-2cl"
  - "financial consolidation"
  - "consolidation unit"
  - "task run"
  - "execution task"
semantic_en: "Exposes consolidated unit task run execution tasks for background jobs, providing a way to track and manage these tasks."
app_component: FIN-CS-COR-MON-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-COR
  - component:FIN-CS-COR-MON-2CL
  - lob:Other
---
# D_CNSLDTNUNITTSKRUNEXECTTASKR

**D Cnsldtnunittskrunexecttaskr**

| Property | Value |
|---|---|
| App Component | `FIN-CS-COR-MON-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CnsldtnTaskRunBackgroundJob` |  | |  | `fincs_taskrun_job_id` |  |  |
| `CnsldtnTskRunBackgroundJobName` |  | |  | `fincs_taskrun_jobname_id` |  |  |

## Source Code

```abap
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE
@ObjectModel.supportedCapabilities: [ #DATA_STRUCTURE ]
@EndUserText.label: 'Cnsldt Unit Task Run Execute Result'
define abstract entity D_CnsldtnUnitTskRunExectTaskR
{
  CnsldtnTaskRunBackgroundJob              : fincs_taskrun_job_id;
  CnsldtnTskRunBackgroundJobName           : fincs_taskrun_jobname_id;
}
```
