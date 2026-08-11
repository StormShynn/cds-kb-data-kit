---
name: I_EWM_WAREHOUSEWAVEC_2
description: "Warehouse Wave - Cube"
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_WAREHOUSEWAVEC_2')/$value
semantic_en: "Warehouse Wave - Cube"
semantic_vi: "Warehouse Wave - Cube — CDS view giao diện dựa trên P_EWM_WarehouseWaveItem_2."
keywords:
  - "warehouse"
  - "wave"
  - "cube"
  - "item"
  - "number"
  - "items"
  - "task"
  - "creation"
  - "status"
tags:
  - SCM
  - component:SCM-EWM-WOP-2CL
  - interface-view
  - SCM-EWM
  - SCM-EWM-WOP
  - SCM-EWM-WOP-2CL
---
# I_EWM_WAREHOUSEWAVEC_2

**Warehouse Wave - Cube**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_WAREHOUSEWAVEC_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMWarehouse` | ✓ | | `_WaveItem` | `EWMWarehouse` | `CHAR(4)` | Warehouse Number/Warehouse Complex |
| `Wave` | ✓ | | `_WaveItem` | `Wave` | `NUMC(10)` | Numeric Character Field, Length 10 |
| `WaveItem` | ✓ | | `_WaveItem` | `WaveItem` | `NUMC(6)` | numc06 |
| `NumberOfWaveItems` |  | |  | `0` | `FLTP(16)` |  |
| `WarehouseTaskCreationStatus` |  | | `_WaveItem` | `WarehouseTaskCreationStatus` | `CHAR(1)` | Status of Warehouse Task Creation for Wave Item |
| `WarehouseTaskCreationStsName` |  | |  | `_WarehouseTaskStatusText[1:Language = $parameters.P_Language].WarehouseTaskStatusName` | `CHAR(60)` | Short Text for Fixed Values |
| `ItemWeight` |  | | `_WaveItem` | `ItemWeight` | `QUAN(15)` | Weight |
| `ItemWeightUnit` |  | | `_WaveItem` | `ItemWeightUnit` | `UNIT(3)` | Weight Unit |
| `ItemNetVolumeInDisplayUnit` |  | |  | `unit_conversion( quantity => _WaveItem.ItemVolume, source_unit => _WaveItem.ItemVolumeUnit, target_unit => whseControl.DisplayVolumeUnit, error_handling => 'SET_TO_NULL' )` | `QUAN(31)` |  |
| `DisplayWeightUnit` |  | |  |  | `UNIT(3)` | Weight Unit |
| `ItemVolume` |  | | `_WaveItem` | `ItemVolume` | `QUAN(15)` | Volume |
| `ItemVolumeUnit` |  | | `_WaveItem` | `ItemVolumeUnit` | `UNIT(3)` | Volume Unit |
| `ItemNetWeightInDisplayUnit` |  | |  | `unit_conversion( quantity => _WaveItem.ItemWeight, source_unit => _WaveItem.ItemWeightUnit, target_unit => whseControl.DisplayWeightUnit, error_handling => 'SET_TO_NULL' )` | `QUAN(31)` |  |
| `DisplayVolumeUnit` |  | |  |  | `UNIT(3)` | Volume Unit |
| `WaveItemConsumedCapacityValue` |  | | `_WaveItem` | `WaveItemConsumedCapacityValue` | `DEC(15)` | Capacity Consumption |
| `ShipToParty` |  | | `_WaveItem` | `ShipToParty` | `CHAR(10)` | Ship-To |
| `ProductName` |  | | `_WaveItem` | `ProductName` | `CHAR(40)` | Product |
| `ProductDescription` |  | |  | `_Material._Text[1:Language = $parameters.P_Language].ProductName` | `CHAR(40)` | Product Description |
| `Batch` |  | | `_WaveItem` | `Batch` | `CHAR(10)` | Batch |
| `EWMStockOwner` |  | | `_WaveItem` | `EWMStockOwner` | `CHAR(10)` | Owner |
| `EntitledToDisposeParty` |  | | `_WaveItem` | `EntitledToDisposeParty` | `CHAR(10)` | Party Entitled to Dispose |
| `ItemQuantity` |  | | `_WaveItem` | `ItemQuantity` | `QUAN(31)` | Wave Item Quantity |
| `ItemQuantityUnit` |  | | `_WaveItem` | `ItemQuantityUnit` | `UNIT(3)` | Unit of Measure |
| `ReferenceDocumentUUID` |  | | `_WaveItem` | `ReferenceDocumentUUID` | `RAW(16)` | Doc. Identification for Document-Related Stocks |
| `ReferenceDocumentItemUUID` |  | | `_WaveItem` | `ReferenceDocumentItemUUID` | `RAW(16)` | Document Item for Document-Related Stocks |
| `SplitNumber` |  | | `_WaveItem` | `SplitNumber` | `INT4(10)` | WM Split Number |
| `EWMRefDeliveryDocumentNumber` |  | | `_WaveItem` | `EWMRefDeliveryDocumentNumber` | `CHAR(35)` | Document Number for Document-Related Stock |
| `EWMRefDeliveryDocumentItem` |  | | `_WaveItem` | `EWMRefDeliveryDocumentItem` | `NUMC(10)` | Document Item for Document-Related Stock |
| `TwoStepPickingWaveItemCategory` |  | | `_WaveItem` | `TwoStepPickingWaveItemCategory` | `CHAR(1)` | Wave Item Category for Two-Step Picking |
| `WaveItemErrorStatus` |  | | `_WaveItem` | `WaveItemErrorStatus` | `CHAR(1)` | Error Status of Wave Items |
| `EWMRoute` |  | | `_WaveItem` | `EWMRoute` | `CHAR(10)` | Route Name (Identification) |
| `SalesOrder` |  | | `_WaveItem` | `SalesOrder` | `CHAR(10)` | Sales Order |
| `ActivityArea` |  | | `_WaveItem` | `ActivityArea` | `CHAR(4)` | Activity Area |
| `ActivityAreaName` |  | |  | `_ActivityArea._Text[1:Language = $parameters.P_Language].ActivityAreaName` | `CHAR(40)` | Description |
| `WarehouseProcessType` |  | | `_WaveItem` | `WarehouseProcessType` | `CHAR(4)` | Warehouse Process Type |
| `WarehouseProcessTypeName` |  | |  | `_WarehouseProcessType._Text[1:Language = $parameters.P_Language].WarehouseProcessTypeName` | `CHAR(40)` | Description |
| `WaveItemSimulationStatus` |  | | `_WaveItem` | `WaveItemSimulationStatus` | `CHAR(1)` | Simulation Status for Wave Item |
| `EWMReferenceDocumentCategory` |  | | `_WaveItem` | `EWMReferenceDocumentCategory` | `CHAR(3)` | Doc. Category for Doc. Reference and Doc.-Related Stock |
| `WaveTemplate` |  | | `_WaveItem` | `WaveTemplate` | `NUMC(10)` | Numeric Character Field, Length 10 |
| `WaveTemplateName` |  | |  | `_WaveItem._WaveTmpl._Text[1:Language = $parameters.P_Language].WaveTemplateName` | `CHAR(40)` | Description |
| `WaveName` |  | | `_WaveItem` | `WaveName` | `CHAR(40)` | Wave Description |
| `WaveType` |  | | `_WaveItem` | `WaveType` | `CHAR(4)` | Wave Type |
| `WaveTypeName` |  | |  | `_WaveType._WaveTypeText[1:Language = $parameters.P_Language].WaveTypeName` | `CHAR(40)` | Description |
| `WaveCategory` |  | | `_WaveItem` | `WaveCategory` | `CHAR(2)` | Wave Category |
| `WaveCategoryName` |  | |  | `_WaveCategory._WaveCategoryText[1:Language = $parameters.P_Language].WaveCategoryName` | `CHAR(40)` | Description |
| `WaveReleaseMethod` |  | | `_WaveItem` | `WaveReleaseMethod` | `CHAR(1)` | Wave Release Method |
| `WaveReleaseMethodName` |  | |  | `_WaveReleaseMethodText[1:Language = $parameters.P_Language].WaveReleaseMethodName` | `CHAR(60)` | Short Text for Fixed Values |
| `WaveTemplateOption` |  | | `_WaveItem` | `WaveTemplateOption` | `NUMC(4)` |  |
| `WaveFactoryCalendar` |  | | `_WaveItem` | `WaveFactoryCalendar` | `CHAR(2)` | Wave Calendar |
| `FactoryCalendarName` |  | |  | `_FactoryCalendar._Text[1:Language = $parameters.P_Language].FactoryCalendarName` | `CHAR(60)` | Factory Calendar Text |
| `WhseTskIsRlvtForTwoStpPicking` |  | | `_WaveItem` | `WhseTskIsRlvtForTwoStpPicking` | `CHAR(1)` | Relevance for Two-Step Picking |
| `WaveWarehouseTaskCreationMode` |  | | `_WaveItem` | `WaveWarehouseTaskCreationMode` | `CHAR(1)` | Mode |
| `WaveWhseTaskCrtnModeText` |  | |  | `_WarehouseModesText[1:Language = $parameters.P_Language].WaveWhseTaskCrtnModeText` | `CHAR(40)` | Description |
| `EWMStorageType` |  | | `_WaveItem` | `EWMStorageType` | `CHAR(4)` | Storage Type |
| `EWMStorageTypeName` |  | |  | `_StorageType._Text[1:Language = $parameters.P_Language].EWMStorageTypeName` | `CHAR(40)` | Description |
| `EWMStorageSection` |  | | `_WaveItem` | `EWMStorageSection` | `CHAR(4)` | Storage Section |
| `StorageSectionName` |  | |  | `_StorageSection._Text[1:Language = $parameters.P_Language].StorageSectionName` | `CHAR(40)` | Description |
| `SpclActyCatInWhse` |  | | `_WaveItem` | `SpclActyCatInWhse` | `CHAR(1)` | Special Activity Indicator |
| `WhseSpclActyCatText` |  | |  | `_WhseSpclActyCatText[1:Language = $parameters.P_Language].WhseSpclActyCatText` | `CHAR(40)` | Description |
| `EWMWaveReleasedByUser` |  | | `_WaveItem` | `EWMWaveReleasedByUser` | `CHAR(12)` | User Name |
| `TwoStepPickingDependency` |  | | `_WaveItem` | `TwoStepPickingDependency` | `CHAR(1)` | Two-Step Product-Dependent |
| `MaximumNumberOfWaveItems` |  | | `_WaveItem` | `MaximumNumberOfWaveItems` | `NUMC(6)` |  |
| `WaveSimulationStatus` |  | | `_WaveItem` | `WaveSimulationStatus` | `CHAR(1)` | Wave Simulation Status |
| `WaveCutoffUTCDateTime` |  | | `_WaveItem` | `WaveCutoffUTCDateTime` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `PlndWaveReleaseUTCDateTime` |  | | `_WaveItem` | `PlndWaveReleaseUTCDateTime` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `PlndPickCompltnUTCDateTime` |  | | `_WaveItem` | `PlndPickCompltnUTCDateTime` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `PlndPackCompletionUTCDateTime` |  | | `_WaveItem` | `PlndPackCompletionUTCDateTime` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `PlndStagingCompltnUTCDateTime` |  | | `_WaveItem` | `PlndStagingCompltnUTCDateTime` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `PlndLoadCompletionUTCDateTime` |  | | `_WaveItem` | `PlndLoadCompletionUTCDateTime` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WaveAssgmtIsPossibleAftWaveRel` |  | | `_WaveItem` | `WaveAssgmtIsPossibleAftWaveRel` | `CHAR(1)` | Wave Assignment Also Possible After Wave Release |
| `WaveCapacityProfile` |  | | `_WaveItem` | `WaveCapacityProfile` | `CHAR(2)` | Capacity Profile for Waves |
| `BehaviourDuringPickDenial` |  | | `_WaveItem` | `BehaviourDuringPickDenial` | `CHAR(1)` | Behavior During Bin Denial |
| `WaveCutoffWhseTmznDateTime` |  | | `_WaveItem` | `WaveCutoffWhseTmznDateTime` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WaveCutoffWhseTmznYear` |  | | `_WaveItem` | `WaveCutoffWhseTmznYear` | `NUMC(4)` |  |
| `WaveCutoffWhseTmznMonth` |  | | `_WaveItem` | `WaveCutoffWhseTmznMonth` | `NUMC(6)` |  |
| `WaveCutoffWhseTmznDate` |  | | `_WaveItem` | `WaveCutoffWhseTmznDate` | `DATS(8)` |  |
| `WaveCutoffWhseTmznHour` |  | | `_WaveItem` | `WaveCutoffWhseTmznHour` | `NUMC(10)` |  |
| `WaveCutoffWhseTmznTime` |  | | `_WaveItem` | `WaveCutoffWhseTmznTime` | `TIMS(6)` |  |
| `WavePlndRelWhseTmznDateTime` |  | | `_WaveItem` | `WavePlndRelWhseTmznDateTime` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WavePlndRelWhseTmznYear` |  | | `_WaveItem` | `WavePlndRelWhseTmznYear` | `NUMC(4)` |  |
| `WavePlndRelWhseTmznMonth` |  | | `_WaveItem` | `WavePlndRelWhseTmznMonth` | `NUMC(6)` |  |
| `WavePlndRelWhseTmznDate` |  | | `_WaveItem` | `WavePlndRelWhseTmznDate` | `DATS(8)` |  |
| `WavePlndRelWhseTmznHour` |  | | `_WaveItem` | `WavePlndRelWhseTmznHour` | `NUMC(10)` |  |
| `WavePlndRelWhseTmznTime` |  | | `_WaveItem` | `WavePlndRelWhseTmznTime` | `TIMS(6)` |  |
| `PlndPickCmpltWhseTmznDateTime` |  | | `_WaveItem` | `PlndPickCmpltWhseTmznDateTime` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `PlndPickCmpltWhseTmznYear` |  | | `_WaveItem` | `PlndPickCmpltWhseTmznYear` | `NUMC(4)` |  |
| `PlndPickCmpltWhseTmznMonth` |  | | `_WaveItem` | `PlndPickCmpltWhseTmznMonth` | `NUMC(6)` |  |
| `PlndPickCmpltWhseTmznDate` |  | | `_WaveItem` | `PlndPickCmpltWhseTmznDate` | `DATS(8)` |  |
| `PlndPickCmpltWhseTmznHour` |  | | `_WaveItem` | `PlndPickCmpltWhseTmznHour` | `NUMC(10)` |  |
| `PlndPickCmpltWhseTmznTime` |  | | `_WaveItem` | `PlndPickCmpltWhseTmznTime` | `TIMS(6)` |  |
| `PlndPackCmpltWhseTmznDateTime` |  | | `_WaveItem` | `PlndPackCmpltWhseTmznDateTime` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `PlndPackCmpltWhseTmznYear` |  | | `_WaveItem` | `PlndPackCmpltWhseTmznYear` | `NUMC(4)` |  |
| `PlndPackCmpltWhseTmznMonth` |  | | `_WaveItem` | `PlndPackCmpltWhseTmznMonth` | `NUMC(6)` |  |
| `PlndPackCmpltWhseTmznDate` |  | | `_WaveItem` | `PlndPackCmpltWhseTmznDate` | `DATS(8)` |  |
| `PlndPackCmpltWhseTmznHour` |  | | `_WaveItem` | `PlndPackCmpltWhseTmznHour` | `NUMC(10)` |  |
| `PlndPackCmpltWhseTmznTime` |  | | `_WaveItem` | `PlndPackCmpltWhseTmznTime` | `TIMS(6)` |  |
| `PlndStggCmpltWhseTmznDateTime` |  | | `_WaveItem` | `PlndStggCmpltWhseTmznDateTime` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `PlndStggCmpltWhseTmznYear` |  | | `_WaveItem` | `PlndStggCmpltWhseTmznYear` | `NUMC(4)` |  |
| `PlndStggCmpltWhseTmznMonth` |  | | `_WaveItem` | `PlndStggCmpltWhseTmznMonth` | `NUMC(6)` |  |
| `PlndStggCmpltWhseTmznDate` |  | | `_WaveItem` | `PlndStggCmpltWhseTmznDate` | `DATS(8)` |  |
| `PlndStggCmpltWhseTmznHour` |  | | `_WaveItem` | `PlndStggCmpltWhseTmznHour` | `NUMC(10)` |  |
| `PlndStggCmpltWhseTmznTime` |  | | `_WaveItem` | `PlndStggCmpltWhseTmznTime` | `TIMS(6)` |  |
| `WaveCompletionWhseTmznDateTime` |  | | `_WaveItem` | `WaveCompletionWhseTmznDateTime` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WaveCompletionWhseTmznYear` |  | | `_WaveItem` | `WaveCompletionWhseTmznYear` | `NUMC(4)` |  |
| `WaveCompletionWhseTmznMonth` |  | | `_WaveItem` | `WaveCompletionWhseTmznMonth` | `NUMC(6)` |  |
| `WaveCompletionWhseTmznDate` |  | | `_WaveItem` | `WaveCompletionWhseTmznDate` | `DATS(8)` |  |
| `WaveCompletionWhseTmznHour` |  | | `_WaveItem` | `WaveCompletionWhseTmznHour` | `NUMC(10)` |  |
| `WaveCompletionWhseTmznTime` |  | | `_WaveItem` | `WaveCompletionWhseTmznTime` | `TIMS(6)` |  |
| `WaveActualReldWhseTmznDateTime` |  | | `_WaveItem` | `WaveActualReldWhseTmznDateTime` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WaveActualReldWhseTmznYear` |  | | `_WaveItem` | `WaveActualReldWhseTmznYear` | `NUMC(4)` |  |
| `WaveActualReldWhseTmznMonth` |  | | `_WaveItem` | `WaveActualReldWhseTmznMonth` | `NUMC(6)` |  |
| `WaveActualReldWhseTmznDate` |  | | `_WaveItem` | `WaveActualReldWhseTmznDate` | `DATS(8)` |  |
| `WaveActualReldWhseTmznHour` |  | | `_WaveItem` | `WaveActualReldWhseTmznHour` | `NUMC(10)` |  |
| `WaveActualReldWhseTmznTime` |  | | `_WaveItem` | `WaveActualReldWhseTmznTime` | `TIMS(6)` |  |
| `WaveIsReleasedManually` |  | | `_WaveItem` | `WaveIsReleasedManually` | `CHAR(1)` | Wave Was Released Manually |
| `WaveStatus` |  | | `_WaveItem` | `WaveStatus` | `CHAR(1)` | Header Status of Wave |
| `WaveStatusName` |  | |  | `_WaveStatusText[1:Language = $parameters.P_Language].WaveStatusName` | `CHAR(60)` | Short Text for Fixed Values |
| `WaveActlReleasedUTCDateTime` |  | | `_WaveItem` | `WaveActlReleasedUTCDateTime` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `_Warehouse` | | ✓ | | | | |
| `_Material` | | ✓ | | | | |
| `_WaveReleaseMethodText` | | ✓ | | | | |
| `_WaveStatusText` | | ✓ | | | | |
| `_WaveType` | | ✓ | | | | |
| `_WaveType_3` | | ✓ | | | | |
| `_WaveCategory` | | ✓ | | | | |
| `_ActivityArea` | | ✓ | | | | |
| `_WarehouseProcessType` | | ✓ | | | | |
| `_StorageType` | | ✓ | | | | |
| `_StorageSection` | | ✓ | | | | |
| `_FactoryCalendar` | | ✓ | | | | |
| `_WarehouseModesText` | | ✓ | | | | |
| `_WhseSpclActyCatText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Warehouse` | `I_EWM_WarehouseNumber_2` | [0..1] |
| `_Material` | `I_Product` | [0..1] |
| `_WaveReleaseMethodText` | `I_EWM_WaveReleaseMethodT` | [0..*] |
| `_WaveStatusText` | `I_EWM_WaveStatusText` | [0..*] |
| `_WaveType` | `I_EWM_WaveType_2` | [0..1] |
| `_WaveType_3` | `I_EWM_WaveType_3` | [0..1] |
| `_WaveCategory` | `I_EWM_WaveCategory_2` | [0..1] |
| `_WarehouseTaskStatusText` | `I_EWM_WarehouseTaskStatusText` | [0..*] |
| `_ActivityArea` | `I_EWM_ActivityArea_2` | [0..1] |
| `_WarehouseProcessType` | `I_EWM_WrhsProcType_2` | [0..1] |
| `_StorageType` | `I_EWM_StorageType_2` | [0..1] |
| `_StorageSection` | `I_EWM_StorageSection_2` | [0..1] |
| `_FactoryCalendar` | `I_FactoryCalendar` | [0..1] |
| `_WarehouseModesText` | `I_EWM_WhseModesText_2` | [0..*] |
| `_WhseSpclActyCatText` | `I_EWM_WhseSpclActyCatText_2` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_WAREHOUSEWAVEC_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_WAREHOUSEWAVEC_2')/$value)*

```abap
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@EndUserText.label: 'Warehouse Wave - Cube'

@Analytics: { dataCategory: #CUBE }
@Analytics.internalName:#LOCAL

@Metadata.ignorePropagatedAnnotations:true

@Metadata.allowExtensions:true
@VDM.viewType:#COMPOSITE

@ObjectModel.compositionRoot: true

@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.sizeCategory: #XL

@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER,
                                      #SQL_DATA_SOURCE,                                      
                                      #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE

define view entity I_EWM_WarehouseWaveC_2
  with parameters
    @Environment.systemField: #SYSTEM_LANGUAGE
    @Consumption.hidden
    P_Language : /scwm/lang
  as select from    P_EWM_WarehouseWaveItem_2 as _WaveItem
    left outer to many join I_EWM_WarehouseControl_2  as whseControl on _WaveItem.EWMWarehouse = whseControl.EWMWarehouse
  association [0..1] to I_EWM_WarehouseNumber_2         as _Warehouse               on  $projection.EWMWarehouse = _Warehouse.EWMWarehouse
  association [0..1] to I_Product                     as _Material                on  $projection.ProductName            = _Material.Product
                                                                                  and _Material.ProdSupChnMgmtUUID22 is not initial
  association [0..*] to I_EWM_WaveReleaseMethodT      as _WaveReleaseMethodText   on  $projection.WaveReleaseMethod = _WaveReleaseMethodText.WaveReleaseMethod
  association [0..*] to I_EWM_WaveStatusText          as _WaveStatusText          on  $projection.WaveStatus = _WaveStatusText.WaveStatus
  association [0..1] to I_EWM_WaveType_2                as _WaveType                on  $projection.EWMWarehouse = _WaveType.EWMWarehouse
                                                                                  and $projection.WaveType  = _WaveType.WaveType
  association [0..1] to I_EWM_WaveType_3                as _WaveType_3              on  $projection.EWMWarehouse = _WaveType_3.EWMWarehouse
                                                                                  and $projection.WaveType  = _WaveType_3.EWMWaveType                                                                                
  association [0..1] to I_EWM_WaveCategory_2            as _WaveCategory            on  $projection.EWMWarehouse    = _WaveCategory.EWMWarehouse
                                                                                  and $projection.WaveCategory = _WaveCategory.WaveCategory

  association [0..*] to I_EWM_WarehouseTaskStatusText as _WarehouseTaskStatusText on  $projection.WarehouseTaskCreationStatus = _WarehouseTaskStatusText.WarehouseTaskStatus

  association [0..1] to I_EWM_ActivityArea_2            as _ActivityArea            on  $projection.ActivityArea = _ActivityArea.ActivityArea
                                                                                  and $projection.EWMWarehouse    = _ActivityArea.EWMWarehouse

  association [0..1] to I_EWM_WrhsProcType_2            as _WarehouseProcessType    on  $projection.EWMWarehouse            = _WarehouseProcessType.EWMWarehouse
                                                                                  and $projection.WarehouseProcessType = _WarehouseProcessType.WarehouseProcessType

  association [0..1] to I_EWM_StorageType_2             as _StorageType             on  $projection.EWMWarehouse   = _StorageType.EWMWarehouse
                                                                                  and $projection.EWMStorageType = _StorageType.EWMStorageType

  association [0..1] to I_EWM_StorageSection_2          as _StorageSection          on  $projection.EWMWarehouse      = _StorageSection.EWMWarehouse
                                                                                  and $projection.EWMStorageType    = _StorageSection.EWMStorageType
                                                                                  and $projection.EWMStorageSection = _StorageSection.EWMStorageSection

  association [0..1] to I_FactoryCalendar             as _FactoryCalendar         on  $projection.WaveFactoryCalendar = _FactoryCalendar.FactoryCalendar

  association [0..*] to I_EWM_WhseModesText_2           as _WarehouseModesText      on  $projection.EWMWarehouse                     = _WarehouseModesText.EWMWarehouse
                                                                                  and $projection.WaveWarehouseTaskCreationMode = _WarehouseModesText.WaveWarehouseTaskCreationMode

  association [0..*] to I_EWM_WhseSpclActyCatText_2     as _WhseSpclActyCatText     on  $projection.EWMWarehouse         = _WhseSpclActyCatText.EWMWarehouse
                                                                                  and $projection.SpclActyCatInWhse = _WhseSpclActyCatText.SpclActyCatInWhse

{

      @ObjectModel.foreignKey.association: '_Warehouse'
  key _WaveItem.EWMWarehouse ,

      @EndUserText.label: 'Wave ID'
  key _WaveItem.Wave,

      @EndUserText.label: 'Wave Item ID'
  key _WaveItem.WaveItem,

      @DefaultAggregation: #SUM
      1.0                                                                                       as NumberOfWaveItems,

      //Item View Fields
      _WaveItem.WarehouseTaskCreationStatus,

      @EndUserText.label: 'Description of Warehouse Task Status'
      _WarehouseTaskStatusText[1:Language = $parameters.P_Language].WarehouseTaskStatusName     as WarehouseTaskCreationStsName,

      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      //      @AnalyticsDetails.query.decimals: 3
      _WaveItem.ItemWeight                                                                                as ItemWeight,

      //      @Semantics.quantity.unitOfMeasure: 'true'
      _WaveItem.ItemWeightUnit                                                                            as ItemWeightUnit,

      -- Volume in display unit
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'DisplayVolumeUnit'} }
      unit_conversion( quantity => _WaveItem.ItemVolume,
                      source_unit => _WaveItem.ItemVolumeUnit,
                      target_unit => whseControl.DisplayVolumeUnit,
                      error_handling => 'SET_TO_NULL' )                                         as ItemNetVolumeInDisplayUnit,
      whseControl.DisplayWeightUnit,

      @DefaultAggregation: #SUM
      @Semantics: { quantity.unitOfMeasure: 'ItemVolumeUnit' }
      //      @AnalyticsDetails.query.decimals: 3
      _WaveItem.ItemVolume                                                                                as ItemVolume,

      //      @Semantics.quantity.unitOfMeasure: 'true'
      _WaveItem.ItemVolumeUnit                                                                            as ItemVolumeUnit,

      --- Weight in display unit
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'DisplayWeightUnit'
      unit_conversion( quantity => _WaveItem.ItemWeight,
                      source_unit => _WaveItem.ItemWeightUnit,
                      target_unit => whseControl.DisplayWeightUnit,
                      error_handling => 'SET_TO_NULL' )                                         as ItemNetWeightInDisplayUnit,
      whseControl.DisplayVolumeUnit,

      _WaveItem.WaveItemConsumedCapacityValue,

      _WaveItem.ShipToParty,
      _WaveItem.ProductName,
      _Material._Text[1:Language = $parameters.P_Language].ProductName                          as ProductDescription,

      _WaveItem.Batch,
      _WaveItem.EWMStockOwner,
      _WaveItem.EntitledToDisposeParty,

      @DefaultAggregation: #SUM
      @Semantics: { quantity.unitOfMeasure: 'ItemQuantityUnit' }
      _WaveItem.ItemQuantity                                                                              as ItemQuantity,

      _WaveItem.ItemQuantityUnit                                                                          as ItemQuantityUnit,

      _WaveItem.ReferenceDocumentUUID,
      _WaveItem.ReferenceDocumentItemUUID,
      _WaveItem.SplitNumber,
      _WaveItem.EWMRefDeliveryDocumentNumber,
      _WaveItem.EWMRefDeliveryDocumentItem,
      
      _WaveItem.TwoStepPickingWaveItemCategory,
      _WaveItem.WaveItemErrorStatus,
      _WaveItem.EWMRoute,
      _WaveItem.SalesOrder,
      _WaveItem.ActivityArea,
      _ActivityArea._Text[1:Language = $parameters.P_Language].ActivityAreaName                 as ActivityAreaName,

      _WaveItem.WarehouseProcessType,

      _WarehouseProcessType._Text[1:Language = $parameters.P_Language].WarehouseProcessTypeName as WarehouseProcessTypeName,

      _WaveItem.WaveItemSimulationStatus,

      _WaveItem.EWMReferenceDocumentCategory,

      _WaveItem.WaveTemplate,
      _WaveItem._WaveTmpl._Text[1:Language = $parameters.P_Language].WaveTemplateName                     as WaveTemplateName,

      _WaveItem.WaveName,

      @ObjectModel.foreignKey.association: '_WaveType'
      _WaveItem.WaveType,

      _WaveType._WaveTypeText[1:Language = $parameters.P_Language].WaveTypeName                 as WaveTypeName,
      
      

      @ObjectModel.foreignKey.association: '_WaveCategory'
      _WaveItem.WaveCategory,

      _WaveCategory._WaveCategoryText[1:Language = $parameters.P_Language].WaveCategoryName     as WaveCategoryName,

      _WaveItem.WaveReleaseMethod,



      _WaveReleaseMethodText[1:Language = $parameters.P_Language].WaveReleaseMethodName         as WaveReleaseMethodName,

      _WaveItem.WaveTemplateOption,
      _WaveItem.WaveFactoryCalendar,

      _FactoryCalendar._Text[1:Language = $parameters.P_Language].FactoryCalendarName           as FactoryCalendarName,

      @Semantics.booleanIndicator
      _WaveItem.WhseTskIsRlvtForTwoStpPicking,
      _WaveItem.WaveWarehouseTaskCreationMode,

      _WarehouseModesText[1:Language = $parameters.P_Language].WaveWhseTaskCrtnModeText         as WaveWhseTaskCrtnModeText,
      _WaveItem.EWMStorageType,
      _StorageType._Text[1:Language = $parameters.P_Language].EWMStorageTypeName                   as EWMStorageTypeName,
      
      _WaveItem.EWMStorageSection,
      _StorageSection._Text[1:Language = $parameters.P_Language].StorageSectionName             as StorageSectionName,

      _WaveItem.SpclActyCatInWhse,

      _WhseSpclActyCatText[1:Language = $parameters.P_Language].WhseSpclActyCatText             as WhseSpclActyCatText,
      _WaveItem.EWMWaveReleasedByUser,
      
      _WaveItem.TwoStepPickingDependency,
      _WaveItem.MaximumNumberOfWaveItems,
      _WaveItem.WaveSimulationStatus,

      _WaveItem.WaveCutoffUTCDateTime,
      _WaveItem.PlndWaveReleaseUTCDateTime,
      _WaveItem.PlndPickCompltnUTCDateTime,
      _WaveItem.PlndPackCompletionUTCDateTime,
      _WaveItem.PlndStagingCompltnUTCDateTime,
      _WaveItem.PlndLoadCompletionUTCDateTime,
      _WaveItem.WaveAssgmtIsPossibleAftWaveRel,
      _WaveItem.WaveCapacityProfile,
      _WaveItem.BehaviourDuringPickDenial,

      _WaveItem.WaveCutoffWhseTmznDateTime,
      _WaveItem.WaveCutoffWhseTmznYear,
      _WaveItem.WaveCutoffWhseTmznMonth,
      _WaveItem.WaveCutoffWhseTmznDate,
      _WaveItem.WaveCutoffWhseTmznHour,
      _WaveItem.WaveCutoffWhseTmznTime,

      _WaveItem.WavePlndRelWhseTmznDateTime, // ->C
      _WaveItem.WavePlndRelWhseTmznYear,
      _WaveItem.WavePlndRelWhseTmznMonth,
      _WaveItem.WavePlndRelWhseTmznDate,
      _WaveItem.WavePlndRelWhseTmznHour,
      _WaveItem.WavePlndRelWhseTmznTime,

      _WaveItem.PlndPickCmpltWhseTmznDateTime,
      _WaveItem.PlndPickCmpltWhseTmznYear,
      _WaveItem.PlndPickCmpltWhseTmznMonth,
      _WaveItem.PlndPickCmpltWhseTmznDate,
      _WaveItem.PlndPickCmpltWhseTmznHour,
      _WaveItem.PlndPickCmpltWhseTmznTime,

      _WaveItem.PlndPackCmpltWhseTmznDateTime,
      _WaveItem.PlndPackCmpltWhseTmznYear,
      _WaveItem.PlndPackCmpltWhseTmznMonth,
      _WaveItem.PlndPackCmpltWhseTmznDate,
      _WaveItem.PlndPackCmpltWhseTmznHour,
      _WaveItem.PlndPackCmpltWhseTmznTime,

      _WaveItem.PlndStggCmpltWhseTmznDateTime, //
      _WaveItem.PlndStggCmpltWhseTmznYear,
      _WaveItem.PlndStggCmpltWhseTmznMonth,
      _WaveItem.PlndStggCmpltWhseTmznDate,
      _WaveItem.PlndStggCmpltWhseTmznHour,
      _WaveItem.PlndStggCmpltWhseTmznTime,

      _WaveItem.WaveCompletionWhseTmznDateTime, // ->C
      _WaveItem.WaveCompletionWhseTmznYear,
      _WaveItem.WaveCompletionWhseTmznMonth,
      _WaveItem.WaveCompletionWhseTmznDate,
      _WaveItem.WaveCompletionWhseTmznHour,
      _WaveItem.WaveCompletionWhseTmznTime,


      _WaveItem.WaveActualReldWhseTmznDateTime,
      _WaveItem.WaveActualReldWhseTmznYear,
      _WaveItem.WaveActualReldWhseTmznMonth,
      _WaveItem.WaveActualReldWhseTmznDate,
      _WaveItem.WaveActualReldWhseTmznHour,
      _WaveItem.WaveActualReldWhseTmznTime,



      _WaveItem.WaveIsReleasedManually,
      _WaveItem.WaveStatus,
      _WaveStatusText[1:Language = $parameters.P_Language].WaveStatusName                       as WaveStatusName,
      _WaveItem.WaveActlReleasedUTCDateTime,

      _Warehouse, 
      _Material,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_WaveType_3'
      _WaveType,
      _WaveType_3,
      _WaveCategory,
      _WaveReleaseMethodText,
      _WaveStatusText,
      _ActivityArea,
      _WarehouseProcessType,
      _StorageType,
      _StorageSection,
      _FactoryCalendar,
      _WarehouseModesText,
      _WhseSpclActyCatText
}
```
