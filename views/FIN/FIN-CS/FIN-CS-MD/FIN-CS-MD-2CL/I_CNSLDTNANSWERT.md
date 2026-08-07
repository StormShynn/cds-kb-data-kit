---
name: I_CNSLDTNANSWERT
description: Cnsldtnanswert
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
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
# I_CNSLDTNANSWERT

**Cnsldtnanswert**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Language` | ✓ | |  | `langu` |
| `ConsolidationAnswer` | ✓ | |  | `answer` |
| `ConsolidationAnswerText` |  | |  | `text` |
| `_Answer` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Answer` | `I_CnsldtnAnswer` | [1..1] |
| `_Language` | `I_Language` | [1..1] |

## Source Code

```abap
@Analytics: {
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
    dataCategory: #TEXT,
    representativeKey: 'ConsolidationAnswer',
    modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
    supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                            #SQL_DATA_SOURCE,
                            #EXTRACTION_DATA_SOURCE,
                            #CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET ],
    sapObjectNodeType.name: 'ConsolidationAnswerText'
}
@VDM.viewType: #BASIC
@EndUserText.label: 'Consolidation Answer - Text'

define view entity I_CnsldtnAnswerT
  as select from fincs_answt

  association [1..1] to I_CnsldtnAnswer as _Answer   on $projection.ConsolidationAnswer = _Answer.ConsolidationAnswer
  association [1..1] to I_Language      as _Language on $projection.Language = _Language.Language

{
      @Semantics.language: true
  key langu  as Language,

      @ObjectModel.foreignKey.association: '_Answer'
  key answer as ConsolidationAnswer,

      @Semantics.text
      text   as ConsolidationAnswerText,

      _Answer,

      _Language
};
```
