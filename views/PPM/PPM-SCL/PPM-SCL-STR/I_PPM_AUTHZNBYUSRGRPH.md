---
name: I_PPM_AUTHZNBYUSRGRPH
description: Ppm Authznbyusrgrph
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
# I_PPM_AUTHZNBYUSRGRPH

**Ppm Authznbyusrgrph**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ReferencedObjectUUID` | ✓ | |  | `object_id` |
| `Activity` | ✓ | |  | `activity` |
| `UserID` | ✓ | |  |  |
| `ProjectAuthznGroupID` | ✓ | |  | `user_group_id` |
| `ObjectType` |  | |  | `type` |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPMAUTHZNUSRGRP'

@VDM.viewType: #BASIC

@AbapCatalog.compiler.compareFilter: true

@AccessControl.authorizationCheck:      #NOT_REQUIRED
@AccessControl.personalData.blocking:   #BLOCKED_DATA_EXCLUDED

@ClientHandling.algorithm:#SESSION_VARIABLE

@ObjectModel: {
   supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET ],
   modelingPattern: #NONE,
   usageType: {
       serviceQuality:  #B,
       dataClass:       #TRANSACTIONAL,
       sizeCategory:    #L
   }
}
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type:  #PUBLIC_LOCAL_API
@EndUserText.label: 'Project Authorizations by User Group'
define view I_PPM_AuthznByUsrGrpH 
as select from aco_user_group           as GroupAuth
        inner join      P_PPM_UserGroupHierarchy as UserGroup   on GroupAuth.user_group_id = UserGroup.UserGroupUUID_1
                                                                or GroupAuth.user_group_id = UserGroup.UserGroupUUID_2
                                                                or GroupAuth.user_group_id = UserGroup.UserGroupUUID_3
            // get all inherited authorizations  by join with table containing all inherited_from objects
        inner join   /s4ppm/auth_ref           as hier on GroupAuth.object_id = hier.inherited_from
{
  key hier.object_id           as ReferencedObjectUUID,
  key GroupAuth.activity       as Activity,

//      @Semantics.user.id: true
  key UserGroup.UserID         as UserID,
  key GroupAuth.user_group_id  as ProjectAuthznGroupID,
      GroupAuth.type           as ObjectType
}
```
