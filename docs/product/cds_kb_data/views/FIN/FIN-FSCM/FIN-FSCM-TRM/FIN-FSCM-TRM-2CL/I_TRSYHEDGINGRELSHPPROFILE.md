---
name: I_TRSYHEDGINGRELSHPPROFILE
description: "Trsyhedgingrelshpprofile"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_TRSYHEDGINGRELSHPPROFILE

**Trsyhedgingrelshpprofile**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `HedgingProfile` | ✓ | |  | `cast(TrsyHedgingRelshpProfile.hrel_profile as ftr_gen_hdgg_profile preserving type)` |  |  |
| `TrsyHedgingRelshpScenario` |  | |  | `cast(TrsyHedgingRelshpProfile.hrel_scene_cat as ftr_gen_hrel_scenario preserving type)` |  |  |
| `_TrsyHedgingRelshpScenario` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TrsyHedgingRelshpScenario` | `I_TrsyHedgingRelshpScenario` | [0..1] |
| `_Text` | `I_TrsyHedgingRelshpProfileTxt` | [0..*] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
 @AbapCatalog.dataMaintenance: #NOT_ALLOWED
@AccessControl.authorizationCheck: #NOT_REQUIRED // according to XLS / DCL
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'ITHXCHRPROFL'
// @Analytics.dataExtraction.enabled: true // use only if view is customizing or small master data
@Analytics.internalName: #LOCAL
@EndUserText.label: 'Hedging Relationship Profile'
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.representativeKey: 'HedgingProfile'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #S
@Metadata.allowExtensions:true  
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true // For C1-Release

define view entity I_TrsyHedgingRelshpProfile as select from thxc_hr_profl as TrsyHedgingRelshpProfile

association [0..1] to I_TrsyHedgingRelshpScenario   as _TrsyHedgingRelshpScenario on $projection.TrsyHedgingRelshpScenario = _TrsyHedgingRelshpScenario.TrsyHedgingRelshpScenario
association [0..*] to I_TrsyHedgingRelshpProfileTxt as _Text                      on $projection.HedgingProfile = _Text.HedgingProfile


{
      @ObjectModel.text.association: '_Text'
  key cast(TrsyHedgingRelshpProfile.hrel_profile           as ftr_gen_hdgg_profile         preserving type) as HedgingProfile,
//    TrsyHedgingRelshpProfile.hrel_rollover,
      cast(TrsyHedgingRelshpProfile.hrel_scene_cat         as ftr_gen_hrel_scenario        preserving type) as TrsyHedgingRelshpScenario,
//    TrsyHedgingRelshpProfile.eff_test_met_pro,
//    TrsyHedgingRelshpProfile.eff_test_met_ret,
//    TrsyHedgingRelshpProfile.hrel_doc_num,
//    TrsyHedgingRelshpProfile.flg_doc_auto_cre,
//    TrsyHedgingRelshpProfile.eff_tst_dt_logic,
//    TrsyHedgingRelshpProfile.eff_tst_validity,
//    TrsyHedgingRelshpProfile.et_testplan_cat,
//    TrsyHedgingRelshpProfile.flg_docu_opt,
//    TrsyHedgingRelshpProfile.et_handle_in_dbt,
//    TrsyHedgingRelshpProfile.hd_creation_cat,
//    TrsyHedgingRelshpProfile.hedge_accounting_calc_type,
//    TrsyHedgingRelshpProfile.flg_skip_valua_at_con_date,
//    TrsyHedgingRelshpProfile.apply_critical_term_match,
//    TrsyHedgingRelshpProfile.flg_skip_designation,
//    TrsyHedgingRelshpProfile.hrel_profile_under,
//    TrsyHedgingRelshpProfile.flg_npv_intr_zero_at_cdat
  _TrsyHedgingRelshpScenario,
  _Text
}
```
