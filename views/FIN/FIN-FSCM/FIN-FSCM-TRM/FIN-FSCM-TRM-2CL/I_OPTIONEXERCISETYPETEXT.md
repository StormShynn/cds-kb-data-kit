---
name: I_OPTIONEXERCISETYPETEXT
description: Optionexercisetypetext
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - interface-view
  - text-view
  - text
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_OPTIONEXERCISETYPETEXT

**Optionexercisetypetext**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `OptionExerciseType` | ✓ | |  | `cast(DomainText.domvalue_l as soptaus)` |
| `Language` | ✓ | |  | `ddlanguage` |
| `OptionExerciseTypeName` |  | |  | `cast(DomainText.ddtext as option_exercise_type_name preserving type )` |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IOPTNEXERTYPET'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Option exercise type - Text'
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@ObjectModel:{
    dataCategory: #TEXT,
    usageType : {
        sizeCategory: #S,
        serviceQuality: #X,
        dataClass: #MIXED
    },
    modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
    representativeKey:'OptionExerciseType',
    supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]  
}
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations: true // For C1-Release 
@ObjectModel.sapObjectNodeType.name: 'FinTransOptionExerciseTypeText'

define view I_OptionExerciseTypeText
  as select from dd07t as DomainText
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @ObjectModel.text.element:'OptionExerciseTypeName'
  key cast(DomainText.domvalue_l as soptaus)                                as OptionExerciseType,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key DomainText.ddlanguage                                                 as Language,

      @Semantics.text: true
      cast(DomainText.ddtext as option_exercise_type_name preserving type ) as OptionExerciseTypeName,

      _Language
}
where
      DomainText.domname  = 'SOPTAUS'
  and DomainText.as4local = 'A'
```
