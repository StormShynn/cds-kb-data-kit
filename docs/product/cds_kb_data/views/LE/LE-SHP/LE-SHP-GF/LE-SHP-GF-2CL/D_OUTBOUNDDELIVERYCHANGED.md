---
name: D_OUTBOUNDDELIVERYCHANGED
description: "D Outbound DeliveryCHANGED"
semantic_vi: "View D Outbound Delivery CHANGED hiển thị dữ liệu kinh doanh thực tế liên quan đến việc thay đổi đơn hàng xuất đi, có thể được sử dụng để theo dõi và phân tích các thay đổi được thực hiện trên tài liệu giao hàng trong thành phần Logistics Execution."
keywords:
  - "outbound delivery"
  - "đơn hàng xuất đi"
  - "delivery document"
  - "logistics execution"
  - "sap cds view"
  - "cds view"
  - "delivery changed"
  - "đơn hàng thay đổi"
  - "sap logistics"
  - "ekko"
semantic_en: "The D Outbound Delivery CHANGED view exposes real-world business data related to changed outbound deliveries, which can be used to track and analyze changes made to delivery documents in the Logistics Execution component."
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
  - component:LE-SHP-GF-2CL
  - lob:Logistics Execution
---
# D_OUTBOUNDDELIVERYCHANGED

**D Outbound DeliveryCHANGED**

| Property | Value |
|---|---|
| App Component | `LE-SHP-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DeliveryDocumentType` |  | |  | `lfart` |  |  |
| `SalesOrganization` |  | |  | `vkorg` |  |  |
| `SDDocumentCategory` |  | |  | `vbtypl` |  |  |

## Source Code

```abap
@EndUserText.label: 'Outbound Delivery Changed'
@ObjectModel.sapObjectNodeType.name: 'OutboundDelivery'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@VDM.usage.type: [#EVENT_SIGNATURE]
define abstract entity D_OutboundDeliveryChanged
{
      DeliveryDocumentType : lfart;
      SalesOrganization    : vkorg;
      SDDocumentCategory   : vbtypl;
}
```
