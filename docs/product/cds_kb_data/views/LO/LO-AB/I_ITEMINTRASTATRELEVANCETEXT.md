---
name: I_ITEMINTRASTATRELEVANCETEXT
description: "This CDS view is used to select the Item Intrastat Relevance. The following values have been maintained: ‘’ Document item is not relevant 1 Document item is relevant This CDS view provides the prerequisites for answering the following business questions: What is the Item Intrastat Relevance?"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ITEMINTRASTATRELEVANCETEXT')/$value
semantic_en: "This CDS view is used to select the Item Intrastat Relevance. The following values have been maintained: ‘’ Document item is not relevant 1 Document item is relevant This CDS view provides the prerequisites for answering the following business questions: What is the Item Intrastat Relevance?"
semantic_vi: "Item Intrastat Relevance - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "item"
  - "intrastat"
  - "relevance"
  - "text"
  - "language"
  - "name"
  - "domain"
  - "value"
tags:
  - LO
  - bo:plant
  - component:LO-AB
  - document
  - interface-view
  - LO-AB
  - lob:logistics general
---
# I_ITEMINTRASTATRELEVANCETEXT

**This CDS view is used to select the Item Intrastat Relevance. The following values have been maintained: ‘’ Document item is not relevant 1 Document item is relevant This CDS view provides the prerequisites for answering the following business questions: What is the Item Intrastat Relevance?**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ITEMINTRASTATRELEVANCETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ItemIntrastatRelevance` | ✓ | |  | `cast( dd07t.domvalue_l as wlf_item_intrastat_relevant )` | `CHAR(1)` | Document Item is Relevant for Intrastat Declarations |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `ItemIntrastatRelevanceName` |  | |  | `cast( dd07t.ddtext as wlf_item_intrastat_relevant_t preserving type )` | `CHAR(60)` | Description of Item Intrastat Declaration Relevance Category |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Language` | | ✓ | | | | |
| `_ItemIntrastatRelevance` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ITEMINTRASTATRELEVANCETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ITEMINTRASTATRELEVANCETEXT')/$value)*

```abap
@EndUserText.label: 'Item Intrastat Relevance - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'ItemIntrastatRelevance',
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                          #SQL_DATA_SOURCE,
                          #CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SEARCHABLE_ENTITY],
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
  technicalName: 'IWLFITMINTSTRELT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_ItemIntrastatRelevanceText
  as select from dd07t

  association        to parent I_ItemIntrastatRelevance as _ItemIntrastatRelevance on $projection.ItemIntrastatRelevance = _ItemIntrastatRelevance.ItemIntrastatRelevance
  association [0..1] to I_Language                      as _Language               on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_ItemIntrastatRelevance'
      @ObjectModel.text.element: ['ItemIntrastatRelevanceName']  
  key cast( dd07t.domvalue_l as wlf_item_intrastat_relevant )               as ItemIntrastatRelevance,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key dd07t.ddlanguage                                                      as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wlf_item_intrastat_relevant_t preserving type ) as ItemIntrastatRelevanceName,
      @Consumption.hidden: true
      dd07t.domvalue_l                                                      as DomainValue,

      /* Associations */
      _ItemIntrastatRelevance,
      _Language
}

where
      dd07t.domname  = 'WLF_ITEM_INTRASTAT_RELEVANT'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
