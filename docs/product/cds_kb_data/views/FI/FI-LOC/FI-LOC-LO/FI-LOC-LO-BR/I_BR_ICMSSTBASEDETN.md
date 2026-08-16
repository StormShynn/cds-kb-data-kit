---
name: I_BR_ICMSSTBASEDETN
description: "BR Icmsstbasedetn"
semantic_vi: "View I_BR_ICMSSTBASEDETN CDS hiển thị dữ liệu xác định ICMSST dựa trên ICMSST, được sử dụng để tính toán số tiền thuế ICMSST ở Brazil. Nó thường được sử dụng trong các ứng dụng tài chính và kế toán."
keywords:
  - "icmsst"
  - "determination"
  - "tax"
  - "brasil"
  - "finance"
  - "accounting"
  - "fi-loc-lo-br"
  - "sap"
  - "cds"
  - "view"
  - "icmsst-based"
  - "tax-amount"
semantic_en: "The I_BR_ICMSSTBASEDETN CDS view exposes ICMSST-based determination data, which is used to calculate the ICMSST tax amount in Brazil. It is typically used in financial and accounting applications."
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
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_ICMSSTBASEDETN

**BR Icmsstbasedetn**

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
| `BR_ICMSSTBaseDetermination` | ✓ | |  | `cast( substring(domvalue_l, 1, 1) as logbr_icst_base_det preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BR_ICMSSTBaseDetnText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Brazil ICMS ST Base Determination'
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRICMSSTBDET'
@ObjectModel.representativeKey: 'BR_ICMSSTBaseDetermination'
@ObjectModel.compositionRoot: true
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

define view I_BR_ICMSSTBaseDetn as select from dd07l
  association [0..*] to I_BR_ICMSSTBaseDetnText as _Text on $projection.BR_ICMSSTBaseDetermination = _Text.BR_ICMSSTBaseDetermination
{
  @ObjectModel.text.association: '_Text'
  key cast( substring(domvalue_l, 1, 1) as logbr_icst_base_det preserving type ) as BR_ICMSSTBaseDetermination,  
  @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
  _Text
}
where domname = 'J_1B_ICST_BASE_DET' 
  and as4local = 'A'
```
