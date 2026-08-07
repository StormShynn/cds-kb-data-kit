---
name: I_RPTVMFGPRODCOSTCTRLGORDITEM
description: "Rptvmfgprodcostctrlgorditem"
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
  - item-level
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_RPTVMFGPRODCOSTCTRLGORDITEM

**Rptvmfgprodcostctrlgorditem**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OrderID` | ✓ | |  |  |  |  |
| `OrderItem` | ✓ | |  |  |  |  |
| `OrderType` |  | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `Product` |  | |  | `cast(Material as productnumber preserving type)` |  |  |
| `ProductionPlant` |  | |  |  |  |  |
| `PlanningPlant` |  | |  | `MRPPlant` |  |  |
| `ProductionVersion` |  | |  |  |  |  |
| `StorageLocation` |  | |  |  |  |  |
| `MRPArea` |  | |  |  |  |  |
| `SalesOrder` |  | |  |  |  |  |
| `SalesOrderItem` |  | |  |  |  |  |
| `WBSElementInternalID` |  | |  |  |  |  |
| `WBSElementInternalID_2` |  | |  |  |  |  |
| `ProductConfiguration` |  | |  |  |  |  |
| `ObjectInternalID` |  | |  |  |  |  |
| `IsCompletelyDelivered` |  | |  |  |  |  |
| `GoodsReceiptIsExpected` |  | |  |  |  |  |
| `GoodsReceiptIsNonValuated` |  | |  |  |  |  |
| `PlannedEndDate` |  | |  | `cast(PlannedEndDate as pph_gltrp preserving type)` |  |  |
| `ScheduledBasicEndDate` |  | |  | `cast(ScheduledBasicEndDate as pph_gltrs preserving type)` |  |  |
| `PlannedDeliveryDate` |  | |  |  |  |  |
| `ActualDeliveryDate` |  | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `ProductionUnit` |  | |  |  |  |  |
| `OrderPlannedTotalQty` |  | |  | `cast(ItemQuantity as co_psmng preserving type)` |  |  |
| `OrderPlannedScrapQty` |  | |  | `cast(MfgOrderItemPlannedScrapQty as co_psamg preserving type)` |  |  |
| `GoodsReceiptQty` |  | |  | `cast(MfgOrderItemGoodsReceiptQty as co_wemng preserving type)` |  |  |
| `ActualDeviationQty` |  | |  | `cast(MfgOrderItemActualDeviationQty as co_iamng preserving type)` |  |  |
| `BusinessArea` |  | |  |  |  |  |
| `AccountAssignmentCategory` |  | |  |  |  |  |
| `_Order` | | ✓ | | | | |
| `_Order_2` | | ✓ | | | | |
| `_OrderType` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_PlanningPlant` | | ✓ | | | | |
| `_Material` | | ✓ | | | | |
| `_ProductionPlant` | | ✓ | | | | |
| `_MRPArea` | | ✓ | | | | |
| `_ProductionVersion` | | ✓ | | | | |
| `_StorageLocation` | | ✓ | | | | |
| `_SalesOrder` | | ✓ | | | | |
| `_SalesOrderItem` | | ✓ | | | | |
| `_WBSElement` | | ✓ | | | | |
| `_WBSElementBasicData2` | | ✓ | | | | |
| `_EnterpriseProjectElement` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_AccountAssignmentCategory` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_ProductionUnit` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Order` | `I_ProductCostCtrlgOrder` | [1..1] |
| `_Order_2` | `I_RptvMfgProdCostCtrlgOrder` | [1..1] |
| `_OrderType` | `I_OrderType` | [1..1] |
| `_Product` | `I_Product` | [1..1] |
| `_PlanningPlant` | `I_Plant` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IREMPCCORDERITEM'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction: { enabled: true,
                             delta.changeDataCapture:
                                    { mapping:
                                      [ { role: #MAIN,
                                          table: 'afpo',
                                          tableElement: ['aufnr'  , 'posnr'],
                                          viewElement:  ['OrderID', 'OrderItem']
                                        } ] } }
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@ClientHandling.type: #CLIENT_DEPENDENT
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.representativeKey: 'OrderItem'
@ObjectModel.sapObjectNodeType.name: 'RepetitiveManufacturingPCCItem'
@ObjectModel.semanticKey: ['OrderID', 'OrderItem']
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #TRANSACTIONAL}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Product Cost Controlling Order Item in Repetitive Mfg'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_RptvMfgProdCostCtrlgOrdItem
--as select from I_ProductCostCtrlgOrderItem
  as select from I_OrderItem

  association [1..1] to I_ProductCostCtrlgOrder     as _Order          on $projection.OrderID = _Order.OrderID
  association [1..1] to I_RptvMfgProdCostCtrlgOrder as _Order_2        on $projection.OrderID = _Order_2.OrderID
  association [1..1] to I_OrderType                 as _OrderType      on $projection.OrderType = _OrderType.OrderType
  association [1..1] to I_Product                   as _Product        on $projection.Product = _Product.Product
  association [0..1] to I_Plant                     as _PlanningPlant  on $projection.PlanningPlant   = _PlanningPlant.Plant

{
      @ObjectModel.foreignKey.association: '_Order'
  key OrderID,
      // representative key
  key OrderItem,

      // Assignments
      @ObjectModel.foreignKey.association: '_OrderType'
      OrderType,
      @Consumption.hidden: true
      @ObjectModel.foreignKey.association: '_Material'
      Material,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductStdVH', element: 'Product' } } ]
      @ObjectModel.foreignKey.association: '_Product'
      cast(Material as productnumber preserving type) as Product,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlantStdVH', element: 'Plant' } } ]
      @ObjectModel.foreignKey.association: '_ProductionPlant'
      ProductionPlant,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlantStdVH', element: 'Plant' } } ]
      @ObjectModel.foreignKey.association: '_PlanningPlant'
      MRPPlant as PlanningPlant,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductionVersionBasicStdVH', element: 'ProductionVersion' } } ]
      @ObjectModel.foreignKey.association: '_ProductionVersion'
      ProductionVersion,
      @ObjectModel.foreignKey.association: '_StorageLocation'
      StorageLocation,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MRPAreaVH', element: 'MRPArea' } } ]
      @ObjectModel.foreignKey.association: '_MRPArea'      
      MRPArea,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_SalesOrderStdVH', element: 'SalesOrder' } } ]
      @ObjectModel.foreignKey.association: '_SalesOrder'
      SalesOrder,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_SalesOrderItemStdVH', element: 'SalesOrderItem' } } ]
      @ObjectModel.foreignKey.association: '_SalesOrderItem'
      SalesOrderItem,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'WBSElementInternalID_2'
      @ObjectModel.foreignKey.association: '_WBSElement'
      WBSElementInternalID,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_WBSElementBasicDataStdVH', element: 'WBSElementInternalID' } } ]
      @ObjectModel.foreignKey.association: '_WBSElementBasicData2'
      WBSElementInternalID_2,
      ProductConfiguration,
      ObjectInternalID,

      // GR
      IsCompletelyDelivered,
      GoodsReceiptIsExpected,
      GoodsReceiptIsNonValuated,

      // Dates
      cast(PlannedEndDate        as pph_gltrp preserving type) as PlannedEndDate,
      cast(ScheduledBasicEndDate as pph_gltrs preserving type) as ScheduledBasicEndDate,
      PlannedDeliveryDate,
      ActualDeliveryDate,

      // Quantities and UoM
      @ObjectModel.foreignKey.association: '_BaseUnit'
      @Semantics.unitOfMeasure: true
      BaseUnit,

      @ObjectModel.foreignKey.association: '_ProductionUnit'
      @Semantics.unitOfMeasure: true
      ProductionUnit,
      @Semantics.quantity.unitOfMeasure: 'ProductionUnit'
      @Aggregation.default: #SUM
      cast(ItemQuantity as co_psmng preserving type)                   as OrderPlannedTotalQty,
      @Semantics.quantity.unitOfMeasure: 'ProductionUnit'
      @Aggregation.default: #SUM
      cast(MfgOrderItemPlannedScrapQty as co_psamg preserving type)    as OrderPlannedScrapQty,
      @Semantics.quantity.unitOfMeasure: 'ProductionUnit'
      @Aggregation.default: #SUM
      cast(MfgOrderItemGoodsReceiptQty as co_wemng preserving type)    as GoodsReceiptQty,
      @Semantics.quantity.unitOfMeasure: 'ProductionUnit'
      @Aggregation.default: #SUM
      cast(MfgOrderItemActualDeviationQty as co_iamng preserving type) as ActualDeviationQty,

      // Assignments FI/CO
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_BusinessAreaStdVH', element: 'BusinessArea' } } ]
      @ObjectModel.foreignKey.association: '_BusinessArea'
      BusinessArea,
      @ObjectModel.foreignKey.association: '_AccountAssignmentCategory'    
      AccountAssignmentCategory,

      // Associations
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_Order_2'
      _Order,
      @ObjectModel.association.type: [#TO_COMPOSITION_ROOT, #TO_COMPOSITION_PARENT]
      _Order_2,
      _OrderType,
      _Material,
      _Product,
      _ProductionPlant,
      _PlanningPlant,
      _MRPArea,
      _ProductionVersion,
      _StorageLocation,
      _SalesOrder,
      _SalesOrderItem,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_WBSElementBasicData2'  
      _WBSElement,
      _WBSElementBasicData2,
      _EnterpriseProjectElement,
      _BusinessArea,
      _AccountAssignmentCategory,
      _BaseUnit,
      _ProductionUnit
}
where
  OrderCategory = '05';
```
