---
name: I_SUPLREVALRSPQNAIREAPI01
description: Suplrevalrspqnaireapi 01
app_component: SLC-EVL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SLC
  - SLC-EVL
  - interface-view
  - component:SLC-EVL
  - lob:Other
---
# I_SUPLREVALRSPQNAIREAPI01

**Suplrevalrspqnaireapi 01**

| Property | Value |
|---|---|
| App Component | `SLC-EVL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SuplrEvalRspQuestionnaireUUID` | `SuplrEvalRspQuestionnaireUUID` |
| `SuplrEvalRspUUID` | `SuplrEvalRspUUID` |
| `SuplrEvalReqQuestionnaireUUID` | `SuplrEvalReqQuestionnaireUUID` |
| `QuestionnaireName` | `QuestionnaireName` |
| `SuplrEvalRspRootQnaireUUID` | `SuplrEvalRspRootQnaireUUID` |
| `IsScoringRelevant` | `IsScoringRelevant` |
| `MinimalScore` | `MinimalScore` |
| `TargetScore` | `TargetScore` |
| `CalculatedScore` | `CalculatedScore` |
| `NumberOfResponses` | `NumberOfResponses` |
| `WeightingFactor` | `WeightingFactor` |
| `SuplrEvalOrdinalNumber` | `SuplrEvalOrdinalNumber` |

## Source Code

```abap
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'ISERESPQNRAPI01'
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Questionnaire for Suplr Eval Response'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.representativeKey: 'SuplrEvalRspQuestionnaireUUID'
@ObjectModel.usageType.dataClass:  #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
define view I_SuplrEvalRspQnaireAPI01
  as select from I_SupplierEvalResponseQnaire
{
  key SuplrEvalRspQuestionnaireUUID,
      SuplrEvalRspUUID,
      SuplrEvalReqQuestionnaireUUID,
      QuestionnaireName,
      SuplrEvalRspRootQnaireUUID,
      IsScoringRelevant,
      MinimalScore,
      TargetScore,
      CalculatedScore,
      NumberOfResponses,
      WeightingFactor,
      SuplrEvalOrdinalNumber
}
```
