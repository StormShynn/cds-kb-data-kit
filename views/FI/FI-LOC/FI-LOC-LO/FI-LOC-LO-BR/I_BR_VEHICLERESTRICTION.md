---
name: I_BR_VEHICLERESTRICTION
description: BR Vehiclerestriction
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
# I_BR_VEHICLERESTRICTION

**BR Vehiclerestriction**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `VehicleRestriction` | `cast ( substring( domvalue_l, 1, 1 ) as logbr_vehiclerestriction )` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BR_VehicleRestrictionText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Brazil Vehicle Restriction'
@AbapCatalog.compiler.compareFilter: true
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AbapCatalog.sqlViewName: 'IBRVEHRSTRCN'
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.representativeKey: 'VehicleRestriction'
@ObjectModel.compositionRoot: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@AbapCatalog.preserveKey:true 
@Metadata.ignorePropagatedAnnotations: true

define view I_BR_VehicleRestriction
  as select from dd07l
  association [0..*] to I_BR_VehicleRestrictionText as _Text on $projection.VehicleRestriction = _Text.VehicleRestriction
{
    @ObjectModel.text.association: '_Text'
    key cast ( substring( domvalue_l, 1, 1 ) as logbr_vehiclerestriction ) as VehicleRestriction,
    @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
    _Text
}
where domname  = 'J_1B_VEH_RESTRICTION'
  and as4local = 'A'
```
