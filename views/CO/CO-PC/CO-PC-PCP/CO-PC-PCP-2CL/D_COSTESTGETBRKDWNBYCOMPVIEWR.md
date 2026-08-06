---
name: D_COSTESTGETBRKDWNBYCOMPVIEWR
description: D Costestgetbrkdwnbycompviewr
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
# D_COSTESTGETBRKDWNBYCOMPVIEWR

**D Costestgetbrkdwnbycompviewr**

| Property | Value |
|---|---|
| App Component | `CO-PC-PCP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `CompanyCodeCurrency` | `waers` |
| `ControllingAreaCurrency` | `waers` |

## Source Code

```abap
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@EndUserText.label: 'Cost Breakdown of Cost Estimate'
define root abstract entity D_CostEstGetBrkdwnByCompViewR
{
    CompanyCodeCurrency : waers;
    ControllingAreaCurrency : waers;
    _CostComponents : association [0..*] to D_CostEstCostComponentR on 1=1;
}
```
