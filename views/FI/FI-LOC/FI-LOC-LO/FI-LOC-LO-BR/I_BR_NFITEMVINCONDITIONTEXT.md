---
name: I_BR_NFITEMVINCONDITIONTEXT
description: BR Nfitemvinconditiontext
app_component: FI-LOC-LO-BR
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-LO
  - interface-view
  - text-view
  - pricing-condition
  - text
  - item-level
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_NFITEMVINCONDITIONTEXT

**BR Nfitemvinconditiontext**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `cast( ddlanguage as spras preserving type)` |
| key `BR_NFItemVINCondition` | `cast ( substring( domvalue_l, 1, 1 ) as logbr_vehicleconditionvin preserving type )` |
| `BR_NFItemVINConditionDesc` | `cast( ddtext as logbr_vehicleconditionvindesc preserving type )` |
| `_BR_NFItemVINCondition` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BR_NFItemVINCondition` | `I_BR_NFItemVINCondition` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBRNFVINTXT'
@EndUserText.label: 'Brazil VIN Condition Indicator - Text'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.representativeKey: 'BR_NFItemVINCondition'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]

define view I_BR_NFItemVINConditionText
  as select from dd07t
  association [1..1] to I_BR_NFItemVINCondition as _BR_NFItemVINCondition on $projection.BR_NFItemVINCondition = _BR_NFItemVINCondition.BR_NFItemVINCondition
  association [0..1] to I_Language              as _Language              on $projection.Language = _Language.Language
{
  @Semantics.language
  key cast( ddlanguage as spras preserving type) as Language,
  @ObjectModel.foreignKey.association: '_BR_NFItemVINCondition'
  key cast ( substring( domvalue_l, 1, 1 ) as logbr_vehicleconditionvin preserving type ) as BR_NFItemVINCondition,  
  @Semantics.text
  cast( ddtext as logbr_vehicleconditionvindesc preserving type ) as BR_NFItemVINConditionDesc,
  @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
  _BR_NFItemVINCondition,
  _Language
}
where domname  = 'J_1B_VIN_COND'
  and as4local = 'A'
```
