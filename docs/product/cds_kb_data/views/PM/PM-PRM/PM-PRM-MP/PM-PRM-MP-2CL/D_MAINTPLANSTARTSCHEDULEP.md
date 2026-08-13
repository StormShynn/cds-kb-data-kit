---
name: D_MAINTPLANSTARTSCHEDULEP
description: "D Maintplanstartschedulep"
semantic_vi: "View này hiển thị lịch trình bắt đầu bảo trì kế hoạch cho một nhà máy, bao gồm ngày và giờ bắt đầu, và giá trị đọc lại kế hoạch bảo trì bắt đầu."
keywords:
  - "maintenance plan"
  - "plant maintenance"
  - "schedule"
  - "planned start"
  - "bảo trì kế hoạch"
  - "nhà máy"
  - "lịch trình"
  - "thời gian bắt đầu"
semantic_en: "This view exposes planned maintenance start schedules for a plant, including the start date and time, and the maintenance plan start counter reading value. It is used to retrieve the planned start schedule for a maintenance plan."
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
# D_MAINTPLANSTARTSCHEDULEP

**D Maintplanstartschedulep**

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
| `MaintPlnSchedgCallObjUpToDte` |  | |  | `syst_datum` |  |  |

## Source Code

```abap
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@EndUserText.label: 'Start Maint Plan Schedule Parameter'
@ObjectModel.supportedCapabilities:[ #CDS_MODELING_DATA_SOURCE ]
define abstract entity D_MaintPlanStartScheduleP
{
  SchedulingStartDate            : stadt ;
  SchedulingStartTime            : time_start ;
  MaintPlanStartCntrReadingValue : szaehc ;
  MaintPlnSchedgCallObjUpToDte   : syst_datum;
}
```
