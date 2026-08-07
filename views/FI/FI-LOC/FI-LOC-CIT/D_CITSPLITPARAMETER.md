---
name: D_CITSPLITPARAMETER
description: "D Citsplitparameter"
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
# D_CITSPLITPARAMETER

**D Citsplitparameter**

| Property | Value |
|---|---|
| App Component | `FI-LOC-CIT` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CITClassificationCode` |  | |  | `ficite_clsfcode` |  |  |
| `CITItemAmountInDisplayCurrency` |  | |  | `ficite_amnt` |  |  |
| `Currency` |  | |  | `ficite_curr` |  |  |

## Source Code

```abap
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@EndUserText.label: 'CIT Split Action Parameter'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_CITSplitParameter
{
  CITClassificationCode          : ficite_clsfcode;
  CITItemAmountInDisplayCurrency : ficite_amnt;

  @Semantics.currencyCode        : true
  Currency                       : ficite_curr;
}
```
