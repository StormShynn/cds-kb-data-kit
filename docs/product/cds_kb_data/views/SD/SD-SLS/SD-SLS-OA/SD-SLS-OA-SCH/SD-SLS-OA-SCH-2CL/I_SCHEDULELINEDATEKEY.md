---
name: I_SCHEDULELINEDATEKEY
description: "Schedule LineDATEKEY"
app_component: SD-SLS-OA-SCH-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-OA
  - interface-view
  - schedule-line
  - component:SD-SLS-OA-SCH-2CL
  - lob:Sales & Distribution
---
# I_SCHEDULELINEDATEKEY

**Schedule LineDATEKEY**

| Property | Value |
|---|---|
| App Component | `SD-SLS-OA-SCH-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ScheduleLineDateKey` | ✓ | |  | `substring(dd07l.domvalue_l, 1, 1)` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ScheduleLineDateKeyText` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Date Key of Schedule Line'
@VDM.viewType: #BASIC
@AbapCatalog:{
  sqlViewName: 'ISCHDLNDATEKEY',
  compiler.compareFilter: true
}
@ObjectModel:{
representativeKey: 'ScheduleLineDateKey',
sapObjectNodeType.name: 'ScheduleLineDateKey',
  usageType:{
    dataClass: #MIXED,
    serviceQuality: #A,
    sizeCategory: #S
    },
  supportedCapabilities: [ #ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
  modelingPattern: [ #ANALYTICAL_DIMENSION ]
 }

@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@Metadata.ignorePropagatedAnnotations:true

define view I_ScheduleLineDateKey
  as select from dd07l
  association [0..*] to I_ScheduleLineDateKeyText as _Text on $projection.ScheduleLineDateKey = _Text.ScheduleLineDateKey
{
      @ObjectModel.text.association: '_Text'
  key substring(dd07l.domvalue_l, 1, 1) as ScheduleLineDateKey,

      _Text
}
where
  (
    dd07l.domname  = 'TERSL'
  )
  and(
    dd07l.as4local = 'A'
  )
```
