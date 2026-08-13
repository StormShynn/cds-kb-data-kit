---
name: D_FREIGHTUNITDELETED
description: "D Freightunitdeleted"
semantic_vi: "View D_FREIGHTUNITDELETED hiển thị các đơn vị vận tải đã xóa và các đơn hàng vận tải liên quan, loại đơn hàng và phương thức vận tải. Nó được sử dụng để theo dõi và quản lý các đơn vị vận tải đã xóa trong thành phần TM-FRM-2CL."
keywords:
  - "freight unit"
  - "đơn vị vận tải"
  - "transportation order"
  - "đơn hàng vận tải"
  - "tm-frm-2cl"
  - "deleted freight unit"
  - "đơn vị vận tải đã xóa"
  - "sap tm"
  - "sabtm"
  - "freight management"
semantic_en: "The D_FREIGHTUNITDELETED view exposes deleted freight units and their associated transportation orders, order types, and modes. It is used to track and manage deleted freight units in the TM-FRM-2CL component."
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
# D_FREIGHTUNITDELETED

**D Freightunitdeleted**

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
define abstract entity D_FreightUnitDeleted
{

  TransportationOrder     : /scmtms/tor_id;
  TransportationOrderType : /scmtms/tor_type;
  TransportationMode      : /scmtms/trmodcode;

}
```
