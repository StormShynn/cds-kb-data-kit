---
name: D_COSTESTGETBRKDWNBYCOMPVIEWP
description: D Costestgetbrkdwnbycompviewp
app_component: CO-PC-PCP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CO
  - CO-PC
  - CO-PC-PCP
  - component:CO-PC-PCP-2CL
  - lob:Controlling
---
# D_COSTESTGETBRKDWNBYCOMPVIEWP

**D Costestgetbrkdwnbycompviewp**

| Property | Value |
|---|---|
| App Component | `CO-PC-PCP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `CostComponentView` | `ck_sicht` |

## Source Code

```abap
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@EndUserText.label: 'Cost Breakdown by Cost Component View'
define root abstract entity D_CostEstGetBrkdwnByCompViewP
{
    CostComponentView : ck_sicht;
}
```
