---
name: I_FLDLOGSITMSTAGGEDTOCTNTP
description: Fldlogsitmstaggedtoctntp
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
# I_FLDLOGSITMSTAGGEDTOCTNTP

**Fldlogsitmstaggedtoctntp**

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
| `_ShptCtnUnit` | *Association* |

## Source Code

```abap
@EndUserText.label: 'BO Intf for Cont Unit Tagged Itms - TP'
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
dataSources: ['_TaggedItems'],
allowNewCompositions:true ,
elementSuffix: 'SPV',
quota: {
    maximumFields: 1000,
    maximumBytes: 100000
  }
 }
 //for C1 contract
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE, #TRANSACTIONAL_PROVIDER,#CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@ObjectModel.sapObjectNodeType.name: 'FldLogsItmsTaggedToContainer'
define view entity I_FldLogsItmsTaggedToCtnTP
as projection on R_FldLogsItmsTaggedToCtnTP as _TaggedItems
{
 key FldLogsShptItemUUID,

      FldLogsReferenceDocumentNumber,
      @EndUserText: { label :'Delivery Document',quickInfo: 'Delivery Document'}
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

      /* Associations */
      _ShptCtnUnit : redirected to parent I_FldLogsDelivContainerUnitTP

}
```
