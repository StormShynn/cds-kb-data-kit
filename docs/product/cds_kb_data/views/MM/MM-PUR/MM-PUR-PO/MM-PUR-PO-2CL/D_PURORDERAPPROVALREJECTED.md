---
name: D_PURORDERAPPROVALREJECTED
description: "D Purorderapprovalrejected"
semantic_vi: "View D_PURORDERAPPROVALREJECTED hiển thị dữ liệu xét duyệt đơn mua hàng bị từ chối, có thể được sử dụng để phân tích hoặc báo cáo về đơn mua hàng không được xét duyệt."
keywords:
  - "purchase order"
  - "đơn mua hàng"
  - "approval"
  - "rejected"
  - "purchase order approval"
  - "đơn mua hàng xét duyệt"
  - "sourcing & procurement"
  - "mm-pur-po-2cl"
  - "sap mm"
  - "cds view"
semantic_en: "The D_PURORDERAPPROVALREJECTED CDS view exposes rejected purchase order approval data, which can be used to analyze or report on purchase orders that were not approved."
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
  - approval
  - component:MM-PUR-PO-2CL
  - lob:Sourcing & Procurement
---
# D_PURORDERAPPROVALREJECTED

**D Purorderapprovalrejected**

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
@EndUserText.label: 'Purchase Order Rejected'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]

define abstract entity D_PurOrderApprovalRejected 
{
   PurchaseOrderType : vdm_esart;
   PurchasingOrganization: ekorg;
   PurchasingGroup : ekgrp;
   Supplier : vdm_supplierref; 
}
```
