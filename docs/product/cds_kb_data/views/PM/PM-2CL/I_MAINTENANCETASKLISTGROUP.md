---
name: I_MAINTENANCETASKLISTGROUP
description: "Maintenancetasklistgroup"
app_component: PM-2CL
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillOfOperationsType` | ✓ | |  |  |  |  |
| `BillOfOperationsGroup` | ✓ | |  |  |  |  |
| `_BillOfOperationsType` | | ✓ | | | | |

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
