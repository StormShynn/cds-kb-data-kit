---
name: I_SUPLREVALSCCRDSECTIONAPI01
description: "Suplrevalsccrdsectionapi 01"
app_component: SLC-EVL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_SUPLREVALSCCRDSECTIONAPI01

**Suplrevalsccrdsectionapi 01**

| Property | Value |
|---|---|
| App Component | `SLC-EVL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SuplrEvalSccrdSectionUUID` | ✓ | |  |  |  |  |
| `SuplrEvalSccrdUUID` |  | |  |  |  |  |
| `SuplrEvalRspQuestionnaireUUID` |  | |  |  |  |  |
| `SupplierEvalScorecardSection` |  | |  |  |  |  |
| `SupplierEvalScorecardSctnAltv` |  | |  |  |  |  |
| `QuestionnaireSectionName` |  | |  |  |  |  |
| `WeightingFactor` |  | |  |  |  |  |
| `MinimalScore` |  | |  |  |  |  |
| `TargetScore` |  | |  |  |  |  |
| `CalculatedScore` |  | |  |  |  |  |
| `NumberOfResponses` |  | |  |  |  |  |
| `SuplrEvalReqSectionUUID` |  | |  |  |  |  |

## Source Code

```abap
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'ISESCCRDSECAPI01'
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Section of Supplier Evaluation Scorecard'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.representativeKey: 'SuplrEvalSccrdSectionUUID'
@ObjectModel.semanticKey:  [ 'SupplierEvalScorecardSection' ]
@ObjectModel.usageType.dataClass:  #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #M
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
define view I_SuplrEvalSccrdSectionAPI01
  as select from I_SuplrEvalSccrdSection
{
  key SuplrEvalSccrdSectionUUID,
      SuplrEvalSccrdUUID,
      SuplrEvalRspQuestionnaireUUID,
      SupplierEvalScorecardSection,
      SupplierEvalScorecardSctnAltv,
      QuestionnaireSectionName,
      WeightingFactor,
      MinimalScore,
      TargetScore,
      CalculatedScore,
      NumberOfResponses,
      SuplrEvalReqSectionUUID
}
```
