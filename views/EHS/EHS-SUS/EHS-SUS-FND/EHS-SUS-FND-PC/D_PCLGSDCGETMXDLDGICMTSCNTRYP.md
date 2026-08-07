---
name: D_PCLGSDCGETMXDLDGICMTSCNTRYP
description: D Pclgsdcgetmxdldgicmtscntryp
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
# D_PCLGSDCGETMXDLDGICMTSCNTRYP

**D Pclgsdcgetmxdldgicmtscntryp**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-PC` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Country` |  | |  | `land1` |
| `_Root` | | ✓ | | |

## Source Code

```abap
@EndUserText.label: 'Get Mxd Loading Icmts Country Parameter'
@ObjectModel.supportedCapabilities: [ #DATA_STRUCTURE ]
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
define abstract entity D_PCLgsDcGetMxdLdgIcmtsCntryP
{
  Country                    : land1;
  _Root : association to parent D_PCLgsDcGetMxdLdgIcmtsP; 
}
```
