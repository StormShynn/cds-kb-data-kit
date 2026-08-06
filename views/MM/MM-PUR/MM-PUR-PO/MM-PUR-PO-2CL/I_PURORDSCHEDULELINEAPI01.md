---
name: I_PURORDSCHEDULELINEAPI01
description: PURORDSchedule LineAPI 01
app_component: MM-PUR-PO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-PO
  - interface-view
  - schedule-line
  - component:MM-PUR-PO-2CL
  - lob:Sourcing & Procurement
---
# I_PURORDSCHEDULELINEAPI01

**PURORDSchedule LineAPI 01**

| Property | Value |
|---|---|
| App Component | `MM-PUR-PO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `PurchaseOrder` | `PurchaseOrder` |
| key `PurchaseOrderItem` | `PurchaseOrderItem` |
| key `PurchaseOrderScheduleLine` | `PurchaseOrderScheduleLine` |
| `PerformancePeriodStartDate` | `PerformancePeriodStartDate` |
| `PerformancePeriodEndDate` | `PerformancePeriodEndDate` |
| `DelivDateCategory` | `DelivDateCategory` |
| `ScheduleLineDeliveryDate` | `ScheduleLineDeliveryDate` |
| `SchedLineStscDeliveryDate` | `SchedLineStscDeliveryDate` |
| `ScheduleLineDeliveryTime` | `ScheduleLineDeliveryTime` |
| `ScheduleLineOrderQuantity` | `ScheduleLineOrderQuantity` |
| `RoughGoodsReceiptQty` | `RoughGoodsReceiptQty` |
| `PurchaseOrderQuantityUnit` | `PurchaseOrderQuantityUnit` |
| `PurchaseRequisition` | `PurchaseRequisition` |
| `PurchaseRequisitionItem` | `PurchaseRequisitionItem` |
| `SourceOfCreation` | `SourceOfCreation` |
| `PrevDelivQtyOfScheduleLine` | `PrevDelivQtyOfScheduleLine` |
| `NoOfRemindersOfScheduleLine` | `NoOfRemindersOfScheduleLine` |
| `ScheduleLineIsFixed` | `ScheduleLineIsFixed` |
| `ScheduleLineCommittedQuantity` | `ScheduleLineCommittedQuantity` |
| `Reservation` | `Reservation` |
| `ProductAvailabilityDate` | `ProductAvailabilityDate` |
| `MaterialStagingTime` | `MaterialStagingTime` |
| `TransportationPlanningDate` | `TransportationPlanningDate` |
| `TransportationPlanningTime` | `TransportationPlanningTime` |
| `LoadingDate` | `LoadingDate` |
| `LoadingTime` | `LoadingTime` |
| `GoodsIssueDate` | `GoodsIssueDate` |
| `GoodsIssueTime` | `GoodsIssueTime` |
| `STOLatestPossibleGRDate` | `STOLatestPossibleGRDate` |
| `STOLatestPossibleGRTime` | `STOLatestPossibleGRTime` |
| `StockTransferDeliveredQuantity` | `StockTransferDeliveredQuantity` |
| `ScheduleLineIssuedQuantity` | `ScheduleLineIssuedQuantity` |
| `MRPRelevantQuantity` | `MRPRelevantQuantity` |
| `Batch` | `Batch` |
| `_PurchaseOrder` | *Association* |
| `_PurchaseOrderItem` | *Association* |
| `_SubcontractingComponent` | *Association* |
| `_PurchaseOrderQuantityUnitText` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PurchaseOrder` | `I_PurchaseOrderAPI01` | [1..1] |
| `_PurchaseOrderItem` | `I_PurchaseOrderItemAPI01` | [1..1] |
| `_SubcontractingComponent` | `I_POSubcontractingCompAPI01` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'IMMPURORDSLAPI01'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@VDM.viewType : #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'Schedule Line in Purchase Order'
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.representativeKey: 'PurchaseOrderScheduleLine'
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Metadata.ignorePropagatedAnnotations:true

define view I_PurOrdScheduleLineAPI01
  as select from I_PurOrdScheduleLineBasic

  association [1..1] to I_PurchaseOrderAPI01        as _PurchaseOrder           on  $projection.PurchaseOrder = _PurchaseOrder.PurchaseOrder
  association [1..1] to I_PurchaseOrderItemAPI01    as _PurchaseOrderItem       on  $projection.PurchaseOrder     = _PurchaseOrderItem.PurchaseOrder
                                                                                and $projection.PurchaseOrderItem = _PurchaseOrderItem.PurchaseOrderItem
  association [0..*] to I_POSubcontractingCompAPI01 as _SubcontractingComponent on  $projection.PurchaseOrder             = _SubcontractingComponent.PurchaseOrder
                                                                                and $projection.PurchaseOrderItem         = _SubcontractingComponent.PurchaseOrderItem
                                                                                and $projection.PurchaseOrderScheduleLine = _SubcontractingComponent.PurchaseOrderScheduleLine



{
      @ObjectModel.foreignKey.association: '_PurchaseOrder'
  key PurchaseOrder,
      @ObjectModel.foreignKey.association: '_PurchaseOrderItem'
  key PurchaseOrderItem,
  key PurchaseOrderScheduleLine,
      PerformancePeriodStartDate,
      PerformancePeriodEndDate,


      DelivDateCategory,
      ScheduleLineDeliveryDate,
      SchedLineStscDeliveryDate,
      ScheduleLineDeliveryTime,
      @Semantics.quantity.unitOfMeasure: 'PurchaseOrderQuantityUnit'
      ScheduleLineOrderQuantity,
      @Semantics.quantity.unitOfMeasure: 'PurchaseOrderQuantityUnit'
      RoughGoodsReceiptQty,

      @Semantics.unitOfMeasure: true
      @ObjectModel.text.association: '_PurchaseOrderQuantityUnitText'
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_UnitOfMeasureStdVH', element: 'UnitOfMeasure' }, useAsTemplate: true }]       //CustomUI
      PurchaseOrderQuantityUnit,

      PurchaseRequisition,

      PurchaseRequisitionItem,

      SourceOfCreation,
      @Semantics.quantity.unitOfMeasure: 'PurchaseOrderQuantityUnit'
      PrevDelivQtyOfScheduleLine,
      NoOfRemindersOfScheduleLine,
      ScheduleLineIsFixed,
      @Semantics.quantity.unitOfMeasure: 'PurchaseOrderQuantityUnit'
      ScheduleLineCommittedQuantity,
      Reservation,
      ProductAvailabilityDate,
      MaterialStagingTime,
      TransportationPlanningDate,
      TransportationPlanningTime,
      LoadingDate,
      LoadingTime,
      GoodsIssueDate,
      GoodsIssueTime,
      STOLatestPossibleGRDate,
      STOLatestPossibleGRTime,
      @Semantics.quantity.unitOfMeasure: 'PurchaseOrderQuantityUnit'
      StockTransferDeliveredQuantity,
      @Semantics.quantity.unitOfMeasure: 'PurchaseOrderQuantityUnit'
      ScheduleLineIssuedQuantity,
      @Semantics.quantity.unitOfMeasure: 'PurchaseOrderQuantityUnit'
      MRPRelevantQuantity,
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_BatchStdVH', element: 'Batch' }, useAsTemplate: true }]       //CustomUI
      Batch,

      _PurchaseOrder,
      _PurchaseOrderItem,
      _SubcontractingComponent,
      _PurchaseOrderQuantityUnitText
}
```
