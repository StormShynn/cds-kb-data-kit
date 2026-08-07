---
name: I_TIMESHEETWRKLOC
description: Timesheetwrkloc
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
  - component:CA-TS-S4
  - lob:Cross-Application Components
---
# I_TIMESHEETWRKLOC

**Timesheetwrkloc**

| Property | Value |
|---|---|
| App Component | `CA-TS-S4` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TimeSheetWrkLocCode` | ✓ | |  | `wrkloc` |  |  |
| `TimeSheetWrkLocEndDate` | ✓ | |  | `endda` |  |  |
| `TimeSheetWrkLocStartDate` |  | |  | `begda` |  |  |
| `TimeSheetWrkLocCntry` |  | |  | `country` |  |  |
| `TimeSheetWrkLocRegion` |  | |  | `state` |  |  |
| `_TimeSheetWrkLocText` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_Region` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TimeSheetWrkLocText` | `I_TimeSheetWrkLocText` | [0..*] |
| `_Country` | `I_Country` | [0..1] |
| `_Region` | `I_Region` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ITSWRKLOC'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.buffering: {status: #ACTIVE, type: #FULL}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@ObjectModel.usageType: { serviceQuality : #A, sizeCategory : #M, dataClass: #CUSTOMIZING }
@ObjectModel.representativeKey: 'TimeSheetWrkLocCode'
@ObjectModel.semanticKey: ['TimeSheetWrkLocCode', 'TimeSheetWrkLocEndDate']
@Search.searchable: true
@EndUserText.label: 'Work Location for Timesheet'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SEARCHABLE_ENTITY ]
define view I_TimeSheetWrkLoc
  as select from tcats_ssc_wrkl as tswl
  association [0..*] to I_TimeSheetWrkLocText as _TimeSheetWrkLocText on  $projection.TimeSheetWrkLocCode    = _TimeSheetWrkLocText.TimeSheetWrkLocCode
                                                                      and $projection.TimeSheetWrkLocEndDate = _TimeSheetWrkLocText.TimeSheetWrkLocEndDate
  association [0..1] to I_Country             as _Country             on  $projection.TimeSheetWrkLocCntry = _Country.Country
  association [0..1] to I_Region              as _Region              on  $projection.TimeSheetWrkLocRegion  = _Region.Region
                                                                      and $projection.TimeSheetWrkLocCntry = _Region.Country
{
      @EndUserText.label: 'Work Location Code'
      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
      @ObjectModel.text.association: '_TimeSheetWrkLocText'
  key tswl.wrkloc  as TimeSheetWrkLocCode,
      @Semantics.businessDate.to: true
  key tswl.endda   as TimeSheetWrkLocEndDate,
      @Semantics.businessDate.from: true
      tswl.begda   as TimeSheetWrkLocStartDate,
      @ObjectModel.foreignKey.association: '_Country'
      tswl.country as TimeSheetWrkLocCntry,
      @ObjectModel.foreignKey.association: '_Region'
      tswl.state   as TimeSheetWrkLocRegion,

      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _TimeSheetWrkLocText,
      _Country,
      _Region
}
```
