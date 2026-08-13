---
name: D_FREIGHTUNITCANCELED
description: "D Freightunitcanceled"
semantic_vi: "View D_FREIGHTUNITCANCELED hiển thị các đơn vị vận tải bị hủy bỏ và các đơn hàng vận chuyển liên quan, có ích cho việc phân tích và quản lý hoạt động vận tải."
keywords:
  - "freight"
  - "transportation"
  - "canceled"
  - "freight unit"
  - "transportation order"
  - "tm-frm"
  - "sap"
  - "canceled freight"
  - "freight management"
semantic_en: "The D_FREIGHTUNITCANCELED view exposes canceled freight units and their associated transportation orders, useful for analyzing and managing freight operations."
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
# D_FREIGHTUNITCANCELED

**D Freightunitcanceled**

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

## Source Code

```abap
@ObjectModel.sapObjectNodeType.name: 'FreightUnit'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_FreightUnitCanceled
{

  TransportationOrder     : /scmtms/tor_id;
  TransportationOrderType : /scmtms/tor_type;
  TransportationMode      : /scmtms/trmodcode;

}
```
