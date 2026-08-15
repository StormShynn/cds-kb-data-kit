---
name: I_BR_CTEDOCUMENTTYPETEXT
description: "BR Ctedocumenttypetext"
semantic_vi: "View I_BR_CTEDOCUMENTTYPETEXT cung cấp mô tả văn bản cho các loại tài liệu trong hệ thống loại tài liệu BR CTe, được sử dụng để hiển thị tên và mô tả loại tài liệu trong ứng dụng component FI-LOC-LO-BR."
keywords:
  - "br cte document type"
  - "document type text"
  - "fi-loc-lo-br"
  - "finance"
  - "document type description"
  - "language"
  - "document type"
  - "text view"
  - "interface view"
  - "sap fi"
  - "sap fi-loc"
  - "sap fi-loc-lo"
semantic_en: "The I_BR_CTEDOCUMENTTYPETEXT view provides text descriptions for document types in the BR CTe document type system, used to display document type names and descriptions in the FI-LOC-LO-BR application component."
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
# I_BR_CTEDOCUMENTTYPETEXT

**BR Ctedocumenttypetext**

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
| `BR_CTeDocumentType` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as logbr_type_cte preserving type )` |  |  |
| `BR_CTeDocumentTypeDesc` |  | |  | `ddtext` |  |  |
| `_BR_CTeDocumentType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BR_CTeDocumentType` | `I_BR_CTeDocumentType` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Brazil CT-e Document Type - Text'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRCTEDOCTYPET'
@ObjectModel.representativeKey: 'BR_CTeDocumentType'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@AbapCatalog.preserveKey:true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true


define view I_BR_CTeDocumentTypeText as select from dd07t
  association [1..1] to I_BR_CTeDocumentType as _BR_CTeDocumentType on $projection.BR_CTeDocumentType = _BR_CTeDocumentType.BR_CTeDocumentType
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  @Semantics.language
  key cast( ddlanguage as spras preserving type ) as Language,
  @ObjectModel.foreignKey.association: '_BR_CTeDocumentType'
  key cast ( substring( domvalue_l, 1, 1 ) as logbr_type_cte preserving type ) as BR_CTeDocumentType,  
  @Semantics.text
  ddtext as BR_CTeDocumentTypeDesc,
  @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
  _BR_CTeDocumentType, 
  _Language 
}
where domname = 'J_1BCTTYPE' and as4local = 'A'
```
