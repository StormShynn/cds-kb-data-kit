---
name: I_INSPLOTDYNAMICRULETEXT
description: "Insplotdynamicruletext"
app_component: QM-PT-2CL
software_component: SAPSCORE
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
  - QM
  - QM-PT
  - interface-view
  - text-view
  - text
  - component:QM-PT-2CL
  - lob:Quality Management
---
# I_INSPLOTDYNAMICRULETEXT

**Insplotdynamicruletext**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InspLotDynamicRule` | ✓ | |  | `cast( dynregel as vdm_qdynregel preserving type )` |  |  |
| `Language` | ✓ | |  | `sprache` |  |  |
| `InspLotDynamicRuleText` |  | |  | `kurztext` |  |  |
| `_Language` | | ✓ | | | | |
| `_InspLotDynamicRule` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_InspLotDynamicRule` | `I_InspLotDynamicRule` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Dynamic Modification Rule – Text'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Search.searchable: true
@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IINSPDYNRULET'
@ObjectModel.representativeKey: 'InspLotDynamicRule'
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #MASTER }
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities:
  [ #LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SEARCHABLE_ENTITY]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
define view entity I_InspLotDynamicRuleText
  as select from qddrt
  association [0..1] to I_Language           as _Language           on $projection.Language = _Language.Language
  association [1..1] to I_InspLotDynamicRule as _InspLotDynamicRule on $projection.InspLotDynamicRule = _InspLotDynamicRule.InspLotDynamicRule
{
  key cast( dynregel as vdm_qdynregel preserving type ) as InspLotDynamicRule,
      @Semantics.language: true
  key sprache  as Language, //text views shall always be language dependent
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      kurztext as InspLotDynamicRuleText,
      _InspLotDynamicRule,
      _Language

}
```
