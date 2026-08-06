---
name: I_SALESORDERITEMCOSTESTIMATE
description: Sales OrderITEMCOSTESTIMATE
app_component: CO-PC-PCP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CO
  - CO-PC
  - CO-PC-PCP
  - interface-view
  - sales-order
  - item-level
  - component:CO-PC-PCP-2CL
  - lob:Controlling
  - bo:SalesOrder
---
# I_SALESORDERITEMCOSTESTIMATE

**Sales OrderITEMCOSTESTIMATE**

| Property | Value |
|---|---|
| App Component | `CO-PC-PCP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CostingReferenceObject` | `CostEst.CostingReferenceObject` |
| key `CostEstimate` | `CostEst.CostEstimate` |
| key `CostingType` | `CostEst.CostingType` |
| key `CostingDate` | `CostEst.CostingDate` |
| key `CostingVersion` | `CostEst.CostingVersion` |
| key `ValuationVariant` | `CostEst.ValuationVariant` |
| key `CostIsEnteredManually` | `CostEst.CostIsEnteredManually` |
| `Product` | `CostEst.Product` |
| `ValuationType` | `CostEst.ValuationType` |
| `CostingVariant` | `CostEst.CostingVariant` |
| `CompanyCode` | `ValArea.CompanyCode` |
| `Plant` | `CostEst.Plant` |
| `ControllingArea` | `CostEst.ControllingArea` |
| `Ledger` | `CostEst.Ledger` |
| `ProfitCenter` | `CostEst.ProfitCenter` |
| `CostEstimateValidityStartDate` | `CostEst.CostEstimateValidityStartDate` |
| `CostEstimateValidityEndDate` | `CostEst.CostEstimateValidityEndDate` |
| `ValuationDate` | `CostEst.ValuationDate` |
| `QuantityStructureDate` | `CostEst.QuantityStructureDate` |
| `CostingLotSize` | `CostEst.CostingLotSize` |
| `ValuationQuantityUnit` | `CostEst.ValuationQuantityUnit` |
| `CostEstimateCreationDate` | `CostEst.CostEstimateCreationDate` |
| `CostEstimateStatus` | `CostEst.CostEstimateStatus` |
| `ProductionVersion` | `CostEst.ProductionVersion` |
| `ProductValuationStrategy` | `CostEst.ProductValuationStrategy` |
| `ProductValnPurgInfoRecdStrgy` | `CostEst.ProductValnPurgInfoRecdStrgy` |
| `ReferenceLedger` | `CostEst.ReferenceLedger` |
| `ComponentBreakdown` | `CostEst.ComponentBreakdown` |
| `PostingPeriod` | `CostEst.PostingPeriod` |
| `PostingFiscalYear` | `CostEst.PostingFiscalYear` |
| `CostingItemIsProductComp` | `CostEst.CostingItemIsProductComp` |
| `CostEstimateTransferControl` | `CostEst.CostEstimateTransferControl` |
| `SalesOrder` | `cast( CostEst.SalesDocument as vdm_sales_order preserving type )` |
| `SalesOrderItem` | `cast( CostEst.SalesDocumentItem as sales_order_item preserving type )` |
| `BillOfMaterial` | `CostEst.BillOfMaterial` |
| `ProductBOMUsage` | `CostEst.ProductBOMUsage` |
| `AlternativeBillOfMaterial` | `CostEst.AlternativeBillOfMaterial` |
| `TaskListGroup` | `CostEst.TaskListGroup` |
| `TaskListType` | `CostEst.TaskListType` |
| `TaskListGroupCounter` | `CostEst.TaskListGroupCounter` |
| `SpecialProcurementType` | `CostEst.SpecialProcurementType` |
| `ProductProcurementType` | `CostEst.ProductProcurementType` |
| `SpecialProcurementPlant` | `CostEst.SpecialProcurementPlant` |
| `CostingSheet` | `CostEst.CostingSheet` |
| `CostingOverheadGroup` | `CostEst.CostingOverheadGroup` |
| `CostingOverhead` | `CostEst.CostingOverhead` |
| `ConfiguredProduct` | `CostEst.ConfiguredProduct` |
| `CostEstimateCostingLevel` | `CostEst.CostEstimateCostingLevel` |
| `CostComponentStructure` | `CostEst.CostComponentStructure` |
| `CostEstimateCreatedByUser` | `CostEst.CostEstimateCreatedByUser` |
| `CostEstimateMarkedByUser` | `CostEst.CostEstimateMarkedByUser` |
| `CostEstimateMarkingDate` | `CostEst.CostEstimateMarkingDate` |
| `ValuationArea` | `CostEst.ValuationArea` |
| `CompanyCodeCurrency` | `CostEst.CompanyCodeCurrency` |
| `GlobalCurrency` | `CostEst.ControllingAreaCurrency` |
| `_SalesOrderItemCostEstItem` | *Association* |
| `_Product` | *Association* |
| `_GlobalCurrency` | *Association* |
| `_CompanyCodeCurrency` | *Association* |
| `_CostingType` | *Association* |
| `_CostingVersion` | *Association* |
| `_CostingVariant` | *Association* |
| `_ValuationVariant` | *Association* |
| `_Plant` | *Association* |
| `_UnitOfMeasure` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesOrderItemCostEstItem` | `I_SalesOrderItemCostEstItem` | [0..*] |
| `_Product` | `I_Product` | [1..1] |
| `_GlobalCurrency` | `I_Currency` | [0..1] |
| `_CompanyCodeCurrency` | `I_Currency` | [0..1] |
| `_CostingType` | `I_CostingType` | [1..1] |
| `_CostingVersion` | `I_CostingVersion` | [0..1] |
| `_CostingVariant` | `I_CostingVariant` | [1..1] |
| `_ValuationVariant` | `I_CostingValuationVariant` | [1..1] |
| `_Plant` | `I_Plant` | [1..1] |
| `_UnitOfMeasure` | `I_UnitOfMeasure` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel:{
  supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET],
  modelingPattern: #ANALYTICAL_FACT,
  usageType: {
    serviceQuality: #A,
    sizeCategory: #L,
    dataClass: #TRANSACTIONAL
  }
}

@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@Analytics: {
  dataCategory: #FACT,
  internalName: #LOCAL
}

@EndUserText.label: ' Sales Order Item Cost Estimate'
@Metadata.ignorePropagatedAnnotations: true

define view entity I_SalesOrderItemCostEstimate
  as select from                 P_KEKO          as CostEst
    left outer to exact one join I_ValuationArea as ValArea on ValArea.ValuationArea = CostEst.Plant
  association [0..*] to I_SalesOrderItemCostEstItem as _SalesOrderItemCostEstItem on  $projection.CostingReferenceObject = _SalesOrderItemCostEstItem.CostingReferenceObject
                                                                                  and $projection.CostEstimate           = _SalesOrderItemCostEstItem.CostEstimate
                                                                                  and $projection.CostingType            = _SalesOrderItemCostEstItem.CostingType
                                                                                  and $projection.CostingDate            = _SalesOrderItemCostEstItem.CostingDate
                                                                                  and $projection.CostingVersion         = _SalesOrderItemCostEstItem.CostingVersion
                                                                                  and $projection.ValuationVariant       = _SalesOrderItemCostEstItem.ValuationVariant
                                                                                  and $projection.CostIsEnteredManually  = _SalesOrderItemCostEstItem.CostIsEnteredManually
  association [1..1] to I_Product                   as _Product                   on  $projection.Product = _Product.Product
  association [0..1] to I_Currency                  as _GlobalCurrency            on  $projection.GlobalCurrency = _GlobalCurrency.Currency
  association [0..1] to I_Currency                  as _CompanyCodeCurrency       on  $projection.CompanyCodeCurrency = _CompanyCodeCurrency.Currency
  association [1..1] to I_CostingType               as _CostingType               on  $projection.CostingType = _CostingType.CostingType
  association [0..1] to I_CostingVersion            as _CostingVersion            on  $projection.CostingVersion   = _CostingVersion.CostingVersion
                                                                                  and $projection.CostingType      = _CostingVersion.CostingType
                                                                                  and $projection.ValuationVariant = _CostingVersion.ValuationVariant
  association [1..1] to I_CostingVariant            as _CostingVariant            on  $projection.CostingVariant = _CostingVariant.CostingVariant
  association [1..1] to I_CostingValuationVariant   as _ValuationVariant          on  $projection.ValuationVariant = _ValuationVariant.ValuationVariant
  association [1..1] to I_Plant                     as _Plant                     on  $projection.Plant = _Plant.Plant
  association [0..1] to I_UnitOfMeasure             as _UnitOfMeasure             on  $projection.ValuationQuantityUnit = _UnitOfMeasure.UnitOfMeasure
{
  key  CostEst.CostingReferenceObject,
  key  CostEst.CostEstimate,
       @ObjectModel.foreignKey.association: '_CostingType'
  key  CostEst.CostingType,
       @Semantics.businessDate.at: true
  key  CostEst.CostingDate,
       @ObjectModel.foreignKey.association: '_CostingVersion'
  key  CostEst.CostingVersion,
       @ObjectModel.foreignKey.association: '_ValuationVariant'
  key  CostEst.ValuationVariant,
  key  CostEst.CostIsEnteredManually,
       @ObjectModel.foreignKey.association: '_Product'
       CostEst.Product,
       CostEst.ValuationType,
       @ObjectModel.foreignKey.association: '_CostingVariant'
       CostEst.CostingVariant,
       ValArea.CompanyCode,
       @ObjectModel.foreignKey.association: '_Plant'
       CostEst.Plant,
       CostEst.ControllingArea,
       CostEst.Ledger,
       CostEst.ProfitCenter,
       @Semantics.businessDate.from: true
       CostEst.CostEstimateValidityStartDate,
       @Semantics.businessDate.to: true
       CostEst.CostEstimateValidityEndDate,
       CostEst.ValuationDate,
       CostEst.QuantityStructureDate,
       @Semantics.quantity.unitOfMeasure: 'ValuationQuantityUnit'
       CostEst.CostingLotSize,
       @ObjectModel.foreignKey.association: '_UnitOfMeasure'
       CostEst.ValuationQuantityUnit,
       CostEst.CostEstimateCreationDate,
       CostEst.CostEstimateStatus,
       CostEst.ProductionVersion,
       CostEst.ProductValuationStrategy,
       CostEst.ProductValnPurgInfoRecdStrgy,
       CostEst.ReferenceLedger,
       CostEst.ComponentBreakdown,

       CostEst.PostingPeriod,
       CostEst.PostingFiscalYear,
       CostEst.CostingItemIsProductComp,
       CostEst.CostEstimateTransferControl,
       cast( CostEst.SalesDocument as vdm_sales_order preserving type )      as SalesOrder,
       cast( CostEst.SalesDocumentItem as sales_order_item preserving type ) as SalesOrderItem,
       CostEst.BillOfMaterial,
       CostEst.ProductBOMUsage,
       CostEst.AlternativeBillOfMaterial,
       CostEst.TaskListGroup,
       CostEst.TaskListType,
       CostEst.TaskListGroupCounter,
       CostEst.SpecialProcurementType,
       CostEst.ProductProcurementType,
       CostEst.SpecialProcurementPlant,
       CostEst.CostingSheet,
       CostEst.CostingOverheadGroup,
       CostEst.CostingOverhead,
       CostEst.ConfiguredProduct,
       CostEst.CostEstimateCostingLevel,
       CostEst.CostComponentStructure,

       @Semantics.user.createdBy: true
       CostEst.CostEstimateCreatedByUser,
       CostEst.CostEstimateMarkedByUser,
       CostEst.CostEstimateMarkingDate,
       CostEst.ValuationArea,

       @ObjectModel.foreignKey.association: '_CompanyCodeCurrency'
       CostEst.CompanyCodeCurrency,
       @ObjectModel.foreignKey.association: '_GlobalCurrency'
       CostEst.ControllingAreaCurrency                                       as GlobalCurrency,

       _SalesOrderItemCostEstItem,
       _Product,
       _GlobalCurrency,
       _CompanyCodeCurrency,
       _CostingType,
       _CostingVersion,
       _CostingVariant,
       _ValuationVariant,
       _Plant,
       _UnitOfMeasure
}
where
  CostEst.CostingReferenceObject = 'B'
```
