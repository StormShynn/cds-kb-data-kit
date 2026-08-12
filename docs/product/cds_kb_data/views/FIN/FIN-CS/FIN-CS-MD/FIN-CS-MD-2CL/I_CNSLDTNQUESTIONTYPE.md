---
name: I_CNSLDTNQUESTIONTYPE
description: "Cnsldtnquestiontype"
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
# I_CNSLDTNQUESTIONTYPE

**Cnsldtnquestiontype**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationQuestionType` | ✓ | |  | `cast(left(_Source.DomainValue, 1) as fincs_questiontype preserving type )` |  |  |
| `DomainValue` |  | | `_Source` | `DomainValue` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnQuestionTypeT` | [0..*] |

## Source Code

```abap
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
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
    resultSet.sizeCategory: #XS,
    representativeKey: 'ConsolidationQuestionType',
    modelingPattern: #ANALYTICAL_DIMENSION,
    supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #SQL_DATA_SOURCE,
                            #EXTRACTION_DATA_SOURCE,
                            #ANALYTICAL_DIMENSION ],
    sapObjectNodeType.name: 'ConsolidationQuestionType'
}
@Search.searchable: true
@VDM.viewType: #BASIC
@EndUserText.label: 'Consolidation Question Type'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_CnsldtnQuestionType
  as select from P_CnsldtnDomain(P_DomainName : 'FINCS_QUESTIONTYPE') as _Source

  association [0..*] to I_CnsldtnQuestionTypeT as _Text on $projection.ConsolidationQuestionType = _Text.ConsolidationQuestionType

{
      @ObjectModel.text.association: '_Text'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnQuestionTypeVH',
          element: 'ConsolidationQuestionType'
        }
      }]
  key cast(left(_Source.DomainValue, 1) as fincs_questiontype preserving type ) as ConsolidationQuestionType,

      @Consumption.hidden: true
      @Analytics.hidden: true
      @Search: {
        defaultSearchElement: true,
        ranking: #HIGH,
        fuzzinessThreshold: 0.8
      }
      _Source.DomainValue, // required for search


      /* associations */
      _Text
}
```
