---
name: I_EWM_INBDELIVERYITEMC_2
description: This CDS view provides information about inbound delivery items in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: SCM-EWM-DLP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_INBDELIVERYITEMC_2')/$value
semantic_en: This CDS view provides information about inbound delivery items in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - SCM
  - bo:companycode
  - component:SCM-EWM-DLP-2CL
  - delivery
  - interface-view
  - SCM-EWM
  - SCM-EWM-DLP
  - SCM-EWM-DLP-2CL
  - metadata-only
---
# I_EWM_INBDELIVERYITEMC_2

**This CDS view provides information about inbound delivery items in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-DLP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_INBDELIVERYITEMC_2')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `EWMWarehouse` | `CHAR(4)` | Warehouse Number/Warehouse Complex |
| `EWMInboundDelivery` | `CHAR(35)` | Document Number |
| `EWMInboundDeliveryItem` | `NUMC(10)` | Item Number |
| `InboundDeliveryUUID` | `RAW(16)` | Document ID |
| `InboundDeliveryItemUUID` | `RAW(16)` | Item ID |
| `NumberOfInbDelivItems` | `FLTP(16)` |  |
| `ReceivingOffice` | `CHAR(20)` | Location Number |
| `EWMMeansOfTransportType` | `CHAR(10)` | Means of Transport |
| `EWMMeansOfTransportTypeName` | `CHAR(40)` | Means of Transport Description |
| `EWMMeansOfTransport` | `CHAR(20)` | Means-of-Transport ID |
| `EWMInboundDeliveryItemCategory` | `CHAR(3)` | Item Category |
| `DeliveryDocumentCategory` | `CHAR(3)` | Document Category |
| `DeliveryItemCategoryName` | `CHAR(40)` | Description |
| `InboundDeliveryDocumentType` | `CHAR(4)` | Document Type |
| `InbDeliveryDocumentTypeName` | `CHAR(40)` | Description |
| `EWMInboundDeliveryItemType` | `CHAR(4)` | Item Type |
| `InboundDeliveryItemTypeName` | `CHAR(40)` | Description |
| `WarehouseProcessType` | `CHAR(4)` | Warehouse Process Type |
| `WarehouseProcessTypeName` | `CHAR(40)` | Description |
| `WarehouseDoor` | `CHAR(4)` | Warehouse Door |
| `StagingAreaGroup` | `CHAR(4)` | Staging Area Group |
| `StagingArea` | `CHAR(4)` | Staging Area |
| `StagingBay` | `CHAR(18)` | Staging Bay |
| `GoodsMovementBin` | `CHAR(18)` | Storage Bin of Goods Movement Posting |
| `Product` | `CHAR(40)` | Product |
| `ProductName` | `CHAR(40)` | Product Description |
| `Batch` | `CHAR(10)` | Batch Number |
| `RequirementSegment` | `CHAR(40)` | Requirement Segment |
| `StockSegment` | `CHAR(40)` | Stock Segment |
| `EntitledToDisposeParty` | `CHAR(10)` | Party Entitled to Dispose |
| `NameOfEntitledToDisposeParty` | `CHAR(81)` |  |
| `ShipFromParty` | `CHAR(10)` | Business Partner Number |
| `ShipFromPartyName` | `CHAR(40)` |  |
| `IsBusinessPurposeCompleted` | `CHAR(1)` |  |
| `Carrier` | `CHAR(10)` | Business Partner Number |
| `CarrierName` | `CHAR(40)` |  |
| `TimeZoneID` | `CHAR(6)` | Time Zone |
| `StockOwner` | `CHAR(10)` | Owner |
| `EWMStockOwner` | `CHAR(10)` | Owner |
| `StockOwnerName` | `CHAR(81)` |  |
| `EWMStockType` | `CHAR(2)` | Stock Type |
| `EWMStockTypeName` | `CHAR(30)` |  |
| `ProductQuantity` | `QUAN(31)` | Quantity |
| `ItemVolume` | `QUAN(31)` |  |
| `ItemNetWeight` | `QUAN(31)` |  |
| `ItemGrossWeight` | `QUAN(31)` |  |
| `QuantityUnit` | `UNIT(3)` | Unit of Measure |
| `DisplayWeightUnit` | `UNIT(3)` | Weight Unit |
| `DisplayVolumeUnit` | `UNIT(3)` | Volume Unit |
| `CompletionStatus` | `CHAR(1)` | Status Value |
| `CompletionStatusName` | `CHAR(30)` | Individual Status of an Object |
| `UnloadingStatus` | `CHAR(1)` | Status Value |
| `UnloadingStatusName` | `CHAR(30)` | Individual Status of an Object |
| `PutawayStatus` | `CHAR(1)` | Status Value |
| `PutawayStatusName` | `CHAR(30)` | Individual Status of an Object |
| `GoodsReceiptStatus` | `CHAR(1)` | Status Value |
| `GoodsReceiptStatusName` | `CHAR(30)` | Individual Status of an Object |
| `QualityMgmtCountPlngStatus` | `CHAR(1)` | Status Value |
| `QualityMgmtCountPlngStatusName` | `CHAR(30)` | Individual Status of an Object |
| `QualityMgmtInspPlngStatus` | `CHAR(1)` | Status Value |
| `QualityMgmtInspPlngStsName` | `CHAR(30)` | Individual Status of an Object |
| `QualityMgmtInspectionStatus` | `CHAR(1)` | Status Value |
| `QualityMgmtInspectionStsName` | `CHAR(30)` | Individual Status of an Object |
| `GoodsMovementBlockStatus` | `CHAR(1)` | Status Value |
| `GoodsMovementBlockStatusName` | `CHAR(30)` | Individual Status of an Object |
| `CheckToleranceStatus` | `CHAR(1)` | Status Value |
| `CheckToleranceStatusName` | `CHAR(30)` | Individual Status of an Object |
| `PlanningPutawayStatus` | `CHAR(1)` | Status Value |
| `PlanningPutawayStatusName` | `CHAR(30)` | Individual Status of an Object |
| `TransportationUnitAssgmtStatus` | `CHAR(1)` | Status Value |
| `TranspUnitAssgmtStatusName` | `CHAR(30)` | Individual Status of an Object |
| `ValueAddedServiceOrderStatus` | `CHAR(1)` | Status Value |
| `ValueAddedDelivStsName` | `CHAR(30)` | Individual Status of an Object |
| `ValuationQtyAssignmentStatus` | `CHAR(1)` | Status Value |
| `ValuationQtyAssgmtStatusName` | `CHAR(30)` | Individual Status of an Object |
| `WarehouseActivityStatus` | `CHAR(1)` | Status Value |
| `WarehouseActivityStatusName` | `CHAR(30)` | Individual Status of an Object |
| `TransitStatus` | `CHAR(1)` | Status Value |
| `TransitStatusName` | `CHAR(30)` | Individual Status of an Object |
| `TransitProcedureStatus` | `CHAR(1)` | Status Value |
| `TransitProcedureStatusName` | `CHAR(30)` | Individual Status of an Object |
| `TransportationPlanningStatus` | `CHAR(1)` | Status Value |
| `TranspPlngStatusName` | `CHAR(30)` | Individual Status of an Object |
| `OverallBlockStatus` | `CHAR(1)` | Status Value |
| `OverallBlockStatusName` | `CHAR(30)` | Individual Status of an Object |
| `ItemInconsistencyBlkStatus` | `CHAR(1)` | Status Value |
| `ItemInconsistencyBlkStatusName` | `CHAR(30)` | Individual Status of an Object |
| `TranspPlanBlockStatus` | `CHAR(1)` | Status Value |
| `TranspPlanBlockStatusName` | `CHAR(30)` | Individual Status of an Object |
| `WarehouseLocation` | `CHAR(20)` | Location Number |
| `InbDelivCompltnEndUTCDateTime` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `ActualGRStartUTCDateTime` | `DEC(15)` | Creation Date/Time |
| `PlannedGRStartUTCDateTime` | `DEC(15)` | Creation Date/Time |
| `ActualPutawayEndUTCDateTime` | `DEC(15)` | Creation Date/Time |
| `UnloadingEndUTCDateTime` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `ActualGREndUTCDateTime` | `DEC(15)` | Creation Date/Time |
| `PlannedGREndUTCDateTime` | `DEC(15)` | Creation Date/Time |
| `InbDelivItemCrtnUTCDateTime` | `DEC(15)` | UTC Date and Time |
| `PutawayEndWhseTmznDateTime` | `DEC(15)` | End Date and Time of Putaway |
| `ActualGREndWhseTmznDateTime` | `DEC(15)` | Goods Receipt Ended On |
| `UnloadingEndWhseTmznDateTime` | `DEC(15)` | End Date and Time of Unloading |
| `InbDelivItmCmpltWhseTmznDteTme` | `DEC(15)` | Completion Date and Time |
| `InbDelivCrtnWhseTmznDateTime` | `DEC(15)` | Created On |
| `PlndDeliveryWhseTmznDateTime` | `DEC(15)` | Planned Delivery Date and Time |
| `ActualDeliveryWhseTmznDateTime` | `DEC(15)` | Delivery Date and Time |
| `PlndArrvlInYardWhseTmznDteTme` | `DEC(15)` | Planned Arrival Date and Time in Yard |
| `ActlArrvlInYardWhseTmznDteTme` | `DEC(15)` | Arrival Time in Yard |
| `PlndGREndWhseTmznDateTime` | `DEC(15)` | Date and Time of Planned Goods Receipt |
| `PlndGoodsReceiptWhseTmznYear` | `NUMC(4)` | Display Date (Year) |
| `PlndGoodsReceiptWhseTmznMonth` | `NUMC(6)` | Display Date (Month) |
| `PlndGoodsReceiptWhseTmznDate` | `DATS(8)` | Display Date |
| `PlndGoodsReceiptWhseTmznHour` | `NUMC(10)` | Display Time (Hour) |
| `PlndGoodsReceiptWhseTmznTime` | `TIMS(6)` | Display Time |
| `UnloadingEndWhseTmznYear` | `NUMC(4)` | Display Date (Year) |
| `UnloadingEndWhseTmznMonth` | `NUMC(6)` | Display Date (Month) |
| `UnloadingEndWhseTmznDate` | `DATS(8)` | Display Date |
| `UnloadingEndWhseTmznHour` | `NUMC(10)` | Display Time (Hour) |
| `UnloadingEndWhseTmznTime` | `TIMS(6)` | Display Time |
| `PutawayEndWhseTmznYear` | `NUMC(4)` | Display Date (Year) |
| `PutawayEndWhseTmznMonth` | `NUMC(6)` | Display Date (Month) |
| `PutawayEndWhseTmznDate` | `DATS(8)` | Display Date |
| `PutawayEndWhseTmznHour` | `NUMC(10)` | Display Time (Hour) |
| `PutawayEndWhseTmznTime` | `TIMS(6)` | Display Time |
| `GoodsReceiptEndWhseTmznYear` | `NUMC(4)` | Display Date (Year) |
| `GoodsReceiptEndWhseTmznMonth` | `NUMC(6)` | Display Date (Month) |
| `GoodsReceiptEndWhseTmznDate` | `DATS(8)` | Display Date |
| `GoodsReceiptEndWhseTmznHour` | `NUMC(10)` | Display Time (Hour) |
| `GoodsReceiptEndWhseTmznTime` | `TIMS(6)` | Display Time |
| `InbDelivCompltnEndWhseTmznYear` | `NUMC(4)` | Display Date (Year) |
| `InbDelivCompltnEndWhseTmznMnth` | `NUMC(6)` | Display Date (Month) |
| `InbDelivCompltnEndWhseTmznDate` | `DATS(8)` | Display Date |
| `InbDelivCompltnEndWhseTmznHour` | `NUMC(10)` | Display Time (Hour) |
| `InbDelivCompltnEndWhseTmznTime` | `TIMS(6)` | Display Time |
| `PlannedDeliveryWhseTmznYear` | `NUMC(4)` | Display Date (Year) |
| `PlannedDeliveryWhseTmznMonth` | `NUMC(6)` | Display Date (Month) |
| `PlannedDeliveryWhseTmznDate` | `DATS(8)` | Display Date |
| `PlannedDeliveryWhseTmznHour` | `NUMC(10)` | Display Time (Hour) |
| `PlannedDeliveryWhseTmznTime` | `TIMS(6)` | Display Time |
| `ActualDeliveryWhseTmznYear` | `NUMC(4)` | Display Date (Year) |
| `ActualDeliveryWhseTmznMonth` | `NUMC(6)` | Display Date (Month) |
| `ActualDeliveryWhseTmznDate` | `DATS(8)` | Display Date |
| `ActualDeliveryWhseTmznHour` | `NUMC(10)` | Display Time (Hour) |
| `ActualDeliveryWhseTmznTime` | `TIMS(6)` | Display Time |
| `PlndArrvlInYardWhseTmznYear` | `NUMC(4)` | Display Date (Year) |
| `PlndArrvlInYardWhseTmznMonth` | `NUMC(6)` | Display Date (Month) |
| `PlndArrvlInYardWhseTmznDate` | `DATS(8)` | Display Date |
| `PlndArrvlInYardWhseTmznHour` | `NUMC(10)` | Display Time (Hour) |
| `PlndArrvlInYardWhseTmznTime` | `TIMS(6)` | Display Time |
| `ActlArrvlInYardWhseTmznYear` | `NUMC(4)` | Display Date (Year) |
| `ActlArrvlInYardWhseTmznMonth` | `NUMC(6)` | Display Date (Month) |
| `ActlArrvlInYardWhseTmznDate` | `DATS(8)` | Display Date |
| `ActlArrvlInYardWhseTmznHour` | `NUMC(10)` | Display Time (Hour) |
| `ActlArrvlInYardWhseTmznTime` | `TIMS(6)` | Display Time |
| `ActualArrivalInYardUTCDateTime` | `DEC(15)` | Creation Date/Time |
| `PlndArrivalInYardUTCDateTime` | `DEC(15)` | Creation Date/Time |
| `NoWhseActivityTimeInMinutes` | `DEC(15)` |  |
| `ArrivalInYardOvrdDurnInMinutes` | `FLTP(16)` |  |
| `WaitInYardDurationInMinutes` | `FLTP(16)` |  |
| `GoodsReceiptDurationInMinutes` | `FLTP(16)` |  |
| `PlndDelivTo30MinsWhseDteTme` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `PlndDelivTo60MinsWhseDteTme` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `PlndArrvlTo30MinsWhseDteTme` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `PlndArrvlTo60MinsWhseDteTme` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `ActlDelivTo30MinsWhseDteTme` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `ActlDelivTo60MinsWhseDteTme` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `ActlArrvlTo30MinsWhseDteTme` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `ActlArrvlTo60MinsWhseDteTme` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `CompltnEndTo30MinsWhseDteTme` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `CompltnEndTo60MinsWhseDteTme` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `GREndRnddTo30MinsWhseDteTme` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `GREndRnddTo60MinsWhseDteTme` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `PtwyEndRnddTo30MinsWhseDteTme` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `PtwyEndRnddTo60MinsWhseDteTme` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `UnldgEndRnddTo30MinsWhseDteTme` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `UnldgEndRnddTo60MinsWhseDteTme` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `EWMPlndGRWhseTmznHour` | `NUMC(2)` | Planned GR Time in Hours (Whse Time Zone) |
| `EWMPlndDeliveryWhseTmznHour` | `NUMC(2)` | Planned Delivey Time in Hours (Warehouse Time Zone) |
| `EWMPlndGoodsReceiptDateIsToday` | `CHAR(1)` | Planned Goods Receipt Date Is Today (Whse Time Zone) |
| `EWMActualPutawayDateIsToday` | `CHAR(1)` | Actual Putaway Date Is Today (Warehouse Time Zone) |
| `EWMPlndOrActGRIsToday` | `CHAR(1)` | Planned/Actual Goods Receipt Date Is Today |
| `EWMPlndDeliveryDateIsToday` | `CHAR(1)` | Planned Delivery Date Is Today (Warehouse Time Zone) |
| `EWMQuantityHasAdjustment` | `CHAR(1)` | Delivery Quantity Has Adjustments |
| `EWMPlndGRDateIsInPast` | `CHAR(1)` | Planned Goods Receipt Date Is in Past |
| `EWMActualGRDateIsOnTime` | `CHAR(1)` | Actual Goods Receipt Is on Time |
| `EWMPlndDeliveryTimeIsInPast` | `CHAR(1)` | Planned Delivery Time Is in Past |
| `EWMActGRIsBeforePlndDelivTime` | `CHAR(1)` | Actual Goods Receipt Date Is Before Planned Delivery Date |
