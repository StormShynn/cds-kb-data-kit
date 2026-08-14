---
name: I_BR_NFISSUERTEXT
description: "BR Nfissuertext"
semantic_vi: "View BR Nfissuertext cung cấp dữ liệu văn bản về người phát hành và mô tả người phát hành cho giao dịch tài chính BRL (Brazilian Real), được sử dụng khi hiển thị hoặc xử lý thông tin tài chính BRL."
keywords:
  - "brasil"
  - "brazilian real"
  - "brl"
  - "financial transactions"
  - "issued-by"
  - "issuer description"
  - "text data"
  - "fi-loc-lo-br"
  - "sap fi-loc-lo-br"
  - "nfi"
  - "nfi-issuer-text"
semantic_en: "The BR Nfissuertext view provides issued-by and issuer description text data for Brazilian Real (BRL) financial transactions, used when displaying or processing BRL financial information."
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
# I_BR_NFISSUERTEXT

**BR Nfissuertext**

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
| `BR_NFIssuedBy` | ✓ | |  | `cast( substring(domvalue_l, 1, 1 ) as logbr_nfissuer preserving type )` |  |  |
| `BR_NFIssuerDesc` |  | |  | `cast( ddtext as logbr_nfissuerdescription preserving type )` |  |  |
| `_BR_NFIssuer` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BR_NFIssuer` | `I_BR_NFIssuer` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Brazil Nota Fiscal Issuer - Text'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRNFISSUERT'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.representativeKey: 'BR_NFIssuedBy'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]

define view I_BR_NFIssuerText
  as select from dd07t
  association [1..1] to I_BR_NFIssuer as _BR_NFIssuer on $projection.BR_NFIssuedBy = _BR_NFIssuer.BR_NFIssuedBy
  association [0..1] to I_Language    as _Language    on $projection.Language = _Language.Language
{
  @Semantics.language
  key cast( ddlanguage as spras preserving type ) as Language,
  @ObjectModel.foreignKey.association: '_BR_NFIssuer'
  key cast( substring(domvalue_l, 1, 1 ) as logbr_nfissuer preserving type ) as BR_NFIssuedBy,
  @Semantics.text
  cast( ddtext as logbr_nfissuerdescription preserving type ) as BR_NFIssuerDesc,
  @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
  _BR_NFIssuer,
  _Language
}
where domname  = 'J_1B_FISC_DOC_ISSUER'
  and as4local = 'A'
```
