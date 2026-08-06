---
name: I_SUPLRQTNSCHEDULELINE_API01
description: SUPLRQTNSchedule Line Api 01
app_component: MM-PUR-RFQ-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-RFQ
  - interface-view
  - schedule-line
  - component:MM-PUR-RFQ-2CL
  - lob:Sourcing & Procurement
---
# I_SUPLRQTNSCHEDULELINE_API01

**SUPLRQTNSchedule Line Api 01**

| Property | Value |
|---|---|
| App Component | `MM-PUR-RFQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SupplierQuotation` | `I_SuplrQtnScheduleLine.SupplierQuotation` |
| key `SupplierQuotationItem` | `I_SuplrQtnScheduleLine.SupplierQuotationItem` |
| key `ScheduleLine` | `I_SuplrQtnScheduleLine.ScheduleLine` |
| `DelivDateCategory` | `I_SuplrQtnScheduleLine.DelivDateCategory` |
| `ScheduleLineDeliveryDate` | `I_SuplrQtnScheduleLine.ScheduleLineDeliveryDate` |
| `SchedLineStscDeliveryDate` | `I_SuplrQtnScheduleLine.SchedLineStscDeliveryDate` |
| `ScheduleLineDeliveryTime` | `I_SuplrQtnScheduleLine.ScheduleLineDeliveryTime` |
| `ScheduleLineOrderQuantity` | `I_SuplrQtnScheduleLine.ScheduleLineOrderQuantity` |
| `RoughGoodsReceiptQty` | `I_SuplrQtnScheduleLine.RoughGoodsReceiptQty` |
| `AwardedQuantity` | `I_SuplrQtnScheduleLine.AwardedQuantity` |
| `OrderQuantityUnit` | `I_SuplrQtnScheduleLine.OrderQuantityUnit` |
| `_SupplierQuotation` | *Association* |
| `_SupplierQuotationItem` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SupplierQuotation` | `I_SupplierQuotation_Api01` | [1..1] |
| `_SupplierQuotationItem` | `I_SupplierQuotationItem_Api01` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMMQTNSLINEAPI01'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #L
@EndUserText.label: 'Schedule Line in Supplier Quotation Item'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE, 
                                     #CDS_MODELING_DATA_SOURCE, 
                                     #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #NONE
   
define view I_SuplrQtnScheduleLine_Api01 as select from I_SuplrQtnScheduleLine           


 association [1..1] to I_SupplierQuotation_Api01     as _SupplierQuotation on $projection.SupplierQuotation = _SupplierQuotation.SupplierQuotation
 
 association [1..1] to I_SupplierQuotationItem_Api01 as _SupplierQuotationItem on $projection.SupplierQuotation      = _SupplierQuotationItem.SupplierQuotation and
                                                                                  $projection.SupplierQuotationItem  = _SupplierQuotationItem.SupplierQuotationItem    

{ 
    key I_SuplrQtnScheduleLine.SupplierQuotation, 
    key I_SuplrQtnScheduleLine.SupplierQuotationItem,
    key I_SuplrQtnScheduleLine.ScheduleLine,
     
    I_SuplrQtnScheduleLine.DelivDateCategory, 
    I_SuplrQtnScheduleLine.ScheduleLineDeliveryDate, 
    I_SuplrQtnScheduleLine.SchedLineStscDeliveryDate, 
    I_SuplrQtnScheduleLine.ScheduleLineDeliveryTime, 
    @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit' 
    I_SuplrQtnScheduleLine.ScheduleLineOrderQuantity, 
    @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit' 
    I_SuplrQtnScheduleLine.RoughGoodsReceiptQty,
    @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit' 
    I_SuplrQtnScheduleLine.AwardedQuantity,
    I_SuplrQtnScheduleLine.OrderQuantityUnit,

 /*Association*/
 _SupplierQuotation,
 _SupplierQuotationItem
 
} where ScheduleLine = '0001'
```
