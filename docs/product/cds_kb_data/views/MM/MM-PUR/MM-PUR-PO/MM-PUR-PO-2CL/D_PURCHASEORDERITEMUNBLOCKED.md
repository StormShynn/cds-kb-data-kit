---
name: D_PURCHASEORDERITEMUNBLOCKED
description: "D Purchase OrderITEMUNBLOCKED"
semantic_vi: "View D_PURCHASEORDERITEMUNBLOCKED hiển thị các mục đơn đặt hàng không bị chặn trong SAP, có thể sử dụng để lấy các mục không bị chặn cho việc mua hàng hoặc các quy trình kinh doanh khác."
keywords:
  - "purchase order"
  - "đơn mua hàng"
  - "ekko"
  - "unblocked"
  - "purchase order item"
  - "mục đơn đặt hàng"
  - "sourcing & procurement"
  - "lob:sourcing & procurement"
  - "bo:purchaseorder"
  - "mm-pur-po-2cl"
semantic_en: "The D_PURCHASEORDERITEMUNBLOCKED view exposes unblocked purchase order items in SAP, which can be used to retrieve items that are not blocked for purchasing or other business processes."
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
# D_PURCHASEORDERITEMUNBLOCKED

**D Purchase OrderITEMUNBLOCKED**

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
@EndUserText.label: 'Purchase Order Item Block Removed'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]

define abstract entity D_PurchaseOrderItemUnblocked
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
