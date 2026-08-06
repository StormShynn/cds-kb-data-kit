---
name: I_SALESORDERSCHEDULELINETP
description: Sales OrderSchedule LineTP
app_component: SD-SLS-API-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-API
  - interface-view
  - transactional-processing
  - sales-order
  - schedule-line
  - component:SD-SLS-API-2CL
  - lob:Sales & Distribution
  - bo:SalesOrder
---
# I_SALESORDERSCHEDULELINETP

**Sales OrderSchedule LineTP**

| Property | Value |
|---|---|
| App Component | `SD-SLS-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SalesOrder` | `SalesOrderScheduleLine.SalesOrder` |
| key `SalesOrderItem` | `SalesOrderScheduleLine.SalesOrderItem` |
| key `ScheduleLine` | `SalesOrderScheduleLine.ScheduleLine` |
| `ScheduleLineForEdit` | `SalesOrderScheduleLine.ScheduleLineForEdit` |
| `ScheduleLineCategory` | `SalesOrderScheduleLine.ScheduleLineCategory` |
| `OrderQuantityUnit` | `SalesOrderScheduleLine.OrderQuantityUnit` |
| `OrderQuantitySAPUnit` | `SalesOrderScheduleLine.OrderQuantitySAPUnit` |
| `ScheduleLineOrderQuantity` | `SalesOrderScheduleLine.ScheduleLineOrderQuantity` |
| `ConfdOrderQtyByMatlAvailCheck` | `SalesOrderScheduleLine.ConfdOrderQtyByMatlAvailCheck` |
| `DeliveredQtyInOrderQtyUnit` | `SalesOrderScheduleLine.DeliveredQtyInOrderQtyUnit` |
| `OpenConfdDelivQtyInOrdQtyUnit` | `SalesOrderScheduleLine.OpenConfdDelivQtyInOrdQtyUnit` |
| `CorrectedQtyInOrderQtyUnit` | `SalesOrderScheduleLine.CorrectedQtyInOrderQtyUnit` |
| `DeliveryDate` | `SalesOrderScheduleLine.DeliveryDate` |
| `RequestedDeliveryDate` | `SalesOrderScheduleLine.RequestedDeliveryDate` |
| `ConfirmedDeliveryDate` | `SalesOrderScheduleLine.ConfirmedDeliveryDate` |
| `DelivBlockReasonForSchedLine` | `SalesOrderScheduleLine.DelivBlockReasonForSchedLine` |
| `PurchaseRequisition` | `SalesOrderScheduleLine.PurchaseRequisition` |
| `PurchaseRequisitionItem` | `SalesOrderScheduleLine.PurchaseRequisitionItem` |
| `GoodsMovementType` | `SalesOrderScheduleLine.GoodsMovementType` |
| `SalesOrderType` | `SalesOrderScheduleLine.SalesOrderType` |
| `SalesOrganization` | `SalesOrderScheduleLine.SalesOrganization` |
| `DistributionChannel` | `SalesOrderScheduleLine.DistributionChannel` |
| `OrganizationDivision` | `SalesOrderScheduleLine.OrganizationDivision` |
| `_Item` | *Association* |
| `_SalesOrder` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Sales Order Schedule Line - TP'

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
   modelingPattern:       #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #XL,
     dataClass:      #TRANSACTIONAL
   },
   semanticKey: ['SalesOrder', 'SalesOrderItem', 'ScheduleLine']
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define view entity I_SalesOrderScheduleLineTP
  as projection on R_SalesOrderScheduleLineTP as SalesOrderScheduleLine

{
  key SalesOrderScheduleLine.SalesOrder,
  key SalesOrderScheduleLine.SalesOrderItem,
  key SalesOrderScheduleLine.ScheduleLine,
      @ObjectModel.editableFieldFor: 'ScheduleLine'
      SalesOrderScheduleLine.ScheduleLineForEdit,
      SalesOrderScheduleLine.ScheduleLineCategory,
      SalesOrderScheduleLine.OrderQuantityUnit,
      SalesOrderScheduleLine.OrderQuantitySAPUnit,
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      SalesOrderScheduleLine.ScheduleLineOrderQuantity,
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'      
      SalesOrderScheduleLine.ConfdOrderQtyByMatlAvailCheck,
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'      
      SalesOrderScheduleLine.DeliveredQtyInOrderQtyUnit,
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'      
      SalesOrderScheduleLine.OpenConfdDelivQtyInOrdQtyUnit,
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'      
      SalesOrderScheduleLine.CorrectedQtyInOrderQtyUnit,
      SalesOrderScheduleLine.DeliveryDate,
      SalesOrderScheduleLine.RequestedDeliveryDate,
      SalesOrderScheduleLine.ConfirmedDeliveryDate,
      
      SalesOrderScheduleLine.DelivBlockReasonForSchedLine,
      SalesOrderScheduleLine.PurchaseRequisition,
      SalesOrderScheduleLine.PurchaseRequisitionItem,
      SalesOrderScheduleLine.GoodsMovementType,

      //for DCL
      @Consumption.hidden: true
      SalesOrderScheduleLine.SalesOrderType,
      @Consumption.hidden: true
      SalesOrderScheduleLine.SalesOrganization,
      @Consumption.hidden: true
      SalesOrderScheduleLine.DistributionChannel,
      @Consumption.hidden: true
      SalesOrderScheduleLine.OrganizationDivision,

      //Association
      _Item       : redirected to parent I_SalesOrderItemTP,
      _SalesOrder : redirected to I_SalesOrderTP

}
```
