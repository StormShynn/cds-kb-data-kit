---
name: I_EWM_STORAGEBINCUBE
description: "This CDS view provides information about storage bins in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_STORAGEBINCUBE')/$value
semantic_en: "This CDS view provides information about storage bins in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - SCM
  - bo:companycode
  - component:SCM-EWM-WOP-2CL
  - interface-view
  - SCM-EWM
  - SCM-EWM-WOP
  - SCM-EWM-WOP-2CL
  - metadata-only
---
# I_EWM_STORAGEBINCUBE

**This CDS view provides information about storage bins in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_STORAGEBINCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMWarehouse` |  | |  |  | `CHAR(4)` | Warehouse Number/Warehouse Complex |
| `EWMStorageBin` |  | |  |  | `CHAR(18)` | Storage Bin |
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
| `EWMStorBinUsedWeightInDspUnit` |  | |  |  | `QUAN(15)` | Storage Bin Used Weight in Display Unit |
| `EWMStorBinMaxWeightInDspUnit` |  | |  |  | `QUAN(15)` | Storage Bin Maximum Weight in Display Unit |
| `EWMStorBinUnusedWgtInDspUnit` |  | |  |  | `QUAN(15)` | Storage Bin Unused Weight in Display Unit |
| `DisplayWeightUnit` |  | |  |  | `UNIT(3)` | Display Weight Unit |
| `EWMStorageBinMaximumVolume` |  | |  |  | `QUAN(15)` | Maximum Volume |
| `EWMStorageBinOccupiedVolume` |  | |  |  | `QUAN(15)` | Volume Used |
| `EWMStorageBinUnusedVolume` |  | |  |  | `QUAN(15)` | Storage Bin Unused Volume |
| `VolumeUnit` |  | |  |  | `UNIT(3)` | Volume Unit |
| `EWMStorageBinMaxVolumeIsMntnd` |  | |  |  | `CHAR(1)` | Storage Bin Maximum Volume is Maintained |
| `EWMStorBinUsedVolumeInDspUnit` |  | |  |  | `QUAN(15)` | Storage Bin Used Volume in Display Unit |
| `EWMStorBinMaxVolumeInDspUnit` |  | |  |  | `QUAN(15)` | Storage Bin Maximum Volume in Display Unit |
| `EWMStorBinUnusedVolInDspUnit` |  | |  |  | `QUAN(15)` | Storage Bin Unused Volume in Display Unit |
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
| `EWMNumberOfBlockedStorBins` |  | |  |  | `INT4(10)` | Storage Bin Number of Blocked Bins |
| `EWMNrOfBlkdStorBinsForRemoval` |  | |  |  | `INT4(10)` | Storage Bin Number of Bins Blocked for Stock Removal |
| `EWMNumberOfBlkdStorBinsForPtwy` |  | |  |  | `INT4(10)` | Storage Bin Number of Bins Blocked for Putaway |
| `EWMNrOfBlkdStorBinsDueToPInv` |  | |  |  | `INT4(10)` | Storage Bin Number of Bins Blocked due to Physical Inventory |
| `EWMNumberOfAvailableStorBins` |  | |  |  | `INT4(10)` | Storage Bin Number of Available Bins |
| `EWMStorageBinIsEmpty` |  | |  |  | `CHAR(1)` | Empty Storage Bin |
| `EWMStorageBinIsUtilized` |  | |  |  | `CHAR(1)` | Storage Bin Is Utilized |
| `EWMStorageBinIsFull` |  | |  |  | `CHAR(1)` | Storage Bin Is Full |
| `EWMNumberOfEmptyStorBins` |  | |  |  | `INT4(10)` | Storage Bin Number of Empty Bins |
| `EWMNumberOfUtilizedStorBins` |  | |  |  | `INT4(10)` | Storage Bin Number of Utililized Bins |
| `EWMNumberOfFullStorBins` |  | |  |  | `INT4(10)` | Storage Bin Number of Full Bins |
| `EWMNumberOfStorageBins` |  | |  |  | `INT4(10)` | Storage Bin Number of Bins |
| `EWMStorageBinRemainDepthValue` |  | |  |  | `INT4(10)` | Storage Bin Remaining Depth Value |
| `EWMStorageBinUsedDepthValue` |  | |  |  | `INT4(10)` | Storage Bin Used Bin Depth |
| `EWMStorageBinMaxDepthValue` |  | |  |  | `INT4(10)` | Storage Bin Maximum Bin Depth |
| `EWMStorBinNumberOfHndlgUnits` |  | |  |  | `DEC(6)` | Number of Handling Units in Storage Bin |
| `EWMStorBinHndlgUnitAvailCapVal` |  | |  |  | `DEC(6)` | Storage Bin Available Capacity of HUs |
| `EWMStorBinNrOfHndlgUnitsWthMax` |  | |  |  | `DEC(6)` | Storage Bin Number of HUs with a Maximum |
| `EWMStorBinMaxNmbrOfHndlgUnits` |  | |  |  | `DEC(6)` | Storage Bin Maximum Number of Handling Units |
