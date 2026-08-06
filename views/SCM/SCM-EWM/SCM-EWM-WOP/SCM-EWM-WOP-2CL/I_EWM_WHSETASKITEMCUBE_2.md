---
name: I_EWM_WHSETASKITEMCUBE_2
description: This CDS view provides information about warehouse task items in your warehouse. This CDS view provides the data to answer the following business questions: What are the warehouse task items and their information in your warehouse? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_WHSETASKITEMCUBE_2')/$value
semantic_en: This CDS view provides information about warehouse task items in your warehouse. This CDS view provides the data to answer the following business questions: What are the warehouse task items and their information in your warehouse? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - SCM
  - bo:companycode
  - component:SCM-EWM-WOP-2CL
  - interface-view
  - SCM-EWM
  - SCM-EWM-WOP
  - SCM-EWM-WOP-2CL
  - task
  - metadata-only
---
# I_EWM_WHSETASKITEMCUBE_2

**This CDS view provides information about warehouse task items in your warehouse. This CDS view provides the data to answer the following business questions: What are the warehouse task items and their information in your warehouse? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_WHSETASKITEMCUBE_2')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `EWMWarehouse` | `CHAR(4)` | Warehouse Number/Warehouse Complex |
| `WarehouseTask` | `NUMC(12)` | Warehouse Task |
| `WarehouseTaskItem` | `NUMC(4)` | Warehouse Task Item |
| `NumberOfWarehouseTasks` | `FLTP(16)` |  |
| `NumberOfWarehouseTaskItems` | `FLTP(16)` |  |
| `IsHandlingUnitWarehouseTask` | `CHAR(1)` | Handling Unit Warehouse Task |
| `WarehouseProcessType` | `CHAR(4)` | Warehouse Process Type |
| `WarehouseProcessCategory` | `CHAR(1)` | Warehouse Process Category |
| `StorageProcess` | `CHAR(4)` | Storage Process |
| `ExternalStorageProcessStep` | `CHAR(4)` | External Storage Process Step |
| `WarehouseTaskStatus` | `CHAR(1)` | Warehouse Task Status |
| `CreatedByUser` | `CHAR(12)` | Created By |
| `WhseTaskCrtnUTCDateTime` | `DEC(15)` | Creation Time |
| `WarehouseTaskCodes` | `CHAR(1)` | Calling Application/Special Function for WT Creation/Conf. |
| `ExecutingResource` | `CHAR(18)` | Executing Resource (Means of Transport or User) |
| `WarehouseMovementsReason` | `CHAR(4)` | Reason for Movements in the Warehouse |
| `EWMWarehouseTaskPriority` | `INT1(3)` | Priority |
| `StockItemUUID` | `RAW(16)` | GUID Stock Item |
| `CurrentNumberOfKeyTable` | `CHAR(3)` | Current Nummer of Key Table |
| `ProductUUID` | `RAW(16)` | Product UUID |
| `ProductName` | `CHAR(40)` | Product |
| `ProductDescription` | `CHAR(40)` | Product Description |
| `EWMStockType` | `CHAR(2)` | Stock Type |
| `StockDocumentCategory` | `CHAR(3)` | Special Reference Stock Type |
| `StockDocumentNumber` | `CHAR(35)` | Reference Document for Special Reference Stock |
| `StockItemNumber` | `NUMC(10)` | Sales Order Item for Sales Order Stock |
| `EWMDocumentCategory` | `CHAR(3)` | Doc. Category for Doc. Reference and Doc.-Related Stock |
| `EWMStockUsage` | `CHAR(1)` | Stock Usage |
| `EWMStockOwner` | `CHAR(10)` | Owner |
| `StockOwnerPartnerRole` | `CHAR(2)` | Partner Role of Owner |
| `EntitledToDisposeParty` | `CHAR(10)` | Party Entitled to Dispose |
| `EntitledToDisposePartnerRole` | `CHAR(2)` | Partner Role of Party Entitled to Dispose |
| `IsBusinessPurposeCompleted` | `CHAR(1)` |  |
| `CounterForStockSeparation` | `NUMC(6)` | Counter for Stock Separation |
| `Batch` | `CHAR(10)` | Batch |
| `RequirementSegment` | `CHAR(40)` | Requirement Segment |
| `StockSegment` | `CHAR(40)` | Stock Segment |
| `WhseTaskRetentionQuantity` | `QUAN(31)` | Retention Quantity |
| `HandlingUnitType` | `CHAR(4)` | Handling Unit Type |
| `WhseTaskNetWeightUnitOfMeasure` | `UNIT(3)` | Weight Unit |
| `WhseTaskNetWeight` | `QUAN(15)` | Loading or Net Weight |
| `WhseTaskNetVolumeUnitOfMeasure` | `UNIT(3)` | Volume Unit |
| `WhseTaskNetVolume` | `QUAN(15)` | Loading or Net Volume |
| `ItemNetVolumeInDisplayUnit` | `QUAN(31)` |  |
| `DisplayVolumeUnit` | `UNIT(3)` | Volume Unit |
| `ItemNetWeightInDisplayUnit` | `QUAN(31)` |  |
| `DisplayWeightUnit` | `UNIT(3)` | Weight Unit |
| `WhseTaskCapacityConsumption` | `DEC(15)` | Capacity Consumption |
| `PutAwayPhysInventoryIsPlanned` | `CHAR(1)` | Truth Value: True/False |
| `WhseTaskLowStockCheckIsPlanned` | `CHAR(1)` | Truth Value: True/False |
| `EWMPutAwayPhysInvtryPlnSts` | `CHAR(1)` | Putaway Physical Inventory Planned |
| `EWMWhseTskLowStkChkPlnSts` | `CHAR(1)` | Low Stock Check Planned |
| `ShelfLifeExpirationDate` | `DATS(8)` | Shelf Life Expiration Date |
| `CountryOfOrigin` | `CHAR(3)` | Country/Region of Origin |
| `HazardousSubstanceIndicator` | `CHAR(1)` | Hazardous Substance |
| `WhseTaskQualityInspectionType` | `CHAR(1)` | Inspection ID Type |
| `QualityInspectionDocUUID` | `RAW(16)` | Identification of a Quality Object |
| `StockIdentificationOfWhseTask` | `CHAR(20)` | Stock Identification of Warehouse Task |
| `EWMConsolidationGroup` | `CHAR(10)` | Consolidation Group |
| `SourceStorageType` | `CHAR(4)` | Source Storage Type |
| `SourceStorageSection` | `CHAR(4)` | Source Storage Section |
| `SourceStorageBin` | `CHAR(18)` | Source Storage Bin |
| `SourceHndlgUnitLogicalPosition` | `CHAR(2)` | Source Logical Position of Handling Unit in Storage Bin |
| `SourceResource` | `CHAR(18)` | Source Resource (Means of Transport or User) |
| `SourceTransportationUnit` | `CHAR(18)` | Source Transportation Unit (Internal) |
| `EWMSourceLocationType` | `CHAR(1)` | Location Type |
| `SourceHandlingUnitUUID` | `RAW(16)` | Unique Internal Identification of a Handling Unit |
| `SourceHandlingUnit` | `CHAR(20)` |  |
| `DestinationStorageType` | `CHAR(4)` | Destination Storage Type |
| `DestinationStorageSection` | `CHAR(4)` | Destination Storage Section |
| `DestinationStorageBin` | `CHAR(18)` | Destination Storage Bin |
| `DestHndlgUnitLogicalPosition` | `CHAR(2)` | Destination Logical Position of Handling Unit in Storage Bin |
| `DestinationResource` | `CHAR(18)` | Destination Resource (Means of Transport or User) |
| `DestinationTransportationUnit` | `CHAR(18)` | Destination Transportation Unit (Internal) |
| `EWMDestinationLocationType` | `CHAR(1)` | Location Type |
| `DestinationHandlingUnitUUID` | `RAW(16)` | Unique Internal Identification of a Handling Unit |
| `DestinationHandlingUnit` | `CHAR(20)` | Destination Handling Unit |
| `WhseTaskDestStorageBinDtmndBy` | `CHAR(1)` | Destination Storage Bin Determined By |
| `WrhsTaskSubsystemTransmn` | `CHAR(1)` | Indicator: Pass on Warehouse Task to Subsystem |
| `WhseTaskPlannedProcessingTime` | `QUAN(13)` | Planned Proc. Time in Warehouse Task |
| `WhseTaskProcgTimeDetnTimeUnit` | `UNIT(3)` | Time Unit |
| `WhseTaskRefToValueAddedService` | `CHAR(1)` | WT with Reference to a VAS |
| `BatchChangeIsNotAllowed` | `CHAR(1)` | Changing the Batch is not Allowed |
| `ReferenceDocumentUUID` | `RAW(16)` | Doc. Identification for Document-Related Stocks |
| `ReferenceDocumentItemUUID` | `RAW(16)` | Document Item for Document-Related Stocks |
| `EWMReferenceDocumentCategory` | `CHAR(3)` | Doc. Category for Doc. Reference and Doc.-Related Stock |
| `EWMReferenceDeliveryDocType` | `CHAR(4)` | Document Type |
| `EWMRefDeliveryDocumentNumber` | `CHAR(35)` | Document Number |
| `EWMRefDeliveryDocumentItem` | `NUMC(10)` | Item Number |
| `Wave` | `NUMC(10)` | Numeric Character Field, Length 10 |
| `EWMWave` | `NUMC(10)` | Wave |
| `WaveItem` | `NUMC(6)` | numc06 |
| `EWMWaveItem` | `NUMC(6)` | Wave Item |
| `WhseTaskTwoStepPickingType` | `CHAR(1)` | Warehouse Task Type Within Two-Step Picking |
| `WhseTaskTwoStepPickingRlvnce` | `CHAR(1)` | Relevance for Two-Step Picking |
| `DocumentReltdStockDocCat` | `CHAR(3)` | Doc. Category for Doc. Reference and Doc.-Related Stock |
| `DocumentReltdStockDocUUID` | `RAW(16)` | Doc. Identification for Document-Related Stocks |
| `DocumentReltdStockDocItemUUID` | `RAW(16)` | Document Item for Document-Related Stocks |
| `StockIdentificationNumber` | `CHAR(20)` | Identification Number of Stock |
| `KitItemIsCreatedAutomatically` | `CHAR(1)` | Create Kit Item in HU Automatically During Picking |
| `WarehouseTaskUUID` | `RAW(16)` | Unique Internal Identification of a Warehouse Task |
| `IsDocumentaryBatch` | `CHAR(1)` | Truth Value: True/False |
| `ConveyorTechniqueSegment` | `CHAR(10)` | Conveyor Technique Segment |
| `EWMProductionSupplyArea` | `CHAR(15)` | Production Supply Area |
| `ProductionOrder` | `CHAR(12)` |  |
| `WhseTaskCrtnWhseTmznDateTime` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WhseTaskCrtnWhseTmznYear` | `NUMC(4)` |  |
| `WhseTaskCrtnWhseTmznMonth` | `NUMC(6)` |  |
| `WhseTaskCrtnWhseTmznDate` | `DATS(8)` |  |
| `WhseTaskCrtnWhseTmznHour` | `NUMC(10)` |  |
| `WhseTaskCrtnWhseTmznTime` | `TIMS(6)` |  |
| `WhseTaskCrtnRnddTo10MinsTime` | `TIMS(6)` |  |
| `WhseTaskConfWhseTmznDateTime` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WhseTaskConfWhseTmznYear` | `NUMC(4)` |  |
| `WhseTaskConfWhseTmznMonth` | `NUMC(6)` |  |
| `WhseTaskConfWhseTmznDate` | `DATS(8)` |  |
| `WhseTaskConfWhseTmznHour` | `NUMC(10)` |  |
| `WhseTaskConfWhseTmznTime` | `TIMS(6)` |  |
| `WhseTaskConfRnddTo10MinsTime` | `TIMS(6)` |  |
| `WhseTskPlndClsgWhseTmznDteTme` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WhseTskPlndClsgWhseTmznYear` | `NUMC(4)` |  |
| `WhseTskPlndClsgWhseTmznMonth` | `NUMC(6)` |  |
| `WhseTskPlndClsgWhseTmznDate` | `DATS(8)` |  |
| `WhseTskPlndClsgWhseTmznHour` | `NUMC(10)` |  |
| `WhseTskPlndClsgWhseTmznTime` | `TIMS(6)` |  |
| `WhseTskPlndClsgRnddTo10MinsTme` | `TIMS(6)` |  |
| `Kanban` | `NUMC(10)` | Kanban Identification Number |
| `StockKeepingAlternativeUoM` | `UNIT(3)` | Alternative Unit of Measure for Stockkeeping Unit |
| `ActivityArea` | `CHAR(4)` | Activity Area |
| `WarehouseOrder` | `NUMC(10)` | Warehouse Order Number |
| `LogicalRecordProgramName` | `CHAR(40)` | Table Log Record: Program Name |
| `LogicalRecordTransactionCode` | `CHAR(20)` | Table Log Record: Transaction Code |
| `EWMDummyFuncForStructureExtn` | `CHAR(1)` | Dummy function in length 1 |
| `CertificateText` | `CHAR(10)` | Certificate Number |
| `WhseTaskLastChgUTCDateTime` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `Activity` | `CHAR(4)` | Activity |
| `ConfirmedByUser` | `CHAR(12)` |  |
| `WhseTaskConfUTCDateTime` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `Processor` | `CHAR(12)` |  |
| `WarehouseTaskExceptionCode` | `CHAR(4)` |  |
| `BusinessContext` | `CHAR(3)` |  |
| `BusinessContextExecutionStep` | `CHAR(2)` |  |
| `ExecutingResourceGroup` | `CHAR(4)` |  |
| `ExecutingResourceType` | `CHAR(4)` |  |
| `WarehouseOrderCreationRule` | `CHAR(4)` | Warehouse Order Creation Rule |
| `WarehouseOrderStatus` | `CHAR(1)` | Warehouse Order Status |
| `LatestStartUTCDateTime` | `DEC(15)` | Latest Starting Date (LSD) |
| `HigherLevelWarehouseOrder` | `NUMC(10)` | Warehouse Order Number of Higher-Level Warehouse Order |
| `WarehouseOrderIsSplit` | `CHAR(1)` | Warehouse Order Was Split |
| `WrhsOrdStrtUTCDateTime` | `DEC(15)` | Start Time |
| `WarehouseOrderQueue` | `CHAR(10)` | Queue |
| `WrhsOrdCrtnUTCDateTime` | `DEC(15)` | Creation Time |
| `PickCompltnUTCDateTime` | `DEC(15)` | Planned Closing Date/Time |
| `SourceStorageBinType` | `CHAR(4)` | Storage Bin Type |
| `SourceStorageBinAisle` | `CHAR(18)` | Storage Bin Aisle |
| `SourceStorageBinStack` | `CHAR(18)` | Storage Bin Stack |
| `SourceStorageBinLevel` | `CHAR(18)` | Storage Bin Level |
| `SourceStorageBinAccessType` | `CHAR(4)` | Bin Access Type |
| `DestinationStorageBinType` | `CHAR(4)` | Storage Bin Type |
| `DestinationStorageBinAisle` | `CHAR(18)` | Storage Bin Aisle |
| `DestinationStorageBinStack` | `CHAR(18)` | Storage Bin Stack |
| `DestinationStorageBinLevel` | `CHAR(18)` | Storage Bin Level |
| `DestinationStorageBinAccType` | `CHAR(4)` | Bin Access Type |
| `EWMOutboundDeliveryOrder` | `CHAR(35)` | Document Number |
| `EWMOutboundDeliveryOrderItem` | `NUMC(10)` | Item Number |
| `EWMOutbDeliveryOrderItemType` | `CHAR(4)` | Item Type |
| `EWMOutbDelivOrderItemCategory` | `CHAR(3)` | Item Category |
| `EWMInboundDeliveryItemType` | `CHAR(4)` | Item Type |
| `PlndPickCompltnUTCDateTime` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `PlndPackCompletionUTCDateTime` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `PlndStagingCompltnUTCDateTime` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `PlndLoadCompletionUTCDateTime` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WaveActlReleasedUTCDateTime` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WaveCutoffWhseTmznDateTime` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WavePlndRelWhseTmznDateTime` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `PlndPickCmpltWhseTmznDateTime` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `PlndPackCmpltWhseTmznDateTime` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `PlndStggCmpltWhseTmznDateTime` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WaveCompletionWhseTmznDateTime` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WaveActualReldWhseTmznDateTime` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WaveActualReldWhseTmznYear` | `NUMC(4)` |  |
| `WaveActualReldWhseTmznMonth` | `NUMC(6)` |  |
| `WaveActualReldWhseTmznDate` | `DATS(8)` |  |
| `WaveActualReldWhseTmznHour` | `NUMC(10)` |  |
| `WaveActualReldWhseTmznTime` | `TIMS(6)` |  |
| `WaveTemplate` | `NUMC(10)` | Numeric Character Field, Length 10 |
| `WaveTemplateName` | `CHAR(40)` | Description |
| `WarehouseTaskStatusName` | `CHAR(60)` | Short Text for Fixed Values |
| `WarehouseTaskCodesName` | `CHAR(60)` | Short Text for Fixed Values |
| `WarehouseOrderStatusName` | `CHAR(60)` | Short Text for Fixed Values |
| `WrhsTaskSubsystemTransmnName` | `CHAR(60)` | Short Text for Fixed Values |
| `BaseUnit` | `UNIT(3)` | Base Unit of Measure |
| `TargetQuantityInBaseUnit` | `QUAN(31)` | Target Quantity in Base Unit of Measure |
| `ActualQuantityInBaseUnit` | `QUAN(31)` |  |
| `DifferenceQuantityInBaseUnit` | `QUAN(31)` |  |
| `AlternativeUnit` | `UNIT(3)` | Alternative Unit of Measure for Stockkeeping Unit |
| `TargetQuantityInAltvUnit` | `QUAN(31)` | Target Quantity in Alternative Unit of Measure |
| `ActualQuantityInAltvUnit` | `QUAN(31)` |  |
| `DifferenceQuantityInAltvUnit` | `QUAN(31)` |  |
| `WhseTaskOverdueHours` | `DEC(16)` |  |
| `WhseTaskOverdueHoursDesc` | `CHAR(60)` |  |
| `EWMWhseTaskConfDateIsToday` | `CHAR(1)` | Confirmation Date of Warehouse Task Is Today |
| `EWMWhseTaskHasException` | `CHAR(1)` | Warehouse Task Has Exceptions |
