---
name: I_WORKCENTERCAPACITYSHIFTTP
description: Work CenterCAPACITYSHIFTTP
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - PP-VDM-MD
  - interface-view
  - transactional-processing
  - work-center
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_WORKCENTERCAPACITYSHIFTTP

**Work CenterCAPACITYSHIFTTP**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `WorkCenterInternalID` | ✓ | |  |  |
| `WorkCenterTypeCode` | ✓ | |  |  |
| `CapacityCategoryAllocation` | ✓ | |  |  |
| `CapacityInternalID` | ✓ | |  |  |
| `CapacityActiveVersion` | ✓ | |  |  |
| `IntervalEndDate` | ✓ | |  |  |
| `WeekDay` | ✓ | |  |  |
| `AvailableCapacityShift` | ✓ | |  |  |
| `IntervalStartDate` |  | |  |  |
| `WorkDayRule` |  | |  |  |
| `ShiftDefinition` |  | |  |  |
| `ShiftStartTime` |  | |  |  |
| `ShiftEndTime` |  | |  |  |
| `ShiftDefValidityStartDate` |  | |  |  |
| `ShiftDefValidityEndDate` |  | |  |  |
| `CapacityNumberOfCapacities` |  | |  |  |
| `CapacityPlanUtilizationPercent` |  | |  |  |
| `CapacityBreakDuration` |  | |  |  |
| `OperatingDurationInSeconds` |  | |  |  |
| `TotOperatingDurationInSeconds` |  | |  |  |
| `CapacityLastChangeDateTime` |  | |  |  |
| `_Header` | | ✓ | | |
| `_Interval` | | ✓ | | |

## Source Code

```abap
@EndUserText.label: 'Interface for the BO WorkCenter Capacity Shift - TP'
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.usageType: { serviceQuality: #C, sizeCategory: #M, dataClass: #MASTER }
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@Metadata.ignorePropagatedAnnotations: true
define view entity I_WorkCenterCapacityShiftTP as projection on R_WorkCenterCapacityShiftTP {
  key WorkCenterInternalID,
  key WorkCenterTypeCode,
  key CapacityCategoryAllocation,
  key CapacityInternalID,
  key CapacityActiveVersion,
  key IntervalEndDate,
  key WeekDay,
  key AvailableCapacityShift,
      IntervalStartDate,
      WorkDayRule,
      ShiftDefinition,
      ShiftStartTime,
      ShiftEndTime,
      ShiftDefValidityStartDate,
      ShiftDefValidityEndDate,
      CapacityNumberOfCapacities,
      CapacityPlanUtilizationPercent,
      CapacityBreakDuration,
      OperatingDurationInSeconds,
      TotOperatingDurationInSeconds,
      CapacityLastChangeDateTime,
      _Header : redirected to I_WorkCenterTP,
      _Interval: redirected to parent I_WorkCenterCapacityIntervalTP
      
}
```
