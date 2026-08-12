---
name: I_WORKCENTERPOOLEDCAPALLOCTP
description: "Work CenterPOOLEDCAPALLOCTP"
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
  - work-center
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_WORKCENTERPOOLEDCAPALLOCTP

**Work CenterPOOLEDCAPALLOCTP**

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
| `Plant` |  | |  |  |  |  |
| `WorkCenter` |  | |  |  |  |  |
| `WorkCenterCategoryCode` |  | |  |  |  |  |
| `CapacityCategoryCode` |  | |  |  |  |  |
| `Capacity` |  | |  |  |  |  |
| `SetupCapRequirementFormula` |  | |  |  |  |  |
| `ProcgCapRequirementFormula` |  | |  |  |  |  |
| `TeardownCapRequirementFormula` |  | |  |  |  |  |
| `OtherCapRequirementFormula` |  | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `WorkCenterLastChangeDateTime` |  | |  |  |  |  |
| `_Header` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Interface for the BO WrkCtr PooledCapacity Allocation - TP'
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.usageType: { serviceQuality: #C, sizeCategory: #M, dataClass: #MASTER }
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@Metadata.ignorePropagatedAnnotations: true
define view entity I_WorkCenterPooledCapAllocTP as projection on R_WorkCenterPooledCapAllocTP {
  key WorkCenterInternalID,
  key WorkCenterTypeCode,
  key CapacityCategoryAllocation,
  key CapacityInternalID,
      LastChangeDate,
      LastChangedByUser,
      Plant,
      WorkCenter,
      WorkCenterCategoryCode,
      CapacityCategoryCode,
      Capacity,
      SetupCapRequirementFormula,
      ProcgCapRequirementFormula,
      TeardownCapRequirementFormula,
      OtherCapRequirementFormula,
      ValidityStartDate,
      ValidityEndDate,
      WorkCenterLastChangeDateTime,
      /* Associations */
      _Header: redirected to parent I_WorkCenterTP
}
```
