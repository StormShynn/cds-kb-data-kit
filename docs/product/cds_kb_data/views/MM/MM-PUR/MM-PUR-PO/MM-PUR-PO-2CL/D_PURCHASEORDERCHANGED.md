---
name: D_PURCHASEORDERCHANGED
description: "D Purchase OrderCHANGED"
semantic_vi: "View D_PURCHASEORDERCHANGED hiển thị dữ liệu thay đổi đơn đặt hàng mua, có thể được sử dụng để theo dõi các thay đổi được thực hiện trên đơn đặt hàng mua trong hệ thống SAP."
keywords:
  - "purchase order"
  - "đơn mua hàng"
  - "ekko"
  - "purchase order change"
  - "đơn đặt hàng mua thay đổi"
  - "sap mm"
  - "mm-pur-po"
  - "sourcing and procurement"
  - "purchase order tracking"
semantic_en: "The D_PURCHASEORDERCHANGED CDS view exposes purchase order change data, which can be used to track changes made to purchase orders in the SAP system."
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
# D_PURCHASEORDERCHANGED

**D Purchase OrderCHANGED**

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
@EndUserText.label: 'Purchase Order Changed'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]

define abstract entity D_PurchaseOrderChanged
{
   PurchaseOrderType : vdm_esart;
   PurchasingOrganization: ekorg;
   PurchasingGroup : ekgrp;
   Supplier : vdm_supplierref; 
}
```
