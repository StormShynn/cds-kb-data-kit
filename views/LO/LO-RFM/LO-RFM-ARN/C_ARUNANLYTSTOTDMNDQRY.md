---
name: C_ARUNANLYTSTOTDMNDQRY
description: "Consumption View for Total Demand"
app_component: LO-RFM-ARN
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARUNANLYTSTOTDMNDQRY')/$value
semantic_en: "Consumption View for Total Demand"
semantic_vi: "Consumption View for Total Demand — CDS view tiêu dùng dựa trên I_ARunAnlytsTotDmndCube."
keywords:
  - "consumption"
  - "for"
  - "total"
  - "demand"
  - "requirement"
  - "document"
  - "number"
  - "item"
  - "requested"
  - "date"
  - "product"
  - "availability"
  - "type"
tags:
  - LO
  - component:LO-RFM-ARN
  - consumption-view
  - LO-RFM
  - LO-RFM-ARN
  - lob:logistics general
---
# C_ARUNANLYTSTOTDMNDQRY

**Consumption View for Total Demand**

| Property | Value |
|---|---|
| App Component | `LO-RFM-ARN` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARUNANLYTSTOTDMNDQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RequirementDocumentNumber` | ✓ | |  |  | `CHAR(10)` | Sales Document |
| `RequirementDocumentItem` | ✓ | |  |  | `NUMC(6)` | Sales Document Item |
| `RequestedDate` | ✓ | |  |  | `DATS(8)` | Product Availability Date |
| `ProductAvailabilityDate` | ✓ | |  |  | `DATS(8)` | Product Availability Date |
| `RequirementType` | ✓ | |  |  | `CHAR(2)` |  |
| `RequestedDeliveryDate` |  | |  |  | `DATS(8)` | Schedule Line Date |
| `RequestedRqmtQtyInBaseUnit` |  | |  |  | `QUAN(17)` |  |
| `ConfirmedRqmtQtyInBaseUnit` |  | |  |  | `QUAN(15)` |  |
| `AssignedQuantityInBaseUnit` |  | |  |  | `QUAN(13)` |  |
| `SupAssgmtReservedQtyInBaseUnit` |  | |  | `AssignedQuantityInBaseUnit` | `QUAN(13)` |  |
| `FixedQuantityInBaseUnit` |  | |  | `AssignedQuantityInBaseUnit` | `QUAN(13)` |  |
| `OnHoldQuantityInBaseUnit` |  | |  | `AssignedQuantityInBaseUnit` | `QUAN(13)` |  |
| `SimulationRdyForRelQtyInBsUnt` |  | |  | `AssignedQuantityInBaseUnit` | `QUAN(13)` |  |
| `DeliveredQuantityInBaseUnit` |  | |  |  | `QUAN(18)` |  |
| `OpenDemandQuantity` |  | |  |  | `QUAN(21)` |  |
| `NormalAssignedQuantityInBsUnt` |  | |  |  | `QUAN(13)` |  |
| `PreviewAssignedQuantityInBsUnt` |  | |  |  | `DEC(12)` |  |
| `ARunPhysSupAssgdQtyInBsUnt` |  | |  |  | `QUAN(13)` |  |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `SupAssgmtAggrgQtyUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `Product` |  | |  |  | `CHAR(40)` | Material Number |
| `ProductGroup` |  | |  |  | `CHAR(9)` | Material Group |
| `ProductType` |  | |  |  | `CHAR(4)` | Material Type |
| `RequirementSegment` |  | |  |  | `CHAR(40)` | Requirement Segment |
| `SupplyProtectionName` |  | |  |  | `CHAR(60)` | Name |
| `CrossPlantConfigurableProduct` |  | |  |  | `CHAR(40)` | Cross-Plant Configurable Material |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `PlantCountry` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `PlantRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `SalesOffice` |  | |  |  | `CHAR(4)` | Sales Office |
| `SalesGroup` |  | |  |  | `CHAR(3)` | Sales Group |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Customer Number |
| `ShipToCountry` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `CustomerRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `SoldToParty` |  | |  |  | `CHAR(10)` | Customer Number |
| `SoldToPartyCountry` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `SoldToPartyRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code to Be Billed |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `TotActualAmtInDisplayCurrency` |  | |  |  | `CURR(19)` | Net Value in Display Currency |
| `ARunReqdRqmtQtyFlfmtPercent` |  | |  | `cast(1 as req_unconf_so_itm_ratio)` | `DEC(13)` | Ratio of Unconfirmed Sales Order Items as Requested |
| `ARunConfdRqmtQtyFlfmtPercent` |  | |  | `cast(1 as req_unconf_so_itm_ratio)` | `DEC(13)` | Ratio of Unconfirmed Sales Order Items as Requested |
| `ARunConfdAsReqdPercent` |  | |  | `cast(1 as req_unconf_so_itm_ratio)` | `DEC(13)` | Ratio of Unconfirmed Sales Order Items as Requested |
| `ARunDeliveredQtyFlfmtPercent` |  | |  | `cast(1 as req_unconf_so_itm_ratio)` | `DEC(13)` | Ratio of Unconfirmed Sales Order Items as Requested |
| `ARunDeliveredAsConfdPercent` |  | |  | `cast(1 as req_unconf_so_itm_ratio)` | `DEC(13)` | Ratio of Unconfirmed Sales Order Items as Requested |
| `ARunOpenDemandQtyFlfmtPercent` |  | |  | `cast(1 as req_unconf_so_itm_ratio)` | `DEC(13)` | Ratio of Unconfirmed Sales Order Items as Requested |
| `FashionCancelDate` |  | |  |  | `DATS(8)` | Cancellation Date |
| `ARunCancDteSupDlyTmeHrznCode` |  | |  |  | `CHAR(2)` |  |
| `ProductSeasonYear` |  | |  |  | `CHAR(4)` | Season Year |
| `ProductSeason` |  | |  |  | `CHAR(10)` | Season |
| `ProductCollection` |  | |  |  | `CHAR(10)` | Fashion Collection |
| `ProductTheme` |  | |  |  | `CHAR(10)` | Fashion Theme |
| `ProductCharacteristic1` |  | |  |  | `CHAR(18)` | Characteristic Value 1 |
| `ProductCharacteristic2` |  | |  |  | `CHAR(18)` | Characteristic Value 2 |
| `ProductCharacteristic3` |  | |  |  | `CHAR(18)` | Characteristic Value 3 |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARUNANLYTSTOTDMNDQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARUNANLYTSTOTDMNDQRY')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ClientHandling.type: #INHERITED
@VDM.viewType: #CONSUMPTION
@AccessControl: {
  personalData.blocking: #REQUIRED
}
@AbapCatalog: {
  sqlViewName: 'CARNALYTSTOTDMND',
  compiler.compareFilter: true,
  preserveKey:true
}
@ObjectModel:{
   usageType: {
     dataClass:      #MIXED,
     serviceQuality: #D,
     sizeCategory:   #XXL
   }
}
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@Metadata.ignorePropagatedAnnotations:true
@Analytics.query: true
@EndUserText.label: 'Consumption View for Total Demand'
@ObjectModel.supportedCapabilities: #ANALYTICAL_QUERY
define view C_ARunAnlytsTotDmndQry
  with parameters
    @Consumption.defaultValue: 'USD'
    P_DisplayCurrency : vdm_v_display_currency
  as select from I_ARunAnlytsTotDmndCube( P_DisplayCurrency: $parameters.P_DisplayCurrency) as Demand
{
      @EndUserText.label: 'Requirement Document Number'
  key RequirementDocumentNumber,
      @EndUserText.label: 'Requirement Document Item'
  key RequirementDocumentItem,
      //key SupProtTimeBucketUUID,
      @EndUserText.label: 'Requested Date'
  key RequestedDate,
      @EndUserText.label: 'Delivery Date'
  key ProductAvailabilityDate,
      @EndUserText.label: 'Demand Type'
      @AnalyticsDetails.query.display: #KEY_TEXT
  key Demand.RequirementType,
      @EndUserText.label: 'Requested Delivery Date'
      RequestedDeliveryDate,
      @EndUserText.label: 'Ordered Quantity'
      @DefaultAggregation: #SUM
      RequestedRqmtQtyInBaseUnit,
      @EndUserText.label: 'Confirmed Quantity'
      @DefaultAggregation: #SUM
      ConfirmedRqmtQtyInBaseUnit,
      @EndUserText.label: 'Total Assigned Quantity'
      @DefaultAggregation: #SUM
      AssignedQuantityInBaseUnit,
      @EndUserText.label: 'On Reservation (R)'
      AssignedQuantityInBaseUnit         as SupAssgmtReservedQtyInBaseUnit,
      @DefaultAggregation: #SUM
      @EndUserText.label: 'Ready for Delivery (F)'
      AssignedQuantityInBaseUnit         as FixedQuantityInBaseUnit,
      @DefaultAggregation: #SUM
      @EndUserText.label: 'On Hold (H)'
      AssignedQuantityInBaseUnit         as OnHoldQuantityInBaseUnit,
      @DefaultAggregation: #SUM
      @EndUserText.label: 'Open for Release (O)'
      AssignedQuantityInBaseUnit         as SimulationRdyForRelQtyInBsUnt,
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
      @EndUserText.label: 'Assigned by Physical Supply'
      ARunPhysSupAssgdQtyInBsUnt,
      BaseUnit,
      SupAssgmtAggrgQtyUnit,
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
      SupplyProtectionName,
      @EndUserText.label: 'Generic Article'
      CrossPlantConfigurableProduct,
      @AnalyticsDetails.query.display: #KEY_TEXT
      @EndUserText.label: 'Plant'
      Plant,
      @EndUserText.label: 'Plant Country'
      PlantCountry,
      @EndUserText.label: 'Plant Region'
      PlantRegion,
      @AnalyticsDetails.query.display: #KEY_TEXT
      @EndUserText.label: 'Sales Organization'
      SalesOrganization,
      @EndUserText.label: 'Sales Org. Country'
      Country,
      @EndUserText.label: 'Sales Org. Region'
      Region,
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
      @EndUserText.label: 'Ship to Party'
      ShipToParty,
      @EndUserText.label: 'Ship To Party Country'
      ShipToCountry,
      @EndUserText.label: 'Ship To Party Region'
      CustomerRegion,
      @AnalyticsDetails.query.display: #KEY_TEXT
      @EndUserText.label: 'Sold To Party'
      SoldToParty,
      @EndUserText.label: 'Sold To Party Country'
      SoldToPartyCountry,
      @EndUserText.label: 'Sold To Party Region'
      SoldToPartyRegion,
      @AnalyticsDetails.query.display: #KEY_TEXT
      @EndUserText.label: 'Company Code'
      CompanyCode,
      @Semantics.currencyCode: true
      DisplayCurrency,
      @EndUserText.label: 'Amount'
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      TotActualAmtInDisplayCurrency,
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
      cast(1 as req_unconf_so_itm_ratio) as ARunOpenDemandQtyFlfmtPercent,
      @Feature:'SW:RFM_CANC_DTE_UI'
      FashionCancelDate,
      @EndUserText.label: 'Cancel Date Horizon'
      ARunCancDteSupDlyTmeHrznCode,
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
      ProductCharacteristic3
      //      cast(
      //            concat(concat(concat(concat(concat(concat(ProductSeasonYear, '/'), ProductSeason), '/'), ProductCollection), '/'), ProductTheme)
      //            as abap.char( 60 ) )         as Season

}
```
