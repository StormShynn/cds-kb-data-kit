---
name: D_FREIGHTORDERCREATED
description: "D Freightordercreated"
semantic_vi: "View D Freightordercreated hiển thị dữ liệu về đơn hàng vận chuyển đã được tạo, có thể được sử dụng để theo dõi và phân tích hoạt động vận chuyển."
keywords:
  - "freight order"
  - "đơn hàng vận chuyển"
  - "transportation order"
  - "đơn vận chuyển"
  - "sap tm"
  - "tm-frm"
  - "ekko"
  - "transportation"
  - "vận chuyển"
semantic_en: "The D Freightordercreated view exposes data about created freight orders, which can be used to track and analyze transportation activities."
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
# D_FREIGHTORDERCREATED

**D Freightordercreated**

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
define abstract entity D_FreightOrderCreated
{

  TransportationOrder        : /scmtms/tor_id;
  TransportationOrderType    : /scmtms/tor_type;
  TransportationMode         : /scmtms/trmodcode;
  TransportationShippingType : /scmtms/shipping_type;
  Carrier                    : /scmtms/pty_carrier;
  TranspPurgOrgExtID         : /scmtms/vdm_pur_org_ext_id;

}
```
