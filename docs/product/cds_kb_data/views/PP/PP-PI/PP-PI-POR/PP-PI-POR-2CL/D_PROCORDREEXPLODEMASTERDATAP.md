---
name: D_PROCORDREEXPLODEMASTERDATAP
description: "D Procordreexplodemasterdatap"
app_component: PP-PI-POR-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-PI
  - PP-PI-POR
  - component:PP-PI-POR-2CL
  - lob:Manufacturing
---
# D_PROCORDREEXPLODEMASTERDATAP

**D Procordreexplodemasterdatap**

| Property | Value |
|---|---|
| App Component | `PP-PI-POR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProductionVersion` |  | |  | `char4` |  |  |

## Source Code

```abap
@EndUserText.label: 'ReexplodeMasterData Proc Order Param'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE

define abstract entity D_ProcOrdReexplodeMasterDataP
{
  ProductionVersion : char4;
}
```
