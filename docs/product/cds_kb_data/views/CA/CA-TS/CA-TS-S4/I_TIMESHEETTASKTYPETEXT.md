---
name: I_TIMESHEETTASKTYPETEXT
description: "Timesheettasktypetext"
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
# I_TIMESHEETTASKTYPETEXT

**Timesheettasktypetext**

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
| `TimeSheetTaskType` | ✓ | |  | `tasktype` |  |  |
| `TimeSheetTaskTypeText` |  | |  | `text` |  |  |
| `_TimeSheetTaskType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TimeSheetTaskType` | `I_TimeSheetTaskType` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ITIMSHTTSKTYP'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter: true
//@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #L, dataClass: #MASTER }
//@AbapCatalog.buffering: { status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 2 }
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'Task Type for Timesheet - Text'
@ObjectModel.representativeKey: 'TimeSheetTaskType'
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SEARCHABLE_ENTITY ]

define view I_TimeSheetTaskTypeText
  as select from tcatx_tasktypest
  association [1..1] to I_TimeSheetTaskType as _TimeSheetTaskType on $projection.TimeSheetTaskType = _TimeSheetTaskType.TimeSheetTaskType
  association [0..1] to I_Language          as _Language          on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key langu    as Language,
  
      @ObjectModel.text.element:  [ 'TimeSheetTaskTypeText' ]
      @ObjectModel.foreignKey.association: '_TimeSheetTaskType'
  key tasktype as TimeSheetTaskType,

      @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #HIGH }
      @Semantics.text: true
      text     as TimeSheetTaskTypeText,

      _TimeSheetTaskType,
      _Language
}
```
