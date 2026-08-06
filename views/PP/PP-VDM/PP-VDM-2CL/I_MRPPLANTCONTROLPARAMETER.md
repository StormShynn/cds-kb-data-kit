---
name: I_MRPPLANTCONTROLPARAMETER
description: Mrpplantcontrolparameter
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
  - plant
  - component:PP-VDM-2CL
  - lob:Manufacturing
  - bo:Plant
---
# I_MRPPLANTCONTROLPARAMETER

**Mrpplantcontrolparameter**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `MRPPlant` | `cast(werks as werks_d preserving type)` |
| `MRPPlanningCalendar` | `cast(mrrpp as mrppp preserving type)` |
| `MRPController` | `cast(fedis as pph_dispo preserving type)` |
| `BOMPrioritizedVersion` | `cast(cslid as stlid preserving type)` |
| `ReferencePlant` | `cast(refwk as refwk preserving type)` |
| `OrderType` | `cast(auart as aufart preserving type)` |
| `ProcessOrderType` | `cast(auar2 as auar2 preserving type)` |
| `ReschedulingHorizonInWorkdays` | `cast(umthz as vdm_umthz preserving type)` |
| `PlanningHorizonInWorkdays` | `cast(plahz as vdm_plahz preserving type)` |
| `ScheduleLinesCreationCode` | `lifkz` |
| `ATPCheckingRule` | `cast(prreg as bmg_prreg preserving type)` |
| `StkInTransfIsAvailForPlng` | `kzumb` |
| `StartDateInThePastIsAllowed` | `vertr` |
| `PlannedMaterialListIsCreated` | `anzls` |
| `MRPIsActiveForMRPAreasAtPlant` | `dbepl` |
| `BlockedStockIsIncludedInMRP` | `xfan1` |
| `RestrictedBatchStockIsIncluded` | `cast(nfvbc as vdm_nfvbc preserving type)` |
| `PurchasingProcessingDuration` | `cast(bztek as vdm_bztek preserving type)` |
| `_MRPPlant` | *Association* |
| `_ReferencePlant` | *Association* |
| `_MRPController` | *Association* |
| `_MRPPlanningCalendar` | *Association* |
| `_OrderType` | *Association* |
| `_ProcessOrderType` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MRPPlant` | `I_Plant` | [1..1] |
| `_ReferencePlant` | `I_Plant` | [0..1] |
| `_MRPController` | `I_MRPController` | [0..1] |
| `_MRPPlanningCalendar` | `I_MRPPlanningPeriod` | [0..1] |
| `_OrderType` | `I_OrderType` | [0..1] |
| `_ProcessOrderType` | `I_OrderType` | [0..1] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@Analytics.technicalName: 'IMRPPLNTCTRLPAR'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'MRPPlant'
@ObjectModel.sapObjectNodeType.name: 'Plant'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #SQL_DATA_SOURCE]
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'MRP Plant Control Parameters'
// CDS view entity for the plant-based MRP control parameters
// For MRP-group-based control parameters (T438M) refer to I_MRPGroupControlParameter

define view entity I_MRPPlantControlParameter
  as select from t399d

  association [1..1] to I_Plant                as _MRPPlant            on  $projection.MRPPlant = _MRPPlant.Plant
  association [0..1] to I_Plant                as _ReferencePlant      on  $projection.ReferencePlant = _ReferencePlant.Plant  
  association [0..1] to I_MRPController        as _MRPController       on  $projection.MRPPlant      = _MRPController.Plant
                                                                       and $projection.MRPController = _MRPController.MRPController
  association [0..1] to I_MRPPlanningPeriod    as _MRPPlanningCalendar on  $projection.MRPPlant            = _MRPPlanningCalendar.MRPPlant
                                                                       and $projection.MRPPlanningCalendar = _MRPPlanningCalendar.MRPPlanningCalendar  
  association [0..1] to I_OrderType            as _OrderType           on  $projection.OrderType = _OrderType.OrderType
  association [0..1] to I_OrderType            as _ProcessOrderType    on  $projection.ProcessOrderType = _ProcessOrderType.OrderType
{
      // Key
  key cast(werks as werks_d preserving type)   as MRPPlant,

      // Control parameter
--    @ObjectModel.foreignKey.association: '_MRPPlanningCalendar'      
      cast(mrrpp as mrppp  preserving type)    as MRPPlanningCalendar,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MRPControllerVH', element: 'MRPController' } } ]
      cast(fedis as pph_dispo preserving type) as MRPController,
      cast(cslid as stlid preserving type)     as BOMPrioritizedVersion,
      @ObjectModel.foreignKey.association: '_ReferencePlant'
      cast(refwk as refwk preserving type)     as ReferencePlant,
      @ObjectModel.foreignKey.association: '_OrderType'
      cast(auart as aufart preserving type)    as OrderType,
      @ObjectModel.foreignKey.association: '_ProcessOrderType'      
      cast(auar2 as auar2 preserving type)     as ProcessOrderType,
      cast(umthz as vdm_umthz preserving type) as ReschedulingHorizonInWorkdays,
      cast(plahz as vdm_plahz preserving type) as PlanningHorizonInWorkdays,
      lifkz                                    as ScheduleLinesCreationCode,
      cast(prreg as bmg_prreg preserving type) as ATPCheckingRule,
      kzumb                                    as StkInTransfIsAvailForPlng,
      vertr                                    as StartDateInThePastIsAllowed,
      anzls                                    as PlannedMaterialListIsCreated,
      dbepl                                    as MRPIsActiveForMRPAreasAtPlant,
      xfan1                                    as BlockedStockIsIncludedInMRP,
      cast(nfvbc as vdm_nfvbc preserving type) as RestrictedBatchStockIsIncluded,
      cast(bztek as vdm_bztek preserving type) as PurchasingProcessingDuration,
      
      // Associations
      _MRPPlant,
      _ReferencePlant,
      _MRPController,
      _MRPPlanningCalendar,
      _OrderType,
      _ProcessOrderType
};
```
