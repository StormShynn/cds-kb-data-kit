---
name: D_CNDNFIELDSELECTIONOPTIONP
description: D Cndnfieldselectionoptionp
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
# D_CNDNFIELDSELECTIONOPTIONP

**D Cndnfieldselectionoptionp**

| Property | Value |
|---|---|
| App Component | `SD-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `PrcgConditionFieldRangeName` |  | |  | `fieldname` |
| `PrcgConditionFieldRangeSign` |  | |  | `tvarv_sign` |
| `PrcgConditionFieldRangeOption` |  | |  | `tvarv_opti` |
| `PrcgConditionFieldRangeLow` |  | |  | `rsdsselop_` |
| `PrcgConditionFieldRangeHigh` |  | |  | `rsdsselop_` |
| `_ConditionRecordCriteriaItem` | | ✓ | | |

## Source Code

```abap
@EndUserText.label: 'Selection Option for Condition Fields'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE]
define abstract entity D_CndnFieldSelectionOptionP
{
  PrcgConditionFieldRangeName   : fieldname;
  PrcgConditionFieldRangeSign   : tvarv_sign;
  PrcgConditionFieldRangeOption : tvarv_opti;
  PrcgConditionFieldRangeLow    : rsdsselop_;
  PrcgConditionFieldRangeHigh   : rsdsselop_;

  _ConditionRecordCriteriaItem  : association to parent D_ConditionRecordCriteriaItemP;
}
```
