---
name: I_BR_VEHICLEOPERATIONTYPETEXT
description: "BR Vehicleoperationtypetext"
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
  - text-view
  - text
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_VEHICLEOPERATIONTYPETEXT

**BR Vehicleoperationtypetext**

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
| `VehicleOperationType` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as logbr_vehicleoperationtype preserving type )` |  |  |
| `VehicleOperationTypeDesc` |  | |  | `cast ( substring ( ddtext, 1, 60 ) as logbr_vehicleoperationtypedesc preserving type)` |  |  |
| `_VehicleOperationType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_VehicleOperationType` | `I_BR_VehicleOperationType` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Brazil Vehicle Operation Type - Text'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRVEHOPERATION'
@ObjectModel.representativeKey: 'VehicleOperationType'
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

define view I_BR_VehicleOperationTypeText
  as select from dd07t
  association [1..1] to I_BR_VehicleOperationType as _VehicleOperationType on $projection.VehicleOperationType = _VehicleOperationType.VehicleOperationType
  association [0..1] to I_Language                as _Language             on $projection.Language = _Language.Language
{
    @Semantics.language
    key cast( ddlanguage as spras preserving type ) as Language,
    @ObjectModel.foreignKey.association: '_VehicleOperationType'
    key cast ( substring( domvalue_l, 1, 1 ) as logbr_vehicleoperationtype preserving type ) as VehicleOperationType,
    @Semantics.text
    cast ( substring ( ddtext, 1, 60 ) as logbr_vehicleoperationtypedesc preserving type) as VehicleOperationTypeDesc,
    @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
    _VehicleOperationType, 
    _Language
}
where domname  = 'J_1B_OPERATION_TYPE'
  and as4local = 'A'
```
