---
name: I_KANBANCONTAINERTP
description: "Kanbancontainertp"
app_component: PP-KAB-CC-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-KAB
  - PP-KAB-CC
  - interface-view
  - transactional-processing
  - component:PP-KAB-CC-2CL
  - lob:Manufacturing
---
# I_KANBANCONTAINERTP

**Kanbancontainertp**

| Property | Value |
|---|---|
| App Component | `PP-KAB-CC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `KanbanContainer` | ✓ | |  |  |  |  |
| `KanbanControlCycle` |  | |  |  |  |  |
| `KanbanControlCycleItem` |  | |  |  |  |  |
| `KanbanContainerStatus` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `LastChangeTime` |  | |  |  |  |  |
| `PreviousKanbanContainerStatus` |  | |  |  |  |  |
| `PreviousLastChangeDate` |  | |  |  |  |  |
| `PreviousLastChangeTime` |  | |  |  |  |  |
| `IsLocked` |  | |  |  |  |  |
| `IsDeleted` |  | |  |  |  |  |
| `ChangedPackgInstrnDataIsAvail` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `ActualQuantityInBaseUnit` |  | |  |  |  |  |
| `RequestedQuantityInBaseUnit` |  | |  |  |  |  |
| `PlannedReceiptDateTime` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `PlannedOrder` |  | |  |  |  |  |
| `OrderID` |  | |  |  |  |  |
| `PurchasingDocumentCategory` |  | |  |  |  |  |
| `PurchasingDocument` |  | |  |  |  |  |
| `PurchasingDocumentItem` |  | |  |  |  |  |
| `SequentialNmbrOfSuplrConf` |  | |  |  |  |  |
| `SalesDocument` |  | |  |  |  |  |
| `SalesDocumentItem` |  | |  |  |  |  |
| `Reservation` |  | |  |  |  |  |
| `ReservationItem` |  | |  |  |  |  |
| `TransferRequirementNumber` |  | |  |  |  |  |
| `TransferRequirementItem` |  | |  |  |  |  |
| `JITCallNumber` |  | |  |  |  |  |
| `JITCallItemNumber` |  | |  |  |  |  |
| `BackflushReportingPoint` |  | |  |  |  |  |
| `Warehouse` |  | |  |  |  |  |
| `EWMWarehouse` |  | |  |  |  |  |
| `WarehouseTask` |  | |  |  |  |  |
| `EWMWarehouseRequest` |  | |  |  |  |  |
| `EWMWarehouseRequestItem` |  | |  |  |  |  |
| `MaterialDocument` |  | |  |  |  |  |
| `MaterialDocumentYear` |  | |  |  |  |  |
| `MaterialDocumentItem` |  | |  |  |  |  |
| `WhseGoodsMovementDocument` |  | |  |  |  |  |
| `WhseGoodsMovementDocumentItem` |  | |  |  |  |  |
| `RepetitiveMfgConfirmation` |  | |  |  |  |  |
| `_KanbanControlCycle` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_SupplierCompanyByPlant` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Kanban Container - TP'

@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #L,
  dataClass: #MIXED
}

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@Metadata.ignorePropagatedAnnotations: true
define view entity I_KanbanContainerTP as projection on R_KanbanContainerTP as _KanbanContainerTP
{
  key KanbanContainer,
      KanbanControlCycle,
      KanbanControlCycleItem,

      KanbanContainerStatus,
      LastChangeDate,
      LastChangeTime,

      PreviousKanbanContainerStatus,
      PreviousLastChangeDate,
      PreviousLastChangeTime,

      IsLocked,
      IsDeleted,
      ChangedPackgInstrnDataIsAvail,

      @Semantics.systemDateTime.lastChangedAt: true
      @Semantics.systemDateTime.localInstanceLastChangedAt: true
      LastChangeDateTime,

      BaseUnit,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      ActualQuantityInBaseUnit,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      RequestedQuantityInBaseUnit,
      PlannedReceiptDateTime,

      // Only for DCL
      Plant,
      Supplier,

      //-----------------------------------------------------------------------
      // Replenishment
      //-----------------------------------------------------------------------
      PlannedOrder,
      OrderID,
      PurchasingDocumentCategory,
      PurchasingDocument,
      PurchasingDocumentItem,
      SequentialNmbrOfSuplrConf,
      SalesDocument,
      SalesDocumentItem,
      Reservation,
      ReservationItem,
      TransferRequirementNumber,
      TransferRequirementItem,
      JITCallNumber,
      JITCallItemNumber,
      BackflushReportingPoint,
      Warehouse,
      EWMWarehouse,
      WarehouseTask,
      EWMWarehouseRequest,
      EWMWarehouseRequestItem,

      //-----------------------------------------------------------------------
      // Goods Receipt
      //-----------------------------------------------------------------------
      MaterialDocument,
      MaterialDocumentYear,
      MaterialDocumentItem,
      WhseGoodsMovementDocument,
      WhseGoodsMovementDocumentItem,
      RepetitiveMfgConfirmation,

      //-----------------------------------------------------------------------
      // Associations
      //-----------------------------------------------------------------------
      _KanbanControlCycle: redirected to parent I_KanbanControlCycleTP,

      // Only for DCL
      _Plant,
      _Supplier,
      _SupplierCompanyByPlant
}
```
