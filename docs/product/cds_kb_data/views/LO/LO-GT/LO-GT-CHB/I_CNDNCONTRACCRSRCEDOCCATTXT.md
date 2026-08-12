---
name: I_CNDNCONTRACCRSRCEDOCCATTXT
description: "Cndncontraccrsrcedoccattxt"
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-GT
  - LO-GT-CHB
  - interface-view
  - component:LO-GT-CHB
  - lob:Logistics General
---
# I_CNDNCONTRACCRSRCEDOCCATTXT

**Cndncontraccrsrcedoccattxt**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AccrSrceDocCategory` | ✓ | |  | `cast( dd07t.domvalue_l as wcb_accdoc_category )` |  |  |
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `AccrSrceDocCategoryName` |  | |  | `cast( dd07t.ddtext as wcb_accr_srce_doc_cat_descr preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_CndnContrAccrSrceDocCat` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Cndn Contr Accrual Source Doc Cat - Text'
@AccessControl: {
    authorizationCheck: #NOT_REQUIRED
    }
@ObjectModel: {
    dataCategory: #TEXT,
    sapObjectNodeType.name: 'CndnContrAccrualSrceDocCatText',
    representativeKey: 'AccrSrceDocCategory',
    modelingPattern:          #LANGUAGE_DEPENDENT_TEXT,
    supportedCapabilities:  [ #CDS_MODELING_ASSOCIATION_TARGET,
                              #CDS_MODELING_DATA_SOURCE,
                              #EXTRACTION_DATA_SOURCE,
                              #LANGUAGE_DEPENDENT_TEXT,
                              #SEARCHABLE_ENTITY,
                              #SQL_DATA_SOURCE ],
    usageType: {
      serviceQuality: #A,
      dataClass:      #META,
      sizeCategory:   #S
      }
    }
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
    }
@Search.searchable: true
@Analytics.dataExtraction.enabled: true
@Metadata: {
    ignorePropagatedAnnotations: true
    }

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_CndnContrAccrSrceDocCatTxt
  as select from dd07t

  association        to parent I_CndnContrAccrSrceDocCat as _CndnContrAccrSrceDocCat on $projection.AccrSrceDocCategory = _CndnContrAccrSrceDocCat.AccrSrceDocCategory

  association [0..1] to I_Language                       as _Language                on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_CndnContrAccrSrceDocCat'
      @ObjectModel.text.element: ['AccrSrceDocCategoryName']
  key cast( dd07t.domvalue_l as wcb_accdoc_category )                     as AccrSrceDocCategory,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type )                   as Language,
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                                    as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wcb_accr_srce_doc_cat_descr preserving type ) as AccrSrceDocCategoryName,

      /* Associations */
      _CndnContrAccrSrceDocCat,
      _Language
}
where
      dd07t.domname  = 'WCB_DOC_TYPE'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
