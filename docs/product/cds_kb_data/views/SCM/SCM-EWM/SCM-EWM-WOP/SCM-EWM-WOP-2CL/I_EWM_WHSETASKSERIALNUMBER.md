---
name: I_EWM_WHSETASKSERIALNUMBER
description: "Ewm WHSETASKSerial Number"
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SCM
  - SCM-EWM
  - SCM-EWM-WOP
  - interface-view
  - serial-number
  - component:SCM-EWM-WOP-2CL
  - lob:Other
---
# I_EWM_WHSETASKSERIALNUMBER

**Ewm WHSETASKSerial Number**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMWarehouse` | ✓ | |  |  |  |  |
| `WarehouseTask` | ✓ | |  | `cast( WarehouseTask as /scwm/tanum_noconv preserving type )` |  |  |
| `WarehouseTaskItem` | ✓ | |  | `cast( '0000' as /scwm/tapos_noconv preserving type )` |  |  |
| `EWMSerialNumber` | ✓ | |  | `cast( EWMSerialNumber as char30 preserving type )` |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Serial Number for Warehouse Task'
@ObjectModel.usageType:{
  serviceQuality: #B,
  sizeCategory: #M,
  dataClass: #TRANSACTIONAL
}
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET ]
@VDM.viewType: #COMPOSITE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'WarehouseTaskSerialNumber'
define view entity I_EWM_WhseTaskSerialNumber 
  as select from I_EWM_OpenWhseTaskSerialNumber
{
  key EWMWarehouse,
  key cast( WarehouseTask as /scwm/tanum_noconv preserving type ) as WarehouseTask,
  key cast( '0000' as /scwm/tapos_noconv preserving type ) as WarehouseTaskItem,
  key cast( EWMSerialNumber as char30 preserving type ) as EWMSerialNumber
}
union select from I_EWM_ConfWhseTaskSerialNumber
{
  key EWMWarehouse,
  key cast( WarehouseTask as /scwm/tanum_noconv preserving type )     as WarehouseTask,
  key cast( WarehouseTaskItem as /scwm/tapos_noconv preserving type ) as WarehouseTaskItem,
  key cast( EWMSerialNumber as char30 preserving type ) as EWMSerialNumber
}
```
