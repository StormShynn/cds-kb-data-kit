---
name: C_ARUNANLYTSSLSORDREJECTION
description: Sales Order Rejection
app_component: LO-RFM-ARN
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARUNANLYTSSLSORDREJECTION')/$value
semantic_en: Sales Order Rejection
semantic_vi: Sales Order Rejection — CDS view tiêu dùng dựa trên I_ARunAnlytsSlsOrdRejection.
keywords:
  - sales
  - order
  - rejection
  - requirement
  - document
  - number
  - item
  - prot
  - time
  - bucket
  - requested
  - date
  - product
  - availability
tags:
  - LO
  - bo:salesorder
  - component:LO-RFM-ARN
  - consumption-view
  - LO-RFM
  - LO-RFM-ARN
  - lob:logistics general
  - order
  - sales-order
---
# C_ARUNANLYTSSLSORDREJECTION

**Sales Order Rejection**

| Property | Value |
|---|---|
| App Component | `LO-RFM-ARN` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARUNANLYTSSLSORDREJECTION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RequirementDocumentNumber` | ✓ | |  |  | `CHAR(10)` | Sales Document |
| `RequirementDocumentItem` | ✓ | |  |  | `NUMC(6)` | Sales Document Item |
| `SupProtTimeBucketUUID` |  | |  |  | `RAW(16)` |  |
| `RequestedDate` |  | |  |  | `DATS(8)` | Material Staging/Availability Date |
| `ProductAvailabilityDate` |  | |  |  | `DATS(8)` | Material Staging/Availability Date |
| `RequirementType` |  | |  |  | `CHAR(2)` |  |
| `RequestedDeliveryDate` |  | |  |  | `DATS(8)` | Requested Delivery Date |
| `RequestedRqmtQtyInBaseUnit` |  | |  |  | `QUAN(17)` |  |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `Product` |  | |  |  | `CHAR(40)` | Material Number |
| `ProductGroup` |  | |  |  | `CHAR(9)` | Material Group |
| `ProductType` |  | |  |  | `CHAR(4)` | Material Type |
| `RequirementSegment` |  | |  |  | `CHAR(40)` | Requirement Segment |
| `CrossPlantConfigurableProduct` |  | |  |  | `CHAR(40)` | Cross-Plant Configurable Material |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division for Intercompany Billing |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `SalesOffice` |  | |  |  | `CHAR(4)` | Sales Office |
| `SalesGroup` |  | |  |  | `CHAR(3)` | Sales Group |
| `SoldToParty` |  | |  |  | `CHAR(10)` | Sold-to Party |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code to Be Billed |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `FashionCancelDate` |  | |  |  | `DATS(8)` | Cancellation Date |
| `ProductSeasonYear` |  | |  |  | `CHAR(4)` | Season Year |
| `ProductSeason` |  | |  |  | `CHAR(10)` | Season |
| `ProductCollection` |  | |  |  | `CHAR(10)` | Fashion Collection |
| `ProductTheme` |  | |  |  | `CHAR(10)` | Fashion Theme |
| `ProductCharacteristic1` |  | |  |  | `CHAR(18)` | Characteristic Value 1 |
| `ProductCharacteristic2` |  | |  |  | `CHAR(18)` | Characteristic Value 2 |
| `ProductCharacteristic3` |  | |  |  | `CHAR(18)` | Characteristic Value 3 |
| `ConfirmedRqmtQtyInBaseUnit` |  | |  |  | `QUAN(15)` | Quantity field, 15 characters |
| `AssignedQuantityInBaseUnit` |  | |  |  | `QUAN(15)` | Quantity field, 15 characters |
| `DeliveredQuantityInBaseUnit` |  | |  |  | `QUAN(18)` |  |
| `OpenDemandQuantity` |  | |  |  | `QUAN(21)` |  |
| `NormalAssignedQuantityInBsUnt` |  | |  |  | `QUAN(15)` | Quantity field, 15 characters |
| `PreviewAssignedQuantityInBsUnt` |  | |  |  | `DEC(12)` |  |
| `SupAssgmtAggrgQtyUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `SupplyProtectionName` |  | |  |  | `CHAR(60)` | Name |
| `PlantCountry` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `PlantRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `ShipToParty` |  | |  |  | `CHAR(10)` |  |
| `ShipToCountry` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `CustomerRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `SoldToPartyCountry` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `SoldToPartyRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `SalesDocumentRjcnReason` |  | |  |  | `CHAR(2)` | Reason for Rejection of Sales Documents |
| `TotActualAmtInDisplayCurrency` |  | |  |  | `CURR(19)` | Net Value in Display Currency |
| `NmbrOfItemsInOrder` |  | |  |  | `INT4(10)` | Item Issues in Order |
| `ARunReqdRqmtQtyFlfmtPercent` |  | |  | `cast(1 as req_unconf_so_itm_ratio)` | `DEC(13)` | Ratio of Unconfirmed Sales Order Items as Requested |
| `ARunConfdRqmtQtyFlfmtPercent` |  | |  | `cast(1 as req_unconf_so_itm_ratio)` | `DEC(13)` | Ratio of Unconfirmed Sales Order Items as Requested |
| `ARunConfdAsReqdPercent` |  | |  | `cast(1 as req_unconf_so_itm_ratio)` | `DEC(13)` | Ratio of Unconfirmed Sales Order Items as Requested |
| `ARunDeliveredQtyFlfmtPercent` |  | |  | `cast(1 as req_unconf_so_itm_ratio)` | `DEC(13)` | Ratio of Unconfirmed Sales Order Items as Requested |
| `ARunDeliveredAsConfdPercent` |  | |  | `cast(1 as req_unconf_so_itm_ratio)` | `DEC(13)` | Ratio of Unconfirmed Sales Order Items as Requested |
| `ARunOpenDemandQtyFlfmtPercent` |  | |  | `cast(1 as req_unconf_so_itm_ratio)` | `DEC(13)` | Ratio of Unconfirmed Sales Order Items as Requested |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARUNANLYTSSLSORDREJECTION')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARUNANLYTSSLSORDREJECTION')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #CONSUMPTION
@AccessControl: {
  authorizationCheck: #PRIVILEGED_ONLY,
  personalData.blocking: #REQUIRED
}
@AbapCatalog: {
  sqlViewName: 'CARNANLYTSREJSO',
  compiler.compareFilter: true,
  preserveKey:true
}
@ObjectModel:{
   usageType: {
     dataClass:      #MIXED,
     serviceQuality: #D,
     sizeCategory:   #L
   }
}
@Metadata.ignorePropagatedAnnotations:true
@Analytics.query: true
@EndUserText.label: 'Sales Order Rejection'
@ObjectModel.supportedCapabilities: #ANALYTICAL_QUERY
define view C_ARunAnlytsSlsOrdRejection
  with parameters
    @Consumption.defaultValue: 'USD'
    P_DisplayCurrency : vdm_v_display_currency
  as select from I_ARunAnlytsSlsOrdRejection( P_DisplayCurrency: $parameters.P_DisplayCurrency) as Demand
{
      @EndUserText.label: 'Requirement Document Number'
  key RequirementDocumentNumber,
      @EndUserText.label: 'Requirement Document Item'
  key RequirementDocumentItem,
      SupProtTimeBucketUUID,
      @EndUserText.label: 'Requested Date'
      RequestedDate,
      @EndUserText.label: 'Delivery Date'
      ProductAvailabilityDate,
      @EndUserText.label: 'Demand Type'
      @AnalyticsDetails.query.display: #KEY_TEXT
      RequirementType,
      @EndUserText.label: 'Requested Delivery Date'
      RequestedDeliveryDate,
      @EndUserText.label: 'Ordered Quantity'
      @DefaultAggregation: #SUM
      RequestedRqmtQtyInBaseUnit,
      BaseUnit,
      @EndUserText.label: 'Product'
      Product,
      @EndUserText.label: 'Product Group'
      @AnalyticsDetails.query.display: #KEY_TEXT
      ProductGroup,
      @EndUserText.label: 'Product Type'
      ProductType,
      @EndUserText.label: 'Requirement Segment'
      @Feature:'SW:RFM_SEGMTN_UI'
      RequirementSegment,
      @EndUserText.label: 'Generic Article'
      CrossPlantConfigurableProduct,
      @AnalyticsDetails.query.display: #KEY_TEXT
      @EndUserText.label: 'Plant'
      Plant,
      @AnalyticsDetails.query.display: #KEY_TEXT
      @EndUserText.label: 'Sales Organization'
      SalesOrganization,
      @AnalyticsDetails.query.display: #KEY_TEXT
      DistributionChannel,
      @AnalyticsDetails.query.display: #KEY_TEXT
      Division,
      @AnalyticsDetails.query.display: #KEY_TEXT
      @EndUserText.label: 'Sales District'
      SalesDistrict,
      @EndUserText.label: 'Sales Office'
      SalesOffice,
      @EndUserText.label: 'Sales Group'
      SalesGroup,
      @AnalyticsDetails.query.display: #KEY_TEXT
      @EndUserText.label: 'Sold To Party'
      SoldToParty,
      @AnalyticsDetails.query.display: #KEY_TEXT
      @EndUserText.label: 'Company Code'
      CompanyCode,
      @Semantics.currencyCode: true
      DisplayCurrency,
      @Feature:'SW:RFM_CANC_DTE_UI'
      FashionCancelDate,
      @EndUserText.label: 'Season Year'
      @Feature:'SW:RFM_SEASON_UI'
      ProductSeasonYear,
      @EndUserText.label: 'Season'
      @Feature:'SW:RFM_SEASON_UI'
      ProductSeason,
      @EndUserText.label: 'Collection'
      @Feature:'SW:RFM_SEASON_UI'
      ProductCollection,
      @EndUserText.label: 'Theme'
      @Feature:'SW:RFM_SEASON_UI'
      ProductTheme,
      @EndUserText.label: 'Product Characteristic 1'
      @Feature:'SW:RFM_CHARC_VALS_UI'
      ProductCharacteristic1,
      @EndUserText.label: 'Product Characteristic 2'
      @Feature:'SW:RFM_CHARC_VALS_UI'
      ProductCharacteristic2,
      @EndUserText.label: 'Product Characteristic 3'
      @Feature:'SW:RFM_CHARC_VALS_UI'
      ProductCharacteristic3,

      @EndUserText.label: 'Confirmed Quantity'
      @DefaultAggregation: #SUM
      ConfirmedRqmtQtyInBaseUnit,
      @EndUserText.label: 'Total Assigned Quantity'
      @DefaultAggregation: #SUM
      AssignedQuantityInBaseUnit,
      @EndUserText.label: 'Delivered Quantity'
      @DefaultAggregation: #SUM
      DeliveredQuantityInBaseUnit,
      @EndUserText.label: 'Open Demand Quantity'
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'SupAssgmtAggrgQtyUnit'
      OpenDemandQuantity,
      @Semantics.quantity.unitOfMeasure: 'SupAssgmtAggrgQtyUnit'
      @DefaultAggregation: #SUM
      NormalAssignedQuantityInBsUnt,
      @Semantics.quantity.unitOfMeasure: 'SupAssgmtAggrgQtyUnit'
      @DefaultAggregation: #SUM
      PreviewAssignedQuantityInBsUnt,
      SupAssgmtAggrgQtyUnit,
      SupplyProtectionName,
      @EndUserText.label: 'Plant Country/Region'
      PlantCountry,
      @EndUserText.label: 'Plant Region'
      PlantRegion,
      @EndUserText.label: 'Sales Org. Country/Region'
      Country,
      @EndUserText.label: 'Sales Org. Region'
      Region,
      @EndUserText.label: 'Ship to Party'
      ShipToParty,
      @EndUserText.label: 'Ship To Party Country/Region'
      ShipToCountry,
      @EndUserText.label: 'Ship To Party Region'
      CustomerRegion,
      @EndUserText.label: 'Sold To Party Country/Region'
      SoldToPartyCountry,
      @EndUserText.label: 'Sold To Party Region'
      SoldToPartyRegion,
      @EndUserText.label: 'Reason for Rejection'
      SalesDocumentRjcnReason,
      @EndUserText.label: 'Amount'
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      TotActualAmtInDisplayCurrency,
      @EndUserText.label: 'Number of Items'
      NmbrOfItemsInOrder,
      @EndUserText.label: 'Fulfilled as Requested'
      @AnalyticsDetails.query.decimals: 3
      @AnalyticsDetails.query.formula: 'NDIV0( ( $projection.AssignedQuantityInBaseUnit + $projection.DeliveredQuantityInBaseUnit ) /  $projection.RequestedRqmtQtyInBaseUnit)'
      cast(1 as req_unconf_so_itm_ratio) as ARunReqdRqmtQtyFlfmtPercent,
      @EndUserText.label: 'Fulfilled as Confirmed'
      @AnalyticsDetails.query.decimals: 3
      @AnalyticsDetails.query.formula: 'NDIV0( ( $projection.AssignedQuantityInBaseUnit + $projection.DeliveredQuantityInBaseUnit ) /  $projection.ConfirmedRqmtQtyInBaseUnit)'
      cast(1 as req_unconf_so_itm_ratio) as ARunConfdRqmtQtyFlfmtPercent,
      @EndUserText.label: 'Confirmed as Requested'
      @AnalyticsDetails.query.decimals: 3
      @AnalyticsDetails.query.formula: 'NDIV0($projection.ConfirmedRqmtQtyInBaseUnit /  $projection.RequestedRqmtQtyInBaseUnit)'
      cast(1 as req_unconf_so_itm_ratio) as ARunConfdAsReqdPercent,
      @EndUserText.label: 'Delivered as Requested'
      @AnalyticsDetails.query.decimals: 3
      @AnalyticsDetails.query.formula: 'NDIV0(( $projection.DeliveredQuantityInBaseUnit ) /  $projection.RequestedRqmtQtyInBaseUnit)'
      cast(1 as req_unconf_so_itm_ratio) as ARunDeliveredQtyFlfmtPercent,
      @EndUserText.label: 'Delivered as Confirmed'
      @AnalyticsDetails.query.decimals: 3
      @AnalyticsDetails.query.formula: 'NDIV0(( $projection.DeliveredQuantityInBaseUnit ) /  $projection.ConfirmedRqmtQtyInBaseUnit)'
      cast(1 as req_unconf_so_itm_ratio) as ARunDeliveredAsConfdPercent,
      @EndUserText.label: 'Open Demand'
      @AnalyticsDetails.query.decimals: 3
      @AnalyticsDetails.query.formula: 'NDIV0(( $projection.OpenDemandQuantity ) /  $projection.RequestedRqmtQtyInBaseUnit)'
      cast(1 as req_unconf_so_itm_ratio) as ARunOpenDemandQtyFlfmtPercent
}
```
