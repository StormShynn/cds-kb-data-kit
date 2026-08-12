---
name: I_SUPLRSCCRDROOTQNAIREAPI01
description: "Suplrsccrdrootqnaireapi 01"
app_component: SLC-EVL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
# I_SUPLRSCCRDROOTQNAIREAPI01

**Suplrsccrdrootqnaireapi 01**

| Property | Value |
|---|---|
| App Component | `SLC-EVL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SuplrEvalScorecardQnaireUUID` | ✓ | |  |  |  |  |
| `SuplrEvalScorecardUUID` |  | |  |  |  |  |
| `MinimalScore` |  | |  |  |  |  |
| `TargetScore` |  | |  |  |  |  |
| `CalculatedScore` |  | |  |  |  |  |
| `NumberOfResponses` |  | |  |  |  |  |
| `WeightingFactor` |  | |  |  |  |  |
| `SuplrEvalOrdinalNumber` |  | |  |  |  |  |

## Source Code

```abap
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'ISESCQNRRTAPI01'
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Root Qnaire for Suplr Eval Scorecard'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.representativeKey: 'SuplrEvalScorecardQnaireUUID'
@ObjectModel.usageType.dataClass:  #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #M
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
define view I_SuplrSccrdRootQnaireAPI01
  as select from I_SuplrEvalScorecardRootQnaire
{
  key SuplrEvalScorecardQnaireUUID,
      SuplrEvalScorecardUUID,
      MinimalScore,
      TargetScore,
      CalculatedScore,
      NumberOfResponses,
      WeightingFactor,
      SuplrEvalOrdinalNumber
}
```
