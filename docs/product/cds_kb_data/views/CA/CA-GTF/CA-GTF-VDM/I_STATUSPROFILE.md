---
name: I_STATUSPROFILE
description: "Statusprofile"
app_component: CA-GTF-VDM
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
# I_STATUSPROFILE

**Statusprofile**

| Property | Value |
|---|---|
| App Component | `CA-GTF-VDM` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `StatusProfile` | ✓ | |  | `stsma` |  |  |
| `MasterLanguage` |  | |  | `pflsp` |  |  |
| `_StatusProfileText` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_StatusProfileText` | `I_StatusProfiletext` | [0..*] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE //Inserted by VDM CDS Suite Plugin
@ObjectModel.representativeKey: 'StatusProfile'
@ObjectModel.usageType.dataClass: #CUSTOMIZING 
@ObjectModel.usageType.serviceQuality: #A 
@ObjectModel.usageType.sizeCategory: #L 
@AbapCatalog.sqlViewName: 'ISTATUSPROFILE'
@EndUserText.label: 'Status Profile'
@Analytics : {dataCategory: #DIMENSION, dataExtraction.enabled : true}
@AccessControl.authorizationCheck: #CHECK
@VDM.viewType: #BASIC
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]

//Commented by VDM CDS Suite Plugin:@ObjectModel.representativeKey: 'StatusProfile'
//Commented by VDM CDS Suite Plugin:
define view I_StatusProfile as select from tj20
association [0..*] to I_StatusProfiletext as _StatusProfileText on
  $projection.StatusProfile = _StatusProfileText.StatusProfile
association [0..1] to I_Language as _Language on
   $projection.MasterLanguage = _Language.Language
 { 

  @ObjectModel.text.association: '_StatusProfileText'
  key tj20.stsma as StatusProfile,
  @ObjectModel.foreignKey.association: '_Language'
  tj20.pflsp as MasterLanguage,
  _StatusProfileText,
  _Language
}
```
