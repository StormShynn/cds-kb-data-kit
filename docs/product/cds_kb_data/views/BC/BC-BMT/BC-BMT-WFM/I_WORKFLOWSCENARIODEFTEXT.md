---
name: I_WORKFLOWSCENARIODEFTEXT
description: "Workflowscenariodeftext"
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
# I_WORKFLOWSCENARIODEFTEXT

**Workflowscenariodeftext**

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
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `WorkflowScenarioDefinitionName` |  | |  | `WorkflowTaskDefinitionName` | `CHAR(40)` | Object Name |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IWRKFLWSCDEFTXT'
@AbapCatalog.compiler.compareFilter: true
@VDM.viewType: #COMPOSITE
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'WorkflowScenarioDefinition'
@EndUserText.label: 'Workflow Scenario Definition Text'
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
define view I_WorkflowScenarioDefText
  as select from    I_WorkflowScenarioDefinition as WorkflowScenarioDefinition
    inner join      I_WorkflowTaskDefinition     as WorkflowTaskDefinition on WorkflowScenarioDefinition.WorkflowScenarioDefinition = WorkflowTaskDefinition.WorkflowTaskDefinition
    left outer join I_WorkflowTaskDefinitionText as WorkflowDefinitionText on  WorkflowTaskDefinition.WorkflowTaskDefinitionObjType = WorkflowDefinitionText.WorkflowTaskDefinitionObjType
                                                                           and WorkflowTaskDefinition.WorkflowTaskDefinitionObject  = WorkflowDefinitionText.WorkflowTaskDefinitionObject
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key WorkflowScenarioDefinition.WorkflowScenarioDefinition as WorkflowScenarioDefinition,
      @Semantics:   { language: true }
      @ObjectModel: { foreignKey.association: '_Language' }
  key WorkflowDefinitionText.Language,
      @Semantics:   { text: true }
      _Language,
      WorkflowDefinitionText.WorkflowTaskDefinitionName     as WorkflowScenarioDefinitionName
}
```
