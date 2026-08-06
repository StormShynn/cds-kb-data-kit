---
name: I_SLCPREFERREDANSWERTEXT
description: Slcpreferredanswertext
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
  - component:SLC-SUP
  - lob:Other
---
# I_SLCPREFERREDANSWERTEXT

**Slcpreferredanswertext**

| Property | Value |
|---|---|
| App Component | `SLC-SUP` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SLCPreferredAnswer` | `cast( substring( domvalue_l, 1, 1 ) as /srmsmc/qlb_pref_answer)` |
| key `Language` | `ddlanguage` |
| `SLCQuestionTypeName` | `cast(ddtext as /srmsmc/type_descr preserving type)` |
| `_Language` | *Association* |
| `_SLCPreferredAnswer` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_SLCPreferredAnswer` | `I_SLCPreferredAnswer` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Preferred Answer - Text'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.compiler.compareFilter: true
@ObjectModel.usageType.dataClass:  #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ClientHandling.algorithm: #SESSION_VARIABLE 
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'SLCPreferredAnswer'
@AbapCatalog.sqlViewName: 'ISLCPREFANSWERT'
define view I_SLCPreferredAnswerText  as select from dd07t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
  association [1..1] to I_SLCPreferredAnswer as _SLCPreferredAnswer on $projection.SLCPreferredAnswer = _SLCPreferredAnswer.SLCPreferredAnswer 
{
  key  cast( substring( domvalue_l, 1, 1 ) as /srmsmc/qlb_pref_answer)  as SLCPreferredAnswer, 

  @Semantics.language: true
  key ddlanguage as Language,

  @Semantics.text: true
  cast(ddtext as /srmsmc/type_descr preserving type) as SLCQuestionTypeName,
    
  _Language,
  _SLCPreferredAnswer 
    
}
where domname  = '/SRMSMC/QLB_PREF_ANSWER' 
  and as4local = 'A'
```
