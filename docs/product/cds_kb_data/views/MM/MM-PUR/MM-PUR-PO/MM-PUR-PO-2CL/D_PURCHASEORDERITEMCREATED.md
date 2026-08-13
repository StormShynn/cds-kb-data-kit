---
name: D_PURCHASEORDERITEMCREATED
description: "D Purchase OrderITEMCREATED"
semantic_vi: "View này hiển thị dữ liệu đơn đặt hàng chi tiết đã được tạo, cung cấp thông tin về các chi tiết đơn đặt hàng. Nó có thể được sử dụng khi phân tích hoặc báo cáo về các chi tiết đơn đặt hàng đã được tạo mới."
keywords:
  - "purchase order"
  - "đơn mua hàng"
  - "ekko"
  - "purchase order item"
  - "đơn đặt hàng chi tiết"
  - "cds view"
  - "view"
  - "mm-pur-po-2cl"
  - "sourcing & procurement"
  - "purchase order type"
  - "purchasing organization"
  - "purchasing group"
semantic_en: "This view exposes purchase order item data that has been created, providing information on items within a purchase order. It can be used when analyzing or reporting on purchase order items that have been newly created."
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
# D_PURCHASEORDERITEMCREATED

**D Purchase OrderITEMCREATED**

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
@EndUserText.label: 'Purchase Order Item Created'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]

define abstract entity D_PurchaseOrderItemCreated
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
