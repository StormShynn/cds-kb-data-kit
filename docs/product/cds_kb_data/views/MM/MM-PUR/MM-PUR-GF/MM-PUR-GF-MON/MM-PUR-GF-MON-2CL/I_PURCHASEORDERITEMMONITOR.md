---
name: I_PURCHASEORDERITEMMONITOR
description: "Purchase OrderITEMMONITOR"
app_component: MM-PUR-GF-MON-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: yes
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-GF
  - interface-view
  - purchase-order
  - item-level
  - component:MM-PUR-GF-MON-2CL
  - lob:Sourcing & Procurement
  - bo:PurchaseOrder
---
# I_PURCHASEORDERITEMMONITOR

**Purchase OrderITEMMONITOR**

| Property | Value |
|---|---|
| App Component | `MM-PUR-GF-MON-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | Yes — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchaseOrder` | ✓ | |  |  |  |  |
| `PurchaseOrderItem` | ✓ | |  |  |  |  |
| `PurchaseOrderQuantityUnit` |  | |  |  |  |  |
| `DocumentCurrency` |  | |  |  |  |  |
| `ScheduleLineDeliveryDate` |  | |  | `cast(ScheduleLineDeliveryDate as mm_pur_next_sched_line_date)` |  |  |
| `ScheduleLineOpenQty` |  | |  | `cast(ScheduleLineOpenQty as mm_pur_next_sched_line_qty)` |  |  |
| `GoodsReceiptQty` |  | |  |  |  |  |
| `GoodsReceiptAmountInCoCodeCrcy` |  | |  |  |  |  |
| `StillToBeDeliveredQuantity` |  | |  |  |  |  |
| `StillToBeDeliveredValue` |  | |  |  |  |  |
| `InvoiceReceiptQty` |  | |  |  |  |  |
| `InvoiceReceiptAmount` |  | |  |  |  |  |
| `StillToInvoiceQuantity` |  | |  |  |  |  |
| `StillToInvoiceValue` |  | |  |  |  |  |
| `IsCompleted` |  | |  | `cast(IsCompleted as mm_pur_is_completed)` |  |  |
| `_PurchaseOrder` | | ✓ | | | | |
| `_PurOrdScheduleLine` | | ✓ | | | | |
| `_PurchaseOrderItem` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PurchaseOrder` | `I_PurchaseOrderAPI01` | [1..1] |
| `_PurOrdScheduleLine` | `I_PurOrdScheduleLineAPI01` | [1..*] |
| `_PurchaseOrderItem` | `I_PurchaseOrderItemAPI01` | [1..1] |
| `_PurchaseOrderExtension` | `E_PurchasingDocument` | [1..1] |
| `_PurchaseOrderItemExtension` | `E_PurchasingDocumentItem` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AbapCatalog.extensibility.extensible: true
@AbapCatalog.extensibility.elementSuffix: 'PDI'
@EndUserText.label: 'Purchase Order Item Monitor'
@VDM.viewType : #COMPOSITE
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Metadata.ignorePropagatedAnnotations:true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]

define view entity I_PurchaseOrderItemMonitor
  as select from P_PurchaseOrderItemMonitor as POItem

  association [1..1] to I_PurchaseOrderAPI01      as _PurchaseOrder              on  $projection.PurchaseOrder = _PurchaseOrder.PurchaseOrder

  association [1..*] to I_PurOrdScheduleLineAPI01 as _PurOrdScheduleLine         on  _PurOrdScheduleLine.PurchaseOrder     = $projection.PurchaseOrder
                                                                                 and _PurOrdScheduleLine.PurchaseOrderItem = $projection.PurchaseOrderItem
  association [1..1] to I_PurchaseOrderItemAPI01  as _PurchaseOrderItem          on  _PurchaseOrderItem.PurchaseOrder     = $projection.PurchaseOrder
                                                                                 and _PurchaseOrderItem.PurchaseOrderItem = $projection.PurchaseOrderItem
  --Extension Association
  association [1..1] to E_PurchasingDocument      as _PurchaseOrderExtension     on  $projection.PurchaseOrder = _PurchaseOrderExtension.PurchasingDocument


  ----Extension Association
  association [1..1] to E_PurchasingDocumentItem  as _PurchaseOrderItemExtension on  $projection.PurchaseOrder     = _PurchaseOrderItemExtension.PurchasingDocument
                                                                                 and $projection.PurchaseOrderItem = _PurchaseOrderItemExtension.PurchasingDocumentItem
{
      
  key PurchaseOrder,

  key PurchaseOrderItem,

      PurchaseOrderQuantityUnit,

      DocumentCurrency,

      @EndUserText.quickInfo: 'Next Schedule Line Date'
      cast(ScheduleLineDeliveryDate as mm_pur_next_sched_line_date) as ScheduleLineDeliveryDate,

      @EndUserText.label: 'Next Schedule Line Quantity'
      @Semantics.quantity.unitOfMeasure: 'PurchaseOrderQuantityUnit'
      cast(ScheduleLineOpenQty as mm_pur_next_sched_line_qty)       as ScheduleLineOpenQty,

      @EndUserText.label: 'Delivered Quantity'
      @Semantics.quantity.unitOfMeasure: 'PurchaseOrderQuantityUnit'
      GoodsReceiptQty,

      @EndUserText.label: 'Delivered Value'
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      GoodsReceiptAmountInCoCodeCrcy,

      @EndUserText.label: 'Quantity to be Delivered'
      @Semantics.quantity.unitOfMeasure: 'PurchaseOrderQuantityUnit'
      StillToBeDeliveredQuantity,

      @EndUserText.label: 'Value to be Delivered'
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      StillToBeDeliveredValue,

      @EndUserText.label: 'Invoiced Quantity'
      @Semantics.quantity.unitOfMeasure: 'PurchaseOrderQuantityUnit'
      InvoiceReceiptQty,

      @EndUserText.label: 'Invoiced Value'
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      InvoiceReceiptAmount,

      @EndUserText.label: 'Quantity to be Invoiced'
      @Semantics.quantity.unitOfMeasure: 'PurchaseOrderQuantityUnit'
      StillToInvoiceQuantity,

      @EndUserText.label: 'Value to be Invoiced'
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      StillToInvoiceValue,

      @EndUserText.label: 'Fully Delivered & Invoiced'
      cast(IsCompleted as mm_pur_is_completed)                      as IsCompleted,

      _PurchaseOrder,

      _PurchaseOrderItem,

      _PurOrdScheduleLine

}
```
