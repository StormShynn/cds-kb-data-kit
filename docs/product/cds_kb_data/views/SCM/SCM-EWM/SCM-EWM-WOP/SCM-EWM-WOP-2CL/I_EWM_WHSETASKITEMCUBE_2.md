---
name: I_EWM_WHSETASKITEMCUBE_2
description: "This CDS view provides information about warehouse task items in your warehouse. This CDS view provides the data to answer the following business questions: What are the warehouse task items and their information in your warehouse? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_WHSETASKITEMCUBE_2')/$value
semantic_en: "This CDS view provides information about warehouse task items in your warehouse. This CDS view provides the data to answer the following business questions: What are the warehouse task items and their information in your warehouse? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Warehouse Task Item - Cube — CDS view giao diện dựa trên P_EWM_WarehouseTaskItem_2."
keywords:
  - "warehouse"
  - "task"
  - "item"
  - "cube"
  - "number"
  - "tasks"
  - "items"
tags:
  - SCM
  - bo:companycode
  - component:SCM-EWM-WOP-2CL
  - interface-view
  - SCM-EWM
  - SCM-EWM-WOP
  - SCM-EWM-WOP-2CL
  - task
---
# I_EWM_WHSETASKITEMCUBE_2

**This CDS view provides information about warehouse task items in your warehouse. This CDS view provides the data to answer the following business questions: What are the warehouse task items and their information in your warehouse? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_WHSETASKITEMCUBE_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMWarehouse` | ✓ | |  |  | `CHAR(4)` | Warehouse Number/Warehouse Complex |
| `WarehouseTask` | ✓ | |  |  | `NUMC(12)` | Warehouse Task |
| `WarehouseTaskItem` | ✓ | |  |  | `NUMC(4)` | Warehouse Task Item |
| `NumberOfWarehouseTasks` |  | |  | `case when WarehouseTaskItem > '0001' then 0.0 else 1.0 end` | `FLTP(16)` |  |
| `NumberOfWarehouseTaskItems` |  | |  | `0` | `FLTP(16)` |  |
| `IsHandlingUnitWarehouseTask` |  | |  |  | `CHAR(1)` | Handling Unit Warehouse Task |
| `WarehouseProcessType` |  | |  |  | `CHAR(4)` | Warehouse Process Type |
| `WarehouseProcessCategory` |  | |  |  | `CHAR(1)` | Warehouse Process Category |
| `StorageProcess` |  | |  |  | `CHAR(4)` | Storage Process |
| `ExternalStorageProcessStep` |  | |  |  | `CHAR(4)` | External Storage Process Step |
| `WarehouseTaskStatus` |  | |  |  | `CHAR(1)` | Warehouse Task Status |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Created By |
| `WhseTaskCrtnUTCDateTime` |  | |  |  | `DEC(15)` | Creation Time |
| `WarehouseTaskCodes` |  | |  |  | `CHAR(1)` | Calling Application/Special Function for WT Creation/Conf. |
| `ExecutingResource` |  | |  |  | `CHAR(18)` | Executing Resource (Means of Transport or User) |
| `WarehouseMovementsReason` |  | |  |  | `CHAR(4)` | Reason for Movements in the Warehouse |
| `EWMWarehouseTaskPriority` |  | |  |  | `INT1(3)` | Priority |
| `StockItemUUID` |  | |  |  | `RAW(16)` | GUID Stock Item |
| `CurrentNumberOfKeyTable` |  | |  |  | `CHAR(3)` | Current Nummer of Key Table |
| `ProductUUID` |  | |  |  | `RAW(16)` | Product UUID |
| `ProductName` |  | |  |  | `CHAR(40)` | Product |
| `ProductDescription` |  | |  | `_Material._Text[1:Language = $parameters.P_Language].ProductName` | `CHAR(40)` | Product Description |
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
| `IsBusinessPurposeCompleted` |  | |  |  | `CHAR(1)` |  |
| `CounterForStockSeparation` |  | |  |  | `NUMC(6)` | Counter for Stock Separation |
| `Batch` |  | |  |  | `CHAR(10)` | Batch |
| `RequirementSegment` |  | |  |  | `CHAR(40)` | Requirement Segment |
| `StockSegment` |  | |  |  | `CHAR(40)` | Stock Segment |
| `WhseTaskRetentionQuantity` |  | |  |  | `QUAN(31)` | Retention Quantity |
| `HandlingUnitType` |  | |  |  | `CHAR(4)` | Handling Unit Type |
| `WhseTaskNetWeightUnitOfMeasure` |  | |  |  | `UNIT(3)` | Weight Unit |
| `WhseTaskNetWeight` |  | |  |  | `QUAN(15)` | Loading or Net Weight |
| `WhseTaskNetVolumeUnitOfMeasure` |  | |  |  | `UNIT(3)` | Volume Unit |
| `WhseTaskNetVolume` |  | |  |  | `QUAN(15)` | Loading or Net Volume |
| `ItemNetVolumeInDisplayUnit` |  | |  | `unit_conversion( quantity => WhseTaskNetVolume, source_unit => WhseTaskNetVolumeUnitOfMeasure, target_unit => DisplayVolumeUnit, error_handling => 'SET_TO_NULL' )` | `QUAN(31)` |  |
| `DisplayVolumeUnit` |  | |  |  | `UNIT(3)` | Volume Unit |
| `ItemNetWeightInDisplayUnit` |  | |  | `unit_conversion( quantity => WhseTaskNetWeight, source_unit => WhseTaskNetWeightUnitOfMeasure, target_unit => DisplayWeightUnit, error_handling => 'SET_TO_NULL' )` | `QUAN(31)` |  |
| `DisplayWeightUnit` |  | |  |  | `UNIT(3)` | Weight Unit |
| `WhseTaskCapacityConsumption` |  | |  |  | `DEC(15)` | Capacity Consumption |
| `PutAwayPhysInventoryIsPlanned` |  | |  |  | `CHAR(1)` | Truth Value: True/False |
| `WhseTaskLowStockCheckIsPlanned` |  | |  |  | `CHAR(1)` | Truth Value: True/False |
| `EWMPutAwayPhysInvtryPlnSts` |  | |  |  | `CHAR(1)` | Putaway Physical Inventory Planned |
| `EWMWhseTskLowStkChkPlnSts` |  | |  |  | `CHAR(1)` | Low Stock Check Planned |
| `ShelfLifeExpirationDate` |  | |  |  | `DATS(8)` | Shelf Life Expiration Date |
| `CountryOfOrigin` |  | |  |  | `CHAR(3)` | Country/Region of Origin |
| `HazardousSubstanceIndicator` |  | |  |  | `CHAR(1)` | Hazardous Substance |
| `WhseTaskQualityInspectionType` |  | |  |  | `CHAR(1)` | Inspection ID Type |
| `QualityInspectionDocUUID` |  | |  |  | `RAW(16)` | Identification of a Quality Object |
| `StockIdentificationOfWhseTask` |  | |  |  | `CHAR(20)` | Stock Identification of Warehouse Task |
| `EWMConsolidationGroup` |  | |  |  | `CHAR(10)` | Consolidation Group |
| `SourceStorageType` |  | |  |  | `CHAR(4)` | Source Storage Type |
| `SourceStorageSection` |  | |  |  | `CHAR(4)` | Source Storage Section |
| `SourceStorageBin` |  | |  |  | `CHAR(18)` | Source Storage Bin |
| `SourceHndlgUnitLogicalPosition` |  | |  |  | `CHAR(2)` | Source Logical Position of Handling Unit in Storage Bin |
| `SourceResource` |  | |  |  | `CHAR(18)` | Source Resource (Means of Transport or User) |
| `SourceTransportationUnit` |  | |  |  | `CHAR(18)` | Source Transportation Unit (Internal) |
| `EWMSourceLocationType` |  | |  |  | `CHAR(1)` | Location Type |
| `SourceHandlingUnitUUID` |  | |  |  | `RAW(16)` | Unique Internal Identification of a Handling Unit |
| `SourceHandlingUnit` |  | |  |  | `CHAR(20)` |  |
| `DestinationStorageType` |  | |  |  | `CHAR(4)` | Destination Storage Type |
| `DestinationStorageSection` |  | |  |  | `CHAR(4)` | Destination Storage Section |
| `DestinationStorageBin` |  | |  |  | `CHAR(18)` | Destination Storage Bin |
| `DestHndlgUnitLogicalPosition` |  | |  |  | `CHAR(2)` | Destination Logical Position of Handling Unit in Storage Bin |
| `DestinationResource` |  | |  |  | `CHAR(18)` | Destination Resource (Means of Transport or User) |
| `DestinationTransportationUnit` |  | |  |  | `CHAR(18)` | Destination Transportation Unit (Internal) |
| `EWMDestinationLocationType` |  | |  |  | `CHAR(1)` | Location Type |
| `DestinationHandlingUnitUUID` |  | |  |  | `RAW(16)` | Unique Internal Identification of a Handling Unit |
| `DestinationHandlingUnit` |  | |  |  | `CHAR(20)` | Destination Handling Unit |
| `WhseTaskDestStorageBinDtmndBy` |  | |  |  | `CHAR(1)` | Destination Storage Bin Determined By |
| `WrhsTaskSubsystemTransmn` |  | |  |  | `CHAR(1)` | Indicator: Pass on Warehouse Task to Subsystem |
| `WhseTaskPlannedProcessingTime` |  | |  |  | `QUAN(13)` | Planned Proc. Time in Warehouse Task |
| `WhseTaskProcgTimeDetnTimeUnit` |  | |  |  | `UNIT(3)` | Time Unit |
| `WhseTaskRefToValueAddedService` |  | |  |  | `CHAR(1)` | WT with Reference to a VAS |
| `BatchChangeIsNotAllowed` |  | |  |  | `CHAR(1)` | Changing the Batch is not Allowed |
| `ReferenceDocumentUUID` |  | |  |  | `RAW(16)` | Doc. Identification for Document-Related Stocks |
| `ReferenceDocumentItemUUID` |  | |  |  | `RAW(16)` | Document Item for Document-Related Stocks |
| `EWMReferenceDocumentCategory` |  | |  |  | `CHAR(3)` | Doc. Category for Doc. Reference and Doc.-Related Stock |
| `EWMReferenceDeliveryDocType` |  | |  | `case when EWMReferenceDocumentCategory = 'PDI' then _InbDelivHdr.InboundDeliveryDocumentType when EWMReferenceDocumentCategory = 'PDO' then _OutbDelivOrdHdr.DeliveryType else '' end` | `CHAR(4)` | Document Type |
| `EWMRefDeliveryDocumentNumber` |  | |  | `case when EWMReferenceDocumentCategory = 'PDI' then _InbDelivItem.InboundDelivery when EWMReferenceDocumentCategory = 'PDO' then _OutbDelivOrdItem.OutboundDeliveryOrder else '' end` | `CHAR(35)` | Document Number |
| `EWMRefDeliveryDocumentItem` |  | |  | `cast( case when EWMReferenceDocumentCategory = 'PDI' then _InbDelivItem.InboundDeliveryItem when EWMReferenceDocumentCategory = 'PDO' then _OutbDelivOrdItem.OutboundDeliveryOrderItem else '0000000000' end as /scdl/dl_itemno )` | `NUMC(10)` | Item Number |
| `Wave` |  | |  |  | `NUMC(10)` | Numeric Character Field, Length 10 |
| `EWMWave` |  | |  |  | `NUMC(10)` | Wave |
| `WaveItem` |  | |  |  | `NUMC(6)` | numc06 |
| `EWMWaveItem` |  | |  |  | `NUMC(6)` | Wave Item |
| `WhseTaskTwoStepPickingType` |  | |  |  | `CHAR(1)` | Warehouse Task Type Within Two-Step Picking |
| `WhseTaskTwoStepPickingRlvnce` |  | |  |  | `CHAR(1)` | Relevance for Two-Step Picking |
| `DocumentReltdStockDocCat` |  | |  |  | `CHAR(3)` | Doc. Category for Doc. Reference and Doc.-Related Stock |
| `DocumentReltdStockDocUUID` |  | |  |  | `RAW(16)` | Doc. Identification for Document-Related Stocks |
| `DocumentReltdStockDocItemUUID` |  | |  |  | `RAW(16)` | Document Item for Document-Related Stocks |
| `StockIdentificationNumber` |  | |  |  | `CHAR(20)` | Identification Number of Stock |
| `KitItemIsCreatedAutomatically` |  | |  |  | `CHAR(1)` | Create Kit Item in HU Automatically During Picking |
| `WarehouseTaskUUID` |  | |  |  | `RAW(16)` | Unique Internal Identification of a Warehouse Task |
| `IsDocumentaryBatch` |  | |  |  | `CHAR(1)` | Truth Value: True/False |
| `ConveyorTechniqueSegment` |  | |  |  | `CHAR(10)` | Conveyor Technique Segment |
| `EWMProductionSupplyArea` |  | |  |  | `CHAR(15)` | Production Supply Area |
| `ProductionOrder` |  | |  |  | `CHAR(12)` |  |
| `WhseTaskCrtnWhseTmznDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WhseTaskCrtnWhseTmznYear` |  | |  | `cast(substring(cast(WhseTaskCrtnWhseTmznDateTime as abap.char( 17 )), 1, 4) as abap.numc( 4 ) )` | `NUMC(4)` |  |
| `WhseTaskCrtnWhseTmznMonth` |  | |  | `cast(substring(cast(WhseTaskCrtnWhseTmznDateTime as abap.char( 17 )), 1, 6) as abap.numc(6))` | `NUMC(6)` |  |
| `WhseTaskCrtnWhseTmznDate` |  | |  | `cast(substring(cast(WhseTaskCrtnWhseTmznDateTime as abap.char( 17 )), 1, 8) as abap.dats)` | `DATS(8)` |  |
| `WhseTaskCrtnWhseTmznHour` |  | |  | `cast(substring(cast(WhseTaskCrtnWhseTmznDateTime as abap.char( 17 )), 1, 10) as abap.numc(10))` | `NUMC(10)` |  |
| `WhseTaskCrtnWhseTmznTime` |  | |  | `cast(substring(cast(WhseTaskCrtnWhseTmznDateTime as abap.char( 17 )), 9, 6) as abap.tims)` | `TIMS(6)` |  |
| `WhseTaskCrtnRnddTo10MinsTime` |  | |  | `cast(concat(substring(cast(WhseTaskCrtnWhseTmznDateTime as abap.char( 17 )), 9, 3),'000') as abap.tims)` | `TIMS(6)` |  |
| `WhseTaskConfWhseTmznDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WhseTaskConfWhseTmznYear` |  | |  | `cast(substring(cast(WhseTaskConfWhseTmznDateTime as abap.char( 17 )), 1, 4) as abap.numc( 4 ) )` | `NUMC(4)` |  |
| `WhseTaskConfWhseTmznMonth` |  | |  | `cast(substring(cast(WhseTaskConfWhseTmznDateTime as abap.char( 17 )), 1, 6) as abap.numc(6))` | `NUMC(6)` |  |
| `WhseTaskConfWhseTmznDate` |  | |  |  | `DATS(8)` |  |
| `WhseTaskConfWhseTmznHour` |  | |  | `cast(substring(cast(WhseTaskConfWhseTmznDateTime as abap.char( 17 )), 1, 10) as abap.numc(10))` | `NUMC(10)` |  |
| `WhseTaskConfWhseTmznTime` |  | |  | `cast(substring(cast(WhseTaskConfWhseTmznDateTime as abap.char( 17 )), 9, 6) as abap.tims)` | `TIMS(6)` |  |
| `WhseTaskConfRnddTo10MinsTime` |  | |  | `cast(concat(substring(cast(WhseTaskConfWhseTmznDateTime as abap.char( 17 )), 9, 3),'000') as abap.tims)` | `TIMS(6)` |  |
| `WhseTskPlndClsgWhseTmznDteTme` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WhseTskPlndClsgWhseTmznYear` |  | |  | `cast(substring(cast(WhseTskPlndClsgWhseTmznDteTme as abap.char( 17 )), 1, 4) as abap.numc( 4 ) )` | `NUMC(4)` |  |
| `WhseTskPlndClsgWhseTmznMonth` |  | |  | `cast(substring(cast(WhseTskPlndClsgWhseTmznDteTme as abap.char( 17 )), 1, 6) as abap.numc(6))` | `NUMC(6)` |  |
| `WhseTskPlndClsgWhseTmznDate` |  | |  | `cast(substring(cast(WhseTskPlndClsgWhseTmznDteTme as abap.char( 17 )), 1, 8) as abap.dats)` | `DATS(8)` |  |
| `WhseTskPlndClsgWhseTmznHour` |  | |  | `cast(substring(cast(WhseTskPlndClsgWhseTmznDteTme as abap.char( 17 )), 1, 10) as abap.numc(10))` | `NUMC(10)` |  |
| `WhseTskPlndClsgWhseTmznTime` |  | |  | `cast(substring(cast(WhseTskPlndClsgWhseTmznDteTme as abap.char( 17 )), 9, 6) as abap.tims)` | `TIMS(6)` |  |
| `WhseTskPlndClsgRnddTo10MinsTme` |  | |  | `cast(concat(substring(cast(WhseTskPlndClsgWhseTmznDteTme as abap.char( 17 )), 9, 3),'000') as abap.tims)` | `TIMS(6)` |  |
| `Kanban` |  | |  |  | `NUMC(10)` | Kanban Identification Number |
| `StockKeepingAlternativeUoM` |  | |  |  | `UNIT(3)` | Alternative Unit of Measure for Stockkeeping Unit |
| `ActivityArea` |  | |  |  | `CHAR(4)` | Activity Area |
| `WarehouseOrder` |  | |  |  | `NUMC(10)` | Warehouse Order Number |
| `LogicalRecordProgramName` |  | |  |  | `CHAR(40)` | Table Log Record: Program Name |
| `LogicalRecordTransactionCode` |  | |  |  | `CHAR(20)` | Table Log Record: Transaction Code |
| `EWMDummyFuncForStructureExtn` |  | |  |  | `CHAR(1)` | Dummy function in length 1 |
| `CertificateText` |  | |  |  | `CHAR(10)` | Certificate Number |
| `WhseTaskLastChgUTCDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `Activity` |  | |  | `WarehouseActivityType` | `CHAR(4)` | Activity |
| `ConfirmedByUser` |  | |  |  | `CHAR(12)` |  |
| `WhseTaskConfUTCDateTime` |  | |  | `ConfirmationUTCDateTime` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `Processor` |  | |  |  | `CHAR(12)` |  |
| `WarehouseTaskExceptionCode` |  | |  |  | `CHAR(4)` |  |
| `BusinessContext` |  | |  |  | `CHAR(3)` |  |
| `BusinessContextExecutionStep` |  | |  |  | `CHAR(2)` |  |
| `ExecutingResourceGroup` |  | |  |  | `CHAR(4)` |  |
| `ExecutingResourceType` |  | |  |  | `CHAR(4)` |  |
| `WarehouseOrderCreationRule` |  | |  |  | `CHAR(4)` | Warehouse Order Creation Rule |
| `WarehouseOrderStatus` |  | |  |  | `CHAR(1)` | Warehouse Order Status |
| `LatestStartUTCDateTime` |  | |  | `WhseOrderLatestStartDateTime` | `DEC(15)` | Latest Starting Date (LSD) |
| `HigherLevelWarehouseOrder` |  | |  | `WhseOrderHigherLevelWhseOrder` | `NUMC(10)` | Warehouse Order Number of Higher-Level Warehouse Order |
| `WarehouseOrderIsSplit` |  | |  |  | `CHAR(1)` | Warehouse Order Was Split |
| `WrhsOrdStrtUTCDateTime` |  | |  | `WarehouseOrderStartDateTime` | `DEC(15)` | Start Time |
| `WarehouseOrderQueue` |  | |  |  | `CHAR(10)` | Queue |
| `WrhsOrdCrtnUTCDateTime` |  | |  |  | `DEC(15)` | Creation Time |
| `PickCompltnUTCDateTime` |  | |  | `WhseTaskPlannedClosingDateTime` | `DEC(15)` | Planned Closing Date/Time |
| `SourceStorageBinType` |  | |  |  | `CHAR(4)` | Storage Bin Type |
| `SourceStorageBinAisle` |  | |  |  | `CHAR(18)` | Storage Bin Aisle |
| `SourceStorageBinStack` |  | |  |  | `CHAR(18)` | Storage Bin Stack |
| `SourceStorageBinLevel` |  | |  |  | `CHAR(18)` | Storage Bin Level |
| `SourceStorageBinAccessType` |  | |  |  | `CHAR(4)` | Bin Access Type |
| `DestinationStorageBinType` |  | |  |  | `CHAR(4)` | Storage Bin Type |
| `DestinationStorageBinAisle` |  | |  |  | `CHAR(18)` | Storage Bin Aisle |
| `DestinationStorageBinStack` |  | |  |  | `CHAR(18)` | Storage Bin Stack |
| `DestinationStorageBinLevel` |  | |  |  | `CHAR(18)` | Storage Bin Level |
| `DestinationStorageBinAccType` |  | |  |  | `CHAR(4)` | Bin Access Type |
| `EWMOutboundDeliveryOrder` |  | | `_OutbDelivOrdItem` | `EWMOutboundDeliveryOrder` | `CHAR(35)` | Document Number |
| `EWMOutboundDeliveryOrderItem` |  | | `_OutbDelivOrdItem` | `EWMOutboundDeliveryOrderItem` | `NUMC(10)` | Item Number |
| `EWMOutbDeliveryOrderItemType` |  | | `_OutbDelivOrdItem` | `EWMOutbDeliveryOrderItemType` | `CHAR(4)` | Item Type |
| `EWMOutbDelivOrderItemCategory` |  | | `_OutbDelivOrdItem` | `EWMOutbDelivOrderItemCategory` | `CHAR(3)` | Item Category |
| `EWMInboundDeliveryItemType` |  | | `_InbDelivItem` | `EWMInboundDeliveryItemType` | `CHAR(4)` | Item Type |
| `PlndPickCompltnUTCDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `PlndPackCompletionUTCDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `PlndStagingCompltnUTCDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `PlndLoadCompletionUTCDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WaveActlReleasedUTCDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WaveCutoffWhseTmznDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WavePlndRelWhseTmznDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `PlndPickCmpltWhseTmznDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `PlndPackCmpltWhseTmznDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `PlndStggCmpltWhseTmznDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WaveCompletionWhseTmznDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WaveActualReldWhseTmznDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WaveActualReldWhseTmznYear` |  | |  | `cast(substring(cast(WaveActualReldWhseTmznDateTime as abap.char( 17 )), 1, 4) as abap.numc( 4 ) )` | `NUMC(4)` |  |
| `WaveActualReldWhseTmznMonth` |  | |  | `cast(substring(cast(WaveActualReldWhseTmznDateTime as abap.char( 17 )), 1, 6) as abap.numc( 6 ) )` | `NUMC(6)` |  |
| `WaveActualReldWhseTmznDate` |  | |  | `cast(substring(cast(WaveActualReldWhseTmznDateTime as abap.char( 17 )), 1, 8) as abap.dats)` | `DATS(8)` |  |
| `WaveActualReldWhseTmznHour` |  | |  | `cast(substring(cast(WaveActualReldWhseTmznDateTime as abap.char( 17 )), 1, 10) as abap.numc( 10 ) )` | `NUMC(10)` |  |
| `WaveActualReldWhseTmznTime` |  | |  | `cast(substring(cast(WaveActualReldWhseTmznDateTime as abap.char( 17 )), 9, 6) as abap.tims)` | `TIMS(6)` |  |
| `WaveTemplate` |  | |  |  | `NUMC(10)` | Numeric Character Field, Length 10 |
| `WaveTemplateName` |  | |  | `_waveText[1:Language = $parameters.P_Language].WaveTemplateName` | `CHAR(40)` | Description |
| `WarehouseTaskStatusName` |  | |  | `_WarehouseTaskStatusText[1:Language = $parameters.P_Language].WarehouseTaskStatusName` | `CHAR(60)` | Short Text for Fixed Values |
| `WarehouseTaskCodesName` |  | |  | `_WarehouseTaskCodeText[1:Language = $parameters.P_Language].WarehouseTaskCodesName` | `CHAR(60)` | Short Text for Fixed Values |
| `WarehouseOrderStatusName` |  | |  | `_WarehouseOrderStatusText[1:Language = $parameters.P_Language].WarehouseOrderStatusName` | `CHAR(60)` | Short Text for Fixed Values |
| `WrhsTaskSubsystemTransmnName` |  | |  | `_WhseTskSubTransmnText[1:Language = $parameters.P_Language].WrhsTaskSubsystemTransmnName` | `CHAR(60)` | Short Text for Fixed Values |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `TargetQuantityInBaseUnit` |  | |  |  | `QUAN(31)` | Target Quantity in Base Unit of Measure |
| `ActualQuantityInBaseUnit` |  | |  |  | `QUAN(31)` |  |
| `DifferenceQuantityInBaseUnit` |  | |  |  | `QUAN(31)` |  |
| `AlternativeUnit` |  | |  |  | `UNIT(3)` | Alternative Unit of Measure for Stockkeeping Unit |
| `TargetQuantityInAltvUnit` |  | |  |  | `QUAN(31)` | Target Quantity in Alternative Unit of Measure |
| `ActualQuantityInAltvUnit` |  | |  |  | `QUAN(31)` |  |
| `DifferenceQuantityInAltvUnit` |  | |  |  | `QUAN(31)` |  |
| `WhseTaskOverdueHours` |  | |  | `case when WarehouseTaskStatus = '' and WhseTaskPlannedClosingDateTime <> 00000000000000 then case when OpenMod = 0 then WhseTaskOverdueHours else case when WhseTaskPlannedClosingDateTime < tstmp_current_utctimestamp() then WhseTaskOverdueHours+1 else WhseTaskOverdueHours end end else case when WarehouseTaskStatus = 'C' and WhseTaskPlannedClosingDateTime <> 00000000000000 then case when ConfirmedMod = 0 then WhseTaskOverdueHours else case when WhseTaskPlannedClosingDateTime < ConfirmationUTCDateTime then WhseTaskOverdueHours+1 else WhseTaskOverdueHours end end else WhseTaskOverdueHours end end` | `DEC(16)` |  |
| `WhseTaskOverdueHoursDesc` |  | |  | `case when WhseTaskOverdueHours < 7 then cast( case when WarehouseTaskStatus = '' and WhseTaskPlannedClosingDateTime <> 00000000000000 then case when OpenMod = 0 then WhseTaskOverdueHours else case when WhseTaskPlannedClosingDateTime < tstmp_current_utctimestamp() then WhseTaskOverdueHours+1 else WhseTaskOverdueHours end end else case when WarehouseTaskStatus = 'C' and WhseTaskPlannedClosingDateTime <> 00000000000000 then case when ConfirmedMod = 0 then WhseTaskOverdueHours else case when WhseTaskPlannedClosingDateTime < ConfirmationUTCDateTime then WhseTaskOverdueHours+1 else WhseTaskOverdueHours end end else WhseTaskOverdueHours end end as abap.char( 60 )) when WhseTaskOverdueHours = 7 then case when WarehouseTaskStatus = '' and WhseTaskPlannedClosingDateTime <> 00000000000000 then case when OpenMod = 0 then cast(WhseTaskOverdueHours as abap.char(60)) else case when WhseTaskPlannedClosingDateTime < tstmp_current_utctimestamp() then '≥8' else cast(WhseTaskOverdueHours as abap.char(60)) end end else case when WarehouseTaskStatus = 'C' and WhseTaskPlannedClosingDateTime <> 00000000000000 then case when ConfirmedMod = 0 then cast(WhseTaskOverdueHours as abap.char(60)) else case when WhseTaskPlannedClosingDateTime < ConfirmationUTCDateTime then '≥8' else cast(WhseTaskOverdueHours as abap.char(60)) end end else cast(WhseTaskOverdueHours as abap.char(60)) end end else '≥8' end` | `CHAR(60)` |  |
| `EWMWhseTaskConfDateIsToday` |  | |  | `case when WhseTaskConfWhseTmznDate = EWMWarehouseCurrentDate then cast('X' as ewm_de_wt_conf_is_today) else cast('' as ewm_de_wt_conf_is_today ) end` | `CHAR(1)` | Confirmation Date of Warehouse Task Is Today |
| `EWMWhseTaskHasException` |  | |  | `case when WarehouseTaskExceptionCode is initial then cast('' as ewm_de_wt_has_exception) else cast('X' as ewm_de_wt_has_exception ) end` | `CHAR(1)` | Warehouse Task Has Exceptions |
| `_Warehouse` | | ✓ | | | | |
| `_SourceStorageType` | | ✓ | | | | |
| `_SrceStorageSection` | | ✓ | | | | |
| `_DestStorageType` | | ✓ | | | | |
| `_DestStorageSection` | | ✓ | | | | |
| `_ActivityArea` | | ✓ | | | | |
| `_WarehouseProcessType` | | ✓ | | | | |
| `_SrceStorageBinType` | | ✓ | | | | |
| `_DestStorageBinType` | | ✓ | | | | |
| `_WarehouseTaskStatusText` | | ✓ | | | | |
| `_WarehouseProcessCategory` | | ✓ | | | | |
| `_ResourceType` | | ✓ | | | | |
| `_ExceptionCode` | | ✓ | | | | |
| `_WarehouseOrderStatusText` | | ✓ | | | | |
| `_WarehouseTaskCodeText` | | ✓ | | | | |
| `_BusinessContext` | | ✓ | | | | |
| `_BusinessContextExecStep` | | ✓ | | | | |
| `_WhseTskSubTransmnText` | | ✓ | | | | |
| `_ExtStorageProcessStep` | | ✓ | | | | |
| `_StorageProcess` | | ✓ | | | | |
| `_WhseOrderCtnRule` | | ✓ | | | | |
| `_ResourceGroup` | | ✓ | | | | |
| `_WarehouseOrderQueue` | | ✓ | | | | |
| `_WarehouseActivity` | | ✓ | | | | |
| `_OutbDelivOrdItem` | | ✓ | | | | |
| `_InbDelivItem` | | ✓ | | | | |
| `_DeliveryCategory` | | ✓ | | | | |
| `_DeliveryType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Warehouse` | `I_EWM_WarehouseNumber_2` | [0..1] |
| `_SourceStorageType` | `I_EWM_StorageType_2` | [0..1] |
| `_SrceStorageSection` | `I_EWM_StorageSection_2` | [0..1] |
| `_DestStorageType` | `I_EWM_StorageType_2` | [0..1] |
| `_DestStorageSection` | `I_EWM_StorageSection_2` | [0..1] |
| `_ActivityArea` | `I_EWM_ActivityArea_2` | [0..1] |
| `_WarehouseProcessType` | `I_EWM_WrhsProcType_2` | [0..1] |
| `_SrceStorageBinType` | `I_EWM_StorageBinType_2` | [0..1] |
| `_DestStorageBinType` | `I_EWM_StorageBinType_2` | [0..1] |
| `_WarehouseTaskStatusText` | `I_EWM_WarehouseTaskStatusText` | [0..*] |
| `_WarehouseProcessCategory` | `I_EWM_WarehouseProcessCategory` | [0..1] |
| `_ResourceType` | `I_EWM_ResourceType_2` | [0..1] |
| `_ExceptionCode` | `I_EWM_ExceptionCode_2` | [0..1] |
| `_WarehouseOrderStatusText` | `I_EWM_WarehouseOrderStatusText` | [0..*] |
| `_WarehouseTaskCodeText` | `I_EWM_WarehouseTaskCodeText` | [0..*] |
| `_BusinessContext` | `I_EWM_BusinessContext` | [0..1] |
| `_BusinessContextExecStep` | `I_EWM_BusinessContextExecStep` | [0..1] |
| `_WhseTskSubTransmnText` | `I_EWM_WhseTskSubTransmnText` | [0..*] |
| `_ExtStorageProcessStep` | `I_EWM_ExtStorageProcessStep` | [0..1] |
| `_StorageProcess` | `I_EWM_StorageProcess_2` | [0..1] |
| `_WhseOrderCtnRule` | `I_EWM_WhseOrderCtnRule_2` | [0..1] |
| `_ResourceGroup` | `I_EWM_ResourceGroup_2` | [0..1] |
| `_WarehouseOrderQueue` | `I_EWM_WarehouseOrderQueue_2` | [0..1] |
| `_WarehouseActivity` | `I_EWM_WarehouseActivity_2` | [0..1] |
| `_OutbDelivOrdItem` | `I_EWM_OutbDelivOrdItemBasic` | [0..1] |
| `_InbDelivItem` | `I_EWM_InbDeliveryItemBasic` | [0..1] |
| `_InbDelivHdr` | `I_EWM_InbDeliveryHeaderBasic` | [0..1] |
| `_OutbDelivOrdHdr` | `I_EWM_OutbDelivOrdHdrBasic` | [0..1] |
| `_DeliveryCategory` | `I_EWM_DeliveryCategory_2` | [0..1] |
| `_DeliveryType` | `I_EWM_DeliveryType_2` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_WHSETASKITEMCUBE_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_WHSETASKITEMCUBE_2')/$value)*

```abap
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@EndUserText.label: 'Warehouse Task Item - Cube'

@Analytics.internalName: #LOCAL

@ObjectModel.compositionRoot: true
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER,
                                      #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE

@Metadata.allowExtensions:true
@VDM.viewType:#COMPOSITE
@Analytics: { dataCategory: #CUBE }
@Metadata.ignorePropagatedAnnotations:true
define view entity I_EWM_WhseTaskItemCube_2
  with parameters
    @Environment.systemField: #SYSTEM_LANGUAGE
    @Consumption.hidden
    P_Language : /scwm/lang
  as select from P_EWM_WarehouseTaskItem_2
  association [0..1] to I_EWM_WarehouseNumber_2        as _Warehouse                on  $projection.EWMWarehouse = _Warehouse.EWMWarehouse
  association [0..1] to I_EWM_StorageType_2            as _SourceStorageType        on  $projection.SourceStorageType = _SourceStorageType.EWMStorageType
                                                                                    and $projection.EWMWarehouse      = _SourceStorageType.EWMWarehouse
  association [0..1] to I_EWM_StorageSection_2         as _SrceStorageSection       on  $projection.SourceStorageSection = _SrceStorageSection.EWMStorageSection
                                                                                    and $projection.SourceStorageType    = _SrceStorageSection.EWMStorageType
                                                                                    and $projection.EWMWarehouse         = _SrceStorageSection.EWMWarehouse
  association [0..1] to I_EWM_StorageType_2            as _DestStorageType          on  $projection.DestinationStorageType = _DestStorageType.EWMStorageType
                                                                                    and $projection.EWMWarehouse           = _DestStorageType.EWMWarehouse
  association [0..1] to I_EWM_StorageSection_2         as _DestStorageSection       on  $projection.DestinationStorageSection = _DestStorageSection.EWMStorageSection
                                                                                    and $projection.DestinationStorageType    = _DestStorageSection.EWMStorageType
                                                                                    and $projection.EWMWarehouse              = _DestStorageSection.EWMWarehouse
  association [0..1] to I_EWM_ActivityArea_2           as _ActivityArea             on  $projection.ActivityArea = _ActivityArea.ActivityArea
                                                                                    and $projection.EWMWarehouse = _ActivityArea.EWMWarehouse
  association [0..1] to I_EWM_WrhsProcType_2           as _WarehouseProcessType     on  $projection.WarehouseProcessType = _WarehouseProcessType.WarehouseProcessType
                                                                                    and $projection.EWMWarehouse         = _WarehouseProcessType.EWMWarehouse
  association [0..1] to I_EWM_StorageBinType_2         as _SrceStorageBinType       on  $projection.EWMWarehouse         = _SrceStorageBinType.EWMWarehouse
                                                                                    and $projection.SourceStorageBinType = _SrceStorageBinType.EWMStorageBinType
  association [0..1] to I_EWM_StorageBinType_2         as _DestStorageBinType       on  $projection.EWMWarehouse              = _DestStorageBinType.EWMWarehouse
                                                                                    and $projection.DestinationStorageBinType = _DestStorageBinType.EWMStorageBinType
  association [0..*] to I_EWM_WarehouseTaskStatusText  as _WarehouseTaskStatusText  on  $projection.WarehouseTaskStatus = _WarehouseTaskStatusText.WarehouseTaskStatus
  association [0..1] to I_EWM_WarehouseProcessCategory as _WarehouseProcessCategory on  $projection.WarehouseProcessCategory = _WarehouseProcessCategory.WarehouseProcessCategory
  association [0..1] to I_EWM_ResourceType_2           as _ResourceType             on  $projection.ExecutingResourceType = _ResourceType.EWMResourceType
                                                                                    and $projection.EWMWarehouse          = _ResourceType.EWMWarehouse
  association [0..1] to I_EWM_ExceptionCode_2          as _ExceptionCode            on  $projection.WarehouseTaskExceptionCode = _ExceptionCode.WarehouseTaskExceptionCode
                                                                                    and $projection.EWMWarehouse               = _ExceptionCode.EWMWarehouse
  association [0..*] to I_EWM_WarehouseOrderStatusText as _WarehouseOrderStatusText on  $projection.WarehouseOrderStatus = _WarehouseOrderStatusText.WarehouseOrderStatus
  association [0..*] to I_EWM_WarehouseTaskCodeText    as _WarehouseTaskCodeText    on  $projection.WarehouseTaskCodes = _WarehouseTaskCodeText.WarehouseTaskCodes
  association [0..1] to I_EWM_BusinessContext          as _BusinessContext          on  $projection.BusinessContext = _BusinessContext.BusinessContext
  association [0..1] to I_EWM_BusinessContextExecStep  as _BusinessContextExecStep  on  $projection.BusinessContextExecutionStep = _BusinessContextExecStep.BusinessContextExecutionStep
  association [0..*] to I_EWM_WhseTskSubTransmnText    as _WhseTskSubTransmnText    on  $projection.WrhsTaskSubsystemTransmn = _WhseTskSubTransmnText.WrhsTaskSubsystemTransmn
  association [0..1] to I_EWM_ExtStorageProcessStep    as _ExtStorageProcessStep    on  $projection.ExternalStorageProcessStep = _ExtStorageProcessStep.ExternalStorageProcessStep
  association [0..1] to I_EWM_StorageProcess_2         as _StorageProcess           on  $projection.StorageProcess = _StorageProcess.StorageProcess
                                                                                    and $projection.EWMWarehouse   = _StorageProcess.EWMWarehouse
  association [0..1] to I_EWM_WhseOrderCtnRule_2       as _WhseOrderCtnRule         on  $projection.WarehouseOrderCreationRule = _WhseOrderCtnRule.WarehouseOrderCreationRule
                                                                                    and $projection.EWMWarehouse               = _WhseOrderCtnRule.EWMWarehouse
  association [0..1] to I_EWM_ResourceGroup_2          as _ResourceGroup            on  $projection.ExecutingResourceGroup = _ResourceGroup.EWMResourceGroup
                                                                                    and $projection.EWMWarehouse           = _ResourceGroup.EWMWarehouse
  association [0..1] to I_EWM_WarehouseOrderQueue_2    as _WarehouseOrderQueue      on  $projection.WarehouseOrderQueue = _WarehouseOrderQueue.WarehouseOrderQueue
                                                                                    and $projection.EWMWarehouse        = _WarehouseOrderQueue.EWMWarehouse
  association [0..1] to I_EWM_WarehouseActivity_2      as _WarehouseActivity        on  $projection.Activity     = _WarehouseActivity.Activity
                                                                                    and $projection.EWMWarehouse = _WarehouseActivity.EWMWarehouse

  association [0..1] to I_EWM_OutbDelivOrdItemBasic    as _OutbDelivOrdItem         on  $projection.EWMWarehouse                 = _OutbDelivOrdItem.EWMWarehouse
                                                                                    and $projection.EWMReferenceDocumentCategory = _OutbDelivOrdItem.EWMDeliveryDocumentCategory
                                                                                    and $projection.ReferenceDocumentUUID        = _OutbDelivOrdItem.OutboundDeliveryOrderUUID
                                                                                    and $projection.ReferenceDocumentItemUUID    = _OutbDelivOrdItem.OutboundDeliveryOrderItemUUID

  association [0..1] to I_EWM_InbDeliveryItemBasic     as _InbDelivItem             on  $projection.EWMWarehouse                 = _InbDelivItem.EWMWarehouse
                                                                                    and $projection.EWMReferenceDocumentCategory = _InbDelivItem.DeliveryDocumentCategory
                                                                                    and $projection.ReferenceDocumentUUID        = _InbDelivItem.InboundDeliveryUUID
                                                                                    and $projection.ReferenceDocumentItemUUID    = _InbDelivItem.InboundDeliveryItemUUID

  association [0..1] to I_EWM_InbDeliveryHeaderBasic   as _InbDelivHdr              on  $projection.ReferenceDocumentUUID = _InbDelivHdr.InboundDeliveryUUID
  association [0..1] to I_EWM_OutbDelivOrdHdrBasic     as _OutbDelivOrdHdr          on  $projection.ReferenceDocumentUUID = _OutbDelivOrdHdr.OutboundDeliveryOrderUUID

  association [0..1] to I_EWM_DeliveryCategory_2       as _DeliveryCategory         on  $projection.EWMReferenceDocumentCategory = _DeliveryCategory.EWMDeliveryDocumentCategory

  association [0..1] to I_EWM_DeliveryType_2           as _DeliveryType             on  $projection.EWMReferenceDeliveryDocType  = _DeliveryType.EWMDeliveryDocumentType
                                                                                    and $projection.EWMReferenceDocumentCategory = _DeliveryType.EWMDeliveryDocumentCategory
{
      @ObjectModel.foreignKey.association: '_Warehouse'
  key EWMWarehouse,
  key WarehouseTask,
  key WarehouseTaskItem,
      //Replace COUNT by SUM for sake of performance
      @DefaultAggregation: #SUM
      case when WarehouseTaskItem > '0001' then 0.0 else 1.0 end                                               as NumberOfWarehouseTasks,
      @DefaultAggregation: #SUM
      1.0                                                                                                      as NumberOfWarehouseTaskItems,
      IsHandlingUnitWarehouseTask,
      @ObjectModel.foreignKey.association: '_WarehouseProcessType'
      WarehouseProcessType,
      @ObjectModel.foreignKey.association: '_WarehouseProcessCategory'
      WarehouseProcessCategory,
      @ObjectModel.foreignKey.association: '_StorageProcess'
      StorageProcess,
      @ObjectModel.foreignKey.association: '_ExtStorageProcessStep'
      ExternalStorageProcessStep,
      WarehouseTaskStatus,
      CreatedByUser,
      WhseTaskCrtnUTCDateTime,

      WarehouseTaskCodes,
      ExecutingResource,
      WarehouseMovementsReason,
      EWMWarehouseTaskPriority                                                                                 as EWMWarehouseTaskPriority,

      StockItemUUID,
      CurrentNumberOfKeyTable,
      ProductUUID,
      ProductName,
      _Material._Text[1:Language = $parameters.P_Language].ProductName                                         as ProductDescription,


      EWMStockType,

      StockDocumentCategory,
      StockDocumentNumber,
      StockItemNumber,
      EWMDocumentCategory,
      EWMStockUsage,
      EWMStockOwner,
      StockOwnerPartnerRole,
      EntitledToDisposeParty,
      EntitledToDisposePartnerRole,
      // if Owner or EntitledToDisposeParty is block
      @Semantics.booleanIndicator
      IsBusinessPurposeCompleted,

      CounterForStockSeparation,
      Batch,
      RequirementSegment,
      StockSegment,

      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }
      WhseTaskRetentionQuantity,
      HandlingUnitType,

      WhseTaskNetWeightUnitOfMeasure,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'WhseTaskNetWeightUnitOfMeasure'} }
      WhseTaskNetWeight,

      WhseTaskNetVolumeUnitOfMeasure,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'WhseTaskNetVolumeUnitOfMeasure'} }
      WhseTaskNetVolume,

      -- Volume in display unit
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'DisplayVolumeUnit'} }
      unit_conversion( quantity => WhseTaskNetVolume,
                      source_unit => WhseTaskNetVolumeUnitOfMeasure,
                      target_unit => DisplayVolumeUnit,
                      error_handling => 'SET_TO_NULL' )                                                        as ItemNetVolumeInDisplayUnit,
      DisplayVolumeUnit,

      --- Weight in display unit
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'DisplayWeightUnit'
      unit_conversion( quantity => WhseTaskNetWeight,
                      source_unit => WhseTaskNetWeightUnitOfMeasure,
                      target_unit => DisplayWeightUnit,
                      error_handling => 'SET_TO_NULL' )                                                        as ItemNetWeightInDisplayUnit,
      DisplayWeightUnit,

      @DefaultAggregation: #SUM
      WhseTaskCapacityConsumption,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'EWMPutAwayPhysInvtryPlnSts'
      PutAwayPhysInventoryIsPlanned,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'EWMWhseTskLowStkChkPlnSts'
      WhseTaskLowStockCheckIsPlanned,
      EWMPutAwayPhysInvtryPlnSts,
      EWMWhseTskLowStkChkPlnSts,
      ShelfLifeExpirationDate,
      CountryOfOrigin,
      HazardousSubstanceIndicator,
      WhseTaskQualityInspectionType,
      QualityInspectionDocUUID,
      StockIdentificationOfWhseTask,
      EWMConsolidationGroup,
      @ObjectModel.foreignKey.association: '_SourceStorageType'
      SourceStorageType,
      @ObjectModel.foreignKey.association: '_SrceStorageSection'
      SourceStorageSection,
      SourceStorageBin,
      SourceHndlgUnitLogicalPosition,
      SourceResource,
      SourceTransportationUnit,
      EWMSourceLocationType,
      SourceHandlingUnitUUID,
      SourceHandlingUnit,
      @ObjectModel.foreignKey.association: '_DestStorageType'
      DestinationStorageType,
      @ObjectModel.foreignKey.association: '_DestStorageSection'
      DestinationStorageSection,
      DestinationStorageBin,
      DestHndlgUnitLogicalPosition,
      DestinationResource,
      DestinationTransportationUnit,
      EWMDestinationLocationType,
      DestinationHandlingUnitUUID,
      DestinationHandlingUnit,
      WhseTaskDestStorageBinDtmndBy,
      WrhsTaskSubsystemTransmn,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'WhseTaskProcgTimeDetnTimeUnit'} }
      WhseTaskPlannedProcessingTime,
      WhseTaskProcgTimeDetnTimeUnit,
      WhseTaskRefToValueAddedService,
      BatchChangeIsNotAllowed,
      ReferenceDocumentUUID,
      ReferenceDocumentItemUUID,

      @ObjectModel.foreignKey.association: '_DeliveryCategory'
      EWMReferenceDocumentCategory, // ReferenceDocumentCategory,
      _DeliveryCategory,

      @ObjectModel.foreignKey.association: '_DeliveryType'
      case when EWMReferenceDocumentCategory = 'PDI' then _InbDelivHdr.InboundDeliveryDocumentType
           when EWMReferenceDocumentCategory = 'PDO' then _OutbDelivOrdHdr.DeliveryType
           else '' end                                                                                         as EWMReferenceDeliveryDocType,
      _DeliveryType,  

      case when EWMReferenceDocumentCategory = 'PDI' then _InbDelivItem.InboundDelivery
           when EWMReferenceDocumentCategory = 'PDO' then _OutbDelivOrdItem.OutboundDeliveryOrder
           else '' end                                                                                         as EWMRefDeliveryDocumentNumber,

      cast( case when EWMReferenceDocumentCategory = 'PDI' then _InbDelivItem.InboundDeliveryItem
            when EWMReferenceDocumentCategory = 'PDO' then _OutbDelivOrdItem.OutboundDeliveryOrderItem
            else '0000000000' end    as /scdl/dl_itemno )                                                      as EWMRefDeliveryDocumentItem,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'EWMWave'
      Wave,
      EWMWave,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'EWMWaveItem'
      WaveItem,
      EWMWaveItem,
      WhseTaskTwoStepPickingType,
      WhseTaskTwoStepPickingRlvnce,
      DocumentReltdStockDocCat,
      DocumentReltdStockDocUUID,
      DocumentReltdStockDocItemUUID,
      StockIdentificationNumber,
      KitItemIsCreatedAutomatically,
      WarehouseTaskUUID,
      IsDocumentaryBatch,
      ConveyorTechniqueSegment,
      EWMProductionSupplyArea,
      ProductionOrder,
      WhseTaskCrtnWhseTmznDateTime,
      cast(substring(cast(WhseTaskCrtnWhseTmznDateTime as abap.char( 17 )), 1, 4)  as abap.numc( 4 ) )         as WhseTaskCrtnWhseTmznYear,
      cast(substring(cast(WhseTaskCrtnWhseTmznDateTime as abap.char( 17 )), 1, 6)  as abap.numc(6))            as WhseTaskCrtnWhseTmznMonth,
      cast(substring(cast(WhseTaskCrtnWhseTmznDateTime as abap.char( 17 )), 1, 8)  as abap.dats)               as WhseTaskCrtnWhseTmznDate,
      cast(substring(cast(WhseTaskCrtnWhseTmznDateTime as abap.char( 17 )), 1, 10)  as abap.numc(10))          as WhseTaskCrtnWhseTmznHour,
      cast(substring(cast(WhseTaskCrtnWhseTmznDateTime as abap.char( 17 )), 9, 6)  as abap.tims)               as WhseTaskCrtnWhseTmznTime,
      cast(concat(substring(cast(WhseTaskCrtnWhseTmznDateTime as abap.char( 17 )), 9, 3),'000') as abap.tims)  as WhseTaskCrtnRnddTo10MinsTime,

      WhseTaskConfWhseTmznDateTime,
      cast(substring(cast(WhseTaskConfWhseTmznDateTime as abap.char( 17 )), 1, 4)  as abap.numc( 4 ) )         as WhseTaskConfWhseTmznYear,
      cast(substring(cast(WhseTaskConfWhseTmznDateTime as abap.char( 17 )), 1, 6)    as abap.numc(6))          as WhseTaskConfWhseTmznMonth,
      WhseTaskConfWhseTmznDate,
      cast(substring(cast(WhseTaskConfWhseTmznDateTime as abap.char( 17 )), 1, 10)   as abap.numc(10))         as WhseTaskConfWhseTmznHour,
      cast(substring(cast(WhseTaskConfWhseTmznDateTime as abap.char( 17 )), 9, 6)  as abap.tims)               as WhseTaskConfWhseTmznTime,
      cast(concat(substring(cast(WhseTaskConfWhseTmznDateTime as abap.char( 17 )), 9, 3),'000') as abap.tims)  as WhseTaskConfRnddTo10MinsTime,

      WhseTskPlndClsgWhseTmznDteTme,
      cast(substring(cast(WhseTskPlndClsgWhseTmznDteTme as abap.char( 17 )), 1, 4)   as abap.numc( 4 ) )       as WhseTskPlndClsgWhseTmznYear,
      cast(substring(cast(WhseTskPlndClsgWhseTmznDteTme as abap.char( 17 )), 1, 6)       as abap.numc(6))      as WhseTskPlndClsgWhseTmznMonth,
      cast(substring(cast(WhseTskPlndClsgWhseTmznDteTme as abap.char( 17 )), 1, 8)  as abap.dats)              as WhseTskPlndClsgWhseTmznDate,
      cast(substring(cast(WhseTskPlndClsgWhseTmznDteTme as abap.char( 17 )), 1, 10)        as abap.numc(10))   as WhseTskPlndClsgWhseTmznHour,
      cast(substring(cast(WhseTskPlndClsgWhseTmznDteTme as abap.char( 17 )), 9, 6)  as abap.tims)              as WhseTskPlndClsgWhseTmznTime,
      cast(concat(substring(cast(WhseTskPlndClsgWhseTmznDteTme as abap.char( 17 )), 9, 3),'000') as abap.tims) as WhseTskPlndClsgRnddTo10MinsTme,
      Kanban,
      StockKeepingAlternativeUoM,
      @ObjectModel.foreignKey.association: '_ActivityArea'
      ActivityArea,
      WarehouseOrder,
      LogicalRecordProgramName,
      LogicalRecordTransactionCode,
      EWMDummyFuncForStructureExtn,
      CertificateText,
      WhseTaskLastChgUTCDateTime,
      @ObjectModel.foreignKey.association: '_WarehouseActivity'
      WarehouseActivityType                                                                                    as Activity,
      ConfirmedByUser,
      ConfirmationUTCDateTime                                                                                  as WhseTaskConfUTCDateTime,
      Processor,
      @ObjectModel.foreignKey.association: '_ExceptionCode'
      WarehouseTaskExceptionCode,
      @ObjectModel.foreignKey.association: '_BusinessContext'
      BusinessContext,
      @ObjectModel.foreignKey.association: '_BusinessContextExecStep'
      BusinessContextExecutionStep,
      @ObjectModel.foreignKey.association: '_ResourceGroup'
      ExecutingResourceGroup,
      @ObjectModel.foreignKey.association: '_ResourceType'
      ExecutingResourceType,

      @ObjectModel.foreignKey.association: '_WhseOrderCtnRule'
      WarehouseOrderCreationRule,
      WarehouseOrderStatus,
      WhseOrderLatestStartDateTime                                                                             as LatestStartUTCDateTime,
      WhseOrderHigherLevelWhseOrder                                                                            as HigherLevelWarehouseOrder,
      WarehouseOrderIsSplit,
      WarehouseOrderStartDateTime                                                                              as WrhsOrdStrtUTCDateTime,
      @ObjectModel.foreignKey.association: '_WarehouseOrderQueue'
      WarehouseOrderQueue,
      WrhsOrdCrtnUTCDateTime,
      WhseTaskPlannedClosingDateTime                                                                           as PickCompltnUTCDateTime,

      @ObjectModel.foreignKey.association: '_SrceStorageBinType'
      SourceStorageBinType,
      SourceStorageBinAisle,
      SourceStorageBinStack,
      SourceStorageBinLevel,
      SourceStorageBinAccessType,

      @ObjectModel.foreignKey.association: '_DestStorageBinType'
      DestinationStorageBinType,
      DestinationStorageBinAisle,
      DestinationStorageBinStack,
      DestinationStorageBinLevel,
      DestinationStorageBinAccType,

      _OutbDelivOrdItem.EWMOutboundDeliveryOrder,
      _OutbDelivOrdItem.EWMOutboundDeliveryOrderItem,
      _OutbDelivOrdItem.EWMOutbDeliveryOrderItemType,
      _OutbDelivOrdItem.EWMOutbDelivOrderItemCategory,

      _InbDelivItem.EWMInboundDeliveryItemType,
      PlndPickCompltnUTCDateTime,
      PlndPackCompletionUTCDateTime,
      PlndStagingCompltnUTCDateTime,
      PlndLoadCompletionUTCDateTime,
      WaveActlReleasedUTCDateTime,

      WaveCutoffWhseTmznDateTime,
      WavePlndRelWhseTmznDateTime,
      PlndPickCmpltWhseTmznDateTime,
      PlndPackCmpltWhseTmznDateTime,
      PlndStggCmpltWhseTmznDateTime,
      WaveCompletionWhseTmznDateTime,
      WaveActualReldWhseTmznDateTime,
      cast(substring(cast(WaveActualReldWhseTmznDateTime as abap.char( 17 )), 1, 4)   as abap.numc( 4 ) )      as WaveActualReldWhseTmznYear,
      cast(substring(cast(WaveActualReldWhseTmznDateTime as abap.char( 17 )), 1, 6)   as abap.numc( 6 ) )      as WaveActualReldWhseTmznMonth,
      cast(substring(cast(WaveActualReldWhseTmznDateTime as abap.char( 17 )), 1, 8)  as abap.dats)             as WaveActualReldWhseTmznDate,
      cast(substring(cast(WaveActualReldWhseTmznDateTime as abap.char( 17 )), 1, 10)   as abap.numc( 10 ) )    as WaveActualReldWhseTmznHour,
      cast(substring(cast(WaveActualReldWhseTmznDateTime as abap.char( 17 )), 9, 6) as abap.tims)              as WaveActualReldWhseTmznTime,

      WaveTemplate,
      _waveText[1:Language = $parameters.P_Language].WaveTemplateName                                          as WaveTemplateName,

      _WarehouseTaskStatusText[1:Language = $parameters.P_Language].WarehouseTaskStatusName                    as WarehouseTaskStatusName,
      _WarehouseTaskCodeText[1:Language = $parameters.P_Language].WarehouseTaskCodesName                       as WarehouseTaskCodesName,
      _WarehouseOrderStatusText[1:Language = $parameters.P_Language].WarehouseOrderStatusName                  as WarehouseOrderStatusName,
      _WhseTskSubTransmnText[1:Language = $parameters.P_Language].WrhsTaskSubsystemTransmnName                 as WrhsTaskSubsystemTransmnName,

      BaseUnit,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }
      TargetQuantityInBaseUnit,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }
      ActualQuantityInBaseUnit,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }
      DifferenceQuantityInBaseUnit,

      AlternativeUnit,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'AlternativeUnit'} }
      TargetQuantityInAltvUnit,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'AlternativeUnit'} }
      ActualQuantityInAltvUnit,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'AlternativeUnit'} }
      DifferenceQuantityInAltvUnit,


      case when WarehouseTaskStatus = '' and WhseTaskPlannedClosingDateTime <> 00000000000000    then
            case when OpenMod = 0   then WhseTaskOverdueHours
              else case when WhseTaskPlannedClosingDateTime < tstmp_current_utctimestamp()    then WhseTaskOverdueHours+1
                else WhseTaskOverdueHours
                end
              end
      else case when WarehouseTaskStatus = 'C' and WhseTaskPlannedClosingDateTime <> 00000000000000  then
            case when ConfirmedMod = 0  then WhseTaskOverdueHours
              else case when WhseTaskPlannedClosingDateTime < ConfirmationUTCDateTime    then WhseTaskOverdueHours+1
                else WhseTaskOverdueHours
                end
              end
      else WhseTaskOverdueHours  end
      end                                                                                                      as WhseTaskOverdueHours,


      case when WhseTaskOverdueHours < 7
      then       cast(
      case when WarehouseTaskStatus = '' and WhseTaskPlannedClosingDateTime <> 00000000000000    then
            case when OpenMod = 0   then WhseTaskOverdueHours
              else case when WhseTaskPlannedClosingDateTime < tstmp_current_utctimestamp()    then WhseTaskOverdueHours+1
                else WhseTaskOverdueHours
                end
              end
      else case when WarehouseTaskStatus = 'C' and WhseTaskPlannedClosingDateTime <> 00000000000000  then
            case when ConfirmedMod = 0  then WhseTaskOverdueHours
              else case when WhseTaskPlannedClosingDateTime < ConfirmationUTCDateTime    then WhseTaskOverdueHours+1
                else WhseTaskOverdueHours
                end
              end
      else WhseTaskOverdueHours  end
      end   as abap.char( 60 ))
           when WhseTaskOverdueHours = 7 then

      case when WarehouseTaskStatus = '' and WhseTaskPlannedClosingDateTime <> 00000000000000    then
            case when OpenMod = 0   then cast(WhseTaskOverdueHours as abap.char(60))
              else case when WhseTaskPlannedClosingDateTime < tstmp_current_utctimestamp()    then '≥8'
                else cast(WhseTaskOverdueHours as abap.char(60))
                end
              end
      else case when WarehouseTaskStatus = 'C' and WhseTaskPlannedClosingDateTime <> 00000000000000  then
            case when ConfirmedMod = 0  then cast(WhseTaskOverdueHours as abap.char(60))
              else case when WhseTaskPlannedClosingDateTime < ConfirmationUTCDateTime    then '≥8'
                else cast(WhseTaskOverdueHours as abap.char(60))
                end
              end
      else cast(WhseTaskOverdueHours as abap.char(60))  end
      end

           else '≥8'
                                                                                         end                   as WhseTaskOverdueHoursDesc,

      _Warehouse,
      _SourceStorageType,
      _SrceStorageSection,
      _DestStorageType,
      _DestStorageSection,
      _ActivityArea,
      _WarehouseProcessType,
      _SrceStorageBinType,
      _DestStorageBinType,
      _WarehouseTaskStatusText,
      _WarehouseTaskCodeText,
      _WarehouseProcessCategory,
      _ResourceType,
      _ExceptionCode,
      _WarehouseOrderStatusText,
      _BusinessContext,
      _BusinessContextExecStep,
      _WhseTskSubTransmnText,
      _ExtStorageProcessStep,
      _StorageProcess,
      _WhseOrderCtnRule,
      _ResourceGroup,
      _WarehouseOrderQueue,
      _WarehouseActivity,
      _InbDelivItem,
      _OutbDelivOrdItem,
      @Semantics.booleanIndicator
      case when WhseTaskConfWhseTmznDate = EWMWarehouseCurrentDate
      then cast('X' as ewm_de_wt_conf_is_today) else cast('' as ewm_de_wt_conf_is_today ) end                  as EWMWhseTaskConfDateIsToday,
      @Semantics.booleanIndicator
      case when WarehouseTaskExceptionCode is initial
      then cast('' as ewm_de_wt_has_exception) else cast('X' as ewm_de_wt_has_exception ) end                  as EWMWhseTaskHasException
}
```
