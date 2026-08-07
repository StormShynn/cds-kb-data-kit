---
name: I_BR_VEHICLEOPERATIONTYPE
description: "BR Vehicleoperationtype"
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
# I_BR_VEHICLEOPERATIONTYPE

**BR Vehicleoperationtype**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `VehicleOperationType` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as logbr_vehicleoperationtype )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BR_VehicleOperationTypeText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Brazil Vehicle Operation Type'
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRVEHOPERATIONT'
@ObjectModel.compositionRoot: true
@ObjectModel.representativeKey: 'VehicleOperationType'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@AbapCatalog.preserveKey:true 
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]

define view I_BR_VehicleOperationType
  as select from dd07l as _Tab
  association [0..*] to I_BR_VehicleOperationTypeText as _Text on $projection.VehicleOperationType = _Text.VehicleOperationType
{
    @ObjectModel.text.association: '_Text'
    key cast ( substring( domvalue_l, 1, 1 ) as logbr_vehicleoperationtype ) as VehicleOperationType,
    @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
    _Text
}
where domname  = 'J_1B_OPERATION_TYPE'
  and as4local = 'A'
```
