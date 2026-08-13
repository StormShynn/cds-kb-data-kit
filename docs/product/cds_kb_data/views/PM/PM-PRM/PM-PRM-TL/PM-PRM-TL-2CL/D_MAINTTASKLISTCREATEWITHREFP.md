---
name: D_MAINTTASKLISTCREATEWITHREFP
description: "D Maintenance Task ListCREATEWITHREFP"
semantic_vi: "CDS view D_MAINTTASKLISTCREATEWITHREFP hiển thị danh sách danh sách công việc bảo trì có thể được tạo dựa trên các nhiệm vụ hiện có, thường được sử dụng khi lên kế hoạch và lên lịch hoạt động bảo trì."
keywords:
  - "maintenance task list"
  - "danh sách công việc bảo trì"
  - "pm-prm-tl"
  - "plant maintenance"
  - "component:pm-prm-tl-2cl"
  - "lob:plant maintenance"
  - "pm"
  - "pm-prm"
semantic_en: "The D_MAINTTASKLISTCREATEWITHREFP CDS view exposes a list of maintenance task lists that can be created with reference to existing tasks, typically used when planning and scheduling maintenance activities."
app_component: PM-PRM-TL-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-PRM
  - PM-PRM-TL
  - component:PM-PRM-TL-2CL
  - lob:Plant Maintenance
---
# D_MAINTTASKLISTCREATEWITHREFP

**D Maintenance Task ListCREATEWITHREFP**

| Property | Value |
|---|---|
| App Component | `PM-PRM-TL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DocumentCopyIsRequested` |  | |  | `flag` |  |  |
| `RelationshipCopyIsRequested` |  | |  | `flag` |  |  |
| `DescriptionCopyIsRequested` |  | |  | `flag` |  |  |
| `MaintTskListValidityStartDate` |  | |  | `datuv` |  |  |

## Source Code

```abap
@EndUserText.label: 'Copy Reference TL'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_MaintTaskListCreateWithRefP
{
  DocumentCopyIsRequested       : flag;
  RelationshipCopyIsRequested   : flag;
  DescriptionCopyIsRequested    : flag;
  MaintTskListValidityStartDate : datuv;
}
```
