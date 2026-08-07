---
name: D_SRLNMBRCHANGESERIALNUMBERP
description: "D SRLNMBRCHANGESerial NumberP"
app_component: MM-IM-PI-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IM
  - MM-IM-PI
  - serial-number
  - component:MM-IM-PI-2CL
  - lob:Sourcing & Procurement
---
# D_SRLNMBRCHANGESERIALNUMBERP

**D SRLNMBRCHANGESerial NumberP**

| Property | Value |
|---|---|
| App Component | `MM-IM-PI-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `NewSerialNumber` |  | |  | `gernr` |  |  |

## Source Code

```abap
@EndUserText.label: 'New SerialNumber value for change action'
@VDM.usage.type:[#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE

define root abstract entity D_SrlNmbrChangeSerialNumberP
{
  NewSerialNumber : gernr;
}
```
