---
name: D_FREIGHTUNITASSIGNPARAMETER
description: "D Freightunitassignparameter"
semantic_vi: "View D_FREIGHTUNITASSIGNPARAMETER hiển thị các tham số gán đơn vị vận tải, được sử dụng trong quản lý vận tải để gán đơn vị vận tải vào đơn hàng vận chuyển."
keywords:
  - "freight unit"
  - "assignment parameter"
  - "transportation management"
  - "tm"
  - "tm-frm"
  - "freight unit assignment"
  - "shipment"
  - "đơn vị vận tải"
  - "tham số gán"
  - "quản lý vận tải"
semantic_en: "The D_FREIGHTUNITASSIGNPARAMETER view exposes freight unit assignment parameters, which are used in transportation management to assign freight units to shipments."
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
# D_FREIGHTUNITASSIGNPARAMETER

**D Freightunitassignparameter**

| Property | Value |
|---|---|
| App Component | `TM-FRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `/scmtms/vdm_freight_unit_uuid` |  | |  | `key FreightUnitUUID : /scmtms/vdm_freight_unit_uuid` |  |  |
| `/scmtms/toritmuuid` |  | |  | `key TransportationOrderItemUUID : /scmtms/toritmuuid` |  |  |
| `_Parent` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Freight Unit Assign Parameter'
@VDM.usage.type:[#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_FreightUnitAssignParameter
{
  key FreightUnitUUID             : /scmtms/vdm_freight_unit_uuid;
  key TransportationOrderItemUUID : /scmtms/toritmuuid;
      _Parent                     : association to parent D_TranspOrdAssignFrtUnitP on _Parent.TransportationOrderItemUUID = $projection.TransportationOrderItemUUID;
}
```
