---
name: I_BR_NFDOCUMENTTYPETEXT
description: "BR Nfdocumenttypetext"
semantic_vi: "View BR Nfdocumenttypetext hiển thị dữ liệu kinh doanh liên quan đến loại tài liệu trong ngữ cảnh tài chính, cung cấp mô tả văn bản cho các loại tài liệu này trong các ngôn ngữ khác nhau. Nó có thể được sử dụng khi hiển thị hoặc xử lý các loại tài liệu với văn bản địa phương."
keywords:
  - "financial document"
  - "tài liệu tài chính"
  - "document type"
  - "loại tài liệu"
  - "text description"
  - "mô tả văn bản"
  - "language"
  - "ngôn ngữ"
  - "sap fi"
  - "fi sap"
  - "cds view"
  - "view cds"
semantic_en: "The BR Nfdocumenttypetext view exposes business data related to document types in a financial context, providing text descriptions for these types in different languages. It can be used when displaying or processing document types with localized text."
app_component: FI-LOC-LO-BR
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-LO
  - interface-view
  - text-view
  - document
  - text
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_NFDOCUMENTTYPETEXT

**BR Nfdocumenttypetext**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | | `_BR_NFDocumentTypeText` | `spras` |  |  |
| `BR_NFDocumentType` | ✓ | | `_BR_NFDocumentTypeText` | `doctyp` |  |  |
| `BR_NFDocumentTypeDesc` |  | |  | `cast(_BR_NFDocumentTypeText.text as logbr_nf_doc_type_desc)` |  |  |
| `_BR_NFDocumentType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BR_NFDocumentType` | `I_BR_NFDocumentType` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBRNFDOCTYPETEXT'
@EndUserText.label: 'Brazil Nota Fiscal Document Type - Text'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.representativeKey: 'BR_NFDocumentType'
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@AbapCatalog.preserveKey:true 
@Search.searchable: true

define view I_BR_NFDocumentTypeText as select from j_1bdoctypest as _BR_NFDocumentTypeText
  association [1..1] to I_BR_NFDocumentType as _BR_NFDocumentType on $projection.BR_NFDocumentType = _BR_NFDocumentType.BR_NFDocumentType
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language 
{
  @Semantics.language: true
  key _BR_NFDocumentTypeText.spras as Language,
  
  @ObjectModel.foreignKey.association: '_BR_NFDocumentType'
  key _BR_NFDocumentTypeText.doctyp as BR_NFDocumentType,
  
  @Search.fuzzinessThreshold: 0.8
  @Search.defaultSearchElement:true
  @Search.ranking: #LOW
  @Semantics.text: true
  cast(_BR_NFDocumentTypeText.text as logbr_nf_doc_type_desc) as BR_NFDocumentTypeDesc,  
  _BR_NFDocumentType,
  _Language
} 
where _BR_NFDocumentTypeText.spras = $session.system_language
```
