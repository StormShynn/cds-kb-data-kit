---
name: I_PPM_AUTHZNBYUSRH
description: Ppm Authznbyusrh
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
# I_PPM_AUTHZNBYUSRH

**Ppm Authznbyusrh**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ReferencedObjectUUID` | ✓ | |  | `cast( Auth.AccCtrlReferencedObjectUUID as /s4ppm/tv_entity_guid preserving type )` |  |  |
| `Activity` | ✓ | |  | `case Auth.AccessControlRestrictionCode when 'READ' then cast( 'Read' as aco_actvt ) when 'WRITE' then cast( 'Write' as aco_actvt ) when 'ADMIN' then cast( 'Admin' as aco_actvt ) when 'FINANCL' then cast( 'Financials' as aco_actvt ) end` |  |  |
| `UserID` | ✓ | |  | `cast( Auth.UserID as aco_user_id preserving type )` |  |  |
| `ObjectType` |  | |  | `cast( 'DPO' as aco_object_type )` |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPMAUTHZNBYUSRH'
@VDM.viewType: #COMPOSITE

@AbapCatalog.compiler.compareFilter: true

@AccessControl: {
    authorizationCheck:      #NOT_REQUIRED,
    auditing: {
        type: #CUSTOM,
        specification: 'change documents on Enterprise Projects'
    },
    personalData.blocking:   #BLOCKED_DATA_EXCLUDED
}

@ClientHandling.algorithm:#SESSION_VARIABLE

@ObjectModel: {
   supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET ],
   modelingPattern: [ #NONE ] ,
   usageType: {
       serviceQuality:  #A,
       dataClass:       #MIXED,
       sizeCategory:    #L
   }
}
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type:  #PUBLIC_LOCAL_API
@EndUserText.label: 'Project Authorizations by User'
// PPM Object Authorization for a user by direct assignment inclduing inherited authorizations
define view I_PPM_AuthznByUsrH as select distinct from R_AccControlIsUserAuthorized as Auth
{
    key cast( Auth.AccCtrlReferencedObjectUUID as /s4ppm/tv_entity_guid preserving type ) as ReferencedObjectUUID,
    key case Auth.AccessControlRestrictionCode
      when 'READ'     then cast( 'Read' as aco_actvt  )
      when 'WRITE'    then cast( 'Write' as aco_actvt  )
      when 'ADMIN'    then cast( 'Admin' as aco_actvt  )
      when 'FINANCL'  then cast( 'Financials' as aco_actvt  )
//      else cast( Auth.AccessControlRestrictionCode as aco_actvt  )
    end as Activity,
    key cast( Auth.UserID as aco_user_id preserving type ) as UserID,
    cast( 'DPO' as aco_object_type ) as ObjectType
}
```
