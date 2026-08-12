---
name: I_WORKFLOWSTEPRESULTTEXT
description: "Workflowstepresulttext"
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
  - text-view
  - text
  - workflow
  - component:BC-BMT-WFM
  - lob:Basis Components
---
# I_WORKFLOWSTEPRESULTTEXT

**Workflowstepresulttext**

| Property | Value |
|---|---|
| App Component | `BC-BMT-WFM` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkflowScenarioDefinition` | ✓ | |  |  | `CHAR(10)` | Number of workflow definition |
| `WorkflowScenarioDefinitionVers` | ✓ | |  |  | `CHAR(4)` | Version |
| `WorkflowStepType` | ✓ | |  |  | `CHAR(40)` | Workflow : Label |
| `WorkflowStepResult` | ✓ | |  |  | `CHAR(60)` | Outcome |
| `Language` | ✓ | |  |  | `LANG(1)` | Workflow definition: Language key |
| `WorkflowStepResultText` |  | |  | `WorkflowStepText` | `CHAR(80)` | Language-dependent text of a workflow definition |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IWRKFLWRSLTTXT'
@EndUserText.label: 'Workflow Step Result Text'
@VDM.viewType: #COMPOSITE
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.usageType : {
  dataClass: #META,
  serviceQuality: #C,
  sizeCategory: #M
}
@Analytics: { dataCategory: #DIMENSION }
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'WorkflowStepResult'
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
define view I_WorkflowStepResultText
  as select from I_WorkflowStepText     as WorfklowStepText
    inner join   I_WorkflowStepTypeNode as WorkflowStepTypeNode on  WorfklowStepText.WorkflowScenarioDefinition     = WorkflowStepTypeNode.WorkflowScenarioDefinition
                                                                and WorfklowStepText.WorkflowScenarioDefinitionVers = WorkflowStepTypeNode.WorkflowScenarioDefinitionVers
                                                                and WorfklowStepText.WorkflowStepNode               = WorkflowStepTypeNode.WorkflowStepRefNode
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key WorkflowStepTypeNode.WorkflowScenarioDefinition,
  key WorkflowStepTypeNode.WorkflowScenarioDefinitionVers,
  key WorkflowStepTypeNode.WorkflowStepType                 as WorkflowStepType,
  key WorkflowStepTypeNode.WorkflowStepResult               as WorkflowStepResult,
      @Semantics:   { language: true }
      @ObjectModel: { foreignKey.association: '_Language' }
  key WorfklowStepText.Language,
      @Semantics:   { text: true }
      _Language,
      WorfklowStepText.WorkflowStepText                     as WorkflowStepResultText
}
where
  WorkflowStepTypeNode.WorkflowStepResult <> ''
```
