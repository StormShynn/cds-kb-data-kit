---
name: I_EWM_WHSETASKSERIALNUMBER
description: "Ewm WHSETASKSerial Number"
app_component: SCM-EWM-WOP-2CL
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
