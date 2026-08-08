---
name: I_CUSTOMERRETURNDELIVERYITEM
description: "Customerreturndeliveryitem"
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

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustomerReturnDelivery` | ✓ | |  | `cast(DeliveryDocument as customer_return_delivery)` |  |  |
| `CustomerReturnDeliveryItem` | ✓ | |  | `cast(DeliveryDocumentItem as customer_return_delivery_item)` |  |  |
| `DeliveryDocumentItemCategory` |  | |  |  |  |  |
| `SalesDocumentItemType` |  | |  |  |  |  |
| `HigherLvlItmOfBatSpltItm` |  | |  |  |  |  |
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
| `MaterialByCustomer` |  | |  |  |  |  |
| `OriginallyRequestedMaterial` |  | |  |  |  |  |
| `InternationalArticleNumber` |  | |  |  |  |  |
| `Batch` |  | |  |  |  |  |
| `BatchClassification` |  | |  |  |  |  |
| `BatchBySupplier` |  | |  |  |  |  |
| `MaterialIsIntBatchManaged` |  | |  |  |  |  |
| `MaterialIsBatchManaged` |  | |  |  |  |  |
| `MaterialGroup` |  | |  |  |  |  |
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
| `InventorySpecialStockType` |  | |  |  |  |  |
| `ShelfLifeExpirationDate` |  | |  |  |  |  |
| `NumberOfSerialNumbers` |  | |  |  |  |  |
| `ProductConfiguration` |  | |  |  |  |  |
| `ProductHierarchyNode` |  | |  |  |  |  |
| `ManufactureDate` |  | |  |  |  |  |
| `DeliveryDocumentItemText` |  | |  |  |  |  |
| `HigherLevelItem` |  | |  |  |  |  |
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
| `WarehouseStockCategory` |  | |  |  |  |  |
| `IsNotGoodsMovementsRelevant` |  | |  |  |  |  |
| `StockType` |  | |  |  |  |  |
| `GLAccount` |  | |  |  |  |  |
| `GoodsMovementReasonCode` |  | |  |  |  |  |
| `IsCompletelyDelivered` |  | |  |  |  |  |
| `PickingControl` |  | |  |  |  |  |
| `LoadingGroup` |  | |  |  |  |  |
| `GoodsMovementType` |  | |  |  |  |  |
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
| `AdditionalCustomerGroup1` |  | |  |  |  |  |
| `AdditionalCustomerGroup2` |  | |  |  |  |  |
| `AdditionalCustomerGroup3` |  | |  |  |  |  |
| `AdditionalCustomerGroup4` |  | |  |  |  |  |
| `AdditionalCustomerGroup5` |  | |  |  |  |  |
| `RetailPromotion` |  | |  |  |  |  |
| `SDProcessStatus` |  | |  |  |  |  |
| `PickingConfirmationStatus` |  | |  |  |  |  |
| `PickingStatus` |  | |  |  |  |  |
| `PutawayStatus` |  | |  | `PickingStatus` |  |  |
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
| `RequirementSegment` |  | |  |  |  |  |
| `StockSegment` |  | |  |  |  |  |
| `ProductSeasonYear` |  | |  |  |  |  |
| `ProductSeason` |  | |  |  |  |  |
| `ProductCollection` |  | |  |  |  |  |
| `ProductTheme` |  | |  |  |  |  |
| `ProductCharacteristic1` |  | |  |  |  |  |
| `ProductCharacteristic2` |  | |  |  |  |  |
| `ProductCharacteristic3` |  | |  |  |  |  |
| `_CustomerReturnDelivery` | | ✓ | | | | |
| `_PutawayStatus` | | ✓ | | | | |
| `_Partner` | | ✓ | | | | |
| `_ItemCategory` | | ✓ | | | | |
| `_SalesDocumentItemType` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_SalesGroup` | | ✓ | | | | |
| `_SalesOffice` | | ✓ | | | | |
| `_Material` | | ✓ | | | | |
| `_OriginallyRequestedMaterial` | | ✓ | | | | |
| `_MaterialGroup` | | ✓ | | | | |
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
