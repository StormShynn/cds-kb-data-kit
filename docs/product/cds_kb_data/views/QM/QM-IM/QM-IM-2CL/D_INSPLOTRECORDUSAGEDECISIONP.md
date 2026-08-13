---
name: D_INSPLOTRECORDUSAGEDECISIONP
description: "D Insplotrecordusagedecisionp"
semantic_vi: "View D_INSPLOTRECORDUSAGEDECISIONP hiển thị các bản ghi quyết định sử dụng lô kiểm tra, có liên quan khi xác định quyết định sử dụng lô kiểm tra trong quản lý chất lượng."
keywords:
  - "inspection lot"
  - "đô kiểm tra"
  - "quality management"
  - "quản lý chất lượng"
  - "decision record"
  - "bản ghi quyết định"
  - "sap qm"
  - "qm-im-2cl"
semantic_en: "The D_INSPLOTRECORDUSAGEDECISIONP CDS view exposes inspection lot usage decision records, which are relevant when determining the usage decision for an inspection lot in quality management."
app_component: QM-IM-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-IM
  - component:QM-IM-2CL
  - lob:Quality Management
---
# D_INSPLOTRECORDUSAGEDECISIONP

**D Insplotrecordusagedecisionp**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SelectedCodeSetPlant` |  | |  | `qwerkausw` |  |  |
| `InspLotUsgeDcsnSelectedSet` |  | |  | `qvmenge` |  |  |
| `InspLotUsageDecisionCodeGroup` |  | |  | `qvgruppe` |  |  |
| `InspectionLotUsageDecisionCode` |  | |  | `qvcode` |  |  |
| `InspLotIsCompletionForced` |  | |  | `vdm_qinsp_completion_forced` |  |  |

## Source Code

```abap
@EndUserText.label: 'Insp Lot Record Usage Decision Parameter'
@ObjectModel: {
  modelingPattern: #DATA_STRUCTURE,
  supportedCapabilities: [#DATA_STRUCTURE]
  }
@VDM: {
  usage.type: [ #ACTION_PARAMETER_STRUCTURE ]
}


define root abstract entity D_InspLotRecordUsageDecisionP
{
  SelectedCodeSetPlant           : qwerkausw;
  InspLotUsgeDcsnSelectedSet     : qvmenge;
  InspLotUsageDecisionCodeGroup  : qvgruppe;
  InspectionLotUsageDecisionCode : qvcode;
  InspLotIsCompletionForced      : vdm_qinsp_completion_forced;

}
```
