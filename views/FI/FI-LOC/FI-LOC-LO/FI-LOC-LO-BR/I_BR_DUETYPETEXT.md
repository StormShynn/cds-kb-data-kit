---
name: I_BR_DUETYPETEXT
description: BR Duetypetext
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
  - text
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_DUETYPETEXT

**BR Duetypetext**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `cast( ddlanguage as spras preserving type )` |
| key `BR_DUEType` | `cast ( substring( domvalue_l, 1, 1 ) as logbr_due_type preserving type )` |
| `BR_DUETypeDesc` | `ddtext` |
| `_BR_DUEType` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BR_DUEType` | `I_BR_DUEType` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBRDUETYPET'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Brazil Domain for DUE Type - Text'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'BR_DUEType'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view I_BR_DUETypeText as select from dd07t

  association [1..1] to I_BR_DUEType as _BR_DUEType on $projection.BR_DUEType = _BR_DUEType.BR_DUEType
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language

{
  @Semantics.language
  key cast( ddlanguage as spras preserving type )              as Language,
  
  @ObjectModel.foreignKey.association: '_BR_DUEType'
  key cast ( substring( domvalue_l, 1, 1 ) as logbr_due_type preserving type ) as BR_DUEType,
  
  @Semantics.text
  ddtext                                                       as BR_DUETypeDesc,
  
  @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
  _BR_DUEType, 
  _Language  
  
}

where domname = 'LOGBR_DUE_TYPE' 
  and as4local = 'A'
```
