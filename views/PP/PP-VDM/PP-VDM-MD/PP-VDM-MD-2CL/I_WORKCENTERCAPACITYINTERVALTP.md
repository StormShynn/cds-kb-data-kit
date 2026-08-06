---
name: I_WORKCENTERCAPACITYINTERVALTP
description: Work CenterCAPACITYINTERVALTP
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
# I_WORKCENTERCAPACITYINTERVALTP

**Work CenterCAPACITYINTERVALTP**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `WorkCenterInternalID` | `WorkCenterInternalID` |
| key `WorkCenterTypeCode` | `WorkCenterTypeCode` |
| key `CapacityCategoryAllocation` | `CapacityCategoryAllocation` |
| key `CapacityInternalID` | `CapacityInternalID` |
| key `CapacityActiveVersion` | `CapacityActiveVersion` |
| key `IntervalEndDate` | `IntervalEndDate` |
| `IntervalStartDate` | `IntervalStartDate` |
| `StdAvailableCapacityIsValid` | `StdAvailableCapacityIsValid` |
| `AvailableCapacityIntervalDurn` | `AvailableCapacityIntervalDurn` |
| `ShiftSequence` | `ShiftSequence` |
| `WorkDayRule` | `WorkDayRule` |
| `CapacityNumberOfShifts` | `CapacityNumberOfShifts` |
| `CapacityNumberOfCapacities` | `CapacityNumberOfCapacities` |
| `CapacityPlanUtilizationPercent` | `CapacityPlanUtilizationPercent` |
| `CapacityLastChangeDateTime` | `CapacityLastChangeDateTime` |
| `_CapHeader` | *Association* |
| `_Shift` | *Association* |
| `_Header` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Interface for the BO WorkCenter Capacity Interval - TP'
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.usageType: { serviceQuality: #C, sizeCategory: #M, dataClass: #MASTER }
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@Metadata.ignorePropagatedAnnotations: true
define view entity I_WorkCenterCapacityIntervalTP as projection on R_WorkCenterCapacityIntervalTP {
  key WorkCenterInternalID,
  key WorkCenterTypeCode,
  key CapacityCategoryAllocation,
  key CapacityInternalID,
  key CapacityActiveVersion,
  key IntervalEndDate,
      IntervalStartDate,
      StdAvailableCapacityIsValid,
      AvailableCapacityIntervalDurn,
      ShiftSequence,
      WorkDayRule,
      CapacityNumberOfShifts,
      CapacityNumberOfCapacities,
      CapacityPlanUtilizationPercent,
      CapacityLastChangeDateTime,
      _CapHeader: redirected to parent I_WorkCenterCapacityTP,
      _Shift: redirected to composition child I_WorkCenterCapacityShiftTP,
      _Header : redirected to I_WorkCenterTP
}
```
