---
name: D_ENTPROJELMNTMOVEINHIERARCHYP
description: "D Entprojelmntmoveinhierarchyp"
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
