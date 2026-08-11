---
name: C_EWM_ODONOPARAMQ_2
description: "This CDS view provides the prerequisites for answering the following business questions: How many outbound delivery orders are there in my warehouse? How many outbound delivery order items are there in my warehouse? What’s the total gross weight of products for outbound delivery order items? What’s the total net weight of products for outbound delivery order items? What’s the total volume of products for outbound delivery order items? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: SCM-EWM-DLP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EWM_ODONOPARAMQ_2')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: How many outbound delivery orders are there in my warehouse? How many outbound delivery order items are there in my warehouse? What’s the total gross weight of products for outbound delivery order items? What’s the total net weight of products for outbound delivery order items? What’s the total volume of products for outbound delivery order items? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Outb Deliv Ord no Mand Param - Query — CDS view tiêu dùng dựa trên I_EWM_ODONoParamC_2."
keywords:
  - "outb"
  - "deliv"
  - "ord"
  - "mand"
  - "param"
  - "query"
  - "warehouse"
  - "outbound"
  - "delivery"
  - "order"
  - "item"
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
---
# C_EWM_ODONOPARAMQ_2

**This CDS view provides the prerequisites for answering the following business questions: How many outbound delivery orders are there in my warehouse? How many outbound delivery order items are there in my warehouse? What’s the total gross weight of products for outbound delivery order items? What’s the total net weight of products for outbound delivery order items? What’s the total volume of products for outbound delivery order items? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-DLP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EWM_ODONOPARAMQ_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMWarehouse` | ✓ | |  |  | `CHAR(4)` | Warehouse Number/Warehouse Complex |
| `EWMOutboundDeliveryOrder` | ✓ | |  |  | `CHAR(35)` | Document Number |
| `EWMOutboundDeliveryOrderItem` | ✓ | |  |  | `NUMC(10)` | Item Number |
| `OutboundDeliveryOrderUUID` |  | |  |  | `RAW(16)` | Document ID |
| `OutboundDeliveryOrderItemUUID` |  | |  |  | `RAW(16)` | Item ID |
| `EWMWarehouseDescription` |  | |  | `_Warehouse._Text[1:Language = $parameters.P_Language].EWMWarehouseDescription` | `CHAR(40)` | Warehouse Number Description |
| `EntitledToDisposeParty` |  | |  |  | `CHAR(10)` | Party Entitled to Dispose |
| `TimeZoneID` |  | |  |  | `CHAR(6)` | Time Zone |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `ShipToPartyName` |  | |  |  | `CHAR(40)` |  |
| `Carrier` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `CarrierName` |  | |  |  | `CHAR(40)` |  |
| `EWMDeliveryDocumentCategory` |  | |  |  | `CHAR(3)` | Document Category |
| `EWMOutboundDeliveryOrderType` |  | |  |  | `CHAR(4)` | Document Type |
| `OutboundDeliveryOrderTypeName` |  | |  | `_DeliveryType._Text[1:Language = $parameters.P_Language].DeliveryTypeName` | `CHAR(40)` | Description |
| `EWMOutbDelivOrderItemCategory` |  | |  |  | `CHAR(3)` | Item Category |
| `EWMOutbDeliveryOrderItemType` |  | |  |  | `CHAR(4)` | Item Type |
| `EWMOutboundDeliveryItem` |  | |  |  | `NUMC(10)` | Item Number |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `Batch` |  | |  |  | `CHAR(10)` | Batch Number |
| `RequirementSegment` |  | |  |  | `CHAR(40)` | Requirement Segment |
| `StockSegment` |  | |  |  | `CHAR(40)` | Stock Segment |
| `WarehouseDoor` |  | |  |  | `CHAR(4)` | Warehouse Door |
| `StagingArea` |  | |  |  | `CHAR(4)` | Staging Area |
| `StagingAreaGroup` |  | |  |  | `CHAR(4)` | Staging Area Group |
| `WarehouseProcessType` |  | |  |  | `CHAR(4)` | Warehouse Process Type |
| `ShippingCondition` |  | |  |  | `CHAR(2)` | Shipping Condition |
| `Wave` |  | |  |  | `NUMC(10)` | Wave |
| `EWMWave` |  | |  |  | `NUMC(10)` | Wave |
| `ItemWaveAssignmentIsIncomplete` |  | |  |  | `CHAR(1)` |  |
| `EWMMeansOfTransportType` |  | |  |  | `CHAR(10)` | Means of Transport |
| `EWMMeansOfTransportTypeName` |  | |  | `_MeansOfTransportType._Text[1:Language = $parameters.P_Language].EWMMeansOfTransportTypeName` | `CHAR(40)` | Means of Transport Description |
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
| `NumberOfOutboundDeliveryOrders` |  | |  | `1` | `INT1(3)` |  |
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

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EWM_ODONOPARAMQ_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EWM_ODONOPARAMQ_2')/$value)*

```abap
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Outb Deliv Ord no Mand Param - Query'

@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.modelingPattern:           #ANALYTICAL_QUERY
@ObjectModel.supportedCapabilities:     [     #ANALYTICAL_QUERY]

@VDM.viewType:#CONSUMPTION

@OData.publish:            true
@Analytics.query:              true
@Analytics.technicalName: 'CEWMODOQNP2'

define view entity C_EWM_ODONoParamQ_2
  with parameters
    @Environment.systemField: #SYSTEM_LANGUAGE
    @Consumption.hidden
    P_Language : /scwm/lang
  as select from I_EWM_ODONoParamC_2(
                                      P_Language: $parameters.P_Language ) as ODO
  //  association [0..*] to I_EWM_WarehouseNumber as _WarehouseVH on _WarehouseVH.Warehouse <> ''
{
      @EndUserText.label: 'Warehouse'
      @Consumption.filter: {
        selectionType: #RANGE,
        multipleSelections: true,
        mandatory: false
      }
  key EWMWarehouse,
      @EndUserText.label: 'Outbound Delivery Order'
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
  key EWMOutboundDeliveryOrder,
      @EndUserText.label: 'ODO Item'
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
  key EWMOutboundDeliveryOrderItem,

      OutboundDeliveryOrderUUID,

      OutboundDeliveryOrderItemUUID,

      _Warehouse._Text[1:Language = $parameters.P_Language].EWMWarehouseDescription                as EWMWarehouseDescription,
      @EndUserText.label: 'Party Entitled to Dispose'
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      EntitledToDisposeParty,
      @EndUserText.label: 'Warehouse Time Zone'
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      TimeZoneID,

      @EndUserText.label: 'Ship-To Party'
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      ShipToParty,
      @EndUserText.label: 'Ship-To Party Name'
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      ShipToPartyName,
      @EndUserText.label: 'Carrier'
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      Carrier,
      @EndUserText.label: 'Carrier Name'
      CarrierName,

      EWMDeliveryDocumentCategory,

      @EndUserText.label: 'ODO Type'
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      EWMOutboundDeliveryOrderType,
      @EndUserText.label: 'Name of ODO Type'
      _DeliveryType._Text[1:Language = $parameters.P_Language].DeliveryTypeName                    as OutboundDeliveryOrderTypeName,

      @EndUserText.label: 'Category of ODO Item'
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      EWMOutbDelivOrderItemCategory,
      _ItemCat._Text[1:Language = $parameters.P_Language].DeliveryItemCategoryName,

      @EndUserText.label: 'Type of ODO Item'
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      EWMOutbDeliveryOrderItemType,
      _DeliveryItemType._Text[1:Language = $parameters.P_Language].DeliveryItemTypeName,

      @EndUserText.label: 'Outbound Delivery Item'
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }

      EWMOutboundDeliveryItem,
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      Product,
      @EndUserText.label: 'Product Name'
      _Product._Text[1:Language = $parameters.P_Language].ProductName,
      @EndUserText.label: 'Product Batch'
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      Batch,
      
      @EndUserText.label: 'Requirement Segment'
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      RequirementSegment,
      
      @EndUserText.label: 'Stock Segment'
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      StockSegment,      
      
      
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      WarehouseDoor,
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      StagingArea,
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      StagingAreaGroup,

      @EndUserText.label: 'Warehouse Process Type'
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      WarehouseProcessType,
      _WarehouseProcessType._Text[1:Language = $parameters.P_Language].WarehouseProcessTypeName,
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      ShippingCondition,
      _ShippingCondition._Text[1:Language = $parameters.P_Language].ShippingConditionName,
      @Consumption.filter: {selectionType: #RANGE,multipleSelections: true, mandatory: false}
      @EndUserText.label: 'Wave'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'EWMWave'
      Wave,
      EWMWave,
      @Consumption.filter: {selectionType: #RANGE,multipleSelections: true, mandatory: false}
      @EndUserText.label: 'Item Wave Assignment Incomplete'
      ItemWaveAssignmentIsIncomplete,

      @EndUserText.label: 'Means of Transport'
      @Consumption.filter: {selectionType: #RANGE,multipleSelections: true, mandatory: false}
      EWMMeansOfTransportType,

      _MeansOfTransportType._Text[1:Language = $parameters.P_Language].EWMMeansOfTransportTypeName as EWMMeansOfTransportTypeName,

      @EndUserText.label: 'Vehicle'
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      EWMMeansOfTransport,
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      EWMRoute,
      @EndUserText.label: 'Route Schedule'
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      RouteSchedule,

      @EndUserText.label: 'Shipping Office'
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      ShippingOffice,
      @EndUserText.label: 'Warehouse Location'
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      WarehouseLocation,
      @EndUserText.label: 'Warehouse Location Role'
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      WarehouseLocationRole,

      @EndUserText.label: 'Planned Picking Status'
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      PlannedPickingStatus,
      @EndUserText.label: 'Status Name of Planned Picking'
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      PlannedPickingStatusName,
      @EndUserText.label: 'Goods Issue Status'
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      GoodsIssueStatus,
      @EndUserText.label: 'Status Name of Goods Issue'
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      GoodsIssueStatusName,
      @EndUserText.label: 'Completion Status'
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      CompletionStatus,
      @EndUserText.label: 'Status Name of Completion'
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      CompletionStatusName,

      @EndUserText.label: 'Picking Status'
      @Consumption.filter: {
      selectionType: #RANGE,
      multipleSelections: true,
      mandatory: false
      }
      PickingStatus,
      @EndUserText.label: 'Status Name of Picking'
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      PickingStatusName,
      @EndUserText.label: 'Overall Blocked Status'
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      OverallBlockStatus,
      @EndUserText.label: 'Name of Overall Blocked Status'
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      OverallBlockStatusName,
      @EndUserText.label: 'Blocked Status for Transport Plan'
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      TranspPlanBlockStatus,
      @EndUserText.label: 'Blocked Sts Name for Transport Plan'
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      TranspPlanBlockStatusName,
      @EndUserText.label: 'Blocked Status for Item Inconsistency'
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      ItemInconsistencyBlkStatus,
      @EndUserText.label: 'Blkd Sts Name for Item Inconsistency'
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      ItemInconsistencyBlkStatusName,
      @EndUserText.label: 'Blocked Status for Goods Movement'
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      GoodsMovementBlockStatus,
      @EndUserText.label: 'Blocked Status Name for Goods Movement'
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      GoodsMovementBlockStatusName,
      @EndUserText.label: 'Blocked Status for Unchecked Item'
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      UncheckedItemBlockStatus,
      @EndUserText.label: 'Blocked Sts Name for Unchecked Item'
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      UncheckedItemBlockStatusName,
      @EndUserText.label: 'Creation Status of Outbound Delivery'
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      DeliveryCreationStatus,
      @EndUserText.label: 'Creation Sts Name of Outbound Delivery'
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      DeliveryCreationStatusName,
      @EndUserText.label: 'Transit Procedure Status'
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      TransitProcedureStatus,
      @EndUserText.label: 'Status Name of Transit Procedure'
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      TransitProcedureStatusName,
      @EndUserText.label: 'Loading Status'
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      LoadingStatus,
      @EndUserText.label: 'Status Name of Loading'
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      LoadingStatusName,
      @EndUserText.label: 'Picking and Distribution Status'
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      PickingAndDistributionStatus,
      @EndUserText.label: 'Status Name of Picking and Distribution'
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      PickingAndDistrStatusName,
      @EndUserText.label: 'Warehouse Activity Status'
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      WarehouseActivityStatus,
      @EndUserText.label: 'Status Name of Warehouse Activity'
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      WarehouseActivityStatusName,
      @EndUserText.label: 'Check Sts for Global Trade Services'
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      GlobalTradeServicesCheckStatus,
      @EndUserText.label: 'Check Sts Name of Global Trade Services'
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      GlobalTrdServicesCheckStsName,
      @EndUserText.label: 'Status of Transportation Unit Assignment'
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      TransportationUnitAssgmtStatus,
      @EndUserText.label: 'Status Name of Transp. Unit Assignment'
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      TranspUnitAssgmtStatusName,
      @EndUserText.label: 'Status of Valuation Quantity Assignment'
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      ValuationQtyAssignmentStatus,
      @EndUserText.label: 'Status Name of Valuation Qty Assignment'
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      ValuationQtyAssgmtStatusName,
      @EndUserText.label: 'Status of Value-Added Service Order'
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      ValueAddedServiceOrderStatus,
      @EndUserText.label: 'Status Name of Value-Added Service Order'
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      ValueAddedServiceOrdStatusName,

      //  @Consumption.hidden: true
      //  @EndUserText.label: 'Overall Status'
      //  OverallDeliveryStatus,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'QuantityUnit'
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      ProductQuantity,
      QuantityUnit,

      @EndUserText.label: 'Number of ODOs'
      @DefaultAggregation: #FORMULA
      @AnalyticsDetails: {
        exceptionAggregationSteps: [{ exceptionAggregationBehavior : #COUNT, exceptionAggregationElements: [ 'EWMOutboundDeliveryOrder']} ]}
      1                                                                                            as NumberOfOutboundDeliveryOrders,

      @EndUserText.label: 'Number of ODO Items'

      //replace COUNT by SUM for sake of performance
      @AnalyticsDetails.query.decimals: 0
      NumberOfOutbDelivOrdItems,

      //DisplayWeightUnit,
      //DisplayVolumeUnit,
      --- Weight
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'DisplayWeightUnit'
      @EndUserText.label: 'Total Gross Weight of ODO Items'
      @AnalyticsDetails.query.decimals: 5
      ItemGrossWeight,

      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'DisplayWeightUnit'
      @EndUserText.label: 'Total Net Weight of ODO Items'
      @AnalyticsDetails.query.decimals: 5
      ItemNetWeight,
      DisplayWeightUnit,

      --Gross Volumn
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'DisplayVolumeUnit'
      @EndUserText.label: 'Total Volume of ODO Items'
      @AnalyticsDetails.query.decimals: 5
      ItemVolume,
      DisplayVolumeUnit,

      @EndUserText.label: 'ODO Item Created On (Whse Time Zone)'
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      WrhsTmznCreationDateTime,
      @EndUserText.label: 'ODO Item Creation Date (Whse Time Zone)'
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      WrhsTmZnCreationDate,
      @EndUserText.label: 'ODO Item Creation Time (Whse Time Zone)'
      WrhsTmznCreationTime,
      @EndUserText.label: 'ODO Item Creation Year (Whse Time Zone)'
      WrhsTmznCreationYear,
      @EndUserText.label: 'ODO Item Creation Date (Whse Tme Zone)'
      WrhsTmznCreationMonth,
      //  @EndUserText.label: 'ODO Item Creation Date in Whse Time Zone'
      //  WrhsTmznCreationDay,
      @EndUserText.label: 'ODO Item Creation Hour (Whse Time Zone)'
      WrhsTmznCreationHour,

      @EndUserText.label: 'Planned GI Started On (Whse Tme Zone)'
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      WrhsTmznPlndGIStrtDateTime,
      @EndUserText.label: 'Planned GI Start Date (Whse Time Zone)'
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      WrhsTimeZonePlannedGIDate,
      @EndUserText.label: 'Planned GI Start Time (Whse Time Zone)'
      WrhsTimeZonePlannedGITime,
      @EndUserText.label: 'Planned GI Start Year (Whse Time Zone)'
      WrhsTimeZnPlndGIStrtYear,
      @EndUserText.label: 'Planned GI Start Month (Whse Time Zone)'
      WrhsTimeZnPlndGIStrtMonth,
      //@EndUserText.label: 'Planned GI Start Day in Whse Time Zone'
      //WrhsTimeZnPlndGIStrtDay,
      @EndUserText.label: 'Planned GI Start Hour (Whse Time Zone)'
      WrhsTimeZnPlndGIStrtHour,

      @EndUserText.label: 'Actual GI Started On (Whse Time Zone)'
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      WrhsTmznActlGIStrtDateTime,
      @EndUserText.label: 'Actual GI Ended On (Whse Time Zone)'
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      EWMWhseTmznActlGIEndDateTime,
      @EndUserText.label: 'Actual GI End Date (Whse Time Zone)'
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      WrhsTimeZoneActualGIDate,
      @EndUserText.label: 'Actual GI End Time (Whse Time Zone)'
      WrhsTimeZoneActualGITime,

      @EndUserText.label: 'Plnd GI Start Time to Nearest Half Hour'
      WhsePlndGIRnddTo30MinsDateTime,
      @EndUserText.label: 'Plnd GI Start Time to Nearest Hour'
      WhsePlndGIRnddTo60MinsDateTime,
      @EndUserText.label: 'Actual GI End Tme to Nearest Half Hour'
      WhseActlGIRnddTo30MinsDateTime,
      @EndUserText.label: 'Actual GI End Time to Nearest Hour'
      WhseActlGIRnddTo60MinsDateTime,

      @EndUserText.label: 'Actual GI End Year (Whse Time Zone)'
      WrhsTmznActlGIStrtYear,
      @EndUserText.label: 'Actual GI End Month (Whse Time Zone)'
      WrhsTmznActlGIStrtMonth,
      @EndUserText.label: 'Actual GI End Hour (Whse Time Zone)'
      WrhsTmznActlGIStrtHour,
      @EndUserText.label: 'GI Delayed by Seconds (Whse Time Zone)'
      GoodsIssueDelayInSeconds,
      @EndUserText.label: 'Overdue Time in Hours'
      @Consumption.filter: {
          selectionType: #RANGE,
          multipleSelections: true,
          mandatory: false
      }
      OutbDelivOrdItemGIOverdueHours

}
```
