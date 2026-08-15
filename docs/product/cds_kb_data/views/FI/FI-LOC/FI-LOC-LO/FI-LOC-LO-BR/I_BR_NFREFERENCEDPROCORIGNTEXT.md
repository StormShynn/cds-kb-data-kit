---
name: I_BR_NFREFERENCEDPROCORIGNTEXT
description: "BR Nfreferencedprocorigntext"
semantic_vi: "View I_BR_NFREFERENCEDPROCORIGNTEXT hiển thị dữ liệu kinh doanh liên quan đến nguồn gốc quá trình tham chiếu cho tài liệu thuế Brazil, có thể được sử dụng khi phân tích hoặc báo cáo về các tài liệu này."
keywords:
  - "brazilian tax document"
  - "tài liệu thuế brazil"
  - "referenced process origin"
  - "nguồn gốc quá trình tham chiếu"
  - "sap fi"
  - "fi-loc-lo-br"
  - "finance"
  - "finance interface"
  - "interface view"
  - "text view"
  - "text"
semantic_en: "The BR Nfreferencedprocorigntext view exposes business data related to referenced process origins for Brazilian tax documents, which can be used when analyzing or reporting on these documents."
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
  - text
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_NFREFERENCEDPROCORIGNTEXT

**BR Nfreferencedprocorigntext**

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
| `BR_NFReferencedProcessOrigin` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as logbr_processorigin preserving type )` |  |  |
| `BR_NFReferencedProcOriginDesc` |  | |  | `cast( ddtext as logbr_processorigindescription preserving type )` |  |  |
| `_BR_NFReferencedProcessOrigin` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BR_NFReferencedProcessOrigin` | `I_BR_NFReferencedProcOrign` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Brazil NF Referenced Proc Origin - Text'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRNFRPROCORIGT'
@ObjectModel.representativeKey: 'BR_NFReferencedProcessOrigin'
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

define view I_BR_NFReferencedProcOrignText as select from dd07t
  association [1..1] to I_BR_NFReferencedProcOrign as _BR_NFReferencedProcessOrigin on $projection.BR_NFReferencedProcessOrigin = _BR_NFReferencedProcessOrigin.BR_NFReferencedProcessOrigin
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  @Semantics.language
  key cast( ddlanguage as spras preserving type ) as Language,
  @ObjectModel.foreignKey.association: '_BR_NFReferencedProcessOrigin'
  key cast ( substring( domvalue_l, 1, 1 ) as logbr_processorigin preserving type ) as BR_NFReferencedProcessOrigin,  
  @Semantics.text
  cast( ddtext as logbr_processorigindescription preserving type ) as BR_NFReferencedProcOriginDesc,
  @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]    
  _BR_NFReferencedProcessOrigin, 
  _Language 
}
where domname = 'J_1BNF_PROC_ORIGIN'
  and as4local = 'A'
```
