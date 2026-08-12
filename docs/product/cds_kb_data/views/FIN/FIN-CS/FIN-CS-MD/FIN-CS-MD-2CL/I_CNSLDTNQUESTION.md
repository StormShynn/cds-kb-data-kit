---
name: I_CNSLDTNQUESTION
description: "Cnsldtnquestion"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-MD
  - interface-view
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNQUESTION

**Cnsldtnquestion**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationQuestion` | ✓ | | `_Source` | `question` |  |  |
| `ConsolidationQuestionType` |  | | `_Source` | `question_type` |  |  |
| `CnsldtnQstnAreMultiAnswAllowed` |  | | `_Source` | `are_multiple_answers_allowed` |  |  |
| `CnsldtnQstnMaxNrOfAllwdAnswers` |  | | `_Source` | `max_allowed_answers` |  |  |
| `CnsldtnQstnMinNrOfRqdAnswers` |  | | `_Source` | `min_required_answers` |  |  |
| `_AnswerAssignment` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_AnswerAssignment` | `I_CnsldtnQstnAnswerAssignment` | [0..*] |
| `_Text` | `I_CnsldtnQuestionT` | [0..*] |

## Source Code

```abap
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
}
@AccessControl.authorizationCheck: #MANDATORY
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
    usageType: {
        dataClass: #MASTER,
        serviceQuality: #A,
        sizeCategory: #M
    },
    representativeKey: 'ConsolidationQuestion',
    modelingPattern: #ANALYTICAL_DIMENSION,
    supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #SQL_DATA_SOURCE,
                            #EXTRACTION_DATA_SOURCE,
                            #ANALYTICAL_DIMENSION ],
    sapObjectNodeType.name: 'ConsolidationQuestion'
}

@Metadata.allowExtensions:true
@VDM.viewType: #BASIC
@EndUserText.label: 'Consolidation Question'

define view entity I_CnsldtnQuestion
  as select from fincs_qstn as _Source

  association [0..*] to I_CnsldtnQstnAnswerAssignment as _AnswerAssignment on $projection.ConsolidationQuestion = _AnswerAssignment.ConsolidationQuestion
  association [0..*] to I_CnsldtnQuestionT            as _Text             on $projection.ConsolidationQuestion = _Text.ConsolidationQuestion


{
      @ObjectModel.text.association: '_Text'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnQuestionVH',
          element: 'ConsolidationQuestion'
        }
      }]

  key _Source.question                     as ConsolidationQuestion,

      _Source.question_type                as ConsolidationQuestionType,

      _Source.are_multiple_answers_allowed as CnsldtnQstnAreMultiAnswAllowed,

      _Source.max_allowed_answers          as CnsldtnQstnMaxNrOfAllwdAnswers,

      _Source.min_required_answers         as CnsldtnQstnMinNrOfRqdAnswers,

      _Text,
      _AnswerAssignment

};
```
