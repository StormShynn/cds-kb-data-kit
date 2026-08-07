---
name: I_FLDLOGSSHPTPACKGGUNITTP
description: Fldlogsshptpackggunittp
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
# I_FLDLOGSSHPTPACKGGUNITTP

**Fldlogsshptpackggunittp**

| Property | Value |
|---|---|
| App Component | `CA-FL-SG` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FldLogsContainerUnitUUID` | ✓ | |  |  |  |  |
| `FldLogsContainerUUID` |  | |  |  |  |  |
| `FldLogsContainerID` |  | |  |  |  |  |
| `FldLogsShipmentID` |  | |  |  |  |  |
| `FldLogsCtnPackgStsCode` |  | |  |  |  |  |
| `FldLogsCtnIntTranspStsCode` |  | |  |  |  |  |
| `FldLogsCtnExtTranspSts` |  | |  |  |  |  |
| `FldLogsSrceStorLocID` |  | |  |  |  |  |
| `FldLogsSrcePlnt` |  | |  |  |  |  |
| `FldLogsDestStorLocID` |  | |  |  |  |  |
| `FldLogsDestPlnt` |  | |  |  |  |  |
| `FldLogsCtnPackgChangeDateTime` |  | |  |  |  |  |
| `FldLogsContainerCategory` |  | |  |  |  |  |
| `FldLogsCtnPackgStsText` |  | |  |  |  |  |
| `FldLogsReferenceDocumentNumber` |  | |  |  |  |  |
| `DeliveryDocument` |  | |  |  |  |  |
| `HandlingUnitExternalID` |  | |  |  |  |  |
| `FldLogsShptCtnIntTranspStsText` |  | |  |  |  |  |
| `FldLogsSealNumber1` |  | |  |  |  |  |
| `FldLogsSealNumber2` |  | |  |  |  |  |
| `FldLogsSealNumber3` |  | |  |  |  |  |
| `FldLogsSealNumber4` |  | |  |  |  |  |
| `FldLogsSealNumber5` |  | |  |  |  |  |
| `FldLogsShptItmIsAssgdToVoy` |  | |  |  |  |  |
| `EquipmentType` |  | |  |  |  |  |
| `FldLogsGrossVolume` |  | |  |  |  |  |
| `FldLogsGrossVolumeUnit` |  | |  |  |  |  |
| `ProductGrossWeight` |  | |  |  |  |  |
| `ProductWeightUnit` |  | |  |  |  |  |
| `FldLogsCtnActualWeight` |  | |  |  |  |  |
| `FldLogsCtnActualWeightUnit` |  | |  |  |  |  |
| `FldLogsVoyageAssignmentStatus` |  | |  |  |  |  |
| `FldLogsVoyAssgmtStatusText` |  | |  |  |  |  |
| `FldLogsVoyAssgmtStatusCritlty` |  | |  |  |  |  |
| `FldLogsVoyageSrceStage` |  | |  |  |  |  |
| `FldLogsVoyageDestStage` |  | |  |  |  |  |
| `FldLogsContainerText` |  | |  |  |  |  |
| `FldLogsContainerStatus` |  | |  |  |  |  |
| `FldLogsContainerSafeLoadQty` |  | |  |  |  |  |
| `FldLogsContainerSafeLoadUnit` |  | |  |  |  |  |
| `FldLogsCtnCurrentLocation` |  | |  |  |  |  |
| `FldLogsCtnCurrentStorageLoc` |  | |  |  |  |  |
| `FldLogsContainerOwner` |  | |  |  |  |  |
| `FldLogsCertEndDate` |  | |  |  |  |  |
| `ItemWeight` |  | |  |  |  |  |
| `ItemVolume` |  | |  |  |  |  |
| `FldLogsCtnUnitCurrentPlant` |  | |  |  |  |  |
| `FldLogsCtnUnitCurShipgPoint` |  | |  |  |  |  |
| `FldLogsContainerUnitExternalID` |  | |  |  |  |  |
| `FieldLogisticsCtnIsOwned` |  | |  |  |  |  |
| `FldLogsParentContainerUnitUUID` |  | |  |  |  |  |
| `FldLogsParentContainerID` |  | |  |  |  |  |
| `FldLogsShptLocationID` |  | |  |  |  |  |
| `IsBusinessPurposeCompleted` |  | |  |  |  |  |
| `SuplrCoIsBusPrpsCmpltd` |  | |  |  |  |  |
| `ShippingPointName` |  | |  |  |  |  |
| `ReceivingPoint` |  | |  |  |  |  |
| `PlantName` |  | |  |  |  |  |
| `_ShptItems` | | ✓ | | | | |
| `_ShptStgeAssgmt` | | ✓ | | | | |
| `_TaggedItems` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#PROJECTION_LIST]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'FL Shipment Packaging Unit Interface - TP'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'FldLogsShptContainerUnit'
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #L,
  dataClass: #TRANSACTIONAL
}
@VDM.viewType:#TRANSACTIONAL
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Search.searchable: true
@AbapCatalog.extensibility: {
  extensible: true,
  elementSuffix: 'UNT',
  allowNewDatasources: false,
  allowNewCompositions: true,
  dataSources: ['FldLogsShptPackggUnit'],
  quota: {
    maximumFields: 800,
    maximumBytes: 80000
  }
}

//for C1 contract
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE, #TRANSACTIONAL_PROVIDER,#CDS_MODELING_ASSOCIATION_TARGET ]

define root view entity I_FldLogsShptPackggUnitTP
  provider contract transactional_interface
  as projection on R_FldLogsShptPackggUnitTP as FldLogsShptPackggUnit
{
  key FldLogsContainerUnitUUID,
      FldLogsContainerUUID,
      FldLogsContainerID,
      FldLogsShipmentID,
      FldLogsCtnPackgStsCode,
      FldLogsCtnIntTranspStsCode,
      FldLogsCtnExtTranspSts,
      FldLogsSrceStorLocID,
      FldLogsSrcePlnt,
      FldLogsDestStorLocID,
      FldLogsDestPlnt,
      FldLogsCtnPackgChangeDateTime,
      FldLogsContainerCategory,
      FldLogsCtnPackgStsText,

      @EndUserText.label: 'Reference Document'
      FldLogsReferenceDocumentNumber,

      @EndUserText.label: 'Delivery Document'
      DeliveryDocument,

      @EndUserText.label: 'Handling Unit'
      HandlingUnitExternalID,
      FldLogsShptCtnIntTranspStsText,
      FldLogsSealNumber1,
      FldLogsSealNumber2,
      FldLogsSealNumber3,
      FldLogsSealNumber4,
      FldLogsSealNumber5,
      FldLogsShptItmIsAssgdToVoy,
      EquipmentType,
      //_CtnCategoryText.FldLogsContainerCategoryText : localized,

      @Semantics.quantity.unitOfMeasure: 'FldLogsGrossVolumeUnit'
      FldLogsGrossVolume,
      FldLogsGrossVolumeUnit,

      @Semantics.quantity.unitOfMeasure: 'ProductWeightUnit'
      ProductGrossWeight,
      ProductWeightUnit,

      @Semantics.quantity.unitOfMeasure: 'FldLogsCtnActualWeightUnit'
      FldLogsCtnActualWeight,
      FldLogsCtnActualWeightUnit,
      FldLogsVoyageAssignmentStatus,
      FldLogsVoyAssgmtStatusText,

      @EndUserText.label: 'Voyage Assignment Status Criticality'
      FldLogsVoyAssgmtStatusCritlty,
      FldLogsVoyageSrceStage,
      FldLogsVoyageDestStage,
      FldLogsContainerText,
      FldLogsContainerStatus,

      @Semantics.quantity.unitOfMeasure: 'FldLogsContainerSafeLoadUnit'
      FldLogsContainerSafeLoadQty,
      FldLogsContainerSafeLoadUnit,

      FldLogsCtnCurrentLocation,
      FldLogsCtnCurrentStorageLoc,
      FldLogsContainerOwner,

      @EndUserText.label: 'Certificate Expiry Date'
      FldLogsCertEndDate,

      @Semantics.quantity.unitOfMeasure: 'FldLogsContainerSafeLoadUnit'
      ItemWeight,

      @Semantics.quantity.unitOfMeasure: 'FldLogsContainerSafeLoadUnit'
      ItemVolume,
      FldLogsCtnUnitCurrentPlant,
      FldLogsCtnUnitCurShipgPoint,
      FldLogsContainerUnitExternalID,

      @Semantics.booleanIndicator: true
      FieldLogisticsCtnIsOwned,
      FldLogsParentContainerUnitUUID,
      FldLogsParentContainerID,
      FldLogsShptLocationID,

      @Semantics.booleanIndicator: true
      IsBusinessPurposeCompleted,

      @Semantics.booleanIndicator: true
      SuplrCoIsBusPrpsCmpltd,
      ShippingPointName,
      ReceivingPoint,
      PlantName,

      @Search:{ defaultSearchElement: true,ranking: #HIGH}
      _ShptItems      : redirected to composition child I_FldLogsShptPackggItemTP,
      _ShptStgeAssgmt : redirected to composition child I_FldLogsShptStgeAssgPackggTP,
      _TaggedItems    : redirected to composition child I_FldLogsItmsTaggedToPackggTP
}
```
