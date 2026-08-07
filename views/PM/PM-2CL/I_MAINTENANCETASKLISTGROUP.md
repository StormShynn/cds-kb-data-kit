---
name: I_MAINTENANCETASKLISTGROUP
description: Maintenancetasklistgroup
app_component: PM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - interface-view
  - component:PM-2CL
  - lob:Plant Maintenance
---
# I_MAINTENANCETASKLISTGROUP

**Maintenancetasklistgroup**

| Property | Value |
|---|---|
| App Component | `PM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `BillOfOperationsType` | ✓ | |  |  |
| `BillOfOperationsGroup` | ✓ | |  |  |
| `_BillOfOperationsType` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BillOfOperationsType` | `I_MaintenanceTaskListType` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #M, dataClass: #MASTER }
@ObjectModel.representativeKey: 'BillOfOperationsGroup'
@Analytics.technicalName: 'IMAINTTASKGRP'
@VDM.viewType: #BASIC 
@EndUserText.label: 'Maintenance Task List Group'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ] }*/
define view entity I_MaintenanceTaskListGroup 
// as select distinct from plk
as select from I_BillOfOperationsGroup

  association [1..1] to I_MaintenanceTaskListType as _BillOfOperationsType on $projection.BillOfOperationsType = _BillOfOperationsType.TaskListType

{
      @ObjectModel.foreignKey.association: '_BillOfOperationsType'
      key BillOfOperationsType,
      key BillOfOperationsGroup,

      // Associations
      _BillOfOperationsType
}

   where BillOfOperationsType    = 'A'
   or    BillOfOperationsType    = 'E'
   or    BillOfOperationsType    = 'T'
;
```
