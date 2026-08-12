---
name: I_ITEMINTRASTATRELEVANCE
description: "This CDS view is used to select the Item Intrastat Relevance. The following values have been maintained: ‘’ Document item is not relevant 1 Document item is relevant This CDS view provides the prerequisites for answering the following business questions: What is the Item Intrastat Relevance?"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ITEMINTRASTATRELEVANCE')/$value
semantic_en: "This CDS view is used to select the Item Intrastat Relevance. The following values have been maintained: ‘’ Document item is not relevant 1 Document item is relevant This CDS view provides the prerequisites for answering the following business questions: What is the Item Intrastat Relevance?"
semantic_vi: "Item Intrastat Relevance — CDS view cơ bản dựa trên dd07l."
keywords:
  - "item"
  - "intrastat"
  - "relevance"
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
# I_ITEMINTRASTATRELEVANCE

**This CDS view is used to select the Item Intrastat Relevance. The following values have been maintained: ‘’ Document item is not relevant 1 Document item is relevant This CDS view provides the prerequisites for answering the following business questions: What is the Item Intrastat Relevance?**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ITEMINTRASTATRELEVANCE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ItemIntrastatRelevance` | ✓ | |  | `cast( dd07l.domvalue_l as wlf_item_intrastat_relevant )` | `CHAR(1)` | Document Item is Relevant for Intrastat Declarations |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ITEMINTRASTATRELEVANCE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ITEMINTRASTATRELEVANCE')/$value)*

```abap
@EndUserText.label: 'Item Intrastat Relevance'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
//  sapObjectNodeType.name: '',
  dataCategory: #VALUE_HELP,
  representativeKey: 'ItemIntrastatRelevance',
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
  technicalName: 'IWLFITMINTSTREL'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_ItemIntrastatRelevance
  as select from dd07l
  
  composition [0..*] of I_ItemIntrastatRelevanceText as _Text
  
{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as wlf_item_intrastat_relevant )                     as ItemIntrastatRelevance,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                                             as DomainValue,

      /* Associations */
      _Text
}
where
      dd07l.domname  = 'WLF_ITEM_INTRASTAT_RELEVANT'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
