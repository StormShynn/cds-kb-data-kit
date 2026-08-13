---
name: D_CITCLASSIFYPARAMETER
description: "D Citclassifyparameter"
semantic_vi: "View D_CITCLASSIFYPARAMETER hiển thị các tham số phân loại cho các giao dịch tài chính của công ty, có thể được sử dụng để lọc hoặc phân tích giao dịch theo các tiêu chí cụ thể như mã công ty, cấu trúc và sổ cái."
keywords:
  - "classification parameter"
  - "financial transaction"
  - "company code"
  - "hierarchy"
  - "ledger"
  - "fi-loc-cit"
  - "fi"
  - "fi-loc"
  - "component:fi-loc-cit"
  - "lob:finance"
semantic_en: "The D_CITCLASSIFYPARAMETER view exposes classification parameters for a company's financial transactions, which can be used to filter or analyze transactions by specific criteria such as company code, hierarchy, and ledger."
app_component: FI-LOC-CIT
software_component: SAPSCORE
release_state: released
atc_state: released
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

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCodeName` |  | |  | `fis_butxt` |  |  |
| `HierarchyTreeVariableShortText` |  | |  | `char1024` |  |  |
| `LedgerName` |  | |  | `ldtxt` |  |  |
| `FromPostingDate` |  | |  | `dats` |  |  |
| `ToPostingDate` |  | |  | `dats` |  |  |
| `IsChanged` |  | |  | `abap.char( 1 )` |  |  |

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
