---
name: I_PROJSRVCORGTEXT
description: "Projsrvcorgtext"
app_component: PPM-SCL-STR
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
  - PPM
  - PPM-SCL
  - PPM-SCL-STR
  - interface-view
  - text-view
  - text
  - component:PPM-SCL-STR
  - lob:Other
---
# I_PROJSRVCORGTEXT

**Projsrvcorgtext**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
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
| `ProjectServiceOrganization` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `ProjectServiceOrganizationUUID` |  | |  |  |  |  |
| `ProjSrvcOrgName` |  | |  |  |  |  |
| `_ServiceOrganization` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceOrganization` | `I_ProjSrvcOrg` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Service Organization - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'ProjectServiceOrganizationText'
@ObjectModel.supportedCapabilities: [#EXTRACTION_DATA_SOURCE]
@ObjectModel.usageType:{
    serviceQuality: #C,
    sizeCategory: #M,
    dataClass: #ORGANIZATIONAL }
@ObjectModel.dataCategory: #TEXT
@Analytics.internalName:#LOCAL
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC

define view entity I_ProjSrvcOrgText as select from R_ProjSrvcOrgText as Text
    association to I_ProjSrvcOrg as _ServiceOrganization on $projection.ProjectServiceOrganizationUUID = _ServiceOrganization.ProjectServiceOrganizationUUID
{
    key ProjectServiceOrganization,    
    @Semantics.language:true
    key Language,
    ProjectServiceOrganizationUUID,
    @Semantics.text:true
    ProjSrvcOrgName,
    _ServiceOrganization
}
```
