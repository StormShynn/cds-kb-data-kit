---
name: I_PPM_AUTHZNBYUSRGRPH
description: "Ppm Authznbyusrgrph"
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ReferencedObjectUUID` | ✓ | |  | `object_id` |  |  |
| `Activity` | ✓ | |  | `activity` |  |  |
| `UserID` | ✓ | |  |  |  |  |
| `ProjectAuthznGroupID` | ✓ | |  | `user_group_id` |  |  |
| `ObjectType` |  | |  | `type` |  |  |

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
