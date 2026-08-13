---
name: D_MAINTPLANRESTARTSCHEDULEP
description: "D Maintplanrestartschedulep"
semantic_vi: "View này hiển thị lịch trình khởi động lại kế hoạch bảo trì, được sử dụng để lập kế hoạch và quản lý hoạt động bảo trì. Nó được sử dụng để truy xuất và phân tích lịch trình khởi động lại cho kế hoạch bảo trì."
keywords:
  - "maintenance plan"
  - "lịch trình bảo trì"
  - "restart schedule"
  - "schedule line"
  - "plant maintenance"
  - "bảo trì nhà máy"
  - "kế hoạch bảo trì"
  - "lịch trình khởi động lại"
semantic_en: "This view exposes planned maintenance restart schedules, which are used to plan and manage maintenance activities. It is used to retrieve and analyze restart schedules for maintenance plans."
app_component: PM-PRM-MP-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-PRM
  - PM-PRM-MP
  - schedule-line
  - component:PM-PRM-MP-2CL
  - lob:Plant Maintenance
---
# D_MAINTPLANRESTARTSCHEDULEP

**D Maintplanrestartschedulep**

| Property | Value |
|---|---|
| App Component | `PM-PRM-MP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SchedulingStartDate` |  | |  | `stadt` |  |  |
| `SchedulingStartTime` |  | |  | `time_start` |  |  |
| `MaintPlanStartCntrReadingValue` |  | |  | `szaehc` |  |  |
| `MaintPlanSchedFutrCallsAreKept` |  | |  | `boolean` |  |  |

## Source Code

```abap
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@EndUserText.label: 'Restart Maint Plan Schedule Parameter'
@ObjectModel.supportedCapabilities:[ #CDS_MODELING_DATA_SOURCE ]
define abstract entity D_MaintPlanRestartScheduleP
{
  SchedulingStartDate            : stadt ;
  SchedulingStartTime            : time_start ;
  MaintPlanStartCntrReadingValue : szaehc ;
  MaintPlanSchedFutrCallsAreKept : boolean ;     
}
```
