---
name: D_SUPDMNDITMGETPGGNGWTHITEMSR
description: "D Supdmnditmgetpggngwthitemsr"
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
# D_SUPDMNDITMGETPGGNGWTHITEMSR

**D Supdmnditmgetpggngwthitemsr**

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
| `D_SupplyDemandItemGetItemR` |  | |  | `_SupplyDemandItemGetItemR : composition [0..*] of D_SupplyDemandItemGetItemR` |  |  |
| `D_SupplyDemandItemGetPeggingR` |  | |  | `_SupplyDemandItemGetPeggingR : composition [0..*] of D_SupplyDemandItemGetPeggingR` |  |  |

## Source Code

```abap
@EndUserText.label: 'Supply and Demand Item and Pegging Data'
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE]
@ObjectModel.supportedCapabilities:[#DATA_STRUCTURE]
define root abstract entity D_SupDmndItmGetPggngWthItemsR
{
  Material                     : matnr;
  MRPPlant                     : werks_d;
  MRPArea                      : berid;
  
  _SupplyDemandItemGetItemR    : composition [0..*] of D_SupplyDemandItemGetItemR;
  _SupplyDemandItemGetPeggingR : composition [0..*] of D_SupplyDemandItemGetPeggingR;
}
```
