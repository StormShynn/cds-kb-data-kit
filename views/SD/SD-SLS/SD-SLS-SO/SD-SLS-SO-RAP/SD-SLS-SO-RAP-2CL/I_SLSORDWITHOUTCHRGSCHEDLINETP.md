---
name: I_SLSORDWITHOUTCHRGSCHEDLINETP
description: Slsordwithoutchrgschedlinetp
app_component: SD-SLS-SO-RAP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-SO
  - interface-view
  - transactional-processing
  - component:SD-SLS-SO-RAP-2CL
  - lob:Sales & Distribution
---
# I_SLSORDWITHOUTCHRGSCHEDLINETP

**Slsordwithoutchrgschedlinetp**

| Property | Value |
|---|---|
| App Component | `SD-SLS-SO-RAP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `SalesOrderWithoutCharge` | ✓ | |  |  |
| `SalesOrderWithoutChargeItem` | ✓ | |  |  |
| `ScheduleLine` | ✓ | |  |  |
| `ScheduleLineForEdit` |  | |  |  |
| `ScheduleLineCategory` |  | |  |  |
| `OrderQuantityUnit` |  | |  |  |
| `ScheduleLineOrderQuantity` |  | |  |  |
| `ConfdOrderQtyByMatlAvailCheck` |  | |  |  |
| `DeliveredQtyInOrderQtyUnit` |  | |  |  |
| `OpenConfdDelivQtyInOrdQtyUnit` |  | |  |  |
| `CorrectedQtyInOrderQtyUnit` |  | |  |  |
| `RequestedDeliveryDate` |  | |  |  |
| `ConfirmedDeliveryDate` |  | |  |  |
| `DelivBlockReasonForSchedLine` |  | |  |  |
| `PurchaseRequisition` |  | |  |  |
| `PurchaseRequisitionItem` |  | |  |  |
| `GoodsMovementType` |  | |  |  |
| `SalesOrderWithoutChargeType` |  | |  |  |
| `SalesOrganization` |  | |  |  |
| `DistributionChannel` |  | |  |  |
| `OrganizationDivision` |  | |  |  |
| `_Item` | | ✓ | | |
| `_SalesOrderWithoutCharge` | | ✓ | | |

## Source Code

```abap
@EndUserText.label: 'Sales Order Without Charge Sline - TP'
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking:#NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
   modelingPattern:       #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #XL,
     dataClass:      #TRANSACTIONAL
   },
   semanticKey: ['SalesOrderWithoutCharge', 'SalesOrderWithoutChargeItem', 'ScheduleLine']
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define view entity I_SlsOrdWithoutChrgSchedLineTP
  as projection on R_SlsOrdWithoutChrgSchedLineTP as SlsOrdWithoutChrgScheduleLine
{
  key SlsOrdWithoutChrgScheduleLine.SalesOrderWithoutCharge,
  key SlsOrdWithoutChrgScheduleLine.SalesOrderWithoutChargeItem,
  key SlsOrdWithoutChrgScheduleLine.ScheduleLine,

      @ObjectModel.editableFieldFor: 'ScheduleLine'
      SlsOrdWithoutChrgScheduleLine.ScheduleLineForEdit,
      SlsOrdWithoutChrgScheduleLine.ScheduleLineCategory,
      SlsOrdWithoutChrgScheduleLine.OrderQuantityUnit,
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      SlsOrdWithoutChrgScheduleLine.ScheduleLineOrderQuantity,
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      SlsOrdWithoutChrgScheduleLine.ConfdOrderQtyByMatlAvailCheck,
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      SlsOrdWithoutChrgScheduleLine.DeliveredQtyInOrderQtyUnit,
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      SlsOrdWithoutChrgScheduleLine.OpenConfdDelivQtyInOrdQtyUnit,
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      SlsOrdWithoutChrgScheduleLine.CorrectedQtyInOrderQtyUnit,
      SlsOrdWithoutChrgScheduleLine.RequestedDeliveryDate,
      SlsOrdWithoutChrgScheduleLine.ConfirmedDeliveryDate,

      SlsOrdWithoutChrgScheduleLine.DelivBlockReasonForSchedLine,
      SlsOrdWithoutChrgScheduleLine.PurchaseRequisition,
      SlsOrdWithoutChrgScheduleLine.PurchaseRequisitionItem,
      SlsOrdWithoutChrgScheduleLine.GoodsMovementType,

      //for DCL
      @Consumption.hidden: true
      SlsOrdWithoutChrgScheduleLine.SalesOrderWithoutChargeType,
      @Consumption.hidden: true
      SlsOrdWithoutChrgScheduleLine.SalesOrganization,
      @Consumption.hidden: true
      SlsOrdWithoutChrgScheduleLine.DistributionChannel,
      @Consumption.hidden: true
      SlsOrdWithoutChrgScheduleLine.OrganizationDivision,

      //Composition
      _Item                    : redirected to parent I_SlsOrderWithoutChargeItemTP,
      _SalesOrderWithoutCharge : redirected to I_SalesOrderWithoutChargeTP
}
```
