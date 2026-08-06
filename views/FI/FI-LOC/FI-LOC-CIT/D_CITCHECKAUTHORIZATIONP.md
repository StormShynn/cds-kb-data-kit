---
name: D_CITCHECKAUTHORIZATIONP
description: D Citcheckauthorizationp
app_component: FI-LOC-CIT
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-CIT
  - component:FI-LOC-CIT
  - lob:Finance
---
# D_CITCHECKAUTHORIZATIONP

**D Citcheckauthorizationp**

| Property | Value |
|---|---|
| App Component | `FI-LOC-CIT` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `TaskActivityValue` | `activ_auth` |

## Source Code

```abap
@EndUserText.label: 'CIT CheckAuthorization Function Param'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_CITCheckAuthorizationP
{
    TaskActivityValue : activ_auth;
}
```
