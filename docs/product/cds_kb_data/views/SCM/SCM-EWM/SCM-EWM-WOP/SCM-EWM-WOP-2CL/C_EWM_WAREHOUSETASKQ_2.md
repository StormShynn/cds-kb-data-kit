---
name: C_EWM_WAREHOUSETASKQ_2
description: "This CDS view provides the prerequisites for answering the following business questions: How many warehouse tasks are there in my warehouse? How many warehouse task items are there in my warehouse? What is the total volume of warehouse task items? What is the total net weight of warehouse task items? What is the actual product quantity in base or alternative unit of measure (UoM)? What is the difference product quantity in base or alternative UoM? What is the target product quantity in base or alternative UoM? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EWM_WAREHOUSETASKQ_2')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: How many warehouse tasks are there in my warehouse? How many warehouse task items are there in my warehouse? What is the total volume of warehouse task items? What is the total net weight of warehouse task items? What is the actual product quantity in base or alternative unit of measure (UoM)? What is the difference product quantity in base or alternative UoM? What is the target product quantity in base or alternative UoM? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Warehouse Task - Query — CDS view tiêu dùng dựa trên I_EWM_WhseTaskItemCube_2."
keywords:
  - "warehouse"
  - "task"
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
# C_EWM_WAREHOUSETASKQ_2

**This CDS view provides the prerequisites for answering the following business questions: How many warehouse tasks are there in my warehouse? How many warehouse task items are there in my warehouse? What is the total volume of warehouse task items? What is the total net weight of warehouse task items? What is the actual product quantity in base or alternative unit of measure (UoM)? What is the difference product quantity in base or alternative UoM? What is the target product quantity in base or alternative UoM? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EWM_WAREHOUSETASKQ_2')/$value) |

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
| `ExternalStorageProcessStep` |  | |  |  | `CHAR(4)` | External Storage Process Step |
| `ExternalStorageProcessStepName` |  | |  | `_ExtStorageProcessStep._Text[1:Language = $parameters.P_Language].ExternalStorageProcessStepName` | `CHAR(40)` | Description |
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
| `WarehouseTaskCodesName` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `ExecutingResource` |  | |  |  | `CHAR(18)` | Executing Resource (Means of Transport or User) |
| `WarehouseMovementsReason` |  | |  |  | `CHAR(4)` | Reason for Movements in the Warehouse |
| `EWMWarehouseTaskPriority` |  | |  |  | `INT1(3)` | Priority |
| `ProductName` |  | |  |  | `CHAR(40)` | Product |
| `ProductDescription` |  | |  |  | `CHAR(40)` | Product Description |
| `Batch` |  | |  |  | `CHAR(10)` | Batch |
| `RequirementSegment` |  | |  |  | `CHAR(40)` | Requirement Segment |
| `StockSegment` |  | |  |  | `CHAR(40)` | Stock Segment |
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
| `HazardousSubstanceIndicator` |  | |  |  | `CHAR(1)` | Hazardous Substance |
| `StockIdentificationOfWhseTask` |  | |  |  | `CHAR(20)` | Stock Identification of Warehouse Task |
| `EWMConsolidationGroup` |  | |  |  | `CHAR(10)` | Consolidation Group |
| `SourceStorageType` |  | |  |  | `CHAR(4)` | Source Storage Type |
| `SourceStorageTypeName` |  | |  | `_SourceStorageType._Text[1:Language = $parameters.P_Language].EWMStorageTypeName` | `CHAR(40)` | Description |
| `SourceStorageSection` |  | |  |  | `CHAR(4)` | Source Storage Section |
| `SourceStorageSectionName` |  | |  | `_SrceStorageSection._Text[1:Language = $parameters.P_Language].StorageSectionName` | `CHAR(40)` | Description |
| `SourceStorageBin` |  | |  |  | `CHAR(18)` | Source Storage Bin |
| `SourceHndlgUnitLogicalPosition` |  | |  |  | `CHAR(2)` | Source Logical Position of Handling Unit in Storage Bin |
| `SourceResource` |  | |  |  | `CHAR(18)` | Source Resource (Means of Transport or User) |
| `SourceTransportationUnit` |  | |  |  | `CHAR(18)` | Source Transportation Unit (Internal) |
| `EWMSourceLocationType` |  | |  |  | `CHAR(1)` | Location Type |
| `SourceHandlingUnit` |  | |  |  | `CHAR(20)` |  |
| `DestinationStorageType` |  | |  |  | `CHAR(4)` | Destination Storage Type |
| `DestinationStorageTypeName` |  | |  | `_DestStorageType._Text[1:Language = $parameters.P_Language].EWMStorageTypeName` | `CHAR(40)` | Description |
| `DestinationStorageSection` |  | |  |  | `CHAR(4)` | Destination Storage Section |
| `StorageSectionName` |  | |  | `_DestStorageSection._Text[1:Language = $parameters.P_Language].StorageSectionName` | `CHAR(40)` | Description |
| `DestinationStorageBin` |  | |  |  | `CHAR(18)` | Destination Storage Bin |
| `DestHndlgUnitLogicalPosition` |  | |  |  | `CHAR(2)` | Destination Logical Position of Handling Unit in Storage Bin |
| `DestinationResource` |  | |  |  | `CHAR(18)` | Destination Resource (Means of Transport or User) |
| `DestinationTransportationUnit` |  | |  |  | `CHAR(18)` | Destination Transportation Unit (Internal) |
| `EWMDestinationLocationType` |  | |  |  | `CHAR(1)` | Location Type |
| `DestinationHandlingUnit` |  | |  |  | `CHAR(20)` | Destination Handling Unit |
| `WhseTaskDestStorageBinDtmndBy` |  | |  |  | `CHAR(1)` | Destination Storage Bin Determined By |
| `WrhsTaskSubsystemTransmn` |  | |  |  | `CHAR(1)` | Indicator: Pass on Warehouse Task to Subsystem |
| `WrhsTaskSubsystemTransmnName` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `WhseTaskPlannedProcessingTime` |  | |  |  | `QUAN(13)` | Planned Proc. Time in Warehouse Task |
| `WhseTaskProcgTimeDetnTimeUnit` |  | |  |  | `UNIT(3)` | Time Unit |
| `WhseTaskRefToValueAddedService` |  | |  |  | `CHAR(1)` | WT with Reference to a VAS |
| `BatchChangeIsNotAllowed` |  | |  |  | `CHAR(1)` | Changing the Batch is not Allowed |
| `EWMReferenceDocumentCategory` |  | |  |  | `CHAR(3)` | Doc. Category for Doc. Reference and Doc.-Related Stock |
| `EWMReferenceDeliveryDocType` |  | |  |  | `CHAR(4)` | Document Type |
| `EWMRefDeliveryDocumentNumber` |  | |  |  | `CHAR(35)` | Document Number |
| `EWMRefDeliveryDocumentItem` |  | |  |  | `NUMC(10)` | Item Number |
| `Wave` |  | |  |  | `NUMC(10)` | Numeric Character Field, Length 10 |
| `EWMWave` |  | |  |  | `NUMC(10)` | Wave |
| `WaveItem` |  | |  |  | `NUMC(6)` | numc06 |
| `EWMWaveItem` |  | |  |  | `NUMC(6)` | Wave Item |
| `PlndLoadCompletionUTCDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `PlndPackCompletionUTCDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `PlndPickCompltnUTCDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `PlndStagingCompltnUTCDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WaveActlReleasedUTCDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WaveCutoffWhseTmznDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WavePlndRelWhseTmznDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `PlndPickCmpltWhseTmznDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `PlndPackCmpltWhseTmznDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `PlndStggCmpltWhseTmznDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WaveCompletionWhseTmznDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WaveActualReldWhseTmznDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WaveActualReldWhseTmznYear` |  | |  |  | `NUMC(4)` |  |
| `WaveActualReldWhseTmznMonth` |  | |  |  | `NUMC(6)` |  |
| `WaveActualReldWhseTmznDate` |  | |  |  | `DATS(8)` |  |
| `WaveActualReldWhseTmznHour` |  | |  |  | `NUMC(10)` |  |
| `WaveActualReldWhseTmznTime` |  | |  |  | `TIMS(6)` |  |
| `WaveTemplate` |  | |  |  | `NUMC(10)` | Numeric Character Field, Length 10 |
| `WaveTemplateName` |  | |  |  | `CHAR(40)` | Description |
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
| `WhseTaskCrtnRnddTo10MinsTime` |  | |  |  | `TIMS(6)` |  |
| `WhseTaskConfWhseTmznDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WhseTaskConfWhseTmznYear` |  | |  |  | `NUMC(4)` |  |
| `WhseTaskConfWhseTmznMonth` |  | |  |  | `NUMC(6)` |  |
| `WhseTaskConfWhseTmznDate` |  | |  |  | `DATS(8)` |  |
| `WhseTaskConfWhseTmznHour` |  | |  |  | `NUMC(10)` |  |
| `WhseTaskConfWhseTmznTime` |  | |  |  | `TIMS(6)` |  |
| `WhseTaskConfRnddTo10MinsTime` |  | |  |  | `TIMS(6)` |  |
| `WhseTskPlndClsgWhseTmznDteTme` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WhseTskPlndClsgWhseTmznYear` |  | |  |  | `NUMC(4)` |  |
| `WhseTskPlndClsgWhseTmznMonth` |  | |  |  | `NUMC(6)` |  |
| `WhseTskPlndClsgWhseTmznDate` |  | |  |  | `DATS(8)` |  |
| `WhseTskPlndClsgWhseTmznHour` |  | |  |  | `NUMC(10)` |  |
| `WhseTskPlndClsgWhseTmznTime` |  | |  |  | `TIMS(6)` |  |
| `WhseTskPlndClsgRnddTo10MinsTme` |  | |  |  | `TIMS(6)` |  |
| `Kanban` |  | |  |  | `NUMC(10)` | Kanban Identification Number |
| `WhseTaskLastChgUTCDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `ConfirmedByUser` |  | |  |  | `CHAR(12)` |  |
| `WhseTaskConfUTCDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `Processor` |  | |  |  | `CHAR(12)` |  |
| `WarehouseTaskExceptionCode` |  | |  |  | `CHAR(4)` |  |
| `ExceptionCodeName` |  | |  | `_ExceptionCode._Text[1:Language = $parameters.P_Language].ExceptionCodeName` | `CHAR(40)` | Description |
| `BusinessContext` |  | |  |  | `CHAR(3)` |  |
| `BusinessContextName` |  | |  | `_BusinessContext._Text[1:Language = $parameters.P_Language].BusinessContextName` | `CHAR(40)` | Description |
| `BusinessContextExecutionStep` |  | |  |  | `CHAR(2)` |  |
| `BusinessContextExecStepName` |  | |  | `_BusinessContextExecStep._Text[1:Language = $parameters.P_Language].BusinessContextExecStepName` | `CHAR(40)` | Description |
| `ExecutingResourceGroup` |  | |  |  | `CHAR(4)` |  |
| `ExecutingResourceGroupName` |  | |  | `_ResourceGroup._Text[1:Language = $parameters.P_Language].ResourceGroupName` | `CHAR(40)` | Description |
| `ExecutingResourceType` |  | |  |  | `CHAR(4)` |  |
| `ExecutingResourceTypeName` |  | |  | `_ResourceType._Text[1:Language = $parameters.P_Language].ResourceTypeName` | `CHAR(40)` | Description |
| `WarehouseOrderCreationRule` |  | |  |  | `CHAR(4)` | Warehouse Order Creation Rule |
| `WarehouseOrderCreationRuleName` |  | |  | `_WhseOrderCtnRule._Text[1:Language = $parameters.P_Language].WarehouseOrderCreationRuleName` | `CHAR(40)` | Description |
| `WhseTaskOverdueHours` |  | |  |  | `DEC(16)` |  |
| `WhseTaskOverdueHoursDesc` |  | |  |  | `CHAR(60)` |  |
| `HigherLevelWarehouseOrder` |  | |  |  | `NUMC(10)` | Warehouse Order Number of Higher-Level Warehouse Order |
| `WarehouseOrderIsSplit` |  | |  |  | `CHAR(1)` | Warehouse Order Was Split |
| `WrhsOrdStrtUTCDateTime` |  | |  |  | `DEC(15)` | Start Time |
| `PickCompltnUTCDateTime` |  | |  |  | `DEC(15)` | Planned Closing Date/Time |
| `WarehouseOrderQueue` |  | |  |  | `CHAR(10)` | Queue |
| `WarehouseOrderQueueName` |  | |  | `_WarehouseOrderQueue._Text[1:Language = $parameters.P_Language].WarehouseOrderQueueName` | `CHAR(40)` | Description |
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
| `NumberOfWaves` |  | |  | `1` | `INT1(3)` |  |
| `NumberOfWaveItems` |  | |  | `1` | `INT1(3)` |  |
| `WhseTaskNetWeightUnitOfMeasure` |  | |  |  | `UNIT(3)` | Weight Unit |
| `WhseTaskNetWeight` |  | |  |  | `QUAN(15)` | Loading or Net Weight |
| `WhseTaskNetVolumeUnitOfMeasure` |  | |  |  | `UNIT(3)` | Volume Unit |
| `WhseTaskNetVolume` |  | |  |  | `QUAN(15)` | Loading or Net Volume |
| `ItemNetWeightInDisplayUnit` |  | |  |  | `QUAN(31)` |  |
| `DisplayWeightUnit` |  | |  |  | `UNIT(3)` | Weight Unit |
| `ItemNetVolumeInDisplayUnit` |  | |  |  | `QUAN(31)` |  |
| `DisplayVolumeUnit` |  | |  |  | `UNIT(3)` | Volume Unit |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EWM_WAREHOUSETASKQ_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EWM_WAREHOUSETASKQ_2')/$value)*

```abap
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Warehouse Task - Query'

@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY]
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY

@VDM.viewType:#CONSUMPTION
@OData.publish:            true
@Analytics.query:              true
@Analytics.technicalName: 'CEWMWTQ2'
define view entity C_EWM_WarehouseTaskQ_2 
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
      _Warehouse._Text[1:Language = $parameters.P_Language].EWMWarehouseDescription                               as WarehouseName,

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
      _WarehouseProcessType._Text[1:Language = $parameters.P_Language].WarehouseProcessTypeName         as WarehouseProcessTypeName,

      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Warehouse Process Category'
      WarehouseProcessCategory,
      @EndUserText.label: 'Desc. of Warehouse Process Category'
      _WarehouseProcessCategory._Text[1:Language = $parameters.P_Language].WarehouseProcessCategoryName as WarehouseProcessCategoryName,

      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Storage Process'
      StorageProcess,
      @EndUserText.label: 'Description of Storage Process'
      _StorageProcess._Text[1:Language = $parameters.P_Language].StorageProcessName                     as StorageProcessName,

      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'External Storage Process Step'
      ExternalStorageProcessStep,
      @EndUserText.label: 'Desc. of External Storage Process Step'
      _ExtStorageProcessStep._Text[1:Language = $parameters.P_Language].ExternalStorageProcessStepName  as ExternalStorageProcessStepName,

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
      _ActivityArea._Text[1:Language = $parameters.P_Language].ActivityAreaName                         as ActivityAreaName,
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Activity'
      Activity,
      @EndUserText.label: 'Activity Description'
      _WarehouseActivity._Text[1:Language = $parameters.P_Language].ActivityName                        as ActivityName,

      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'WT Created By'
      CreatedByUser,

      @Semantics.systemDateTime.createdAt: true
      @EndUserText.label: 'WT Created On (UTC)'
      WhseTaskCrtnUTCDateTime,

      //for test
      @Consumption.filter: {
          selectionType: #INTERVAL,
          multipleSelections: true,
          mandatory: false
      }

      @EndUserText.label: 'Warehouse Task Code'
      WarehouseTaskCodes,
      @EndUserText.label: 'Description of Warehouse Task Code'
      WarehouseTaskCodesName,
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Executing Resource'
      ExecutingResource,
      @EndUserText.label: 'Movement Reason'
      WarehouseMovementsReason,
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Priority'
      EWMWarehouseTaskPriority,

      @EndUserText.label: 'Product Name'
      ProductName,
      @EndUserText.label: 'Product Description'
      ProductDescription,
      @EndUserText.label: 'Product Batch'
      Batch,
      @EndUserText.label: 'Requirement Segment'
      RequirementSegment,
      @EndUserText.label: 'Stock Segment'
      StockSegment,
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Stock Type'
      EWMStockType, 
      @EndUserText.label: 'Document Category of Special Stock'
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

      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: false,
          mandatory: false
      }
      @EndUserText.label: 'Hazardous Substance'
      HazardousSubstanceIndicator,

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
      _SourceStorageType._Text[1:Language = $parameters.P_Language].EWMStorageTypeName                     as SourceStorageTypeName,
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Source Storage Section'
      SourceStorageSection,

      @EndUserText.label: 'Description of Source Storage Section'
      _SrceStorageSection._Text[1:Language = $parameters.P_Language].StorageSectionName                 as SourceStorageSectionName,

      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Source Storage Bin'
      SourceStorageBin,
      @EndUserText.label: 'Logical Position of Source HU'
      SourceHndlgUnitLogicalPosition,
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Source Resource'
      SourceResource,
      @EndUserText.label: 'Source Transportation Unit'
      SourceTransportationUnit,
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
      _DestStorageType._Text[1:Language = $parameters.P_Language].EWMStorageTypeName                       as DestinationStorageTypeName,

      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Destination Storage Section'
      DestinationStorageSection,
      @EndUserText.label: 'Desc. of Destination Storage Section'
      _DestStorageSection._Text[1:Language = $parameters.P_Language].StorageSectionName                 as StorageSectionName,
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Destination Storage Bin'
      DestinationStorageBin,
      @EndUserText.label: 'Logical Position of Destination HU'
      DestHndlgUnitLogicalPosition,
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Destination Resource'
      DestinationResource,
      @EndUserText.label: 'Destination Transportation Unit'
      DestinationTransportationUnit,
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
      @EndUserText.label: 'WT to Subsystem Code'
      WrhsTaskSubsystemTransmn,
      @EndUserText.label: 'Description of WT to Subsystem Code'
      WrhsTaskSubsystemTransmnName,

      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'WhseTaskProcgTimeDetnTimeUnit'} }
      @EndUserText.label: 'Planned Proc. Time'
      @AnalyticsDetails.query.decimals: 3
      WhseTaskPlannedProcessingTime,

      @EndUserText.label: 'Time Unit for Planned Process'
      WhseTaskProcgTimeDetnTimeUnit,
      @EndUserText.label: 'WT for VAS Indicator'
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


      @EndUserText.label: 'Wave'
      @Consumption.filter: { selectionType:      #RANGE,
                             multipleSelections: true,
                             mandatory:          false
                            }
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'EWMWave'
      Wave,
      EWMWave,

      @EndUserText.label: 'Wave Item'
      @Consumption.filter: { selectionType:      #RANGE,
                             multipleSelections: true,
                             mandatory:          false
                            }
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'EWMWaveItem'
      WaveItem,
      EWMWaveItem,

      @EndUserText.label: 'Plnd Loading Completed On (UTC)'
      PlndLoadCompletionUTCDateTime,

      @EndUserText.label: 'Plnd Packing Completed On (UTC)'
      PlndPackCompletionUTCDateTime,

      @EndUserText.label: 'Plnd Picking Completed On (UTC)'
      PlndPickCompltnUTCDateTime,

      @EndUserText.label: 'Plnd Staging Completed On (UTC)'
      PlndStagingCompltnUTCDateTime,

      @EndUserText.label: 'Wave Actually Released On (UTC)'
      WaveActlReleasedUTCDateTime,

      @EndUserText.label: 'Cutoff Date and Time of Wave'
      WaveCutoffWhseTmznDateTime,
      @EndUserText.label: 'Planned Release Date and Time of Wave'
      WavePlndRelWhseTmznDateTime,
      @EndUserText.label: 'Picking Completion Date and Time of Wave'
      PlndPickCmpltWhseTmznDateTime,
      @EndUserText.label: 'Packing Completion Date and Time of Wave'
      PlndPackCmpltWhseTmznDateTime,
      @EndUserText.label: 'Staging Completion Date and Time of Wave'
      PlndStggCmpltWhseTmznDateTime,
      @EndUserText.label: 'Completion Date and Time of Wave'
      WaveCompletionWhseTmznDateTime,
      @EndUserText.label: 'Actual Release Date and Time of Wave'
      WaveActualReldWhseTmznDateTime,
      @EndUserText.label: 'Actual Release Date (Year) of Wave'
      WaveActualReldWhseTmznYear,
      @EndUserText.label: 'Actual Release Date (Month) of Wave'
      WaveActualReldWhseTmznMonth,
      @EndUserText.label: 'Actual Release Date of Wave'
      WaveActualReldWhseTmznDate,
      @EndUserText.label: 'Actual Release Time (Hour) of Wave'
      WaveActualReldWhseTmznHour,
      @EndUserText.label: 'Actual Release Time of Wave'
      WaveActualReldWhseTmznTime,

      @EndUserText.label: 'Wave Template'
      WaveTemplate,
      @EndUserText.label: 'Description of Wave Template'
      WaveTemplateName,

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
          selectionType: #INTERVAL,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Creation Date and Time of Warehouse Task'
      WhseTaskCrtnWhseTmznDateTime,
      @Consumption.filter: {
          selectionType: #INTERVAL,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Creation Date (Year) of Warehouse Task'
      WhseTaskCrtnWhseTmznYear,
      @Consumption.filter: {
          selectionType: #INTERVAL,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Creation Date (Month) of Warehouse Task'
      WhseTaskCrtnWhseTmznMonth,
      @Consumption.filter: {
          selectionType: #INTERVAL,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Creation Date of Warehouse Task'
      WhseTaskCrtnWhseTmznDate,
      @Consumption.filter: {
          selectionType: #INTERVAL,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Creation Time (Hour) of Warehouse Task'
      WhseTaskCrtnWhseTmznHour,
      @Consumption.filter: {
          selectionType: #INTERVAL,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Creation Time of Warehouse Task'
      WhseTaskCrtnWhseTmznTime,
      @Consumption.filter: {
          selectionType: #INTERVAL,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Crtn Time of WT Down to Nearest 10 Mins'
      WhseTaskCrtnRnddTo10MinsTime,
      @Consumption.filter: {
          selectionType: #INTERVAL,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Confirmation Date and Time of Whse Task'
      WhseTaskConfWhseTmznDateTime,
      @Consumption.filter: {
          selectionType: #INTERVAL,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Confirmation Date (Year) of Whse Task'
      WhseTaskConfWhseTmznYear,
      @Consumption.filter: {
          selectionType: #INTERVAL,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Confirmation Date (Month) of Whse Task'
      WhseTaskConfWhseTmznMonth,
      @Consumption.filter: {
          selectionType: #INTERVAL,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Confirmation Date of Warehouse Task'
      WhseTaskConfWhseTmznDate,
      @Consumption.filter: {
          selectionType: #INTERVAL,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Confirmation Time (Hour) of Whse Task'
      WhseTaskConfWhseTmznHour,
      @Consumption.filter: {
          selectionType: #INTERVAL,
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
      @EndUserText.label: 'Conf. Time of WT Down to Nearest 10 Mins'
      WhseTaskConfRnddTo10MinsTime,
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
      @Consumption.filter: {
          selectionType: #INTERVAL,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'WT Plnd Cl. Tme Down to Nearest 10 Mins'
      WhseTskPlndClsgRnddTo10MinsTme,
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
      @EndUserText.label: 'Processor'
      Processor,
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'WT Exception Code'
      WarehouseTaskExceptionCode,
      @EndUserText.label: 'Description of WT Exception Code'
      _ExceptionCode._Text[1:Language = $parameters.P_Language].ExceptionCodeName                       as ExceptionCodeName,
      @EndUserText.label: 'Business Context'
      BusinessContext,
      @EndUserText.label: 'Description of Business Context'
      _BusinessContext._Text[1:Language = $parameters.P_Language].BusinessContextName                   as BusinessContextName,
      @EndUserText.label: 'Business Context Execution Step'
      BusinessContextExecutionStep,
      @EndUserText.label: 'Desc. of Business Context Exec. Step'
      _BusinessContextExecStep._Text[1:Language = $parameters.P_Language].BusinessContextExecStepName   as BusinessContextExecStepName,
      @EndUserText.label: 'Executing Resource Group'
      ExecutingResourceGroup,
      @EndUserText.label: 'Description of Executing Resource Group'
      _ResourceGroup._Text[1:Language = $parameters.P_Language].ResourceGroupName                       as ExecutingResourceGroupName,
      @EndUserText.label: 'Executing Resource Type'
      ExecutingResourceType,
      @EndUserText.label: 'Description of Executing Resource Type'
      _ResourceType._Text[1:Language = $parameters.P_Language].ResourceTypeName                         as ExecutingResourceTypeName,
      @EndUserText.label: 'Warehouse Order Creation Rule'
      WarehouseOrderCreationRule,
      @EndUserText.label: 'Description of WO Creation Rule'
      _WhseOrderCtnRule._Text[1:Language = $parameters.P_Language].WarehouseOrderCreationRuleName       as WarehouseOrderCreationRuleName,

      //      @EndUserText.label: 'WO Latest Start Date and Time (UTC)'
      //      LatestStartUTCDateTime,
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
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
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: false,
          mandatory: false
      }
      @EndUserText.label: 'Warehouse Order Splitting'
      WarehouseOrderIsSplit,

      @EndUserText.label: 'Warehouse Order Started On (UTC)'
      WrhsOrdStrtUTCDateTime,

      @EndUserText.label: 'Planned WT Closing Time (UTC)'
      PickCompltnUTCDateTime,
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      @EndUserText.label: 'Warehouse Order Queue'
      WarehouseOrderQueue,
      @EndUserText.label: 'Description of Warehouse Order Queue'
      _WarehouseOrderQueue._Text[1:Language = $parameters.P_Language].WarehouseOrderQueueName           as WarehouseOrderQueueName,

      //      @EndUserText.label: 'WO Created On (UTC)'
      //      WrhsOrdCrtnUTCDateTime,
      @EndUserText.label: 'Source Storage Bin Type'
      SourceStorageBinType,
      @EndUserText.label: 'Description of Source Storage Bin Type'
      _SrceStorageBinType._Text[1:Language = $parameters.P_Language].StorageBinTypeName                 as SourceStorageBinTypeName,
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
      _DestStorageBinType._Text[1:Language = $parameters.P_Language].StorageBinTypeName                 as DestinationStorageBinTypeName,
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
      //replace COUNT by SUM for sake of performance
      @EndUserText.label: 'Number of Warehouse Tasks'
      @AnalyticsDetails.query.decimals: 0
      NumberOfWarehouseTasks,

      @EndUserText.label: 'Number of Warehouse Task Items'
      @AnalyticsDetails.query.decimals: 0
      NumberOfWarehouseTaskItems,



      @EndUserText.label: 'Number of Waves'
      @DefaultAggregation: #FORMULA
      @AnalyticsDetails: {
      exceptionAggregationSteps: [{ exceptionAggregationBehavior : #COUNT, exceptionAggregationElements: ['EWMWarehouse', 'Wave']} ]}
      1                                                                                                 as NumberOfWaves,


      @EndUserText.label: 'Number of Wave Items'
      @DefaultAggregation: #FORMULA
      @AnalyticsDetails: {
      exceptionAggregationSteps: [{ exceptionAggregationBehavior : #COUNT, exceptionAggregationElements: ['EWMWarehouse', 'Wave', 'WaveItem']} ]}
      1                                                                                                 as NumberOfWaveItems,


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
      DisplayVolumeUnit

}
```
