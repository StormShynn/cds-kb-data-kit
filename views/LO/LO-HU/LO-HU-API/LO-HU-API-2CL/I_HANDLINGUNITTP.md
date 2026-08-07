---
name: I_HANDLINGUNITTP
description: Handlingunittp
app_component: LO-HU-API-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-HU
  - LO-HU-API
  - interface-view
  - transactional-processing
  - component:LO-HU-API-2CL
  - lob:Logistics General
---
# I_HANDLINGUNITTP

**Handlingunittp**

| Property | Value |
|---|---|
| App Component | `LO-HU-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `HandlingUnitExternalID` | ✓ | |  |  |
| `Warehouse` | ✓ | |  |  |
| `HandlingUnitExternalIdType` |  | |  |  |
| `Plant` |  | |  |  |
| `StorageLocation` |  | |  |  |
| `ShippingPoint` |  | |  |  |
| `HandlingUnitLowerLevelRefer` |  | |  |  |
| `ParentHandlingUnitNumber` |  | |  |  |
| `PackagingMaterial` |  | |  |  |
| `PackagingMaterialType` |  | |  |  |
| `GrossWeight` |  | |  |  |
| `NetWeight` |  | |  |  |
| `HandlingUnitMaxWeight` |  | |  |  |
| `WeightUnit` |  | |  |  |
| `HandlingUnitTareWeight` |  | |  |  |
| `HandlingUnitTareWeightUnit` |  | |  |  |
| `GrossVolume` |  | |  |  |
| `HandlingUnitNetVolume` |  | |  |  |
| `HandlingUnitMaxVolume` |  | |  |  |
| `VolumeUnit` |  | |  |  |
| `HandlingUnitTareVolume` |  | |  |  |
| `HandlingUnitTareVolumeUnit` |  | |  |  |
| `HandlingUnitLength` |  | |  |  |
| `HandlingUnitWidth` |  | |  |  |
| `HandlingUnitHeight` |  | |  |  |
| `UnitOfMeasureDimension` |  | |  |  |
| `HandlingUnitPackingObjectType` |  | |  |  |
| `HandlingUnitReferenceDocument` |  | |  |  |
| `CreatedByUser` |  | |  |  |
| `CreationDateTime` |  | |  |  |
| `LastChangedByUser` |  | |  |  |
| `LastChangeDateTime` |  | |  |  |
| `HandlingUnitInternalStatus` |  | |  |  |
| `HandlingUnitProcessStatus` |  | |  |  |
| `SourceHandlingUnitUUID` |  | |  |  |
| `PackingInstruction` |  | |  |  |
| `HandlingUnitSecondExternalId` |  | |  |  |
| `StorageType` |  | |  |  |
| `StorageSection` |  | |  |  |
| `StorageBin` |  | |  |  |
| `EWMConsolidationGroup` |  | |  |  |
| `HandlingUnitHasCrossRefDoc` |  | |  |  |
| `EWMHandlingUnitType` |  | |  |  |
| `HandlingUnitMaxLength` |  | |  |  |
| `HandlingUnitMaxWidth` |  | |  |  |
| `HandlingUnitMaxHeight` |  | |  |  |
| `HandlingUnitMaxDimensionUnit` |  | |  |  |
| `_HandlingUnitItem` | | ✓ | | |

## Source Code

```abap
@EndUserText.label: 'Handling Unit - TP'
@AccessControl.authorizationCheck: #CHECK
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
   modelingPattern:       #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality:  #C,
     dataClass:       #TRANSACTIONAL,
     sizeCategory:    #XL
   },
   semanticKey: ['HandlingUnitExternalID', 'Warehouse']
}
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@ObjectModel.sapObjectNodeType.name:'HandlingUnit'

define root view entity I_HandlingUnitTP provider contract transactional_interface
  as projection on R_HandlingUnitTP as HandlingUnit
{
  key HandlingUnitExternalID,
  key Warehouse,
//      @Semantics.uuid
//      HandlingUnitCharUUID,
      HandlingUnitExternalIdType,
      Plant,
      StorageLocation,
      ShippingPoint,
      //HandlingUnitInternalID,
      HandlingUnitLowerLevelRefer,
      ParentHandlingUnitNumber,
      PackagingMaterial,
      PackagingMaterialType,
      @Semantics.quantity.unitOfMeasure: 'WeightUnit'
      GrossWeight,
      @Semantics.quantity.unitOfMeasure: 'WeightUnit'
      NetWeight,
      @Semantics.quantity.unitOfMeasure: 'WeightUnit'
      HandlingUnitMaxWeight,
      WeightUnit,
      @Semantics.quantity.unitOfMeasure: 'HandlingUnitTareWeightUnit'
      HandlingUnitTareWeight,
      HandlingUnitTareWeightUnit,
      @Semantics.quantity.unitOfMeasure: 'VolumeUnit'
      GrossVolume,
      @Semantics.quantity.unitOfMeasure: 'VolumeUnit'
      HandlingUnitNetVolume,
      @Semantics.quantity.unitOfMeasure: 'VolumeUnit'
      HandlingUnitMaxVolume,
      VolumeUnit,
      @Semantics.quantity.unitOfMeasure: 'HandlingUnitTareVolumeUnit'
      HandlingUnitTareVolume,
      HandlingUnitTareVolumeUnit,
      @Semantics.quantity.unitOfMeasure: 'UnitOfMeasureDimension'
      HandlingUnitLength,
      @Semantics.quantity.unitOfMeasure: 'UnitOfMeasureDimension'
      HandlingUnitWidth,
      @Semantics.quantity.unitOfMeasure: 'UnitOfMeasureDimension'
      HandlingUnitHeight,
      UnitOfMeasureDimension,
      @EndUserText.label: 'Reference Document Type'
      HandlingUnitPackingObjectType,
      @EndUserText.label: 'Reference Document'
      HandlingUnitReferenceDocument,
      @Semantics.user.createdBy: true
      CreatedByUser,
      @Semantics.systemDateTime.createdAt: true
      CreationDateTime,
      @Semantics.user.lastChangedBy: true
      LastChangedByUser,
      @Semantics.systemDateTime.lastChangedAt: true
      LastChangeDateTime,
      @EndUserText.label: 'Handling Unit Status'
      HandlingUnitInternalStatus,
      HandlingUnitProcessStatus,
      SourceHandlingUnitUUID,
      PackingInstruction,
      HandlingUnitSecondExternalId,
      
      //EWM fields empty at the moment -> SADL Exit
      StorageType,
      StorageSection,
      StorageBin,
      
      EWMConsolidationGroup,
      HandlingUnitHasCrossRefDoc,
      EWMHandlingUnitType,
      @Semantics.quantity.unitOfMeasure: 'HandlingUnitMaxDimensionUnit'
      HandlingUnitMaxLength,
      @Semantics.quantity.unitOfMeasure: 'HandlingUnitMaxDimensionUnit'
      HandlingUnitMaxWidth,
      @Semantics.quantity.unitOfMeasure: 'HandlingUnitMaxDimensionUnit'
      HandlingUnitMaxHeight,
      HandlingUnitMaxDimensionUnit,
      
      /* Associations */
      _HandlingUnitItem : redirected to composition child I_HandlingUnitItemTP
}
```
