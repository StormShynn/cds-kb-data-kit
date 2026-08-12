---
name: I_EWM_STORAGEBINCUBE
description: "This CDS view provides information about storage bins in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_STORAGEBINCUBE')/$value
semantic_en: "This CDS view provides information about storage bins in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Storage Bin - Cube — CDS view giao diện dựa trên P_EWM_StorageBin."
keywords:
  - "storage"
  - "bin"
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
# I_EWM_STORAGEBINCUBE

**This CDS view provides information about storage bins in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_STORAGEBINCUBE')/$value) |

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
| `EWMStorageBinMaximumWeight` |  | |  |  | `QUAN(15)` | Maximum Weight of Storage Bin |
| `EWMStorageBinUsedWeight` |  | |  |  | `QUAN(15)` | Weight of Materials in Storage Bin |
| `EWMStorageBinUnusedWeight` |  | |  |  | `QUAN(15)` | Storage Bin Unused Weight |
| `WeightUnit` |  | |  |  | `UNIT(3)` | Weight Unit |
| `EWMStorageBinMaxWeightIsMntnd` |  | |  |  | `CHAR(1)` | Storage Bin Maximum Weight is Maintained |
| `EWMStorBinUsedWeightInDspUnit` |  | |  | `cast(case when EWMStorBinMaxWeightInDspUnit is initial then 0 else EWMStorBinUsedWeightInDspUnit end as ewm_de_storbinusedwgtindspunit)` | `QUAN(15)` | Storage Bin Used Weight in Display Unit |
| `EWMStorBinMaxWeightInDspUnit` |  | |  |  | `QUAN(15)` | Storage Bin Maximum Weight in Display Unit |
| `EWMStorBinUnusedWgtInDspUnit` |  | |  | `cast( case when EWMStorBinMaxWeightInDspUnit is initial then 0 else EWMStorBinMaxWeightInDspUnit - EWMStorBinUsedWeightInDspUnit end as ewm_de_storbinunusedwgtdspunit)` | `QUAN(15)` | Storage Bin Unused Weight in Display Unit |
| `DisplayWeightUnit` |  | |  |  | `UNIT(3)` | Display Weight Unit |
| `EWMStorageBinMaximumVolume` |  | |  |  | `QUAN(15)` | Maximum Volume |
| `EWMStorageBinOccupiedVolume` |  | |  |  | `QUAN(15)` | Volume Used |
| `EWMStorageBinUnusedVolume` |  | |  |  | `QUAN(15)` | Storage Bin Unused Volume |
| `VolumeUnit` |  | |  |  | `UNIT(3)` | Volume Unit |
| `EWMStorageBinMaxVolumeIsMntnd` |  | |  |  | `CHAR(1)` | Storage Bin Maximum Volume is Maintained |
| `EWMStorBinUsedVolumeInDspUnit` |  | |  | `cast( case when EWMStorBinMaxVolumeInDspUnit is initial then 0 else EWMStorBinUsedVolumeInDspUnit end as ewm_de_storbinusedvolindspunit)` | `QUAN(15)` | Storage Bin Used Volume in Display Unit |
| `EWMStorBinMaxVolumeInDspUnit` |  | |  |  | `QUAN(15)` | Storage Bin Maximum Volume in Display Unit |
| `EWMStorBinUnusedVolInDspUnit` |  | |  | `cast( case when EWMStorBinMaxVolumeInDspUnit is initial then 0 else EWMStorBinMaxVolumeInDspUnit - EWMStorBinUsedVolumeInDspUnit end as ewm_de_storbinunusedvoldspunit)` | `QUAN(15)` | Storage Bin Unused Volume in Display Unit |
| `DisplayVolumeUnit` |  | |  |  | `UNIT(3)` | Display Volume Unit |
| `EWMStorBinTotalCapacityValue` |  | |  |  | `DEC(15)` | Total Capacity of Storage Bin |
| `EWMStorBinAvailCapacityValue` |  | |  |  | `DEC(15)` | Available Capacity |
| `EWMStorageBinUsedCapacityValue` |  | |  |  | `DEC(15)` | Storage Bin Used Capacity |
| `EWMStorBinTotalCapacityIsMntnd` |  | |  |  | `CHAR(1)` | Storage Bin Maximum Capacity is Maintained |
| `EWMStorBinIsBlockedForRemoval` |  | |  |  | `CHAR(1)` | Blocked for Stock Removal |
| `EWMStorBinIsBlockedForPutaway` |  | |  |  | `CHAR(1)` | Blocked for Putaway |
| `EWMStorBinIsBlockedDueToPInv` |  | |  |  | `CHAR(1)` | Storage Bin Blocked Because of Physical Inventory |
| `EWMStorBinIsBlocked` |  | |  |  | `CHAR(1)` | Storage Bin Is Blocked |
| `EWMStorBinIsAvailable` |  | |  |  | `CHAR(1)` | Storage Bin Is Available |
| `EWMNumberOfBlockedStorBins` |  | |  | `cast(case when EWMStorBinIsBlocked = 'X' then 1 else 0 end as ewm_de_numberofblockedstorbins)` | `INT4(10)` | Storage Bin Number of Blocked Bins |
| `EWMNrOfBlkdStorBinsForRemoval` |  | |  | `cast(case when EWMStorBinIsBlockedForRemoval = 'X' then 1 else 0 end as ewm_de_numberofblkdbinsforrmvl)` | `INT4(10)` | Storage Bin Number of Bins Blocked for Stock Removal |
| `EWMNumberOfBlkdStorBinsForPtwy` |  | |  | `cast(case when EWMStorBinIsBlockedForPutaway = 'X' then 1 else 0 end as ewm_de_numberofblkdbinsforptwy)` | `INT4(10)` | Storage Bin Number of Bins Blocked for Putaway |
| `EWMNrOfBlkdStorBinsDueToPInv` |  | |  | `cast(case when EWMStorBinIsBlockedDueToPInv = 'X' then 1 else 0 end as ewm_de_nrofblkdstorbinspinv)` | `INT4(10)` | Storage Bin Number of Bins Blocked due to Physical Inventory |
| `EWMNumberOfAvailableStorBins` |  | |  | `cast(case when EWMStorBinIsAvailable = 'X' then 1 else 0 end as ewm_de_nrofavailablestorbins)` | `INT4(10)` | Storage Bin Number of Available Bins |
| `EWMStorageBinIsEmpty` |  | |  |  | `CHAR(1)` | Empty Storage Bin |
| `EWMStorageBinIsUtilized` |  | |  |  | `CHAR(1)` | Storage Bin Is Utilized |
| `EWMStorageBinIsFull` |  | |  |  | `CHAR(1)` | Storage Bin Is Full |
| `EWMNumberOfEmptyStorBins` |  | |  | `cast(case when EWMStorageBinIsEmpty = 'X' then 1 else 0 end as ewm_de_numberofemptystorbins)` | `INT4(10)` | Storage Bin Number of Empty Bins |
| `EWMNumberOfUtilizedStorBins` |  | |  | `cast(case when EWMStorageBinIsUtilized = 'X' then 1 else 0 end as ewm_de_nrofutilizedstorbins)` | `INT4(10)` | Storage Bin Number of Utililized Bins |
| `EWMNumberOfFullStorBins` |  | |  | `cast(case when EWMStorageBinIsFull = 'X' then 1 else 0 end as ewm_de_numberoffullstorbins)` | `INT4(10)` | Storage Bin Number of Full Bins |
| `EWMNumberOfStorageBins` |  | |  | `cast(1 as ewm_de_numberofstoragebins)` | `INT4(10)` | Storage Bin Number of Bins |
| `EWMStorageBinRemainDepthValue` |  | |  |  | `INT4(10)` | Storage Bin Remaining Depth Value |
| `EWMStorageBinUsedDepthValue` |  | |  |  | `INT4(10)` | Storage Bin Used Bin Depth |
| `EWMStorageBinMaxDepthValue` |  | |  |  | `INT4(10)` | Storage Bin Maximum Bin Depth |
| `EWMStorBinNumberOfHndlgUnits` |  | |  |  | `DEC(6)` | Number of Handling Units in Storage Bin |
| `EWMStorBinHndlgUnitAvailCapVal` |  | |  |  | `DEC(6)` | Storage Bin Available Capacity of HUs |
| `EWMStorBinNrOfHndlgUnitsWthMax` |  | |  |  | `DEC(6)` | Storage Bin Number of HUs with a Maximum |
| `EWMStorBinMaxNmbrOfHndlgUnits` |  | |  |  | `DEC(6)` | Storage Bin Maximum Number of Handling Units |
| `_StorageBinAccessType` | | ✓ | | | | |
| `_FireContainmentSection` | | ✓ | | | | |
| `_StorageTypeRoleText` | | ✓ | | | | |
| `_StorageBehaviorText` | | ✓ | | | | |
| `_StorageBinIsEmptyText` | | ✓ | | | | |
| `_StorageBinIsUtilizedText` | | ✓ | | | | |
| `_StorageBinIsFullText` | | ✓ | | | | |
| `_StorageBinType` | | ✓ | | | | |
| `_StorageSection` | | ✓ | | | | |
| `_StorageType` | | ✓ | | | | |
| `_StorBinAvailableText` | | ✓ | | | | |
| `_StorBinBlockedText` | | ✓ | | | | |
| `_StorBinMaxVolMntndText` | | ✓ | | | | |
| `_StorBinMaxWeightMntndText` | | ✓ | | | | |
| `_StorBinPInvBlockText` | | ✓ | | | | |
| `_StorBinPutawayBlockText` | | ✓ | | | | |
| `_StorBinRemovalBlockText` | | ✓ | | | | |
| `_StorBinTotCapaMntndText` | | ✓ | | | | |
| `_VolumeUnitOfMeasureText` | | ✓ | | | | |
| `_Warehouse` | | ✓ | | | | |
| `_WeightUnitOfMeasureText` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_STORAGEBINCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_STORAGEBINCUBE')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Storage Bin - Cube'
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
define view entity I_EWM_StorageBinCube
  with parameters
    P_DisplayWeightUnit : ewm_de_display_weight_uom,
    P_DisplayVolumeUnit : ewm_de_display_volume_uom
  as select from P_EWM_StorageBin( P_DisplayWeightUnit : $parameters.P_DisplayWeightUnit, P_DisplayVolumeUnit : $parameters.P_DisplayVolumeUnit )
{
      // Key fields
      @ObjectModel.foreignKey.association: '_Warehouse'
  key EWMWarehouse,
  key EWMStorageBin,

      // Additional dimensions
      @ObjectModel.foreignKey.association: '_StorageType'
      EWMStorageType,
      @ObjectModel.foreignKey.association: '_StorageSection'
      EWMStorageSection,
      @ObjectModel.foreignKey.association: '_StorageBinType'
      EWMStorageBinType,
      @ObjectModel.foreignKey.association: '_StorageBinAccessType'
      EWMStorageBinAccessType,
      @ObjectModel.foreignKey.association: '_FireContainmentSection'
      EWMFireContainmentSection,
      @ObjectModel.text.association: '_StorageBehaviorText'
      EWMStorageBehavior,
      @ObjectModel.text.association: '_StorageTypeRoleText'
      EWMStorageTypeRole,

      EWMStorBinFreeDefinedAisleText,
      EWMStorBinFreeDefinedStackText,
      EWMStorBinFreeDefinedLevelText,

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
      @ObjectModel.text.association: '_StorBinMaxWeightMntndText'
      EWMStorageBinMaxWeightIsMntnd,

      // Weight in Display Unit

      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'DisplayWeightUnit'
      cast(case when EWMStorBinMaxWeightInDspUnit is initial then 0
      else EWMStorBinUsedWeightInDspUnit
      end as ewm_de_storbinusedwgtindspunit)                                                                  as EWMStorBinUsedWeightInDspUnit,

      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'DisplayWeightUnit'
      EWMStorBinMaxWeightInDspUnit,

      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'DisplayWeightUnit'
      cast( case when EWMStorBinMaxWeightInDspUnit is initial then 0
      else EWMStorBinMaxWeightInDspUnit - EWMStorBinUsedWeightInDspUnit
      end as ewm_de_storbinunusedwgtdspunit)                                                                  as EWMStorBinUnusedWgtInDspUnit,

      DisplayWeightUnit,

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
      @ObjectModel.text.association: '_StorBinMaxVolMntndText'
      EWMStorageBinMaxVolumeIsMntnd,

      // Volume in Display Unit
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'DisplayVolumeUnit'
      cast( case when EWMStorBinMaxVolumeInDspUnit is initial then 0
      else EWMStorBinUsedVolumeInDspUnit
      end as ewm_de_storbinusedvolindspunit)                                                                  as EWMStorBinUsedVolumeInDspUnit,

      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'DisplayVolumeUnit'
      EWMStorBinMaxVolumeInDspUnit,

      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'DisplayVolumeUnit'
      cast( case when EWMStorBinMaxVolumeInDspUnit is initial then 0
      else EWMStorBinMaxVolumeInDspUnit - EWMStorBinUsedVolumeInDspUnit
      end as ewm_de_storbinunusedvoldspunit)                                                                  as EWMStorBinUnusedVolInDspUnit,

      DisplayVolumeUnit,

      // Capacity
      @DefaultAggregation: #SUM
      EWMStorBinTotalCapacityValue,
      @DefaultAggregation: #SUM
      EWMStorBinAvailCapacityValue,
      @DefaultAggregation: #SUM
      EWMStorageBinUsedCapacityValue,

      @Semantics.booleanIndicator
      @ObjectModel.text.association: '_StorBinTotCapaMntndText'
      EWMStorBinTotalCapacityIsMntnd,

      // Bin Blocking
      @Semantics.booleanIndicator
      @ObjectModel.text.association: '_StorBinRemovalBlockText'
      EWMStorBinIsBlockedForRemoval,
      @Semantics.booleanIndicator
      @ObjectModel.text.association: '_StorBinPutawayBlockText'
      EWMStorBinIsBlockedForPutaway,
      @Semantics.booleanIndicator
      @ObjectModel.text.association: '_StorBinPInvBlockText'
      EWMStorBinIsBlockedDueToPInv,
      @Semantics.booleanIndicator
      @ObjectModel.text.association: '_StorBinBlockedText'
      EWMStorBinIsBlocked,
      @Semantics.booleanIndicator
      @ObjectModel.text.association: '_StorBinAvailableText'
      EWMStorBinIsAvailable,

      @DefaultAggregation: #SUM
      cast(case when EWMStorBinIsBlocked = 'X' then 1 else 0 end as ewm_de_numberofblockedstorbins)           as EWMNumberOfBlockedStorBins,
      @DefaultAggregation: #SUM
      cast(case when EWMStorBinIsBlockedForRemoval = 'X' then 1 else 0 end as ewm_de_numberofblkdbinsforrmvl) as EWMNrOfBlkdStorBinsForRemoval,
      @DefaultAggregation: #SUM
      cast(case when EWMStorBinIsBlockedForPutaway = 'X' then 1 else 0 end as ewm_de_numberofblkdbinsforptwy) as EWMNumberOfBlkdStorBinsForPtwy,
      @DefaultAggregation: #SUM
      cast(case when EWMStorBinIsBlockedDueToPInv = 'X' then 1 else 0 end as ewm_de_nrofblkdstorbinspinv)     as EWMNrOfBlkdStorBinsDueToPInv,
      @DefaultAggregation: #SUM
      cast(case when EWMStorBinIsAvailable = 'X' then 1 else 0 end as ewm_de_nrofavailablestorbins)           as EWMNumberOfAvailableStorBins,

      // Bin is empty, full or utilized
      @Semantics.booleanIndicator
      @ObjectModel.text.association: '_StorageBinIsEmptyText'
      EWMStorageBinIsEmpty,
      @Semantics.booleanIndicator
      @ObjectModel.text.association: '_StorageBinIsUtilizedText'
      EWMStorageBinIsUtilized,
      @Semantics.booleanIndicator
      @ObjectModel.text.association: '_StorageBinIsFullText'
      EWMStorageBinIsFull,

      @DefaultAggregation: #SUM
      cast(case when EWMStorageBinIsEmpty = 'X' then 1 else 0 end as ewm_de_numberofemptystorbins)            as EWMNumberOfEmptyStorBins,
      @DefaultAggregation: #SUM
      cast(case when EWMStorageBinIsUtilized = 'X' then 1 else 0 end as ewm_de_nrofutilizedstorbins)          as EWMNumberOfUtilizedStorBins,
      @DefaultAggregation: #SUM
      cast(case when EWMStorageBinIsFull = 'X' then 1 else 0 end as ewm_de_numberoffullstorbins)              as EWMNumberOfFullStorBins,
      @DefaultAggregation: #SUM
      cast(1 as ewm_de_numberofstoragebins)                                                                   as EWMNumberOfStorageBins,

      // Bin depth
      @DefaultAggregation: #SUM
      EWMStorageBinRemainDepthValue,
      @DefaultAggregation: #SUM
      EWMStorageBinUsedDepthValue,
      @DefaultAggregation: #SUM
      EWMStorageBinMaxDepthValue,
      // HUs
      @DefaultAggregation: #SUM
      EWMStorBinNumberOfHndlgUnits,
      @DefaultAggregation: #SUM
      EWMStorBinHndlgUnitAvailCapVal,
      @DefaultAggregation: #SUM
      EWMStorBinNrOfHndlgUnitsWthMax,
      @DefaultAggregation: #SUM
      EWMStorBinMaxNmbrOfHndlgUnits,

      /* Associations */
      _StorageBinAccessType,
      _FireContainmentSection,
      _StorageTypeRoleText,
      _StorageBehaviorText,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _StorageBinIsEmptyText,
      _StorageBinIsUtilizedText,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _StorageBinIsFullText,
      _StorageBinType,
      _StorageSection,
      _StorageType,
      _StorBinAvailableText,
      _StorBinBlockedText,
      _StorBinMaxVolMntndText,
      _StorBinMaxWeightMntndText,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _StorBinPInvBlockText,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _StorBinPutawayBlockText,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _StorBinRemovalBlockText,
      _StorBinTotCapaMntndText,
      _VolumeUnitOfMeasureText,
      _Warehouse,
      _WeightUnitOfMeasureText
}
```
