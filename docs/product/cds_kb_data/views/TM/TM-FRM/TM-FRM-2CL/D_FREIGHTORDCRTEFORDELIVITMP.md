---
name: D_FREIGHTORDCRTEFORDELIVITMP
description: "D Freightordcrtefordelivitmp"
semantic_vi: "View D_FREIGHTORDCRTEFORDELIVITMP hiển thị dữ liệu tạo đơn hàng vận chuyển cho các mặt hàng giao hàng, có thể được sử dụng để quản lý đơn hàng vận chuyển trong quản lý vận tải."
keywords:
  - "freight"
  - "order"
  - "delivery"
  - "item"
  - "transportation"
  - "management"
  - "tm"
  - "freight order"
  - "đơn hàng vận chuyển"
  - "sản phẩm giao hàng"
semantic_en: "The D_FREIGHTORDCRTEFORDELIVITMP view exposes freight order creation data for delivery items, which can be used to manage freight orders in transportation management."
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
# D_FREIGHTORDCRTEFORDELIVITMP

**D Freightordcrtefordelivitmp**

| Property | Value |
|---|---|
| App Component | `TM-FRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FreightBookingItemUUID` |  | |  | `/scmtms/vdm_frt_bkg_item_uuid` |  |  |

## Source Code

```abap
@VDM.usage.type:[#ACTION_PARAMETER_STRUCTURE]
@EndUserText.label: 'FreightOrdCrteForDelivItmP Act Param'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define root abstract entity D_FreightOrdCrteForDelivItmP 
{
    FreightBookingItemUUID  : /scmtms/vdm_frt_bkg_item_uuid;
}
```
