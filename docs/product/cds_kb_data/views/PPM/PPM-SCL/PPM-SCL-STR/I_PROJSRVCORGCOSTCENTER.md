---
name: I_PROJSRVCORGCOSTCENTER
description: "PROJSRVCORGCost Center"
app_component: PPM-SCL-STR
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-STR
  - interface-view
  - cost-center
  - component:PPM-SCL-STR
  - lob:Other
  - bo:CostCenter
---
# I_PROJSRVCORGCOSTCENTER

**PROJSRVCORGCost Center**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjectServiceOrganization` | ✓ | |  |  |  |  |
| `ProjSrvcOrgCostCenter` | ✓ | |  |  |  |  |
| `ProjectServiceOrganizationUUID` |  | |  |  |  |  |
| `ProjSrvcOrgIsMainCostCenter` |  | |  |  |  |  |
| `_ServiceOrganization` | | ✓ | | | | |
| `_ParentServiceOrganization` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceOrganization` | `I_ProjSrvcOrg` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Cost Center'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'ProjSrvcOrgCostCenter'
@ObjectModel.usageType:{
    serviceQuality: #C,
    sizeCategory: #M,
    dataClass: #ORGANIZATIONAL }
@ObjectModel.supportedCapabilities: [#EXTRACTION_DATA_SOURCE]
@Analytics.internalName:#LOCAL
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC

define view entity I_ProjSrvcOrgCostCenter
  as select from R_ProjSrvcOrgCostCenter

  association        to parent I_ProjSrvcOrg as _ParentServiceOrganization on $projection.ProjectServiceOrganizationUUID = _ParentServiceOrganization.ProjectServiceOrganizationUUID
  association [1..*] to I_ProjSrvcOrg        as _ServiceOrganization       on _ServiceOrganization.ProjectServiceOrganization = $projection.ProjectServiceOrganization

{

  key ProjectServiceOrganization,
  key ProjSrvcOrgCostCenter,
      ProjectServiceOrganizationUUID,
      @Semantics.booleanIndicator
      ProjSrvcOrgIsMainCostCenter,

      _ParentServiceOrganization,
      _ServiceOrganization

}
```
