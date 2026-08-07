---
name: I_WORKCENTERPOOLEDCAPACITYTP
description: "Work CenterPOOLEDCAPACITYTP"
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
# I_WORKCENTERPOOLEDCAPACITYTP

**Work CenterPOOLEDCAPACITYTP**

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
| `Plant` |  | |  |  |  |  |
| `Capacity` |  | |  |  |  |  |
| `CapacityCategoryCode` |  | |  |  |  |  |
| `CapacityActiveVersion` |  | |  |  |  |  |
| `CapacityIsFinite` |  | |  |  |  |  |
| `CapacityIsPooled` |  | |  |  |  |  |
| `CapacityHasIndivCapacities` |  | |  |  |  |  |
| `CapacityIsExcldFrmLongTermPlng` |  | |  |  |  |  |
| `CapacityNumberOfCapacities` |  | |  |  |  |  |
| `CapacityResponsiblePlanner` |  | |  |  |  |  |
| `CapacityPlanUtilizationPercent` |  | |  |  |  |  |
| `CapacityBreakDuration` |  | |  |  |  |  |
| `CapIsUsedInMultiOperations` |  | |  |  |  |  |
| `ReferencedCapacityInternalID` |  | |  |  |  |  |
| `CapOverloadThresholdInPercent` |  | |  |  |  |  |
| `FactoryCalendar` |  | |  |  |  |  |
| `AuthorizationGroup` |  | |  |  |  |  |
| `ShiftGroup` |  | |  |  |  |  |
| `CapacityStartTimeID` |  | |  |  |  |  |
| `CapacityEndTimeID` |  | |  |  |  |  |
| `CapacityQuantityUnit` |  | |  |  |  |  |
| `CapacityBaseQtyUnit` |  | |  |  |  |  |
| `CapacityLastChangeDateTime` |  | |  |  |  |  |
| `_Interval` | | ✓ | | | | |
| `_Description` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Interface for the BO WorkCenter Pooled Capacity - TP'
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.usageType: { serviceQuality: #B, sizeCategory: #M, dataClass: #MASTER }
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'PooledCapacity'
define root view entity I_WorkCenterPooledCapacityTP 
 provider contract transactional_interface
 as projection on R_WorkCenterPooledCapacityTP {
  key CapacityInternalID,
      Plant,
      Capacity,
      CapacityCategoryCode,
      CapacityActiveVersion,
      CapacityIsFinite,
      CapacityIsPooled,
      CapacityHasIndivCapacities,
      CapacityIsExcldFrmLongTermPlng,
      CapacityNumberOfCapacities,
      CapacityResponsiblePlanner,
      CapacityPlanUtilizationPercent,
      CapacityBreakDuration,
      CapIsUsedInMultiOperations,
      ReferencedCapacityInternalID,
      CapOverloadThresholdInPercent,
      FactoryCalendar,
      AuthorizationGroup,
      ShiftGroup,
      // Times
      @Semantics.durationInSeconds:true
      CapacityStartTimeID,
      @Semantics.durationInSeconds:true
      CapacityEndTimeID,
      CapacityQuantityUnit,
      CapacityBaseQtyUnit,
      CapacityLastChangeDateTime,
      /* Associations */
      _Interval    : redirected to composition child I_WrkCtrPooledCapIntervalTP,
      _Description : redirected to composition child I_WorkCtrPooledCapacityTextTP
  
}
```
