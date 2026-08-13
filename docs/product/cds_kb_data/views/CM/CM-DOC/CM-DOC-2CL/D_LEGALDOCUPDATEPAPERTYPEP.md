---
name: D_LEGALDOCUPDATEPAPERTYPEP
description: "D Legaldocupdatepapertypep"
semantic_vi: "View D_LEGALDOCUPDATEPAPERTYPEP hiển thị các loại giấy tờ pháp lý cập nhật, có liên quan khi quản lý cập nhật tài liệu trong thành phần CM-DOC-2CL."
keywords:
  - "legal document"
  - "update paper type"
  - "cm-doc-2cl"
  - "component"
  - "document management"
  - "tài liệu pháp lý"
  - "loại giấy tờ cập nhật"
  - "quản lý tài liệu"
semantic_en: "The D_LEGALDOCUPDATEPAPERTYPEP view exposes legal document update paper types, which are relevant when managing document updates in the CM-DOC-2CL component."
app_component: CM-DOC-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CM
  - CM-DOC
  - component:CM-DOC-2CL
  - lob:Other
---
# D_LEGALDOCUPDATEPAPERTYPEP

**D Legaldocupdatepapertypep**

| Property | Value |
|---|---|
| App Component | `CM-DOC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LglCntntMDocPaperType` |  | |  | `lcm_doc_paper_type` |  |  |

## Source Code

```abap
@EndUserText.label: 'Legal document Paper Type'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_LegalDocUpdatePaperTypeP
{
  LglCntntMDocPaperType : lcm_doc_paper_type;

}
```
