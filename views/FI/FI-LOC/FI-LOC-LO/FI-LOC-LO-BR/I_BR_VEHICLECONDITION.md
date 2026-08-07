---
name: I_BR_VEHICLECONDITION
description: "BR Vehiclecondition"
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
  - pricing-condition
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_VEHICLECONDITION

**BR Vehiclecondition**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `VehicleCondition` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as logbr_vehiclecondition )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BR_VehicleConditionText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Brazil Vehicle Condition'
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRVEHCONDITION'
@ObjectModel.representativeKey: 'VehicleCondition'
@ObjectModel.compositionRoot: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@AbapCatalog.preserveKey:true 

define view I_BR_VehicleCondition as select from dd07l
  association [0..*] to I_BR_VehicleConditionText as _Text on $projection.VehicleCondition = _Text.VehicleCondition
{
  @ObjectModel.text.association: '_Text'
  key cast ( substring( domvalue_l, 1, 1 ) as logbr_vehiclecondition ) as VehicleCondition,  
  @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
  _Text
}
where domname = 'J_1B_VEHICLE_COND' and as4local = 'A'
```
