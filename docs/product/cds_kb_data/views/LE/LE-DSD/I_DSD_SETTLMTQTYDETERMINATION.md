---
name: I_DSD_SETTLMTQTYDETERMINATION
description: "Dsd Settlmtqtydetermination"
app_component: LE-DSD
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LE
  - LE-DSD
  - interface-view
  - component:LE-DSD
  - lob:Logistics Execution
---
# I_DSD_SETTLMTQTYDETERMINATION

**Dsd Settlmtqtydetermination**

| Property | Value |
|---|---|
| App Component | `LE-DSD` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DSD_SettlementDocument` | ✓ | |  | `sld_doc_id` |  |  |
| `Material` | ✓ | |  | `matnr` |  |  |
| `AssgdSettlementSequenceNumber` | ✓ | |  | `assigned_seq` |  |  |
| `SettlementDifferenceReason` | ✓ | |  | `reason` |  |  |
| `CtrlParamForQuantityDifference` | ✓ | |  | `spec_return` |  |  |
| `Plant` | ✓ | |  | `plant` |  |  |
| `Batch` | ✓ | |  | `charg` |  |  |
| `TargetQuantity` |  | |  | `quan_planned` |  |  |
| `SettlmtInitLoadingConfQuantity` |  | |  | `quan_lc_init` |  |  |
| `SettlmtInitLoadgConfDiffQty` |  | |  | `quan_lc_init_dif` |  |  |
| `SettlmtInitialCheckOutQuantity` |  | |  | `quan_co_init` |  |  |
| `SettlmtInitChkOutDiffQuantity` |  | |  | `quan_co_init_dif` |  |  |
| `SettlmtPlannedReloadQuantity` |  | |  | `quan_rld_plan` |  |  |
| `SettlmtReloadCheckInQuantity` |  | |  | `quan_rld_ci` |  |  |
| `SettlmtRldLoadingConfQuantity` |  | |  | `quan_rld_lc` |  |  |
| `SettlmtRldLoadgConfDiffQty` |  | |  | `quan_rld_lc_diff` |  |  |
| `SettlmtReloadCheckOutQuantity` |  | |  | `quan_rld_co` |  |  |
| `SettlmtRldCheckOutDiffQuantity` |  | |  | `quan_rld_co_diff` |  |  |
| `SettlmtPlndFnlCheckInQuantity` |  | |  | `quan_ci_plan` |  |  |
| `SettlmtFinalCheckInQuantity` |  | |  | `quan_ci` |  |  |
| `SettlmtFnlCheckInDiffQuantity` |  | |  | `quan_ci_diff` |  |  |
| `SettlmtPlndLoadgConfQuantity` |  | |  | `quan_lc_plan_sum` |  |  |
| `SettlementLoadingConfQuantity` |  | |  | `quan_lc_sum` |  |  |
| `SettlmtLoadgConfDiffQuantity` |  | |  | `quan_lc_diff_sum` |  |  |
| `SettlmtPlannedCheckOutQuantity` |  | |  | `quan_co_plan_sum` |  |  |
| `SettlementCheckOutQuantity` |  | |  | `quan_co_sum` |  |  |
| `SettlmtCheckOutDiffQuantity` |  | |  | `quan_co_diff_sum` |  |  |
| `SettlmtPlannedCheckInQuantity` |  | |  | `quan_ci_plan_sum` |  |  |
| `SettlementCheckInQuantity` |  | |  | `quan_ci_sum` |  |  |
| `SettlementCheckInDiffQuantity` |  | |  | `quan_ci_diff_sum` |  |  |
| `UnitOfMeasure` |  | |  | `uom_for_quan` |  |  |
| `SettlementToleranceGroup` |  | |  | `tolgrp_id` |  |  |
| `ValuationType` |  | |  | `bwtar` |  |  |
| `_Plant` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_Batch` | | ✓ | | | | |
| `_UnitOfMeasure` | | ✓ | | | | |
| `_ControlParameter` | | ✓ | | | | |
| `_ToleranceGroup` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Plant` | `I_Plant` | [0..1] |
| `_Product` | `I_Product` | [0..1] |
| `_Batch` | `I_Batch` | [0..1] |
| `_UnitOfMeasure` | `I_UnitOfMeasure` | [0..1] |
| `_ControlParameter` | `I_DSD_TourControlParameter` | [0..1] |
| `_ToleranceGroup` | `I_DSD_SettlementToleranceGroup` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Settlement Quantity Determination'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #L,
  dataClass: #TRANSACTIONAL
  }
@VDM: { viewType: #BASIC }
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE ]

define view entity I_DSD_SettlmtQtyDetermination 
  as select from /dsd/sl_sld_qdet as _Determination
  
  association [0..1] to I_Plant                        as _Plant                  on  $projection.Plant    = _Plant.Plant
  association [0..1] to I_Product                      as _Product                on  $projection.Material = _Product.Product
  association [0..1] to I_Batch                        as _Batch                  on  $projection.Plant    = _Batch.Plant
                                                                                  and $projection.Material = _Batch.Material
                                                                                  and $projection.Batch    = _Batch.Batch
                                                                                  
  association [0..1] to I_UnitOfMeasure                as _UnitOfMeasure          on  $projection.UnitOfMeasure                  = _UnitOfMeasure.UnitOfMeasure    
  association [0..1] to I_DSD_TourControlParameter     as _ControlParameter       on  $projection.CtrlParamForQuantityDifference = _ControlParameter.CtrlParamForQuantityDifference
  association [0..1] to I_DSD_SettlementToleranceGroup as _ToleranceGroup         on  $projection.SettlementToleranceGroup       = _ToleranceGroup.SettlementToleranceGroup 
  
{
  key sld_doc_id            as DSD_SettlementDocument,
  key matnr                 as Material,
  key assigned_seq          as AssgdSettlementSequenceNumber,
  key reason                as SettlementDifferenceReason,
  key spec_return           as CtrlParamForQuantityDifference,
  key plant                 as Plant,
  key charg                 as Batch,
      @Semantics:{ quantity: { unitOfMeasure: 'UnitOfMeasure' } }  
      quan_planned          as TargetQuantity,
      @Semantics:{ quantity: { unitOfMeasure: 'UnitOfMeasure' } }  
      quan_lc_init          as SettlmtInitLoadingConfQuantity,
      @Semantics:{ quantity: { unitOfMeasure: 'UnitOfMeasure' } }  
      quan_lc_init_dif      as SettlmtInitLoadgConfDiffQty,
      @Semantics:{ quantity: { unitOfMeasure: 'UnitOfMeasure' } }        
      quan_co_init          as SettlmtInitialCheckOutQuantity,
      @Semantics:{ quantity: { unitOfMeasure: 'UnitOfMeasure' } }        
      quan_co_init_dif      as SettlmtInitChkOutDiffQuantity,
      @Semantics:{ quantity: { unitOfMeasure: 'UnitOfMeasure' } }        
      quan_rld_plan         as SettlmtPlannedReloadQuantity,
      @Semantics:{ quantity: { unitOfMeasure: 'UnitOfMeasure' } }        
      quan_rld_ci           as SettlmtReloadCheckInQuantity,
      @Semantics:{ quantity: { unitOfMeasure: 'UnitOfMeasure' } }        
      quan_rld_lc           as SettlmtRldLoadingConfQuantity,
      @Semantics:{ quantity: { unitOfMeasure: 'UnitOfMeasure' } }        
      quan_rld_lc_diff      as SettlmtRldLoadgConfDiffQty,
      @Semantics:{ quantity: { unitOfMeasure: 'UnitOfMeasure' } }        
      quan_rld_co           as SettlmtReloadCheckOutQuantity,
      @Semantics:{ quantity: { unitOfMeasure: 'UnitOfMeasure' } }        
      quan_rld_co_diff      as SettlmtRldCheckOutDiffQuantity,
      @Semantics:{ quantity: { unitOfMeasure: 'UnitOfMeasure' } }        
      quan_ci_plan          as SettlmtPlndFnlCheckInQuantity,
      @Semantics:{ quantity: { unitOfMeasure: 'UnitOfMeasure' } }        
      quan_ci               as SettlmtFinalCheckInQuantity,
      @Semantics:{ quantity: { unitOfMeasure: 'UnitOfMeasure' } }        
      quan_ci_diff          as SettlmtFnlCheckInDiffQuantity,
      @Semantics:{ quantity: { unitOfMeasure: 'UnitOfMeasure' } }        
      quan_lc_plan_sum      as SettlmtPlndLoadgConfQuantity,
      @Semantics:{ quantity: { unitOfMeasure: 'UnitOfMeasure' } }        
      quan_lc_sum           as SettlementLoadingConfQuantity,
      @Semantics:{ quantity: { unitOfMeasure: 'UnitOfMeasure' } }        
      quan_lc_diff_sum      as SettlmtLoadgConfDiffQuantity,
      @Semantics:{ quantity: { unitOfMeasure: 'UnitOfMeasure' } }        
      quan_co_plan_sum      as SettlmtPlannedCheckOutQuantity,
      @Semantics:{ quantity: { unitOfMeasure: 'UnitOfMeasure' } }        
      quan_co_sum           as SettlementCheckOutQuantity,
      @Semantics:{ quantity: { unitOfMeasure: 'UnitOfMeasure' } }        
      quan_co_diff_sum      as SettlmtCheckOutDiffQuantity,
      @Semantics:{ quantity: { unitOfMeasure: 'UnitOfMeasure' } }        
      quan_ci_plan_sum      as SettlmtPlannedCheckInQuantity,
      @Semantics:{ quantity: { unitOfMeasure: 'UnitOfMeasure' } }        
      quan_ci_sum           as SettlementCheckInQuantity,
      @Semantics:{ quantity: { unitOfMeasure: 'UnitOfMeasure' } }        
      quan_ci_diff_sum      as SettlementCheckInDiffQuantity,
      uom_for_quan          as UnitOfMeasure,
      tolgrp_id             as SettlementToleranceGroup,
      bwtar                 as ValuationType,
      
      _Plant,
      _Product,
      _Batch,
      _UnitOfMeasure,
      _ControlParameter,
      _ToleranceGroup      
}
```
