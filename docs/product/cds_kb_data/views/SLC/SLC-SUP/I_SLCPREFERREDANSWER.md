---
name: I_SLCPREFERREDANSWER
description: "Slcpreferredanswer"
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
  - component:SLC-SUP
  - lob:Other
---
# I_SLCPREFERREDANSWER

**Slcpreferredanswer**

| Property | Value |
|---|---|
| App Component | `SLC-SUP` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SLCPreferredAnswer` | ✓ | |  | `cast( substring( domvalue_l, 1, 1 ) as /srmsmc/qlb_pref_answer)` |  |  |
| `_SLCPreferredAnswerText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SLCPreferredAnswerText` | `I_SLCPreferredAnswerText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Preferred Answer'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.dataClass:  #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ClientHandling.algorithm: #SESSION_VARIABLE 
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'SLCPreferredAnswer'
@AbapCatalog.sqlViewName: 'ISLCPREFANSWER'
define view I_SLCPreferredAnswer  as select from dd07l
   association [0..*] to I_SLCPreferredAnswerText as _SLCPreferredAnswerText on $projection.SLCPreferredAnswer = _SLCPreferredAnswerText.SLCPreferredAnswer 
{
  @ObjectModel.text.association: '_SLCPreferredAnswerText'
  key  cast( substring( domvalue_l, 1, 1 ) as /srmsmc/qlb_pref_answer)  as SLCPreferredAnswer, 
  _SLCPreferredAnswerText
}
where domname  = '/SRMSMC/QLB_PREF_ANSWER' 
  and as4local = 'A'
```
