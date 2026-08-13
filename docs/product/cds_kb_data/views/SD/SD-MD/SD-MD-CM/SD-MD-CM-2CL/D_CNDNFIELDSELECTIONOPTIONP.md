---
name: D_CNDNFIELDSELECTIONOPTIONP
description: "D Cndnfieldselectionoptionp"
semantic_vi: "View này hiển thị các tùy chọn chọn trường điều kiện giá bán cho một bản ghi điều kiện. Nó được sử dụng để xác định phạm vi giá trị cho một trường điều kiện trong điều kiện giá bán."
keywords:
  - "pricing condition"
  - "điều kiện giá bán"
  - "field selection"
  - "chọn trường"
  - "condition record"
  - "bản ghi điều kiện"
  - "condition field"
  - "trường điều kiện"
  - "condition range"
  - "phạm vi điều kiện"
  - "sap cds"
  - "cds view"
semantic_en: "This view exposes pricing condition field selection options for a condition record. It is used to determine the range of values for a condition field in a pricing condition."
app_component: SD-MD-CM-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
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

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PrcgConditionFieldRangeName` |  | |  | `fieldname` |  |  |
| `PrcgConditionFieldRangeSign` |  | |  | `tvarv_sign` |  |  |
| `PrcgConditionFieldRangeOption` |  | |  | `tvarv_opti` |  |  |
| `PrcgConditionFieldRangeLow` |  | |  | `rsdsselop_` |  |  |
| `PrcgConditionFieldRangeHigh` |  | |  | `rsdsselop_` |  |  |
| `_ConditionRecordCriteriaItem` | | ✓ | | | | |

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
