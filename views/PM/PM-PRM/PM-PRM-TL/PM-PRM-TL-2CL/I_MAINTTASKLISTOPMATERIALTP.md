---
name: I_MAINTTASKLISTOPMATERIALTP
description: "Maintenance Task ListOPMATERIALTP"
app_component: PM-PRM-TL-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-PRM
  - PM-PRM-TL
  - interface-view
  - transactional-processing
  - material
  - component:PM-PRM-TL-2CL
  - lob:Plant Maintenance
  - bo:Material
---
# I_MAINTTASKLISTOPMATERIALTP

**Maintenance Task ListOPMATERIALTP**

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
| `TaskListSequence` | ✓ | |  |  |  |  |
| `TaskListOperationInternalId` | ✓ | |  |  |  |  |
| `TaskListOpBOMItmInternalID` | ✓ | |  |  |  |  |
| `TaskListOpBOMItmIntVersCounter` | ✓ | |  |  |  |  |
| `MaintenanceTaskListOperation` |  | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `MaterialName` |  | |  |  |  |  |
| `BillOfMaterialItemQuantity` |  | |  |  |  |  |
| `BillOfMaterialItemCategory` |  | |  |  |  |  |
| `BillOfMaterialItemUnit` |  | |  |  |  |  |
| `ResvnIsMRPRlvtOrPurReqnIsCrted` |  | |  |  |  |  |
| `MatlCompIsMarkedForBackflush` |  | |  |  |  |  |
| `SafetyRelevantObject` |  | |  |  |  |  |
| `BillOfMaterialItemCategoryDesc` |  | |  |  |  |  |
| `MatlsPlngRelevancyCodeName` |  | |  |  |  |  |
| `SafetyRelevanceActionDesc` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `TaskListStatus` |  | |  |  |  |  |
| `ResponsiblePlannerGroup` |  | |  |  |  |  |
| `AuthorizationGroup` |  | |  |  |  |  |
| `MaintenancePlanningPlant` |  | |  |  |  |  |
| `MaintenancePlannerGroup` |  | |  |  |  |  |
| `ControllingArea` |  | |  |  |  |  |
| `CostCenter` |  | |  |  |  |  |
| `MaintenancePlant` |  | |  |  |  |  |
| `_Header` | | ✓ | | | | |
| `_NonHistOp` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Operation Materials - TP'
@AccessControl.authorizationCheck: #CHECK
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
   modelingPattern:        #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #L,
     dataClass:      #TRANSACTIONAL
   }
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define view entity I_MaintTaskListOpMaterialTP
  as projection on R_MaintTaskListOpMaterialTP
{
  key TaskListType,
  key TaskListGroup,
  key TaskListGroupCounter,
  key TaskListSequence,
  key TaskListOperationInternalId,
  key TaskListOpBOMItmInternalID,
  key TaskListOpBOMItmIntVersCounter,
      MaintenanceTaskListOperation,
      Material,
      MaterialName,
      @Semantics.quantity.unitOfMeasure: 'BillOfMaterialItemUnit'
      BillOfMaterialItemQuantity,
      BillOfMaterialItemCategory,
      BillOfMaterialItemUnit,
      @Semantics.booleanIndicator
      ResvnIsMRPRlvtOrPurReqnIsCrted,
      MatlCompIsMarkedForBackflush,
      SafetyRelevantObject,
      BillOfMaterialItemCategoryDesc,
      MatlsPlngRelevancyCodeName,
      SafetyRelevanceActionDesc,
      @Consumption.hidden: true
      Plant,
      @Consumption.hidden: true
      TaskListStatus,
      @Consumption.hidden: true
      ResponsiblePlannerGroup,
      @Consumption.hidden: true
      AuthorizationGroup,
      @Consumption.hidden: true
      MaintenancePlanningPlant,
      @Consumption.hidden: true
      MaintenancePlannerGroup,
      @Consumption.hidden: true
      ControllingArea,
      @Consumption.hidden: true
      CostCenter,
      @Consumption.hidden: true
      MaintenancePlant,

      _Header    : redirected to I_MaintenanceTaskListTP_2,
      _NonHistOp : redirected to parent I_MaintTaskListOperationTP_2
}
```
