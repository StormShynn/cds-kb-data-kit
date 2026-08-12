---
name: I_EARMARKEDFUNDS_DOCTYPE
description: "Earmarkedfunds Doctype"
app_component: FI-FM
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
