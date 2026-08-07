---
name: I_APISFORCLOUDDEVELOPMENT
description: Apisforclouddevelopment
app_component: BC-SRV-APS-EXT-REL
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-SRV
  - BC-SRV-APS
  - interface-view
  - component:BC-SRV-APS-EXT-REL
  - lob:Basis Components
---
# I_APISFORCLOUDDEVELOPMENT

**Apisforclouddevelopment**

| Property | Value |
|---|---|
| App Component | `BC-SRV-APS-EXT-REL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ReleasedObjectType` | ✓ | |  | `object_type` |
| `ReleasedObjectName` | ✓ | |  | `object_key` |
| `ObjectDirectoryType` | ✓ | |  | `tadir_object` |
| `ObjectDirectoryName` | ✓ | |  | `tadir_obj_name` |
| `ReleaseState` |  | |  | `state` |
| `ReleaseStateDescription` |  | |  | `state_description` |
| `PlannedDecommissioningDate` |  | |  | `decommissioning_date` |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_ALLOWED
@EndUserText.label: 'APIs for Use in Cloud Development'
define view entity I_APIsForCloudDevelopment
  as select from ARS_APIS_RELEASED_FOR_C1_SCP
{
  key object_type          as ReleasedObjectType,
  key object_key           as ReleasedObjectName,
  key tadir_object         as ObjectDirectoryType,
  key tadir_obj_name       as ObjectDirectoryName,
      state                as ReleaseState,
      state_description    as ReleaseStateDescription,
      decommissioning_date as PlannedDecommissioningDate
}
```
