---
name: C_SHPDASPLNDDELIVITEMSQRY
description: "This CDS view selects goods-movement-relevant outbound delivery items that are due for shipping and and may have an acceptable shipping delay assigned to them. This CDS view provides the prerequisites for answering the following business questions: What is the delivery performance when you compare the planned goods movement date with the actual goods movement date? What is the average shipping delay in a certain timeframe? What was the maximum shipping delay in a certain timeframe?"
app_component: LE-SHP-FIO-ANA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SHPDASPLNDDELIVITEMSQRY')/$value
semantic_en: "This CDS view selects goods-movement-relevant outbound delivery items that are due for shipping and and may have an acceptable shipping delay assigned to them. This CDS view provides the prerequisites for answering the following business questions: What is the delivery performance when you compare the planned goods movement date with the actual goods movement date? What is the average shipping delay in a certain timeframe? What was the maximum shipping delay in a certain timeframe?"
semantic_vi: "Delivery Items Shipped as Planned — CDS view tiêu dùng dựa trên I_ShpdAsPlndDelivItemsCube."
keywords:
  - "Delivery Items Shipped as Planned"
  - "delivery"
  - "items"
  - "shipped"
  - "planned"
  - "outbound"
  - "item"
  - "goods"
  - "issue"
  - "date"
  - "adjusted"
  - "actual"
  - "movement"
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
---
# C_SHPDASPLNDDELIVITEMSQRY

**This CDS view selects goods-movement-relevant outbound delivery items that are due for shipping and and may have an acceptable shipping delay assigned to them. This CDS view provides the prerequisites for answering the following business questions: What is the delivery performance when you compare the planned goods movement date with the actual goods movement date? What is the average shipping delay in a certain timeframe? What was the maximum shipping delay in a certain timeframe?**

| Property | Value |
|---|---|
| App Component | `LE-SHP-FIO-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SHPDASPLNDDELIVITEMSQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OutboundDelivery` | ✓ | |  |  | `CHAR(10)` | Outbound Delivery |
| `OutboundDeliveryItem` | ✓ | |  |  | `NUMC(6)` | Outbound Delivery Item |
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
| `AvgGIToPlndGIDelayInDays` |  | |  | `cast(1 as avg_gi_to_plnd_gi_delay)` | `INT4(10)` | Average Goods Issue Performance as Days of Delay |
| `GIToPlndGIDelayInDays` |  | |  |  | `INT4(10)` | Delay of Goods Issue Compared to the Planned GI Date (Days) |
| `MaxGIToPlndGIDelayInDays` |  | |  |  | `INT4(10)` | Max. Delay of GI Compared to the Planned GI Date (Days) |
| `DelivItemsShpdAsPlndRatio` |  | |  | `cast(1 as dlv_itms_shipped_as_plnd_ratio)` | `DEC(13)` | Ratio of  Delivery Items Shipped as Planned |
| `NmbrOfShpdAsPlndDelivItems` |  | |  |  | `INT8(19)` | Number of Delivery Items Shipped as Planned |
| `CreationDate` |  | |  |  | `DATS(8)` | Record Creation Date |
| `SupplierName` |  | | `_ForwardingAgent` | `SupplierName` | `CHAR(80)` | Name of Supplier |
| `ReceivingPlantName` |  | | `_ReceivingPlant` | `PlantName` | `CHAR(30)` | Plant Name |
| `PlantName` |  | | `_Plant` | `PlantName` | `CHAR(30)` | Plant Name |
| `ShipToPartyName` |  | | `_ShipToParty` | `CustomerName` | `CHAR(80)` | Name of Customer |
| `SoldToPartyName` |  | | `_SoldToParty` | `CustomerName` | `CHAR(80)` | Name of Customer |
| `TransportationGroupName` |  | |  | `_TransportationGroup._Text[1: Language=$parameters.P_Language].TransportationGroupName` | `CHAR(20)` | Description |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SHPDASPLNDDELIVITEMSQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SHPDASPLNDDELIVITEMSQRY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CSHPPLNDQRY'
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XL
@Analytics.query:true
@VDM.viewType: #CONSUMPTION
@OData.publish: true

@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY

@EndUserText.label: 'Delivery Items Shipped as Planned'
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY ]
@ObjectModel.modelingPattern: [ #ANALYTICAL_QUERY ]

define view C_ShpdAsPlndDelivItemsQry 
   with parameters 
    @Consumption.defaultValue: '0'
    P_ShippedAsPlannedOffsetDays : le_shippedasplannedoffsetdays,
    
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_LANGUAGE
    P_Language : abap.lang
    
as select from I_ShpdAsPlndDelivItemsCube
    (P_ShippedAsPlannedOffsetDays:$parameters.P_ShippedAsPlannedOffsetDays) 
{
  

  @Consumption.semanticObject: 'OutboundDelivery'
  key OutboundDelivery, 
  
  key OutboundDeliveryItem, 

  PlannedGoodsIssueDate, 
  
  AdjustedPlannedGoodsIssueDate,
  
  ActualGoodsMovementDate, 
  
  @ObjectModel.text.element: ['DeliveryPriorityDesc']   
  DeliveryPriority,
  
  @ObjectModel.text.element: ['GoodsMovementStatusDesc'] 
  GoodsMovementStatus,
  
  @ObjectModel.text.element: ['PlantName'] 
  Plant,
  
  @ObjectModel.text.element: ['TransportationGroupName']   
  TransportationGroup,
  
  @ObjectModel.text.element: ['WarehouseName']
  Warehouse,

  @ObjectModel.text.element: ['DeliveryDocumentTypeName']
  DeliveryDocumentType,
  
  @ObjectModel.text.element: ['ReceivingPlantName']
  ReceivingPlant,
   
  @ObjectModel.text.element: ['ShipToPartyName']
  @Consumption.semanticObject: 'Customer'
  @Consumption.valueHelpDefinition: [ { entity: { name: 'I_Customer_VH', element: 'Customer' } } ] 
  ShipToParty,
  
  @ObjectModel.text.element: ['ShippingConditionName']
  ShippingCondition,
  
  @AnalyticsDetails.query.axis: #ROWS
  @ObjectModel.text.element: ['ShippingPointName']
  ShippingPoint,
  
  @ObjectModel.text.element: ['SoldToPartyName']
  @Consumption.semanticObject: 'Customer'
  SoldToParty,
  
  ProposedDeliveryRoute,

  CalendarYear,

  CalendarQuarter, 
   
  CalendarMonth,
  
  CalendarWeek, 
   
  YearMonth, 

  YearQuarter, 
   
  YearWeek, 
  
  @ObjectModel.text.element: ['ProductName']
  @Consumption.semanticObject: 'Product'
  Product,
  
  @ObjectModel.text.element: ['ProductGroupName']
  ProductGroup,
   
  @ObjectModel.text.element: ['CustomerClassificationDesc']
  CustomerClassification, 
  
  @ObjectModel.text.element: ['SupplierName'] 
  ForwardingAgent, 
  
  ReferenceSDDocument,
  
  ReferenceSDDocumentItem,
  
  @ObjectModel.text.element: ['SDDocumentCategoryName']
  ReferenceSDDocumentCategory,

  @Consumption.hidden: true
  HundredInPercent,
   
   /* KPIs */
  NumberOfDeliveryItems,-- Number of Deliveries
  
  @EndUserText.label: 'Average GI Delay in Days'
  @AnalyticsDetails.query.decimals: 2
  @AnalyticsDetails.query.formula: 'NDIV0( $projection.GIToPlndGIDelayInDays / $projection.NumberOfDeliveryItems )'
  cast(1 as avg_gi_to_plnd_gi_delay) as AvgGIToPlndGIDelayInDays,--Average Delay of GI (Days)
  
  @EndUserText.label: 'Total GI Delay in Days'
  GIToPlndGIDelayInDays, --Goods Issue Delay (Days)
  
  @EndUserText.label: 'Maximum GI Delay in Days'
  MaxGIToPlndGIDelayInDays,-- Max GI Delay (Days)
  
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.decimals: 2
  @AnalyticsDetails.query.formula: 'NDIV0( NODIM( $projection.NmbrOfShpdAsPlndDelivItems) / NODIM( $projection.NumberOfDeliveryItems) )*HundredInPercent'
  cast(1 as dlv_itms_shipped_as_plnd_ratio) as DelivItemsShpdAsPlndRatio,
       
  @AnalyticsDetails.query.axis: #ROWS
  NmbrOfShpdAsPlndDelivItems, -- shipped as planned deliveries
   
  @Semantics.systemDate.createdAt: true
  CreationDate,    

   /* Text Fields */ 
  _DeliveryDocumentType._Text[1: Language=$parameters.P_Language].DeliveryDocumentTypeName,
  _ForwardingAgent.SupplierName, 
  _ReceivingPlant.PlantName as ReceivingPlantName,
  _Plant.PlantName,
  _ReferenceSDDocumentCategory._Text[1: Language=$parameters.P_Language].SDDocumentCategoryName,
  _ShippingCondition._Text[1: Language=$parameters.P_Language].ShippingConditionName,
  _ShippingPoint._Text[1: Language=$parameters.P_Language].ShippingPointName,
  _ShipToParty.CustomerName as ShipToPartyName,
  _SoldToParty.CustomerName as SoldToPartyName,
  _Product._Text[1: Language=$parameters.P_Language].ProductName,
  _Warehouse._Text[1: Language=$parameters.P_Language].WarehouseName,
  _GoodsMovementStatus._Text[1: Language=$parameters.P_Language].GoodsMovementStatusDesc,
  _TransportationGroup._Text[1: Language=$parameters.P_Language].TransportationGroupName as TransportationGroupName,
  _DeliveryPriority._Text[1: Language=$parameters.P_Language].DeliveryPriorityDesc,
  _ProductGroup._ProductGroupText[1: Language=$parameters.P_Language].ProductGroupName,
  _CustomerClassification._Text[1: Language=$parameters.P_Language].CustomerClassificationDesc
}
```
