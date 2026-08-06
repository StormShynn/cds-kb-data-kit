---
name: I_EWM_OUTBDELIVORDERITEMTP
description: Ewm Outbdelivorderitemtp
app_component: SCM-EWM-DLP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SCM
  - SCM-EWM
  - SCM-EWM-DLP
  - interface-view
  - transactional-processing
  - item-level
  - component:SCM-EWM-DLP-2CL
  - lob:Other
---
# I_EWM_OUTBDELIVORDERITEMTP

**Ewm Outbdelivorderitemtp**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-DLP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `EWMOutboundDeliveryOrder` | `EWMOutboundDeliveryOrder` |
| key `EWMOutboundDeliveryOrderItem` | `EWMOutboundDeliveryOrderItem` |
| `OutboundDeliveryOrderUUID` | `OutboundDeliveryOrderUUID` |
| `OutboundDeliveryOrderItemUUID` | `OutboundDeliveryOrderItemUUID` |
| `EWMWarehouse` | `EWMWarehouse` |
| `EWMDeliveryDocumentCategory` | `EWMDeliveryDocumentCategory` |
| `EWMOutbDelivOrderItemCategory` | `EWMOutbDelivOrderItemCategory` |
| `EWMOutbDeliveryOrderItemType` | `EWMOutbDeliveryOrderItemType` |
| `Product` | `Product` |
| `ProductExternalID` | `ProductExternalID` |
| `Batch` | `Batch` |
| `ProductQuantity` | `ProductQuantity` |
| `QuantityUnit` | `QuantityUnit` |
| `SerialNumberRequiredLevel` | `SerialNumberRequiredLevel` |
| `StagingArea` | `StagingArea` |
| `StagingAreaGroup` | `StagingAreaGroup` |
| `StagingBay` | `StagingBay` |
| `GoodsIssueStatus` | `GoodsIssueStatus` |
| `PlannedPickingStatus` | `PlannedPickingStatus` |
| `PickingStatus` | `PickingStatus` |
| `CompletionStatus` | `CompletionStatus` |
| `OverallBlockStatus` | `OverallBlockStatus` |
| `LoadingStatus` | `LoadingStatus` |
| `EWMGoodsIssueAndDistrStatus` | `EWMGoodsIssueAndDistrStatus` |
| `EWMPlndPickingAndDistrStatus` | `EWMPlndPickingAndDistrStatus` |
| `PickingAndDistributionStatus` | `PickingAndDistributionStatus` |
| `EWMWhseReqItmBatSpltParentItem` | `EWMWhseReqItmBatSpltParentItem` |
| `EWMWhseReqGrossVolume` | `EWMWhseReqGrossVolume` |
| `EWMWhseReqGrossVolumeUnit` | `EWMWhseReqGrossVolumeUnit` |
| `EWMWhseReqGrossWeight` | `EWMWhseReqGrossWeight` |
| `EWMWhseReqGrossWeightUnit` | `EWMWhseReqGrossWeightUnit` |
| `WarehouseProcessType` | `WarehouseProcessType` |
| `ShippingCondition` | `ShippingCondition` |
| `GoodsMovementBin` | `GoodsMovementBin` |
| `EWMProductionSupplyArea` | `EWMProductionSupplyArea` |
| `EWMDelivLastChangeUTCDateTime` | `EWMDelivLastChangeUTCDateTime` |
| `WarehouseTimeZone` | `WarehouseTimeZone` |
| `EWMStorageType` | `EWMStorageType` |
| `EWMStorageSection` | `EWMStorageSection` |
| `EWMStorageBin` | `EWMStorageBin` |
| `EWMGoodsRecipient` | `EWMGoodsRecipient` |
| `EWMRecipientLocationName` | `EWMRecipientLocationName` |
| `EWMLoadingPoint` | `EWMLoadingPoint` |
| `EWMUnloadingPoint` | `EWMUnloadingPoint` |
| `WarehouseDoor` | `WarehouseDoor` |
| `EWMWhseReqItmHasOpnWhseTsk` | `EWMWhseReqItmHasOpnWhseTsk` |
| `PlndGoodsIssueStartUTCDateTime` | `PlndGoodsIssueStartUTCDateTime` |
| `ActlGoodsIssueStartUTCDateTime` | `ActlGoodsIssueStartUTCDateTime` |
| `EWMWhseReqItmBBDSLEDUTCDteTme` | `EWMWhseReqItmBBDSLEDUTCDteTme` |
| `RouteSchedule` | `RouteSchedule` |
| `EntitledToDisposeParty` | `EntitledToDisposeParty` |
| `EntitledToDisposePartyName` | `EntitledToDisposePartyName` |
| `EWMStockUsage` | `EWMStockUsage` |
| `EWMStockType` | `EWMStockType` |
| `EWMStockOwner` | `EWMStockOwner` |
| `EWMStockOwnerName` | `EWMStockOwnerName` |
| `DeliveryItemStockTypeDetnCode` | `DeliveryItemStockTypeDetnCode` |
| `ExternalStockDocumentNumber` | `ExternalStockDocumentNumber` |
| `WBSElementInternalID` | `WBSElementInternalID` |
| `WBSElementExternalID` | `WBSElementExternalID` |
| `SpecialStockIdfgSalesOrder` | `SpecialStockIdfgSalesOrder` |
| `SpecialStockIdfgSalesOrderItem` | `SpecialStockIdfgSalesOrderItem` |
| `CountryOfOrigin` | `CountryOfOrigin` |
| `SalesOrder` | `SalesOrder` |
| `SalesOrderItem` | `SalesOrderItem` |
| `ManufacturingOrder` | `ManufacturingOrder` |
| `MaintenanceOrder` | `MaintenanceOrder` |
| `MaintenanceOrderOperation` | `MaintenanceOrderOperation` |
| `Reservation` | `Reservation` |
| `PurchaseOrder` | `PurchaseOrder` |
| `OutboundDelivery` | `OutboundDelivery` |
| `OutboundDeliveryItem` | `OutboundDeliveryItem` |
| `StockDocumentCategory` | `StockDocumentCategory` |
| `Plant` | `Plant` |
| `_WhseOutbDeliveryOrderHead` | *Association* |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY

@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.modelingPattern:       #TRANSACTIONAL_INTERFACE
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.semanticKey: ['EWMOutboundDeliveryOrder', 'EWMOutboundDeliveryOrderItem']

@Metadata.ignorePropagatedAnnotations: true
 
@AbapCatalog.extensibility: {
  extensible: true,
  elementSuffix: 'CDI',
  quota: {
    maximumFields: 408 ,  //This is calculated with formula - 2* <Customer Percentage from SCFD_REGISTRY> * <max number of fields in SCFD_REGISTRY>
    maximumBytes: 8160    //This is calculated with formula - 4* <Customer Percentage from SCFD_REGISTRY> * <number of chars as defined in SCFD_REGISTRY>
  },
  dataSources: ['WhseOutbDeliveryOrderItem']
}

@EndUserText.label: 'Outbound Delivery Order Item - TP'
define view entity I_EWM_OutbDelivOrderItemTP
  as projection on R_EWM_OutbDelivOrderItemTP as WhseOutbDeliveryOrderItem 
{
  key EWMOutboundDeliveryOrder,
  key EWMOutboundDeliveryOrderItem,
      OutboundDeliveryOrderUUID,
      OutboundDeliveryOrderItemUUID,
      EWMWarehouse,
      EWMDeliveryDocumentCategory,
      EWMOutbDelivOrderItemCategory,
      EWMOutbDeliveryOrderItemType,

      /* Product & Batch */
      Product,
      ProductExternalID,
      Batch,
      @Semantics.quantity.unitOfMeasure: 'QuantityUnit'
      ProductQuantity,
      QuantityUnit,
      SerialNumberRequiredLevel,

      /* Staging */
      StagingArea,
      StagingAreaGroup,
      StagingBay,

      /* Status */
      GoodsIssueStatus,
      PlannedPickingStatus,
      PickingStatus,
      CompletionStatus,
      OverallBlockStatus,
      LoadingStatus,
      EWMGoodsIssueAndDistrStatus,
      EWMPlndPickingAndDistrStatus,
      PickingAndDistributionStatus,
      
       /*Batch Split Main Item*/
      EWMWhseReqItmBatSpltParentItem,
      
      /* Addmeas */
      @Semantics.quantity.unitOfMeasure: 'EWMWhseReqGrossVolumeUnit'
      EWMWhseReqGrossVolume,
      EWMWhseReqGrossVolumeUnit,
      @Semantics.quantity.unitOfMeasure: 'EWMWhseReqGrossWeightUnit'
      EWMWhseReqGrossWeight,
      EWMWhseReqGrossWeightUnit,

      WarehouseProcessType,
      ShippingCondition,
      GoodsMovementBin,
      EWMProductionSupplyArea,
      EWMDelivLastChangeUTCDateTime,
      WarehouseTimeZone,
      EWMStorageType,
      EWMStorageSection,
      EWMStorageBin,
      EWMGoodsRecipient,
      EWMRecipientLocationName,
      EWMLoadingPoint,
      EWMUnloadingPoint,
      WarehouseDoor,

      /* Warehouse Task */
      @Semantics.booleanIndicator: true
      EWMWhseReqItmHasOpnWhseTsk,

      /* Dates */
      PlndGoodsIssueStartUTCDateTime,
      ActlGoodsIssueStartUTCDateTime,
      
      /* Product Attributes */
      EWMWhseReqItmBBDSLEDUTCDteTme,


      RouteSchedule,
      EntitledToDisposeParty,
      @EndUserText.label: 'Name of Entitled To Dispose Party'
      EntitledToDisposePartyName,
      EWMStockUsage,
      EWMStockType,
      EWMStockOwner,
      @EndUserText.label: 'Name of EWM Stock Owner'
      EWMStockOwnerName,
      DeliveryItemStockTypeDetnCode,

      /* Special Stock */
      ExternalStockDocumentNumber,
      WBSElementInternalID,
      WBSElementExternalID,
      SpecialStockIdfgSalesOrder,
      SpecialStockIdfgSalesOrderItem,
      CountryOfOrigin,

      /* Reference Documents */
      SalesOrder,
      SalesOrderItem,
      ManufacturingOrder,
      MaintenanceOrder,
      MaintenanceOrderOperation,
      Reservation,
      PurchaseOrder,
      OutboundDelivery,
      OutboundDeliveryItem,

      // Must be in due to related TEXT
      StockDocumentCategory,
      
      // Plant from Mapping
      @EndUserText.label: 'Plant'
      Plant,
      
      _WhseOutbDeliveryOrderHead    : redirected to parent I_EWM_OutbDelivOrderHeaderTP
}
```
