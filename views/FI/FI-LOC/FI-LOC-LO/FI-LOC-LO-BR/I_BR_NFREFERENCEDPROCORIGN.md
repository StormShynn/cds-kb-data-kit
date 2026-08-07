---
name: I_BR_NFREFERENCEDPROCORIGN
description: BR Nfreferencedprocorign
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
# I_BR_NFREFERENCEDPROCORIGN

**BR Nfreferencedprocorign**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BR_NFReferencedProcessOrigin` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as logbr_processorigin preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BR_NFReferencedProcOrignText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Brazil NF Referenced Process Origin'
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRNFRPROCORIG'
@ObjectModel.representativeKey: 'BR_NFReferencedProcessOrigin'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.compositionRoot:true
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@AbapCatalog.preserveKey:true 
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK", "KEY_CHECK" ]  } */
define view I_BR_NFReferencedProcOrign as select from dd07l
  association [0..*] to I_BR_NFReferencedProcOrignText as _Text on $projection.BR_NFReferencedProcessOrigin = _Text.BR_NFReferencedProcessOrigin
{
  @ObjectModel.text.association: '_Text'
  key cast ( substring( domvalue_l, 1, 1 ) as logbr_processorigin preserving type ) as BR_NFReferencedProcessOrigin,  
  @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
  _Text
}
where domname = 'J_1BNF_PROC_ORIGIN'
  and as4local = 'A'
```
