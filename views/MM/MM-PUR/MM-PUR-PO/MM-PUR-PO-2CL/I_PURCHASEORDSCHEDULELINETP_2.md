---
name: I_PURCHASEORDSCHEDULELINETP_2
description: PURCHASEORDSchedule LineTP 2
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
  - transactional-processing
  - schedule-line
  - component:MM-PUR-PO-2CL
  - lob:Sourcing & Procurement
---
# I_PURCHASEORDSCHEDULELINETP_2

**PURCHASEORDSchedule LineTP 2**

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
| key `ScheduleLine` | `ScheduleLine` |
| `ScheduleLineDeliveryDate` | `ScheduleLineDeliveryDate` |
| `SchedLineStscDeliveryDate` | `SchedLineStscDeliveryDate` |
| `PerformancePeriodStartDate` | `PerformancePeriodStartDate` |
| `PerformancePeriodEndDate` | `PerformancePeriodEndDate` |
| `ScheduleLineDeliveryTime` | `ScheduleLineDeliveryTime` |
| `Batch` | `Batch` |
| `BatchBySupplier` | `BatchBySupplier` |
| `ScheduleLineOrderQuantity` | `ScheduleLineOrderQuantity` |
| `OpenPurchaseOrderQuantity` | `OpenPurchaseOrderQuantity` |
| `PurchaseOrderQuantityUnit` | `PurchaseOrderQuantityUnit` |
| `Currency` | `Currency` |
| `OpenPurchaseOrderNetAmount` | `OpenPurchaseOrderNetAmount` |
| `PurchaseRequisition` | `PurchaseRequisition` |
| `PurchaseRequisitionItem` | `PurchaseRequisitionItem` |
| `DelivDateCategory` | `DelivDateCategory` |
| `ScheduleLineOrderDate` | `ScheduleLineOrderDate` |
| `ProductAvailabilityDate` | `ProductAvailabilityDate` |
| `LoadingDate` | `LoadingDate` |
| `LoadingTime` | `LoadingTime` |
| `TransportationPlanningDate` | `TransportationPlanningDate` |
| `TransportationPlanningTime` | `TransportationPlanningTime` |
| `GoodsIssueDate` | `GoodsIssueDate` |
| `GoodsIssueTime` | `GoodsIssueTime` |
| `RouteSchedule` | `RouteSchedule` |
| `ProductAvailabilityTime` | `ProductAvailabilityTime` |
| `_PurchaseOrderItem` | *Association* |
| `_PurchaseOrder` | *Association* |
| `_SubcontractingComponent` | *Association* |
| `_Currency` | *Association* |
| `_PurchaseOrderQuantityUnit` | *Association* |
| `_PurchaseRequisition` | *Association* |
| `_PurchaseRequisitionItem` | *Association* |
| `_PurchaseOrderQuantityUnitText` | *Association* |

## Source Code

```abap
@EndUserText.label: 'PO Schedule Line Projection'
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
//@AccessControl.privilegedAssociations: ['_SubcontractingComponent']
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #L, dataClass: #MASTER}
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
define view entity I_PurchaseOrdScheduleLineTP_2
  as projection on R_PurchaseOrderScheduleLineTP
{
  key PurchaseOrder,
  key PurchaseOrderItem,
  key ScheduleLine,

      ScheduleLineDeliveryDate,
      SchedLineStscDeliveryDate,
      PerformancePeriodStartDate,
      PerformancePeriodEndDate,
      ScheduleLineDeliveryTime,
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_BatchStdVH', element: 'Batch' }, useAsTemplate: true }]       //CustomUI
      Batch,
      BatchBySupplier,
      @Semantics.quantity.unitOfMeasure: 'PurchaseOrderQuantityUnit'
      ScheduleLineOrderQuantity,
      //      @Semantics.quantity.unitOfMeasure: 'PurchaseOrderQuantityUnit'
      //      RoughGoodsReceiptQty,
      @Semantics.quantity.unitOfMeasure: 'PurchaseOrderQuantityUnit'
      OpenPurchaseOrderQuantity,
      @ObjectModel.text.association: '_PurchaseOrderQuantityUnitText'
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_UnitOfMeasureStdVH', element: 'UnitOfMeasure' }, useAsTemplate: true }]       //CustomUI
      PurchaseOrderQuantityUnit,
      Currency,
      @Semantics.amount.currencyCode: 'Currency'
      OpenPurchaseOrderNetAmount,
      PurchaseRequisition,
      PurchaseRequisitionItem,
      DelivDateCategory,
      ScheduleLineOrderDate,
      ProductAvailabilityDate,
      LoadingDate,
      LoadingTime,
      TransportationPlanningDate,
      TransportationPlanningTime,
      GoodsIssueDate,
      GoodsIssueTime,
      RouteSchedule,
      ProductAvailabilityTime,
      //      GoodsReceiptEndDate,
      //      GoodsReceiptEndTime,
      //      CommittedDate,
      //      HandoverDte,
      //      HandoverTme,
      //      GeographicalRoute,

      /* Composition */
      _PurchaseOrderItem       : redirected to parent I_PurchaseOrderItemTP_2,
      _PurchaseOrder           : redirected to I_PurchaseOrderTP_2,
      _SubcontractingComponent : redirected to composition child I_POSubcontractingCompTP_2,

      /* Associations */
      _Currency,
      _PurchaseOrderQuantityUnit,
      _PurchaseRequisition,
      _PurchaseRequisitionItem,
      
      // Text associations for CustomUI
      _PurchaseOrderQuantityUnitText
}
```
