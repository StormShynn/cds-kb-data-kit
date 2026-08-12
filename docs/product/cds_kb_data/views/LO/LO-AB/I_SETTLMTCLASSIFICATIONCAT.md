---
name: I_SETTLMTCLASSIFICATIONCAT
description: "This CDS view is used to select the settlement classification category. The CDS view provides the parameters for the domain WSETTLE_CATEGORY with the following values: Standard Document V - Renumeration Settlement (Chargeback)"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTCLASSIFICATIONCAT')/$value
semantic_en: "This CDS view is used to select the settlement classification category. The CDS view provides the parameters for the domain WSETTLE_CATEGORY with the following values: Standard Document V - Renumeration Settlement (Chargeback)"
semantic_vi: "Settlement Classification Category — CDS view cơ bản dựa trên dd07l."
keywords:
  - "settlement"
  - "classification"
  - "category"
  - "settlmt"
  - "domain"
  - "value"
tags:
  - LO
  - bo:companycode
  - component:LO-AB
  - document
  - interface-view
  - LO-AB
  - lob:logistics general
---
# I_SETTLMTCLASSIFICATIONCAT

**This CDS view is used to select the settlement classification category. The CDS view provides the parameters for the domain WSETTLE_CATEGORY with the following values: Standard Document V - Renumeration Settlement (Chargeback)**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTCLASSIFICATIONCAT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtClassificationCat` | ✓ | |  | `cast ( dd07l.domvalue_l as wsettle_category )` | `CHAR(1)` | Settlement Classification Category |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTCLASSIFICATIONCAT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTCLASSIFICATIONCAT')/$value)*

```abap
@EndUserText.label: 'Settlement Classification Category'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
//  sapObjectNodeType.name: '',
  dataCategory: #VALUE_HELP,
  representativeKey: 'SettlmtClassificationCat',
  modelingPattern : #ANALYTICAL_DIMENSION,
  supportedCapabilities : [#ANALYTICAL_DIMENSION, 
                           #CDS_MODELING_ASSOCIATION_TARGET, 
                           #SQL_DATA_SOURCE, 
                           #CDS_MODELING_DATA_SOURCE,
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
  technicalName: 'IWLFSMTCLASSCAT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_SettlmtClassificationCat
  as select from dd07l

  composition [0..*] of I_SettlmtClassificationCatText as _Text

{
      @ObjectModel.text.association: '_Text'
  key cast ( dd07l.domvalue_l  as wsettle_category )          as SettlmtClassificationCat,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                        as DomainValue,

      /* Associations */
      _Text
}
where
      dd07l.domname  = 'WSETTLE_CATEGORY'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
