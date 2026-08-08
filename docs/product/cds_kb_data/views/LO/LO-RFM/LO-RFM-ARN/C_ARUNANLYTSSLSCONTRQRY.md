---
name: C_ARUNANLYTSSLSCONTRQRY
description: "Contract Consumption Quantities"
app_component: LO-RFM-ARN
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARUNANLYTSSLSCONTRQRY')/$value
semantic_en: "Contract Consumption Quantities"
semantic_vi: "Contract Consumption Quantities — CDS view tiêu dùng dựa trên I_ARunAnlytsSlsContrCube."
keywords:
  - "contract"
  - "consumption"
  - "quantities"
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
  - contract
  - LO-RFM
  - LO-RFM-ARN
  - lob:logistics general
---
# C_ARUNANLYTSSLSCONTRQRY

**Contract Consumption Quantities**

| Property | Value |
|---|---|
| App Component | `LO-RFM-ARN` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARUNANLYTSSLSCONTRQRY')/$value) |

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
| `DeliveredQuantityInBaseUnit` |  | |  |  | `QUAN(18)` |  |
| `SalesContractReleasedQuantity` |  | |  |  | `QUAN(16)` |  |
| `OpenDemandQuantity` |  | |  |  | `QUAN(20)` |  |
| `AssignedQuantityInBaseUnit` |  | |  |  | `QUAN(13)` |  |
| `NormalAssignedQuantityInBsUnt` |  | |  |  | `QUAN(13)` |  |
| `PreviewAssignedQuantityInBsUnt` |  | |  |  | `DEC(12)` |  |
| `ARunTmpAssignedQuantityInBsUnt` |  | |  |  | `DEC(12)` |  |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `CalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `CalendarMonthName` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `CalendarWeek` |  | |  |  | `CHAR(63)` |  |
| `CalendarDay` |  | |  |  | `NUMC(2)` | Calendar Day |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `MaterialType` |  | |  |  | `CHAR(4)` | Material Type |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Material Group |
| `CrossPlantConfigurableProduct` |  | |  |  | `CHAR(40)` | Cross-Plant Configurable Material |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `SalesOrganization` |  | |  |  | `CHAR(4)` |  |
| `DistributionChannel` |  | |  |  | `CHAR(2)` |  |
| `Division` |  | |  |  | `CHAR(2)` |  |
| `SalesDistrict` |  | |  |  | `CHAR(6)` |  |
| `ContractExpiryDateHorizon` |  | |  |  | `NUMC(2)` |  |
| `SupAssgmtContrExpryRnge` |  | |  |  | `CHAR(2)` | ARun Contract Expiry Range |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CompanyCode` |  | |  |  | `CHAR(4)` |  |
| `StorageLocation` |  | |  |  | `CHAR(4)` | Storage Location |
| `NetPriceAmount` |  | |  |  | `CURR(11)` | Net Price |
| `DocumentCurrency` |  | |  |  | `CUKY(5)` | SD Document Currency |
| `SupAssgmtReservedQtyInBaseUnit` |  | |  | `cast(1 as req_unconf_so_itm_ratio)` | `DEC(13)` | Ratio of Unconfirmed Sales Order Items as Requested |
| `SalesContractReleasedPct` |  | |  | `cast(1 as req_unconf_so_itm_ratio)` | `DEC(13)` | Ratio of Unconfirmed Sales Order Items as Requested |
| `SalesContractOpenReleasePct` |  | |  | `cast(1 as req_unconf_so_itm_ratio)` | `DEC(13)` | Ratio of Unconfirmed Sales Order Items as Requested |
| `OpenDemandPercent` |  | |  | `cast(1 as req_unconf_so_itm_ratio)` | `DEC(13)` | Ratio of Unconfirmed Sales Order Items as Requested |
| `FixedQuantityInBaseUnit` |  | |  |  | `QUAN(13)` |  |
| `ReadyForReleaseQtyInBaseUnit` |  | |  |  | `QUAN(13)` |  |
| `ARunPhysSupAssgdQtyInBsUnt` |  | |  |  | `QUAN(13)` |  |
| `ProductSeasonYear` |  | |  |  | `CHAR(4)` | Season Year |
| `ProductSeason` |  | |  |  | `CHAR(10)` | Season |
| `ProductCollection` |  | |  |  | `CHAR(10)` | Fashion Collection |
| `ProductTheme` |  | |  |  | `CHAR(10)` | Fashion Theme |
| `ProductCharacteristic1` |  | |  |  | `CHAR(18)` | Characteristic Value 1 |
| `ProductCharacteristic2` |  | |  |  | `CHAR(18)` | Characteristic Value 2 |
| `ProductCharacteristic3` |  | |  |  | `CHAR(18)` | Characteristic Value 3 |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARUNANLYTSSLSCONTRQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARUNANLYTSSLSCONTRQRY')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ClientHandling.type: #INHERITED
@VDM.viewType: #CONSUMPTION
@AccessControl: {
  personalData.blocking: #REQUIRED
}
@AbapCatalog: {
  sqlViewName: 'CARNALYTSCONTR',
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
@Analytics.query: true
@Metadata.ignorePropagatedAnnotations:true
@EndUserText.label: 'Contract Consumption Quantities'
@ObjectModel.supportedCapabilities: #ANALYTICAL_QUERY
define view C_ARunAnlytsSlsContrQry
  as select from I_ARunAnlytsSlsContrCube
{
      //I_SupDmndAllDocContrCube
  key RequirementDocumentNumber,
  key RequirementDocumentItem,
  key RequestedDate,
  key ProductAvailabilityDate,
      @AnalyticsDetails.query.display: #KEY_TEXT
  key RequirementType,
      RequestedDeliveryDate,
      //      @EndUserText.label: 'Ordered'
      @DefaultAggregation: #SUM
      RequestedRqmtQtyInBaseUnit,
      //      @EndUserText.label: 'Confirmed'
      @DefaultAggregation: #SUM
      ConfirmedRqmtQtyInBaseUnit,
      //      @EndUserText.label: 'Delivered'
      @DefaultAggregation: #SUM
      DeliveredQuantityInBaseUnit,
      //      @EndUserText.label: 'Referenced'
      @DefaultAggregation: #SUM
      SalesContractReleasedQuantity,
      //      @EndUserText.label: 'Open Demand'
      @DefaultAggregation: #SUM
      OpenDemandQuantity,
      //      @EndUserText.label: 'Total Assigned'
      @DefaultAggregation: #SUM
      AssignedQuantityInBaseUnit,
      //      @EndUserText.label: 'Normal Assigned'
      @DefaultAggregation: #SUM
      NormalAssignedQuantityInBsUnt,
      //      @EndUserText.label: 'Preview Assigned'
      @DefaultAggregation: #SUM
      PreviewAssignedQuantityInBsUnt,
      //      @EndUserText.label: 'Temporary Assigned'
      @DefaultAggregation: #SUM
      ARunTmpAssignedQuantityInBsUnt,
      BaseUnit,
      @EndUserText.label: 'Year'
      CalendarYear,
      @EndUserText.label: 'Month Id'
      CalendarMonth,
      @EndUserText.label: 'Month'
      CalendarMonthName,
      @EndUserText.label: 'Week'
      CalendarWeek,
      @EndUserText.label: 'Day'
      CalendarDay,
      @EndUserText.label: 'Product'
      @AnalyticsDetails.query.display: #KEY_TEXT
      Material,
      @EndUserText.label: 'Product Type'
      @AnalyticsDetails.query.display: #KEY_TEXT
      MaterialType,
      @EndUserText.label: 'Product Group'
      @AnalyticsDetails.query.display: #KEY_TEXT
      MaterialGroup,
      @EndUserText.label: 'Generic Article'
      @AnalyticsDetails.query.display: #KEY_TEXT
      CrossPlantConfigurableProduct,
      @EndUserText.label: 'Plant'
      @AnalyticsDetails.query.display: #KEY_TEXT
      Plant,
      @EndUserText.label: 'Sales Organization'
      @AnalyticsDetails.query.display: #KEY_TEXT
      SalesOrganization,
      @EndUserText.label: 'Distribution Channel'
      @AnalyticsDetails.query.display: #KEY_TEXT
      DistributionChannel,
      @AnalyticsDetails.query.display: #KEY_TEXT
      @EndUserText.label: 'Division'
      Division,
      @AnalyticsDetails.query.display: #KEY_TEXT
      SalesDistrict,
      @EndUserText.label: 'Expiry Range'
      @AnalyticsDetails.query.display: #KEY_TEXT
      ContractExpiryDateHorizon,
      @EndUserText.label: 'Expiry Range'
      @AnalyticsDetails.query.display: #KEY_TEXT
      SupAssgmtContrExpryRnge,
      @EndUserText.label: 'Customer'
      @AnalyticsDetails.query.display: #KEY_TEXT
      Customer,
      @EndUserText.label: 'Company Code'
      @AnalyticsDetails.query.display: #KEY_TEXT
      CompanyCode,
      StorageLocation,
      NetPriceAmount,
      DocumentCurrency,
      @EndUserText.label: 'On Reservation'
      @AnalyticsDetails.query.decimals: 4
      @AnalyticsDetails.query.formula: 'NDIV0($projection.NormalAssignedQuantityInBsUnt /  $projection.RequestedRqmtQtyInBaseUnit)'
      cast(1 as req_unconf_so_itm_ratio) as SupAssgmtReservedQtyInBaseUnit,
      @EndUserText.label: 'Referenced'
      @AnalyticsDetails.query.decimals: 4
      @AnalyticsDetails.query.formula: 'NDIV0($projection.SalesContractReleasedQuantity /  $projection.RequestedRqmtQtyInBaseUnit)'
      cast(1 as req_unconf_so_itm_ratio) as SalesContractReleasedPct,
      @EndUserText.label: 'Open for Reference'
      @AnalyticsDetails.query.decimals: 4
      @AnalyticsDetails.query.formula: 'NDIV0( ( $projection.RequestedRqmtQtyInBaseUnit - $projection.SalesContractReleasedQuantity ) /  $projection.RequestedRqmtQtyInBaseUnit)'
      cast(1 as req_unconf_so_itm_ratio) as SalesContractOpenReleasePct,
      @EndUserText.label: 'Open Contract'
      @AnalyticsDetails.query.decimals: 4
      @AnalyticsDetails.query.formula: 'NDIV0( ( $projection.RequestedRqmtQtyInBaseUnit - ( $projection.SalesContractReleasedQuantity + $projection.NormalAssignedQuantityInBsUnt ) ) /  $projection.RequestedRqmtQtyInBaseUnit)'
      cast(1 as req_unconf_so_itm_ratio) as OpenDemandPercent,
      @EndUserText.label: 'Ready for Delivery'
      FixedQuantityInBaseUnit,
      @EndUserText.label: 'Open for Release Quantity'
      ReadyForReleaseQtyInBaseUnit,
      @EndUserText.label: 'Assigned by Physical Supply'
      ARunPhysSupAssgdQtyInBsUnt,
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
      @EndUserText.label: 'Product Characteristic1'
      @Feature:'SW:RFM_CHARC_VALS_UI'
      ProductCharacteristic1,
      @EndUserText.label: 'Product Characteristic2'
      @Feature:'SW:RFM_CHARC_VALS_UI'
      ProductCharacteristic2,
      @EndUserText.label: 'Product Characteristic3'
      @Feature:'SW:RFM_CHARC_VALS_UI'
      ProductCharacteristic3
}
```
