---
name: I_EARMARKEDFUNDS_DOCCATTEXT
description: "Earmarkedfunds Doccattext"
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
  - text-view
  - text
  - component:FI-FM
  - lob:Finance
---
# I_EARMARKEDFUNDS_DOCCATTEXT

**Earmarkedfunds Doccattext**

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
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `EarmarkedFundsDocumentCategory` | ✓ | |  | `cast ( cast ( substring( domvalue_l, 1, 3 ) as abap.numc( 3 ) ) as kbltyp preserving type )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `EarmarkedFundsDocCategoryText` |  | |  | `cast ( ddtext as fmis_efd_doccategorytext preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_EarmarkedFundsDocCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
    dataExtraction.enabled: true,
    technicalName: 'IEFDCATTEXT'
  }
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                                     #EXTRACTION_DATA_SOURCE]
@ObjectModel: {
    usageType: {
        dataClass: #META,
        serviceQuality: #A,
        sizeCategory: #S
      },
    representativeKey: 'EarmarkedFundsDocumentCategory',
    dataCategory: #TEXT,
    modelingPattern: #LANGUAGE_DEPENDENT_TEXT 
  }
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Earmarked Funds Document Category - Text'
define view entity I_EarmarkedFunds_DocCatText
  as select from dd07t
  association        to parent I_EarmarkedFunds_DocCategory as _EarmarkedFundsDocCategory on $projection.EarmarkedFundsDocumentCategory = _EarmarkedFundsDocCategory.EarmarkedFundsDocumentCategory
  association [0..1] to I_Language                          as _Language                  on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key ddlanguage                                                                                  as Language,
      @ObjectModel.foreignKey.association: '_EarmarkedFundsDocCategory'
      @ObjectModel.text.element: ['EarmarkedFundsDocCategoryText']
  key cast ( cast ( substring( domvalue_l, 1, 3 ) as abap.numc( 3 ) ) as kbltyp preserving type ) as EarmarkedFundsDocumentCategory,
      @Consumption.hidden: true
      dd07t.domvalue_l                                                                            as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true
      cast ( ddtext as fmis_efd_doccategorytext preserving type )                                 as EarmarkedFundsDocCategoryText,

      _EarmarkedFundsDocCategory,
      _Language
}

where
      domname       = 'KBLTYP'
  and as4local      = 'A'
  and dd07t.as4vers = '0000'
```
