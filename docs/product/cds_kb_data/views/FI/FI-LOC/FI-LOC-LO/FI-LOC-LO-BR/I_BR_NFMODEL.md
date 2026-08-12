---
name: I_BR_NFMODEL
description: "BR Nfmodel"
app_component: FI-LOC-LO-BR
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_BR_NFMODEL

**BR Nfmodel**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BR_NFModel` | ✓ | |  | `cast ( substring( domvalue_l, 1, 2 ) as logbr_model )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BR_NFModelText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Brazil Nota Fiscal Model'
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRNFMODEL'
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.representativeKey: 'BR_NFModel'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.compositionRoot:true
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@AbapCatalog.preserveKey:true 
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view I_BR_NFModel 
  as select from dd07l
  association [0..*] to I_BR_NFModelText as _Text on $projection.BR_NFModel = _Text.BR_NFModel
{
  @ObjectModel.text.association: '_Text'
  key cast ( substring( domvalue_l, 1, 2 ) as logbr_model ) as BR_NFModel, 
  @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
  _Text
}
where domname = 'J_1BMODEL' 
  and as4local = 'A'
```
