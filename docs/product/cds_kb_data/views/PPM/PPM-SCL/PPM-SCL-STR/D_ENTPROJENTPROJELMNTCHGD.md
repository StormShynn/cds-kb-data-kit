---
name: D_ENTPROJENTPROJELMNTCHGD
description: "D Entprojentprojelmntchgd"
semantic_vi: "View D_ENTPROJENTPROJELMNTCHGD hiển thị dữ liệu lịch sử thay đổi của phần tử dự án, có thể được sử dụng để theo dõi các thay đổi được thực hiện đối với phần tử dự án qua thời gian."
keywords:
  - "project element"
  - "project element change history"
  - "dự án"
  - "phần tử dự án"
  - "lịch sử thay đổi"
  - "ppm"
  - "ppm-scl-str"
  - "project management"
  - "quản lý dự án"
semantic_en: "The D_ENTPROJENTPROJELMNTCHGD view exposes project element change history data, which can be used to track changes made to project elements over time."
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
# D_ENTPROJENTPROJELMNTCHGD

**D Entprojentprojelmntchgd**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjectElementUUID` |  | |  | `/s4ppm/tv_entity_guid` |  |  |
| `ProjectElement` |  | |  | `/s4ppm/tv_external_id` |  |  |

## Source Code

```abap
@EndUserText.label: 'Enterprise Project Element Changed'
@Event:{
    sapObjectNodeType: 'EnterpriseProjectElement',
    sapObjectNodeTypeKey: [{ element: 'ProjectElementUUID' }],
    implementedBy: ['ABAP:RAP_EVENT']
}
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_EntProjEntProjElmntChgd {
    ProjectElementUUID : /s4ppm/tv_entity_guid;
    ProjectElement : /s4ppm/tv_external_id;
}
```
