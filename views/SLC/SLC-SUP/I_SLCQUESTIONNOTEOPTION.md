---
name: I_SLCQUESTIONNOTEOPTION
description: Slcquestionnoteoption
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
  - note
  - component:SLC-SUP
  - lob:Other
---
# I_SLCQUESTIONNOTEOPTION

**Slcquestionnoteoption**

| Property | Value |
|---|---|
| App Component | `SLC-SUP` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `IsQuestionCommentEnabled` | ✓ | |  | `cast( substring( domvalue_l, 1, 1 ) as /srmsmc/qst_notes)` |  |  |
| `_SLCQuestionNoteOptionText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SLCQuestionNoteOptionText` | `I_SLCQuestionNoteOptionText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Question Note Option' //same as DDL description
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AbapCatalog.compiler.compareFilter: true
@ObjectModel.usageType.dataClass:  #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ClientHandling.algorithm: #SESSION_VARIABLE 
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'IsQuestionCommentEnabled'
@AbapCatalog.sqlViewName: 'ISLCQSTNOTEOPT'
@Metadata.ignorePropagatedAnnotations: true
define view I_SLCQuestionNoteOption as select from dd07l
  association [0..*] to I_SLCQuestionNoteOptionText as _SLCQuestionNoteOptionText  on $projection.IsQuestionCommentEnabled = _SLCQuestionNoteOptionText.IsQuestionCommentEnabled
{
  @ObjectModel.text.association: '_SLCQuestionNoteOptionText'
  key  cast( substring(  domvalue_l, 1, 1 ) as /srmsmc/qst_notes) as IsQuestionCommentEnabled,
  _SLCQuestionNoteOptionText
}
where domname  = '/SRMSMC/QST_NOTE_OPT' 
  and as4local = 'A'
```
