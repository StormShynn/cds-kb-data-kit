---
name: D_FREIGHTUNITCREATED
description: "D Freightunitcreated"
semantic_vi: "View D_FREIGHTUNITCREATED hiển thị thông tin về đơn vị vận tải được tạo trong hệ thống quản lý vận tải, có thể sử dụng để theo dõi và quản lý việc tạo đơn vị vận tải."
keywords:
  - "freight unit"
  - "đơn vị vận tải"
  - "transportation management"
  - "tm"
  - "freight"
  - "vận tải"
  - "sap"
  - "transportation order"
  - "đơn vận tải"
semantic_en: "The D_FREIGHTUNITCREATED view exposes information about created freight units in the Transportation Management system, which can be used to track and manage freight unit creation."
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
# D_FREIGHTUNITCREATED

**D Freightunitcreated**

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
define abstract entity D_FreightUnitCreated
{

  TransportationOrder     : /scmtms/tor_id;
  TransportationOrderType : /scmtms/tor_type;
  TransportationMode      : /scmtms/trmodcode;

}
```
