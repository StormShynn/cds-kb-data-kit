---
name: I_FLDLOGSSHPTPACKGGITEMTP
description: "Fldlogsshptpackggitemtp"
app_component: CA-FL-SG
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-FL
  - CA-FL-SG
  - interface-view
  - transactional-processing
  - item-level
  - component:CA-FL-SG
  - lob:Cross-Application Components
---
# I_FLDLOGSSHPTPACKGGITEMTP

**Fldlogsshptpackggitemtp**

| Property | Value |
|---|---|
| App Component | `CA-FL-SG` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FldLogsShptItemUUID` | ✓ | |  |  |  |  |
| `FldLogsReferenceDocumentNumber` |  | |  |  |  |  |
| `FldLogsReferenceDocCategory` |  | |  |  |  |  |
| `DeliveryDocument` |  | |  |  |  |  |
| `DeliveryDocumentItem` |  | |  |  |  |  |
| `FldLogsShptItmOutbDelivItmID` |  | |  |  |  |  |
| `FldLogsShptItmODOItemID` |  | |  |  |  |  |
| `HandlingUnitExternalID` |  | |  |  |  |  |
| `PackagingMaterial` |  | |  |  |  |  |
| `GrossVolume` |  | |  |  |  |  |
| `VolumeUnit` |  | |  |  |  |  |
| `GrossWeight` |  | |  |  |  |  |
| `WeightUnit` |  | |  |  |  |  |
| `MaterialName` |  | |  |  |  |  |
| `FldLogsContainerUnitUUID` |  | |  |  |  |  |
| `FldLogsShptItmStsCode` |  | |  |  |  |  |
| `FldLogsSrceStorLocID` |  | |  |  |  |  |
| `FldLogsSrcePlnt` |  | |  |  |  |  |
| `FldLogsDestStorLocID` |  | |  |  |  |  |
| `FldLogsDestPlnt` |  | |  |  |  |  |
| `FldLogsDelivDueDate` |  | |  |  |  |  |
| `FldLogsGrossVolume` |  | |  |  |  |  |
| `FldLogsGrossVolumeUnit` |  | |  |  |  |  |
| `ProductGrossWeight` |  | |  |  |  |  |
| `ProductWeightUnit` |  | |  |  |  |  |
| `QuantityInBaseUnit` |  | |  |  |  |  |
| `OrderQuantityUnit` |  | |  |  |  |  |
| `FldLogsVoyAssgmtStatusText` |  | |  |  |  |  |
| `FldLogsShptItemCurrentPlant` |  | |  |  |  |  |
| `FldLogsShptItemCurShipgPoint` |  | |  |  |  |  |
| `FldLogsShptItemActualWeight` |  | |  |  |  |  |
| `FldLogsShptItemActlWeightUnit` |  | |  |  |  |  |
| `FieldLogisticsKitIdentifier` |  | |  |  |  |  |
| `HandlingUnitQuantity` |  | |  |  |  |  |
| `HandlingUnitQuantityUnit` |  | |  |  |  |  |
| `FldLogsShptLocationID` |  | |  |  |  |  |
| `_ShptPackggUnit` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#PROJECTION_LIST]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'FL Shipment Packaging Items - TP'
@VDM: {
viewType: #TRANSACTIONAL,
usage.type: [#TRANSACTIONAL_PROCESSING_SERVICE] }
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType: {
serviceQuality: #D,
dataClass: #TRANSACTIONAL,
sizeCategory: #L }
@ObjectModel : {semanticKey: ['FldLogsReferenceDocumentNumber']  }
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@AbapCatalog.extensibility: {
  extensible: true,
  elementSuffix: 'SIT',
  allowNewCompositions: true,
  allowNewDatasources: false,
  dataSources: ['FldLogsShptItem'],
  quota: {
    maximumFields: 800,
    maximumBytes: 80000
  }
}

//for C1 contract
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE, #TRANSACTIONAL_PROVIDER,#CDS_MODELING_ASSOCIATION_TARGET ]

define view entity I_FldLogsShptPackggItemTP
  as projection on R_FldLogsShptPackggItemTP as FldLogsShptItem
{

  key FldLogsShptItemUUID,
      FldLogsReferenceDocumentNumber,
      FldLogsReferenceDocCategory,

      @EndUserText.label: 'Delivery Document'
      DeliveryDocument,
      DeliveryDocumentItem,
      FldLogsShptItmOutbDelivItmID,
      FldLogsShptItmODOItemID,
      HandlingUnitExternalID,
      PackagingMaterial,

      @Semantics.quantity.unitOfMeasure: 'VolumeUnit'
      GrossVolume,
      VolumeUnit,

      @Semantics.quantity.unitOfMeasure: 'WeightUnit'
      GrossWeight,
      WeightUnit,
      MaterialName,
      FldLogsContainerUnitUUID,
      FldLogsShptItmStsCode,
      FldLogsSrceStorLocID,
      FldLogsSrcePlnt,
      FldLogsDestStorLocID,
      FldLogsDestPlnt,
      FldLogsDelivDueDate,

      @Semantics.quantity.unitOfMeasure: 'FldLogsGrossVolumeUnit'
      FldLogsGrossVolume,
      FldLogsGrossVolumeUnit,

      @Semantics.quantity.unitOfMeasure: 'ProductWeightUnit'
      ProductGrossWeight,
      ProductWeightUnit,

      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      QuantityInBaseUnit,
      OrderQuantityUnit,
      FldLogsVoyAssgmtStatusText,
      FldLogsShptItemCurrentPlant,
      FldLogsShptItemCurShipgPoint,

      @Semantics.quantity.unitOfMeasure: 'FldLogsShptItemActlWeightUnit'
      FldLogsShptItemActualWeight,
      FldLogsShptItemActlWeightUnit,
      FieldLogisticsKitIdentifier,

      @Semantics.quantity.unitOfMeasure: 'HandlingUnitQuantityUnit'
      HandlingUnitQuantity,
      HandlingUnitQuantityUnit,
      FldLogsShptLocationID,

      _ShptPackggUnit : redirected to parent I_FldLogsShptPackggUnitTP
}
```
