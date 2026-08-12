---
name: I_BR_ICMSSTBASEDETNTEXT
description: "BR Icmsstbasedetntext"
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
# I_BR_ICMSSTBASEDETNTEXT

**BR Icmsstbasedetntext**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( ddlanguage as spras preserving type )` |  |  |
| `BR_ICMSSTBaseDetermination` | ✓ | |  | `cast( substring(domvalue_l, 1, 1) as logbr_icst_base_det preserving type )` |  |  |
| `BR_ICMSSTBaseDeterminationDesc` |  | |  | `ddtext` |  |  |
| `_BR_ICMSSTBaseDetermination` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BR_ICMSSTBaseDetermination` | `I_BR_ICMSSTBaseDetn` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Brazil ICMS ST Base Determination - Text'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRICMSSTBDETT'
@ObjectModel.representativeKey: 'BR_ICMSSTBaseDetermination'
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@AbapCatalog.preserveKey:true

define view I_BR_ICMSSTBaseDetnText as select from dd07t
  association [1..1] to I_BR_ICMSSTBaseDetn as _BR_ICMSSTBaseDetermination on $projection.BR_ICMSSTBaseDetermination = _BR_ICMSSTBaseDetermination.BR_ICMSSTBaseDetermination
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  @Semantics.language
  key cast( ddlanguage as spras preserving type ) as Language,
  @ObjectModel.foreignKey.association: '_BR_ICMSSTBaseDetermination'
  key cast( substring(domvalue_l, 1, 1) as logbr_icst_base_det preserving type ) as BR_ICMSSTBaseDetermination,
  @Semantics.text
  ddtext as BR_ICMSSTBaseDeterminationDesc,
  @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT] 
  _BR_ICMSSTBaseDetermination, 
  _Language 
}
where domname = 'J_1B_ICST_BASE_DET'  
  and as4local = 'A'
```
