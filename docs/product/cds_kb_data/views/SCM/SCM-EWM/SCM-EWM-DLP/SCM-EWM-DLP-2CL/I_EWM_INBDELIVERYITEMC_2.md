---
name: I_EWM_INBDELIVERYITEMC_2
description: "This CDS view provides information about inbound delivery items in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: SCM-EWM-DLP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_INBDELIVERYITEMC_2')/$value
semantic_en: "This CDS view provides information about inbound delivery items in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Inbound Delivery Item - Cube — CDS view giao diện dựa trên P_EWM_InboundDeliveryItem."
keywords:
  - "inbound"
  - "delivery"
  - "item"
  - "cube"
  - "warehouse"
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
---
# I_EWM_INBDELIVERYITEMC_2

**This CDS view provides information about inbound delivery items in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-DLP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_INBDELIVERYITEMC_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMWarehouse` | ✓ | |  |  | `CHAR(4)` | Warehouse Number/Warehouse Complex |
| `EWMInboundDelivery` | ✓ | |  |  | `CHAR(35)` | Document Number |
| `EWMInboundDeliveryItem` | ✓ | |  |  | `NUMC(10)` | Item Number |
| `InboundDeliveryUUID` |  | |  |  | `RAW(16)` | Document ID |
| `InboundDeliveryItemUUID` |  | |  |  | `RAW(16)` | Item ID |
| `NumberOfInbDelivItems` |  | |  | `0` | `FLTP(16)` |  |
| `ReceivingOffice` |  | |  |  | `CHAR(20)` | Location Number |
| `EWMMeansOfTransportType` |  | |  |  | `CHAR(10)` | Means of Transport |
| `EWMMeansOfTransportTypeName` |  | |  | `_MeansOfTransportType._Text[1:Language = $parameters.P_Language].EWMMeansOfTransportTypeName` | `CHAR(40)` | Means of Transport Description |
| `EWMMeansOfTransport` |  | |  |  | `CHAR(20)` | Means-of-Transport ID |
| `EWMInboundDeliveryItemCategory` |  | |  |  | `CHAR(3)` | Item Category |
| `DeliveryDocumentCategory` |  | |  |  | `CHAR(3)` | Document Category |
| `InboundDeliveryDocumentType` |  | |  |  | `CHAR(4)` | Document Type |
| `InbDeliveryDocumentTypeName` |  | |  | `_InboundDeliveryType._Text[1:Language = $parameters.P_Language].DeliveryTypeName` | `CHAR(40)` | Description |
| `EWMInboundDeliveryItemType` |  | |  |  | `CHAR(4)` | Item Type |
| `InboundDeliveryItemTypeName` |  | |  | `_DeliveryItemType._Text[1:Language = $parameters.P_Language].DeliveryItemTypeName` | `CHAR(40)` | Description |
| `WarehouseProcessType` |  | |  |  | `CHAR(4)` | Warehouse Process Type |
| `WarehouseDoor` |  | |  |  | `CHAR(4)` | Warehouse Door |
| `StagingAreaGroup` |  | |  |  | `CHAR(4)` | Staging Area Group |
| `StagingArea` |  | |  |  | `CHAR(4)` | Staging Area |
| `StagingBay` |  | |  |  | `CHAR(18)` | Staging Bay |
| `GoodsMovementBin` |  | |  |  | `CHAR(18)` | Storage Bin of Goods Movement Posting |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `Batch` |  | |  | `cast( Batch as charg_d )` | `CHAR(10)` | Batch Number |
| `RequirementSegment` |  | |  |  | `CHAR(40)` | Requirement Segment |
| `StockSegment` |  | |  |  | `CHAR(40)` | Stock Segment |
| `EntitledToDisposeParty` |  | |  |  | `CHAR(10)` | Party Entitled to Dispose |
| `NameOfEntitledToDisposeParty` |  | |  |  | `CHAR(81)` |  |
| `ShipFromParty` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `ShipFromPartyName` |  | |  |  | `CHAR(40)` |  |
| `IsBusinessPurposeCompleted` |  | |  |  | `CHAR(1)` |  |
| `Carrier` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `CarrierName` |  | |  |  | `CHAR(40)` |  |
| `TimeZoneID` |  | |  |  | `CHAR(6)` | Time Zone |
| `StockOwner` |  | |  |  | `CHAR(10)` | Owner |
| `EWMStockOwner` |  | |  |  | `CHAR(10)` | Owner |
| `StockOwnerName` |  | |  |  | `CHAR(81)` |  |
| `EWMStockType` |  | |  |  | `CHAR(2)` | Stock Type |
| `EWMStockTypeName` |  | |  | `case when _StockType._Text[1:Language = $parameters.P_Language].EWMStockTypeName is not null then _StockType._Text[1:Language = $parameters.P_Language].EWMStockTypeName else _StockType._WhseIndepText[1:Language = $parameters.P_Language].EWMStockTypeName end` | `CHAR(30)` |  |
| `ProductQuantity` |  | |  |  | `QUAN(31)` | Quantity |
| `ItemVolume` |  | |  |  | `QUAN(31)` |  |
| `ItemNetWeight` |  | |  |  | `QUAN(31)` |  |
| `ItemGrossWeight` |  | |  |  | `QUAN(31)` |  |
| `QuantityUnit` |  | |  |  | `UNIT(3)` | Unit of Measure |
| `DisplayWeightUnit` |  | |  |  | `UNIT(3)` | Weight Unit |
| `DisplayVolumeUnit` |  | |  |  | `UNIT(3)` | Volume Unit |
| `CompletionStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `CompletionStatusName` |  | |  | `_CompletionStatusName[1:Language = $parameters.P_Language].StatusName` | `CHAR(30)` | Individual Status of an Object |
| `UnloadingStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `UnloadingStatusName` |  | |  | `_UnloadingStatusName[1:Language = $parameters.P_Language].StatusName` | `CHAR(30)` | Individual Status of an Object |
| `PutawayStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `PutawayStatusName` |  | |  | `_PutawayStatusName[1:Language = $parameters.P_Language].StatusName` | `CHAR(30)` | Individual Status of an Object |
| `GoodsReceiptStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `GoodsReceiptStatusName` |  | |  | `_GoodsReceiptStatusName[1:Language = $parameters.P_Language].StatusName` | `CHAR(30)` | Individual Status of an Object |
| `QualityMgmtCountPlngStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `QualityMgmtCountPlngStatusName` |  | |  | `_QltyMgmtCountPlngStatusName[1:Language = $parameters.P_Language].StatusName` | `CHAR(30)` | Individual Status of an Object |
| `QualityMgmtInspPlngStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `QualityMgmtInspPlngStsName` |  | |  | `_QualityMgmtInspPlngStsName[1:Language = $parameters.P_Language].StatusName` | `CHAR(30)` | Individual Status of an Object |
| `QualityMgmtInspectionStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `QualityMgmtInspectionStsName` |  | |  | `_QualityMgmtInspectionStsName[1:Language = $parameters.P_Language].StatusName` | `CHAR(30)` | Individual Status of an Object |
| `GoodsMovementBlockStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `GoodsMovementBlockStatusName` |  | |  | `_GoodsMovementBlockStatusName[1:Language = $parameters.P_Language].StatusName` | `CHAR(30)` | Individual Status of an Object |
| `CheckToleranceStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `CheckToleranceStatusName` |  | |  | `_CheckToleranceStatusName[1:Language = $parameters.P_Language].StatusName` | `CHAR(30)` | Individual Status of an Object |
| `PlanningPutawayStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `PlanningPutawayStatusName` |  | |  | `_PlngPutawayStatusName [1:Language = $parameters.P_Language].StatusName` | `CHAR(30)` | Individual Status of an Object |
| `TransportationUnitAssgmtStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `TranspUnitAssgmtStatusName` |  | |  | `_TranspUnitAssgmtStatusName[1:Language = $parameters.P_Language].StatusName` | `CHAR(30)` | Individual Status of an Object |
| `ValueAddedServiceOrderStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `ValueAddedDelivStsName` |  | |  | `_ValueAddedDelivStsName[1:Language = $parameters.P_Language].StatusName` | `CHAR(30)` | Individual Status of an Object |
| `ValuationQtyAssignmentStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `ValuationQtyAssgmtStatusName` |  | |  | `_ValuationQtyAssgmtStatusName[1:Language = $parameters.P_Language].StatusName` | `CHAR(30)` | Individual Status of an Object |
| `WarehouseActivityStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `WarehouseActivityStatusName` |  | |  | `_WarehouseActivityStatusName[1:Language = $parameters.P_Language].StatusName` | `CHAR(30)` | Individual Status of an Object |
| `TransitStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `TransitStatusName` |  | |  | `_TransitStatusName[1:Language = $parameters.P_Language].StatusName` | `CHAR(30)` | Individual Status of an Object |
| `TransitProcedureStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `TransitProcedureStatusName` |  | |  | `_TransitProcedureStatusName [1:Language = $parameters.P_Language].StatusName` | `CHAR(30)` | Individual Status of an Object |
| `TransportationPlanningStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `TranspPlngStatusName` |  | |  | `_TranspPlngStatusName [1:Language = $parameters.P_Language].StatusName` | `CHAR(30)` | Individual Status of an Object |
| `OverallBlockStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `OverallBlockStatusName` |  | |  | `_BlockStatusName [1:Language = $parameters.P_Language].StatusName` | `CHAR(30)` | Individual Status of an Object |
| `ItemInconsistencyBlkStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `ItemInconsistencyBlkStatusName` |  | |  | `_ItemInconsistencyBlkStsName [1:Language = $parameters.P_Language].StatusName` | `CHAR(30)` | Individual Status of an Object |
| `TranspPlanBlockStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `TranspPlanBlockStatusName` |  | |  | `_TranspPlanBlockStatusName [1:Language = $parameters.P_Language].StatusName` | `CHAR(30)` | Individual Status of an Object |
| `WarehouseLocation` |  | | `_WarehouseLocation` | `WarehouseLocation` | `CHAR(20)` | Location Number |
| `InbDelivCompltnEndUTCDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `ActualGRStartUTCDateTime` |  | |  |  | `DEC(15)` | Creation Date/Time |
| `PlannedGRStartUTCDateTime` |  | |  |  | `DEC(15)` | Creation Date/Time |
| `ActualPutawayEndUTCDateTime` |  | |  |  | `DEC(15)` | Creation Date/Time |
| `UnloadingEndUTCDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `ActualGREndUTCDateTime` |  | |  |  | `DEC(15)` | Creation Date/Time |
| `PlannedGREndUTCDateTime` |  | |  |  | `DEC(15)` | Creation Date/Time |
| `InbDelivItemCrtnUTCDateTime` |  | |  |  | `DEC(15)` | UTC Date and Time |
| `PutawayEndWhseTmznDateTime` |  | |  |  | `DEC(15)` | End Date and Time of Putaway |
| `ActualGREndWhseTmznDateTime` |  | |  |  | `DEC(15)` | Goods Receipt Ended On |
| `UnloadingEndWhseTmznDateTime` |  | |  |  | `DEC(15)` | End Date and Time of Unloading |
| `InbDelivItmCmpltWhseTmznDteTme` |  | |  |  | `DEC(15)` | Completion Date and Time |
| `InbDelivCrtnWhseTmznDateTime` |  | |  |  | `DEC(15)` | Created On |
| `PlndDeliveryWhseTmznDateTime` |  | |  |  | `DEC(15)` | Planned Delivery Date and Time |
| `ActualDeliveryWhseTmznDateTime` |  | |  |  | `DEC(15)` | Delivery Date and Time |
| `PlndArrvlInYardWhseTmznDteTme` |  | |  |  | `DEC(15)` | Planned Arrival Date and Time in Yard |
| `ActlArrvlInYardWhseTmznDteTme` |  | |  |  | `DEC(15)` | Arrival Time in Yard |
| `PlndGREndWhseTmznDateTime` |  | |  |  | `DEC(15)` | Date and Time of Planned Goods Receipt |
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
| `ActualArrivalInYardUTCDateTime` |  | |  |  | `DEC(15)` | Creation Date/Time |
| `PlndArrivalInYardUTCDateTime` |  | |  |  | `DEC(15)` | Creation Date/Time |
| `NoWhseActivityTimeInMinutes` |  | |  | `case when ( CompletionStatus <> '9' and CurrentUTCTimestamp > EWMDelivLastChangeUTCDateTime ) then div(tstmp_seconds_between(EWMDelivLastChangeUTCDateTime,CurrentUTCTimestamp,'NULL' ),60) else 0 end` | `DEC(15)` |  |
| `ArrivalInYardOvrdDurnInMinutes` |  | |  | `case when GoodsReceiptStatus <> '9' and CurrentUTCTimestamp > PlndArrivalInYardUTCDateTime then cast (div(tstmp_seconds_between(PlndArrivalInYardUTCDateTime , CurrentUTCTimestamp,'NULL'),60 ) as abap.fltp ) when GoodsReceiptStatus = '9' and ActualArrivalInYardUTCDateTime > PlndArrivalInYardUTCDateTime then cast (div(tstmp_seconds_between(PlndArrivalInYardUTCDateTime,ActualArrivalInYardUTCDateTime,'NULL'),60 ) as abap.fltp ) else 0 end` | `FLTP(16)` |  |
| `WaitInYardDurationInMinutes` |  | |  | `case when ActualGRStartUTCDateTime > ActualArrivalInYardUTCDateTime then cast ( div(tstmp_seconds_between(ActualArrivalInYardUTCDateTime,ActualGRStartUTCDateTime,'NULL'),60 ) as abap.fltp ) else 0 end` | `FLTP(16)` |  |
| `GoodsReceiptDurationInMinutes` |  | |  | `case when ActualPutawayEndUTCDateTime > ActualGRStartUTCDateTime then cast ( div( tstmp_seconds_between( ActualGRStartUTCDateTime,ActualPutawayEndUTCDateTime,'NULL'), 60) as abap.fltp ) else 0 end` | `FLTP(16)` |  |
| `PlndDelivTo30MinsWhseDteTme` |  | |  | `case when WhseTmznPlannedDeliverymins < '30' then cast(cast(cast(concat( substring(cast(PlndDeliveryWhseTmznDateTime as abap.char( 17 )), 1, 10), '0000' ) as abap.numc( 15 ) ) as abap.dec(15) ) as tzntstmps preserving type ) else cast(cast(cast(concat( substring(cast(PlndDeliveryWhseTmznDateTime as abap.char( 17 )), 1, 10), '3000' ) as abap.numc( 15 ) ) as abap.dec(15) ) as tzntstmps preserving type ) end` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `PlndDelivTo60MinsWhseDteTme` |  | |  | `cast(cast(cast(concat( substring(cast(PlndDeliveryWhseTmznDateTime as abap.char( 17 )), 1, 10), '0000' ) as abap.numc( 15 )) as abap.dec(15) ) as tzntstmps preserving type )` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `PlndArrvlTo30MinsWhseDteTme` |  | |  | `case when WhseTmznPlndArrivalinYardmins < '30' then cast(cast(cast(concat( substring(cast(PlndArrvlInYardWhseTmznDteTme as abap.char( 17 )), 1, 10), '0000' ) as abap.numc( 15 ) ) as abap.dec(15) ) as tzntstmps preserving type ) else cast(cast(cast(concat( substring(cast(PlndArrvlInYardWhseTmznDteTme as abap.char( 17 )), 1, 10), '3000' ) as abap.numc( 15 ) ) as abap.dec(15) ) as tzntstmps preserving type ) end` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `PlndArrvlTo60MinsWhseDteTme` |  | |  | `cast(cast(cast(concat( substring(cast(PlndArrvlInYardWhseTmznDteTme as abap.char( 17 )), 1, 10), '0000' ) as abap.numc( 15 )) as abap.dec(15) ) as tzntstmps preserving type )` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `ActlDelivTo30MinsWhseDteTme` |  | |  | `case when WhseTmznActualDeliverymins < '30' then cast(cast(cast(concat( substring(cast(ActualDeliveryWhseTmznDateTime as abap.char( 17 )), 1, 10), '0000' ) as abap.numc( 15 ) ) as abap.dec(15) ) as tzntstmps preserving type ) else cast(cast(cast(concat( substring(cast(ActualDeliveryWhseTmznDateTime as abap.char( 17 )), 1, 10), '3000' ) as abap.numc( 15 ) ) as abap.dec(15) ) as tzntstmps preserving type ) end` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `ActlDelivTo60MinsWhseDteTme` |  | |  | `cast(cast(cast(concat( substring(cast(ActualDeliveryWhseTmznDateTime as abap.char( 17 )), 1, 10), '0000' ) as abap.numc( 15 )) as abap.dec(15) ) as tzntstmps preserving type )` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `ActlArrvlTo30MinsWhseDteTme` |  | |  | `case when WhseTmznActualArrvlinYardmins < '30' then cast(cast(cast(concat( substring(cast(ActlArrvlInYardWhseTmznDteTme as abap.char( 17 )), 1, 10), '0000' ) as abap.numc( 15 ) ) as abap.dec(15) ) as tzntstmps preserving type ) else cast(cast(cast(concat( substring(cast(ActlArrvlInYardWhseTmznDteTme as abap.char( 17 )), 1, 10), '3000' ) as abap.numc( 15 ) ) as abap.dec(15) ) as tzntstmps preserving type ) end` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `ActlArrvlTo60MinsWhseDteTme` |  | |  | `cast(cast(cast(concat( substring(cast(ActlArrvlInYardWhseTmznDteTme as abap.char( 17 )), 1, 10), '0000' ) as abap.numc( 15 )) as abap.dec(15) ) as tzntstmps preserving type )` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `CompltnEndTo30MinsWhseDteTme` |  | |  | `case when WhseTmznCompletionEndmins < '30' then cast(cast(cast(concat( substring(cast(InbDelivItmCmpltWhseTmznDteTme as abap.char( 17 )), 1, 10), '0000' ) as abap.numc( 15 ) ) as abap.dec(15) ) as tzntstmps preserving type ) else cast(cast(cast(concat( substring(cast(InbDelivItmCmpltWhseTmznDteTme as abap.char( 17 )), 1, 10), '3000' ) as abap.numc( 15 ) ) as abap.dec(15) ) as tzntstmps preserving type ) end` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `CompltnEndTo60MinsWhseDteTme` |  | |  | `cast(cast(cast(concat( substring(cast(InbDelivItmCmpltWhseTmznDteTme as abap.char( 17 )), 1, 10), '0000' ) as abap.numc( 15 )) as abap.dec(15) ) as tzntstmps preserving type )` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `GREndRnddTo30MinsWhseDteTme` |  | |  | `case when WhseTmznGoodsReceiptEndmins < '30' then cast(cast(cast(concat( substring(cast(ActualGREndWhseTmznDateTime as abap.char( 17 )), 1, 10), '0000' ) as abap.numc( 15 ) ) as abap.dec(15) ) as tzntstmps preserving type ) else cast(cast(cast(concat( substring(cast(ActualGREndWhseTmznDateTime as abap.char( 17 )), 1, 10), '3000' ) as abap.numc( 15 ) ) as abap.dec(15) ) as tzntstmps preserving type ) end` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `GREndRnddTo60MinsWhseDteTme` |  | |  | `cast(cast(cast(concat( substring(cast(ActualGREndWhseTmznDateTime as abap.char( 17 )), 1, 10), '0000' ) as abap.numc( 15 )) as abap.dec(15) ) as tzntstmps preserving type )` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `PtwyEndRnddTo30MinsWhseDteTme` |  | |  | `case when WhseTmznPutawayEndmins < '30' then cast(cast(cast(concat( substring(cast(PutawayEndWhseTmznDateTime as abap.char( 17 )), 1, 10), '0000' ) as abap.numc( 15 ) ) as abap.dec(15) ) as tzntstmps preserving type ) else cast(cast(cast(concat( substring(cast(PutawayEndWhseTmznDateTime as abap.char( 17 )), 1, 10), '3000' ) as abap.numc( 15 ) ) as abap.dec(15) ) as tzntstmps preserving type ) end` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `PtwyEndRnddTo60MinsWhseDteTme` |  | |  | `cast(cast(cast(concat( substring(cast(PutawayEndWhseTmznDateTime as abap.char( 17 )), 1, 10), '0000' ) as abap.numc( 15 )) as abap.dec(15) ) as tzntstmps preserving type )` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `UnldgEndRnddTo30MinsWhseDteTme` |  | |  | `case when WhseTmznUnloadingEndmins < '30' then cast(cast(cast(concat( substring(cast(UnloadingEndWhseTmznDateTime as abap.char( 17 )), 1, 10), '0000' ) as abap.numc( 15 ) ) as abap.dec(15) ) as tzntstmps preserving type ) else cast(cast(cast(concat( substring(cast(UnloadingEndWhseTmznDateTime as abap.char( 17 )), 1, 10), '3000' ) as abap.numc( 15 ) ) as abap.dec(15) ) as tzntstmps preserving type ) end` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `UnldgEndRnddTo60MinsWhseDteTme` |  | |  | `cast(cast(cast(concat( substring(cast(UnloadingEndWhseTmznDateTime as abap.char( 17 )), 1, 10), '0000' ) as abap.numc( 15 )) as abap.dec(15) ) as tzntstmps preserving type )` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `EWMPlndGRWhseTmznHour` |  | |  | `cast(substring(cast(PlndGoodsReceiptWhseTmznHour as abap.char( 10 ) ),9,2) as ewm_de_plndgr_in_hour)` | `NUMC(2)` | Planned GR Time in Hours (Whse Time Zone) |
| `EWMPlndDeliveryWhseTmznHour` |  | |  | `cast(substring(cast(PlannedDeliveryWhseTmznHour as abap.char( 10 ) ),9,2) as ewm_de_plnddelivery_in_hour)` | `NUMC(2)` | Planned Delivey Time in Hours (Warehouse Time Zone) |
| `EWMPlndGoodsReceiptDateIsToday` |  | |  | `case when PlndGoodsReceiptWhseTmznDate = EWMWarehouseCurrentDate then cast ('X' as ewm_de_plndgr_is_today) else cast ('' as ewm_de_plndgr_is_today) end` | `CHAR(1)` | Planned Goods Receipt Date Is Today (Whse Time Zone) |
| `EWMActualPutawayDateIsToday` |  | |  | `case when PutawayEndWhseTmznDate = EWMWarehouseCurrentDate then cast ('X' as ewm_de_actual_putaway_is_today) else cast ('' as ewm_de_actual_putaway_is_today) end` | `CHAR(1)` | Actual Putaway Date Is Today (Warehouse Time Zone) |
| `EWMPlndOrActGRIsToday` |  | |  | `case when PlndGoodsReceiptWhseTmznDate = EWMWarehouseCurrentDate or GoodsReceiptEndWhseTmznDate = EWMWarehouseCurrentDate then cast ('X' as ewm_de_plnd_actual_gr_is_today) else cast ('' as ewm_de_plnd_actual_gr_is_today) end` | `CHAR(1)` | Planned/Actual Goods Receipt Date Is Today |
| `EWMPlndDeliveryDateIsToday` |  | |  | `case when PlannedDeliveryWhseTmznDate = EWMWarehouseCurrentDate then cast ('X' as ewm_de_plnddelivery_is_today) else cast ('' as ewm_de_plnddelivery_is_today) end` | `CHAR(1)` | Planned Delivery Date Is Today (Warehouse Time Zone) |
| `EWMQuantityHasAdjustment` |  | |  |  | `CHAR(1)` | Delivery Quantity Has Adjustments |
| `EWMPlndGRDateIsInPast` |  | |  |  | `CHAR(1)` | Planned Goods Receipt Date Is in Past |
| `EWMActualGRDateIsOnTime` |  | |  |  | `CHAR(1)` | Actual Goods Receipt Is on Time |
| `EWMPlndDeliveryTimeIsInPast` |  | |  |  | `CHAR(1)` | Planned Delivery Time Is in Past |
| `EWMActGRIsBeforePlndDelivTime` |  | |  |  | `CHAR(1)` | Actual Goods Receipt Date Is Before Planned Delivery Date |
| `_Warehouse` | | ✓ | | | | |
| `_DeliveryItemType` | | ✓ | | | | |
| `_DeliveryType` | | ✓ | | | | |
| `_InboundDeliveryType` | | ✓ | | | | |
| `_DeliveryCategory` | | ✓ | | | | |
| `_ItemCat` | | ✓ | | | | |
| `_WarehouseProcessType` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_MeansOfTransportType` | | ✓ | | | | |
| `_ShipFromParty` | | ✓ | | | | |
| `_Carrier` | | ✓ | | | | |
| `_ShipFromPartyNew` | | ✓ | | | | |
| `_CarrierNew` | | ✓ | | | | |
| `_StagingArea` | | ✓ | | | | |
| `_StorageType` | | ✓ | | | | |
| `_StockType` | | ✓ | | | | |
| `_GoodsReceiptStatus` | | ✓ | | | | |
| `_PutawayStatus` | | ✓ | | | | |
| `_BlockStatus` | | ✓ | | | | |
| `_TranspPlanBlockStatus` | | ✓ | | | | |
| `_ItemInconsistencyBlkSts` | | ✓ | | | | |
| `_GoodsMovementBlockStatus` | | ✓ | | | | |
| `_TransitProcedureStatus` | | ✓ | | | | |
| `_WarehouseActivityStatus` | | ✓ | | | | |
| `_TranspUnitAssgmtStatus` | | ✓ | | | | |
| `_ValuationQtyAssgmtStatus` | | ✓ | | | | |
| `_ValueAddedDelivSts` | | ✓ | | | | |
| `_UnloadingStatus` | | ✓ | | | | |
| `_CheckToleranceStatus` | | ✓ | | | | |
| `_PlngPutawayStatus` | | ✓ | | | | |
| `_TransitStatus` | | ✓ | | | | |
| `_TranspPlngStatus` | | ✓ | | | | |
| `_CompletionStatus` | | ✓ | | | | |
| `_QualityMgmtInspectionSts` | | ✓ | | | | |
| `_QltyMgmtCountPlngStatus` | | ✓ | | | | |
| `_QualityMgmtInspPlngSts` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Warehouse` | `I_EWM_WarehouseNumber_2` | [0..1] |
| `_DeliveryItemType` | `I_EWM_DeliveryItemType_2` | [0..1] |
| `_DeliveryType` | `I_EWM_DeliveryType_2` | [0..1] |
| `_InboundDeliveryType` | `I_EWM_InboundDeliveryType_2` | [0..1] |
| `_DeliveryCategory` | `I_EWM_DeliveryCategory_2` | [0..1] |
| `_ItemCat` | `I_EWM_DeliveryItemCategory_2` | [0..1] |
| `_WarehouseProcessType` | `I_EWM_WrhsProcType_2` | [0..1] |
| `_Product` | `I_Product` | [1] |
| `_MeansOfTransportType` | `I_EWM_MnsOfTranspType_2` | [0..1] |
| `_ShipFromParty` | `I_EWM_BusinessPartner` | [0..1] |
| `_Carrier` | `I_EWM_BusinessPartner` | [0..1] |
| `_ShipFromPartyNew` | `I_BusinessPartner` | [0..1] |
| `_CarrierNew` | `I_BusinessPartner` | [0..1] |
| `_StagingArea` | `I_EWM_StorageSection_2` | [0..1] |
| `_StorageType` | `I_EWM_StorageType_2` | [0..1] |
| `_WarehouseLocation` | `I_EWM_DeliveryBPLocation` | [0..1] |
| `_StockType` | `I_EWM_StockType_2` | [0..1] |
| `_GoodsReceiptStatus` | `I_EWM_WhseReqStatusValue` | [0..1] |
| `_PutawayStatus` | `I_EWM_WhseReqStatusValue` | [0..1] |
| `_BlockStatus` | `I_EWM_WhseReqStatusValue` | [0..1] |
| `_TranspPlanBlockStatus` | `I_EWM_WhseReqStatusValue` | [0..1] |
| `_ItemInconsistencyBlkSts` | `I_EWM_WhseReqStatusValue` | [0..1] |
| `_GoodsMovementBlockStatus` | `I_EWM_WhseReqStatusValue` | [0..1] |
| `_TransitProcedureStatus` | `I_EWM_WhseReqStatusValue` | [0..1] |
| `_WarehouseActivityStatus` | `I_EWM_WhseReqStatusValue` | [0..1] |
| `_TranspUnitAssgmtStatus` | `I_EWM_WhseReqStatusValue` | [0..1] |
| `_ValuationQtyAssgmtStatus` | `I_EWM_WhseReqStatusValue` | [0..1] |
| `_ValueAddedDelivSts` | `I_EWM_WhseReqStatusValue` | [0..1] |
| `_UnloadingStatus` | `I_EWM_WhseReqStatusValue` | [0..1] |
| `_CheckToleranceStatus` | `I_EWM_WhseReqStatusValue` | [0..1] |
| `_PlngPutawayStatus` | `I_EWM_WhseReqStatusValue` | [0..1] |
| `_TransitStatus` | `I_EWM_WhseReqStatusValue` | [0..1] |
| `_TranspPlngStatus` | `I_EWM_WhseReqStatusValue` | [0..1] |
| `_CompletionStatus` | `I_EWM_WhseReqStatusValue` | [0..1] |
| `_QualityMgmtInspectionSts` | `I_EWM_WhseReqStatusValue` | [0..1] |
| `_QltyMgmtCountPlngStatus` | `I_EWM_WhseReqStatusValue` | [0..1] |
| `_QualityMgmtInspPlngSts` | `I_EWM_WhseReqStatusValue` | [0..1] |
| `_BlockStatusName` | `I_EWM_DelivStsHelperText` | [0..*] |
| `_TranspPlanBlockStatusName` | `I_EWM_DelivStsHelperText` | [0..*] |
| `_ItemInconsistencyBlkStsName` | `I_EWM_DelivStsHelperText` | [0..*] |
| `_GoodsMovementBlockStatusName` | `I_EWM_DelivStsHelperText` | [0..*] |
| `_TransitProcedureStatusName` | `I_EWM_DelivStsHelperText` | [0..*] |
| `_WarehouseActivityStatusName` | `I_EWM_DelivStsHelperText` | [0..*] |
| `_TranspUnitAssgmtStatusName` | `I_EWM_DelivStsHelperText` | [0..*] |
| `_ValuationQtyAssgmtStatusName` | `I_EWM_DelivStsHelperText` | [0..*] |
| `_ValueAddedDelivStsName` | `I_EWM_DelivStsHelperText` | [0..*] |
| `_UnloadingStatusName` | `I_EWM_DelivStsHelperText` | [0..*] |
| `_CheckToleranceStatusName` | `I_EWM_DelivStsHelperText` | [0..*] |
| `_PlngPutawayStatusName` | `I_EWM_DelivStsHelperText` | [0..*] |
| `_TransitStatusName` | `I_EWM_DelivStsHelperText` | [0..*] |
| `_TranspPlngStatusName` | `I_EWM_DelivStsHelperText` | [0..*] |
| `_CompletionStatusName` | `I_EWM_DelivStsHelperText` | [0..*] |
| `_PutawayStatusName` | `I_EWM_DelivStsHelperText` | [0..*] |
| `_GoodsReceiptStatusName` | `I_EWM_DelivStsHelperText` | [0..*] |
| `_QualityMgmtInspectionStsName` | `I_EWM_DelivStsHelperText` | [0..*] |
| `_QltyMgmtCountPlngStatusName` | `I_EWM_DelivStsHelperText` | [0..*] |
| `_QualityMgmtInspPlngStsName` | `I_EWM_DelivStsHelperText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_INBDELIVERYITEMC_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_INBDELIVERYITEMC_2')/$value)*

```abap
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@Analytics.internalName:#LOCAL
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
@EndUserText.label: 'Inbound Delivery Item - Cube'
define view entity I_EWM_InbDeliveryItemC_2
  with parameters
    @Environment.systemField: #SYSTEM_LANGUAGE
    @Consumption.hidden
    P_Language : /scwm/lang
  as select from P_EWM_InboundDeliveryItem as InboundDeliveryItem
  association [0..1] to I_EWM_WarehouseNumber_2      as _Warehouse                    on  $projection.EWMWarehouse = _Warehouse.EWMWarehouse
  association [0..1] to I_EWM_DeliveryItemType_2     as _DeliveryItemType             on  $projection.DeliveryDocumentCategory   = _DeliveryItemType.EWMDeliveryDocumentCategory
                                                                                      and $projection.EWMInboundDeliveryItemType = _DeliveryItemType.DeliveryItemType

  association [0..1] to I_EWM_DeliveryType_2         as _DeliveryType                 on  $projection.DeliveryDocumentCategory    = _DeliveryType.EWMDeliveryDocumentCategory
                                                                                      and $projection.InboundDeliveryDocumentType = _DeliveryType.EWMDeliveryDocumentType
  association [0..1] to I_EWM_InboundDeliveryType_2  as _InboundDeliveryType          on  $projection.DeliveryDocumentCategory    = _InboundDeliveryType.EWMDeliveryDocumentCategory
                                                                                      and $projection.InboundDeliveryDocumentType = _InboundDeliveryType.EWMDeliveryDocumentType
  association [0..1] to I_EWM_DeliveryCategory_2     as _DeliveryCategory             on  $projection.DeliveryDocumentCategory = _DeliveryCategory.EWMDeliveryDocumentCategory
  association [0..1] to I_EWM_DeliveryItemCategory_2 as _ItemCat                      on  $projection.EWMInboundDeliveryItemCategory = _ItemCat.EWMInboundDeliveryItemCategory
  association [0..1] to I_EWM_WrhsProcType_2         as _WarehouseProcessType         on  $projection.WarehouseProcessType = _WarehouseProcessType.WarehouseProcessType
                                                                                      and $projection.EWMWarehouse         = _WarehouseProcessType.EWMWarehouse

  association [1]    to I_Product                    as _Product                      on  $projection.Product = _Product.Product
  association [0..1] to I_EWM_MnsOfTranspType_2      as _MeansOfTransportType         on  $projection.EWMMeansOfTransportType = _MeansOfTransportType.EWMMeansOfTransportType
  association [0..1] to I_EWM_BusinessPartner        as _ShipFromParty                on  $projection.ShipFromParty = _ShipFromParty.BusinessPartner
  association [0..1] to I_EWM_BusinessPartner        as _Carrier                      on  $projection.Carrier = _Carrier.BusinessPartner
  association [0..1] to I_BusinessPartner            as _ShipFromPartyNew                on  $projection.ShipFromParty = _ShipFromPartyNew.BusinessPartner
  association [0..1] to I_BusinessPartner            as _CarrierNew                      on  $projection.Carrier = _CarrierNew.BusinessPartner
  association [0..1] to I_EWM_StorageSection_2       as _StagingArea                  on  $projection.EWMWarehouse     = _StagingArea.EWMWarehouse
                                                                                      and $projection.StagingAreaGroup = _StagingArea.EWMStorageType
                                                                                      and $projection.StagingArea      = _StagingArea.EWMStorageSection
  association [0..1] to I_EWM_StorageType_2          as _StorageType                  on  $projection.StagingAreaGroup = _StorageType.EWMStorageType
                                                                                      and $projection.EWMWarehouse     = _StorageType.EWMWarehouse
  association [0..1] to I_EWM_DeliveryBPLocation     as _WarehouseLocation            on  $projection.InboundDeliveryUUID     = _WarehouseLocation.OutboundDeliveryOrderUUID
                                                                                      and $projection.InboundDeliveryItemUUID = _WarehouseLocation.OutboundDeliveryOrderItemUUID
  association [0..1] to I_EWM_StockType_2            as _StockType                    on  $projection.EWMWarehouse = _StockType.EWMWarehouse
                                                                                      and $projection.EWMStockType = _StockType.EWMStockType
                                                                                      
  association [0..1] to I_EWM_WhseReqStatusValue     as _GoodsReceiptStatus           on  $projection.GoodsReceiptStatus             = _GoodsReceiptStatus.EWMWarehouseRequestStatus
                                                                                      and _GoodsReceiptStatus.EWMWarehouseRequestStatusType = 'DGR'
  association [0..1] to I_EWM_WhseReqStatusValue     as _PutawayStatus                on  $projection.PutawayStatus             = _PutawayStatus.EWMWarehouseRequestStatus
                                                                                      and _PutawayStatus.EWMWarehouseRequestStatusType = 'DPT'
  association [0..1] to I_EWM_WhseReqStatusValue     as _BlockStatus                  on  $projection.OverallBlockStatus            = _BlockStatus.EWMWarehouseRequestStatus
                                                                                      and _BlockStatus.EWMWarehouseRequestStatusType = 'DBO'
  association [0..1] to I_EWM_WhseReqStatusValue     as _TranspPlanBlockStatus        on  $projection.TranspPlanBlockStatus            = _TranspPlanBlockStatus.EWMWarehouseRequestStatus
                                                                                      and _TranspPlanBlockStatus.EWMWarehouseRequestStatusType = 'DBT' 
                                                                                                                                                                                   
  association [0..1] to I_EWM_WhseReqStatusValue     as _ItemInconsistencyBlkSts      on  $projection.ItemInconsistencyBlkStatus          = _ItemInconsistencyBlkSts.EWMWarehouseRequestStatus
                                                                                      and _ItemInconsistencyBlkSts.EWMWarehouseRequestStatusType = 'DBD'
  association [0..1] to I_EWM_WhseReqStatusValue     as _GoodsMovementBlockStatus     on  $projection.GoodsMovementBlockStatus             = _GoodsMovementBlockStatus.EWMWarehouseRequestStatus
                                                                                      and _GoodsMovementBlockStatus.EWMWarehouseRequestStatusType = 'DWG'
  association [0..1] to I_EWM_WhseReqStatusValue     as _TransitProcedureStatus       on  $projection.TransitProcedureStatus             = _TransitProcedureStatus.EWMWarehouseRequestStatus
                                                                                      and _TransitProcedureStatus.EWMWarehouseRequestStatusType = 'DWN'
  association [0..1] to I_EWM_WhseReqStatusValue     as _WarehouseActivityStatus      on  $projection.WarehouseActivityStatus             = _WarehouseActivityStatus.EWMWarehouseRequestStatus
                                                                                      and _WarehouseActivityStatus.EWMWarehouseRequestStatusType = 'DWA'
  association [0..1] to I_EWM_WhseReqStatusValue     as _TranspUnitAssgmtStatus       on  $projection.TransportationUnitAssgmtStatus     = _TranspUnitAssgmtStatus.EWMWarehouseRequestStatus
                                                                                      and _TranspUnitAssgmtStatus.EWMWarehouseRequestStatusType = 'DTU'
  association [0..1] to I_EWM_WhseReqStatusValue     as _ValuationQtyAssgmtStatus     on  $projection.ValuationQtyAssignmentStatus         = _ValuationQtyAssgmtStatus.EWMWarehouseRequestStatus
                                                                                      and _ValuationQtyAssgmtStatus.EWMWarehouseRequestStatusType = 'DVQ'
  association [0..1] to I_EWM_WhseReqStatusValue     as _ValueAddedDelivSts       on  $projection.ValueAddedServiceOrderStatus   = _ValueAddedDelivSts.EWMWarehouseRequestStatus
                                                                                      and _ValueAddedDelivSts.EWMWarehouseRequestStatusType = 'DWV'
  association [0..1] to I_EWM_WhseReqStatusValue     as _UnloadingStatus          on  $projection.UnloadingStatus             = _UnloadingStatus.EWMWarehouseRequestStatus
                                                                                      and _UnloadingStatus.EWMWarehouseRequestStatusType = 'DUN'
  association [0..1] to I_EWM_WhseReqStatusValue     as _CheckToleranceStatus     on  $projection.CheckToleranceStatus             = _CheckToleranceStatus.EWMWarehouseRequestStatus
                                                                                      and _CheckToleranceStatus.EWMWarehouseRequestStatusType = 'DTL'
  association [0..1] to I_EWM_WhseReqStatusValue     as _PlngPutawayStatus        on  $projection.PlanningPutawayStatus         = _PlngPutawayStatus.EWMWarehouseRequestStatus
                                                                                      and _PlngPutawayStatus.EWMWarehouseRequestStatusType = 'DEU'
  association [0..1] to I_EWM_WhseReqStatusValue     as _TransitStatus            on  $projection.TransitStatus             = _TransitStatus.EWMWarehouseRequestStatus
                                                                                      and _TransitStatus.EWMWarehouseRequestStatusType = 'DTR'
  association [0..1] to I_EWM_WhseReqStatusValue     as _TranspPlngStatus         on  $projection.TransportationPlanningStatus = _TranspPlngStatus.EWMWarehouseRequestStatus
                                                                                      and _TranspPlngStatus.EWMWarehouseRequestStatusType = 'DTD'
  association [0..1] to I_EWM_WhseReqStatusValue     as _CompletionStatus         on  $projection.CompletionStatus             = _CompletionStatus.EWMWarehouseRequestStatus
                                                                                      and _CompletionStatus.EWMWarehouseRequestStatusType = 'DCO'
  association [0..1] to I_EWM_WhseReqStatusValue     as _QualityMgmtInspectionSts on  $projection.QualityMgmtInspectionStatus          = _QualityMgmtInspectionSts.EWMWarehouseRequestStatus
                                                                                      and _QualityMgmtInspectionSts.EWMWarehouseRequestStatusType = 'DQE'
  association [0..1] to I_EWM_WhseReqStatusValue     as _QltyMgmtCountPlngStatus  on  $projection.QualityMgmtCountPlngStatus          = _QltyMgmtCountPlngStatus.EWMWarehouseRequestStatus
                                                                                      and _QltyMgmtCountPlngStatus.EWMWarehouseRequestStatusType = 'DQS'
  association [0..1] to I_EWM_WhseReqStatusValue     as _QualityMgmtInspPlngSts   on  $projection.QualityMgmtInspPlngStatus          = _QualityMgmtInspPlngSts.EWMWarehouseRequestStatus
                                                                                      and _QualityMgmtInspPlngSts.EWMWarehouseRequestStatusType = 'DQP'                                                                                      
  --Other status text
  association [0..*] to I_EWM_DelivStsHelperText     as _BlockStatusName              on  $projection.OverallBlockStatus      = _BlockStatusName.DeliveryStatus
                                                                                      and _BlockStatusName.DeliveryStatusType = 'DBO'
  association [0..*] to I_EWM_DelivStsHelperText     as _TranspPlanBlockStatusName    on  $projection.TranspPlanBlockStatus             = _TranspPlanBlockStatusName.DeliveryStatus
                                                                                      and _TranspPlanBlockStatusName.DeliveryStatusType = 'DBT'
  association [0..*] to I_EWM_DelivStsHelperText     as _ItemInconsistencyBlkStsName  on  $projection.ItemInconsistencyBlkStatus          = _ItemInconsistencyBlkStsName.DeliveryStatus
                                                                                      and _ItemInconsistencyBlkStsName.DeliveryStatusType = 'DBD'
  association [0..*] to I_EWM_DelivStsHelperText     as _GoodsMovementBlockStatusName on  $projection.GoodsMovementBlockStatus             = _GoodsMovementBlockStatusName.DeliveryStatus
                                                                                      and _GoodsMovementBlockStatusName.DeliveryStatusType = 'DWG'
  association [0..*] to I_EWM_DelivStsHelperText     as _TransitProcedureStatusName   on  $projection.TransitProcedureStatus             = _TransitProcedureStatusName.DeliveryStatus
                                                                                      and _TransitProcedureStatusName.DeliveryStatusType = 'DWN'
  association [0..*] to I_EWM_DelivStsHelperText     as _WarehouseActivityStatusName  on  $projection.WarehouseActivityStatus             = _WarehouseActivityStatusName.DeliveryStatus
                                                                                      and _WarehouseActivityStatusName.DeliveryStatusType = 'DWA'
  association [0..*] to I_EWM_DelivStsHelperText     as _TranspUnitAssgmtStatusName   on  $projection.TransportationUnitAssgmtStatus     = _TranspUnitAssgmtStatusName.DeliveryStatus
                                                                                      and _TranspUnitAssgmtStatusName.DeliveryStatusType = 'DTU'
  association [0..*] to I_EWM_DelivStsHelperText     as _ValuationQtyAssgmtStatusName on  $projection.ValuationQtyAssignmentStatus         = _ValuationQtyAssgmtStatusName.DeliveryStatus
                                                                                      and _ValuationQtyAssgmtStatusName.DeliveryStatusType = 'DVQ'
  association [0..*] to I_EWM_DelivStsHelperText     as _ValueAddedDelivStsName       on  $projection.ValueAddedServiceOrderStatus   = _ValueAddedDelivStsName.DeliveryStatus
                                                                                      and _ValueAddedDelivStsName.DeliveryStatusType = 'DWV'
  association [0..*] to I_EWM_DelivStsHelperText     as _UnloadingStatusName          on  $projection.UnloadingStatus             = _UnloadingStatusName.DeliveryStatus
                                                                                      and _UnloadingStatusName.DeliveryStatusType = 'DUN'
  association [0..*] to I_EWM_DelivStsHelperText     as _CheckToleranceStatusName     on  $projection.CheckToleranceStatus             = _CheckToleranceStatusName.DeliveryStatus
                                                                                      and _CheckToleranceStatusName.DeliveryStatusType = 'DTL'
  association [0..*] to I_EWM_DelivStsHelperText     as _PlngPutawayStatusName        on  $projection.PlanningPutawayStatus         = _PlngPutawayStatusName.DeliveryStatus
                                                                                      and _PlngPutawayStatusName.DeliveryStatusType = 'DEU'
  association [0..*] to I_EWM_DelivStsHelperText     as _TransitStatusName            on  $projection.TransitStatus             = _TransitStatusName.DeliveryStatus
                                                                                      and _TransitStatusName.DeliveryStatusType = 'DTR'
  association [0..*] to I_EWM_DelivStsHelperText     as _TranspPlngStatusName         on  $projection.TransportationPlanningStatus = _TranspPlngStatusName.DeliveryStatus
                                                                                      and _TranspPlngStatusName.DeliveryStatusType = 'DTD'
  association [0..*] to I_EWM_DelivStsHelperText     as _CompletionStatusName         on  $projection.CompletionStatus             = _CompletionStatusName.DeliveryStatus
                                                                                      and _CompletionStatusName.DeliveryStatusType = 'DCO'
  association [0..*] to I_EWM_DelivStsHelperText     as _PutawayStatusName            on  $projection.PutawayStatus             = _PutawayStatusName.DeliveryStatus
                                                                                      and _PutawayStatusName.DeliveryStatusType = 'DPT'
  association [0..*] to I_EWM_DelivStsHelperText     as _GoodsReceiptStatusName       on  $projection.GoodsReceiptStatus             = _GoodsReceiptStatusName.DeliveryStatus
                                                                                      and _GoodsReceiptStatusName.DeliveryStatusType = 'DGR'
  association [0..*] to I_EWM_DelivStsHelperText     as _QualityMgmtInspectionStsName on  $projection.QualityMgmtInspectionStatus          = _QualityMgmtInspectionStsName.DeliveryStatus
                                                                                      and _QualityMgmtInspectionStsName.DeliveryStatusType = 'DQE'
  association [0..*] to I_EWM_DelivStsHelperText     as _QltyMgmtCountPlngStatusName  on  $projection.QualityMgmtCountPlngStatus          = _QltyMgmtCountPlngStatusName.DeliveryStatus
                                                                                      and _QltyMgmtCountPlngStatusName.DeliveryStatusType = 'DQS'
  association [0..*] to I_EWM_DelivStsHelperText     as _QualityMgmtInspPlngStsName   on  $projection.QualityMgmtInspPlngStatus          = _QualityMgmtInspPlngStsName.DeliveryStatus
                                                                                      and _QualityMgmtInspPlngStsName.DeliveryStatusType = 'DQP'

{
      @ObjectModel.foreignKey.association: '_Warehouse'
  key EWMWarehouse,
  key EWMInboundDelivery,
  key EWMInboundDeliveryItem,

      InboundDeliveryUUID,
      InboundDeliveryItemUUID,
      @DefaultAggregation: #SUM
      1.0                                                                                                                                                                                            as NumberOfInbDelivItems,

      ReceivingOffice,
      @ObjectModel.foreignKey.association: '_MeansOfTransportType'
      EWMMeansOfTransportType,

      _MeansOfTransportType._Text[1:Language = $parameters.P_Language].EWMMeansOfTransportTypeName                                                                                                   as EWMMeansOfTransportTypeName,
      EWMMeansOfTransport,
      @ObjectModel.foreignKey.association: '_ItemCat'
      EWMInboundDeliveryItemCategory,

      @ObjectModel.foreignKey.association: '_DeliveryCategory'
      DeliveryDocumentCategory,
      _ItemCat._Text[1:Language = $parameters.P_Language].DeliveryItemCategoryName,
      @ObjectModel.foreignKey.association: '_InboundDeliveryType'
      InboundDeliveryDocumentType,
      @Semantics.text: true
      _InboundDeliveryType._Text[1:Language = $parameters.P_Language].DeliveryTypeName                                                                                                               as InbDeliveryDocumentTypeName,

      @ObjectModel.foreignKey.association: '_DeliveryItemType'
      EWMInboundDeliveryItemType,

      _DeliveryItemType._Text[1:Language = $parameters.P_Language].DeliveryItemTypeName                                                                                                              as InboundDeliveryItemTypeName,
      @ObjectModel.foreignKey.association: '_WarehouseProcessType'
      WarehouseProcessType,
      _WarehouseProcessType._Text[1:Language = $parameters.P_Language].WarehouseProcessTypeName,
      WarehouseDoor,
      @ObjectModel.foreignKey.association: '_StorageType'
      StagingAreaGroup,
      @ObjectModel.foreignKey.association: '_StagingArea'
      StagingArea,
      StagingBay,
      GoodsMovementBin,
      @ObjectModel.foreignKey.association: '_Product'
      Product,
      _Product._Text[1:Language = $parameters.P_Language].ProductName,
      cast( Batch as charg_d  )                                                                                                                                                                      as Batch,
      RequirementSegment,
      StockSegment,
      EntitledToDisposeParty,
      NameOfEntitledToDisposeParty,
      @ObjectModel.foreignKey.association: '_ShipFromParty'
      ShipFromParty,
      ShipFromPartyName,

      @Semantics.booleanIndicator:true
      IsBusinessPurposeCompleted,
      @ObjectModel.foreignKey.association: '_Carrier'
      Carrier,
      CarrierName,
      TimeZoneID,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:'EWMStockOwner'
      StockOwner,
      EWMStockOwner,
      StockOwnerName,
      @ObjectModel.foreignKey.association: '_StockType'
      EWMStockType,
      case when _StockType._Text[1:Language = $parameters.P_Language].EWMStockTypeName is not null
      then _StockType._Text[1:Language = $parameters.P_Language].EWMStockTypeName
      else _StockType._WhseIndepText[1:Language = $parameters.P_Language].EWMStockTypeName
      end                                                                                                                                                                                            as EWMStockTypeName,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'QuantityUnit'
      ProductQuantity,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'DisplayVolumeUnit'
      ItemVolume,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'DisplayWeightUnit'
      ItemNetWeight,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'DisplayWeightUnit'
      ItemGrossWeight,
      QuantityUnit,
      DisplayWeightUnit,
      DisplayVolumeUnit,
      @ObjectModel.foreignKey.association: '_CompletionStatus'
      CompletionStatus,
      _CompletionStatusName[1:Language = $parameters.P_Language].StatusName                                                                                                                          as CompletionStatusName,
      @ObjectModel.foreignKey.association: '_UnloadingStatus'
      UnloadingStatus,
      _UnloadingStatusName[1:Language = $parameters.P_Language].StatusName                                                                                                                           as UnloadingStatusName,

      @ObjectModel.foreignKey.association: '_PutawayStatus'
      PutawayStatus,
      _PutawayStatusName[1:Language = $parameters.P_Language].StatusName                                                                                                                             as PutawayStatusName,

      @ObjectModel.foreignKey.association: '_GoodsReceiptStatus'
      GoodsReceiptStatus,
      
      _GoodsReceiptStatusName[1:Language = $parameters.P_Language].StatusName                                                                                                                       as GoodsReceiptStatusName,
      @ObjectModel.foreignKey.association: '_QltyMgmtCountPlngStatus'
      QualityMgmtCountPlngStatus,
      _QltyMgmtCountPlngStatusName[1:Language = $parameters.P_Language].StatusName                                                                                                                   as QualityMgmtCountPlngStatusName,
      @ObjectModel.foreignKey.association: '_QualityMgmtInspPlngSts'
      QualityMgmtInspPlngStatus,
      _QualityMgmtInspPlngStsName[1:Language = $parameters.P_Language].StatusName                                                                                                                    as QualityMgmtInspPlngStsName,
      @ObjectModel.foreignKey.association: '_QualityMgmtInspectionSts'
      QualityMgmtInspectionStatus,
      _QualityMgmtInspectionStsName[1:Language = $parameters.P_Language].StatusName                                                                                                                  as QualityMgmtInspectionStsName,
      @ObjectModel.foreignKey.association: '_GoodsMovementBlockStatus'
      GoodsMovementBlockStatus,
      _GoodsMovementBlockStatusName[1:Language = $parameters.P_Language].StatusName                                                                                                                  as GoodsMovementBlockStatusName,
      @ObjectModel.foreignKey.association: '_CheckToleranceStatus'
      CheckToleranceStatus,
      _CheckToleranceStatusName[1:Language = $parameters.P_Language].StatusName                                                                                                                      as CheckToleranceStatusName,
      @ObjectModel.foreignKey.association: '_PlngPutawayStatus'
      PlanningPutawayStatus,
      _PlngPutawayStatusName [1:Language = $parameters.P_Language].StatusName                                                                                                                        as PlanningPutawayStatusName,
      @ObjectModel.foreignKey.association: '_TranspUnitAssgmtStatus'
      TransportationUnitAssgmtStatus,
      _TranspUnitAssgmtStatusName[1:Language = $parameters.P_Language].StatusName                                                                                                                    as TranspUnitAssgmtStatusName,
      @ObjectModel.foreignKey.association: '_ValueAddedDelivSts'
      ValueAddedServiceOrderStatus,
      _ValueAddedDelivStsName[1:Language = $parameters.P_Language].StatusName                                                                                                                        as ValueAddedDelivStsName,
      @ObjectModel.foreignKey.association: '_ValuationQtyAssgmtStatus'
      ValuationQtyAssignmentStatus,
      _ValuationQtyAssgmtStatusName[1:Language = $parameters.P_Language].StatusName                                                                                                                  as ValuationQtyAssgmtStatusName,
      @ObjectModel.foreignKey.association: '_WarehouseActivityStatus'
      WarehouseActivityStatus,
      _WarehouseActivityStatusName[1:Language = $parameters.P_Language].StatusName                                                                                                                   as WarehouseActivityStatusName,
      @ObjectModel.foreignKey.association: '_TransitStatus'
      TransitStatus,
      _TransitStatusName[1:Language = $parameters.P_Language].StatusName                                                                                                                             as TransitStatusName,
      @ObjectModel.foreignKey.association: '_TransitProcedureStatus'
      TransitProcedureStatus,
      _TransitProcedureStatusName [1:Language = $parameters.P_Language].StatusName                                                                                                                   as TransitProcedureStatusName,
      @ObjectModel.foreignKey.association: '_TranspPlngStatus'
      TransportationPlanningStatus,
      _TranspPlngStatusName         [1:Language = $parameters.P_Language].StatusName                                                                                                                 as TranspPlngStatusName,
      @ObjectModel.foreignKey.association: '_BlockStatus'
      OverallBlockStatus,      
      _BlockStatusName             [1:Language = $parameters.P_Language].StatusName                                                                                                                  as OverallBlockStatusName,
      @ObjectModel.foreignKey.association: '_ItemInconsistencyBlkSts'
      ItemInconsistencyBlkStatus,
      _ItemInconsistencyBlkStsName [1:Language = $parameters.P_Language].StatusName                                                                                                                  as ItemInconsistencyBlkStatusName,
      @ObjectModel.foreignKey.association: '_TranspPlanBlockStatus'
      TranspPlanBlockStatus,
      _TranspPlanBlockStatusName    [1:Language = $parameters.P_Language].StatusName                                                                                                                 as TranspPlanBlockStatusName,
      _WarehouseLocation.WarehouseLocation, //to avoid error in DCL I_EWM_OutboundDelivOrdC
      InbDelivCompltnEndUTCDateTime,
      //      UnloadingStartUTCDateTime,
      //      ActualPutawayStartUTCDateTime,
      ActualGRStartUTCDateTime,
      PlannedGRStartUTCDateTime,

      ActualPutawayEndUTCDateTime,
      UnloadingEndUTCDateTime,
      ActualGREndUTCDateTime,
      PlannedGREndUTCDateTime,

      InbDelivItemCrtnUTCDateTime,
      PutawayEndWhseTmznDateTime,
      ActualGREndWhseTmznDateTime,
      UnloadingEndWhseTmznDateTime,
      InbDelivItmCmpltWhseTmznDteTme,

      InbDelivCrtnWhseTmznDateTime,
      PlndDeliveryWhseTmznDateTime,
      ActualDeliveryWhseTmznDateTime,
      PlndArrvlInYardWhseTmznDteTme,
      ActlArrvlInYardWhseTmznDteTme,
      PlndGREndWhseTmznDateTime,

      PlndGoodsReceiptWhseTmznYear,
      PlndGoodsReceiptWhseTmznMonth,
      PlndGoodsReceiptWhseTmznDate,
      PlndGoodsReceiptWhseTmznHour,
      PlndGoodsReceiptWhseTmznTime,

      UnloadingEndWhseTmznYear,
      UnloadingEndWhseTmznMonth,
      UnloadingEndWhseTmznDate,
      UnloadingEndWhseTmznHour,
      UnloadingEndWhseTmznTime,


      PutawayEndWhseTmznYear,
      PutawayEndWhseTmznMonth,
      PutawayEndWhseTmznDate,
      PutawayEndWhseTmznHour,
      PutawayEndWhseTmznTime,


      GoodsReceiptEndWhseTmznYear,
      GoodsReceiptEndWhseTmznMonth,
      GoodsReceiptEndWhseTmznDate,
      GoodsReceiptEndWhseTmznHour,
      GoodsReceiptEndWhseTmznTime,


      InbDelivCompltnEndWhseTmznYear,
      InbDelivCompltnEndWhseTmznMnth,
      InbDelivCompltnEndWhseTmznDate,
      InbDelivCompltnEndWhseTmznHour,
      InbDelivCompltnEndWhseTmznTime,


      PlannedDeliveryWhseTmznYear,
      PlannedDeliveryWhseTmznMonth,
      PlannedDeliveryWhseTmznDate,
      PlannedDeliveryWhseTmznHour,
      PlannedDeliveryWhseTmznTime,


      ActualDeliveryWhseTmznYear,
      ActualDeliveryWhseTmznMonth,
      ActualDeliveryWhseTmznDate,
      ActualDeliveryWhseTmznHour,
      ActualDeliveryWhseTmznTime,

      PlndArrvlInYardWhseTmznYear,
      PlndArrvlInYardWhseTmznMonth,
      PlndArrvlInYardWhseTmznDate,
      PlndArrvlInYardWhseTmznHour,
      PlndArrvlInYardWhseTmznTime,

      ActlArrvlInYardWhseTmznYear,
      ActlArrvlInYardWhseTmznMonth,
      ActlArrvlInYardWhseTmznDate,
      ActlArrvlInYardWhseTmznHour,
      ActlArrvlInYardWhseTmznTime,
      ActualArrivalInYardUTCDateTime,
      PlndArrivalInYardUTCDateTime,

      case when ( CompletionStatus <> '9' and CurrentUTCTimestamp > EWMDelivLastChangeUTCDateTime )
                then  div(tstmp_seconds_between(EWMDelivLastChangeUTCDateTime,CurrentUTCTimestamp,'NULL' ),60)
           else 0  end                                                                                                                                                                               as NoWhseActivityTimeInMinutes,

      case when GoodsReceiptStatus <> '9' and CurrentUTCTimestamp > PlndArrivalInYardUTCDateTime
                then  cast (div(tstmp_seconds_between(PlndArrivalInYardUTCDateTime , CurrentUTCTimestamp,'NULL'),60 )  as abap.fltp )
           when GoodsReceiptStatus = '9' and ActualArrivalInYardUTCDateTime > PlndArrivalInYardUTCDateTime
                then cast (div(tstmp_seconds_between(PlndArrivalInYardUTCDateTime,ActualArrivalInYardUTCDateTime,'NULL'),60 )   as abap.fltp )
           else 0 end                                                                                                                                                                                as ArrivalInYardOvrdDurnInMinutes,

      @DefaultAggregation:#SUM
      case when ActualGRStartUTCDateTime > ActualArrivalInYardUTCDateTime
                then cast ( div(tstmp_seconds_between(ActualArrivalInYardUTCDateTime,ActualGRStartUTCDateTime,'NULL'),60 )  as abap.fltp )
           else 0 end                                                                                                                                                                                as WaitInYardDurationInMinutes,

      @DefaultAggregation:#SUM
      case when ActualPutawayEndUTCDateTime > ActualGRStartUTCDateTime
                then cast ( div( tstmp_seconds_between( ActualGRStartUTCDateTime,ActualPutawayEndUTCDateTime,'NULL'), 60) as abap.fltp )
           else 0 end                                                                                                                                                                                as GoodsReceiptDurationInMinutes,

      //      @DefaultAggregation:#SUM
      //      case when UnloadingEndUTCDateTime > UnloadingStartUTCDateTime
      //                then cast ( div( tstmp_seconds_between( UnloadingStartUTCDateTime,UnloadingEndUTCDateTime,'NULL'),60) as abap.fltp )
      //           else 0 end                                                                                                                                                                                as UnloadingDurationInMinutes,

      //      @DefaultAggregation:#SUM
      //      case when ActualPutawayEndUTCDateTime > WhseTaskCrtnUTCDateTime
      //                then cast ( div(tstmp_seconds_between( WhseTaskCrtnUTCDateTime,ActualPutawayEndUTCDateTime,'NULL'),60) as abap.fltp )
      //           else 0 end                                                                                                                                                                                as PutawayDurationInMinutes,

      case when WhseTmznPlannedDeliverymins < '30'
                then cast(cast(cast(concat( substring(cast(PlndDeliveryWhseTmznDateTime as abap.char( 17 )), 1, 10), '0000' ) as abap.numc( 15 ) ) as abap.dec(15) ) as tzntstmps preserving type )
           else cast(cast(cast(concat( substring(cast(PlndDeliveryWhseTmznDateTime as abap.char( 17 )), 1, 10), '3000' ) as abap.numc( 15 ) ) as abap.dec(15) ) as tzntstmps preserving type ) end   as PlndDelivTo30MinsWhseDteTme,

      cast(cast(cast(concat( substring(cast(PlndDeliveryWhseTmznDateTime as abap.char( 17 )), 1, 10), '0000' )  as abap.numc( 15 )) as abap.dec(15) ) as tzntstmps preserving type )                 as PlndDelivTo60MinsWhseDteTme,

      case when WhseTmznPlndArrivalinYardmins < '30'
                then cast(cast(cast(concat( substring(cast(PlndArrvlInYardWhseTmznDteTme as abap.char( 17 )), 1, 10), '0000' ) as abap.numc( 15 ) ) as abap.dec(15) ) as tzntstmps preserving type )
           else cast(cast(cast(concat( substring(cast(PlndArrvlInYardWhseTmznDteTme as abap.char( 17 )), 1, 10), '3000' ) as abap.numc( 15 ) ) as abap.dec(15) ) as tzntstmps preserving type ) end  as PlndArrvlTo30MinsWhseDteTme,

      cast(cast(cast(concat( substring(cast(PlndArrvlInYardWhseTmznDteTme as abap.char( 17 )), 1, 10), '0000' )  as abap.numc( 15 )) as abap.dec(15) ) as tzntstmps preserving type )                as PlndArrvlTo60MinsWhseDteTme,

      case when WhseTmznActualDeliverymins < '30'
                then cast(cast(cast(concat( substring(cast(ActualDeliveryWhseTmznDateTime as abap.char( 17 )), 1, 10), '0000' ) as abap.numc( 15 ) ) as abap.dec(15) ) as tzntstmps preserving type )
           else cast(cast(cast(concat( substring(cast(ActualDeliveryWhseTmznDateTime as abap.char( 17 )), 1, 10), '3000' ) as abap.numc( 15 ) ) as abap.dec(15) ) as tzntstmps preserving type ) end as ActlDelivTo30MinsWhseDteTme,

      cast(cast(cast(concat( substring(cast(ActualDeliveryWhseTmznDateTime as abap.char( 17 )), 1, 10), '0000' )  as abap.numc( 15 )) as abap.dec(15) ) as tzntstmps preserving type )               as ActlDelivTo60MinsWhseDteTme,

      case when WhseTmznActualArrvlinYardmins < '30'
                then cast(cast(cast(concat( substring(cast(ActlArrvlInYardWhseTmznDteTme as abap.char( 17 )), 1, 10), '0000' ) as abap.numc( 15 ) ) as abap.dec(15) ) as tzntstmps preserving type )
           else cast(cast(cast(concat( substring(cast(ActlArrvlInYardWhseTmznDteTme as abap.char( 17 )), 1, 10), '3000' ) as abap.numc( 15 ) ) as abap.dec(15) ) as tzntstmps preserving type ) end  as ActlArrvlTo30MinsWhseDteTme,

      cast(cast(cast(concat( substring(cast(ActlArrvlInYardWhseTmznDteTme as abap.char( 17 )), 1, 10), '0000' )  as abap.numc( 15 )) as abap.dec(15) ) as tzntstmps preserving type )                as ActlArrvlTo60MinsWhseDteTme,

      case when WhseTmznCompletionEndmins < '30'
                then cast(cast(cast(concat( substring(cast(InbDelivItmCmpltWhseTmznDteTme as abap.char( 17 )), 1, 10), '0000' ) as abap.numc( 15 ) ) as abap.dec(15) ) as tzntstmps preserving type )
           else cast(cast(cast(concat( substring(cast(InbDelivItmCmpltWhseTmznDteTme as abap.char( 17 )), 1, 10), '3000' ) as abap.numc( 15 ) ) as abap.dec(15) ) as tzntstmps preserving type ) end as CompltnEndTo30MinsWhseDteTme,

      cast(cast(cast(concat( substring(cast(InbDelivItmCmpltWhseTmznDteTme as abap.char( 17 )), 1, 10), '0000' )  as abap.numc( 15 )) as abap.dec(15) ) as tzntstmps preserving type )               as CompltnEndTo60MinsWhseDteTme,

      case when WhseTmznGoodsReceiptEndmins < '30'
                then cast(cast(cast(concat( substring(cast(ActualGREndWhseTmznDateTime as abap.char( 17 )), 1, 10), '0000' ) as abap.numc( 15 ) ) as abap.dec(15) ) as tzntstmps preserving type )
           else cast(cast(cast(concat( substring(cast(ActualGREndWhseTmznDateTime as abap.char( 17 )), 1, 10), '3000' ) as abap.numc( 15 ) ) as abap.dec(15) ) as tzntstmps preserving type ) end    as GREndRnddTo30MinsWhseDteTme,

      cast(cast(cast(concat( substring(cast(ActualGREndWhseTmznDateTime as abap.char( 17 )), 1, 10), '0000' )  as abap.numc( 15 )) as abap.dec(15) ) as tzntstmps preserving type )                  as GREndRnddTo60MinsWhseDteTme,

      case when WhseTmznPutawayEndmins < '30'
                then cast(cast(cast(concat( substring(cast(PutawayEndWhseTmznDateTime as abap.char( 17 )), 1, 10), '0000' ) as abap.numc( 15 ) ) as abap.dec(15) ) as tzntstmps preserving type )
           else cast(cast(cast(concat( substring(cast(PutawayEndWhseTmznDateTime as abap.char( 17 )), 1, 10), '3000' ) as abap.numc( 15 ) ) as abap.dec(15) ) as tzntstmps preserving type ) end     as PtwyEndRnddTo30MinsWhseDteTme,

      cast(cast(cast(concat( substring(cast(PutawayEndWhseTmznDateTime as abap.char( 17 )), 1, 10), '0000' )  as abap.numc( 15 )) as abap.dec(15) ) as tzntstmps preserving type )                   as PtwyEndRnddTo60MinsWhseDteTme,

      case when WhseTmznUnloadingEndmins < '30'
                then cast(cast(cast(concat( substring(cast(UnloadingEndWhseTmznDateTime as abap.char( 17 )), 1, 10), '0000' ) as abap.numc( 15 ) ) as abap.dec(15) ) as tzntstmps preserving type )
           else cast(cast(cast(concat( substring(cast(UnloadingEndWhseTmznDateTime as abap.char( 17 )), 1, 10), '3000' ) as abap.numc( 15 ) ) as abap.dec(15) ) as tzntstmps preserving type ) end   as UnldgEndRnddTo30MinsWhseDteTme,

      cast(cast(cast(concat( substring(cast(UnloadingEndWhseTmznDateTime as abap.char( 17 )), 1, 10), '0000' )  as abap.numc( 15 )) as abap.dec(15) ) as tzntstmps preserving type )                 as UnldgEndRnddTo60MinsWhseDteTme,
      cast(substring(cast(PlndGoodsReceiptWhseTmznHour as abap.char( 10 ) ),9,2) as ewm_de_plndgr_in_hour)                                                                                           as EWMPlndGRWhseTmznHour,
      cast(substring(cast(PlannedDeliveryWhseTmznHour as abap.char( 10 ) ),9,2) as ewm_de_plnddelivery_in_hour)                                                                                      as EWMPlndDeliveryWhseTmznHour,
      // substring(cast(PlndGoodsReceiptWhseTmznHour as abap.char( 10 ) ),9,10)  as EWMPlndGRWhseTmznHour,
      @Semantics.booleanIndicator
      case when PlndGoodsReceiptWhseTmznDate  =  EWMWarehouseCurrentDate then cast ('X' as ewm_de_plndgr_is_today)  else cast ('' as ewm_de_plndgr_is_today) end                                     as EWMPlndGoodsReceiptDateIsToday,
      @Semantics.booleanIndicator
      case when PutawayEndWhseTmznDate        =  EWMWarehouseCurrentDate then cast ('X' as ewm_de_actual_putaway_is_today) else cast ('' as ewm_de_actual_putaway_is_today) end                      as EWMActualPutawayDateIsToday,
      @Semantics.booleanIndicator
      case when PlndGoodsReceiptWhseTmznDate  =  EWMWarehouseCurrentDate
               or GoodsReceiptEndWhseTmznDate =  EWMWarehouseCurrentDate then cast ('X' as ewm_de_plnd_actual_gr_is_today) else cast ('' as ewm_de_plnd_actual_gr_is_today) end                      as EWMPlndOrActGRIsToday,
      //EWMDeliveryAdjustmentQuantity,
      @Semantics.booleanIndicator
      case when PlannedDeliveryWhseTmznDate  =  EWMWarehouseCurrentDate then cast ('X' as ewm_de_plnddelivery_is_today)  else cast ('' as ewm_de_plnddelivery_is_today) end                          as EWMPlndDeliveryDateIsToday,
      @Semantics.booleanIndicator
      EWMQuantityHasAdjustment,
      @Semantics.booleanIndicator
      EWMPlndGRDateIsInPast,
      @Semantics.booleanIndicator
      EWMActualGRDateIsOnTime,
      @Semantics.booleanIndicator
      EWMPlndDeliveryTimeIsInPast,
      @Semantics.booleanIndicator
      EWMActGRIsBeforePlndDelivTime,
      _StorageType,
      _DeliveryCategory,
      _DeliveryType,
      _InboundDeliveryType,
      _StagingArea,
      _StockType,
      _DeliveryItemType,
      _WarehouseProcessType,
      _Product,
      _ItemCat,
      _Warehouse,
      _MeansOfTransportType,
      _ShipFromParty,
      _Carrier,
      _ShipFromPartyNew,
      _CarrierNew,
      _GoodsReceiptStatus,
      _PutawayStatus,
      _BlockStatus,
      _TranspPlanBlockStatus,
      _CompletionStatus,
      _ItemInconsistencyBlkSts,
      _GoodsMovementBlockStatus,
      _TransitProcedureStatus,
      _WarehouseActivityStatus,
      _TranspUnitAssgmtStatus,
      _ValuationQtyAssgmtStatus,
      _ValueAddedDelivSts,
      _UnloadingStatus,
      _CheckToleranceStatus,
      _PlngPutawayStatus,
      _TransitStatus,
      _TranspPlngStatus,
      _QualityMgmtInspectionSts,
      _QualityMgmtInspPlngSts,
      _QltyMgmtCountPlngStatus
}
```
