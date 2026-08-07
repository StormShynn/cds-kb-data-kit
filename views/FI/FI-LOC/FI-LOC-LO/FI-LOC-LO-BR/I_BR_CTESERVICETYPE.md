---
name: I_BR_CTESERVICETYPE
description: "BR Cteservicetype"
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
  - service
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_CTESERVICETYPE

**BR Cteservicetype**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BR_CTeServiceType` | ✓ | |  | `cast( substring(domvalue_l, 1, 1) as logbr_srv_typ_cte preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BR_CTeServiceTypeText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Brazil CT-e Service Type'
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRCTESERVTYPE'
@ObjectModel.representativeKey: 'BR_CTeServiceType'
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


define view I_BR_CTeServiceType
  as select from dd07l
  association [0..*] to I_BR_CTeServiceTypeText as _Text on $projection.BR_CTeServiceType = _Text.BR_CTeServiceType
{
  @ObjectModel.text.association: '_Text'
  key cast( substring(domvalue_l, 1, 1) as logbr_srv_typ_cte preserving type ) as BR_CTeServiceType,  
  @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
   _Text
}
where domname  = 'J_1BCTE_SERV_TP'
  and as4local = 'A'
```
