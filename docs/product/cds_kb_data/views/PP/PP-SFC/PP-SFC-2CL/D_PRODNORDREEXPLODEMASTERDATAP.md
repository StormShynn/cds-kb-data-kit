---
name: D_PRODNORDREEXPLODEMASTERDATAP
description: "D Prodnordreexplodemasterdatap"
app_component: PP-SFC-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-SFC
  - component:PP-SFC-2CL
  - lob:Manufacturing
---
# D_PRODNORDREEXPLODEMASTERDATAP

**D Prodnordreexplodemasterdatap**

| Property | Value |
|---|---|
| App Component | `PP-SFC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProductionVersion` |  | |  | `char4` |  |  |

## Source Code

```abap
@EndUserText.label: 'ReexplodeMasterData Prodn Order Param'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE

define root abstract entity D_ProdnOrdReexplodeMasterDataP
{
  ProductionVersion : char4;
}
```
