---
name: I_FLDLOGSDELIVCONTAINERUNITTP
description: "Fldlogsdelivcontainerunittp"
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

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FldLogsContainerUnitUUID` | ✓ | |  |  |  |  |
| `FldLogsContainerUUID` |  | |  |  |  |  |
| `FldLogsContainerID` |  | |  |  |  |  |
| `FldLogsShipmentID` |  | |  |  |  |  |
| `FldLogsCtnPackgStsCode` |  | |  |  |  |  |
| `FldLogsCtnPackgChkErrCode` |  | |  |  |  |  |
| `FldLogsCtnIntTranspStsCode` |  | |  |  |  |  |
| `FldLogsCtnExtTranspSts` |  | |  |  |  |  |
| `FldLogsSrceStorLocID` |  | |  |  |  |  |
| `FldLogsSrcePlnt` |  | |  |  |  |  |
| `FldLogsDestStorLocID` |  | |  |  |  |  |
| `FldLogsDestPlnt` |  | |  |  |  |  |
| `FldLogsCtnPackgChangeDateTime` |  | |  |  |  |  |
| `FldLogsContainerCategory` |  | |  |  |  |  |
| `FldLogsCtnPackgStsText` |  | |  |  |  |  |
| `FldLogsShptCtnIntTranspStsText` |  | |  |  |  |  |
| `FldLogsSealNumber1` |  | |  |  |  |  |
| `FldLogsSealNumber2` |  | |  |  |  |  |
| `FldLogsSealNumber3` |  | |  |  |  |  |
| `FldLogsSealNumber4` |  | |  |  |  |  |
| `FldLogsSealNumber5` |  | |  |  |  |  |
| `FldLogsGrossVolume` |  | |  |  |  |  |
| `FldLogsGrossVolumeUnit` |  | |  |  |  |  |
| `ProductGrossWeight` |  | |  |  |  |  |
| `ProductWeightUnit` |  | |  |  |  |  |
| `FldLogsCtnActualWeight` |  | |  |  |  |  |
| `FldLogsCtnActualWeightUnit` |  | |  |  |  |  |
| `EquipmentType` |  | |  |  |  |  |
| `FldLogsContainerText` |  | |  |  |  |  |
| `FldLogsContainerStatus` |  | |  |  |  |  |
| `FldLogsContainerSafeLoadQty` |  | |  |  |  |  |
| `FldLogsContainerSafeLoadUnit` |  | |  |  |  |  |
| `FldLogsCtnCurrentLocation` |  | |  |  |  |  |
| `FldLogsCtnCurrentStorageLoc` |  | |  |  |  |  |
| `FldLogsContainerOwner` |  | |  |  |  |  |
| `FldLogsCtnCubicCapacity` |  | |  |  |  |  |
| `FldLogsCtnCubicCapacityUnit` |  | |  |  |  |  |
| `FldLogsCertEndDate` |  | |  |  |  |  |
| `FldLogsShptItmIsAssgdToVoy` |  | |  |  |  |  |
| `FldLogsContainerTareWeight` |  | |  |  |  |  |
| `FldLogsContainerTareWeightUnit` |  | |  |  |  |  |
| `FldLogsVoyageSrceStage` |  | |  |  |  |  |
| `FldLogsVoyageDestStage` |  | |  |  |  |  |
| `ItemVolume` |  | |  |  |  |  |
| `ItemWeight` |  | |  |  |  |  |
| `FldLogsVoyageAssignmentStatus` |  | |  |  |  |  |
| `FldLogsVoyAssgmtStatusCritlty` |  | |  |  |  |  |
| `FldLogsVoyAssgmtStatusText` |  | |  |  |  |  |
| `FldLogsCtnUnitCurrentPlant` |  | |  |  |  |  |
| `FldLogsCtnUnitCurShipgPoint` |  | |  |  |  |  |
| `FldLogsContainerUnitExternalID` |  | |  |  |  |  |
| `HandlingUnitExternalID` |  | |  |  |  |  |
| `DeliveryDocument` |  | |  |  |  |  |
| `FldLogsReferenceDocumentNumber` |  | |  |  |  |  |
| `IsBusinessPurposeCompleted` |  | |  |  |  |  |
| `SuplrCoIsBusPrpsCmpltd` |  | |  |  |  |  |
| `FldLogsShptItemActnID` |  | |  |  |  |  |
| `ShippingPointName` |  | |  |  |  |  |
| `ReceivingPoint` |  | |  |  |  |  |
| `_ShipgPtText` | | ✓ | | | | |
| `_RcvgPtText` | | ✓ | | | | |
| `_ShptItems` | | ✓ | | | | |
| `_ShptStgeAssgmt` | | ✓ | | | | |
| `_TaggedItems` | | ✓ | | | | |
| `_ShptPkgCtnAssgmt` | | ✓ | | | | |
| `_EquipmentTypeText` | | ✓ | | | | |
| `_CtnCategoryText` | | ✓ | | | | |

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
