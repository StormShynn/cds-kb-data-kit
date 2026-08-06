---
name: I_BR_NFREFERENCEDPROCORIGNTEXT
description: BR Nfreferencedprocorigntext
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
# I_BR_NFREFERENCEDPROCORIGNTEXT

**BR Nfreferencedprocorigntext**

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
| key `BR_NFReferencedProcessOrigin` | `cast ( substring( domvalue_l, 1, 1 ) as logbr_processorigin preserving type )` |
| `BR_NFReferencedProcOriginDesc` | `cast( ddtext as logbr_processorigindescription preserving type )` |
| `_BR_NFReferencedProcessOrigin` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BR_NFReferencedProcessOrigin` | `I_BR_NFReferencedProcOrign` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Brazil NF Referenced Proc Origin - Text'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRNFRPROCORIGT'
@ObjectModel.representativeKey: 'BR_NFReferencedProcessOrigin'
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

define view I_BR_NFReferencedProcOrignText as select from dd07t
  association [1..1] to I_BR_NFReferencedProcOrign as _BR_NFReferencedProcessOrigin on $projection.BR_NFReferencedProcessOrigin = _BR_NFReferencedProcessOrigin.BR_NFReferencedProcessOrigin
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  @Semantics.language
  key cast( ddlanguage as spras preserving type ) as Language,
  @ObjectModel.foreignKey.association: '_BR_NFReferencedProcessOrigin'
  key cast ( substring( domvalue_l, 1, 1 ) as logbr_processorigin preserving type ) as BR_NFReferencedProcessOrigin,  
  @Semantics.text
  cast( ddtext as logbr_processorigindescription preserving type ) as BR_NFReferencedProcOriginDesc,
  @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]    
  _BR_NFReferencedProcessOrigin, 
  _Language 
}
where domname = 'J_1BNF_PROC_ORIGIN'
  and as4local = 'A'
```
