---
name: I_ORDERTYPE
description: Ordertype
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
# I_ORDERTYPE

**Ordertype**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `OrderType` | `typ.auart` |
| `OrderCategory` | `cast(typ.autyp as pph_autyp preserving type)` |
| `OrderNumberRange` | `typ.numkr` |
| `CommitmentsMgmtActvtnStatus` | `typ.obligo` |
| `StatusProfile` | `typ.stsma` |
| `OperationStatusProfile` | `cast(typ.vrg_stsma as vdm_stsma_op preserving type)` |
| `ControllingSettlementProfile` | `typ.aprof` |
| `PlanningProfile` | `typ.pprof` |
| `BudgetProfile` | `typ.bprof` |
| `ExecutionServiceProfile` | `typ.exec_profile` |
| `ControllingObjectClass` | `cast(typ.scope as pph_scope preserving type)` |
| `FunctionalArea` | `typ.func_area` |
| `CtrlgTotalsRecordActvtnStatus` | `typ.copar` |
| `ResidenceTime1` | `typ.resz1` |
| `ResidenceTime2` | `typ.resz2` |
| `OrderMasterDataLayout` | `typ.layout` |
| `TextObjectForm` | `typ.tdform` |
| `ConfigDeprecationCode` | `typ.configurationdeprecationcode` |
| `OrderIsToBeClassified` | `typ.aufkl` |
| `OrderIsReleasedUponCreation` | `typ.relkz` |
| `OrderHasStatusChangeDocuments` | `typ.chgkz` |
| `SettlementIsNotRequired` | `typ.nabpf` |
| `OrdIsUsedInIntegratedPlanning` | `typ.plint` |
| `NetworkIsForPlanning` | `typ.vorpl` |
| `RevenuePostingIsAllowed` | `cast(typ.erloese as vdm_pp_erloese preserving type)` |
| `CollectiveOrderHasAutoGoodsMvt` | `cast(typ.colordproc as vdm_colordproc preserving type)` |
| `_Text` | *Association* |
| `_OrderCategory` | *Association* |
| `_FunctionalArea` | *Association* |
| `_ControllingObjectClass` | *Association* |
| `_OrderStatusProfile` | *Association* |
| `_OperationStatusProfile` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_OrderTypeText` | [0..*] |
| `_OrderCategory` | `I_OrderCategory` | [0..1] |
| `_FunctionalArea` | `I_FunctionalArea` | [0..1] |
| `_ControllingObjectClass` | `I_ControllingObjectClass` | [0..1] |
| `_OrderStatusProfile` | `I_StatusProfile` | [0..1] |
| `_OperationStatusProfile` | `I_StatusProfile` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPORDERTYPE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.buffering: {status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 001}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Consumption.ranked: true
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.compositionRoot: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'OrderType'
@ObjectModel.sapObjectNodeType.name: 'WorkOrderType'
@ObjectModel.semanticKey: ['OrderType']
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Order Type'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_OrderType
  as select from t003o as typ

  association [0..*] to I_OrderTypeText          as _Text                   on $projection.OrderType = _Text.OrderType
  association [0..1] to I_OrderCategory          as _OrderCategory          on $projection.OrderCategory = _OrderCategory.OrderCategory
  association [0..1] to I_FunctionalArea         as _FunctionalArea         on $projection.FunctionalArea = _FunctionalArea.FunctionalArea
  association [0..1] to I_ControllingObjectClass as _ControllingObjectClass on $projection.ControllingObjectClass = _ControllingObjectClass.ControllingObjectClass
  association [0..1] to I_StatusProfile          as _OrderStatusProfile     on $projection.StatusProfile = _OrderStatusProfile.StatusProfile
  association [0..1] to I_StatusProfile          as _OperationStatusProfile on $projection.OperationStatusProfile = _OperationStatusProfile.StatusProfile

{
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
      @ObjectModel.text.association: '_Text'
  key typ.auart                                           as OrderType,
      @ObjectModel.foreignKey.association: '_OrderCategory'
      cast(typ.autyp as pph_autyp preserving type)        as OrderCategory,

      // Assignments
      typ.numkr                                           as OrderNumberRange,
      typ.obligo                                          as CommitmentsMgmtActvtnStatus,
      @ObjectModel.foreignKey.association: '_OrderStatusProfile'
      typ.stsma                                           as StatusProfile,
      @ObjectModel.foreignKey.association: '_OperationStatusProfile'
      cast(typ.vrg_stsma as vdm_stsma_op preserving type) as OperationStatusProfile,
      typ.aprof                                           as ControllingSettlementProfile,
      typ.pprof                                           as PlanningProfile,
      typ.bprof                                           as BudgetProfile,
      typ.exec_profile                                    as ExecutionServiceProfile,
      cast(typ.scope as pph_scope preserving type)        as ControllingObjectClass,
      @ObjectModel.foreignKey.association: '_FunctionalArea'
      typ.func_area                                       as FunctionalArea,
      typ.copar                                           as CtrlgTotalsRecordActvtnStatus,
      typ.resz1                                           as ResidenceTime1,
      typ.resz2                                           as ResidenceTime2,
      typ.layout                                          as OrderMasterDataLayout,
      typ.tdform                                          as TextObjectForm,
      typ.configurationdeprecationcode                    as ConfigDeprecationCode,

      // Indicators
      typ.aufkl                                           as OrderIsToBeClassified,
      typ.relkz                                           as OrderIsReleasedUponCreation,
      typ.chgkz                                           as OrderHasStatusChangeDocuments,
      typ.nabpf                                           as SettlementIsNotRequired,
      typ.plint                                           as OrdIsUsedInIntegratedPlanning,
      typ.vorpl                                           as NetworkIsForPlanning,
      cast(typ.erloese    as vdm_pp_erloese preserving type) as RevenuePostingIsAllowed,
      cast(typ.colordproc as vdm_colordproc preserving type) as CollectiveOrderHasAutoGoodsMvt,

      // Associations
      _OrderCategory,
      _FunctionalArea,
      _ControllingObjectClass,
      _OrderStatusProfile,
      _OperationStatusProfile,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Text
};
```
