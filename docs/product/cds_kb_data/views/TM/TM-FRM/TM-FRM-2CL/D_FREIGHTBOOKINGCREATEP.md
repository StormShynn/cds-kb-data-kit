---
name: D_FREIGHTBOOKINGCREATEP
description: "D Freightbookingcreatep"
semantic_vi: "View D Freightbookingcreatep hiển thị dữ liệu đơn hàng vận chuyển cho đặt hàng vận tải, có thể sử dụng khi tạo hoặc quản lý đặt hàng vận tải trong thành phần TM-FRM-2CL."
keywords:
  - "freight booking"
  - "đặt hàng vận tải"
  - "transportation order"
  - "đơn hàng vận chuyển"
  - "tm-frm-2cl"
  - "sap"
  - "cds view"
  - "view"
  - "transportation"
  - "freight"
semantic_en: "The D Freightbookingcreatep view exposes transportation order data for freight bookings, which can be used when creating or managing freight bookings in the TM-FRM-2CL component."
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
# D_FREIGHTBOOKINGCREATEP

**D Freightbookingcreatep**

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

## Source Code

```abap
@VDM.usage.type:[#ACTION_PARAMETER_STRUCTURE]
@EndUserText.label: 'CreateFreightBooking Action Parameter'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define root abstract entity D_FreightBookingCreateP
{
  TransportationOrder     : /scmtms/tor_id;
  TransportationOrderType : /scmtms/tor_type;
}
```
