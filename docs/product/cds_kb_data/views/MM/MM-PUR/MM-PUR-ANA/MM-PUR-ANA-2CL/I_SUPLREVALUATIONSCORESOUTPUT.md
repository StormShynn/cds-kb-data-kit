---
name: I_SUPLREVALUATIONSCORESOUTPUT
description: "Suplrevaluationscoresoutput"
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-ANA
  - interface-view
  - component:MM-PUR-ANA-2CL
  - lob:Sourcing & Procurement
---
# I_SUPLREVALUATIONSCORESOUTPUT

**Suplrevaluationscoresoutput**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SuplrEvalScoresOutputUUID` | ✓ | |  | `guid` |  |  |
| `Supplier` |  | |  | `supplier_id` |  |  |
| `IdentifierOfScoreHistoryJobRun` |  | |  | `job_run_id` |  |  |
| `StartDate` |  | |  | `eval_start_date` |  |  |
| `EndDate` |  | |  | `eval_end_date` |  |  |
| `SuplrEvalScoreOutputActionType` |  | |  | `output_action_type` |  |  |
| `SuplrEvalScoreOutputStatus` |  | |  | `status` |  |  |
| `CreatedByUser` |  | |  | `created_by` |  |  |
| `SuplrEvalScoreOutpTriggerDate` |  | |  | `output_trigger_date` |  |  |
| `SuplrEvalScoreOutpCreationDate` |  | |  | `se_creation_date` |  |  |
| `_RunInfo` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_RunInfo` | `I_SupplierEvaluationRunInfo` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMMPURASUPSCROUT'
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #A 
@ObjectModel.usageType.sizeCategory: #L
@VDM.viewType: #BASIC
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@Metadata.ignorePropagatedAnnotations:true
@EndUserText.label: 'Supplier Evaluation Scores Output'
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
define view I_SuplrEvaluationScoresOutput
  as select from mmpur_ana_se_om as _SuplrScoresOutput
  association [0..1] to I_SupplierEvaluationRunInfo as _RunInfo on _RunInfo.IdentifierOfScoreHistoryJobRun = _SuplrScoresOutput.job_run_id
{
  key guid                as SuplrEvalScoresOutputUUID,
      supplier_id         as Supplier,
      job_run_id          as IdentifierOfScoreHistoryJobRun,
      @Consumption.filter : {selectionType:#SINGLE,multipleSelections: false}
      eval_start_date     as StartDate,
      @Consumption.filter : {selectionType:#SINGLE,multipleSelections: false}
      eval_end_date       as EndDate,
      output_action_type  as SuplrEvalScoreOutputActionType,
      status              as SuplrEvalScoreOutputStatus,
      created_by          as CreatedByUser,
      @Consumption.filter : {selectionType:#INTERVAL,multipleSelections: true}
      output_trigger_date as SuplrEvalScoreOutpTriggerDate,
      @Consumption.filter : {selectionType:#INTERVAL,multipleSelections: true}
      se_creation_date    as SuplrEvalScoreOutpCreationDate,

      // Associations
      _RunInfo
}
```
