---
name: I_ITMSETTLMTDOCCOLLRELEVANCET
description: "This CDS view is used to select the Item Settlement Document Collection Relevance. The following values have been maintained: ‘ ’ As Accounts Receivable 1 As Accounts Payable This CDS view provides the prerequisites for answering the following business questions: What is the Item Settlement Document Collection Relevance?"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ITMSETTLMTDOCCOLLRELEVANCET')/$value
semantic_en: "This CDS view is used to select the Item Settlement Document Collection Relevance. The following values have been maintained: ‘ ’ As Accounts Receivable 1 As Accounts Payable This CDS view provides the prerequisites for answering the following business questions: What is the Item Settlement Document Collection Relevance?"
semantic_vi: "Item Settlmt Doc Coll Relevance - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "item"
  - "settlmt"
  - "doc"
  - "coll"
  - "relevance"
  - "text"
  - "language"
  - "name"
  - "domain"
  - "value"
tags:
  - LO
  - account
  - bo:plant
  - component:LO-AB
  - document
  - interface-view
  - LO-AB
  - lob:logistics general
---
# I_ITMSETTLMTDOCCOLLRELEVANCET

**This CDS view is used to select the Item Settlement Document Collection Relevance. The following values have been maintained: ‘ ’ As Accounts Receivable 1 As Accounts Payable This CDS view provides the prerequisites for answering the following business questions: What is the Item Settlement Document Collection Relevance?**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ITMSETTLMTDOCCOLLRELEVANCET')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ItmSettlmtDocCollRelevance` | ✓ | |  | `cast( dd07t.domvalue_l as wlf_collection_relevance )` | `CHAR(1)` | Collective Settlement Relevance of Settlement Documents |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `ItmSettlmtDocCollRelevanceName` |  | |  | `cast( dd07t.ddtext as wlf_collection_relevance_txt preserving type )` | `CHAR(60)` | Description of Collective Settlement Relevance Category |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Language` | | ✓ | | | | |
| `_ItmSettlmtDocCollRelevance` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ITMSETTLMTDOCCOLLRELEVANCET')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ITMSETTLMTDOCCOLLRELEVANCET')/$value)*

```abap
@EndUserText.label: 'Item Settlmt Doc Coll Relevance - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'ItmSettlmtDocCollRelevance',
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
  technicalName: 'IWLFITSDCOLLRELT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_ItmSettlmtDocCollRelevanceT
  as select from dd07t

  association        to parent I_ItmSettlmtDocCollRelevance as _ItmSettlmtDocCollRelevance on $projection.ItmSettlmtDocCollRelevance = _ItmSettlmtDocCollRelevance.ItmSettlmtDocCollRelevance
  association [0..1] to I_Language                          as _Language                   on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_ItmSettlmtDocCollRelevance'
      @ObjectModel.text.element: ['ItmSettlmtDocCollRelevanceName']
  key cast( dd07t.domvalue_l as wlf_collection_relevance )                                  as ItmSettlmtDocCollRelevance,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key dd07t.ddlanguage                                                                      as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wlf_collection_relevance_txt preserving type )                  as ItmSettlmtDocCollRelevanceName,
      @Consumption.hidden: true
      dd07t.domvalue_l                                                                      as DomainValue,

      /* Associations */
      _ItmSettlmtDocCollRelevance,
      _Language
}

where
      dd07t.domname  = 'WLF_COLLECTION_RELEVANCE'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
