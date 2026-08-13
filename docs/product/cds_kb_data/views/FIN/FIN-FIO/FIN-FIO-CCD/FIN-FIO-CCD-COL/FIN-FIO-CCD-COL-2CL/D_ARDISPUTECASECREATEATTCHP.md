---
name: D_ARDISPUTECASECREATEATTCHP
description: "D Ardisputecasecreateattchp"
semantic_vi: "View D_ARDISPUTECASECREATEATTCHP hiển thị dữ liệu kinh doanh liên quan đến các tệp đính kèm trường hợp tranh chấp, chẳng hạn như tên tệp, loại tệp và nội dung tệp nhị phân, có thể được sử dụng khi tạo hoặc quản lý các tệp đính kèm trường hợp tranh chấp trong thành phần FIN-FIO-CCD-COL-2CL."
keywords:
  - "dispute case"
  - "attachment"
  - "file"
  - "mime type"
  - "binary content"
  - "fin-fio-ccd-col-2cl"
  - "dispute"
  - "case"
  - "create"
  - "manage"
  - "component"
semantic_en: "The D_ARDISPUTECASECREATEATTCHP view exposes business data related to dispute case attachments, such as file names, mime types, and binary content, which can be used when creating or managing dispute case attachments in the FIN-FIO-CCD-COL-2CL component."
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
# D_ARDISPUTECASECREATEATTCHP

**D Ardisputecasecreateattchp**

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
@EndUserText.label: 'Create Parameter for Attachments'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities:[#DATA_STRUCTURE]
define abstract entity D_ARDisputeCaseCreateAttchP
{
  CaseAttachmentName      : bapidocid;
  MimeType                : w3conttype;
  UploadFileContentBinary : dispute_attachment_content;
  _ChildToParent          : association to parent D_ARDisputeCaseCreateP;
}
```
