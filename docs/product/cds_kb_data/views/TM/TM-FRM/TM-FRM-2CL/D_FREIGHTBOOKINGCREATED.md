---
name: D_FREIGHTBOOKINGCREATED
description: "D Freightbookingcreated"
semantic_vi: "View D Freightbookingcreated hiển thị dữ liệu đặt hàng vận tải được tạo trong hệ thống quản lý vận tải, cho phép các nhà phát triển truy cập và xử lý các đơn đặt hàng vận tải mới được tạo."
keywords:
  - "freight booking"
  - "đặt hàng vận tải"
  - "transportation management"
  - "tm"
  - "freight"
  - "booking"
  - "transportation order"
  - "transportation management system"
  - "tm-frm-2cl"
semantic_en: "The D Freightbookingcreated view exposes freight booking data created in the Transportation Management system, allowing developers to access and process newly created freight bookings."
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
# D_FREIGHTBOOKINGCREATED

**D Freightbookingcreated**

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
define abstract entity D_FreightBookingCreated
{

  TransportationOrder        : /scmtms/tor_id;
  TransportationOrderType    : /scmtms/tor_type;
  TransportationMode         : /scmtms/trmodcode;
  TransportationShippingType : /scmtms/shipping_type;
  Carrier                    : /scmtms/pty_carrier;
  TranspPurgOrgExtID         : /scmtms/vdm_pur_org_ext_id;

}
```
