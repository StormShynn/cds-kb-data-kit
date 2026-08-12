---
name: D_PCLGSDCGETDAGDSDOCINFOITEMP
description: "D Pclgsdcgetdagdsdocinfoitemp"
app_component: EHS-SUS-FND-PC
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - EHS
  - EHS-SUS
  - EHS-SUS-FND
  - item-level
  - component:EHS-SUS-FND-PC
  - lob:Other
---
# D_PCLGSDCGETDAGDSDOCINFOITEMP

**D Pclgsdcgetdagdsdocinfoitemp**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-PC` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Item` |  | |  | `ehfnd_log_doc_posnr` |  |  |
| `_Root` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Get DG Document Info Items Parameter'
@ObjectModel.supportedCapabilities: [ #DATA_STRUCTURE ]
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
define abstract entity D_PCLgsDcGetDaGdsDocInfoItemP
{
  Item  : ehfnd_log_doc_posnr;                          // Item position number
  _Root : association to parent D_PCLgsDcGetDngrsGdsDocInfoP;
}
```
