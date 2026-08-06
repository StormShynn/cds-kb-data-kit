---
name: I_INSPPLANOPERATIONVERSTP_2
description: Inspplanoperationverstp 2
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
# I_INSPPLANOPERATIONVERSTP_2

**Inspplanoperationverstp 2**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `InspectionPlanGroup` | `InspectionPlanGroup` |
| key `BOOOperationInternalID` | `BOOOperationInternalID` |
| key `BOOOpInternalVersionCounter` | `BOOOpInternalVersionCounter` |
| key `InspectionPlan` | `InspectionPlan` |
| `ValidityStartDate` | `ValidityStartDate` |
| `ValidityEndDate` | `ValidityEndDate` |
| `WorkCenterInternalID` | `WorkCenterInternalID` |
| `WorkCenterTypeCode` | `WorkCenterTypeCode` |
| `IsDeleted` | `IsDeleted` |
| `IsImplicitlyDeleted` | `IsImplicitlyDeleted` |
| `OperationExternalID` | `OperationExternalID` |
| `Operation` | `Operation` |
| `OperationText` | `OperationText` |
| `Plant` | `Plant` |
| `OperationControlProfile` | `OperationControlProfile` |
| `OperationStandardTextCode` | `OperationStandardTextCode` |
| `BillOfOperationsRefType` | `BillOfOperationsRefType` |
| `BillOfOperationsRefGroup` | `BillOfOperationsRefGroup` |
| `BillOfOperationsRefVariant` | `BillOfOperationsRefVariant` |
| `InspSbstCompletionConfirmation` | `InspSbstCompletionConfirmation` |
| `InspSbstHasNoTimeOrQuantity` | `InspSbstHasNoTimeOrQuantity` |
| `OperationReferenceQuantity` | `OperationReferenceQuantity` |
| `OperationUnit` | `OperationUnit` |
| `OpQtyToBaseQtyDnmntr` | `OpQtyToBaseQtyDnmntr` |
| `OpQtyToBaseQtyNmrtr` | `OpQtyToBaseQtyNmrtr` |
| `CreationDate` | `CreationDate` |
| `CreatedByUser` | `CreatedByUser` |
| `LastChangeDate` | `LastChangeDate` |
| `LastChangedByUser` | `LastChangedByUser` |
| `ChangeNumber` | `ChangeNumber` |
| `ChangedDateTime` | `ChangedDateTime` |
| `_InspPlanOperation` | *Association* |
| `_InspectionPlanVersion` | *Association* |
| `_InspPlanOpCharcVers` | *Association* |
| `_InspPlan` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Inspection Plan Operation Version - TP'
@AccessControl.authorizationCheck: #MANDATORY
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #L,
  dataClass: #MIXED
}
@ObjectModel.sapObjectNodeType: { name: 'InspectionPlanOperation' }
define view entity I_InspPlanOperationVersTP_2 as projection on R_InspPlanOperationVersionTP
{
  key    InspectionPlanGroup,
  key    BOOOperationInternalID,
  key    BOOOpInternalVersionCounter,
  key    InspectionPlan,
  
  ValidityStartDate,
  ValidityEndDate,
  WorkCenterInternalID, 
  WorkCenterTypeCode, 
  IsDeleted,
  IsImplicitlyDeleted, 
  OperationExternalID, 
  Operation,
  OperationText,
  Plant,
  OperationControlProfile, 
  OperationStandardTextCode, 
  BillOfOperationsRefType, 
  BillOfOperationsRefGroup, 
  BillOfOperationsRefVariant, 
  //_InspPlanOp.InspResultRecordingView,
  InspSbstCompletionConfirmation, 
  @Semantics.booleanIndicator: true
  InspSbstHasNoTimeOrQuantity, 

  // essential for Operation creation
  @Semantics.quantity.unitOfMeasure: 'OperationUnit'
  OperationReferenceQuantity, 
  OperationUnit, 
  OpQtyToBaseQtyDnmntr, 
  OpQtyToBaseQtyNmrtr, 

  CreationDate, 
  CreatedByUser, 
  LastChangeDate, 
  LastChangedByUser, 

  ChangeNumber, 
  
  ChangedDateTime,
  
  _InspPlanOperation : redirected to parent I_InspPlanOperationTP_2,
  @Semantics.valueRange.maximum: '1'
  _InspectionPlanVersion : redirected to I_InspectionPlanVersionTP_2,
  _InspPlanOpCharcVers : redirected to I_InspPlanOpCharcVersionTP_2,
  _InspPlan : redirected to I_InspectionPlanTP_2 
}
```
