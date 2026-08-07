---
name: I_WORKFLOWSTATUSOVERVIEW
description: Workflowstatusoverview
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
  - status
  - workflow
  - component:BC-BMT-WFM
  - lob:Basis Components
---
# I_WORKFLOWSTATUSOVERVIEW

**Workflowstatusoverview**

| Property | Value |
|---|---|
| App Component | `BC-BMT-WFM` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `WorkflowInternalID` | ✓ | |  | `WorkflowTaskInternalID` |
| `WorkflowExternalStatus` |  | |  | `WorkflowTaskStatus` |
| `WorkflowScenarioDefinition` |  | |  | `WorkflowTaskDefinition` |
| `WorkflowScenarioDefinitionVers` |  | |  | `WorkflowTaskDefinitionVersion` |
| `WrkflwTskCreationUTCDateTime` |  | |  |  |
| `WrkflwTskCompletionUTCDateTime` |  | |  |  |
| `SAPObjectNodeRepresentation` |  | |  |  |
| `SAPBusinessObjectNodeKey1` |  | |  |  |
| `SAPBusinessObjectNodeKey2` |  | |  |  |
| `SAPBusinessObjectNodeKey3` |  | |  |  |
| `SAPBusinessObjectNodeKey4` |  | |  |  |
| `SAPBusinessObjectNodeKey5` |  | |  |  |
| `SAPBusinessObjectNodeKey6` |  | |  |  |
| `NmbrOfCmpltdWrkflwDialogTasks` |  | |  | `sum(case when Tasks.WorkflowTaskExternalStatus = 'COMPLETED' or WorkflowTaskExternalStatus = 'CANCELLED' then Tasks.NumberOfWorkflowDialogTasks else 0 end )` |
| `NmbrOfActiveWrkflwDialogTasks` |  | |  | `sum(case when Tasks.WorkflowTaskExternalStatus != 'COMPLETED' and WorkflowTaskExternalStatus != 'CANCELLED' then Tasks.NumberOfWorkflowDialogTasks else 0 end )` |
| `_WorkflowExternalStatus` | | ✓ | | |
| `_WorkflowScenarioDefinition` | | ✓ | | |
| `_WorkflowStatusDetails` | | ✓ | | |
| `_WorkflowResult` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_WorkflowExternalStatus` | `I_WorkflowExternalStatus` | [0..1] |
| `_WorkflowScenarioDefinition` | `I_WorkflowScenarioDefinition` | [0..1] |
| `_WorkflowStatusDetails` | `I_WorkflowStatusDetails` | [0..*] |
| `_WorkflowResult` | `I_WorkflowResult` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IWRKFLWSTTSVW'
@AbapCatalog.compiler.compareFilter: true
@VDM.viewType: #COMPOSITE
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Workflow'
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
define view I_WorkflowStatusOverview
  as select from    I_WorkflowTask           as WorkflowHeader
    inner join      I_WorkflowTaskApplObject as WorkflowTaskApplObject on WorkflowTaskApplObject.WorkflowTaskInternalID = WorkflowHeader.WorkflowTaskInternalID
    left outer join I_WorkflowTaskCount      as Tasks                  on Tasks.WorkflowInternalID = WorkflowHeader.WorkflowTaskInternalID
  association [0..1] to I_WorkflowExternalStatus     as _WorkflowExternalStatus     on $projection.WorkflowExternalStatus = _WorkflowExternalStatus.WorkflowExternalStatus
  association [0..1] to I_WorkflowScenarioDefinition as _WorkflowScenarioDefinition on $projection.WorkflowScenarioDefinition = _WorkflowScenarioDefinition.WorkflowScenarioDefinition
  association [0..*] to I_WorkflowStatusDetails      as _WorkflowStatusDetails      on $projection.WorkflowInternalID = _WorkflowStatusDetails.WorkflowInternalID
  association [0..1] to I_WorkflowResult             as _WorkflowResult             on $projection.WorkflowInternalID = _WorkflowResult.WorkflowInternalID
{
  key WorkflowHeader.WorkflowTaskInternalID                     as WorkflowInternalID,
      WorkflowTaskStatus                                        as WorkflowExternalStatus,
      _WorkflowExternalStatus,
      WorkflowTaskDefinition                                    as WorkflowScenarioDefinition,
      _WorkflowScenarioDefinition,
      WorkflowTaskDefinitionVersion                             as WorkflowScenarioDefinitionVers,
      WrkflwTskCreationUTCDateTime,
      WrkflwTskCompletionUTCDateTime,
      WorkflowTaskApplObject.SAPObjectNodeRepresentation,
      WorkflowTaskApplObject.SAPBusinessObjectNodeKey1,
      WorkflowTaskApplObject.SAPBusinessObjectNodeKey2,
      WorkflowTaskApplObject.SAPBusinessObjectNodeKey3,
      WorkflowTaskApplObject.SAPBusinessObjectNodeKey4,
      WorkflowTaskApplObject.SAPBusinessObjectNodeKey5,
      WorkflowTaskApplObject.SAPBusinessObjectNodeKey6,
      sum(case when  Tasks.WorkflowTaskExternalStatus = 'COMPLETED'
                     or WorkflowTaskExternalStatus    = 'CANCELLED'
                     then Tasks.NumberOfWorkflowDialogTasks
               else 0
          end )                                                 as NmbrOfCmpltdWrkflwDialogTasks,
      sum(case when  Tasks.WorkflowTaskExternalStatus != 'COMPLETED'
                     and WorkflowTaskExternalStatus   != 'CANCELLED'
                     then Tasks.NumberOfWorkflowDialogTasks
               else 0
          end )                                                 as NmbrOfActiveWrkflwDialogTasks,
      _WorkflowStatusDetails,
      _WorkflowResult
}
where
      WorkflowTaskType                                   = 'F'
  and WorkflowTaskDefinitionType                         = 'SCENARIO'
  and WorkflowTaskApplObject.SAPObjectNodeRepresentation is not initial
  and WorkflowTaskApplObject.WorkflowObjectRole          = '01'
group by WorkflowHeader.WorkflowTaskInternalID, WorkflowTaskStatus,
      WorkflowTaskDefinition,
      WorkflowTaskDefinitionVersion,
      WrkflwTskCreationUTCDateTime,
      WrkflwTskCompletionUTCDateTime,
      WorkflowTaskApplObject.SAPObjectNodeRepresentation,
      WorkflowTaskApplObject.SAPBusinessObjectNodeKey1,
      WorkflowTaskApplObject.SAPBusinessObjectNodeKey2,
      WorkflowTaskApplObject.SAPBusinessObjectNodeKey3,
      WorkflowTaskApplObject.SAPBusinessObjectNodeKey4,
      WorkflowTaskApplObject.SAPBusinessObjectNodeKey5,
      WorkflowTaskApplObject.SAPBusinessObjectNodeKey6
```
