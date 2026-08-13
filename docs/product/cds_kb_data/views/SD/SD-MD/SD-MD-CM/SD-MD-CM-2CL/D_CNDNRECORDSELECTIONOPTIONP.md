---
name: D_CNDNRECORDSELECTIONOPTIONP
description: "D Cndnrecordselectionoptionp"
semantic_vi: "View này hiển thị các tùy chọn lựa chọn hồ sơ điều kiện giá cho một phạm vi cụ thể, được sử dụng khi định nghĩa điều kiện giá trong bán hàng và phân phối."
keywords:
  - "pricing condition"
  - "record selection"
  - "sales distribution"
  - "sales and distribution"
  - "sd-md-cm"
  - "cndnrecordselectionoptionp"
  - "prcgconditionrecordrange"
  - "pricing condition record range"
semantic_en: "This view exposes pricing condition record selection options for a specific range, used when defining pricing conditions in sales and distribution."
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
