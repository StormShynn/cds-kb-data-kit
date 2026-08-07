---
name: I_BR_CTETRANSPORTATIONMODETEXT
description: BR Ctetransportationmodetext
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
  - transport
  - text
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_CTETRANSPORTATIONMODETEXT

**BR Ctetransportationmodetext**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( ddlanguage as spras preserving type)` |
| `BR_CTeTransportationMode` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as logbr_transportation_mode preserving type )` |
| `BR_CTeTransportationModeDesc` |  | |  | `ddtext` |
| `_BR_CTeTransportationMode` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BR_CTeTransportationMode` | `I_BR_CTeTransportationMode` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Brazil CT-e Transportation Mode - Text'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRCTETRANSTXT'
@ObjectModel.representativeKey: 'BR_CTeTransportationMode'
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

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view I_BR_CTeTransportationModeText
  as select from dd07t
  association [1..1] to I_BR_CTeTransportationMode as _BR_CTeTransportationMode on $projection.BR_CTeTransportationMode = _BR_CTeTransportationMode.BR_CTeTransportationMode
  association [0..1] to I_Language                 as _Language           on $projection.Language = _Language.Language
{
  @Semantics.language
  key cast( ddlanguage as spras preserving type) as Language,
  @ObjectModel.foreignKey.association: '_BR_CTeTransportationMode'
  key cast ( substring( domvalue_l, 1, 1 ) as logbr_transportation_mode preserving type ) as BR_CTeTransportationMode,
  @Semantics.text
  ddtext as BR_CTeTransportationModeDesc,
  @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
  _BR_CTeTransportationMode,
  _Language
}
where domname  = 'J_1BCTE_TRANSPTN_MODE'
  and as4local = 'A'
```
