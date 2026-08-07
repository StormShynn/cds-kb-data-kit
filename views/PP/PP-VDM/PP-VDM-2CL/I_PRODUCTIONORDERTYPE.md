---
name: I_PRODUCTIONORDERTYPE
description: Production OrderTYPE
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
  - product
  - production-order
  - component:PP-VDM-2CL
  - lob:Manufacturing
  - bo:ProductionOrder
---
# I_PRODUCTIONORDERTYPE

**Production OrderTYPE**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProductionOrderType` | ✓ | |  | `cast(type.OrderType as vdm_prodnordertype preserving type)` |  |  |
| `OrderNumberRange` |  | |  |  |  |  |
| `StatusProfile` |  | |  |  |  |  |
| `OperationStatusProfile` |  | |  |  |  |  |
| `ControllingSettlementProfile` |  | |  |  |  |  |
| `PlanningProfile` |  | |  |  |  |  |
| `BudgetProfile` |  | |  |  |  |  |
| `ResidenceTime1` |  | |  |  |  |  |
| `ResidenceTime2` |  | |  |  |  |  |
| `OrderIsToBeClassified` |  | |  |  |  |  |
| `OrderIsReleasedUponCreation` |  | |  |  |  |  |
| `OrderHasStatusChangeDocuments` |  | |  |  |  |  |
| `SettlementIsNotRequired` |  | |  |  |  |  |
| `CollectiveOrderHasAutoGoodsMvt` |  | |  |  |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IPRODNORDERTYPE'
@Analytics.internalName: #LOCAL
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.compositionRoot: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY, #SQL_DATA_SOURCE]
@ObjectModel.representativeKey: 'ProductionOrderType'
@ObjectModel.semanticKey: ['ProductionOrderType']
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Production Order Type'

define view entity I_ProductionOrderType
  as select from I_OrderType as type
    composition [0..*] of  I_ProductionOrderTypeText as _Text  

{
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}  
      @ObjectModel.text.association: '_Text'
  key cast(type.OrderType as vdm_prodnordertype preserving type) as ProductionOrderType,

      // Assignments
      type.OrderNumberRange,
      type.StatusProfile,
      type.OperationStatusProfile,
      type.ControllingSettlementProfile,
      type.PlanningProfile,
      type.BudgetProfile,
      type.ResidenceTime1,
      type.ResidenceTime2,

      // Indicators
      type.OrderIsToBeClassified,
      type.OrderIsReleasedUponCreation,
      type.OrderHasStatusChangeDocuments,
      type.SettlementIsNotRequired,
      type.CollectiveOrderHasAutoGoodsMvt,

      // Composition
      _Text
}
  where
    type.OrderCategory = '10'; // Production order types
```
