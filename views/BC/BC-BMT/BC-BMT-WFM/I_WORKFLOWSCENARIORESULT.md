---
name: I_WORKFLOWSCENARIORESULT
description: Workflowscenarioresult
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
# I_WORKFLOWSCENARIORESULT

**Workflowscenarioresult**

| Property | Value |
|---|---|
| App Component | `BC-BMT-WFM` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `WorkflowScenarioDefinition` | `WorkflowResult.wfd_id` |
| key `WorkflowScenarioDefinitionVers` | `WorkflowResult.version` |
| key `WorkflowScenarioResult` | `WorkflowResult.normiert` |
| `WorkflowScenarioResultNature` | `WorkflowResult.nature` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_WorkflowScenarioResultText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IWRKFLWSCENRES'
@EndUserText.label: 'Workflow Scenario Result'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType : {
  dataClass: #META,
  sizeCategory: #M,
  serviceQuality: #B
}
@ObjectModel.representativeKey: 'WorkflowScenarioResult'
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_WorkflowScenarioResult
  as select from swd_flxout as WorkflowResult

  association [0..*] to I_WorkflowScenarioResultText as _Text on  $projection.WorkflowScenarioDefinition     = _Text.WorkflowScenarioDefinition
                                                              and $projection.WorkflowScenarioDefinitionVers = _Text.WorkflowScenarioDefinitionVers
                                                              and $projection.WorkflowScenarioResult         = _Text.WorkflowScenarioResult
{
  key WorkflowResult.wfd_id   as WorkflowScenarioDefinition,
  key WorkflowResult.version  as WorkflowScenarioDefinitionVers,
      @ObjectModel.text.association: '_Text'
  key WorkflowResult.normiert as WorkflowScenarioResult,
      WorkflowResult.nature   as WorkflowScenarioResultNature,
      _Text
}
where
      exetyp   =  'E'
  and nodeid   =  '0000000001'
  and normiert <> ' '
```
