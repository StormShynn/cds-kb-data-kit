---
name: I_TRSYHEDGINGRELSHPSCENARIO
description: "Trsyhedgingrelshpscenario"
app_component: FIN-FSCM-TRM-2CL
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
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - interface-view
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_TRSYHEDGINGRELSHPSCENARIO

**Trsyhedgingrelshpscenario**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
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
| `TrsyHedgingRelshpScenario` | ✓ | |  | `cast(TrsyHedgingRelshpScenario.hrel_scene_cat as ftr_gen_hrel_scenario preserving type)` |  |  |
| `HedgingRelationshipCategory` |  | |  | `cast(TrsyHedgingRelshpScenario.hedge_category as ftr_gen_hrel_category preserving type)` |  |  |
| `TrsyHedgingRelshpRiskCategory` |  | |  | `cast (case when TrsyHedgingRelshpScenario.fx_risk is not initial then '01' when TrsyHedgingRelshpScenario.ir_risk is not initial then '02' when TrsyHedgingRelshpScenario.price_risk is not initial then '03' else ' ' end as ftr_gen_hrel_risk_category preserving type)` |  |  |
| `TrsyHedgeAccountingRule` |  | |  | `cast(TrsyHedgingRelshpScenario.hacc_rule as ftr_gen_hacc_rule preserving type)` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_TrsyHedgingRelshpScenarioTxt` | [0..*] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
 @AccessControl.authorizationCheck: #NOT_REQUIRED // according to XLS / DCL
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'ITHXTSHDGSCEN'
// @Analytics.dataExtraction.enabled: true // use only if view is customizing or small master data
@Analytics.internalName: #LOCAL
@EndUserText.label: 'Hedging Relationship Scenario'
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.representativeKey: 'TrsyHedgingRelshpScenario'
@ObjectModel.usageType.dataClass: #ORGANIZATIONAL
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #S
@Metadata.allowExtensions:true  
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true // For C1-Release

define view entity I_TrsyHedgingRelshpScenario as select from thxts_hdg_scen as TrsyHedgingRelshpScenario

association [0..*] to I_TrsyHedgingRelshpScenarioTxt as _Text on $projection.TrsyHedgingRelshpScenario = _Text.TrsyHedgingRelshpScenario

{
      @ObjectModel.text.association: '_Text'
  key cast(TrsyHedgingRelshpScenario.hrel_scene_cat           as ftr_gen_hrel_scenario         preserving type) as TrsyHedgingRelshpScenario,   
      cast(TrsyHedgingRelshpScenario.hedge_category           as ftr_gen_hrel_category         preserving type) as HedgingRelationshipCategory,
      cast (case 
              when
                TrsyHedgingRelshpScenario.fx_risk is not initial then '01'
              when
                TrsyHedgingRelshpScenario.ir_risk is not initial then '02'
              when
                TrsyHedgingRelshpScenario.price_risk is not initial then '03'
              else
                '  ' 
            end                                               as ftr_gen_hrel_risk_category    preserving type) as TrsyHedgingRelshpRiskCategory,

//          TrsyHedgingRelshpScenario.hedge_item_cat,
      cast(TrsyHedgingRelshpScenario.hacc_rule                as ftr_gen_hacc_rule             preserving type) as TrsyHedgeAccountingRule,         
//          TrsyHedgingRelshpScenario.flg_no_efftest,
//          TrsyHedgingRelshpScenario.hrel_cardinality,
//          TrsyHedgingRelshpScenario.hrel_rollover
  _Text
}
```
