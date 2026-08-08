---
name: D_SLSPRCGGETCONDITIONRECORDP
description: "D SLSPRCGGETCondition RecordP"
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
  - component:SD-MD-CM-2CL
  - lob:Sales & Distribution
---
# D_SLSPRCGGETCONDITIONRECORDP

**D SLSPRCGGETCondition RecordP**

| Property | Value |
|---|---|
| App Component | `SD-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConditionValidityStartDate` |  | |  | `datab` |  |  |
| `ConditionValidityEndDate` |  | |  | `datbi` |  |  |
| `DeltdConditionRecordIsExcluded` |  | |  | `loevm_ko` |  |  |
| `D_ConditionRecordCriteriaItemP` |  | |  | `_ConditionRecordCriteriaItem : composition [0..*] of D_ConditionRecordCriteriaItemP` |  |  |

## Source Code

```abap
@EndUserText.label: 'Condition Record Filters (Header)'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE]
define root abstract entity D_SlsPrcgGetConditionRecordP
{
  ConditionValidityStartDate     : datab;
  ConditionValidityEndDate       : datbi;
  DeltdConditionRecordIsExcluded : loevm_ko;

  //SAPObjectNodeType              : sap_object_node_type_raw;

  _ConditionRecordCriteriaItem   : composition [0..*] of D_ConditionRecordCriteriaItemP;
}
```
