---
name: I_WORKFLOWAGENTRULETEXT
description: "Workflowagentruletext"
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
# I_WORKFLOWAGENTRULETEXT

**Workflowagentruletext**

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
| `WorkflowScenarioDefinition` | ✓ | | `_reuse` | `wfd_id` | `CHAR(10)` | Number of workflow definition |
| `WorkflowScenarioDefinitionVers` | ✓ | | `_reuse` | `version` | `CHAR(4)` | Version |
| `WorkflowAgentRule` | ✓ | | `_reuse` | `ruse_label` | `CHAR(40)` | Workflow : Label |
| `Language` | ✓ | | `_text` | `language` | `LANG(1)` | Language Key |
| `WorkflowAgentRuleText` |  | | `_text` | `text` | `CHAR(255)` | Text, 255 Characters |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IWRKFLWAGNTTXT'
@EndUserText.label: 'Workflow Definition Agent Rule Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType : {
  dataClass: #META,
  serviceQuality: #C,
  sizeCategory: #M
}
@Analytics: { dataCategory: #DIMENSION }
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'WorkflowAgentRule'
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
define view I_WorkflowAgentRuleText
  as select from swd_flxrutx as _text
    inner join   swd_flxruse as _reuse on  _reuse.wfd_id     = _text.wfd_id
                                       and _reuse.version    = _text.version
                                       and _reuse.item_order = _text.item_order
                                       and _reuse.ruse_type  = _text.ruse_type

  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key _reuse.wfd_id     as WorkflowScenarioDefinition,
  key _reuse.version    as WorkflowScenarioDefinitionVers,
  key _reuse.ruse_label as WorkflowAgentRule,
      @Semantics:   { language: true }
      @ObjectModel: { foreignKey.association: '_Language' }
  key _text.language    as Language,
      @Semantics:   { text: true }
      _Language,
      _text.text        as WorkflowAgentRuleText
}
where
      _reuse.ruse_type  = 'AGNT'
  and _reuse.ruse_stype = 'WF'
  and _reuse.nodeid     = '0000000002'
  and _reuse.exetyp     = 'E'
  and _text.text_type   = 'FS'
  and _reuse.version    < '9999'
```
