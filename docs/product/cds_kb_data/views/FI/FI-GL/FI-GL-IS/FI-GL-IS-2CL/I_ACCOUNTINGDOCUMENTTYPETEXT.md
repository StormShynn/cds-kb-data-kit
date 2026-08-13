---
name: I_ACCOUNTINGDOCUMENTTYPETEXT
description: "Accounting DocumentUMENTTYPETEXT"
semantic_vi: "View I_ACCOUNTINGDOCUMENTTYPETEXT hiển thị tên loại tài liệu kế toán trong các ngôn ngữ khác nhau, cho phép hiển thị tên loại tài liệu trong các ứng dụng tài chính theo ngôn ngữ địa phương."
keywords:
  - "accounting document type"
  - "tài liệu kế toán"
  - "loại tài liệu kế toán"
  - "ngôn ngữ"
  - "tài chính"
  - "fi-gl"
  - "fi-gl-is"
  - "finance"
  - "địa phương hóa"
semantic_en: "The I_ACCOUNTINGDOCUMENTTYPETEXT view exposes accounting document type names in different languages, allowing for localized display of document types in financial applications."
app_component: FI-GL-IS-2CL
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
  - FI-GL
  - FI-GL-IS
  - interface-view
  - text-view
  - accounting-document
  - document
  - text
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_ACCOUNTINGDOCUMENTTYPETEXT

**Accounting DocumentUMENTTYPETEXT**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
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
| `AccountingDocumentType` | ✓ | |  | `cast ( blart as farp_blart preserving type )` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `AccountingDocumentTypeName` |  | |  | `cast ( ltext as farp_ltext_003t preserving type )` |  |  |
| `_DocumentType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DocumentType` | `I_AccountingDocumentType` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Accounting Document Type - Text'
@VDM.viewType: #BASIC
@Analytics:{
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
        automatic: true
        }
    }
}
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'AccountingDocumentType'
@AccessControl.authorizationCheck: #CHECK
@AbapCatalog.sqlViewName: 'IFIACCDOCTYPET'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType: {
  dataClass: #CUSTOMIZING,
  serviceQuality: #A,
  sizeCategory: #S
}
@AbapCatalog.buffering:{
  status: #ACTIVE,
  type: #GENERIC,
  numberOfKeyFields: 1
}
@Search.searchable: true
@AbapCatalog.preserveKey:true
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE,#LANGUAGE_DEPENDENT_TEXT,#EXTRACTION_DATA_SOURCE]
define view I_AccountingDocumentTypeText as select from t003t

  association [1..1] to I_AccountingDocumentType as _DocumentType on $projection.AccountingDocumentType = _DocumentType.AccountingDocumentType
  
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language

{
 
  key cast ( blart as farp_blart preserving type ) as AccountingDocumentType,

  @Semantics.language
  @ObjectModel.foreignKey.association: '_Language'
  key spras as Language,

  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8
  @Search.ranking: #HIGH
  @Semantics.text
  cast ( ltext as farp_ltext_003t preserving type ) as AccountingDocumentTypeName,
  
  _DocumentType,
  _Language
    
};
```
