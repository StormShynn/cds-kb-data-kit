---
name: C_EWM_WAREHOUSETASKLEANQ_2
description: "This CDS view provides the prerequisites for answering the following business questions: How many warehouse tasks are there in my warehouse? How many warehouse task items are there in my warehouse? What is the total volume of warehouse task items? What is the total net weight of warehouse task items? What is the actual product quantity in base or alternative unit of measure (UoM)? What is the difference product quantity in base or alternative UoM? What is the target product quantity in base or alternative UoM? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EWM_WAREHOUSETASKLEANQ_2')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: How many warehouse tasks are there in my warehouse? How many warehouse task items are there in my warehouse? What is the total volume of warehouse task items? What is the total net weight of warehouse task items? What is the actual product quantity in base or alternative unit of measure (UoM)? What is the difference product quantity in base or alternative UoM? What is the target product quantity in base or alternative UoM? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Warehouse Task Lean - Query — CDS view tiêu dùng dựa trên I_EWM_WhseTaskItemCube_2."
keywords:
  - "warehouse"
  - "task"
  - "lean"
  - "query"
  - "item"
  - "name"
  - "handling"
  - "unit"
tags:
  - SCM
  - bo:companycode
  - component:SCM-EWM-WOP-2CL
  - consumption-view
  - product
  - SCM-EWM
  - SCM-EWM-WOP
  - SCM-EWM-WOP-2CL
  - task
---
# C_EWM_WAREHOUSETASKLEANQ_2

**This CDS view provides the prerequisites for answering the following business questions: How many warehouse tasks are there in my warehouse? How many warehouse task items are there in my warehouse? What is the total volume of warehouse task items? What is the total net weight of warehouse task items? What is the actual product quantity in base or alternative unit of measure (UoM)? What is the difference product quantity in base or alternative UoM? What is the target product quantity in base or alternative UoM? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EWM_WAREHOUSETASKLEANQ_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMWarehouse` | ✓ | |  |  | `CHAR(4)` | Warehouse Number/Warehouse Complex |
| `WarehouseTask` | ✓ | |  |  | `NUMC(12)` | Warehouse Task |
| `WarehouseTaskItem` | ✓ | |  |  | `NUMC(4)` | Warehouse Task Item |
| `WarehouseName` |  | |  | `_Warehouse._Text[1:Language = $parameters.P_Language].EWMWarehouseDescription` | `CHAR(40)` | Warehouse Number Description |
| `IsHandlingUnitWarehouseTask` |  | |  |  | `CHAR(1)` | Handling Unit Warehouse Task |
| `WarehouseProcessType` |  | |  |  | `CHAR(4)` | Warehouse Process Type |
| `WarehouseProcessTypeName` |  | |  | `_WarehouseProcessType._Text[1:Language = $parameters.P_Language].WarehouseProcessTypeName` | `CHAR(40)` | Description |
| `WarehouseProcessCategory` |  | |  |  | `CHAR(1)` | Warehouse Process Category |
| `WarehouseProcessCategoryName` |  | |  | `_WarehouseProcessCategory._Text[1:Language = $parameters.P_Language].WarehouseProcessCategoryName` | `CHAR(40)` | Description |
| `StorageProcess` |  | |  |  | `CHAR(4)` | Storage Process |
| `StorageProcessName` |  | |  | `_StorageProcess._Text[1:Language = $parameters.P_Language].StorageProcessName` | `CHAR(40)` | Description |
| `WarehouseTaskStatus` |  | |  |  | `CHAR(1)` | Warehouse Task Status |
| `WarehouseTaskStatusName` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `WarehouseOrder` |  | |  |  | `NUMC(10)` | Warehouse Order Number |
| `WarehouseOrderStatus` |  | |  |  | `CHAR(1)` | Warehouse Order Status |
| `WarehouseOrderStatusName` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `ActivityArea` |  | |  |  | `CHAR(4)` | Activity Area |
| `ActivityAreaName` |  | |  | `_ActivityArea._Text[1:Language = $parameters.P_Language].ActivityAreaName` | `CHAR(40)` | Description |
| `Activity` |  | |  |  | `CHAR(4)` | Activity |
| `ActivityName` |  | |  | `_WarehouseActivity._Text[1:Language = $parameters.P_Language].ActivityName` | `CHAR(40)` | Description |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Created By |
| `WhseTaskCrtnUTCDateTime` |  | |  |  | `DEC(15)` | Creation Time |
| `WarehouseTaskCodes` |  | |  |  | `CHAR(1)` | Calling Application/Special Function for WT Creation/Conf. |
| `ExecutingResource` |  | |  |  | `CHAR(18)` | Executing Resource (Means of Transport or User) |
| `WarehouseMovementsReason` |  | |  |  | `CHAR(4)` | Reason for Movements in the Warehouse |
| `ProductName` |  | |  |  | `CHAR(40)` | Product |
| `ProductDescription` |  | |  |  | `CHAR(40)` | Product Description |
| `Batch` |  | |  |  | `CHAR(10)` | Batch |
| `EWMStockType` |  | |  |  | `CHAR(2)` | Stock Type |
| `StockDocumentCategory` |  | |  |  | `CHAR(3)` | Special Reference Stock Type |
| `StockDocumentNumber` |  | |  |  | `CHAR(35)` | Reference Document for Special Reference Stock |
| `StockItemNumber` |  | |  |  | `NUMC(10)` | Sales Order Item for Sales Order Stock |
| `EWMDocumentCategory` |  | |  |  | `CHAR(3)` | Doc. Category for Doc. Reference and Doc.-Related Stock |
| `EWMStockUsage` |  | |  |  | `CHAR(1)` | Stock Usage |
| `EWMStockOwner` |  | |  |  | `CHAR(10)` | Owner |
| `StockOwnerPartnerRole` |  | |  |  | `CHAR(2)` | Partner Role of Owner |
| `EntitledToDisposeParty` |  | |  |  | `CHAR(10)` | Party Entitled to Dispose |
| `EntitledToDisposePartnerRole` |  | |  |  | `CHAR(2)` | Partner Role of Party Entitled to Dispose |
| `CounterForStockSeparation` |  | |  |  | `NUMC(6)` | Counter for Stock Separation |
| `WhseTaskRetentionQuantity` |  | |  |  | `QUAN(31)` | Retention Quantity |
| `HandlingUnitType` |  | |  |  | `CHAR(4)` | Handling Unit Type |
| `WhseTaskCapacityConsumption` |  | |  |  | `DEC(15)` | Capacity Consumption |
| `PutAwayPhysInventoryIsPlanned` |  | |  |  | `CHAR(1)` | Truth Value: True/False |
| `WhseTaskLowStockCheckIsPlanned` |  | |  |  | `CHAR(1)` | Truth Value: True/False |
| `EWMPutAwayPhysInvtryPlnSts` |  | |  |  | `CHAR(1)` | Putaway Physical Inventory Planned |
| `EWMWhseTskLowStkChkPlnSts` |  | |  |  | `CHAR(1)` | Low Stock Check Planned |
| `ShelfLifeExpirationDate` |  | |  |  | `DATS(8)` | Shelf Life Expiration Date |
| `CountryOfOrigin` |  | |  |  | `CHAR(3)` | Country/Region of Origin |
| `StockIdentificationOfWhseTask` |  | |  |  | `CHAR(20)` | Stock Identification of Warehouse Task |
| `EWMConsolidationGroup` |  | |  |  | `CHAR(10)` | Consolidation Group |
| `SourceStorageType` |  | |  |  | `CHAR(4)` | Source Storage Type |
| `SourceStorageTypeName` |  | |  | `_SourceStorageType._Text[1:Language = $parameters.P_Language].EWMStorageTypeName` | `CHAR(40)` | Description |
| `SourceStorageBin` |  | |  |  | `CHAR(18)` | Source Storage Bin |
| `SourceHndlgUnitLogicalPosition` |  | |  |  | `CHAR(2)` | Source Logical Position of Handling Unit in Storage Bin |
| `EWMSourceLocationType` |  | |  |  | `CHAR(1)` | Location Type |
| `SourceHandlingUnit` |  | |  |  | `CHAR(20)` |  |
| `DestinationStorageType` |  | |  |  | `CHAR(4)` | Destination Storage Type |
| `DestinationStorageTypeName` |  | |  | `_DestStorageType._Text[1:Language = $parameters.P_Language].EWMStorageTypeName` | `CHAR(40)` | Description |
| `DestinationStorageBin` |  | |  |  | `CHAR(18)` | Destination Storage Bin |
| `DestHndlgUnitLogicalPosition` |  | |  |  | `CHAR(2)` | Destination Logical Position of Handling Unit in Storage Bin |
| `EWMDestinationLocationType` |  | |  |  | `CHAR(1)` | Location Type |
| `DestinationHandlingUnit` |  | |  |  | `CHAR(20)` | Destination Handling Unit |
| `WhseTaskDestStorageBinDtmndBy` |  | |  |  | `CHAR(1)` | Destination Storage Bin Determined By |
| `WhseTaskRefToValueAddedService` |  | |  |  | `CHAR(1)` | WT with Reference to a VAS |
| `BatchChangeIsNotAllowed` |  | |  |  | `CHAR(1)` | Changing the Batch is not Allowed |
| `EWMReferenceDocumentCategory` |  | |  |  | `CHAR(3)` | Doc. Category for Doc. Reference and Doc.-Related Stock |
| `EWMReferenceDeliveryDocType` |  | |  |  | `CHAR(4)` | Document Type |
| `EWMRefDeliveryDocumentNumber` |  | |  |  | `CHAR(35)` | Document Number |
| `EWMRefDeliveryDocumentItem` |  | |  |  | `NUMC(10)` | Item Number |
| `EWMInboundDeliveryItemType` |  | |  |  | `CHAR(4)` | Item Type |
| `EWMWave` |  | |  |  | `NUMC(10)` | Wave |
| `EWMWaveItem` |  | |  |  | `NUMC(6)` | Wave Item |
| `WhseTaskTwoStepPickingType` |  | |  |  | `CHAR(1)` | Warehouse Task Type Within Two-Step Picking |
| `WhseTaskTwoStepPickingRlvnce` |  | |  |  | `CHAR(1)` | Relevance for Two-Step Picking |
| `KitItemIsCreatedAutomatically` |  | |  |  | `CHAR(1)` | Create Kit Item in HU Automatically During Picking |
| `IsDocumentaryBatch` |  | |  |  | `CHAR(1)` | Truth Value: True/False |
| `EWMProductionSupplyArea` |  | |  |  | `CHAR(15)` | Production Supply Area |
| `ProductionOrder` |  | |  |  | `CHAR(12)` |  |
| `WhseTaskCrtnWhseTmznDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WhseTaskCrtnWhseTmznYear` |  | |  |  | `NUMC(4)` |  |
| `WhseTaskCrtnWhseTmznMonth` |  | |  |  | `NUMC(6)` |  |
| `WhseTaskCrtnWhseTmznDate` |  | |  |  | `DATS(8)` |  |
| `WhseTaskCrtnWhseTmznHour` |  | |  |  | `NUMC(10)` |  |
| `WhseTaskCrtnWhseTmznTime` |  | |  |  | `TIMS(6)` |  |
| `WhseTaskConfWhseTmznDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WhseTaskConfWhseTmznYear` |  | |  |  | `NUMC(4)` |  |
| `WhseTaskConfWhseTmznMonth` |  | |  |  | `NUMC(6)` |  |
| `WhseTaskConfWhseTmznDate` |  | |  |  | `DATS(8)` |  |
| `WhseTaskConfWhseTmznHour` |  | |  |  | `NUMC(10)` |  |
| `WhseTaskConfWhseTmznTime` |  | |  |  | `TIMS(6)` |  |
| `WhseTskPlndClsgWhseTmznDteTme` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WhseTskPlndClsgWhseTmznYear` |  | |  |  | `NUMC(4)` |  |
| `WhseTskPlndClsgWhseTmznMonth` |  | |  |  | `NUMC(6)` |  |
| `WhseTskPlndClsgWhseTmznDate` |  | |  |  | `DATS(8)` |  |
| `WhseTskPlndClsgWhseTmznHour` |  | |  |  | `NUMC(10)` |  |
| `WhseTskPlndClsgWhseTmznTime` |  | |  |  | `TIMS(6)` |  |
| `Kanban` |  | |  |  | `NUMC(10)` | Kanban Identification Number |
| `WhseTaskLastChgUTCDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `ConfirmedByUser` |  | |  |  | `CHAR(12)` |  |
| `WhseTaskConfUTCDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WarehouseTaskExceptionCode` |  | |  |  | `CHAR(4)` |  |
| `ExceptionCodeName` |  | |  | `_ExceptionCode._Text[1:Language = $parameters.P_Language].ExceptionCodeName` | `CHAR(40)` | Description |
| `BusinessContext` |  | |  |  | `CHAR(3)` |  |
| `BusinessContextName` |  | |  | `_BusinessContext._Text[1:Language = $parameters.P_Language].BusinessContextName` | `CHAR(40)` | Description |
| `BusinessContextExecutionStep` |  | |  |  | `CHAR(2)` |  |
| `BusinessContextExecStepName` |  | |  | `_BusinessContextExecStep._Text[1:Language = $parameters.P_Language].BusinessContextExecStepName` | `CHAR(40)` | Description |
| `WarehouseOrderCreationRule` |  | |  |  | `CHAR(4)` | Warehouse Order Creation Rule |
| `WarehouseOrderCreationRuleName` |  | |  | `_WhseOrderCtnRule._Text[1:Language = $parameters.P_Language].WarehouseOrderCreationRuleName` | `CHAR(40)` | Description |
| `WhseTaskOverdueHours` |  | |  |  | `DEC(16)` |  |
| `WhseTaskOverdueHoursDesc` |  | |  |  | `CHAR(60)` |  |
| `HigherLevelWarehouseOrder` |  | |  |  | `NUMC(10)` | Warehouse Order Number of Higher-Level Warehouse Order |
| `WrhsOrdStrtUTCDateTime` |  | |  |  | `DEC(15)` | Start Time |
| `SourceStorageBinType` |  | |  |  | `CHAR(4)` | Storage Bin Type |
| `SourceStorageBinTypeName` |  | |  | `_SrceStorageBinType._Text[1:Language = $parameters.P_Language].StorageBinTypeName` | `CHAR(40)` | Description |
| `SourceStorageBinAisle` |  | |  |  | `CHAR(18)` | Storage Bin Aisle |
| `SourceStorageBinStack` |  | |  |  | `CHAR(18)` | Storage Bin Stack |
| `SourceStorageBinLevel` |  | |  |  | `CHAR(18)` | Storage Bin Level |
| `SourceStorageBinAccessType` |  | |  |  | `CHAR(4)` | Bin Access Type |
| `DestinationStorageBinType` |  | |  |  | `CHAR(4)` | Storage Bin Type |
| `DestinationStorageBinTypeName` |  | |  | `_DestStorageBinType._Text[1:Language = $parameters.P_Language].StorageBinTypeName` | `CHAR(40)` | Description |
| `DestinationStorageBinAisle` |  | |  |  | `CHAR(18)` | Storage Bin Aisle |
| `DestinationStorageBinStack` |  | |  |  | `CHAR(18)` | Storage Bin Stack |
| `DestinationStorageBinLevel` |  | |  |  | `CHAR(18)` | Storage Bin Level |
| `DestinationStorageBinAccType` |  | |  |  | `CHAR(4)` | Bin Access Type |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `TargetQuantityInBaseUnit` |  | |  |  | `QUAN(31)` | Target Quantity in Base Unit of Measure |
| `ActualQuantityInBaseUnit` |  | |  |  | `QUAN(31)` |  |
| `DifferenceQuantityInBaseUnit` |  | |  |  | `QUAN(31)` |  |
| `AlternativeUnit` |  | |  |  | `UNIT(3)` | Alternative Unit of Measure for Stockkeeping Unit |
| `TargetQuantityInAltvUnit` |  | |  |  | `QUAN(31)` | Target Quantity in Alternative Unit of Measure |
| `ActualQuantityInAltvUnit` |  | |  |  | `QUAN(31)` |  |
| `DifferenceQuantityInAltvUnit` |  | |  |  | `QUAN(31)` |  |
| `NumberOfWarehouseTasks` |  | |  |  | `FLTP(16)` |  |
| `NumberOfWarehouseTaskItems` |  | |  |  | `FLTP(16)` |  |
| `WhseTaskNetWeightUnitOfMeasure` |  | |  |  | `UNIT(3)` | Weight Unit |
| `WhseTaskNetWeight` |  | |  |  | `QUAN(15)` | Loading or Net Weight |
| `WhseTaskNetVolumeUnitOfMeasure` |  | |  |  | `UNIT(3)` | Volume Unit |
| `WhseTaskNetVolume` |  | |  |  | `QUAN(15)` | Loading or Net Volume |
| `ItemNetWeightInDisplayUnit` |  | |  |  | `QUAN(31)` |  |
| `DisplayWeightUnit` |  | |  |  | `UNIT(3)` | Weight Unit |
| `ItemNetVolumeInDisplayUnit` |  | |  |  | `QUAN(31)` |  |
| `DisplayVolumeUnit` |  | |  |  | `UNIT(3)` | Volume Unit |
| `EWMWhseTaskConfDateIsToday` |  | |  |  | `CHAR(1)` | Confirmation Date of Warehouse Task Is Today |
| `EWMWhseTaskHasException` |  | |  |  | `CHAR(1)` | Warehouse Task Has Exceptions |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EWM_WAREHOUSETASKLEANQ_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EWM_WAREHOUSETASKLEANQ_2')/$value)*

```abap
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Warehouse Task Lean - Query'

@Consumption.semanticObject: 'EWMWarehouseTask'

@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY]
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY

@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType:#CONSUMPTION
 
@OData.publish:            true 
@Analytics.query:              true
@Analytics.technicalName: 'CEWMWTLQ2'
define view entity C_EWM_WarehouseTaskLeanQ_2
  with parameters
    @Environment.systemField: #SYSTEM_LANGUAGE
    @Consumption.hidden
    P_Language : /scwm/lang
  as select from I_EWM_WhseTaskItemCube_2(
                 P_Language: $parameters.P_Language )
{
      @Consumption.filter: {
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
      @Consumption.semanticObject: 'EWMWarehouseTask'      
      @EndUserText.label: 'Warehouse Task'
  key WarehouseTask,
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Warehouse Task Item'
  key WarehouseTaskItem,


      @EndUserText.label: 'Warehouse Description'
      _Warehouse._Text[1:Language = $parameters.P_Language].EWMWarehouseDescription                                              as      WarehouseName,

      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: false,
          mandatory: false
      }
      @EndUserText.label: 'Handling Unit Warehouse Task'
      IsHandlingUnitWarehouseTask,
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Warehouse Process Type'
      WarehouseProcessType,
      @EndUserText.label: 'Description of Warehouse Process Type'
      _WarehouseProcessType._Text[1:Language = $parameters.P_Language].WarehouseProcessTypeName                        as      WarehouseProcessTypeName,

      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Warehouse Process Category'
      WarehouseProcessCategory,
      @EndUserText.label: 'Desc. of Warehouse Process Category'
      _WarehouseProcessCategory._Text[1:Language = $parameters.P_Language].WarehouseProcessCategoryName                as      WarehouseProcessCategoryName,

      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Storage Process'
      StorageProcess,
      @EndUserText.label: 'Description of Storage Process'
      _StorageProcess._Text[1:Language = $parameters.P_Language].StorageProcessName                                    as      StorageProcessName,

      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Warehouse Task Status'
      WarehouseTaskStatus,
      @EndUserText.label: 'Description of Warehouse Task Status'
      WarehouseTaskStatusName,
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Warehouse Order'
      WarehouseOrder,
      @Consumption.filter: {
         selectionType: #RANGE,
         multipleSelections: true,
         mandatory: false
      }
      @EndUserText.label: 'Warehouse Order Status'
      WarehouseOrderStatus,
      @EndUserText.label: 'Description of Warehouse Order Status'
      WarehouseOrderStatusName,

      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Activity Area'
      ActivityArea,
      @EndUserText.label: 'Description of Activity Area'
      _ActivityArea._Text[1:Language = $parameters.P_Language].ActivityAreaName                                        as      ActivityAreaName,
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Activity'
      Activity,
      @EndUserText.label: 'Activity Description'
      _WarehouseActivity._Text[1:Language = $parameters.P_Language].ActivityName                                       as      ActivityName,

      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'WT Created By'
      CreatedByUser,
      
      @EndUserText.label: 'WT Created On (UTC)'
      WhseTaskCrtnUTCDateTime,
      @EndUserText.label: 'Warehouse Task Code'
      WarehouseTaskCodes,
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Executing Resource'
      ExecutingResource,
      @EndUserText.label: 'Movement Reason'
      WarehouseMovementsReason,

      @EndUserText.label: 'Product Name'
      ProductName,
      @EndUserText.label: 'Product Description'
      ProductDescription,
      @EndUserText.label: 'Product Batch'
      Batch,
//      @EndUserText.label: 'Requirement Segment'
//      RequirementSegment,
//      @EndUserText.label: 'Stock Segment'
//      StockSegment,
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Stock Type'
      EWMStockType, //TODO: add description?
      @EndUserText.label: 'Special Stock Document Category'
      StockDocumentCategory,
      @EndUserText.label: 'Sales Order or Project for Special Stock'
      StockDocumentNumber,
      @EndUserText.label: 'Sales Order Item for Special Stock'
      StockItemNumber,
      @EndUserText.label: 'Document Category'
      EWMDocumentCategory,
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Stock Usage'
      EWMStockUsage,
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Stock Owner'
      EWMStockOwner,
      @EndUserText.label: 'Partner Role of Stock Owner'
      StockOwnerPartnerRole,
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Party Entitled to Dispose'
      EntitledToDisposeParty,
      @EndUserText.label: 'Partner Role of Disposal Party'
      EntitledToDisposePartnerRole,
      @EndUserText.label: 'Counter for Stock Separation'
      CounterForStockSeparation,

      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }
      @EndUserText.label: 'WT Retention Quantity'
      WhseTaskRetentionQuantity,
      @EndUserText.label: 'Handling Unit Type'
      HandlingUnitType,

      @DefaultAggregation: #SUM
      @EndUserText.label: 'Capacity Consumption'
      WhseTaskCapacityConsumption,
      @EndUserText.label: 'Putaway PI Planned'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'EWMPutAwayPhysInvtryPlnSts'           
      PutAwayPhysInventoryIsPlanned,
      @EndUserText.label: 'Low Stock Check Planned'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'EWMWhseTskLowStkChkPlnSts'         
      WhseTaskLowStockCheckIsPlanned,
      @EndUserText.label: 'Putaway PI Planned'
      EWMPutAwayPhysInvtryPlnSts,
      @EndUserText.label: 'Low Stock Check Planned'      
      EWMWhseTskLowStkChkPlnSts,       
      
      @EndUserText.label: 'Shelf Life Expiration Date'
      ShelfLifeExpirationDate,
      //      WhseTaskGoodsReceiptDateTime,

      @EndUserText.label: 'Country or Region of Origin'
      CountryOfOrigin,

      @EndUserText.label: 'Stock ID of Warehouse Task'
      StockIdentificationOfWhseTask,
      @EndUserText.label: 'Consolidation Group'
      EWMConsolidationGroup,
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Source Storage Type'
      SourceStorageType,
      @EndUserText.label: 'Description of Source Storage Type'
      _SourceStorageType._Text[1:Language = $parameters.P_Language].EWMStorageTypeName                                    as      SourceStorageTypeName,

      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Source Storage Bin'
      SourceStorageBin,
      @EndUserText.label: 'Logical Position of Source HU'
      SourceHndlgUnitLogicalPosition,
      @EndUserText.label: 'Source Location Type'
      EWMSourceLocationType,
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Source Handling Unit'
      SourceHandlingUnit,
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Destination Storage Type'
      DestinationStorageType,
      @EndUserText.label: 'Description of Destination Storage Type'
      _DestStorageType._Text[1:Language = $parameters.P_Language].EWMStorageTypeName                                      as      DestinationStorageTypeName,

      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Destination Storage Bin'
      DestinationStorageBin,
      @EndUserText.label: 'Logical Position of Destination HU'
      DestHndlgUnitLogicalPosition,
      @EndUserText.label: 'Destination Location Type'
      EWMDestinationLocationType,
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Destination Handling Unit'
      DestinationHandlingUnit,

      @EndUserText.label: 'Destination Storage Bin Determined By'
      WhseTaskDestStorageBinDtmndBy,

      @EndUserText.label: 'WT for VAS'
      WhseTaskRefToValueAddedService,
      @EndUserText.label: 'Is Batch Change Not Allowed'
      BatchChangeIsNotAllowed,

      @EndUserText.label: 'Reference Document Category'
      EWMReferenceDocumentCategory,
      @EndUserText.label: 'Reference Delivery Document Type'
      EWMReferenceDeliveryDocType,
      @EndUserText.label: 'Reference Document Number'
      @Consumption.filter: { selectionType:      #RANGE,
                             multipleSelections: true,
                             mandatory:          false
                            }
      EWMRefDeliveryDocumentNumber,

      @EndUserText.label: 'Reference Document Item Number'
      @Consumption.filter: { selectionType:      #RANGE,
                             multipleSelections: true,
                             mandatory:          false
                            }
      EWMRefDeliveryDocumentItem,

      @EndUserText.label: 'Inbound Delivery Item Type'   
      EWMInboundDeliveryItemType,
      
      @EndUserText.label: 'Wave'
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      EWMWave,
      @EndUserText.label: 'Wave Item'
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      EWMWaveItem,

      @EndUserText.label: 'WT Type for Two-Step Picking'
      WhseTaskTwoStepPickingType,
      @EndUserText.label: 'Relevance for Two-Step Picking'
      WhseTaskTwoStepPickingRlvnce,

      @EndUserText.label: 'Is Kit Item Created Automatically'
      KitItemIsCreatedAutomatically,

      @EndUserText.label: 'Documentary Batch'
      IsDocumentaryBatch,
      @EndUserText.label: 'Production Supply Area'
      EWMProductionSupplyArea,
      @EndUserText.label: 'Manufacturing Order'
      ProductionOrder,
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Creation Date and Time of Warehouse Task'
      WhseTaskCrtnWhseTmznDateTime,
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Creation Date (Year) of Warehouse Task'
      WhseTaskCrtnWhseTmznYear,
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Creation Date (Month) of Warehouse Task'
      WhseTaskCrtnWhseTmznMonth,
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Creation Date of Warehouse Task'
      WhseTaskCrtnWhseTmznDate,
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Creation Time (Hour) of Warehouse Task'
      WhseTaskCrtnWhseTmznHour,
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Creation Time of Warehouse Task'
      WhseTaskCrtnWhseTmznTime,
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Confirmation Date and Time of Whse Task'
      WhseTaskConfWhseTmznDateTime,
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Confirmation Date (Year) of Whse Task'
      WhseTaskConfWhseTmznYear,
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Confirmation Date (Month) of Whse Task'
      WhseTaskConfWhseTmznMonth,
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Confirmation Date of Warehouse Task'
      WhseTaskConfWhseTmznDate,
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Confirmation Time (Hour) of Whse Task'
      WhseTaskConfWhseTmznHour,
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Confirmation Time of Warehouse Task'
      WhseTaskConfWhseTmznTime,
      
      @Consumption.filter: {
          selectionType: #INTERVAL,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Planned Closing Date and Time of WT'
      WhseTskPlndClsgWhseTmznDteTme,
      @Consumption.filter: {
          selectionType: #INTERVAL,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Planned Closing Date (Year) of Whse Task'
      WhseTskPlndClsgWhseTmznYear,
      @Consumption.filter: {
          selectionType: #INTERVAL,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Planned Closing Date (Month) of WT'
      WhseTskPlndClsgWhseTmznMonth,
      @Consumption.filter: {
          selectionType: #INTERVAL,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Planned Closing Date of Whse Task'
      WhseTskPlndClsgWhseTmznDate,
      @Consumption.filter: {
          selectionType: #INTERVAL,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Planned Closing Time (Hour) of Whse Task'
      WhseTskPlndClsgWhseTmznHour,
      @Consumption.filter: {
          selectionType: #INTERVAL,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Planned Closing Time of Whse Task'
      WhseTskPlndClsgWhseTmznTime,
      @EndUserText.label: 'Unique Kanban ID'
      Kanban,

      @EndUserText.label: 'WT Last Changed On (UTC)'
      WhseTaskLastChgUTCDateTime,

      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'WT Confirmed By'
      ConfirmedByUser,
      
      @EndUserText.label: 'WT Confirmed On (UTC)'
      WhseTaskConfUTCDateTime,
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'WT Exception Code'
      WarehouseTaskExceptionCode,
      @EndUserText.label: 'Description of WT Exception Code'
      _ExceptionCode._Text[1:Language = $parameters.P_Language].ExceptionCodeName                                      as      ExceptionCodeName,
      @EndUserText.label: 'Business Context'
      BusinessContext,
      @EndUserText.label: 'Description of Business Context'
      _BusinessContext._Text[1:Language = $parameters.P_Language].BusinessContextName                                  as      BusinessContextName,
      @EndUserText.label: 'Execution Step of Business Context'
      BusinessContextExecutionStep,
      @EndUserText.label: 'Desc. of Business Context Exec. Step'
      _BusinessContextExecStep._Text[1:Language = $parameters.P_Language].BusinessContextExecStepName                  as      BusinessContextExecStepName,
      @EndUserText.label: 'Warehouse Order Creation Rule'
      WarehouseOrderCreationRule,
      @EndUserText.label: 'Description of WO Creation Rule'
      _WhseOrderCtnRule._Text[1:Language = $parameters.P_Language].WarehouseOrderCreationRuleName                      as      WarehouseOrderCreationRuleName,
      @EndUserText.label: 'Overdue Time (Hour)'
      WhseTaskOverdueHours,
      @EndUserText.label: 'Overdue Time Desc.(Hour)'
      WhseTaskOverdueHoursDesc,      
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Higher-Level Warehouse Order'
      HigherLevelWarehouseOrder,
      
      @EndUserText.label: 'WO Started On (UTC)'
      WrhsOrdStrtUTCDateTime,
      
//      @EndUserText.label: 'WO Created On (UTC)'
//      WrhsOrdCrtnUTCDateTime,
      @EndUserText.label: 'Source Storage Bin Type'
      SourceStorageBinType,
      @EndUserText.label: 'Description of Source Storage Bin Type'
      _SrceStorageBinType._Text[1:Language = $parameters.P_Language].StorageBinTypeName                                as      SourceStorageBinTypeName,
      @EndUserText.label: 'Aisle of Source Storage Bin'
      SourceStorageBinAisle,
      @EndUserText.label: 'Stack of Source Storage Bin'
      SourceStorageBinStack,
      @EndUserText.label: 'Level of Source Storage Bin'
      SourceStorageBinLevel,
      @EndUserText.label: 'Access Type of Source Storage Bin'
      SourceStorageBinAccessType,
      @EndUserText.label: 'Type of Destination Storage Bin'
      DestinationStorageBinType,
      @EndUserText.label: 'Desc. of Destination Storage Bin Type'
      _DestStorageBinType._Text[1:Language = $parameters.P_Language].StorageBinTypeName                                as      DestinationStorageBinTypeName,
      @EndUserText.label: 'Aisle of Destination Storage Bin'
      DestinationStorageBinAisle,
      @EndUserText.label: 'Stack of Destination Storage Bin'
      DestinationStorageBinStack,
      @EndUserText.label: 'Level of Destination Storage Bin'
      DestinationStorageBinLevel,
      @EndUserText.label: 'Access Type of Destination Storage Bin'
      DestinationStorageBinAccType,

      @EndUserText.label: 'Base UoM'
      BaseUnit,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }
      @EndUserText.label: 'Target Quantity in Base UoM'
      TargetQuantityInBaseUnit,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }
      @EndUserText.label: 'Actual Quantity in Base UoM'
      ActualQuantityInBaseUnit,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }
      @EndUserText.label: 'Difference Quantity in Base UoM'
      DifferenceQuantityInBaseUnit,

      @EndUserText.label: 'Alternative UoM'
      AlternativeUnit,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'AlternativeUnit'} }
      @EndUserText.label: 'Target Quantity in Alternative UoM'
      TargetQuantityInAltvUnit,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'AlternativeUnit'} }
      @EndUserText.label: 'Actual Quantity in Alternative UoM'
      ActualQuantityInAltvUnit,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'AlternativeUnit'} }
      @EndUserText.label: 'Difference Quantity in Alternative UoM'
      DifferenceQuantityInAltvUnit,
      
      //Replace COUNT by SUM for sake of performance
      @EndUserText.label: 'Number of Warehouse Tasks'
      @AnalyticsDetails.query.decimals: 0
      NumberOfWarehouseTasks,

      @EndUserText.label: 'Number of Warehouse Task Items'
      @AnalyticsDetails.query.decimals: 0  
      NumberOfWarehouseTaskItems,

      @EndUserText.label: 'Net Weight UoM'
      WhseTaskNetWeightUnitOfMeasure,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'WhseTaskNetWeightUnitOfMeasure'} }
      @EndUserText.label: 'Net Weight Quantity'
      @AnalyticsDetails.query.decimals: 3
      WhseTaskNetWeight,

      @EndUserText.label: 'Net Volume UoM'
      WhseTaskNetVolumeUnitOfMeasure,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'WhseTaskNetVolumeUnitOfMeasure'} }
      @EndUserText.label: 'Net Volume Quantity'
      @AnalyticsDetails.query.decimals: 3
      WhseTaskNetVolume,

      --- Weight in Display Unit     
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'DisplayWeightUnit'} }
      @EndUserText.label: 'Total Net Weight of WT Items'
      @AnalyticsDetails.query.decimals: 5
      ItemNetWeightInDisplayUnit,
      
      DisplayWeightUnit,

      --- Volumn in Display Unit
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'DisplayVolumeUnit'} }
      @EndUserText.label: 'Total Volume of WT Items'
      @AnalyticsDetails.query.decimals: 5
      ItemNetVolumeInDisplayUnit,
      
      DisplayVolumeUnit,
      
      @EndUserText.label: 'Whse Task Confirmed Date Is Today'
      EWMWhseTaskConfDateIsToday,
      @EndUserText.label: 'Whse Task Has Exception'
      EWMWhseTaskHasException
}
```
