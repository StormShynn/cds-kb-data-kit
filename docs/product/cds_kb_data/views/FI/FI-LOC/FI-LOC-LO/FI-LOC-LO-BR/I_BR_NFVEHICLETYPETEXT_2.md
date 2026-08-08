---
name: I_BR_NFVEHICLETYPETEXT_2
description: "BR Nfvehicletypetext 2"
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
# I_BR_NFVEHICLETYPETEXT_2

**BR Nfvehicletypetext 2**

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
| `NFVehicleType` | ✓ | |  | `cast( tpveic as logbr_vehicletype preserving type )` |  |  |
| `VehicleTypeDesc` |  | |  | `cast( tpveict as logbr_vehicletypedescription preserving type )` |  |  |
| `_BR_VehicleType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BR_VehicleType` | `I_BR_NFVehicleType_2` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBRNFVEHTYPETXT2'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'NFVehicleType'
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Brazil NF Vehicle Type - Text'
define view I_BR_NFVehicleTypeText_2 as select from j_1bvehicletypet 
  association [1..1] to I_BR_NFVehicleType_2 as _BR_VehicleType on $projection.NFVehicleType = _BR_VehicleType.NFVehicleType
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language 
{
    @Semantics.language
    key spras as Language,
    @ObjectModel.foreignKey.association: '_BR_VehicleType'
    key cast( tpveic as logbr_vehicletype preserving type ) as NFVehicleType,
    @Semantics.text
    cast( tpveict as logbr_vehicletypedescription preserving type ) as VehicleTypeDesc,
    @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
    _BR_VehicleType,
    _Language
}
```
