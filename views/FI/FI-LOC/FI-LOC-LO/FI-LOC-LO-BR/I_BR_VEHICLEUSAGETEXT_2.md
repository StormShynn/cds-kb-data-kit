---
name: I_BR_VEHICLEUSAGETEXT_2
description: "BR Vehicleusagetext 2"
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
  - text
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_VEHICLEUSAGETEXT_2

**BR Vehicleusagetext 2**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `VehicleUsage` | ✓ | |  | `cast( espveic as logbr_vehicleusage preserving type )` |  |  |
| `VehicleUsageDesc` |  | |  | `cast( espveict as logbr_vehicleusagedescription preserving type )` |  |  |
| `_VehicleUsage` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_VehicleUsage` | `I_BR_VehicleUsage_2` | [1..1] |
| `_Language` | `I_Language` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Brazil Nota Fiscal Vehicle Usage - Text'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRVEHUSAGET2'
@AbapCatalog.compiler.compareFilter: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel.representativeKey: 'VehicleUsage'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@AbapCatalog.preserveKey:true 
@Metadata.ignorePropagatedAnnotations: true

define view I_BR_VehicleUsageText_2 as select from j_1bvehicleusagt
  association [1..1] to I_BR_VehicleUsage_2 as _VehicleUsage on $projection.VehicleUsage = _VehicleUsage.VehicleUsage
  association [1..1] to I_Language        as _Language     on $projection.Language = _Language.Language
{
      @Semantics.language
  key spras as Language,
      @ObjectModel.foreignKey.association: '_VehicleUsage'
  key cast( espveic as logbr_vehicleusage preserving type )            as VehicleUsage,
      @Semantics.text
      cast( espveict as logbr_vehicleusagedescription preserving type ) as VehicleUsageDesc,
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _VehicleUsage, 
      _Language
}
```
