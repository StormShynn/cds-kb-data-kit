---
name: D_SERIALIZEDMATLITMCHGMATLR
description: D Serializedmatlitmchgmatlr
app_component: PM-EQM-EQ-2CL
software_component: SAPSCORE
release_state: released
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
# D_SERIALIZEDMATLITMCHGMATLR

**D Serializedmatlitmchgmatlr**

| Property | Value |
|---|---|
| App Component | `PM-EQM-EQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `Material` | `matnr` |
| `SerialNumber` | `gernr` |

## Source Code

```abap
@VDM.usage.type: [ #ACTION_RESULT_STRUCTURE ]
@EndUserText.label: 'Change Material Action Result'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_SerializedMatlItmChgMatlR
{
  Material     : matnr;
  SerialNumber : gernr;
}
```
