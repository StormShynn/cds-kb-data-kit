---
name: D_EQUIPCRTEMASSMATLSRLNMBRR
description: "D Equipcrtemassmatlsrlnmbrr"
app_component: PM-EQM-EQ-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-EQM
  - PM-EQM-EQ
  - component:PM-EQM-EQ-2CL
  - lob:Plant Maintenance
---
# D_EQUIPCRTEMASSMATLSRLNMBRR

**D Equipcrtemassmatlsrlnmbrr**

| Property | Value |
|---|---|
| App Component | `PM-EQM-EQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SerialNumber` |  | |  | `gernr` |  |  |

## Source Code

```abap
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE]
@EndUserText.label: 'Abstract Result for Mass Create'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define root abstract entity D_EquipCrteMassMatlSrlNmbrR
  {
  
  
        //key DummyKey    : abap.char(1);
       @EndUserText.label: 'Last Serial Number'
        SerialNumber: gernr;
  }
```
