---
name: C_EWM_ODONOPARAMQ_2
description: This CDS view provides the prerequisites for answering the following business questions: How many outbound delivery orders are there in my warehouse? How many outbound delivery order items are there in my warehouse? What’s the total gross weight of products for outbound delivery order items? What’s the total net weight of products for outbound delivery order items? What’s the total volume of products for outbound delivery order items? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: SCM-EWM-DLP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EWM_ODONOPARAMQ_2')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business questions: How many outbound delivery orders are there in my warehouse? How many outbound delivery order items are there in my warehouse? What’s the total gross weight of products for outbound delivery order items? What’s the total net weight of products for outbound delivery order items? What’s the total volume of products for outbound delivery order items? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - SCM
  - bo:companycode
  - component:SCM-EWM-DLP-2CL
  - consumption-view
  - delivery
  - order
  - product
  - SCM-EWM
  - SCM-EWM-DLP
  - SCM-EWM-DLP-2CL
  - metadata-only
---
# C_EWM_ODONOPARAMQ_2

**This CDS view provides the prerequisites for answering the following business questions: How many outbound delivery orders are there in my warehouse? How many outbound delivery order items are there in my warehouse? What’s the total gross weight of products for outbound delivery order items? What’s the total net weight of products for outbound delivery order items? What’s the total volume of products for outbound delivery order items? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-DLP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EWM_ODONOPARAMQ_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMWarehouse` |  | |  |  | `CHAR(4)` | Warehouse Number/Warehouse Complex |
| `EWMOutboundDeliveryOrder` |  | |  |  | `CHAR(35)` | Document Number |
| `EWMOutboundDeliveryOrderItem` |  | |  |  | `NUMC(10)` | Item Number |
| `OutboundDeliveryOrderUUID` |  | |  |  | `RAW(16)` | Document ID |
| `OutboundDeliveryOrderItemUUID` |  | |  |  | `RAW(16)` | Item ID |
| `EWMWarehouseDescription` |  | |  |  | `CHAR(40)` | Warehouse Number Description |
| `EntitledToDisposeParty` |  | |  |  | `CHAR(10)` | Party Entitled to Dispose |
| `TimeZoneID` |  | |  |  | `CHAR(6)` | Time Zone |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `ShipToPartyName` |  | |  |  | `CHAR(40)` |  |
| `Carrier` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `CarrierName` |  | |  |  | `CHAR(40)` |  |
| `EWMDeliveryDocumentCategory` |  | |  |  | `CHAR(3)` | Document Category |
| `EWMOutboundDeliveryOrderType` |  | |  |  | `CHAR(4)` | Document Type |
| `OutboundDeliveryOrderTypeName` |  | |  |  | `CHAR(40)` | Description |
| `EWMOutbDelivOrderItemCategory` |  | |  |  | `CHAR(3)` | Item Category |
| `DeliveryItemCategoryName` |  | |  |  | `CHAR(40)` | Description |
| `EWMOutbDeliveryOrderItemType` |  | |  |  | `CHAR(4)` | Item Type |
| `DeliveryItemTypeName` |  | |  |  | `CHAR(40)` | Description |
| `EWMOutboundDeliveryItem` |  | |  |  | `NUMC(10)` | Item Number |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `ProductName` |  | |  |  | `CHAR(40)` | Product Description |
| `Batch` |  | |  |  | `CHAR(10)` | Batch Number |
| `RequirementSegment` |  | |  |  | `CHAR(40)` | Requirement Segment |
| `StockSegment` |  | |  |  | `CHAR(40)` | Stock Segment |
| `WarehouseDoor` |  | |  |  | `CHAR(4)` | Warehouse Door |
| `StagingArea` |  | |  |  | `CHAR(4)` | Staging Area |
| `StagingAreaGroup` |  | |  |  | `CHAR(4)` | Staging Area Group |
| `WarehouseProcessType` |  | |  |  | `CHAR(4)` | Warehouse Process Type |
| `WarehouseProcessTypeName` |  | |  |  | `CHAR(40)` | Description |
| `ShippingCondition` |  | |  |  | `CHAR(2)` | Shipping Condition |
| `ShippingConditionName` |  | |  |  | `CHAR(20)` | Shipping Conditions Description |
| `Wave` |  | |  |  | `NUMC(10)` | Wave |
| `EWMWave` |  | |  |  | `NUMC(10)` | Wave |
| `ItemWaveAssignmentIsIncomplete` |  | |  |  | `CHAR(1)` |  |
| `EWMMeansOfTransportType` |  | |  |  | `CHAR(10)` | Means of Transport |
| `EWMMeansOfTransportTypeName` |  | |  |  | `CHAR(40)` | Means of Transport Description |
| `EWMMeansOfTransport` |  | |  |  | `CHAR(20)` | Means-of-Transport ID |
| `EWMRoute` |  | |  |  | `CHAR(10)` | Route Name (Identification) |
| `RouteSchedule` |  | |  |  | `CHAR(10)` | Departure Calendar/Route Schedule |
| `ShippingOffice` |  | |  |  | `CHAR(20)` | Location Number |
| `WarehouseLocation` |  | |  |  | `CHAR(20)` | Location Number |
| `WarehouseLocationRole` |  | |  |  | `CHAR(6)` | Partner Role |
| `PlannedPickingStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `PlannedPickingStatusName` |  | |  |  | `CHAR(30)` | Individual Status of an Object |
| `GoodsIssueStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `GoodsIssueStatusName` |  | |  |  | `CHAR(30)` | Individual Status of an Object |
| `CompletionStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `CompletionStatusName` |  | |  |  | `CHAR(30)` | Individual Status of an Object |
| `PickingStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `PickingStatusName` |  | |  |  | `CHAR(30)` | Individual Status of an Object |
| `OverallBlockStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `OverallBlockStatusName` |  | |  |  | `CHAR(30)` | Individual Status of an Object |
| `TranspPlanBlockStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `TranspPlanBlockStatusName` |  | |  |  | `CHAR(30)` | Individual Status of an Object |
| `ItemInconsistencyBlkStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `ItemInconsistencyBlkStatusName` |  | |  |  | `CHAR(30)` | Individual Status of an Object |
| `GoodsMovementBlockStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `GoodsMovementBlockStatusName` |  | |  |  | `CHAR(30)` | Individual Status of an Object |
| `UncheckedItemBlockStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `UncheckedItemBlockStatusName` |  | |  |  | `CHAR(30)` | Individual Status of an Object |
| `DeliveryCreationStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `DeliveryCreationStatusName` |  | |  |  | `CHAR(30)` | Individual Status of an Object |
| `TransitProcedureStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `TransitProcedureStatusName` |  | |  |  | `CHAR(30)` | Individual Status of an Object |
| `LoadingStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `LoadingStatusName` |  | |  |  | `CHAR(30)` | Individual Status of an Object |
| `PickingAndDistributionStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `PickingAndDistrStatusName` |  | |  |  | `CHAR(30)` | Individual Status of an Object |
| `WarehouseActivityStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `WarehouseActivityStatusName` |  | |  |  | `CHAR(30)` | Individual Status of an Object |
| `GlobalTradeServicesCheckStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `GlobalTrdServicesCheckStsName` |  | |  |  | `CHAR(30)` | Individual Status of an Object |
| `TransportationUnitAssgmtStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `TranspUnitAssgmtStatusName` |  | |  |  | `CHAR(30)` | Individual Status of an Object |
| `ValuationQtyAssignmentStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `ValuationQtyAssgmtStatusName` |  | |  |  | `CHAR(30)` | Individual Status of an Object |
| `ValueAddedServiceOrderStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `ValueAddedServiceOrdStatusName` |  | |  |  | `CHAR(30)` | Individual Status of an Object |
| `ProductQuantity` |  | |  |  | `QUAN(31)` | Quantity |
| `QuantityUnit` |  | |  |  | `UNIT(3)` | Unit of Measure |
| `NumberOfOutboundDeliveryOrders` |  | |  |  | `INT1(3)` |  |
| `NumberOfOutbDelivOrdItems` |  | |  |  | `FLTP(16)` |  |
| `ItemGrossWeight` |  | |  |  | `QUAN(31)` |  |
| `ItemNetWeight` |  | |  |  | `QUAN(31)` |  |
| `DisplayWeightUnit` |  | |  |  | `UNIT(3)` | Weight Unit |
| `ItemVolume` |  | |  |  | `QUAN(31)` |  |
| `DisplayVolumeUnit` |  | |  |  | `UNIT(3)` | Volume Unit |
| `WrhsTmznCreationDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WrhsTmZnCreationDate` |  | |  |  | `DATS(8)` | Date |
| `WrhsTmznCreationTime` |  | |  |  | `TIMS(6)` | Time |
| `WrhsTmznCreationYear` |  | |  |  | `NUMC(4)` |  |
| `WrhsTmznCreationMonth` |  | |  |  | `NUMC(6)` |  |
| `WrhsTmznCreationHour` |  | |  |  | `NUMC(2)` |  |
| `WrhsTmznPlndGIStrtDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WrhsTimeZonePlannedGIDate` |  | |  |  | `DATS(8)` | Date |
| `WrhsTimeZonePlannedGITime` |  | |  |  | `TIMS(6)` | Time |
| `WrhsTimeZnPlndGIStrtYear` |  | |  |  | `NUMC(4)` |  |
| `WrhsTimeZnPlndGIStrtMonth` |  | |  |  | `NUMC(6)` |  |
| `WrhsTimeZnPlndGIStrtHour` |  | |  |  | `NUMC(2)` |  |
| `WrhsTmznActlGIStrtDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `EWMWhseTmznActlGIEndDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WrhsTimeZoneActualGIDate` |  | |  |  | `DATS(8)` | Date |
| `WrhsTimeZoneActualGITime` |  | |  |  | `TIMS(6)` | Time |
| `WhsePlndGIRnddTo30MinsDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WhsePlndGIRnddTo60MinsDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WhseActlGIRnddTo30MinsDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WhseActlGIRnddTo60MinsDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WrhsTmznActlGIStrtYear` |  | |  |  | `NUMC(4)` |  |
| `WrhsTmznActlGIStrtMonth` |  | |  |  | `NUMC(6)` |  |
| `WrhsTmznActlGIStrtHour` |  | |  |  | `NUMC(2)` |  |
| `GoodsIssueDelayInSeconds` |  | |  |  | `INT4(10)` |  |
| `OutbDelivOrdItemGIOverdueHours` |  | |  |  | `INT4(10)` |  |
