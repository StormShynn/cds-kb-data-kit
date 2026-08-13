---
name: D_OUTBOUNDDELIVERYDELETED
description: "D Outbound DeliveryDELETED"
semantic_vi: "View D Outbound Delivery DELETED hiển thị dữ liệu vận chuyển hàng đi đã bị xóa, có thể được sử dụng để theo dõi và quản lý các tài liệu vận chuyển đã bị xóa trong quá trình thực hiện logistics."
keywords:
  - "outbound delivery"
  - "vận chuyển hàng đi"
  - "logistics execution"
  - "deleted delivery"
  - "đơn vận chuyển đã bị xóa"
  - "sddocumentcategory"
  - "deliverydocumenttype"
  - "salesorganization"
semantic_en: "The D Outbound Delivery DELETED view exposes deleted outbound delivery data, which can be used to track and manage deleted delivery documents in the logistics execution process."
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
# D_OUTBOUNDDELIVERYDELETED

**D Outbound DeliveryDELETED**

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
@EndUserText.label: 'Outbound Delivery Deleted'
@ObjectModel.sapObjectNodeType.name: 'OutboundDelivery'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@VDM.usage.type: [#EVENT_SIGNATURE]
define abstract entity D_OutboundDeliveryDeleted
{
      DeliveryDocumentType : lfart;
      SalesOrganization    : vkorg;
      SDDocumentCategory   : vbtypl;
}
```
