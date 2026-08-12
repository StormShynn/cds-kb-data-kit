---
name: I_TASKLISTLONGTEXTTP
description: "Tasklistlongtexttp"
app_component: PM-PRM-TL-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-PRM
  - PM-PRM-TL
  - interface-view
  - transactional-processing
  - text
  - component:PM-PRM-TL-2CL
  - lob:Plant Maintenance
---
# I_TASKLISTLONGTEXTTP

**Tasklistlongtexttp**

| Property | Value |
|---|---|
| App Component | `PM-PRM-TL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TaskListType` | ✓ | |  |  |  |  |
| `TaskListGroup` | ✓ | |  |  |  |  |
| `TaskListGroupCounter` | ✓ | |  |  |  |  |
| `TaskListVersionCounter` | ✓ | |  |  |  |  |
| `TextObjectKey` |  | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `PlainLongText` |  | |  |  |  |  |
| `Language` |  | |  |  |  |  |
| `_Header` | | ✓ | | | | |
| `_MaintenanceTaskList` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Maintenance TaskList Long Text - TP'
@ObjectModel.dataCategory:#TEXT
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@ObjectModel: {
   modelingPattern:       #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #L,
     dataClass:      #TRANSACTIONAL
   }
 }
@Metadata.ignorePropagatedAnnotations: true
define view entity I_TaskListLongTextTP
  as projection on R_TaskListLongTextTP as TaskListLongText
{
  key   TaskListType,
  key   TaskListGroup,
  key   TaskListGroupCounter,
  key   TaskListVersionCounter,
        @Consumption.hidden: true
        TextObjectKey,
        ValidityStartDate,
        ValidityEndDate,
        @Semantics.text:true
        PlainLongText,
        @Semantics.language:true
        Language,
        /* Associations */
        _Header              : redirected to parent I_MaintenanceTaskListTP_2,
        _MaintenanceTaskList : redirected to I_MaintenanceTaskListBasicTP
}
```
