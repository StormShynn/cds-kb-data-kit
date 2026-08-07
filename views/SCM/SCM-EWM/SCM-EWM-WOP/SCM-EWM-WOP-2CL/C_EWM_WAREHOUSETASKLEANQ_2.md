---
name: C_EWM_WAREHOUSETASKLEANQ_2
description: This CDS view provides the prerequisites for answering the following business questions: How many warehouse tasks are there in my warehouse? How many warehouse task items are there in my warehouse? What is the total volume of warehouse task items? What is the total net weight of warehouse task items? What is the actual product quantity in base or alternative unit of measure (UoM)? What is the difference product quantity in base or alternative UoM? What is the target product quantity in base or alternative UoM? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EWM_WAREHOUSETASKLEANQ_2')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business questions: How many warehouse tasks are there in my warehouse? How many warehouse task items are there in my warehouse? What is the total volume of warehouse task items? What is the total net weight of warehouse task items? What is the actual product quantity in base or alternative unit of measure (UoM)? What is the difference product quantity in base or alternative UoM? What is the target product quantity in base or alternative UoM? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
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
  - metadata-only
---
# C_EWM_WAREHOUSETASKLEANQ_2

**This CDS view provides the prerequisites for answering the following business questions: How many warehouse tasks are there in my warehouse? How many warehouse task items are there in my warehouse? What is the total volume of warehouse task items? What is the total net weight of warehouse task items? What is the actual product quantity in base or alternative unit of measure (UoM)? What is the difference product quantity in base or alternative UoM? What is the target product quantity in base or alternative UoM? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EWM_WAREHOUSETASKLEANQ_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMWarehouse` |  | |  |  | `CHAR(4)` | Warehouse Number/Warehouse Complex |
| `WarehouseTask` |  | |  |  | `NUMC(12)` | Warehouse Task |
| `WarehouseTaskItem` |  | |  |  | `NUMC(4)` | Warehouse Task Item |
| `WarehouseName` |  | |  |  | `CHAR(40)` | Warehouse Number Description |
| `IsHandlingUnitWarehouseTask` |  | |  |  | `CHAR(1)` | Handling Unit Warehouse Task |
| `WarehouseProcessType` |  | |  |  | `CHAR(4)` | Warehouse Process Type |
| `WarehouseProcessTypeName` |  | |  |  | `CHAR(40)` | Description |
| `WarehouseProcessCategory` |  | |  |  | `CHAR(1)` | Warehouse Process Category |
| `WarehouseProcessCategoryName` |  | |  |  | `CHAR(40)` | Description |
| `StorageProcess` |  | |  |  | `CHAR(4)` | Storage Process |
| `StorageProcessName` |  | |  |  | `CHAR(40)` | Description |
| `WarehouseTaskStatus` |  | |  |  | `CHAR(1)` | Warehouse Task Status |
| `WarehouseTaskStatusName` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `WarehouseOrder` |  | |  |  | `NUMC(10)` | Warehouse Order Number |
| `WarehouseOrderStatus` |  | |  |  | `CHAR(1)` | Warehouse Order Status |
| `WarehouseOrderStatusName` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `ActivityArea` |  | |  |  | `CHAR(4)` | Activity Area |
| `ActivityAreaName` |  | |  |  | `CHAR(40)` | Description |
| `Activity` |  | |  |  | `CHAR(4)` | Activity |
| `ActivityName` |  | |  |  | `CHAR(40)` | Description |
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
| `SourceStorageTypeName` |  | |  |  | `CHAR(40)` | Description |
| `SourceStorageBin` |  | |  |  | `CHAR(18)` | Source Storage Bin |
| `SourceHndlgUnitLogicalPosition` |  | |  |  | `CHAR(2)` | Source Logical Position of Handling Unit in Storage Bin |
| `EWMSourceLocationType` |  | |  |  | `CHAR(1)` | Location Type |
| `SourceHandlingUnit` |  | |  |  | `CHAR(20)` |  |
| `DestinationStorageType` |  | |  |  | `CHAR(4)` | Destination Storage Type |
| `DestinationStorageTypeName` |  | |  |  | `CHAR(40)` | Description |
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
| `ExceptionCodeName` |  | |  |  | `CHAR(40)` | Description |
| `BusinessContext` |  | |  |  | `CHAR(3)` |  |
| `BusinessContextName` |  | |  |  | `CHAR(40)` | Description |
| `BusinessContextExecutionStep` |  | |  |  | `CHAR(2)` |  |
| `BusinessContextExecStepName` |  | |  |  | `CHAR(40)` | Description |
| `WarehouseOrderCreationRule` |  | |  |  | `CHAR(4)` | Warehouse Order Creation Rule |
| `WarehouseOrderCreationRuleName` |  | |  |  | `CHAR(40)` | Description |
| `WhseTaskOverdueHours` |  | |  |  | `DEC(16)` |  |
| `WhseTaskOverdueHoursDesc` |  | |  |  | `CHAR(60)` |  |
| `HigherLevelWarehouseOrder` |  | |  |  | `NUMC(10)` | Warehouse Order Number of Higher-Level Warehouse Order |
| `WrhsOrdStrtUTCDateTime` |  | |  |  | `DEC(15)` | Start Time |
| `SourceStorageBinType` |  | |  |  | `CHAR(4)` | Storage Bin Type |
| `SourceStorageBinTypeName` |  | |  |  | `CHAR(40)` | Description |
| `SourceStorageBinAisle` |  | |  |  | `CHAR(18)` | Storage Bin Aisle |
| `SourceStorageBinStack` |  | |  |  | `CHAR(18)` | Storage Bin Stack |
| `SourceStorageBinLevel` |  | |  |  | `CHAR(18)` | Storage Bin Level |
| `SourceStorageBinAccessType` |  | |  |  | `CHAR(4)` | Bin Access Type |
| `DestinationStorageBinType` |  | |  |  | `CHAR(4)` | Storage Bin Type |
| `DestinationStorageBinTypeName` |  | |  |  | `CHAR(40)` | Description |
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
