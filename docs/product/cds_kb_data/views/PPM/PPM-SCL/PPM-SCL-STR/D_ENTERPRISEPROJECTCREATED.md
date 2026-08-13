---
name: D_ENTERPRISEPROJECTCREATED
description: "D Enterpriseprojectcreated"
semantic_vi: "View D_ENTERPRISEPROJECTCREATED hiển thị dữ liệu tạo dự án doanh nghiệp, có thể sử dụng khi theo dõi việc tạo mới dự án trong ứng dụng PPM-SCL-STR."
keywords:
  - "enterprise project"
  - "project creation"
  - "ppm-scl-str"
  - "dự án doanh nghiệp"
  - "tạo dự án"
  - "project management"
  - "quản lý dự án"
semantic_en: "The D_ENTERPRISEPROJECTCREATED view exposes enterprise project creation data, which is useful when tracking the creation of new projects in the PPM-SCL-STR application."
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
  - project
  - component:PPM-SCL-STR
  - lob:Other
  - bo:Project
---
# D_ENTERPRISEPROJECTCREATED

**D Enterpriseprojectcreated**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Project` |  | |  | `/s4ppm/tv_external_id` |  |  |

## Source Code

```abap
@EndUserText.label: 'Enterprise Project Created'
@Event:{
    sapObjectNodeType: 'EnterpriseProject',
    implementedBy: ['ABAP:RAP_EVENT']
}
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@VDM.usage.type: [#EVENT_SIGNATURE]
define abstract entity D_EnterpriseProjectCreated 
{
    Project : /s4ppm/tv_external_id;
}
```
