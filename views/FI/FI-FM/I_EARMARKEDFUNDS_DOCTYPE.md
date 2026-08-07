---
name: I_EARMARKEDFUNDS_DOCTYPE
description: Earmarkedfunds Doctype
app_component: FI-FM
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-FM
  - interface-view
  - component:FI-FM
  - lob:Finance
---
# I_EARMARKEDFUNDS_DOCTYPE

**Earmarkedfunds Doctype**

| Property | Value |
|---|---|
| App Component | `FI-FM` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EarmarkedFundsDocumentCategory` | ✓ | |  | `bltyp` |  |  |
| `EarmarkedFundsDocumentType` | ✓ | |  | `cast ( blart as fmre_blart preserving type )` |  |  |
| `_EarmarkedFundsDocCategory` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EarmarkedFundsDocCategory` | `I_EarmarkedFunds_DocCategory` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
    dataCategory: #DIMENSION,
    dataExtraction.enabled: true,
    internalName: #LOCAL,
    technicalName: 'IEFDOCTYPE'
  }
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#VALUE_HELP_PROVIDER,
                                     #EXTRACTION_DATA_SOURCE,
                                     #ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel: {
    usageType: {
        dataClass: #CUSTOMIZING,
        serviceQuality: #A,
        sizeCategory: #S
      },
    representativeKey: 'EarmarkedFundsDocumentType',
    sapObjectNodeType.name: 'EarmarkedFundsDocumentType',
    dataCategory: #VALUE_HELP,
    resultSet.sizeCategory: #XS,
    modelingPattern: #VALUE_HELP_PROVIDER
  }
@Search.searchable: true
@Consumption.ranked: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Earmarked Funds Document Type'
define root view entity I_EarmarkedFunds_DocType
  as select from tkbba
  association [0..1] to I_EarmarkedFunds_DocCategory as _EarmarkedFundsDocCategory on $projection.EarmarkedFundsDocumentCategory = _EarmarkedFundsDocCategory.EarmarkedFundsDocumentCategory
  composition [0..*] of I_EarmarkedFunds_DocTypeText as _Text

{
      @ObjectModel.foreignKey.association: '_EarmarkedFundsDocCategory'
      @Search: { defaultSearchElement: true, ranking: #HIGH }
  key bltyp                                        as EarmarkedFundsDocumentCategory,
      @Search: { defaultSearchElement: true, ranking: #HIGH }
      @ObjectModel.text.association: '_Text'
  key cast ( blart as fmre_blart preserving type ) as EarmarkedFundsDocumentType,

      _EarmarkedFundsDocCategory,
      _Text
}
```
