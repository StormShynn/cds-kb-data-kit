---
name: D_EMRKDFNDSDOCTYPESGETFORCRTER
description: "D Emrkdfndsdoctypesgetforcrter"
semantic_vi: "Trả về các loại tài liệu được earmarked cho một loại tài liệu earmarked funds cụ thể. Sử dụng để lấy loại tài liệu cho một loại cụ thể trong quản lý tài liệu earmarked funds."
keywords:
  - "earmarked funds"
  - "document types"
  - "tài liệu earmarked"
  - "loại tài liệu"
  - "psm"
  - "component psm"
  - "lob other"
  - "sap cds"
  - "cds view"
semantic_en: "Returns earmarked funds document types for a specific earmarked funds document category. Used to retrieve document types for a particular category in earmarked funds management."
app_component: PSM
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PSM
  - component:PSM
  - lob:Other
---
# D_EMRKDFNDSDOCTYPESGETFORCRTER

**D Emrkdfndsdoctypesgetforcrter**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EarmarkedFundsDocumentCategory` |  | |  | `fmre_bltyp` |  |  |

## Source Code

```abap
@EndUserText.label: 'Parameter Earmarked Funds Document Type'
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE]
@ObjectModel.supportedCapabilities: [ #DATA_STRUCTURE  ]
define abstract entity D_EmrkdFndsDocTypesGetForCrteR
{
  EarmarkedFundsDocumentCategory : fmre_bltyp;
    
}
```
