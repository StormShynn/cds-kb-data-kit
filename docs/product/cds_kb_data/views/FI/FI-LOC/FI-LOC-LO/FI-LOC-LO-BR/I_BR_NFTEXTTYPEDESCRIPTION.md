---
name: I_BR_NFTEXTTYPEDESCRIPTION
description: "BR Nftexttypedescription"
semantic_vi: "View I_BR_NFTEXTTYPEDESCRIPTION cung cấp mô tả loại văn bản tham chiếu kinh doanh, có thể được sử dụng để hiển thị mô tả loại văn bản trong các ứng dụng kinh doanh khác nhau."
keywords:
  - "business reference text"
  - "text type description"
  - "fi-loc-lo-br"
  - "finance"
  - "language"
  - "br_nftexttype"
  - "br_nftexttypedesc"
semantic_en: "The I_BR_NFTEXTTYPEDESCRIPTION view provides a description of business reference text types, which can be used to display text type descriptions in various business applications."
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
# I_BR_NFTEXTTYPEDESCRIPTION

**BR Nftexttypedescription**

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
| `Language` | ✓ | |  | `cast( ddlanguage as spras preserving type)` |  |  |
| `BR_NFTextType` | ✓ | |  | `cast( substring(domvalue_l, 1, 1) as logbr_nf_texttype preserving type )` |  |  |
| `BR_NFTextTypeDesc` |  | |  | `cast(ddtext as logbr_nf_texttypedesc preserving type)` |  |  |
| `_BR_NFTextType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BR_NFTextType` | `I_BR_NFTextType` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Brazil NF Message Type Description'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRNFTEXTTPDESC'
@ObjectModel.representativeKey: 'BR_NFTextType'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: #CDS_MODELING_ASSOCIATION_TARGET
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@AbapCatalog.preserveKey:true
define view I_BR_NFTextTypeDescription
  as select from dd07t
  association [1..1] to I_BR_NFTextType as _BR_NFTextType on $projection.BR_NFTextType = _BR_NFTextType.BR_NFTextType
  association [0..1] to I_Language      as _Language      on $projection.Language = _Language.Language
{
      //dd07t
      @Semantics.language
  key cast( ddlanguage as spras  preserving type)                              as Language,
      @ObjectModel.foreignKey.association: '_BR_NFTextType'
  key cast( substring(domvalue_l, 1, 1) as logbr_nf_texttype preserving type ) as BR_NFTextType,
      @Semantics.text
      cast(ddtext as logbr_nf_texttypedesc preserving type)                    as BR_NFTextTypeDesc,
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _BR_NFTextType,
      _Language
}
where
      domname  = 'LOGBR_NF_TEXTTYPE'
  and as4local = 'A'
```
