---
name: I_EARMARKEDFUNDS_DOCTYPETEXT
description: "Earmarkedfunds Doctypetext"
app_component: FI-FM
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-FM
  - interface-view
  - text-view
  - text
  - component:FI-FM
  - lob:Finance
---
# I_EARMARKEDFUNDS_DOCTYPETEXT

**Earmarkedfunds Doctypetext**

| Property | Value |
|---|---|
| App Component | `FI-FM` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `EarmarkedFundsDocumentCategory` | ✓ | |  | `bltyp` |  |  |
| `EarmarkedFundsDocumentType` | ✓ | |  | `cast ( blart as fmre_blart preserving type )` |  |  |
| `EarmarkedFundsDocTypeText` |  | |  | `cast ( batxt as fmis_efd_doctypetext preserving type )` |  |  |
| `_EarmarkedFundsDocCategory` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |
| `_EarmarkedFundsDocType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EarmarkedFundsDocCategory` | `I_EarmarkedFunds_DocCategory` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
    dataExtraction.enabled: true,
    technicalName: 'IEFDOCTYPETXT'
  }
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                                     #EXTRACTION_DATA_SOURCE]
@ObjectModel: {
    usageType: {
        dataClass: #CUSTOMIZING,
        serviceQuality: #A,
        sizeCategory: #S
      },
    representativeKey: 'EarmarkedFundsDocumentType',
    dataCategory: #TEXT,
    modelingPattern: #LANGUAGE_DEPENDENT_TEXT 
  }
@Search.searchable: true
@Consumption.ranked: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Earmarked Funds Document Type - Text'
define view entity I_EarmarkedFunds_DocTypeText
  as select from tkbbat
  association [1..1] to I_EarmarkedFunds_DocCategory    as _EarmarkedFundsDocCategory on  $projection.EarmarkedFundsDocumentCategory = _EarmarkedFundsDocCategory.EarmarkedFundsDocumentCategory
  association        to parent I_EarmarkedFunds_DocType as _EarmarkedFundsDocType     on  $projection.EarmarkedFundsDocumentCategory = _EarmarkedFundsDocType.EarmarkedFundsDocumentCategory
                                                                                      and $projection.EarmarkedFundsDocumentType     = _EarmarkedFundsDocType.EarmarkedFundsDocumentType
  association [0..1] to I_Language                      as _Language                  on  $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras                                                  as Language,
      @ObjectModel.foreignKey.association: '_EarmarkedFundsDocCategory'
      @Search: { defaultSearchElement: true, ranking: #HIGH }
  key bltyp                                                  as EarmarkedFundsDocumentCategory,
      @ObjectModel.foreignKey.association: '_EarmarkedFundsDocType'
      @ObjectModel.text.element: ['EarmarkedFundsDocTypeText']
      @Search: { defaultSearchElement: true, ranking: #HIGH }
  key cast ( blart as fmre_blart preserving type )           as EarmarkedFundsDocumentType,
      @Search.fuzzinessThreshold: 0.8
      @Search: { defaultSearchElement: true, ranking: #LOW }
      @Semantics.text: true
      cast ( batxt as fmis_efd_doctypetext preserving type ) as EarmarkedFundsDocTypeText,

      _EarmarkedFundsDocType,
      _EarmarkedFundsDocCategory,
      _Language
}
```
