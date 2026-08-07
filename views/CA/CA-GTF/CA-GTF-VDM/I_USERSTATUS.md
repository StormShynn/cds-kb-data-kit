---
name: I_USERSTATUS
description: Userstatus
app_component: CA-GTF-VDM
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-VDM
  - interface-view
  - status
  - component:CA-GTF-VDM
  - lob:Cross-Application Components
---
# I_USERSTATUS

**Userstatus**

| Property | Value |
|---|---|
| App Component | `CA-GTF-VDM` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `UserStatus` | ✓ | |  | `estat` |  |  |
| `StatusProfile` | ✓ | |  | `stsma` |  |  |
| `StatusAuthorizationKey` |  | |  | `bersl` |  |  |
| `StatusSequenceNumber` |  | |  | `stonr` |  |  |
| `StatusDisplayPosition` |  | |  | `linep` |  |  |
| `StatusDisplayPriority` |  | |  | `statp` |  |  |
| `_UserStatusText` | | ✓ | | | | |
| `_StatusProfile` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_UserStatusText` | `I_UserStatusText` | [0..*] |
| `_StatusProfile` | `I_StatusProfile` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'UserStatus'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@AbapCatalog.sqlViewName: 'IUSERSTATUS'
@AbapCatalog.preserveKey:true 
@EndUserText.label: 'User Status'
@Analytics : {dataCategory: #DIMENSION, dataExtraction.enabled : true}
@AccessControl.authorizationCheck: #CHECK
@VDM.viewType: #BASIC
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]

define view I_UserStatus as select from tj30

association [0..*] to I_UserStatusText as _UserStatusText
  on  $projection.UserStatus    = _UserStatusText.UserStatus
  and $projection.StatusProfile = _UserStatusText.StatusProfile

association [0..1] to    I_StatusProfile as _StatusProfile
  on $projection.StatusProfile = _StatusProfile.StatusProfile
{
  @ObjectModel.text.association: '_UserStatusText'
  key tj30.estat as UserStatus,
  
  @ObjectModel.foreignKey.association: '_StatusProfile'
  key tj30.stsma  as StatusProfile,

  tj30.bersl as StatusAuthorizationKey,

  tj30.stonr as StatusSequenceNumber,
  
  tj30.linep as StatusDisplayPosition,
  
  tj30.statp as StatusDisplayPriority ,

  _UserStatusText,
  _StatusProfile

}
```
