---
name: I_SCHEDULELINECATEGORYTEXT
description: "Schedule LineCATEGORYTEXT"
app_component: SD-SLS-GF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-GF
  - interface-view
  - text-view
  - text
  - schedule-line
  - component:SD-SLS-GF-2CL
  - lob:Sales & Distribution
---
# I_SCHEDULELINECATEGORYTEXT

**Schedule LineCATEGORYTEXT**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ScheduleLineCategory` | ✓ | |  | `ettyp` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `ScheduleLineCategoryName` |  | |  | `vtext` |  |  |
| `_ScheduleLineCategory` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ScheduleLineCategory` | `I_ScheduleLineCategory` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'ScheduleLineCategory'
@ObjectModel.usageType.dataClass: #CUSTOMIZING 
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE, #SQL_DATA_SOURCE,  #CDS_MODELING_DATA_SOURCE ]
@Analytics.dataExtraction.enabled: true 
@ObjectModel.modelingPattern: [ #LANGUAGE_DEPENDENT_TEXT ]
@EndUserText.label: 'Schedule Line Category - Text'
@VDM.viewType:#BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDSCHEDLINECATT'
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@Metadata.ignorePropagatedAnnotations:true
@Search.searchable: true
define view I_ScheduleLineCategoryText
as
select from tvept
association[0..1] to I_ScheduleLineCategory as _ScheduleLineCategory on $projection.ScheduleLineCategory = _ScheduleLineCategory.ScheduleLineCategory
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_ScheduleLineCategory'
    key ettyp as ScheduleLineCategory,
    
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,

    @Search.defaultSearchElement: true
    @Search.fuzzinessThreshold: 0.9
    @Search.ranking: #MEDIUM
    @Semantics.text: true
    vtext as ScheduleLineCategoryName,
    
    _ScheduleLineCategory,
    _Language
};
```
