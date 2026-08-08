---
name: I_MRPGROUPCONTROLPARAMETER
description: "Mrpgroupcontrolparameter"
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - interface-view
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_MRPGROUPCONTROLPARAMETER

**Mrpgroupcontrolparameter**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MRPGroup` | ✓ | |  | `mtart` |  |  |
| `MRPPlant` | ✓ | |  | `werks` |  |  |
| `PlanningStrategyGroup` |  | |  | `strgr` |  |  |
| `ReschedulingHorizonInWorkdays` |  | |  | `cast(umthz as vdm_umthz preserving type)` |  |  |
| `PlanningHorizonInWorkdays` |  | |  | `cast(plahz as vdm_plahz preserving type)` |  |  |
| `PlanningTimeFenceInDays` |  | |  | `fixhz` |  |  |
| `ScheduleLinesCreationCode` |  | |  | `lifkz` |  |  |
| `ATPCheckingRule` |  | |  | `cast(prreg as bmg_prreg preserving type)` |  |  |
| `ProdRqmtsConsumptionMode` |  | |  | `cast(vrmod as /sapapo/vrmod preserving type)` |  |  |
| `BackwardCnsmpnPeriodInWorkDays` |  | |  | `cast(vint1 as vdm_vint1 preserving type)` |  |  |
| `FwdConsumptionPeriodInWorkDays` |  | |  | `cast(vint2 as vdm_vint2 preserving type)` |  |  |
| `NmbrOfDaysAfterMatlMustBePlnd` |  | |  | `cast(andis as vdm_andis preserving type)` |  |  |
| `OrderType` |  | |  | `auart` |  |  |
| `ProductSafetyTimeMRPRelevance` |  | |  | `cast(shflg as pph_shflg preserving type)` |  |  |
| `SafetyTimeInWorkDays` |  | |  | `shzet` |  |  |
| `PlndOrdProcessingActionControl` |  | |  | `mdach` |  |  |
| `PlndIndepRqmtAdjustment` |  | |  | `cast(rvpkz as vdm_rvpkz preserving type)` |  |  |
| `PlndIndepRqmtAdjmtTimePeriod` |  | |  | `cast(resvp as vdm_resvp preserving type)` |  |  |
| `PurReqnHandoverIsRequired` |  | |  | `preqapproval` |  |  |
| `_MRPPlant` | | ✓ | | | | |
| `_MRPGroup` | | ✓ | | | | |
| `_PlannedOrderActionControl` | | ✓ | | | | |
| `_PlanningStrategyGroup` | | ✓ | | | | |
| `_ProductConsumptionMode` | | ✓ | | | | |
| `_SafetyTimeMRPRelevance` | | ✓ | | | | |
| `_OrderType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MRPPlant` | `I_Plant` | [1..1] |
| `_MRPGroup` | `I_MRPGroup` | [1..1] |
| `_PlannedOrderActionControl` | `I_PlannedOrderActionControl` | [0..1] |
| `_PlanningStrategyGroup` | `I_PlanningStrategyGroup` | [0..1] |
| `_ProductConsumptionMode` | `I_ProdConsumptionMode` | [0..1] |
| `_SafetyTimeMRPRelevance` | `I_ProdSafetyTimeMRPRelevance` | [0..1] |
| `_OrderType` | `I_OrderType` | [0..1] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
@Analytics.dataExtraction.enabled: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #NONE
@ObjectModel.sapObjectNodeType.name: 'MRPGroup'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #SQL_DATA_SOURCE]
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'MRP Group Control Parameter'
// CDS view entity for the MRP-group-based control parameters
// For text, foreign key and value help purposes refer to CDS view I_MRPGroup
// For the plant-based control parameters (T399D) refer to I_MRPPlantControlParameter

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_MRPGroupControlParameter
  as select from t438m

  association [1..1] to I_Plant    as _MRPPlant on  $projection.MRPPlant = _MRPPlant.Plant
  association [1..1] to I_MRPGroup as _MRPGroup on  $projection.MRPGroup = _MRPGroup.MRPGroup 
                                                and $projection.MRPPlant = _MRPGroup.MRPPlant
                                                    
  association [0..1] to I_PlannedOrderActionControl  as _PlannedOrderActionControl on $projection.PlndOrdProcessingActionControl = _PlannedOrderActionControl.PlannedOrderActionControl
  association [0..1] to I_PlanningStrategyGroup      as _PlanningStrategyGroup     on $projection.PlanningStrategyGroup = _PlanningStrategyGroup.PlanningStrategyGroup
  association [0..1] to I_ProdConsumptionMode        as _ProductConsumptionMode    on $projection.ProdRqmtsConsumptionMode = _ProductConsumptionMode.ProdRqmtsConsumptionMode
  association [0..1] to I_ProdSafetyTimeMRPRelevance as _SafetyTimeMRPRelevance    on $projection.ProductSafetyTimeMRPRelevance = _SafetyTimeMRPRelevance.ProductSafetyTimeMRPRelevance
  association [0..1] to I_OrderType                  as _OrderType                 on $projection.OrderType = _OrderType.OrderType
{
      // Key
      @ObjectModel.foreignKey.association: '_MRPGroup'
  key mtart                                        as MRPGroup,
      @ObjectModel.foreignKey.association: '_MRPPlant'
  key werks                                        as MRPPlant,

      // Control parameter
      @ObjectModel.foreignKey.association: '_PlanningStrategyGroup'
      strgr                                        as PlanningStrategyGroup,
      cast(umthz as vdm_umthz preserving type)     as ReschedulingHorizonInWorkdays,
      cast(plahz as vdm_plahz preserving type)     as PlanningHorizonInWorkdays,
      fixhz                                        as PlanningTimeFenceInDays,
      lifkz                                        as ScheduleLinesCreationCode,
      cast(prreg as bmg_prreg preserving type)     as ATPCheckingRule,
      @ObjectModel.foreignKey.association: '_ProductConsumptionMode'
      cast(vrmod as /sapapo/vrmod preserving type) as ProdRqmtsConsumptionMode,
      cast(vint1 as vdm_vint1 preserving type)     as BackwardCnsmpnPeriodInWorkDays,
      cast(vint2 as vdm_vint2 preserving type)     as FwdConsumptionPeriodInWorkDays,
      cast(andis as vdm_andis preserving type)     as NmbrOfDaysAfterMatlMustBePlnd,
      @ObjectModel.foreignKey.association: '_OrderType'
      auart                                        as OrderType,
      @ObjectModel.foreignKey.association: '_SafetyTimeMRPRelevance'
      cast(shflg as pph_shflg preserving type)     as ProductSafetyTimeMRPRelevance,
      shzet                                        as SafetyTimeInWorkDays,
      @ObjectModel.foreignKey.association: '_PlannedOrderActionControl'
      mdach                                        as PlndOrdProcessingActionControl,
--    @ObjectModel.foreignKey.association: '_PlndIndepRqmtAdjustment'   
      cast(rvpkz as vdm_rvpkz preserving type)     as PlndIndepRqmtAdjustment,
      cast(resvp as vdm_resvp preserving type)     as PlndIndepRqmtAdjmtTimePeriod,
      preqapproval                                 as PurReqnHandoverIsRequired,

      // Associations
      _MRPPlant,
      _MRPGroup,
      _OrderType,
      _PlannedOrderActionControl,
      _PlanningStrategyGroup,
      _ProductConsumptionMode,
      _SafetyTimeMRPRelevance
};
```
