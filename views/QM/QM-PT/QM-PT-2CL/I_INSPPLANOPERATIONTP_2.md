---
name: I_INSPPLANOPERATIONTP_2
description: Inspplanoperationtp 2
app_component: QM-PT-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-PT
  - interface-view
  - transactional-processing
  - component:QM-PT-2CL
  - lob:Quality Management
---
# I_INSPPLANOPERATIONTP_2

**Inspplanoperationtp 2**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `InspectionPlanGroup` | ✓ | |  |  |
| `BOOOperationInternalID` | ✓ | |  |  |
| `InspectionPlan` | ✓ | |  |  |
| `ChangedDateTime` |  | |  |  |
| `IsDeleted` |  | |  |  |
| `_InspPlanVersion` | | ✓ | | |
| `_InspPlanOpVersion` | | ✓ | | |
| `_InspPlanOpCharcVers` | | ✓ | | |
| `_InspPlanDepdntCharcVers` | | ✓ | | |
| `_InspPlan` | | ✓ | | |

## Source Code

```abap
@EndUserText.label: 'Inspection Plan Operation - TP'
@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #L,
  dataClass: #MIXED
}
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@Metadata.ignorePropagatedAnnotations: true
 @VDM.viewType: #TRANSACTIONAL
define view entity I_InspPlanOperationTP_2 as projection on R_InspPlanOperationTP
{
  key InspectionPlanGroup,
  key BOOOperationInternalID, 
  key InspectionPlan, 

  ChangedDateTime, 
  IsDeleted,
  
  _InspPlanVersion : redirected to I_InspectionPlanVersionTP_2,
  @Semantics.valueRange.maximum: '1'
  _InspPlanOpVersion : redirected to composition child I_InspPlanOperationVersTP_2,
  _InspPlanOpCharcVers : redirected to composition child I_InspPlanOpCharcVersionTP_2,
  @Semantics.valueRange.maximum: '1'
  _InspPlanDepdntCharcVers : redirected to composition child I_InspPlanDepdntCharcVersTP_2,
  _InspPlan : redirected to parent I_InspectionPlanTP_2
  
}
```
