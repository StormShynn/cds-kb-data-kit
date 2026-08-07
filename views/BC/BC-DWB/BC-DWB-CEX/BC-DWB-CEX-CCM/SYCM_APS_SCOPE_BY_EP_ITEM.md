---
name: SYCM_APS_SCOPE_BY_EP_ITEM
description: Sycm Aps Scope BY EP Item
app_component: BC-DWB-CEX-CCM
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-DWB
  - BC-DWB-CEX
  - item-level
  - component:BC-DWB-CEX-CCM
  - lob:Basis Components
---
# SYCM_APS_SCOPE_BY_EP_ITEM

**Sycm Aps Scope BY EP Item**

| Property | Value |
|---|---|
| App Component | `BC-DWB-CEX-CCM` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `project_id` | ✓ | |  |  |  |  |
| `object` | ✓ | |  |  |  |  |
| `obj_name` | ✓ | |  |  |  |  |
| `entry_point_type` | ✓ | |  |  |  |  |
| `entry_point_name` | ✓ | |  |  |  |  |
| `devclass` |  | |  |  |  |  |
| `contact_person` |  | |  |  |  |  |
| `usage_information` |  | |  |  |  |  |
| `scope_information` |  | |  |  |  |  |
| `_project` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_project` | `SYCM_APS_PROJECT` | [1..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Scope for entry point items'
define view entity SYCM_APS_SCOPE_BY_EP_ITEM
  as select from sycm_aps_c_scp_by_ep_item_e
  association [1..1] to SYCM_APS_PROJECT as _project on _project.project_id = $projection.project_id
{
  key project_id,
  key object,
  key obj_name,
  key entry_point_type,
  key entry_point_name,
      devclass,
      contact_person,
      usage_information,
      scope_information,

      _project
}
```
