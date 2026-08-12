---
name: I_SLCQUESTIONTYPE
description: "Slcquestiontype"
app_component: SLC-SUP
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SLC
  - SLC-SUP
  - interface-view
  - component:SLC-SUP
  - lob:Other
---
# I_SLCQUESTIONTYPE

**Slcquestiontype**

| Property | Value |
|---|---|
| App Component | `SLC-SUP` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SLCQuestionType` | ✓ | |  | `cast( substring( domvalue_l, 1, 2) as /srmsmc/qst_dtyp_format_code)` |  |  |
| `_SLCQuestionTypeText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SLCQuestionTypeText` | `I_SLCQuestionTypeText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Question Type' //same as DDL description
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.usageType.dataClass:  #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.representativeKey: 'SLCQuestionType'
@AbapCatalog.sqlViewName: 'ISLCQSTTYPE'
define view I_SLCQuestionType   as select from dd07l
   association [0..*] to I_SLCQuestionTypeText as _SLCQuestionTypeText on $projection.SLCQuestionType = _SLCQuestionTypeText.SLCQuestionType 
{
  @ObjectModel.text.association: '_SLCQuestionTypeText'
  key  cast( substring( domvalue_l, 1, 2) as /srmsmc/qst_dtyp_format_code)  as SLCQuestionType,

  _SLCQuestionTypeText

}
where domname  = '/SRMSMC/QST_DTYP_FORMAT_CODE' 
  and as4local = 'A'
```
