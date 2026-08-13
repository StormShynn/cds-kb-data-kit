---
name: D_ENTPROJELMNTMOVEINHIERARCHYP
description: "D Entprojelmntmoveinhierarchyp"
semantic_vi: "View D_ENTPROJELMNTMOVEINHIERARCHYP hiển thị dữ liệu lịch sử di chuyển phần tử dự án, hữu ích cho việc theo dõi thay đổi trong cấu trúc dự án."
keywords:
  - "project element"
  - "project hierarchy"
  - "move history"
  - "di chuyển phần tử dự án"
  - "dữ liệu lịch sử"
  - "cấu trúc dự án"
  - "ppm"
  - "ppm-scl-str"
  - "project management"
  - "quản lý dự án"
semantic_en: "The D_ENTPROJELMNTMOVEINHIERARCHYP view exposes project element move history data, useful for tracking changes in project hierarchies."
app_component: PPM-SCL-STR
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-STR
  - component:PPM-SCL-STR
  - lob:Other
---
# D_ENTPROJELMNTMOVEINHIERARCHYP

**D Entprojelmntmoveinhierarchyp**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ParentObjectUUID` |  | |  | `/s4ppm/tv_task_guid` |  |  |
| `LeftSiblingUUID` |  | |  | `/s4ppm/tv_task_guid` |  |  |

## Source Code

```abap
@EndUserText.label: 'ProjectElementAction Chg Elem Position'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [ #DATA_STRUCTURE ]
define abstract entity D_EntProjElmntMoveInHierarchyP
{
  ParentObjectUUID : /s4ppm/tv_task_guid;
  LeftSiblingUUID  : /s4ppm/tv_task_guid;
}
```
