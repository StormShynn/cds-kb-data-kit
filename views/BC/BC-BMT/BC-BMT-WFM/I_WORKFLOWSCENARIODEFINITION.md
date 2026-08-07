---
name: I_WORKFLOWSCENARIODEFINITION
description: "Workflowscenariodefinition"
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
# I_WORKFLOWSCENARIODEFINITION

**Workflowscenariodefinition**

| Property | Value |
|---|---|
| App Component | `BC-BMT-WFM` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkflowScenarioDefinition` | ✓ | |  | `wfd_id` | `CHAR(10)` | Number of workflow definition |
| `_WorkflowScenarioDefText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_WorkflowScenarioDefText` | `I_WorkflowScenarioDefText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IWRKFLWSCDEF'
@AbapCatalog.compiler.compareFilter: true
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #MASTER
@EndUserText.label: 'Workflow Scenario Definition'
@ObjectModel.representativeKey: 'WorkflowScenarioDefinition'
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_WorkflowScenarioDefinition
  as select distinct from swdsheader
  association [0..*] to I_WorkflowScenarioDefText as _WorkflowScenarioDefText on $projection.WorkflowScenarioDefinition = _WorkflowScenarioDefText.WorkflowScenarioDefinition
{
      @ObjectModel.text.association: '_WorkflowScenarioDefText'
  key wfd_id as WorkflowScenarioDefinition,
      _WorkflowScenarioDefText
}
where
  wftype = '1024'
```
