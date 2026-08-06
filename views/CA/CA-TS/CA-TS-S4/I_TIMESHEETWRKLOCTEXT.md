---
name: I_TIMESHEETWRKLOCTEXT
description: Timesheetwrkloctext
app_component: CA-TS-S4
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-TS
  - interface-view
  - text-view
  - text
  - component:CA-TS-S4
  - lob:Cross-Application Components
---
# I_TIMESHEETWRKLOCTEXT

**Timesheetwrkloctext**

| Property | Value |
|---|---|
| App Component | `CA-TS-S4` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `tswlt.langu` |
| key `TimeSheetWrkLocCode` | `cast( tswlt.wrkloc as cats_ssc_wrkloc preserving type )` |
| key `TimeSheetWrkLocEndDate` | `tswlt.endda` |
| `TimeSheetWrkLocCodeName` | `cast( tswlt.text as cats_ssc_wrkloctext preserving type )` |
| `_TimeSheetWrkLoc` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TimeSheetWrkLoc` | `I_TimeSheetWrkLoc` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ITSWRKLOCTEXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.buffering: {status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 002}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.usageType: { serviceQuality : #A, sizeCategory : #M, dataClass: #CUSTOMIZING }
@ObjectModel.representativeKey: 'TimeSheetWrkLocCode'
@VDM.viewType: #BASIC
@Search.searchable: true
@EndUserText.label: 'Work Location for Timesheet - Text'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SEARCHABLE_ENTITY ]
define view I_TimeSheetWrkLocText
  as select from tcats_ssc_wrklt as tswlt
  association [0..1] to I_TimeSheetWrkLoc as _TimeSheetWrkLoc on  $projection.TimeSheetWrkLocCode    = _TimeSheetWrkLoc.TimeSheetWrkLocCode
                                                              and $projection.TimeSheetWrkLocEndDate = _TimeSheetWrkLoc.TimeSheetWrkLocEndDate
  association [0..1] to I_Language        as _Language        on  $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key tswlt.langu  as Language,
      //@EndUserText.label: 'Work Location Code'
      //Commented Label in CE2111 For ATC Resolution As Part Of ES
      //Casting added for Label 
      @ObjectModel.text.element: ['TimeSheetWrkLocCodeName']
  key cast( tswlt.wrkloc as cats_ssc_wrkloc preserving type ) as TimeSheetWrkLocCode,
      @Semantics.businessDate.to: true
  key tswlt.endda  as TimeSheetWrkLocEndDate,
      //@EndUserText.label: 'Work Location Name'
      //Commented Label in CE2111 For ATC Resolution As Part Of ES
      //Casting added for Label 
      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
      @Semantics.text: true
      cast( tswlt.text as cats_ssc_wrkloctext preserving type )  as TimeSheetWrkLocCodeName,
      _TimeSheetWrkLoc,
      _Language
}
```
