---
name: D_OUTBDELIVDELIVBLOCKCHANGED
description: "D Outbdelivdelivblockchanged"
semantic_vi: "View này hiển thị dữ liệu thay đổi trạng thái chặn giao hàng cho các đơn hàng giao hàng ngoài, có thể được sử dụng để theo dõi các thay đổi trong trạng thái chặn giao hàng và lý do."
keywords:
  - "delivery block change"
  - "outbound delivery"
  - "đơn hàng giao hàng ngoài"
  - "trạng thái chặn giao hàng"
  - "lý do chặn giao hàng"
  - "sap logistics execution"
  - "lob logistics execution"
  - "le ship"
  - "le ship gf 2cl"
semantic_en: "This view exposes delivery block change data for outbound deliveries, which can be used to track changes in delivery block status and reasons."
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
  - component:LE-SHP-GF-2CL
  - lob:Logistics Execution
---
# D_OUTBDELIVDELIVBLOCKCHANGED

**D Outbdelivdelivblockchanged**

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
| `DeliveryBlockReason` |  | |  | `lifsk` |  |  |
| `PreviousDeliveryBlockReason` |  | |  | `lifsk` |  |  |
| `SalesOrganization` |  | |  | `vkorg` |  |  |
| `SDDocumentCategory` |  | |  | `vbtypl` |  |  |

## Source Code

```abap
@EndUserText.label: 'Outbound Delivery Delivery Block Changed'
@ObjectModel.sapObjectNodeType.name: 'OutboundDelivery'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@VDM.usage.type: [#EVENT_SIGNATURE]
define abstract entity D_OutbDelivDelivBlockChanged
{
      DeliveryDocumentType        : lfart;

      @Event.qualifiesEventType   : true
      @Event.previousValue.element: 'PreviousDeliveryBlockReason'
      DeliveryBlockReason         : lifsk;

      PreviousDeliveryBlockReason : lifsk;

      SalesOrganization           : vkorg;

      SDDocumentCategory          : vbtypl;
}
```
