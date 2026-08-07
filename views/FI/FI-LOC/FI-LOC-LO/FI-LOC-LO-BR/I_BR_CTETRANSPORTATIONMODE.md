---
name: I_BR_CTETRANSPORTATIONMODE
description: BR Ctetransportationmode
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
  - transport
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_CTETRANSPORTATIONMODE

**BR Ctetransportationmode**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BR_CTeTransportationMode` | ✓ | |  | `cast ( cast ( substring( domvalue_l, 1, 1 ) as abap.char( 1 ) ) as logbr_transportation_mode preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BR_CTeTransportationModeText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Brazil CT-e Transportation Mode'
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRCTETRANSP'
@ObjectModel.representativeKey: 'BR_CTeTransportationMode'
@ObjectModel.compositionRoot: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@AbapCatalog.preserveKey:true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true


define view I_BR_CTeTransportationMode
  as select from dd07l
  association [0..*] to I_BR_CTeTransportationModeText as _Text on $projection.BR_CTeTransportationMode = _Text.BR_CTeTransportationMode
{
  @ObjectModel.text.association: '_Text'
  key cast ( cast ( substring( domvalue_l, 1, 1 ) as abap.char( 1 ) ) as logbr_transportation_mode preserving type ) as BR_CTeTransportationMode,
  @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
  _Text
}
where domname  = 'J_1BCTE_TRANSPTN_MODE'
  and as4local = 'A'
```
