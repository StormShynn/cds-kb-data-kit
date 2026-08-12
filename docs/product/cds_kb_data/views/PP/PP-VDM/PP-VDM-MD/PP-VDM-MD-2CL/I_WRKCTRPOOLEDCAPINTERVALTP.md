---
name: I_WRKCTRPOOLEDCAPINTERVALTP
description: "Wrkctrpooledcapintervaltp"
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - PP-VDM-MD
  - interface-view
  - transactional-processing
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_WRKCTRPOOLEDCAPINTERVALTP

**Wrkctrpooledcapintervaltp**

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
| `IntervalStartDate` |  | |  |  |  |  |
| `StdAvailableCapacityIsValid` |  | |  |  |  |  |
| `AvailableCapacityIntervalDurn` |  | |  |  |  |  |
| `ShiftSequence` |  | |  |  |  |  |
| `WorkDayRule` |  | |  |  |  |  |
| `CapacityNumberOfShifts` |  | |  |  |  |  |
| `CapacityNumberOfCapacities` |  | |  |  |  |  |
| `CapacityPlanUtilizationPercent` |  | |  |  |  |  |
| `CapacityLastChangeDateTime` |  | |  |  |  |  |
| `_Header` | | ✓ | | | | |
| `_Shift` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Interface for the BO WrkCtr Pooled Capacity Interval - TP'
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.usageType: { serviceQuality: #C, sizeCategory: #M, dataClass: #MASTER }
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@Metadata.ignorePropagatedAnnotations: true
define view entity I_WrkCtrPooledCapIntervalTP as projection on R_WrkCtrPooledCapIntervalTP {
  key CapacityInternalID,
  
  @EndUserText.label: 'CapacityActiveVersion'
  key CapacityActiveVersion,
  
  @EndUserText.label: 'IntervalEndDate'
  key IntervalEndDate,
      IntervalStartDate,
      StdAvailableCapacityIsValid,
      AvailableCapacityIntervalDurn,
      
      @EndUserText.label: 'ShiftSequence'      
      ShiftSequence,
            
      @EndUserText.label: 'WorkDayRule'
      WorkDayRule,
      
      @EndUserText.label: 'CapacityNumberOfShifts'
      CapacityNumberOfShifts,
      CapacityNumberOfCapacities,
      CapacityPlanUtilizationPercent,
      CapacityLastChangeDateTime,

      /* Associations */
      _Header : redirected to parent I_WorkCenterPooledCapacityTP,
      _Shift  : redirected to composition child I_WorkCenterPooledCapShiftTP
  
}
```
