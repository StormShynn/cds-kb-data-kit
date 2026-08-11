---
name: I_CNDNCONTRACCRRVSLCATTEXT
description: "This CDS view exposes fixed values of the Condition Contract Purpose field."
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRACCRRVSLCATTEXT')/$value
semantic_en: "This CDS view exposes fixed values of the Condition Contract Purpose field."
semantic_vi: "Condition Contract Accr Rvsl Cat - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "condition"
  - "contract"
  - "accr"
  - "rvsl"
  - "cat"
  - "text"
  - "cndn"
  - "contr"
  - "language"
  - "name"
  - "domain"
  - "value"
tags:
  - LO
  - bo:companycode
  - component:LO-GT-CHB
  - contract
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
---
# I_CNDNCONTRACCRRVSLCATTEXT

**This CDS view exposes fixed values of the Condition Contract Purpose field.**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRACCRRVSLCATTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CndnContrAccrRvslCat` | ✓ | |  | `cast(dd07t.domvalue_l as wb2_accruals_reversal_type )` | `CHAR(1)` | Accruals Reversal Type |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `CndnContrAccrRvslCatName` |  | |  | `cast( dd07t.ddtext as wb2_accruals_reversal_type_txt preserving type )` | `CHAR(60)` | Description of Accruals Reversal Type |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Language` | | ✓ | | | | |
| `_CndnContrAccrRvslCat` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRACCRRVSLCATTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRACCRRVSLCATTEXT')/$value)*

```abap
@EndUserText.label: 'Condition Contract Accr Rvsl Cat - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'CndnContrAccrRvslCat',
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #SEARCHABLE_ENTITY,
                          #CDS_MODELING_DATA_SOURCE],
  usageType: {
    dataClass:      #META,
    serviceQuality: #A,
    sizeCategory:   #S
  }
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Search.searchable: true
@Analytics: {
  internalName: #LOCAL,
  technicalName: 'IWCBACCRREVCATT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_CndnContrAccrRvslCatText
  as select from dd07t

  association        to parent I_CndnContrAccrRvslCat as _CndnContrAccrRvslCat on $projection.CndnContrAccrRvslCat = _CndnContrAccrRvslCat.CndnContrAccrRvslCat
  association [0..1] to I_Language                    as _Language             on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_CndnContrAccrRvslCat'
      @ObjectModel.text.element: ['CndnContrAccrRvslCatName']
  key cast(dd07t.domvalue_l as wb2_accruals_reversal_type )                                  as CndnContrAccrRvslCat,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key dd07t.ddlanguage                                                                       as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wb2_accruals_reversal_type_txt preserving type )                 as CndnContrAccrRvslCatName,
      @Consumption.hidden: true
      dd07t.domvalue_l                                                                       as DomainValue,

      /* Associations */
      _CndnContrAccrRvslCat,
      _Language
}

where
      dd07t.domname  = 'WB2_ACCRUALS_REVERSAL_TYPE'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
