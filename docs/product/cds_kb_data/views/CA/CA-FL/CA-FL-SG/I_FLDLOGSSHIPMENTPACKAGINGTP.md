---
name: I_FLDLOGSSHIPMENTPACKAGINGTP
description: "Fldlogsshipmentpackagingtp"
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
  - shipment
  - component:CA-FL-SG
  - lob:Cross-Application Components
---
# I_FLDLOGSSHIPMENTPACKAGINGTP

**Fldlogsshipmentpackagingtp**

| Property | Value |
|---|---|
| App Component | `CA-FL-SG` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FldLogsContainerUUID` | ✓ | |  |  |  |  |
| `FldLogsContainerID` |  | |  |  |  |  |
| `Equipment` |  | |  |  |  |  |
| `EquipmentType` |  | |  |  |  |  |
| `EquipmentGroup` |  | |  |  |  |  |
| `FldLogsContainerText` |  | |  |  |  |  |
| `FldLogsContainerCategory` |  | |  |  |  |  |
| `FldLogsShptCtnStsCriticality` |  | |  |  |  |  |
| `FldLogsContainerStatus` |  | |  |  |  |  |
| `FldLogsContainerSafeLoadQty` |  | |  |  |  |  |
| `FldLogsContainerSafeLoadUnit` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `StorageLocation` |  | |  |  |  |  |
| `FldLogsCtnCurrentLocation` |  | |  |  |  |  |
| `FldLogsCtnCurrentStorageLoc` |  | |  |  |  |  |
| `FldLogsCtnRentalStartDate` |  | |  |  |  |  |
| `FldLogsCtnRentalExpiryDate` |  | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `FldLogsCtnCubicCapacity` |  | |  |  |  |  |
| `FldLogsCtnCubicCapacityUnit` |  | |  |  |  |  |
| `FldLogsCtnInteriorLength` |  | |  |  |  |  |
| `FldLogsCtnInteriorWidth` |  | |  |  |  |  |
| `FldLogsCtnInteriorHeight` |  | |  |  |  |  |
| `FldLogsCtnInteriorDimnUnit` |  | |  |  |  |  |
| `FldLogsCtnMaximumLength` |  | |  |  |  |  |
| `FldLogsCtnMaximumWidth` |  | |  |  |  |  |
| `FldLogsCtnMaximumDimnUnit` |  | |  |  |  |  |
| `FldLogsContainerFootprintQty` |  | |  |  |  |  |
| `FldLogsContainerFootprintUnit` |  | |  |  |  |  |
| `FldLogsCtnMaxGrossWeight` |  | |  |  |  |  |
| `FldLogsCtnMaxGrossWeightUnit` |  | |  |  |  |  |
| `FldLogsContainerTareWeight` |  | |  |  |  |  |
| `FldLogsContainerTareWeightUnit` |  | |  |  |  |  |
| `FldLogsContainerTareVolume` |  | |  |  |  |  |
| `FldLogsContainerTareVolumeUnit` |  | |  |  |  |  |
| `FldLogsCtnIsTemperatureCtrld` |  | |  |  |  |  |
| `FldLogsCtnMinCtrlTemperature` |  | |  |  |  |  |
| `FldLogsCtnMaxCtrlTemperature` |  | |  |  |  |  |
| `FldLogsCtnTemperatureUnit` |  | |  |  |  |  |
| `FldLogsContainerVentilation` |  | |  |  |  |  |
| `ExternalResourceID` |  | |  |  |  |  |
| `FldLogsContainerOwner` |  | |  |  |  |  |
| `FldLogsCtnOwnerBusinessPartner` |  | |  |  |  |  |
| `FldLogsCtnIsRented` |  | |  |  |  |  |
| `FldLogsCtnIsSupplierOwned` |  | |  |  |  |  |
| `FldLogsCtnIsThirdPartyOwned` |  | |  |  |  |  |
| `FieldLogisticsCtnIsOwned` |  | |  |  |  |  |
| `IsBusinessPurposeCompleted` |  | |  |  |  |  |
| `SuplrCoIsBusPrpsCmpltd` |  | |  |  |  |  |
| `EquipmentCategory` |  | |  |  |  |  |
| `FldLogsIsCreateEquipment` |  | |  |  |  |  |
| `FldLogsIsDeleteEquipment` |  | |  |  |  |  |
| `FldLogsCtnMaximumHeight` |  | |  |  |  |  |
| `FldLogsCtnChangeDateTime` |  | |  |  |  |  |
| `FldLogsCtnFootprintHasError` |  | |  |  |  |  |
| `FldLogsCtnTareVolumeHasError` |  | |  |  |  |  |
| `FldLogsCtnCubicCapHasError` |  | |  |  |  |  |
| `FldLogsContainerExternalID` |  | |  |  |  |  |
| `FldLogsCtnHasIntNmbrRngeCrted` |  | |  |  |  |  |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#PROJECTION_LIST]
@EndUserText.label: 'FL Shipment Packaging Interface - TP'
@AccessControl.authorizationCheck: #MANDATORY
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #X,
  sizeCategory: #S,
  dataClass: #MIXED
}
@VDM.viewType:#TRANSACTIONAL

@AbapCatalog.extensibility: {
  extensible: true,
dataSources: ['FldLogsShptCtn'],
allowNewCompositions:true ,
quota: {
    maximumFields: 1000,
    maximumBytes: 100000
      },
  elementSuffix: 'CTN' }
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

//for C1 contract
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE, #TRANSACTIONAL_PROVIDER,#CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.sapObjectNodeType.name: 'FldLogsShptContainer'

define root view entity I_FldLogsShipmentPackagingTP
  provider contract transactional_interface
  as projection on R_FldLogsShipmentPackagingTP as FldLogsShptCtn
{
  key FldLogsContainerUUID,
      FldLogsContainerID,
      Equipment,
      EquipmentType,
      EquipmentGroup,
      FldLogsContainerText,
      FldLogsContainerCategory,
      
      @EndUserText.label: 'Container Status Criticality'
      FldLogsShptCtnStsCriticality,
      FldLogsContainerStatus,
      @Semantics.quantity.unitOfMeasure: 'FldLogsContainerSafeLoadUnit'
      FldLogsContainerSafeLoadQty,
      FldLogsContainerSafeLoadUnit,
      Plant,
      StorageLocation,
      FldLogsCtnCurrentLocation,
      FldLogsCtnCurrentStorageLoc,
      FldLogsCtnRentalStartDate,
      FldLogsCtnRentalExpiryDate,
      Material,
      @Semantics.quantity.unitOfMeasure: 'FldLogsCtnCubicCapacityUnit'
      FldLogsCtnCubicCapacity,
      FldLogsCtnCubicCapacityUnit,
      @Semantics.quantity.unitOfMeasure: 'FldLogsCtnInteriorDimnUnit'
      FldLogsCtnInteriorLength,
      @Semantics.quantity.unitOfMeasure: 'FldLogsCtnInteriorDimnUnit'
      FldLogsCtnInteriorWidth,
      @Semantics.quantity.unitOfMeasure: 'FldLogsCtnInteriorDimnUnit'
      FldLogsCtnInteriorHeight,
      FldLogsCtnInteriorDimnUnit,
      @Semantics.quantity.unitOfMeasure: 'FldLogsCtnMaximumDimnUnit'
      FldLogsCtnMaximumLength,
      @Semantics.quantity.unitOfMeasure: 'FldLogsCtnMaximumDimnUnit'
      FldLogsCtnMaximumWidth,
      FldLogsCtnMaximumDimnUnit,
      @Semantics.quantity.unitOfMeasure: 'FldLogsContainerFootprintUnit'
      FldLogsContainerFootprintQty,
      FldLogsContainerFootprintUnit,
      @Semantics.quantity.unitOfMeasure: 'FldLogsCtnMaxGrossWeightUnit'
      FldLogsCtnMaxGrossWeight,
      FldLogsCtnMaxGrossWeightUnit,
      @Semantics.quantity.unitOfMeasure: 'FldLogsContainerTareWeightUnit'
      FldLogsContainerTareWeight,
      FldLogsContainerTareWeightUnit,
      @Semantics.quantity.unitOfMeasure: 'FldLogsContainerTareVolumeUnit'
      FldLogsContainerTareVolume,
      FldLogsContainerTareVolumeUnit,
      FldLogsCtnIsTemperatureCtrld,
      @Semantics.quantity.unitOfMeasure: 'FldLogsCtnTemperatureUnit'
      FldLogsCtnMinCtrlTemperature,
      @Semantics.quantity.unitOfMeasure: 'FldLogsCtnTemperatureUnit'
      FldLogsCtnMaxCtrlTemperature,
      FldLogsCtnTemperatureUnit,
      FldLogsContainerVentilation,
      ExternalResourceID,
      FldLogsContainerOwner,
      FldLogsCtnOwnerBusinessPartner,
      FldLogsCtnIsRented,
      FldLogsCtnIsSupplierOwned,
      FldLogsCtnIsThirdPartyOwned,
      @Semantics.booleanIndicator: true
      FieldLogisticsCtnIsOwned,
      @Semantics.booleanIndicator: true
      IsBusinessPurposeCompleted,
      @Semantics.booleanIndicator: true
      SuplrCoIsBusPrpsCmpltd,
      EquipmentCategory,
      FldLogsIsCreateEquipment,
      FldLogsIsDeleteEquipment,
      @Semantics.quantity.unitOfMeasure: 'FldLogsCtnMaximumDimnUnit'
      FldLogsCtnMaximumHeight,
      @Semantics.systemDateTime.localInstanceLastChangedAt: true
      FldLogsCtnChangeDateTime,
      FldLogsCtnFootprintHasError,
      FldLogsCtnTareVolumeHasError,
      FldLogsCtnCubicCapHasError,
      FldLogsContainerExternalID,
      FldLogsCtnHasIntNmbrRngeCrted
}
```
