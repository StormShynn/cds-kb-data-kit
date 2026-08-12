---
name: I_MAINTTASKLISTOPBASICTP
description: "Maintenance Task ListOPBASICTP"
app_component: PM-PRM-TL-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
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
# I_MAINTTASKLISTOPBASICTP

**Maintenance Task ListOPBASICTP**

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
| `MaintenanceTaskListOperation` |  | |  |  |  |  |
| `MaintTaskListSubOperation` |  | |  |  |  |  |
| `MaintOperationExecStageCode` |  | |  |  |  |  |
| `OperationText` |  | |  |  |  |  |
| `OperationControlProfile` |  | |  |  |  |  |
| `WorkCenter` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `Assembly` |  | |  |  |  |  |
| `OperationCalculationControl` |  | |  |  |  |  |
| `OpPlannedWorkQuantity` |  | |  |  |  |  |
| `OpWorkQuantityUnit` |  | |  |  |  |  |
| `NumberOfCapacities` |  | |  |  |  |  |
| `PurchaseOrderQty` |  | |  | `Semantics.quantity.unitOfMeasure: 'PurchaseOrderQuantityUnit' PurchaseOrderQty` |  |  |
| `PurchaseOrderQuantityUnit` |  | |  |  |  |  |
| `OperationStandardDuration` |  | |  |  |  |  |
| `OperationStandardDurationUnit` |  | |  |  |  |  |
| `CostCtrActivityType` |  | |  |  |  |  |
| `MaterialGroup` |  | |  |  |  |  |
| `OpExternalProcessingPrice` |  | |  |  |  |  |
| `OpExternalProcessingCurrency` |  | |  |  |  |  |
| `CostElement` |  | |  |  |  |  |
| `PurchasingGroup` |  | |  |  |  |  |
| `PurchasingOrganization` |  | |  |  |  |  |
| `PurchaseContract` |  | |  |  |  |  |
| `PurchaseContractItem` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `ChangeNumber` |  | |  |  |  |  |
| `PurchasingInfoRecord` |  | |  |  |  |  |
| `IsBusinessPurposeCompleted` |  | |  |  |  |  |
| `SupplierAccountGroup` |  | |  |  |  |  |
| `AuthorizationGroup` |  | |  |  |  |  |
| `TaskListStatus` |  | |  |  |  |  |
| `ResponsiblePlannerGroup` |  | |  |  |  |  |
| `MaintenancePlanningPlant` |  | |  |  |  |  |
| `MaintenancePlannerGroup` |  | |  |  |  |  |
| `ControllingArea` |  | |  |  |  |  |
| `CostCenter` |  | |  |  |  |  |
| `MaintenancePlant` |  | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `TechnicalObject` |  | |  |  |  |  |
| `TechObjIsEquipOrFuncnlLoc` |  | |  |  |  |  |
| `_Header` | | ✓ | | | | |
| `_NonHistOp` | | ✓ | | | | |
| `_OpMaterial` | | ✓ | | | | |
| `_OpRelation` | | ✓ | | | | |
| `_SubOp` | | ✓ | | | | |
| `_OpLongText` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Operations - TP'
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
define view entity I_MaintTaskListOpBasicTP
  as projection on R_MaintTaskListOpBasicTP
{
  key   TaskListType,
  key   TaskListGroup,
  key   TaskListGroupCounter,
  key   TaskListSequence,
  key   TaskListOperationInternalId,
  key   TaskListOpBOMItmIntVersCounter,
        MaintenanceTaskListOperation,
        @Consumption.hidden: true
        MaintTaskListSubOperation,
        MaintOperationExecStageCode,
        OperationText,
        OperationControlProfile,
        WorkCenter,
        Plant,
        Assembly,
        OperationCalculationControl,
        @Semantics.quantity.unitOfMeasure: 'OpWorkQuantityUnit'
        OpPlannedWorkQuantity,
        OpWorkQuantityUnit,
        NumberOfCapacities,
        @ Semantics.quantity.unitOfMeasure: 'PurchaseOrderQuantityUnit'
        PurchaseOrderQty,
        PurchaseOrderQuantityUnit,
        @Semantics.quantity.unitOfMeasure: 'OperationStandardDurationUnit'
        OperationStandardDuration,
        OperationStandardDurationUnit,
        CostCtrActivityType,
        MaterialGroup,
        @Semantics.amount.currencyCode : 'OpExternalProcessingCurrency'
        OpExternalProcessingPrice,
        OpExternalProcessingCurrency,
        CostElement,
        PurchasingGroup,
        PurchasingOrganization,
        //        //       External Data
        PurchaseContract,
        PurchaseContractItem,
        Supplier,
        ChangeNumber,
        PurchasingInfoRecord,
        @Semantics.booleanIndicator
        IsBusinessPurposeCompleted,
        SupplierAccountGroup,
        AuthorizationGroup,
        TaskListStatus,
        ResponsiblePlannerGroup,
        MaintenancePlanningPlant,
        MaintenancePlannerGroup,
        ControllingArea,
        CostCenter,
        MaintenancePlant,
        ValidityStartDate,
        ValidityEndDate,
        TechnicalObject,
        TechObjIsEquipOrFuncnlLoc,
        _Header     : redirected to I_MaintenanceTaskListTP_2,
        _NonHistOp  : redirected to parent I_MaintTaskListOperationTP_2,
        _OpMaterial : redirected to I_MaintTaskListOpMaterialTP,
        _OpRelation : redirected to I_MaintTaskListOpRelshpTP,
        _SubOp      : redirected to I_MaintTaskListSubOpTP,
        _OpLongText : redirected to I_MaintTaskListOpLongTextTP
}
```
