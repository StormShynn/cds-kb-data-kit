---
name: D_PCLGSDCGETDAGDSEDIINFOITEMP
description: D Pclgsdcgetdagdsediinfoitemp
app_component: EHS-SUS-FND-PC
software_component: SAPSCORE
release_state: released
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
# D_PCLGSDCGETDAGDSEDIINFOITEMP

**D Pclgsdcgetdagdsediinfoitemp**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-PC` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `Item` | `ehfnd_log_doc_posnr` |
| `_Root` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Get PCLD DG EDI Items Parameter'
@ObjectModel.supportedCapabilities: [ #DATA_STRUCTURE ]
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
define abstract entity D_PCLgsDcGetDaGdsEDIInfoItemP
{
  Item  : ehfnd_log_doc_posnr; // Item position Number
  _Root : association to parent D_PCLgsDcGetDngrsGoodsEDIInfoP;
}
```
