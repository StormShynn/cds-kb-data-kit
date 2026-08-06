---
name: C_EWM_INBDELIVITEMLEANQ_2
description: This CDS view provides the prerequisites for answering the following business questions: How many inbound delivery items are there in my warehouse? How many products are there for my inbound delivery items? How many blocked inbound delivery items are there? What are the warehouse process types of my inbound delivery items? What is the goods receipt status of my inbound delivery items? What is the average goods receipt time of my inbound delivery items? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: SCM-EWM-DLP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EWM_INBDELIVITEMLEANQ_2')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business questions: How many inbound delivery items are there in my warehouse? How many products are there for my inbound delivery items? How many blocked inbound delivery items are there? What are the warehouse process types of my inbound delivery items? What is the goods receipt status of my inbound delivery items? What is the average goods receipt time of my inbound delivery items? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - SCM
  - bo:companycode
  - component:SCM-EWM-DLP-2CL
  - consumption-view
  - delivery
  - goods-receipt
  - product
  - SCM-EWM
  - SCM-EWM-DLP
  - SCM-EWM-DLP-2CL
  - metadata-only
---
# C_EWM_INBDELIVITEMLEANQ_2

**This CDS view provides the prerequisites for answering the following business questions: How many inbound delivery items are there in my warehouse? How many products are there for my inbound delivery items? How many blocked inbound delivery items are there? What are the warehouse process types of my inbound delivery items? What is the goods receipt status of my inbound delivery items? What is the average goods receipt time of my inbound delivery items? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-DLP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EWM_INBDELIVITEMLEANQ_2')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `EWMWarehouse` | `CHAR(4)` | Warehouse Number/Warehouse Complex |
| `EWMInboundDelivery` | `CHAR(35)` | Document Number |
| `EWMInboundDeliveryItem` | `NUMC(10)` | Item Number |
| `EWMWarehouseDescription` | `CHAR(40)` | Warehouse Number Description |
| `TimeZoneID` | `CHAR(6)` | Time Zone |
| `DeliveryDocumentCategory` | `CHAR(3)` | Document Category |
| `EWMInboundDeliveryItemCategory` | `CHAR(3)` | Item Category |
| `DeliveryItemCategoryName` | `CHAR(40)` | Description |
| `InboundDeliveryDocumentType` | `CHAR(4)` | Document Type |
| `InbDeliveryDocumentTypeName` | `CHAR(40)` | Description |
| `EWMInboundDeliveryItemType` | `CHAR(4)` | Item Type |
| `InboundDeliveryItemTypeName` | `CHAR(40)` | Description |
| `WarehouseProcessType` | `CHAR(4)` | Warehouse Process Type |
| `WarehouseProcessTypeName` | `CHAR(40)` | Description |
| `Product` | `CHAR(40)` | Product |
| `ProductName` | `CHAR(40)` | Product Description |
| `Batch` | `CHAR(10)` | Batch Number |
| `EntitledToDisposeParty` | `CHAR(10)` | Party Entitled to Dispose |
| `NameOfEntitledToDisposeParty` | `CHAR(81)` |  |
| `ShipFromParty` | `CHAR(10)` | Business Partner Number |
| `ShipFromPartyName` | `CHAR(40)` |  |
| `EWMStockOwner` | `CHAR(10)` | Owner |
| `StockOwner` | `CHAR(10)` | Owner |
| `StockOwnerName` | `CHAR(81)` |  |
| `EWMStockType` | `CHAR(2)` | Stock Type |
| `EWMStockTypeName` | `CHAR(30)` |  |
| `ProductQuantity` | `QUAN(31)` | Quantity |
| `QuantityUnit` | `UNIT(3)` | Unit of Measure |
| `ItemVolume` | `QUAN(31)` |  |
| `DisplayVolumeUnit` | `UNIT(3)` | Volume Unit |
| `ItemNetWeight` | `QUAN(31)` |  |
| `ItemGrossWeight` | `QUAN(31)` |  |
| `DisplayWeightUnit` | `UNIT(3)` | Weight Unit |
| `OverallBlockStatus` | `CHAR(1)` | Status Value |
| `OverallBlockStatusName` | `CHAR(30)` | Individual Status of an Object |
| `ItemInconsistencyBlkStatus` | `CHAR(1)` | Status Value |
| `ItemInconsistencyBlkStatusName` | `CHAR(30)` | Individual Status of an Object |
| `CompletionStatus` | `CHAR(1)` | Status Value |
| `CompletionStatusName` | `CHAR(30)` | Individual Status of an Object |
| `PlanningPutawayStatus` | `CHAR(1)` | Status Value |
| `PlanningPutawayStatusName` | `CHAR(30)` | Individual Status of an Object |
| `GoodsReceiptStatus` | `CHAR(1)` | Status Value |
| `GoodsReceiptStatusName` | `CHAR(30)` | Individual Status of an Object |
| `PutawayStatus` | `CHAR(1)` | Status Value |
| `PutawayStatusName` | `CHAR(30)` | Individual Status of an Object |
| `QualityMgmtCountPlngStatus` | `CHAR(1)` | Status Value |
| `QualityMgmtCountPlngStatusName` | `CHAR(30)` | Individual Status of an Object |
| `QualityMgmtInspPlngStatus` | `CHAR(1)` | Status Value |
| `QualityMgmtInspPlngStsName` | `CHAR(30)` | Individual Status of an Object |
| `CheckToleranceStatus` | `CHAR(1)` | Status Value |
| `CheckToleranceStatusName` | `CHAR(30)` | Individual Status of an Object |
| `ValuationQtyAssignmentStatus` | `CHAR(1)` | Status Value |
| `ValuationQtyAssgmtStatusName` | `CHAR(30)` | Individual Status of an Object |
| `WarehouseActivityStatus` | `CHAR(1)` | Status Value |
| `WarehouseActivityStatusName` | `CHAR(30)` | Individual Status of an Object |
| `InbDelivItemCrtnUTCDateTime` | `DEC(15)` | UTC Date and Time |
| `ActualGRStartUTCDateTime` | `DEC(15)` | Creation Date/Time |
| `PlannedGRStartUTCDateTime` | `DEC(15)` | Creation Date/Time |
| `PlannedGREndUTCDateTime` | `DEC(15)` | Creation Date/Time |
| `ActualPutawayEndUTCDateTime` | `DEC(15)` | Creation Date/Time |
| `ActualGREndUTCDateTime` | `DEC(15)` | Creation Date/Time |
| `NoWhseActivityTimeInMinutes` | `DEC(15)` |  |
| `GoodsReceiptDurationInMinutes` | `FLTP(16)` |  |
| `PlndDeliveryWhseTmznDateTime` | `DEC(15)` | Planned Delivery Date and Time |
| `PlndGREndWhseTmznDateTime` | `DEC(15)` | Date and Time of Planned Goods Receipt |
| `PutawayEndWhseTmznDateTime` | `DEC(15)` | End Date and Time of Putaway |
| `ActualGREndWhseTmznDateTime` | `DEC(15)` | Goods Receipt Ended On |
| `InbDelivItmCmpltWhseTmznDteTme` | `DEC(15)` | Completion Date and Time |
| `PlannedDeliveryWhseTmznYear` | `NUMC(4)` | Display Date (Year) |
| `PlannedDeliveryWhseTmznMonth` | `NUMC(6)` | Display Date (Month) |
| `PlannedDeliveryWhseTmznDate` | `DATS(8)` | Display Date |
| `PlannedDeliveryWhseTmznHour` | `NUMC(10)` | Display Time (Hour) |
| `PlannedDeliveryWhseTmznTime` | `TIMS(6)` | Display Time |
| `PlndGoodsReceiptWhseTmznYear` | `NUMC(4)` | Display Date (Year) |
| `PlndGoodsReceiptWhseTmznMonth` | `NUMC(6)` | Display Date (Month) |
| `PlndGoodsReceiptWhseTmznDate` | `DATS(8)` | Display Date |
| `PlndGoodsReceiptWhseTmznHour` | `NUMC(10)` | Display Time (Hour) |
| `PlndGoodsReceiptWhseTmznTime` | `TIMS(6)` | Display Time |
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
| `PlndDelivTo30MinsWhseDteTme` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `PlndDelivTo60MinsWhseDteTme` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `CompltnEndTo30MinsWhseDteTme` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `CompltnEndTo60MinsWhseDteTme` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `GREndRnddTo30MinsWhseDteTme` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `GREndRnddTo60MinsWhseDteTme` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `PtwyEndRnddTo30MinsWhseDteTme` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `PtwyEndRnddTo60MinsWhseDteTme` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `NumberOfInboundDeliveries` | `INT1(3)` |  |
| `NumberOfInbDelivItems` | `FLTP(16)` |  |
| `EWMPlndGRWhseTmznHour` | `NUMC(2)` | Planned GR Time in Hours (Whse Time Zone) |
| `EWMQuantityHasAdjustment` | `CHAR(1)` | Delivery Quantity Has Adjustments |
| `EWMPlndGRDateIsInPast` | `CHAR(1)` | Planned Goods Receipt Date Is in Past |
| `EWMActualGRDateIsOnTime` | `CHAR(1)` | Actual Goods Receipt Is on Time |
| `EWMPlndGoodsReceiptDateIsToday` | `CHAR(1)` | Planned Goods Receipt Date Is Today (Whse Time Zone) |
| `EWMActualPutawayDateIsToday` | `CHAR(1)` | Actual Putaway Date Is Today (Warehouse Time Zone) |
| `EWMPlndOrActGRIsToday` | `CHAR(1)` | Planned/Actual Goods Receipt Date Is Today |
| `EWMPlndDeliveryTimeIsInPast` | `CHAR(1)` | Planned Delivery Time Is in Past |
| `EWMActGRIsBeforePlndDelivTime` | `CHAR(1)` | Actual Goods Receipt Date Is Before Planned Delivery Date |
| `EWMPlndDeliveryDateIsToday` | `CHAR(1)` | Planned Delivery Date Is Today (Warehouse Time Zone) |
| `EWMPlndDeliveryWhseTmznHour` | `NUMC(2)` | Planned Delivey Time in Hours (Warehouse Time Zone) |
