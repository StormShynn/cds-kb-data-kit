---
name: I_FLDLOGSDELIVERYITEMTP
description: "Fldlogsdeliveryitemtp"
app_component: CA-FL-SG
software_component: SAPSCORE
release_state: released
atc_state: released
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

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FldLogsShptItemUUID` | ✓ | |  |  |  |  |
| `FldLogsReferenceDocCategory` |  | |  |  |  |  |
| `DeliveryDocument` |  | |  |  |  |  |
| `DeliveryDocumentItem` |  | |  |  |  |  |
| `FldLogsReferenceDocumentNumber` |  | |  |  |  |  |
| `FldLogsShptItmWrkOrdItmID` |  | |  |  |  |  |
| `FldLogsShptItmProjDmndItmID` |  | |  |  |  |  |
| `FldLogsShptItmSTOItmID` |  | |  |  |  |  |
| `FldLogsShptItmOutbDelivItmID` |  | |  |  |  |  |
| `FldLogsShptItmODOItemID` |  | |  |  |  |  |
| `FldLogsShptItmHndlgUnitID` |  | |  |  |  |  |
| `HandlingUnitExternalID` |  | |  |  |  |  |
| `PackagingMaterial` |  | |  |  |  |  |
| `GrossVolume` |  | |  |  |  |  |
| `VolumeUnit` |  | |  |  |  |  |
| `GrossWeight` |  | |  |  |  |  |
| `WeightUnit` |  | |  |  |  |  |
| `MaterialName` |  | |  |  |  |  |
| `FldLogsContainerUnitUUID` |  | |  |  |  |  |
| `FldLogsShptItmStsCode` |  | |  |  |  |  |
| `FldLogsShptItmStsText` |  | |  |  |  |  |
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
| `FldLogsShptItmChangedDateTime` |  | |  |  |  |  |
| `FldLogsContainerID` |  | |  |  |  |  |
| `FldLogsShptItemActualWeight` |  | |  |  |  |  |
| `FldLogsShptItemActlWeightUnit` |  | |  |  |  |  |
| `ValuationType` |  | |  |  |  |  |
| `FldLogsShipmentItemTypeCode` |  | |  |  |  |  |
| `FldLogsShptItmIsAssgdToCtn` |  | |  |  |  |  |
| `HandlingUnitIsDsp` |  | |  |  |  |  |
| `FldLogsShptItmIsAssgdToVoy` |  | |  |  |  |  |
| `FldLogsVoyageSrceStage` |  | |  |  |  |  |
| `FldLogsVoyageDestStage` |  | |  |  |  |  |
| `FldLogsVoyAssgmtStatusCritlty` |  | |  |  |  |  |
| `FldLogsVoyageAssignmentStatus` |  | |  |  |  |  |
| `FldLogsVoyAssgmtStatusText` |  | |  |  |  |  |
| `FldLogsShptItemCurrentPlant` |  | |  |  |  |  |
| `FldLogsShptItemCurShipgPoint` |  | |  |  |  |  |
| `FldLogsShptItemActnID` |  | |  |  |  |  |
| `FldLogsCtnPackgStsCode` |  | |  |  |  |  |
| `FieldLogisticsKitIdentifier` |  | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `_ShptStgeAssgmt` | | ✓ | | | | |
| `_ShptHandlingUnitItem` | | ✓ | | | | |
| `_SrcePlantText` | | ✓ | | | | |
| `_DestPlantText` | | ✓ | | | | |

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
