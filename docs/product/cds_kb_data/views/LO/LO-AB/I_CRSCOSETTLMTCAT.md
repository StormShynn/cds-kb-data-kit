---
name: I_CRSCOSETTLMTCAT
description: "This CDS view exposes fixed values of the Cross Company Settlement Status Item field."
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRSCOSETTLMTCAT')/$value
semantic_en: "This CDS view exposes fixed values of the Cross Company Settlement Status Item field."
semantic_vi: "Cross Company Settlement Category — CDS view cơ bản dựa trên dd07l."
keywords:
  - "cross"
  - "company"
  - "settlement"
  - "category"
  - "settlmt"
  - "domain"
  - "value"
tags:
  - LO
  - bo:companycode
  - component:LO-AB
  - interface-view
  - LO-AB
  - lob:logistics general
---
# I_CRSCOSETTLMTCAT

**This CDS view exposes fixed values of the Cross Company Settlement Status Item field.**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRSCOSETTLMTCAT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CrsCoSettlmtCat` | ✓ | |  | `cast( dd07l.domvalue_l as wlf_cross_company )` | `CHAR(1)` | Cross-Company Settlement Category |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRSCOSETTLMTCAT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRSCOSETTLMTCAT')/$value)*

```abap
@EndUserText.label: 'Cross Company Settlement Category'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  sapObjectNodeType.name: 'CrossCompanySettlementCategory',
  dataCategory: #VALUE_HELP,
  representativeKey: 'CrsCoSettlmtCat',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#ANALYTICAL_DIMENSION,
                          #VALUE_HELP_PROVIDER, 
                          #SEARCHABLE_ENTITY,
                          #EXTRACTION_DATA_SOURCE,
                          #SQL_DATA_SOURCE, 
                          #CDS_MODELING_DATA_SOURCE, 
                          #CDS_MODELING_ASSOCIATION_TARGET],
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
  dataExtraction.enabled: true,
  internalName: #LOCAL,
  technicalName: 'ICRSCOSETCAT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_CrsCoSettlmtCat
  as select from dd07l

  composition [0..*] of I_CrsCoSettlmtCatText as _Text

{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as wlf_cross_company )                                  as CrsCoSettlmtCat,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                                               as DomainValue,

      /* Associations */
      _Text
}
where
      dd07l.domname  = 'WLF_CROSS_COMPANY'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
