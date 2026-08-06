---
name: I_CUSTOMERRETURNDELIVERYITEM
description: Customerreturndeliveryitem
app_component: LE-SHP-GF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LE
  - LE-SHP
  - LE-SHP-GF
  - interface-view
  - delivery
  - customer
  - item-level
  - component:LE-SHP-GF-2CL
  - lob:Logistics Execution
  - bo:Customer
---
# I_CUSTOMERRETURNDELIVERYITEM

**Customerreturndeliveryitem**

| Property | Value |
|---|---|
| App Component | `LE-SHP-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CustomerReturnDelivery` | `cast(DeliveryDocument as customer_return_delivery)` |
| key `CustomerReturnDeliveryItem` | `cast(DeliveryDocumentItem as customer_return_delivery_item)` |
| `DeliveryDocumentItemCategory` | `DeliveryDocumentItemCategory` |
| `SalesDocumentItemType` | `SalesDocumentItemType` |
| `HigherLvlItmOfBatSpltItm` | `HigherLvlItmOfBatSpltItm` |
| `CreatedByUser` | `CreatedByUser` |
| `CreationDate` | `CreationDate` |
| `CreationTime` | `CreationTime` |
| `LastChangeDate` | `LastChangeDate` |
| `DistributionChannel` | `DistributionChannel` |
| `Division` | `Division` |
| `SalesGroup` | `SalesGroup` |
| `SalesOffice` | `SalesOffice` |
| `DepartmentClassificationByCust` | `DepartmentClassificationByCust` |
| `Material` | `Material` |
| `MaterialByCustomer` | `MaterialByCustomer` |
| `OriginallyRequestedMaterial` | `OriginallyRequestedMaterial` |
| `InternationalArticleNumber` | `InternationalArticleNumber` |
| `Batch` | `Batch` |
| `BatchClassification` | `BatchClassification` |
| `BatchBySupplier` | `BatchBySupplier` |
| `MaterialIsIntBatchManaged` | `MaterialIsIntBatchManaged` |
| `MaterialIsBatchManaged` | `MaterialIsBatchManaged` |
| `MaterialGroup` | `MaterialGroup` |
| `MaterialFreightGroup` | `MaterialFreightGroup` |
| `AdditionalMaterialGroup1` | `AdditionalMaterialGroup1` |
| `AdditionalMaterialGroup2` | `AdditionalMaterialGroup2` |
| `AdditionalMaterialGroup3` | `AdditionalMaterialGroup3` |
| `AdditionalMaterialGroup4` | `AdditionalMaterialGroup4` |
| `AdditionalMaterialGroup5` | `AdditionalMaterialGroup5` |
| `Plant` | `Plant` |
| `Warehouse` | `Warehouse` |
| `StorageLocation` | `StorageLocation` |
| `StorageBin` | `StorageBin` |
| `StorageType` | `StorageType` |
| `InventorySpecialStockType` | `InventorySpecialStockType` |
| `ShelfLifeExpirationDate` | `ShelfLifeExpirationDate` |
| `NumberOfSerialNumbers` | `NumberOfSerialNumbers` |
| `ProductConfiguration` | `ProductConfiguration` |
| `ProductHierarchyNode` | `ProductHierarchyNode` |
| `ManufactureDate` | `ManufactureDate` |
| `DeliveryDocumentItemText` | `DeliveryDocumentItemText` |
| `HigherLevelItem` | `HigherLevelItem` |
| `ActualDeliveryQuantity` | `ActualDeliveryQuantity` |
| `QuantityIsFixed` | `QuantityIsFixed` |
| `OriginalDeliveryQuantity` | `OriginalDeliveryQuantity` |
| `DeliveryQuantityUnit` | `DeliveryQuantityUnit` |
| `ActualDeliveredQtyInBaseUnit` | `ActualDeliveredQtyInBaseUnit` |
| `BaseUnit` | `BaseUnit` |
| `DeliveryToBaseQuantityDnmntr` | `DeliveryToBaseQuantityDnmntr` |
| `DeliveryToBaseQuantityNmrtr` | `DeliveryToBaseQuantityNmrtr` |
| `ProductAvailabilityDate` | `ProductAvailabilityDate` |
| `ProductAvailabilityTime` | `ProductAvailabilityTime` |
| `DeliveryGroup` | `DeliveryGroup` |
| `ItemGrossWeight` | `ItemGrossWeight` |
| `ItemNetWeight` | `ItemNetWeight` |
| `ItemWeightUnit` | `ItemWeightUnit` |
| `ItemVolume` | `ItemVolume` |
| `ItemVolumeUnit` | `ItemVolumeUnit` |
| `InspectionLot` | `InspectionLot` |
| `InspectionPartialLot` | `InspectionPartialLot` |
| `PartialDeliveryIsAllowed` | `PartialDeliveryIsAllowed` |
| `UnlimitedOverdeliveryIsAllowed` | `UnlimitedOverdeliveryIsAllowed` |
| `OverdelivTolrtdLmtRatioInPct` | `OverdelivTolrtdLmtRatioInPct` |
| `UnderdelivTolrtdLmtRatioInPct` | `UnderdelivTolrtdLmtRatioInPct` |
| `BOMExplosion` | `BOMExplosion` |
| `WarehouseStockCategory` | `WarehouseStockCategory` |
| `IsNotGoodsMovementsRelevant` | `IsNotGoodsMovementsRelevant` |
| `StockType` | `StockType` |
| `GLAccount` | `GLAccount` |
| `GoodsMovementReasonCode` | `GoodsMovementReasonCode` |
| `IsCompletelyDelivered` | `IsCompletelyDelivered` |
| `PickingControl` | `PickingControl` |
| `LoadingGroup` | `LoadingGroup` |
| `GoodsMovementType` | `GoodsMovementType` |
| `TransportationGroup` | `TransportationGroup` |
| `ReceivingPoint` | `ReceivingPoint` |
| `FixedShipgProcgDurationInDays` | `FixedShipgProcgDurationInDays` |
| `VarblShipgProcgDurationInDays` | `VarblShipgProcgDurationInDays` |
| `ProofOfDeliveryRelevanceCode` | `ProofOfDeliveryRelevanceCode` |
| `ItemIsBillingRelevant` | `ItemIsBillingRelevant` |
| `ItemBillingBlockReason` | `ItemBillingBlockReason` |
| `BusinessArea` | `BusinessArea` |
| `ControllingArea` | `ControllingArea` |
| `ProfitabilitySegment` | `cast( case when ProfitabilitySegment_2 > '9999999999' then '9999999999' else lpad( ProfitabilitySegment_2, 10, '0' ) end as rkeobjnr_numc )` |
| `ProfitabilitySegment_2` | `ProfitabilitySegment_2` |
| `ProfitCenter` | `ProfitCenter` |
| `InventoryValuationType` | `InventoryValuationType` |
| `IsSeparateValuation` | `IsSeparateValuation` |
| `ConsumptionPosting` | `ConsumptionPosting` |
| `OrderID` | `OrderID` |
| `OrderItem` | `OrderItem` |
| `CostCenter` | `CostCenter` |
| `ReferenceSDDocument` | `ReferenceSDDocument` |
| `ReferenceSDDocumentItem` | `ReferenceSDDocumentItem` |
| `ReferenceSDDocumentCategory` | `ReferenceSDDocumentCategory` |
| `ReferenceDocumentLogicalSystem` | `ReferenceDocumentLogicalSystem` |
| `AdditionalCustomerGroup1` | `AdditionalCustomerGroup1` |
| `AdditionalCustomerGroup2` | `AdditionalCustomerGroup2` |
| `AdditionalCustomerGroup3` | `AdditionalCustomerGroup3` |
| `AdditionalCustomerGroup4` | `AdditionalCustomerGroup4` |
| `AdditionalCustomerGroup5` | `AdditionalCustomerGroup5` |
| `RetailPromotion` | `RetailPromotion` |
| `SDProcessStatus` | `SDProcessStatus` |
| `PickingConfirmationStatus` | `PickingConfirmationStatus` |
| `PickingStatus` | `PickingStatus` |
| `PutawayStatus` | `PickingStatus` |
| `WarehouseActivityStatus` | `WarehouseActivityStatus` |
| `PackingStatus` | `PackingStatus` |
| `GoodsMovementStatus` | `GoodsMovementStatus` |
| `DeliveryRelatedBillingStatus` | `DeliveryRelatedBillingStatus` |
| `ProofOfDeliveryStatus` | `ProofOfDeliveryStatus` |
| `ItemGeneralIncompletionStatus` | `ItemGeneralIncompletionStatus` |
| `ItemDeliveryIncompletionStatus` | `ItemDeliveryIncompletionStatus` |
| `ItemPickingIncompletionStatus` | `ItemPickingIncompletionStatus` |
| `ItemGdsMvtIncompletionSts` | `ItemGdsMvtIncompletionSts` |
| `ItemPackingIncompletionStatus` | `ItemPackingIncompletionStatus` |
| `ItemBillingIncompletionStatus` | `ItemBillingIncompletionStatus` |
| `IntercompanyBillingStatus` | `IntercompanyBillingStatus` |
| `ChmlCmplncStatus` | `ChmlCmplncStatus` |
| `DangerousGoodsStatus` | `DangerousGoodsStatus` |
| `SafetyDataSheetStatus` | `SafetyDataSheetStatus` |
| `RequirementSegment` | `RequirementSegment` |
| `StockSegment` | `StockSegment` |
| `ProductSeasonYear` | `ProductSeasonYear` |
| `ProductSeason` | `ProductSeason` |
| `ProductCollection` | `ProductCollection` |
| `ProductTheme` | `ProductTheme` |
| `ProductCharacteristic1` | `ProductCharacteristic1` |
| `ProductCharacteristic2` | `ProductCharacteristic2` |
| `ProductCharacteristic3` | `ProductCharacteristic3` |
| `_CustomerReturnDelivery` | *Association* |
| `_PutawayStatus` | *Association* |
| `_Partner` | *Association* |
| `_ItemCategory` | *Association* |
| `_SalesDocumentItemType` | *Association* |
| `_CreatedByUser` | *Association* |
| `_DistributionChannel` | *Association* |
| `_Division` | *Association* |
| `_SalesGroup` | *Association* |
| `_SalesOffice` | *Association* |
| `_Material` | *Association* |
| `_OriginallyRequestedMaterial` | *Association* |
| `_MaterialGroup` | *Association* |
| `_MaterialFreightGroup` | *Association* |
| `_AdditionalMaterialGroup1` | *Association* |
| `_AdditionalMaterialGroup2` | *Association* |
| `_AdditionalMaterialGroup3` | *Association* |
| `_AdditionalMaterialGroup4` | *Association* |
| `_AdditionalMaterialGroup5` | *Association* |
| `_Plant` | *Association* |
| `_Warehouse` | *Association* |
| `_StorageLocation` | *Association* |
| `_InventorySpecialStockType` | *Association* |
| `_DeliveryQuantityUnit` | *Association* |
| `_BaseUnit` | *Association* |
| `_ItemWeightUnit` | *Association* |
| `_ItemVolumeUnit` | *Association* |
| `_BOMExplosion` | *Association* |
| `_PickingControl` | *Association* |
| `_LoadingGroup` | *Association* |
| `_GoodsMovementType` | *Association* |
| `_TransportationGroup` | *Association* |
| `_ItemIsBillingRelevant` | *Association* |
| `_ItemBillingBlockReason` | *Association* |
| `_BusinessArea` | *Association* |
| `_ControllingArea` | *Association* |
| `_ProfitCenter` | *Association* |
| `_InventoryValuationType` | *Association* |
| `_OrderID` | *Association* |
| `_CostCenter` | *Association* |
| `_ReferenceSDDocument` | *Association* |
| `_ReferenceSalesDocumentItem` | *Association* |
| `_ReferenceSDDocumentCategory` | *Association* |
| `_LogicalSystem` | *Association* |
| `_AdditionalCustomerGroup1` | *Association* |
| `_AdditionalCustomerGroup2` | *Association* |
| `_AdditionalCustomerGroup3` | *Association* |
| `_AdditionalCustomerGroup4` | *Association* |
| `_AdditionalCustomerGroup5` | *Association* |
| `_SDProcessStatus` | *Association* |
| `_PickingConfirmationStatus` | *Association* |
| `_PickingStatus` | *Association* |
| `_WarehouseActivityStatus` | *Association* |
| `_PackingStatus` | *Association* |
| `_GoodsMovementStatus` | *Association* |
| `_DeliveryRelatedBillingStatus` | *Association* |
| `_ProofOfDeliveryStatus` | *Association* |
| `_ItemGeneralIncompletionStatus` | *Association* |
| `_ItemDelivIncompletionSts` | *Association* |
| `_ItemPickingIncompletionStatus` | *Association* |
| `_ItemGdsMvtIncompletionSts` | *Association* |
| `_ItemPackingIncompletionStatus` | *Association* |
| `_ItemBillingIncompletionStatus` | *Association* |
| `_StockType` | *Association* |
| `_StockType_2` | *Association* |
| `_StockCategory` | *Association* |
| `_SafetyDataSheetStatus` | *Association* |
| `_ChmlCmplncStatus` | *Association* |
| `_DangerousGoodsStatus` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CustomerReturnDelivery` | `I_CustomerReturnDelivery` | [1..1] |
| `_PutawayStatus` | `I_PutawayStatus` | [0..1] |
| `_Partner` | `I_SDDocumentItemPartner` | [0..*] |
| `_Extension` | `E_DeliveryDocumentItem` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'CustomerReturnDeliveryItem'
@ObjectModel.usageType.dataClass: #TRANSACTIONAL 
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #L
@EndUserText.label: 'Customer Returns Delivery Document Item'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction: { enabled: true, 
                             delta.changeDataCapture.mapping: [{
                                role: #MAIN,
                                table: 'LIPS',
                                tableElement: ['VBELN','POSNR'],
                                viewElement: ['CustomerReturnDelivery', 'CustomerReturnDeliveryItem']
                             }]
                            }
@Metadata.allowExtensions: true
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#CHECK
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
@AbapCatalog.sqlViewName: 'ILECUSTRTELIVITM'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: [ #ANALYTICAL_DIMENSION ] 
@ObjectModel.sapObjectNodeType.name:'CustomerReturnsDeliveryItem'

define view I_CustomerReturnDeliveryItem
as select from I_DeliveryDocumentItem
//Association
association[1..1] to I_CustomerReturnDelivery as _CustomerReturnDelivery on $projection.CustomerReturnDelivery = _CustomerReturnDelivery.CustomerReturnDelivery
association[0..1] to I_PutawayStatus as _PutawayStatus on $projection.PutawayStatus = _PutawayStatus.PutawayStatus
//The following shall be removed when the cast bug is fixed.
association[0..*] to I_SDDocumentItemPartner as _Partner on $projection.CustomerReturnDelivery = _Partner.SDDocument and $projection.CustomerReturnDeliveryItem = _Partner.SDDocumentItem

//Extensibility
association [0..1] to E_DeliveryDocumentItem as _Extension    on  $projection.CustomerReturnDelivery    = _Extension.DeliveryDocument
                                                                and $projection.CustomerReturnDeliveryItem = _Extension.DeliveryDocumentItem

{
    //Key
    @ObjectModel.foreignKey.association: '_CustomerReturnDelivery'
    key cast(DeliveryDocument as customer_return_delivery) as CustomerReturnDelivery,
    key cast(DeliveryDocumentItem as customer_return_delivery_item) as CustomerReturnDeliveryItem,

    //Category
    @ObjectModel.foreignKey.association: '_ItemCategory'
    DeliveryDocumentItemCategory,
    @ObjectModel.foreignKey.association: '_SalesDocumentItemType'
    SalesDocumentItemType,

    HigherLvlItmOfBatSpltItm,
    
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
    Material,
    MaterialByCustomer,
    @ObjectModel.foreignKey.association: '_OriginallyRequestedMaterial'
    OriginallyRequestedMaterial,
    InternationalArticleNumber,
    Batch,
    BatchClassification,
    BatchBySupplier,
    MaterialIsIntBatchManaged,
    MaterialIsBatchManaged,
    @ObjectModel.foreignKey.association: '_MaterialGroup'
    MaterialGroup,
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
    Warehouse,
    @ObjectModel.foreignKey.association: '_StorageLocation'
    StorageLocation,
    StorageBin,
    StorageType,
    @ObjectModel.foreignKey.association: '_InventorySpecialStockType'
    InventorySpecialStockType,
    ShelfLifeExpirationDate,
    NumberOfSerialNumbers,
    ProductConfiguration,
    ProductHierarchyNode,
    ManufactureDate,

    //Delivery
    DeliveryDocumentItemText,
    HigherLevelItem,    
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
    @ObjectModel.foreignKey.association: '_StockCategory' 
    WarehouseStockCategory,
    IsNotGoodsMovementsRelevant,   
    @ObjectModel.foreignKey.association: '_StockType_2' 
    StockType,
    GLAccount,
    GoodsMovementReasonCode,
    IsCompletelyDelivered,

    //Pick Pack Load
    @ObjectModel.foreignKey.association: '_PickingControl'
    PickingControl,
    @ObjectModel.foreignKey.association: '_LoadingGroup'
    LoadingGroup,
    @ObjectModel.foreignKey.association: '_GoodsMovementType'
    GoodsMovementType,

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
    BusinessArea,
    @ObjectModel.foreignKey.association: '_ControllingArea'
    ControllingArea,
    //ProfitabilitySegment,
    
    @API.element.releaseState: #DECOMMISSIONED
    @API.element.successor: 'ProfitabilitySegment_2'
    cast( case when ProfitabilitySegment_2 > '9999999999' then '9999999999' else lpad( ProfitabilitySegment_2, 10, '0' ) end as rkeobjnr_numc )  as ProfitabilitySegment,  
    ProfitabilitySegment_2,
    
    @ObjectModel.foreignKey.association: '_ProfitCenter'
    ProfitCenter,
    @ObjectModel.foreignKey.association: '_InventoryValuationType'
    InventoryValuationType,
    IsSeparateValuation,
    ConsumptionPosting,
    @ObjectModel.foreignKey.association: '_OrderID'
    OrderID,
    OrderItem,
    CostCenter, 

    //Reference
    @ObjectModel.foreignKey.association: '_ReferenceSDDocument'
    ReferenceSDDocument,
    @ObjectModel.foreignKey.association: '_ReferenceSalesDocumentItem'
    ReferenceSDDocumentItem,
    @ObjectModel.foreignKey.association: '_ReferenceSDDocumentCategory'
    ReferenceSDDocumentCategory,
    @ObjectModel.foreignKey.association: '_LogicalSystem'
    ReferenceDocumentLogicalSystem,

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
    @ObjectModel.foreignKey.association: '_PutawayStatus'
    PickingStatus as PutawayStatus,
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
        
    // Associations
    @ObjectModel.association.type: [#TO_COMPOSITION_PARENT,
                                   #TO_COMPOSITION_ROOT] 
    _CustomerReturnDelivery,
    _Partner,
    _ItemCategory,
    _SalesDocumentItemType,
    _CreatedByUser,
    _DistributionChannel,
    _Division,
    _SalesGroup,
    _SalesOffice,
    _Material,
    _OriginallyRequestedMaterial,
    _MaterialGroup,
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
    _PutawayStatus,
    @API.element: { releaseState: #DEPRECATED, successor: '_StockType_2' }
    _StockType,
    _StockType_2,
    _StockCategory,
    _SafetyDataSheetStatus,
    _ChmlCmplncStatus,
    _DangerousGoodsStatus

} where SDDocumentCategory = 'T'
```
