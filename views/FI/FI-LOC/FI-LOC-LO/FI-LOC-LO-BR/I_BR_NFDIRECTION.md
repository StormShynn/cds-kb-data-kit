---
name: I_BR_NFDIRECTION
description: BR Nfdirection
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
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_NFDIRECTION

**BR Nfdirection**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `BR_NFDirection` | `cast( substring(domvalue_l, 1, 1) as logbr_nfdirection preserving type )` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BR_NFDirectionText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Brazil Nota Fiscal Direction'
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRNFDIR'
@ObjectModel.representativeKey: 'BR_NFDirection'
@ObjectModel.compositionRoot: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@AbapCatalog.preserveKey:true 

define view I_BR_NFDirection as select from dd07l
  association [0..*] to I_BR_NFDirectionText as _Text on $projection.BR_NFDirection = _Text.BR_NFDirection
{
  @ObjectModel.text.association: '_Text'
  key cast( substring(domvalue_l, 1, 1) as logbr_nfdirection preserving type ) as BR_NFDirection,  
  @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
  _Text
}
where domname = 'J_1BDIRECT' and as4local = 'A'
```
