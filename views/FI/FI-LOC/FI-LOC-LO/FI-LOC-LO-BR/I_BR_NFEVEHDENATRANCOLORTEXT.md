---
name: I_BR_NFEVEHDENATRANCOLORTEXT
description: BR Nfevehdenatrancolortext
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
# I_BR_NFEVEHDENATRANCOLORTEXT

**BR Nfevehdenatrancolortext**

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
| `BR_NFeVehicleDENATRANColor` | ✓ | |  | `cast( substring(domvalue_l, 1 , 2 ) as logbr_vehiclecolorcode preserving type )` |  |  |
| `BR_NFeVehDENATRANColorDesc` |  | |  | `cast(ddtext as logbr_vehiclecolordescription preserving type)` |  |  |
| `_BR_NFeVehicleDENATRANColor` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BR_NFeVehicleDENATRANColor` | `I_BR_NFeVehDENATRANColor` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Brazil NFe Vehicle DENATRAN Color - Text'
@AbapCatalog.compiler.compareFilter: true
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRNFEVEHCOLT'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.representativeKey: 'BR_NFeVehicleDENATRANColor'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@AbapCatalog.preserveKey:true
@Metadata.ignorePropagatedAnnotations: true

define view I_BR_NFeVehDENATRANColorText
  as select from dd07t
  association [1..1] to I_BR_NFeVehDENATRANColor as _BR_NFeVehicleDENATRANColor on $projection.BR_NFeVehicleDENATRANColor = _BR_NFeVehicleDENATRANColor.BR_NFeVehicleDENATRANColor
  association [0..1] to I_Language               as _Language                   on $projection.Language = _Language.Language
{
  @Semantics.language
  key cast( ddlanguage as spras preserving type ) as Language,
  @ObjectModel.foreignKey.association: '_BR_NFeVehicleDENATRANColor'
  key cast( substring(domvalue_l, 1 , 2 ) as logbr_vehiclecolorcode preserving type ) as BR_NFeVehicleDENATRANColor,
  @Semantics.text
  cast(ddtext as logbr_vehiclecolordescription preserving type) as BR_NFeVehDENATRANColorDesc,
  @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
  _BR_NFeVehicleDENATRANColor,
  _Language
}
where domname  = 'J_1B_VEH_COLOR_CODE'
  and as4local = 'A'
```
