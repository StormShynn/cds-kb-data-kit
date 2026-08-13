---
name: D_FREIGHTBOOKINGCANCELED
description: "D Freightbookingcanceled"
semantic_vi: "View D_FREIGHTBOOKINGCANCELED hiển thị dữ liệu đặt hàng vận chuyển bị hủy bỏ, có thể được sử dụng để lấy thông tin về các đơn hàng vận chuyển bị hủy bỏ."
keywords:
  - "freight booking"
  - "đặt hàng vận chuyển"
  - "canceled"
  - "transportation order"
  - "đơn hàng vận chuyển"
  - "tm-frm"
  - "tm"
  - "freight"
  - "carrier"
  - "ekko"
semantic_en: "The D_FREIGHTBOOKINGCANCELED view exposes canceled freight bookings data, which can be used to retrieve information about canceled transportation orders."
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
# D_FREIGHTBOOKINGCANCELED

**D Freightbookingcanceled**

| Property | Value |
|---|---|
| App Component | `TM-FRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TransportationOrder` |  | |  | `/scmtms/tor_id` |  |  |
| `TransportationOrderType` |  | |  | `/scmtms/tor_type` |  |  |
| `TransportationMode` |  | |  | `/scmtms/trmodcode` |  |  |
| `TransportationShippingType` |  | |  | `/scmtms/shipping_type` |  |  |
| `Carrier` |  | |  | `/scmtms/pty_carrier` |  |  |
| `TranspPurgOrgExtID` |  | |  | `/scmtms/vdm_pur_org_ext_id` |  |  |

## Source Code

```abap
@ObjectModel.sapObjectNodeType.name: 'FreightBooking'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_FreightBookingCanceled
{

  TransportationOrder        : /scmtms/tor_id;
  TransportationOrderType    : /scmtms/tor_type;
  TransportationMode         : /scmtms/trmodcode;
  TransportationShippingType : /scmtms/shipping_type;
  Carrier                    : /scmtms/pty_carrier;
  TranspPurgOrgExtID         : /scmtms/vdm_pur_org_ext_id;

}
```
