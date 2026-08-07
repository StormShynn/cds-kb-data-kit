---
name: D_EMRKDFNDSDOCTYPESGETFORCRTER
description: D Emrkdfndsdoctypesgetforcrter
app_component: PSM
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PSM
  - component:PSM
  - lob:Other
---
# D_EMRKDFNDSDOCTYPESGETFORCRTER

**D Emrkdfndsdoctypesgetforcrter**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EarmarkedFundsDocumentCategory` |  | |  | `fmre_bltyp` |  |  |

## Source Code

```abap
@EndUserText.label: 'Parameter Earmarked Funds Document Type'
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE]
@ObjectModel.supportedCapabilities: [ #DATA_STRUCTURE  ]
define abstract entity D_EmrkdFndsDocTypesGetForCrteR
{
  EarmarkedFundsDocumentCategory : fmre_bltyp;
    
}
```
