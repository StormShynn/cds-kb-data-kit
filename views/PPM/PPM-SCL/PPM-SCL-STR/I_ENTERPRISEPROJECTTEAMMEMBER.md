---
name: I_ENTERPRISEPROJECTTEAMMEMBER
description: Enterpriseprojectteammember
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
# I_ENTERPRISEPROJECTTEAMMEMBER

**Enterpriseprojectteammember**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `TeamMemberUUID` | `guid` |
| `BusinessPartnerUUID` | `bupa_guid` |
| `ProjectUUID` | `project_guid` |
| `CreatedByUser` | `created_by` |
| `CreationDateTime` | `created_on` |
| `LastChangedByUser` | `changed_by` |
| `LastChangeDateTime` | `changed_on` |
| `_Project` | *Association* |
| `_Entitlement` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Project` | `I_EnterpriseProject` | [1..1] |
| `_Entitlement` | `I_EntProjectEntitlement` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Team Member of Enterprise Project'

@AbapCatalog: {
    sqlViewName: 'IENTPROJTEAMMBR',
    compiler.compareFilter: true,
    dataMaintenance: #RESTRICTED
}

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel: {
   representativeKey: 'TeamMemberUUID',
   sapObjectNodeType.name: 'TeamMember',
   supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ],
   usageType: {
     serviceQuality:  #A,
     dataClass:       #MASTER,
     sizeCategory:    #L
   }
}

@Metadata.ignorePropagatedAnnotations: true

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type:  #PUBLIC_LOCAL_API

@Analytics.dataExtraction: {
        enabled: true
}

@Analytics.dataExtraction.delta.changeDataCapture.automatic: true

define view I_EnterpriseProjectTeamMember
  as select from /s4ppm/teammbr as TeamMember
  association [1..1] to I_EnterpriseProject     as _Project     on $projection.ProjectUUID = _Project.ProjectUUID
  association [0..*] to I_EntProjectEntitlement as _Entitlement on $projection.TeamMemberUUID = _Entitlement.TeamMemberUUID

  // can not be exposed as BuPa UUID is not key
  //  association [1..1] to I_BusinessPartner            as _BusinessPartner    on $projection.BusinessPartnerUUID = _BusinessPartner.BusinessPartnerUUID

{
  key guid         as TeamMemberUUID,
      //  @ObjectModel.foreignKey.association: '_BusinessPartner'
      bupa_guid    as BusinessPartnerUUID,
      @ObjectModel.foreignKey.association: '_Project'
      project_guid as ProjectUUID,
      @Semantics.user.createdBy: true
      created_by   as CreatedByUser,
      //@Semantics.systemDateTime.createdAt: true
      created_on   as CreationDateTime,
      @Semantics.user.lastChangedBy: true
      changed_by   as LastChangedByUser,
      //@Semantics.systemDateTime.lastChangedAt: true
      changed_on   as LastChangeDateTime,

      /* Associations */
      _Project,
      _Entitlement

      //  _BusinessPartner

}
```
