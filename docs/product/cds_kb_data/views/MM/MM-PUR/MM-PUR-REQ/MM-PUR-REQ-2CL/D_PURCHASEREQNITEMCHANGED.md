---
name: D_PURCHASEREQNITEMCHANGED
description: "D Purchase RequisitionNITEMCHANGED"
semantic_vi: "View D_PURCHASEREQNITEMCHANGED hiển thị các thay đổi của đơn đặt hàng yêu cầu mua hàng, cung cấp các trường khóa chính để xác định đơn đặt hàng yêu cầu mua hàng bị ảnh hưởng. Nó được sử dụng để theo dõi và phân tích các thay đổi của đơn đặt hàng yêu cầu mua hàng."
keywords:
  - "purchase requisition"
  - "đơn đặt hàng yêu cầu mua hàng"
  - "purchase requisition item"
  - "đơn đặt hàng yêu cầu mua hàng chi tiết"
  - "change"
  - "thay đổi"
  - "sap mm"
  - "mm-pur-req"
  - "ekko"
  - "purchase order"
  - "đơn mua hàng"
  - "sourcing & procurement"
semantic_en: "The D_PURCHASEREQNITEMCHANGED CDS view exposes purchase requisition item changes, providing key fields for identifying affected purchase requisitions. It is used to track and analyze changes to purchase requisition items."
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
# D_PURCHASEREQNITEMCHANGED

**D Purchase RequisitionNITEMCHANGED**

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
@EndUserText.label: 'Purchase Requisition Item Changed'
@Event: { description: 'This event is raised when a purchase requisition item instance has been Changed',
          implementedBy:['ABAP:RAP_EVENT']}
//@Event.sapObjectNodeTypeKey:[{element:'PurchaseRequisition'},
//                            {element:'PurchaseRequisitionItem'}]   
@ObjectModel.sapObjectNodeType.name: 'PurchaseRequisitionItem'  
@ObjectModel.supportedCapabilities:[#DATA_STRUCTURE]                                 
@VDM.usage.type: [#EVENT_SIGNATURE]
define abstract entity D_PurchaseReqnItemChanged
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
