---
name: I_PPM_AUTHZNBYUSERROLEH
description: Ppm Authznbyuserroleh
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
  - component:PPM-SCL-STR
  - lob:Other
---
# I_PPM_AUTHZNBYUSERROLEH

**Ppm Authznbyuserroleh**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ReferencedObjectUUID` | ✓ | |  | `object_id` |  |  |
| `Activity` | ✓ | |  | `activity` |  |  |
| `UserID` | ✓ | |  | `uname` |  |  |
| `AuthorizationRoleID` | ✓ | |  | `role_id` |  |  |
| `ObjectType` |  | |  | `object_type` |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPMAUTHZNUSRRLH'
@VDM.viewType: #BASIC

@AbapCatalog.compiler.compareFilter: true

@AccessControl.authorizationCheck:      #NOT_REQUIRED
@AccessControl.personalData.blocking:   #BLOCKED_DATA_EXCLUDED

@ClientHandling.algorithm:#SESSION_VARIABLE

@ObjectModel: {
   supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET ],
   modelingPattern: [ #NONE ],
   usageType: {
       serviceQuality:  #A,
       dataClass:       #MIXED,
       sizeCategory:    #L
   }
}
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type:  #PUBLIC_LOCAL_API
@EndUserText.label: 'Project Authorizations by User Role'
//PPM Object Authorization for a user by role assignment inclduing inherited authorizations

define view I_PPM_AuthznByUserRoleH 
as select from  aco_role  as RoleAuth
      // get all inherited authorizations  by join with table containing all inherited_from objects
    inner join /s4ppm/auth_ref  as hier on RoleAuth.object_id = hier.inherited_from
    inner join agr_users as UserRole 
            on      RoleAuth.role_id    = UserRole.agr_name
             and    UserRole.exclude    = ''
             and    UserRole.from_dat  <= $session.system_date
             and    UserRole.to_dat    >= $session.system_date
    
// with reference user support we need something like this    
//    left outer join agr_users as UserRole 
//            on      RoleAuth.role_id    = UserRole.agr_name
//             and    UserRole.exclude    = ''
//             and    UserRole.from_dat  <= $session.system_date
//             and    UserRole.to_dat    >= $session.system_date
//    left outer join Agr_Users_Usrefus as RefUserRole
//            on      RoleAuth.role_id    = RefUserRole.role_name
//             and    RefUserRole.valid_from  <= $session.system_date
//             and    RefUserRole.valid_to    >= $session.system_date            
  {
  
    key hier.object_id      as ReferencedObjectUUID,
    key RoleAuth.activity   as Activity,
    key UserRole.uname      as UserID,
//    key RefUserRole.user_name as UserID1,
    key RoleAuth.role_id    as AuthorizationRoleID,
        hier.object_type    as ObjectType
  
  }
```
