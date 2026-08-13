---
name: D_ARDISPUTECASECHANGEATTCHP
description: "D Ardisputecasechangeattchp"
semantic_vi: "View D_ARDISPUTECASECHANGEATTCHP hiển thị dữ liệu liên quan đến tài liệu đính kèm của các vụ việc tranh chấp, có thể được sử dụng để lấy hoặc cập nhật thông tin tài liệu đính kèm cho các thay đổi vụ việc tranh chấp."
keywords:
  - "dispute case"
  - "case attachment"
  - "fin-fio-ccd-col-2cl"
  - "financial component"
  - "lob other"
  - "dispute"
  - "case change"
  - "attachment"
  - "financial dispute"
  - "dispute case change"
  - "financial case attachment"
semantic_en: "The D_ARDISPUTECASECHANGEATTCHP view exposes case attachment data related to dispute cases, which can be used to retrieve or update attachment information for dispute case changes."
app_component: FIN-FIO-CCD-COL-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - dispute
  - component:FIN-FIO-CCD-COL-2CL
  - lob:Other
---
# D_ARDISPUTECASECHANGEATTCHP

**D Ardisputecasechangeattchp**

| Property | Value |
|---|---|
| App Component | `FIN-FIO-CCD-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CaseAttachmentName` |  | |  | `bapidocid` |  |  |
| `MimeType` |  | |  | `w3conttype` |  |  |
| `UploadFileContentBinary` |  | |  | `dispute_attachment_content` |  |  |
| `_ChildToParent` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Change Parameter for Attachments'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities:[#DATA_STRUCTURE]
define abstract entity D_ARDisputeCaseChangeAttchP
{
  CaseAttachmentName      : bapidocid;
  MimeType                : w3conttype;
  UploadFileContentBinary : dispute_attachment_content;
  _ChildToParent          : association to parent D_ARDisputeCaseChangeP;
}
```
