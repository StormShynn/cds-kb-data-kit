---
name: I_TIMESHEETOVERTIMECATTEXT
description: "Timesheetovertimecattext"
app_component: CA-TS-S4
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_TIMESHEETOVERTIMECATTEXT

**Timesheetovertimecattext**

| Property | Value |
|---|---|
| App Component | `CA-TS-S4` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `langu` |  |  |
| `TimeSheetOvertimeCategory` | ✓ | |  | `overtimecat` |  |  |
| `TimeSheetOvertimeCategoryText` |  | |  | `text` |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ITSOVTMT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.buffering: {status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 002}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.usageType: { serviceQuality : #A, sizeCategory : #S, dataClass: #CUSTOMIZING }
@ObjectModel.representativeKey: 'TimeSheetOvertimeCategory'
@VDM.viewType: #BASIC
@Search.searchable: true
@EndUserText.label: 'Overtime Category for Timesheet - Text'
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataExtraction.enabled: true
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE, #SEARCHABLE_ENTITY ]
define view I_TimeSheetOvertimeCatText
  as select from tcats_ssc_ovtmt
{
      //tcats_ssc_ovtmt
      @Semantics.language: true
  key langu       as Language,
      @ObjectModel.text.element:  [ 'TimeSheetOvertimeCategoryText' ]
  key overtimecat as TimeSheetOvertimeCategory,
      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
      @Semantics.text: true
      text        as TimeSheetOvertimeCategoryText
}
```
