---
name: I_ITMSETTLMTDOCCOLLRELEVANCE
description: "This CDS view is used to select the Item Settlement Document Collection Relevance. The following values have been maintained: ‘ ’ As Accounts Receivable 1 As Accounts Payable This CDS view provides the prerequisites for answering the following business questions: What is the Item Settlement Document Collection Relevance?"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ITMSETTLMTDOCCOLLRELEVANCE')/$value
semantic_en: "This CDS view is used to select the Item Settlement Document Collection Relevance. The following values have been maintained: ‘ ’ As Accounts Receivable 1 As Accounts Payable This CDS view provides the prerequisites for answering the following business questions: What is the Item Settlement Document Collection Relevance?"
semantic_vi: "Item Settlmt Doc Collection Relevance — CDS view cơ bản dựa trên dd07l."
keywords:
  - "item"
  - "settlmt"
  - "doc"
  - "collection"
  - "relevance"
  - "coll"
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
# I_ITMSETTLMTDOCCOLLRELEVANCE

**This CDS view is used to select the Item Settlement Document Collection Relevance. The following values have been maintained: ‘ ’ As Accounts Receivable 1 As Accounts Payable This CDS view provides the prerequisites for answering the following business questions: What is the Item Settlement Document Collection Relevance?**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ITMSETTLMTDOCCOLLRELEVANCE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ItmSettlmtDocCollRelevance` | ✓ | |  | `cast( dd07l.domvalue_l as wlf_collection_relevance )` | `CHAR(1)` | Collective Settlement Relevance of Settlement Documents |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ITMSETTLMTDOCCOLLRELEVANCE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ITMSETTLMTDOCCOLLRELEVANCE')/$value)*

```abap
@EndUserText.label: 'Item Settlmt Doc Collection Relevance'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
//  sapObjectNodeType.name: '',
  dataCategory: #VALUE_HELP,
  representativeKey: 'ItmSettlmtDocCollRelevance',
  modelingPattern : #ANALYTICAL_DIMENSION,
  supportedCapabilities : [#ANALYTICAL_DIMENSION,
                           #SQL_DATA_SOURCE,
                           #CDS_MODELING_DATA_SOURCE,
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #SEARCHABLE_ENTITY,
                           #VALUE_HELP_PROVIDER],
  usageType: {
    dataClass:      #META,
    serviceQuality: #A,
    sizeCategory:   #S
  },
  resultSet.sizeCategory: #XS
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Search.searchable: true
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: false,
  internalName: #LOCAL,
  technicalName: 'IWLFITSDCOLLREL'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_ItmSettlmtDocCollRelevance
  as select from dd07l

  composition [0..*] of I_ItmSettlmtDocCollRelevanceT as _Text

{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as wlf_collection_relevance )                      as ItmSettlmtDocCollRelevance,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                                          as DomainValue,

      /* Associations */
      _Text
}
where
      dd07l.domname  = 'WLF_COLLECTION_RELEVANCE'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
