---
name: I_CNSLDTNQUESTIONTYPET
description: "Cnsldtnquestiontypet"
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
# I_CNSLDTNQUESTIONTYPET

**Cnsldtnquestiontypet**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast(_Source.Language as spras preserving type )` |  |  |
| `ConsolidationQuestionType` | ✓ | |  | `cast(left(_Source.DomainValue, 1) as fincs_questiontype preserving type )` |  |  |
| `ConsolidationQuestionTypeText` |  | |  | `cast(_Source.DomainValueText as fincs_questiontypetext preserving type )` |  |  |
| `DomainValue` |  | | `_Source` | `DomainValue` |  |  |
| `_QuestionType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_QuestionType` | `I_CnsldtnQuestionType` | [1..1] |

## Source Code

```abap
@Analytics: {
  dataExtraction.enabled: true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
    usageType: {
        dataClass: #CUSTOMIZING,
        serviceQuality: #A,
        sizeCategory: #S
    },
    dataCategory: #TEXT,
    representativeKey: 'ConsolidationQuestionType',
    modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
    supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                            #SQL_DATA_SOURCE,
                            #EXTRACTION_DATA_SOURCE,
                            #CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET ],
    sapObjectNodeType.name: 'ConsolidationQuestionTypeText'
}
@Search.searchable: true
@VDM.viewType: #BASIC
@EndUserText.label: 'Consolidation Question Type - Text'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_CnsldtnQuestionTypeT
  as select from P_CnsldtnDomainText(P_DomainName : 'FINCS_QUESTIONTYPE') as _Source

  association [1..1] to I_CnsldtnQuestionType as _QuestionType on $projection.ConsolidationQuestionType = _QuestionType.ConsolidationQuestionType

{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast(_Source.Language as spras preserving type )                          as Language,

      @ObjectModel.foreignKey.association: '_QuestionType'
  key cast(left(_Source.DomainValue, 1) as fincs_questiontype preserving type ) as ConsolidationQuestionType,

      @Semantics.text
      @Search: {
        defaultSearchElement: true,
        ranking: #LOW,
        fuzzinessThreshold: 0.8
      }
      cast(_Source.DomainValueText as fincs_questiontypetext preserving type )  as ConsolidationQuestionTypeText,

      @Consumption.hidden: true
      @Analytics.hidden: true
      _Source.DomainValue,


      /* associations */
      _QuestionType,
      _Source._Language
}
```
