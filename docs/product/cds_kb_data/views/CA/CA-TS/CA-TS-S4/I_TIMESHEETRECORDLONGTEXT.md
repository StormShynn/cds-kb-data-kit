---
name: I_TIMESHEETRECORDLONGTEXT
description: "Timesheetrecordlongtext"
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
# I_TIMESHEETRECORDLONGTEXT

**Timesheetrecordlongtext**

| Property | Value |
|---|---|
| App Component | `CA-TS-S4` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TimeSheetRecord` | ✓ | |  | `counter` |  |  |
| `Language` | ✓ | | `_TextObjectPlainLongText` | `Language` |  |  |
| `PlainLongText` |  | | `_TextObjectPlainLongText` | `PlainLongText` |  |  |
| `_TextObjectPlainLongText` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TextObjectPlainLongText` | `I_TextObjectPlainLongText` | [0..*] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ITSTLONGTEXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@AccessControl.privilegedAssociations: ['_TextObjectPlainLongText']
@EndUserText.label: 'Note of a Timesheet Record - Text'
@ObjectModel.usageType.serviceQuality : #A
@ObjectModel.usageType.sizeCategory : #XL
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.representativeKey: 'TimeSheetRecord'
@ObjectModel.dataCategory: #TEXT
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
define view I_TimeSheetRecordLongText
  as select from catsdb
  association [0..*] to I_TextObjectPlainLongText as _TextObjectPlainLongText on  _TextObjectPlainLongText.TextObjectCategory = 'CATS'
                                                                              and _TextObjectPlainLongText.TextObjectType     = 'CATS'
                                                                              and _TextObjectPlainLongText.TextObjectKey      = $projection.TimeSheetRecord
  association [0..1] to I_Language                as _Language                on  $projection.Language = _Language.Language 
{
  key catsdb.counter                         as TimeSheetRecord,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key _TextObjectPlainLongText.Language      as Language,
      @Semantics.text: true
      _TextObjectPlainLongText.PlainLongText as PlainLongText,
      _TextObjectPlainLongText,
      _Language
}
```
