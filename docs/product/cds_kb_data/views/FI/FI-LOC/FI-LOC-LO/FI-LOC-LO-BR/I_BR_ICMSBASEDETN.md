---
name: I_BR_ICMSBASEDETN
description: "BR Icmsbasedetn"
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
# I_BR_ICMSBASEDETN

**BR Icmsbasedetn**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BR_ICMSBaseDetn` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as logbr_icms_base_det preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BR_ICMSBaseDetnText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Brazil ICMS Base Determination'
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRICMSBASEDETN'
@ObjectModel.representativeKey: 'BR_ICMSBaseDetn'
@ObjectModel.compositionRoot: true
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

define view I_BR_ICMSBaseDetn
  as select from dd07l
  association [0..*] to I_BR_ICMSBaseDetnText as _Text on $projection.BR_ICMSBaseDetn = _Text.BR_ICMSBaseDetn
{
  @ObjectModel.text.association: '_Text'
  key cast ( substring( domvalue_l, 1, 1 ) as logbr_icms_base_det preserving type ) as BR_ICMSBaseDetn,   
  @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
  _Text
}
where domname  = 'J_1B_ICMS_BASE_DET'
  and as4local = 'A'
```
