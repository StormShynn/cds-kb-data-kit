---
name: I_BR_ICMSBASEDETNTEXT
description: "BR Icmsbasedetntext"
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
# I_BR_ICMSBASEDETNTEXT

**BR Icmsbasedetntext**

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
| `BR_ICMSBaseDetn` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as logbr_icms_base_det preserving type )` |  |  |
| `BR_ICMSBaseDetnDesc` |  | |  | `cast( ddtext as logbr_icmsbasedetermination preserving type )` |  |  |
| `_BR_ICMSBaseDetn` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BR_ICMSBaseDetn` | `I_BR_ICMSBaseDetn` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Brazil ICMS Base Determination - Text'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRICMSBASEDETNT'
@ObjectModel.representativeKey: 'BR_ICMSBaseDetn'
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

define view I_BR_ICMSBaseDetnText as select from dd07t
  association [1..1] to I_BR_ICMSBaseDetn as _BR_ICMSBaseDetn on $projection.BR_ICMSBaseDetn = _BR_ICMSBaseDetn.BR_ICMSBaseDetn
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  @Semantics.language
  key cast( ddlanguage as spras preserving type ) as Language,
  @ObjectModel.foreignKey.association: '_BR_ICMSBaseDetn'
  key cast ( substring( domvalue_l, 1, 1 )   as logbr_icms_base_det preserving type ) as BR_ICMSBaseDetn,  
  @Semantics.text
  cast( ddtext as logbr_icmsbasedetermination preserving type ) as BR_ICMSBaseDetnDesc,
  @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]  
  _BR_ICMSBaseDetn, 
  _Language  
}
where domname = 'J_1B_ICMS_BASE_DET' 
  and as4local = 'A'
```
