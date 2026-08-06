---
name: I_SCHEDGLINETP_2
description: Schedglinetp 2
app_component: MM-PUR-OA-SCH-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-OA
  - interface-view
  - transactional-processing
  - component:MM-PUR-OA-SCH-2CL
  - lob:Sourcing & Procurement
---
# I_SCHEDGLINETP_2

**Schedglinetp 2**

| Property | Value |
|---|---|
| App Component | `MM-PUR-OA-SCH-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SchedulingAgreement` | `SchedulingAgreement` |
| key `SchedulingAgreementItem` | `SchedulingAgreementItem` |
| key `ScheduleLine` | `ScheduleLine` |
| `DelivDateCategory` | `DelivDateCategory` |
| `ScheduleLineDeliveryDate` | `ScheduleLineDeliveryDate` |
| `SchedLineStscDeliveryDate` | `SchedLineStscDeliveryDate` |
| `ScheduleLineDeliveryTime` | `ScheduleLineDeliveryTime` |
| `OrderQuantityUnit` | `OrderQuantityUnit` |
| `ScheduleLineOrderQuantity` | `ScheduleLineOrderQuantity` |
| `PurchaseRequisition` | `PurchaseRequisition` |
| `PurchaseRequisitionItem` | `PurchaseRequisitionItem` |
| `RoughGoodsReceiptQty` | `RoughGoodsReceiptQty` |
| `ScheduleLineIsFixed` | `ScheduleLineIsFixed` |
| `PrevDelivQtyOfScheduleLine` | `PrevDelivQtyOfScheduleLine` |
| `SourceOfCreation` | `SourceOfCreation` |
| `ScheduleLineOpenQuantity` | `ScheduleLineOpenQuantity` |
| `LastChangeDateTime` | `LastChangeDateTime` |
| `_SchedgAgrmtItm` | *Association* |
| `_SchedgAgrmtSubcontrgComp` | *Association* |
| `_PurSchedgAgrmt` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Scheduling Agreement Schedule Line'
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel.semanticKey:  [ 'SchedulingAgreement','SchedulingAgreementItem','ScheduleLine' ]

@ObjectModel: {
    usageType: {
      sizeCategory: #L,
      serviceQuality:#C,
      dataClass: #TRANSACTIONAL
    }
  }

@Metadata.ignorePropagatedAnnotations: true

define view entity I_SchedgLineTP_2
  as projection on R_SchedgLineTP
{
  key SchedulingAgreement,
  key SchedulingAgreementItem,
  key ScheduleLine,
      DelivDateCategory,
      ScheduleLineDeliveryDate,
      SchedLineStscDeliveryDate,
      ScheduleLineDeliveryTime,
      OrderQuantityUnit,
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      ScheduleLineOrderQuantity,
      PurchaseRequisition,
      PurchaseRequisitionItem,
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      RoughGoodsReceiptQty,
      ScheduleLineIsFixed,
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      PrevDelivQtyOfScheduleLine,
      SourceOfCreation,
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      ScheduleLineOpenQuantity,
      LastChangeDateTime,

      /* Associations */

      _SchedgAgrmtItm           : redirected to parent I_SchedgAgrmtItmTP_2,
      _SchedgAgrmtSubcontrgComp : redirected to composition child I_SchedgAgrmtSubcontrgCompTP_2,
      _PurSchedgAgrmt           : redirected to I_SchedgAgrmtHdrTP_2
}
```
