---
name: I_USERSTATUSTEXT
description: Userstatustext
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
  - text-view
  - text
  - status
  - component:CA-GTF-VDM
  - lob:Cross-Application Components
---
# I_USERSTATUSTEXT

**Userstatustext**

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
| `Language` | ✓ | |  | `spras` |  |  |
| `UserStatusName` |  | |  | `txt30` |  |  |
| `UserStatusShortName` |  | |  | `txt04` |  |  |
| `_UserStatus` | | ✓ | | | | |
| `_StatusProfile` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_UserStatus` | `I_UserStatus` | [0..1] |
| `_StatusProfile` | `I_StatusProfile` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'UserStatus'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@AbapCatalog.sqlViewName: 'IUSERSTATUSTEXT'
@AbapCatalog.preserveKey:true
@EndUserText.label: 'User Status - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE  ]
@Analytics: {
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping:[
                {
                    table: 'tj30t',role:#MAIN,
                    viewElement:  ['StatusProfile', 'UserStatus', 'Language'],
                    tableElement: ['stsma', 'estat', 'spras']
                }
            ]
        }
    }
    }
define view I_UserStatusText
  as select from tj30t

  association [0..1] to I_UserStatus    as _UserStatus    on  $projection.StatusProfile = _UserStatus.StatusProfile
                                                          and $projection.UserStatus    = _UserStatus.UserStatus

  association [0..1] to I_StatusProfile as _StatusProfile on  $projection.StatusProfile = _StatusProfile.StatusProfile

  association [0..1] to I_Language      as _Language      on  $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_UserStatus'
  key tj30t.estat as UserStatus,

      @ObjectModel.foreignKey.association: '_StatusProfile'
  key tj30t.stsma as StatusProfile,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key tj30t.spras as Language,

      @Semantics.text: true
      tj30t.txt30 as UserStatusName,

      @Semantics.text: true
      tj30t.txt04 as UserStatusShortName,


      _StatusProfile,
      _UserStatus,
      _Language
}
```
