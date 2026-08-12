---
name: I_WORKFLOWSCENARIORESULT
description: "Workflowscenarioresult"
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
# I_WORKFLOWSCENARIORESULT

**Workflowscenarioresult**

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
| `WorkflowScenarioDefinition` | ✓ | |  | `wfd_id` | `CHAR(10)` | Number of workflow definition |
| `WorkflowScenarioDefinitionVers` | ✓ | |  | `version` | `CHAR(4)` | Version |
| `WorkflowScenarioResult` | ✓ | |  | `normiert` | `CHAR(60)` | Outcome |
| `WorkflowScenarioResultNature` |  | |  | `nature` | `CHAR(20)` | Workflow: Property: Positive, Negative.... |
| `_Text` | | ✓ | | | | |

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
