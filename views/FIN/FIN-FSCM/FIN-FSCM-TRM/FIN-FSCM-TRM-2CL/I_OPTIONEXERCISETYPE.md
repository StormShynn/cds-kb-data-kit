---
name: I_OPTIONEXERCISETYPE
description: Optionexercisetype
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
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_OPTIONEXERCISETYPE

**Optionexercisetype**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `OptionExerciseType` | `cast(DomainValue.domvalue_l as soptaus)` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_OptionExerciseTypeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IOPTNEXERTYPE'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Option exercise type'
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel:{
    usageType : {
        sizeCategory: #S,
        serviceQuality: #X,
        dataClass: #CUSTOMIZING
    },
    resultSet.sizeCategory: #XS,
    representativeKey:'OptionExerciseType',
    dataCategory: #VALUE_HELP,
    modelingPattern: #ANALYTICAL_DIMENSION,
    supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
}
@Analytics : {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction: {
    enabled: true
  }
}
@Metadata.ignorePropagatedAnnotations: true // For C1-Release 
@ObjectModel.sapObjectNodeType.name: 'FinTransOptionExerciseType'

define view I_OptionExerciseType 
  as select from dd07l as DomainValue
  association [0..*] to I_OptionExerciseTypeText as _Text on $projection.OptionExerciseType = _Text.OptionExerciseType
{
      @ObjectModel.text.association: '_Text'
  key cast(DomainValue.domvalue_l as soptaus)   as OptionExerciseType,
  
      _Text  
}
where 
        DomainValue.domname   = 'SOPTAUS'
    and DomainValue.as4local  = 'A'
```
