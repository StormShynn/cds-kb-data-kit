---
name: D_CNSLDTNTSKGROUPGETUNITTASKSR
description: "D Cnsldtntskgroupgetunittasksr"
semantic_vi: "Chứa dữ liệu nhóm và đơn vị công việc liên quan đến quá trình giám sát tổng hợp tài chính. Sử dụng để lấy và hiển thị thông tin công việc trong quá trình tổng hợp tài chính."
keywords:
  - "financial consolidation"
  - "consolidation task"
  - "consolidation task group"
  - "consolidation task unit"
  - "financial monitoring"
  - "tổng hợp tài chính"
  - "công việc tổng hợp"
  - "đơn vị công việc"
  - "giám sát tài chính"
semantic_en: "Exposes consolidation task group and unit task data for financial consolidation monitoring. Used to retrieve and display task information in the financial consolidation process."
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
# D_CNSLDTNTSKGROUPGETUNITTASKSR

**D Cnsldtntskgroupgetunittasksr**

| Property | Value |
|---|---|
| App Component | `FIN-CS-COR-MON-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationTaskGroup` |  | |  | `fincs_taskgroup` |  |  |
| `ConsolidationTask` |  | |  | `fincs_tsk` |  |  |
| `ConsolidationTaskText` |  | |  | `fincs_task_txt` |  |  |
| `ConsolidationTaskCategory` |  | |  | `fincs_taskcategory` |  |  |
| `ConsolidationTaskCategoryText` |  | |  | `fincs_description_text_60` |  |  |
| `CnsldtnTskIsBlkdAutomatically` |  | |  | `fincs_task_blockauto` |  |  |
| `ConsolidationTaskIsMilestone` |  | |  | `fincs_task_milestone` |  |  |
| `ConsolidationTaskSequenceValue` |  | |  | `fincs_task_sequence` |  |  |

## Source Code

```abap
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE
@ObjectModel.supportedCapabilities: [ #DATA_STRUCTURE ]
@EndUserText.label: 'Cnsldtn Task Group Get Unit Tasks Result'
define abstract entity D_CnsldtnTskGroupGetUnitTasksR
{
  ConsolidationTaskGroup                  : fincs_taskgroup;
  ConsolidationTask                       : fincs_tsk;
  ConsolidationTaskText                   : fincs_task_txt;
  ConsolidationTaskCategory               : fincs_taskcategory;
  ConsolidationTaskCategoryText           : fincs_description_text_60;
  CnsldtnTskIsBlkdAutomatically           : fincs_task_blockauto;
  ConsolidationTaskIsMilestone            : fincs_task_milestone;
  ConsolidationTaskSequenceValue          : fincs_task_sequence;
}
```
