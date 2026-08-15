---
name: I_BR_NFTEXTTYPE
description: "BR Nftexttype"
semantic_vi: "View I_BR_NFTEXTTYPE cung cấp thông tin về các loại văn bản khác nhau được sử dụng trong khu vực văn bản tài chính BR (Brazil). Nó được sử dụng để xác định và quản lý các loại văn bản khác nhau trong thành phần FI-LOC-LO-BR."
keywords:
  - "br"
  - "nftexttype"
  - "fi-loc-lo-br"
  - "text"
  - "type"
  - "financial"
  - "brazil"
  - "fi"
  - "loc"
  - "lob"
  - "finance"
semantic_en: "The I_BR_NFTEXTTYPE view provides information about the different types of text used in the BR (Brazil) financial text area. It is used to identify and manage the various text types in the FI-LOC-LO-BR component."
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
  - text
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_NFTEXTTYPE

**BR Nftexttype**

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
| `BR_NFTextType` | ✓ | |  | `cast( substring(domvalue_l, 1, 1) as logbr_nf_texttype preserving type )` |  |  |
| `_BR_NFTextTypeDesc` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BR_NFTextTypeDesc` | `I_BR_NFTextTypeDescription` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Brazil Nota Fiscal Message Types'
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRNFTEXTTYPE'
@ObjectModel.representativeKey: 'BR_NFTextType'
@ObjectModel.compositionRoot: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: #CDS_MODELING_ASSOCIATION_TARGET
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.resultSet.sizeCategory: #XS
@AbapCatalog.preserveKey:true
define view I_BR_NFTextType
  as select from dd07l
  association [0..*] to I_BR_NFTextTypeDescription as _BR_NFTextTypeDesc on $projection.BR_NFTextType = _BR_NFTextTypeDesc.BR_NFTextType
{
      @ObjectModel.text.association: '_BR_NFTextTypeDesc'
  key cast( substring(domvalue_l, 1, 1) as logbr_nf_texttype preserving type ) as BR_NFTextType,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _BR_NFTextTypeDesc
}
where
      domname  = 'LOGBR_NF_TEXTTYPE'
  and as4local = 'A'
```
