---
name: D_FREIGHTORDERCHANGED
description: "D Freightorderchanged"
semantic_vi: "View D_FREIGHTORDERCHANGED hiển thị dữ liệu thay đổi đơn hàng vận tải, thường được sử dụng khi quản lý đơn hàng vận chuyển và thông tin nhà cung cấp."
keywords:
  - "freight order"
  - "đơn hàng vận tải"
  - "transportation order"
  - "thay đổi đơn hàng"
  - "carrier"
  - "nhà cung cấp"
  - "sap tm"
  - "tm-frm"
  - "transportation mode"
  - "loại hình vận tải"
semantic_en: "The D_FREIGHTORDERCHANGED view exposes freight order change data, typically used when managing transportation orders and carrier information."
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
# D_FREIGHTORDERCHANGED

**D Freightorderchanged**

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
@ObjectModel.sapObjectNodeType.name: 'FreightOrder'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_FreightOrderChanged
{

  TransportationOrder        : /scmtms/tor_id;
  TransportationOrderType    : /scmtms/tor_type;
  TransportationMode         : /scmtms/trmodcode;
  TransportationShippingType : /scmtms/shipping_type;
  Carrier                    : /scmtms/pty_carrier;
  TranspPurgOrgExtID         : /scmtms/vdm_pur_org_ext_id;
}
```
