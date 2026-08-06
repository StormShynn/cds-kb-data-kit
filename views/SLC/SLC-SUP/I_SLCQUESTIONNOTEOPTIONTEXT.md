---
name: I_SLCQUESTIONNOTEOPTIONTEXT
description: Slcquestionnoteoptiontext
app_component: SLC-SUP
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SLC
  - SLC-SUP
  - interface-view
  - text-view
  - text
  - note
  - component:SLC-SUP
  - lob:Other
---
# I_SLCQUESTIONNOTEOPTIONTEXT

**Slcquestionnoteoptiontext**

| Property | Value |
|---|---|
| App Component | `SLC-SUP` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `IsQuestionCommentEnabled` | `cast( substring( domvalue_l, 1, 1 ) as /srmsmc/qst_notes)` |
| key `Language` | `ddlanguage` |
| `SLCQuestionCommentOptionName` | `cast(ddtext as /srmsmc/type_descr preserving type)` |
| `_Language` | *Association* |
| `_SLCQuestionNoteOption` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_SLCQuestionNoteOption` | `I_SLCQuestionNoteOption` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Question Note Option - Text' //same as DDL description
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.usageType.dataClass:  #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.representativeKey: 'IsQuestionCommentEnabled'
@AbapCatalog.sqlViewName: 'ISLCQSTNOTEOPTT'
define view I_SLCQuestionNoteOptionText as select from dd07t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
  association [1..1] to I_SLCQuestionNoteOption as _SLCQuestionNoteOption on $projection.IsQuestionCommentEnabled = _SLCQuestionNoteOption.IsQuestionCommentEnabled
{
  key  cast( substring(  domvalue_l, 1, 1 ) as /srmsmc/qst_notes) as IsQuestionCommentEnabled,

  @Semantics.language: true
  key ddlanguage as Language,

  @Semantics.text: true
  cast(ddtext as /srmsmc/type_descr preserving type) as SLCQuestionCommentOptionName,

  _SLCQuestionNoteOption, 
  _Language
}
where domname = '/SRMSMC/QST_NOTE_OPT' and as4local = 'A'
```
