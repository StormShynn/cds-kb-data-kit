---
name: I_WORKFLOWSTEPTYPE
description: "Workflowsteptype"
app_component: BC-BMT-WFM
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-BMT
  - BC-BMT-WFM
  - interface-view
  - workflow
  - component:BC-BMT-WFM
  - lob:Basis Components
---
# I_WORKFLOWSTEPTYPE

**Workflowsteptype**

| Property | Value |
|---|---|
| App Component | `BC-BMT-WFM` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkflowStepType` | ✓ | |  |  | `CHAR(40)` | Workflow : Label |
| `WrkflwScen` | ✓ | |  |  | `CHAR(10)` | Number of workflow definition |
| `WrkflwScenVers` | ✓ | |  |  | `CHAR(4)` | Version |
| `WorkflowStepIsSystemTask` |  | |  |  | `CHAR(3)` |  |
| `WorkflowStepTypeClassfctn` |  | |  |  | `CHAR(10)` | Workflow: Step Classification |
| `_WorkflowTaskStepTypeText` | | ✓ | | | | |
| `_WorkflowTaskStepResult` | | ✓ | | | | |
| `_WorkflowStepTypeClassfctn` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IWRKFLWSTPTP'
@AbapCatalog.compiler.compareFilter: true
@VDM.viewType: #COMPOSITE
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #MASTER
@EndUserText.label: 'Workflow Step Type'
@ObjectModel.representativeKey: 'WorkflowStepType'
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
define view I_WorkflowStepType
  as select from I_WorkflowReuseStep
{
      @ObjectModel.text.association: '_WorkflowTaskStepTypeText'
  key WorkflowStepType,
  key WrkflwScen,
  key WrkflwScenVers,
      WorkflowStepIsSystemTask,
      WorkflowStepTypeClassfctn,
      _WorkflowTaskStepTypeText,
      _WorkflowTaskStepResult,
      _WorkflowStepTypeClassfctn
}
```
