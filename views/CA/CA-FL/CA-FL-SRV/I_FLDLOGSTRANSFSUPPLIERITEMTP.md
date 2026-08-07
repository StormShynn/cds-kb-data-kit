---
name: I_FLDLOGSTRANSFSUPPLIERITEMTP
description: Fldlogstransfsupplieritemtp
app_component: CA-FL-SRV
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-FL
  - CA-FL-SRV
  - interface-view
  - transactional-processing
  - supplier
  - item-level
  - component:CA-FL-SRV
  - lob:Cross-Application Components
  - bo:Supplier
---
# I_FLDLOGSTRANSFSUPPLIERITEMTP

**Fldlogstransfsupplieritemtp**

| Property | Value |
|---|---|
| App Component | `CA-FL-SRV` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `FldLogsSuplrItemUUID` | ✓ | |  |  |
| `FldLogsSuplrItemType` |  | |  |  |
| `FldLogsSuplrParentItemUUID` |  | |  |  |
| `FldLogsSuplrItemSerialNumber` |  | |  |  |
| `FldLogsSuplrItemName` |  | |  |  |
| `FldLogsRemotePlant` |  | |  |  |
| `PreferredSupplier` |  | |  |  |
| `FldLogsSuplrBasePlant` |  | |  |  |
| `FldLogsSuplrItmPOItmUniqueID` |  | |  |  |
| `PurchasingDocument` |  | |  |  |
| `PurchasingDocumentItem` |  | |  |  |
| `FldLogsSupplyProcess` |  | |  |  |
| `FldLogsSuplrItemVislInspCode` |  | |  |  |
| `PurgDocNetPriceAmount` |  | |  |  |
| `FldLogsSuplrItemRateUnit` |  | |  |  |
| `FldLogsSuplrItemQuantity` |  | |  |  |
| `FldLogsSuplrItemQuantityUnit` |  | |  |  |
| `FldLogsSuplrItemGrossVolume` |  | |  |  |
| `FldLogsSuplrItmGrossVolumeUnit` |  | |  |  |
| `ProductGrossWeight` |  | |  |  |
| `ProductWeightUnit` |  | |  |  |
| `FldLogsSuplrItemPriorityCode` |  | |  |  |
| `PriorityCode` |  | |  |  |
| `FldLogsSuplrItemLength` |  | |  |  |
| `FldLogsSuplrItemWidth` |  | |  |  |
| `FldLogsSuplrItemHeight` |  | |  |  |
| `FldLogsSuplrItemMeasureUnit` |  | |  |  |
| `FldLogsSuplrItemStatusID` |  | |  |  |
| `ItemIsDangerousGood` |  | |  |  |
| `FldLogsSuplrItemDngrsGdsCat` |  | |  |  |
| `IsBusinessPurposeCompleted` |  | |  |  |
| `MaintenanceOrder` |  | |  |  |
| `ProcmtHubPOItemUniqueID` |  | |  |  |
| `OutboundDelivery` |  | |  |  |
| `OutboundDeliveryItem` |  | |  |  |
| `DeliveryDocument` |  | |  |  |
| `DeliveryDocumentItem` |  | |  |  |
| `FldLogsPlndSrvcStartDate` |  | |  |  |
| `FldLogsPlndSrvcEndDate` |  | |  |  |
| `FldLogsActlSrvcStartDate` |  | |  |  |
| `FldLogsActlSrvcEndDate` |  | |  |  |
| `FldLogsStorageLocationID` |  | |  |  |
| `EWMStorageBin` |  | |  |  |
| `MaterialDocument` |  | |  |  |
| `MaterialDocumentYear` |  | |  |  |
| `MaterialDocumentItem` |  | |  |  |
| `PackagingMaterial` |  | |  |  |
| `FldLogsSupplierItemSource` |  | |  |  |
| `FldLogsSuplrItmPackggTypeCode` |  | |  |  |
| `FldLogsMaintOrdPrioCriticality` |  | |  |  |
| `SuplrCoIsBusPrpsCmpltd` |  | |  |  |
| `RemoteStorageLocation` |  | |  |  |
| `FldLogsGRQty` |  | |  |  |
| `FldLogsTransferType` |  | |  |  |
| `FieldLogisticsTransferPlant` |  | |  |  |
| `PurchasingParentDocument` |  | |  |  |
| `FldLogsReturnStatus` |  | |  |  |
| `FldLogsSuplrItmDelivCritlty` |  | |  |  |
| `FldLogsReferenceDocumentNumber` |  | |  |  |
| `ReferenceDocumentItem` |  | |  |  |
| `Material` |  | |  |  |
| `_BasePlantText` | | ✓ | | |
| `_CancelGRDoc` | | ✓ | | |
| `_DeliveryDocumentItem` | | ✓ | | |
| `_DngrsGdsText` | | ✓ | | |
| `_HandlingUnit` | | ✓ | | |
| `_LatestMilestone` | | ✓ | | |
| `_MaintenanceOrder` | | ✓ | | |
| `_MaterialDocumentItem` | | ✓ | | |
| `_PlantText` | | ✓ | | |
| `_QtyUnitOfMeasureText` | | ✓ | | |
| `_StorageLocation` | | ✓ | | |
| `_SuplrItemPriorityText` | | ✓ | | |
| `_SuplrItemStatus` | | ✓ | | |
| `_SuplrItemStatusText` | | ✓ | | |
| `_SuplrItemTypeCncDesc` | | ✓ | | |
| `_Supplier` | | ✓ | | |
| `_UnitOfMeasureText` | | ✓ | | |
| `_VolUnitOfMeasureText` | | ✓ | | |
| `_WgtUnitOfMeasureText` | | ✓ | | |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#PROJECTION_LIST]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Transfer supplier Item - TP'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #X,
  sizeCategory: #S,
  dataClass: #MIXED
}
@VDM.viewType:#TRANSACTIONAL
//Enable extensibility
@AbapCatalog.extensibility:{ extensible:true,
dataSources: ['TransfSuplrItm'],
allowNewCompositions: true,
elementSuffix: 'FLS',
quota: {
    maximumFields: 1000 ,
    maximumBytes: 100000
  } }

  //for C1 contract
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.sapObjectNodeType.name: 'FldLogsTransferSupplierItem'

define root view entity I_FldLogsTransfSupplierItemTP
  provider contract transactional_interface
  as projection on R_FldLogsTransfSupplierItemTP as TransfSuplrItm
{
  key FldLogsSuplrItemUUID,
      FldLogsSuplrItemType,
      FldLogsSuplrParentItemUUID,
      FldLogsSuplrItemSerialNumber,
      FldLogsSuplrItemName,
      FldLogsRemotePlant,
      PreferredSupplier,
      FldLogsSuplrBasePlant,
      FldLogsSuplrItmPOItmUniqueID,
      PurchasingDocument,
      PurchasingDocumentItem,
      FldLogsSupplyProcess,
      FldLogsSuplrItemVislInspCode,
      @Semantics.amount.currencyCode: 'FldLogsSuplrItemRateUnit'
      PurgDocNetPriceAmount,
      FldLogsSuplrItemRateUnit,
      @Semantics.quantity.unitOfMeasure: 'FldLogsSuplrItemQuantityUnit'
      FldLogsSuplrItemQuantity,
      FldLogsSuplrItemQuantityUnit,
      @Semantics.quantity.unitOfMeasure: 'FldLogsSuplrItmGrossVolumeUnit'
      FldLogsSuplrItemGrossVolume,
      FldLogsSuplrItmGrossVolumeUnit,
      @Semantics.quantity.unitOfMeasure: 'ProductWeightUnit'
      ProductGrossWeight,
      ProductWeightUnit,
      @EndUserText.label: 'Item Ptiority'
      FldLogsSuplrItemPriorityCode,
      @EndUserText.label: 'Item Priority'
      PriorityCode,
      @Semantics.quantity.unitOfMeasure: 'FldLogsSuplrItemMeasureUnit'
      FldLogsSuplrItemLength,
      @Semantics.quantity.unitOfMeasure: 'FldLogsSuplrItemMeasureUnit'
      FldLogsSuplrItemWidth,
      @Semantics.quantity.unitOfMeasure: 'FldLogsSuplrItemMeasureUnit'
      FldLogsSuplrItemHeight,
      FldLogsSuplrItemMeasureUnit,
      FldLogsSuplrItemStatusID,
      ItemIsDangerousGood,
      FldLogsSuplrItemDngrsGdsCat,
      @Semantics.booleanIndicator
      IsBusinessPurposeCompleted,
      MaintenanceOrder,
      @EndUserText.label: 'Purchase Order/Service Item'
      ProcmtHubPOItemUniqueID,
      OutboundDelivery,
      OutboundDeliveryItem,
      DeliveryDocument,
      DeliveryDocumentItem,
      FldLogsPlndSrvcStartDate,
      FldLogsPlndSrvcEndDate,
      FldLogsActlSrvcStartDate,
      FldLogsActlSrvcEndDate,
      FldLogsStorageLocationID,
      EWMStorageBin,
      MaterialDocument,
      MaterialDocumentYear,
      MaterialDocumentItem,
      PackagingMaterial,
      FldLogsSupplierItemSource,
      FldLogsSuplrItmPackggTypeCode,
      @EndUserText.label: 'Item Criticality'
      FldLogsMaintOrdPrioCriticality,
      @Semantics.booleanIndicator
      SuplrCoIsBusPrpsCmpltd,
      RemoteStorageLocation,
      @Semantics.quantity.unitOfMeasure: 'FldLogsSuplrItemQuantityUnit'
      FldLogsGRQty,
      FldLogsTransferType,
      FieldLogisticsTransferPlant,
      PurchasingParentDocument,
      FldLogsReturnStatus,
//      _RetStatText.FldLogsReturnStatusText,
      @EndUserText.label: 'Delivery Criticality'
      FldLogsSuplrItmDelivCritlty,
      FldLogsReferenceDocumentNumber,
      ReferenceDocumentItem,
      Material,
      /* Associations */
      _BasePlantText,
      _CancelGRDoc,
      _DeliveryDocumentItem,
      _DngrsGdsText,
      _HandlingUnit,
      _LatestMilestone,
      _MaintenanceOrder,
      _MaterialDocumentItem,
      _PlantText,
      _QtyUnitOfMeasureText,
      _StorageLocation,
      _SuplrItemPriorityText,
      _SuplrItemStatus,
      _SuplrItemStatusText,
      _SuplrItemTypeCncDesc,
      _Supplier,
      _UnitOfMeasureText,
      _VolUnitOfMeasureText,
      _WgtUnitOfMeasureText
}
```
