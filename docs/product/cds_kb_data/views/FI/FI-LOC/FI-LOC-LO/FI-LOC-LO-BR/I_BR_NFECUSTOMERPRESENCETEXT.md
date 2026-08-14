---
name: I_BR_NFECUSTOMERPRESENCETEXT
description: "BR Nfecustomerpresencetext"
semantic_vi: "View I_BR_NFECUSTOMERPRESENCETEXT hiển thị dữ liệu hiện diện khách hàng NFe cho Brazil, bao gồm mô tả văn bản trong các ngôn ngữ khác nhau. Nó được sử dụng để lấy thông tin hiện diện khách hàng cho Brazil trong các ngôn ngữ khác nhau."
keywords:
  - "customer"
  - "presence"
  - "nfe"
  - "brazil"
  - "text"
  - "description"
  - "language"
  - "fi-loc-lo-br"
  - "sap"
  - "cds"
  - "view"
  - "finance"
semantic_en: "The I_BR_NFECUSTOMERPRESENCETEXT view exposes NFe customer presence data for Brazil, including text descriptions in different languages. It is used to retrieve customer presence information for Brazil in various languages."
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
  - customer
  - text
  - component:FI-LOC-LO-BR
  - lob:Finance
  - bo:Customer
---
# I_BR_NFECUSTOMERPRESENCETEXT

**BR Nfecustomerpresencetext**

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
| `BR_NFeCustomerPresence` | ✓ | |  | `cast( substring(domvalue_l, 1, 1 ) as logbr_nfe_indpres preserving type)` |  |  |
| `BR_NFeCustomerPresenceDesc` |  | |  | `cast( ddtext as logbr_nfe_indpresdescription preserving type )` |  |  |
| `_BR_NFeCustomerPresence` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BR_NFeCustomerPresence` | `I_BR_NFeCustomerPresence` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Brazil NFe Customer Presence - Text'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRNFECUSTPREST'
@ObjectModel.representativeKey: 'BR_NFeCustomerPresence'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@AbapCatalog.preserveKey:true 

define view I_BR_NFeCustomerPresenceText
  as select from dd07t
  association [1..1] to I_BR_NFeCustomerPresence as _BR_NFeCustomerPresence on $projection.BR_NFeCustomerPresence = _BR_NFeCustomerPresence.BR_NFeCustomerPresence
  association [0..1] to I_Language               as _Language               on $projection.Language = _Language.Language
{
  @Semantics.language
  key cast( ddlanguage as spras preserving type) as Language,
  @ObjectModel.foreignKey.association: '_BR_NFeCustomerPresence'
  key cast( substring(domvalue_l, 1, 1 ) as logbr_nfe_indpres preserving type) as BR_NFeCustomerPresence,
  @Semantics.text
  cast( ddtext as logbr_nfe_indpresdescription preserving type ) as BR_NFeCustomerPresenceDesc,
  @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
  _BR_NFeCustomerPresence,
  _Language
}
where domname  = 'J_1BNFE_INDPRES'
  and as4local = 'A'
```
