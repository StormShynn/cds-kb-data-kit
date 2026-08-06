---
name: D_MAINTPLANRESTARTSCHEDULEP
description: D Maintplanrestartschedulep
app_component: PM-PRM-MP-2CL
software_component: SAPSCORE
release_state: released
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

| Field | Data Source |
|---|---|
| `SchedulingStartDate` | `stadt` |
| `SchedulingStartTime` | `time_start` |
| `MaintPlanStartCntrReadingValue` | `szaehc` |
| `MaintPlanSchedFutrCallsAreKept` | `boolean` |

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
