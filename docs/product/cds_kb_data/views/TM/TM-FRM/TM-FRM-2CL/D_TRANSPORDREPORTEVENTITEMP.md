---
name: D_TRANSPORDREPORTEVENTITEMP
description: "D Transpordreporteventitemp"
semantic_vi: "View D_TRANSPORDREPORTEVENTITEMP hiển thị các sự kiện của đơn hàng vận chuyển, có thể được sử dụng để theo dõi và phân tích các sự kiện của từng đơn hàng vận chuyển."
keywords:
  - "transportation order"
  - "đơn hàng vận chuyển"
  - "transportation order item"
  - "sự kiện đơn hàng vận chuyển"
  - "item-level events"
  - "sap tm"
  - "tm-frm-2cl"
  - "ekko"
  - "transportation order item events"
semantic_en: "The D_TRANSPORDREPORTEVENTITEMP view exposes transportation order item events, which can be used to track and analyze item-level events in transportation orders."
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
  - item-level
  - component:TM-FRM-2CL
  - lob:Other
---
# D_TRANSPORDREPORTEVENTITEMP

**D Transpordreporteventitemp**

| Property | Value |
|---|---|
| App Component | `TM-FRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TransportationOrderItemUUID` |  | |  | `/scmtms/toritmuuid` |  |  |

## Source Code

```abap
@EndUserText.label: 'Report Event Action Item Parameter'
@VDM.usage.type:[#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define root abstract entity D_TranspOrdReportEventItemP
{
   TransportationOrderItemUUID : /scmtms/toritmuuid;
}
```
