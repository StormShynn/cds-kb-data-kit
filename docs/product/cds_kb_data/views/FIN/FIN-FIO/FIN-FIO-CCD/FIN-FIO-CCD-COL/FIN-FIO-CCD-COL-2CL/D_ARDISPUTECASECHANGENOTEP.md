---
name: D_ARDISPUTECASECHANGENOTEP
description: "D Ardisputecasechangenotep"
semantic_vi: "View D_ARDISPUTECASECHANGENOTEP hiển thị các ghi chú thay đổi trường hợp liên quan đến tranh chấp trong thành phần tài chính. Nó được sử dụng để truy xuất hoặc cập nhật các ghi chú này."
keywords:
  - "dispute"
  - "case change note"
  - "financial component"
  - "note"
  - "dispute case"
  - "case change"
  - "financial"
  - "thanh toán"
  - "tranh chấp"
  - "ghi chú"
  - "ghi chú thay đổi trường hợp"
semantic_en: "The D_ARDISPUTECASECHANGENOTEP view exposes case change notes related to disputes in the financial component. It is used to retrieve or update these notes."
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
# D_ARDISPUTECASECHANGENOTEP

**D Ardisputecasechangenotep**

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
@EndUserText.label: 'Change Parameter for Notes'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities:[#DATA_STRUCTURE]
define abstract entity D_ARDisputeCaseChangeNoteP 
{
    NoteContent    : nte_cont;
    _ChildToParent : association to parent D_ARDisputeCaseChangeP;
}
```
