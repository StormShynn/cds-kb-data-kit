---
name: I_WORKCENTERPOOLEDCAPSHIFTTP
description: "Work CenterPOOLEDCAPSHIFTTP"
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
# I_WORKCENTERPOOLEDCAPSHIFTTP

**Work CenterPOOLEDCAPSHIFTTP**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CapacityInternalID` | ✓ | |  |  |  |  |
| `CapacityActiveVersion` | ✓ | |  |  |  |  |
| `IntervalEndDate` | ✓ | |  |  |  |  |
| `WeekDay` | ✓ | |  |  |  |  |
| `AvailableCapacityShift` | ✓ | |  |  |  |  |
| `IntervalStartDate` |  | |  |  |  |  |
| `WorkDayRule` |  | |  |  |  |  |
| `ShiftDefinition` |  | |  |  |  |  |
| `ShiftStartTime` |  | |  |  |  |  |
| `ShiftEndTime` |  | |  |  |  |  |
| `ShiftDefValidityStartDate` |  | |  |  |  |  |
| `ShiftDefValidityEndDate` |  | |  |  |  |  |
| `CapacityNumberOfCapacities` |  | |  |  |  |  |
| `CapacityPlanUtilizationPercent` |  | |  |  |  |  |
| `CapacityBreakDuration` |  | |  |  |  |  |
| `OperatingDurationInSeconds` |  | |  |  |  |  |
| `TotOperatingDurationInSeconds` |  | |  |  |  |  |
| `CapacityLastChangeDateTime` |  | |  |  |  |  |
| `_Interval` | | ✓ | | | | |
| `_Header` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Interface for the BO WorkCenter Pooled Capacity Shift - TP'
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.usageType: { serviceQuality: #C, sizeCategory: #M, dataClass: #MASTER }
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@Metadata.ignorePropagatedAnnotations: true
define view entity I_WorkCenterPooledCapShiftTP as projection on R_WorkCenterPooledCapShiftTP {
  key CapacityInternalID,
  
  @EndUserText.label: 'CapacityActiveVersion'
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

      /* Associations */
      _Interval : redirected to parent I_WrkCtrPooledCapIntervalTP,
      _Header   : redirected to I_WorkCenterPooledCapacityTP
}
```
