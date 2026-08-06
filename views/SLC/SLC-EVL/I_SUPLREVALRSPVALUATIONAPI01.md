---
name: I_SUPLREVALRSPVALUATIONAPI01
description: Suplrevalrspvaluationapi 01
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
# I_SUPLREVALRSPVALUATIONAPI01

**Suplrevalrspvaluationapi 01**

| Property | Value |
|---|---|
| App Component | `SLC-EVL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SuplrEvalRspValuationUUID` | `SuplrEvalRspValuationUUID` |
| `SuplrEvalRspUUID` | `SuplrEvalRspUUID` |
| `SuplrEvalRspQuestionUUID` | `SuplrEvalRspQuestionUUID` |
| `SuplrEvalReqQuestionValueUUID` | `SuplrEvalReqQuestionValueUUID` |
| `IsQuestionAnswerYes` | `IsQuestionAnswerYes` |
| `AnswerScore` | `AnswerScore` |
| `AnswerText` | `AnswerText` |
| `SupplierEvalResponseValuation` | `SupplierEvalResponseValuation` |

## Source Code

```abap
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'ISERSPVALAPI01'
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Valuation of Supplier Eval Response'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.dataClass:  #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
define view I_SuplrEvalRspValuationAPI01
  as select from I_SupplierEvalRspValuation
{
  key SuplrEvalRspValuationUUID,
      SuplrEvalRspUUID,
      SuplrEvalRspQuestionUUID,
      SuplrEvalReqQuestionValueUUID,
      IsQuestionAnswerYes,
      AnswerScore,
      AnswerText,
      SupplierEvalResponseValuation
}
```
