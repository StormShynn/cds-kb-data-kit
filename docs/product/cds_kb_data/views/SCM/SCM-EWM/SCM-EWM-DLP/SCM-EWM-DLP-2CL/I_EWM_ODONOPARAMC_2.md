---
name: I_EWM_ODONOPARAMC_2
description: "This CDS view provides information about outbound delivery orders without mandatory parameters in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: SCM-EWM-DLP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_ODONOPARAMC_2')/$value
semantic_en: "This CDS view provides information about outbound delivery orders without mandatory parameters in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "ODO Without Mandatory Parameters - Cube — CDS view giao diện dựa trên P_EWM_ODONoParam_2."
keywords:
  - "odo"
  - "without"
  - "mandatory"
  - "parameters"
  - "cube"
  - "warehouse"
  - "outbound"
  - "delivery"
  - "order"
  - "item"
tags:
  - SCM
  - bo:companycode
  - component:SCM-EWM-DLP-2CL
  - delivery
  - interface-view
  - order
  - SCM-EWM
  - SCM-EWM-DLP
  - SCM-EWM-DLP-2CL
---
# I_EWM_ODONOPARAMC_2

**This CDS view provides information about outbound delivery orders without mandatory parameters in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-DLP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_ODONOPARAMC_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMWarehouse` | ✓ | |  |  | `CHAR(4)` | Warehouse Number/Warehouse Complex |
| `EWMOutboundDeliveryOrder` | ✓ | |  |  | `CHAR(35)` | Document Number |
| `EWMOutboundDeliveryOrderItem` | ✓ | |  |  | `NUMC(10)` | Item Number |
| `OutboundDeliveryOrderUUID` |  | |  |  | `RAW(16)` | Document ID |
| `OutboundDeliveryOrderItemUUID` |  | |  |  | `RAW(16)` | Item ID |
| `NumberOfOutbDelivOrdItems` |  | |  | `0` | `FLTP(16)` |  |
| `EWMOutboundDeliveryItem` |  | |  |  | `NUMC(10)` | Item Number |
| `EntitledToDisposeParty` |  | |  |  | `CHAR(10)` | Party Entitled to Dispose |
| `TimeZoneID` |  | |  |  | `CHAR(6)` | Time Zone |
| `EWMDeliveryDocumentCategory` |  | |  |  | `CHAR(3)` | Document Category |
| `EWMOutboundDeliveryOrderType` |  | |  |  | `CHAR(4)` | Document Type |
| `OutboundDeliveryOrderTypeName` |  | |  | `_OutboundDeliveryType._Text[1:Language = $parameters.P_Language].DeliveryTypeName` | `CHAR(40)` | Description |
| `EWMOutbDelivOrderItemCategory` |  | |  |  | `CHAR(3)` | Item Category |
| `EWMOutbDeliveryOrderItemType` |  | |  |  | `CHAR(4)` | Item Type |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `ShipToPartyName` |  | |  |  | `CHAR(40)` |  |
| `IsBusinessPurposeCompleted` |  | | `_BusinessPartner` | `IsBusinessPurposeCompleted` | `CHAR(1)` | Business Purpose Completed Flag |
| `Carrier` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `CarrierName` |  | |  |  | `CHAR(40)` |  |
| `WrhsTmznCreationDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WrhsTmZnCreationDate` |  | |  |  | `DATS(8)` | Date |
| `WrhsTmznCreationTime` |  | |  |  | `TIMS(6)` | Time |
| `WrhsTmznCreationYear` |  | |  | `cast (substring(cast(WrhsTmznCreationDateTime as abap.char( 17 )), 1, 4) as abap.numc( 4 ) )` | `NUMC(4)` |  |
| `WrhsTmznCreationMonth` |  | |  | `cast (substring(cast(WrhsTmznCreationDateTime as abap.char( 17 )), 1, 6) as abap.numc( 6 ) )` | `NUMC(6)` |  |
| `WrhsTmznCreationDay` |  | |  | `cast (substring(cast(WrhsTmznCreationDateTime as abap.char( 17 )), 1, 8) as abap.numc( 8 ) )` | `NUMC(8)` |  |
| `WrhsTmznCreationHour` |  | |  | `cast (substring(cast(WrhsTmznCreationDateTime as abap.char( 17 )), 9, 2) as abap.numc( 2 ) )` | `NUMC(2)` |  |
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
| `EWMMeansOfTransport` |  | |  |  | `CHAR(20)` | Means-of-Transport ID |
| `EWMRoute` |  | |  |  | `CHAR(10)` | Route Name (Identification) |
| `RouteSchedule` |  | |  |  | `CHAR(10)` | Departure Calendar/Route Schedule |
| `ShippingOffice` |  | |  |  | `CHAR(20)` | Location Number |
| `WarehouseLocation` |  | |  |  | `CHAR(20)` | Location Number |
| `WarehouseLocationRole` |  | |  |  | `CHAR(6)` | Partner Role |
| `PlannedPickingStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `PlannedPickingStatusName` |  | |  | `_PlannedPickingStatusName[1:Language = $parameters.P_Language].StatusName` | `CHAR(30)` | Individual Status of an Object |
| `GoodsIssueStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `GoodsIssueStatusName` |  | |  | `_GIStatusName[1:Language = $parameters.P_Language].StatusName` | `CHAR(30)` | Individual Status of an Object |
| `CompletionStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `CompletionStatusName` |  | |  | `_CompletionStatusName[1:Language = $parameters.P_Language].StatusName` | `CHAR(30)` | Individual Status of an Object |
| `PickingStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `PickingStatusName` |  | |  | `_PickingStatusName[1:Language = $parameters.P_Language].StatusName` | `CHAR(30)` | Individual Status of an Object |
| `OverallBlockStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `OverallBlockStatusName` |  | |  | `_BlockStatusName[1:Language = $parameters.P_Language].StatusName` | `CHAR(30)` | Individual Status of an Object |
| `TranspPlanBlockStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `TranspPlanBlockStatusName` |  | |  | `_TransPlanBlockStatusName[1:Language = $parameters.P_Language].StatusName` | `CHAR(30)` | Individual Status of an Object |
| `ItemInconsistencyBlkStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `ItemInconsistencyBlkStatusName` |  | |  | `_DelivStsHelperText[1:Language = $parameters.P_Language].StatusName` | `CHAR(30)` | Individual Status of an Object |
| `GoodsMovementBlockStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `GoodsMovementBlockStatusName` |  | |  | `_GoodsMovementBlockStatusName[1:Language = $parameters.P_Language].StatusName` | `CHAR(30)` | Individual Status of an Object |
| `UncheckedItemBlockStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `UncheckedItemBlockStatusName` |  | |  | `_UncheckedItemBlockStatusName[1:Language = $parameters.P_Language].StatusName` | `CHAR(30)` | Individual Status of an Object |
| `DeliveryCreationStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `DeliveryCreationStatusName` |  | |  | `_DeliveryCreationStatusName[1:Language = $parameters.P_Language].StatusName` | `CHAR(30)` | Individual Status of an Object |
| `TransitProcedureStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `TransitProcedureStatusName` |  | |  | `_TransitProcDelivStsHelperText[1:Language = $parameters.P_Language].StatusName` | `CHAR(30)` | Individual Status of an Object |
| `LoadingStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `LoadingStatusName` |  | |  | `_DeliveryLoadingStatusName[1:Language = $parameters.P_Language].StatusName` | `CHAR(30)` | Individual Status of an Object |
| `PickingAndDistributionStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `PickingAndDistrStatusName` |  | |  | `_PickingDistDelivStsHelperText[1:Language = $parameters.P_Language].StatusName` | `CHAR(30)` | Individual Status of an Object |
| `WarehouseActivityStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `WarehouseActivityStatusName` |  | |  | `_WarehouseActivityStatusName[1:Language = $parameters.P_Language].StatusName` | `CHAR(30)` | Individual Status of an Object |
| `GlobalTradeServicesCheckStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `GlobalTrdServicesCheckStsName` |  | |  | `_GlobalTradeServiceStatusName[1:Language = $parameters.P_Language].StatusName` | `CHAR(30)` | Individual Status of an Object |
| `TransportationUnitAssgmtStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `TranspUnitAssgmtStatusName` |  | |  | `_TransportUnitAssgmtStsName[1:Language = $parameters.P_Language].StatusName` | `CHAR(30)` | Individual Status of an Object |
| `ValuationQtyAssignmentStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `ValuationQtyAssgmtStatusName` |  | |  | `_ValuationQtyAssgmtStatusName[1:Language = $parameters.P_Language].StatusName` | `CHAR(30)` | Individual Status of an Object |
| `ValueAddedServiceOrderStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `ValueAddedServiceOrdStatusName` |  | |  | `_ValueAddedDelivStsHelperText[1:Language = $parameters.P_Language].StatusName` | `CHAR(30)` | Individual Status of an Object |
| `EWMOverallDeliveryProgress` |  | |  |  | `CHAR(3)` |  |
| `ProductQuantity` |  | |  |  | `QUAN(31)` | Quantity |
| `QuantityUnit` |  | |  |  | `UNIT(3)` | Unit of Measure |
| `ItemVolume` |  | |  | `unit_conversion( quantity =>_GrossVolume.Quantity, source_unit => _GrossVolume.UnitOfMeasure, target_unit => OutboundDeliveryOrder._whseControl.DisplayVolumeUnit, error_handling => 'SET_TO_NULL' )` | `QUAN(31)` |  |
| `DisplayVolumeUnit` |  | |  |  | `UNIT(3)` | Volume Unit |
| `ItemGrossWeight` |  | |  | `unit_conversion( quantity => _GrossMass.Quantity, source_unit => _GrossMass.UnitOfMeasure, target_unit => OutboundDeliveryOrder._whseControl.DisplayWeightUnit, error_handling => 'SET_TO_NULL' )` | `QUAN(31)` |  |
| `ItemNetWeight` |  | |  | `unit_conversion( quantity => _NetMass.Quantity, source_unit => _NetMass.UnitOfMeasure, target_unit => OutboundDeliveryOrder._whseControl.DisplayWeightUnit, error_handling => 'SET_TO_NULL' )` | `QUAN(31)` |  |
| `DisplayWeightUnit` |  | |  |  | `UNIT(3)` | Weight Unit |
| `WhsePlndGIRnddTo30MinsDateTime` |  | |  | `case when WrhsTimeZonePlndGImins < '30' then cast(cast(cast(concat( substring(cast(WrhsTmznPlndGIStrtDateTime as abap.char( 17 )), 1, 10), '0000' ) as abap.numc( 15 ) ) as abap.dec(15) ) as tzntstmps preserving type ) else cast(cast(cast(concat( substring(cast(WrhsTmznPlndGIStrtDateTime as abap.char( 17 )), 1, 10), '3000' ) as abap.numc( 15 ) ) as abap.dec(15) ) as tzntstmps preserving type ) end` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WhsePlndGIRnddTo60MinsDateTime` |  | |  | `cast(cast(cast(concat( substring(cast(WrhsTmznPlndGIStrtDateTime as abap.char( 17 )), 1, 10), '0000' ) as abap.numc( 15 )) as abap.dec(15) ) as tzntstmps preserving type )` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WrhsTimeZonePlannedGIDate` |  | |  |  | `DATS(8)` | Date |
| `WrhsTimeZonePlannedGITime` |  | |  |  | `TIMS(6)` | Time |
| `WrhsTmznPlndGIStrtDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WrhsTimeZnPlndGIStrtYear` |  | |  | `cast (substring(cast(WrhsTmznPlndGIStrtDateTime as abap.char( 17 )), 1, 4) as abap.numc( 4 ) )` | `NUMC(4)` |  |
| `WrhsTimeZnPlndGIStrtMonth` |  | |  | `cast (substring(cast(WrhsTmznPlndGIStrtDateTime as abap.char( 17 )), 1, 6) as abap.numc( 6 ) )` | `NUMC(6)` |  |
| `WrhsTimeZnPlndGIStrtDay` |  | |  | `cast (substring(cast(WrhsTmznPlndGIStrtDateTime as abap.char( 17 )), 1, 8) as abap.numc( 8 ) )` | `NUMC(8)` |  |
| `WrhsTimeZnPlndGIStrtHour` |  | |  | `cast (substring(cast(WrhsTmznPlndGIStrtDateTime as abap.char( 17 )), 9, 2) as abap.numc( 2 ) )` | `NUMC(2)` |  |
| `WrhsTmznActlGIStrtDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `EWMWhseTmznActlGIEndDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WrhsTimeZoneActualGIDate` |  | |  |  | `DATS(8)` | Date |
| `WrhsTimeZoneActualGITime` |  | |  |  | `TIMS(6)` | Time |
| `EWMActualGIDateIsToday` |  | |  | `case when WrhsTimeZoneActualGIDate = EWMWarehouseCurrentDate then cast ('X' as ewm_de_actualgidateistoday) else cast ('' as ewm_de_actualgidateistoday )end` | `CHAR(1)` | Actual Goods Issue is Today (Outbound Delivery Order) |
| `EWMPlannedGIDateIsToday` |  | |  | `case when WrhsTimeZonePlannedGIDate = EWMWarehouseCurrentDate then cast ('X' as ewm_de_plannedgidateistoday ) else cast ('' as ewm_de_plannedgidateistoday )end` | `CHAR(1)` | Plnd Goods Issue Is Today (Outbound Delivery Order) |
| `EWMPlndOrActGIIsToday` |  | |  | `case when WrhsTimeZonePlannedGIDate = EWMWarehouseCurrentDate or WrhsTimeZoneActualGIDate = EWMWarehouseCurrentDate then cast ('X' as ewm_de_plndoractgiistoday ) else cast('' as ewm_de_plndoractgiistoday) end` | `CHAR(1)` | Plnd or Actual GI Date is Today (Outbound Delivery Order) |
| `WhseActlGIRnddTo30MinsDateTime` |  | |  | `case when WrhsTimeZoneActualGImins < '30' then cast(cast(cast(concat( substring(cast(WrhsTmznActlGIStrtDateTime as abap.char( 17 )), 1, 10), '0000' ) as abap.numc( 15 ) ) as abap.dec(15) ) as tzntstmps preserving type ) else cast(cast(cast(concat( substring(cast(WrhsTmznActlGIStrtDateTime as abap.char( 17 )), 1, 10), '3000' ) as abap.numc( 15 ) ) as abap.dec(15) ) as tzntstmps preserving type ) end` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WhseActlGIRnddTo60MinsDateTime` |  | |  | `cast(cast(cast(concat( substring(cast(WrhsTmznActlGIStrtDateTime as abap.char( 17 )), 1, 10), '0000' ) as abap.numc( 15 )) as abap.dec(15) ) as tzntstmps preserving type )` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WrhsTmznActlGIStrtYear` |  | |  | `cast (substring(cast(WrhsTmznActlGIStrtDateTime as abap.char( 17 )), 1, 4) as abap.numc( 4 ) )` | `NUMC(4)` |  |
| `WrhsTmznActlGIStrtMonth` |  | |  | `cast (substring(cast(WrhsTmznActlGIStrtDateTime as abap.char( 17 )), 1, 6) as abap.numc( 6 ) )` | `NUMC(6)` |  |
| `WrhsTmznActlGIStrtDay` |  | |  | `cast (substring(cast(WrhsTmznActlGIStrtDateTime as abap.char( 17 )), 1, 8) as abap.numc( 8 ) )` | `NUMC(8)` |  |
| `WrhsTmznActlGIStrtHour` |  | |  | `cast (substring(cast(WrhsTmznActlGIStrtDateTime as abap.char( 17 )), 9, 2) as abap.numc( 2 ) )` | `NUMC(2)` |  |
| `GoodsIssueDelayInSeconds` |  | |  |  | `INT4(10)` |  |
| `OutbDelivOrdItemGIOverdueHours` |  | |  | `case when GoodsIssueDelayInSeconds > 0 then div( GoodsIssueDelayInSeconds , 3600 ) else 0 end` | `INT4(10)` |  |
| `ODOIntCycDurationInMinutes` |  | |  | `cast( div( tstmp_seconds_between(WrhsTmznCreationDateTime , EWMWhseTmznActlGIEndDateTime, 'NULL' ), 60 ) as ewm_de_lifecycledurationinmins )` | `FLTP(16)` | Average Life Cycle Time of ODO Item (Minute) |
| `EWMPlndGoodsIssueDateIsInPast` |  | |  |  | `CHAR(1)` | Planned GI Time Is in Past (Oubound Delivery Order) |
| `EWMActGoodsIssueDateIsOnTime` |  | |  |  | `CHAR(1)` | Actual Goods Issue Is on Time (Outbound Delivery Order) |
| `EWMDeliveryAdjustmentQuantity` |  | |  |  | `QUAN(31)` |  |
| `EWMQuantityHasAdjustment` |  | |  |  | `CHAR(1)` | Delivery Quantity Has Adjustments |
| `EWMWarehouseCurrentDate` |  | |  |  | `DATS(8)` |  |
| `_Warehouse` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_ItemCat` | | ✓ | | | | |
| `_DeliveryItemType` | | ✓ | | | | |
| `_WarehouseProcessType` | | ✓ | | | | |
| `_ShippingCondition` | | ✓ | | | | |
| `_DeliveryCategory` | | ✓ | | | | |
| `_DeliveryType` | | ✓ | | | | |
| `_OutboundDeliveryType` | | ✓ | | | | |
| `_GIStatus` | | ✓ | | | | |
| `_PlannedPickingStatus` | | ✓ | | | | |
| `_CompletionStatus` | | ✓ | | | | |
| `_PickingStatus` | | ✓ | | | | |
| `_OverallBlockStatus` | | ✓ | | | | |
| `_TransPlanBlockStatus` | | ✓ | | | | |
| `_ItemInconsistencyBlkStatus` | | ✓ | | | | |
| `_GoodsMovementBlockStatus` | | ✓ | | | | |
| `_UncheckedItemBlockStatus` | | ✓ | | | | |
| `_DeliveryCreationStatus` | | ✓ | | | | |
| `_TransitProcedureStatus` | | ✓ | | | | |
| `_LoadingStatus` | | ✓ | | | | |
| `_PickingAndDistributionStatus` | | ✓ | | | | |
| `_WarehouseActivityStatus` | | ✓ | | | | |
| `_GlobalTradeServiceStatus` | | ✓ | | | | |
| `_TransportUnitAssgmtSts` | | ✓ | | | | |
| `_ValuationQtyAssgmtStatus` | | ✓ | | | | |
| `_ValueAddedServiceOrderStatus` | | ✓ | | | | |
| `_PlannedPickingStatusName` | | ✓ | | | | |
| `_CompletionStatusName` | | ✓ | | | | |
| `_GIStatusName` | | ✓ | | | | |
| `_PickingStatusName` | | ✓ | | | | |
| `_BlockStatusName` | | ✓ | | | | |
| `_TransPlanBlockStatusName` | | ✓ | | | | |
| `_DelivStsHelperText` | | ✓ | | | | |
| `_GoodsMovementBlockStatusName` | | ✓ | | | | |
| `_UncheckedItemBlockStatusName` | | ✓ | | | | |
| `_DeliveryCreationStatusName` | | ✓ | | | | |
| `_TransitProcDelivStsHelperText` | | ✓ | | | | |
| `_DeliveryLoadingStatusName` | | ✓ | | | | |
| `_PickingDistDelivStsHelperText` | | ✓ | | | | |
| `_WarehouseActivityStatusName` | | ✓ | | | | |
| `_GlobalTradeServiceStatusName` | | ✓ | | | | |
| `_TransportUnitAssgmtStsName` | | ✓ | | | | |
| `_ValuationQtyAssgmtStatusName` | | ✓ | | | | |
| `_ValueAddedDelivStsHelperText` | | ✓ | | | | |
| `_OutboundDeliveryOrderHeader` | | ✓ | | | | |
| `_MeansOfTransportType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_GrossVolume` | `I_EWM_OutbDelivOrdGrossVolume` | [0..1] |
| `_GrossMass` | `I_EWM_OutbDelivOrdGrossMass` | [0..1] |
| `_NetMass` | `I_EWM_OutbDelivOrdNetMass` | [0..1] |
| `_Warehouse` | `I_EWM_WarehouseNumber_2` | [0..1] |
| `_Product` | `I_Product` | [1] |
| `_ItemCat` | `I_EWM_DeliveryItemCategory_2` | [0..1] |
| `_DeliveryItemType` | `I_EWM_DeliveryItemType_2` | [0..1] |
| `_WarehouseProcessType` | `I_EWM_WrhsProcType_2` | [0..1] |
| `_ShippingCondition` | `I_ShippingCondition` | [0..1] |
| `_DeliveryCategory` | `I_EWM_DeliveryCategory_2` | [0..1] |
| `_DeliveryType` | `I_EWM_DeliveryType_2` | [0..1] |
| `_OutboundDeliveryType` | `I_EWM_OutBoundDelivOrderType_2` | [0..1] |
| `_GIStatus` | `I_EWM_WhseReqStatusValue` | [0..1] |
| `_PlannedPickingStatus` | `I_EWM_WhseReqStatusValue` | [0..1] |
| `_CompletionStatus` | `I_EWM_WhseReqStatusValue` | [0..1] |
| `_PickingStatus` | `I_EWM_WhseReqStatusValue` | [0..1] |
| `_OverallBlockStatus` | `I_EWM_WhseReqStatusValue` | [0..1] |
| `_TransPlanBlockStatus` | `I_EWM_WhseReqStatusValue` | [0..1] |
| `_ItemInconsistencyBlkStatus` | `I_EWM_WhseReqStatusValue` | [0..1] |
| `_GoodsMovementBlockStatus` | `I_EWM_WhseReqStatusValue` | [0..1] |
| `_UncheckedItemBlockStatus` | `I_EWM_WhseReqStatusValue` | [0..1] |
| `_DeliveryCreationStatus` | `I_EWM_WhseReqStatusValue` | [0..1] |
| `_TransitProcedureStatus` | `I_EWM_WhseReqStatusValue` | [0..1] |
| `_LoadingStatus` | `I_EWM_WhseReqStatusValue` | [0..1] |
| `_PickingAndDistributionStatus` | `I_EWM_WhseReqStatusValue` | [0..1] |
| `_WarehouseActivityStatus` | `I_EWM_WhseReqStatusValue` | [0..1] |
| `_GlobalTradeServiceStatus` | `I_EWM_WhseReqStatusValue` | [0..1] |
| `_TransportUnitAssgmtSts` | `I_EWM_WhseReqStatusValue` | [0..1] |
| `_ValuationQtyAssgmtStatus` | `I_EWM_WhseReqStatusValue` | [0..1] |
| `_ValueAddedServiceOrderStatus` | `I_EWM_WhseReqStatusValue` | [0..1] |
| `_PlannedPickingStatusName` | `I_EWM_DelivStsHelperText` | [0..*] |
| `_CompletionStatusName` | `I_EWM_DelivStsHelperText` | [0..*] |
| `_GIStatusName` | `I_EWM_DelivStsHelperText` | [0..*] |
| `_PickingStatusName` | `I_EWM_DelivStsHelperText` | [0..*] |
| `_BlockStatusName` | `I_EWM_DelivStsHelperText` | [0..*] |
| `_TransPlanBlockStatusName` | `I_EWM_DelivStsHelperText` | [0..*] |
| `_DelivStsHelperText` | `I_EWM_DelivStsHelperText` | [0..*] |
| `_GoodsMovementBlockStatusName` | `I_EWM_DelivStsHelperText` | [0..*] |
| `_UncheckedItemBlockStatusName` | `I_EWM_DelivStsHelperText` | [0..*] |
| `_DeliveryCreationStatusName` | `I_EWM_DelivStsHelperText` | [0..*] |
| `_TransitProcDelivStsHelperText` | `I_EWM_DelivStsHelperText` | [0..*] |
| `_DeliveryLoadingStatusName` | `I_EWM_DelivStsHelperText` | [0..*] |
| `_PickingDistDelivStsHelperText` | `I_EWM_DelivStsHelperText` | [0..*] |
| `_WarehouseActivityStatusName` | `I_EWM_DelivStsHelperText` | [0..*] |
| `_GlobalTradeServiceStatusName` | `I_EWM_DelivStsHelperText` | [0..*] |
| `_TransportUnitAssgmtStsName` | `I_EWM_DelivStsHelperText` | [0..*] |
| `_ValuationQtyAssgmtStatusName` | `I_EWM_DelivStsHelperText` | [0..*] |
| `_ValueAddedDelivStsHelperText` | `I_EWM_DelivStsHelperText` | [0..*] |
| `_BusinessPartner` | `I_EWM_BusinessPartner` | [0..1] |
| `_Extension` | `E_EWM_OutbDelivOrdItem` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_ODONOPARAMC_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_ODONOPARAMC_2')/$value)*

```abap
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@EndUserText.label: 'ODO Without Mandatory Parameters - Cube'
@Analytics.internalName:#LOCAL
@ObjectModel.compositionRoot: true
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.sizeCategory: #XL

@ObjectModel.modelingPattern:           #ANALYTICAL_CUBE
@ObjectModel.supportedCapabilities:  [  #ANALYTICAL_PROVIDER,
                                        #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE ]
@VDM.viewType:#COMPOSITE
@Analytics: { dataCategory: #CUBE }
@Metadata.ignorePropagatedAnnotations:true
@Metadata.allowExtensions:true
define view entity I_EWM_ODONoParamC_2
  with parameters
    @Environment.systemField: #SYSTEM_LANGUAGE
    @Consumption.hidden
    P_Language : /scwm/lang
  as select from P_EWM_ODONoParam_2 as OutboundDeliveryOrder
  association [0..1] to I_EWM_OutbDelivOrdGrossVolume  as _GrossVolume                   on  $projection.OutboundDeliveryOrderUUID     = _GrossVolume.OutboundDeliveryOrderUUID
                                                                                         and $projection.OutboundDeliveryOrderItemUUID = _GrossVolume.OutboundDeliveryOrderItemUUID
                                                                                         and _GrossVolume.EWMDeliveryDocumentCategory  = 'PDO'
                                                                                         and _GrossVolume.EWMDeliveryQuantityCategory  = 'GROSS'
                                                                                         and _GrossVolume.EWMDeliveryQuantityRole      = 'VOLUME'
  association [0..1] to I_EWM_OutbDelivOrdGrossMass    as _GrossMass                     on  $projection.OutboundDeliveryOrderUUID     = _GrossMass.OutboundDeliveryOrderUUID
                                                                                         and $projection.OutboundDeliveryOrderItemUUID = _GrossMass.OutboundDeliveryOrderItemUUID
                                                                                         and _GrossMass.EWMDeliveryDocumentCategory    = 'PDO'
                                                                                         and _GrossMass.EWMDeliveryQuantityCategory    = 'GROSS'
                                                                                         and _GrossMass.EWMDeliveryQuantityRole        = 'MASS'
  association [0..1] to I_EWM_OutbDelivOrdNetMass      as _NetMass                       on  $projection.OutboundDeliveryOrderUUID     = _NetMass.OutboundDeliveryOrderUUID
                                                                                         and $projection.OutboundDeliveryOrderItemUUID = _NetMass.OutboundDeliveryOrderItemUUID
                                                                                         and _NetMass.EWMDeliveryDocumentCategory      = 'PDO'
                                                                                         and _NetMass.EWMDeliveryQuantityCategory      = 'NET'
                                                                                         and _NetMass.EWMDeliveryQuantityRole          = 'MASS'
  association [0..1] to I_EWM_WarehouseNumber_2        as _Warehouse                     on  $projection.EWMWarehouse = _Warehouse.EWMWarehouse
  association [1]    to I_Product                      as _Product                       on  $projection.Product = _Product.Product
  association [0..1] to I_EWM_DeliveryItemCategory_2   as _ItemCat                       on  $projection.EWMOutbDelivOrderItemCategory = _ItemCat.EWMInboundDeliveryItemCategory
  association [0..1] to I_EWM_DeliveryItemType_2       as _DeliveryItemType              on  $projection.EWMDeliveryDocumentCategory  = _DeliveryItemType.EWMDeliveryDocumentCategory
                                                                                         and $projection.EWMOutbDeliveryOrderItemType = _DeliveryItemType.DeliveryItemType
  association [0..1] to I_EWM_WrhsProcType_2           as _WarehouseProcessType          on  $projection.WarehouseProcessType = _WarehouseProcessType.WarehouseProcessType
                                                                                         and $projection.EWMWarehouse         = _WarehouseProcessType.EWMWarehouse
  association [0..1] to I_ShippingCondition            as _ShippingCondition             on  $projection.ShippingCondition = _ShippingCondition.ShippingCondition

  association [0..1] to I_EWM_DeliveryCategory_2       as _DeliveryCategory              on  $projection.EWMDeliveryDocumentCategory = _DeliveryCategory.EWMDeliveryDocumentCategory
  association [0..1] to I_EWM_DeliveryType_2           as _DeliveryType                  on  $projection.EWMOutboundDeliveryOrderType = _DeliveryType.EWMDeliveryDocumentType
                                                                                         and $projection.EWMDeliveryDocumentCategory  = _DeliveryType.EWMDeliveryDocumentCategory
  association [0..1] to I_EWM_OutBoundDelivOrderType_2 as _OutboundDeliveryType          on  $projection.EWMOutboundDeliveryOrderType = _OutboundDeliveryType.EWMDeliveryDocumentType
                                                                                         and $projection.EWMDeliveryDocumentCategory  = _OutboundDeliveryType.EWMDeliveryDocumentCategory
                                                                                         
  association [0..1] to I_EWM_WhseReqStatusValue       as _GIStatus                      on  $projection.GoodsIssueStatus             = _GIStatus.EWMWarehouseRequestStatus
                                                                                         and _GIStatus.EWMWarehouseRequestStatusType = 'DGI'
  association [0..1] to I_EWM_WhseReqStatusValue       as _PlannedPickingStatus          on  $projection.PlannedPickingStatus             = _PlannedPickingStatus.EWMWarehouseRequestStatus
                                                                                         and _PlannedPickingStatus.EWMWarehouseRequestStatusType = 'DER'
  association [0..1] to I_EWM_WhseReqStatusValue       as _CompletionStatus              on  $projection.CompletionStatus             = _CompletionStatus.EWMWarehouseRequestStatus
                                                                                         and _CompletionStatus.EWMWarehouseRequestStatusType = 'DCO'
  association [0..1] to I_EWM_WhseReqStatusValue       as _PickingStatus                 on  $projection.PickingStatus             = _PickingStatus.EWMWarehouseRequestStatus
                                                                                         and _PickingStatus.EWMWarehouseRequestStatusType = 'DPI'
  association [0..1] to I_EWM_WhseReqStatusValue       as _OverallBlockStatus            on  $projection.OverallBlockStatus      = _OverallBlockStatus.EWMWarehouseRequestStatus
                                                                                         and _OverallBlockStatus.EWMWarehouseRequestStatusType = 'DBO'
  association [0..1] to I_EWM_WhseReqStatusValue       as _TransPlanBlockStatus          on  $projection.TranspPlanBlockStatus            = _TransPlanBlockStatus.EWMWarehouseRequestStatus
                                                                                         and _TransPlanBlockStatus.EWMWarehouseRequestStatusType = 'DBT'
  association [0..1] to I_EWM_WhseReqStatusValue       as _ItemInconsistencyBlkStatus    on  $projection.ItemInconsistencyBlkStatus = _ItemInconsistencyBlkStatus.EWMWarehouseRequestStatus
                                                                                         and _ItemInconsistencyBlkStatus.EWMWarehouseRequestStatusType = 'DBD'
  association [0..1] to I_EWM_WhseReqStatusValue       as _GoodsMovementBlockStatus      on  $projection.GoodsMovementBlockStatus             = _GoodsMovementBlockStatus.EWMWarehouseRequestStatus
                                                                                         and _GoodsMovementBlockStatus.EWMWarehouseRequestStatusType = 'DWG'
  association [0..1] to I_EWM_WhseReqStatusValue       as _UncheckedItemBlockStatus      on  $projection.UncheckedItemBlockStatus             = _UncheckedItemBlockStatus.EWMWarehouseRequestStatus
                                                                                         and _UncheckedItemBlockStatus.EWMWarehouseRequestStatusType = 'DBP'
  association [0..1] to I_EWM_WhseReqStatusValue       as _DeliveryCreationStatus        on  $projection.DeliveryCreationStatus             = _DeliveryCreationStatus.EWMWarehouseRequestStatus
                                                                                         and _DeliveryCreationStatus.EWMWarehouseRequestStatusType = 'DDC'
  association [0..1] to I_EWM_WhseReqStatusValue       as _TransitProcedureStatus        on  $projection.TransitProcedureStatus                = _TransitProcedureStatus.EWMWarehouseRequestStatus
                                                                                         and _TransitProcedureStatus.EWMWarehouseRequestStatusType = 'DWN'
  association [0..1] to I_EWM_WhseReqStatusValue       as _LoadingStatus                 on  $projection.LoadingStatus                     = _LoadingStatus.EWMWarehouseRequestStatus
                                                                                         and _LoadingStatus.EWMWarehouseRequestStatusType = 'DLO'
  association [0..1] to I_EWM_WhseReqStatusValue       as _PickingAndDistributionStatus  on  $projection.PickingAndDistributionStatus          = _PickingAndDistributionStatus.EWMWarehouseRequestStatus
                                                                                         and _PickingAndDistributionStatus.EWMWarehouseRequestStatusType = 'DPD'
  association [0..1] to I_EWM_WhseReqStatusValue       as _WarehouseActivityStatus       on  $projection.WarehouseActivityStatus             = _WarehouseActivityStatus.EWMWarehouseRequestStatus
                                                                                         and _WarehouseActivityStatus.EWMWarehouseRequestStatusType = 'DWA'
  association [0..1] to I_EWM_WhseReqStatusValue       as _GlobalTradeServiceStatus      on  $projection.GlobalTradeServicesCheckStatus       = _GlobalTradeServiceStatus.EWMWarehouseRequestStatus
                                                                                         and _GlobalTradeServiceStatus.EWMWarehouseRequestStatusType = 'DGT'
  association [0..1] to I_EWM_WhseReqStatusValue       as _TransportUnitAssgmtSts        on  $projection.TransportationUnitAssgmtStatus     = _TransportUnitAssgmtSts.EWMWarehouseRequestStatus
                                                                                         and _TransportUnitAssgmtSts.EWMWarehouseRequestStatusType = 'DTU'
  association [0..1] to I_EWM_WhseReqStatusValue       as _ValuationQtyAssgmtStatus      on  $projection.ValuationQtyAssignmentStatus         = _ValuationQtyAssgmtStatus.EWMWarehouseRequestStatus
                                                                                         and _ValuationQtyAssgmtStatus.EWMWarehouseRequestStatusType = 'DVQ'
  association [0..1] to I_EWM_WhseReqStatusValue       as _ValueAddedServiceOrderStatus  on  $projection.ValueAddedServiceOrderStatus         = _ValueAddedServiceOrderStatus.EWMWarehouseRequestStatus
                                                                                         and _ValueAddedServiceOrderStatus.EWMWarehouseRequestStatusType = 'DWV'
                                                                                                                                                                                  
  --Planned Picking Status, GI Status, Completion Status are from odoitem, so text is not joined
  association [0..*] to I_EWM_DelivStsHelperText       as _PlannedPickingStatusName      on  $projection.PlannedPickingStatus             = _PlannedPickingStatusName.DeliveryStatus
                                                                                         and _PlannedPickingStatusName.DeliveryStatusType = 'DER'
  association [0..*] to I_EWM_DelivStsHelperText       as _CompletionStatusName          on  $projection.CompletionStatus             = _CompletionStatusName.DeliveryStatus
                                                                                         and _CompletionStatusName.DeliveryStatusType = 'DCO'
  association [0..*] to I_EWM_DelivStsHelperText       as _GIStatusName                  on  $projection.GoodsIssueStatus     = _GIStatusName.DeliveryStatus
                                                                                         and _GIStatusName.DeliveryStatusType = 'DGI'
  --Other status text
  association [0..*] to I_EWM_DelivStsHelperText       as _PickingStatusName             on  $projection.PickingStatus             = _PickingStatusName.DeliveryStatus
                                                                                         and _PickingStatusName.DeliveryStatusType = 'DPI'
  association [0..*] to I_EWM_DelivStsHelperText       as _BlockStatusName               on  $projection.OverallBlockStatus      = _BlockStatusName.DeliveryStatus
                                                                                         and _BlockStatusName.DeliveryStatusType = 'DBO'
  association [0..*] to I_EWM_DelivStsHelperText       as _TransPlanBlockStatusName      on  $projection.TranspPlanBlockStatus            = _TransPlanBlockStatusName.DeliveryStatus
                                                                                         and _TransPlanBlockStatusName.DeliveryStatusType = 'DBT'
  association [0..*] to I_EWM_DelivStsHelperText       as _DelivStsHelperText            on  $projection.ItemInconsistencyBlkStatus = _DelivStsHelperText.DeliveryStatus
                                                                                         and _DelivStsHelperText.DeliveryStatusType = 'DBD'
  association [0..*] to I_EWM_DelivStsHelperText       as _GoodsMovementBlockStatusName  on  $projection.GoodsMovementBlockStatus             = _GoodsMovementBlockStatusName.DeliveryStatus
                                                                                         and _GoodsMovementBlockStatusName.DeliveryStatusType = 'DWG'
  association [0..*] to I_EWM_DelivStsHelperText       as _UncheckedItemBlockStatusName  on  $projection.UncheckedItemBlockStatus             = _UncheckedItemBlockStatusName.DeliveryStatus
                                                                                         and _UncheckedItemBlockStatusName.DeliveryStatusType = 'DBP'
  association [0..*] to I_EWM_DelivStsHelperText       as _DeliveryCreationStatusName    on  $projection.DeliveryCreationStatus             = _DeliveryCreationStatusName.DeliveryStatus
                                                                                         and _DeliveryCreationStatusName.DeliveryStatusType = 'DDC'
  association [0..*] to I_EWM_DelivStsHelperText       as _TransitProcDelivStsHelperText on  $projection.TransitProcedureStatus                = _TransitProcDelivStsHelperText.DeliveryStatus
                                                                                         and _TransitProcDelivStsHelperText.DeliveryStatusType = 'DWN'
  association [0..*] to I_EWM_DelivStsHelperText       as _DeliveryLoadingStatusName     on  $projection.LoadingStatus                     = _DeliveryLoadingStatusName.DeliveryStatus
                                                                                         and _DeliveryLoadingStatusName.DeliveryStatusType = 'DLO'
  association [0..*] to I_EWM_DelivStsHelperText       as _PickingDistDelivStsHelperText on  $projection.PickingAndDistributionStatus          = _PickingDistDelivStsHelperText.DeliveryStatus
                                                                                         and _PickingDistDelivStsHelperText.DeliveryStatusType = 'DPD'
  association [0..*] to I_EWM_DelivStsHelperText       as _WarehouseActivityStatusName   on  $projection.WarehouseActivityStatus             = _WarehouseActivityStatusName.DeliveryStatus
                                                                                         and _WarehouseActivityStatusName.DeliveryStatusType = 'DWA'
  association [0..*] to I_EWM_DelivStsHelperText       as _GlobalTradeServiceStatusName  on  $projection.GlobalTradeServicesCheckStatus       = _GlobalTradeServiceStatusName.DeliveryStatus
                                                                                         and _GlobalTradeServiceStatusName.DeliveryStatusType = 'DGT'
  association [0..*] to I_EWM_DelivStsHelperText       as _TransportUnitAssgmtStsName    on  $projection.TransportationUnitAssgmtStatus     = _TransportUnitAssgmtStsName.DeliveryStatus
                                                                                         and _TransportUnitAssgmtStsName.DeliveryStatusType = 'DTU'
  association [0..*] to I_EWM_DelivStsHelperText       as _ValuationQtyAssgmtStatusName  on  $projection.ValuationQtyAssignmentStatus         = _ValuationQtyAssgmtStatusName.DeliveryStatus
                                                                                         and _ValuationQtyAssgmtStatusName.DeliveryStatusType = 'DVQ'
  association [0..*] to I_EWM_DelivStsHelperText       as _ValueAddedDelivStsHelperText  on  $projection.ValueAddedServiceOrderStatus         = _ValueAddedDelivStsHelperText.DeliveryStatus
                                                                                         and _ValueAddedDelivStsHelperText.DeliveryStatusType = 'DWV'

  association [0..1] to I_EWM_BusinessPartner          as _BusinessPartner               on  $projection.ShipToParty = _BusinessPartner.BusinessPartner


  association [1..1] to E_EWM_OutbDelivOrdItem         as _Extension                     on  $projection.OutboundDeliveryOrderUUID     = _Extension.OutboundDeliveryOrderUUID
                                                                                         and $projection.OutboundDeliveryOrderItemUUID = _Extension.OutboundDeliveryOrderItemUUID
{
      @EndUserText.label: 'Warehouse'
      @Consumption.filter: {
        selectionType: #RANGE,
        multipleSelections: true,
        mandatory: false
      }
      @ObjectModel.foreignKey.association: '_Warehouse'
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
      //replace COUNT by SUM for sake of performance
      @DefaultAggregation: #SUM
      1.0                                                                                                                                                                              as NumberOfOutbDelivOrdItems,
      _OutboundDeliveryOrderHeader,

      EWMOutboundDeliveryItem,

      _Warehouse,
      EntitledToDisposeParty,
      TimeZoneID,

      @ObjectModel.foreignKey.association: '_DeliveryCategory'
      EWMDeliveryDocumentCategory,
      _DeliveryCategory,

      @ObjectModel.foreignKey.association: '_OutboundDeliveryType'
      EWMOutboundDeliveryOrderType,
      _OutboundDeliveryType,

      @Semantics.text: true
      _OutboundDeliveryType._Text[1:Language = $parameters.P_Language].DeliveryTypeName                                                                                                as OutboundDeliveryOrderTypeName,
      _DeliveryType,

      @ObjectModel.foreignKey.association: '_ItemCat'
      EWMOutbDelivOrderItemCategory,
      _ItemCat,

      @ObjectModel.foreignKey.association: '_DeliveryItemType'
      EWMOutbDeliveryOrderItemType,
      _DeliveryItemType,

      ShipToParty,
      ShipToPartyName,

      @Semantics.booleanIndicator
      _BusinessPartner.IsBusinessPurposeCompleted,
      Carrier,
      CarrierName,
      //_OutboundDeliveryOrderHeader,
      WrhsTmznCreationDateTime,
      WrhsTmZnCreationDate,
      WrhsTmznCreationTime,
      cast (substring(cast(WrhsTmznCreationDateTime as abap.char( 17 )), 1, 4) as abap.numc( 4 ) )                                                                                     as WrhsTmznCreationYear,
      cast (substring(cast(WrhsTmznCreationDateTime as abap.char( 17 )), 1, 6) as abap.numc( 6 ) )                                                                                     as WrhsTmznCreationMonth,
      cast (substring(cast(WrhsTmznCreationDateTime as abap.char( 17 )), 1, 8) as abap.numc( 8 ) )                                                                                     as WrhsTmznCreationDay,
      cast (substring(cast(WrhsTmznCreationDateTime as abap.char( 17 )), 9, 2) as abap.numc( 2 ) )                                                                                     as WrhsTmznCreationHour,

      @ObjectModel.foreignKey.association: '_Product'
      Product,
      _Product,

      Batch,
      RequirementSegment,
      StockSegment,
      WarehouseDoor,
      StagingArea,
      StagingAreaGroup,

      @ObjectModel.foreignKey.association: '_WarehouseProcessType'
      WarehouseProcessType,
      _WarehouseProcessType,

      @ObjectModel.foreignKey.association: '_ShippingCondition'
      ShippingCondition,
      _ShippingCondition,
      
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'EWMWave'
      Wave,
      EWMWave,
      
      @Semantics.booleanIndicator
      ItemWaveAssignmentIsIncomplete,

      @ObjectModel.foreignKey.association: '_MeansOfTransportType'
      EWMMeansOfTransportType,
      _MeansOfTransportType,

      EWMMeansOfTransport,
      EWMRoute,
      RouteSchedule,

      //      _ShippingOffice, --is transaction table
      OutboundDeliveryOrder._ShippingOffice.ShippingOffice,
      //      _WarehouseLocation,
      OutboundDeliveryOrder._WarehouseLocation.WarehouseLocation, //to avoid error in DCL I_EWM_OutboundDelivOrdC
      OutboundDeliveryOrder._WarehouseLocation.WarehouseLocationRole, //to avoid error in DCL I_EWM_OutboundDelivOrdC

      //@ObjectModel.text.association: '_PlannedPickingStatusName'
      @ObjectModel.foreignKey.association: '_PlannedPickingStatus'
      PlannedPickingStatus,
      _PlannedPickingStatusName[1:Language = $parameters.P_Language].StatusName                                                                                                        as PlannedPickingStatusName,
      _PlannedPickingStatusName,
      
      @ObjectModel.foreignKey.association: '_GIStatus'
      //@ObjectModel.text.association: '_GIStatusName'
      GoodsIssueStatus,
      _GIStatusName[1:Language = $parameters.P_Language].StatusName                                                                                                                    as GoodsIssueStatusName,
      _GIStatusName,
      //@ObjectModel.text.association: '_CompletionStatusName'
      @ObjectModel.foreignKey.association: '_CompletionStatus'
      CompletionStatus,
      _CompletionStatusName[1:Language = $parameters.P_Language].StatusName                                                                                                            as CompletionStatusName,
      _CompletionStatusName,

      //@ObjectModel.text.association: '_PickingStatusName'
      @ObjectModel.foreignKey.association: '_PickingStatus'
      PickingStatus,
      _PickingStatusName[1:Language = $parameters.P_Language].StatusName                                                                                                               as PickingStatusName,
      _PickingStatusName,
      @ObjectModel.foreignKey.association: '_OverallBlockStatus'
      OverallBlockStatus,
      _BlockStatusName[1:Language = $parameters.P_Language].StatusName                                                                                                                 as OverallBlockStatusName,
      _BlockStatusName,
      @ObjectModel.foreignKey.association: '_TransPlanBlockStatus'
      TranspPlanBlockStatus,
      _TransPlanBlockStatusName[1:Language = $parameters.P_Language].StatusName                                                                                                        as TranspPlanBlockStatusName,
      _TransPlanBlockStatusName,
      @ObjectModel.foreignKey.association: '_ItemInconsistencyBlkStatus'
      ItemInconsistencyBlkStatus,
      _DelivStsHelperText[1:Language = $parameters.P_Language].StatusName                                                                                                              as ItemInconsistencyBlkStatusName,
      _DelivStsHelperText,
      @ObjectModel.foreignKey.association: '_GoodsMovementBlockStatus'
      GoodsMovementBlockStatus,
      _GoodsMovementBlockStatusName[1:Language = $parameters.P_Language].StatusName                                                                                                    as GoodsMovementBlockStatusName,
      _GoodsMovementBlockStatusName,
      @ObjectModel.foreignKey.association: '_UncheckedItemBlockStatus'
      UncheckedItemBlockStatus,
      _UncheckedItemBlockStatusName[1:Language = $parameters.P_Language].StatusName                                                                                                    as UncheckedItemBlockStatusName,
      _UncheckedItemBlockStatusName,
      @ObjectModel.foreignKey.association: '_DeliveryCreationStatus'
      DeliveryCreationStatus,
      _DeliveryCreationStatusName[1:Language = $parameters.P_Language].StatusName                                                                                                      as DeliveryCreationStatusName,
      _DeliveryCreationStatusName,
      @ObjectModel.foreignKey.association: '_TransitProcedureStatus'
      TransitProcedureStatus,
      _TransitProcDelivStsHelperText[1:Language = $parameters.P_Language].StatusName                                                                                                   as TransitProcedureStatusName,
      _TransitProcDelivStsHelperText,
      @ObjectModel.foreignKey.association: '_LoadingStatus'
      LoadingStatus,
      _DeliveryLoadingStatusName[1:Language = $parameters.P_Language].StatusName                                                                                                       as LoadingStatusName,
      _DeliveryLoadingStatusName,
      @ObjectModel.foreignKey.association: '_PickingAndDistributionStatus'
      PickingAndDistributionStatus,
      _PickingDistDelivStsHelperText[1:Language = $parameters.P_Language].StatusName                                                                                                   as PickingAndDistrStatusName,
      _PickingDistDelivStsHelperText,
      @ObjectModel.foreignKey.association: '_WarehouseActivityStatus'
      WarehouseActivityStatus,
      _WarehouseActivityStatusName[1:Language = $parameters.P_Language].StatusName                                                                                                     as WarehouseActivityStatusName,
      _WarehouseActivityStatusName,
      @ObjectModel.foreignKey.association: '_GlobalTradeServiceStatus'
      GlobalTradeServicesCheckStatus,
      _GlobalTradeServiceStatusName[1:Language = $parameters.P_Language].StatusName                                                                                                    as GlobalTrdServicesCheckStsName,
      _GlobalTradeServiceStatusName,
      @ObjectModel.foreignKey.association: '_TransportUnitAssgmtSts'
      TransportationUnitAssgmtStatus,
      _TransportUnitAssgmtStsName[1:Language = $parameters.P_Language].StatusName                                                                                                      as TranspUnitAssgmtStatusName,
      _TransportUnitAssgmtStsName,
      @ObjectModel.foreignKey.association: '_ValuationQtyAssgmtStatus'
      ValuationQtyAssignmentStatus,
      _ValuationQtyAssgmtStatusName[1:Language = $parameters.P_Language].StatusName                                                                                                    as ValuationQtyAssgmtStatusName,
      _ValuationQtyAssgmtStatusName,
      @ObjectModel.foreignKey.association: '_ValueAddedServiceOrderStatus'
      ValueAddedServiceOrderStatus,
      _ValueAddedDelivStsHelperText[1:Language = $parameters.P_Language].StatusName                                                                                                    as ValueAddedServiceOrdStatusName,
      _ValueAddedDelivStsHelperText,

      EWMOverallDeliveryProgress,

      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'QuantityUnit'
      ProductQuantity,
      QuantityUnit,

      -- Volume in display unit
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'DisplayVolumeUnit'} }
      unit_conversion( quantity =>_GrossVolume.Quantity,
                      source_unit => _GrossVolume.UnitOfMeasure,
                      target_unit => OutboundDeliveryOrder._whseControl.DisplayVolumeUnit,
                      error_handling => 'SET_TO_NULL' )                                                                                                                                as ItemVolume,
      OutboundDeliveryOrder._whseControl.DisplayVolumeUnit                                                                                                                             as DisplayVolumeUnit,

      --- Gross Weight in display unit
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'DisplayWeightUnit'
      unit_conversion( quantity => _GrossMass.Quantity,
                      source_unit => _GrossMass.UnitOfMeasure,
                      target_unit => OutboundDeliveryOrder._whseControl.DisplayWeightUnit,
                      error_handling => 'SET_TO_NULL' )                                                                                                                                as ItemGrossWeight,

      ---Net Weight in display unit
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'DisplayWeightUnit'
      unit_conversion( quantity => _NetMass.Quantity,
                      source_unit => _NetMass.UnitOfMeasure,
                      target_unit =>  OutboundDeliveryOrder._whseControl.DisplayWeightUnit,
                      error_handling => 'SET_TO_NULL' )                                                                                                                                as ItemNetWeight,

      OutboundDeliveryOrder._whseControl.DisplayWeightUnit                                                                                                                             as DisplayWeightUnit,

      case when  WrhsTimeZonePlndGImins  < '30' then
      cast(cast(cast(concat( substring(cast(WrhsTmznPlndGIStrtDateTime as abap.char( 17 )), 1, 10), '0000' ) as abap.numc( 15 ) ) as abap.dec(15) ) as tzntstmps preserving type ) else
      cast(cast(cast(concat( substring(cast(WrhsTmznPlndGIStrtDateTime as abap.char( 17 )), 1, 10), '3000' ) as abap.numc( 15 ) ) as abap.dec(15) ) as tzntstmps preserving type ) end as WhsePlndGIRnddTo30MinsDateTime,
      cast(cast(cast(concat( substring(cast(WrhsTmznPlndGIStrtDateTime as abap.char( 17 )), 1, 10), '0000' )  as abap.numc( 15 )) as abap.dec(15) ) as tzntstmps preserving type )     as WhsePlndGIRnddTo60MinsDateTime,

      WrhsTimeZonePlannedGIDate,
      WrhsTimeZonePlannedGITime,
      WrhsTmznPlndGIStrtDateTime,
      cast (substring(cast(WrhsTmznPlndGIStrtDateTime as abap.char( 17 )), 1, 4)  as abap.numc( 4 ) )                                                                                  as WrhsTimeZnPlndGIStrtYear,
      cast (substring(cast(WrhsTmznPlndGIStrtDateTime as abap.char( 17 )), 1, 6) as abap.numc( 6 ) )                                                                                   as WrhsTimeZnPlndGIStrtMonth,
      cast (substring(cast(WrhsTmznPlndGIStrtDateTime as abap.char( 17 )), 1, 8) as abap.numc( 8 ) )                                                                                   as WrhsTimeZnPlndGIStrtDay,
      cast (substring(cast(WrhsTmznPlndGIStrtDateTime as abap.char( 17 )), 9, 2) as abap.numc( 2 ) )                                                                                   as WrhsTimeZnPlndGIStrtHour,

      WrhsTmznActlGIStrtDateTime,
      EWMWhseTmznActlGIEndDateTime,
      WrhsTimeZoneActualGIDate,
      WrhsTimeZoneActualGITime,
      @Semantics.booleanIndicator
      case when  WrhsTimeZoneActualGIDate = EWMWarehouseCurrentDate then
      cast ('X' as ewm_de_actualgidateistoday)  else cast ('' as ewm_de_actualgidateistoday )end                                                                                       as EWMActualGIDateIsToday,
      @Semantics.booleanIndicator
      case when  WrhsTimeZonePlannedGIDate = EWMWarehouseCurrentDate then
      cast ('X' as ewm_de_plannedgidateistoday )  else cast ('' as ewm_de_plannedgidateistoday )end                                                                                    as EWMPlannedGIDateIsToday,
      @Semantics.booleanIndicator
      case when  WrhsTimeZonePlannedGIDate = EWMWarehouseCurrentDate or WrhsTimeZoneActualGIDate = EWMWarehouseCurrentDate then
      cast  ('X' as ewm_de_plndoractgiistoday )  else cast('' as ewm_de_plndoractgiistoday) end                                                                                        as EWMPlndOrActGIIsToday,

      case when  WrhsTimeZoneActualGImins  < '30' then
      cast(cast(cast(concat( substring(cast(WrhsTmznActlGIStrtDateTime as abap.char( 17 )), 1, 10), '0000' ) as abap.numc( 15 ) ) as abap.dec(15) ) as tzntstmps preserving type ) else
      cast(cast(cast(concat( substring(cast(WrhsTmznActlGIStrtDateTime as abap.char( 17 )), 1, 10), '3000' ) as abap.numc( 15 ) ) as abap.dec(15) ) as tzntstmps preserving type ) end as WhseActlGIRnddTo30MinsDateTime,
      cast(cast(cast(concat( substring(cast(WrhsTmznActlGIStrtDateTime as abap.char( 17 )), 1, 10), '0000' )  as abap.numc( 15 )) as abap.dec(15) ) as tzntstmps preserving type )     as WhseActlGIRnddTo60MinsDateTime,

      cast (substring(cast(WrhsTmznActlGIStrtDateTime as abap.char( 17 )), 1, 4) as abap.numc( 4 ) )                                                                                   as WrhsTmznActlGIStrtYear,
      cast (substring(cast(WrhsTmznActlGIStrtDateTime as abap.char( 17 )), 1, 6) as abap.numc( 6 ) )                                                                                   as WrhsTmznActlGIStrtMonth,
      cast (substring(cast(WrhsTmznActlGIStrtDateTime as abap.char( 17 )), 1, 8) as abap.numc( 8 ) )                                                                                   as WrhsTmznActlGIStrtDay,
      cast (substring(cast(WrhsTmznActlGIStrtDateTime as abap.char( 17 )), 9, 2) as abap.numc( 2 ) )                                                                                   as WrhsTmznActlGIStrtHour,
      GoodsIssueDelayInSeconds,
      case when GoodsIssueDelayInSeconds > 0 then div( GoodsIssueDelayInSeconds , 3600 ) else 0 end                                                                                    as OutbDelivOrdItemGIOverdueHours,
      @DefaultAggregation: #SUM
      cast( div( tstmp_seconds_between(WrhsTmznCreationDateTime , EWMWhseTmznActlGIEndDateTime, 'NULL' ), 60  ) as ewm_de_lifecycledurationinmins )                                    as ODOIntCycDurationInMinutes,
      @Semantics.booleanIndicator
      EWMPlndGoodsIssueDateIsInPast,
      @Semantics.booleanIndicator
      EWMActGoodsIssueDateIsOnTime,
      @Semantics.quantity.unitOfMeasure: 'QuantityUnit'
      EWMDeliveryAdjustmentQuantity,
      @Semantics.booleanIndicator
      EWMQuantityHasAdjustment,
      EWMWarehouseCurrentDate,
      _GIStatus,
      _PlannedPickingStatus,
      _CompletionStatus,
      _PickingStatus,
      _OverallBlockStatus,
      _TransPlanBlockStatus,
      _ItemInconsistencyBlkStatus,
      _GoodsMovementBlockStatus,
      _UncheckedItemBlockStatus,
      _DeliveryCreationStatus,
      _TransitProcedureStatus,
      _LoadingStatus,
      _PickingAndDistributionStatus,
      _WarehouseActivityStatus,
      _GlobalTradeServiceStatus,
      _TransportUnitAssgmtSts,
      _ValuationQtyAssgmtStatus,
      _ValueAddedServiceOrderStatus
}
```
