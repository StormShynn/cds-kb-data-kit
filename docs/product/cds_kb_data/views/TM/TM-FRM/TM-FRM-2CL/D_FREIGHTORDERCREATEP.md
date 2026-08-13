---
name: D_FREIGHTORDERCREATEP
description: "D Freightordercreatep"
semantic_vi: "Đại diện cho quá trình tạo đơn hàng vận tải, cung cấp dữ liệu cho các đơn hàng vận tải và loại đơn hàng."
keywords:
  - "freight order"
  - "đơn hàng vận tải"
  - "transportation order"
  - "đơn hàng vận chuyển"
  - "sap tm"
  - "tm-frm"
  - "freight"
  - "vận tải"
semantic_en: "Represents a freight order creation process, providing data for transportation orders and their types."
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
# D_FREIGHTORDERCREATEP

**D Freightordercreatep**

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
@EndUserText.label: 'CreateFreightOrder Action Parameter'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define root abstract entity D_FreightOrderCreateP
{
  TransportationOrder     : /scmtms/tor_id;
  TransportationOrderType : /scmtms/tor_type;
}
```
