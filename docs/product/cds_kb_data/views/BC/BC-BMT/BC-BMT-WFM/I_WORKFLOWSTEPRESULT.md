---
name: I_WORKFLOWSTEPRESULT
description: "Workflowstepresult"
app_component: BC-BMT-WFM
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkflowScenarioDefinition` | ✓ | |  |  | `CHAR(10)` | Number of workflow definition |
| `WorkflowScenarioDefinitionVers` | ✓ | |  |  | `CHAR(4)` | Version |
| `WorkflowStepType` | ✓ | |  |  | `CHAR(40)` | Workflow : Label |
| `WorkflowStepResult` | ✓ | |  |  | `CHAR(60)` | Outcome |
| `WorkflowStepResultNature` |  | |  |  | `CHAR(20)` | Workflow: Property: Positive, Negative.... |
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
