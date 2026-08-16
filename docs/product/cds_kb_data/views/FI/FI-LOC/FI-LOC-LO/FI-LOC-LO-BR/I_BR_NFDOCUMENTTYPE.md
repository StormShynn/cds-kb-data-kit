---
name: I_BR_NFDOCUMENTTYPE
description: "BR Nfdocumenttype"
semantic_vi: "View I_BR_NFDOCUMENTTYPE hiển thị các loại tài liệu kinh doanh cho Brazil, có thể được sử dụng khi làm việc với tài liệu tài chính trong thành phần FI-LOC-LO-BR."
keywords:
  - "brasil"
  - "document"
  - "finance"
  - "fi-loc-lo-br"
  - "document type"
  - "tài liệu kinh doanh"
  - "tài chính"
  - "lo-br"
semantic_en: "The I_BR_NFDOCUMENTTYPE view exposes business document types for Brazil, which can be used when working with financial documents in the FI-LOC-LO-BR component."
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
  - document
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_NFDOCUMENTTYPE

**BR Nfdocumenttype**

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
| `BR_NFDocumentType` | ✓ | | `_BR_NFDocumentType` | `doctyp` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BR_NFDocumentTypeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBRNFDOCTYPE'
@EndUserText.label: 'Brazil Nota Fiscal Document Type'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.representativeKey: 'BR_NFDocumentType'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@AbapCatalog.preserveKey:true 
@Analytics.dataCategory: #DIMENSION 
@Analytics.internalName: #LOCAL
@Search.searchable: true
@Consumption.ranked: true

define view I_BR_NFDocumentType as select from j_1bdoctypes as _BR_NFDocumentType
    association [0..*] to I_BR_NFDocumentTypeText as _Text on $projection.BR_NFDocumentType = _Text.BR_NFDocumentType
{
  @ObjectModel.text.association: '_Text'
  @Search.defaultSearchElement:true
  @Search.ranking: #HIGH
  key _BR_NFDocumentType.doctyp as BR_NFDocumentType,
  @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
  _Text
}
```
