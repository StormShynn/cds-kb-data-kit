---
name: D_SUPDMNDITMGETPGGNGWTHITEMSP
description: D Supdmnditmgetpggngwthitemsp
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
# D_SUPDMNDITMGETPGGNGWTHITEMSP

**D Supdmnditmgetpggngwthitemsp**

| Property | Value |
|---|---|
| App Component | `PP-FIO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `Material` | `matnr` |
| `MRPPlant` | `werks_d` |
| `MRPArea` | `berid` |

## Source Code

```abap
@EndUserText.label: 'Supply and Demand Pegging with Items'
@ObjectModel.supportedCapabilities:[#DATA_STRUCTURE]
@VDM.usage.type:[#ACTION_PARAMETER_STRUCTURE]
define abstract entity D_SupDmndItmGetPggngWthItemsP
{
  Material : matnr;
  MRPPlant : werks_d;
  MRPArea  : berid;
}
```
