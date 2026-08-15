---
name: I_BR_NFEDOCUMENTSTATUSTEXT
description: "BR Nfedocumentstatustext"
semantic_vi: "View BR Nfedocumentstatustext cung cấp mô tả văn bản của trạng thái tài liệu NFe trong nhiều ngôn ngữ, hữu ích khi hiển thị thông tin trạng thái tài liệu cho người dùng."
keywords:
  - "nfe"
  - "document status"
  - "trạng thái tài liệu"
  - "ngôn ngữ"
  - "fi-loc-lo-br"
  - "finance"
  - "sap"
  - "cds view"
  - "view"
  - "br nfedocumentstatustext"
  - "language"
  - "description"
semantic_en: "The BR Nfedocumentstatustext view provides text descriptions of NFe document statuses in multiple languages, useful when displaying document status information to users."
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
  - status
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_NFEDOCUMENTSTATUSTEXT

**BR Nfedocumentstatustext**

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
| `Language` | ✓ | |  | `cast( ddlanguage as spras preserving type )` |  |  |
| `BR_NFeDocumentStatus` | ✓ | |  | `cast( substring( domvalue_l, 1, 1 ) as logbr_nfedocstatus preserving type )` |  |  |
| `BR_NFeDocumentStatusDesc` |  | |  | `ddtext` |  |  |
| `_BR_NFeDocumentStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BR_NFeDocumentStatus` | `I_BR_NFeDocumentStatus` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Brazil NFe Document Status - Text'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRNFEDOCSTATUST'
@ObjectModel.representativeKey: 'BR_NFeDocumentStatus'
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@AbapCatalog.preserveKey:true 

define view I_BR_NFeDocumentStatusText
  as select from dd07t
  association [1..1] to I_BR_NFeDocumentStatus as _BR_NFeDocumentStatus on $projection.BR_NFeDocumentStatus = _BR_NFeDocumentStatus.BR_NFeDocumentStatus
  association [0..1] to I_Language             as _Language             on $projection.Language = _Language.Language
{
  @Semantics.language
  key cast( ddlanguage as spras preserving type ) as Language,
  @ObjectModel.foreignKey.association: '_BR_NFeDocumentStatus'
  key cast( substring( domvalue_l, 1, 1 ) as  logbr_nfedocstatus preserving type ) as BR_NFeDocumentStatus,
  @Semantics.text
  ddtext as BR_NFeDocumentStatusDesc,
  @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
  _BR_NFeDocumentStatus,
  _Language
}
where domname  = 'J_1BNFEDOCSTATUS'
  and as4local = 'A'
```
