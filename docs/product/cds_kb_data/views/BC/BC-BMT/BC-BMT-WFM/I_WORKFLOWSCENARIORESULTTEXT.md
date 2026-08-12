---
name: I_WORKFLOWSCENARIORESULTTEXT
description: "Workflowscenarioresulttext"
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
  - text-view
  - text
  - workflow
  - component:BC-BMT-WFM
  - lob:Basis Components
---
# I_WORKFLOWSCENARIORESULTTEXT

**Workflowscenarioresulttext**

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
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language Key |
| `WorkflowScenarioResultText` |  | |  | `text` | `CHAR(255)` | Text, 255 Characters |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IWRKFSCNRESTX'
@EndUserText.label: 'Workflow Scenario Result Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel : {
  usageType : {
    dataClass: #META,
    serviceQuality: #C,
    sizeCategory: #M
  },
  dataCategory: #TEXT
}
@ObjectModel.representativeKey: 'WorkflowScenarioResult'
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
define view I_WorkflowScenarioResultText
    as select from swd_flxout   as WorkflowResult
    left outer join swd_flxrutx as WorkflowResultText on  WorkflowResult.wfd_id     = WorkflowResultText.wfd_id
                                                      and WorkflowResult.version    = WorkflowResultText.version
                                                      and WorkflowResult.exetyp     = WorkflowResultText.exetyp
                                                      and WorkflowResult.item_order = WorkflowResultText.item_order
                                                     
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language

{
  key WorkflowResult.wfd_id        as WorkflowScenarioDefinition,
  key WorkflowResult.version       as WorkflowScenarioDefinitionVers,
  key WorkflowResult.normiert      as WorkflowScenarioResult,
      @Semantics:   { language: true }
      @ObjectModel: { foreignKey.association: '_Language' }
  key WorkflowResultText.language  as Language,
      WorkflowResultText.text      as WorkflowScenarioResultText,
      @Semantics:   { text: true }
      _Language
}
where
      WorkflowResult.exetyp         = 'E'
  and WorkflowResultText.nodeid     = '0000000001'
  and WorkflowResultText.ruse_type  = 'OUT'
  and WorkflowResultText.ruse_stype = 'WF'
  and WorkflowResultText.text_type  = 'OS'
```
