---
name: I_WORKCENTERTP
description: "Work CenterTP"
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
# I_WORKCENTERTP

**Work CenterTP**

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
| `WorkCenter` |  | |  |  |  |  |
| `WorkCenterDesc` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `WorkCenterCategoryCode` |  | |  |  |  |  |
| `WorkCenterResponsible` |  | |  |  |  |  |
| `WorkCenterResponsibleName` |  | |  |  |  |  |
| `SupplyArea` |  | |  |  |  |  |
| `WorkCenterUsage` |  | |  |  |  |  |
| `CapacityInternalID` |  | |  |  |  |  |
| `CapacityCategoryCode` |  | |  |  |  |  |
| `Capacity` |  | |  |  |  |  |
| `WorkCenterIsToBeDeleted` |  | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `WorkCenterFormulaParam1` |  | |  |  |  |  |
| `WorkCenterFormulaParam2` |  | |  |  |  |  |
| `WorkCenterFormulaParam3` |  | |  |  |  |  |
| `WorkCenterFormulaParam4` |  | |  |  |  |  |
| `WorkCenterFormulaParam5` |  | |  |  |  |  |
| `WorkCenterFormulaParam6` |  | |  |  |  |  |
| `WorkCenterFmlaParamValue1` |  | |  |  |  |  |
| `WorkCenterFmlaParamValue2` |  | |  |  |  |  |
| `WorkCenterFmlaParamValue3` |  | |  |  |  |  |
| `WorkCenterFmlaParamValue4` |  | |  |  |  |  |
| `WorkCenterFmlaParamValue5` |  | |  |  |  |  |
| `WorkCenterFmlaParamValue6` |  | |  |  |  |  |
| `WorkCenterFmlaParamUnit1` |  | |  |  |  |  |
| `WorkCenterFmlaParamUnit2` |  | |  |  |  |  |
| `WorkCenterFmlaParamUnit3` |  | |  |  |  |  |
| `WorkCenterFmlaParamUnit4` |  | |  |  |  |  |
| `WorkCenterFmlaParamUnit5` |  | |  |  |  |  |
| `WorkCenterFmlaParamUnit6` |  | |  |  |  |  |
| `StandardWorkFormulaParamGroup` |  | |  |  |  |  |
| `WrkCtrStdValMaintRule1` |  | |  |  |  |  |
| `WrkCtrStdValMaintRule2` |  | |  |  |  |  |
| `WrkCtrStdValMaintRule3` |  | |  |  |  |  |
| `WrkCtrStdValMaintRule4` |  | |  |  |  |  |
| `WrkCtrStdValMaintRule5` |  | |  |  |  |  |
| `WrkCtrStdValMaintRule6` |  | |  |  |  |  |
| `WorkCenterStandardWorkQtyUnit1` |  | |  |  |  |  |
| `WorkCenterStandardWorkQtyUnit2` |  | |  |  |  |  |
| `WorkCenterStandardWorkQtyUnit3` |  | |  |  |  |  |
| `WorkCenterStandardWorkQtyUnit4` |  | |  |  |  |  |
| `WorkCenterStandardWorkQtyUnit5` |  | |  |  |  |  |
| `WorkCenterStandardWorkQtyUnit6` |  | |  |  |  |  |
| `OperationControlProfile` |  | |  |  |  |  |
| `MatlCompIsMarkedForBackflush` |  | |  |  |  |  |
| `WorkCenterLocation` |  | |  |  |  |  |
| `WorkCenterLocationGroup` |  | |  |  |  |  |
| `WrkCtrSetupSchedgFmla` |  | |  |  |  |  |
| `WrkCtrProcgSchedgFmla` |  | |  |  |  |  |
| `WrkCtrTeardownSchedgFmla` |  | |  |  |  |  |
| `WrkCtrIntProcgSchedgFmla` |  | |  |  |  |  |
| `WorkCenterLastChangeDateTime` |  | |  |  |  |  |
| `ShiftNoteType` |  | |  |  |  |  |
| `ShiftReportType` |  | |  |  |  |  |
| `_Description` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_Capacity` | | ✓ | | | | |
| `_PooledCap` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Interface for the BO WorkCenter - TP'
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.usageType: { serviceQuality: #B, sizeCategory: #M, dataClass: #MASTER }
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'WorkCenter'
define root view entity I_WorkCenterTP 
 provider contract transactional_interface
 as projection on R_WorkCenterTP {
  key WorkCenterInternalID,
  key WorkCenterTypeCode,
      WorkCenter,
      WorkCenterDesc,
      Plant,
      WorkCenterCategoryCode,
      WorkCenterResponsible,
      WorkCenterResponsibleName,
      SupplyArea,
      WorkCenterUsage,
      CapacityInternalID,
      CapacityCategoryCode,
      Capacity,

      WorkCenterIsToBeDeleted,

      ValidityStartDate,
      ValidityEndDate,

      WorkCenterFormulaParam1,
      WorkCenterFormulaParam2,
      WorkCenterFormulaParam3,
      WorkCenterFormulaParam4,
      WorkCenterFormulaParam5,
      WorkCenterFormulaParam6,

@Semantics.quantity.unitOfMeasure : 'WorkCenterFmlaParamUnit1'
      WorkCenterFmlaParamValue1,
@Semantics.quantity.unitOfMeasure : 'WorkCenterFmlaParamUnit2'
      WorkCenterFmlaParamValue2,
@Semantics.quantity.unitOfMeasure : 'WorkCenterFmlaParamUnit3'
      WorkCenterFmlaParamValue3,
@Semantics.quantity.unitOfMeasure : 'WorkCenterFmlaParamUnit4'
      WorkCenterFmlaParamValue4,
@Semantics.quantity.unitOfMeasure : 'WorkCenterFmlaParamUnit5'
      WorkCenterFmlaParamValue5,
@Semantics.quantity.unitOfMeasure : 'WorkCenterFmlaParamUnit6'
      WorkCenterFmlaParamValue6,

      WorkCenterFmlaParamUnit1,
      WorkCenterFmlaParamUnit2,
      WorkCenterFmlaParamUnit3,
      WorkCenterFmlaParamUnit4,
      WorkCenterFmlaParamUnit5,
      WorkCenterFmlaParamUnit6,

      StandardWorkFormulaParamGroup,
      WrkCtrStdValMaintRule1,
      WrkCtrStdValMaintRule2,
      WrkCtrStdValMaintRule3,
      WrkCtrStdValMaintRule4,
      WrkCtrStdValMaintRule5,
      WrkCtrStdValMaintRule6,


      WorkCenterStandardWorkQtyUnit1,
      WorkCenterStandardWorkQtyUnit2,
      WorkCenterStandardWorkQtyUnit3,
      WorkCenterStandardWorkQtyUnit4,
      WorkCenterStandardWorkQtyUnit5,
      WorkCenterStandardWorkQtyUnit6,
      OperationControlProfile,
      MatlCompIsMarkedForBackflush,
      WorkCenterLocation,
      WorkCenterLocationGroup,

      WrkCtrSetupSchedgFmla,
      WrkCtrProcgSchedgFmla,
      WrkCtrTeardownSchedgFmla,
      WrkCtrIntProcgSchedgFmla,

      WorkCenterLastChangeDateTime,
      ShiftNoteType,
      ShiftReportType,
      /* Associations */
      _Description: redirected to composition child I_WorkCenterTextTP,
      _CostCenter: redirected to composition child I_WorkCenterCostCenterTP,
      _Capacity: redirected to composition child I_WorkCenterCapacityTP,
      _PooledCap: redirected to composition child I_WorkCenterPooledCapAllocTP
}
```
