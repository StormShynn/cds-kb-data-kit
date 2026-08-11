---
name: I_SETTLMTDOCSMMRZNCAT
description: "This CDS view exposes fixed values of the field Settlement Document Summarization Category. The following fixed values have been maintained: \" \" Document Summarization not Active 1 Doc. Summarization Active (Collective Document from Single Documents) 2 Document Stored in Collective Document"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCSMMRZNCAT')/$value
semantic_en: "This CDS view exposes fixed values of the field Settlement Document Summarization Category. The following fixed values have been maintained: \" \" Document Summarization not Active 1 Doc. Summarization Active (Collective Document from Single Documents) 2 Document Stored in Collective Document"
semantic_vi: "Settlmt Doc Summarization Category — CDS view cơ bản dựa trên dd07l."
keywords:
  - "settlmt"
  - "doc"
  - "summarization"
  - "category"
  - "smmrzn"
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
# I_SETTLMTDOCSMMRZNCAT

**This CDS view exposes fixed values of the field Settlement Document Summarization Category. The following fixed values have been maintained: " " Document Summarization not Active 1 Doc. Summarization Active (Collective Document from Single Documents) 2 Document Stored in Collective Document**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCSMMRZNCAT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtDocSmmrznCat` | ✓ | |  | `cast(dd07l.domvalue_l as wcollection )` | `CHAR(1)` | Document Summarization Category |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCSMMRZNCAT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCSMMRZNCAT')/$value)*

```abap
@EndUserText.label: 'Settlmt Doc Summarization Category'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
//  sapObjectNodeType.name: '',
  dataCategory: #VALUE_HELP,
  representativeKey: 'SettlmtDocSmmrznCat',
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
  technicalName: 'IWLFSDCSUMCAT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_SettlmtDocSmmrznCat
  as select from dd07l

  composition [0..*] of I_SettlmtDocSmmrznCatText as _Text
  
{
      @ObjectModel.text.association: '_Text'
  key cast(dd07l.domvalue_l as wcollection )             as SettlmtDocSmmrznCat,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                   as DomainValue,

      /* Associations */
      _Text
}
where
      dd07l.domname  = 'WCOLLECTION'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
