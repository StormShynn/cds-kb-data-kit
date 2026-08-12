---
name: I_BR_NFTEXTTYPE
description: "BR Nftexttype"
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
  - text
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_NFTEXTTYPE

**BR Nftexttype**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BR_NFTextType` | ✓ | |  | `cast( substring(domvalue_l, 1, 1) as logbr_nf_texttype preserving type )` |  |  |
| `_BR_NFTextTypeDesc` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BR_NFTextTypeDesc` | `I_BR_NFTextTypeDescription` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Brazil Nota Fiscal Message Types'
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRNFTEXTTYPE'
@ObjectModel.representativeKey: 'BR_NFTextType'
@ObjectModel.compositionRoot: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: #CDS_MODELING_ASSOCIATION_TARGET
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.resultSet.sizeCategory: #XS
@AbapCatalog.preserveKey:true
define view I_BR_NFTextType
  as select from dd07l
  association [0..*] to I_BR_NFTextTypeDescription as _BR_NFTextTypeDesc on $projection.BR_NFTextType = _BR_NFTextTypeDesc.BR_NFTextType
{
      @ObjectModel.text.association: '_BR_NFTextTypeDesc'
  key cast( substring(domvalue_l, 1, 1) as logbr_nf_texttype preserving type ) as BR_NFTextType,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _BR_NFTextTypeDesc
}
where
      domname  = 'LOGBR_NF_TEXTTYPE'
  and as4local = 'A'
```
