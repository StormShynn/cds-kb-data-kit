---
name: D_MATLSUPNDMNDVIEWITEMGETITEMP
description: "D Matlsupndmndviewitemgetitemp"
semantic_vi: "View này hiển thị dữ liệu cung cấp và nhu cầu vật liệu tại mức độ chi tiết, cho phép các nhà phát triển truy cập thông tin chi tiết về kế hoạch yêu cầu vật liệu. Nó được sử dụng để truy xuất dữ liệu chi tiết của từng vật liệu cho kế hoạch MRP."
keywords:
  - "material supply"
  - "demand data"
  - "item level"
  - "mrp planning"
  - "material requirements planning"
  - "mrp plant"
  - "mrp area"
  - "mrp segment"
  - "material shortage definition"
  - "sap pp"
  - "sap fio"
  - "sap manufacturing"
semantic_en: "This view exposes material supply and demand data at the item level, enabling developers to access detailed information for material requirements planning. It is used to retrieve specific item data for MRP planning."
app_component: PP-FIO-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - item-level
  - component:PP-FIO-2CL
  - lob:Manufacturing
---
# D_MATLSUPNDMNDVIEWITEMGETITEMP

**D Matlsupndmndviewitemgetitemp**

| Property | Value |
|---|---|
| App Component | `PP-FIO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Material` |  | |  | `matnr` |  |  |
| `MRPPlant` |  | |  | `werks_d` |  |  |
| `MRPArea` |  | |  | `berid` |  |  |
| `MRPPlanningSegmentType` |  | |  | `plaab` |  |  |
| `MRPPlanningSegment` |  | |  | `planr` |  |  |
| `MaterialShortageDefinition` |  | |  | `char15` |  |  |
| `MRPElementSupplyAggregation` |  | |  | `supplyaggregation` |  |  |
| `MRPElementDemandAggregation` |  | |  | `demandaggregation` |  |  |

## Source Code

```abap
@EndUserText.label: 'Supply and Demand Item Input Parameter'
@ObjectModel.supportedCapabilities:[#DATA_STRUCTURE] 
@VDM.usage.type:[#ACTION_PARAMETER_STRUCTURE]
define abstract entity D_MatlSupNDmndViewItemGetItemP
{
  Material                    : matnr;
  MRPPlant                    : werks_d;
  MRPArea                     : berid;
  MRPPlanningSegmentType      : plaab;
  MRPPlanningSegment          : planr;
  MaterialShortageDefinition  : char15;
  MRPElementSupplyAggregation : supplyaggregation;
  MRPElementDemandAggregation : demandaggregation;
}
```
