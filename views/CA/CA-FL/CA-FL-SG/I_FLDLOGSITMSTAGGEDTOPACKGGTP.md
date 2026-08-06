---
name: I_FLDLOGSITMSTAGGEDTOPACKGGTP
description: Fldlogsitmstaggedtopackggtp
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
  - component:CA-FL-SG
  - lob:Cross-Application Components
---
# I_FLDLOGSITMSTAGGEDTOPACKGGTP

**Fldlogsitmstaggedtopackggtp**

| Property | Value |
|---|---|
| App Component | `CA-FL-SG` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `FldLogsShptItemUUID` | `FldLogsShptItemUUID` |
| `FldLogsReferenceDocumentNumber` | `FldLogsReferenceDocumentNumber` |
| `DeliveryDocument` | `DeliveryDocument` |
| `DeliveryDocumentItem` | `DeliveryDocumentItem` |
| `FldLogsShptItmOutbDelivItmID` | `FldLogsShptItmOutbDelivItmID` |
| `FldLogsShptItmODOItemID` | `FldLogsShptItmODOItemID` |
| `HandlingUnitExternalID` | `HandlingUnitExternalID` |
| `PackagingMaterial` | `PackagingMaterial` |
| `GrossVolume` | `GrossVolume` |
| `VolumeUnit` | `VolumeUnit` |
| `GrossWeight` | `GrossWeight` |
| `WeightUnit` | `WeightUnit` |
| `MaterialName` | `MaterialName` |
| `FldLogsContainerUnitUUID` | `FldLogsContainerUnitUUID` |
| `FldLogsShptItmStsCode` | `FldLogsShptItmStsCode` |
| `FldLogsSrceStorLocID` | `FldLogsSrceStorLocID` |
| `FldLogsSrcePlnt` | `FldLogsSrcePlnt` |
| `FldLogsDestStorLocID` | `FldLogsDestStorLocID` |
| `FldLogsDestPlnt` | `FldLogsDestPlnt` |
| `FldLogsDelivDueDate` | `FldLogsDelivDueDate` |
| `FldLogsGrossVolume` | `FldLogsGrossVolume` |
| `FldLogsGrossVolumeUnit` | `FldLogsGrossVolumeUnit` |
| `ProductGrossWeight` | `ProductGrossWeight` |
| `ProductWeightUnit` | `ProductWeightUnit` |
| `QuantityInBaseUnit` | `QuantityInBaseUnit` |
| `OrderQuantityUnit` | `OrderQuantityUnit` |
| `FldLogsVoyAssgmtStatusText` | `FldLogsVoyAssgmtStatusText` |
| `FldLogsShptItemCurrentPlant` | `FldLogsShptItemCurrentPlant` |
| `FldLogsShptItemCurShipgPoint` | `FldLogsShptItemCurShipgPoint` |
| `FldLogsShptItemActualWeight` | `FldLogsShptItemActualWeight` |
| `FldLogsShptItemActlWeightUnit` | `FldLogsShptItemActlWeightUnit` |
| `FieldLogisticsKitIdentifier` | `FieldLogisticsKitIdentifier` |
| `HandlingUnitQuantity` | `HandlingUnitQuantity` |
| `HandlingUnitQuantityUnit` | `HandlingUnitQuantityUnit` |
| `_ShptPackggUnit` | *Association* |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#PROJECTION_LIST]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Items Tagged to Packaging - TP'
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #TRANSACTIONAL
@VDM.usage.type: [#TRANSACTIONAL_PROCESSING_SERVICE]
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@ObjectModel.usageType: {
serviceQuality: #C, 
dataClass: #TRANSACTIONAL,
sizeCategory: #L }
@ObjectModel : {semanticKey: ['FldLogsReferenceDocumentNumber']  }

@AbapCatalog.extensibility: {
  extensible: true,
  elementSuffix: 'SIT',
  allowNewCompositions: true,
  allowNewDatasources: false,
  dataSources: ['_TaggedItems'],
  quota: {
    maximumFields: 800,
    maximumBytes: 80000
  }
}

//for C1 contract 
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE, #TRANSACTIONAL_PROVIDER,#CDS_MODELING_ASSOCIATION_TARGET ]

define view entity I_FldLogsItmsTaggedToPackggTP
  as projection on R_FldLogsItmsTaggedToPackggTP as _TaggedItems
{
  key FldLogsShptItemUUID,
      FldLogsReferenceDocumentNumber,

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

      _ShptPackggUnit : redirected to parent I_FldLogsShptPackggUnitTP
}
```
