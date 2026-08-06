---
name: I_WORKFLOWRECIPIENTS_V2
description: Workflowrecipients V 2
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
# I_WORKFLOWRECIPIENTS_V2

**Workflowrecipients V 2**

| Property | Value |
|---|---|
| App Component | `BC-BMT-WFM` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `WorkflowTaskInternalID` | `TaskRecipient.WorkflowTaskInternalID` |
| key `WorkflowTaskRecipient` | `TaskRecipient.WorkflowTaskRecipient` |
| key `WorkflowTaskSubstitutedUser` | `TaskRecipient.WorkflowTaskSubstitutedUser` |
| `WorkflowInternalID` | `TaskHeader.top_wi_id` |
| `WorkflowTaskIsForwarded` | `TaskRecipient.WorkflowTaskIsForwarded` |
| `WorkflowTaskIsVisibleInInbox` | `TaskRecipient.WorkflowTaskIsVisibleInInbox` |
| `_WorkflowTaskRecipient` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_WorkflowTaskRecipient` | `I_BusinessUserBasic` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IWRKFLWREC_V2'
@AbapCatalog.compiler.compareFilter: true
@VDM.viewType: #COMPOSITE
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MASTER
@EndUserText.label: 'Workflow Task Recipient'
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
/*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ]  } */
define view I_WorkflowRecipients_V2
  as select distinct from I_WorkflowTaskRecipient as TaskRecipient
    inner join   swwwihead               as TaskHeader on TaskHeader.wi_id = TaskRecipient.WorkflowTaskInternalID
  association [0..1] to I_BusinessUserBasic as _WorkflowTaskRecipient on $projection.WorkflowTaskRecipient = _WorkflowTaskRecipient.UserID
{
  key TaskRecipient.WorkflowTaskInternalID       as WorkflowTaskInternalID,
  key TaskRecipient.WorkflowTaskRecipient        as WorkflowTaskRecipient,
  key TaskRecipient.WorkflowTaskSubstitutedUser  as WorkflowTaskSubstitutedUser,
      TaskHeader.top_wi_id                       as WorkflowInternalID,
      _WorkflowTaskRecipient,
      TaskRecipient.WorkflowTaskIsForwarded      as WorkflowTaskIsForwarded,
      TaskRecipient.WorkflowTaskIsVisibleInInbox as WorkflowTaskIsVisibleInInbox
}
```
