---
name: I_LOADINGGROUPTEXT
description: Loadinggrouptext
app_component: LE-SHP-GF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LE
  - LE-SHP
  - LE-SHP-GF
  - interface-view
  - text-view
  - text
  - component:LE-SHP-GF-2CL
  - lob:Logistics Execution
---
# I_LOADINGGROUPTEXT

**Loadinggrouptext**

| Property | Value |
|---|---|
| App Component | `LE-SHP-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `LoadingGroup` | `ladgr` |
| key `Language` | `spras` |
| `LoadingGroupName` | `vtext` |
| `_LoadingGroup` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LoadingGroup` | `I_LoadingGroup` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@Analytics.dataExtraction.enabled: true //Inserted by VDM CDS Suite Plugin
@ClientHandling.algorithm: #SESSION_VARIABLE //Inserted by VDM CDS Suite Plugin
@ObjectModel.dataCategory: #TEXT
@ObjectModel.sapObjectNodeType.name: 'LoadingGroupText'
@ObjectModel.representativeKey: 'LoadingGroup'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@EndUserText.label: 'Loading Group - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ILELOADINGGRPT'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: [ #LANGUAGE_DEPENDENT_TEXT ]

define view I_LoadingGroupText
as
select from tlgrt
association [0..1] to I_LoadingGroup as _LoadingGroup on $projection.LoadingGroup = _LoadingGroup.LoadingGroup
association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_LoadingGroup'
    key ladgr as LoadingGroup,

    @Semantics.language
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,

    @Semantics.text
    vtext as LoadingGroupName,

    _LoadingGroup,
    _Language
};
```
