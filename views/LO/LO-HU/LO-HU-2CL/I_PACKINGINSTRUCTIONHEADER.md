---
name: I_PACKINGINSTRUCTIONHEADER
description: "Packinginstructionheader"
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
# I_PACKINGINSTRUCTIONHEADER

**Packinginstructionheader**

| Property | Value |
|---|---|
| App Component | `LO-HU-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PackingInstructionSystemUUID` | ✓ | |  | `packnr` |  |  |
| `PackingInstructionNumber` |  | |  | `pobjid` |  |  |
| `PackingInstructionExternalName` |  | |  | `partid` |  |  |
| `HandlingUnitHeight` |  | |  | `height` |  |  |
| `HandlingUnitWidth` |  | |  | `width` |  |  |
| `HandlingUnitLength` |  | |  | `length` |  |  |
| `HandlingUnitInnerHeight` |  | |  | `iheight` |  |  |
| `HandlingUnitInnerWidth` |  | |  | `iwidth` |  |  |
| `HandlingUnitInnerLength` |  | |  | `ilength` |  |  |
| `HandlingUnitUoMDimension` |  | |  | `unitdim` |  |  |
| `HandlingUnitMeasuresAreFixed` |  | |  | `sizefix` |  |  |
| `HandlingUnitGrossVolume` |  | |  | `totlvol` |  |  |
| `HandlingUnitLoadVolume` |  | |  | `loadvol` |  |  |
| `HandlingUnitAllowedLoadVolume` |  | |  | `allovol` |  |  |
| `HandlingUnitVolumeUnit` |  | |  | `unitvol_max` |  |  |
| `HandlingUnitTareVolume` |  | |  | `tarevol` |  |  |
| `HandlingUnitTareVolumeUnit` |  | |  | `unitvol` |  |  |
| `HandlingUnitVolumesAreFixed` |  | |  | `volumfix` |  |  |
| `ExcessVolumeToleranceValue` |  | |  | `tolevol` |  |  |
| `HandlingUnitGrossWeight` |  | |  | `totlwei` |  |  |
| `HandlingUnitLoadWeight` |  | |  | `loadwei` |  |  |
| `HandlingUnitAllowedLoadWeight` |  | |  | `allowei` |  |  |
| `HandlingUnitWeightUnit` |  | |  | `unitwei_max` |  |  |
| `HandlingUnitTareWeight` |  | |  | `tarewei` |  |  |
| `HandlingUnitTareWeightUnit` |  | |  | `unitwei` |  |  |
| `HandlingUnitWeightsAreFixed` |  | |  | `weightfix` |  |  |
| `ExcessWeightToleranceValue` |  | |  | `tolewei` |  |  |
| `PackingInstructionAllwdLoadQty` |  | |  | `maxstwe` |  |  |
| `HandlingUnitIsClosed` |  | |  | `indclopa` |  |  |
| `LoadCarrierSystUUID` |  | |  | `cast( mapaco_item as packing_instruction_component preserving type )` |  |  |
| `PackingInstructionIsDeleted` |  | |  | `inddel` |  |  |
| `PackingInstructionCheckProfSts` |  | |  | `checkprof` |  |  |
| `StackingFactor` |  | |  | `stfac` |  |  |
| `HandlingUnitType` |  | |  | `hu_type` |  |  |
| `CreatedByUser` |  | |  | `crnam` |  |  |
| `CreationDate` |  | |  | `crdat` |  |  |
| `LastChangedByUser` |  | |  | `chnam` |  |  |
| `LastChangeDate` |  | |  | `chdat` |  |  |
| `LastChangeTime` |  | |  | `chtim` |  |  |
| `LastChangeDateTime` |  | |  | `lastchangeddatetime` |  |  |
| `_PackingInstructionComponent` | | ✓ | | | | |
| `_UnitOfMeasureDimension` | | ✓ | | | | |
| `_HandlingUnitVolumeUnit` | | ✓ | | | | |
| `_HandlingUnitTareVolumeUnit` | | ✓ | | | | |
| `_HandlingUnitWeightUnit` | | ✓ | | | | |
| `_HandlingUnitTareWeightUnit` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PackingInstructionComponent` | `I_PackingInstructionComponent` | [0..*] |
| `_UnitOfMeasureDimension` | `I_UnitOfMeasure` | [0..1] |
| `_HandlingUnitVolumeUnit` | `I_UnitOfMeasure` | [0..1] |
| `_HandlingUnitTareVolumeUnit` | `I_UnitOfMeasure` | [0..1] |
| `_HandlingUnitWeightUnit` | `I_UnitOfMeasure` | [0..1] |
| `_HandlingUnitTareWeightUnit` | `I_UnitOfMeasure` | [0..1] |
| `_Text` | `I_PackingInstructionText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPACKINSTRHEADER'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true

@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Packing Instruction Header'
@Search.searchable: true

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type:  #PUBLIC_LOCAL_API

@ObjectModel.compositionRoot: true
@ObjectModel: {
   usageType: {
     serviceQuality:  #B,
     dataClass:       #MIXED,
     sizeCategory:    #L
   },
   supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ],
   modelingPattern: #NONE
}

@Metadata.ignorePropagatedAnnotations: true

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ] } Key field HDCOUNT not used */
define view I_PackingInstructionHeader
  as select from packkp
  association [0..*] to I_PackingInstructionComponent as _PackingInstructionComponent 
        on $projection.PackingInstructionSystemUUID = _PackingInstructionComponent.PackingInstructionSystemUUID
  association [0..1] to I_UnitOfMeasure             as _UnitOfMeasureDimension                  on _UnitOfMeasureDimension.UnitOfMeasure                   = $projection.HandlingUnitUoMDimension
  association [0..1] to I_UnitOfMeasure             as _HandlingUnitVolumeUnit              on _HandlingUnitVolumeUnit.UnitOfMeasure               = $projection.HandlingUnitVolumeUnit
  association [0..1] to I_UnitOfMeasure             as _HandlingUnitTareVolumeUnit                  on _HandlingUnitTareVolumeUnit.UnitOfMeasure                   = $projection.HandlingUnitTareVolumeUnit
  association [0..1] to I_UnitOfMeasure             as _HandlingUnitWeightUnit                  on _HandlingUnitWeightUnit.UnitOfMeasure                   = $projection.HandlingUnitWeightUnit
  association [0..1] to I_UnitOfMeasure             as _HandlingUnitTareWeightUnit                  on _HandlingUnitTareWeightUnit.UnitOfMeasure                   = $projection.HandlingUnitWeightUnit
  association [0..*] to I_PackingInstructionText as _Text on  $projection.PackingInstructionSystemUUID  = _Text.PackingInstructionSystemUUID
 
{
  @Semantics.uuid:true 
//  key cast( packnr as packing_instruction_number preserving type ) as PackingInstructionSystemUUID,
    key packnr                                                     as PackingInstructionSystemUUID,
      //  key hdcount as Counter,
      @EndUserText.label: 'Packing Object'
      pobjid                                                       as PackingInstructionNumber,
      //  packtyp as PackagingType, // always 'P'
      @Search.defaultSearchElement: true
      @EndUserText.label: 'External Name'
      partid                                                       as PackingInstructionExternalName,

      // dimensions
      @Semantics.quantity.unitOfMeasure: 'HandlingUnitUoMDimension'
      height                                                       as HandlingUnitHeight,
      @Semantics.quantity.unitOfMeasure: 'HandlingUnitUoMDimension'
      width                                                        as HandlingUnitWidth,
      @Semantics.quantity.unitOfMeasure: 'HandlingUnitUoMDimension'
      length                                                       as HandlingUnitLength,
      @Semantics.quantity.unitOfMeasure: 'HandlingUnitUoMDimension'
      @EndUserText.label: 'Height of Inside Dimensions'
      iheight                                                      as HandlingUnitInnerHeight,
      @Semantics.quantity.unitOfMeasure: 'HandlingUnitUoMDimension'
      @EndUserText.label: 'Width of Inside Dimensions'
      iwidth                                                       as HandlingUnitInnerWidth,
      @Semantics.quantity.unitOfMeasure: 'HandlingUnitUoMDimension'
      @EndUserText.label: 'Length of Inside Dimensions'
      ilength                                                      as HandlingUnitInnerLength,
      @EndUserText.label: 'Unit of Dimension Length/Width/Height'
      unitdim                                                      as HandlingUnitUoMDimension,
      @EndUserText.label: 'Measurement Fix'
      sizefix                                                      as HandlingUnitMeasuresAreFixed,

      // volumes
      @Semantics.quantity.unitOfMeasure: 'HandlingUnitVolumeUnit'
      @EndUserText.label: 'Total Volume'
      totlvol                                                      as HandlingUnitGrossVolume,
      @Semantics.quantity.unitOfMeasure: 'HandlingUnitVolumeUnit'
      @EndUserText.label: 'Loading Volume'
      loadvol                                                      as HandlingUnitLoadVolume,
      @Semantics.quantity.unitOfMeasure: 'HandlingUnitVolumeUnit'
      @EndUserText.label: 'Allowed Loading Volume'
      allovol                                                      as HandlingUnitAllowedLoadVolume,
      @EndUserText.label: 'Volume Unit'
      unitvol_max                                                  as HandlingUnitVolumeUnit,
      @Semantics.quantity.unitOfMeasure: 'HandlingUnitTareVolumeUnit'
      @EndUserText.label: 'Tare Volume'
      tarevol                                                      as HandlingUnitTareVolume,
      @EndUserText.label: 'Volume Unit'
      unitvol                                                      as HandlingUnitTareVolumeUnit,
      @EndUserText.label: 'Volume Fix'
      volumfix                                                     as HandlingUnitVolumesAreFixed,
      @EndUserText.label: 'Excess Volume Tolerance'
      tolevol                                                      as ExcessVolumeToleranceValue,


      // weights
      @Semantics.quantity.unitOfMeasure: 'HandlingUnitWeightUnit'
      @EndUserText.label: 'Total Weight'
      totlwei                                                      as HandlingUnitGrossWeight,
      @Semantics.quantity.unitOfMeasure: 'HandlingUnitWeightUnit'
      @EndUserText.label: 'Loading Weight'
      loadwei                                                      as HandlingUnitLoadWeight,
      @Semantics.quantity.unitOfMeasure: 'HandlingUnitWeightUnit'
      @EndUserText.label: 'Allowed Loading Weight'
      allowei                                                      as HandlingUnitAllowedLoadWeight,
      @EndUserText.label: 'Unit of Weight'
      unitwei_max                                                  as HandlingUnitWeightUnit,
      @Semantics.quantity.unitOfMeasure: 'HandlingUnitTareWeightUnit'
      @EndUserText.label: 'Tare Weight'
      tarewei                                                      as HandlingUnitTareWeight,
      @EndUserText.label: 'Unit of Weight'
      unitwei                                                      as HandlingUnitTareWeightUnit,
      @EndUserText.label: 'Weights Fix'
      weightfix                                                    as HandlingUnitWeightsAreFixed,
      @EndUserText.label: 'Excess Weight Tolerance'
      tolewei                                                      as ExcessWeightToleranceValue,
      @Semantics.quantity.unitOfMeasure: 'HandlingUnitWeightUnit'
      maxstwe                                                      as PackingInstructionAllwdLoadQty,
      @EndUserText.label: 'Indicator: Packaging Closed'
      indclopa                                                     as HandlingUnitIsClosed,
      @Semantics.uuid:true
      cast( mapaco_item as packing_instruction_component preserving type ) as LoadCarrierSystUUID,
      inddel                                                       as PackingInstructionIsDeleted,
      @EndUserText.label: 'Packing Status Check Profile'
      checkprof                                                    as PackingInstructionCheckProfSts,
      @EndUserText.label: 'Stack Factor'
      stfac                                                        as StackingFactor,
      @EndUserText.label: 'HU Type'
      hu_type                                                      as HandlingUnitType,

      //admin
      @Semantics.user.createdBy: true
      @EndUserText.label: 'Created By'
      crnam                                                        as CreatedByUser,
      @Semantics.systemDate.createdAt: true
      @EndUserText.label: 'Created At'
      crdat                                                        as CreationDate,
      @Semantics.user.lastChangedBy: true
      @EndUserText.label: 'Changed By'
      chnam                                                        as LastChangedByUser,
      @Semantics.systemDate.lastChangedAt: true
      @EndUserText.label: 'Changed At Date'
      chdat                                                        as LastChangeDate,
      @Semantics.systemTime.lastChangedAt: true
      @EndUserText.label: 'Changed At Time'
      chtim                                                        as LastChangeTime,
      @Semantics.systemDateTime.lastChangedAt: true
      lastchangeddatetime                                          as LastChangeDateTime,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _PackingInstructionComponent,

      //      vegr1, // use extensibility
      //      vegr2,
      //      vegr3,
      //      vegr4,
      //      vegr5
      
     _UnitOfMeasureDimension,
     _HandlingUnitVolumeUnit,
     _HandlingUnitTareVolumeUnit,
     _HandlingUnitWeightUnit,
     _HandlingUnitTareWeightUnit,
     _Text
     
}
```
