---
name: I_INSPECTIONPLANTP_2
description: Inspectionplantp 2
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
  - plant
  - inspection
  - component:QM-PT-2CL
  - lob:Quality Management
  - bo:Plant
---
# I_INSPECTIONPLANTP_2

**Inspectionplantp 2**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InspectionPlanGroup` | ✓ | |  |  |  |  |
| `InspectionPlan` | ✓ | |  |  |  |  |
| `HasChangeNumber` |  | |  |  |  |  |
| `IsMarkedForDeletion` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `LastChangeTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `ChangedDateTime` |  | |  |  |  |  |
| `_InspPlanVersion` | | ✓ | | | | |
| `_MatlAssgmtVersion` | | ✓ | | | | |
| `_InspPlanOperation` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Inspection Plan Header - TP'
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType: { name: 'InspectionPlan' }
@ObjectModel.usageType: {
 serviceQuality: #B, 
 sizeCategory: #M, 
 dataClass: #MASTER }
 @VDM.viewType: #TRANSACTIONAL
// @VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
define root view entity I_InspectionPlanTP_2 
provider contract transactional_interface as projection on R_InspectionPlanTP
{
  key InspectionPlanGroup,
  key InspectionPlan,
  
  HasChangeNumber,
  //HasParameterEffectivity,
  
  //LastUsageDate,  
  //NumberOfUsages,  
  
  //BillOfOperationsVersionType,
  //BillOfOperationsSubtype,

  IsMarkedForDeletion,
        
  LastChangeDate,
  LastChangeTime,
  LastChangedByUser,
  
  ChangedDateTime,  
  
  //_association_name // Make association public
  @Semantics.valueRange.maximum: '1'
  _InspPlanVersion : redirected to composition child I_InspectionPlanVersionTP_2,
  @Semantics.valueRange.maximum: '1'
  _MatlAssgmtVersion : redirected to composition child I_InspPlanMatlAssgmtVersTP_2,
  _InspPlanOperation : redirected to composition child I_InspPlanOperationTP_2
}
```
