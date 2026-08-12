---
name: I_CONCURDOCUMENTTYPETEXT
description: "Type of Concur Document - Text"
app_component: BNS-CON-SE-S4-FIN
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
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
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
