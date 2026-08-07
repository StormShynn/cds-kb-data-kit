---
name: I_BR_NFEVEHDENATRANCOLOR
description: "BR Nfevehdenatrancolor"
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
# I_BR_NFEVEHDENATRANCOLOR

**BR Nfevehdenatrancolor**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BR_NFeVehicleDENATRANColor` | ✓ | |  | `cast( substring(domvalue_l, 1 , 2 ) as logbr_vehiclecolorcode preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BR_NFeVehDENATRANColorText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Brazil NFe Vehicle DENATRAN Color'
@AbapCatalog.compiler.compareFilter: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRNFEVEHCOL'
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.representativeKey: 'BR_NFeVehicleDENATRANColor'
@ObjectModel.compositionRoot: true
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@AbapCatalog.preserveKey:true
@Metadata.ignorePropagatedAnnotations: true

define view I_BR_NFeVehDENATRANColor
  as select from dd07l
  association [0..*] to I_BR_NFeVehDENATRANColorText as _Text on $projection.BR_NFeVehicleDENATRANColor = _Text.BR_NFeVehicleDENATRANColor
{
  @ObjectModel.text.association: '_Text'
  key cast( substring(domvalue_l, 1 , 2 ) as logbr_vehiclecolorcode preserving type ) as BR_NFeVehicleDENATRANColor,
  @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
  _Text
}
where domname  = 'J_1B_VEH_COLOR_CODE'
  and as4local = 'A'
```
