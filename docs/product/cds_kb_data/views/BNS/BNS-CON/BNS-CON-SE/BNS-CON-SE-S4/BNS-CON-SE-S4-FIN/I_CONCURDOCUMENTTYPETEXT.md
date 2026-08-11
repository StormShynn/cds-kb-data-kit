---
name: I_CONCURDOCUMENTTYPETEXT
description: "Type of Concur Document - Text"
app_component: BNS-CON-SE-S4-FIN
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONCURDOCUMENTTYPETEXT')/$value
semantic_en: "Type of Concur Document - Text"
semantic_vi: "Type of Concur Document - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "type"
  - "concur"
  - "document"
  - "text"
  - "language"
  - "domain"
  - "value"
  - "name"
tags:
  - BNS
  - BNS-CON
  - BNS-CON-SE
  - BNS-CON-SE-S4
  - BNS-CON-SE-S4-FIN
  - component:BNS-CON-SE-S4-FIN
  - document
  - interface-view
---
# I_CONCURDOCUMENTTYPETEXT

**Type of Concur Document - Text**

| Property | Value |
|---|---|
| App Component | `BNS-CON-SE-S4-FIN` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONCURDOCUMENTTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` | `LANG(1)` | Language Key |
| `ConcurDocumentType` | ✓ | |  | `cast( dd07t.domvalue_l as cte_fnd_post_doc_type )` | `CHAR(2)` | Concur Document Type |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `ConcurDocumentTypeName` |  | |  | `cast( dd07t.ddtext as concur_document_type_name preserving type )` | `CHAR(60)` | Name of the type of incoming Concur Document |
| `_Language` | | ✓ | | | | |
| `_ConcurDocumentType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONCURDOCUMENTTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONCURDOCUMENTTYPETEXT')/$value)*

```abap
@Analytics.technicalName: 'ICONCURDOCTYPET'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Type of Concur Document - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'ConcurDocumentType'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@AbapCatalog.entityBuffer.definitionAllowed:true

define view entity I_ConcurDocumentTypeText
  as select from dd07t
  association        to parent I_ConcurDocumentType as _ConcurDocumentType on $projection.ConcurDocumentType = _ConcurDocumentType.ConcurDocumentType
  association [0..1] to I_Language                         as _Language    on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type )                    as Language,
      @ObjectModel.foreignKey.association: '_ConcurDocumentType'
      @ObjectModel.text.element: ['ConcurDocumentTypeName']
  key cast( dd07t.domvalue_l as cte_fnd_post_doc_type )                    as ConcurDocumentType,
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                                     as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as concur_document_type_name preserving type ) as ConcurDocumentTypeName,
      _ConcurDocumentType,
      _Language
}
where
      dd07t.domname  = 'CTE_FND_POST_DOC_TYPE'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
