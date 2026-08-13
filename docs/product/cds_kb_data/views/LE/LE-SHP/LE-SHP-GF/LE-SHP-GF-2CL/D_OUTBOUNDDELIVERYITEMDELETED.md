---
name: D_OUTBOUNDDELIVERYITEMDELETED
description: "D Outbound DeliveryITEMDELETED"
semantic_vi: "View D Outbound Delivery ITEM DELETED hiển thị các mặt hàng xuất kho đã bị xóa trong Logistics Execution của SAP, cho phép bạn theo dõi và quản lý các thay đổi ở mức mặt hàng."
keywords:
  - "outbound delivery"
  - "đơn xuất hàng"
  - "sap logistics execution"
  - "item deletion"
  - "xóa mặt hàng"
  - "delivery item"
  - "đơn hàng xuất"
  - "ekko"
  - "logistics execution"
  - "sddocumentcategory"
  - "deliverydocumenttype"
semantic_en: "The D Outbound Delivery ITEM DELETED view exposes deleted outbound delivery items in SAP Logistics Execution, allowing you to track and manage item-level changes."
app_component: LE-SHP-GF-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LE
  - LE-SHP
  - LE-SHP-GF
  - delivery
  - item-level
  - component:LE-SHP-GF-2CL
  - lob:Logistics Execution
---
# D_OUTBOUNDDELIVERYITEMDELETED

**D Outbound DeliveryITEMDELETED**

| Property | Value |
|---|---|
| App Component | `LE-SHP-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DocumentItemNumber` |  | |  | `posnr` |  |  |
| `OutboundDeliveryItem` |  | |  | `outbound_delivery_item` |  |  |
| `DeliveryDocumentType` |  | |  | `lfart` |  |  |
| `SalesOrganization` |  | |  | `vkorg` |  |  |
| `SDDocumentCategory` |  | |  | `vbtypl` |  |  |

## Source Code

```abap
@EndUserText.label: 'Outbound Delivery Item Deleted'
@ObjectModel.sapObjectNodeType.name: 'OutboundDeliveryItem'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Event.sapObjectNodeTypeKey:[{element:'OutboundDelivery'}, {element:'OutboundDeliveryItem'}]
@VDM.usage.type: [#EVENT_SIGNATURE]
define abstract entity D_OutboundDeliveryItemDeleted
{
      DocumentItemNumber          : posnr;
      OutboundDeliveryItem        : outbound_delivery_item;
      DeliveryDocumentType        : lfart;
      SalesOrganization           : vkorg;
      SDDocumentCategory          : vbtypl;      
}
```
