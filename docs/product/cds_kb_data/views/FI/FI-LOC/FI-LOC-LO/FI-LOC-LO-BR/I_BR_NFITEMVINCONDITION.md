---
name: I_BR_NFITEMVINCONDITION
description: "BR Nfitemvincondition"
semantic_vi: "View BR Nfitemvincondition hiển thị các điều kiện giá bán hàng theo từng mặt hàng cho các số nhận dạng xe (VIN) tại thị trường Brazil, có liên quan đến các giao dịch tài chính và kế toán."
keywords:
  - "pricing condition"
  - "item-level"
  - "vehicle identification number"
  - "vin"
  - "brazilian market"
  - "financial transaction"
  - "accounting"
  - "fi-loc-lo-br"
  - "fi"
  - "finance"
  - "lob:finance"
semantic_en: "The BR Nfitemvincondition view exposes item-level pricing conditions for vehicle identification numbers (VINs) in the Brazilian market, relevant for financial transactions and accounting purposes."
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
  - pricing-condition
  - item-level
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_NFITEMVINCONDITION

**BR Nfitemvincondition**

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
| `BR_NFItemVINCondition` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as logbr_vehicleconditionvin preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BR_NFItemVINConditionText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBRNFVIN'
@EndUserText.label: 'Brazil VIN Condition Indicator'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.representativeKey: 'BR_NFItemVINCondition'
@ObjectModel.compositionRoot: true
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A

define view I_BR_NFItemVINCondition
  as select from dd07l
  association [0..*] to I_BR_NFItemVINConditionText as _Text on $projection.BR_NFItemVINCondition = _Text.BR_NFItemVINCondition
{
  @ObjectModel.text.association: '_Text'
  key cast ( substring( domvalue_l, 1, 1 ) as logbr_vehicleconditionvin preserving type ) as BR_NFItemVINCondition,  
  @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
  _Text
}
where domname  = 'J_1B_VIN_COND'
  and as4local = 'A'
```
