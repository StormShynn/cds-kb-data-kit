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

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Material` | ✓ | |  |  |  |  |
| `FldLogsRemotePlant` | ✓ | |  |  |  |  |
| `FldLogsReferenceDocumentNumber` | ✓ | |  |  |  |  |
| `ReferenceDocumentItem` | ✓ | |  |  |  |  |
| `FldLogsMaintenanceOrder` | ✓ | |  |  |  |  |
| `RemoteStorageLocation` | ✓ | |  |  |  |  |
| `FldLogsReferenceDocCategory` |  | |  |  |  |  |
| `FldLogsReturnStatus` |  | |  |  |  |  |
| `RetblQtyInBaseUnit` |  | |  |  |  |  |
| `RetblQtyBaseUnit` |  | |  |  |  |  |
| `RetblQtyInOrderUnit` |  | |  |  |  |  |
| `RetblQtyOrderUnit` |  | |  |  |  |  |
| `LoadingQtyInOrderUnit` |  | |  |  |  |  |
| `DispatchedStartDate` |  | |  |  |  |  |
| `SupplyingStorageLocation` |  | |  |  |  |  |
| `RequestedShippingDate` |  | |  |  |  |  |
| `RequestedShippingTime` |  | |  |  |  |  |
| `ReturnRecordCreationDateTime` |  | |  |  |  |  |
| `ReturnRecordChangeDateTime` |  | |  |  |  |  |
| `FieldLogisticsTransferPlant` |  | |  |  |  |  |
| `FldLogsSupplyProcess` |  | |  |  |  |  |
| `ReferenceOrder` |  | |  |  |  |  |
| `ReferencePurchasingDocument` |  | |  |  |  |  |
| `FldLogsContainerID` |  | |  |  |  |  |
| `InventoryUsabilityCode` |  | |  |  |  |  |
| `FldLogsItemType` |  | |  |  |  |  |
| `FldLogsSuplrItmPackggTypeCode` |  | |  |  |  |  |
| `Batch` |  | |  |  |  |  |
| `ValuationType` |  | |  |  |  |  |
| `SerialNumber` |  | |  |  |  |  |
| `MaterialMinSftyStockQuantity` |  | |  |  |  |  |
| `FldLogsRecommendedAction` |  | |  |  |  |  |
| `OutboundDelivery` |  | |  |  |  |  |
| `OutboundDeliveryItem` |  | |  |  |  |  |
| `EWMMovingHandlingUnitNumber` |  | |  |  |  |  |
| `FldLogsRetOutbDelivIsCreated` |  | |  |  |  |  |
| `IsInternalBatchManaged` |  | |  |  |  |  |
| `FldLogsSuplrItemUUID` |  | |  |  |  |  |
| `FldLogsContainerUUID` |  | |  |  |  |  |
| `FldLogsShptItemUUID` |  | |  |  |  |  |
| `FldLogsContainerUnitUUID` |  | |  |  |  |  |
| `FieldLogisticsStorageBin` |  | |  |  |  |  |
| `FldLogsTransferType` |  | |  |  |  |  |
| `FldLogsReturnComment` |  | |  |  |  |  |
| `QuantityUnit` |  | |  |  |  |  |
| `ResvnItmTotalRequiredQty` |  | |  |  |  |  |
| `ResvnItmTotalWithdrawnQty` |  | |  |  |  |  |
| `SupplyingPlant` |  | |  |  |  |  |
| `IsMarkedForDeletion` |  | |  |  |  |  |
| `FldLogsRefurbishmentOrder` |  | |  |  |  |  |
| `PurchaseOrderItem` |  | |  |  |  |  |
| `ReferenceDocumentLongNumber` |  | |  |  |  |  |
| `EWMWarehouse` |  | |  |  |  |  |
| `InboundDelivery` |  | |  |  |  |  |
| `InboundDeliveryItem` |  | |  |  |  |  |
| `MaterialDocument` |  | |  |  |  |  |
| `MaterialDocumentItem` |  | |  |  |  |  |
| `HandlingUnitExternalID` |  | |  |  |  |  |
| `WBSElementExternalID` |  | |  |  |  |  |
| `Reservation` |  | |  |  |  |  |
| `ReservationItem` |  | |  |  |  |  |

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
