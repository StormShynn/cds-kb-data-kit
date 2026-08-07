---
name: SYCM_APS_PROJECT
description: "Sycm Aps Project"
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
  - project
  - component:BC-DWB-CEX-CCM
  - lob:Basis Components
  - bo:Project
---
# SYCM_APS_PROJECT

**Sycm Aps Project**

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
| `description` |  | |  |  |  |  |
| `atc_run_series` |  | |  |  |  |  |
| `_atc_result_headers` | | ✓ | | | | |
| `_latest_atc_findings` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_atc_result_headers` | `SATC_API_RESULT_HEADERS` | [0..*] |
| `_latest_atc_findings` | `SYCM_APS_ATC_FINDINGS` | [0..*] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'CCM Projects'
define view entity SYCM_APS_PROJECT
  as select from sycma_project
  association [0..*] to SATC_API_RESULT_HEADERS as _atc_result_headers on _atc_result_headers.RunSeries = $projection.atc_run_series
  association [0..*] to SYCM_APS_ATC_FINDINGS as _latest_atc_findings on _latest_atc_findings.project_id = $projection.project_id
{

  key project_id,
      description,
      atc_run_series,
      
      _atc_result_headers,
      _latest_atc_findings
}
```
