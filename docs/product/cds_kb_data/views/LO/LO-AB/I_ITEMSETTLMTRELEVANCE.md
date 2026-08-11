---
name: I_ITEMSETTLMTRELEVANCE
description: "Item Settlement Relevance"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ITEMSETTLMTRELEVANCE')/$value
semantic_en: "Item Settlement Relevance"
semantic_vi: "Item Settlement Relevance — CDS view cơ bản dựa trên dd07l."
keywords:
  - "item"
  - "settlement"
  - "relevance"
  - "settlmt"
  - "domain"
  - "value"
tags:
  - LO
  - component:LO-AB
  - interface-view
  - LO-AB
  - lob:logistics general
---
# I_ITEMSETTLMTRELEVANCE

**Item Settlement Relevance**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ITEMSETTLMTRELEVANCE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ItemSettlmtRelevance` | ✓ | |  | `cast( dd07l.domvalue_l as wlf_settlement_item_relevance )` | `CHAR(1)` | Item Settlement Relevance |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ITEMSETTLMTRELEVANCE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ITEMSETTLMTRELEVANCE')/$value)*

```abap
@EndUserText.label: 'Item Settlement Relevance'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
//  sapObjectNodeType.name: '',
  dataCategory: #VALUE_HELP,
  representativeKey: 'ItemSettlmtRelevance',
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
  technicalName: 'IWLFITMSMTREL'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_ItemSettlmtRelevance
  as select from dd07l

  composition [0..*] of I_ItemSettlmtRelevanceText as _Text

{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as wlf_settlement_item_relevance )                                  as ItemSettlmtRelevance,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                                                           as DomainValue,

      /* Associations */
      _Text
}
where
      dd07l.domname  = 'WLF_SETTLEMENT_ITEM_RELEVANCE'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
