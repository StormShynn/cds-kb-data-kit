---
name: SYCM_APS_ATC_FINDINGS
description: "Sycm Aps Atc Findings"
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
  - component:BC-DWB-CEX-CCM
  - lob:Basis Components
---
# SYCM_APS_ATC_FINDINGS

**Sycm Aps Atc Findings**

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
| `item_id` | ✓ | |  |  |  |  |
| `result_id` |  | |  | `display_id` |  |  |
| `priority` |  | |  | `cast(priority as I_SATC_API_PRIORITY preserving type)` |  |  |
| `check_title` |  | |  |  |  |  |
| `check_message` |  | |  |  |  |  |
| `obj_type` |  | |  |  |  |  |
| `obj_name` |  | |  |  |  |  |
| `package_name` |  | |  |  |  |  |
| `person_responsible` |  | |  |  |  |  |
| `has_quickfixes` |  | |  | `cast(has_quickfixes as I_SATC_API_FNDQF preserving type)` |  |  |
| `application_component` |  | |  |  |  |  |
| `referenced_object_type` |  | |  |  |  |  |
| `referenced_object_name` |  | |  |  |  |  |
| `usage_information` |  | |  |  |  |  |
| `scope_information` |  | |  |  |  |  |
| `_project` | | ✓ | | | | |
| `_atc_finding` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_project` | `SYCM_APS_PROJECT` | [1..1] |
| `_atc_finding` | `SATC_API_FINDINGS` | [1..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'CCM - ATC Findings'
/*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ]  } */
define view entity SYCM_APS_ATC_FINDINGS as select from sycm_aps_i_atc_find_alp
  association [1..1] to SYCM_APS_PROJECT as _project on _project.project_id = $projection.project_id
  
  association [1..1] to SATC_API_FINDINGS  as _atc_finding on _atc_finding.ResultId = $projection.result_id 
                                                           and _atc_finding.ItemId = $projection.item_id
{
  key project_id,
  key item_id,
      display_id as result_id,
      cast(priority as I_SATC_API_PRIORITY preserving type) as priority,
      check_title,
      check_message,
      obj_type,
      obj_name,
      package_name,
      person_responsible,
      cast(has_quickfixes as I_SATC_API_FNDQF preserving type) as has_quickfixes,
      application_component,
      referenced_object_type,
      referenced_object_name,
      usage_information,
      scope_information,
      
      _project,
      _atc_finding
}
```
