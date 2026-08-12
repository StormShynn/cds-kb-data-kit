---
name: I_CNSLDTNQUESTIONT
description: "Cnsldtnquestiont"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_CNSLDTNQUESTIONT

**Cnsldtnquestiont**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `langu` |  |  |
| `ConsolidationQuestion` | ✓ | |  | `question` |  |  |
| `ConsolidationQuestionText` |  | |  | `text` |  |  |
| `_Language` | | ✓ | | | | |
| `_Question` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |
| `_Question` | `I_CnsldtnQuestion` | [1..1] |

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
    representativeKey: 'ConsolidationQuestion',
    modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
    supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                            #SQL_DATA_SOURCE,
                            #EXTRACTION_DATA_SOURCE,
                            #CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET ],
    sapObjectNodeType.name: 'ConsolidationQuestionText'
}
@VDM.viewType: #BASIC
@EndUserText.label: 'Consolidation Question - Text'


define view entity I_CnsldtnQuestionT
  as select from fincs_qstnt

  association [1..1] to I_Language        as _Language on $projection.Language = _Language.Language
  association [1..1] to I_CnsldtnQuestion as _Question on $projection.ConsolidationQuestion = _Question.ConsolidationQuestion

{

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key langu    as Language,

      @ObjectModel.foreignKey.association: '_Question'
  key question as ConsolidationQuestion,

      @Semantics.text
      text     as ConsolidationQuestionText,

      _Question,
      _Language

};
```
