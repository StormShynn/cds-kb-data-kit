---
name: I_BR_NFITEMVINCONDITION
description: BR Nfitemvincondition
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
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `BR_NFItemVINCondition` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as logbr_vehicleconditionvin preserving type )` |
| `_Text` | | ✓ | | |

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
