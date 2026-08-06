---
name: I_FLDLOGSDELIVCONTAINERUNITTP
description: Fldlogsdelivcontainerunittp
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
# I_FLDLOGSDELIVCONTAINERUNITTP

**Fldlogsdelivcontainerunittp**

| Property | Value |
|---|---|
| App Component | `CA-FL-SG` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `FldLogsContainerUnitUUID` | `FldLogsContainerUnitUUID` |
| `FldLogsContainerUUID` | `FldLogsContainerUUID` |
| `FldLogsContainerID` | `FldLogsContainerID` |
| `FldLogsShipmentID` | `FldLogsShipmentID` |
| `FldLogsCtnPackgStsCode` | `FldLogsCtnPackgStsCode` |
| `FldLogsCtnPackgChkErrCode` | `FldLogsCtnPackgChkErrCode` |
| `FldLogsCtnIntTranspStsCode` | `FldLogsCtnIntTranspStsCode` |
| `FldLogsCtnExtTranspSts` | `FldLogsCtnExtTranspSts` |
| `FldLogsSrceStorLocID` | `FldLogsSrceStorLocID` |
| `FldLogsSrcePlnt` | `FldLogsSrcePlnt` |
| `FldLogsDestStorLocID` | `FldLogsDestStorLocID` |
| `FldLogsDestPlnt` | `FldLogsDestPlnt` |
| `FldLogsCtnPackgChangeDateTime` | `FldLogsCtnPackgChangeDateTime` |
| `FldLogsContainerCategory` | `FldLogsContainerCategory` |
| `FldLogsCtnPackgStsText` | `FldLogsCtnPackgStsText` |
| `FldLogsShptCtnIntTranspStsText` | `FldLogsShptCtnIntTranspStsText` |
| `FldLogsSealNumber1` | `FldLogsSealNumber1` |
| `FldLogsSealNumber2` | `FldLogsSealNumber2` |
| `FldLogsSealNumber3` | `FldLogsSealNumber3` |
| `FldLogsSealNumber4` | `FldLogsSealNumber4` |
| `FldLogsSealNumber5` | `FldLogsSealNumber5` |
| `FldLogsGrossVolume` | `FldLogsGrossVolume` |
| `FldLogsGrossVolumeUnit` | `FldLogsGrossVolumeUnit` |
| `ProductGrossWeight` | `ProductGrossWeight` |
| `ProductWeightUnit` | `ProductWeightUnit` |
| `FldLogsCtnActualWeight` | `FldLogsCtnActualWeight` |
| `FldLogsCtnActualWeightUnit` | `FldLogsCtnActualWeightUnit` |
| `EquipmentType` | `EquipmentType` |
| `FldLogsContainerText` | `FldLogsContainerText` |
| `FldLogsContainerStatus` | `FldLogsContainerStatus` |
| `FldLogsContainerSafeLoadQty` | `FldLogsContainerSafeLoadQty` |
| `FldLogsContainerSafeLoadUnit` | `FldLogsContainerSafeLoadUnit` |
| `FldLogsCtnCurrentLocation` | `FldLogsCtnCurrentLocation` |
| `FldLogsCtnCurrentStorageLoc` | `FldLogsCtnCurrentStorageLoc` |
| `FldLogsContainerOwner` | `FldLogsContainerOwner` |
| `FldLogsCtnCubicCapacity` | `FldLogsCtnCubicCapacity` |
| `FldLogsCtnCubicCapacityUnit` | `FldLogsCtnCubicCapacityUnit` |
| `FldLogsCertEndDate` | `FldLogsCertEndDate` |
| `FldLogsShptItmIsAssgdToVoy` | `FldLogsShptItmIsAssgdToVoy` |
| `FldLogsContainerTareWeight` | `FldLogsContainerTareWeight` |
| `FldLogsContainerTareWeightUnit` | `FldLogsContainerTareWeightUnit` |
| `FldLogsVoyageSrceStage` | `FldLogsVoyageSrceStage` |
| `FldLogsVoyageDestStage` | `FldLogsVoyageDestStage` |
| `ItemVolume` | `ItemVolume` |
| `ItemWeight` | `ItemWeight` |
| `FldLogsVoyageAssignmentStatus` | `FldLogsVoyageAssignmentStatus` |
| `FldLogsVoyAssgmtStatusCritlty` | `FldLogsVoyAssgmtStatusCritlty` |
| `FldLogsVoyAssgmtStatusText` | `FldLogsVoyAssgmtStatusText` |
| `FldLogsCtnUnitCurrentPlant` | `FldLogsCtnUnitCurrentPlant` |
| `FldLogsCtnUnitCurShipgPoint` | `FldLogsCtnUnitCurShipgPoint` |
| `FldLogsContainerUnitExternalID` | `FldLogsContainerUnitExternalID` |
| `HandlingUnitExternalID` | `HandlingUnitExternalID` |
| `DeliveryDocument` | `DeliveryDocument` |
| `FldLogsReferenceDocumentNumber` | `FldLogsReferenceDocumentNumber` |
| `IsBusinessPurposeCompleted` | `IsBusinessPurposeCompleted` |
| `SuplrCoIsBusPrpsCmpltd` | `SuplrCoIsBusPrpsCmpltd` |
| `FldLogsShptItemActnID` | `FldLogsShptItemActnID` |
| `ShippingPointName` | `ShippingPointName` |
| `ReceivingPoint` | `ReceivingPoint` |
| `_ShipgPtText` | *Association* |
| `_RcvgPtText` | *Association* |
| `_ShptItems` | *Association* |
| `_ShptStgeAssgmt` | *Association* |
| `_TaggedItems` | *Association* |
| `_ShptPkgCtnAssgmt` | *Association* |
| `_EquipmentTypeText` | *Association* |
| `_CtnCategoryText` | *Association* |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#PROJECTION_LIST]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Interface BO for FL Container Unit - TP'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #X,
  sizeCategory: #S,
  dataClass: #MIXED
}
@VDM.viewType:#TRANSACTIONAL
@AbapCatalog.extensibility:{ extensible:true,
dataSources: ['CtnUnit'],
allowNewCompositions: true,
elementSuffix: 'UNT',
quota: {
    maximumFields: 1000 ,
    maximumBytes: 100000
  } }
//for C1 contract
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE,#CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@ObjectModel.sapObjectNodeType.name: 'FldLogsShptContainerUnit'
define root view entity I_FldLogsDelivContainerUnitTP
  provider contract transactional_interface
  as projection on R_FldLogsShptCtnUnitTP as CtnUnit
{
  key    FldLogsContainerUnitUUID,
         FldLogsContainerUUID,
         FldLogsContainerID,
         FldLogsShipmentID,
         FldLogsCtnPackgStsCode,
         FldLogsCtnPackgChkErrCode,
         FldLogsCtnIntTranspStsCode,
         FldLogsCtnExtTranspSts,
         FldLogsSrceStorLocID,
         FldLogsSrcePlnt,
         FldLogsDestStorLocID,
         FldLogsDestPlnt,
         @Semantics.systemDateTime.localInstanceLastChangedAt: true
         FldLogsCtnPackgChangeDateTime,
         FldLogsContainerCategory,
         FldLogsCtnPackgStsText,
         FldLogsShptCtnIntTranspStsText,
         FldLogsSealNumber1,
         FldLogsSealNumber2,
         FldLogsSealNumber3,
         FldLogsSealNumber4,
         FldLogsSealNumber5,
         @Semantics.quantity.unitOfMeasure: 'FldLogsGrossVolumeUnit'
         FldLogsGrossVolume,
         FldLogsGrossVolumeUnit,
         @Semantics.quantity.unitOfMeasure: 'ProductWeightUnit'
         ProductGrossWeight,
         ProductWeightUnit,
         @Semantics.quantity.unitOfMeasure: 'FldLogsCtnActualWeightUnit'
         FldLogsCtnActualWeight,
         FldLogsCtnActualWeightUnit,
         EquipmentType,
         FldLogsContainerText,
         FldLogsContainerStatus,
         @Semantics.quantity.unitOfMeasure: 'FldLogsContainerSafeLoadUnit'
         FldLogsContainerSafeLoadQty,
         FldLogsContainerSafeLoadUnit,
         FldLogsCtnCurrentLocation,
         FldLogsCtnCurrentStorageLoc,
         FldLogsContainerOwner,
         @Semantics.quantity.unitOfMeasure: 'FldLogsCtnCubicCapacityUnit'
         FldLogsCtnCubicCapacity,
         FldLogsCtnCubicCapacityUnit,
         @EndUserText.label: 'Certificate Expiry Date'
         FldLogsCertEndDate,
         FldLogsShptItmIsAssgdToVoy,
         @Semantics.quantity.unitOfMeasure: 'FldLogsContainerTareWeightUnit'
         FldLogsContainerTareWeight,
         FldLogsContainerTareWeightUnit,
         FldLogsVoyageSrceStage,
         FldLogsVoyageDestStage,
         @Semantics.quantity.unitOfMeasure: 'FldLogsGrossVolumeUnit'
         ItemVolume,
         @Semantics.quantity.unitOfMeasure: 'ProductWeightUnit'
         ItemWeight,
         FldLogsVoyageAssignmentStatus,
         @EndUserText.label: 'Voyage Assignment Status Criticality'
         FldLogsVoyAssgmtStatusCritlty,
         FldLogsVoyAssgmtStatusText,
         FldLogsCtnUnitCurrentPlant,
         FldLogsCtnUnitCurShipgPoint,
         FldLogsContainerUnitExternalID,
         @EndUserText.label: 'Handling Unit'
         HandlingUnitExternalID,
         @EndUserText.label: 'Delivery Document'
         DeliveryDocument,
         @EndUserText.label: 'Reference Document'
         FldLogsReferenceDocumentNumber,
         @Semantics.booleanIndicator: true
         IsBusinessPurposeCompleted,
         @Semantics.booleanIndicator: true
         SuplrCoIsBusPrpsCmpltd,
         FldLogsShptItemActnID,
         ShippingPointName,
         ReceivingPoint,
         _ShipgPtText,
         _RcvgPtText,
         _ShptItems        : redirected to composition child I_FldLogsDelivItemCtnTP,
         _ShptStgeAssgmt   : redirected to composition child I_FldLogsShptStgeAssgmtCtnTP,
         _TaggedItems      : redirected to composition child I_FldLogsItmsTaggedToCtnTP,
         _ShptPkgCtnAssgmt : redirected to composition child I_FldLogsShptPackggAssgmtCtnTP,
         _EquipmentTypeText,
         _CtnCategoryText
}
```
