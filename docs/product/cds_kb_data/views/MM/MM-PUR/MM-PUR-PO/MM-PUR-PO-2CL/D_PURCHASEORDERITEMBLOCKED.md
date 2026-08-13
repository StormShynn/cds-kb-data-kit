---
name: D_PURCHASEORDERITEMBLOCKED
description: "D Purchase OrderITEMBLOCKED"
semantic_vi: "View D_PURCHASEORDERITEMBLOCKED hiển thị dữ liệu chặn đơn đặt hàng hàng hóa, có liên quan khi quản lý đơn đặt hàng có hàng hóa bị chặn."
keywords:
  - "purchase order"
  - "đơn mua hàng"
  - "ekko"
  - "purchase order item"
  - "chặn đơn đặt hàng"
  - "dữ liệu chặn"
  - "sourcing & procurement"
  - "lob:sourcing & procurement"
  - "bo:purchaseorder"
  - "mm-pur-po-2cl"
  - "mm-pur-po"
  - "mm-pur"
semantic_en: "The D_PURCHASEORDERITEMBLOCKED view exposes purchase order item blocking data, which is relevant when managing purchase orders with blocked items."
app_component: MM-PUR-PO-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-PO
  - purchase-order
  - item-level
  - component:MM-PUR-PO-2CL
  - lob:Sourcing & Procurement
  - bo:PurchaseOrder
---
# D_PURCHASEORDERITEMBLOCKED

**D Purchase OrderITEMBLOCKED**

| Property | Value |
|---|---|
| App Component | `MM-PUR-PO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchaseOrderType` |  | |  | `bsart` |  |  |
| `PurchasingOrganization` |  | |  | `ekorg` |  |  |
| `PurchasingGroup` |  | |  | `ekgrp` |  |  |
| `Supplier` |  | |  | `lifnr` |  |  |
| `PurchaseOrderItemCategory` |  | |  | `pstyp` |  |  |
| `Plant` |  | |  | `vdm_werks_d` |  |  |
| `Product` |  | |  | `matnr` |  |  |

## Source Code

```abap
@EndUserText.label: 'Purchase Order Item Blocked'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]


define abstract entity D_PurchaseOrderItemBlocked
{
    PurchaseOrderType : bsart;
    PurchasingOrganization : ekorg;
    PurchasingGroup : ekgrp;
    Supplier : lifnr;
    PurchaseOrderItemCategory : pstyp;
    Plant : vdm_werks_d;
    Product : matnr;
    
}
```
