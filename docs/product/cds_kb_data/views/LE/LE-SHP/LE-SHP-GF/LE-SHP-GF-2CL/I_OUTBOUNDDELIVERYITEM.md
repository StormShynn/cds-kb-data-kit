---
name: I_OUTBOUNDDELIVERYITEM
description: "Outbound DeliveryITEM"
app_component: LE-SHP-GF-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LE
  - LE-SHP
  - LE-SHP-GF
  - interface-view
  - delivery
  - item-level
  - component:LE-SHP-GF-2CL
  - lob:Logistics Execution
---
# I_OUTBOUNDDELIVERYITEM

**Outbound DeliveryITEM**

| Property | Value |
|---|---|
| App Component | `LE-SHP-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OutboundDelivery` | ✓ | |  | `cast(DeliveryDocument as outbound_delivery)` |  |  |
| `OutboundDeliveryItem` | ✓ | |  | `cast(DeliveryDocumentItem as outbound_delivery_item)` |  |  |
| `DeliveryDocumentItemCategory` |  | |  |  |  |  |
| `SalesDocumentItemType` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `Division` |  | |  |  |  |  |
| `SalesGroup` |  | |  |  |  |  |
| `SalesOffice` |  | |  |  |  |  |
| `DepartmentClassificationByCust` |  | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `Product` |  | |  |  |  |  |
| `MaterialByCustomer` |  | |  |  |  |  |
| `OriginallyRequestedMaterial` |  | |  |  |  |  |
| `InternationalArticleNumber` |  | |  |  |  |  |
| `Batch` |  | |  |  |  |  |
| `BatchClassification` |  | |  |  |  |  |
| `BatchBySupplier` |  | |  |  |  |  |
| `MaterialIsIntBatchManaged` |  | |  |  |  |  |
| `MaterialIsBatchManaged` |  | |  |  |  |  |
| `MaterialGroup` |  | |  |  |  |  |
| `ProductGroup` |  | |  |  |  |  |
| `MaterialFreightGroup` |  | |  |  |  |  |
| `AdditionalMaterialGroup1` |  | |  |  |  |  |
| `AdditionalMaterialGroup2` |  | |  |  |  |  |
| `AdditionalMaterialGroup3` |  | |  |  |  |  |
| `AdditionalMaterialGroup4` |  | |  |  |  |  |
| `AdditionalMaterialGroup5` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `Warehouse` |  | |  |  |  |  |
| `StorageLocation` |  | |  |  |  |  |
| `StorageBin` |  | |  |  |  |  |
| `StorageType` |  | |  |  |  |  |
| `DeliveryItemResourceID` |  | |  |  |  |  |
| `InventorySpecialStockType` |  | |  |  |  |  |
| `ShelfLifeExpirationDate` |  | |  |  |  |  |
| `NumberOfSerialNumbers` |  | |  |  |  |  |
| `ProductConfiguration` |  | |  |  |  |  |
| `ProductHierarchyNode` |  | |  |  |  |  |
| `ManufactureDate` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `DeliveryDocumentItemText` |  | |  |  |  |  |
| `HigherLevelItem` |  | |  |  |  |  |
| `HigherLvlItmOfBatSpltItm` |  | |  |  |  |  |
| `ActualDeliveryQuantity` |  | |  |  |  |  |
| `QuantityIsFixed` |  | |  |  |  |  |
| `OriginalDeliveryQuantity` |  | |  |  |  |  |
| `DeliveryQuantityUnit` |  | |  |  |  |  |
| `ActualDeliveredQtyInBaseUnit` |  | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `DeliveryToBaseQuantityDnmntr` |  | |  |  |  |  |
| `DeliveryToBaseQuantityNmrtr` |  | |  |  |  |  |
| `ProductAvailabilityDate` |  | |  |  |  |  |
| `ProductAvailabilityTime` |  | |  |  |  |  |
| `DeliveryGroup` |  | |  |  |  |  |
| `ItemGrossWeight` |  | |  |  |  |  |
| `ItemNetWeight` |  | |  |  |  |  |
| `ItemWeightUnit` |  | |  |  |  |  |
| `ItemVolume` |  | |  |  |  |  |
| `ItemVolumeUnit` |  | |  |  |  |  |
| `InspectionLot` |  | |  |  |  |  |
| `InspectionPartialLot` |  | |  |  |  |  |
| `PartialDeliveryIsAllowed` |  | |  |  |  |  |
| `UnlimitedOverdeliveryIsAllowed` |  | |  |  |  |  |
| `OverdelivTolrtdLmtRatioInPct` |  | |  |  |  |  |
| `UnderdelivTolrtdLmtRatioInPct` |  | |  |  |  |  |
| `BOMExplosion` |  | |  |  |  |  |
| `WarehouseStagingArea` |  | |  |  |  |  |
| `WarehouseStockCategory` |  | |  |  |  |  |
| `StockType` |  | |  |  |  |  |
| `GLAccount` |  | |  |  |  |  |
| `GoodsMovementReasonCode` |  | |  |  |  |  |
| `SubsequentMovementType` |  | |  |  |  |  |
| `IsCompletelyDelivered` |  | |  |  |  |  |
| `IsNotGoodsMovementsRelevant` |  | |  |  |  |  |
| `PickingControl` |  | |  |  |  |  |
| `LoadingGroup` |  | |  |  |  |  |
| `GoodsMovementType` |  | |  |  |  |  |
| `LoadingPointForDelivery` |  | |  |  |  |  |
| `TransportationGroup` |  | |  |  |  |  |
| `ReceivingPoint` |  | |  |  |  |  |
| `FixedShipgProcgDurationInDays` |  | |  |  |  |  |
| `VarblShipgProcgDurationInDays` |  | |  |  |  |  |
| `ProofOfDeliveryRelevanceCode` |  | |  |  |  |  |
| `ItemIsBillingRelevant` |  | |  |  |  |  |
| `ItemBillingBlockReason` |  | |  |  |  |  |
| `BusinessArea` |  | |  |  |  |  |
| `ControllingArea` |  | |  |  |  |  |
| `ProfitabilitySegment` |  | |  | `cast( case when ProfitabilitySegment_2 > '9999999999' then '9999999999' else lpad( ProfitabilitySegment_2, 10, '0' ) end as rkeobjnr_numc )` |  |  |
| `ProfitabilitySegment_2` |  | |  |  |  |  |
| `ProfitCenter` |  | |  |  |  |  |
| `InventoryValuationType` |  | |  |  |  |  |
| `IsSeparateValuation` |  | |  |  |  |  |
| `ConsumptionPosting` |  | |  |  |  |  |
| `OrderID` |  | |  |  |  |  |
| `OrderItem` |  | |  |  |  |  |
| `CostCenter` |  | |  |  |  |  |
| `ReferenceSDDocument` |  | |  |  |  |  |
| `ReferenceSDDocumentItem` |  | |  |  |  |  |
| `ReferenceSDDocumentCategory` |  | |  |  |  |  |
| `ReferenceDocumentLogicalSystem` |  | |  |  |  |  |
| `PurchaseOrder` |  | |  |  |  |  |
| `PurchaseOrderItem` |  | |  |  |  |  |
| `AdditionalCustomerGroup1` |  | |  |  |  |  |
| `AdditionalCustomerGroup2` |  | |  |  |  |  |
| `AdditionalCustomerGroup3` |  | |  |  |  |  |
| `AdditionalCustomerGroup4` |  | |  |  |  |  |
| `AdditionalCustomerGroup5` |  | |  |  |  |  |
| `RetailPromotion` |  | |  |  |  |  |
| `SDProcessStatus` |  | |  |  |  |  |
| `PickingConfirmationStatus` |  | |  |  |  |  |
| `PickingStatus` |  | |  |  |  |  |
| `WarehouseActivityStatus` |  | |  |  |  |  |
| `PackingStatus` |  | |  |  |  |  |
| `GoodsMovementStatus` |  | |  |  |  |  |
| `DeliveryRelatedBillingStatus` |  | |  |  |  |  |
| `ProofOfDeliveryStatus` |  | |  |  |  |  |
| `ItemGeneralIncompletionStatus` |  | |  |  |  |  |
| `ItemDeliveryIncompletionStatus` |  | |  |  |  |  |
| `ItemPickingIncompletionStatus` |  | |  |  |  |  |
| `ItemGdsMvtIncompletionSts` |  | |  |  |  |  |
| `ItemPackingIncompletionStatus` |  | |  |  |  |  |
| `ItemBillingIncompletionStatus` |  | |  |  |  |  |
| `IntercompanyBillingStatus` |  | |  |  |  |  |
| `ChmlCmplncStatus` |  | |  |  |  |  |
| `DangerousGoodsStatus` |  | |  |  |  |  |
| `SafetyDataSheetStatus` |  | |  |  |  |  |
| `TrdCmplncLegalControlSts` |  | |  |  |  |  |
| `TrdCmplncEmbargoSts` |  | |  |  |  |  |
| `TrdCmplncSnctndListChkSts` |  | |  |  |  |  |
| `RequirementSegment` |  | |  |  |  |  |
| `StockSegment` |  | |  |  |  |  |
| `ProductSeasonYear` |  | |  |  |  |  |
| `ProductSeason` |  | |  |  |  |  |
| `ProductCollection` |  | |  |  |  |  |
| `ProductTheme` |  | |  |  |  |  |
| `ProductCharacteristic1` |  | |  |  |  |  |
| `ProductCharacteristic2` |  | |  |  |  |  |
| `ProductCharacteristic3` |  | |  |  |  |  |
| `OriginSDDocument` |  | |  |  |  |  |
| `SDDocumentItem` |  | |  |  |  |  |
| `SalesSDDocumentCategory` |  | |  |  |  |  |
| `MaterialTypePrimary` |  | |  |  |  |  |
| `CostInDocumentCurrency` |  | |  |  |  |  |
| `Subtotal1Amount` |  | |  |  |  |  |
| `Subtotal2Amount` |  | |  |  |  |  |
| `Subtotal3Amount` |  | |  |  |  |  |
| `Subtotal4Amount` |  | |  |  |  |  |
| `Subtotal5Amount` |  | |  |  |  |  |
| `Subtotal6Amount` |  | |  |  |  |  |
| `OrderDocument` |  | |  |  |  |  |
| `PlanningMaterial` |  | |  |  |  |  |
| `PlanningPlant` |  | |  |  |  |  |
| `ProductGroupBaseUnit` |  | |  |  |  |  |
| `ConversionFactor` |  | |  |  |  |  |
| `IsReturnsItem` |  | |  |  |  |  |
| `ConditionUnit` |  | |  |  |  |  |
| `NetPriceAmount` |  | |  |  |  |  |
| `TotalNetAmount` |  | |  |  |  |  |
| `QtyInPurchaseOrderPriceUnit` |  | |  |  |  |  |
| `CreditRelatedPrice` |  | |  |  |  |  |
| `CreditRelatedPriceAmount` |  | |  |  |  |  |
| `DeliveryToBaseUnitCnvrsnFctr` |  | |  |  |  |  |
| `FunctionalArea` |  | |  |  |  |  |
| `Reservation` |  | |  |  |  |  |
| `ReservationItem` |  | |  |  |  |  |
| `EU_DeliveryItemARCStatus` |  | |  |  |  |  |
| `FldLogsStatus` |  | |  |  |  |  |
| `ValueChainInstanceChar32UUID` |  | |  |  |  |  |
| `ValueChainCategory` |  | |  |  |  |  |
| `IntcoRefSDDocumentCategory` |  | |  |  |  |  |
| `IntcoRefSDDocument` |  | |  |  |  |  |
| `IntcoRefSDDocumentItem` |  | |  |  |  |  |
| `WBSElementInternalID` |  | |  |  |  |  |
| `_OutboundDelivery` | | ✓ | | | | |
| `_Partner` | | ✓ | | | | |
| `_FldLogsDelivRefLinkInfo` | | ✓ | | | | |
| `_ItemCategory` | | ✓ | | | | |
| `_SalesDocumentItemType` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_SalesGroup` | | ✓ | | | | |
| `_SalesOffice` | | ✓ | | | | |
| `_Material` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_OriginallyRequestedMaterial` | | ✓ | | | | |
| `_ProductHierarchyNode` | | ✓ | | | | |
| `_MaterialGroup` | | ✓ | | | | |
| `_ProductGroup` | | ✓ | | | | |
| `_MaterialFreightGroup` | | ✓ | | | | |
| `_AdditionalMaterialGroup1` | | ✓ | | | | |
| `_AdditionalMaterialGroup2` | | ✓ | | | | |
| `_AdditionalMaterialGroup3` | | ✓ | | | | |
| `_AdditionalMaterialGroup4` | | ✓ | | | | |
| `_AdditionalMaterialGroup5` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_Warehouse` | | ✓ | | | | |
| `_StorageLocation` | | ✓ | | | | |
| `_InventorySpecialStockType` | | ✓ | | | | |
| `_DeliveryQuantityUnit` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_ItemWeightUnit` | | ✓ | | | | |
| `_ItemVolumeUnit` | | ✓ | | | | |
| `_BOMExplosion` | | ✓ | | | | |
| `_PickingControl` | | ✓ | | | | |
| `_LoadingGroup` | | ✓ | | | | |
| `_GoodsMovementType` | | ✓ | | | | |
| `_TransportationGroup` | | ✓ | | | | |
| `_ItemIsBillingRelevant` | | ✓ | | | | |
| `_ItemBillingBlockReason` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_InventoryValuationType` | | ✓ | | | | |
| `_OrderID` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_ReferenceSDDocument` | | ✓ | | | | |
| `_ReferenceSalesDocumentItem` | | ✓ | | | | |
| `_ReferenceSDDocumentCategory` | | ✓ | | | | |
| `_PurchaseOrder` | | ✓ | | | | |
| `_PurchaseOrderItem` | | ✓ | | | | |
| `_IntcoRefSDDocument` | | ✓ | | | | |
| `_IntcoRefSDDocumentItem` | | ✓ | | | | |
| `_IntcoRefSDDocumentCategory` | | ✓ | | | | |
| `_LogicalSystem` | | ✓ | | | | |
| `_AdditionalCustomerGroup1` | | ✓ | | | | |
| `_AdditionalCustomerGroup2` | | ✓ | | | | |
| `_AdditionalCustomerGroup3` | | ✓ | | | | |
| `_AdditionalCustomerGroup4` | | ✓ | | | | |
| `_AdditionalCustomerGroup5` | | ✓ | | | | |
| `_SDProcessStatus` | | ✓ | | | | |
| `_PickingConfirmationStatus` | | ✓ | | | | |
| `_PickingStatus` | | ✓ | | | | |
| `_WarehouseActivityStatus` | | ✓ | | | | |
| `_WarehouseStagingArea` | | ✓ | | | | |
| `_PackingStatus` | | ✓ | | | | |
| `_GoodsMovementStatus` | | ✓ | | | | |
| `_DeliveryRelatedBillingStatus` | | ✓ | | | | |
| `_ProofOfDeliveryStatus` | | ✓ | | | | |
| `_ItemGeneralIncompletionStatus` | | ✓ | | | | |
| `_ItemDelivIncompletionSts` | | ✓ | | | | |
| `_ItemPickingIncompletionStatus` | | ✓ | | | | |
| `_ItemGdsMvtIncompletionSts` | | ✓ | | | | |
| `_ItemPackingIncompletionStatus` | | ✓ | | | | |
| `_ItemBillingIncompletionStatus` | | ✓ | | | | |
| `_StockType` | | ✓ | | | | |
| `_StockType_2` | | ✓ | | | | |
| `_StockCategory` | | ✓ | | | | |
| `_SafetyDataSheetStatus` | | ✓ | | | | |
| `_ChmlCmplncStatus` | | ✓ | | | | |
| `_DangerousGoodsStatus` | | ✓ | | | | |
| `_ExciseTaxStatus` | | ✓ | | | | |
| `_TrdCmplncLegalControlSts` | | ✓ | | | | |
| `_TrdCmplncEmbargoSts` | | ✓ | | | | |
| `_TrdCmplncSnctndListChkSts` | | ✓ | | | | |
| `_ValueChainCategory` | | ✓ | | | | |
| `_FieldLogisticsIndicator` | | ✓ | | | | |
| `_WBSElementBasicData` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_OutboundDelivery` | `I_OutboundDelivery` | [1..1] |
| `_Partner` | `I_SDDocumentItemPartner` | [0..*] |
| `_FldLogsDelivRefLinkInfo` | `I_FldLogsDelivRefLinkInfo` | [0..1] |
| `_Extension` | `E_DeliveryDocumentItem` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE //Inserted by VDM CDS Suite Plugin
@ObjectModel.representativeKey: 'OutboundDeliveryItem'
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #L
//Commented by VDM CDS Suite Plugin:@ObjectModel.representativeKey: 'OutboundDeliveryItem'
@EndUserText.label: 'Outbound Delivery Document Item'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction: { enabled: true, 
                             delta.changeDataCapture.mapping: [{
                               role: #MAIN,
                               table: 'LIPS',
                               tableElement: ['VBELN','POSNR'],
                               viewElement: ['OutboundDelivery', 'OutboundDeliveryItem']
                             }]
                           } 
@Metadata.allowExtensions: true
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#CHECK
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
//@AccessControl.privilegedAssociations:  [ '_Extension' ]
@AbapCatalog.sqlViewName: 'ILEOUTBDELIVITM'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: [ #ANALYTICAL_DIMENSION ]
@ObjectModel.sapObjectNodeType.name:'OutboundDeliveryItem'

define view I_OutboundDeliveryItem
  as select from I_DeliveryDocumentItem
  //Association
  association [1..1] to I_OutboundDelivery        as _OutboundDelivery        on  $projection.OutboundDelivery = _OutboundDelivery.OutboundDelivery

  //The following shall be removed when the cast bug is fixed.
  association [0..*] to I_SDDocumentItemPartner   as _Partner                 on  $projection.OutboundDelivery     = _Partner.SDDocument
                                                                              and $projection.OutboundDeliveryItem = _Partner.SDDocumentItem
  association [0..1] to I_FldLogsDelivRefLinkInfo as _FldLogsDelivRefLinkInfo on  $projection.OutboundDelivery     = _FldLogsDelivRefLinkInfo.DeliveryDocument
                                                                              and $projection.OutboundDeliveryItem = _FldLogsDelivRefLinkInfo.DeliveryDocumentItem

  //Extensibility
  association [0..1] to E_DeliveryDocumentItem    as _Extension               on  $projection.OutboundDelivery     = _Extension.DeliveryDocument

                                                                              and $projection.OutboundDeliveryItem = _Extension.DeliveryDocumentItem

{
      //Key
      @ObjectModel.foreignKey.association: '_OutboundDelivery'
  key cast(DeliveryDocument as outbound_delivery)          as OutboundDelivery,
  key cast(DeliveryDocumentItem as outbound_delivery_item) as OutboundDeliveryItem,

      //Category
      @ObjectModel.foreignKey.association: '_ItemCategory'
      DeliveryDocumentItemCategory,
      @ObjectModel.foreignKey.association: '_SalesDocumentItemType'
      SalesDocumentItemType,

      //Admin
      CreatedByUser,
      @Semantics.systemDate.createdAt: true
      CreationDate,
      CreationTime,
      @Semantics.systemDate.lastChangedAt: true
      LastChangeDate,

      //Organization
      @ObjectModel.foreignKey.association: '_DistributionChannel'
      DistributionChannel,
      @ObjectModel.foreignKey.association: '_Division'
      Division,
      @ObjectModel.foreignKey.association: '_SalesGroup'
      SalesGroup,
      @ObjectModel.foreignKey.association: '_SalesOffice'
      SalesOffice,
      DepartmentClassificationByCust,

      //Product
      @ObjectModel.foreignKey.association: '_Material'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MaterialStdVH', element: 'Material' } } ]
      Material,
      @ObjectModel.foreignKey.association: '_Product'
      Product,
      MaterialByCustomer,
      @ObjectModel.foreignKey.association: '_OriginallyRequestedMaterial'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MaterialStdVH', element: 'Material' } } ]
      OriginallyRequestedMaterial,
      InternationalArticleNumber,
      Batch,
      BatchClassification,
      BatchBySupplier,
      MaterialIsIntBatchManaged,
      MaterialIsBatchManaged,
      @ObjectModel.foreignKey.association: '_MaterialGroup'
      MaterialGroup,
      @ObjectModel.foreignKey.association: '_ProductGroup'
      ProductGroup,
      @ObjectModel.foreignKey.association: '_MaterialFreightGroup'
      MaterialFreightGroup,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup1'
      AdditionalMaterialGroup1,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup2'
      AdditionalMaterialGroup2,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup3'
      AdditionalMaterialGroup3,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup4'
      AdditionalMaterialGroup4,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup5'
      AdditionalMaterialGroup5,
      @ObjectModel.foreignKey.association: '_Plant'
      Plant,
      @ObjectModel.foreignKey.association: '_Warehouse'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_WarehouseStdVH', element: 'Warehouse' } } ]
      Warehouse,
      @ObjectModel.foreignKey.association: '_StorageLocation'
      StorageLocation,
      StorageBin,
      StorageType,
      DeliveryItemResourceID,
      @ObjectModel.foreignKey.association: '_InventorySpecialStockType'
      InventorySpecialStockType,
      ShelfLifeExpirationDate,
      NumberOfSerialNumbers,
      ProductConfiguration,
      ProductHierarchyNode,
      ManufactureDate,
      @Semantics.currencyCode: true
      TransactionCurrency,

      //Delivery
      DeliveryDocumentItemText,
      HigherLevelItem,
      HigherLvlItmOfBatSpltItm,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'DeliveryQuantityUnit'
      ActualDeliveryQuantity,
      QuantityIsFixed,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'DeliveryQuantityUnit'
      OriginalDeliveryQuantity,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_DeliveryQuantityUnit'
      DeliveryQuantityUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      ActualDeliveredQtyInBaseUnit,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_BaseUnit'
      BaseUnit,
      DeliveryToBaseQuantityDnmntr,
      DeliveryToBaseQuantityNmrtr,
      ProductAvailabilityDate,
      ProductAvailabilityTime,
      DeliveryGroup,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      ItemGrossWeight,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      ItemNetWeight,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_ItemWeightUnit'
      ItemWeightUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'ItemVolumeUnit'
      ItemVolume,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_ItemVolumeUnit'
      ItemVolumeUnit,
      InspectionLot,
      InspectionPartialLot,
      PartialDeliveryIsAllowed,
      UnlimitedOverdeliveryIsAllowed,
      OverdelivTolrtdLmtRatioInPct,
      UnderdelivTolrtdLmtRatioInPct,
      @ObjectModel.foreignKey.association: '_BOMExplosion'
      BOMExplosion,
      @ObjectModel.foreignKey.association: '_WarehouseStagingArea'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_WarehouseStagingAreaStdVH', element: 'WarehouseStagingArea' },
                                            additionalBinding: [{localElement: 'Warehouse', element: 'Warehouse' } ] } ]
      WarehouseStagingArea,
      @ObjectModel.foreignKey.association: '_StockCategory'
      WarehouseStockCategory,
      @ObjectModel.foreignKey.association: '_StockType_2'
      StockType,
      GLAccount,
      GoodsMovementReasonCode,
      SubsequentMovementType,
      IsCompletelyDelivered,
      IsNotGoodsMovementsRelevant,
      //Pick Pack Load
      @ObjectModel.foreignKey.association: '_PickingControl'
      PickingControl,
      @ObjectModel.foreignKey.association: '_LoadingGroup'
      LoadingGroup,
      @ObjectModel.foreignKey.association: '_GoodsMovementType'
      GoodsMovementType,

      LoadingPointForDelivery,

      //Shipping
      @ObjectModel.foreignKey.association: '_TransportationGroup'
      TransportationGroup,
      ReceivingPoint,
      FixedShipgProcgDurationInDays,
      VarblShipgProcgDurationInDays,
      ProofOfDeliveryRelevanceCode,

      //Billing
      @ObjectModel.foreignKey.association: '_ItemIsBillingRelevant'
      ItemIsBillingRelevant,
      @ObjectModel.foreignKey.association: '_ItemBillingBlockReason'
      ItemBillingBlockReason,

      //Accounting
      @ObjectModel.foreignKey.association: '_BusinessArea'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_BusinessAreaStdVH', element: 'BusinessArea' } } ]
      BusinessArea,
      @ObjectModel.foreignKey.association: '_ControllingArea'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ControllingAreaStdVH', element: 'ControllingArea' } } ]
      ControllingArea,
      //ProfitabilitySegment,

      @API.element.releaseState: #DECOMMISSIONED
      @API.element.successor: 'ProfitabilitySegment_2'
      cast( case when ProfitabilitySegment_2 > '9999999999' then '9999999999' else lpad( ProfitabilitySegment_2, 10, '0' ) end as rkeobjnr_numc )  as ProfitabilitySegment,
      ProfitabilitySegment_2,

      @ObjectModel.foreignKey.association: '_ProfitCenter'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProfitCenterStdVH', element: 'ProfitCenter' },
                                            additionalBinding: [{localElement: 'ControllingArea', element: 'ControllingArea' } ] } ]
      ProfitCenter,
      @ObjectModel.foreignKey.association: '_InventoryValuationType'
      InventoryValuationType,
      IsSeparateValuation,
      ConsumptionPosting,
      @ObjectModel.foreignKey.association: '_OrderID'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MfgOrderStdVH', element: 'ManufacturingOrder' } } ]
      OrderID,
      OrderItem,
      CostCenter,

      //Reference
      @ObjectModel.foreignKey.association: '_ReferenceSDDocument'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_SalesDocumentStdVH', element: 'SalesDocument' } } ]
      ReferenceSDDocument,
      @ObjectModel.foreignKey.association: '_ReferenceSalesDocumentItem'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_SalesDocumentItemStdVH', element: 'SalesDocumentItem' },                                         additionalBinding: [{localElement: 'ReferenceSDDocument', element: 'SalesDocument' } ] } ]
      ReferenceSDDocumentItem,
      @ObjectModel.foreignKey.association: '_ReferenceSDDocumentCategory'
      ReferenceSDDocumentCategory,
      @ObjectModel.foreignKey.association: '_LogicalSystem'
      ReferenceDocumentLogicalSystem,

      @ObjectModel.foreignKey.association: '_PurchaseOrder'
      PurchaseOrder,
      @ObjectModel.foreignKey.association: '_PurchaseOrderItem'       
      PurchaseOrderItem,
      
      //Sales
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup1'
      AdditionalCustomerGroup1,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup2'
      AdditionalCustomerGroup2,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup3'
      AdditionalCustomerGroup3,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup4'
      AdditionalCustomerGroup4,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup5'
      AdditionalCustomerGroup5,
      RetailPromotion,

      //Status
      @ObjectModel.foreignKey.association: '_SDProcessStatus'
      SDProcessStatus,
      @ObjectModel.foreignKey.association: '_PickingConfirmationStatus'
      PickingConfirmationStatus,
      @ObjectModel.foreignKey.association: '_PickingStatus'
      PickingStatus,
      @ObjectModel.foreignKey.association: '_WarehouseActivityStatus'
      WarehouseActivityStatus,
      @ObjectModel.foreignKey.association: '_PackingStatus'
      PackingStatus,
      @ObjectModel.foreignKey.association: '_GoodsMovementStatus'
      GoodsMovementStatus,
      @ObjectModel.foreignKey.association: '_DeliveryRelatedBillingStatus'
      DeliveryRelatedBillingStatus,
      @ObjectModel.foreignKey.association: '_ProofOfDeliveryStatus'
      ProofOfDeliveryStatus,
      @ObjectModel.foreignKey.association: '_ItemGeneralIncompletionStatus'
      ItemGeneralIncompletionStatus,
      @ObjectModel.foreignKey.association: '_ItemDelivIncompletionSts'
      ItemDeliveryIncompletionStatus,
      @ObjectModel.foreignKey.association: '_ItemPickingIncompletionStatus'
      ItemPickingIncompletionStatus,
      @ObjectModel.foreignKey.association: '_ItemGdsMvtIncompletionSts'
      ItemGdsMvtIncompletionSts,
      @ObjectModel.foreignKey.association: '_ItemPackingIncompletionStatus'
      ItemPackingIncompletionStatus,
      @ObjectModel.foreignKey.association: '_ItemBillingIncompletionStatus'
      ItemBillingIncompletionStatus,
      IntercompanyBillingStatus,
      @ObjectModel.foreignKey.association: '_ChmlCmplncStatus'
      ChmlCmplncStatus,
      @ObjectModel.foreignKey.association: '_DangerousGoodsStatus'
      DangerousGoodsStatus,
      @ObjectModel.foreignKey.association: '_SafetyDataSheetStatus'
      SafetyDataSheetStatus,
      @ObjectModel.foreignKey.association: '_TrdCmplncLegalControlSts'
      I_DeliveryDocumentItem.TrdCmplncLegalControlSts,
      @ObjectModel.foreignKey.association: '_TrdCmplncEmbargoSts'
      I_DeliveryDocumentItem.TrdCmplncEmbargoSts,
      @ObjectModel.foreignKey.association: '_TrdCmplncSnctndListChkSts'
      I_DeliveryDocumentItem.TrdCmplncSnctndListChkSts,


      // Fashion Management
      RequirementSegment,
      StockSegment,
      ProductSeasonYear,
      ProductSeason,
      ProductCollection,
      ProductTheme,
      ProductCharacteristic1,
      ProductCharacteristic2,
      ProductCharacteristic3,

      //Vistex Integration
      OriginSDDocument,
      SDDocumentItem,
      SalesSDDocumentCategory,
      MaterialTypePrimary,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      CostInDocumentCurrency,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      Subtotal1Amount,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      Subtotal2Amount,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      Subtotal3Amount,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      Subtotal4Amount,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      Subtotal5Amount,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      Subtotal6Amount,
      OrderDocument,
      PlanningMaterial,
      PlanningPlant,
      ProductGroupBaseUnit,
      ConversionFactor,
      IsReturnsItem,
      ConditionUnit,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      NetPriceAmount,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      TotalNetAmount,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      QtyInPurchaseOrderPriceUnit,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      @API.element.releaseState:  #DEPRECATED
      @API.element.successor: 'CreditRelatedPriceAmount'
      CreditRelatedPrice,
      @Semantics.amount.currencyCode:'TransactionCurrency'
      CreditRelatedPriceAmount,
      DeliveryToBaseUnitCnvrsnFctr,
      FunctionalArea,

      //Subcontracting Cockpit
      Reservation,
      ReservationItem,

      //EMCS Integration - Excise Tax
      @ObjectModel.foreignKey.association: '_ExciseTaxStatus'
      EU_DeliveryItemARCStatus,

      FldLogsStatus,

      ValueChainInstanceChar32UUID,

      @ObjectModel.foreignKey.association: '_ValueChainCategory'
      ValueChainCategory,

      // Intercompany Document References
      @ObjectModel.foreignKey.association: '_IntcoRefSDDocumentCategory'
      IntcoRefSDDocumentCategory,
      @ObjectModel.foreignKey.association: '_IntcoRefSDDocument'
      IntcoRefSDDocument,
      @ObjectModel.foreignKey.association: '_IntcoRefSDDocumentItem'
      IntcoRefSDDocumentItem,
      
      @ObjectModel.foreignKey.association: '_WBSElementBasicData'      
      WBSElementInternalID,  
      
      // Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT,
                                     #TO_COMPOSITION_ROOT]
      _OutboundDelivery,
      _Partner,
      _ItemCategory,
      _SalesDocumentItemType,
      _CreatedByUser,
      _DistributionChannel,
      _Division,
      _SalesGroup,
      _SalesOffice,
      _Material,
      _Product,
      _OriginallyRequestedMaterial,
      _ProductHierarchyNode,
      _MaterialGroup,
      _ProductGroup,
      _MaterialFreightGroup,
      _AdditionalMaterialGroup1,
      _AdditionalMaterialGroup2,
      _AdditionalMaterialGroup3,
      _AdditionalMaterialGroup4,
      _AdditionalMaterialGroup5,
      _Plant,
      _Warehouse,
      _StorageLocation,
      _InventorySpecialStockType,
      _DeliveryQuantityUnit,
      _BaseUnit,
      _ItemWeightUnit,
      _ItemVolumeUnit,
      _BOMExplosion,
      _PickingControl,
      _LoadingGroup,
      _GoodsMovementType,
      _TransportationGroup,
      _ItemIsBillingRelevant,
      _ItemBillingBlockReason,
      _BusinessArea,
      _ControllingArea,
      _ProfitCenter,
      _InventoryValuationType,
      _OrderID,
      _CostCenter,
      _ReferenceSDDocument,
      _ReferenceSalesDocumentItem,
      _ReferenceSDDocumentCategory,
      _PurchaseOrder,
      _PurchaseOrderItem,    
      _IntcoRefSDDocument,
      _IntcoRefSDDocumentItem,
      _IntcoRefSDDocumentCategory,        
      _LogicalSystem,
      _AdditionalCustomerGroup1,
      _AdditionalCustomerGroup2,
      _AdditionalCustomerGroup3,
      _AdditionalCustomerGroup4,
      _AdditionalCustomerGroup5,
      _SDProcessStatus,
      _PickingConfirmationStatus,
      _PickingStatus,
      _WarehouseActivityStatus,
      _WarehouseStagingArea,
      _PackingStatus,
      _GoodsMovementStatus,
      _DeliveryRelatedBillingStatus,
      _ProofOfDeliveryStatus,
      _ItemGeneralIncompletionStatus,
      _ItemDelivIncompletionSts,
      _ItemPickingIncompletionStatus,
      _ItemGdsMvtIncompletionSts,
      _ItemPackingIncompletionStatus,
      _ItemBillingIncompletionStatus,
      @API.element: { releaseState: #DEPRECATED, successor: '_StockType_2' }
      _StockType,
      _StockType_2,
      _StockCategory,
      _SafetyDataSheetStatus,
      _ChmlCmplncStatus,
      _DangerousGoodsStatus,
      _ExciseTaxStatus,
      _TrdCmplncLegalControlSts,
      _TrdCmplncEmbargoSts,
      _TrdCmplncSnctndListChkSts,
      _ValueChainCategory,
      _FieldLogisticsIndicator,
      _FldLogsDelivRefLinkInfo,
      _WBSElementBasicData
}
where
  SDDocumentCategory = 'J'
```
