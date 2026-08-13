---
name: D_ARDISPUTECASECREATENOTEP
description: "D Ardisputecasecreatenotep"
semantic_vi: "View D_ARDISPUTECASECREATENOTEP hiển thị các ghi chú tạo lập trường tranh chấp tài chính trong thành phần FIN-FIO-CCD-COL-2CL, được sử dụng khi quản lý các tranh chấp tài chính."
keywords:
  - "dispute case"
  - "financial dispute"
  - "note"
  - "fin-fio-ccd-col-2cl"
  - "component"
  - "financial"
  - "dispute"
  - "note content"
  - "tạo lập trường tranh chấp"
  - "ghi chú"
  - "tài chính"
semantic_en: "The D_ARDISPUTECASECREATENOTEP view exposes dispute case creation notes in the FIN-FIO-CCD-COL-2CL component, used when managing financial disputes."
app_component: FIN-FIO-CCD-COL-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - note
  - dispute
  - component:FIN-FIO-CCD-COL-2CL
  - lob:Other
---
# D_ARDISPUTECASECREATENOTEP

**D Ardisputecasecreatenotep**

| Property | Value |
|---|---|
| App Component | `FIN-FIO-CCD-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `NoteContent` |  | |  | `nte_cont` |  |  |
| `_ChildToParent` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Create Parameter for Notes'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities:[#DATA_STRUCTURE]
define abstract entity D_ARDisputeCaseCreateNoteP 
{
    NoteContent    : nte_cont;
    _ChildToParent : association to parent D_ARDisputeCaseCreateP;
}
```
