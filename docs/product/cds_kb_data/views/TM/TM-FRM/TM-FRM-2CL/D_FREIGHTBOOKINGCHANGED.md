---
name: D_FREIGHTBOOKINGCHANGED
description: "D Freightbookingchanged"
semantic_vi: "View D_FREIGHTBOOKINGCHANGED hiển thị các thay đổi trong việc đặt hàng vận tải liên quan đến đơn hàng vận chuyển, cung cấp dữ liệu về khi và cách những thay đổi này xảy ra. Nó được sử dụng để theo dõi và phân tích các thay đổi trong việc đặt hàng vận tải."
keywords:
  - "freight booking"
  - "transportation order"
  - "đơn hàng vận chuyển"
  - "thay đổi đặt hàng vận tải"
  - "sap tm"
  - "tm-frm-2cl"
  - "vận tải"
  - "đặt hàng"
semantic_en: "The D_FREIGHTBOOKINGCHANGED view exposes freight booking changes related to transportation orders, providing data on when and how these changes occur. It is used to track and analyze changes in freight bookings."
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
# D_FREIGHTBOOKINGCHANGED

**D Freightbookingchanged**

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
define abstract entity D_FreightBookingChanged
{

  TransportationOrder        : /scmtms/tor_id;
  TransportationOrderType    : /scmtms/tor_type;
  TransportationMode         : /scmtms/trmodcode;
  TransportationShippingType : /scmtms/shipping_type;
  Carrier                    : /scmtms/pty_carrier;
  TranspPurgOrgExtID         : /scmtms/vdm_pur_org_ext_id;

}
```
