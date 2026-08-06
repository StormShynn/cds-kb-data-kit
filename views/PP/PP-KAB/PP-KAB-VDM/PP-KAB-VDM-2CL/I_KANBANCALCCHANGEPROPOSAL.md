---
name: I_KANBANCALCCHANGEPROPOSAL
description: Kanbancalcchangeproposal
app_component: PP-KAB-VDM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-KAB
  - PP-KAB-VDM
  - interface-view
  - component:PP-KAB-VDM-2CL
  - lob:Manufacturing
---
# I_KANBANCALCCHANGEPROPOSAL

**Kanbancalcchangeproposal**

| Property | Value |
|---|---|
| App Component | `PP-KAB-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `KanbanControlCycle` | `pknum` |
| `KnbnCalcChgPrpslCreationDate` | `kcedt` |
| `KnbnControlCycleNextChangeDate` | `nexdt` |
| `KnbnCalcNextNumberOfContainers` | `nexaz` |
| `KnbnCalcNextContainerQty` | `nexmg` |
| `KnbnCalcNextTriggerPointVal` | `nextri` |
| `KnbnCalcEvalPeriodStartDate` | `kcvdt` |
| `KnbnCalcEvalPeriodEndDate` | `kcbdt` |
| `MaxNmbrOfKnbnCtnsInEvalPerd` | `pcmaa` |
| `MaxKnbnCtnQtyInEvalPerd` | `pcmam` |
| `MinNmbrOfKnbnCtnsInEvalPerd` | `pcmia` |
| `MinKnbnCtnQtyInEvalPerd` | `pcmim` |
| `RefillTmeNmbrOfKnbnCtns` | `pcmaa_rft` |
| `RefillTmeKnbnCtnQty` | `pcmam_rft` |
| `WaitTmeNmbrOfKnbnCtns` | `pcmaa_wt` |
| `WaitTmeKnbnCtnQty` | `pcmam_wt` |
| `TranspTmeNmbrOfKnbnCtns` | `pcmaa_itt` |
| `TranspTmeKnbnCtnQty` | `pcmam_itt` |
| `PullIntvlNmbrOfKnbnCtns` | `pcmaa_pit` |
| `PullIntvlKnbnCtnQty` | `pcmam_pit` |
| `CalBufNmbrOfKnbnCtns` | `pcmaa_calbuf` |
| `CalBufKnbnCtnQty` | `pcmam_calbuf` |
| `RqmtFluctuationNmbrOfKnbnCtn` | `pcmaa_volat` |
| `RqmtFluctuationKnbnCtnQty` | `pcmam_volat` |
| `RqmtBufNmbrOfKnbnCtns` | `pcmaa_dmbuf` |
| `RqmtBufKnbnCtnQty` | `pcmam_dmbuf` |
| `SupBufNmbrOfKnbnCtns` | `pcmaa_supbuf` |
| `SupBufKnbnCtnQty` | `pcmam_supbuf` |
| `ReplnmtLeadTmeNmbrOfKnbnCtns` | `pcmaa_nopara` |
| `ReplnmtLeadTmeKnbnCtnQty` | `pcmam_nopara` |
| `SftyFctrNmbrOfKnbnCtns` | `pcmaa_sfc` |
| `SftyFctrKnbnCtnQty` | `pcmam_sfc` |
| `CapBufNmbrOfCtns` | `pcmaa_capabuf` |
| `CapBufKnbnCtnQty` | `pcmam_capabuf` |
| `PlanningWorkCenter` | `capa_wrkct` |
| `KanbanCtrlCycReplnmtTriggerGrp` | `triggr` |
| `KanbanCalcTotalCapUtilznPct` | `capa_utl_t` |
| `KanbanCalcProdnCapUtilznPct` | `capa_utl_p` |
| `KanbanCalcSetupCapUtilznPct` | `capa_utl_s` |
| `NrOfDaysWthoutRqmtsToBeIgnrd` | `kigdays` |
| `MRPPlanningScenario` | `plscn` |
| `BaseUnit` | `_KanbanControlCycle.BaseUnit` |
| `Plant` | `_KanbanControlCycle.Plant` |
| `Supplier` | `_KanbanControlCycle.Supplier` |
| `_KanbanControlCycle` | *Association* |
| `_Supplier` | *Association* |
| `_SupplierCompanyByPlant` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_KanbanControlCycle` | `I_KanbanControlCycle` | [1..1] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_SupplierCompanyByPlant` | `I_SupplierCompanyByPlant` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IKNBCALCCHGPR'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Kanban Calculation Change Proposals'

@Metadata.ignorePropagatedAnnotations: true

@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ObjectModel.representativeKey: 'KanbanControlCycle'
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #TRANSACTIONAL }
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

define view I_KanbanCalcChangeProposal
  as select from pkpr
  association [1..1] to I_KanbanControlCycle     as _KanbanControlCycle     on  $projection.KanbanControlCycle = _KanbanControlCycle.KanbanControlCycle
 
  // Only for DCL
  association [0..1] to I_Supplier               as _Supplier               on  $projection.supplier = _Supplier.Supplier
  association [0..1] to I_SupplierCompanyByPlant as _SupplierCompanyByPlant on  $projection.supplier = _SupplierCompanyByPlant.Supplier
                                                                            and $projection.plant    = _SupplierCompanyByPlant.Plant
  {
    key pknum         as KanbanControlCycle,
        kcedt         as KnbnCalcChgPrpslCreationDate,
        nexdt         as KnbnControlCycleNextChangeDate,
        nexaz         as KnbnCalcNextNumberOfContainers,
        @Semantics.quantity.unitOfMeasure: 'BaseUnit'
        nexmg         as KnbnCalcNextContainerQty,
        nextri        as KnbnCalcNextTriggerPointVal,
        kcvdt         as KnbnCalcEvalPeriodStartDate,
        kcbdt         as KnbnCalcEvalPeriodEndDate,
        pcmaa         as MaxNmbrOfKnbnCtnsInEvalPerd,
        @Semantics.quantity.unitOfMeasure: 'BaseUnit'
        pcmam         as MaxKnbnCtnQtyInEvalPerd,
        pcmia         as MinNmbrOfKnbnCtnsInEvalPerd,
        @Semantics.quantity.unitOfMeasure: 'BaseUnit'
        pcmim         as MinKnbnCtnQtyInEvalPerd,
        pcmaa_rft     as RefillTmeNmbrOfKnbnCtns,
        @Semantics.quantity.unitOfMeasure: 'BaseUnit'
        pcmam_rft     as RefillTmeKnbnCtnQty,
        pcmaa_wt      as WaitTmeNmbrOfKnbnCtns,
        @Semantics.quantity.unitOfMeasure: 'BaseUnit'
        pcmam_wt      as WaitTmeKnbnCtnQty,
        pcmaa_itt     as TranspTmeNmbrOfKnbnCtns,
        @Semantics.quantity.unitOfMeasure: 'BaseUnit'
        pcmam_itt     as TranspTmeKnbnCtnQty,
        pcmaa_pit     as PullIntvlNmbrOfKnbnCtns,
        @Semantics.quantity.unitOfMeasure: 'BaseUnit'
        pcmam_pit     as PullIntvlKnbnCtnQty,
        pcmaa_calbuf  as CalBufNmbrOfKnbnCtns,
        @Semantics.quantity.unitOfMeasure: 'BaseUnit'
        pcmam_calbuf  as CalBufKnbnCtnQty,
        pcmaa_volat   as RqmtFluctuationNmbrOfKnbnCtn,
        @Semantics.quantity.unitOfMeasure: 'BaseUnit'
        pcmam_volat   as RqmtFluctuationKnbnCtnQty,
        pcmaa_dmbuf   as RqmtBufNmbrOfKnbnCtns,
        @Semantics.quantity.unitOfMeasure: 'BaseUnit'
        pcmam_dmbuf   as RqmtBufKnbnCtnQty,
        pcmaa_supbuf  as SupBufNmbrOfKnbnCtns,
        @Semantics.quantity.unitOfMeasure: 'BaseUnit'
        pcmam_supbuf  as SupBufKnbnCtnQty,
        pcmaa_nopara  as ReplnmtLeadTmeNmbrOfKnbnCtns,
        @Semantics.quantity.unitOfMeasure: 'BaseUnit'
        pcmam_nopara  as ReplnmtLeadTmeKnbnCtnQty,
        pcmaa_sfc     as SftyFctrNmbrOfKnbnCtns,
        @Semantics.quantity.unitOfMeasure: 'BaseUnit'
        pcmam_sfc     as SftyFctrKnbnCtnQty,
        pcmaa_capabuf as CapBufNmbrOfCtns,
        @Semantics.quantity.unitOfMeasure: 'BaseUnit'
        pcmam_capabuf as CapBufKnbnCtnQty,
        capa_wrkct    as PlanningWorkCenter,
        triggr        as KanbanCtrlCycReplnmtTriggerGrp,
        capa_utl_t    as KanbanCalcTotalCapUtilznPct,
        capa_utl_p    as KanbanCalcProdnCapUtilznPct,
        capa_utl_s    as KanbanCalcSetupCapUtilznPct,
        kigdays       as NrOfDaysWthoutRqmtsToBeIgnrd,
        plscn         as MRPPlanningScenario,
        _KanbanControlCycle.BaseUnit,
        
        // Associations
        _KanbanControlCycle,
        
        // Only for DCL 
        @Consumption.hidden: true
        _KanbanControlCycle.Plant,
        @Consumption.hidden: true
        _KanbanControlCycle.Supplier,
        @Consumption.hidden: true
        _Supplier,
        @Consumption.hidden: true
        _SupplierCompanyByPlant 
  
}
```
