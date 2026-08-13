---
name: D_ENTERPRISEPROJECTDELETED
description: "D Enterpriseprojectdeleted"
semantic_vi: "View D_ENTERPRISEPROJECTDELETED hiển thị dữ liệu xóa dự án doanh nghiệp, có thể sử dụng khi theo dõi sự kiện vòng đời dự án hoặc phân tích lý do kết thúc dự án."
keywords:
  - "enterprise project"
  - "project deletion"
  - "dự án doanh nghiệp"
  - "xóa dự án"
  - "project lifecycle"
  - "vòng đời dự án"
  - "project termination"
  - "kết thúc dự án"
  - "ppm"
  - "ppm-scl-str"
semantic_en: "The D_ENTERPRISEPROJECTDELETED CDS view exposes enterprise project deletion data, which is useful when tracking project lifecycle events or analyzing project termination reasons."
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
# D_ENTERPRISEPROJECTDELETED

**D Enterpriseprojectdeleted**

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
@EndUserText.label: 'Enterprise Project Deleted'
@Event:{
    sapObjectNodeType: 'EnterpriseProject',
    implementedBy: ['ABAP:RAP_EVENT']
} 
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]

define abstract entity D_EnterpriseProjectDeleted 
{  
  Project : /s4ppm/tv_external_id;    
}
```
