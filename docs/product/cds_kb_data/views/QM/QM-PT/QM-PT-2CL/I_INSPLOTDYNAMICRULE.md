---
name: I_INSPLOTDYNAMICRULE
description: "Insplotdynamicrule"
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
  - component:QM-PT-2CL
  - lob:Quality Management
---
# I_INSPLOTDYNAMICRULE

**Insplotdynamicrule**

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
| `InspLotDynRuleInitStage` |  | |  | `prstufeanf` |  |  |
| `_InspLotDynRuleStage` | | ✓ | | | | |
| `_InspLotDynRuleInitStage` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_InspLotDynRuleStage` | `I_InspLotDynRuleStage` | [0..*] |
| `_InspLotDynRuleInitStage` | `I_InspLotDynRuleStage` | [0..1] |
| `_Text` | `I_InspLotDynamicRuleText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Dynamic modification rule'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@Analytics.dataCategory: #DIMENSION
@Metadata.allowExtensions:true
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #MANDATORY
@AbapCatalog.sqlViewName: 'IINSPDYNRULE'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'InspLotDynamicRule'
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #MASTER }
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.sapObjectNodeType.name: 'InspectionLotDynamicRule'
define view I_InspLotDynamicRule
  as select from qddr
  association [0..*] to I_InspLotDynRuleStage as _InspLotDynRuleStage on $projection.InspLotDynamicRule = _InspLotDynRuleStage.InspLotDynamicRule
  association [0..1] to I_InspLotDynRuleStage as _InspLotDynRuleInitStage 
  on $projection.InspLotDynamicRule = _InspLotDynRuleInitStage.InspLotDynamicRule
  and $projection.InspLotDynRuleInitStage = _InspLotDynRuleInitStage.InspLotDynRuleStage
  association [0..*] to I_InspLotDynamicRuleText as _Text on $projection.InspLotDynamicRule = _Text.InspLotDynamicRule
{
      @ObjectModel.text.association: '_Text'
  key cast( dynregel as vdm_qdynregel preserving type ) as InspLotDynamicRule,
      prstufeanf as InspLotDynRuleInitStage,
      
      //Assocations
      _InspLotDynRuleStage,
      _InspLotDynRuleInitStage,
      _Text

}
```
