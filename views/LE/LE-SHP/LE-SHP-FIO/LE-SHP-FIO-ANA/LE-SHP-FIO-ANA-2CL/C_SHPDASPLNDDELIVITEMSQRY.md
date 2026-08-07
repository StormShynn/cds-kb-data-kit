---
name: C_SHPDASPLNDDELIVITEMSQRY
description: This CDS view selects goods-movement-relevant outbound delivery items that are due for shipping and and may have an acceptable shipping delay assigned to them. This CDS view provides the prerequisites for answering the following business questions: What is the delivery performance when you compare the planned goods movement date with the actual goods movement date? What is the average shipping delay in a certain timeframe? What was the maximum shipping delay in a certain timeframe?
app_component: LE-SHP-FIO-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SHPDASPLNDDELIVITEMSQRY')/$value
semantic_en: This CDS view selects goods-movement-relevant outbound delivery items that are due for shipping and and may have an acceptable shipping delay assigned to them. This CDS view provides the prerequisites for answering the following business questions: What is the delivery performance when you compare the planned goods movement date with the actual goods movement date? What is the average shipping delay in a certain timeframe? What was the maximum shipping delay in a certain timeframe?
keywords:
  - Delivery Items Shipped as Planned
tags:
  - LE
  - bo:deliverydocument
  - component:LE-SHP-FIO-ANA-2CL
  - consumption-view
  - delivery
  - LE-SHP
  - LE-SHP-FIO
  - LE-SHP-FIO-ANA
  - LE-SHP-FIO-ANA-2CL
  - lob:finance
  - lob:logistics execution
  - plan
  - metadata-only
---
# C_SHPDASPLNDDELIVITEMSQRY

**This CDS view selects goods-movement-relevant outbound delivery items that are due for shipping and and may have an acceptable shipping delay assigned to them. This CDS view provides the prerequisites for answering the following business questions: What is the delivery performance when you compare the planned goods movement date with the actual goods movement date? What is the average shipping delay in a certain timeframe? What was the maximum shipping delay in a certain timeframe?**

| Property | Value |
|---|---|
| App Component | `LE-SHP-FIO-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SHPDASPLNDDELIVITEMSQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OutboundDelivery` |  | |  |  | `CHAR(10)` | Outbound Delivery |
| `OutboundDeliveryItem` |  | |  |  | `NUMC(6)` | Outbound Delivery Item |
| `PlannedGoodsIssueDate` |  | |  |  | `DATS(8)` | Planned Goods Movement Date |
| `AdjustedPlannedGoodsIssueDate` |  | |  |  | `DATS(8)` | Adjusted PLanned GI Date |
| `ActualGoodsMovementDate` |  | |  |  | `DATS(8)` | Actual Goods Movement Date |
| `DeliveryPriority` |  | |  |  | `NUMC(2)` | Delivery Priority |
| `GoodsMovementStatus` |  | |  |  | `CHAR(1)` | Goods Movement Status (Item) |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `TransportationGroup` |  | |  |  | `CHAR(4)` | Transportation Group |
| `Warehouse` |  | |  |  | `CHAR(3)` | Warehouse Number / Warehouse Complex |
| `DeliveryDocumentType` |  | |  |  | `CHAR(4)` | Delivery Type |
| `ReceivingPlant` |  | |  |  | `CHAR(4)` | Receiving Plant for Deliveries |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `ShippingCondition` |  | |  |  | `CHAR(2)` | Shipping Conditions |
| `ShippingPoint` |  | |  |  | `CHAR(4)` | Shipping Point / Receiving Point |
| `SoldToParty` |  | |  |  | `CHAR(10)` | Sold-to Party |
| `ProposedDeliveryRoute` |  | |  |  | `CHAR(6)` | Route |
| `CalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `CalendarQuarter` |  | |  |  | `NUMC(1)` | Calendar Quarter |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `CalendarWeek` |  | |  |  | `NUMC(2)` | Calendar Week |
| `YearMonth` |  | |  |  | `NUMC(6)` | Year Month |
| `YearQuarter` |  | |  |  | `NUMC(5)` | Year Quarter |
| `YearWeek` |  | |  |  | `NUMC(6)` | Year Week |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `ProductGroup` |  | |  |  | `CHAR(9)` | Product Group |
| `CustomerClassification` |  | |  |  | `CHAR(2)` | Customer Classification |
| `ForwardingAgent` |  | |  |  | `CHAR(10)` | Account Number of Supplier |
| `ReferenceSDDocument` |  | |  |  | `CHAR(10)` | Document Number of Reference Document |
| `ReferenceSDDocumentItem` |  | |  |  | `NUMC(6)` | Item Number of the Reference Item |
| `ReferenceSDDocumentCategory` |  | |  |  | `CHAR(4)` | SD Document Category of Reference SD Document |
| `HundredInPercent` |  | |  |  | `INT1(3)` |  |
| `NumberOfDeliveryItems` |  | |  |  | `INT8(19)` | Number of Delivery Items |
| `AvgGIToPlndGIDelayInDays` |  | |  |  | `INT4(10)` | Average Goods Issue Performance as Days of Delay |
| `GIToPlndGIDelayInDays` |  | |  |  | `INT4(10)` | Delay of Goods Issue Compared to the Planned GI Date (Days) |
| `MaxGIToPlndGIDelayInDays` |  | |  |  | `INT4(10)` | Max. Delay of GI Compared to the Planned GI Date (Days) |
| `DelivItemsShpdAsPlndRatio` |  | |  |  | `DEC(13)` | Ratio of  Delivery Items Shipped as Planned |
| `NmbrOfShpdAsPlndDelivItems` |  | |  |  | `INT8(19)` | Number of Delivery Items Shipped as Planned |
| `CreationDate` |  | |  |  | `DATS(8)` | Record Creation Date |
| `DeliveryDocumentTypeName` |  | |  |  | `CHAR(20)` | Description |
| `SupplierName` |  | |  |  | `CHAR(80)` | Name of Supplier |
| `ReceivingPlantName` |  | |  |  | `CHAR(30)` | Plant Name |
| `PlantName` |  | |  |  | `CHAR(30)` | Plant Name |
| `SDDocumentCategoryName` |  | |  |  | `CHAR(60)` | SD Document Category Description |
| `ShippingConditionName` |  | |  |  | `CHAR(20)` | Shipping Conditions Description |
| `ShippingPointName` |  | |  |  | `CHAR(30)` | Description |
| `ShipToPartyName` |  | |  |  | `CHAR(80)` | Name of Customer |
| `SoldToPartyName` |  | |  |  | `CHAR(80)` | Name of Customer |
| `ProductName` |  | |  |  | `CHAR(40)` | Product Description |
| `WarehouseName` |  | |  |  | `CHAR(25)` | Warehouse Number Description |
| `GoodsMovementStatusDesc` |  | |  |  | `CHAR(20)` | Status Description |
| `TransportationGroupName` |  | |  |  | `CHAR(20)` | Description |
| `DeliveryPriorityDesc` |  | |  |  | `CHAR(20)` | Description |
| `ProductGroupName` |  | |  |  | `CHAR(20)` | Product Group Description |
| `CustomerClassificationDesc` |  | |  |  | `CHAR(20)` | Customer Classification Description |
