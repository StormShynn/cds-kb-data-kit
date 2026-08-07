---
name: I_TRSYPOSMANAGEMENTPROCEDURE
description: Trsyposmanagementprocedure
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
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
# I_TRSYPOSMANAGEMENTPROCEDURE

**Trsyposmanagementprocedure**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TrsyPosManagementProcedure` | ✓ | |  | `cast(TrsyPosManagementProcedure.pos_man_proc as ftr_gen_pos_man_proc preserving type)` |  |  |
| `TrsyLdgrPosMgmtCat` |  | |  | `deriv_cat` |  |  |
| `TrsyPosMgmtProcedStpCat1` |  | |  | `step_cat_1` |  |  |
| `TrsyPosMgmtProcedStpProced1` |  | |  | `procedure_1` |  |  |
| `TrsyPosMgmtProcedStpCat2` |  | |  | `step_cat_2` |  |  |
| `TrsyPosMgmtProcedStpProced2` |  | |  | `procedure_2` |  |  |
| `TrsyPosMgmtProcedStpCat3` |  | |  | `step_cat_3` |  |  |
| `TrsyPosMgmtProcedStpProced3` |  | |  | `procedure_3` |  |  |
| `TrsyPosMgmtProcedStpCat4` |  | |  | `step_cat_4` |  |  |
| `TrsyPosMgmtProcedStpProced4` |  | |  | `procedure_4` |  |  |
| `TrsyPosMgmtProcedStpCat5` |  | |  | `step_cat_5` |  |  |
| `TrsyPosMgmtProcedStpProced5` |  | |  | `procedure_5` |  |  |
| `TrsyPosMgmtProcedValnBase` |  | |  | `val_amount_base` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_TrsyPosManagementProcText` | [0..*] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
 @AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'ITRPOSMANPROC' 
@Analytics.dataExtraction.enabled : true
@Analytics.internalName: #LOCAL 
@EndUserText.label: 'Treasury Position Management Procedure'
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.sapObjectNodeType.name: 'TrsyPosManagementProcedure'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'TrsyPosManagementProcedure'
@ObjectModel.usageType.dataClass: #ORGANIZATIONAL
@ObjectModel.usageType.serviceQuality: #B 
@ObjectModel.usageType.sizeCategory: #M
@Metadata.allowExtensions:true   
@Metadata.ignorePropagatedAnnotations: true // For C1-Release 
@VDM.viewType: #BASIC

define view entity I_TrsyPosManagementProcedure
  as select from trgc_pm_proc as TrsyPosManagementProcedure
  association [0..*] to I_TrsyPosManagementProcText as _Text on $projection.TrsyPosManagementProcedure = _Text.TrsyPosManagementProcedure

{
      @ObjectModel.text.association: '_Text'
  key cast(TrsyPosManagementProcedure.pos_man_proc as ftr_gen_pos_man_proc preserving type) as TrsyPosManagementProcedure,
      //   TrsyPosManagementProcedure.computation_cat,
      //   TrsyPosManagementProcedure.brutto_netto,
      //   TrsyPosManagementProcedure.rate_calc_meth,
      //   TrsyPosManagementProcedure.val_proc,
      TrsyPosManagementProcedure.deriv_cat as TrsyLdgrPosMgmtCat,
      //   TrsyPosManagementProcedure.purchase_gaap,
      //   TrsyPosManagementProcedure.transfer_cat,
      TrsyPosManagementProcedure.step_cat_1 as TrsyPosMgmtProcedStpCat1,
      TrsyPosManagementProcedure.procedure_1 as TrsyPosMgmtProcedStpProced1,
      //   TrsyPosManagementProcedure.flg_valuation_1,
      TrsyPosManagementProcedure.step_cat_2 as TrsyPosMgmtProcedStpCat2,
      TrsyPosManagementProcedure.procedure_2 as TrsyPosMgmtProcedStpProced2,
      //   TrsyPosManagementProcedure.flg_valuation_2,
      TrsyPosManagementProcedure.step_cat_3 as TrsyPosMgmtProcedStpCat3,
      TrsyPosManagementProcedure.procedure_3 as TrsyPosMgmtProcedStpProced3,
      //   TrsyPosManagementProcedure.flg_valuation_3,
      TrsyPosManagementProcedure.step_cat_4 as TrsyPosMgmtProcedStpCat4,
      TrsyPosManagementProcedure.procedure_4 as TrsyPosMgmtProcedStpProced4,
      //   TrsyPosManagementProcedure.flg_valuation_4,
      TrsyPosManagementProcedure.step_cat_5 as TrsyPosMgmtProcedStpCat5,
      TrsyPosManagementProcedure.procedure_5 as TrsyPosMgmtProcedStpProced5,
      //   TrsyPosManagementProcedure.flg_valuation_5,
      //   TrsyPosManagementProcedure.imp_proc,
      //   TrsyPosManagementProcedure.accint_comp,
      //   TrsyPosManagementProcedure.pos_passiv,
      //   TrsyPosManagementProcedure.premium_trans,
      //   TrsyPosManagementProcedure.oci_handling_flg,
      //   TrsyPosManagementProcedure.otc_val_flg,
      //   TrsyPosManagementProcedure.eval_typ,
      //   TrsyPosManagementProcedure.round_proc,
      //   TrsyPosManagementProcedure.accrual_incl,
      //   TrsyPosManagementProcedure.accrual_ultimo,
      //   TrsyPosManagementProcedure.accrual_incomety,
      //   TrsyPosManagementProcedure.defer_translatio,
      TrsyPosManagementProcedure.val_amount_base as TrsyPosMgmtProcedValnBase,

      _Text
}
```
