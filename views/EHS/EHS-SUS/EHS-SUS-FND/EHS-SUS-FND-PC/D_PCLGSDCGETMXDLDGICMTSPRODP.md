---
name: D_PCLGSDCGETMXDLDGICMTSPRODP
description: D Pclgsdcgetmxdldgicmtsprodp
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
  - component:EHS-SUS-FND-PC
  - lob:Other
---
# D_PCLGSDCGETMXDLDGICMTSPRODP

**D Pclgsdcgetmxdldgicmtsprodp**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-PC` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `Product` | `ehfnd_mat_id` |
| `PackingInstructionNumber` | `ehfnd_pi_id` |
| `_Root` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Get Mxd Loading Icmts Product Parameter'
@ObjectModel.supportedCapabilities: [ #DATA_STRUCTURE ]
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
define abstract entity D_PCLgsDcGetMxdLdgIcmtsProdP
{
  Product                          : ehfnd_mat_id;
  PackingInstructionNumber         : ehfnd_pi_id;
  _Root : association to parent D_PCLgsDcGetMxdLdgIcmtsP; 
}
```
