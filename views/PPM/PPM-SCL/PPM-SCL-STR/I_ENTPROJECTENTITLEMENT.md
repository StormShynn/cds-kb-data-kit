---
name: I_ENTPROJECTENTITLEMENT
description: Entprojectentitlement
app_component: PPM-SCL-STR
software_component: SAPSCORE
release_state: released
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
# I_ENTPROJECTENTITLEMENT

**Entprojectentitlement**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjectEntitlementUUID` | ✓ | |  | `guid` |  |  |
| `ProjectUUID` |  | |  | `project_guid` |  |  |
| `ProjectRoleUUID` |  | |  | `role_guid` |  |  |
| `TeamMemberUUID` |  | |  | `team_member_guid` |  |  |
| `CreatedByUser` |  | |  | `created_by` |  |  |
| `CreationDateTime` |  | |  | `created_on` |  |  |
| `LastChangedByUser` |  | |  | `changed_by` |  |  |
| `LastChangeDateTime` |  | |  | `changed_on` |  |  |
| `_Project` | | ✓ | | | | |
| `_Role` | | ✓ | | | | |
| `_TeamMember` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Project` | `I_EnterpriseProject` | [1..1] |
| `_Role` | `I_EnterpriseProjectRole` | [1..1] |
| `_TeamMember` | `I_EnterpriseProjectTeamMember` | [1..1] |

## Source Code

```abap
@VDM.viewType: #BASIC

@EndUserText.label: 'Enterprise Project Entitlement'

@AbapCatalog: {
    sqlViewName: 'IENTPROJENT',
    compiler.compareFilter: true,
    preserveKey: true,
    dataMaintenance: #RESTRICTED
}

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel: {
//   semanticKey:       [ 'ProjectEntitlement' ], no semantic key, as this one has no real id at the moment
   representativeKey: 'ProjectEntitlementUUID',
   sapObjectNodeType.name: 'EntProjTeamMemberEntitlement',
   supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ],
   usageType: {
     serviceQuality:  #B,
     dataClass:       #MASTER,
     sizeCategory:    #XL
   }
}

@Metadata.ignorePropagatedAnnotations: true

@VDM.lifecycle.contract.type:  #PUBLIC_LOCAL_API

@Analytics.dataExtraction: {
        enabled: true
}

@Analytics.dataExtraction.delta.changeDataCapture.automatic: true

define view I_EntProjectEntitlement

  as select from /s4ppm/entitlmnt as entitlmnt

  association [1..1] to I_EnterpriseProject           as _Project      on _Project.ProjectUUID = $projection.ProjectUUID

  association [1..1] to I_EnterpriseProjectRole       as _Role         on _Role.ProjectRoleUUID = $projection.ProjectRoleUUID

  association [1..1] to I_EnterpriseProjectTeamMember as _TeamMember   on _TeamMember.TeamMemberUUID = $projection.TeamMemberUUID

  
{
  key entitlmnt.guid             as ProjectEntitlementUUID,
      @ObjectModel.foreignKey.association: '_Project'
      entitlmnt.project_guid     as ProjectUUID,
      @ObjectModel.foreignKey.association: '_Role'
      entitlmnt.role_guid        as ProjectRoleUUID,
      @ObjectModel.foreignKey.association: '_TeamMember'
      entitlmnt.team_member_guid as TeamMemberUUID,
 


      @Semantics.user.createdBy: true
      entitlmnt.created_by       as CreatedByUser,
      @Semantics.systemDateTime.createdAt: true
      entitlmnt.created_on       as CreationDateTime,
      @Semantics.user.lastChangedBy: true
      entitlmnt.changed_by       as LastChangedByUser,
      @Semantics.systemDateTime.lastChangedAt: true
      entitlmnt.changed_on       as LastChangeDateTime,

      _Project,
      _TeamMember,
      _Role

}
```
