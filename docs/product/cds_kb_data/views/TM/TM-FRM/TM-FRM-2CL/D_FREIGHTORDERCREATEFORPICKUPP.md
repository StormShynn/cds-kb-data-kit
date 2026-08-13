---
name: D_FREIGHTORDERCREATEFORPICKUPP
description: "D Freightordercreateforpickupp"
semantic_vi: "View D_FREIGHTORDERCREATEFORPICKUPP hiển thị dữ liệu đơn hàng vận chuyển cho lấy hàng, có thể sử dụng khi tạo hoặc quản lý đơn hàng vận chuyển cho lấy hàng."
keywords:
  - "freight order"
  - "đơn hàng vận chuyển"
  - "transportation order"
  - "đơn vận chuyển"
  - "pickup"
  - "lấy hàng"
  - "sap tm"
  - "sap tm-frm"
  - "sap freight management"
semantic_en: "The D_FREIGHTORDERCREATEFORPICKUPP view exposes freight order data for pickup, which can be used when creating or managing freight orders for pickup."
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
# D_FREIGHTORDERCREATEFORPICKUPP

**D Freightordercreateforpickupp**

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
@EndUserText.label: 'FreightOrderCreateForPickup Action Param'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define root abstract entity D_FreightOrderCreateForPickupP
{
  TransportationOrderType : /scmtms/tor_type;  
  _FreightBookingItems    : association [0..*] to D_FreightOrderCrteForPkupItmP on 1 = 0; 
}
```
