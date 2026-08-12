---
name: I_CNSLDTNQUESTION
description: "Cnsldtnquestion"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
