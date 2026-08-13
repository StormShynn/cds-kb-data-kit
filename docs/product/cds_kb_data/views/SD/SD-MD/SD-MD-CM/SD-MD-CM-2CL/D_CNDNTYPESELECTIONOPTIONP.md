---
name: D_CNDNTYPESELECTIONOPTIONP
description: "D Cndntypeselectionoptionp"
semantic_vi: "View này hiển thị các tùy chọn loại điều kiện giá cho điều kiện giá trong bán hàng và phân phối, được sử dụng khi cấu hình điều kiện giá."
keywords:
  - "pricing condition"
  - "sales and distribution"
  - "cấu hình điều kiện giá"
  - "loại điều kiện giá"
  - "tùy chọn điều kiện giá"
  - "sdsd"
  - "sd-md-cm"
  - "sd-md-cm-2cl"
  - "sales distribution"
  - "điều kiện giá"
  - "loại điều kiện"
  - "tùy chọn điều kiện"
semantic_en: "This view exposes pricing condition type selection options for pricing conditions in sales and distribution, used when configuring pricing conditions."
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
# D_CNDNTYPESELECTIONOPTIONP

**D Cndntypeselectionoptionp**

| Property | Value |
|---|---|
| App Component | `SD-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PricingConditionTypeRangeSign` |  | |  | `tvarv_sign` |  |  |
| `PrcgConditionTypeRangeOption` |  | |  | `tvarv_opti` |  |  |
| `PricingConditionTypeRangeLow` |  | |  | `kschl` |  |  |
| `PricingConditionTypeRangeHigh` |  | |  | `kschl` |  |  |
| `_ConditionRecordCriteriaItem` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Selection Option for Condition Types'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE]
define abstract entity D_CndnTypeSelectionOptionP
{
  PricingConditionTypeRangeSign : tvarv_sign;
  PrcgConditionTypeRangeOption  : tvarv_opti;
  PricingConditionTypeRangeLow  : kschl;
  PricingConditionTypeRangeHigh : kschl;

  _ConditionRecordCriteriaItem  : association to parent D_ConditionRecordCriteriaItemP;
}
```
