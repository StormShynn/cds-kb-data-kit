---
name: D_PURCHASEORDERCREATED
description: "D Purchase OrderCREATED"
semantic_vi: "View D_PURCHASEORDERCREATED hiển thị dữ liệu đơn đặt hàng được tạo trong hệ thống, có thể được sử dụng để phân tích hoặc báo cáo về đơn đặt hàng mới được tạo."
keywords:
  - "purchase order"
  - "đơn mua hàng"
  - "ekko"
  - "purchase order created"
  - "đơn đặt hàng mới"
  - "sourcing and procurement"
  - "lob:sourcing & procurement"
  - "bo:purchaseorder"
  - "mm-pur-po"
  - "mm-pur-po-2cl"
semantic_en: "The D_PURCHASEORDERCREATED view exposes purchase order data created in the system, which can be used to analyze or report on newly created purchase orders."
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
  - component:MM-PUR-PO-2CL
  - lob:Sourcing & Procurement
  - bo:PurchaseOrder
---
# D_PURCHASEORDERCREATED

**D Purchase OrderCREATED**

| Property | Value |
|---|---|
| App Component | `MM-PUR-PO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchaseOrderType` |  | |  | `vdm_esart` |  |  |
| `PurchasingOrganization` |  | |  | `ekorg` |  |  |
| `PurchasingGroup` |  | |  | `ekgrp` |  |  |
| `Supplier` |  | |  | `vdm_supplierref` |  |  |

## Source Code

```abap
@EndUserText.label: 'Purchase Order Created'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]

define abstract entity D_PurchaseOrderCreated 
{
   PurchaseOrderType : vdm_esart;
   PurchasingOrganization: ekorg;
   PurchasingGroup : ekgrp;
   Supplier : vdm_supplierref;
}
```
