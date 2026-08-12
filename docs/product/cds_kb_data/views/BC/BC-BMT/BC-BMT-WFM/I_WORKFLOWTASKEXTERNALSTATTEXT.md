---
name: I_WORKFLOWTASKEXTERNALSTATTEXT
description: "Workflowtaskexternalstattext"
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
  - text-view
  - text
  - workflow
  - component:BC-BMT-WFM
  - lob:Basis Components
---
# I_WORKFLOWTASKEXTERNALSTATTEXT

**Workflowtaskexternalstattext**

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
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `WorkflowExternalStatusDesc` |  | |  | `WorkflowTaskStatusDesc` | `CHAR(20)` | Workflow: Work Item Status |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IWRKFLWTSSTTXT'
@AbapCatalog.compiler.compareFilter: true
@VDM.viewType: #COMPOSITE
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'WorkflowExternalStatus'
@EndUserText.label: 'Workflow Task Status Text'
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
define view I_WorkflowTaskExternalStatText
  as select from I_WorkflowTaskStatusText
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key WorkflowTaskStatus     as WorkflowExternalStatus,
      @Semantics:   { language: true }
      @ObjectModel: { foreignKey.association: '_Language' }
  key Language               as Language,
      @Semantics:   { text: true }
      _Language,
      WorkflowTaskStatusDesc as WorkflowExternalStatusDesc
}
```
