---
name: I_ORDERTYPEDETAILS
description: Ordertypedetails
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
# I_ORDERTYPEDETAILS

**Ordertypedetails**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Plant` | `typ.werks` |
| key `OrderType` | `typ.auart` |
| `OrderCategory` | `cast(typ.autyp as pph_autyp preserving type)` |
| `BillOfOperationsType` | `cast(typ.plnty as billofoperationstype preserving type)` |
| `SettlementDefaultRule` | `typ.dfreg` |
| `VarianceKey` | `typ.awsls` |
| `InspectionLotType` | `typ.pruefart` |
| `BOMExplosionApplication` | `typ.capid` |
| `PlannedCostsCostingVariant` | `typ.klvarp` |
| `ActualCostsCostingVariant` | `typ.klvari` |
| `BillOfOperationSelection` | `typ.arbpa` |
| `ResultAnalysisInternalID` | `typ.abgsl` |
| `LeadTimeReductionStrategy` | `typ.rstra` |
| `AcctAssgmtIsDfndAtOpLvl` | `typ.objnr_vorg` |
| `OrderIsNotCostedAutomatically` | `typ.naucost` |
| `ProductCostCollectorIsCostObj` | `typ.pkosa` |
| `ProductionVersionSelection` | `typ.pvsel` |
| `EventBasedProcessingKey` | `typ.ebw_key` |
| `StsChgDocIsActiveForHeader` | `cast(chgkz_head as vdm_chgkz_h preserving type)` |
| `StsChgDocIsActiveForOperation` | `cast(chgkz_opr as vdm_chgkz_o preserving type)` |
| `StsChgDocIsActiveForComponent` | `cast(chgkz_cmp as vdm_chgkz_c preserving type)` |
| `StsChgDocIsActiveForPRT` | `cast(chgkz_prt as vdm_chgkz_p preserving type)` |
| `_Plant` | *Association* |
| `_OrderCategory` | *Association* |
| `_BillOfOperationsType` | *Association* |
| `_InspectionLotType` | *Association* |
| `_ActualCostsCostingVariant` | *Association* |
| `_PlannedCostsCostingVariant` | *Association* |
| `_LeadTimeReductionStrategy` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Plant` | `I_Plant` | [0..1] |
| `_OrderCategory` | `I_OrderCategory` | [0..1] |
| `_BillOfOperationsType` | `I_BillOfOperationsType` | [0..1] |
| `_InspectionLotType` | `I_InspectionLotType` | [0..1] |
| `_ActualCostsCostingVariant` | `I_CostingVariant` | [0..1] |
| `_PlannedCostsCostingVariant` | `I_CostingVariant` | [0..1] |
| `_LeadTimeReductionStrategy` | `I_LeadTimeReductionStrategy` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPORDERTYPEDET'
@AbapCatalog.buffering: {status: #ACTIVE, type: #FULL, numberOfKeyFields: 000}
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Consumption.ranked: true
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel.representativeKey: 'OrderType'
@ObjectModel.semanticKey: ['Plant', 'OrderType']
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Order Type Details'

define view I_OrderTypeDetails as select from t399x as typ

  association [0..1] to I_Plant                     as _Plant                      on  $projection.Plant = _Plant.Plant
  association [0..1] to I_OrderCategory             as _OrderCategory              on  $projection.OrderCategory = _OrderCategory.OrderCategory
  association [0..1] to I_BillOfOperationsType      as _BillOfOperationsType       on  $projection.BillOfOperationsType = _BillOfOperationsType.BillOfOperationsType
  association [0..1] to I_InspectionLotType         as _InspectionLotType          on  $projection.InspectionLotType = _InspectionLotType.InspectionLotType
  association [0..1] to I_CostingVariant            as _ActualCostsCostingVariant  on  $projection.ActualCostsCostingVariant  = _ActualCostsCostingVariant.CostingVariant                                                                                   
  association [0..1] to I_CostingVariant            as _PlannedCostsCostingVariant on  $projection.PlannedCostsCostingVariant = _PlannedCostsCostingVariant.CostingVariant 
  association [0..1] to I_LeadTimeReductionStrategy as _LeadTimeReductionStrategy  on  $projection.LeadTimeReductionStrategy = _LeadTimeReductionStrategy.LeadTimeReductionStrategy
                                                                                   and $projection.Plant = _LeadTimeReductionStrategy.Plant
{
      @ObjectModel.foreignKey.association: '_Plant'
  key typ.werks      as Plant,
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  key typ.auart      as OrderType,

      @ObjectModel.foreignKey.association: '_OrderCategory'
      cast(typ.autyp as pph_autyp preserving type)            as OrderCategory,

      @ObjectModel.foreignKey.association: '_BillOfOperationsType'
      cast(typ.plnty as billofoperationstype preserving type) as BillOfOperationsType,
      typ.dfreg      as SettlementDefaultRule,
      typ.awsls      as VarianceKey,
      @ObjectModel.foreignKey.association: '_InspectionLotType'
      typ.pruefart   as InspectionLotType,
      typ.capid      as BOMExplosionApplication,
      @ObjectModel.foreignKey.association: '_PlannedCostsCostingVariant'
      typ.klvarp     as PlannedCostsCostingVariant,
      @ObjectModel.foreignKey.association: '_ActualCostsCostingVariant'
      typ.klvari     as ActualCostsCostingVariant,
      typ.arbpa      as BillOfOperationSelection,
      typ.abgsl      as ResultAnalysisInternalID,
      @ObjectModel.foreignKey.association: '_LeadTimeReductionStrategy'
      typ.rstra      as LeadTimeReductionStrategy,
      typ.objnr_vorg as AcctAssgmtIsDfndAtOpLvl,
      typ.naucost    as OrderIsNotCostedAutomatically,
      typ.pkosa      as ProductCostCollectorIsCostObj,
      typ.pvsel      as ProductionVersionSelection,
      typ.ebw_key    as EventBasedProcessingKey,
      cast(chgkz_head as vdm_chgkz_h preserving type) as StsChgDocIsActiveForHeader,
      cast(chgkz_opr  as vdm_chgkz_o preserving type) as StsChgDocIsActiveForOperation,
      cast(chgkz_cmp  as vdm_chgkz_c preserving type) as StsChgDocIsActiveForComponent,
      cast(chgkz_prt  as vdm_chgkz_p preserving type) as StsChgDocIsActiveForPRT,

      // Associations
      _Plant,
      _OrderCategory,
      _BillOfOperationsType,
      _InspectionLotType,
      _ActualCostsCostingVariant,
      _PlannedCostsCostingVariant,
      _LeadTimeReductionStrategy
};
```
