---
name: D_ENTPROJENTPROJELMNTCRTED
description: "D Entprojentprojelmntcrted"
semantic_vi: "View này hiển thị dữ liệu tạo thành phần dự án cho quản lý bộ phận dự án trong SAP PPM. Nó được sử dụng để theo dõi và phân tích hoạt động tạo thành phần dự án."
keywords:
  - "project portfolio management"
  - "dự án bộ phận"
  - "sap ppm"
  - "tạo thành phần dự án"
  - "dự án"
  - "project element creation"
  - "tạo dự án"
  - "project management"
  - "quản lý dự án"
semantic_en: "This view exposes project element creation data for project portfolio management in SAP PPM. It is used to track and analyze project element creation activities."
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
# D_ENTPROJENTPROJELMNTCRTED

**D Entprojentprojelmntcrted**

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
@EndUserText.label: 'Enterprise Project Element Created'
@Event:{
    sapObjectNodeType: 'EnterpriseProjectElement',
    sapObjectNodeTypeKey: [{ element: 'ProjectElementUUID' }],
    implementedBy: ['ABAP:RAP_EVENT']
}
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_EntProjEntProjElmntCrted {
  ProjectElementUUID : /s4ppm/tv_entity_guid;
  ProjectElement : /s4ppm/tv_external_id;
}
```
