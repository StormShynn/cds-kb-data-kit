---
name: C_EWM_WAREHOUSEWAVEQ_2
description: Wave - Query
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EWM_WAREHOUSEWAVEQ_2')/$value
semantic_en: Wave - Query
tags:
  - SCM
  - component:SCM-EWM-WOP-2CL
  - consumption-view
  - SCM-EWM
  - SCM-EWM-WOP
  - SCM-EWM-WOP-2CL
  - metadata-only
---
# C_EWM_WAREHOUSEWAVEQ_2

**Wave - Query**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EWM_WAREHOUSEWAVEQ_2')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `EWMWarehouse` | `CHAR(4)` | Warehouse Number/Warehouse Complex |
| `Wave` | `NUMC(10)` | Numeric Character Field, Length 10 |
| `WaveItem` | `NUMC(6)` | numc06 |
| `WarehouseTaskCreationStatus` | `CHAR(1)` | Status of Warehouse Task Creation for Wave Item |
| `WarehouseTaskCreationStsName` | `CHAR(60)` | Short Text for Fixed Values |
| `WaveItemConsumedCapacityValue` | `DEC(15)` | Capacity Consumption |
| `ShipToParty` | `CHAR(10)` | Ship-To |
| `ProductName` | `CHAR(40)` | Product |
| `ProductDescription` | `CHAR(40)` | Product Description |
| `Batch` | `CHAR(10)` | Batch |
| `EWMStockOwner` | `CHAR(10)` | Owner |
| `EntitledToDisposeParty` | `CHAR(10)` | Party Entitled to Dispose |
| `EWMReferenceDocumentCategory` | `CHAR(3)` | Doc. Category for Doc. Reference and Doc.-Related Stock |
| `WaveTemplate` | `NUMC(10)` | Numeric Character Field, Length 10 |
| `WaveTemplateName` | `CHAR(40)` | Description |
| `WaveName` | `CHAR(40)` | Wave Description |
| `WaveType` | `CHAR(4)` | Wave Type |
| `WaveTypeName` | `CHAR(40)` | Description |
| `WaveCategory` | `CHAR(2)` | Wave Category |
| `WaveCategoryName` | `CHAR(40)` | Description |
| `WaveStatus` | `CHAR(1)` | Header Status of Wave |
| `WaveStatusName` | `CHAR(60)` | Short Text for Fixed Values |
| `WaveReleaseMethod` | `CHAR(1)` | Wave Release Method |
| `WaveReleaseMethodName` | `CHAR(60)` | Short Text for Fixed Values |
| `SplitNumber` | `INT4(10)` | WM Split Number |
| `EWMRefDeliveryDocumentNumber` | `CHAR(35)` | Document Number for Document-Related Stock |
| `EWMRefDeliveryDocumentItem` | `NUMC(10)` | Document Item for Document-Related Stock |
| `TwoStepPickingWaveItemCategory` | `CHAR(1)` | Wave Item Category for Two-Step Picking |
| `WaveItemErrorStatus` | `CHAR(1)` | Error Status of Wave Items |
| `EWMRoute` | `CHAR(10)` | Route Name (Identification) |
| `SalesOrder` | `CHAR(10)` | Sales Order |
| `ActivityArea` | `CHAR(4)` | Activity Area |
| `ActivityAreaName` | `CHAR(40)` | Description |
| `WarehouseProcessType` | `CHAR(4)` | Warehouse Process Type |
| `WarehouseProcessTypeName` | `CHAR(40)` | Description |
| `WaveItemSimulationStatus` | `CHAR(1)` | Simulation Status for Wave Item |
| `WaveTemplateOption` | `NUMC(4)` |  |
| `WaveFactoryCalendar` | `CHAR(2)` | Wave Calendar |
| `FactoryCalendarName` | `CHAR(60)` | Factory Calendar Text |
| `WhseTskIsRlvtForTwoStpPicking` | `CHAR(1)` | Relevance for Two-Step Picking |
| `WaveWarehouseTaskCreationMode` | `CHAR(1)` | Mode |
| `WaveWhseTaskCrtnModeText` | `CHAR(40)` | Description |
| `EWMStorageType` | `CHAR(4)` | Storage Type |
| `EWMStorageTypeName` | `CHAR(40)` | Description |
| `EWMStorageSection` | `CHAR(4)` | Storage Section |
| `StorageSectionName` | `CHAR(40)` | Description |
| `SpclActyCatInWhse` | `CHAR(1)` | Special Activity Indicator |
| `WhseSpclActyCatText` | `CHAR(40)` | Description |
| `EWMWaveReleasedByUser` | `CHAR(12)` | User Name |
| `TwoStepPickingDependency` | `CHAR(1)` | Two-Step Product-Dependent |
| `MaximumNumberOfWaveItems` | `NUMC(6)` |  |
| `WaveSimulationStatus` | `CHAR(1)` | Wave Simulation Status |
| `WaveAssgmtIsPossibleAftWaveRel` | `CHAR(1)` | Wave Assignment Also Possible After Wave Release |
| `WaveCapacityProfile` | `CHAR(2)` | Capacity Profile for Waves |
| `BehaviourDuringPickDenial` | `CHAR(1)` | Behavior During Bin Denial |
| `WaveCutoffWhseTmznDateTime` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WaveCutoffWhseTmznYear` | `NUMC(4)` |  |
| `WaveCutoffWhseTmznMonth` | `NUMC(6)` |  |
| `WaveCutoffWhseTmznDate` | `DATS(8)` |  |
| `WaveCutoffWhseTmznHour` | `NUMC(10)` |  |
| `WaveCutoffWhseTmznTime` | `TIMS(6)` |  |
| `WavePlndRelWhseTmznDateTime` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WavePlndRelWhseTmznYear` | `NUMC(4)` |  |
| `WavePlndRelWhseTmznMonth` | `NUMC(6)` |  |
| `WavePlndRelWhseTmznDate` | `DATS(8)` |  |
| `WavePlndRelWhseTmznHour` | `NUMC(10)` |  |
| `WavePlndRelWhseTmznTime` | `TIMS(6)` |  |
| `PlndPickCmpltWhseTmznDateTime` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `PlndPickCmpltWhseTmznYear` | `NUMC(4)` |  |
| `PlndPickCmpltWhseTmznMonth` | `NUMC(6)` |  |
| `PlndPickCmpltWhseTmznDate` | `DATS(8)` |  |
| `PlndPickCmpltWhseTmznHour` | `NUMC(10)` |  |
| `PlndPickCmpltWhseTmznTime` | `TIMS(6)` |  |
| `PlndPackCmpltWhseTmznDateTime` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `PlndPackCmpltWhseTmznYear` | `NUMC(4)` |  |
| `PlndPackCmpltWhseTmznMonth` | `NUMC(6)` |  |
| `PlndPackCmpltWhseTmznDate` | `DATS(8)` |  |
| `PlndPackCmpltWhseTmznHour` | `NUMC(10)` |  |
| `PlndPackCmpltWhseTmznTime` | `TIMS(6)` |  |
| `PlndStggCmpltWhseTmznDateTime` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `PlndStggCmpltWhseTmznYear` | `NUMC(4)` |  |
| `PlndStggCmpltWhseTmznMonth` | `NUMC(6)` |  |
| `PlndStggCmpltWhseTmznDate` | `DATS(8)` |  |
| `PlndStggCmpltWhseTmznHour` | `NUMC(10)` |  |
| `PlndStggCmpltWhseTmznTime` | `TIMS(6)` |  |
| `WaveCompletionWhseTmznDateTime` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WaveCompletionWhseTmznYear` | `NUMC(4)` |  |
| `WaveCompletionWhseTmznMonth` | `NUMC(6)` |  |
| `WaveCompletionWhseTmznDate` | `DATS(8)` |  |
| `WaveCompletionWhseTmznHour` | `NUMC(10)` |  |
| `WaveCompletionWhseTmznTime` | `TIMS(6)` |  |
| `WaveActualReldWhseTmznDateTime` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WaveActualReldWhseTmznYear` | `NUMC(4)` |  |
| `WaveActualReldWhseTmznMonth` | `NUMC(6)` |  |
| `WaveActualReldWhseTmznDate` | `DATS(8)` |  |
| `WaveActualReldWhseTmznHour` | `NUMC(10)` |  |
| `WaveActualReldWhseTmznTime` | `TIMS(6)` |  |
| `WaveIsReleasedManually` | `CHAR(1)` | Wave Was Released Manually |
| `ItemWeight` | `QUAN(15)` | Weight |
| `ItemWeightUnit` | `UNIT(3)` | Weight Unit |
| `ItemVolume` | `QUAN(15)` | Volume |
| `ItemVolumeUnit` | `UNIT(3)` | Volume Unit |
| `ItemNetWeightInDisplayUnit` | `QUAN(31)` |  |
| `DisplayWeightUnit` | `UNIT(3)` | Weight Unit |
| `ItemNetVolumeInDisplayUnit` | `QUAN(31)` |  |
| `DisplayVolumeUnit` | `UNIT(3)` | Volume Unit |
| `ItemQuantity` | `QUAN(31)` | Wave Item Quantity |
| `ItemQuantityUnit` | `UNIT(3)` | Unit of Measure |
| `NumberOfWaves` | `INT1(3)` |  |
| `NumberOfWaveItems` | `FLTP(16)` |  |
