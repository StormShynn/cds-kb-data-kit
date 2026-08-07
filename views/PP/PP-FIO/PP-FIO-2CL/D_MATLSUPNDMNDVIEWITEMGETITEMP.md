---
name: D_MATLSUPNDMNDVIEWITEMGETITEMP
description: D Matlsupndmndviewitemgetitemp
app_component: PP-FIO-2CL
software_component: SAPSCORE
release_state: released
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
