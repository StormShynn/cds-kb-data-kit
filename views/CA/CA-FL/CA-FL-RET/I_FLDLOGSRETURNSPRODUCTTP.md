---
name: I_FLDLOGSRETURNSPRODUCTTP
description: Fldlogsreturnsproducttp
app_component: CA-FL-RET
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-FL
  - CA-FL-RET
  - interface-view
  - transactional-processing
  - product
  - component:CA-FL-RET
  - lob:Cross-Application Components
---
# I_FLDLOGSRETURNSPRODUCTTP

**Fldlogsreturnsproducttp**

| Property | Value |
|---|---|
| App Component | `CA-FL-RET` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Material` | `Material` |
| key `FldLogsRemotePlant` | `FldLogsRemotePlant` |
| key `FldLogsReferenceDocumentNumber` | `FldLogsReferenceDocumentNumber` |
| key `ReferenceDocumentItem` | `ReferenceDocumentItem` |
| key `FldLogsMaintenanceOrder` | `FldLogsMaintenanceOrder` |
| key `RemoteStorageLocation` | `RemoteStorageLocation` |
| `FldLogsReferenceDocCategory` | `FldLogsReferenceDocCategory` |
| `FldLogsReturnStatus` | `FldLogsReturnStatus` |
| `RetblQtyInBaseUnit` | `RetblQtyInBaseUnit` |
| `RetblQtyBaseUnit` | `RetblQtyBaseUnit` |
| `RetblQtyInOrderUnit` | `RetblQtyInOrderUnit` |
| `RetblQtyOrderUnit` | `RetblQtyOrderUnit` |
| `LoadingQtyInOrderUnit` | `LoadingQtyInOrderUnit` |
| `DispatchedStartDate` | `DispatchedStartDate` |
| `SupplyingStorageLocation` | `SupplyingStorageLocation` |
| `RequestedShippingDate` | `RequestedShippingDate` |
| `RequestedShippingTime` | `RequestedShippingTime` |
| `ReturnRecordCreationDateTime` | `ReturnRecordCreationDateTime` |
| `ReturnRecordChangeDateTime` | `ReturnRecordChangeDateTime` |
| `FieldLogisticsTransferPlant` | `FieldLogisticsTransferPlant` |
| `FldLogsSupplyProcess` | `FldLogsSupplyProcess` |
| `ReferenceOrder` | `ReferenceOrder` |
| `ReferencePurchasingDocument` | `ReferencePurchasingDocument` |
| `FldLogsContainerID` | `FldLogsContainerID` |
| `InventoryUsabilityCode` | `InventoryUsabilityCode` |
| `FldLogsItemType` | `FldLogsItemType` |
| `FldLogsSuplrItmPackggTypeCode` | `FldLogsSuplrItmPackggTypeCode` |
| `Batch` | `Batch` |
| `ValuationType` | `ValuationType` |
| `SerialNumber` | `SerialNumber` |
| `MaterialMinSftyStockQuantity` | `MaterialMinSftyStockQuantity` |
| `FldLogsRecommendedAction` | `FldLogsRecommendedAction` |
| `OutboundDelivery` | `OutboundDelivery` |
| `OutboundDeliveryItem` | `OutboundDeliveryItem` |
| `EWMMovingHandlingUnitNumber` | `EWMMovingHandlingUnitNumber` |
| `FldLogsRetOutbDelivIsCreated` | `FldLogsRetOutbDelivIsCreated` |
| `IsInternalBatchManaged` | `IsInternalBatchManaged` |
| `FldLogsSuplrItemUUID` | `FldLogsSuplrItemUUID` |
| `FldLogsContainerUUID` | `FldLogsContainerUUID` |
| `FldLogsShptItemUUID` | `FldLogsShptItemUUID` |
| `FldLogsContainerUnitUUID` | `FldLogsContainerUnitUUID` |
| `FieldLogisticsStorageBin` | `FieldLogisticsStorageBin` |
| `FldLogsTransferType` | `FldLogsTransferType` |
| `FldLogsReturnComment` | `FldLogsReturnComment` |
| `QuantityUnit` | `QuantityUnit` |
| `ResvnItmTotalRequiredQty` | `ResvnItmTotalRequiredQty` |
| `ResvnItmTotalWithdrawnQty` | `ResvnItmTotalWithdrawnQty` |
| `SupplyingPlant` | `SupplyingPlant` |
| `IsMarkedForDeletion` | `IsMarkedForDeletion` |
| `FldLogsRefurbishmentOrder` | `FldLogsRefurbishmentOrder` |
| `PurchaseOrderItem` | `PurchaseOrderItem` |
| `ReferenceDocumentLongNumber` | `ReferenceDocumentLongNumber` |
| `EWMWarehouse` | `EWMWarehouse` |
| `InboundDelivery` | `InboundDelivery` |
| `InboundDeliveryItem` | `InboundDeliveryItem` |
| `MaterialDocument` | `MaterialDocument` |
| `MaterialDocumentItem` | `MaterialDocumentItem` |
| `HandlingUnitExternalID` | `HandlingUnitExternalID` |
| `WBSElementExternalID` | `WBSElementExternalID` |
| `Reservation` | `Reservation` |
| `ReservationItem` | `ReservationItem` |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AbapCatalog.viewEnhancementCategory: [#PROJECTION_LIST]
@EndUserText.label: 'Field Logistics Return - TP'
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: false
@ObjectModel.usageType:{
  serviceQuality: #X,
  sizeCategory: #S,
  dataClass: #MIXED
}
@ObjectModel.sapObjectNodeType.name: 'FieldLogisticsReturns'
@VDM.viewType:#TRANSACTIONAL
@AbapCatalog.extensibility: {
extensible: true,
dataSources: ['ReturnInit'],
allowNewCompositions:true ,
quota: {
  maximumFields: 816 ,
  maximumBytes: 8160
    },
elementSuffix: 'IRP' }

@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE, #TRANSACTIONAL_PROVIDER,#CDS_MODELING_ASSOCIATION_TARGET ]

define root view entity I_FldLogsReturnsProductTP
  provider contract transactional_interface
  as projection on I_FldLogsStockTP as ReturnInit
{
  key   Material,
  key   FldLogsRemotePlant,
  key   FldLogsReferenceDocumentNumber,
  key   ReferenceDocumentItem,
  key   FldLogsMaintenanceOrder,
  key   RemoteStorageLocation,
        FldLogsReferenceDocCategory,
        FldLogsReturnStatus,
        @Semantics.quantity.unitOfMeasure: 'RetblQtyBaseUnit'
        @EndUserText.label: 'Stock/Returnable Quantity in Base Unit'
        RetblQtyInBaseUnit,
        RetblQtyBaseUnit,
        @Semantics.quantity.unitOfMeasure: 'RetblQtyOrderUnit'
        RetblQtyInOrderUnit,
        RetblQtyOrderUnit,
        @Semantics.quantity.unitOfMeasure: 'RetblQtyOrderUnit'
        LoadingQtyInOrderUnit,
        DispatchedStartDate,
        SupplyingStorageLocation,
        RequestedShippingDate,
        RequestedShippingTime,
        ReturnRecordCreationDateTime,
        ReturnRecordChangeDateTime,
        FieldLogisticsTransferPlant,
        FldLogsSupplyProcess,
        ReferenceOrder,
        ReferencePurchasingDocument,
        FldLogsContainerID,
        InventoryUsabilityCode,
        FldLogsItemType,
        FldLogsSuplrItmPackggTypeCode,
        Batch,
        ValuationType,
        SerialNumber,
        @Semantics.quantity.unitOfMeasure: 'RetblQtyBaseUnit'
        MaterialMinSftyStockQuantity,
        FldLogsRecommendedAction,
        @EndUserText.label: 'Outbound Delivery'
        OutboundDelivery,
        @EndUserText.label: 'Outbound Delivery Item'
        OutboundDeliveryItem,
        EWMMovingHandlingUnitNumber,
        FldLogsRetOutbDelivIsCreated,
        IsInternalBatchManaged,
        @EndUserText.label: 'Supplier Item UUID'
        FldLogsSuplrItemUUID,
        @EndUserText.label: 'Container UUID'
        FldLogsContainerUUID,
        @EndUserText.label: 'Shipment Item UUID'
        FldLogsShptItemUUID,
        @EndUserText.label: 'Container Unit UUID'
        FldLogsContainerUnitUUID,
        @EndUserText.label: 'Source Storage Bin'
        FieldLogisticsStorageBin,
        @EndUserText.label: 'Transfer Type'
        FldLogsTransferType,
        FldLogsReturnComment,
        QuantityUnit,
        @EndUserText.label: 'Total Open Quantity'
        @Semantics.quantity.unitOfMeasure: 'QuantityUnit'
        ResvnItmTotalRequiredQty,
        @Semantics.quantity.unitOfMeasure: 'QuantityUnit'
        ResvnItmTotalWithdrawnQty,
        SupplyingPlant,
        //        @Semantics.booleanIndicator
        //        @EndUserText.label: 'End of Purpose Completed'
        //        IsEndOfPurposeBlocked,
        //        @Semantics.booleanIndicator
        //        @EndUserText.label: 'Business Purpose Completed'
        //        BusPrpsOfRefdValueIsCompleted,
        //        @Semantics.booleanIndicator
        //        @EndUserText.label: 'Business Purpose Completed'
        //        IsBusinessPurposeCompleted,
        //        @Semantics.booleanIndicator
        //        SuplrCoIsBusPrpsCmpltd,
        @EndUserText.label: 'Is Marked for Deletion'
        @Semantics.booleanIndicator
        IsMarkedForDeletion,
        FldLogsRefurbishmentOrder,
        PurchaseOrderItem,
        ReferenceDocumentLongNumber,
        @EndUserText.label: 'Warehouse No'
        EWMWarehouse,
        @EndUserText.label: 'Inbound Delivery'
        InboundDelivery,
        @EndUserText.label: 'Inbound Delivery Item'
        InboundDeliveryItem,
        @EndUserText.label: 'Material Document'
        MaterialDocument,
        @EndUserText.label:'Material Document Item'
        MaterialDocumentItem,
        @EndUserText.label:'Handling Unit'
        HandlingUnitExternalID,
        WBSElementExternalID,
        @EndUserText.label: 'Reservation'
        Reservation,
        @EndUserText.label: 'Reservation Item'
        ReservationItem

}
```
