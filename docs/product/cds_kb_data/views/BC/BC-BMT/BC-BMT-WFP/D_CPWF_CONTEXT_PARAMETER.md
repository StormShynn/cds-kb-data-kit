---
name: D_CPWF_CONTEXT_PARAMETER
description: "D Cpwf Context Parameter"
app_component: BC-BMT-WFP
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-BMT
  - BC-BMT-WFP
  - text
  - component:BC-BMT-WFP
  - lob:Basis Components
---
# D_CPWF_CONTEXT_PARAMETER

**D Cpwf Context Parameter**

| Property | Value |
|---|---|
| App Component | `BC-BMT-WFP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `string` |  | |  | `key context : abap.string` |  |  |

## Source Code

```abap
@EndUserText.label: 'Parameterfield for workflow context'
define abstract entity D_CPWF_CONTEXT_PARAMETER
{
  key context : abap.string;
}
```
