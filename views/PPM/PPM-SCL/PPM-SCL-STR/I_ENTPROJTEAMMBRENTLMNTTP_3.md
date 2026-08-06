---
name: I_ENTPROJTEAMMBRENTLMNTTP_3
description: Entprojteammbrentlmnttp 3
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
  - transactional-processing
  - component:PPM-SCL-STR
  - lob:Other
---
# I_ENTPROJTEAMMBRENTLMNTTP_3

**Entprojteammbrentlmnttp 3**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ProjectEntitlementUUID` | `ProjectEntitlementUUID` |
| `ProjectUUID` | `ProjectUUID` |
| `ProjectRoleUUID` | `ProjectRoleUUID` |
| `TeamMemberUUID` | `TeamMemberUUID` |
| `ProjectRoleType` | `ProjectRoleType` |
| `CreatedByUser` | `CreatedByUser` |
| `CreationDateTime` | `CreationDateTime` |
| `LastChangedByUser` | `LastChangedByUser` |
| `LastChangeDateTime` | `LastChangeDateTime` |
| `_TeamMember` | *Association* |
| `_Role` | *Association* |
| `_EnterpriseProject` | *Association* |
| `_EnterpriseProjectForUser` | *Association* |

## Source Code

```abap
@Metadata.ignorePropagatedAnnotations:true
@AccessControl: {
    authorizationCheck:     #CHECK,
    personalData.blocking:  #BLOCKED_DATA_EXCLUDED
}
@VDM: {
    viewType: #TRANSACTIONAL,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@ObjectModel: {   
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
         serviceQuality:  #C,
         dataClass:       #MIXED,
         sizeCategory:    #L
   } }
  
@EndUserText.label: 'Team Member Entitlement of Ent Proj – TP'

define view entity I_EntProjTeamMbrEntlmntTP_3 as projection on R_EntProjTeamMbrEntitlementTP
 
    {
  key ProjectEntitlementUUID,
      ProjectUUID,
      ProjectRoleUUID,
      TeamMemberUUID,
      ProjectRoleType,                  
      CreatedByUser,           
      CreationDateTime, 
      LastChangedByUser, 
      LastChangeDateTime,      
//Association            
    _TeamMember: redirected to parent I_EntProjectTeamMemberTP_3,
    _Role : redirected to I_EnterpriseProjectRoleTP_3,
    _EnterpriseProject : redirected to I_EnterpriseProjectTP_3,
    _EnterpriseProjectForUser
}
```
