---
name: C_EWM_OUTBDELIVORDQ_2
description: "This CDS view provides the prerequisites for answering the following business questions: How many open outbound delivery order items are there for picking? How many open outbound delivery order items are there for different activity areas? How many outbound delivery order items have been shipped on each transportation route? What is the weight or volume of the outbound delivery order items to be loaded? How long has the good issue of the outbound delivery order items been delayed? Which top three customers are most affected by the delayed goods issue? How many open outbound delivery order items are there where the goods issue is overdue? How many outbound delivery order items are blocked in picking for different document types? How are the open outbound delivery order items spread according to the planned goods issue time? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: SCM-EWM-DLP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EWM_OUTBDELIVORDQ_2')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: How many open outbound delivery order items are there for picking? How many open outbound delivery order items are there for different activity areas? How many outbound delivery order items have been shipped on each transportation route? What is the weight or volume of the outbound delivery order items to be loaded? How long has the good issue of the outbound delivery order items been delayed? Which top three customers are most affected by the delayed goods issue? How many open outbound delivery order items are there where the goods issue is overdue? How many outbound delivery order items are blocked in picking for different document types? How are the open outbound delivery order items spread according to the planned goods issue time? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Whse Outbound Delivery Order - Query — CDS view tiêu dùng dựa trên I_EWM_OutbDelivOrdC_2."
keywords:
  - "whse"
  - "outbound"
  - "delivery"
  - "order"
  - "query"
  - "warehouse"
  - "item"
tags:
  - SCM
  - bo:businesspartner
  - component:SCM-EWM-DLP-2CL
  - consumption-view
  - customer
  - delivery
  - document
  - goods-issue
  - order
  - plan
  - SCM-EWM
  - SCM-EWM-DLP
  - SCM-EWM-DLP-2CL
  - bo:deliverydocument
---
# C_EWM_OUTBDELIVORDQ_2

**This CDS view provides the prerequisites for answering the following business questions: How many open outbound delivery order items are there for picking? How many open outbound delivery order items are there for different activity areas? How many outbound delivery order items have been shipped on each transportation route? What is the weight or volume of the outbound delivery order items to be loaded? How long has the good issue of the outbound delivery order items been delayed? Which top three customers are most affected by the delayed goods issue? How many open outbound delivery order items are there where the goods issue is overdue? How many outbound delivery order items are blocked in picking for different document types? How are the open outbound delivery order items spread according to the planned goods issue time? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-DLP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EWM_OUTBDELIVORDQ_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMWarehouse` | ✓ | |  |  | `CHAR(4)` | Warehouse Number/Warehouse Complex |
| `EWMOutboundDeliveryOrder` | ✓ | |  |  | `CHAR(35)` | Document Number |
| `EWMOutboundDeliveryOrderItem` | ✓ | |  |  | `NUMC(10)` | Item Number |
| `EWMOutboundDelivery` |  | |  |  | `CHAR(35)` | Document Number |
| `EWMOutboundDeliveryItem` |  | |  |  | `NUMC(10)` | Item Number |
| `EWMWarehouseDescription` |  | |  | `_Warehouse._Text[1:Language = $parameters.P_Language].EWMWarehouseDescription` | `CHAR(40)` | Warehouse Number Description |
| `EntitledToDisposeParty` |  | |  |  | `CHAR(10)` | Party Entitled to Dispose |
| `TimeZoneID` |  | |  |  | `CHAR(6)` | Time Zone |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `ShipToPartyName` |  | |  |  | `CHAR(40)` |  |
| `Carrier` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `CarrierName` |  | |  |  | `CHAR(40)` |  |
| `EWMOutboundDeliveryOrderType` |  | |  |  | `CHAR(4)` | Document Type |
| `EWMOutbDelivOrderItemCategory` |  | |  |  | `CHAR(3)` | Item Category |
| `EWMOutbDeliveryOrderItemType` |  | |  |  | `CHAR(4)` | Item Type |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `Batch` |  | |  |  | `CHAR(10)` | Batch Number |
| `RequirementSegment` |  | |  |  | `CHAR(40)` | Requirement Segment |
| `StockSegment` |  | |  |  | `CHAR(40)` | Stock Segment |
| `WarehouseDoor` |  | |  |  | `CHAR(4)` | Warehouse Door |
| `StagingArea` |  | |  |  | `CHAR(4)` | Staging Area |
| `StagingAreaGroup` |  | |  |  | `CHAR(4)` | Staging Area Group |
| `WarehouseProcessType` |  | |  |  | `CHAR(4)` | Warehouse Process Type |
| `ShippingCondition` |  | |  |  | `CHAR(2)` | Shipping Condition |
| `EWMStorageType` |  | |  |  | `CHAR(4)` | Storage Type |
| `EWMStorageTypeName` |  | |  | `_StorageType._Text[1:Language = $parameters.P_Language].EWMStorageTypeName` | `CHAR(40)` | Description |
| `EWMStorageSection` |  | |  |  | `CHAR(4)` | Storage Section |
| `ActivityArea` |  | |  |  | `CHAR(4)` | Activity Area |
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
| `NumberOfOutbDelivOrdItems` |  | |  | `1` | `INT1(3)` |  |
| `ItemGrossWeight` |  | |  |  | `QUAN(31)` |  |
| `ItemNetWeight` |  | |  |  | `QUAN(31)` |  |
| `WeightUnit` |  | |  | `$parameters.P_DisplayWeightUnit` | `UNIT(3)` | Unit |
| `ItemVolume` |  | |  |  | `QUAN(31)` |  |
| `VolumeUnit` |  | |  | `$parameters.P_DisplayVolumeUnit` | `UNIT(3)` | Unit |
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
| `WrhsTmznActlGIStrtYear` |  | |  |  | `NUMC(4)` |  |
| `WrhsTmznActlGIStrtMonth` |  | |  |  | `NUMC(6)` |  |
| `WrhsTmznActlGIStrtHour` |  | |  |  | `NUMC(2)` |  |
| `AverageGoodsIssueDelayMinutes` |  | |  | `0` | `INT1(3)` |  |
| `IsOverdue` |  | |  |  | `NUMC(1)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EWM_OUTBDELIVORDQ_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EWM_OUTBDELIVORDQ_2')/$value)*

```abap
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Whse Outbound Delivery Order - Query'

@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.modelingPattern:           #ANALYTICAL_QUERY
@ObjectModel.supportedCapabilities:     [     #ANALYTICAL_QUERY]
@Metadata.ignorePropagatedAnnotations:true 
@VDM.viewType:#CONSUMPTION

@OData.publish:            true
@Analytics.query:              true
@Analytics.technicalName: 'CEWMODOQ2'

define view entity C_EWM_OutbDelivOrdQ_2
  with parameters
    @EndUserText.label: 'Warehouse'
    @Consumption.valueHelpDefinition: [{ entity:{ name: 'I_EWM_WarehouseNumber_2', element:'EWMWarehouse' } }]
    P_WarehouseNumber          : /scwm/lgnum,
    @EndUserText.label: 'Start Date'
    P_PlannedGIStartDate       : /scdl/de_plandate,
    @EndUserText.label: 'Start Time'
    @Consumption.defaultValue: '000000'
    P_PlannedGIStartTime       : /scdl/de_plantime,
    @EndUserText.label: 'End Date'
    P_PlannedGIEndDate         : /scdl/de_plandate,
    @EndUserText.label: 'End Time'
    @Consumption.defaultValue: '235959'
    P_PlannedGIEndTime         : /scdl/de_plantime,
    @EndUserText.label: 'Picking Lead Time in Minutes'
    @Consumption.defaultValue: '60'
    P_PickLeadingTimeInMinutes : int2,
    @EndUserText.label: 'Loading Lead Time in Minutes'
    @Consumption.defaultValue: '60'
    P_LoadLeadingTimeInMinutes : int2,
    @EndUserText.label: 'GI Lead Time in Minutes'
    @Consumption.defaultValue: '60'
    P_GILeadingTimeInMinutes   : int2,
    @EndUserText.label: 'Weight Unit'
    @Consumption.defaultValue: 'KG'
    P_DisplayWeightUnit        : /scwm/unit,
    @EndUserText.label: 'Volume Unit'
    @Consumption.defaultValue: 'M3'
    P_DisplayVolumeUnit        : /scwm/unit,
    @Environment.systemField: #SYSTEM_LANGUAGE
    @Consumption.hidden
    P_Language                 : /scwm/lang
  as select from I_EWM_OutbDelivOrdC_2 ( P_PlannedGIStartDate: $parameters.P_PlannedGIStartDate,
                                      P_PlannedGIStartTime: $parameters.P_PlannedGIStartTime,
                                      P_PlannedGIEndDate: $parameters.P_PlannedGIEndDate,
                                      P_PlannedGIEndTime: $parameters.P_PlannedGIEndTime,
                                    //  P_AfterCurrentTimeMinutes: 60,
                                      P_PickLeadingTimeInMinutes: $parameters.P_PickLeadingTimeInMinutes,
                                      P_LoadLeadingTimeInMinutes: $parameters.P_LoadLeadingTimeInMinutes,
                                      P_GILeadingTimeInMinutes: $parameters.P_GILeadingTimeInMinutes,
                                      P_DisplayWeightUnit : $parameters.P_DisplayWeightUnit,
                                      P_DisplayVolumeUnit : $parameters.P_DisplayVolumeUnit,
                                      P_WarehouseNumber: $parameters.P_WarehouseNumber,
                                      P_Language: $parameters.P_Language ) as ODO
{
      @EndUserText.label: 'Warehouse'
  key EWMWarehouse,
      @EndUserText.label: 'Outbound Delivery Order'
  key EWMOutboundDeliveryOrder,
      @EndUserText.label: 'ODO Item'
  key EWMOutboundDeliveryOrderItem ,

      @EndUserText.label: 'Outbound Delivery'
      EWMOutboundDelivery,
      @EndUserText.label: 'Outbound Delivery Item'
      EWMOutboundDeliveryItem,

      _Warehouse._Text[1:Language = $parameters.P_Language].EWMWarehouseDescription                as EWMWarehouseDescription,
      @EndUserText.label: 'Entitled-To-Dispose Party'
      EntitledToDisposeParty,
      @EndUserText.label: 'Warehouse Time Zone'
      TimeZoneID,

      @EndUserText.label: 'Ship-To Party'
      ShipToParty,
      @EndUserText.label: 'Ship-To Party Name'
      ShipToPartyName,
      @EndUserText.label: 'Carrier'
      Carrier,
      @EndUserText.label: 'Carrier Name'
      CarrierName,


      //  DeliveryCategory, --no need to be shown

      @EndUserText.label: 'ODO Type'
      EWMOutboundDeliveryOrderType,
      _DeliveryType._Text[1:Language = $parameters.P_Language].DeliveryTypeName,

      @EndUserText.label: 'ODO Item Category'
      EWMOutbDelivOrderItemCategory,
      _ItemCat._Text[1:Language = $parameters.P_Language].DeliveryItemCategoryName,

      @EndUserText.label: 'ODO Item Type'
      EWMOutbDeliveryOrderItemType,
      _DeliveryItemType._Text[1:Language = $parameters.P_Language].DeliveryItemTypeName,

      Product,
      @EndUserText.label: 'Product Name'
      _Product._Text[1:Language = $parameters.P_Language].ProductName,
      @EndUserText.label: 'Product Batch'
      Batch,
      @EndUserText.label: 'Requirement Segment'
      RequirementSegment,
      @EndUserText.label: 'Stock Segment'
      StockSegment,
      WarehouseDoor,
      StagingArea,
      StagingAreaGroup,

      @EndUserText.label: 'Warehouse Process Type'
      WarehouseProcessType,
      _WarehouseProcessType._Text[1:Language = $parameters.P_Language].WarehouseProcessTypeName,
      ShippingCondition,
      _ShippingCondition._Text[1:Language = $parameters.P_Language].ShippingConditionName,
      EWMStorageType,
      _StorageType._Text[1:Language = $parameters.P_Language].EWMStorageTypeName                   as EWMStorageTypeName,
      EWMStorageSection,
      _StorageSection._Text[1:Language = $parameters.P_Language].StorageSectionName,
      ActivityArea,
      _ActivityArea._Text[1:Language = $parameters.P_Language].ActivityAreaName,

      @EndUserText.label: 'Wave'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'EWMWave'
      Wave,
      EWMWave,
      @EndUserText.label: 'Item Wave Assignment Incomplete'
      ItemWaveAssignmentIsIncomplete,

      @EndUserText.label: 'Means of Transport'
      EWMMeansOfTransportType,
      _MeansOfTransportType._Text[1:Language = $parameters.P_Language].EWMMeansOfTransportTypeName as EWMMeansOfTransportTypeName,
      @EndUserText.label: 'Vehicle'
      EWMMeansOfTransport,
      EWMRoute,
      @EndUserText.label: 'Route Schedule'
      RouteSchedule,

      @EndUserText.label: 'Shipping Office'
      ShippingOffice,
      @EndUserText.label: 'Warehouse Location'
      WarehouseLocation,
      @EndUserText.label: 'Warehouse Location Role'
      WarehouseLocationRole,

      @EndUserText.label: 'Planned Picking Status'
      PlannedPickingStatus,
      @EndUserText.label: 'Planned Picking Status Name'
      PlannedPickingStatusName,
      @EndUserText.label: 'Goods Issue Status'
      GoodsIssueStatus,
      @EndUserText.label: 'Goods Issue Status Name'
      GoodsIssueStatusName,
      @EndUserText.label: 'Completion Status'
      CompletionStatus,
      @EndUserText.label: 'Completion Status Name'
      CompletionStatusName,

      @EndUserText.label: 'Picking Status'
      PickingStatus,
      @EndUserText.label: 'Picking Status Name'
      PickingStatusName,
      @EndUserText.label: 'Overall Block Status'
      OverallBlockStatus,
      @EndUserText.label: 'Overall Block Status Name'
      OverallBlockStatusName,
      @EndUserText.label: 'Transport Plan Block Status'
      TranspPlanBlockStatus,
      @EndUserText.label: 'Transport Plan Block Status Name'
      TranspPlanBlockStatusName,
      @EndUserText.label: 'Item Inconsistency Block Status'
      ItemInconsistencyBlkStatus,
      @EndUserText.label: 'Item Inconsistency Block Status Name'
      ItemInconsistencyBlkStatusName,
      @EndUserText.label: 'Goods Movement Block Status'
      GoodsMovementBlockStatus,
      @EndUserText.label: 'Goods Movement Block Status Name'
      GoodsMovementBlockStatusName,
      @EndUserText.label: 'Unchecked Item Block Status'
      UncheckedItemBlockStatus,
      @EndUserText.label: 'Unchecked Item Block Status Name'
      UncheckedItemBlockStatusName,
      @EndUserText.label: 'Outbound Delivery Creation Status'
      DeliveryCreationStatus,
      @EndUserText.label: 'Outbound Delivery Creation Status Name'
      DeliveryCreationStatusName,
      @EndUserText.label: 'Transit Procedure Status'
      TransitProcedureStatus,
      @EndUserText.label: 'Transit Procedure Status Name'
      TransitProcedureStatusName,
      @EndUserText.label: 'Loading Status'
      LoadingStatus,
      @EndUserText.label: 'Loading Status Name'
      LoadingStatusName,
      @EndUserText.label: 'Picking and Distribution Status'
      PickingAndDistributionStatus,
      @EndUserText.label: 'Picking and Distribution Status Name'
      PickingAndDistrStatusName,
      @EndUserText.label: 'Warehouse Activity Status'
      WarehouseActivityStatus,
      @EndUserText.label: 'Warehouse Activity Status Name'
      WarehouseActivityStatusName,
      @EndUserText.label: 'Global Trade Services Check Status'
      GlobalTradeServicesCheckStatus,
      @EndUserText.label: 'Global Trade Services Check Status Name'
      GlobalTrdServicesCheckStsName,
      @EndUserText.label: 'Transportation Unit Assignment Status'
      TransportationUnitAssgmtStatus,
      @EndUserText.label: 'Transportation Unit Assignment Status Name'
      TranspUnitAssgmtStatusName,
      @EndUserText.label: 'Valuation Quantity Assignment Status'
      ValuationQtyAssignmentStatus,
      @EndUserText.label: 'Valuation Quantity Assignment Status Name'
      ValuationQtyAssgmtStatusName,
      @EndUserText.label: 'Value-Added Service Order Status'
      ValueAddedServiceOrderStatus,
      @EndUserText.label: 'Value-Added Service Order Status Name'
      ValueAddedServiceOrdStatusName,

      //  @Consumption.hidden: true
      //  @EndUserText.label: 'Overall Status'
      //  OverallDeliveryStatus,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'QuantityUnit'
      ProductQuantity,
      QuantityUnit,

      @EndUserText.label: 'Number of ODOs'
      @DefaultAggregation: #FORMULA
      @AnalyticsDetails: {
        exceptionAggregationSteps: [{ exceptionAggregationBehavior : #COUNT, exceptionAggregationElements: [ 'EWMOutboundDeliveryOrder']} ]}
      1                                                                                            as NumberOfOutboundDeliveryOrders,

      @EndUserText.label: 'Number of ODO Items'
      @DefaultAggregation: #FORMULA
      @AnalyticsDetails: {
        exceptionAggregationSteps: [{ exceptionAggregationBehavior : #COUNT, exceptionAggregationElements: ['EWMOutboundDeliveryOrder', 'EWMOutboundDeliveryOrderItem']} ]}
      1                                                                                            as NumberOfOutbDelivOrdItems,
      
      --- Weight
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'WeightUnit'
      @EndUserText.label: 'Total Gross Weight of ODO Items'
      @AnalyticsDetails.query.decimals: 5
      ItemGrossWeight,

      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'WeightUnit'
      @EndUserText.label: 'Total Net Weight of ODO Items'
      @AnalyticsDetails.query.decimals: 5
      ItemNetWeight,
      $parameters.P_DisplayWeightUnit                                                                         as WeightUnit,

      --Gross Volumn
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'VolumeUnit'
      @EndUserText.label: 'Total Volume of ODO Items'
      @AnalyticsDetails.query.decimals: 5
      ItemVolume,
      $parameters.P_DisplayVolumeUnit                                                                         as VolumeUnit,
      

      @EndUserText.label: 'ODO Item Creation Time Stamp in Whse TmZn'
      WrhsTmznCreationDateTime,
      @EndUserText.label: 'ODO Item Creation Date in Whse TmZn'
      WrhsTmZnCreationDate,
      @EndUserText.label: 'ODO Item Creation Time in Whse TmZn'
      WrhsTmznCreationTime,
      @EndUserText.label: 'ODO Item Creation Year in Whse TmZn'
      WrhsTmznCreationYear,
      @EndUserText.label: 'ODO Item Creation Month in Whse TmZn'
      WrhsTmznCreationMonth,
      //  @EndUserText.label: 'ODO Item Creation Date in Whse TmZn'
      //  WrhsTmznCreationDay,
      @EndUserText.label: 'ODO Item Creation Hour in Whse TmZn'
      WrhsTmznCreationHour,

      @EndUserText.label: 'Planned GI Start Time Stamp in Whse TmZn'
      WrhsTmznPlndGIStrtDateTime,
      @EndUserText.label: 'Planned GI Start Date in Whse TmZn'
      WrhsTimeZonePlannedGIDate,
      @EndUserText.label: 'Planned GI Start Time in Whse TmZn'
      WrhsTimeZonePlannedGITime,
      @EndUserText.label: 'Planned GI Start Year in Whse TmZn'
      WrhsTimeZnPlndGIStrtYear,
      @EndUserText.label: 'Planned GI Start Month in Whse TmZn'
      WrhsTimeZnPlndGIStrtMonth,
      //@EndUserText.label: 'Planned GI Start Day in Whse TmZn'
      //WrhsTimeZnPlndGIStrtDay,
      @EndUserText.label: 'Planned GI Start Hour in Whse TmZn'
      WrhsTimeZnPlndGIStrtHour,

      @EndUserText.label: 'Actual GI Start Time Stamp in Whse TmZn'
      WrhsTmznActlGIStrtDateTime,
      @EndUserText.label: 'Actual GI End Time Stamp in Whse TmZn'
      EWMWhseTmznActlGIEndDateTime,
      @EndUserText.label: 'Actual GI End Date in Whse TmZn'
      WrhsTimeZoneActualGIDate,
      @EndUserText.label: 'Actual GI End Time in Whse TmZn'
      WrhsTimeZoneActualGITime,
      @EndUserText.label: 'Actual GI End Year in Whse TmZn'
      WrhsTmznActlGIStrtYear,
      @EndUserText.label: 'Actual GI End Month in Whse TmZn'
      WrhsTmznActlGIStrtMonth,
      //  @EndUserText.label: 'Actual GI Start Date in Whse TmZn'
      //  WrhsTmznActlGIStrtDay,
      @EndUserText.label: 'Actual GI End Hour in Whse TmZn'
      WrhsTmznActlGIStrtHour,

      @EndUserText.label: 'Average Delay Time in Minutes'
      //  @Semantics.quantity.unitOfMeasure: 'TimeUnit'
      @DefaultAggregation: #FORMULA
      @AnalyticsDetails.query.axis: #COLUMNS
      @AnalyticsDetails.query.formula: 'case when GoodsIssueDelayInSeconds > 0 then GoodsIssueDelayInSeconds / 60 else 0 end'
      @AnalyticsDetails.exceptionAggregationSteps: [ {exceptionAggregationBehavior: #AVG , exceptionAggregationElements: [ 'EWMOutboundDeliveryOrder', 'EWMOutboundDeliveryOrderItem'] }]
      0                                                                                            as AverageGoodsIssueDelayMinutes,
      @EndUserText.label: 'Overdue Flag'
      IsOverdue

}
```
