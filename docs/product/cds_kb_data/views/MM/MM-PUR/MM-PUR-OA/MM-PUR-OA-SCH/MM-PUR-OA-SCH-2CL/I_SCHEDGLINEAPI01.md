---
name: I_SCHEDGLINEAPI01
description: "Schedglineapi 01"
app_component: MM-PUR-OA-SCH-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-OA
  - interface-view
  - component:MM-PUR-OA-SCH-2CL
  - lob:Sourcing & Procurement
---
# I_SCHEDGLINEAPI01

**Schedglineapi 01**

| Property | Value |
|---|---|
| App Component | `MM-PUR-OA-SCH-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SchedulingAgreement` | ✓ | |  |  |  |  |
| `SchedulingAgreementItem` | ✓ | |  |  |  |  |
| `ScheduleLine` | ✓ | |  |  |  |  |
| `DelivDateCategory` |  | |  |  |  |  |
| `ScheduleLineDeliveryDate` |  | |  |  |  |  |
| `SchedLineStscDeliveryDate` |  | |  |  |  |  |
| `ScheduleLineDeliveryTime` |  | |  |  |  |  |
| `OrderQuantityUnit` |  | | `_SchedgAgrmtItm` | `OrderQuantityUnit` |  |  |
| `ScheduleLineOrderQuantity` |  | |  |  |  |  |
| `PurchaseRequisition` |  | |  |  |  |  |
| `PurchaseRequisitionItem` |  | |  |  |  |  |
| `RoughGoodsReceiptQty` |  | |  |  |  |  |
| `ScheduleLineIsFixed` |  | |  |  |  |  |
| `NoOfRemindersOfScheduleLine` |  | |  |  |  |  |
| `PrevDelivQtyOfScheduleLine` |  | |  |  |  |  |
| `SourceOfCreation` |  | |  |  |  |  |
| `_SchedgagrmthdrApi01` | | ✓ | | | | |
| `_SchedgAgrmtItmApi01` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SchedgagrmthdrApi01` | `I_SchedgagrmthdrApi01` | [1..1] |
| `_SchedgAgrmtItmApi01` | `I_SchedgAgrmtItmApi01` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISCHEDGLINEAPI01'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Schedule Line in Pur Schedg Agrmt'
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
define view I_SchedglineApi01
  as select from I_Schedgline
  
  association[1..1] to I_SchedgagrmthdrApi01 as  _SchedgagrmthdrApi01  on $projection.SchedulingAgreement     = _SchedgagrmthdrApi01.SchedulingAgreement
  
  association[1..1] to I_SchedgAgrmtItmApi01 as  _SchedgAgrmtItmApi01  on $projection.SchedulingAgreement     = _SchedgAgrmtItmApi01.SchedulingAgreement
                                                                      and $projection.SchedulingAgreementItem = _SchedgAgrmtItmApi01.SchedulingAgreementItem
  
{

     key I_Schedgline.SchedulingAgreement, 
     key I_Schedgline.SchedulingAgreementItem, 
     key I_Schedgline.ScheduleLine, 
     I_Schedgline.DelivDateCategory, 
     I_Schedgline.ScheduleLineDeliveryDate, 
     I_Schedgline.SchedLineStscDeliveryDate, 
     I_Schedgline.ScheduleLineDeliveryTime, 
      @Semantics.unitOfMeasure: true
      _SchedgAgrmtItm.OrderQuantityUnit,     
     @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
     I_Schedgline.ScheduleLineOrderQuantity, 
     I_Schedgline.PurchaseRequisition, 
     I_Schedgline.PurchaseRequisitionItem, 
     @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
     I_Schedgline.RoughGoodsReceiptQty, 
     I_Schedgline.ScheduleLineIsFixed, 
     I_Schedgline.NoOfRemindersOfScheduleLine,
     @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit' 
     I_Schedgline.PrevDelivQtyOfScheduleLine, 
     I_Schedgline.SourceOfCreation,
     /* Associations */
     _SchedgagrmthdrApi01,
     _SchedgAgrmtItmApi01

}
```
