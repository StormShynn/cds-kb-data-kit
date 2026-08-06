---
name: D_BILLOFMATERIALGETCOMPAREFLDR
description: D Bill of MaterialGETCOMPAREFLDR
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
  - material
  - bill-of-material
  - component:LO-MD-BOM-2CL
  - lob:Logistics General
  - bo:Material
---
# D_BILLOFMATERIALGETCOMPAREFLDR

**D Bill of MaterialGETCOMPAREFLDR**

| Property | Value |
|---|---|
| App Component | `LO-MD-BOM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ComparisonFieldName` | `fieldname` |
| `ComparisonFieldNameText` | `as4text` |
| `ComparisonFieldObjTypeValue` | `bom_comp_obj_type` |

## Source Code

```abap
@EndUserText.label: 'Bill of Material Comparison fields'
@VDM.usage.type:[#ACTION_RESULT_STRUCTURE]
@ObjectModel: { 
  supportedCapabilities: [#DATA_STRUCTURE],
  modelingPattern: #DATA_STRUCTURE               
 }   
define abstract entity D_BillOfMaterialGetCompareFldR
{
  ComparisonFieldName          : fieldname;
  ComparisonFieldNameText      : as4text;
  ComparisonFieldObjTypeValue  : bom_comp_obj_type;
}
```
