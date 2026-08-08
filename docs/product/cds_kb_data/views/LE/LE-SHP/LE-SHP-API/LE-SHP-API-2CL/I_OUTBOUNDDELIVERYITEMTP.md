---
name: I_OUTBOUNDDELIVERYITEMTP
description: "Outbound DeliveryITEMTP"
app_component: LE-SHP-API-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LE
  - LE-SHP
  - LE-SHP-API
  - interface-view
  - transactional-processing
  - delivery
  - item-level
  - component:LE-SHP-API-2CL
  - lob:Logistics Execution
---
# I_OUTBOUNDDELIVERYITEMTP

**Outbound DeliveryITEMTP**

| Property | Value |
|---|---|
| App Component | `LE-SHP-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OutboundDelivery` | ✓ | |  |  |  |  |
| `OutboundDeliveryItem` | ✓ | |  |  |  |  |
| `ActualDeliveredQtyInBaseUnit` |  | |  |  |  |  |
| `ActualDeliveredQtyInOrderUnit` |  | |  |  |  |  |
| `PickQuantityInBaseUnit` |  | |  |  |  |  |
| `PickQuantityInOrderUnit` |  | |  |  |  |  |
| `QuantityIsFixed` |  | |  |  |  |  |
| `OriginalDeliveryQuantity` |  | |  |  |  |  |
| `OrderQuantityUnit` |  | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `DeliveryToBaseQuantityDnmntr` |  | |  |  |  |  |
| `DeliveryToBaseQuantityNmrtr` |  | |  |  |  |  |
| `ItemGrossWeight` |  | |  |  |  |  |
| `ItemNetWeight` |  | |  |  |  |  |
| `ItemWeightUnit` |  | |  |  |  |  |
| `ItemVolume` |  | |  |  |  |  |
| `ItemVolumeUnit` |  | |  |  |  |  |
| `PickStatus` |  | |  |  |  |  |
| `WarehouseActivityStatus` |  | |  |  |  |  |
| `PickConfirmationStatus` |  | |  |  |  |  |
| `PackingStatus` |  | |  |  |  |  |
| `GoodsMovementStatus` |  | |  |  |  |  |
| `ProofOfDeliveryStatus` |  | |  |  |  |  |
| `DeliveryRelatedBillingStatus` |  | |  |  |  |  |
| `IntercompanyBillingStatus` |  | |  |  |  |  |
| `EU_DeliveryItemARCStatus` |  | |  |  |  |  |
| `DeliveryItemProcessStatus` |  | |  |  |  |  |
| `ItemGeneralIncompletionStatus` |  | |  |  |  |  |
| `ItemDeliveryIncompletionStatus` |  | |  |  |  |  |
| `ItemPickIncompletionStatus` |  | |  |  |  |  |
| `ItemGdsMvtIncompletionSts` |  | |  |  |  |  |
| `ItemPackingIncompletionStatus` |  | |  |  |  |  |
| `ItemBillingIncompletionStatus` |  | |  |  |  |  |
| `IsCompletelyDelivered` |  | |  |  |  |  |
| `InspectionLot` |  | |  |  |  |  |
| `InspectionPartialLot` |  | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `DeliveryDocumentItemText` |  | |  |  |  |  |
| `MaterialByCustomer` |  | |  |  |  |  |
| `AlternateProductNumber` |  | |  |  |  |  |
| `CustEngineeringChgStatus` |  | |  |  |  |  |
| `BOMExplosion` |  | |  |  |  |  |
| `HigherLevelItem` |  | |  |  |  |  |
| `InternationalArticleNumber` |  | |  |  |  |  |
| `OriginallyRequestedMaterial` |  | |  |  |  |  |
| `MaterialGroup` |  | |  |  |  |  |
| `AdditionalMaterialGroup1` |  | |  |  |  |  |
| `AdditionalMaterialGroup2` |  | |  |  |  |  |
| `AdditionalMaterialGroup3` |  | |  |  |  |  |
| `AdditionalMaterialGroup4` |  | |  |  |  |  |
| `AdditionalMaterialGroup5` |  | |  |  |  |  |
| `Batch` |  | |  |  |  |  |
| `MaterialIsBatchManaged` |  | |  |  |  |  |
| `ShelfLifeExpirationDate` |  | |  |  |  |  |
| `ManufactureDate` |  | |  |  |  |  |
| `BatchClassification` |  | |  |  |  |  |
| `BatchBySupplier` |  | |  |  |  |  |
| `HigherLvlItmOfBatSpltItm` |  | |  |  |  |  |
| `NumberOfSerialNumbers` |  | |  |  |  |  |
| `ProductConfiguration` |  | |  |  |  |  |
| `ProductHierarchyNode` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `StorageLocation` |  | |  |  |  |  |
| `StorageBin` |  | |  |  |  |  |
| `StorageType` |  | |  |  |  |  |
| `Warehouse` |  | |  |  |  |  |
| `WarehouseStorageBin` |  | |  |  |  |  |
| `WarehouseStagingArea` |  | |  |  |  |  |
| `WarehouseStockCategory` |  | |  |  |  |  |
| `ProductAvailabilityDate` |  | |  |  |  |  |
| `ProductAvailabilityTime` |  | |  |  |  |  |
| `LoadingGroup` |  | |  |  |  |  |
| `TransportationGroup` |  | |  |  |  |  |
| `MaterialFreightGroup` |  | |  |  |  |  |
| `FixedShipgProcgDurationInDays` |  | |  |  |  |  |
| `VarblShipgProcgDurationInDays` |  | |  |  |  |  |
| `ProofOfDeliveryRelevanceCode` |  | |  |  |  |  |
| `ReceivingPoint` |  | |  |  |  |  |
| `BillingRelevanceCode` |  | |  |  |  |  |
| `ItemBillingBlockReason` |  | |  |  |  |  |
| `PaymentGuaranteeForm` |  | |  |  |  |  |
| `BusinessArea` |  | |  |  |  |  |
| `ControllingArea` |  | |  |  |  |  |
| `CostCenter` |  | |  |  |  |  |
| `ProfitCenter` |  | |  |  |  |  |
| `ManufacturingOrder` |  | |  |  |  |  |
| `ManufacturingOrderItem` |  | |  |  |  |  |
| `GLAccount` |  | |  |  |  |  |
| `InventoryValuationType` |  | |  |  |  |  |
| `IsSeparateValuation` |  | |  |  |  |  |
| `DepartmentClassificationByCust` |  | |  |  |  |  |
| `ReferenceSDDocument` |  | |  |  |  |  |
| `ReferenceSDDocumentItem` |  | |  |  |  |  |
| `ReferenceSDDocumentCategory` |  | |  |  |  |  |
| `ReferenceDocumentLogicalSystem` |  | |  |  |  |  |
| `PartialDeliveryIsAllowed` |  | |  |  |  |  |
| `UnlimitedOverdeliveryIsAllowed` |  | |  |  |  |  |
| `OverdelivTolrtdLmtRatioInPct` |  | |  |  |  |  |
| `UnderdelivTolrtdLmtRatioInPct` |  | |  |  |  |  |
| `SalesDocumentItemType` |  | |  |  |  |  |
| `SalesGroup` |  | |  |  |  |  |
| `SalesOffice` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `Division` |  | |  |  |  |  |
| `DeliveryGroup` |  | |  |  |  |  |
| `DeliveryDocumentItemCategory` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `GoodsMovementType` |  | |  |  |  |  |
| `StockType` |  | |  |  |  |  |
| `IsNotGoodsMovementsRelevant` |  | |  |  |  |  |
| `GoodsMovementReasonCode` |  | |  |  |  |  |
| `InventorySpecialStockType` |  | |  |  |  |  |
| `SubsequentMovementType` |  | |  |  |  |  |
| `PrimaryPostingSwitch` |  | |  |  |  |  |
| `ConsumptionPosting` |  | |  |  |  |  |
| `StatisticsDate` |  | |  |  |  |  |
| `AdditionalCustomerGroup1` |  | |  |  |  |  |
| `AdditionalCustomerGroup2` |  | |  |  |  |  |
| `AdditionalCustomerGroup3` |  | |  |  |  |  |
| `AdditionalCustomerGroup4` |  | |  |  |  |  |
| `AdditionalCustomerGroup5` |  | |  |  |  |  |
| `IssgOrRcvgStockCategory` |  | |  |  |  |  |
| `IssgOrRcvgMaterial` |  | |  |  |  |  |
| `IssuingOrReceivingPlant` |  | |  |  |  |  |
| `IssuingOrReceivingStorageLoc` |  | |  |  |  |  |
| `IssgOrRcvgBatch` |  | |  |  |  |  |
| `IssgOrRcvgValuationType` |  | |  |  |  |  |
| `IssgOrRcvgSpclStockCode` |  | |  |  |  |  |
| `_Delivery` | | ✓ | | | | |
| `_SerialNumber` | | ✓ | | | | |
| `_ItemText` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Outbound Delivery Item - TP'
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@ObjectModel: {
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
    modelingPattern: #TRANSACTIONAL_INTERFACE,
    usageType: {
        dataClass:      #TRANSACTIONAL,
        serviceQuality: #B,
        sizeCategory:   #XL
    },
    semanticKey: ['OutboundDelivery', 'OutboundDeliveryItem'],
    representativeKey: 'OutboundDeliveryItem'
}
@Metadata.ignorePropagatedAnnotations: true
define view entity I_OutboundDeliveryItemTP
  as projection on R_OutboundDeliveryItemTP as _OutboundDeliveryItemTP
{
      // Key fields
      @ObjectModel.foreignKey.association: '_Delivery'
  key OutboundDelivery,
  key OutboundDeliveryItem,

      // Quantities
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      ActualDeliveredQtyInBaseUnit,
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      ActualDeliveredQtyInOrderUnit,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      PickQuantityInBaseUnit,
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      PickQuantityInOrderUnit,
      QuantityIsFixed,
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      OriginalDeliveryQuantity,
      OrderQuantityUnit,
      BaseUnit,
      DeliveryToBaseQuantityDnmntr,
      DeliveryToBaseQuantityNmrtr,

      // Weight and Volume
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      ItemGrossWeight,
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      ItemNetWeight,
      ItemWeightUnit,
      @Semantics.quantity.unitOfMeasure: 'ItemVolumeUnit'
      ItemVolume,
      ItemVolumeUnit,

      // Item Status
      PickStatus,
      WarehouseActivityStatus,
      PickConfirmationStatus,
      PackingStatus,
      GoodsMovementStatus,
      ProofOfDeliveryStatus,
      DeliveryRelatedBillingStatus,
      IntercompanyBillingStatus,
      EU_DeliveryItemARCStatus,
      DeliveryItemProcessStatus,
      ItemGeneralIncompletionStatus,
      ItemDeliveryIncompletionStatus,
      ItemPickIncompletionStatus,
      ItemGdsMvtIncompletionSts,
      ItemPackingIncompletionStatus,
      ItemBillingIncompletionStatus,
      IsCompletelyDelivered,

      // Quality Inspection
      InspectionLot,
      InspectionPartialLot,

      // Material
      Material,
      DeliveryDocumentItemText,
      MaterialByCustomer,
      AlternateProductNumber,
      CustEngineeringChgStatus,
      BOMExplosion,
      HigherLevelItem,
      InternationalArticleNumber,
      OriginallyRequestedMaterial,
      MaterialGroup,
      AdditionalMaterialGroup1,
      AdditionalMaterialGroup2,
      AdditionalMaterialGroup3,
      AdditionalMaterialGroup4,
      AdditionalMaterialGroup5,

      // Batch
      Batch,
      MaterialIsBatchManaged,
      ShelfLifeExpirationDate,
      ManufactureDate,
      BatchClassification,
      BatchBySupplier,
      HigherLvlItmOfBatSpltItm,
      NumberOfSerialNumbers,
      ProductConfiguration,
      ProductHierarchyNode,

      // Warehouse
      Plant,
      StorageLocation,
      StorageBin,
      StorageType,
      Warehouse,
      WarehouseStorageBin,
      WarehouseStagingArea,
      WarehouseStockCategory,
      ProductAvailabilityDate,
      ProductAvailabilityTime,

      // Loading and Shipment
      LoadingGroup,
      TransportationGroup,
      MaterialFreightGroup,
      FixedShipgProcgDurationInDays,
      VarblShipgProcgDurationInDays,
      ProofOfDeliveryRelevanceCode,
      ReceivingPoint,

      // Financial Processing
      // Billing Document
      BillingRelevanceCode,
      ItemBillingBlockReason,
      PaymentGuaranteeForm,
      // Account Assignment
      BusinessArea,
      ControllingArea,
      CostCenter,
      ProfitCenter,
      ManufacturingOrder,
      ManufacturingOrderItem,
      GLAccount,
      InventoryValuationType,
      IsSeparateValuation,
      DepartmentClassificationByCust,

      // Predecessor Data
      // Order
      ReferenceSDDocument,
      ReferenceSDDocumentItem,
      ReferenceSDDocumentCategory,
      ReferenceDocumentLogicalSystem,
      PartialDeliveryIsAllowed,
      UnlimitedOverdeliveryIsAllowed,
      OverdelivTolrtdLmtRatioInPct,
      UnderdelivTolrtdLmtRatioInPct,
      SalesDocumentItemType,
      SalesGroup,
      SalesOffice,

      // Administration
      // Organization
      DistributionChannel,
      Division,
      DeliveryGroup,
      DeliveryDocumentItemCategory,

      @Semantics.user.createdBy: true
      CreatedByUser,
      @Semantics.systemDate.createdAt: true
      CreationDate,
      @Semantics.systemDate.createdAt: true
      CreationTime,
      @Semantics.systemDate.lastChangedAt: true
      LastChangeDate,

      // Control
      GoodsMovementType,
      StockType,
      @Semantics.booleanIndicator: true
      IsNotGoodsMovementsRelevant,
      GoodsMovementReasonCode,
      InventorySpecialStockType,
      SubsequentMovementType,
      PrimaryPostingSwitch,
      ConsumptionPosting,
      StatisticsDate,

      AdditionalCustomerGroup1,
      AdditionalCustomerGroup2,
      AdditionalCustomerGroup3,
      AdditionalCustomerGroup4,
      AdditionalCustomerGroup5,

      // Stock Transfer Posting
      IssgOrRcvgStockCategory,
      IssgOrRcvgMaterial,
      IssuingOrReceivingPlant,
      IssuingOrReceivingStorageLoc,
      IssgOrRcvgBatch,
      IssgOrRcvgValuationType,
      IssgOrRcvgSpclStockCode,

      /* Associations */
      _Delivery     : redirected to parent I_OutboundDeliveryTP,
      _SerialNumber : redirected to composition child I_OutbDelivItemSerialNumberTP,
      _ItemText     : redirected to composition child I_OutboundDeliveryItemTextTP

}
```
