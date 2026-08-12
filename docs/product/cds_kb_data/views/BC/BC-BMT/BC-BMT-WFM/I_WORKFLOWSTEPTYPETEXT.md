---
name: I_WORKFLOWSTEPTYPETEXT
description: "Workflowsteptypetext"
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
# I_WORKFLOWSTEPTYPETEXT

**Workflowsteptypetext**

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
| `WrkflwScen` | ✓ | |  | `wfd_id` | `CHAR(10)` | Number of workflow definition |
| `WrkflwScenVers` | ✓ | |  | `version` | `CHAR(4)` | Version |
| `WorkflowStepType` | ✓ | |  | `ruse_label` | `CHAR(40)` | Workflow : Label |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language Key |
| `WorkflowStepTypeSubject` |  | |  | `text` | `CHAR(255)` | Text, 255 Characters |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'WRKFLWSTPTPTXT'
@AbapCatalog.compiler.compareFilter: true
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'WorkflowStepType'
@EndUserText.label: 'Workflow Step Type Text'
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
define view I_WorkflowStepTypeText
  as select from    swd_flxruse as WorkflowStepType
    left outer join swd_flxrutx as WorkflowStepTypeText on  WorkflowStepType.wfd_id     = WorkflowStepTypeText.wfd_id
                                                        and WorkflowStepType.version    = WorkflowStepTypeText.version
                                                        and WorkflowStepType.item_order = WorkflowStepTypeText.item_order
                                                        and WorkflowStepType.ruse_type  = WorkflowStepTypeText.ruse_type
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key WorkflowStepType.wfd_id       as WrkflwScen,
  key WorkflowStepType.version      as WrkflwScenVers,
  key WorkflowStepType.ruse_label   as WorkflowStepType,
      @Semantics:   { language: true }
      @ObjectModel: { foreignKey.association: '_Language' }
  key WorkflowStepTypeText.language as Language,
      @Semantics:   { text: true }
      _Language,
      WorkflowStepTypeText.text     as WorkflowStepTypeSubject
}
where
      WorkflowStepType.ruse_type     =  'STEP'
  and WorkflowStepType.ruse_stype    =  'WF'
  and WorkflowStepType.nodeid        =  '0000000002'
  and WorkflowStepType.exetyp        =  'E'
  and WorkflowStepTypeText.text_type =  'FS'
  and WorkflowStepType.version       <> '9999'
```
