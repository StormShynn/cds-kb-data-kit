---
name: I_SUPLRQTNSCHEDULELINE_API01
description: "SUPLRQTNSchedule Line Api 01"
app_component: MM-PUR-RFQ-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SupplierQuotation` | ✓ | |  |  |  |  |
| `SupplierQuotationItem` | ✓ | |  |  |  |  |
| `ScheduleLine` | ✓ | |  |  |  |  |
| `DelivDateCategory` |  | |  |  |  |  |
| `ScheduleLineDeliveryDate` |  | |  |  |  |  |
| `SchedLineStscDeliveryDate` |  | |  |  |  |  |
| `ScheduleLineDeliveryTime` |  | |  |  |  |  |
| `ScheduleLineOrderQuantity` |  | |  |  |  |  |
| `RoughGoodsReceiptQty` |  | |  |  |  |  |
| `AwardedQuantity` |  | |  |  |  |  |
| `OrderQuantityUnit` |  | |  |  |  |  |
| `_SupplierQuotation` | | ✓ | | | | |
| `_SupplierQuotationItem` | | ✓ | | | | |

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
