---
name: I_INSPLOTDYNAMICRULETEXT
description: "Insplotdynamicruletext"
app_component: QM-PT-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
