---
name: I_USERTOUSERTOLERANCEGROUP
description: "Usertousertolerancegroup"
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-AR
  - FI-AR-IS
  - interface-view
  - component:FI-AR-IS-2CL
  - lob:Finance
---
# I_USERTOUSERTOLERANCEGROUP

**Usertousertolerancegroup**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `UserID` | ✓ | |  | `usnam` |  |  |
| `UserToleranceGroup` |  | |  | `cast( rfpro as fins_rfpro )` |  |  |
| `_UserToleranceGroup` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_UserToleranceGroup` | `I_UserToleranceGroup` | [0..*] |

## Source Code

```abap
@AbapCatalog:    { sqlViewName:                 'IFIUSRTOUSRTOLGP',
                   preserveKey:                 true,
                   compiler.compareFilter:      true }

@Metadata:       { ignorePropagatedAnnotations: true,
                   allowExtensions:             false }

@ObjectModel:    { modelingPattern: #NONE,
                   usageType.serviceQuality:    #A,
                   usageType.sizeCategory:      #S,
                   usageType.dataClass:         #CUSTOMIZING,
                   supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET , #SQL_DATA_SOURCE ]
                   }
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY

@EndUserText:    { label:                       'User Assignment to UserTolGroup in Acctg' }
@VDM:            { viewType:                    #BASIC }
@ClientHandling: { algorithm:                   #SESSION_VARIABLE }
@Search:         { searchable:                  false }

@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
define view I_UserToUserToleranceGroup
  as select from t043
  association [0..*] to I_UserToleranceGroup as _UserToleranceGroup on _UserToleranceGroup.UserToleranceGroup = $projection.UserToleranceGroup

{
  key usnam                       as UserID,
      cast( rfpro as fins_rfpro ) as UserToleranceGroup,
      _UserToleranceGroup
}
```
