---
name: D_PURCHASEORDERITEMCHANGED
description: "D Purchase OrderITEMCHANGED"
semantic_vi: "View D_PURCHASEORDERITEMCHANGED hiển thị dữ liệu thay đổi của đơn đặt hàng vật tư, có thể sử dụng khi phân tích hoặc báo cáo về các thay đổi được thực hiện trên các mục đơn đặt hàng."
keywords:
  - "purchase order"
  - "đơn mua hàng"
  - "ekko"
  - "purchase order item"
  - "đơn đặt hàng vật tư"
  - "cds view"
  - "view d_purchaseorderitemchanged"
  - "mm-pur-po-2cl"
  - "sourcing & procurement"
  - "purchase order item change"
semantic_en: "The D_PURCHASEORDERITEMCHANGED CDS view exposes purchase order item change data, which can be used when analyzing or reporting on changes made to purchase order items."
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
# D_PURCHASEORDERITEMCHANGED

**D Purchase OrderITEMCHANGED**

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
@EndUserText.label: 'Purchase Order Item Changed'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]

define abstract entity D_PurchaseOrderItemChanged
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
