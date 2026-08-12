---
name: I_INSPLOTDYNRULESTAGETEXT
description: "Insplotdynrulestagetext"
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
# I_INSPLOTDYNRULESTAGETEXT

**Insplotdynrulestagetext**

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
| `InspLotDynRuleStage` | ✓ | |  | `prstufe` |  |  |
| `Language` | ✓ | |  | `sprache` |  |  |
| `InspLotDynRuleStageText` |  | |  | `kurztext` |  |  |
| `_Language` | | ✓ | | | | |
| `_InspLotDynamicRule` | | ✓ | | | | |
| `_InspLotDynRuleStage` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_InspLotDynamicRule` | `I_InspLotDynamicRule` | [1..1] |
| `_InspLotDynRuleStage` | `I_InspLotDynRuleStage` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Inspection Stage - Text'
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'IINSPLTDYNRLSTGT'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities:
  [ #LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SEARCHABLE_ENTITY]
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'InspLotDynRuleStage'
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #MASTER }
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
define view I_InspLotDynRuleStageText 
  as select from qdpst
  association [0..1] to I_Language            as _Language            on  $projection.Language = _Language.Language
  association [1..1] to I_InspLotDynamicRule  as _InspLotDynamicRule  on  $projection.InspLotDynamicRule = _InspLotDynamicRule.InspLotDynamicRule
  association [1..1] to I_InspLotDynRuleStage as _InspLotDynRuleStage on  $projection.InspLotDynamicRule  = _InspLotDynRuleStage.InspLotDynamicRule
                                                                      and $projection.InspLotDynRuleStage = _InspLotDynRuleStage.InspLotDynRuleStage
{
      @ObjectModel.foreignKey.association: '_InspLotDynamicRule'
  key cast( dynregel as vdm_qdynregel preserving type ) as InspLotDynamicRule,
      @ObjectModel.foreignKey.association: '_InspLotDynRuleStage'
  key prstufe  as InspLotDynRuleStage,
      @Semantics.language: true
  key sprache  as Language,
      @Semantics.text: true
      kurztext as InspLotDynRuleStageText,

      _InspLotDynamicRule,
      _InspLotDynRuleStage,
      _Language

}
```
