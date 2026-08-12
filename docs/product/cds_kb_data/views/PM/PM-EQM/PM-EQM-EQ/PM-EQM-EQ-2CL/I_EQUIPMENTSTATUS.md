---
name: I_EQUIPMENTSTATUS
description: "Equipmentstatus"
app_component: PM-EQM-EQ-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-EQM
  - PM-EQM-EQ
  - interface-view
  - equipment
  - status
  - component:PM-EQM-EQ-2CL
  - lob:Plant Maintenance
---
# I_EQUIPMENTSTATUS

**Equipmentstatus**

| Property | Value |
|---|---|
| App Component | `PM-EQM-EQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Equipment` | ✓ | | `_EquipmentStatus` | `Equipment` |  |  |
| `MaintObjectInternalID` |  | | `_EquipmentStatus` | `MaintObjectInternalID` |  |  |
| `EquipmentIsAtCustomer` |  | |  | `cast(_EquipmentStatus.EquipmentIsAtCustomer as xfeld preserving type)` |  |  |
| `EquipmentIsAvailable` |  | |  | `cast(_EquipmentStatus.EquipmentIsAvailable as xfeld preserving type)` |  |  |
| `EquipmentIsInWarehouse` |  | |  | `cast(_EquipmentStatus.EquipmentIsInWarehouse as xfeld preserving type)` |  |  |
| `EquipmentIsAssignedToDelivery` |  | |  | `cast(_EquipmentStatus.EquipmentIsAssignedToDelivery as xfeld preserving type)` |  |  |
| `EquipmentIsMarkedForDeletion` |  | |  | `cast(_EquipmentStatus.EquipmentIsMarkedForDeletion as xfeld preserving type)` |  |  |
| `EquipmentIsInstalled` |  | |  | `cast(_EquipmentStatus.EquipmentIsInstalled as xfeld preserving type )` |  |  |
| `EquipIsAllocToSuperiorEquip` |  | |  | `cast(_EquipmentStatus.EquipIsAllocToSuperiorEquip as xfeld preserving type )` |  |  |
| `EquipmentIsInactive` |  | |  | `cast(_EquipmentStatus.EquipmentIsInactive as xfeld preserving type )` |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@Metadata.ignorePropagatedAnnotations:true
@VDM.viewType: #COMPOSITE
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #XL, dataClass: #MIXED}
@EndUserText.label: 'Equipment Status'
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
define view entity I_EquipmentStatus as select from P_EquipmentStatusAggrgn as _EquipmentStatus 
{
key _EquipmentStatus.Equipment,
_EquipmentStatus.MaintObjectInternalID,
cast(_EquipmentStatus.EquipmentIsAtCustomer as xfeld preserving type) as EquipmentIsAtCustomer,
cast(_EquipmentStatus.EquipmentIsAvailable as xfeld preserving type) as EquipmentIsAvailable,
cast(_EquipmentStatus.EquipmentIsInWarehouse as xfeld preserving type) as EquipmentIsInWarehouse,
cast(_EquipmentStatus.EquipmentIsAssignedToDelivery as xfeld preserving type) as EquipmentIsAssignedToDelivery,
cast(_EquipmentStatus.EquipmentIsMarkedForDeletion as xfeld preserving type) as EquipmentIsMarkedForDeletion,
cast(_EquipmentStatus.EquipmentIsInstalled as xfeld preserving type ) as EquipmentIsInstalled,
cast(_EquipmentStatus.EquipIsAllocToSuperiorEquip as xfeld preserving type ) as EquipIsAllocToSuperiorEquip,
cast(_EquipmentStatus.EquipmentIsInactive as xfeld preserving type ) as EquipmentIsInactive          
};
```
