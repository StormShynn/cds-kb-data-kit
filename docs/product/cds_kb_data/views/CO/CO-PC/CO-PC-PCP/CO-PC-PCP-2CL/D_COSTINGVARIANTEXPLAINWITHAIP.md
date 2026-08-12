---
name: D_COSTINGVARIANTEXPLAINWITHAIP
description: "D Costingvariantexplainwithaip"
app_component: CO-PC-PCP-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
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
# D_COSTINGVARIANTEXPLAINWITHAIP

**D Costingvariantexplainwithaip**

| Property | Value |
|---|---|
| App Component | `CO-PC-PCP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CostingVariant` |  | |  | `ck_klvar` |  |  |
| `Plant` |  | |  | `werks_d` |  |  |

## Source Code

```abap
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@EndUserText.label: 'Importing parameter of AI Explain Request'
define root abstract entity D_CostingVariantExplainWithAIP
{
  CostingVariant : ck_klvar;
  Plant          : werks_d;
}
```
