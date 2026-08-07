---
name: I_BR_VEHICLEUSAGE_2
description: BR Vehicleusage 2
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
# I_BR_VEHICLEUSAGE_2

**BR Vehicleusage 2**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `VehicleUsage` | ✓ | |  | `cast ( espveic as logbr_vehicleusage preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BR_VehicleUsageText_2` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Brazil Nota Fiscal Vehicle Usage'
@AbapCatalog.compiler.compareFilter: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRVEHICLEUSAGE2'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel.representativeKey: 'VehicleUsage'
@ObjectModel.compositionRoot: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@AbapCatalog.preserveKey:true
@Metadata.ignorePropagatedAnnotations: true

define view I_BR_VehicleUsage_2 as select from j_1bvehicleusage
  association [0..*] to I_BR_VehicleUsageText_2 as _Text on $projection.VehicleUsage = _Text.VehicleUsage
{
  @ObjectModel.text.association: '_Text'
  key cast ( espveic as logbr_vehicleusage preserving type ) as VehicleUsage,
  @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
  _Text
}
```
