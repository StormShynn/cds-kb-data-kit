---
name: I_BR_NFMODELTEXT
description: BR Nfmodeltext
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
# I_BR_NFMODELTEXT

**BR Nfmodeltext**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( ddlanguage as spras preserving type )` |
| `BR_NFModel` | ✓ | |  | `cast ( substring( domvalue_l, 1, 2 ) as logbr_model )` |
| `BR_NFModelDesc` |  | |  | `ddtext` |
| `_BR_NFModel` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BR_NFModel` | `I_BR_NFModel` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Brazil Nota Fiscal Model - Text'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRNFMODELT'
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.representativeKey: 'BR_NFModel'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@AbapCatalog.preserveKey:true 
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view I_BR_NFModelText as select from dd07t
  association [1..1] to I_BR_NFModel as _BR_NFModel on $projection.BR_NFModel = _BR_NFModel.BR_NFModel
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  @Semantics.language
  key cast( ddlanguage as spras preserving type ) as Language,
  @ObjectModel.foreignKey.association: '_BR_NFModel'
  key cast ( substring( domvalue_l, 1, 2 ) as logbr_model ) as BR_NFModel,
  @Semantics.text
  ddtext as BR_NFModelDesc,
  @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
  _BR_NFModel, 
  _Language  
}
where domname = 'J_1BMODEL' 
  and as4local = 'A'
```
