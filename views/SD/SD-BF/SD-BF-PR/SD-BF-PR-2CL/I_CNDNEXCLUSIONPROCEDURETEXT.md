---
name: I_CNDNEXCLUSIONPROCEDURETEXT
description: Cndnexclusionproceduretext
app_component: SD-BF-PR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BF
  - SD-BF-PR
  - interface-view
  - text-view
  - text
  - component:SD-BF-PR-2CL
  - lob:Sales & Distribution
---
# I_CNDNEXCLUSIONPROCEDURETEXT

**Cndnexclusionproceduretext**

| Property | Value |
|---|---|
| App Component | `SD-BF-PR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `cast( dd07t.ddlanguage as spras preserving type )` |
| key `ConditionExclusionProcedure` | `cast( dd07t.domvalue_l as kauvf )` |
| `CndnExclusionProcedureText` | `cast( dd07t.ddtext as ddtext preserving type )` |
| `_Language` | *Association* |
| `_ConditionExclusionProcedure` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICNDNEXCLNPROCT'
@AbapCatalog.compiler.compareFilter:true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@EndUserText.label: 'Condition Exclusion Procedure - Text'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.representativeKey: 'ConditionExclusionProcedure'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: 
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]

define view I_CndnExclusionProcedureText
  as select from dd07t 

    association to parent I_ConditionExclusionProcedure as _ConditionExclusionProcedure
    on $projection.ConditionExclusionProcedure = _ConditionExclusionProcedure.ConditionExclusionProcedure
    
     association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language:true
  key cast( dd07t.ddlanguage as spras preserving type ) as Language, 

  key cast( dd07t.domvalue_l as kauvf ) as ConditionExclusionProcedure,
      @Semantics.text: true
      cast( dd07t.ddtext as ddtext preserving type ) as CndnExclusionProcedureText,
      _ConditionExclusionProcedure,
      _Language
} 
where dd07t.domname  = 'KAUVF'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
