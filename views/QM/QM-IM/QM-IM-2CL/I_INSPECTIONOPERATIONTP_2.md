---
name: I_INSPECTIONOPERATIONTP_2
description: Inspectionoperationtp 2
app_component: QM-IM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-IM
  - interface-view
  - transactional-processing
  - inspection
  - component:QM-IM-2CL
  - lob:Quality Management
---
# I_INSPECTIONOPERATIONTP_2

**Inspectionoperationtp 2**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `InspectionLot` | `InspectionLot` |
| key `InspPlanOperationInternalID` | `InspPlanOperationInternalID` |
| `OrderInternalBillOfOperations` | `OrderInternalBillOfOperations` |
| `OrderOperationInternalID` | `OrderOperationInternalID` |
| `InspectionOperation` | `InspectionOperation` |
| `InspectionOperationPlant` | `InspectionOperationPlant` |
| `BillOfOperationsType` | `BillOfOperationsType` |
| `BOOOperationInternalID` | `BOOOperationInternalID` |
| `WorkCenterInternalID` | `WorkCenterInternalID` |
| `StatusObject` | `StatusObject` |
| `OperationControlProfile` | `OperationControlProfile` |
| `OperationConfirmation` | `OperationConfirmation` |
| `InspectionSubSystem` | `InspectionSubSystem` |
| `OperationText` | `OperationText` |
| `InspSbstIsTimeRelated` | `InspSbstIsTimeRelated` |
| `InspSbstHasNoTimeOrQuantity` | `InspSbstHasNoTimeOrQuantity` |
| `Sequence` | `Sequence` |
| `_InspectionLot` | *Association* |
| `_InspectionCharacteristic` | *Association* |
| `_InspectionSubset` | *Association* |
| `_WorkCenter` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Inspection Operation - TP'
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #TRANSACTIONAL
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel: {
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
  usageType: {
    serviceQuality: #C,
    sizeCategory: #L,
    dataClass: #TRANSACTIONAL }
}

define view entity I_InspectionOperationTP_2
  as projection on R_InspectionOperationTP
{
  key InspectionLot,
  key InspPlanOperationInternalID,
      OrderInternalBillOfOperations,
      OrderOperationInternalID,
      InspectionOperation,
      InspectionOperationPlant,
      BillOfOperationsType,
      BOOOperationInternalID,
      WorkCenterInternalID,
      StatusObject,
      OperationControlProfile,
      OperationConfirmation,
      InspectionSubSystem,
      OperationText,
      @Semantics.booleanIndicator: true
      InspSbstIsTimeRelated,
      @Semantics.booleanIndicator: true
      InspSbstHasNoTimeOrQuantity,
      Sequence,

      /* Associations */
      _InspectionLot            : redirected to parent I_InspectionLotTP_2,
      _InspectionCharacteristic : redirected to composition child I_InspCharacteristicTP_2,
      _InspectionSubset         : redirected to composition child I_InspectionSubsetTP_21,

      // Required for authorization check in I_InspectionSubsetTP_2 and I_InspSubsetCharacteristicTP_2
      _WorkCenter

}
```
