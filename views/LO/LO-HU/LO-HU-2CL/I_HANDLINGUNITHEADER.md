---
name: I_HANDLINGUNITHEADER
description: Handlingunitheader
app_component: LO-HU-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-HU
  - interface-view
  - header-level
  - component:LO-HU-2CL
  - lob:Logistics General
---
# I_HANDLINGUNITHEADER

**Handlingunitheader**

| Property | Value |
|---|---|
| App Component | `LO-HU-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `HandlingUnitInternalID` | `venum` |
| `HandlingUnitCharUUID` | `case when HandlingUnitHeader.uuid is not null then bintohex(HandlingUnitHeader.uuid) else cast( HandlingUnitHeader.handle as lo_hu_uuid_char32 ) end` |
| `HandlingUnitExternalID` | `exidv` |
| `HandlingUnitExternalIdType` | `exida` |
| `ShippingPoint` | `vstel` |
| `LoadingPoint` | `lstel` |
| `PackagingMaterial` | `vhilm` |
| `Plant` | `werks` |
| `SalesDocumentItemCategory` | `pstyv` |
| `SalesOrganization` | `vkorg` |
| `DistributionChannel` | `vtweg` |
| `StorageLocation` | `lgort` |
| `Warehouse` | `lgnum` |
| `GrossWeight` | `brgew` |
| `NetWeight` | `ntgew` |
| `HandlingUnitMaxWeight` | `magew` |
| `WeightUnit` | `gewei_max` |
| `HandlingUnitTareWeight` | `tarag` |
| `HandlingUnitTareWeightUnit` | `gewei` |
| `HandlingUnitWeightTolerance` | `gewto` |
| `GrossVolume` | `btvol` |
| `HandlingUnitNetVolume` | `ntvol` |
| `HandlingUnitMaxVolume` | `mavol` |
| `VolumeUnit` | `voleh_max` |
| `HandlingUnitTareVolume` | `tavol` |
| `HandlingUnitTareVolumeUnit` | `voleh` |
| `HandlingUnitVolumeTolerance` | `volto` |
| `CreatedByUser` | `ernam` |
| `CreationDate` | `erdat` |
| `CreationTime` | `eruhr` |
| `LastChangedByUser` | `aenam` |
| `LastChangeDate` | `aedat` |
| `LastChangeTime` | `aezet` |
| `HandlingUnitGroup1` | `vegr1` |
| `HandlingUnitGroup2` | `vegr2` |
| `HandlingUnitGroup3` | `vegr3` |
| `HandlingUnitGroup4` | `vegr4` |
| `HandlingUnitGroup5` | `vegr5` |
| `HandlingUnitLength` | `laeng` |
| `HandlingUnitWidth` | `breit` |
| `HandlingUnitHeight` | `hoehe` |
| `UnitOfMeasureDimension` | `meabm` |
| `HandlingUnitBaseUnitOfMeasure` | `meins` |
| `HandlingUnitDeliveryWithPkgItm` | `vbeln_gen` |
| `HandlingUnitGenDeliveryItem` | `posnr_gen` |
| `HandlingUnitContentDescription` | `inhalt` |
| `PackagingMaterialType` | `vhart` |
| `PackagingMaterialGroup` | `magrv` |
| `HandlingUnitWeightVolumeIsFix` | `gewfx` |
| `PackagingMaterialCategory` | `veltp` |
| `HandlingUnitSecondExternalId` | `exidv2` |
| `HandlingUnitCustomerPackMat` | `vhilm_ku` |
| `HandlingUnitPackingObjectType` | `_ERPHandlingUnitReferenceDoc.HandlingUnitRefDocType` |
| `HandlingUnitPackingObjectKey` | `_ERPHandlingUnitReferenceDoc.HandlingUnitReferenceDocument` |
| `SourceHandlingUnitUUID` | `handle` |
| `HandlingUnitIsClosed` | `kzgvh` |
| `HazardousSubstanceIndicator` | `adge_dg` |
| `HandlingUnitLowerLevelRefer` | `uevel` |
| `HandlingUnitInternalStatus` | `status` |
| `PackingInstruction` | `cast( packvorschr as pl_packnr preserving type )` |
| `PackingInstructionStatus` | `packvorschr_st` |
| `PackInstructExtLabelNotPrinted` | `labeltyp` |
| `PackingInstructMaxLoadQuantity` | `zul_aufl` |
| `HandlingUnitIsComplete` | `erlkz` |
| `HandlingUnitStockMgmtType` | `hu_system` |
| `_Item` | *Association* |
| `_WeightUnit` | *Association* |
| `_WeightUnitTare` | *Association* |
| `_VolumeUnit` | *Association* |
| `_VolumeUnitTare` | *Association* |
| `_UnitOfMeasureDimension` | *Association* |
| `_PackagingMaterial` | *Association* |
| `_Plant` | *Association* |
| `_StorageLocation` | *Association* |
| `_ShippingPoint` | *Association* |
| `_LoadingPoint` | *Association* |
| `_PackagingMaterialType` | *Association* |
| `_PackagingMaterialGroup` | *Association* |
| `_SalesDocumentItemCategory` | *Association* |
| `_SalesOrganization` | *Association* |
| `_PackagingMaterialCategory` | *Association* |
| `_PackingObjectType` | *Association* |
| `_HandlingUnitHistory` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Item` | `I_HandlingUnitItem` | [0..*] |
| `_ERPHandlingUnitReferenceDoc` | `I_ERPHandlingUnitReferenceDoc` | [0..1] |
| `_WeightUnit` | `I_UnitOfMeasure` | [0..1] |
| `_WeightUnitTare` | `I_UnitOfMeasure` | [0..1] |
| `_VolumeUnit` | `I_UnitOfMeasure` | [0..1] |
| `_VolumeUnitTare` | `I_UnitOfMeasure` | [0..1] |
| `_UnitOfMeasureDimension` | `I_UnitOfMeasure` | [0..1] |
| `_PackagingMaterial` | `I_Material` | [0..1] |
| `_Plant` | `I_Plant` | [0..1] |
| `_StorageLocation` | `I_StorageLocation` | [0..1] |
| `_ShippingPoint` | `I_ShippingPoint` | [0..1] |
| `_LoadingPoint` | `I_LoadingPoint` | [0..1] |
| `_PackagingMaterialType` | `I_MeansOfTransportType` | [0..1] |
| `_PackagingMaterialGroup` | `I_MaterialGroupPackMaterials` | [0..1] |
| `_SalesDocumentItemCategory` | `I_SalesDocumentItemCategory` | [0..1] |
| `_SalesOrganization` | `I_SalesOrganization` | [0..1] |
| `_PackagingMaterialCategory` | `I_HandlingUnitPackMatCategory` | [0..1] |
| `_PackingObjectType` | `I_HandlingUnitPackObjectType` | [0..1] |
| `_HandlingUnitHistory` | `I_HandlingUnitHistory` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Handling Unit Header'

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type:  #PUBLIC_LOCAL_API
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@AbapCatalog: {
    sqlViewName: 'IHANDLINGUNITHD',
    compiler.compareFilter: true,
    preserveKey:true
}

@ObjectModel: {
   semanticKey:       [ 'HandlingUnitExternalId' ],
   representativeKey: 'HandlingUnitInternalId',
   usageType: {
     serviceQuality:  #B,
     dataClass:       #MIXED,
     sizeCategory:    #XL
   },
   supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
   modelingPattern: #NONE
}

@Metadata.ignorePropagatedAnnotations: true

define view I_HandlingUnitHeader
  as select from vekp as HandlingUnitHeader
  association [0..*] to I_HandlingUnitItem            as _Item                        on  $projection.HandlingUnitInternalID = _Item.HandlingUnitInternalID
  association [0..1] to I_ERPHandlingUnitReferenceDoc as _ERPHandlingUnitReferenceDoc on  $projection.HandlingUnitInternalID = _ERPHandlingUnitReferenceDoc.HandlingUnitInternalID
  association [0..1] to I_UnitOfMeasure               as _WeightUnit                  on  _WeightUnit.UnitOfMeasure = $projection.WeightUnit
  association [0..1] to I_UnitOfMeasure               as _WeightUnitTare              on  _WeightUnitTare.UnitOfMeasure = $projection.HandlingUnitTareWeightUnit
  association [0..1] to I_UnitOfMeasure               as _VolumeUnit                  on  _VolumeUnit.UnitOfMeasure = $projection.VolumeUnit
  association [0..1] to I_UnitOfMeasure               as _VolumeUnitTare              on  _VolumeUnitTare.UnitOfMeasure = $projection.HandlingUnitTareVolumeUnit
  association [0..1] to I_UnitOfMeasure               as _UnitOfMeasureDimension      on  _UnitOfMeasureDimension.UnitOfMeasure = $projection.UnitOfMeasureDimension

  association [0..1] to I_Material                    as _PackagingMaterial           on  _PackagingMaterial.Material   = $projection.PackagingMaterial
                                                                                      and ( _PackagingMaterial.MaterialType = 'VERP'  or   _PackagingMaterial.MaterialType = 'LEIH' )
  association [0..1] to I_Plant                       as _Plant                       on  $projection.Plant = _Plant.Plant

  association [0..1] to I_StorageLocation             as _StorageLocation             on  $projection.Plant           = _StorageLocation.Plant
                                                                                      and $projection.StorageLocation = _StorageLocation.StorageLocation

  //  association [0..1] to I_Warehouse                 as _Warehouse                     on  $projection.warehouse = _Warehouse.Warehouse

  association [0..1] to I_ShippingPoint               as _ShippingPoint               on  _ShippingPoint.ShippingPoint = $projection.ShippingPoint
  association [0..1] to I_LoadingPoint                as _LoadingPoint                on  _LoadingPoint.ShippingPoint = $projection.ShippingPoint
                                                                                      and $projection.LoadingPoint    = _LoadingPoint.LoadingPoint
  association [0..1] to I_MeansOfTransportType        as _PackagingMaterialType       on  _PackagingMaterialType.MeansOfTransportType = $projection.PackagingMaterialType
  association [0..1] to I_MaterialGroupPackMaterials  as _PackagingMaterialGroup      on  _PackagingMaterialGroup.MaterialGroup = $projection.PackagingMaterialGroup
  association [0..1] to I_SalesDocumentItemCategory   as _SalesDocumentItemCategory   on  $projection.SalesDocumentItemCategory = _SalesDocumentItemCategory.SalesDocumentItemCategory
  association [0..1] to I_SalesOrganization           as _SalesOrganization           on  $projection.SalesOrganization = _SalesOrganization.SalesOrganization
  association [0..1] to I_HandlingUnitPackMatCategory as _PackagingMaterialCategory   on  $projection.PackagingMaterialCategory = _PackagingMaterialCategory.PackagingMaterialCategory
  association [0..1] to I_HandlingUnitPackObjectType  as _PackingObjectType           on  $projection.HandlingUnitPackingObjectType = _PackingObjectType.HandlingUnitPackingObjectType
  association [0..*] to I_HandlingUnitHistory         as _HandlingUnitHistory         on  _HandlingUnitHistory.SourceHandlingUnitUUID = $projection.SourceHandlingUnitUUID
  //  association [0..1] to I_HandlingUnitHeader          as _ToParenthandlingUnit        on  $projection.HandlingUnitLowerLevelRefer     = _ToParenthandlingUnit.HandlingUnitInternalId

  // associations to authorization views
  //    association [0..*] to I_PPM_AuthznByUsrH        as _AuthUser
  //            on      _AuthUser.ReferencedObjectUUID   = $projection.TaskUUID
  //             and    _AuthUser.UserID                 = $session.user
  //             and (  _AuthUser.Activity = 'Admin'     or _AuthUser.Activity = 'Write'      or _AuthUser.Activity = 'Read' )
{
  key venum                                                      as HandlingUnitInternalID,

      case
       when HandlingUnitHeader.uuid is not null then bintohex(HandlingUnitHeader.uuid)
       else cast( HandlingUnitHeader.handle as lo_hu_uuid_char32 )
       end                                                       as HandlingUnitCharUUID,

      exidv                                                      as HandlingUnitExternalID,
      exida                                                      as HandlingUnitExternalIdType,
      vstel                                                      as ShippingPoint,
      lstel                                                      as LoadingPoint,
      vhilm                                                      as PackagingMaterial,
      werks                                                      as Plant,
      pstyv                                                      as SalesDocumentItemCategory,
      vkorg                                                      as SalesOrganization,
      vtweg                                                      as DistributionChannel,
      lgort                                                      as StorageLocation,
      lgnum                                                      as Warehouse,

      //    Weight fields
      @Semantics.quantity.unitOfMeasure: 'WeightUnit'
      brgew                                                      as GrossWeight,
      @Semantics.quantity.unitOfMeasure: 'WeightUnit'
      ntgew                                                      as NetWeight,
      @Semantics.quantity.unitOfMeasure: 'WeightUnit'
      magew                                                      as HandlingUnitMaxWeight,
      @Semantics.unitOfMeasure:true
      gewei_max                                                  as WeightUnit,
      @Semantics.quantity.unitOfMeasure: 'HandlingUnitTareWeightUnit'
      tarag                                                      as HandlingUnitTareWeight,
      @Semantics.unitOfMeasure:true
      gewei                                                      as HandlingUnitTareWeightUnit,
      gewto                                                      as HandlingUnitWeightTolerance,

      //    Volume fields
      @Semantics.quantity.unitOfMeasure: 'VolumeUnit'
      btvol                                                      as GrossVolume,
      @Semantics.quantity.unitOfMeasure: 'VolumeUnit'
      ntvol                                                      as HandlingUnitNetVolume,
      @Semantics.quantity.unitOfMeasure: 'VolumeUnit'
      mavol                                                      as HandlingUnitMaxVolume,
      @Semantics.unitOfMeasure:true
      voleh_max                                                  as VolumeUnit,
      @Semantics.quantity.unitOfMeasure: 'HandlingUnitTareVolumeUnit'
      tavol                                                      as HandlingUnitTareVolume,
      @Semantics.unitOfMeasure:true
      voleh                                                      as HandlingUnitTareVolumeUnit,
      volto                                                      as HandlingUnitVolumeTolerance,

      //    probably not used - not clear, what is it stands for
      //      anzgl                                               as HandlingUnitNrSimPackMaterials,

      // Admin fields
      ernam                                                      as CreatedByUser,
      @Semantics.systemDate.createdAt: true
      erdat                                                      as CreationDate,
      eruhr                                                      as CreationTime,
      aenam                                                      as LastChangedByUser,
      @Semantics.systemDate.lastChangedAt: true
      aedat                                                      as LastChangeDate,
      aezet                                                      as LastChangeTime,

      //    Grouping & sorting
      vegr1                                                      as HandlingUnitGroup1,
      vegr2                                                      as HandlingUnitGroup2,
      vegr3                                                      as HandlingUnitGroup3,
      vegr4                                                      as HandlingUnitGroup4,
      vegr5                                                      as HandlingUnitGroup5,
      //    probably not used - not clear, what is it stands for
      //    sortl                                               as HandlingUnitSortField,

      //    Dimensions
      @Semantics.quantity.unitOfMeasure: 'UnitOfMeasureDimension'
      laeng                                                      as HandlingUnitLength,
      @Semantics.quantity.unitOfMeasure: 'UnitOfMeasureDimension'
      breit                                                      as HandlingUnitWidth,
      @Semantics.quantity.unitOfMeasure: 'UnitOfMeasureDimension'
      hoehe                                                      as HandlingUnitHeight,
      @Semantics.unitOfMeasure:true
      meabm                                                      as UnitOfMeasureDimension,

      @Semantics.unitOfMeasure:true
      meins                                                      as HandlingUnitBaseUnitOfMeasure,
      vbeln_gen                                                  as HandlingUnitDeliveryWithPkgItm,
      posnr_gen                                                  as HandlingUnitGenDeliveryItem,
      inhalt                                                     as HandlingUnitContentDescription,
      vhart                                                      as PackagingMaterialType,
      magrv                                                      as PackagingMaterialGroup,
      gewfx                                                      as HandlingUnitWeightVolumeIsFix,
      veltp                                                      as PackagingMaterialCategory,
      @EndUserText.label: 'Second HU Identification'
      exidv2                                                     as HandlingUnitSecondExternalId,
      vhilm_ku                                                   as HandlingUnitCustomerPackMat,
      _ERPHandlingUnitReferenceDoc.HandlingUnitRefDocType        as HandlingUnitPackingObjectType,
      _ERPHandlingUnitReferenceDoc.HandlingUnitReferenceDocument as HandlingUnitPackingObjectKey,
      handle                                                     as SourceHandlingUnitUUID,
      kzgvh                                                      as HandlingUnitIsClosed,
      adge_dg                                                    as HazardousSubstanceIndicator,
      //    adge_dgpr                                           as PackLevelRelevantForPrinting,  // HU prefix is missing
      uevel                                                      as HandlingUnitLowerLevelRefer,
      status                                                     as HandlingUnitInternalStatus,

      //    Data coming from packing instructions
      //      cast( packvorschr as char22 preserving type ) as PackingInstruction,
      cast( packvorschr as pl_packnr  preserving type )          as PackingInstruction,
      //      packvorschr    as PackingInstruction,
      packvorschr_st                                             as PackingInstructionStatus,
      labeltyp                                                   as PackInstructExtLabelNotPrinted,
      @Semantics.quantity.unitOfMeasure: 'WeightUnit'
      zul_aufl                                                   as PackingInstructMaxLoadQuantity,
      erlkz                                                      as HandlingUnitIsComplete,
      hu_system                                                  as HandlingUnitStockMgmtType,

      // Associations
      _WeightUnit,
      _WeightUnitTare,
      _VolumeUnit,
      _VolumeUnitTare,
      _UnitOfMeasureDimension,
      _PackagingMaterial,
      _ShippingPoint,
      _LoadingPoint,
      _Item,
      _PackagingMaterialType,
      _PackagingMaterialGroup,
      _PackingObjectType,
      _Plant,
      _SalesDocumentItemCategory,
      _SalesOrganization,
      _PackagingMaterialCategory,
      _StorageLocation,
      _HandlingUnitHistory
}
```
