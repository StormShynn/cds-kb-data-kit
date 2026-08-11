---
name: I_DOCINTRASTATRELEVANCE
description: "This CDS view is used to select the Document Intrastate Relevance. The following values have been maintained: ‘’ Document Is Not Relevant for Intrastat 1 Document Is Relevant for Intrastat 2 Data for Creation of Intrastat Declaration Transferred 3 Error During Data Transfer for Intrastat This CDS view provides the prerequisites for answering the following business questions: What is the document intrastate relevance?"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DOCINTRASTATRELEVANCE')/$value
semantic_en: "This CDS view is used to select the Document Intrastate Relevance. The following values have been maintained: ‘’ Document Is Not Relevant for Intrastat 1 Document Is Relevant for Intrastat 2 Data for Creation of Intrastat Declaration Transferred 3 Error During Data Transfer for Intrastat This CDS view provides the prerequisites for answering the following business questions: What is the document intrastate relevance?"
semantic_vi: "Document Intrastat Relevance — CDS view cơ bản dựa trên dd07l."
keywords:
  - "document"
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
# I_DOCINTRASTATRELEVANCE

**This CDS view is used to select the Document Intrastate Relevance. The following values have been maintained: ‘’ Document Is Not Relevant for Intrastat 1 Document Is Relevant for Intrastat 2 Data for Creation of Intrastat Declaration Transferred 3 Error During Data Transfer for Intrastat This CDS view provides the prerequisites for answering the following business questions: What is the document intrastate relevance?**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DOCINTRASTATRELEVANCE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DocIntrastatRelevance` | ✓ | |  | `cast( dd07l.domvalue_l as wlf_intrastat_relevant )` | `CHAR(1)` | Document is Relevant for Intrastat Declarations |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DOCINTRASTATRELEVANCE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DOCINTRASTATRELEVANCE')/$value)*

```abap
@EndUserText.label: 'Document Intrastat Relevance'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
//  sapObjectNodeType.name: '',
  dataCategory: #VALUE_HELP,
  representativeKey: 'DocIntrastatRelevance',
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
  technicalName: 'IWLFDOCINTSTREL'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_DocIntrastatRelevance
  as select from dd07l
  
  composition [0..*] of I_DocIntrastatRelevanceText as _Text
  
{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as wlf_intrastat_relevant )                                  as DocIntrastatRelevance,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                                                    as DomainValue,

      /* Associations */
      _Text
}
where
      dd07l.domname  = 'WLF_INTRASTAT_RELEVANT'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
