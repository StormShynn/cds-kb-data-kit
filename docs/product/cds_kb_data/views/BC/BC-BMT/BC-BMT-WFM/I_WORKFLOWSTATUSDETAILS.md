---
name: I_WORKFLOWSTATUSDETAILS
description: "Workflowstatusdetails"
app_component: BC-BMT-WFM
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-BMT
  - BC-BMT-WFM
  - interface-view
  - status
  - workflow
  - component:BC-BMT-WFM
  - lob:Basis Components
---
# I_WORKFLOWSTATUSDETAILS

**Workflowstatusdetails**

| Property | Value |
|---|---|
| App Component | `BC-BMT-WFM` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkflowTaskInternalID` | ✓ | |  |  | `NUMC(12)` | Work item ID |
| `WorkflowInternalID` |  | |  | `TopLevelWorkflowTask` | `NUMC(12)` | Workflow: Unique ID of Top-Level Instance (6.1/get) |
| `WorkflowTaskExternalStatus` |  | |  | `WorkflowTaskStatus` | `CHAR(12)` | Processing Status of a Work Item |
| `WorkflowTaskDefinition` |  | |  |  | `CHAR(14)` | Task ID |
| `WorkflowTaskProcessor` |  | |  | `WorkflowTaskCurrentUser` | `CHAR(12)` | Actual Agent of Work Item |
| `WorkflowTaskProcessorRole` |  | |  |  | `CHAR(40)` | Workflow: Agent Rule Id |
| `WrkflwTskCreationUTCDateTime` |  | |  |  | `DEC(21)` | Workflow: Creation Time Stamp |
| `WrkflwTskCompletionUTCDateTime` |  | |  |  | `DEC(21)` | Workflow: Timestamp completion |
| `WorkflowTaskStepType` |  | |  |  | `CHAR(40)` | Workflow: Step Id |
| `WorkflowScenarioDefinition` |  | |  | `TopLevelWorkflowTaskDefinition` | `CHAR(14)` | Task Identifier of Top-Level Task |
| `WorkflowScenarioDefinitionVers` |  | |  | `WorkflowTaskDefinitionVersion` | `CHAR(4)` | Version |
| `WorkflowTaskResult` |  | |  |  | `CHAR(255)` | Workflow: Returncode flexible workflow |
| `_WorkflowTaskExternalStatus` | | ✓ | | | | |
| `_WorkflowTaskProcessor` | | ✓ | | | | |
| `_WorkflowTaskProcessor_2` | | ✓ | | | | |
| `_WorkflowTaskStepType` | | ✓ | | | | |
| `_WorkflowRecipients` | | ✓ | | | | |
| `_WorkflowRecipients_2` | | ✓ | | | | |
| `_WorkflowTaskStepResult` | | ✓ | | | | |
| `_WorkflowAgentRule` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_WorkflowTaskExternalStatus` | `I_WorkflowTaskExternalStatus` | [0..1] |
| `_WorkflowTaskProcessor` | `I_BusinessUser` | [0..1] |
| `_WorkflowTaskProcessor_2` | `I_BusinessUserBasic` | [0..1] |
| `_WorkflowTaskStepType` | `I_WorkflowStepType` | [0..1] |
| `_WorkflowRecipients` | `I_WorkflowRecipients` | [0..*] |
| `_WorkflowRecipients_2` | `I_WORKFLOWRECIPIENTS_V2` | [0..*] |
| `_WorkflowTaskStepResult` | `I_WorkflowStepResult` | [0..1] |
| `_WorkflowAgentRule` | `I_WorkflowAgentRule` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IWRKFLWSTTSDTLS'
@AbapCatalog.compiler.compareFilter: true
@VDM.viewType: #COMPOSITE
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MASTER
@EndUserText.label: 'Workflow Task'
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
/*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ]  } */
define view I_WorkflowStatusDetails
  as select from    I_WorkflowTask
    left outer join I_WorkflowTaskResult as WorkflowTaskResult on  I_WorkflowTask.TopLevelWorkflowTask   = WorkflowTaskResult.WorkflowInternalID
                                                               and I_WorkflowTask.WorkflowTaskInternalID = WorkflowTaskResult.WorkflowTaskInternalID

  association [0..1] to I_WorkflowTaskExternalStatus as _WorkflowTaskExternalStatus on  $projection.WorkflowTaskExternalStatus = _WorkflowTaskExternalStatus.WorkflowTaskExternalStatus

  association [0..1] to I_BusinessUser               as _WorkflowTaskProcessor      on  $projection.WorkflowTaskProcessor = _WorkflowTaskProcessor.UserID
  association [0..1] to I_BusinessUserBasic          as _WorkflowTaskProcessor_2    on  $projection.WorkflowTaskProcessor = _WorkflowTaskProcessor_2.UserID  
  
  association [0..1] to I_WorkflowStepType           as _WorkflowTaskStepType       on  $projection.WorkflowScenarioDefinition     = _WorkflowTaskStepType.WrkflwScen
                                                                                    and $projection.WorkflowScenarioDefinitionVers = _WorkflowTaskStepType.WrkflwScenVers
                                                                                    and $projection.WorkflowTaskStepType           = _WorkflowTaskStepType.WorkflowStepType
  association [0..*] to I_WorkflowRecipients         as _WorkflowRecipients         on  $projection.WorkflowInternalID             = _WorkflowRecipients.WorkflowInternalID
                                                                                    and $projection.WorkflowTaskInternalID         = _WorkflowRecipients.WorkflowTaskInternalID
  association [0..*] to I_WORKFLOWRECIPIENTS_V2       as _WorkflowRecipients_2      on  $projection.WorkflowInternalID             = _WorkflowRecipients_2.WorkflowInternalID
                                                                                    and $projection.WorkflowTaskInternalID         = _WorkflowRecipients_2.WorkflowTaskInternalID
  association [0..1] to I_WorkflowStepResult         as _WorkflowTaskStepResult     on  $projection.WorkflowScenarioDefinition     = _WorkflowTaskStepResult.WorkflowScenarioDefinition
                                                                                    and $projection.WorkflowScenarioDefinitionVers = _WorkflowTaskStepResult.WorkflowScenarioDefinitionVers
                                                                                    and $projection.WorkflowTaskStepType           = _WorkflowTaskStepResult.WorkflowStepType
                                                                                    and $projection.WorkflowTaskResult             = _WorkflowTaskStepResult.WorkflowStepResult

  association [0..1] to I_WorkflowAgentRule          as _WorkflowAgentRule          on  $projection.WorkflowScenarioDefinition     = _WorkflowAgentRule.WorkflowScenarioDefinition
                                                                                    and $projection.WorkflowScenarioDefinitionVers = _WorkflowAgentRule.WorkflowScenarioDefinitionVers
                                                                                    and $projection.WorkflowTaskProcessorRole      = _WorkflowAgentRule.WorkflowAgentRule
{
  key I_WorkflowTask.WorkflowTaskInternalID,
      TopLevelWorkflowTask           as WorkflowInternalID,
      WorkflowTaskStatus             as WorkflowTaskExternalStatus,
      _WorkflowTaskExternalStatus,
      WorkflowTaskDefinition,
      WorkflowTaskCurrentUser        as WorkflowTaskProcessor,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_WorkflowTaskProcessor_2' 
      _WorkflowTaskProcessor,
      _WorkflowTaskProcessor_2,
      WorkflowTaskProcessorRole,
      _WorkflowAgentRule,
      WrkflwTskCreationUTCDateTime,
      WrkflwTskCompletionUTCDateTime,
      WorkflowTaskStepType,
      _WorkflowTaskStepType,
      TopLevelWorkflowTaskDefinition as WorkflowScenarioDefinition,
      WorkflowTaskDefinitionVersion  as WorkflowScenarioDefinitionVers,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_WorkflowRecipients_2'      
      _WorkflowRecipients,
      _WorkflowRecipients_2,
      WorkflowTaskResult.WorkflowTaskResult,
      _WorkflowTaskStepResult
}
where
      WorkflowTaskType           = 'W'
  and WorkflowTaskDefinitionType = 'SCENARIO'
```
