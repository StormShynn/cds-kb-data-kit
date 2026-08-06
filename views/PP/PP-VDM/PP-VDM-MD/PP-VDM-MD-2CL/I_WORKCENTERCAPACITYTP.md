---
name: I_WORKCENTERCAPACITYTP
description: Work CenterCAPACITYTP
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

| Field | Data Source |
|---|---|
| key `WorkCenterInternalID` | `WorkCenterInternalID` |
| key `WorkCenterTypeCode` | `WorkCenterTypeCode` |
| key `CapacityCategoryAllocation` | `CapacityCategoryAllocation` |
| key `CapacityInternalID` | `CapacityInternalID` |
| `LastChangeDate` | `LastChangeDate` |
| `LastChangedByUser` | `LastChangedByUser` |
| `WorkCenter` | `WorkCenter` |
| `WorkCenterCategoryCode` | `WorkCenterCategoryCode` |
| `SetupCapRequirementFormula` | `SetupCapRequirementFormula` |
| `ProcgCapRequirementFormula` | `ProcgCapRequirementFormula` |
| `TeardownCapRequirementFormula` | `TeardownCapRequirementFormula` |
| `OtherCapRequirementFormula` | `OtherCapRequirementFormula` |
| `ValidityStartDate` | `ValidityStartDate` |
| `ValidityEndDate` | `ValidityEndDate` |
| `WorkCenterLastChangeDateTime` | `WorkCenterLastChangeDateTime` |
| `Capacity` | `Capacity` |
| `CapacityCategoryCode` | `CapacityCategoryCode` |
| `CapacityActiveVersion` | `CapacityActiveVersion` |
| `CapacityIsFinite` | `CapacityIsFinite` |
| `CapacityIsPooled` | `CapacityIsPooled` |
| `CapacityHasIndivCapacities` | `CapacityHasIndivCapacities` |
| `CapacityIsExcldFrmLongTermPlng` | `CapacityIsExcldFrmLongTermPlng` |
| `CapacityNumberOfCapacities` | `CapacityNumberOfCapacities` |
| `CapacityResponsiblePlanner` | `CapacityResponsiblePlanner` |
| `CapacityPlanUtilizationPercent` | `CapacityPlanUtilizationPercent` |
| `CapacityBreakDuration` | `CapacityBreakDuration` |
| `Plant` | `Plant` |
| `FactoryCalendar` | `FactoryCalendar` |
| `AuthorizationGroup` | `AuthorizationGroup` |
| `ShiftGroup` | `ShiftGroup` |
| `CapacityStartTimeID` | `CapacityStartTimeID` |
| `CapacityEndTimeID` | `CapacityEndTimeID` |
| `CapIsUsedInMultiOperations` | `CapIsUsedInMultiOperations` |
| `ReferencedCapacityInternalID` | `ReferencedCapacityInternalID` |
| `CapOverloadThresholdInPercent` | `CapOverloadThresholdInPercent` |
| `CapacityQuantityUnit` | `CapacityQuantityUnit` |
| `CapacityBaseQtyUnit` | `CapacityBaseQtyUnit` |
| `CapacityLastChangeDateTime` | `CapacityLastChangeDateTime` |
| `_Header` | *Association* |
| `_CapDescription` | *Association* |
| `_Interval` | *Association* |

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
