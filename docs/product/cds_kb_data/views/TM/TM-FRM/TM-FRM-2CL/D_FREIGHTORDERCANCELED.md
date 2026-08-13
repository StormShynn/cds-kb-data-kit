---
name: D_FREIGHTORDERCANCELED
description: "D Freightordercanceled"
semantic_vi: "View D_FREIGHTORDERCANCELED hiển thị các đơn hàng vận chuyển bị hủy bỏ và chi tiết liên quan, hữu ích cho việc theo dõi và phân tích các đơn hàng vận chuyển bị hủy bỏ."
keywords:
  - "freight order"
  - "đơn hàng vận chuyển"
  - "canceled shipment"
  - "đơn hàng vận chuyển bị hủy bỏ"
  - "transportation order"
  - "sap tm"
  - "tm-frm-2cl"
semantic_en: "The D_FREIGHTORDERCANCELED view exposes canceled freight orders and their associated details, useful for tracking and analyzing canceled shipments."
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
# D_FREIGHTORDERCANCELED

**D Freightordercanceled**

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
define abstract entity D_FreightOrderCanceled
{

  TransportationOrder        : /scmtms/tor_id;
  TransportationOrderType    : /scmtms/tor_type;
  TransportationMode         : /scmtms/trmodcode;
  TransportationShippingType : /scmtms/shipping_type;
  Carrier                    : /scmtms/pty_carrier;
  TranspPurgOrgExtID         : /scmtms/vdm_pur_org_ext_id;

}
```
