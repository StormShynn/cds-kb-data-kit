---
name: D_PURCHASEREQNITEMCREATED
description: "D Purchase RequisitionNITEMCREATED"
semantic_vi: "View D_PURCHASEREQNITEMCREATED hiển thị dữ liệu yêu cầu mua hàng chi tiết, cụ thể khi một chi tiết được tạo. Nó cung cấp các trường khóa chính để lọc và kết nối với dữ liệu khác."
keywords:
  - "purchase requisition"
  - "yêu cầu mua hàng"
  - "purchase requisition item"
  - "chi tiết yêu cầu mua hàng"
  - "created"
  - "tạo"
  - "sap mm"
  - "mm-pur-req-2cl"
  - "sourcing & procurement"
  - "lob:sourcing & procurement"
  - "purchase requisition type"
  - "purchasing document item category"
semantic_en: "The D_PURCHASEREQNITEMCREATED CDS view exposes purchase requisition item data, specifically when an item is created. It provides key fields for filtering and joining with other data."
app_component: MM-PUR-REQ-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-REQ
  - purchase-requisition
  - item-level
  - component:MM-PUR-REQ-2CL
  - lob:Sourcing & Procurement
---
# D_PURCHASEREQNITEMCREATED

**D Purchase RequisitionNITEMCREATED**

| Property | Value |
|---|---|
| App Component | `MM-PUR-REQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchaseRequisitionType` |  | |  | `bbsrt` |  |  |
| `PurchasingDocumentItemCategory` |  | |  | `pstyp` |  |  |
| `MaterialGroup` |  | |  | `matkl` |  |  |
| `PurchasingOrganization` |  | |  | `ekorg` |  |  |
| `PurchasingGroup` |  | |  | `ekgrp` |  |  |
| `Plant` |  | |  | `ewerk` |  |  |

## Source Code

```abap
@EndUserText.label: 'Purchase Requisition Item Created'
@Event: { description: 'This event is raised when a purchase requisition item instance has been Created',
          implementedBy:['ABAP:RAP_EVENT']}
//@Event.sapObjectNodeTypeKey:[{element:'PurchaseRequisition'},
//                            {element:'PurchaseRequisitionItem'}]     
@ObjectModel.sapObjectNodeType.name: 'PurchaseRequisitionItem'       
@ObjectModel.supportedCapabilities:[#DATA_STRUCTURE]                              
@VDM.usage.type: [#EVENT_SIGNATURE]
define abstract entity D_PurchaseReqnItemCreated
{
//  PurchaseRequisitionItem        : vdm_purchaserequisitionitem;
  PurchaseRequisitionType        : bbsrt;
  PurchasingDocumentItemCategory : pstyp;
  MaterialGroup                  : matkl;  
  PurchasingOrganization         : ekorg;
  PurchasingGroup                : ekgrp;
  Plant                          : ewerk;
}
```
