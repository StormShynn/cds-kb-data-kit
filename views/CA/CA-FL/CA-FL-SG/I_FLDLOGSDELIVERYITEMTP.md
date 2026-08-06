---
name: I_FLDLOGSDELIVERYITEMTP
description: Fldlogsdeliveryitemtp
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
  - delivery
  - item-level
  - component:CA-FL-SG
  - lob:Cross-Application Components
---
# I_FLDLOGSDELIVERYITEMTP

**Fldlogsdeliveryitemtp**

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
| `FldLogsReferenceDocCategory` | `FldLogsReferenceDocCategory` |
| `DeliveryDocument` | `DeliveryDocument` |
| `DeliveryDocumentItem` | `DeliveryDocumentItem` |
| `FldLogsReferenceDocumentNumber` | `FldLogsReferenceDocumentNumber` |
| `FldLogsShptItmWrkOrdItmID` | `FldLogsShptItmWrkOrdItmID` |
| `FldLogsShptItmProjDmndItmID` | `FldLogsShptItmProjDmndItmID` |
| `FldLogsShptItmSTOItmID` | `FldLogsShptItmSTOItmID` |
| `FldLogsShptItmOutbDelivItmID` | `FldLogsShptItmOutbDelivItmID` |
| `FldLogsShptItmODOItemID` | `FldLogsShptItmODOItemID` |
| `FldLogsShptItmHndlgUnitID` | `FldLogsShptItmHndlgUnitID` |
| `HandlingUnitExternalID` | `HandlingUnitExternalID` |
| `PackagingMaterial` | `PackagingMaterial` |
| `GrossVolume` | `GrossVolume` |
| `VolumeUnit` | `VolumeUnit` |
| `GrossWeight` | `GrossWeight` |
| `WeightUnit` | `WeightUnit` |
| `MaterialName` | `MaterialName` |
| `FldLogsContainerUnitUUID` | `FldLogsContainerUnitUUID` |
| `FldLogsShptItmStsCode` | `FldLogsShptItmStsCode` |
| `FldLogsShptItmStsText` | `FldLogsShptItmStsText` |
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
| `FldLogsShptItmChangedDateTime` | `FldLogsShptItmChangedDateTime` |
| `FldLogsContainerID` | `FldLogsContainerID` |
| `FldLogsShptItemActualWeight` | `FldLogsShptItemActualWeight` |
| `FldLogsShptItemActlWeightUnit` | `FldLogsShptItemActlWeightUnit` |
| `ValuationType` | `ValuationType` |
| `FldLogsShipmentItemTypeCode` | `FldLogsShipmentItemTypeCode` |
| `FldLogsShptItmIsAssgdToCtn` | `FldLogsShptItmIsAssgdToCtn` |
| `HandlingUnitIsDsp` | `HandlingUnitIsDsp` |
| `FldLogsShptItmIsAssgdToVoy` | `FldLogsShptItmIsAssgdToVoy` |
| `FldLogsVoyageSrceStage` | `FldLogsVoyageSrceStage` |
| `FldLogsVoyageDestStage` | `FldLogsVoyageDestStage` |
| `FldLogsVoyAssgmtStatusCritlty` | `FldLogsVoyAssgmtStatusCritlty` |
| `FldLogsVoyageAssignmentStatus` | `FldLogsVoyageAssignmentStatus` |
| `FldLogsVoyAssgmtStatusText` | `FldLogsVoyAssgmtStatusText` |
| `FldLogsShptItemCurrentPlant` | `FldLogsShptItemCurrentPlant` |
| `FldLogsShptItemCurShipgPoint` | `FldLogsShptItemCurShipgPoint` |
| `FldLogsShptItemActnID` | `FldLogsShptItemActnID` |
| `FldLogsCtnPackgStsCode` | `FldLogsCtnPackgStsCode` |
| `FieldLogisticsKitIdentifier` | `FieldLogisticsKitIdentifier` |
| `Material` | `Material` |
| `_ShptStgeAssgmt` | *Association* |
| `_ShptHandlingUnitItem` | *Association* |
| `_SrcePlantText` | *Association* |
| `_DestPlantText` | *Association* |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#PROJECTION_LIST]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Interface BO for delivery item in FL - TP'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #X,
  sizeCategory: #S,
  dataClass: #MIXED
}
@VDM.viewType:#TRANSACTIONAL
//Enable extensibility
@AbapCatalog.extensibility:{ extensible:true,
dataSources: ['ShptItem'],
allowNewCompositions: true,
elementSuffix: 'sit',
quota: {
    maximumFields: 1000 ,
    maximumBytes: 100000
  } }
//for C1 contract
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE,#CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@ObjectModel.sapObjectNodeType.name: 'FieldLogisticsShipmentItem'
define root view entity I_FldLogsDeliveryItemTP
provider contract transactional_interface
as projection on R_FldLogsShipmentItemTP as ShptItem
{
  key FldLogsShptItemUUID,
      FldLogsReferenceDocCategory,
      @EndUserText.label: 'Delivery Document'
      DeliveryDocument,
      DeliveryDocumentItem,
      FldLogsReferenceDocumentNumber,
      FldLogsShptItmWrkOrdItmID,
      FldLogsShptItmProjDmndItmID,
      FldLogsShptItmSTOItmID,
      FldLogsShptItmOutbDelivItmID,
      FldLogsShptItmODOItemID,
      FldLogsShptItmHndlgUnitID,
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
      FldLogsShptItmStsText,
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
      @Semantics.systemDateTime.localInstanceLastChangedAt: true
      FldLogsShptItmChangedDateTime,
      FldLogsContainerID,
      @Semantics.quantity.unitOfMeasure: 'FldLogsShptItemActlWeightUnit'
      FldLogsShptItemActualWeight,
      FldLogsShptItemActlWeightUnit,
      ValuationType,
      FldLogsShipmentItemTypeCode,
      FldLogsShptItmIsAssgdToCtn,
      HandlingUnitIsDsp,
      FldLogsShptItmIsAssgdToVoy,
      FldLogsVoyageSrceStage,
      FldLogsVoyageDestStage,
      @EndUserText.label: 'Voyage Assignment Status Criticality'
      FldLogsVoyAssgmtStatusCritlty,
      FldLogsVoyageAssignmentStatus,
      FldLogsVoyAssgmtStatusText,
      FldLogsShptItemCurrentPlant,
      FldLogsShptItemCurShipgPoint,
      FldLogsShptItemActnID,
      FldLogsCtnPackgStsCode,
      FieldLogisticsKitIdentifier,
      Material,
      _ShptStgeAssgmt : redirected to composition child I_FldLogsDelivStgeAssgmtTP,
      _ShptHandlingUnitItem,
      _SrcePlantText,
      _DestPlantText
}
```
