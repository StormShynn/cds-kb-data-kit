---
name: I_BR_CTESERVICETYPETEXT
description: "BR Cteservicetypetext"
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
  - service
  - text
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_CTESERVICETYPETEXT

**BR Cteservicetypetext**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( ddlanguage as spras preserving type)` |  |  |
| `BR_CTeServiceType` | ✓ | |  | `cast( substring(domvalue_l, 1, 1) as logbr_srv_typ_cte preserving type )` |  |  |
| `BR_CTeServiceTypeDesc` |  | |  | `ddtext` |  |  |
| `_BR_CTeServiceType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BR_CTeServiceType` | `I_BR_CTeServiceType` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Brazil CT-e Service Type - Text'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRCTESERVTYPTXT'
@ObjectModel.representativeKey: 'BR_CTeServiceType'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@AbapCatalog.preserveKey:true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true


define view I_BR_CTeServiceTypeText
  as select from dd07t
  association [1..1] to I_BR_CTeServiceType as _BR_CTeServiceType on $projection.BR_CTeServiceType = _BR_CTeServiceType.BR_CTeServiceType
  association [0..1] to I_Language          as _Language          on $projection.Language = _Language.Language
{
  @Semantics.language
  key cast( ddlanguage as spras preserving type) as Language,
  @ObjectModel.foreignKey.association: '_BR_CTeServiceType'
  key cast( substring(domvalue_l, 1, 1) as logbr_srv_typ_cte preserving type ) as BR_CTeServiceType,
  @Semantics.text
  ddtext as BR_CTeServiceTypeDesc,
  @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
  _BR_CTeServiceType,
  _Language
}
where domname  = 'J_1BCTE_SERV_TP'
  and as4local = 'A'
```
