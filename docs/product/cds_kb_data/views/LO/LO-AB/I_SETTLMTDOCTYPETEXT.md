---
name: I_SETTLMTDOCTYPETEXT
description: "This CDS view provides the prerequisites for answering the following business question: What are the descriptions of settlement document types in different languages?"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCTYPETEXT')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business question: What are the descriptions of settlement document types in different languages?"
semantic_vi: "Settlement Document Type - Text — CDS view cơ bản dựa trên R_SettlmtDocTypeText."
keywords:
  - "settlement"
  - "document"
  - "type"
  - "text"
  - "settlmt"
  - "language"
  - "desc"
tags:
  - LO
  - bo:plant
  - component:LO-AB
  - document
  - interface-view
  - LO-AB
  - lob:logistics general
---
# I_SETTLMTDOCTYPETEXT

**This CDS view provides the prerequisites for answering the following business question: What are the descriptions of settlement document types in different languages?**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtDocType` | ✓ | |  |  | `CHAR(4)` | Settlement Document Type |
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `SettlmtDocTypeDesc` |  | |  |  | `CHAR(40)` | Settlement Document Type Description |
| `_SettlmtDocType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SettlmtDocType` | `I_SettlmtDocType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCTYPETEXT')/$value)*

```abap
@EndUserText.label: 'Settlement Document Type - Text'
@AccessControl: { 
    authorizationCheck: #MANDATORY,
    personalData.blocking: #('TRANSACTIONAL_DATA')
    }
@ObjectModel: {
    dataCategory: #TEXT,
    representativeKey: 'SettlmtDocType',
    modelingPattern:        #LANGUAGE_DEPENDENT_TEXT,
    supportedCapabilities:  [ #LANGUAGE_DEPENDENT_TEXT,
                              #CDS_MODELING_ASSOCIATION_TARGET, 
                              #SQL_DATA_SOURCE,
                              #CDS_MODELING_DATA_SOURCE,
                              #SEARCHABLE_ENTITY ],
    usageType: {
      dataClass:      #CUSTOMIZING,
      serviceQuality: #A,
      sizeCategory:   #S
      }
    }
@Analytics.technicalName: 'IWLFSMTDOCTYPET'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
    }
@Search.searchable: true
@Analytics: {
    internalName: #LOCAL
    }
@Metadata.ignorePropagatedAnnotations: true

define view entity I_SettlmtDocTypeText
  as select from R_SettlmtDocTypeText

  association [0..1] to I_SettlmtDocType as _SettlmtDocType on $projection.SettlmtDocType = _SettlmtDocType.SettlmtDocType
  association [0..1] to I_Language       as _Language       on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_SettlmtDocType'
      @ObjectModel.text.element: ['SettlmtDocTypeDesc']
  key SettlmtDocType,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key Language,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      SettlmtDocTypeDesc,

      /* Associations */
      _SettlmtDocType,
      _Language
}
```
