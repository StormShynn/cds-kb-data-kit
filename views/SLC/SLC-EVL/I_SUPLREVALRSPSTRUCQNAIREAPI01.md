---
name: I_SUPLREVALRSPSTRUCQNAIREAPI01
description: Suplrevalrspstrucqnaireapi 01
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
# I_SUPLREVALRSPSTRUCQNAIREAPI01

**Suplrevalrspstrucqnaireapi 01**

| Property | Value |
|---|---|
| App Component | `SLC-EVL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `SuplrEvalRspQuestionnaireUUID` | ✓ | |  |  |
| `SuplrEvalReqQuestionnaireUUID` |  | |  |  |
| `SuplrEvalRspRootQnaireUUID` |  | |  |  |
| `SuplrEvalRspUUID` |  | |  |  |
| `QuestionnaireName` |  | |  |  |
| `NumberOfResponses` |  | |  |  |
| `SuplrEvalOrdinalNumber` |  | |  |  |
| `IsScoringRelevant` |  | |  |  |
| `CalculatedScore` |  | |  |  |
| `TargetScore` |  | |  |  |
| `MinimalScore` |  | |  |  |
| `WeightingFactor` |  | |  |  |

## Source Code

```abap
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'IERESPQNRSTAPI01'
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Structure Qnaire for Suplr Eval Response'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.dataClass:  #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.representativeKey: 'SuplrEvalRspQuestionnaireUUID'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
define view I_SuplrEvalRspStrucQnaireAPI01
  as select from I_SuplrEvalRspStrucQnaire
{
  key  SuplrEvalRspQuestionnaireUUID,
       SuplrEvalReqQuestionnaireUUID,
       SuplrEvalRspRootQnaireUUID,
       SuplrEvalRspUUID,

       QuestionnaireName,
       NumberOfResponses,

       SuplrEvalOrdinalNumber,
       IsScoringRelevant,
       CalculatedScore,
       TargetScore,
       MinimalScore,
       WeightingFactor
}
```
