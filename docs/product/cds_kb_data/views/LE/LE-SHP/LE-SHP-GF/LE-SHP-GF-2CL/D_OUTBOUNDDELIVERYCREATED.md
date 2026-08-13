---
name: D_OUTBOUNDDELIVERYCREATED
description: "D Outbound DeliveryCREATED"
semantic_vi: "View D Outbound Delivery CREATED hiển thị dữ liệu về các đơn hàng vận chuyển mới được tạo trong hệ thống SAP, có thể được sử dụng để theo dõi và phân tích hoạt động tạo đơn hàng vận chuyển."
keywords:
  - "outbound delivery"
  - "đơn hàng vận chuyển"
  - "sddocumentcategory"
  - "deliverydocumenttype"
  - "salesorganization"
  - "sap logistics execution"
  - "lob:logistics execution"
  - "le-shp-gf-2cl"
semantic_en: "The D Outbound Delivery CREATED view exposes data about newly created outbound deliveries in the SAP system, which can be used to track and analyze delivery creation activities."
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
# D_OUTBOUNDDELIVERYCREATED

**D Outbound DeliveryCREATED**

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
@EndUserText.label: 'Outbound Delivery Created'
@ObjectModel.sapObjectNodeType.name: 'OutboundDelivery'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@VDM.usage.type: [#EVENT_SIGNATURE]
define abstract entity D_OutboundDeliveryCreated 
{
      DeliveryDocumentType : lfart;
      SalesOrganization    : vkorg;
      SDDocumentCategory   : vbtypl;
}
```
