---
name: I_SUPLREVALRSPQUESTIONAPI01
description: "Suplrevalrspquestionapi 01"
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
# I_SUPLREVALRSPQUESTIONAPI01

**Suplrevalrspquestionapi 01**

| Property | Value |
|---|---|
| App Component | `SLC-EVL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SuplrEvalRspQuestionUUID` | ✓ | |  |  |  |  |
| `SuplrEvalRspUUID` |  | |  |  |  |  |
| `SuplrEvalRspSectionUUID` |  | |  |  |  |  |
| `SuplrEvalRspBrnchgQuestionUUID` |  | |  |  |  |  |
| `SuplrEvalRspBrnchgQstnValnUUID` |  | |  |  |  |  |
| `SuplrEvalRspBrnchgQuestionValn` |  | |  |  |  |  |
| `SuplrEvalRspBrnchgQuestion` |  | |  |  |  |  |
| `SuplrEvalReqQuestionUUID` |  | |  |  |  |  |
| `SupplierEvalQuestion` |  | |  |  |  |  |
| `SupplierEvalRequestQuestion` |  | |  |  |  |  |
| `QuestionName` |  | |  |  |  |  |
| `SLCQuestionType` |  | |  |  |  |  |
| `WeightingFactor` |  | |  |  |  |  |
| `MinimalScore` |  | |  |  |  |  |
| `TargetScore` |  | |  |  |  |  |
| `SLCQuestionAttachmentOption` |  | |  |  |  |  |
| `IsDisqualifyingQuestion` |  | |  |  |  |  |
| `SLCPreferredAnswer` |  | |  |  |  |  |
| `NumberOfResponses` |  | |  |  |  |  |
| `IsQuestionCommentEnabled` |  | |  |  |  |  |
| `SuplrEvalOrdinalNumber` |  | |  |  |  |  |
| `IsMandatoryQuestion` |  | |  |  |  |  |

## Source Code

```abap
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'ISERESPQSTAPI01'
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Question for Supplier Eval Response'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.semanticKey: ['SupplierEvalRequestQuestion']
@ObjectModel.representativeKey: 'SuplrEvalRspQuestionUUID'
@ObjectModel.usageType.dataClass:  #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
define view I_SuplrEvalRspQuestionAPI01
  as select from I_SupplierEvalResponseQuestion
{
  key SuplrEvalRspQuestionUUID,
      SuplrEvalRspUUID,
      SuplrEvalRspSectionUUID,
      SuplrEvalRspBrnchgQuestionUUID,
      SuplrEvalRspBrnchgQstnValnUUID,
      SuplrEvalRspBrnchgQuestionValn,
      SuplrEvalRspBrnchgQuestion,
      SuplrEvalReqQuestionUUID,
      SupplierEvalQuestion,
      SupplierEvalRequestQuestion,
      QuestionName,
      SLCQuestionType,
      WeightingFactor,
      MinimalScore,
      TargetScore,
      SLCQuestionAttachmentOption,
      IsDisqualifyingQuestion,
      SLCPreferredAnswer,
      NumberOfResponses,
      IsQuestionCommentEnabled,
      SuplrEvalOrdinalNumber,
      IsMandatoryQuestion
}
```
