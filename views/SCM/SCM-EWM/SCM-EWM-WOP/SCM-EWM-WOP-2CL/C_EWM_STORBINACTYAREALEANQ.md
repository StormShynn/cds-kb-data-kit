---
name: C_EWM_STORBINACTYAREALEANQ
description: This CDS view retrieves data about the utilization of storage bins in an activity area in a warehouse. This CDS view provides the data to answer the following business questions: How much are storage bins utilized in terms of their weight, volume, or capacity, or number of bins in a particular activity area? How many storage bins are blocked in a particular activity area, and for what reasons? How many storage bins are empty, utilized, or full in a particular activity area? How much are storage bins of a certain type utilized in a particular activity area? How many storage bins are available in an aisle in a particular activity area? This CDS view is intended for analytics of storage bins in a particular activity area. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EWM_STORBINACTYAREALEANQ')/$value
semantic_en: This CDS view retrieves data about the utilization of storage bins in an activity area in a warehouse. This CDS view provides the data to answer the following business questions: How much are storage bins utilized in terms of their weight, volume, or capacity, or number of bins in a particular activity area? How many storage bins are blocked in a particular activity area, and for what reasons? How many storage bins are empty, utilized, or full in a particular activity area? How much are storage bins of a certain type utilized in a particular activity area? How many storage bins are available in an aisle in a particular activity area? This CDS view is intended for analytics of storage bins in a particular activity area. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - SCM
  - bo:companycode
  - component:SCM-EWM-WOP-2CL
  - consumption-view
  - SCM-EWM
  - SCM-EWM-WOP
  - SCM-EWM-WOP-2CL
  - metadata-only
---
# C_EWM_STORBINACTYAREALEANQ

**This CDS view retrieves data about the utilization of storage bins in an activity area in a warehouse. This CDS view provides the data to answer the following business questions: How much are storage bins utilized in terms of their weight, volume, or capacity, or number of bins in a particular activity area? How many storage bins are blocked in a particular activity area, and for what reasons? How many storage bins are empty, utilized, or full in a particular activity area? How much are storage bins of a certain type utilized in a particular activity area? How many storage bins are available in an aisle in a particular activity area? This CDS view is intended for analytics of storage bins in a particular activity area. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EWM_STORBINACTYAREALEANQ')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `EWMWarehouse` | `CHAR(4)` | Warehouse Number/Warehouse Complex |
| `ActivityArea` | `CHAR(4)` | Activity Area |
| `EWMStorageBin` | `CHAR(18)` | Storage Bin |
| `EWMStorageType` | `CHAR(4)` | Storage Type |
| `EWMStorageSection` | `CHAR(4)` | Storage Section |
| `EWMStorageBinType` | `CHAR(4)` | Storage Bin Type |
| `EWMStorageBinAccessType` | `CHAR(4)` | Bin Access Type |
| `EWMStorageBehavior` | `CHAR(1)` | Storage Behavior |
| `EWMStorageTypeRole` | `CHAR(1)` | Storage Type Role |
| `EWMStorBinFreeDefinedAisleText` | `CHAR(18)` | Storage Bin Aisle |
| `EWMStorBinFreeDefinedStackText` | `CHAR(18)` | Storage Bin Stack |
| `EWMStorBinFreeDefinedLevelText` | `CHAR(18)` | Storage Bin Level |
| `EWMWarehouseDescription` | `CHAR(40)` | Warehouse Description |
| `ActivityAreaName` | `CHAR(40)` | Activity Area Description |
| `EWMStorageTypeName` | `CHAR(40)` | Storage Type Description |
| `StorageSectionName` | `CHAR(40)` | Storage Section Description |
| `StorageBinTypeName` | `CHAR(40)` | Storage Bin Type Description |
| `EWMStorageBinAccessTypeDesc` | `CHAR(40)` | Storage Bin Access Type Description |
| `EWMStorageBinMaximumWeight` | `QUAN(15)` | Maximum Weight of Storage Bin |
| `EWMStorageBinUsedWeight` | `QUAN(15)` | Weight of Materials in Storage Bin |
| `EWMStorageBinUnusedWeight` | `QUAN(15)` | Storage Bin Unused Weight |
| `WeightUnit` | `UNIT(3)` | Weight Unit |
| `EWMStorageBinMaxWeightIsMntnd` | `CHAR(1)` | Storage Bin Maximum Weight is Maintained |
| `EWMStorBinMaxWeightMntndDesc` | `CHAR(60)` | Storage Bin Maximum Weight is Maintained Description |
| `EWMStorageBinUsedWeightPct` | `DEC(5)` | Storage Bin Used Weight in Percent |
| `EWMStorageBinUnusedWeightPct` | `DEC(5)` | Storage Bin Unused Weight in Percent |
| `EWMStorBinUsedWeightInDspUnit` | `QUAN(15)` | Storage Bin Used Weight in Display Unit |
| `EWMStorBinMaxWeightInDspUnit` | `QUAN(15)` | Storage Bin Maximum Weight in Display Unit |
| `EWMStorBinUnusedWgtInDspUnit` | `QUAN(15)` | Storage Bin Unused Weight in Display Unit |
| `DisplayWeightUnit` | `UNIT(3)` | Display Weight Unit |
| `EWMStorBinUsedWeightDspUnitPct` | `DEC(5)` | Storage Bin Used Weight in Display Unit in Percent |
| `EWMStorBinUnusedWgtDspUnitPct` | `DEC(5)` | Storage Bin Unused Weight in Display Unit in Percent |
| `EWMStorageBinMaximumVolume` | `QUAN(15)` | Maximum Volume |
| `EWMStorageBinOccupiedVolume` | `QUAN(15)` | Volume Used |
| `EWMStorageBinUnusedVolume` | `QUAN(15)` | Storage Bin Unused Volume |
| `VolumeUnit` | `UNIT(3)` | Volume Unit |
| `EWMStorageBinMaxVolumeIsMntnd` | `CHAR(1)` | Storage Bin Maximum Volume is Maintained |
| `EWMStorBinMaxVolumeMntndDesc` | `CHAR(60)` | Storage Bin Maximum Volume is Maintained Description |
| `EWMStorageBinUsedVolumePct` | `DEC(5)` | Storage Bin Used Volume in Percent |
| `EWMStorageBinUnusedVolumePct` | `DEC(5)` | Storage Bin Unused Volume in Percent |
| `EWMStorBinUsedVolumeInDspUnit` | `QUAN(15)` | Storage Bin Used Volume in Display Unit |
| `EWMStorBinMaxVolumeInDspUnit` | `QUAN(15)` | Storage Bin Maximum Volume in Display Unit |
| `EWMStorBinUnusedVolInDspUnit` | `QUAN(15)` | Storage Bin Unused Volume in Display Unit |
| `DisplayVolumeUnit` | `UNIT(3)` | Display Volume Unit |
| `EWMStorBinUsedVolDspUnitPct` | `DEC(5)` | Storage Bin Used Volume in Display Unit in Percent |
| `EWMStorBinUnusedVolDspUnitPct` | `DEC(5)` | Storage Bin Unused Volume in Display Unit in Percent |
| `EWMStorBinTotalCapacityValue` | `DEC(15)` | Total Capacity of Storage Bin |
| `EWMStorBinAvailCapacityValue` | `DEC(15)` | Available Capacity |
| `EWMStorageBinUsedCapacityValue` | `DEC(15)` | Storage Bin Used Capacity |
| `EWMStorBinTotalCapacityIsMntnd` | `CHAR(1)` | Storage Bin Maximum Capacity is Maintained |
| `EWMStorBinTotCapacityMntndDesc` | `CHAR(60)` | Storage Bin Maximum Capacity is Maintained Description |
| `EWMStorageBinUsedCapacityPct` | `DEC(5)` | Storage Bin Used Capacity in Percent |
| `EWMStorBinAvailCapacityPct` | `DEC(5)` | Storage Bin Available Capacity in Percent |
| `EWMStorBinIsBlockedForRemoval` | `CHAR(1)` | Blocked for Stock Removal |
| `StorageBinIsRemovalBlockedDesc` | `CHAR(60)` | Blocked for Stock Removal Decription |
| `EWMStorBinIsBlockedForPutaway` | `CHAR(1)` | Blocked for Putaway |
| `StorageBinIsPutawayBlockedDesc` | `CHAR(60)` | Blocked for Putaway Description |
| `EWMStorBinIsBlockedDueToPInv` | `CHAR(1)` | Storage Bin Blocked Because of Physical Inventory |
| `StorageBinIsPInvBlockedDesc` | `CHAR(60)` | Blocked due to Physical Inventory Descr. |
| `EWMStorBinIsBlocked` | `CHAR(1)` | Storage Bin Is Blocked |
| `EWMStorageBinBlockedDesc` | `CHAR(60)` | Storage Bin Is Blocked Description |
| `EWMStorBinIsAvailable` | `CHAR(1)` | Storage Bin Is Available |
| `EWMStorageBinAvailableDesc` | `CHAR(60)` | Storage Bin Is Available Description |
| `EWMNrOfBlkdStorBinsForRemoval` | `INT4(10)` | Storage Bin Number of Bins Blocked for Stock Removal |
| `EWMNumberOfBlkdStorBinsForPtwy` | `INT4(10)` | Storage Bin Number of Bins Blocked for Putaway |
| `EWMNrOfBlkdStorBinsDueToPInv` | `INT4(10)` | Storage Bin Number of Bins Blocked due to Physical Inventory |
| `EWMNumberOfBlockedStorBins` | `INT4(10)` | Storage Bin Number of Blocked Bins |
| `EWMNumberOfAvailableStorBins` | `INT4(10)` | Storage Bin Number of Available Bins |
| `EWMBlkdStorBinForRemovalPct` | `DEC(5)` | Storage Bin Percentrage of Blocked Bins for Stock Removal |
| `EWMBlockedStorBinsForPtwyPct` | `DEC(5)` | Storage Bin Percentrage of Blocked Bins for Putaway |
| `EWMBlkdStorBinsDueToPInvPct` | `DEC(5)` | Storage Bin Percentage of Bins Blocked due to Physical Inv. |
| `EWMBlockedStorBinsPct` | `DEC(5)` | Storage Bin Percentage of Blocked Bins |
| `EWMAvailableStorBinsPct` | `DEC(5)` | Storage Bin Percentage of Available Bins |
| `EWMStorageBinIsEmpty` | `CHAR(1)` | Empty Storage Bin |
| `StorageBinIsEmptyDescription` | `CHAR(60)` | Storage Bin is Empty Description |
| `EWMStorageBinIsUtilized` | `CHAR(1)` | Storage Bin Is Utilized |
| `EWMStorageBinUtilizedDesc` | `CHAR(60)` | Storage Bin Is Utilized Description |
| `EWMStorageBinIsFull` | `CHAR(1)` | Storage Bin Is Full |
| `StorageBinIsFullDescription` | `CHAR(60)` | Storage Bin Is Full Description |
| `EWMNumberOfEmptyStorBins` | `INT4(10)` | Storage Bin Number of Empty Bins |
| `EWMNumberOfUtilizedStorBins` | `INT4(10)` | Storage Bin Number of Utililized Bins |
| `EWMNumberOfFullStorBins` | `INT4(10)` | Storage Bin Number of Full Bins |
| `EWMNumberOfStorageBins` | `INT4(10)` | Storage Bin Number of Bins |
| `EWMEmptyStorBinsPct` | `DEC(5)` | Storage Bin Percentage of Empty Bins |
| `EWMUtilizedStorBinsPct` | `DEC(5)` | Storage Bin Percentage of Utilized Bins |
| `EWMFullStorBinsPct` | `DEC(5)` | Storage Bin Percentage of Full Bins |
| `EWMStorBinNumberOfHndlgUnits` | `DEC(6)` | Number of Handling Units in Storage Bin |
| `EWMStorBinHndlgUnitAvailCapVal` | `DEC(6)` | Storage Bin Available Capacity of HUs |
| `EWMStorBinNrOfHndlgUnitsWthMax` | `DEC(6)` | Storage Bin Number of HUs with a Maximum |
| `EWMStorBinMaxNmbrOfHndlgUnits` | `DEC(6)` | Storage Bin Maximum Number of Handling Units |
| `EWMStorBinHndlgUnitAvailCapPct` | `DEC(5)` | Storage Bin Available Capacity of HUs in Percent |
| `EWMStorBinHndlgUnitsUsedCapPct` | `DEC(5)` | Storage Bin HUs Used in Percent |
