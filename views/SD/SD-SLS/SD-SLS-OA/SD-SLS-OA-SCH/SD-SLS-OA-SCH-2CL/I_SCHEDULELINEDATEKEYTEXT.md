---
name: I_SCHEDULELINEDATEKEYTEXT
description: Schedule LineDATEKEYTEXT
app_component: SD-SLS-OA-SCH-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-OA
  - interface-view
  - text-view
  - text
  - schedule-line
  - component:SD-SLS-OA-SCH-2CL
  - lob:Sales & Distribution
---
# I_SCHEDULELINEDATEKEYTEXT

**Schedule LineDATEKEYTEXT**

| Property | Value |
|---|---|
| App Component | `SD-SLS-OA-SCH-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ScheduleLineDateKey` | ✓ | |  | `substring( domvalue_l,1,1 )` |
| `Language` | ✓ | |  | `ddlanguage` |
| `ScheduleLineDateKeyDesc` |  | |  | `ddtext` |
| `_ScheduleLineDateKey` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ScheduleLineDateKey` | `I_ScheduleLineDateKey` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Date Key of Schedule Line - Text'
@VDM.viewType: #BASIC
@AbapCatalog:{
  sqlViewName: 'ISCHDLNDATEKEYT',
  compiler.compareFilter: true
}
@ObjectModel:{
representativeKey: 'ScheduleLineDateKey',
  usageType:{
    dataClass: #MIXED,
    serviceQuality: #A,
    sizeCategory: #S
    }
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true 
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, 
                                      #EXTRACTION_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
@ObjectModel.modelingPattern: [ #LANGUAGE_DEPENDENT_TEXT ] 
@Metadata.ignorePropagatedAnnotations:true

define view I_ScheduleLineDateKeyText
  as select from dd07t
  association [0..1] to I_ScheduleLineDateKey as _ScheduleLineDateKey on $projection.ScheduleLineDateKey = _ScheduleLineDateKey.ScheduleLineDateKey
  association [0..1] to I_Language            as _Language            on $projection.Language = _Language.Language
{
  key substring( domvalue_l,1,1 ) as ScheduleLineDateKey,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                  as Language,

      @Semantics.text: true
      ddtext                      as ScheduleLineDateKeyDesc,

      //Association
      _ScheduleLineDateKey,
      _Language
}
where
  (
    dd07t.domname  = 'TERSL'
  )
  and(
    dd07t.as4local = 'A'
  )
```
