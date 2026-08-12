---
name: I_ENTERPRISEPROJECTROLE
description: "Enterpriseprojectrole"
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
  - project
  - component:PPM-SCL-STR
  - lob:Other
  - bo:Project
---
# I_ENTERPRISEPROJECTROLE

**Enterpriseprojectrole**

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
| `ProjectRoleUUID` | ✓ | |  | `guid` |  |  |
| `ProjectUUID` |  | |  | `project_guid` |  |  |
| `ProjectRoleType` |  | |  | `role_type` |  |  |
| `ProjectRoleCategory` |  | |  | `role_category` |  |  |
| `ProjectRoleName` |  | |  | `role_name` |  |  |
| `CreatedByUser` |  | |  | `created_by` |  |  |
| `CreationDateTime` |  | |  | `created_on` |  |  |
| `LastChangedByUser` |  | |  | `changed_by` |  |  |
| `LastChangeDateTime` |  | |  | `changed_on` |  |  |
| `_Project` | | ✓ | | | | |
| `_ProjectRoleType` | | ✓ | | | | |
| `_ProjectRoleTypeCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Project` | `I_EnterpriseProject` | [1..1] |
| `_ProjectRoleType` | `I_EnterpriseProjectRoleType` | [1..1] |
| `_ProjectRoleTypeCategory` | `I_EntProjectRoleCategory` | [1..1] |

## Source Code

```abap
@VDM.viewType: #BASIC

@EndUserText.label: 'Enterprise Project Role'

@AbapCatalog: {
    sqlViewName: 'IIENTERPROJROLE',
    compiler.compareFilter: true,
    preserveKey: true,
    dataMaintenance: #RESTRICTED
}
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel: {
//   semanticKey:       [ 'ProjectRole' ], ProjectRoleName is not unique, there is no ID field at the moment
   representativeKey: 'ProjectRoleUUID',
   sapObjectNodeType.name: 'EnterpriseProjectRole',
   supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ],   
   usageType: {
     serviceQuality:  #B,
     dataClass:       #MASTER,
     sizeCategory:    #XL
   }
}

@Metadata.ignorePropagatedAnnotations: true

@Analytics.dataExtraction: {
        enabled: true
}

@Analytics.dataExtraction.delta.changeDataCapture.automatic: true

@VDM.lifecycle.contract.type:  #PUBLIC_LOCAL_API


define view I_EnterpriseProjectRole

  as select from   /s4ppm/role           as role

  association [1..1] to I_EnterpriseProject            as _Project                        on $projection.ProjectUUID         = _Project.ProjectUUID
  association [1..1] to I_EnterpriseProjectRoleType    as _ProjectRoleType                on $projection.ProjectRoleType     = _ProjectRoleType.ProjectRoleType
  association [1..1] to I_EntProjectRoleCategory       as _ProjectRoleTypeCategory        on $projection.ProjectRoleCategory = _ProjectRoleTypeCategory.ProjectRoleCategory

{
  key role.guid                   as ProjectRoleUUID,
      @ObjectModel.foreignKey.association: '_Project'
      role.project_guid           as ProjectUUID,
      @ObjectModel.foreignKey.association: '_ProjectRoleType'
      role.role_type              as ProjectRoleType,
      @ObjectModel.foreignKey.association: '_ProjectRoleTypeCategory'
      role.role_category          as ProjectRoleCategory,
      role.role_name              as ProjectRoleName,
      
      @Semantics.user.createdBy: true                    
      role.created_by             as CreatedByUser,
      @Semantics.systemDateTime.createdAt: true            
      role.created_on             as CreationDateTime, 
      @Semantics.user.lastChangedBy: true
      role.changed_by             as LastChangedByUser, 
      @Semantics.systemDateTime.lastChangedAt: true
      role.changed_on             as LastChangeDateTime, 

      _Project,
      _ProjectRoleType,
      _ProjectRoleTypeCategory
     
}
```
