---
name: I_WORKFLOWEXTERNALSTATUS
description: "Workflowexternalstatus"
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
# I_WORKFLOWEXTERNALSTATUS

**Workflowexternalstatus**

| Property | Value |
|---|---|
| App Component | `BC-BMT-WFM` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkflowExternalStatus` | ✓ | |  | `WorkflowTaskStatus` | `CHAR(10)` |  |
| `_WorkflowExternalStatusText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_WorkflowExternalStatusText` | `I_WorkflowExternalStatusText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IWRKFLWSTTS'
@AbapCatalog.compiler.compareFilter: true
@VDM.viewType: #COMPOSITE
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #MASTER
@EndUserText.label: 'Workflow Status'
@ObjectModel.representativeKey: 'WorkflowExternalStatus'
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
define view I_WorkflowExternalStatus
  as select from I_WorkflowTaskStatus
  association [0..*] to I_WorkflowExternalStatusText as _WorkflowExternalStatusText on $projection.WorkflowExternalStatus = _WorkflowExternalStatusText.WorkflowExternalStatus
{
      @ObjectModel.text.association: '_WorkflowExternalStatusText'
  key WorkflowTaskStatus as WorkflowExternalStatus,
      _WorkflowExternalStatusText
}
```
