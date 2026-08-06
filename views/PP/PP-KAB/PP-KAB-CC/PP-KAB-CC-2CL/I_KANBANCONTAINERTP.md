---
name: I_KANBANCONTAINERTP
description: Kanbancontainertp
app_component: PP-KAB-CC-2CL
software_component: SAPSCORE
release_state: released
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

| Field | Data Source |
|---|---|
| key `KanbanContainer` | `KanbanContainer` |
| `KanbanControlCycle` | `KanbanControlCycle` |
| `KanbanControlCycleItem` | `KanbanControlCycleItem` |
| `KanbanContainerStatus` | `KanbanContainerStatus` |
| `LastChangeDate` | `LastChangeDate` |
| `LastChangeTime` | `LastChangeTime` |
| `PreviousKanbanContainerStatus` | `PreviousKanbanContainerStatus` |
| `PreviousLastChangeDate` | `PreviousLastChangeDate` |
| `PreviousLastChangeTime` | `PreviousLastChangeTime` |
| `IsLocked` | `IsLocked` |
| `IsDeleted` | `IsDeleted` |
| `ChangedPackgInstrnDataIsAvail` | `ChangedPackgInstrnDataIsAvail` |
| `LastChangeDateTime` | `LastChangeDateTime` |
| `BaseUnit` | `BaseUnit` |
| `ActualQuantityInBaseUnit` | `ActualQuantityInBaseUnit` |
| `RequestedQuantityInBaseUnit` | `RequestedQuantityInBaseUnit` |
| `PlannedReceiptDateTime` | `PlannedReceiptDateTime` |
| `Plant` | `Plant` |
| `Supplier` | `Supplier` |
| `PlannedOrder` | `PlannedOrder` |
| `OrderID` | `OrderID` |
| `PurchasingDocumentCategory` | `PurchasingDocumentCategory` |
| `PurchasingDocument` | `PurchasingDocument` |
| `PurchasingDocumentItem` | `PurchasingDocumentItem` |
| `SequentialNmbrOfSuplrConf` | `SequentialNmbrOfSuplrConf` |
| `SalesDocument` | `SalesDocument` |
| `SalesDocumentItem` | `SalesDocumentItem` |
| `Reservation` | `Reservation` |
| `ReservationItem` | `ReservationItem` |
| `TransferRequirementNumber` | `TransferRequirementNumber` |
| `TransferRequirementItem` | `TransferRequirementItem` |
| `JITCallNumber` | `JITCallNumber` |
| `JITCallItemNumber` | `JITCallItemNumber` |
| `BackflushReportingPoint` | `BackflushReportingPoint` |
| `Warehouse` | `Warehouse` |
| `EWMWarehouse` | `EWMWarehouse` |
| `WarehouseTask` | `WarehouseTask` |
| `EWMWarehouseRequest` | `EWMWarehouseRequest` |
| `EWMWarehouseRequestItem` | `EWMWarehouseRequestItem` |
| `MaterialDocument` | `MaterialDocument` |
| `MaterialDocumentYear` | `MaterialDocumentYear` |
| `MaterialDocumentItem` | `MaterialDocumentItem` |
| `WhseGoodsMovementDocument` | `WhseGoodsMovementDocument` |
| `WhseGoodsMovementDocumentItem` | `WhseGoodsMovementDocumentItem` |
| `RepetitiveMfgConfirmation` | `RepetitiveMfgConfirmation` |
| `_KanbanControlCycle` | *Association* |
| `_Plant` | *Association* |
| `_Supplier` | *Association* |
| `_SupplierCompanyByPlant` | *Association* |

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
