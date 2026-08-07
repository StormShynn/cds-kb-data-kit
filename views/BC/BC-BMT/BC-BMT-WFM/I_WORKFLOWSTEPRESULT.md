---
name: I_WORKFLOWSTEPRESULT
description: Workflowstepresult
app_component: BC-BMT-WFM
software_component: SAP_BASIS
release_state: released
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
# I_WORKFLOWSTEPRESULT

**Workflowstepresult**

| Property | Value |
|---|---|
| App Component | `BC-BMT-WFM` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkflowScenarioDefinition` | ✓ | |  |  |  |  |
| `WorkflowScenarioDefinitionVers` | ✓ | |  |  |  |  |
| `WorkflowStepType` | ✓ | |  |  |  |  |
| `WorkflowStepResult` | ✓ | |  |  |  |  |
| `WorkflowStepResultNature` |  | |  |  |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_WorkflowStepResultText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IWRKFLWRSLT'
@EndUserText.label: 'Workflow Step Result'
@VDM.viewType: #COMPOSITE
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.usageType : {
  dataClass: #META,
  serviceQuality: #C,
  sizeCategory: #M
}
@ObjectModel.representativeKey: 'WorkflowStepResult'
@Analytics: { dataCategory: #DIMENSION }
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
define view I_WorkflowStepResult
  as select from I_WorkflowStepTypeNode as WorkflowStepTypeNode

  association [0..*] to I_WorkflowStepResultText as _Text on  $projection.WorkflowScenarioDefinition     = _Text.WorkflowScenarioDefinition
                                                          and $projection.WorkflowScenarioDefinitionVers = _Text.WorkflowScenarioDefinitionVers
                                                          and $projection.WorkflowStepType               = _Text.WorkflowStepType
                                                          and $projection.WorkflowStepResult             = _Text.WorkflowStepResult
{
  key WorkflowStepTypeNode.WorkflowScenarioDefinition     as WorkflowScenarioDefinition,
  key WorkflowStepTypeNode.WorkflowScenarioDefinitionVers as WorkflowScenarioDefinitionVers,
  key WorkflowStepTypeNode.WorkflowStepType               as WorkflowStepType,
      @ObjectModel.text.association: '_Text'
  key WorkflowStepTypeNode.WorkflowStepResult             as WorkflowStepResult,
      WorkflowStepTypeNode.WorkflowStepResultNature       as WorkflowStepResultNature,
      _Text
}
where
  WorkflowStepResult <> ''
```
