---
name: I_FLDLOGSDELIVITEMCTNTP
description: "Fldlogsdelivitemctntp"
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
  - item-level
  - component:CA-FL-SG
  - lob:Cross-Application Components
---
# I_FLDLOGSDELIVITEMCTNTP

**Fldlogsdelivitemctntp**

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
| `FldLogsReferenceDocumentNumber` |  | |  |  |  |  |
| `DeliveryDocument` |  | |  |  |  |  |
| `DeliveryDocumentItem` |  | |  |  |  |  |
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
| `FldLogsSrceStorLocID` |  | |  |  |  |  |
| `FldLogsSrcePlnt` |  | |  |  |  |  |
| `FldLogsDestStorLocID` |  | |  |  |  |  |
| `FldLogsDestPlnt` |  | |  |  |  |  |
| `FldLogsDelivDueDate` |  | |  |  |  |  |
| `FldLogsVoyageAssignmentStatus` |  | |  |  |  |  |
| `FldLogsVoyAssgmtStatusText` |  | |  |  |  |  |
| `FldLogsGrossVolume` |  | |  |  |  |  |
| `FldLogsGrossVolumeUnit` |  | |  |  |  |  |
| `ProductGrossWeight` |  | |  |  |  |  |
| `ProductWeightUnit` |  | |  |  |  |  |
| `QuantityInBaseUnit` |  | |  |  |  |  |
| `OrderQuantityUnit` |  | |  |  |  |  |
| `FldLogsShptItmChangedDateTime` |  | |  |  |  |  |
| `FldLogsShptItemCurrentPlant` |  | |  |  |  |  |
| `FldLogsShptItemCurShipgPoint` |  | |  |  |  |  |
| `FldLogsShptItemActualWeight` |  | |  |  |  |  |
| `FldLogsShptItemActlWeightUnit` |  | |  |  |  |  |
| `FieldLogisticsKitIdentifier` |  | |  |  |  |  |
| `HandlingUnitQuantity` |  | |  |  |  |  |
| `HandlingUnitQuantityUnit` |  | |  |  |  |  |
| `_ShptCtnUnit` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'BO Intf for Cont Unit Shpt Itms - TP'
@AbapCatalog.viewEnhancementCategory: [#PROJECTION_LIST]
@AccessControl.authorizationCheck:#MANDATORY
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #X,
  sizeCategory: #S,
  dataClass: #MIXED
}
@VDM.viewType:#TRANSACTIONAL
@AbapCatalog.extensibility: {
  extensible: true,
  elementSuffix: 'SIT',
  allowNewCompositions: true,
  dataSources: ['ShptItems'],
quota: {
    maximumFields: 1000 ,
    maximumBytes: 100000
  }
}
//for C1 contract
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE, #TRANSACTIONAL_PROVIDER,#CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@ObjectModel.sapObjectNodeType.name: 'FieldLogisticsShipmentItem'
define view entity I_FldLogsDelivItemCtnTP as
projection on R_FldLogsShptItemsTP as ShptItems
{

    key FldLogsShptItemUUID,
      FldLogsReferenceDocCategory,
      FldLogsReferenceDocumentNumber,
      @EndUserText: { label :'Delivery Document',quickInfo: 'Delivery Document'}
      DeliveryDocument,
      DeliveryDocumentItem,
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
      FldLogsSrceStorLocID,
      FldLogsSrcePlnt,
      FldLogsDestStorLocID,
      FldLogsDestPlnt,
      FldLogsDelivDueDate,
      FldLogsVoyageAssignmentStatus,
      FldLogsVoyAssgmtStatusText,
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
      FldLogsShptItemCurrentPlant,
      FldLogsShptItemCurShipgPoint,
      @Semantics.quantity.unitOfMeasure: 'FldLogsShptItemActlWeightUnit'
      FldLogsShptItemActualWeight,
      FldLogsShptItemActlWeightUnit,
      FieldLogisticsKitIdentifier,
      @Semantics.quantity.unitOfMeasure: 'HandlingUnitQuantityUnit'
      HandlingUnitQuantity,
      HandlingUnitQuantityUnit,
      _ShptCtnUnit : redirected to parent I_FldLogsDelivContainerUnitTP
}
```
