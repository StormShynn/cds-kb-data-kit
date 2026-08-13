---
name: D_MAINTORDMAINWORKCOMPLETEP
description: "D Maintordmainworkcompletep"
semantic_vi: "View này hiển thị dữ liệu hoàn thành công việc bảo trì nhà máy, bao gồm ngày và giờ hoàn thành và xem xét liệu một ngày cụ thể có được sử dụng hay không."
keywords:
  - "plant maintenance"
  - "work completion"
  - "main work completed date time"
  - "pm-woc"
  - "pm-woc-mo"
  - "pm"
  - "bảo trì nhà máy"
  - "hoàn thành công việc"
  - "ngày hoàn thành"
  - "sap pm"
semantic_en: "This view exposes plant maintenance work completion data, including the date and time of completion and whether a specific date is used."
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-WOC
  - PM-WOC-MO
  - component:PM-WOC-MO-2CL
  - lob:Plant Maintenance
---
# D_MAINTORDMAINWORKCOMPLETEP

**D Maintordmainworkcompletep**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MainWorkCompletedDateTime` |  | |  | `timestamp` |  |  |
| `MainWrkCmpltdDateTimeIsUsed` |  | |  | `abap_boolean` |  |  |

## Source Code

```abap
@EndUserText.label: 'MaintOrder MainWorkCompleted Parameters'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]

define abstract entity D_MaintOrdMainWorkCompleteP
{
  @EndUserText.label          : 'Main Work Completion Date and Time'
  MainWorkCompletedDateTime   : timestamp;
  @EndUserText.label          : 'Set as Reference Date and Time'
  MainWrkCmpltdDateTimeIsUsed : abap_boolean;
}
```
