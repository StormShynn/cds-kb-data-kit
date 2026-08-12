---
name: I_BR_NFDIRECTIONTEXT
description: "BR Nfdirectiontext"
app_component: FI-LOC-LO-BR
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
  - text
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_NFDIRECTIONTEXT

**BR Nfdirectiontext**

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
| `BR_NFDirection` | ✓ | |  | `cast( substring(domvalue_l, 1, 1) as logbr_nfdirection preserving type )` |  |  |
| `BR_NFDirectionDesc` |  | |  | `cast(ddtext as logbr_direction preserving type)` |  |  |
| `_BR_NFDirection` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BR_NFDirection` | `I_BR_NFDirection` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Brazil Nota Fiscal Direction - Text'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRNFDIRT'
@ObjectModel.representativeKey: 'BR_NFDirection'
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

define view I_BR_NFDirectionText as select from dd07t
  association [1..1] to I_BR_NFDirection as _BR_NFDirection on $projection.BR_NFDirection = _BR_NFDirection.BR_NFDirection
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  @Semantics.language
  key cast( ddlanguage as spras  preserving type) as Language,
  @ObjectModel.foreignKey.association: '_BR_NFDirection'
  key cast( substring(domvalue_l, 1, 1) as logbr_nfdirection preserving type ) as BR_NFDirection,   
  @Semantics.text
  cast(ddtext as logbr_direction preserving type) as BR_NFDirectionDesc,
  @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]    
  _BR_NFDirection, 
  _Language  
}
where domname = 'J_1BDIRECT'
  and as4local = 'A'
```
