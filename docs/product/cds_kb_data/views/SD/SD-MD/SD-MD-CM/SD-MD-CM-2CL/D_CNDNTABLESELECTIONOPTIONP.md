---
name: D_CNDNTABLESELECTIONOPTIONP
description: "D Cndntableselectionoptionp"
semantic_vi: "Tùy chọn chọn bảng điều kiện giá cho điều kiện giá trong bán hàng và phân phối. View này được sử dụng để lấy tùy chọn bảng điều kiện giá."
keywords:
  - "pricing condition"
  - "sales and distribution"
  - "tùy chọn bảng điều kiện giá"
  - "bán hàng và phân phối"
  - "cndntableselectionoptionp"
  - "sd-md-cm-2cl"
  - "sd-md-cm"
  - "sales distribution"
  - "điều kiện giá"
semantic_en: "Pricing condition table selection options for pricing conditions in sales and distribution. This view is used to retrieve pricing condition table range options."
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
# D_CNDNTABLESELECTIONOPTIONP

**D Cndntableselectionoptionp**

| Property | Value |
|---|---|
| App Component | `SD-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PricingConditionTableRangeSign` |  | |  | `tvarv_sign` |  |  |
| `PrcgConditionTableRangeOption` |  | |  | `tvarv_opti` |  |  |
| `PricingConditionTableRangeLow` |  | |  | `kotabnr` |  |  |
| `PricingConditionTableRangeHigh` |  | |  | `kotabnr` |  |  |
| `_ConditionRecordCriteriaItem` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Selection Option for Condition Tables'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE]
define abstract entity D_CndnTableSelectionOptionP
{
  PricingConditionTableRangeSign : tvarv_sign;
  PrcgConditionTableRangeOption  : tvarv_opti;
  PricingConditionTableRangeLow  : kotabnr;
  PricingConditionTableRangeHigh : kotabnr;

  _ConditionRecordCriteriaItem   : association to parent D_ConditionRecordCriteriaItemP; 
}
```
