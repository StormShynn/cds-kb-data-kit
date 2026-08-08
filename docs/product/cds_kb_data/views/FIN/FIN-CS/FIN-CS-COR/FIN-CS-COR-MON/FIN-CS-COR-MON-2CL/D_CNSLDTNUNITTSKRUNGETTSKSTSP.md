---
name: D_CNSLDTNUNITTSKRUNGETTSKSTSP
description: "D Cnsldtnunittskrungettskstsp"
app_component: FIN-CS-COR-MON-2CL
software_component: SAPSCORE
release_state: released
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
# D_CNSLDTNUNITTSKRUNGETTSKSTSP

**D Cnsldtnunittskrungettskstsp**

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
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE
@ObjectModel.supportedCapabilities: [ #DATA_STRUCTURE ]
@EndUserText.label: 'Cnsldtn Unit Task Run Get Status Param'
define abstract entity D_CnsldtnUnitTskRunGetTskStsP
{
  CnsldtnTaskRunBackgroundJob              : fincs_taskrun_job_id;
  CnsldtnTskRunBackgroundJobName           : fincs_taskrun_jobname_id;
}
```
