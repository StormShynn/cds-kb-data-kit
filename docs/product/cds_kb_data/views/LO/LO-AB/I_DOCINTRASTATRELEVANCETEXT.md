---
name: I_DOCINTRASTATRELEVANCETEXT
description: "This CDS view is used to select the Document Intrastate Relevance. The following values have been maintained: ‘’ Document Is Not Relevant for Intrastat 1 Document Is Relevant for Intrastat 2 Data for Creation of Intrastat Declaration Transferred 3 Error During Data Transfer for Intrastat This CDS view provides the prerequisites for answering the following business questions: What is the document intrastate relevance?"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DOCINTRASTATRELEVANCETEXT')/$value
semantic_en: "This CDS view is used to select the Document Intrastate Relevance. The following values have been maintained: ‘’ Document Is Not Relevant for Intrastat 1 Document Is Relevant for Intrastat 2 Data for Creation of Intrastat Declaration Transferred 3 Error During Data Transfer for Intrastat This CDS view provides the prerequisites for answering the following business questions: What is the document intrastate relevance?"
semantic_vi: "Document Intrastat Relevance - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "document"
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
# I_DOCINTRASTATRELEVANCETEXT

**This CDS view is used to select the Document Intrastate Relevance. The following values have been maintained: ‘’ Document Is Not Relevant for Intrastat 1 Document Is Relevant for Intrastat 2 Data for Creation of Intrastat Declaration Transferred 3 Error During Data Transfer for Intrastat This CDS view provides the prerequisites for answering the following business questions: What is the document intrastate relevance?**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DOCINTRASTATRELEVANCETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DocIntrastatRelevance` | ✓ | |  | `cast( dd07t.domvalue_l as wlf_intrastat_relevant )` | `CHAR(1)` | Document is Relevant for Intrastat Declarations |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `DocIntrastatRelevanceName` |  | |  | `cast( dd07t.ddtext as wlf_intrastat_relevant_txt preserving type )` | `CHAR(60)` | Description of Intrastat Declaration Relevance Category |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Language` | | ✓ | | | | |
| `_DocIntrastatRelevance` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DOCINTRASTATRELEVANCETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DOCINTRASTATRELEVANCETEXT')/$value)*

```abap
@EndUserText.label: 'Document Intrastat Relevance - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'DocIntrastatRelevance',
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
  technicalName: 'IWLFDOCINTSTRELT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_DocIntrastatRelevanceText
  as select from dd07t

  association        to parent I_DocIntrastatRelevance as _DocIntrastatRelevance on $projection.DocIntrastatRelevance = _DocIntrastatRelevance.DocIntrastatRelevance
  association [0..1] to I_Language                     as _Language              on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_DocIntrastatRelevance'
      @ObjectModel.text.element: ['DocIntrastatRelevanceName']
  key cast( dd07t.domvalue_l as wlf_intrastat_relevant )                                  as DocIntrastatRelevance,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key dd07t.ddlanguage                                                                    as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wlf_intrastat_relevant_txt preserving type )                  as DocIntrastatRelevanceName,
      @Consumption.hidden: true
      dd07t.domvalue_l                                                                    as DomainValue,

      /* Associations */
      _DocIntrastatRelevance,
      _Language
}

where
      dd07t.domname  = 'WLF_INTRASTAT_RELEVANT'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
