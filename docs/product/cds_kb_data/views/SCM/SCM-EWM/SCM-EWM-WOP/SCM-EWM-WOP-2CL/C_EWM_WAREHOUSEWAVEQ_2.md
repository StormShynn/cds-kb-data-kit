---
name: C_EWM_WAREHOUSEWAVEQ_2
description: "Wave - Query"
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EWM_WAREHOUSEWAVEQ_2')/$value
semantic_en: "Wave - Query"
semantic_vi: "Wave - Query — CDS view tiêu dùng dựa trên I_EWM_WarehouseWaveC_2."
keywords:
  - "wave"
  - "query"
  - "warehouse"
  - "item"
  - "task"
  - "creation"
  - "status"
  - "name"
tags:
  - SCM
  - component:SCM-EWM-WOP-2CL
  - consumption-view
  - SCM-EWM
  - SCM-EWM-WOP
  - SCM-EWM-WOP-2CL
---
# C_EWM_WAREHOUSEWAVEQ_2

**Wave - Query**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EWM_WAREHOUSEWAVEQ_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMWarehouse` | ✓ | |  |  | `CHAR(4)` | Warehouse Number/Warehouse Complex |
| `Wave` | ✓ | |  |  | `NUMC(10)` | Numeric Character Field, Length 10 |
| `WaveItem` | ✓ | |  |  | `NUMC(6)` | numc06 |
| `WarehouseTaskCreationStatus` |  | |  |  | `CHAR(1)` | Status of Warehouse Task Creation for Wave Item |
| `WarehouseTaskCreationStsName` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `WaveItemConsumedCapacityValue` |  | |  |  | `DEC(15)` | Capacity Consumption |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-To |
| `ProductName` |  | |  |  | `CHAR(40)` | Product |
| `ProductDescription` |  | |  |  | `CHAR(40)` | Product Description |
| `Batch` |  | |  |  | `CHAR(10)` | Batch |
| `EWMStockOwner` |  | |  |  | `CHAR(10)` | Owner |
| `EntitledToDisposeParty` |  | |  |  | `CHAR(10)` | Party Entitled to Dispose |
| `EWMReferenceDocumentCategory` |  | |  |  | `CHAR(3)` | Doc. Category for Doc. Reference and Doc.-Related Stock |
| `WaveTemplate` |  | |  |  | `NUMC(10)` | Numeric Character Field, Length 10 |
| `WaveTemplateName` |  | |  |  | `CHAR(40)` | Description |
| `WaveName` |  | |  |  | `CHAR(40)` | Wave Description |
| `WaveType` |  | |  |  | `CHAR(4)` | Wave Type |
| `WaveTypeName` |  | |  |  | `CHAR(40)` | Description |
| `WaveCategory` |  | |  |  | `CHAR(2)` | Wave Category |
| `WaveCategoryName` |  | |  |  | `CHAR(40)` | Description |
| `WaveStatus` |  | |  |  | `CHAR(1)` | Header Status of Wave |
| `WaveStatusName` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `WaveReleaseMethod` |  | |  |  | `CHAR(1)` | Wave Release Method |
| `WaveReleaseMethodName` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `SplitNumber` |  | |  |  | `INT4(10)` | WM Split Number |
| `EWMRefDeliveryDocumentNumber` |  | |  |  | `CHAR(35)` | Document Number for Document-Related Stock |
| `EWMRefDeliveryDocumentItem` |  | |  |  | `NUMC(10)` | Document Item for Document-Related Stock |
| `TwoStepPickingWaveItemCategory` |  | |  |  | `CHAR(1)` | Wave Item Category for Two-Step Picking |
| `WaveItemErrorStatus` |  | |  |  | `CHAR(1)` | Error Status of Wave Items |
| `EWMRoute` |  | |  |  | `CHAR(10)` | Route Name (Identification) |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Order |
| `ActivityArea` |  | |  |  | `CHAR(4)` | Activity Area |
| `ActivityAreaName` |  | |  |  | `CHAR(40)` | Description |
| `WarehouseProcessType` |  | |  |  | `CHAR(4)` | Warehouse Process Type |
| `WarehouseProcessTypeName` |  | |  |  | `CHAR(40)` | Description |
| `WaveItemSimulationStatus` |  | |  |  | `CHAR(1)` | Simulation Status for Wave Item |
| `WaveTemplateOption` |  | |  |  | `NUMC(4)` |  |
| `WaveFactoryCalendar` |  | |  |  | `CHAR(2)` | Wave Calendar |
| `FactoryCalendarName` |  | |  |  | `CHAR(60)` | Factory Calendar Text |
| `WhseTskIsRlvtForTwoStpPicking` |  | |  |  | `CHAR(1)` | Relevance for Two-Step Picking |
| `WaveWarehouseTaskCreationMode` |  | |  |  | `CHAR(1)` | Mode |
| `WaveWhseTaskCrtnModeText` |  | |  |  | `CHAR(40)` | Description |
| `EWMStorageType` |  | |  |  | `CHAR(4)` | Storage Type |
| `EWMStorageTypeName` |  | |  |  | `CHAR(40)` | Description |
| `EWMStorageSection` |  | |  |  | `CHAR(4)` | Storage Section |
| `StorageSectionName` |  | |  |  | `CHAR(40)` | Description |
| `SpclActyCatInWhse` |  | |  |  | `CHAR(1)` | Special Activity Indicator |
| `WhseSpclActyCatText` |  | |  |  | `CHAR(40)` | Description |
| `EWMWaveReleasedByUser` |  | |  |  | `CHAR(12)` | User Name |
| `TwoStepPickingDependency` |  | |  |  | `CHAR(1)` | Two-Step Product-Dependent |
| `MaximumNumberOfWaveItems` |  | |  |  | `NUMC(6)` |  |
| `WaveSimulationStatus` |  | |  |  | `CHAR(1)` | Wave Simulation Status |
| `WaveAssgmtIsPossibleAftWaveRel` |  | |  |  | `CHAR(1)` | Wave Assignment Also Possible After Wave Release |
| `WaveCapacityProfile` |  | |  |  | `CHAR(2)` | Capacity Profile for Waves |
| `BehaviourDuringPickDenial` |  | |  |  | `CHAR(1)` | Behavior During Bin Denial |
| `WaveCutoffWhseTmznDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WaveCutoffWhseTmznYear` |  | |  |  | `NUMC(4)` |  |
| `WaveCutoffWhseTmznMonth` |  | |  |  | `NUMC(6)` |  |
| `WaveCutoffWhseTmznDate` |  | |  |  | `DATS(8)` |  |
| `WaveCutoffWhseTmznHour` |  | |  |  | `NUMC(10)` |  |
| `WaveCutoffWhseTmznTime` |  | |  |  | `TIMS(6)` |  |
| `WavePlndRelWhseTmznDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WavePlndRelWhseTmznYear` |  | |  |  | `NUMC(4)` |  |
| `WavePlndRelWhseTmznMonth` |  | |  |  | `NUMC(6)` |  |
| `WavePlndRelWhseTmznDate` |  | |  |  | `DATS(8)` |  |
| `WavePlndRelWhseTmznHour` |  | |  |  | `NUMC(10)` |  |
| `WavePlndRelWhseTmznTime` |  | |  |  | `TIMS(6)` |  |
| `PlndPickCmpltWhseTmznDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `PlndPickCmpltWhseTmznYear` |  | |  |  | `NUMC(4)` |  |
| `PlndPickCmpltWhseTmznMonth` |  | |  |  | `NUMC(6)` |  |
| `PlndPickCmpltWhseTmznDate` |  | |  |  | `DATS(8)` |  |
| `PlndPickCmpltWhseTmznHour` |  | |  |  | `NUMC(10)` |  |
| `PlndPickCmpltWhseTmznTime` |  | |  |  | `TIMS(6)` |  |
| `PlndPackCmpltWhseTmznDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `PlndPackCmpltWhseTmznYear` |  | |  |  | `NUMC(4)` |  |
| `PlndPackCmpltWhseTmznMonth` |  | |  |  | `NUMC(6)` |  |
| `PlndPackCmpltWhseTmznDate` |  | |  |  | `DATS(8)` |  |
| `PlndPackCmpltWhseTmznHour` |  | |  |  | `NUMC(10)` |  |
| `PlndPackCmpltWhseTmznTime` |  | |  |  | `TIMS(6)` |  |
| `PlndStggCmpltWhseTmznDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `PlndStggCmpltWhseTmznYear` |  | |  |  | `NUMC(4)` |  |
| `PlndStggCmpltWhseTmznMonth` |  | |  |  | `NUMC(6)` |  |
| `PlndStggCmpltWhseTmznDate` |  | |  |  | `DATS(8)` |  |
| `PlndStggCmpltWhseTmznHour` |  | |  |  | `NUMC(10)` |  |
| `PlndStggCmpltWhseTmznTime` |  | |  |  | `TIMS(6)` |  |
| `WaveCompletionWhseTmznDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WaveCompletionWhseTmznYear` |  | |  |  | `NUMC(4)` |  |
| `WaveCompletionWhseTmznMonth` |  | |  |  | `NUMC(6)` |  |
| `WaveCompletionWhseTmznDate` |  | |  |  | `DATS(8)` |  |
| `WaveCompletionWhseTmznHour` |  | |  |  | `NUMC(10)` |  |
| `WaveCompletionWhseTmznTime` |  | |  |  | `TIMS(6)` |  |
| `WaveActualReldWhseTmznDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WaveActualReldWhseTmznYear` |  | |  |  | `NUMC(4)` |  |
| `WaveActualReldWhseTmznMonth` |  | |  |  | `NUMC(6)` |  |
| `WaveActualReldWhseTmznDate` |  | |  |  | `DATS(8)` |  |
| `WaveActualReldWhseTmznHour` |  | |  |  | `NUMC(10)` |  |
| `WaveActualReldWhseTmznTime` |  | |  |  | `TIMS(6)` |  |
| `WaveIsReleasedManually` |  | |  |  | `CHAR(1)` | Wave Was Released Manually |
| `ItemWeight` |  | |  |  | `QUAN(15)` | Weight |
| `ItemWeightUnit` |  | |  |  | `UNIT(3)` | Weight Unit |
| `ItemVolume` |  | |  |  | `QUAN(15)` | Volume |
| `ItemVolumeUnit` |  | |  |  | `UNIT(3)` | Volume Unit |
| `ItemNetWeightInDisplayUnit` |  | |  |  | `QUAN(31)` |  |
| `DisplayWeightUnit` |  | |  |  | `UNIT(3)` | Weight Unit |
| `ItemNetVolumeInDisplayUnit` |  | |  |  | `QUAN(31)` |  |
| `DisplayVolumeUnit` |  | |  |  | `UNIT(3)` | Volume Unit |
| `ItemQuantity` |  | |  |  | `QUAN(31)` | Wave Item Quantity |
| `ItemQuantityUnit` |  | |  |  | `UNIT(3)` | Unit of Measure |
| `NumberOfWaves` |  | |  | `{ exceptionAggregationSteps: [ { exceptionAggregationBehavior : #COUNT, exceptionAggregationElements: ['EWMWarehouse', 'Wave' ] } ] } 1` | `INT1(3)` |  |
| `NumberOfWaveItems` |  | |  |  | `FLTP(16)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EWM_WAREHOUSEWAVEQ_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EWM_WAREHOUSEWAVEQ_2')/$value)*

```abap
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Wave - Query'

@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY]
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY

@VDM.viewType:#CONSUMPTION

@OData.publish:            true
@Analytics.query:          true

define view entity C_EWM_WarehouseWaveQ_2
  with parameters
    @Environment.systemField: #SYSTEM_LANGUAGE
    @Consumption.hidden
    P_Language : /scwm/lang
  as select from I_EWM_WarehouseWaveC_2(
                 P_Language: $parameters.P_Language )
{

      @Consumption.filter:{
        selectionType: #RANGE,
        multipleSelections: true,
        mandatory: false
      }
      @EndUserText.label: 'Warehouse'
  key EWMWarehouse,

      @Consumption.filter: {
        selectionType: #RANGE,
        multipleSelections: true,
        mandatory: false
      }
      @EndUserText.label: 'Wave'
  key Wave,

      @Consumption.filter:{
        selectionType: #RANGE,
        multipleSelections: true,
        mandatory: false
      }
      @EndUserText.label: 'Wave Item'
  key WaveItem,

      @Consumption.filter:{
        selectionType: #RANGE,
        multipleSelections: true,
        mandatory: false
      }
      @EndUserText.label: 'Creation Status of Warehouse Task'
      WarehouseTaskCreationStatus,

      @Consumption.filter:{
        selectionType: #RANGE,
        multipleSelections: true,
        mandatory: false
      }
      @EndUserText.label: 'Name of Warehouse Task Creation Status'
      WarehouseTaskCreationStsName,


      @Consumption.filter:{
        selectionType: #RANGE,
        multipleSelections: true,
        mandatory: false
      }
      @AnalyticsDetails.query.decimals: 3
      @EndUserText.label: 'Capacity Consumed by Wave Item'
      //            ItemConsumedCapacity,
      WaveItemConsumedCapacityValue,

      @Consumption.filter:{
        selectionType: #RANGE,
        multipleSelections: true,
        mandatory: false
      }
      @EndUserText.label: 'Ship-To Party'
      ShipToParty,

      @Consumption.filter:{
        selectionType: #RANGE,
        multipleSelections: true,
        mandatory: false
      }
      @EndUserText.label: 'Product'
      ProductName,

      @EndUserText.label: 'Product Description'
      ProductDescription,

      @Consumption.filter:{
        selectionType: #RANGE,
        multipleSelections: true,
        mandatory: false
      }
      @EndUserText.label: 'Product Batch'
      Batch,

      @Consumption.filter:{
        selectionType: #RANGE,
        multipleSelections: true,
        mandatory: false
      }
      @EndUserText.label: 'Stock Owner'
      EWMStockOwner,

      @Consumption.filter:{
        selectionType: #RANGE,
        multipleSelections: true,
        mandatory: false
      }
      @EndUserText.label: 'Party Entitled to Dispose'
      EntitledToDisposeParty,


      //@EndUserText.label: 'Internal Number of Transportation Unit'
      //TranspUnitInternalNumber,

      @Consumption.filter:{
        selectionType: #RANGE,
        multipleSelections: true,
        mandatory: false
      }
      @EndUserText.label: 'Document Category of Reference Document'
      EWMReferenceDocumentCategory,

      @Consumption.filter:{
        selectionType: #RANGE,
        multipleSelections: true,
        mandatory: false
      }
      @EndUserText.label: 'Wave Template'
      WaveTemplate,

      @Consumption.filter:{
        selectionType: #RANGE,
        multipleSelections: true,
        mandatory: false
      }
      @EndUserText.label: 'Wave Template Name'
      WaveTemplateName,

      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Wave Description'
      WaveName,

      @Consumption.filter:{
        selectionType: #RANGE,
        multipleSelections: true,
        mandatory: false
      }
      @EndUserText.label: 'Wave Type'
      WaveType,

      @EndUserText.label: 'Wave Type Name'
      WaveTypeName,

      @Consumption.filter:{
        selectionType: #RANGE,
        multipleSelections: true,
        mandatory: false
      }
      @EndUserText.label: 'Wave Category'
      WaveCategory,

      @EndUserText.label: 'Wave Category Name'
      WaveCategoryName,


      @Consumption.filter:{
        selectionType: #RANGE,
        multipleSelections: true,
        mandatory: false
      }
      @EndUserText.label: 'Wave Status'
      WaveStatus,

      @EndUserText.label: 'Wave Status Name'
      WaveStatusName,

      @Consumption.filter:{
        selectionType: #RANGE,
        multipleSelections: true,
        mandatory: false
      }
      @EndUserText.label: 'Wave Release Method'
      WaveReleaseMethod,

      @EndUserText.label: 'Name of Wave Release Method'
      WaveReleaseMethodName,

     
      @Consumption.filter: {
      selectionType: #RANGE,
      multipleSelections: true,
      mandatory: false
      }
      @EndUserText.label: 'Split Number'
      SplitNumber,

      @Consumption.filter: {
      selectionType: #RANGE,
      multipleSelections: true,
      mandatory: false
      }
      @EndUserText.label: 'Reference Document Number'
      EWMRefDeliveryDocumentNumber,

      @Consumption.filter: {
      selectionType: #RANGE,
      multipleSelections: true,
      mandatory: false
      }
      @EndUserText.label: 'Reference Document Item Number'
      EWMRefDeliveryDocumentItem,

      @Consumption.filter: {
      selectionType: #RANGE,
      multipleSelections: true,
      mandatory: false
      }
      @EndUserText.label: 'Wave Item Category for Two-Step Picking'
      TwoStepPickingWaveItemCategory,

      @Consumption.filter: {
      selectionType: #RANGE,
      multipleSelections: true,
      mandatory: false
      }
      @EndUserText.label: 'Error Status of Wave Item'
      WaveItemErrorStatus,

      @Consumption.filter: {
      selectionType: #RANGE,
      multipleSelections: true,
      mandatory: false
      }
      @EndUserText.label: 'Route'
      EWMRoute,

      @Consumption.filter: {
      selectionType: #RANGE,
      multipleSelections: true,
      mandatory: false
      }
      @EndUserText.label: 'Sales Order Number'
      SalesOrder,

      @Consumption.filter: {
      selectionType: #RANGE,
      multipleSelections: true,
      mandatory: false
      }
      @EndUserText.label: 'Activity Area'
      ActivityArea,

      @EndUserText.label: 'Description of Activity Area'
      ActivityAreaName,

      @Consumption.filter: {
      selectionType: #RANGE,
      multipleSelections: true,
      mandatory: false
      }
      @EndUserText.label: 'Warehouse Process Type'
      WarehouseProcessType,

      @EndUserText.label: 'Description of Warehouse Process Type'
      WarehouseProcessTypeName,

      @Consumption.filter: {
      selectionType: #RANGE,
      multipleSelections: true,
      mandatory: false
      }
      @EndUserText.label: 'Simulation Status of Wave Item'
      WaveItemSimulationStatus,

      @Consumption.filter: {
      selectionType: #RANGE,
      multipleSelections: true,
      mandatory: false
      }
      @EndUserText.label: 'Option Number of Wave Template'
      WaveTemplateOption,

      @Consumption.filter: {
      selectionType: #RANGE,
      multipleSelections: true,
      mandatory: false
      }
      @EndUserText.label: 'Factory Calendar Number'
      WaveFactoryCalendar,

      @EndUserText.label: 'Factory Calendar Name'
      FactoryCalendarName,

      @Consumption.filter: {
      selectionType: #RANGE,
      multipleSelections: true,
      mandatory: false
      }
      @EndUserText.label: 'WT Is Relevant to Two-Step Picking'
      WhseTskIsRlvtForTwoStpPicking,

      @Consumption.filter: {
      selectionType: #RANGE,
      multipleSelections: true,
      mandatory: false
      }
      @EndUserText.label: 'Creation Mode of Wave Warehouse Task'
      WaveWarehouseTaskCreationMode,

      @EndUserText.label: 'Nme for Crtn Mode of Wave Warehouse Task'
      WaveWhseTaskCrtnModeText,

      @Consumption.filter: {
      selectionType: #RANGE,
      multipleSelections: true,
      mandatory: false
      }
      @EndUserText.label: 'Storage Type'
      EWMStorageType,

      @EndUserText.label: 'Description of Storage Type'
      EWMStorageTypeName,

      @Consumption.filter: {
      selectionType: #RANGE,
      multipleSelections: true,
      mandatory: false
      }
      @EndUserText.label: 'Storage Section'
      EWMStorageSection,

      @EndUserText.label: 'Description of Storage Section'
      StorageSectionName,

      @Consumption.filter: {
      selectionType: #RANGE,
      multipleSelections: true,
      mandatory: false
      }
      @EndUserText.label: 'Special Activity Category'
      SpclActyCatInWhse,

      @EndUserText.label: 'Desc. of Special Activity Category'
      WhseSpclActyCatText,

      @Consumption.filter: {
      selectionType: #RANGE,
      multipleSelections: true,
      mandatory: false
      }
      @EndUserText.label: 'Released By'
      EWMWaveReleasedByUser,

      @Consumption.filter: {
      selectionType: #RANGE,
      multipleSelections: true,
      mandatory: false
      }
      @EndUserText.label: 'Dependency of Two-Step Picking'
      TwoStepPickingDependency,

      @Consumption.filter: {
      selectionType: #RANGE,
      multipleSelections: true,
      mandatory: false
      }
      @EndUserText.label: 'Maximum Number of Wave Items'
      MaximumNumberOfWaveItems,

      @Consumption.filter: {
      selectionType: #RANGE,
      multipleSelections: true,
      mandatory: false
      }
      @EndUserText.label: 'Simulation Status of Wave'
      WaveSimulationStatus,


      @Consumption.filter: {
      selectionType: #INTERVAL,
      multipleSelections: true,
      mandatory: false
      }
      @EndUserText.label: 'Assignment Possible After Wave Release'
      WaveAssgmtIsPossibleAftWaveRel,

      //      @Consumption.filter: {
      //          selectionType: #INTERVAL,
      //          multipleSelections: true,
      //          mandatory: false
      //      }
      //      @EndUserText.label: 'Wave Actually Released On (UTC)'
      //      WaveActlReleasedUTCDateTime,

      @Consumption.filter:{
        selectionType: #RANGE,
        multipleSelections: true,
        mandatory: false
      }
      @EndUserText.label: 'Capacity Profile for Waves'
      WaveCapacityProfile, //

      @Consumption.filter:{
        selectionType: #RANGE,
        multipleSelections: true,
        mandatory: false
      }
      @EndUserText.label: 'Behavior During Pick Denial'
      BehaviourDuringPickDenial,

      @Consumption.filter: {
          selectionType: #INTERVAL,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Wave Cutoff Date and Time'
      WaveCutoffWhseTmznDateTime,

      @EndUserText.label: 'Cutoff Date (Year) of Wave'
      WaveCutoffWhseTmznYear,
      @EndUserText.label: 'Cutoff Date (Month) of Wave'
      WaveCutoffWhseTmznMonth,
      @EndUserText.label: 'Cutoff Date of Wave'
      WaveCutoffWhseTmznDate,
      @EndUserText.label: 'Cutoff Date (Hour) of Wave'
      WaveCutoffWhseTmznHour,
      @EndUserText.label: 'Cutoff Time of Wave'
      WaveCutoffWhseTmznTime,

      @Consumption.filter: {
          selectionType: #INTERVAL,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Planned Release Date and Time of Wave'
      WavePlndRelWhseTmznDateTime,
      @EndUserText.label: 'Planned Release Date (Year) of Wave'
      WavePlndRelWhseTmznYear,
      @EndUserText.label: 'Planned Release Date (Month) of Wave'
      WavePlndRelWhseTmznMonth,
      @EndUserText.label: 'Planned Release Date of Wave'
      WavePlndRelWhseTmznDate,
      @EndUserText.label: 'Planned Release Date (Hour) of Wave'
      WavePlndRelWhseTmznHour,
      @EndUserText.label: 'Planned Release Time of Wave'
      WavePlndRelWhseTmznTime,

      @Consumption.filter: {
          selectionType: #INTERVAL,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Picking Completion Date and Time of Wave'
      PlndPickCmpltWhseTmznDateTime,
      @EndUserText.label: 'Picking Completion Date (Year) of Wave'
      PlndPickCmpltWhseTmznYear,
      @EndUserText.label: 'Picking Completion Date (Month) of Wave'
      PlndPickCmpltWhseTmznMonth,
      @EndUserText.label: 'Picking Completion Date of Wave'
      PlndPickCmpltWhseTmznDate,
      @EndUserText.label: 'Picking Completion Date (Hour) of Wave'
      PlndPickCmpltWhseTmznHour,
      @EndUserText.label: 'Picking Completion Time of Wave'
      PlndPickCmpltWhseTmznTime,

      @Consumption.filter: {
          selectionType: #INTERVAL,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Packing Completion Date and Time of Wave'
      PlndPackCmpltWhseTmznDateTime,
      @EndUserText.label: 'Packing Completion Date (Year) of Wave'
      PlndPackCmpltWhseTmznYear,
      @EndUserText.label: 'Packing Completion Date (Month) of Wave'
      PlndPackCmpltWhseTmznMonth,
      @EndUserText.label: 'Packing Completion Date of Wave'
      PlndPackCmpltWhseTmznDate,
      @EndUserText.label: 'Packing Completion Date (Hour) of Wave'
      PlndPackCmpltWhseTmznHour,
      @EndUserText.label: 'Packing Completion Time of Wave'
      PlndPackCmpltWhseTmznTime,

      @Consumption.filter: {
          selectionType: #INTERVAL,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Staging Completion Date and Time of Wave'
      PlndStggCmpltWhseTmznDateTime,
      @EndUserText.label: 'Staging Completion Date (Year) of Wave'
      PlndStggCmpltWhseTmznYear,
      @EndUserText.label: 'Staging Completion Date (Month) of Wave'
      PlndStggCmpltWhseTmznMonth,
      @EndUserText.label: 'Staging Completion Date of Wave'
      PlndStggCmpltWhseTmznDate,
      @EndUserText.label: 'Staging Completion Date (Hour) of Wave'
      PlndStggCmpltWhseTmznHour,
      @EndUserText.label: 'Staging Completion Time of Wave'
      PlndStggCmpltWhseTmznTime,

      @Consumption.filter: {
          selectionType: #INTERVAL,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Wave Completed On'
      WaveCompletionWhseTmznDateTime,

      @EndUserText.label: 'Wave Completed On (Year)'
      WaveCompletionWhseTmznYear,
      @EndUserText.label: 'Wave Completed On (Month)'
      WaveCompletionWhseTmznMonth,
      @EndUserText.label: 'Wave Completion Date'
      WaveCompletionWhseTmznDate,
      @EndUserText.label: 'Wave Completed On (Hour)'
      WaveCompletionWhseTmznHour,
      @EndUserText.label: 'Wave Completion Time'
      WaveCompletionWhseTmznTime,


      @Consumption.filter: {
          selectionType: #INTERVAL,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Release Date and Time of Wave'
      WaveActualReldWhseTmznDateTime,

      @Consumption.filter: {
          selectionType: #INTERVAL,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Release Date (Year) of Wave'
      WaveActualReldWhseTmznYear,

      @Consumption.filter: {
      selectionType: #INTERVAL,
      multipleSelections: true,
      mandatory: false
      }
      @EndUserText.label: 'Release Date (Month) of Wave'
      WaveActualReldWhseTmznMonth,

      @Consumption.filter: {
      selectionType: #INTERVAL,
      multipleSelections: true,
      mandatory: false
      }
      @EndUserText.label: 'Release Date of Wave'
      WaveActualReldWhseTmznDate,

      @Consumption.filter: {
      selectionType: #INTERVAL,
      multipleSelections: true,
      mandatory: false
      }
      @EndUserText.label: 'Release Time (Hour) of Wave'
      WaveActualReldWhseTmznHour,

      @Consumption.filter: {
      selectionType: #INTERVAL,
      multipleSelections: true,
      mandatory: false
      }
      @EndUserText.label: 'Release Time of Wave'
      WaveActualReldWhseTmznTime,

      @Consumption.filter: {
          selectionType: #INTERVAL,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Wave Is Released Manually '
      WaveIsReleasedManually,

      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ItemWeightUnit'} }
      //      @Consumption.filter: {
      //          selectionType: #RANGE,
      //          multipleSelections: true,
      //          mandatory: false
      //      }
      @AnalyticsDetails.query.decimals: 3
      @EndUserText.label: 'Item Weight'
      ItemWeight,

      @Consumption.filter: {
      selectionType: #INTERVAL,
      multipleSelections: true,
      mandatory: false
      }
      @EndUserText.label: 'Unit of Weight on Item Level'
      ItemWeightUnit,

      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ItemVolumeUnit'} }
      @AnalyticsDetails.query.decimals: 3
      @Consumption.filter: {
      selectionType: #INTERVAL,
      multipleSelections: true,
      mandatory: false
      }
      @EndUserText.label: 'Volume of Wave Item'
      ItemVolume,

      @Consumption.filter: {
      selectionType: #INTERVAL,
      multipleSelections: true,
      mandatory: false
      }
      @EndUserText.label: 'Item Volume Unit'
      ItemVolumeUnit,

      //      --- Weight in Display Unit
      @Consumption.filter: {
      selectionType: #INTERVAL,
      multipleSelections: true,
      mandatory: false
      } 
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'DisplayWeightUnit'} }
      @EndUserText.label: 'Total Net Weight of Wave Items'
      @AnalyticsDetails.query.decimals: 5
      ItemNetWeightInDisplayUnit,


      @Consumption.filter: {
      selectionType: #INTERVAL,
      multipleSelections: true,
      mandatory: false
      }
      @EndUserText.label: 'Display Unit of Weight'
      DisplayWeightUnit,

      //--- Volumn in Display Unit
      @Consumption.filter: {
      selectionType: #INTERVAL,
      multipleSelections: true,
      mandatory: false
      }

      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'DisplayVolumeUnit'} }
      @EndUserText.label: 'Total Volume of Wave Items'
      @AnalyticsDetails.query.decimals: 5
      ItemNetVolumeInDisplayUnit,

      @Consumption.filter: {
      selectionType: #INTERVAL,
      multipleSelections: true,
      mandatory: false
      }
      @EndUserText.label: 'Display Unit of Volume'
      DisplayVolumeUnit,

      @DefaultAggregation: #SUM
      @Consumption.filter: {
      selectionType: #INTERVAL,
      multipleSelections: true,
      mandatory: false
      }
      @Semantics: { quantity : {unitOfMeasure: 'ItemQuantityUnit'} }
      @EndUserText.label: 'Item Quantity'
      ItemQuantity,

      @Consumption.filter: {
      selectionType: #INTERVAL,
      multipleSelections: true,
      mandatory: false
      }
      @EndUserText.label: 'Unit of Measure for Wave Item Quantity'
      ItemQuantityUnit,


      @EndUserText.label: 'Number of Waves'
      @DefaultAggregation: #FORMULA
      @AnalyticsDetails:
         {
            exceptionAggregationSteps:
              [ { exceptionAggregationBehavior : #COUNT,
                  exceptionAggregationElements: ['EWMWarehouse', 'Wave' ]
                }
              ]
         }
      1 as NumberOfWaves,


      @EndUserText.label: 'Number of Wave Items'
      @AnalyticsDetails.query.decimals: 0
      NumberOfWaveItems
}
```
