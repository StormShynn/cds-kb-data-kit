---
name: I_CHANGEMASTERSTATUSTEXT
description: "Change MasterERSTATUSTEXT"
app_component: PLM-WUI-OBJ-ECN-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PLM
  - PLM-WUI
  - PLM-WUI-OBJ
  - interface-view
  - text-view
  - change-master
  - text
  - status
  - component:PLM-WUI-OBJ-ECN-2CL
  - lob:Other
---
# I_CHANGEMASTERSTATUSTEXT

**Change MasterERSTATUSTEXT**

| Property | Value |
|---|---|
| App Component | `PLM-WUI-OBJ-ECN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChangeNumberStatus` | ✓ | |  | `cast ( aenst as /plmb/ecn_status )` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `ChangeNumberStatusText` |  | |  | `aestx` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IECNSTATUSTEXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.representativeKey: 'ChangeNumberStatus'
@ObjectModel.dataCategory: #TEXT
//@ObjectModel.semanticKey:  'ChangeNumberStatus'

@ObjectModel.modelingPattern:           #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:  [  #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #LANGUAGE_DEPENDENT_TEXT,
                                        #SQL_DATA_SOURCE ]

@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING

@Search.searchable: true

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API

@EndUserText.label: 'Change Number Status - Text'
define view I_ChangeMasterStatusText
  as select from t419t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @Search.ranking: #HIGH
  key cast ( aenst as /plmb/ecn_status ) as ChangeNumberStatus,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key spras                              as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text
      aestx                              as ChangeNumberStatusText,

      _Language
}
```
