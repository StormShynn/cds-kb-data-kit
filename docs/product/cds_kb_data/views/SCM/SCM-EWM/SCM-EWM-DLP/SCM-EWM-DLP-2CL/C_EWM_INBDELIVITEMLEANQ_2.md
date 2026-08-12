---
name: C_EWM_INBDELIVITEMLEANQ_2
description: "This CDS view provides the prerequisites for answering the following business questions: How many inbound delivery items are there in my warehouse? How many products are there for my inbound delivery items? How many blocked inbound delivery items are there? What are the warehouse process types of my inbound delivery items? What is the goods receipt status of my inbound delivery items? What is the average goods receipt time of my inbound delivery items? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: SCM-EWM-DLP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EWM_INBDELIVITEMLEANQ_2')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: How many inbound delivery items are there in my warehouse? How many products are there for my inbound delivery items? How many blocked inbound delivery items are there? What are the warehouse process types of my inbound delivery items? What is the goods receipt status of my inbound delivery items? What is the average goods receipt time of my inbound delivery items? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Whse Inbound Delivery Item Lean - Query — CDS view tiêu dùng dựa trên I_EWM_InbDeliveryItemC_2."
keywords:
  - "whse"
  - "inbound"
  - "delivery"
  - "item"
  - "lean"
  - "query"
  - "warehouse"
  - "time"
  - "zone"
  - "document"
  - "category"
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
# C_EWM_INBDELIVITEMLEANQ_2

**This CDS view provides the prerequisites for answering the following business questions: How many inbound delivery items are there in my warehouse? How many products are there for my inbound delivery items? How many blocked inbound delivery items are there? What are the warehouse process types of my inbound delivery items? What is the goods receipt status of my inbound delivery items? What is the average goods receipt time of my inbound delivery items? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-DLP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EWM_INBDELIVITEMLEANQ_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMWarehouse` | ✓ | |  |  | `CHAR(4)` | Warehouse Number/Warehouse Complex |
| `EWMInboundDelivery` | ✓ | |  |  | `CHAR(35)` | Document Number |
| `EWMInboundDeliveryItem` | ✓ | |  |  | `NUMC(10)` | Item Number |
| `TimeZoneID` |  | |  |  | `CHAR(6)` | Time Zone |
| `DeliveryDocumentCategory` |  | |  |  | `CHAR(3)` | Document Category |
| `EWMInboundDeliveryItemCategory` |  | |  |  | `CHAR(3)` | Item Category |
| `DeliveryItemCategoryName` |  | |  |  | `CHAR(40)` | Description |
| `InboundDeliveryDocumentType` |  | |  |  | `CHAR(4)` | Document Type |
| `InbDeliveryDocumentTypeName` |  | |  |  | `CHAR(40)` | Description |
| `EWMInboundDeliveryItemType` |  | |  |  | `CHAR(4)` | Item Type |
| `InboundDeliveryItemTypeName` |  | |  |  | `CHAR(40)` | Description |
| `WarehouseProcessType` |  | |  |  | `CHAR(4)` | Warehouse Process Type |
| `WarehouseProcessTypeName` |  | |  |  | `CHAR(40)` | Description |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `ProductName` |  | |  |  | `CHAR(40)` | Product Description |
| `Batch` |  | |  |  | `CHAR(10)` | Batch Number |
| `EntitledToDisposeParty` |  | |  |  | `CHAR(10)` | Party Entitled to Dispose |
| `NameOfEntitledToDisposeParty` |  | |  |  | `CHAR(81)` |  |
| `ShipFromParty` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `ShipFromPartyName` |  | |  |  | `CHAR(40)` |  |
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
| `OverallBlockStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `OverallBlockStatusName` |  | |  |  | `CHAR(30)` | Individual Status of an Object |
| `ItemInconsistencyBlkStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `ItemInconsistencyBlkStatusName` |  | |  |  | `CHAR(30)` | Individual Status of an Object |
| `CompletionStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `CompletionStatusName` |  | |  |  | `CHAR(30)` | Individual Status of an Object |
| `PlanningPutawayStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `PlanningPutawayStatusName` |  | |  |  | `CHAR(30)` | Individual Status of an Object |
| `GoodsReceiptStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `GoodsReceiptStatusName` |  | |  |  | `CHAR(30)` | Individual Status of an Object |
| `PutawayStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `PutawayStatusName` |  | |  |  | `CHAR(30)` | Individual Status of an Object |
| `QualityMgmtCountPlngStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `QualityMgmtCountPlngStatusName` |  | |  |  | `CHAR(30)` | Individual Status of an Object |
| `QualityMgmtInspPlngStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `QualityMgmtInspPlngStsName` |  | |  |  | `CHAR(30)` | Individual Status of an Object |
| `CheckToleranceStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `CheckToleranceStatusName` |  | |  |  | `CHAR(30)` | Individual Status of an Object |
| `ValuationQtyAssignmentStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `ValuationQtyAssgmtStatusName` |  | |  |  | `CHAR(30)` | Individual Status of an Object |
| `WarehouseActivityStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `WarehouseActivityStatusName` |  | |  |  | `CHAR(30)` | Individual Status of an Object |
| `InbDelivItemCrtnUTCDateTime` |  | |  |  | `DEC(15)` | UTC Date and Time |
| `ActualGRStartUTCDateTime` |  | |  |  | `DEC(15)` | Creation Date/Time |
| `PlannedGRStartUTCDateTime` |  | |  |  | `DEC(15)` | Creation Date/Time |
| `PlannedGREndUTCDateTime` |  | |  |  | `DEC(15)` | Creation Date/Time |
| `ActualPutawayEndUTCDateTime` |  | |  |  | `DEC(15)` | Creation Date/Time |
| `ActualGREndUTCDateTime` |  | |  |  | `DEC(15)` | Creation Date/Time |
| `NoWhseActivityTimeInMinutes` |  | |  |  | `DEC(15)` |  |
| `GoodsReceiptDurationInMinutes` |  | |  | `GoodsReceiptDurationInMinutes / NumberOfInbDelivItems` | `FLTP(16)` |  |
| `PlndDeliveryWhseTmznDateTime` |  | |  |  | `DEC(15)` | Planned Delivery Date and Time |
| `PlndGREndWhseTmznDateTime` |  | |  |  | `DEC(15)` | Date and Time of Planned Goods Receipt |
| `PutawayEndWhseTmznDateTime` |  | |  |  | `DEC(15)` | End Date and Time of Putaway |
| `ActualGREndWhseTmznDateTime` |  | |  |  | `DEC(15)` | Goods Receipt Ended On |
| `InbDelivItmCmpltWhseTmznDteTme` |  | |  |  | `DEC(15)` | Completion Date and Time |
| `PlannedDeliveryWhseTmznYear` |  | |  |  | `NUMC(4)` | Display Date (Year) |
| `PlannedDeliveryWhseTmznMonth` |  | |  |  | `NUMC(6)` | Display Date (Month) |
| `PlannedDeliveryWhseTmznDate` |  | |  |  | `DATS(8)` | Display Date |
| `PlannedDeliveryWhseTmznHour` |  | |  |  | `NUMC(10)` | Display Time (Hour) |
| `PlannedDeliveryWhseTmznTime` |  | |  |  | `TIMS(6)` | Display Time |
| `PlndGoodsReceiptWhseTmznYear` |  | |  |  | `NUMC(4)` | Display Date (Year) |
| `PlndGoodsReceiptWhseTmznMonth` |  | |  |  | `NUMC(6)` | Display Date (Month) |
| `PlndGoodsReceiptWhseTmznDate` |  | |  |  | `DATS(8)` | Display Date |
| `PlndGoodsReceiptWhseTmznHour` |  | |  |  | `NUMC(10)` | Display Time (Hour) |
| `PlndGoodsReceiptWhseTmznTime` |  | |  |  | `TIMS(6)` | Display Time |
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
| `PlndDelivTo30MinsWhseDteTme` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `PlndDelivTo60MinsWhseDteTme` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `CompltnEndTo30MinsWhseDteTme` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `CompltnEndTo60MinsWhseDteTme` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `GREndRnddTo30MinsWhseDteTme` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `GREndRnddTo60MinsWhseDteTme` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `PtwyEndRnddTo30MinsWhseDteTme` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `PtwyEndRnddTo60MinsWhseDteTme` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `NumberOfInboundDeliveries` |  | |  | `{ exceptionAggregationSteps: [ { exceptionAggregationBehavior : #COUNT, exceptionAggregationElements: ['EWMWarehouse', 'EWMInboundDelivery' ] } ] } 1` | `INT1(3)` |  |
| `NumberOfInbDelivItems` |  | |  |  | `FLTP(16)` |  |
| `EWMPlndGRWhseTmznHour` |  | |  |  | `NUMC(2)` | Planned GR Time in Hours (Whse Time Zone) |
| `EWMQuantityHasAdjustment` |  | |  |  | `CHAR(1)` | Delivery Quantity Has Adjustments |
| `EWMPlndGRDateIsInPast` |  | |  |  | `CHAR(1)` | Planned Goods Receipt Date Is in Past |
| `EWMActualGRDateIsOnTime` |  | |  |  | `CHAR(1)` | Actual Goods Receipt Is on Time |
| `EWMPlndGoodsReceiptDateIsToday` |  | |  |  | `CHAR(1)` | Planned Goods Receipt Date Is Today (Whse Time Zone) |
| `EWMActualPutawayDateIsToday` |  | |  |  | `CHAR(1)` | Actual Putaway Date Is Today (Warehouse Time Zone) |
| `EWMPlndOrActGRIsToday` |  | |  |  | `CHAR(1)` | Planned/Actual Goods Receipt Date Is Today |
| `EWMPlndDeliveryTimeIsInPast` |  | |  |  | `CHAR(1)` | Planned Delivery Time Is in Past |
| `EWMActGRIsBeforePlndDelivTime` |  | |  |  | `CHAR(1)` | Actual Goods Receipt Date Is Before Planned Delivery Date |
| `EWMPlndDeliveryDateIsToday` |  | |  |  | `CHAR(1)` | Planned Delivery Date Is Today (Warehouse Time Zone) |
| `EWMPlndDeliveryWhseTmznHour` |  | |  |  | `NUMC(2)` | Planned Delivey Time in Hours (Warehouse Time Zone) |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EWM_INBDELIVITEMLEANQ_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EWM_INBDELIVITEMLEANQ_2')/$value)*

```abap
@EndUserText.label: 'Whse Inbound Delivery Item Lean - Query'

@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.modelingPattern:           #ANALYTICAL_QUERY
@ObjectModel.supportedCapabilities:     [#ANALYTICAL_QUERY]

@VDM.viewType:#CONSUMPTION

@OData.publish:            true
@Analytics.query:          true
@Analytics.technicalName: 'CEWMINBDELIVLQ2'
@Analytics.internalName:   #LOCAL

define view entity C_EWM_InbDelivItemLeanQ_2
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
      _Warehouse._Text[1:Language = $parameters.P_Language].EWMWarehouseDescription,

      @EndUserText.label: 'Warehouse Time Zone'
      @Consumption.filter: {selectionType: #RANGE,multipleSelections: true,mandatory: false}
      TimeZoneID,

      @EndUserText.label: 'Inbound Delivery Document Category'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      DeliveryDocumentCategory,

      @EndUserText.label: 'Inbound Delivery Item Category'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      EWMInboundDeliveryItemCategory,

      @EndUserText.label: 'Description of Inb. Deliv. Item Category'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      DeliveryItemCategoryName,

      @EndUserText.label: 'Inbound Delivery Document Type'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      InboundDeliveryDocumentType,

      @EndUserText.label: 'Docu. Type of Inbound Delivery (Desc.)'
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

      @EndUserText.label: 'Product'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      Product,

      @EndUserText.label: 'Product Description'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      ProductName,

      @EndUserText.label: 'Product Batch Number'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      Batch,

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

      @EndUserText.label: 'Stock Owner'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      EWMStockOwner,
      @EndUserText.label: 'Stock Owner'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }      
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:'EWMStockOwner'
      StockOwner,
      @EndUserText.label: 'Stock Owner Description'
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
      DisplayVolumeUnit,


      @EndUserText.label: 'Net Weight on Item Level'
      @AnalyticsDetails.query.decimals: 5
      @Semantics.quantity.unitOfMeasure: 'DisplayWeightUnit'
      ItemNetWeight,

      @EndUserText.label: 'Gross Weight on Item Level'
      @AnalyticsDetails.query.decimals: 5
      @Semantics.quantity.unitOfMeasure: 'DisplayWeightUnit'
      ItemGrossWeight,

      @EndUserText.label: 'Display Weight Unit' //Unit of Weight on Item Level
      DisplayWeightUnit,


      //////////////////////////////////////////Status & Description

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

      @EndUserText.label: 'Completion Status'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      CompletionStatus,

      @EndUserText.label: 'Description of Completion Status'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      CompletionStatusName,


      @EndUserText.label: 'Planning Putaway Status'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      PlanningPutawayStatus,

      @EndUserText.label: 'Description of Planning Putaway Status'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      PlanningPutawayStatusName,

      @EndUserText.label: 'Goods Receipt Status'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      GoodsReceiptStatus,

      @EndUserText.label: 'Description of Goods Receipt Status'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      GoodsReceiptStatusName,

      @EndUserText.label: 'Putaway Status'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      PutawayStatus,

      @EndUserText.label: 'Putaway Status Description'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      PutawayStatusName,

      @EndUserText.label: 'QM Count Planning Status'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      QualityMgmtCountPlngStatus,

      @EndUserText.label: 'Desc. of QM Count Planning Sts'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      QualityMgmtCountPlngStatusName,

      @EndUserText.label: 'Quality Inspection Planning Sts'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      QualityMgmtInspPlngStatus,

      @EndUserText.label: 'Desc. of Quality Inspctn Planning Sts'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      QualityMgmtInspPlngStsName,

      @EndUserText.label: 'Tolerance Check Status'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      CheckToleranceStatus,

      @EndUserText.label: 'Description of Tolerance Check Status'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      CheckToleranceStatusName,

      @EndUserText.label: 'Valuation Quantity Assignment Status'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      ValuationQtyAssignmentStatus,

      @EndUserText.label: 'Desc. of Valuation Qty Assignment Status'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      ValuationQtyAssgmtStatusName,

      @EndUserText.label: 'Warehouse Activity Status'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      WarehouseActivityStatus,

      @EndUserText.label: 'Description of Warehouse Activity Status'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      WarehouseActivityStatusName,

      //////////////////////////////////////////UTC time stamp

      @EndUserText.label: 'Inbound Delivery Item Created On (UTC)'
      @Consumption.filter: { selectionType: #INTERVAL,multipleSelections: true,mandatory: false }
      InbDelivItemCrtnUTCDateTime,

      //      @EndUserText.label: 'Putaway Started On (UTC)'
      //      @Consumption.filter: { selectionType: #INTERVAL,multipleSelections: true,mandatory: false }
      //      ActualPutawayStartUTCDateTime,

      @EndUserText.label: 'GR Started On (UTC)'
      @Consumption.filter: { selectionType: #INTERVAL,multipleSelections: true,mandatory: false }
      ActualGRStartUTCDateTime,

      @EndUserText.label: 'Planned GR Started On (UTC)'
      @Consumption.filter: { selectionType: #INTERVAL,multipleSelections: true,mandatory: false }
      PlannedGRStartUTCDateTime,

      @EndUserText.label: 'Planned GR Ended On (UTC)'
      @Consumption.filter: { selectionType: #INTERVAL,multipleSelections: true,mandatory: false }
      PlannedGREndUTCDateTime,

      @EndUserText.label: 'Putaway Ended On (UTC)'
      @Consumption.filter: { selectionType: #INTERVAL,multipleSelections: true,mandatory: false }
      ActualPutawayEndUTCDateTime,

      @EndUserText.label: 'GR Ended On (UTC)'
      @Consumption.filter: { selectionType: #INTERVAL,multipleSelections: true,mandatory: false }
      ActualGREndUTCDateTime,

      //      @EndUserText.label: 'Plnned Putaway Started On (UTC)'
      //      @Consumption.filter: { selectionType: #INTERVAL,multipleSelections: true,mandatory: false }
      //      PlannedPutawayStartUTCDateTime,

      //      @EndUserText.label: 'Planned Putaway Ended On (UTC)'
      //      @Consumption.filter: { selectionType: #INTERVAL,multipleSelections: true,mandatory: false }
      //      PlannedPutawayEndUTCDateTime,

      @EndUserText.label: 'Time Without Whse Activities (Minute)'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      NoWhseActivityTimeInMinutes,

      //////////////////////////////////////////Duration Measure Fields

      @EndUserText.label: 'Average Receiving Time (Minute)'
      GoodsReceiptDurationInMinutes / NumberOfInbDelivItems as GoodsReceiptDurationInMinutes,

      //      @EndUserText.label: 'Average Putaway Time (Minute)'
      //      PutawayDurationInMinutes / NumberOfInbDelivItems      as PutawayDurationInMinutes,


      //////////////////////////////////////////Warehouse Timezone Time
      @EndUserText.label: 'Date and Time of Planned Delivery'
      @Consumption.filter: { selectionType: #INTERVAL,multipleSelections: true,mandatory: false }
      PlndDeliveryWhseTmznDateTime,

      @EndUserText.label: 'Planned GR Ended On'
      @Consumption.filter: { selectionType: #INTERVAL,multipleSelections: true,mandatory: false }
      PlndGREndWhseTmznDateTime,

      @EndUserText.label: 'Putaway Ended On'
      @Consumption.filter: { selectionType: #INTERVAL,multipleSelections: true,mandatory: false }
      PutawayEndWhseTmznDateTime,

      @EndUserText.label: 'Goods Receipts Ended On'
      @Consumption.filter: { selectionType: #INTERVAL,multipleSelections: true,mandatory: false }
      ActualGREndWhseTmznDateTime,

      //      @EndUserText.label: 'Planned Putaway Ended On'
      //      @Consumption.filter: { selectionType: #INTERVAL,multipleSelections: true,mandatory: false }
      //      PlndPutawayEndWhseTmznDateTime,

      @EndUserText.label: 'Inbound Delivery Item Completed On'
      @Consumption.filter: { selectionType: #INTERVAL,multipleSelections: true,mandatory: false }
      InbDelivItmCmpltWhseTmznDteTme,

      //      @EndUserText.label: 'Inbound Delivery Created On'
      //      @Consumption.filter: { selectionType: #INTERVAL,multipleSelections: true,mandatory: false }
      //      InbDelivCrtnWhseTmznDateTime,


      //////////////////////////////////////////Year, Month, Date, Hour, Time

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
      //      @EndUserText.label: 'End Date (Hour) of Planned Putaway'
      //      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      //      PlndPutawayEndWhseTmznHour,
      //
      //      @EndUserText.label: 'End Time of Planned Putaway'
      //      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      //      PlndPutawayEndWhseTmznTime,



      @EndUserText.label: 'Completion Date (Year)'
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


      //////////////////////////////////////////30/60 Minutes

      @EndUserText.label: 'Plnd Deliv. Time to Nearest Half Hour'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      PlndDelivTo30MinsWhseDteTme,

      @EndUserText.label: 'Plnd Deliv. Time to Nearest Hour'
      @Consumption.filter: { selectionType: #RANGE,multipleSelections: true,mandatory: false }
      PlndDelivTo60MinsWhseDteTme,


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
      1                                                     as NumberOfInboundDeliveries,


      @EndUserText.label: 'Number of Inbound Delivery Items'
      @AnalyticsDetails.query.decimals: 0
      NumberOfInbDelivItems,

      // @EndUserText.label: 'Delivery Adjustment Quantity'
      // EWMDeliveryAdjustmentQuantity,
      @EndUserText.label: 'Plnd GR Time in Hours (Whse Time Zone)'
      EWMPlndGRWhseTmznHour,
      @EndUserText.label: 'Delivery Quantity Has Ajustments'
      EWMQuantityHasAdjustment,
      @EndUserText.label: 'Plnd Goods Receipt Time Is in Past'
      EWMPlndGRDateIsInPast,
      @EndUserText.label: 'Actual Goods Receipt Is on Time'
      EWMActualGRDateIsOnTime,
      @EndUserText.label: 'Plnd GR Date Is Today (Whse Time Zone)'
      EWMPlndGoodsReceiptDateIsToday,
      @EndUserText.label: 'Actual Ptwy Dte Is Today (Whse Tme Zone)'
      EWMActualPutawayDateIsToday,
      @EndUserText.label: 'GR Date Is Today (Whse Tme Zone)'
      EWMPlndOrActGRIsToday,
      @EndUserText.label: 'Plnd Delivery Time Is in Past'
      EWMPlndDeliveryTimeIsInPast,
      @EndUserText.label: 'Actual GR Tme Is Before Plnd Deliv. Tme'
      EWMActGRIsBeforePlndDelivTime,
      @EndUserText.label: 'Plnd Deliv. Dte Is Today (Whse Tme Zone)'
      EWMPlndDeliveryDateIsToday,
      @EndUserText.label: 'Plnd Deliv. Tme in Hour (Whse Time Zone)'
      EWMPlndDeliveryWhseTmznHour


}
```
