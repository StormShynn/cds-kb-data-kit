---
name: I_SETTLMTCOLLECTIONCATEGORYT
description: "This CDS view is used to select the settlement classification category. Values: Inactive 1 - Active at header level 2 - Active at item level"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTCOLLECTIONCATEGORYT')/$value
semantic_en: "This CDS view is used to select the settlement classification category. Values: Inactive 1 - Active at header level 2 - Active at item level"
semantic_vi: "Settlement Collection Category - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "settlement"
  - "collection"
  - "category"
  - "text"
  - "settlmt"
  - "language"
  - "domain"
  - "value"
  - "name"
tags:
  - LO
  - bo:companycode
  - component:LO-AB
  - interface-view
  - LO-AB
  - lob:logistics general
---
# I_SETTLMTCOLLECTIONCATEGORYT

**This CDS view is used to select the settlement classification category. Values: Inactive 1 - Active at header level 2 - Active at item level**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTCOLLECTIONCATEGORYT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtCollectionCategory` | ✓ | |  | `cast( dd07t.domvalue_l as wlf_collection_type )` | `CHAR(1)` | Collection Category for Settlement |
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` | `LANG(1)` | Language Key |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `SettlmtCollectionCategoryName` |  | |  | `cast( dd07t.ddtext as wlf_collection_type_txt preserving type )` | `CHAR(60)` | Description of Collection Category for Settlement |
| `_Language` | | ✓ | | | | |
| `_SettlmtCollectionCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTCOLLECTIONCATEGORYT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTCOLLECTIONCATEGORYT')/$value)*

```abap
@EndUserText.label: 'Settlement Collection Category - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey:        'SettlmtCollectionCategory',
  modelingPattern:          #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities:   [#LANGUAGE_DEPENDENT_TEXT,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #SQL_DATA_SOURCE,
                            #CDS_MODELING_DATA_SOURCE,
                            #SEARCHABLE_ENTITY,
                            #EXTRACTION_DATA_SOURCE],
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
  dataExtraction.enabled: true,
  technicalName: 'ISETCOLCATT'
}  
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK", "KEY_CHECK" ]  } */
define view entity I_SettlmtCollectionCategoryT
  as select from dd07t

  association        to parent I_SettlmtCollectionCategory as _SettlmtCollectionCategory on $projection.SettlmtCollectionCategory = _SettlmtCollectionCategory.SettlmtCollectionCategory
  association [0..1] to I_Language                         as _Language                  on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_SettlmtCollectionCategory'
      @ObjectModel.text.element: ['SettlmtCollectionCategoryName']
  key cast( dd07t.domvalue_l as wlf_collection_type )                                  as SettlmtCollectionCategory,
  
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type )                                as Language,
  
      @Consumption.hidden: true
      dd07t.domvalue_l                                                                 as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wlf_collection_type_txt preserving type )                  as SettlmtCollectionCategoryName,

      /* Associations */
      _SettlmtCollectionCategory,
      _Language
}
where
      dd07t.domname  = 'WLF_COLLECTION_TYPE'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
