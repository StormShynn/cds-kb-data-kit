---
name: D_CONDITIONRECORDCRITERIAITEMP
description: D Condition RecordCRITERIAITEMP
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

| Field | Data Source |
|---|---|
| `DummyKey` | `char1` |
| `D_CndnTypeSelectionOptionP` | `_ConditionType : composition [0..*] of D_CndnTypeSelectionOptionP` |
| `D_CndnRecordSelectionOptionP` | `_ConditionRecord : composition [0..*] of D_CndnRecordSelectionOptionP` |
| `D_CndnTableSelectionOptionP` | `_ConditionTable : composition [0..*] of D_CndnTableSelectionOptionP` |
| `D_CndnFieldSelectionOptionP` | `_ConditionField : composition [0..*] of D_CndnFieldSelectionOptionP` |
| `_SlsPrcgGetConditionRecordP` | *Association* |

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
