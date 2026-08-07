---
name: D_COSTESTCOSTCOMPONENTR
description: D Costestcostcomponentr
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
# D_COSTESTCOSTCOMPONENTR

**D Costestcostcomponentr**

| Property | Value |
|---|---|
| App Component | `CO-PC-PCP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CostComponent` |  | |  | `ck_element` |
| `CostComponentName` |  | |  | `ck_txele` |
| `TotalAmountInCoCodeCrcy` |  | |  | `total_amt` |
| `FixedAmountInCoCodeCrcy` |  | |  | `total_amt` |
| `TotalAmountInCtrlgAreaCrcy` |  | |  | `total_amt` |
| `FixedAmountInCtrlgAreaCrcy` |  | |  | `total_amt` |

## Source Code

```abap
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@EndUserText.label: 'Cost Components'

define root abstract entity D_CostEstCostComponentR
{
    CostComponent     : ck_element;
    CostComponentName : ck_txele;
    
    TotalAmountInCoCodeCrcy : total_amt;
    FixedAmountInCoCodeCrcy : total_amt;
    TotalAmountInCtrlgAreaCrcy : total_amt;
    FixedAmountInCtrlgAreaCrcy : total_amt;
}
```
