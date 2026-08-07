---
name: I_EWM_WHSETASKEXCEPTIONCODE_2
description: Ewm Whsetaskexceptioncode 2
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SCM
  - SCM-EWM
  - SCM-EWM-WOP
  - interface-view
  - component:SCM-EWM-WOP-2CL
  - lob:Other
---
# I_EWM_WHSETASKEXCEPTIONCODE_2

**Ewm Whsetaskexceptioncode 2**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMWarehouse` | ✓ | |  | `lgnum` |  |  |
| `WarehouseTask` | ✓ | |  | `cast( tanum as /scwm/tanum_noconv preserving type )` |  |  |
| `WarehouseTaskItem` | ✓ | |  | `cast( tapos as /scwm/tapos_noconv preserving type )` |  |  |
| `WarehouseTaskExceptionCode` | ✓ | |  | `exccode` |  |  |
| `BusinessContext` | ✓ | |  | `buscon` |  |  |
| `BusinessContextExecutionStep` | ✓ | |  | `exec_step` |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass:      #TRANSACTIONAL
@ObjectModel.usageType.sizeCategory:   #M
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET ]
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations:true
@Analytics.internalName:#LOCAL  
@EndUserText.label: 'Exception Code for Warehouse Task'
@ObjectModel.sapObjectNodeType.name: 'WarehouseTaskExceptionCode'
define view entity I_EWM_WhseTaskExceptionCode_2
  as select from /scwm/ordim_e
{
  key lgnum                                                as EWMWarehouse,
  key cast( tanum as /scwm/tanum_noconv preserving type )  as WarehouseTask,
  key cast( tapos  as /scwm/tapos_noconv preserving type ) as WarehouseTaskItem,
  key exccode                                              as WarehouseTaskExceptionCode,
  key buscon                                               as BusinessContext,
  key exec_step                                            as BusinessContextExecutionStep
}
```
