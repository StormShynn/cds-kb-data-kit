---
name: D_CITCLASSIFYPARAMETER
description: D Citclassifyparameter
app_component: FI-LOC-CIT
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-CIT
  - component:FI-LOC-CIT
  - lob:Finance
---
# D_CITCLASSIFYPARAMETER

**D Citclassifyparameter**

| Property | Value |
|---|---|
| App Component | `FI-LOC-CIT` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CompanyCodeName` |  | |  | `fis_butxt` |
| `HierarchyTreeVariableShortText` |  | |  | `char1024` |
| `LedgerName` |  | |  | `ldtxt` |
| `FromPostingDate` |  | |  | `dats` |
| `ToPostingDate` |  | |  | `dats` |
| `IsChanged` |  | |  | `abap.char( 1 )` |

## Source Code

```abap
@EndUserText.label: 'CIT Classify Action Parameter'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_CITClassifyParameter
{
  CompanyCodeName                : fis_butxt; //char25
  HierarchyTreeVariableShortText : char1024;  //CIT Hierarchy, char 1024
  LedgerName                     : ldtxt; //char30
  FromPostingDate                : abap.dats;
  ToPostingDate                  : abap.dats;
  IsChanged                      : abap.char( 1 );

}
```
