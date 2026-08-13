---
name: D_FREIGHTORDERCREATEFORDELIVP
description: "D Freightordercreatefordelivp"
semantic_vi: "View D_FREIGHTORDERCREATEFORDELIVP hiển thị dữ liệu đơn hàng vận tải cho kế hoạch giao hàng, thường được sử dụng khi tạo hoặc quản lý đơn hàng vận chuyển trong thành phần TM-FRM-2CL."
keywords:
  - "freight order"
  - "đơn hàng vận tải"
  - "transportation order"
  - "tm-frm-2cl"
  - "delivery planning"
  - "scheduling"
  - "shipping"
  - "giao hàng"
  - "vận chuyển"
semantic_en: "The D_FREIGHTORDERCREATEFORDELIVP CDS view exposes freight order data for delivery planning, typically used when creating or managing transportation orders in the TM-FRM-2CL component."
app_component: TM-FRM-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-FRM
  - freight
  - component:TM-FRM-2CL
  - lob:Other
---
# D_FREIGHTORDERCREATEFORDELIVP

**D Freightordercreatefordelivp**

| Property | Value |
|---|---|
| App Component | `TM-FRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TransportationOrderType` |  | |  | `/scmtms/tor_type` |  |  |

## Source Code

```abap
@VDM.usage.type:[#ACTION_PARAMETER_STRUCTURE]
@EndUserText.label: 'FreightOrderCreateForDeliv Act Param'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define root abstract entity D_FreightOrderCreateForDelivP
{
  TransportationOrderType : /scmtms/tor_type; 
  _FreightBookingItems    : association [0..*] to D_FreightOrdCrteForDelivItmP on 1 = 0; 
}
```
