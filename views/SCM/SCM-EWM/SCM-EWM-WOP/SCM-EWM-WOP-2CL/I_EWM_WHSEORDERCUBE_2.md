---
name: I_EWM_WHSEORDERCUBE_2
description: "This CDS view provides information about warehouse orders in your warehouse. This CDS view provides the data to answer the following business questions: What are the existing warehouse orders with their related information in your warehouse? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_WHSEORDERCUBE_2')/$value
semantic_en: "This CDS view provides information about warehouse orders in your warehouse. This CDS view provides the data to answer the following business questions: What are the existing warehouse orders with their related information in your warehouse? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - SCM
  - bo:companycode
  - component:SCM-EWM-WOP-2CL
  - interface-view
  - order
  - SCM-EWM
  - SCM-EWM-WOP
  - SCM-EWM-WOP-2CL
  - metadata-only
---
# I_EWM_WHSEORDERCUBE_2

**This CDS view provides information about warehouse orders in your warehouse. This CDS view provides the data to answer the following business questions: What are the existing warehouse orders with their related information in your warehouse? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_WHSEORDERCUBE_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMWarehouse` |  | |  |  | `CHAR(4)` | Warehouse Number/Warehouse Complex |
| `WarehouseOrder` |  | |  |  | `NUMC(10)` | Warehouse Order Number |
| `NumberOfWarehouseOrders` |  | |  |  | `FLTP(16)` |  |
| `WarehouseOrderCreationRule` |  | |  |  | `CHAR(4)` | Warehouse Order Creation Rule |
| `WhseOrderCreationRuleCategory` |  | |  |  | `CHAR(1)` | Category of Warehouse Order Creation Rule |
| `WhseProcessTypeDocumentHdr` |  | |  |  | `CHAR(4)` | Document Header Warehouse Process Type |
| `Wave` |  | |  |  | `NUMC(10)` | Wave |
| `EWMWave` |  | |  |  | `NUMC(10)` | Wave |
| `WarehouseOrderStatus` |  | |  |  | `CHAR(1)` | Warehouse Order Status |
| `WarehouseOrderStatusName` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `ActivityArea` |  | |  |  | `CHAR(4)` | Activity Area |
| `EWMStorageType` |  | |  |  | `CHAR(4)` | Storage Type |
| `EWMStorageBin` |  | |  |  | `CHAR(18)` | Storage Bin |
| `WrhsOrdCrtnUTCDateTime` |  | |  |  | `DEC(15)` | Creation Time |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Created By |
| `WarehouseOrderQueue` |  | |  |  | `CHAR(10)` | Queue |
| `WrhsOrdStrtUTCDateTime` |  | |  |  | `DEC(15)` | Start Time |
| `WarehouseOrderStartTimeIsFixed` |  | |  |  | `CHAR(1)` | Warehouse Order Start Time Fixed |
| `WhseOrderConfUTCDateTime` |  | |  |  | `DEC(15)` | Time of Confirmation |
| `WarehouseOrderConfirmedBy` |  | |  |  | `CHAR(12)` | Confirmed By |
| `Processor` |  | |  |  | `CHAR(12)` | Processor |
| `ExecutingResource` |  | |  |  | `CHAR(18)` | Resource (Means of Transportation or User) |
| `ProcessorIsManualAssigned` |  | |  |  | `CHAR(1)` | Manual Assignment of Processor |
| `WarehouseOrderHasPhysInvtryDoc` |  | |  |  | `CHAR(1)` | WO Contains Physical Inventory Document |
| `WhseOrderForSplitWhseOrder` |  | |  |  | `NUMC(10)` | Warehouse Order Number of WO That Was Split |
| `WarehouseOrderIsSplit` |  | |  |  | `CHAR(1)` | Warehouse Order Was Split |
| `ResourceStartBin` |  | |  |  | `CHAR(18)` | Starting Point for Processing Resource |
| `LatestStartUTCDateTime` |  | |  |  | `DEC(15)` | Latest Starting Date (LSD) |
| `WarehouseOrderPlannedDuration` |  | |  |  | `QUAN(15)` | Planned Execution Time of Warehouse Order |
| `WhseOrderPlanDurationTimeUnit` |  | |  |  | `UNIT(3)` | Warehouse Order: Time Unit |
| `WhseOrderLastChgUTCDateTime` |  | |  |  | `DEC(15)` | Time of Change |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Changed By |
| `WhseOrderHigherLevelWhseOrder` |  | |  |  | `NUMC(10)` | Warehouse Order Number of Higher-Level Warehouse Order |
| `WhseOrderSubsequentWhseOrder` |  | |  |  | `NUMC(10)` | Warehouse Order Number of Subsequent Warehouse Order |
| `WhseOrderHasSubsqntWhseOrder` |  | |  |  | `CHAR(1)` | WO Contains Warehouse Order |
| `WarehouseOrderHasWhseTask` |  | |  |  | `CHAR(1)` | Warehouse Order Contains Warehouse Task |
| `HzdsSubstanceIsRlvtForStorage` |  | |  |  | `CHAR(1)` | Hazardous Substance Relevant for Storage |
| `WhseOrderCrtnWhseTmznDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WhseOrderCrtnWhseTmznYear` |  | |  |  | `NUMC(4)` |  |
| `WhseOrderCrtnWhseTmznMonth` |  | |  |  | `NUMC(6)` |  |
| `WhseOrderCrtnWhseTmznDate` |  | |  |  | `DATS(8)` |  |
| `WhseOrderCrtnWhseTmznHour` |  | |  |  | `NUMC(10)` |  |
| `WhseOrderCrtnWhseTmznTime` |  | |  |  | `TIMS(6)` |  |
| `WhseOrderCrtnRnddTo10MinsTime` |  | |  |  | `TIMS(6)` |  |
| `WhseOrdLtstStrtWhseTmznDteTme` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WhseOrdLtstStrtWhseTmznYear` |  | |  |  | `NUMC(4)` |  |
| `WhseOrdLtstStrtWhseTmznMonth` |  | |  |  | `NUMC(6)` |  |
| `WhseOrdLtstStrtWhseTmznDate` |  | |  |  | `DATS(8)` |  |
| `WhseOrdLtstStrtWhseTmznHour` |  | |  |  | `NUMC(10)` |  |
| `WhseOrdLtstStrtWhseTmznTime` |  | |  |  | `TIMS(6)` |  |
| `WhseOrdLtstStrtRnddTo10MinsTme` |  | |  |  | `TIMS(6)` |  |
| `WhseOrderConfWhseTmznDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WhseOrderConfWhseTmznYear` |  | |  |  | `NUMC(4)` |  |
| `WhseOrderConfWhseTmznMonth` |  | |  |  | `NUMC(6)` |  |
| `WhseOrderConfWhseTmznDate` |  | |  |  | `DATS(8)` |  |
| `WhseOrderConfWhseTmznHour` |  | |  |  | `NUMC(10)` |  |
| `WhseOrderConfWhseTmznTime` |  | |  |  | `TIMS(6)` |  |
| `WhseOrderConfRnddTo10MinsTime` |  | |  |  | `TIMS(6)` |  |
| `WhseOrderOverdueHours` |  | |  |  | `DEC(16)` |  |
| `WaveItem` |  | |  |  | `NUMC(6)` |  |
| `EWMWaveItem` |  | |  |  | `NUMC(6)` |  |
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
