---
name: D_LGLTRANSRESTARTLGLTRANSPHSEP
description: D Lgltransrestartlgltransphsep
app_component: CM-LT-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CM
  - CM-LT
  - component:CM-LT-2CL
  - lob:Other
---
# D_LGLTRANSRESTARTLGLTRANSPHSEP

**D Lgltransrestartlgltransphsep**

| Property | Value |
|---|---|
| App Component | `CM-LT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LglCntntMPhaseUUID` |  | |  | `lcm_uuid` |  |  |

## Source Code

```abap
@EndUserText.label: 'Legal Trans Restart Phase Action Param'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_LglTransRestartLglTransPhseP
{
  LglCntntMPhaseUUID : lcm_uuid;
}
```
