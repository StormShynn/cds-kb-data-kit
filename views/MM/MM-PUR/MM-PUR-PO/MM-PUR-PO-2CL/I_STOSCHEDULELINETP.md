---
name: I_STOSCHEDULELINETP
description: STOSchedule LineTP
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
# I_STOSCHEDULELINETP

**STOSchedule LineTP**

| Property | Value |
|---|---|
| App Component | `MM-PUR-PO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `StockTransportOrder` | ✓ | |  |  |  |  |
| `StockTransportOrderItem` | ✓ | |  |  |  |  |
| `ScheduleLine` | ✓ | |  |  |  |  |
| `DelivDateCategory` |  | |  |  |  |  |
| `ScheduleLineDeliveryDate` |  | |  |  |  |  |
| `ScheduleLineDeliveryTime` |  | |  |  |  |  |
| `OrderQuantityUnit` |  | |  |  |  |  |
| `ScheduleLineOrderQuantity` |  | |  |  |  |  |
| `RoughGoodsReceiptQty` |  | |  |  |  |  |
| `PurchaseRequisition` |  | |  |  |  |  |
| `PurchaseRequisitionItem` |  | |  |  |  |  |
| `ScheduleLineIsFixed` |  | |  |  |  |  |
| `ScheduleLineCommittedQuantity` |  | |  |  |  |  |
| `TransportationPlanningDate` |  | |  |  |  |  |
| `TransportationPlanningTime` |  | |  |  |  |  |
| `LoadingDate` |  | |  |  |  |  |
| `LoadingTime` |  | |  |  |  |  |
| `GoodsIssueDate` |  | |  |  |  |  |
| `GoodsIssueTime` |  | |  |  |  |  |
| `STOLatestPossibleGRDate` |  | |  |  |  |  |
| `STOLatestPossibleGRTime` |  | |  |  |  |  |
| `StockTransferDeliveredQuantity` |  | |  |  |  |  |
| `StockTransportOrderType` |  | |  |  |  |  |
| `PurchasingOrganization` |  | |  |  |  |  |
| `PurchasingGroup` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `_STOSubcontractingComponent` | | ✓ | | | | |
| `_StockTransportOrderItem` | | ✓ | | | | |
| `_StockTransportOrder` | | ✓ | | | | |
| `_OrderQuantityUnit` | | ✓ | | | | |
| `_PurchaseRequisition` | | ✓ | | | | |
| `_PurchaseRequisitionItem` | | ✓ | | | | |
| `_OrderQuantityUnitText` | | ✓ | | | | |

## Source Code

```abap
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}

@ObjectModel: {
  usageType: {
    dataClass:      #TRANSACTIONAL,
    serviceQuality: #C,
    sizeCategory:   #L
  },

  modelingPattern: #TRANSACTIONAL_INTERFACE,
  semanticKey: ['StockTransportOrder', 'StockTransportOrderItem', 'ScheduleLine'],
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
}

@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #BLOCKED_DATA_EXCLUDED
}

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Schedule Line for STO - TP'

define view entity I_STOScheduleLineTP
  as projection on R_STOScheduleLineTP as _STOScheduleLineTP
{
  key StockTransportOrder,
  key StockTransportOrderItem,
  key ScheduleLine,
      DelivDateCategory,
      ScheduleLineDeliveryDate,
      ScheduleLineDeliveryTime,
      @ObjectModel.text.association: '_OrderQuantityUnitText'
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_UnitOfMeasureStdVH', element: 'UnitOfMeasure' }, useAsTemplate: true }]       //CustomUI
      OrderQuantityUnit,
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      ScheduleLineOrderQuantity,
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      RoughGoodsReceiptQty,
      PurchaseRequisition,
      PurchaseRequisitionItem,
      ScheduleLineIsFixed,
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      ScheduleLineCommittedQuantity,
      TransportationPlanningDate,
      TransportationPlanningTime,
      LoadingDate,
      LoadingTime,
      GoodsIssueDate,
      GoodsIssueTime,
      STOLatestPossibleGRDate,
      STOLatestPossibleGRTime,
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      StockTransferDeliveredQuantity,
      StockTransportOrderType,
      PurchasingOrganization,
      PurchasingGroup,
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_PlantStdVH', element: 'Plant' }, useAsTemplate: true }]       //CustomUI
      Plant,

      /* Composition */
      _STOSubcontractingComponent : redirected to composition child I_STOSubcontractingComponentTP,
      _StockTransportOrderItem    : redirected to parent I_StockTransportOrderItemTP,
      _StockTransportOrder        : redirected to I_StockTransportOrderTP,

      /* Associations */
      _OrderQuantityUnit,
      _PurchaseRequisition,
      _PurchaseRequisitionItem,
      
      /* Text associations for CustomUI */
      _OrderQuantityUnitText
}
```
