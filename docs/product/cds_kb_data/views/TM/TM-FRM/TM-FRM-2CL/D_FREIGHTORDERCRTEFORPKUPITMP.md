---
name: D_FREIGHTORDERCRTEFORPKUPITMP
description: "D Freightordercrteforpkupitmp"
semantic_vi: "View D Freightordercrteforpkupitmp hiển thị dữ liệu tạo đơn hàng vận chuyển cho các mặt hàng lấy hàng, có thể sử dụng khi quản lý đơn hàng vận chuyển trong thành phần TM-FRM-2CL."
keywords:
  - "freight order"
  - "đơn hàng vận chuyển"
  - "tm-frm-2cl"
  - "freight booking item"
  - "sản phẩm lấy hàng"
  - "vận chuyển"
  - "đơn hàng"
  - "tm"
semantic_en: "The D Freightordercrteforpkupitmp view exposes freight order creation data for pickup items, which can be used when managing freight orders in the TM-FRM-2CL component."
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
# D_FREIGHTORDERCRTEFORPKUPITMP

**D Freightordercrteforpkupitmp**

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
@EndUserText.label: 'FreightOrderCrteForPkup Item Parameter'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define root abstract entity D_FreightOrderCrteForPkupItmP 
{
    FreightBookingItemUUID  : /scmtms/vdm_frt_bkg_item_uuid;
}
```
