---
name: I_EWM_INBDELIVERYITEMTP
description: Ewm Inbdeliveryitemtp
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
  - delivery
  - item-level
  - component:SCM-EWM-DLP-2CL
  - lob:Other
---
# I_EWM_INBDELIVERYITEMTP

**Ewm Inbdeliveryitemtp**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-DLP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `EWMInboundDelivery` | ✓ | |  |  |
| `EWMInboundDeliveryItem` | ✓ | |  |  |
| `InboundDeliveryUUID` |  | |  |  |
| `InboundDeliveryItemUUID` |  | |  |  |
| `EWMWarehouse` |  | |  |  |
| `WarehouseTimeZone` |  | |  |  |
| `EWMDeliveryDocumentCategory` |  | |  |  |
| `EWMInboundDeliveryItemCategory` |  | |  |  |
| `EWMInboundDeliveryItemType` |  | |  |  |
| `Product` |  | |  |  |
| `ProductExternalID` |  | |  |  |
| `Batch` |  | |  |  |
| `EWMWhseReqItmBatchIsCreated` |  | |  |  |
| `EWMBatchBySupplierPlanned` |  | |  |  |
| `EWMProductBySupplier` |  | |  |  |
| `CountryOfOrigin` |  | |  |  |
| `ProductQuantity` |  | |  |  |
| `QuantityUnit` |  | |  |  |
| `EWMInbDelivItmQuantitySAPCode` |  | |  |  |
| `EWMInbDelivItmQuantityISOCode` |  | |  |  |
| `EWMWhseReqItmBatSpltParentItem` |  | |  |  |
| `EWMWhseReqItmHierParentItem` |  | |  |  |
| `SerialNumberRequiredLevel` |  | |  |  |
| `EWMWhseReqItmBBDSLEDUTCDteTme` |  | |  |  |
| `EWMWhseReqItmProdnDteTme` |  | |  |  |
| `StagingAreaGroup` |  | |  |  |
| `StagingArea` |  | |  |  |
| `StagingBay` |  | |  |  |
| `GoodsReceiptStatus` |  | |  |  |
| `EWMGoodsReceiptAndDistrStatus` |  | |  |  |
| `PlanningPutawayStatus` |  | |  |  |
| `EWMPlndPutawayAndDistrStatus` |  | |  |  |
| `PutawayStatus` |  | |  |  |
| `EWMPutawayAndDistrStatus` |  | |  |  |
| `CompletionStatus` |  | |  |  |
| `OverallBlockStatus` |  | |  |  |
| `FldLogsStatus` |  | |  |  |
| `WarehouseProcessType` |  | |  |  |
| `GoodsMovementBin` |  | |  |  |
| `EWMProductionSupplyArea` |  | |  |  |
| `EWMDelivLastChangeUTCDateTime` |  | |  |  |
| `EntitledToDisposeParty` |  | |  |  |
| `EntitledToDisposePartyName` |  | |  |  |
| `EWMStockUsage` |  | |  |  |
| `EWMStockType` |  | |  |  |
| `EWMStockOwner` |  | |  |  |
| `EWMStockOwnerName` |  | |  |  |
| `EWMGoodsRecipient` |  | |  |  |
| `EWMRecipientLocationName` |  | |  |  |
| `DeliveryItemStockTypeDetnCode` |  | |  |  |
| `ExternalStockDocumentNumber` |  | |  |  |
| `StockDocumentCategory` |  | |  |  |
| `WBSElementInternalID` |  | |  |  |
| `WBSElementExternalID` |  | |  |  |
| `SpecialStockIdfgSalesOrder` |  | |  |  |
| `SpecialStockIdfgSalesOrderItem` |  | |  |  |
| `PurchaseOrder` |  | |  |  |
| `PurchaseOrderItem` |  | |  |  |
| `ManufacturingOrder` |  | |  |  |
| `Reservation` |  | |  |  |
| `MaintenanceOrderOperation` |  | |  |  |
| `MaintenanceOrder` |  | |  |  |
| `InboundDelivery` |  | |  |  |
| `InboundDeliveryItem` |  | |  |  |
| `_WhseInbDeliveryHead` | | ✓ | | |

## Source Code

```abap
@AccessControl:{
  authorizationCheck: #MANDATORY,
  personalData: {
  blocking: #REQUIRED
  }
}

@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.modelingPattern:       #TRANSACTIONAL_INTERFACE
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.semanticKey: ['EWMInboundDelivery', 'EWMInboundDeliveryItem']

@Metadata.ignorePropagatedAnnotations: true
 
@AbapCatalog.extensibility: {
  extensible: true,
  elementSuffix: 'CDI',
  quota: {
    maximumFields: 408 ,  //This is calculated with formula - 2* <Customer Percentage from SCFD_REGISTRY> * <max number of fields in SCFD_REGISTRY>
    maximumBytes: 8160    //This is calculated with formula - 4* <Customer Percentage from SCFD_REGISTRY> * <number of chars as defined in SCFD_REGISTRY>
  },
  dataSources: ['WhseInbDeliveryItem']
}

@EndUserText.label: 'Inbound Delivery Item Interface - TP'

define view entity I_EWM_InbDeliveryItemTP 
  as projection on R_EWM_InbDeliveryItemTP as WhseInbDeliveryItem
{
  key EWMInboundDelivery,
  key EWMInboundDeliveryItem,
      InboundDeliveryUUID,
      InboundDeliveryItemUUID,
      
      EWMWarehouse,
      WarehouseTimeZone,
      EWMDeliveryDocumentCategory,
      EWMInboundDeliveryItemCategory,
      EWMInboundDeliveryItemType,
      
      /* Product */
      Product,
      ProductExternalID,
      Batch,
      EWMWhseReqItmBatchIsCreated,
      EWMBatchBySupplierPlanned,
      EWMProductBySupplier,
      CountryOfOrigin,
      @Semantics.quantity.unitOfMeasure: 'QuantityUnit'
      ProductQuantity,
      QuantityUnit,
      EWMInbDelivItmQuantitySAPCode,
      EWMInbDelivItmQuantityISOCode,
      EWMWhseReqItmBatSpltParentItem,
      EWMWhseReqItmHierParentItem,
      SerialNumberRequiredLevel,
      EWMWhseReqItmBBDSLEDUTCDteTme,
      EWMWhseReqItmProdnDteTme,
      
      /* Staging */
      StagingAreaGroup,
      StagingArea,
      StagingBay,
      
      /* Status */
      GoodsReceiptStatus,
      EWMGoodsReceiptAndDistrStatus,
      PlanningPutawayStatus,
      EWMPlndPutawayAndDistrStatus,
      PutawayStatus,
      EWMPutawayAndDistrStatus,
      CompletionStatus,
      OverallBlockStatus,
      FldLogsStatus,
      
      WarehouseProcessType,
      GoodsMovementBin,
      EWMProductionSupplyArea,
      EWMDelivLastChangeUTCDateTime,
      EntitledToDisposeParty,
      EntitledToDisposePartyName,
      
      /* Stock */
      EWMStockUsage,
      EWMStockType,
      EWMStockOwner,
      EWMStockOwnerName,
      
      EWMGoodsRecipient,
      EWMRecipientLocationName,
      DeliveryItemStockTypeDetnCode,
      
      /* Special Stock */
      ExternalStockDocumentNumber,
      StockDocumentCategory,
      WBSElementInternalID,
      WBSElementExternalID,
      SpecialStockIdfgSalesOrder,
      SpecialStockIdfgSalesOrderItem,
      
      /* Reference Document*/
      PurchaseOrder,
      PurchaseOrderItem,
      ManufacturingOrder,
      Reservation,
      MaintenanceOrderOperation,
      MaintenanceOrder,
      InboundDelivery,
      InboundDeliveryItem,
      
      _WhseInbDeliveryHead : redirected to parent I_EWM_InbDeliveryHeaderTP
}
```
