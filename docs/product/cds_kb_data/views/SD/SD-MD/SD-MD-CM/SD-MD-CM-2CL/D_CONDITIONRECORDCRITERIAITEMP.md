---
name: D_CONDITIONRECORDCRITERIAITEMP
description: "D Condition RecordCRITERIAITEMP"
semantic_vi: "View D_CONDITIONRECORDCRITERIAITEMP hiển thị dữ liệu tiêu chí điều kiện bản ghi, được sử dụng để lọc và áp dụng điều kiện cho các mục trong tài liệu bán hàng."
keywords:
  - "condition record"
  - "criteria item"
  - "sales document"
  - "điều kiện bản ghi"
  - "tiêu chí mục"
  - "tài liệu bán hàng"
  - "sđd"
  - "sdmd"
  - "sdmdcm"
  - "pricing-condition"
  - "item-level"
semantic_en: "The D_CONDITIONRECORDCRITERIAITEMP CDS view exposes condition record criteria item data, which is used to filter and apply conditions to items in sales documents."
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
  - pricing-condition
  - item-level
  - component:SD-MD-CM-2CL
  - lob:Sales & Distribution
---
# D_CONDITIONRECORDCRITERIAITEMP

**D Condition RecordCRITERIAITEMP**

| Property | Value |
|---|---|
| App Component | `SD-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DummyKey` |  | |  | `char1` |  |  |
| `D_CndnTypeSelectionOptionP` |  | |  | `_ConditionType : composition [0..*] of D_CndnTypeSelectionOptionP` |  |  |
| `D_CndnRecordSelectionOptionP` |  | |  | `_ConditionRecord : composition [0..*] of D_CndnRecordSelectionOptionP` |  |  |
| `D_CndnTableSelectionOptionP` |  | |  | `_ConditionTable : composition [0..*] of D_CndnTableSelectionOptionP` |  |  |
| `D_CndnFieldSelectionOptionP` |  | |  | `_ConditionField : composition [0..*] of D_CndnFieldSelectionOptionP` |  |  |
| `_SlsPrcgGetConditionRecordP` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Condition Record Filters (Item)'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE]
define abstract entity D_ConditionRecordCriteriaItemP
{
  DummyKey                    : char1;

  _ConditionType              : composition [0..*] of D_CndnTypeSelectionOptionP;
  _ConditionRecord            : composition [0..*] of D_CndnRecordSelectionOptionP;
  _ConditionTable             : composition [0..*] of D_CndnTableSelectionOptionP;
  _ConditionField             : composition [0..*] of D_CndnFieldSelectionOptionP;

  _SlsPrcgGetConditionRecordP : association to parent D_SlsPrcgGetConditionRecordP;
}
```
