---
name: I_MAINTTASKLISTOPERATIONTP_2
description: "Maintenance Task ListOPERATIONTP 2"
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
# I_MAINTTASKLISTOPERATIONTP_2

**Maintenance Task ListOPERATIONTP 2**

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
| `_Header` | | ✓ | | | | |
| `_Operation` | | ✓ | | | | |
| `_OpMaterial` | | ✓ | | | | |
| `_OpRelation` | | ✓ | | | | |
| `_SubOp` | | ✓ | | | | |
| `_OpLongText` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Maintenance Tasklist Operation'
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
define view entity I_MaintTaskListOperationTP_2 
as projection on R_MaintTaskListOperationTP as _TLOperation
{

  key     TaskListType,
  key     TaskListGroup,
  key     TaskListGroupCounter,
  key     TaskListSequence,
  key     TaskListOperationInternalId,

          _Header     : redirected to parent I_MaintenanceTaskListTP_2,
          @Semantics.valueRange.maximum: '1'
          _Operation  : redirected to composition child I_MaintTaskListOpBasicTP,
          @Semantics.valueRange.maximum: '1'
          _OpMaterial : redirected to composition child I_MaintTaskListOpMaterialTP,
          @Semantics.valueRange.maximum: '1'
          _OpRelation : redirected to composition child I_MaintTaskListOpRelshpTP,
          _SubOp      : redirected to composition child I_MaintTaskListSubOpTP,
          @Semantics.valueRange.maximum: '1'
          _OpLongText : redirected to composition child I_MaintTaskListOpLongTextTP
}
```
