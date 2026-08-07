---
name: D_ARDISPUTECASECREATEATTCHP
description: D Ardisputecasecreateattchp
app_component: FIN-FIO-CCD-COL-2CL
software_component: SAPSCORE
release_state: released
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

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CaseAttachmentName` |  | |  | `bapidocid` |
| `MimeType` |  | |  | `w3conttype` |
| `UploadFileContentBinary` |  | |  | `dispute_attachment_content` |
| `_ChildToParent` | | ✓ | | |

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
