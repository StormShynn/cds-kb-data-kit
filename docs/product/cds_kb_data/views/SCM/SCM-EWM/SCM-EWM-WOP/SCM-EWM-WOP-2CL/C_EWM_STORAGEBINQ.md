---
name: C_EWM_STORAGEBINQ
description: "Storage Bin - Query"
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EWM_STORAGEBINQ')/$value
semantic_en: "Storage Bin - Query"
semantic_vi: "Storage Bin - Query — CDS view tiêu dùng dựa trên I_EWM_StorageBinCube."
keywords:
  - "storage"
  - "bin"
  - "query"
  - "warehouse"
  - "type"
  - "section"
tags:
  - SCM
  - component:SCM-EWM-WOP-2CL
  - consumption-view
  - SCM-EWM
  - SCM-EWM-WOP
  - SCM-EWM-WOP-2CL
---
# C_EWM_STORAGEBINQ

**Storage Bin - Query**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EWM_STORAGEBINQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMWarehouse` | ✓ | |  |  | `CHAR(4)` | Warehouse Number/Warehouse Complex |
| `EWMStorageBin` | ✓ | |  |  | `CHAR(18)` | Storage Bin |
| `EWMStorageType` |  | |  |  | `CHAR(4)` | Storage Type |
| `EWMStorageSection` |  | |  |  | `CHAR(4)` | Storage Section |
| `EWMStorageBinType` |  | |  |  | `CHAR(4)` | Storage Bin Type |
| `EWMStorageBinAccessType` |  | |  |  | `CHAR(4)` | Bin Access Type |
| `EWMFireContainmentSection` |  | |  |  | `CHAR(2)` | Fire-Containment Section |
| `EWMStorageBehavior` |  | |  |  | `CHAR(1)` | Storage Behavior |
| `EWMStorageTypeRole` |  | |  |  | `CHAR(1)` | Storage Type Role |
| `EWMStorBinFreeDefinedAisleText` |  | |  |  | `CHAR(18)` | Storage Bin Aisle |
| `EWMStorBinFreeDefinedStackText` |  | |  |  | `CHAR(18)` | Storage Bin Stack |
| `EWMStorBinFreeDefinedLevelText` |  | |  |  | `CHAR(18)` | Storage Bin Level |
| `EWMWarehouseDescription` |  | |  | `cast(_Warehouse._Text[1:Language = $parameters.P_Language].EWMWarehouseDescription as ewm_de_warehousedescription preserving type)` | `CHAR(40)` | Warehouse Description |
| `EWMStorageTypeName` |  | |  | `cast(_StorageType._Text[1:Language = $parameters.P_Language].EWMStorageTypeName as ewm_de_storagetypedesc preserving type)` | `CHAR(40)` | Storage Type Description |
| `StorageSectionName` |  | |  | `cast(_StorageSection._Text[1:Language = $parameters.P_Language].StorageSectionName as ewm_de_storagesectiondesc preserving type)` | `CHAR(40)` | Storage Section Description |
| `StorageBinTypeName` |  | |  | `cast(_StorageBinType._Text[1:Language = $parameters.P_Language].StorageBinTypeName as ewm_de_storagebintypedesc preserving type)` | `CHAR(40)` | Storage Bin Type Description |
| `EWMStorageBinAccessTypeDesc` |  | |  | `_StorageBinAccessType._Text[1:Language = $parameters.P_Language].EWMStorageBinAccessTypeDesc` | `CHAR(40)` | Storage Bin Access Type Description |
| `EWMFireContainmentSectionDesc` |  | |  | `_FireContainmentSection._Text[1:Language = $parameters.P_Language].EWMFireContainmentSectionDesc` | `CHAR(40)` | Fire Containment Section Description |
| `EWMStorageBinMaximumWeight` |  | |  |  | `QUAN(15)` | Maximum Weight of Storage Bin |
| `EWMStorageBinUsedWeight` |  | |  |  | `QUAN(15)` | Weight of Materials in Storage Bin |
| `EWMStorageBinUnusedWeight` |  | |  |  | `QUAN(15)` | Storage Bin Unused Weight |
| `WeightUnit` |  | |  |  | `UNIT(3)` | Weight Unit |
| `EWMStorageBinMaxWeightIsMntnd` |  | |  |  | `CHAR(1)` | Storage Bin Maximum Weight is Maintained |
| `EWMStorageBinUsedWeightPct` |  | |  | `cast(0 as ewm_de_storagebinusedweightpct)` | `DEC(5)` | Storage Bin Used Weight in Percent |
| `EWMStorageBinUnusedWeightPct` |  | |  | `cast(0 as ewm_de_storbinunusedweightpct)` | `DEC(5)` | Storage Bin Unused Weight in Percent |
| `EWMStorBinUsedWeightInDspUnit` |  | |  |  | `QUAN(15)` | Storage Bin Used Weight in Display Unit |
| `EWMStorBinMaxWeightInDspUnit` |  | |  |  | `QUAN(15)` | Storage Bin Maximum Weight in Display Unit |
| `EWMStorBinUnusedWgtInDspUnit` |  | |  |  | `QUAN(15)` | Storage Bin Unused Weight in Display Unit |
| `DisplayWeightUnit` |  | |  |  | `UNIT(3)` | Display Weight Unit |
| `EWMStorBinUsedWeightDspUnitPct` |  | |  | `cast(0 as ewm_de_storbinusedwgtdspuompct)` | `DEC(5)` | Storage Bin Used Weight in Display Unit in Percent |
| `EWMStorBinUnusedWgtDspUnitPct` |  | |  | `cast(0 as ewm_de_storbinunusedwgtdspupct)` | `DEC(5)` | Storage Bin Unused Weight in Display Unit in Percent |
| `EWMStorageBinMaximumVolume` |  | |  |  | `QUAN(15)` | Maximum Volume |
| `EWMStorageBinOccupiedVolume` |  | |  |  | `QUAN(15)` | Volume Used |
| `EWMStorageBinUnusedVolume` |  | |  |  | `QUAN(15)` | Storage Bin Unused Volume |
| `VolumeUnit` |  | |  |  | `UNIT(3)` | Volume Unit |
| `EWMStorageBinMaxVolumeIsMntnd` |  | |  |  | `CHAR(1)` | Storage Bin Maximum Volume is Maintained |
| `EWMStorageBinUsedVolumePct` |  | |  | `cast(0 as ewm_de_storagebinusedvolumepct)` | `DEC(5)` | Storage Bin Used Volume in Percent |
| `EWMStorageBinUnusedVolumePct` |  | |  | `cast(0 as ewm_de_storbinunusedvolumepct)` | `DEC(5)` | Storage Bin Unused Volume in Percent |
| `EWMStorBinUsedVolumeInDspUnit` |  | |  |  | `QUAN(15)` | Storage Bin Used Volume in Display Unit |
| `EWMStorBinMaxVolumeInDspUnit` |  | |  |  | `QUAN(15)` | Storage Bin Maximum Volume in Display Unit |
| `EWMStorBinUnusedVolInDspUnit` |  | |  |  | `QUAN(15)` | Storage Bin Unused Volume in Display Unit |
| `DisplayVolumeUnit` |  | |  |  | `UNIT(3)` | Display Volume Unit |
| `EWMStorBinUsedVolDspUnitPct` |  | |  | `cast(0 as ewm_de_storbinusedvoldispupct)` | `DEC(5)` | Storage Bin Used Volume in Display Unit in Percent |
| `EWMStorBinUnusedVolDspUnitPct` |  | |  | `cast(0 as ewm_de_storbinunusedvoldspupct)` | `DEC(5)` | Storage Bin Unused Volume in Display Unit in Percent |
| `EWMStorBinTotalCapacityValue` |  | |  |  | `DEC(15)` | Total Capacity of Storage Bin |
| `EWMStorBinAvailCapacityValue` |  | |  |  | `DEC(15)` | Available Capacity |
| `EWMStorageBinUsedCapacityValue` |  | |  |  | `DEC(15)` | Storage Bin Used Capacity |
| `EWMStorBinTotalCapacityIsMntnd` |  | |  |  | `CHAR(1)` | Storage Bin Maximum Capacity is Maintained |
| `EWMStorageBinUsedCapacityPct` |  | |  | `cast(0 as ewm_de_storbinusedcapacitypct)` | `DEC(5)` | Storage Bin Used Capacity in Percent |
| `EWMStorBinAvailCapacityPct` |  | |  | `cast(0 as ewm_de_storbinavailcapacitypct)` | `DEC(5)` | Storage Bin Available Capacity in Percent |
| `EWMStorBinIsBlockedForRemoval` |  | |  |  | `CHAR(1)` | Blocked for Stock Removal |
| `StorageBinIsRemovalBlockedDesc` |  | |  | `cast(_StorBinRemovalBlockText[1: Language = $parameters.P_Language].StorageBinIsRemovalBlockedDesc as ewm_de_storbinisremovalblkddes preserving type)` | `CHAR(60)` | Blocked for Stock Removal Decription |
| `EWMStorBinIsBlockedForPutaway` |  | |  |  | `CHAR(1)` | Blocked for Putaway |
| `StorageBinIsPutawayBlockedDesc` |  | |  | `cast(_StorBinPutawayBlockText[1: Language = $parameters.P_Language].StorageBinIsPutawayBlockedDesc as ewm_de_storbinisputawayblkddes preserving type)` | `CHAR(60)` | Blocked for Putaway Description |
| `EWMStorBinIsBlockedDueToPInv` |  | |  |  | `CHAR(1)` | Storage Bin Blocked Because of Physical Inventory |
| `StorageBinIsPInvBlockedDesc` |  | |  | `cast(_StorBinPInvBlockText[1: Language = $parameters.P_Language].StorageBinIsPInvBlockedDesc as ewm_de_storbinispinvblkddesc preserving type)` | `CHAR(60)` | Blocked due to Physical Inventory Descr. |
| `EWMStorBinIsBlocked` |  | |  |  | `CHAR(1)` | Storage Bin Is Blocked |
| `EWMStorBinIsAvailable` |  | |  |  | `CHAR(1)` | Storage Bin Is Available |
| `EWMNrOfBlkdStorBinsForRemoval` |  | |  |  | `INT4(10)` | Storage Bin Number of Bins Blocked for Stock Removal |
| `EWMNumberOfBlkdStorBinsForPtwy` |  | |  |  | `INT4(10)` | Storage Bin Number of Bins Blocked for Putaway |
| `EWMNrOfBlkdStorBinsDueToPInv` |  | |  |  | `INT4(10)` | Storage Bin Number of Bins Blocked due to Physical Inventory |
| `EWMNumberOfBlockedStorBins` |  | |  |  | `INT4(10)` | Storage Bin Number of Blocked Bins |
| `EWMNumberOfAvailableStorBins` |  | |  |  | `INT4(10)` | Storage Bin Number of Available Bins |
| `EWMBlkdStorBinForRemovalPct` |  | |  | `cast(0 as ewm_de_blkdstobinforremovalpct)` | `DEC(5)` | Storage Bin Percentrage of Blocked Bins for Stock Removal |
| `EWMBlockedStorBinsForPtwyPct` |  | |  | `cast(0 as ewm_de_blkdstorbinsforptwypct)` | `DEC(5)` | Storage Bin Percentrage of Blocked Bins for Putaway |
| `EWMBlkdStorBinsDueToPInvPct` |  | |  | `cast(0 as ewm_de_blkdstorbinspinvpct)` | `DEC(5)` | Storage Bin Percentage of Bins Blocked due to Physical Inv. |
| `EWMBlockedStorBinsPct` |  | |  | `cast(0 as ewm_de_blockedstorbinspct)` | `DEC(5)` | Storage Bin Percentage of Blocked Bins |
| `EWMAvailableStorBinsPct` |  | |  | `cast(0 as ewm_de_availablestorbinspct)` | `DEC(5)` | Storage Bin Percentage of Available Bins |
| `EWMStorageBinIsEmpty` |  | |  |  | `CHAR(1)` | Empty Storage Bin |
| `StorageBinIsEmptyDescription` |  | |  | `cast(_StorageBinIsEmptyText[1: Language = $parameters.P_Language].StorageBinIsEmptyDescription as ewm_de_storagebinisemptydesc preserving type)` | `CHAR(60)` | Storage Bin is Empty Description |
| `EWMStorageBinIsUtilized` |  | |  |  | `CHAR(1)` | Storage Bin Is Utilized |
| `EWMStorageBinIsFull` |  | |  |  | `CHAR(1)` | Storage Bin Is Full |
| `StorageBinIsFullDescription` |  | |  | `cast(_StorageBinIsFullText[1: Language = $parameters.P_Language].StorageBinIsFullDescription as ewm_de_storagebinisfulldesc preserving type )` | `CHAR(60)` | Storage Bin Is Full Description |
| `EWMNumberOfEmptyStorBins` |  | |  |  | `INT4(10)` | Storage Bin Number of Empty Bins |
| `EWMNumberOfUtilizedStorBins` |  | |  |  | `INT4(10)` | Storage Bin Number of Utililized Bins |
| `EWMNumberOfFullStorBins` |  | |  |  | `INT4(10)` | Storage Bin Number of Full Bins |
| `EWMNumberOfStorageBins` |  | |  |  | `INT4(10)` | Storage Bin Number of Bins |
| `EWMEmptyStorBinsPct` |  | |  | `cast(0 as ewm_de_emptystorbinspct)` | `DEC(5)` | Storage Bin Percentage of Empty Bins |
| `EWMUtilizedStorBinsPct` |  | |  | `cast(0 as ewm_de_utilizedstorbinspct)` | `DEC(5)` | Storage Bin Percentage of Utilized Bins |
| `EWMFullStorBinsPct` |  | |  | `cast(0 as ewm_de_fullstorbinspct)` | `DEC(5)` | Storage Bin Percentage of Full Bins |
| `EWMStorageBinRemainDepthValue` |  | |  |  | `INT4(10)` | Storage Bin Remaining Depth Value |
| `EWMStorageBinUsedDepthValue` |  | |  |  | `INT4(10)` | Storage Bin Used Bin Depth |
| `EWMStorageBinMaxDepthValue` |  | |  |  | `INT4(10)` | Storage Bin Maximum Bin Depth |
| `EWMStorageBinRmngDepthPct` |  | |  | `cast(0 as ewm_de_storbinrmngdepthpct)` | `DEC(5)` | Storage Bin Remaining Bin Depth in Percent |
| `EWMStorageBinUsedDepthPct` |  | |  | `cast(0 as ewm_de_storbinuseddepthpct)` | `DEC(5)` | Storage Bin Used Bin Depth in Percent |
| `EWMStorBinNumberOfHndlgUnits` |  | |  |  | `DEC(6)` | Number of Handling Units in Storage Bin |
| `EWMStorBinHndlgUnitAvailCapVal` |  | |  |  | `DEC(6)` | Storage Bin Available Capacity of HUs |
| `EWMStorBinNrOfHndlgUnitsWthMax` |  | |  |  | `DEC(6)` | Storage Bin Number of HUs with a Maximum |
| `EWMStorBinMaxNmbrOfHndlgUnits` |  | |  |  | `DEC(6)` | Storage Bin Maximum Number of Handling Units |
| `EWMStorBinHndlgUnitAvailCapPct` |  | |  | `cast(0 as ewm_de_storbinhuavailcappct)` | `DEC(5)` | Storage Bin Available Capacity of HUs in Percent |
| `EWMStorBinHndlgUnitsUsedCapPct` |  | |  | `cast(0 as ewm_de_storbinhuusedpct)` | `DEC(5)` | Storage Bin HUs Used in Percent |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EWM_STORAGEBINQ')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EWM_STORAGEBINQ')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY]
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@EndUserText.label: 'Storage Bin - Query'
@VDM.viewType:#CONSUMPTION
@OData.publish:            true
@Analytics.query:              true
@Analytics.technicalName: 'CEWMSTOBQ'
define view entity C_EWM_StorageBinQ
  with parameters
    P_DisplayWeightUnit : ewm_de_display_weight_uom,
    P_DisplayVolumeUnit : ewm_de_display_volume_uom,
    @Environment.systemField: #SYSTEM_LANGUAGE 
    @Consumption.hidden
    P_Language          : /scwm/lang
  as select from I_EWM_StorageBinCube( P_DisplayWeightUnit :  $parameters.P_DisplayWeightUnit, P_DisplayVolumeUnit : $parameters.P_DisplayVolumeUnit )
{
      // Keys

  key EWMWarehouse,

  key EWMStorageBin,

      // Dimensions

      EWMStorageType,
      EWMStorageSection,
      EWMStorageBinType,
      EWMStorageBinAccessType,
      //OP  scope only
      EWMFireContainmentSection,

      @AnalyticsDetails.query.display: #TEXT_KEY
      EWMStorageBehavior,

      @AnalyticsDetails.query.display: #TEXT_KEY
      EWMStorageTypeRole,

      EWMStorBinFreeDefinedAisleText,
      EWMStorBinFreeDefinedStackText,
      EWMStorBinFreeDefinedLevelText,

      // Descriptions

      cast(_Warehouse._Text[1:Language = $parameters.P_Language].EWMWarehouseDescription as ewm_de_warehousedescription preserving type) as EWMWarehouseDescription,
      cast(_StorageType._Text[1:Language = $parameters.P_Language].EWMStorageTypeName as ewm_de_storagetypedesc preserving type)         as EWMStorageTypeName,
      cast(_StorageSection._Text[1:Language = $parameters.P_Language].StorageSectionName as ewm_de_storagesectiondesc preserving type)   as StorageSectionName,
      cast(_StorageBinType._Text[1:Language = $parameters.P_Language].StorageBinTypeName as ewm_de_storagebintypedesc preserving type)   as StorageBinTypeName,
      _StorageBinAccessType._Text[1:Language = $parameters.P_Language].EWMStorageBinAccessTypeDesc                                       as EWMStorageBinAccessTypeDesc,
      //OP  scope only
      _FireContainmentSection._Text[1:Language = $parameters.P_Language].EWMFireContainmentSectionDesc                                   as EWMFireContainmentSectionDesc,

      // Weight

      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'WeightUnit'} }
      EWMStorageBinMaximumWeight,

      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'WeightUnit'} }
      EWMStorageBinUsedWeight,

      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'WeightUnit'} }
      EWMStorageBinUnusedWeight,

      WeightUnit,

      @Semantics.booleanIndicator
      @AnalyticsDetails.query.display: #TEXT_KEY
      EWMStorageBinMaxWeightIsMntnd,
      _StorBinMaxWeightMntndText[1:Language = $parameters.P_Language].EWMStorBinMaxWeightMntndDesc,

      @AnalyticsDetails.query.formula: 'NDIV0( $projection.EWMStorageBinUsedWeight / $projection.EWMStorageBinMaximumWeight ) * 100'
      @AnalyticsDetails.query.decimals: 2
      cast(0 as ewm_de_storagebinusedweightpct)                                                                                          as EWMStorageBinUsedWeightPct,

      @AnalyticsDetails.query.formula: 'NDIV0( $projection.EWMStorageBinUnusedWeight / $projection.EWMStorageBinMaximumWeight ) * 100'
      @AnalyticsDetails.query.decimals: 2
      cast(0 as ewm_de_storbinunusedweightpct)                                                                                           as EWMStorageBinUnusedWeightPct,

      // Weight in Display Unit

      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'DisplayWeightUnit'} }
      EWMStorBinUsedWeightInDspUnit,

      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'DisplayWeightUnit'} }
      EWMStorBinMaxWeightInDspUnit,

      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'DisplayWeightUnit'} }
      EWMStorBinUnusedWgtInDspUnit,

      DisplayWeightUnit,

      @AnalyticsDetails.query.formula: 'NDIV0( $projection.EWMStorBinUsedWeightInDspUnit / $projection.EWMStorBinMaxWeightInDspUnit ) * 100.0'
      @AnalyticsDetails.query.decimals: 2
      cast(0 as ewm_de_storbinusedwgtdspuompct)                                                                                          as EWMStorBinUsedWeightDspUnitPct,

      @AnalyticsDetails.query.formula: 'NDIV0( $projection.EWMStorBinUnusedWgtInDspUnit / $projection.EWMStorBinMaxWeightInDspUnit ) * 100.0'
      @AnalyticsDetails.query.decimals: 2
      cast(0 as ewm_de_storbinunusedwgtdspupct)                                                                                          as EWMStorBinUnusedWgtDspUnitPct,

      // Volume

      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'VolumeUnit'} }
      EWMStorageBinMaximumVolume,

      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'VolumeUnit'} }
      EWMStorageBinOccupiedVolume,

      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'VolumeUnit'} }
      EWMStorageBinUnusedVolume,

      VolumeUnit,

      @Semantics.booleanIndicator
      @AnalyticsDetails.query.display: #TEXT_KEY
      EWMStorageBinMaxVolumeIsMntnd,
      _StorBinMaxVolMntndText[1:Language = $parameters.P_Language].EWMStorBinMaxVolumeMntndDesc,

      @AnalyticsDetails.query.formula: 'NDIV0( $projection.EWMStorageBinOccupiedVolume / $projection.EWMStorageBinMaximumVolume ) * 100.0'
      @AnalyticsDetails.query.decimals: 2
      cast(0 as ewm_de_storagebinusedvolumepct)                                                                                          as EWMStorageBinUsedVolumePct,

      @AnalyticsDetails.query.formula: 'NDIV0( $projection.EWMStorageBinUnusedVolume / $projection.EWMStorageBinMaximumVolume ) * 100.0'
      @AnalyticsDetails.query.decimals: 2
      cast(0 as ewm_de_storbinunusedvolumepct)                                                                                           as EWMStorageBinUnusedVolumePct,

      // Volume in Display Unit

      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'DisplayVolumeUnit'} }
      EWMStorBinUsedVolumeInDspUnit,

      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'DisplayVolumeUnit'} }
      EWMStorBinMaxVolumeInDspUnit,

      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'DisplayVolumeUnit'} }
      EWMStorBinUnusedVolInDspUnit,

      DisplayVolumeUnit,

      @AnalyticsDetails.query.formula: 'NDIV0( $projection.EWMStorBinUsedVolumeInDspUnit / $projection.EWMStorBinMaxVolumeInDspUnit ) * 100.0'
      @AnalyticsDetails.query.decimals: 2
      cast(0 as ewm_de_storbinusedvoldispupct)                                                                                           as EWMStorBinUsedVolDspUnitPct,

      @AnalyticsDetails.query.formula: 'NDIV0( $projection.EWMStorBinUnusedVolInDspUnit / $projection.EWMStorBinMaxVolumeInDspUnit ) * 100.0'
      @AnalyticsDetails.query.decimals: 2
      cast(0 as ewm_de_storbinunusedvoldspupct)                                                                                          as EWMStorBinUnusedVolDspUnitPct,

      // Capacity

      @DefaultAggregation: #SUM
      EWMStorBinTotalCapacityValue,
      @DefaultAggregation: #SUM
      EWMStorBinAvailCapacityValue,
      @DefaultAggregation: #SUM
      EWMStorageBinUsedCapacityValue,

      @Semantics.booleanIndicator
      @AnalyticsDetails.query.display: #TEXT_KEY
      EWMStorBinTotalCapacityIsMntnd,
      _StorBinTotCapaMntndText[1:Language = $parameters.P_Language].EWMStorBinTotCapacityMntndDesc,

      @AnalyticsDetails.query.formula: 'NDIV0( $projection.EWMStorageBinUsedCapacityValue / $projection.EWMStorBinTotalCapacityValue ) * 100.0'
      @AnalyticsDetails.query.decimals: 2
      cast(0 as ewm_de_storbinusedcapacitypct)                                                                                           as EWMStorageBinUsedCapacityPct,

      @AnalyticsDetails.query.formula: 'NDIV0( $projection.EWMStorBinAvailCapacityValue / $projection.EWMStorBinTotalCapacityValue ) * 100.0'
      @AnalyticsDetails.query.decimals: 2
      cast(0 as ewm_de_storbinavailcapacitypct)                                                                                          as EWMStorBinAvailCapacityPct,

      // Bin blocking

      @Semantics.booleanIndicator
      @AnalyticsDetails.query.display: #TEXT_KEY
      EWMStorBinIsBlockedForRemoval,
      @Semantics.text: true
      cast(_StorBinRemovalBlockText[1: Language = $parameters.P_Language].StorageBinIsRemovalBlockedDesc
      as ewm_de_storbinisremovalblkddes preserving type)                                                                                 as StorageBinIsRemovalBlockedDesc,

      @Semantics.booleanIndicator
      @AnalyticsDetails.query.display: #TEXT_KEY
      EWMStorBinIsBlockedForPutaway,
      @Semantics.text: true
      cast(_StorBinPutawayBlockText[1: Language = $parameters.P_Language].StorageBinIsPutawayBlockedDesc
      as ewm_de_storbinisputawayblkddes preserving type)                                                                                 as StorageBinIsPutawayBlockedDesc,

      @Semantics.booleanIndicator
      @EndUserText.label: 'Blocked due to Physical Inventory'
      @AnalyticsDetails.query.display: #TEXT_KEY
      EWMStorBinIsBlockedDueToPInv,
      @Semantics.text: true
      cast(_StorBinPInvBlockText[1: Language = $parameters.P_Language].StorageBinIsPInvBlockedDesc
      as ewm_de_storbinispinvblkddesc preserving type)                                                                                   as StorageBinIsPInvBlockedDesc,

      @Semantics.booleanIndicator
      @AnalyticsDetails.query.display: #TEXT_KEY
      EWMStorBinIsBlocked,
      @Semantics.text: true
      _StorBinBlockedText[1: Language = $parameters.P_Language].EWMStorageBinBlockedDesc,

      @Semantics.booleanIndicator
      @AnalyticsDetails.query.display: #TEXT_KEY
      EWMStorBinIsAvailable,
      @Semantics.text: true
      _StorBinAvailableText[1: Language = $parameters.P_Language].EWMStorageBinAvailableDesc,

      @DefaultAggregation: #SUM
      EWMNrOfBlkdStorBinsForRemoval,
      @DefaultAggregation: #SUM
      EWMNumberOfBlkdStorBinsForPtwy,
      @DefaultAggregation: #SUM
      EWMNrOfBlkdStorBinsDueToPInv,
      @DefaultAggregation: #SUM
      EWMNumberOfBlockedStorBins,
      @DefaultAggregation: #SUM
      EWMNumberOfAvailableStorBins,

      @AnalyticsDetails.query.formula: 'NDIV0( $projection.EWMNrOfBlkdStorBinsForRemoval / $projection.EWMNumberOfStorageBins ) * 100.0'
      @AnalyticsDetails.query.decimals: 2
      cast(0 as ewm_de_blkdstobinforremovalpct)                                                                                          as EWMBlkdStorBinForRemovalPct,

      @AnalyticsDetails.query.formula: 'NDIV0( $projection.EWMNumberOfBlkdStorBinsForPtwy / $projection.EWMNumberOfStorageBins ) * 100.0'
      @AnalyticsDetails.query.decimals: 2
      cast(0 as ewm_de_blkdstorbinsforptwypct)                                                                                           as EWMBlockedStorBinsForPtwyPct,

      @AnalyticsDetails.query.formula: 'NDIV0( $projection.EWMNrOfBlkdStorBinsDueToPInv / $projection.EWMNumberOfStorageBins ) * 100.0'
      @AnalyticsDetails.query.decimals: 2
      cast(0 as ewm_de_blkdstorbinspinvpct)                                                                                              as EWMBlkdStorBinsDueToPInvPct,

      @AnalyticsDetails.query.formula: 'NDIV0( $projection.EWMNumberOfBlockedStorBins / $projection.EWMNumberOfStorageBins ) * 100.0'
      @AnalyticsDetails.query.decimals: 2
      cast(0 as ewm_de_blockedstorbinspct)                                                                                               as EWMBlockedStorBinsPct,

      @AnalyticsDetails.query.formula: 'NDIV0( $projection.EWMNumberOfAvailableStorBins / $projection.EWMNumberOfStorageBins ) * 100.0'
      @AnalyticsDetails.query.decimals: 2
      cast(0 as ewm_de_availablestorbinspct)                                                                                             as EWMAvailableStorBinsPct,

      // Bin is empty, full or utilized

      @Semantics.booleanIndicator
      @AnalyticsDetails.query.display: #TEXT_KEY
      EWMStorageBinIsEmpty,
      @Semantics.text: true
      cast(_StorageBinIsEmptyText[1: Language = $parameters.P_Language].StorageBinIsEmptyDescription
      as ewm_de_storagebinisemptydesc preserving type)                                                                                   as StorageBinIsEmptyDescription,

      @Semantics.booleanIndicator
      @AnalyticsDetails.query.display: #TEXT_KEY
      EWMStorageBinIsUtilized,
      @Semantics.text: true
      _StorageBinIsUtilizedText[1: Language = $parameters.P_Language].EWMStorageBinUtilizedDesc,

      @Semantics.booleanIndicator
      @AnalyticsDetails.query.display: #TEXT_KEY
      EWMStorageBinIsFull,
      @Semantics.text: true
      cast(_StorageBinIsFullText[1: Language = $parameters.P_Language].StorageBinIsFullDescription
      as ewm_de_storagebinisfulldesc preserving type )                                                                                   as StorageBinIsFullDescription,

      @DefaultAggregation: #SUM
      EWMNumberOfEmptyStorBins,
      @DefaultAggregation: #SUM
      EWMNumberOfUtilizedStorBins,
      @DefaultAggregation: #SUM
      EWMNumberOfFullStorBins,

      @DefaultAggregation: #SUM
      EWMNumberOfStorageBins,

      @AnalyticsDetails.query.formula: 'NDIV0( $projection.EWMNumberOfEmptyStorBins / $projection.EWMNumberOfStorageBins ) * 100.0'
      @AnalyticsDetails.query.decimals: 2
      cast(0 as ewm_de_emptystorbinspct)                                                                                                 as EWMEmptyStorBinsPct,

      @AnalyticsDetails.query.formula: 'NDIV0( $projection.EWMNumberOfUtilizedStorBins / $projection.EWMNumberOfStorageBins ) * 100.0'
      @AnalyticsDetails.query.decimals: 2
      cast(0 as ewm_de_utilizedstorbinspct)                                                                                              as EWMUtilizedStorBinsPct,

      @AnalyticsDetails.query.formula: 'NDIV0( $projection.EWMNumberOfFullStorBins / $projection.EWMNumberOfStorageBins ) * 100.0'
      @AnalyticsDetails.query.decimals: 2
      cast(0 as ewm_de_fullstorbinspct)                                                                                                  as EWMFullStorBinsPct,

      // Start OP  scope only
      // Bin depth

      @DefaultAggregation: #SUM
      EWMStorageBinRemainDepthValue,
      @DefaultAggregation: #SUM
      EWMStorageBinUsedDepthValue,
      @DefaultAggregation: #SUM
      EWMStorageBinMaxDepthValue,

      @AnalyticsDetails.query.formula: 'NDIV0( $projection.EWMStorageBinRemainDepthValue / $projection.EWMStorageBinMaxDepthValue ) * 100.0'
      @AnalyticsDetails.query.decimals: 2
      cast(0 as ewm_de_storbinrmngdepthpct)                                                                                              as EWMStorageBinRmngDepthPct,

      @AnalyticsDetails.query.formula: 'NDIV0( $projection.EWMStorageBinUsedDepthValue / $projection.EWMStorageBinMaxDepthValue ) * 100.0'
      @AnalyticsDetails.query.decimals: 2
      cast(0 as ewm_de_storbinuseddepthpct)                                                                                              as EWMStorageBinUsedDepthPct,
      // End OP scope only

      // HUs

      @DefaultAggregation: #SUM
      EWMStorBinNumberOfHndlgUnits,
      @DefaultAggregation: #SUM
      EWMStorBinHndlgUnitAvailCapVal,
      @DefaultAggregation: #SUM
      EWMStorBinNrOfHndlgUnitsWthMax,
      @DefaultAggregation: #SUM
      EWMStorBinMaxNmbrOfHndlgUnits,

      @AnalyticsDetails.query.formula: 'NDIV0( $projection.EWMStorBinHndlgUnitAvailCapVal / $projection.EWMStorBinMaxNmbrOfHndlgUnits ) * 100.0'
      @AnalyticsDetails.query.decimals: 2
      cast(0 as ewm_de_storbinhuavailcappct)                                                                                             as EWMStorBinHndlgUnitAvailCapPct,

      @AnalyticsDetails.query.formula: 'NDIV0( $projection.EWMStorBinNrOfHndlgUnitsWthMax / $projection.EWMStorBinMaxNmbrOfHndlgUnits ) * 100.0'
      @AnalyticsDetails.query.decimals: 2
      cast(0 as ewm_de_storbinhuusedpct)                                                                                                 as EWMStorBinHndlgUnitsUsedCapPct

}
```
