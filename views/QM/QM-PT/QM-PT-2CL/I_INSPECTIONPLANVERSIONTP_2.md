---
name: I_INSPECTIONPLANVERSIONTP_2
description: Inspectionplanversiontp 2
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
  - inspection
  - component:QM-PT-2CL
  - lob:Quality Management
---
# I_INSPECTIONPLANVERSIONTP_2

**Inspectionplanversiontp 2**

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
| `InspectionPlan` | ✓ | |  |  |
| `InspectionPlanInternalVersion` | ✓ | |  |  |
| `BillOfOperationsStatus` |  | |  |  |
| `BillOfOperationsUsage` |  | |  |  |
| `BillOfOperationsDesc` |  | |  |  |
| `Plant` |  | |  |  |
| `IsDeleted` |  | |  |  |
| `ResponsiblePlannerGroup` |  | |  |  |
| `MinimumLotSizeQuantity` |  | |  |  |
| `MaximumLotSizeQuantity` |  | |  |  |
| `BillOfOperationsUnit` |  | |  |  |
| `ReplacedBillOfOperations` |  | |  |  |
| `IsMarkedForDeletion` |  | |  |  |
| `InspPlanHasMultipleSpec` |  | |  |  |
| `InspSubsetFieldCombination` |  | |  |  |
| `InspectionPartialLotAssignment` |  | |  |  |
| `SmplDrawingProcedure` |  | |  |  |
| `SmplDrawingProcedureVersion` |  | |  |  |
| `InspectionLotDynamicLevel` |  | |  |  |
| `InspLotDynamicRule` |  | |  |  |
| `InspExternalNumberingOfValues` |  | |  |  |
| `ChangeNumber` |  | |  |  |
| `ValidityStartDate` |  | |  |  |
| `ValidityEndDate` |  | |  |  |
| `ChangedDateTime` |  | |  |  |
| `CreationDate` |  | |  |  |
| `CreatedByUser` |  | |  |  |
| `LastChangeDate` |  | |  |  |
| `LastChangedByUser` |  | |  |  |
| `_InspPlan` | | ✓ | | |
| `_InspPlanMatlAssgmtVers` | | ✓ | | |
| `_InspPlanOpVersion` | | ✓ | | |

## Source Code

```abap
@EndUserText.label: 'Inspection Plan Header Version - TP'
@AccessControl.authorizationCheck: #MANDATORY
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #M,
  dataClass: #MASTER
}
@ObjectModel.sapObjectNodeType: { name: 'InspectionPlanVersion' }
define view entity I_InspectionPlanVersionTP_2 as projection on R_InspectionPlanVersionTP as InspectionPlanVersion
{
  key InspectionPlanGroup,
  key InspectionPlan,
  key InspectionPlanInternalVersion,
  
  BillOfOperationsStatus,
  BillOfOperationsUsage,
  BillOfOperationsDesc,
  
  Plant,
  
  IsDeleted,

  ResponsiblePlannerGroup,
  @Semantics.quantity.unitOfMeasure: 'BillOfOperationsUnit'
  MinimumLotSizeQuantity,
  @Semantics.quantity.unitOfMeasure: 'BillOfOperationsUnit'
  MaximumLotSizeQuantity,
  BillOfOperationsUnit,
  ReplacedBillOfOperations,
  IsMarkedForDeletion,
  @Semantics.booleanIndicator: true
  InspPlanHasMultipleSpec,

  InspSubsetFieldCombination,
  InspectionPartialLotAssignment,
  SmplDrawingProcedure,
  SmplDrawingProcedureVersion,
  InspectionLotDynamicLevel,
  InspLotDynamicRule,
  InspExternalNumberingOfValues,

  ChangeNumber,
  ValidityStartDate,
  ValidityEndDate,

  ChangedDateTime,
  CreationDate,
  CreatedByUser,
  LastChangeDate,
  LastChangedByUser,
//  _InspPlan.ChangedDateTime,  
  
  _InspPlan : redirected to parent I_InspectionPlanTP_2,
  @Semantics.valueRange.maximum: '1'
  _InspPlanMatlAssgmtVers : redirected to I_InspPlanMatlAssgmtVersTP_2,
  _InspPlanOpVersion : redirected to I_InspPlanOperationVersTP_2
}
```
