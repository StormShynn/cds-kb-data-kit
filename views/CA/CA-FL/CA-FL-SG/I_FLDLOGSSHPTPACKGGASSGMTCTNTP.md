---
name: I_FLDLOGSSHPTPACKGGASSGMTCTNTP
description: Fldlogsshptpackggassgmtctntp
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
# I_FLDLOGSSHPTPACKGGASSGMTCTNTP

**Fldlogsshptpackggassgmtctntp**

| Property | Value |
|---|---|
| App Component | `CA-FL-SG` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `FldLogsContainerUnitUUID` | ✓ | |  |  |
| `FldLogsContainerUUID` |  | |  |  |
| `FldLogsContainerID` |  | |  |  |
| `FldLogsShipmentID` |  | |  |  |
| `FldLogsCtnPackgStsCode` |  | |  |  |
| `FldLogsCtnIntTranspStsCode` |  | |  |  |
| `FldLogsCtnExtTranspSts` |  | |  |  |
| `FldLogsSrceStorLocID` |  | |  |  |
| `FldLogsSrcePlnt` |  | |  |  |
| `FldLogsDestStorLocID` |  | |  |  |
| `FldLogsDestPlnt` |  | |  |  |
| `FldLogsCtnPackgChangeDateTime` |  | |  |  |
| `FldLogsContainerCategory` |  | |  |  |
| `FldLogsCtnPackgStsText` |  | |  |  |
| `FldLogsReferenceDocumentNumber` |  | |  |  |
| `DeliveryDocument` |  | |  |  |
| `HandlingUnitExternalID` |  | |  |  |
| `FldLogsShptCtnIntTranspStsText` |  | |  |  |
| `FldLogsSealNumber1` |  | |  |  |
| `FldLogsSealNumber2` |  | |  |  |
| `FldLogsSealNumber3` |  | |  |  |
| `FldLogsSealNumber4` |  | |  |  |
| `FldLogsSealNumber5` |  | |  |  |
| `FldLogsShptItmIsAssgdToVoy` |  | |  |  |
| `EquipmentType` |  | |  |  |
| `FldLogsGrossVolume` |  | |  |  |
| `FldLogsGrossVolumeUnit` |  | |  |  |
| `ProductGrossWeight` |  | |  |  |
| `ProductWeightUnit` |  | |  |  |
| `FldLogsCtnActualWeight` |  | |  |  |
| `FldLogsCtnActualWeightUnit` |  | |  |  |
| `FldLogsVoyageAssignmentStatus` |  | |  |  |
| `FldLogsVoyAssgmtStatusText` |  | |  |  |
| `FldLogsVoyAssgmtStatusCritlty` |  | |  |  |
| `FldLogsVoyageSrceStage` |  | |  |  |
| `FldLogsVoyageDestStage` |  | |  |  |
| `FldLogsContainerText` |  | |  |  |
| `FldLogsContainerStatus` |  | |  |  |
| `FldLogsContainerSafeLoadQty` |  | |  |  |
| `FldLogsContainerSafeLoadUnit` |  | |  |  |
| `FldLogsCtnCurrentLocation` |  | |  |  |
| `FldLogsCtnCurrentStorageLoc` |  | |  |  |
| `FldLogsContainerOwner` |  | |  |  |
| `FldLogsCertEndDate` |  | |  |  |
| `FldLogsCtnUnitCurrentPlant` |  | |  |  |
| `FldLogsCtnUnitCurShipgPoint` |  | |  |  |
| `FldLogsContainerUnitExternalID` |  | |  |  |
| `FieldLogisticsCtnIsOwned` |  | |  |  |
| `FldLogsParentContainerUnitUUID` |  | |  |  |
| `FldLogsParentContainerID` |  | |  |  |
| `FldLogsShptLocationID` |  | |  |  |
| `IsBusinessPurposeCompleted` |  | |  |  |
| `SuplrCoIsBusPrpsCmpltd` |  | |  |  |
| `_ShptCtnUnit` | | ✓ | | |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#PROJECTION_LIST]
@EndUserText.label: 'FL Shipment Nested Packaging - TP'
@AccessControl.authorizationCheck: #MANDATORY
@VDM: {
viewType: #TRANSACTIONAL,
usage.type: [#TRANSACTIONAL_PROCESSING_SERVICE] }
@ObjectModel.usageType: {
serviceQuality: #C,
dataClass: #TRANSACTIONAL,
sizeCategory: #L }
@ObjectModel.sapObjectNodeType.name: 'FldLogsShptContainer'
@ObjectModel : { semanticKey: ['FldLogsContainerID'] }
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.extensibility: {
  extensible: true,
  elementSuffix: 'UNT',
  allowNewDatasources: false,
  allowNewCompositions: true,
  dataSources: ['FldLogsShptPackggCtn'],
  quota: {
    maximumFields: 800,
    maximumBytes: 80000
  }
}

//for C1 contract
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE, #TRANSACTIONAL_PROVIDER,#CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
define view entity I_FldLogsShptPackggAssgmtCtnTP
  as projection on R_FldLogsShptPackggAssgmtCtnTP as FldLogsShptPackggCtn
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

      @EndUserText.label: 'Reference Document Number'
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
      //ItemWeight,
      //ItemVolume,
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
      _ShptCtnUnit : redirected to parent I_FldLogsDelivContainerUnitTP
}
```
