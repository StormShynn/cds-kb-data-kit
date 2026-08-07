---
name: I_MAINTTASKLISTOPRELSHPTP
description: Maintenance Task ListOPRELSHPTP
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
  - component:PM-PRM-TL-2CL
  - lob:Plant Maintenance
---
# I_MAINTTASKLISTOPRELSHPTP

**Maintenance Task ListOPRELSHPTP**

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
| `TaskListOpBOMItmIntVersCounter` | ✓ | |  |  |  |  |
| `SuccssrBOOGroup` |  | |  |  |  |  |
| `SuccssrBOOOpInternalID` |  | |  |  |  |  |
| `MaintenanceTaskListOperation` |  | |  |  |  |  |
| `SuperiorOperation` |  | |  |  |  |  |
| `OperationText` |  | |  |  |  |  |
| `MasterRecipeRelationshipType` |  | |  |  |  |  |
| `OperationIsSuccessor` |  | |  |  |  |  |
| `FactoryCalendar` |  | |  |  |  |  |
| `WorkCenter` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `MaxTimeIntvlIsUsedForSchedg` |  | |  |  |  |  |
| `TimeIntvlBtwnRelshp` |  | |  |  |  |  |
| `TimeIntvlBtwnRelshpUnit` |  | |  |  |  |  |
| `WorkCenterInternalID` |  | |  |  |  |  |
| `_Header` | | ✓ | | | | |
| `_Operation` | | ✓ | | | | |
| `_NonHistOp` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Operation Relationships - TP'
@AccessControl.authorizationCheck: #CHECK
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
   modelingPattern:        #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #XL,
     dataClass:      #TRANSACTIONAL
   }
 }
 
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define view entity I_MaintTaskListOpRelshpTP 
  as projection on R_MaintTaskListOpRelshpTP
{
  key        TaskListType,
  key        TaskListGroup,
  key        TaskListGroupCounter,
  key        TaskListSequence,
  key        TaskListOperationInternalId,
  key        TaskListOpBOMItmIntVersCounter,
             @Consumption.hidden: true
             SuccssrBOOGroup,
             @Consumption.hidden: true
             SuccssrBOOOpInternalID,
             MaintenanceTaskListOperation,
             SuperiorOperation,
             OperationText,
             MasterRecipeRelationshipType,
             OperationIsSuccessor,
             FactoryCalendar,
             WorkCenter,
             Plant,
             MaxTimeIntvlIsUsedForSchedg,
//             BOORelationshipType,
             @Semantics.quantity.unitOfMeasure: 'TimeIntvlBtwnRelshpUnit'
             TimeIntvlBtwnRelshp,
             TimeIntvlBtwnRelshpUnit,
             WorkCenterInternalID,
             _Header    : redirected to I_MaintenanceTaskListTP_2,
             _Operation : redirected to I_MaintTaskListOpBasicTP,
             _NonHistOp : redirected to parent I_MaintTaskListOperationTP_2

}
```
