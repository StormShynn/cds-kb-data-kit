---
name: I_EWM_STORAGEBIN_2
description: "Ewm Storagebin 2"
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SCM
  - SCM-EWM
  - SCM-EWM-WOP
  - interface-view
  - component:SCM-EWM-WOP-2CL
  - lob:Other
---
# I_EWM_STORAGEBIN_2

**Ewm Storagebin 2**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMWarehouse` | ✓ | |  | `lgnum` |  |  |
| `EWMStorageBin` | ✓ | |  | `lgpla` |  |  |
| `EWMStorageType` |  | |  | `lgtyp` |  |  |
| `EWMStorageSection` |  | |  | `lgber` |  |  |
| `EWMStorageBinType` |  | |  | `lptyp` |  |  |
| `EWMStorageBinAccessType` |  | |  | `bin_at` |  |  |
| `EWMStorageBinSection` |  | |  | `plauf` |  |  |
| `EWMStorageBinPosition` |  | |  | `plpos` |  |  |
| `EWMStorageBinSubdivision` |  | |  | `flgsbin` |  |  |
| `EWMStorageBinMaximumWeight` |  | |  | `max_weight` |  |  |
| `WeightUnit` |  | |  | `unit_w` |  |  |
| `EWMStorageBinUsedWeight` |  | |  | `weight` |  |  |
| `EWMStorageBinMaximumVolume` |  | |  | `max_volume` |  |  |
| `VolumeUnit` |  | |  | `unit_v` |  |  |
| `EWMStorageBinOccupiedVolume` |  | |  | `volum` |  |  |
| `EWMStorBinTotalCapacityValue` |  | |  | `max_capa` |  |  |
| `EWMStorBinAvailCapacityValue` |  | |  | `fcapa` |  |  |
| `EWMStorBinFreeDefinedAisleText` |  | |  | `aisle` |  |  |
| `EWMStorBinFreeDefinedStackText` |  | |  | `stack` |  |  |
| `EWMStorBinFreeDefinedLevelText` |  | |  | `lvl_v` |  |  |
| `EWMStorBinIsBlockedForRemoval` |  | |  | `skzua` |  |  |
| `EWMStorBinIsBlockedForPutaway` |  | |  | `skzue` |  |  |
| `EWMStorBinIsBlockedDueToPInv` |  | |  | `skzsi` |  |  |
| `EWMStorageBinIsEmpty` |  | |  | `kzler` |  |  |
| `EWMStorageBinIsFull` |  | |  | `kzvol` |  |  |
| `EWMStorBinFreeDfndSectionText` |  | |  | `binsc` |  |  |
| `EWMStorageBinRemainDepthValue` |  | |  | `cast(rem_bin_depth as ewm_de_rem_bin_depth_no_conv)` |  |  |
| `EWMStorageBinMaxDepthValue` |  | |  | `cast(max_bin_depth as ewm_de_max_bin_depth_no_conv)` |  |  |
| `EWMStorBinWidthCoordinateValue` |  | |  | `x_cord` |  |  |
| `EWMStorBinLengthCoordinateVal` |  | |  | `y_cord` |  |  |
| `EWMStorBinHeightCoordinateVal` |  | |  | `z_cord` |  |  |
| `EWMStorBinVerifiedByMobileID` |  | |  | `verif` |  |  |
| `EWMPhysicalInventoryType` |  | |  | `kzinv` |  |  |
| `PhysicalInventoryDocNumber` |  | |  | `ivnum` |  |  |
| `PhysicalInventoryItemNumber` |  | |  | `ivpos` |  |  |
| `PInvCountedUTCDateTime` |  | |  | `idatu` |  |  |
| `EWMStorageBinLastChangedByUser` |  | |  | `uname` |  |  |
| `EWMStorageBinLastChgDateTime` |  | |  | `cast(laedt as timestamp preserving type)` |  |  |
| `EWMStorageBinLastWarehouseTask` |  | |  | `cast(btanr as /scwm/tanum_noconv preserving type)` |  |  |
| `EWMStorageBinFirstPutawayDate` |  | |  | `ptwy_date` |  |  |
| `EWMStorageBinLastMvtDateTime` |  | |  | `moved_at` |  |  |
| `EWMStorageBinLastClrgDateTime` |  | |  | `cleared_at` |  |  |
| `EWMStorageBinFixedBinType` |  | |  | `fixbintyp` |  |  |
| `EWMStorageBinAngleValue` |  | |  | `angle` |  |  |
| `EWMStorBinNumberOfHndlgUnits` |  | |  | `anzle` |  |  |
| `EWMStorBinMaxNmbrOfHndlgUnits` |  | |  | `maxle` |  |  |
| `EWMFireContainmentSection` |  | |  | `brand` |  |  |
| `EWMStorageGroup` |  | |  | `lgber_lgst` |  |  |
| `_Warehouse` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Warehouse` | `I_EWM_WarehouseNumber_2` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Warehouse Storage Bin'

@VDM.viewType :#BASIC

@ObjectModel.usageType: {serviceQuality: #A,
                         dataClass: #MASTER,
                         sizeCategory: #L}
@Analytics.internalName:#LOCAL
@ObjectModel.representativeKey: 'EWMStorageBin'
@Analytics.technicalName: 'IPISTORAGEBIN2'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                      #SQL_DATA_SOURCE,                                      
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@Analytics.dataCategory: #DIMENSION   
@Metadata.allowExtensions:true                               
define view entity I_EWM_StorageBin_2
  as select from /scwm/lagp
  association [0..1] to I_EWM_WarehouseNumber_2 as _Warehouse on  $projection.EWMWarehouse = _Warehouse.EWMWarehouse
{

      @ObjectModel.foreignKey.association: '_Warehouse'
  key  lgnum                                             as EWMWarehouse,
  key  lgpla                                             as EWMStorageBin,
       lgtyp                                             as EWMStorageType,
       lgber                                             as EWMStorageSection,
       lptyp                                             as EWMStorageBinType,
       bin_at                                            as EWMStorageBinAccessType,
       plauf                                             as EWMStorageBinSection,
       plpos                                             as EWMStorageBinPosition,
       flgsbin                                           as EWMStorageBinSubdivision,

       @Semantics.quantity.unitOfMeasure: 'WEIGHTUNIT'
       max_weight                                        as EWMStorageBinMaximumWeight,
       unit_w                                            as WeightUnit,
       @Semantics.quantity.unitOfMeasure: 'WEIGHTUNIT'
       weight                                            as EWMStorageBinUsedWeight,
       @Semantics.quantity.unitOfMeasure: 'VOLUMEUNIT'
       max_volume                                        as EWMStorageBinMaximumVolume,
       unit_v                                            as VolumeUnit,
       @Semantics.quantity.unitOfMeasure: 'VOLUMEUNIT'
       volum                                             as EWMStorageBinOccupiedVolume,

       max_capa                                          as EWMStorBinTotalCapacityValue,
       fcapa                                             as EWMStorBinAvailCapacityValue,

       aisle                                             as EWMStorBinFreeDefinedAisleText,
       stack                                             as EWMStorBinFreeDefinedStackText,
       lvl_v                                             as EWMStorBinFreeDefinedLevelText,

       skzua                                             as EWMStorBinIsBlockedForRemoval,
       skzue                                             as EWMStorBinIsBlockedForPutaway,
       skzsi                                             as EWMStorBinIsBlockedDueToPInv,

       kzler                                             as EWMStorageBinIsEmpty,
       kzvol                                             as EWMStorageBinIsFull,

       binsc                                             as EWMStorBinFreeDfndSectionText,
      //depth                                             as EWMStorageBinFreeDfndDepthText,
  cast(rem_bin_depth as ewm_de_rem_bin_depth_no_conv)     as EWMStorageBinRemainDepthValue,
  cast(max_bin_depth as ewm_de_max_bin_depth_no_conv)     as EWMStorageBinMaxDepthValue,
       x_cord                                            as EWMStorBinWidthCoordinateValue,
       y_cord                                            as EWMStorBinLengthCoordinateVal,
       z_cord                                            as EWMStorBinHeightCoordinateVal,

      // guid_loc                                          as WarehouseLocationUUID,
      // guid_hu                                           as HandlingUnitUUID,

       verif                                             as EWMStorBinVerifiedByMobileID,
       //pbv_verif                                         as EWMStorageBinVerifiedByVoiceID,

       kzinv                                             as EWMPhysicalInventoryType,
       ivnum                                             as PhysicalInventoryDocNumber,
       ivpos                                             as PhysicalInventoryItemNumber,
       idatu                                             as PInvCountedUTCDateTime,

       uname                                             as EWMStorageBinLastChangedByUser,
       cast(laedt as timestamp preserving type)          as EWMStorageBinLastChgDateTime,

       cast(btanr as /scwm/tanum_noconv preserving type) as EWMStorageBinLastWarehouseTask,
       ptwy_date                                         as EWMStorageBinFirstPutawayDate,
       moved_at                                          as EWMStorageBinLastMvtDateTime,
       cleared_at                                        as EWMStorageBinLastClrgDateTime,

       fixbintyp                                         as EWMStorageBinFixedBinType,
       angle                                             as EWMStorageBinAngleValue,
       anzle                                             as EWMStorBinNumberOfHndlgUnits,
       maxle                                             as EWMStorBinMaxNmbrOfHndlgUnits,

       brand                                             as EWMFireContainmentSection,
       lgber_lgst                                        as EWMStorageGroup,
      _Warehouse
}
```
