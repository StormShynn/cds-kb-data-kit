---
name: D_BOMCOMPAREBOMCOMPONENTSR
description: D Bomcomparebomcomponentsr
app_component: LO-MD-BOM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-BOM
  - bom
  - component:LO-MD-BOM-2CL
  - lob:Logistics General
---
# D_BOMCOMPAREBOMCOMPONENTSR

**D Bomcomparebomcomponentsr**

| Property | Value |
|---|---|
| App Component | `LO-MD-BOM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ComparisonFieldName` |  | |  | `fieldname` |  |  |
| `ComparisonFieldNameText` |  | |  | `as4text` |  |  |
| `PrimaryBOMFieldValue` |  | |  | `bom_detail_field` |  |  |
| `SecondaryBOMFieldValue` |  | |  | `bom_detail_field` |  |  |
| `FieldIsRelevantFlag` |  | |  | `cs_comparison_type` |  |  |
| `FieldIsDifferentFlag` |  | |  | `cs_comparison_type` |  |  |

## Source Code

```abap
@EndUserText.label: 'Result for BOM Comparison details'
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE]
@ObjectModel: { 
  supportedCapabilities: [#DATA_STRUCTURE],
  modelingPattern: #DATA_STRUCTURE              
 }   
define abstract entity D_BOMCompareBOMComponentsR
{
  ComparisonFieldName     : fieldname;
  ComparisonFieldNameText : as4text;
  PrimaryBOMFieldValue    : bom_detail_field;
  SecondaryBOMFieldValue  : bom_detail_field;
  FieldIsRelevantFlag     : cs_comparison_type;
  FieldIsDifferentFlag    : cs_comparison_type;
}
```
