---
name: D_CNDNRECORDSELECTIONOPTIONP
description: "D Cndnrecordselectionoptionp"
app_component: SD-MD-CM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-MD
  - SD-MD-CM
  - component:SD-MD-CM-2CL
  - lob:Sales & Distribution
---
# D_CNDNRECORDSELECTIONOPTIONP

**D Cndnrecordselectionoptionp**

| Property | Value |
|---|---|
| App Component | `SD-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PrcgConditionRecordRangeSign` |  | |  | `tvarv_sign` |  |  |
| `PrcgConditionRecordRangeOption` |  | |  | `tvarv_opti` |  |  |
| `PricingConditionRecordRangeLow` |  | |  | `knumh` |  |  |
| `PrcgConditionRecordRangeHigh` |  | |  | `knumh` |  |  |
| `_ConditionRecordCriteriaItem` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Selection Option for Condition Records'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE]
define abstract entity D_CndnRecordSelectionOptionP
{
  PrcgConditionRecordRangeSign   : tvarv_sign;
  PrcgConditionRecordRangeOption : tvarv_opti;
  PricingConditionRecordRangeLow : knumh;
  PrcgConditionRecordRangeHigh   : knumh;

  _ConditionRecordCriteriaItem   : association to parent D_ConditionRecordCriteriaItemP;
}
```
