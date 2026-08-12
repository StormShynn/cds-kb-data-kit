---
name: I_BR_NFVEHICLETYPE_2
description: "BR Nfvehicletype 2"
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
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_NFVEHICLETYPE_2

**BR Nfvehicletype 2**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `NFVehicleType` | ✓ | |  | `cast( tpveic as logbr_vehicletype preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BR_NFVehicleTypeText_2` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBRNFVEHTYPE2'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.representativeKey: 'NFVehicleType'
@ObjectModel.compositionRoot: true
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #MANDATORY
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Brazil Nota Fiscal Vehicle Type'

 
define view I_BR_NFVehicleType_2 as select from j_1bvehicletype   
  association [0..*] to I_BR_NFVehicleTypeText_2 as _Text on $projection.NFVehicleType = _Text.NFVehicleType 
{
    @ObjectModel.text.association: '_Text'
    key cast( tpveic as logbr_vehicletype preserving type ) as NFVehicleType, 
    @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
    _Text
}
```
