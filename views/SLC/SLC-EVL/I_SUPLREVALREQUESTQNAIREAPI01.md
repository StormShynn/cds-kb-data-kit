---
name: I_SUPLREVALREQUESTQNAIREAPI01
description: Suplrevalrequestqnaireapi 01
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
# I_SUPLREVALREQUESTQNAIREAPI01

**Suplrevalrequestqnaireapi 01**

| Property | Value |
|---|---|
| App Component | `SLC-EVL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SuplrEvalReqQuestionnaireUUID` | `SuplrEvalReqQuestionnaireUUID` |
| `SuplrEvalReqUUID` | `SuplrEvalReqUUID` |
| `SuplrEvalOrdinalNumber` | `SuplrEvalOrdinalNumber` |
| `QuestionnaireName` | `QuestionnaireName` |
| `IsScoringRelevant` | `IsScoringRelevant` |
| `WeightingFactor` | `WeightingFactor` |
| `MinimalScore` | `MinimalScore` |
| `TargetScore` | `TargetScore` |
| `CalculatedScore` | `CalculatedScore` |
| `NumberOfResponses` | `NumberOfResponses` |

## Source Code

```abap
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Questionnaire for Supplier Eval Request'
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.usageType.dataClass:  #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'SuplrEvalReqQuestionnaireUUID'
@AbapCatalog.sqlViewName: 'ISEVREQQNRAPI01'
define view I_SuplrEvalRequestQnaireAPI01
  as select from I_SupplierEvalRequestQnaire
{
  key SuplrEvalReqQuestionnaireUUID,
      SuplrEvalReqUUID,
      SuplrEvalOrdinalNumber,
      QuestionnaireName,
      IsScoringRelevant,
      WeightingFactor,
      MinimalScore,
      TargetScore,
      CalculatedScore,
      NumberOfResponses
}
```
