---
name: I_WORKFLOWAGENTRULE
description: "Workflowagentrule"
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
# I_WORKFLOWAGENTRULE

**Workflowagentrule**

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
| `WorkflowAgentRule` | ✓ | |  | `ruse_label` | `CHAR(40)` | Workflow : Label |
| `_WorkflowAgentRuleText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_WorkflowAgentRuleText` | `I_WorkflowAgentRuleText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IWRKFLWAGNT'
@AbapCatalog.compiler.compareFilter: true
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #MASTER
@EndUserText.label: 'Workflow Definition Agent Rule'
@ObjectModel.representativeKey: 'WorkflowAgentRule'
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_WorkflowAgentRule
  as select from swd_flxruse

  association [0..*] to I_WorkflowAgentRuleText as _WorkflowAgentRuleText on  $projection.WorkflowScenarioDefinition     = _WorkflowAgentRuleText.WorkflowScenarioDefinition
                                                                          and $projection.WorkflowScenarioDefinitionVers = _WorkflowAgentRuleText.WorkflowScenarioDefinitionVers
                                                                          and $projection.WorkflowAgentRule              = _WorkflowAgentRuleText.WorkflowAgentRule

{
  key wfd_id     as WorkflowScenarioDefinition,
  key version    as WorkflowScenarioDefinitionVers,
      @ObjectModel.text.association: '_WorkflowAgentRuleText'
  key ruse_label as WorkflowAgentRule,

      _WorkflowAgentRuleText
}
where
      ruse_type  = 'AGNT'
  and ruse_stype = 'WF'
  and nodeid     = '0000000002'
  and exetyp     = 'E'
  and version    < '9999'
```
