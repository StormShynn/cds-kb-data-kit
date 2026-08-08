---
name: I_WORKCENTERCAPACITYTP
description: "Work CenterCAPACITYTP"
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
# I_WORKCENTERCAPACITYTP

**Work CenterCAPACITYTP**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkCenterInternalID` | ✓ | |  |  |  |  |
| `WorkCenterTypeCode` | ✓ | |  |  |  |  |
| `CapacityCategoryAllocation` | ✓ | |  |  |  |  |
| `CapacityInternalID` | ✓ | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `WorkCenter` |  | |  |  |  |  |
| `WorkCenterCategoryCode` |  | |  |  |  |  |
| `SetupCapRequirementFormula` |  | |  |  |  |  |
| `ProcgCapRequirementFormula` |  | |  |  |  |  |
| `TeardownCapRequirementFormula` |  | |  |  |  |  |
| `OtherCapRequirementFormula` |  | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `WorkCenterLastChangeDateTime` |  | |  |  |  |  |
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
| `Plant` |  | |  |  |  |  |
| `FactoryCalendar` |  | |  |  |  |  |
| `AuthorizationGroup` |  | |  |  |  |  |
| `ShiftGroup` |  | |  |  |  |  |
| `CapacityStartTimeID` |  | |  |  |  |  |
| `CapacityEndTimeID` |  | |  |  |  |  |
| `CapIsUsedInMultiOperations` |  | |  |  |  |  |
| `ReferencedCapacityInternalID` |  | |  |  |  |  |
| `CapOverloadThresholdInPercent` |  | |  |  |  |  |
| `CapacityQuantityUnit` |  | |  |  |  |  |
| `CapacityBaseQtyUnit` |  | |  |  |  |  |
| `CapacityLastChangeDateTime` |  | |  |  |  |  |
| `_Header` | | ✓ | | | | |
| `_CapDescription` | | ✓ | | | | |
| `_Interval` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Interface for the BO WorkCenter Capacity - TP'
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.usageType: { serviceQuality: #C, sizeCategory: #M, dataClass: #MASTER }
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@Metadata.ignorePropagatedAnnotations: true

define view entity I_WorkCenterCapacityTP as projection on R_WorkCenterCapacityTP {
  key WorkCenterInternalID,
  key WorkCenterTypeCode,
  key CapacityCategoryAllocation,
  key CapacityInternalID,

      // Capacity Alloc Attributes
      LastChangeDate,
      LastChangedByUser,
      WorkCenter,
      WorkCenterCategoryCode,
      SetupCapRequirementFormula,
      ProcgCapRequirementFormula,
      TeardownCapRequirementFormula,
      OtherCapRequirementFormula,
      ValidityStartDate,
      ValidityEndDate,
      WorkCenterLastChangeDateTime,

      // Capacity Attributes
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

      // Assignments
      Plant,
      FactoryCalendar,
      AuthorizationGroup,
      ShiftGroup,

      CapacityStartTimeID,

      CapacityEndTimeID,

      CapIsUsedInMultiOperations,
      ReferencedCapacityInternalID,
      CapOverloadThresholdInPercent,


      CapacityQuantityUnit,

      CapacityBaseQtyUnit,

      CapacityLastChangeDateTime,
      /* Associations */
      _Header:redirected to parent I_WorkCenterTP ,
      _CapDescription:redirected to composition child I_WorkCenterCapacityTextTP,
      _Interval: redirected to composition child I_WorkCenterCapacityIntervalTP
}
```
