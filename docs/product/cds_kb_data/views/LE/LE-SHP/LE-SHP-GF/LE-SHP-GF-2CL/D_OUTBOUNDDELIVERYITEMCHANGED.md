---
name: D_OUTBOUNDDELIVERYITEMCHANGED
description: "D Outbound DeliveryITEMCHANGED"
semantic_vi: "View D Outbound Delivery ITEM CHANGED hiển thị dữ liệu kinh doanh thực tế liên quan đến thay đổi trong các mặt hàng giao hàng ngoại tuyến, chẳng hạn như cập nhật số lượng hoặc trạng thái mặt hàng, và được sử dụng khi theo dõi thay đổi trong các mặt hàng giao hàng trong logistics thực thi."
keywords:
  - "outbound delivery"
  - "delivery item"
  - "logistics execution"
  - "lob:logistics execution"
  - "le-shp-gf-2cl"
  - "sap logistics"
  - "đơn giao hàng"
  - "thay đổi mặt hàng"
  - "giải pháp logistics"
semantic_en: "The D Outbound Delivery ITEM CHANGED view exposes real-world business data related to changes in outbound delivery items, such as updates to item quantities or statuses, and is used when tracking changes to delivery items in logistics execution."
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
# D_OUTBOUNDDELIVERYITEMCHANGED

**D Outbound DeliveryITEMCHANGED**

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
@EndUserText.label: 'Outbound Delivery Item Changed'
@ObjectModel.sapObjectNodeType.name: 'OutboundDeliveryItem'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Event.sapObjectNodeTypeKey:[{element:'OutboundDelivery'}, {element:'OutboundDeliveryItem'}]
@VDM.usage.type: [#EVENT_SIGNATURE]
define abstract entity D_OutboundDeliveryItemChanged
{
      DocumentItemNumber   : posnr;
      OutboundDeliveryItem : outbound_delivery_item;
      DeliveryDocumentType : lfart;
      SalesOrganization    : vkorg;
      SDDocumentCategory   : vbtypl;
}
```
