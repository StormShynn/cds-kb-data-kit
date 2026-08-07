---
name: I_WORKFLOWTASKEXTERNALSTATUS
description: "Workflowtaskexternalstatus"
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
# I_WORKFLOWTASKEXTERNALSTATUS

**Workflowtaskexternalstatus**

| Property | Value |
|---|---|
| App Component | `BC-BMT-WFM` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkflowTaskExternalStatus` | ✓ | |  | `WorkflowTaskStatus` | `CHAR(10)` |  |
| `_WorkflowTaskExternalStatusTxt` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_WorkflowTaskExternalStatusTxt` | `I_WorkflowTaskExternalStatText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IWRKFLWTSKSTTS'
@AbapCatalog.compiler.compareFilter: true
@VDM.viewType: #COMPOSITE
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #MASTER
@EndUserText.label: 'Workflow Task Status'
@ObjectModel.representativeKey: 'WorkflowTaskExternalStatus'
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
define view I_WorkflowTaskExternalStatus
  as select from I_WorkflowTaskStatus
  association [0..*] to I_WorkflowTaskExternalStatText as _WorkflowTaskExternalStatusTxt on $projection.WorkflowTaskExternalStatus = _WorkflowTaskExternalStatusTxt.WorkflowExternalStatus
{
      @ObjectModel.text.association: '_WorkflowTaskExternalStatusTxt'
  key WorkflowTaskStatus as WorkflowTaskExternalStatus,
      _WorkflowTaskExternalStatusTxt
}
```
