---
name: I_ITEMSETTLMTRELEVANCETEXT
description: "Item Settlement Relevance - Text"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ITEMSETTLMTRELEVANCETEXT')/$value
semantic_en: "Item Settlement Relevance - Text"
semantic_vi: "Item Settlement Relevance - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "item"
  - "settlement"
  - "relevance"
  - "text"
  - "settlmt"
  - "language"
  - "name"
  - "domain"
  - "value"
tags:
  - LO
  - component:LO-AB
  - interface-view
  - LO-AB
  - lob:logistics general
---
# I_ITEMSETTLMTRELEVANCETEXT

**Item Settlement Relevance - Text**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ITEMSETTLMTRELEVANCETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ItemSettlmtRelevance` | ✓ | |  | `cast( dd07t.domvalue_l as wlf_settlement_item_relevance )` | `CHAR(1)` | Item Settlement Relevance |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `ItemSettlmtRelevanceName` |  | |  | `cast( dd07t.ddtext as wlf_settlement_item_rlvnce_txt preserving type )` | `CHAR(60)` | Description of Settlement Relevance Item Category |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Language` | | ✓ | | | | |
| `_ItemSettlmtRelevance` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ITEMSETTLMTRELEVANCETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ITEMSETTLMTRELEVANCETEXT')/$value)*

```abap
@EndUserText.label: 'Item Settlement Relevance - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'ItemSettlmtRelevance',
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
  technicalName: 'IWLFITMSMTRELTXT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_ItemSettlmtRelevanceText
  as select from dd07t

  association        to parent I_ItemSettlmtRelevance as _ItemSettlmtRelevance on $projection.ItemSettlmtRelevance = _ItemSettlmtRelevance.ItemSettlmtRelevance
  association [0..1] to I_Language                    as _Language             on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_ItemSettlmtRelevance'
  key cast( dd07t.domvalue_l as wlf_settlement_item_relevance )                                  as ItemSettlmtRelevance,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key dd07t.ddlanguage                                                                           as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wlf_settlement_item_rlvnce_txt preserving type )                     as ItemSettlmtRelevanceName,
      @Consumption.hidden: true
      dd07t.domvalue_l                                                                           as DomainValue,

      /* Associations */
      _ItemSettlmtRelevance,
      _Language
}

where
      dd07t.domname  = 'WLF_SETTLEMENT_ITEM_RELEVANCE'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
