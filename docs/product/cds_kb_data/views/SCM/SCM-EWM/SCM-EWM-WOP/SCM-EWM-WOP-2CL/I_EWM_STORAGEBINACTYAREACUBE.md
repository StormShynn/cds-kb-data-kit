---
name: I_EWM_STORAGEBINACTYAREACUBE
description: "This CDS view provides information about storage bins per activity area in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_STORAGEBINACTYAREACUBE')/$value
semantic_en: "This CDS view provides information about storage bins per activity area in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Storage Bin Activity Area - Cube — CDS view giao diện dựa trên I_EWM_StorageBinCube."
keywords:
  - "storage"
  - "bin"
  - "activity"
  - "area"
  - "cube"
  - "warehouse"
  - "type"
  - "section"
tags:
  - SCM
  - bo:companycode
  - component:SCM-EWM-WOP-2CL
  - interface-view
  - SCM-EWM
  - SCM-EWM-WOP
  - SCM-EWM-WOP-2CL
---
# I_EWM_STORAGEBINACTYAREACUBE

**This CDS view provides information about storage bins per activity area in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_STORAGEBINACTYAREACUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMWarehouse` | ✓ | | `_Cube` | `EWMWarehouse` | `CHAR(4)` | Warehouse Number/Warehouse Complex |
| `ActivityArea` | ✓ | | `_StorageBinSorting` | `ActivityArea` | `CHAR(4)` | Activity Area |
| `EWMStorageBin` | ✓ | | `_Cube` | `EWMStorageBin` | `CHAR(18)` | Storage Bin |
| `EWMStorageType` |  | | `_Cube` | `EWMStorageType` | `CHAR(4)` | Storage Type |
| `EWMStorageSection` |  | | `_Cube` | `EWMStorageSection` | `CHAR(4)` | Storage Section |
| `EWMStorageBinType` |  | | `_Cube` | `EWMStorageBinType` | `CHAR(4)` | Storage Bin Type |
| `EWMStorageBinAccessType` |  | | `_Cube` | `EWMStorageBinAccessType` | `CHAR(4)` | Bin Access Type |
| `EWMFireContainmentSection` |  | | `_Cube` | `EWMFireContainmentSection` | `CHAR(2)` | Fire-Containment Section |
| `EWMStorageBehavior` |  | | `_Cube` | `EWMStorageBehavior` | `CHAR(1)` | Storage Behavior |
| `EWMStorageTypeRole` |  | | `_Cube` | `EWMStorageTypeRole` | `CHAR(1)` | Storage Type Role |
| `EWMStorBinFreeDefinedAisleText` |  | | `_Cube` | `EWMStorBinFreeDefinedAisleText` | `CHAR(18)` | Storage Bin Aisle |
| `EWMStorBinFreeDefinedStackText` |  | | `_Cube` | `EWMStorBinFreeDefinedStackText` | `CHAR(18)` | Storage Bin Stack |
| `EWMStorBinFreeDefinedLevelText` |  | | `_Cube` | `EWMStorBinFreeDefinedLevelText` | `CHAR(18)` | Storage Bin Level |
| `EWMStorageBinMaximumWeight` |  | | `_Cube` | `EWMStorageBinMaximumWeight` | `QUAN(15)` | Maximum Weight of Storage Bin |
| `EWMStorageBinUsedWeight` |  | | `_Cube` | `EWMStorageBinUsedWeight` | `QUAN(15)` | Weight of Materials in Storage Bin |
| `EWMStorageBinUnusedWeight` |  | | `_Cube` | `EWMStorageBinUnusedWeight` | `QUAN(15)` | Storage Bin Unused Weight |
| `WeightUnit` |  | | `_Cube` | `WeightUnit` | `UNIT(3)` | Weight Unit |
| `EWMStorageBinMaxWeightIsMntnd` |  | | `_Cube` | `EWMStorageBinMaxWeightIsMntnd` | `CHAR(1)` | Storage Bin Maximum Weight is Maintained |
| `EWMStorBinUsedWeightInDspUnit` |  | |  | `cast(case when _Cube.EWMStorBinMaxWeightInDspUnit is initial then 0 else _Cube.EWMStorBinUsedWeightInDspUnit end as ewm_de_storbinusedwgtindspunit)` | `QUAN(15)` | Storage Bin Used Weight in Display Unit |
| `EWMStorBinMaxWeightInDspUnit` |  | | `_Cube` | `EWMStorBinMaxWeightInDspUnit` | `QUAN(15)` | Storage Bin Maximum Weight in Display Unit |
| `EWMStorBinUnusedWgtInDspUnit` |  | |  | `cast( case when _Cube.EWMStorBinMaxWeightInDspUnit is initial then 0 else _Cube.EWMStorBinMaxWeightInDspUnit - _Cube.EWMStorBinUsedWeightInDspUnit end as ewm_de_storbinunusedwgtdspunit)` | `QUAN(15)` | Storage Bin Unused Weight in Display Unit |
| `DisplayWeightUnit` |  | | `_Cube` | `DisplayWeightUnit` | `UNIT(3)` | Display Weight Unit |
| `EWMStorageBinMaximumVolume` |  | | `_Cube` | `EWMStorageBinMaximumVolume` | `QUAN(15)` | Maximum Volume |
| `EWMStorageBinOccupiedVolume` |  | | `_Cube` | `EWMStorageBinOccupiedVolume` | `QUAN(15)` | Volume Used |
| `EWMStorageBinUnusedVolume` |  | | `_Cube` | `EWMStorageBinUnusedVolume` | `QUAN(15)` | Storage Bin Unused Volume |
| `VolumeUnit` |  | | `_Cube` | `VolumeUnit` | `UNIT(3)` | Volume Unit |
| `EWMStorageBinMaxVolumeIsMntnd` |  | | `_Cube` | `EWMStorageBinMaxVolumeIsMntnd` | `CHAR(1)` | Storage Bin Maximum Volume is Maintained |
| `EWMStorBinUsedVolumeInDspUnit` |  | |  | `cast( case when _Cube.EWMStorBinMaxVolumeInDspUnit is initial then 0 else _Cube.EWMStorBinUsedVolumeInDspUnit end as ewm_de_storbinusedvolindspunit)` | `QUAN(15)` | Storage Bin Used Volume in Display Unit |
| `EWMStorBinMaxVolumeInDspUnit` |  | | `_Cube` | `EWMStorBinMaxVolumeInDspUnit` | `QUAN(15)` | Storage Bin Maximum Volume in Display Unit |
| `EWMStorBinUnusedVolInDspUnit` |  | |  | `cast( case when _Cube.EWMStorBinMaxVolumeInDspUnit is initial then 0 else _Cube.EWMStorBinMaxVolumeInDspUnit - _Cube.EWMStorBinUsedVolumeInDspUnit end as ewm_de_storbinunusedvoldspunit)` | `QUAN(15)` | Storage Bin Unused Volume in Display Unit |
| `DisplayVolumeUnit` |  | | `_Cube` | `DisplayVolumeUnit` | `UNIT(3)` | Display Volume Unit |
| `EWMStorBinTotalCapacityValue` |  | | `_Cube` | `EWMStorBinTotalCapacityValue` | `DEC(15)` | Total Capacity of Storage Bin |
| `EWMStorBinAvailCapacityValue` |  | | `_Cube` | `EWMStorBinAvailCapacityValue` | `DEC(15)` | Available Capacity |
| `EWMStorageBinUsedCapacityValue` |  | | `_Cube` | `EWMStorageBinUsedCapacityValue` | `DEC(15)` | Storage Bin Used Capacity |
| `EWMStorBinTotalCapacityIsMntnd` |  | | `_Cube` | `EWMStorBinTotalCapacityIsMntnd` | `CHAR(1)` | Storage Bin Maximum Capacity is Maintained |
| `EWMStorBinIsBlockedForRemoval` |  | | `_Cube` | `EWMStorBinIsBlockedForRemoval` | `CHAR(1)` | Blocked for Stock Removal |
| `EWMStorBinIsBlockedForPutaway` |  | | `_Cube` | `EWMStorBinIsBlockedForPutaway` | `CHAR(1)` | Blocked for Putaway |
| `EWMStorBinIsBlockedDueToPInv` |  | | `_Cube` | `EWMStorBinIsBlockedDueToPInv` | `CHAR(1)` | Storage Bin Blocked Because of Physical Inventory |
| `EWMStorBinIsBlocked` |  | | `_Cube` | `EWMStorBinIsBlocked` | `CHAR(1)` | Storage Bin Is Blocked |
| `EWMStorBinIsAvailable` |  | | `_Cube` | `EWMStorBinIsAvailable` | `CHAR(1)` | Storage Bin Is Available |
| `EWMNumberOfBlockedStorBins` |  | |  | `cast(case when _Cube.EWMStorBinIsBlocked = 'X' then 1 else 0 end as ewm_de_numberofblockedstorbins)` | `INT4(10)` | Storage Bin Number of Blocked Bins |
| `EWMNrOfBlkdStorBinsForRemoval` |  | |  | `cast(case when _Cube.EWMStorBinIsBlockedForRemoval = 'X' then 1 else 0 end as ewm_de_numberofblkdbinsforrmvl)` | `INT4(10)` | Storage Bin Number of Bins Blocked for Stock Removal |
| `EWMNumberOfBlkdStorBinsForPtwy` |  | |  | `cast(case when _Cube.EWMStorBinIsBlockedForPutaway = 'X' then 1 else 0 end as ewm_de_numberofblkdbinsforptwy)` | `INT4(10)` | Storage Bin Number of Bins Blocked for Putaway |
| `EWMNrOfBlkdStorBinsDueToPInv` |  | |  | `cast(case when _Cube.EWMStorBinIsBlockedDueToPInv = 'X' then 1 else 0 end as ewm_de_nrofblkdstorbinspinv)` | `INT4(10)` | Storage Bin Number of Bins Blocked due to Physical Inventory |
| `EWMNumberOfAvailableStorBins` |  | |  | `cast(case when _Cube.EWMStorBinIsAvailable = 'X' then 1 else 0 end as ewm_de_nrofavailablestorbins)` | `INT4(10)` | Storage Bin Number of Available Bins |
| `EWMStorageBinIsEmpty` |  | | `_Cube` | `EWMStorageBinIsEmpty` | `CHAR(1)` | Empty Storage Bin |
| `EWMStorageBinIsUtilized` |  | | `_Cube` | `EWMStorageBinIsUtilized` | `CHAR(1)` | Storage Bin Is Utilized |
| `EWMStorageBinIsFull` |  | | `_Cube` | `EWMStorageBinIsFull` | `CHAR(1)` | Storage Bin Is Full |
| `EWMNumberOfEmptyStorBins` |  | |  | `cast(case when _Cube.EWMStorageBinIsEmpty = 'X' then 1 else 0 end as ewm_de_numberofemptystorbins)` | `INT4(10)` | Storage Bin Number of Empty Bins |
| `EWMNumberOfUtilizedStorBins` |  | |  | `cast(case when _Cube.EWMStorageBinIsUtilized = 'X' then 1 else 0 end as ewm_de_nrofutilizedstorbins)` | `INT4(10)` | Storage Bin Number of Utililized Bins |
| `EWMNumberOfFullStorBins` |  | |  | `cast(case when _Cube.EWMStorageBinIsFull = 'X' then 1 else 0 end as ewm_de_numberoffullstorbins)` | `INT4(10)` | Storage Bin Number of Full Bins |
| `EWMNumberOfStorageBins` |  | |  | `cast(1 as ewm_de_numberofstoragebins)` | `INT4(10)` | Storage Bin Number of Bins |
| `EWMStorageBinRemainDepthValue` |  | | `_Cube` | `EWMStorageBinRemainDepthValue` | `INT4(10)` | Storage Bin Remaining Depth Value |
| `EWMStorageBinUsedDepthValue` |  | | `_Cube` | `EWMStorageBinUsedDepthValue` | `INT4(10)` | Storage Bin Used Bin Depth |
| `EWMStorageBinMaxDepthValue` |  | | `_Cube` | `EWMStorageBinMaxDepthValue` | `INT4(10)` | Storage Bin Maximum Bin Depth |
| `EWMStorBinNumberOfHndlgUnits` |  | | `_Cube` | `EWMStorBinNumberOfHndlgUnits` | `DEC(6)` | Number of Handling Units in Storage Bin |
| `EWMStorBinHndlgUnitAvailCapVal` |  | | `_Cube` | `EWMStorBinHndlgUnitAvailCapVal` | `DEC(6)` | Storage Bin Available Capacity of HUs |
| `EWMStorBinNrOfHndlgUnitsWthMax` |  | | `_Cube` | `EWMStorBinNrOfHndlgUnitsWthMax` | `DEC(6)` | Storage Bin Number of HUs with a Maximum |
| `EWMStorBinMaxNmbrOfHndlgUnits` |  | | `_Cube` | `EWMStorBinMaxNmbrOfHndlgUnits` | `DEC(6)` | Storage Bin Maximum Number of Handling Units |
| `_ActivityArea` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ActivityArea` | `I_EWM_ActivityArea_2` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_STORAGEBINACTYAREACUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_STORAGEBINACTYAREACUBE')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Storage Bin Activity Area - Cube'
@Metadata.ignorePropagatedAnnotations: true
@Analytics.internalName: #LOCAL

@ObjectModel.compositionRoot: true
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER,
                                      #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@Metadata.allowExtensions:true
@VDM.viewType:#COMPOSITE 
@Analytics: { dataCategory: #CUBE }
define view entity I_EWM_StorageBinActyAreaCube
  with parameters
    P_DisplayWeightUnit : ewm_de_display_weight_uom,
    P_DisplayVolumeUnit : ewm_de_display_volume_uom
  as select from I_EWM_StorageBinCube
                 ( P_DisplayWeightUnit : $parameters.P_DisplayWeightUnit,
                   P_DisplayVolumeUnit : $parameters.P_DisplayVolumeUnit ) as _Cube
    inner join   P_EWM_StorageBinActyArea                                  as _StorageBinSorting on  _Cube.EWMWarehouse  = _StorageBinSorting.EWMWarehouse
                                                                                                 and _Cube.EWMStorageBin = _StorageBinSorting.EWMStorageBin
  association [0..1] to I_EWM_ActivityArea_2 as _ActivityArea on  _Cube.EWMWarehouse              = _ActivityArea.EWMWarehouse
                                                              and _StorageBinSorting.ActivityArea = _ActivityArea.ActivityArea
{
      // Key fields
      @ObjectModel.foreignKey.association: '_Warehouse'
  key _Cube.EWMWarehouse,

      @ObjectModel.foreignKey.association: '_ActivityArea'
  key _StorageBinSorting.ActivityArea,

  key _Cube.EWMStorageBin,

      // Additional dimensions
      @ObjectModel.foreignKey.association: '_StorageType'
      _Cube.EWMStorageType,
      @ObjectModel.foreignKey.association: '_StorageSection'
      _Cube.EWMStorageSection,
      @ObjectModel.foreignKey.association: '_StorageBinType'
      _Cube.EWMStorageBinType,
      @ObjectModel.foreignKey.association: '_StorageBinAccessType'
      _Cube.EWMStorageBinAccessType,
      @ObjectModel.foreignKey.association: '_FireContainmentSection'
      _Cube.EWMFireContainmentSection,
      @ObjectModel.text.association: '_StorageBehaviorText'
      _Cube.EWMStorageBehavior,
      @ObjectModel.text.association: '_StorageTypeRoleText'
      _Cube.EWMStorageTypeRole,

      _Cube.EWMStorBinFreeDefinedAisleText,
      _Cube.EWMStorBinFreeDefinedStackText,
      _Cube.EWMStorBinFreeDefinedLevelText,

      // Weight
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'WeightUnit'} }
      _Cube.EWMStorageBinMaximumWeight,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'WeightUnit'} }
      _Cube.EWMStorageBinUsedWeight,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'WeightUnit'} }
      _Cube.EWMStorageBinUnusedWeight,

      _Cube.WeightUnit,

      @Semantics.booleanIndicator
      @ObjectModel.text.association: '_StorBinMaxWeightMntndText'
      _Cube.EWMStorageBinMaxWeightIsMntnd,

      // Weight in Display Unit

      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'DisplayWeightUnit'
      cast(case when _Cube.EWMStorBinMaxWeightInDspUnit is initial then 0
      else _Cube.EWMStorBinUsedWeightInDspUnit
      end as ewm_de_storbinusedwgtindspunit)                                                                        as EWMStorBinUsedWeightInDspUnit,

      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'DisplayWeightUnit'
      _Cube.EWMStorBinMaxWeightInDspUnit,

      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'DisplayWeightUnit'
      cast( case when _Cube.EWMStorBinMaxWeightInDspUnit is initial then 0
      else _Cube.EWMStorBinMaxWeightInDspUnit - _Cube.EWMStorBinUsedWeightInDspUnit
      end as ewm_de_storbinunusedwgtdspunit)                                                                        as EWMStorBinUnusedWgtInDspUnit,

      _Cube.DisplayWeightUnit,

      // Volume
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'VolumeUnit'} }
      _Cube.EWMStorageBinMaximumVolume,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'VolumeUnit'} }
      _Cube.EWMStorageBinOccupiedVolume,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'VolumeUnit'} }
      _Cube.EWMStorageBinUnusedVolume,

      _Cube.VolumeUnit,

      @Semantics.booleanIndicator
      @ObjectModel.text.association: '_StorBinMaxVolMntndText'
      _Cube.EWMStorageBinMaxVolumeIsMntnd,

      // Volume in Display Unit
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'DisplayVolumeUnit'
      cast( case when _Cube.EWMStorBinMaxVolumeInDspUnit is initial then 0
      else _Cube.EWMStorBinUsedVolumeInDspUnit
      end as ewm_de_storbinusedvolindspunit)                                                                        as EWMStorBinUsedVolumeInDspUnit,

      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'DisplayVolumeUnit'
      _Cube.EWMStorBinMaxVolumeInDspUnit,

      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'DisplayVolumeUnit'
      cast( case when _Cube.EWMStorBinMaxVolumeInDspUnit is initial then 0
      else _Cube.EWMStorBinMaxVolumeInDspUnit - _Cube.EWMStorBinUsedVolumeInDspUnit
      end as ewm_de_storbinunusedvoldspunit)                                                                        as EWMStorBinUnusedVolInDspUnit,

      _Cube.DisplayVolumeUnit,

      // Capacity
      @DefaultAggregation: #SUM
      _Cube.EWMStorBinTotalCapacityValue,
      @DefaultAggregation: #SUM
      _Cube.EWMStorBinAvailCapacityValue,
      @DefaultAggregation: #SUM
      _Cube.EWMStorageBinUsedCapacityValue,

      @Semantics.booleanIndicator
      @ObjectModel.text.association: '_StorBinTotCapaMntndText'
      _Cube.EWMStorBinTotalCapacityIsMntnd,

      // Bin Blocking
      @Semantics.booleanIndicator
      @ObjectModel.text.association: '_StorBinRemovalBlockText'
      _Cube.EWMStorBinIsBlockedForRemoval,
      @Semantics.booleanIndicator
      @ObjectModel.text.association: '_StorBinPutawayBlockText'
      _Cube.EWMStorBinIsBlockedForPutaway,
      @Semantics.booleanIndicator
      @ObjectModel.text.association: '_StorBinPInvBlockText'
      _Cube.EWMStorBinIsBlockedDueToPInv,
      @Semantics.booleanIndicator
      @ObjectModel.text.association: '_StorBinBlockedText'
      _Cube.EWMStorBinIsBlocked,
      @Semantics.booleanIndicator
      @ObjectModel.text.association: '_StorBinAvailableText'
      _Cube.EWMStorBinIsAvailable,

      @DefaultAggregation: #SUM
      cast(case when _Cube.EWMStorBinIsBlocked = 'X' then 1 else 0 end as ewm_de_numberofblockedstorbins)           as EWMNumberOfBlockedStorBins,
      @DefaultAggregation: #SUM
      cast(case when _Cube.EWMStorBinIsBlockedForRemoval = 'X' then 1 else 0 end as ewm_de_numberofblkdbinsforrmvl) as EWMNrOfBlkdStorBinsForRemoval,
      @DefaultAggregation: #SUM
      cast(case when _Cube.EWMStorBinIsBlockedForPutaway = 'X' then 1 else 0 end as ewm_de_numberofblkdbinsforptwy) as EWMNumberOfBlkdStorBinsForPtwy,
      @DefaultAggregation: #SUM
      cast(case when _Cube.EWMStorBinIsBlockedDueToPInv = 'X' then 1 else 0 end as ewm_de_nrofblkdstorbinspinv)     as EWMNrOfBlkdStorBinsDueToPInv,
      @DefaultAggregation: #SUM
      cast(case when _Cube.EWMStorBinIsAvailable = 'X' then 1 else 0 end as ewm_de_nrofavailablestorbins)           as EWMNumberOfAvailableStorBins,

      // Bin is empty, full or utilized
      @Semantics.booleanIndicator
      @ObjectModel.text.association: '_StorageBinIsEmptyText'
      _Cube.EWMStorageBinIsEmpty,
      @Semantics.booleanIndicator
      @ObjectModel.text.association: '_StorageBinIsUtilizedText'
      _Cube.EWMStorageBinIsUtilized,
      @Semantics.booleanIndicator
      @ObjectModel.text.association: '_StorageBinIsFullText'
      _Cube.EWMStorageBinIsFull,

      @DefaultAggregation: #SUM
      cast(case when _Cube.EWMStorageBinIsEmpty = 'X' then 1 else 0 end as ewm_de_numberofemptystorbins)            as EWMNumberOfEmptyStorBins,
      @DefaultAggregation: #SUM
      cast(case when _Cube.EWMStorageBinIsUtilized = 'X' then 1 else 0 end as ewm_de_nrofutilizedstorbins)          as EWMNumberOfUtilizedStorBins,
      @DefaultAggregation: #SUM
      cast(case when _Cube.EWMStorageBinIsFull = 'X' then 1 else 0 end as ewm_de_numberoffullstorbins)              as EWMNumberOfFullStorBins,
      @DefaultAggregation: #SUM
      cast(1 as ewm_de_numberofstoragebins)                                                                         as EWMNumberOfStorageBins,

      // Bin depth
      @DefaultAggregation: #SUM
      _Cube.EWMStorageBinRemainDepthValue,
      @DefaultAggregation: #SUM
      _Cube.EWMStorageBinUsedDepthValue,
      @DefaultAggregation: #SUM
      _Cube.EWMStorageBinMaxDepthValue,
      // HUs
      @DefaultAggregation: #SUM
      _Cube.EWMStorBinNumberOfHndlgUnits,
      @DefaultAggregation: #SUM
      _Cube.EWMStorBinHndlgUnitAvailCapVal,
      @DefaultAggregation: #SUM
      _Cube.EWMStorBinNrOfHndlgUnitsWthMax,
      @DefaultAggregation: #SUM
      _Cube.EWMStorBinMaxNmbrOfHndlgUnits,

      /* Associations */
      _Cube._StorageBinAccessType,
      _Cube._FireContainmentSection,
      _Cube._StorageTypeRoleText,
      _Cube._StorageBehaviorText,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _Cube._StorageBinIsEmptyText,
      _Cube._StorageBinIsUtilizedText,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _Cube._StorageBinIsFullText,
      _Cube._StorageBinType,
      _Cube._StorageSection,
      _Cube._StorageType,
      _Cube._StorBinAvailableText,
      _Cube._StorBinBlockedText,
      _Cube._StorBinMaxVolMntndText,
      _Cube._StorBinMaxWeightMntndText,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _Cube._StorBinPInvBlockText,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _Cube._StorBinPutawayBlockText,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _Cube._StorBinRemovalBlockText,
      _Cube._StorBinTotCapaMntndText,
      _Cube._VolumeUnitOfMeasureText,
      _Cube._Warehouse,
      _Cube._WeightUnitOfMeasureText,
      _ActivityArea
}
```
