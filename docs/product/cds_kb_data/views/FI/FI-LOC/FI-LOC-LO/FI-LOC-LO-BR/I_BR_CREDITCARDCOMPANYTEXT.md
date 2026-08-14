---
name: I_BR_CREDITCARDCOMPANYTEXT
description: "BR Creditcardcompanytext"
semantic_vi: "View I_BR_CREDITCARDCOMPANYTEXT cung cấp dữ liệu văn bản công ty thẻ tín dụng, có thể hữu ích khi hiển thị hoặc xử lý thông tin thẻ tín dụng trong ngữ cảnh kinh doanh."
keywords:
  - "credit card"
  - "thẻ tín dụng"
  - "credit card company"
  - "công ty thẻ tín dụng"
  - "text data"
  - "dữ liệu văn bản"
  - "sap fi"
  - "fi sap"
  - "credit card brand"
  - "thương hiệu thẻ tín dụng"
  - "credit card brand description"
  - "mô tả thương hiệu thẻ tín dụng"
semantic_en: "The I_BR_CREDITCARDCOMPANYTEXT view provides credit card company text data, which is useful when displaying or processing credit card information in a business context."
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
  - credit
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_CREDITCARDCOMPANYTEXT

**BR Creditcardcompanytext**

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
| `Language` | ✓ | |  | `spras` |  |  |
| `CreditCardBrand` | ✓ | |  | `cast (t_band as logbr_tband preserving type)` |  |  |
| `CreditCardBrandDesc` |  | |  | `cast(t_bandt as logbr_tbanddesc preserving type )` |  |  |
| `_BR_CreditCardCompany` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BR_CreditCardCompany` | `I_BR_CreditCardCompany` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Brazil Credit Card Company - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics: {dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRTBANDT'
@AccessControl.authorizationCheck: #MANDATORY
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.representativeKey: 'CreditCardBrand'
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE,#EXTRACTION_DATA_SOURCE, #LANGUAGE_DEPENDENT_TEXT]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@AbapCatalog.preserveKey:true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true

define view I_BR_CreditCardCompanyText as select from j_1bbandt
  association [1..1] to I_BR_CreditCardCompany as _BR_CreditCardCompany on $projection.CreditCardBrand = _BR_CreditCardCompany.CreditCardBrand
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{

  @Semantics.language: true
  key spras as Language,
  
  @ObjectModel.foreignKey.association: '_BR_CreditCardCompany'
  key cast (t_band as logbr_tband preserving type) as CreditCardBrand,
  
  @Semantics.text: true
  cast(t_bandt as logbr_tbanddesc preserving type ) as CreditCardBrandDesc,
  @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
  _BR_CreditCardCompany,
  _Language
}
```
