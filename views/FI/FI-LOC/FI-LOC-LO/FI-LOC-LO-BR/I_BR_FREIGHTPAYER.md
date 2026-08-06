---
name: I_BR_FREIGHTPAYER
description: BR Freightpayer
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
  - freight
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_FREIGHTPAYER

**BR Freightpayer**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `FreightPayer` | `cast ( substring( domvalue_l, 1, 1 ) as logbr_freight_mode preserving type )` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BR_FreightPayerText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Brazil Freight in Nota Fiscal'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRFREIGHTPAYER'
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.representativeKey: 'FreightPayer'
@ObjectModel.compositionRoot: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true

define view I_BR_FreightPayer as select from dd07l
  association [0..*] to I_BR_FreightPayerText as _Text on $projection.FreightPayer = _Text.FreightPayer
{
  @ObjectModel.text.association: '_Text'
  key cast ( substring( domvalue_l, 1, 1 ) as logbr_freight_mode preserving type ) as FreightPayer,  
  @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
  _Text
}
where domname = 'J_1B_FREIGHT_MODE' and as4local = 'A'
```
