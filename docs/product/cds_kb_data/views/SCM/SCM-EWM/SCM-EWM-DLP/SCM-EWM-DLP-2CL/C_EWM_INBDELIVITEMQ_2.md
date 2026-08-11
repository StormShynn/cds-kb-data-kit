---
name: C_EWM_INBDELIVITEMQ_2
description: "This CDS view provides the prerequisites for answering the following business questions: How many inbound delivery items are there in my warehouse? How many products are there for my inbound delivery items? How many blocked inbound delivery items are there? What are the warehouse process types of my inbound delivery items? What is the goods receipt status of my inbound delivery items? What is the average goods receipt time of my inbound delivery items? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: SCM-EWM-DLP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EWM_INBDELIVITEMQ_2')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: How many inbound delivery items are there in my warehouse? How many products are there for my inbound delivery items? How many blocked inbound delivery items are there? What are the warehouse process types of my inbound delivery items? What is the goods receipt status of my inbound delivery items? What is the average goods receipt time of my inbound delivery items? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Warehouse Inbound Delivery Item - Query — CDS view tiêu dùng dựa trên I_EWM_InbDeliveryItemC_2."
keywords:
  - "warehouse"
  - "inbound"
  - "delivery"
  - "item"
  - "query"
  - "description"
  - "time"
  - "zone"
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
  - bo:deliverydocument
---
# C_EWM_INBDELIVITEMQ_2

**This CDS view provides the prerequisites for answering the following business questions: How many inbound delivery items are there in my warehouse? How many products are there for my inbound delivery items? How many blocked inbound delivery items are there? What are the warehouse process types of my inbound delivery items? What is the goods receipt status of my inbound delivery items? What is the average goods receipt time of my inbound delivery items? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-DLP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EWM_INBDELIVITEMQ_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMWarehouse` | ✓ | |  |  | `CHAR(4)` | Warehouse Number/Warehouse Complex |
| `EWMInboundDelivery` | ✓ | |  |  | `CHAR(35)` | Document Number |
| `EWMInboundDeliveryItem` | ✓ | |  |  | `NUMC(10)` | Item Number |
| `EWMWarehouseDescription` |  | |  | `_Warehouse._Text[1:Language = $parameters.P_Language].EWMWarehouseDescription` | `CHAR(40)` | Warehouse Number Description |
| `TimeZoneID` |  | |  |  | `CHAR(6)` | Time Zone |
| `ReceivingOffice` |  | |  |  | `CHAR(20)` | Location Number |
| `EWMMeansOfTransportType` |  | |  |  | `CHAR(10)` | Means of Transport |
| `EWMMeansOfTransportTypeName` |  | |  |  | `CHAR(40)` | Means of Transport Description |
| `EWMMeansOfTransport` |  | |  |  | `CHAR(20)` | Means-of-Transport ID |
| `EWMInboundDeliveryItemCategory` |  | |  |  | `CHAR(3)` | Item Category |
| `DeliveryItemCategoryName` |  | |  |  | `CHAR(40)` | Description |
| `DeliveryDocumentCategory` |  | |  |  | `CHAR(3)` | Document Category |
| `InboundDeliveryDocumentType` |  | |  |  | `CHAR(4)` | Document Type |
| `InbDeliveryDocumentTypeName` |  | |  |  | `CHAR(40)` | Description |
| `EWMInboundDeliveryItemType` |  | |  |  | `CHAR(4)` | Item Type |
| `InboundDeliveryItemTypeName` |  | |  |  | `CHAR(40)` | Description |
| `WarehouseProcessType` |  | |  |  | `CHAR(4)` | Warehouse Process Type |
| `WarehouseProcessTypeName` |  | |  |  | `CHAR(40)` | Description |
| `WarehouseDoor` |  | |  |  | `CHAR(4)` | Warehouse Door |
| `StagingAreaGroup` |  | |  |  | `CHAR(4)` | Staging Area Group |
| `StagingArea` |  | |  |  | `CHAR(4)` | Staging Area |
| `StagingBay` |  | |  |  | `CHAR(18)` | Staging Bay |
| `GoodsMovementBin` |  | |  |  | `CHAR(18)` | Storage Bin of Goods Movement Posting |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `ProductName` |  | |  |  | `CHAR(40)` | Product Description |
| `Batch` |  | |  |  | `CHAR(10)` | Batch Number |
| `RequirementSegment` |  | |  |  | `CHAR(40)` | Requirement Segment |
| `StockSegment` |  | |  |  | `CHAR(40)` | Stock Segment |
| `EntitledToDisposeParty` |  | |  |  | `CHAR(10)` | Party Entitled to Dispose |
| `NameOfEntitledToDisposeParty` |  | |  |  | `CHAR(81)` |  |
| `ShipFromParty` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `ShipFromPartyName` |  | |  |  | `CHAR(40)` |  |
| `IsBusinessPurposeCompleted` |  | |  |  | `CHAR(1)` |  |
| `Carrier` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `CarrierName` |  | |  |  | `CHAR(40)` |  |
| `EWMStockOwner` |  | |  |  | `CHAR(10)` | Owner |
| `StockOwner` |  | |  |  | `CHAR(10)` | Owner |
| `StockOwnerName` |  | |  |  | `CHAR(81)` |  |
| `EWMStockType` |  | |  |  | `CHAR(2)` | Stock Type |
| `EWMStockTypeName` |  | |  |  | `CHAR(30)` |  |
| `ProductQuantity` |  | |  |  | `QUAN(31)` | Quantity |
| `QuantityUnit` |  | |  |  | `UNIT(3)` | Unit of Measure |
| `ItemVolume` |  | |  |  | `QUAN(31)` |  |
| `DisplayVolumeUnit` |  | |  |  | `UNIT(3)` | Volume Unit |
| `ItemNetWeight` |  | |  |  | `QUAN(31)` |  |
| `ItemGrossWeight` |  | |  |  | `QUAN(31)` |  |
| `DisplayWeightUnit` |  | |  |  | `UNIT(3)` | Weight Unit |
| `CompletionStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `CompletionStatusName` |  | |  |  | `CHAR(30)` | Individual Status of an Object |
| `UnloadingStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `UnloadingStatusName` |  | |  |  | `CHAR(30)` | Individual Status of an Object |
| `PutawayStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `PutawayStatusName` |  | |  |  | `CHAR(30)` | Individual Status of an Object |
| `GoodsReceiptStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `GoodsReceiptStatusName` |  | |  |  | `CHAR(30)` | Individual Status of an Object |
| `QualityMgmtCountPlngStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `QualityMgmtCountPlngStatusName` |  | |  |  | `CHAR(30)` | Individual Status of an Object |
| `QualityMgmtInspPlngStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `QualityMgmtInspPlngStsName` |  | |  |  | `CHAR(30)` | Individual Status of an Object |
| `QualityMgmtInspectionStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `QualityMgmtInspectionStsName` |  | |  |  | `CHAR(30)` | Individual Status of an Object |
| `GoodsMovementBlockStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `GoodsMovementBlockStatusName` |  | |  |  | `CHAR(30)` | Individual Status of an Object |
| `CheckToleranceStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `CheckToleranceStatusName` |  | |  |  | `CHAR(30)` | Individual Status of an Object |
| `PlanningPutawayStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `PlanningPutawayStatusName` |  | |  |  | `CHAR(30)` | Individual Status of an Object |
| `TransportationUnitAssgmtStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `TranspUnitAssgmtStatusName` |  | |  |  | `CHAR(30)` | Individual Status of an Object |
| `ValueAddedServiceOrderStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `ValueAddedDelivStsName` |  | |  |  | `CHAR(30)` | Individual Status of an Object |
| `ValuationQtyAssignmentStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `ValuationQtyAssgmtStatusName` |  | |  |  | `CHAR(30)` | Individual Status of an Object |
| `WarehouseActivityStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `WarehouseActivityStatusName` |  | |  |  | `CHAR(30)` | Individual Status of an Object |
| `TransitStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `TransitStatusName` |  | |  |  | `CHAR(30)` | Individual Status of an Object |
| `TransitProcedureStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `TransitProcedureStatusName` |  | |  |  | `CHAR(30)` | Individual Status of an Object |
| `TransportationPlanningStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `TranspPlngStatusName` |  | |  |  | `CHAR(30)` | Individual Status of an Object |
| `OverallBlockStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `OverallBlockStatusName` |  | |  |  | `CHAR(30)` | Individual Status of an Object |
| `ItemInconsistencyBlkStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `ItemInconsistencyBlkStatusName` |  | |  |  | `CHAR(30)` | Individual Status of an Object |
| `TranspPlanBlockStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `TranspPlanBlockStatusName` |  | |  |  | `CHAR(30)` | Individual Status of an Object |
| `InbDelivItemCrtnUTCDateTime` |  | |  |  | `DEC(15)` | UTC Date and Time |
| `PlannedGRStartUTCDateTime` |  | |  |  | `DEC(15)` | Creation Date/Time |
| `PlannedGREndUTCDateTime` |  | |  |  | `DEC(15)` | Creation Date/Time |
| `UnloadingEndUTCDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `ActualPutawayEndUTCDateTime` |  | |  |  | `DEC(15)` | Creation Date/Time |
| `ActualGRStartUTCDateTime` |  | |  |  | `DEC(15)` | Creation Date/Time |
| `ActualGREndUTCDateTime` |  | |  |  | `DEC(15)` | Creation Date/Time |
| `InbDelivCompltnEndUTCDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `PlndArrivalInYardUTCDateTime` |  | |  |  | `DEC(15)` | Creation Date/Time |
| `ActualArrivalInYardUTCDateTime` |  | |  |  | `DEC(15)` | Creation Date/Time |
| `PlndDeliveryWhseTmznDateTime` |  | |  |  | `DEC(15)` | Planned Delivery Date and Time |
| `ActualDeliveryWhseTmznDateTime` |  | |  |  | `DEC(15)` | Delivery Date and Time |
| `PlndArrvlInYardWhseTmznDteTme` |  | |  |  | `DEC(15)` | Planned Arrival Date and Time in Yard |
| `ActlArrvlInYardWhseTmznDteTme` |  | |  |  | `DEC(15)` | Arrival Time in Yard |
| `PutawayEndWhseTmznDateTime` |  | |  |  | `DEC(15)` | End Date and Time of Putaway |
| `ActualGREndWhseTmznDateTime` |  | |  |  | `DEC(15)` | Goods Receipt Ended On |
| `UnloadingEndWhseTmznDateTime` |  | |  |  | `DEC(15)` | End Date and Time of Unloading |
| `InbDelivItmCmpltWhseTmznDteTme` |  | |  |  | `DEC(15)` | Completion Date and Time |
| `InbDelivCrtnWhseTmznDateTime` |  | |  |  | `DEC(15)` | Created On |
| `PlndGREndWhseTmznDateTime` |  | |  |  | `DEC(15)` | Date and Time of Planned Goods Receipt |
| `GoodsReceiptDurationInMinutes` |  | |  | `GoodsReceiptDurationInMinutes / NumberOfInbDelivItems` | `FLTP(16)` |  |
| `WaitInYardDurationInMinutes` |  | |  | `WaitInYardDurationInMinutes / NumberOfInbDelivItems` | `FLTP(16)` |  |
| `ArrivalInYardOvrdDurnInMinutes` |  | |  |  | `FLTP(16)` |  |
| `NoWhseActivityTimeInMinutes` |  | |  |  | `DEC(15)` |  |
| `PlndGoodsReceiptWhseTmznYear` |  | |  |  | `NUMC(4)` | Display Date (Year) |
| `PlndGoodsReceiptWhseTmznMonth` |  | |  |  | `NUMC(6)` | Display Date (Month) |
| `PlndGoodsReceiptWhseTmznDate` |  | |  |  | `DATS(8)` | Display Date |
| `PlndGoodsReceiptWhseTmznHour` |  | |  |  | `NUMC(10)` | Display Time (Hour) |
| `PlndGoodsReceiptWhseTmznTime` |  | |  |  | `TIMS(6)` | Display Time |
| `UnloadingEndWhseTmznYear` |  | |  |  | `NUMC(4)` | Display Date (Year) |
| `UnloadingEndWhseTmznMonth` |  | |  |  | `NUMC(6)` | Display Date (Month) |
| `UnloadingEndWhseTmznDate` |  | |  |  | `DATS(8)` | Display Date |
| `UnloadingEndWhseTmznHour` |  | |  |  | `NUMC(10)` | Display Time (Hour) |
| `UnloadingEndWhseTmznTime` |  | |  |  | `TIMS(6)` | Display Time |
| `PutawayEndWhseTmznYear` |  | |  |  | `NUMC(4)` | Display Date (Year) |
| `PutawayEndWhseTmznMonth` |  | |  |  | `NUMC(6)` | Display Date (Month) |
| `PutawayEndWhseTmznDate` |  | |  |  | `DATS(8)` | Display Date |
| `PutawayEndWhseTmznHour` |  | |  |  | `NUMC(10)` | Display Time (Hour) |
| `PutawayEndWhseTmznTime` |  | |  |  | `TIMS(6)` | Display Time |
| `GoodsReceiptEndWhseTmznYear` |  | |  |  | `NUMC(4)` | Display Date (Year) |
| `GoodsReceiptEndWhseTmznMonth` |  | |  |  | `NUMC(6)` | Display Date (Month) |
| `GoodsReceiptEndWhseTmznDate` |  | |  |  | `DATS(8)` | Display Date |
| `GoodsReceiptEndWhseTmznHour` |  | |  |  | `NUMC(10)` | Display Time (Hour) |
| `GoodsReceiptEndWhseTmznTime` |  | |  |  | `TIMS(6)` | Display Time |
| `InbDelivCompltnEndWhseTmznYear` |  | |  |  | `NUMC(4)` | Display Date (Year) |
| `InbDelivCompltnEndWhseTmznMnth` |  | |  |  | `NUMC(6)` | Display Date (Month) |
| `InbDelivCompltnEndWhseTmznDate` |  | |  |  | `DATS(8)` | Display Date |
| `InbDelivCompltnEndWhseTmznHour` |  | |  |  | `NUMC(10)` | Display Time (Hour) |
| `InbDelivCompltnEndWhseTmznTime` |  | |  |  | `TIMS(6)` | Display Time |
| `PlannedDeliveryWhseTmznYear` |  | |  |  | `NUMC(4)` | Display Date (Year) |
| `PlannedDeliveryWhseTmznMonth` |  | |  |  | `NUMC(6)` | Display Date (Month) |
| `PlannedDeliveryWhseTmznDate` |  | |  |  | `DATS(8)` | Display Date |
| `PlannedDeliveryWhseTmznHour` |  | |  |  | `NUMC(10)` | Display Time (Hour) |
| `PlannedDeliveryWhseTmznTime` |  | |  |  | `TIMS(6)` | Display Time |
| `ActualDeliveryWhseTmznYear` |  | |  |  | `NUMC(4)` | Display Date (Year) |
| `ActualDeliveryWhseTmznMonth` |  | |  |  | `NUMC(6)` | Display Date (Month) |
| `ActualDeliveryWhseTmznDate` |  | |  |  | `DATS(8)` | Display Date |
| `ActualDeliveryWhseTmznHour` |  | |  |  | `NUMC(10)` | Display Time (Hour) |
| `ActualDeliveryWhseTmznTime` |  | |  |  | `TIMS(6)` | Display Time |
| `PlndArrvlInYardWhseTmznYear` |  | |  |  | `NUMC(4)` | Display Date (Year) |
| `PlndArrvlInYardWhseTmznMonth` |  | |  |  | `NUMC(6)` | Display Date (Month) |
| `PlndArrvlInYardWhseTmznDate` |  | |  |  | `DATS(8)` | Display Date |
| `PlndArrvlInYardWhseTmznHour` |  | |  |  | `NUMC(10)` | Display Time (Hour) |
| `PlndArrvlInYardWhseTmznTime` |  | |  |  | `TIMS(6)` | Display Time |
| `ActlArrvlInYardWhseTmznYear` |  | |  |  | `NUMC(4)` | Display Date (Year) |
| `ActlArrvlInYardWhseTmznMonth` |  | |  |  | `NUMC(6)` | Display Date (Month) |
| `ActlArrvlInYardWhseTmznDate` |  | |  |  | `DATS(8)` | Display Date |
| `ActlArrvlInYardWhseTmznHour` |  | |  |  | `NUMC(10)` | Display Time (Hour) |
| `ActlArrvlInYardWhseTmznTime` |  | |  |  | `TIMS(6)` | Display Time |
| `PlndDelivTo30MinsWhseDteTme` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `PlndDelivTo60MinsWhseDteTme` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `PlndArrvlTo30MinsWhseDteTme` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `PlndArrvlTo60MinsWhseDteTme` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `ActlDelivTo30MinsWhseDteTme` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `ActlDelivTo60MinsWhseDteTme` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `ActlArrvlTo30MinsWhseDteTme` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `ActlArrvlTo60MinsWhseDteTme` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `CompltnEndTo30MinsWhseDteTme` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `CompltnEndTo60MinsWhseDteTme` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `GREndRnddTo30MinsWhseDteTme` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `GREndRnddTo60MinsWhseDteTme` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `PtwyEndRnddTo30MinsWhseDteTme` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `PtwyEndRnddTo60MinsWhseDteTme` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `UnldgEndRnddTo30MinsWhseDteTme` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `UnldgEndRnddTo60MinsWhseDteTme` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `NumberOfInboundDeliveries` |  | |  | `{ exceptionAggregationSteps: [ { exceptionAggregationBehavior : #COUNT, exceptionAggregationElements: ['EWMWarehouse', 'EWMInboundDelivery' ] } ] } 1` | `INT1(3)` |  |
| `NumberOfInbDelivItems` |  | |  |  | `FLTP(16)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EWM_INBDELIVITEMQ_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EWM_INBDELIVITEMQ_2')/$value)*

```abap
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Warehouse Inbound Delivery Item - Query'

@Metadata.ignorePropagatedAnnotations:true

@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.modelingPattern:           #ANALYTICAL_QUERY
@ObjectModel.supportedCapabilities:     [     #ANALYTICAL_QUERY]

@VDM.viewType:#CONSUMPTION

@OData.publish:            true
@Analytics.query:          true
@Analytics.technicalName: 'CEWMINBDELIVQ2'

define view entity C_EWM_InbDelivItemQ_2
  with parameters
    @Environment.systemField: #SYSTEM_LANGUAGE
    @Consumption.hidden
    P_Language : /scwm/lang
  as select from I_EWM_InbDeliveryItemC_2(
                                      P_Language: $parameters.P_Language )
{
      @EndUserText.label: 'Warehouse'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
  key EWMWarehouse,

      @EndUserText.label: 'Document No. of Inbound Delivery'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
  key EWMInboundDelivery,

      @EndUserText.label: 'No. of Inbound Delivery Items'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
  key EWMInboundDeliveryItem,

      @EndUserText.label: 'Warehouse Description'
      _Warehouse._Text[1:Language = $parameters.P_Language].EWMWarehouseDescription as EWMWarehouseDescription,

      @EndUserText.label: 'Warehouse Time Zone'
      @Consumption.filter: {selectionType: #RANGE,multipleSelections: true,mandatory: false}
      TimeZoneID,

      @EndUserText.label: 'Goods Receipt Office'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      ReceivingOffice,

      @EndUserText.label: 'Means of Transport Type'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      EWMMeansOfTransportType,

      @EndUserText.label: 'Desc. of Means of Transport Type'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      EWMMeansOfTransportTypeName,

      @EndUserText.label: 'Means of Transport'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      EWMMeansOfTransport,

      @EndUserText.label: 'Inbound Delivery Item Category'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      EWMInboundDeliveryItemCategory,

      @EndUserText.label: 'Description of Inb. Deliv. Item Category'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      DeliveryItemCategoryName,

      @EndUserText.label: 'Inbound Delivery Document Category'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      DeliveryDocumentCategory,

      @EndUserText.label: 'Inbound Delivery Document Type'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      InboundDeliveryDocumentType,

      @EndUserText.label: 'Description of Inb. Deliv. Document Type'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      InbDeliveryDocumentTypeName,

      @EndUserText.label: 'Inbound Delivery Item Type'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      EWMInboundDeliveryItemType,

      @EndUserText.label: 'Desc. of Inbound Delivery Item Type'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      InboundDeliveryItemTypeName,

      @EndUserText.label: 'Warehouse Process Type'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      WarehouseProcessType,

      @EndUserText.label: 'Description of Warehouse Process Type'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      WarehouseProcessTypeName,

      @EndUserText.label: 'Warehouse Door'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      WarehouseDoor,

      @EndUserText.label: 'Staging Area Group'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      StagingAreaGroup,

      @EndUserText.label: 'Staging Area'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      StagingArea,

      @EndUserText.label: 'Staging Bay'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      StagingBay,

      @EndUserText.label: 'Goods Movement Bin'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      GoodsMovementBin,

      @EndUserText.label: 'Product'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      Product,

      @EndUserText.label: 'Product Description'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      ProductName,

      @EndUserText.label: 'Product Batch'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      Batch,
      
      @EndUserText.label: 'Requirement Segment'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      RequirementSegment,
      
      @EndUserText.label: 'Stock Segment'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      StockSegment,
      
      @EndUserText.label: 'Party Entitled to Dispose'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      EntitledToDisposeParty,

      @EndUserText.label: 'Description of Party Entitled to Dispose'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      NameOfEntitledToDisposeParty,

      @EndUserText.label: 'Ship-From Party'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      ShipFromParty,

      @EndUserText.label: 'Description of Ship-From Party'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      ShipFromPartyName,

      @EndUserText.label: 'Business Purpose Is Completed'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      IsBusinessPurposeCompleted,

      @EndUserText.label: 'Carrier'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      Carrier,

      @EndUserText.label: 'Carrier Description'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      CarrierName,

      @EndUserText.label: 'Owner'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      EWMStockOwner,
      @EndUserText.label: 'Owner'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }      
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:'EWMStockOwner'
      StockOwner,
      @EndUserText.label: 'Owner Description'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      StockOwnerName,

      @EndUserText.label: 'Stock Type'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      EWMStockType,

      @EndUserText.label: 'Stock Type Description'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      EWMStockTypeName,


      @EndUserText.label: 'Product Quantity'
      @Semantics.quantity.unitOfMeasure: 'QuantityUnit'
      ProductQuantity,

      @EndUserText.label: 'Quantity Unit'
      QuantityUnit,


      @EndUserText.label: 'Volume on Item Level'
      @AnalyticsDetails.query.decimals: 5
      @Semantics.quantity.unitOfMeasure: 'DisplayVolumeUnit'
      ItemVolume,

      @EndUserText.label: 'Display Volume Unit'
      @AnalyticsDetails.query.decimals: 5
      DisplayVolumeUnit,


      @EndUserText.label: 'Net Weight on Item Level'
      @AnalyticsDetails.query.decimals: 5
      @Semantics.quantity.unitOfMeasure: 'DisplayWeightUnit'
      ItemNetWeight,

      @EndUserText.label: 'Gross Weight on Item Level'
      @AnalyticsDetails.query.decimals: 5
      @Semantics.quantity.unitOfMeasure: 'DisplayWeightUnit'
      ItemGrossWeight,

      @EndUserText.label: 'Display Weight Unit'//Unit of Weight on Item Level
      DisplayWeightUnit,


      //////////////////////////////////////////Status & Description
      @EndUserText.label: 'Completion Status'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      CompletionStatus,

      @EndUserText.label: 'Completion Status Description'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      CompletionStatusName,

      @EndUserText.label: 'Unloading Status'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      UnloadingStatus,

      @EndUserText.label: 'Unloading Status Description'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      UnloadingStatusName,

      @EndUserText.label: 'Putaway Status'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      PutawayStatus,

      @EndUserText.label: 'Putaway Status Description'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      PutawayStatusName,

      @EndUserText.label: 'Goods Receipt Status'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      GoodsReceiptStatus,

      @EndUserText.label: 'Description of Goods Receipt Status'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      GoodsReceiptStatusName,


      @EndUserText.label: 'QM Count Planning Status'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      QualityMgmtCountPlngStatus,

      @EndUserText.label: 'Desc. of QM Count Planning Status'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      QualityMgmtCountPlngStatusName,

      @EndUserText.label: 'Quality Inspection Planning Sts'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      QualityMgmtInspPlngStatus,

      @EndUserText.label: 'Desc. of Quality Inspection Planning Sts'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      QualityMgmtInspPlngStsName,

      @EndUserText.label: 'Quality Inspection Status'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      QualityMgmtInspectionStatus,

      @EndUserText.label: 'Desc. of Quality Inspection Status'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      QualityMgmtInspectionStsName,

      @EndUserText.label: 'Goods Movement Blocking Status'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      GoodsMovementBlockStatus,

      @EndUserText.label: 'Desc. of Goods Movement Blocking Status'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      GoodsMovementBlockStatusName,

      @EndUserText.label: 'Tolerance Check Status'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      CheckToleranceStatus,

      @EndUserText.label: 'Description of Tolerance Check Status'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      CheckToleranceStatusName,

      @EndUserText.label: 'Planning Putaway Status'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      PlanningPutawayStatus,

      @EndUserText.label: 'Description of Planning Putaway Status'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      PlanningPutawayStatusName,

      @EndUserText.label: 'Status of Transportation Unit Assignment'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      TransportationUnitAssgmtStatus,

      @EndUserText.label: 'Desc. of Transp. Unit Assignment Status'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      TranspUnitAssgmtStatusName,

      @EndUserText.label: 'Status of Value-Added Service Order'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      ValueAddedServiceOrderStatus,

      @EndUserText.label: 'Desc. of Value-Added Service Order Sts'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      ValueAddedDelivStsName,

      @EndUserText.label: 'Status of Valuation Quantity Assgmt'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      ValuationQtyAssignmentStatus,

      @EndUserText.label: 'Desc. of Valuation Qty Assgmt Status'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      ValuationQtyAssgmtStatusName,

      @EndUserText.label: 'Warehouse Activity Status'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      WarehouseActivityStatus,

      @EndUserText.label: 'Description of Warehouse Activity Status'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      WarehouseActivityStatusName,

      @EndUserText.label: 'Transit Status'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      TransitStatus,

      @EndUserText.label: 'Transit Status Description'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      TransitStatusName,

      @EndUserText.label: 'Transit Procedure Status'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      TransitProcedureStatus,

      @EndUserText.label: 'Description of Transit Procedure Status'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      TransitProcedureStatusName,

      @EndUserText.label: 'Transportation Planning Status'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      TransportationPlanningStatus,

      @EndUserText.label: 'Desc. of Transportation Planning Status'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      TranspPlngStatusName,

      @EndUserText.label: 'Blocked (Overall Status)'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      OverallBlockStatus,

      @EndUserText.label: 'Description of Blocked (Overall Status)'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      OverallBlockStatusName,

      @EndUserText.label: 'Blocked (Inconsist. Item) Status'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      ItemInconsistencyBlkStatus,

      @EndUserText.label: 'Desc. of Blocked (Inconsist. Item) Sts'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      ItemInconsistencyBlkStatusName,

      @EndUserText.label: 'Blocked (Transp. Plan) Status'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      TranspPlanBlockStatus,

      @EndUserText.label: 'Desc. of Blocked (Transp. Plan) Status'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      TranspPlanBlockStatusName,

      //      @EndUserText.label: 'Warehouse Location'
      //      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      //      WarehouseLocation,



      //////////////////////////////////////////UTC time stamp

      @EndUserText.label: 'Inbound Delivery Item Created On (UTC)'
      @Consumption.filter: { selectionType: #INTERVAL,multipleSelections: true,mandatory: false }
      InbDelivItemCrtnUTCDateTime,

      @EndUserText.label: 'Planned Goods Receipt Started On (UTC)'
      @Consumption.filter: { selectionType: #INTERVAL,multipleSelections: true,mandatory: false }
      PlannedGRStartUTCDateTime,

      @EndUserText.label: 'Planned Goods Receipt Ended On (UTC)'
      @Consumption.filter: { selectionType: #INTERVAL,multipleSelections: true,mandatory: false }
      PlannedGREndUTCDateTime,

      //      @EndUserText.label: 'Planned Putaway Started On (UTC)'
      //      @Consumption.filter: { selectionType: #INTERVAL,multipleSelections: true,mandatory: false }
      //      PlannedPutawayStartUTCDateTime,

      //      @EndUserText.label: 'Planned Putaway Ended On (UTC)'
      //      @Consumption.filter: { selectionType: #INTERVAL,multipleSelections: true,mandatory: false }
      //      PlannedPutawayEndUTCDateTime,

      //      @EndUserText.label: 'Unloading Started On (UTC)'
      //      @Consumption.filter: { selectionType: #INTERVAL,multipleSelections: true,mandatory: false }
      //      UnloadingStartUTCDateTime,

      @EndUserText.label: 'Unloading Ended On (UTC)'
      @Consumption.filter: { selectionType: #INTERVAL,multipleSelections: true,mandatory: false }
      UnloadingEndUTCDateTime,

      //      @EndUserText.label: 'Putaway Started On (UTC)'
      //      @Consumption.filter: { selectionType: #INTERVAL,multipleSelections: true,mandatory: false }
      //      ActualPutawayStartUTCDateTime,

      @EndUserText.label: 'Putaway Ended On (UTC)'
      @Consumption.filter: { selectionType: #INTERVAL,multipleSelections: true,mandatory: false }
      ActualPutawayEndUTCDateTime,

      @EndUserText.label: 'Goods Receipt Started On (UTC)'
      @Consumption.filter: { selectionType: #INTERVAL,multipleSelections: true,mandatory: false }
      ActualGRStartUTCDateTime,

      @EndUserText.label: 'Goods Receipt Ended On (UTC)'
      @Consumption.filter: { selectionType: #INTERVAL,multipleSelections: true,mandatory: false }
      ActualGREndUTCDateTime,

      @EndUserText.label: 'Completion Ended On (UTC)'
      @Consumption.filter: { selectionType: #INTERVAL,multipleSelections: true,mandatory: false }
      InbDelivCompltnEndUTCDateTime,


      @EndUserText.label: 'Planned Arrival in Yard On (UTC)'
      @Consumption.filter: { selectionType: #INTERVAL,multipleSelections: true,mandatory: false }
      PlndArrivalInYardUTCDateTime,


      @EndUserText.label: 'Actual Arrival in Yard On (UTC)'
      @Consumption.filter: { selectionType: #INTERVAL,multipleSelections: true,mandatory: false }
      ActualArrivalInYardUTCDateTime,

      //////////////////////////////////////////Warehouse Timezone Time
      @EndUserText.label: 'Planned Delivery Date and Time'
      @Consumption.filter: { selectionType: #INTERVAL,multipleSelections: true,mandatory: false }
      PlndDeliveryWhseTmznDateTime,

      @EndUserText.label: 'Delivery Date and Time'
      @Consumption.filter: { selectionType: #INTERVAL,multipleSelections: true,mandatory: false }
      ActualDeliveryWhseTmznDateTime,

      @EndUserText.label: 'Date and Time of Plnd Arrival in Yard'
      @Consumption.filter: { selectionType: #INTERVAL,multipleSelections: true,mandatory: false }
      PlndArrvlInYardWhseTmznDteTme,

      @EndUserText.label: 'Date and Time of Arrival in Yard'
      @Consumption.filter: { selectionType: #INTERVAL,multipleSelections: true,mandatory: false }
      ActlArrvlInYardWhseTmznDteTme,


      //      @EndUserText.label: 'Planned Putaway Ended On'
      //      @Consumption.filter: { selectionType: #INTERVAL,multipleSelections: true,mandatory: false }
      //      PlndPutawayEndWhseTmznDateTime,

      @EndUserText.label: 'Putaway Ended On'
      @Consumption.filter: { selectionType: #INTERVAL,multipleSelections: true,mandatory: false }
      PutawayEndWhseTmznDateTime,

      @EndUserText.label: 'Goods Receipt Ended On'
      @Consumption.filter: { selectionType: #INTERVAL,multipleSelections: true,mandatory: false }
      ActualGREndWhseTmznDateTime,

      @EndUserText.label: 'Unloading Ended On'
      @Consumption.filter: { selectionType: #INTERVAL,multipleSelections: true,mandatory: false }
      UnloadingEndWhseTmznDateTime,

      @EndUserText.label: 'Inbound Delivery Item Completed On'
      @Consumption.filter: { selectionType: #INTERVAL,multipleSelections: true,mandatory: false }
      InbDelivItmCmpltWhseTmznDteTme,

      @EndUserText.label: 'Inbound Delivery Created On'
      @Consumption.filter: { selectionType: #INTERVAL,multipleSelections: true,mandatory: false }
      InbDelivCrtnWhseTmznDateTime,

      @EndUserText.label: 'Planned Goods Receipt Date and Time'
      @Consumption.filter: { selectionType: #INTERVAL,multipleSelections: true,mandatory: false }
      PlndGREndWhseTmznDateTime,


      //////////////////////////////////////////Duration Measure Fields

      @EndUserText.label: 'Average Receiving Time (Minute)'
      GoodsReceiptDurationInMinutes   / NumberOfInbDelivItems                       as GoodsReceiptDurationInMinutes,

      //      @EndUserText.label: 'Average Unloading Time (Minute)'
      //      UnloadingDurationInMinutes /  NumberOfInbDelivItems     as UnloadingDurationInMinutes,

      //      @EndUserText.label: 'Average Putaway Time (Minute)'
      //      PutawayDurationInMinutes   / NumberOfInbDelivItems      as PutawayDurationInMinutes,



      @EndUserText.label: 'Total Wait Time in Yard (Minute)'
      WaitInYardDurationInMinutes / NumberOfInbDelivItems                           as WaitInYardDurationInMinutes,


      @EndUserText.label: 'Overdue Time (Minute) of Arrival'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      ArrivalInYardOvrdDurnInMinutes,

      //      div( cast(ArrivalInYardOvrdDurnInMinutes as abap.dec(16,0)), 60 ) as ArrivalInYardOvrdDurnInHours,

      @EndUserText.label: 'Time Without Whse Activities (Minute)'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      NoWhseActivityTimeInMinutes,


      //////////////////////////////////////////Year, Month, Date, Hour, Time

      @EndUserText.label: 'Planned Goods Receipt Date (Year)'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      PlndGoodsReceiptWhseTmznYear,

      @EndUserText.label: 'Planned Goods Receipt Date (Month)'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      PlndGoodsReceiptWhseTmznMonth,

      @EndUserText.label: 'Planned Goods Receipt Date'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      PlndGoodsReceiptWhseTmznDate,

      @EndUserText.label: 'Planned Goods Receipt Time (Hour)'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      PlndGoodsReceiptWhseTmznHour,

      @EndUserText.label: 'Planned Goods Receipt Time'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      PlndGoodsReceiptWhseTmznTime,


      @EndUserText.label: 'Unloading End Date (Year)'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      UnloadingEndWhseTmznYear,

      @EndUserText.label: 'Unloading End Date (Month)'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      UnloadingEndWhseTmznMonth,

      @EndUserText.label: 'Unloading End Date'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      UnloadingEndWhseTmznDate,

      @EndUserText.label: 'Unloading End Time (Hour)'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      UnloadingEndWhseTmznHour,

      @EndUserText.label: 'Unloading End Time'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      UnloadingEndWhseTmznTime,


      @EndUserText.label: 'Putaway End Date (Year)'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      PutawayEndWhseTmznYear,

      @EndUserText.label: 'Putaway End Date (Month)'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      PutawayEndWhseTmznMonth,

      @EndUserText.label: 'Putaway End Date'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      PutawayEndWhseTmznDate,

      @EndUserText.label: 'Putaway End Time (Hour)'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      PutawayEndWhseTmznHour,

      @EndUserText.label: 'Putaway End Time'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      PutawayEndWhseTmznTime,


      @EndUserText.label: 'Goods Receipt End Date (Year)'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      GoodsReceiptEndWhseTmznYear,

      @EndUserText.label: 'Goods Receipt End Date (Month)'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      GoodsReceiptEndWhseTmznMonth,

      @EndUserText.label: 'Goods Receipt End Date'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      GoodsReceiptEndWhseTmznDate,

      @EndUserText.label: 'Goods Receipt End Time (Hour)'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      GoodsReceiptEndWhseTmznHour,

      @EndUserText.label: 'Goods Receipt End Time'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      GoodsReceiptEndWhseTmznTime,


      //      @EndUserText.label: 'End Date (Year) of Planned Putaway'
      //      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      //      PlndPutawayEndWhseTmznYear,
      //
      //      @EndUserText.label: 'End Date (Month) of Planned Putaway'
      //      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      //      PlndPutawayEndWhseTmznMonth,
      //
      //      @EndUserText.label: 'End Date of Planned Putaway'
      //      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      //      PlndPutawayEndWhseTmznDate,
      //
      //      @EndUserText.label: 'End Time (Hour) of Planned Putaway'
      //      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      //      PlndPutawayEndWhseTmznHour,
      //
      //      @EndUserText.label: 'End Time of Planned Putaway'
      //      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      //      PlndPutawayEndWhseTmznTime,


      @EndUserText.label: 'Completion Date (Year) '
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      InbDelivCompltnEndWhseTmznYear,

      @EndUserText.label: 'Completion Date (Month)'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      InbDelivCompltnEndWhseTmznMnth,

      @EndUserText.label: 'Completion Date'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      InbDelivCompltnEndWhseTmznDate,

      @EndUserText.label: 'Completion Time (Hour)'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      InbDelivCompltnEndWhseTmznHour,

      @EndUserText.label: 'Completion Time'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      InbDelivCompltnEndWhseTmznTime,


      @EndUserText.label: 'Planned Delivery Date (Year)'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      PlannedDeliveryWhseTmznYear,

      @EndUserText.label: 'Planned Delivery Date (Month)'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      PlannedDeliveryWhseTmznMonth,

      @EndUserText.label: 'Planned Delivery Date'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      PlannedDeliveryWhseTmznDate,

      @EndUserText.label: 'Planned Delivery Time (Hour)'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      PlannedDeliveryWhseTmznHour,

      @EndUserText.label: 'Planned Delivery Time'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      PlannedDeliveryWhseTmznTime,


      @EndUserText.label: 'Delivery Date (Year)'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      ActualDeliveryWhseTmznYear,

      @EndUserText.label: 'Delivery Date (Month)'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      ActualDeliveryWhseTmznMonth,

      @EndUserText.label: 'Delivery Date'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      ActualDeliveryWhseTmznDate,

      @EndUserText.label: 'Delivery Time (Hour)'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      ActualDeliveryWhseTmznHour,

      @EndUserText.label: 'Delivery Time'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      ActualDeliveryWhseTmznTime,


      @EndUserText.label: 'Date (Year) of Planned Arrival in Yard'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      PlndArrvlInYardWhseTmznYear,

      @EndUserText.label: 'Date (Month) of Planned Arrival in Yard'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      PlndArrvlInYardWhseTmznMonth,

      @EndUserText.label: 'Date of Planned Arrival in Yard'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      PlndArrvlInYardWhseTmznDate,

      @EndUserText.label: 'Time (Hour) of Planned Arrival in Yard'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      PlndArrvlInYardWhseTmznHour,

      @EndUserText.label: 'Time of Planned Arrival in Yard'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      PlndArrvlInYardWhseTmznTime,


      @EndUserText.label: 'Date (Year) of Arrival in Yard'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      ActlArrvlInYardWhseTmznYear,

      @EndUserText.label: 'Date (Month) of Arrival in Yard'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      ActlArrvlInYardWhseTmznMonth,

      @EndUserText.label: 'Arrival Date in Yard'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      ActlArrvlInYardWhseTmznDate,

      @EndUserText.label: 'Arrival Time (Hour) in Yard'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      ActlArrvlInYardWhseTmznHour,

      @EndUserText.label: 'Arrival Time in Yard'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      ActlArrvlInYardWhseTmznTime,


      //////////////////////////////////////////30/60 Minutes
      @EndUserText.label: 'Plnd Deliv. Time to Nearest Half Hour'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      PlndDelivTo30MinsWhseDteTme,

      @EndUserText.label: 'Plnd Deliv. Time to Nearest Hour'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      PlndDelivTo60MinsWhseDteTme,


      @EndUserText.label: 'Plnd Arrival Time to Nearest Half Hour'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      PlndArrvlTo30MinsWhseDteTme,

      @EndUserText.label: 'Plannd Arrival Time to Nearest Hour'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      PlndArrvlTo60MinsWhseDteTme,


      @EndUserText.label: 'Delivery Time to Nearest Half Hour'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      ActlDelivTo30MinsWhseDteTme,

      @EndUserText.label: 'Delivery Time to Nearest Hour'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      ActlDelivTo60MinsWhseDteTme,


      @EndUserText.label: 'Arrival Time to Nearest Half Hour'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      ActlArrvlTo30MinsWhseDteTme,

      @EndUserText.label: 'Arrival Time to Nearest Hour'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      ActlArrvlTo60MinsWhseDteTme,


      @EndUserText.label: 'Completion Time to Nearest Half Hour'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      CompltnEndTo30MinsWhseDteTme,

      @EndUserText.label: 'Completion Time to Nearest Hour'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      CompltnEndTo60MinsWhseDteTme,


      @EndUserText.label: 'Goods Receipt Time to Nearest Half Hour'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      GREndRnddTo30MinsWhseDteTme,

      @EndUserText.label: 'Goods Receipt Time to Nearest Hour'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      GREndRnddTo60MinsWhseDteTme,


      @EndUserText.label: 'Putaway End Time to Nearest Half Hour'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      PtwyEndRnddTo30MinsWhseDteTme,

      @EndUserText.label: 'Putaway End Time to Nearest Hour'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      PtwyEndRnddTo60MinsWhseDteTme,


      @EndUserText.label: 'Unloading End Time to Nearest Half Hour'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      UnldgEndRnddTo30MinsWhseDteTme,

      @EndUserText.label: 'Unloading End Time to Nearest Hour'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      UnldgEndRnddTo60MinsWhseDteTme,



      //////////////////////////////////////////Count Number of Delivery/Delivery Item
      @EndUserText.label: 'Number of Inbound Deliveries'
      @DefaultAggregation: #FORMULA
      @AnalyticsDetails:
         {
            exceptionAggregationSteps:
              [ { exceptionAggregationBehavior : #COUNT,
                  exceptionAggregationElements: ['EWMWarehouse', 'EWMInboundDelivery' ]
                }
              ]
         }
      1                                                                             as NumberOfInboundDeliveries,


      @EndUserText.label: 'Number of Inbound Delivery Items'
       @AnalyticsDetails.query.decimals: 0
      NumberOfInbDelivItems
      //   @EndUserText.label: 'Delivery Adjustment Quantity'
      //   EWMAdjustmentQuantity





}
```
