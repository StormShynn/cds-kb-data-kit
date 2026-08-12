---
name: I_EWM_OUTBDELIVORDC_2
description: "This CDS view provides information about outbound delivery items in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: SCM-EWM-DLP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_OUTBDELIVORDC_2')/$value
semantic_en: "This CDS view provides information about outbound delivery items in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Warehouse Outbound Delivery Order - Cube — CDS view giao diện dựa trên I_EWM_OutbDelivOrd_2."
keywords:
  - "warehouse"
  - "outbound"
  - "delivery"
  - "order"
  - "cube"
  - "item"
tags:
  - SCM
  - bo:companycode
  - component:SCM-EWM-DLP-2CL
  - delivery
  - interface-view
  - SCM-EWM
  - SCM-EWM-DLP
  - SCM-EWM-DLP-2CL
  - bo:deliverydocument
  - order
---
# I_EWM_OUTBDELIVORDC_2

**This CDS view provides information about outbound delivery items in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-DLP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_OUTBDELIVORDC_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMWarehouse` | ✓ | |  |  | `CHAR(4)` | Warehouse Number/Warehouse Complex |
| `EWMOutboundDeliveryOrder` | ✓ | |  |  | `CHAR(35)` | Document Number |
| `EWMOutboundDeliveryOrderItem` | ✓ | |  |  | `NUMC(10)` | Item Number |
| `OutboundDeliveryOrderUUID` |  | |  |  | `RAW(16)` | Document ID |
| `OutboundDeliveryOrderItemUUID` |  | |  |  | `RAW(16)` | Item ID |
| `EWMOutboundDelivery` |  | |  |  | `CHAR(35)` | Document Number |
| `EWMOutboundDeliveryItem` |  | |  |  | `NUMC(10)` | Item Number |
| `EntitledToDisposeParty` |  | |  |  | `CHAR(10)` | Party Entitled to Dispose |
| `TimeZoneID` |  | |  |  | `CHAR(6)` | Time Zone |
| `EWMOutboundDeliveryOrderType` |  | |  |  | `CHAR(4)` | Document Type |
| `EWMDeliveryDocumentCategory` |  | |  |  | `CHAR(3)` | Document Category |
| `EWMOutbDelivOrderItemCategory` |  | |  |  | `CHAR(3)` | Item Category |
| `EWMOutbDeliveryOrderItemType` |  | |  |  | `CHAR(4)` | Item Type |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `ShipToPartyName` |  | |  |  | `CHAR(40)` |  |
| `IsBusinessPurposeCompleted` |  | | `_BusinessPartnerNew` | `IsBusinessPurposeCompleted` | `CHAR(1)` | Business Purpose Completed Flag |
| `Carrier` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `CarrierName` |  | |  |  | `CHAR(40)` |  |
| `WrhsTmznCreationDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WrhsTmZnCreationDate` |  | |  |  | `DATS(8)` | Date |
| `WrhsTmznCreationTime` |  | |  |  | `TIMS(6)` | Time |
| `WrhsTmznCreationYear` |  | |  | `cast(substring(cast(WrhsTmznCreationDateTime as abap.char( 17 )), 1, 4) as abap.numc( 4 ))` | `NUMC(4)` |  |
| `WrhsTmznCreationMonth` |  | |  | `cast(substring(cast(WrhsTmznCreationDateTime as abap.char( 17 )), 1, 6) as abap.numc( 6 ))` | `NUMC(6)` |  |
| `WrhsTmznCreationDay` |  | |  | `cast(substring(cast(WrhsTmznCreationDateTime as abap.char( 17 )), 1, 8) as abap.numc( 8 ))` | `NUMC(8)` |  |
| `WrhsTmznCreationHour` |  | |  | `cast(substring(cast(WrhsTmznCreationDateTime as abap.char( 17 )), 9, 2) as abap.numc( 2 ))` | `NUMC(2)` |  |
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
| `EWMStorageSection` |  | |  |  | `CHAR(4)` | Storage Section |
| `ActivityArea` |  | |  |  | `CHAR(4)` | Activity Area |
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
| `ItemInconsistencyBlkStatusName` |  | |  | `_ItemInconsistencyBlkStatus[1:Language = $parameters.P_Language].StatusName` | `CHAR(30)` | Individual Status of an Object |
| `GoodsMovementBlockStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `GoodsMovementBlockStatusName` |  | |  | `_GoodsMovementBlockStatusName[1:Language = $parameters.P_Language].StatusName` | `CHAR(30)` | Individual Status of an Object |
| `UncheckedItemBlockStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `UncheckedItemBlockStatusName` |  | |  | `_UncheckedItemBlockStatusName[1:Language = $parameters.P_Language].StatusName` | `CHAR(30)` | Individual Status of an Object |
| `DeliveryCreationStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `DeliveryCreationStatusName` |  | |  | `_DeliveryCreationStatusName[1:Language = $parameters.P_Language].StatusName` | `CHAR(30)` | Individual Status of an Object |
| `TransitProcedureStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `TransitProcedureStatusName` |  | |  | `_TransitProcedureStatus[1:Language = $parameters.P_Language].StatusName` | `CHAR(30)` | Individual Status of an Object |
| `LoadingStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `LoadingStatusName` |  | |  | `_DeliveryLoadingStatusName[1:Language = $parameters.P_Language].StatusName` | `CHAR(30)` | Individual Status of an Object |
| `PickingAndDistributionStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `PickingAndDistrStatusName` |  | |  | `_PickingAndDistributionStatus[1:Language = $parameters.P_Language].StatusName` | `CHAR(30)` | Individual Status of an Object |
| `WarehouseActivityStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `WarehouseActivityStatusName` |  | |  | `_WarehouseActivityStatusName[1:Language = $parameters.P_Language].StatusName` | `CHAR(30)` | Individual Status of an Object |
| `GlobalTradeServicesCheckStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `GlobalTrdServicesCheckStsName` |  | |  | `_GlobalTradeServiceStatusName[1:Language = $parameters.P_Language].StatusName` | `CHAR(30)` | Individual Status of an Object |
| `TransportationUnitAssgmtStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `TranspUnitAssgmtStatusName` |  | |  | `_TransportUnitAssgmtStsName[1:Language = $parameters.P_Language].StatusName` | `CHAR(30)` | Individual Status of an Object |
| `ValuationQtyAssignmentStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `ValuationQtyAssgmtStatusName` |  | |  | `_ValuationQtyAssgmtStatusName[1:Language = $parameters.P_Language].StatusName` | `CHAR(30)` | Individual Status of an Object |
| `ValueAddedServiceOrderStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `ValueAddedServiceOrdStatusName` |  | |  | `_ValueAddedServiceOrderStatus[1:Language = $parameters.P_Language].StatusName` | `CHAR(30)` | Individual Status of an Object |
| `EWMOverallDeliveryProgress` |  | |  |  | `CHAR(3)` |  |
| `ProductQuantity` |  | |  |  | `QUAN(31)` | Quantity |
| `QuantityUnit` |  | |  |  | `UNIT(3)` | Unit of Measure |
| `ItemVolume` |  | |  | `unit_conversion( quantity => _GrossVolume.Quantity, source_unit => _GrossVolume.UnitOfMeasure, target_unit => $parameters.P_DisplayVolumeUnit, error_handling => 'SET_TO_NULL' )` | `QUAN(31)` |  |
| `VolumeUnit` |  | |  | `$parameters.P_DisplayVolumeUnit` | `UNIT(3)` | Unit |
| `ItemGrossWeight` |  | |  | `unit_conversion( quantity => _GrossMass.Quantity, source_unit => _GrossMass.UnitOfMeasure, target_unit => $parameters.P_DisplayWeightUnit, error_handling => 'SET_TO_NULL' )` | `QUAN(31)` |  |
| `ItemNetWeight` |  | |  | `unit_conversion( quantity => _NetMass.Quantity, source_unit => _NetMass.UnitOfMeasure, target_unit => $parameters.P_DisplayWeightUnit, error_handling => 'SET_TO_NULL' )` | `QUAN(31)` |  |
| `WeightUnit` |  | |  | `$parameters.P_DisplayWeightUnit` | `UNIT(3)` | Unit |
| `WrhsTimeZonePlannedGIDate` |  | |  |  | `DATS(8)` | Date |
| `WrhsTimeZonePlannedGITime` |  | |  |  | `TIMS(6)` | Time |
| `WrhsTmznPlndGIStrtDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WrhsTimeZnPlndGIStrtYear` |  | |  | `cast(substring(cast(WrhsTmznPlndGIStrtDateTime as abap.char( 17 )), 1, 4) as abap.numc( 4 ))` | `NUMC(4)` |  |
| `WrhsTimeZnPlndGIStrtMonth` |  | |  | `cast(substring(cast(WrhsTmznPlndGIStrtDateTime as abap.char( 17 )), 1, 6) as abap.numc( 6 ))` | `NUMC(6)` |  |
| `WrhsTimeZnPlndGIStrtDay` |  | |  | `cast(substring(cast(WrhsTmznPlndGIStrtDateTime as abap.char( 17 )), 1, 8) as abap.numc( 8 ))` | `NUMC(8)` |  |
| `WrhsTimeZnPlndGIStrtHour` |  | |  | `cast(substring(cast(WrhsTmznPlndGIStrtDateTime as abap.char( 17 )), 9, 2) as abap.numc( 2 ))` | `NUMC(2)` |  |
| `WrhsTmznActlGIStrtDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `EWMWhseTmznActlGIEndDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WrhsTimeZoneActualGIDate` |  | |  |  | `DATS(8)` | Date |
| `WrhsTimeZoneActualGITime` |  | |  |  | `TIMS(6)` | Time |
| `WrhsTmznActlGIStrtYear` |  | |  | `cast(substring(cast(WrhsTmznActlGIStrtDateTime as abap.char( 17 )), 1, 4) as abap.numc( 4 ))` | `NUMC(4)` |  |
| `WrhsTmznActlGIStrtMonth` |  | |  | `cast(substring(cast(WrhsTmznActlGIStrtDateTime as abap.char( 17 )), 1, 6) as abap.numc( 6 ))` | `NUMC(6)` |  |
| `WrhsTmznActlGIStrtDay` |  | |  | `cast(substring(cast(WrhsTmznActlGIStrtDateTime as abap.char( 17 )), 1, 8) as abap.numc( 8 ))` | `NUMC(8)` |  |
| `WrhsTmznActlGIStrtHour` |  | |  | `cast(substring(cast(WrhsTmznActlGIStrtDateTime as abap.char( 17 )), 9, 2) as abap.numc( 2 ))` | `NUMC(2)` |  |
| `GoodsIssueDelayInSeconds` |  | |  | `cast( case when GoodsIssueStatus = '9' and WrhsTmznPlndGIStrtDateTime < WrhsTmznActlGIStrtDateTime then tstmp_seconds_between(WrhsTmznPlndGIStrtDateTime, WrhsTmznActlGIStrtDateTime, 'NULL') when GoodsIssueStatus <> '9' and PlndGoodsIssueStartUTCDateTime < tstmp_current_utctimestamp() then tstmp_seconds_between (PlndGoodsIssueStartUTCDateTime, tstmp_current_utctimestamp(), 'NULL' ) else 0 end as abap.fltp )` | `FLTP(16)` |  |
| `IsOverdue` |  | |  | `case when GoodsIssueStatus = '9' then case when WrhsTmznPlndGIStrtDateTime < WrhsTmznActlGIStrtDateTime then '1' else '0' end else case when EWMOverallDeliveryProgress = 'LDC' then case when PlndGoodsIssueStartUTCDateTime < tstmp_add_seconds(tstmp_current_utctimestamp(), GILeadingTimeInSeconds, 'FAIL') then '1' else '0' end else case when EWMOverallDeliveryProgress = 'PIC' then case when LoadingStatus = '0' or LoadingStatus = '' or LoadingStatus = '#' or LoadingStatus is null then case when PlndGoodsIssueStartUTCDateTime < tstmp_add_seconds(tstmp_current_utctimestamp(), GILeadingTimeInSeconds, 'FAIL') then '1' else '0' end else case when PlndGoodsIssueStartUTCDateTime < tstmp_add_seconds(tstmp_current_utctimestamp(), GILoadLeadingTimeInSeconds, 'FAIL') then '1' else '0' end end else case when LoadingStatus = '0' or LoadingStatus = '' or LoadingStatus = '#' or LoadingStatus is null then case when PlndGoodsIssueStartUTCDateTime < tstmp_add_seconds(tstmp_current_utctimestamp(), GIPickLeadingTimeInSeconds, 'FAIL') then '1' else '0' end else case when PlndGoodsIssueStartUTCDateTime < tstmp_add_seconds(tstmp_current_utctimestamp(), GILoadPickLeadingTimeInSeconds, 'FAIL') then '1' else '0' end end end end end` | `NUMC(1)` |  |
| `_Warehouse` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_ItemCat` | | ✓ | | | | |
| `_DeliveryItemType` | | ✓ | | | | |
| `_WarehouseProcessType` | | ✓ | | | | |
| `_ShippingCondition` | | ✓ | | | | |
| `_StorageType` | | ✓ | | | | |
| `_StorageSection` | | ✓ | | | | |
| `_ActivityArea` | | ✓ | | | | |
| `_DeliveryCategory` | | ✓ | | | | |
| `_DeliveryType` | | ✓ | | | | |
| `_PlannedPickingStatusName` | | ✓ | | | | |
| `_CompletionStatusName` | | ✓ | | | | |
| `_GIStatusName` | | ✓ | | | | |
| `_PickingStatusName` | | ✓ | | | | |
| `_BlockStatusName` | | ✓ | | | | |
| `_TransPlanBlockStatusName` | | ✓ | | | | |
| `_ItemInconsistencyBlkStatus` | | ✓ | | | | |
| `_GoodsMovementBlockStatusName` | | ✓ | | | | |
| `_UncheckedItemBlockStatusName` | | ✓ | | | | |
| `_DeliveryCreationStatusName` | | ✓ | | | | |
| `_TransitProcedureStatus` | | ✓ | | | | |
| `_DeliveryLoadingStatusName` | | ✓ | | | | |
| `_PickingAndDistributionStatus` | | ✓ | | | | |
| `_WarehouseActivityStatusName` | | ✓ | | | | |
| `_GlobalTradeServiceStatusName` | | ✓ | | | | |
| `_TransportUnitAssgmtStsName` | | ✓ | | | | |
| `_ValuationQtyAssgmtStatusName` | | ✓ | | | | |
| `_ValueAddedServiceOrderStatus` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |
| `_BusinessPartnerNew` | | ✓ | | | | |
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
| `_StorageType` | `I_EWM_StorageType_2` | [0..1] |
| `_StorageSection` | `I_EWM_StorageSection_2` | [0..1] |
| `_ActivityArea` | `I_EWM_ActivityArea_2` | [0..1] |
| `_DeliveryCategory` | `I_EWM_DeliveryCategory_2` | [0..1] |
| `_DeliveryType` | `I_EWM_DeliveryType_2` | [0..1] |
| `_PlannedPickingStatusName` | `I_EWM_DelivStsHelperText` | [0..*] |
| `_CompletionStatusName` | `I_EWM_DelivStsHelperText` | [0..*] |
| `_GIStatusName` | `I_EWM_DelivStsHelperText` | [0..*] |
| `_PickingStatusName` | `I_EWM_DelivStsHelperText` | [0..*] |
| `_BlockStatusName` | `I_EWM_DelivStsHelperText` | [0..*] |
| `_TransPlanBlockStatusName` | `I_EWM_DelivStsHelperText` | [0..*] |
| `_ItemInconsistencyBlkStatus` | `I_EWM_DelivStsHelperText` | [0..*] |
| `_GoodsMovementBlockStatusName` | `I_EWM_DelivStsHelperText` | [0..*] |
| `_UncheckedItemBlockStatusName` | `I_EWM_DelivStsHelperText` | [0..*] |
| `_DeliveryCreationStatusName` | `I_EWM_DelivStsHelperText` | [0..*] |
| `_TransitProcedureStatus` | `I_EWM_DelivStsHelperText` | [0..*] |
| `_DeliveryLoadingStatusName` | `I_EWM_DelivStsHelperText` | [0..*] |
| `_PickingAndDistributionStatus` | `I_EWM_DelivStsHelperText` | [0..*] |
| `_WarehouseActivityStatusName` | `I_EWM_DelivStsHelperText` | [0..*] |
| `_GlobalTradeServiceStatusName` | `I_EWM_DelivStsHelperText` | [0..*] |
| `_TransportUnitAssgmtStsName` | `I_EWM_DelivStsHelperText` | [0..*] |
| `_ValuationQtyAssgmtStatusName` | `I_EWM_DelivStsHelperText` | [0..*] |
| `_ValueAddedServiceOrderStatus` | `I_EWM_DelivStsHelperText` | [0..*] |
| `_BusinessPartner` | `I_EWM_BusinessPartner` | [0..1] |
| `_BusinessPartnerNew` | `I_BusinessPartner` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_OUTBDELIVORDC_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_OUTBDELIVORDC_2')/$value)*

```abap
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@EndUserText.label: 'Warehouse Outbound Delivery Order - Cube'

@ObjectModel.compositionRoot: true
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.sizeCategory: #XL

@ObjectModel.modelingPattern:           #ANALYTICAL_CUBE
@ObjectModel.supportedCapabilities:  [  #ANALYTICAL_PROVIDER,
                                        #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE ]

@Metadata.ignorePropagatedAnnotations:true

@Metadata.allowExtensions:true
@VDM.viewType:#COMPOSITE
@Analytics: { dataCategory: #CUBE }
@Analytics.internalName:#LOCAL

define view entity I_EWM_OutbDelivOrdC_2
  with parameters
    @EndUserText.label: 'Start Date'
    P_PlannedGIStartDate       : /scdl/de_plandate,
    @EndUserText.label: 'Start Time'
    P_PlannedGIStartTime       : /scdl/de_plantime,
    @EndUserText.label: 'End Date'
    P_PlannedGIEndDate         : /scdl/de_plandate,
    @EndUserText.label: 'End Time'
    P_PlannedGIEndTime         : /scdl/de_plantime,
    @EndUserText.label: 'Pick leading time in minutes'
    P_PickLeadingTimeInMinutes : int2,
    @EndUserText.label: 'Load leading time in minutes'
    P_LoadLeadingTimeInMinutes : int2,

    @EndUserText.label: 'GI leading time in minutes'
    P_GILeadingTimeInMinutes   : int2,
    @EndUserText.label: 'Weight Unit to convert'
    P_DisplayWeightUnit        : /scwm/unit,
    @EndUserText.label: 'Volume Unit to convert'
    P_DisplayVolumeUnit        : /scwm/unit,
    @EndUserText.label: 'Warehouse Number'
    P_WarehouseNumber          : /scwm/lgnum,
    @Environment.systemField: #SYSTEM_LANGUAGE
    @Consumption.hidden
    P_Language                 : /scwm/lang
  as select from I_EWM_OutbDelivOrd_2( P_PlannedGIStartDate: $parameters.P_PlannedGIStartDate,
                                      P_PlannedGIStartTime: $parameters.P_PlannedGIStartTime,
                                      P_PlannedGIEndDate: $parameters.P_PlannedGIEndDate,
                                      P_PlannedGIEndTime: $parameters.P_PlannedGIEndTime,
                                      P_PickLeadingTimeInMinutes: $parameters.P_PickLeadingTimeInMinutes,
                                      P_LoadLeadingTimeInMinutes: $parameters.P_LoadLeadingTimeInMinutes,
                                      P_GILeadingTimeInMinutes: $parameters.P_GILeadingTimeInMinutes,
                                      P_WarehouseNumber: $parameters.P_WarehouseNumber) as OutboundDeliveryOrder
  association [0..1] to I_EWM_OutbDelivOrdGrossVolume as _GrossVolume                  on  $projection.OutboundDeliveryOrderUUID     = _GrossVolume.OutboundDeliveryOrderUUID
                                                                                       and $projection.OutboundDeliveryOrderItemUUID = _GrossVolume.OutboundDeliveryOrderItemUUID
                                                                                       and _GrossVolume.EWMDeliveryDocumentCategory  = 'PDO'
                                                                                       and _GrossVolume.EWMDeliveryQuantityCategory  = 'GROSS'
                                                                                       and _GrossVolume.EWMDeliveryQuantityRole      = 'VOLUME'
  association [0..1] to I_EWM_OutbDelivOrdGrossMass   as _GrossMass                    on  $projection.OutboundDeliveryOrderUUID     = _GrossMass.OutboundDeliveryOrderUUID
                                                                                       and $projection.OutboundDeliveryOrderItemUUID = _GrossMass.OutboundDeliveryOrderItemUUID
                                                                                       and _GrossMass.EWMDeliveryDocumentCategory    = 'PDO'
                                                                                       and _GrossMass.EWMDeliveryQuantityCategory    = 'GROSS'
                                                                                       and _GrossMass.EWMDeliveryQuantityRole        = 'MASS'
  association [0..1] to I_EWM_OutbDelivOrdNetMass     as _NetMass                      on  $projection.OutboundDeliveryOrderUUID     = _NetMass.OutboundDeliveryOrderUUID
                                                                                       and $projection.OutboundDeliveryOrderItemUUID = _NetMass.OutboundDeliveryOrderItemUUID
                                                                                       and _NetMass.EWMDeliveryDocumentCategory      = 'PDO'
                                                                                       and _NetMass.EWMDeliveryQuantityCategory      = 'NET'
                                                                                       and _NetMass.EWMDeliveryQuantityRole          = 'MASS'
  association [0..1] to I_EWM_WarehouseNumber_2       as _Warehouse                    on  $projection.EWMWarehouse = _Warehouse.EWMWarehouse
  // association [0..1] to I_EWM_Product                     as _Product                      on  $projection.Product = _Product.Product
  association [1]    to I_Product                     as _Product                      on  $projection.Product = _Product.Product
  association [0..1] to I_EWM_DeliveryItemCategory_2  as _ItemCat                      on  $projection.EWMOutbDelivOrderItemCategory = _ItemCat.EWMInboundDeliveryItemCategory
  association [0..1] to I_EWM_DeliveryItemType_2      as _DeliveryItemType             on  $projection.EWMDeliveryDocumentCategory  = _DeliveryItemType.EWMDeliveryDocumentCategory
                                                                                       and $projection.EWMOutbDeliveryOrderItemType = _DeliveryItemType.DeliveryItemType
  association [0..1] to I_EWM_WrhsProcType_2          as _WarehouseProcessType         on  $projection.WarehouseProcessType = _WarehouseProcessType.WarehouseProcessType
                                                                                       and $projection.EWMWarehouse         = _WarehouseProcessType.EWMWarehouse
  // association [0..1] to I_EWM_DeliveryShippingCndn    as _ShippingCondition            on  $projection.ShippingCondition = _ShippingCondition.ShippingCondition
  association [0..1] to I_ShippingCondition           as _ShippingCondition            on  $projection.ShippingCondition = _ShippingCondition.ShippingCondition

  association [0..1] to I_EWM_StorageType_2           as _StorageType                  on  $projection.EWMStorageType = _StorageType.EWMStorageType
                                                                                       and $projection.EWMWarehouse   = _StorageType.EWMWarehouse
  association [0..1] to I_EWM_StorageSection_2        as _StorageSection               on  $projection.EWMStorageSection = _StorageSection.EWMStorageSection
                                                                                       and $projection.EWMStorageType    = _StorageSection.EWMStorageType
                                                                                       and $projection.EWMWarehouse      = _StorageSection.EWMWarehouse
  association [0..1] to I_EWM_ActivityArea_2          as _ActivityArea                 on  $projection.ActivityArea = _ActivityArea.ActivityArea
                                                                                       and $projection.EWMWarehouse = _ActivityArea.EWMWarehouse
  association [0..1] to I_EWM_DeliveryCategory_2      as _DeliveryCategory             on  $projection.EWMDeliveryDocumentCategory = _DeliveryCategory.EWMDeliveryDocumentCategory
  association [0..1] to I_EWM_DeliveryType_2          as _DeliveryType                 on  $projection.EWMOutboundDeliveryOrderType = _DeliveryType.EWMDeliveryDocumentType
                                                                                       and $projection.EWMDeliveryDocumentCategory  = _DeliveryType.EWMDeliveryDocumentCategory
  --Planned Picking Status, GI Status, Completion Status are from odoitem, so text is not joined
  association [0..*] to I_EWM_DelivStsHelperText      as _PlannedPickingStatusName     on  $projection.PlannedPickingStatus             = _PlannedPickingStatusName.DeliveryStatus
                                                                                       and _PlannedPickingStatusName.DeliveryStatusType = 'DER'
  association [0..*] to I_EWM_DelivStsHelperText      as _CompletionStatusName         on  $projection.CompletionStatus             = _CompletionStatusName.DeliveryStatus
                                                                                       and _CompletionStatusName.DeliveryStatusType = 'DCO'
  association [0..*] to I_EWM_DelivStsHelperText      as _GIStatusName                 on  $projection.GoodsIssueStatus     = _GIStatusName.DeliveryStatus
                                                                                       and _GIStatusName.DeliveryStatusType = 'DGI'
  --Other status text
  association [0..*] to I_EWM_DelivStsHelperText      as _PickingStatusName            on  $projection.PickingStatus             = _PickingStatusName.DeliveryStatus
                                                                                       and _PickingStatusName.DeliveryStatusType = 'DPI'
  association [0..*] to I_EWM_DelivStsHelperText      as _BlockStatusName              on  $projection.OverallBlockStatus      = _BlockStatusName.DeliveryStatus
                                                                                       and _BlockStatusName.DeliveryStatusType = 'DBO'
  association [0..*] to I_EWM_DelivStsHelperText      as _TransPlanBlockStatusName     on  $projection.TranspPlanBlockStatus            = _TransPlanBlockStatusName.DeliveryStatus
                                                                                       and _TransPlanBlockStatusName.DeliveryStatusType = 'DBT'
  association [0..*] to I_EWM_DelivStsHelperText      as _ItemInconsistencyBlkStatus   on  $projection.ItemInconsistencyBlkStatus         = _ItemInconsistencyBlkStatus.DeliveryStatus
                                                                                       and _ItemInconsistencyBlkStatus.DeliveryStatusType = 'DBD'
  association [0..*] to I_EWM_DelivStsHelperText      as _GoodsMovementBlockStatusName on  $projection.GoodsMovementBlockStatus             = _GoodsMovementBlockStatusName.DeliveryStatus
                                                                                       and _GoodsMovementBlockStatusName.DeliveryStatusType = 'DWG'
  association [0..*] to I_EWM_DelivStsHelperText      as _UncheckedItemBlockStatusName on  $projection.UncheckedItemBlockStatus             = _UncheckedItemBlockStatusName.DeliveryStatus
                                                                                       and _UncheckedItemBlockStatusName.DeliveryStatusType = 'DBP'
  association [0..*] to I_EWM_DelivStsHelperText      as _DeliveryCreationStatusName   on  $projection.DeliveryCreationStatus             = _DeliveryCreationStatusName.DeliveryStatus
                                                                                       and _DeliveryCreationStatusName.DeliveryStatusType = 'DDC'
  association [0..*] to I_EWM_DelivStsHelperText      as _TransitProcedureStatus       on  $projection.TransitProcedureStatus         = _TransitProcedureStatus.DeliveryStatus
                                                                                       and _TransitProcedureStatus.DeliveryStatusType = 'DWN'
  association [0..*] to I_EWM_DelivStsHelperText      as _DeliveryLoadingStatusName    on  $projection.LoadingStatus                     = _DeliveryLoadingStatusName.DeliveryStatus
                                                                                       and _DeliveryLoadingStatusName.DeliveryStatusType = 'DLO'
  association [0..*] to I_EWM_DelivStsHelperText      as _PickingAndDistributionStatus on  $projection.PickingAndDistributionStatus         = _PickingAndDistributionStatus.DeliveryStatus
                                                                                       and _PickingAndDistributionStatus.DeliveryStatusType = 'DPD'
  association [0..*] to I_EWM_DelivStsHelperText      as _WarehouseActivityStatusName  on  $projection.WarehouseActivityStatus             = _WarehouseActivityStatusName.DeliveryStatus
                                                                                       and _WarehouseActivityStatusName.DeliveryStatusType = 'DWA'
  association [0..*] to I_EWM_DelivStsHelperText      as _GlobalTradeServiceStatusName on  $projection.GlobalTradeServicesCheckStatus       = _GlobalTradeServiceStatusName.DeliveryStatus
                                                                                       and _GlobalTradeServiceStatusName.DeliveryStatusType = 'DGT'
  association [0..*] to I_EWM_DelivStsHelperText      as _TransportUnitAssgmtStsName   on  $projection.TransportationUnitAssgmtStatus     = _TransportUnitAssgmtStsName.DeliveryStatus
                                                                                       and _TransportUnitAssgmtStsName.DeliveryStatusType = 'DTU'
  association [0..*] to I_EWM_DelivStsHelperText      as _ValuationQtyAssgmtStatusName on  $projection.ValuationQtyAssignmentStatus         = _ValuationQtyAssgmtStatusName.DeliveryStatus
                                                                                       and _ValuationQtyAssgmtStatusName.DeliveryStatusType = 'DVQ'
  association [0..*] to I_EWM_DelivStsHelperText      as _ValueAddedServiceOrderStatus on  $projection.ValueAddedServiceOrderStatus         = _ValueAddedServiceOrderStatus.DeliveryStatus
                                                                                       and _ValueAddedServiceOrderStatus.DeliveryStatusType = 'DWV'

  association [0..1] to I_EWM_BusinessPartner         as _BusinessPartner              on  $projection.ShipToParty = _BusinessPartner.BusinessPartner
    association [0..1] to I_BusinessPartner         as _BusinessPartnerNew              on  $projection.ShipToParty = _BusinessPartnerNew.BusinessPartner
{

      @ObjectModel.foreignKey.association: '_Warehouse'
  key EWMWarehouse,
  key EWMOutboundDeliveryOrder,
  key EWMOutboundDeliveryOrderItem,
      OutboundDeliveryOrderUUID,

      OutboundDeliveryOrderItemUUID,

      _OutboundDeliveryOrderHeader,
      EWMOutboundDelivery,
      EWMOutboundDeliveryItem,


      _Warehouse,

      EntitledToDisposeParty,
      _BusinessPartner,
      _BusinessPartnerNew,
      TimeZoneID,

      @ObjectModel.foreignKey.association: '_DeliveryType'
      OutboundDeliveryOrder.EWMOutboundDeliveryOrderType,
      _DeliveryType,

      @ObjectModel.foreignKey.association: '_DeliveryCategory'
      EWMDeliveryDocumentCategory,
      _DeliveryCategory,


      @ObjectModel.foreignKey.association: '_ItemCat'
      EWMOutbDelivOrderItemCategory,
      _ItemCat,

      @ObjectModel.foreignKey.association: '_DeliveryItemType'
      EWMOutbDeliveryOrderItemType,
      _DeliveryItemType,

      ShipToParty,
      ShipToPartyName,
      @Semantics.booleanIndicator:true
      _BusinessPartnerNew.IsBusinessPurposeCompleted,
      Carrier,
      CarrierName,
      //_OutboundDeliveryOrderHeader,
      WrhsTmznCreationDateTime,
      WrhsTmZnCreationDate,
      WrhsTmznCreationTime,
      cast(substring(cast(WrhsTmznCreationDateTime as abap.char( 17 )), 1, 4) as abap.numc( 4 ))   as WrhsTmznCreationYear,
      cast(substring(cast(WrhsTmznCreationDateTime as abap.char( 17 )), 1, 6) as abap.numc( 6 ))   as WrhsTmznCreationMonth,
      cast(substring(cast(WrhsTmznCreationDateTime as abap.char( 17 )), 1, 8) as abap.numc( 8 ))   as WrhsTmznCreationDay,
      cast(substring(cast(WrhsTmznCreationDateTime as abap.char( 17 )), 9, 2) as abap.numc( 2 ))   as WrhsTmznCreationHour,

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

      @ObjectModel.foreignKey.association: '_StorageType'
      EWMStorageType,
      _StorageType,

      @ObjectModel.foreignKey.association: '_StorageSection'
      OutboundDeliveryOrder.EWMStorageSection,
      _StorageSection,

      @ObjectModel.foreignKey.association: '_ActivityArea'
      ActivityArea,
      _ActivityArea,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'EWMWave'
      Wave,
      EWMWave,
      @Semantics.booleanIndicator:true
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
      PlannedPickingStatus,
      _PlannedPickingStatusName[1:Language = $parameters.P_Language].StatusName                    as PlannedPickingStatusName,
      _PlannedPickingStatusName,
      //@ObjectModel.text.association: '_GIStatusName'
      GoodsIssueStatus,
      _GIStatusName[1:Language = $parameters.P_Language].StatusName                                as GoodsIssueStatusName,
      _GIStatusName,
      //@ObjectModel.text.association: '_CompletionStatusName'
      CompletionStatus,
      _CompletionStatusName[1:Language = $parameters.P_Language].StatusName                        as CompletionStatusName,
      _CompletionStatusName,

      //@ObjectModel.text.association: '_PickingStatusName'
      PickingStatus,
      _PickingStatusName[1:Language = $parameters.P_Language].StatusName                           as PickingStatusName,
      _PickingStatusName,
      OverallBlockStatus,
      _BlockStatusName[1:Language = $parameters.P_Language].StatusName                             as OverallBlockStatusName,
      _BlockStatusName,
      TranspPlanBlockStatus,
      _TransPlanBlockStatusName[1:Language = $parameters.P_Language].StatusName                    as TranspPlanBlockStatusName,
      _TransPlanBlockStatusName,
      ItemInconsistencyBlkStatus,
      _ItemInconsistencyBlkStatus[1:Language = $parameters.P_Language].StatusName                  as ItemInconsistencyBlkStatusName,
      _ItemInconsistencyBlkStatus,
      GoodsMovementBlockStatus,
      _GoodsMovementBlockStatusName[1:Language = $parameters.P_Language].StatusName                as GoodsMovementBlockStatusName,
      _GoodsMovementBlockStatusName,
      UncheckedItemBlockStatus,
      _UncheckedItemBlockStatusName[1:Language = $parameters.P_Language].StatusName                as UncheckedItemBlockStatusName,
      _UncheckedItemBlockStatusName,
      DeliveryCreationStatus,
      _DeliveryCreationStatusName[1:Language = $parameters.P_Language].StatusName                  as DeliveryCreationStatusName,
      _DeliveryCreationStatusName,
      TransitProcedureStatus,
      _TransitProcedureStatus[1:Language = $parameters.P_Language].StatusName                      as TransitProcedureStatusName,
      _TransitProcedureStatus,
      LoadingStatus,
      _DeliveryLoadingStatusName[1:Language = $parameters.P_Language].StatusName                   as LoadingStatusName,
      _DeliveryLoadingStatusName,
      PickingAndDistributionStatus,
      _PickingAndDistributionStatus[1:Language = $parameters.P_Language].StatusName                as PickingAndDistrStatusName,
      _PickingAndDistributionStatus,
      WarehouseActivityStatus,
      _WarehouseActivityStatusName[1:Language = $parameters.P_Language].StatusName                 as WarehouseActivityStatusName,
      _WarehouseActivityStatusName,
      GlobalTradeServicesCheckStatus,
      _GlobalTradeServiceStatusName[1:Language = $parameters.P_Language].StatusName                as GlobalTrdServicesCheckStsName,
      _GlobalTradeServiceStatusName,
      TransportationUnitAssgmtStatus,
      _TransportUnitAssgmtStsName[1:Language = $parameters.P_Language].StatusName                  as TranspUnitAssgmtStatusName,
      _TransportUnitAssgmtStsName,
      ValuationQtyAssignmentStatus,
      _ValuationQtyAssgmtStatusName[1:Language = $parameters.P_Language].StatusName                as ValuationQtyAssgmtStatusName,
      _ValuationQtyAssgmtStatusName,
      ValueAddedServiceOrderStatus,
      _ValueAddedServiceOrderStatus[1:Language = $parameters.P_Language].StatusName                as ValueAddedServiceOrdStatusName,
      _ValueAddedServiceOrderStatus,

      EWMOverallDeliveryProgress,

      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'QuantityUnit'
      ProductQuantity,
      QuantityUnit,

      -- Gross Volume
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'VolumeUnit'} }
      unit_conversion( quantity => _GrossVolume.Quantity,
                      source_unit => _GrossVolume.UnitOfMeasure,
                      target_unit => $parameters.P_DisplayVolumeUnit,
                      error_handling => 'SET_TO_NULL' )                                            as ItemVolume,
      $parameters.P_DisplayVolumeUnit                                                              as VolumeUnit,

      --- Gross Mass
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'WeightUnit'} }
      unit_conversion( quantity => _GrossMass.Quantity,
                      source_unit => _GrossMass.UnitOfMeasure,
                      target_unit => $parameters.P_DisplayWeightUnit,
                      error_handling => 'SET_TO_NULL' )                                            as ItemGrossWeight,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'WeightUnit'
      unit_conversion( quantity => _NetMass.Quantity,
                      source_unit => _NetMass.UnitOfMeasure,
                      target_unit => $parameters.P_DisplayWeightUnit,
                      error_handling => 'SET_TO_NULL' )                                            as ItemNetWeight,
      $parameters.P_DisplayWeightUnit                                                              as WeightUnit,

      WrhsTimeZonePlannedGIDate,
      WrhsTimeZonePlannedGITime,
      WrhsTmznPlndGIStrtDateTime,
      cast(substring(cast(WrhsTmznPlndGIStrtDateTime as abap.char( 17 )), 1, 4) as abap.numc( 4 )) as WrhsTimeZnPlndGIStrtYear,
      cast(substring(cast(WrhsTmznPlndGIStrtDateTime as abap.char( 17 )), 1, 6) as abap.numc( 6 )) as WrhsTimeZnPlndGIStrtMonth,
      cast(substring(cast(WrhsTmznPlndGIStrtDateTime as abap.char( 17 )), 1, 8) as abap.numc( 8 )) as WrhsTimeZnPlndGIStrtDay,
      cast(substring(cast(WrhsTmznPlndGIStrtDateTime as abap.char( 17 )), 9, 2) as abap.numc( 2 )) as WrhsTimeZnPlndGIStrtHour,
      WrhsTmznActlGIStrtDateTime,
      EWMWhseTmznActlGIEndDateTime,
      WrhsTimeZoneActualGIDate,
      WrhsTimeZoneActualGITime,
      cast(substring(cast(WrhsTmznActlGIStrtDateTime as abap.char( 17 )), 1, 4) as abap.numc( 4 )) as WrhsTmznActlGIStrtYear,
      cast(substring(cast(WrhsTmznActlGIStrtDateTime as abap.char( 17 )), 1, 6) as abap.numc( 6 )) as WrhsTmznActlGIStrtMonth,
      cast(substring(cast(WrhsTmznActlGIStrtDateTime as abap.char( 17 )), 1, 8) as abap.numc( 8 )) as WrhsTmznActlGIStrtDay,
      cast(substring(cast(WrhsTmznActlGIStrtDateTime as abap.char( 17 )), 9, 2) as abap.numc( 2 )) as WrhsTmznActlGIStrtHour,

      @DefaultAggregation: #SUM
      cast( case when GoodsIssueStatus = '9' and WrhsTmznPlndGIStrtDateTime < WrhsTmznActlGIStrtDateTime then
                      tstmp_seconds_between(WrhsTmznPlndGIStrtDateTime, WrhsTmznActlGIStrtDateTime, 'NULL')
                 when GoodsIssueStatus <> '9' and PlndGoodsIssueStartUTCDateTime < tstmp_current_utctimestamp() then
                tstmp_seconds_between (PlndGoodsIssueStartUTCDateTime, tstmp_current_utctimestamp(), 'NULL' )
                else 0 end as abap.fltp )                                                          as GoodsIssueDelayInSeconds,

      case when GoodsIssueStatus = '9' then
      --GI finished
        case when WrhsTmznPlndGIStrtDateTime < WrhsTmznActlGIStrtDateTime then '1' else '0' end
      else case when EWMOverallDeliveryProgress = 'LDC' then
      --Loading finished, add GI leading time
             case when PlndGoodsIssueStartUTCDateTime < tstmp_add_seconds(tstmp_current_utctimestamp(), GILeadingTimeInSeconds, 'FAIL')
                      then '1'
             else '0'
             end
           else
             case when EWMOverallDeliveryProgress = 'PIC' then
      --Pickinging finished
               case when LoadingStatus = '0' or LoadingStatus = '' or LoadingStatus = '#' or LoadingStatus is null
      --Loading not relevant, only andd GI leading time
                 then case when PlndGoodsIssueStartUTCDateTime < tstmp_add_seconds(tstmp_current_utctimestamp(), GILeadingTimeInSeconds, 'FAIL')
                            then '1' else '0' end
               else
      --Loading is relevant, only andd GI leading time + Load leading time
                 case when PlndGoodsIssueStartUTCDateTime < tstmp_add_seconds(tstmp_current_utctimestamp(), GILoadLeadingTimeInSeconds, 'FAIL')
                    then '1'
                 else '0'
                 end
               end
             else
      //               case when OverallDeliveryStatus = 'Picking Planned' then
      --Picking Plan finished
                 case when LoadingStatus = '0' or LoadingStatus = '' or LoadingStatus = '#' or LoadingStatus is null
      --Loading not relevant, only andd GI leading time + Pick leading time
                   then case when PlndGoodsIssueStartUTCDateTime < tstmp_add_seconds(tstmp_current_utctimestamp(), GIPickLeadingTimeInSeconds, 'FAIL')
                            then '1' else '0' end
                 else
      --Loading is relevant, only andd GI leading time + Load leading time + Picking leading time
                   case when PlndGoodsIssueStartUTCDateTime < tstmp_add_seconds(tstmp_current_utctimestamp(), GILoadPickLeadingTimeInSeconds, 'FAIL')
                     then '1'
                   else '0'
                   end
                 end
      //               end
             end
           end
      end                                                                                          as IsOverdue
}
```
