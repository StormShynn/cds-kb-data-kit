---
name: I_EWM_HANDLINGUNITHDR_2
description: "Warehouse Handling Unit Header"
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_HANDLINGUNITHDR_2')/$value
semantic_en: "Warehouse Handling Unit Header"
tags:
  - SCM
  - component:SCM-EWM-WOP-2CL
  - interface-view
  - SCM-EWM
  - SCM-EWM-WOP
  - SCM-EWM-WOP-2CL
  - metadata-only
---
# I_EWM_HANDLINGUNITHDR_2

**Warehouse Handling Unit Header**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_HANDLINGUNITHDR_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `HandlingUnitNumber` |  | |  |  | `CHAR(20)` | Handling Unit Identification |
| `EWMWarehouse` |  | |  |  | `CHAR(4)` | Warehouse Number/Warehouse Complex |
| `HandlingUnitIndicator` |  | |  |  | `CHAR(1)` | Virtual Handling Unit |
| `HandlingUnitUUID` |  | |  |  | `RAW(16)` | Unique Internal Identification of a Handling Unit |
| `PackagingMaterialUUID` |  | |  |  | `RAW(16)` | Product UUID |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | User Name |
| `CreationDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | User Name |
| `LastChangeDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `GrossWeight` |  | |  |  | `QUAN(15)` | Total Weight of Handling Unit |
| `NetWeight` |  | |  |  | `QUAN(15)` | Loading Weight of Handling Unit |
| `WeightUnit` |  | |  |  | `UNIT(3)` | Weight Unit |
| `HandlingUnitTareWeight` |  | |  |  | `QUAN(15)` | Tare Weight of Handling Unit |
| `HandlingUnitTareWeightUnit` |  | |  |  | `UNIT(3)` | Weight Unit |
| `GrossVolume` |  | |  |  | `QUAN(15)` | Total Volume of Handling Unit |
| `HandlingUnitNetVolume` |  | |  |  | `QUAN(15)` | Loading Volume of Handling Unit |
| `VolumeUnit` |  | |  |  | `UNIT(3)` | Volume Unit |
| `HandlingUnitTareVolume` |  | |  |  | `QUAN(15)` | Tare Volume of Handling Unit |
| `HandlingUnitTareVolumeUnit` |  | |  |  | `UNIT(3)` | Volume Unit |
| `HandlingUnitGrossCapacity` |  | |  |  | `DEC(15)` | Total Capacity Key Figure |
| `HandlingUnitNetCapacity` |  | |  |  | `DEC(15)` | Net Capacity Key Figure |
| `HandlingUnitTareCapacity` |  | |  |  | `DEC(15)` | Tare Capacity Key Figure for Packaging |
| `HandlingUnitLength` |  | |  |  | `QUAN(15)` | Length |
| `HandlingUnitWidth` |  | |  |  | `QUAN(15)` | Width |
| `HandlingUnitHeight` |  | |  |  | `QUAN(15)` | Height |
| `EWMDimensionUnit` |  | |  |  | `UNIT(3)` | Unit of Dimension for Length/Width/Height |
| `HandlingUnitMaxWeight` |  | |  |  | `QUAN(15)` | Maximum Allowed Weight |
| `HandlingUnitWeightTolerance` |  | |  |  | `DEC(3)` | Excess Weight Tolerance for Handling Unit |
| `HasVariableTareWeight` |  | |  |  | `CHAR(1)` | Tare Weight Variable |
| `HandlingUnitMaxVolume` |  | |  |  | `QUAN(15)` | Maximum Volume |
| `HandlingUnitVolumeTolerance` |  | |  |  | `DEC(3)` | Excess Volume Tolerance of the Handling Unit |
| `HandlingUnitIsClosed` |  | |  |  | `CHAR(1)` | Closed Packaging Material |
| `MaximumCapacity` |  | |  |  | `DEC(15)` | Maximum Permitted Capacity for Packaging Material |
| `HandlingUnitCapacityTolerance` |  | |  |  | `DEC(3)` | Excess Capacity Tolerance of Handling Unit |
| `HandlingUnitMaxLength` |  | |  |  | `QUAN(15)` | Maximum Packing Length of a Packaging Material |
| `HandlingUnitMaxWidth` |  | |  |  | `QUAN(15)` | Maximum Allowed Packing Width of a Packaging Material |
| `HandlingUnitMaxHeight` |  | |  |  | `QUAN(15)` | Maximum Packing Height of a Packaging Material |
| `HandlingUnitMaxDimensionUnit` |  | |  |  | `UNIT(3)` | Unit of Measure for Maximum Packing Length/Width/Height |
| `HandlingUnitType` |  | |  |  | `CHAR(4)` | Handling Unit Type |
| `HandlingUnitHasAvailQty` |  | |  |  | `CHAR(1)` | Indicator: Handling Unit Contains an Available Quantity |
| `HandlingUnitOpenTaskInd` |  | |  |  | `CHAR(1)` | Indicator: Handling Unit is Being Moved (Open HU WT) |
| `ExternalStorageProcessStep` |  | |  |  | `CHAR(4)` | External Storage Process Step |
| `ProcessStepCompletedInd` |  | |  |  | `CHAR(1)` | Process Step for HU Completed |
| `EWMHUProcessStepIsCompleted` |  | |  |  | `CHAR(1)` | Process Step for HU Completed |
| `StorageProcess` |  | |  |  | `CHAR(4)` | Storage Process |
| `EWMConsolidationGroup` |  | |  |  | `CHAR(10)` | Consolidation Group |
| `WorkloadIdentification` |  | |  |  | `NUMC(12)` | Workload Identification |
| `EntitledToDisposeParty` |  | |  |  | `CHAR(10)` | Party Entitled to Dispose |
| `EWMStorageType` |  | |  |  | `CHAR(4)` | Storage Type |
| `EWMStorageSection` |  | |  |  | `CHAR(4)` | Storage Section |
| `EWMStorageBin` |  | |  |  | `CHAR(18)` | Storage Bin |
| `WarehouseOrderCreationRule` |  | |  |  | `CHAR(4)` | Warehouse Order Creation Rule |
| `HandlingUnitDefectCode` |  | |  |  | `CHAR(4)` | Handling Unit Contains a Defect |
| `HandlingUnitContentInd` |  | |  |  | `CHAR(1)` | Indicator of HU Content Type |
| `PackagingMaterialType` |  | |  |  | `CHAR(4)` | Packaging Material Type |
| `HandlingUnitPackingGroup` |  | |  |  | `CHAR(4)` | Packing Group |
| `HandlingUnitStatus` |  | |  |  | `CHAR(1)` | Internal Status of a Handling Unit |
| `HandlingUnitTopLevelInd` |  | |  |  | `CHAR(1)` |  |
| `HandlingUnitBottomInd` |  | |  |  | `CHAR(1)` |  |
| `StatusProfile` |  | |  |  | `CHAR(8)` | Status Profile for Handling Unit User Status |
| `PackagingSpecificationUUID` |  | |  |  | `RAW(16)` | RAW16 |
| `PackagingSpecificationLevel` |  | |  |  | `CHAR(2)` | Sequence Number of a Level in a Packaging Specification |
| `HandlingUnitObjRefInd` |  | |  |  | `CHAR(1)` |  |
| `HazardousSubstanceIndicator` |  | |  |  | `CHAR(1)` | Hazardous Substance |
| `HandlingUnitLogicalPosition` |  | |  |  | `CHAR(2)` | Logical Position of Handling Unit |
| `DistrEquipmentLogicalPos` |  | |  |  | `CHAR(11)` | Actual Handling Unit Position |
| `HandlingUnitAutoCreationLevel` |  | |  |  | `CHAR(1)` | Display of Automatically Created Nested Pick-HUs |
| `EWMHandlingUnitExternalUUID` |  | |  |  | `RAW(16)` | Additional Unique External Identification of a Handling Unit |
| `EWMHghstLvlHandlingUnitUUID` |  | |  |  | `RAW(16)` | DO NOT USE: Highest-Level Handling Unit |
| `EWMHndlgUnitPickingCriteria` |  | |  |  | `CHAR(1)` | Apply Picking Criteria for Handling Units |
| `EWMPackingInstructionUUID` |  | |  |  | `RAW(16)` | RAW16 |
| `UnifiedPackageBuildingEngine` |  | |  |  | `CHAR(2)` | Unified Package Building Engine |
