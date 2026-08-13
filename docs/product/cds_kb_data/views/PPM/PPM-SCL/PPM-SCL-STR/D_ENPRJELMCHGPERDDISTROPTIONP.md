---
name: D_ENPRJELMCHGPERDDISTROPTIONP
description: "D Enprjelmchgperddistroptionp"
semantic_vi: "View này hiển thị các tùy chọn phân phối phần tử dự án cho các thay đổi dự án, có thể được sử dụng để lập kế hoạch và quản lý các thay đổi dự án và các phần tử liên quan."
keywords:
  - "project change"
  - "phân phối phần tử dự án"
  - "thay đổi dự án"
  - "project element"
  - "dự án"
  - "phần tử dự án"
  - "planning"
  - "quản lý"
  - "ppm"
  - "ppm-scl-str"
semantic_en: "This view exposes project element distribution options for project changes, which can be used to plan and manage project changes and their associated elements."
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
# D_ENPRJELMCHGPERDDISTROPTIONP

**D Enprjelmchgperddistroptionp**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PlannedStartDate` |  | |  | `/s4ppm/tv_ltst_start_date` |  |  |
| `PlannedEndDate` |  | |  | `/s4ppm/tv_ltst_end_date` |  |  |
| `EntProjElmntDistributionOption` |  | |  | `/s4ppm/tv_distributiontype` |  |  |

## Source Code

```abap
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [ #DATA_STRUCTURE ]
@EndUserText.label: 'Parameter Structure for action ChgPeriodDistributionOption'
define abstract entity D_EnPrjElmChgPerdDistrOptionP
{
  PlannedStartDate   : /s4ppm/tv_ltst_start_date;
  PlannedEndDate : /s4ppm/tv_ltst_end_date;
  EntProjElmntDistributionOption : /s4ppm/tv_distributiontype;
}
```
