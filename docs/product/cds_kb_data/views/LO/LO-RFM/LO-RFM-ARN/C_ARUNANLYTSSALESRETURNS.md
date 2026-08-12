---
name: C_ARUNANLYTSSALESRETURNS
description: "Return Sales Orders"
app_component: LO-RFM-ARN
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARUNANLYTSSALESRETURNS')/$value
semantic_en: "Return Sales Orders"
semantic_vi: "Return Sales Orders — CDS view tiêu dùng dựa trên I_ARunAnlytsSalesReturns."
keywords:
  - "return"
  - "sales"
  - "orders"
  - "requirement"
  - "document"
  - "number"
  - "item"
  - "supply"
  - "schedule"
  - "line"
  - "assigned"
  - "type"
  - "assgmt"
  - "source"
tags:
  - LO
  - component:LO-RFM-ARN
  - consumption-view
  - LO-RFM
  - LO-RFM-ARN
  - lob:logistics general
  - order
  - sales-order
---
# C_ARUNANLYTSSALESRETURNS

**Return Sales Orders**

| Property | Value |
|---|---|
| App Component | `LO-RFM-ARN` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARUNANLYTSSALESRETURNS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RequirementDocumentNumber` |  | |  |  | `CHAR(10)` | Sales Document |
| `RequirementDocumentItem` |  | |  |  | `NUMC(6)` | Sales Document Item |
| `SupplyScheduleLine` |  | |  |  | `NUMC(4)` | Schedule Line Number |
| `AssignedSupplyType` |  | |  |  | `CHAR(1)` |  |
| `SupAssgmtSource` |  | |  |  | `CHAR(1)` |  |
| `SupplyDeliveryDate` |  | |  |  | `DATS(8)` | Requested Delivery Date |
| `ProductAvailabilityDate` |  | |  |  | `DATS(8)` | Requested Delivery Date |
| `RequestedDeliveryDate` |  | |  |  | `DATS(8)` | Requested Delivery Date |
| `TotalQuantity` |  | |  |  | `QUAN(15)` | Overall confirmed sales order schedule lines: quantity |
| `OpenSupplyQuantity` |  | |  |  | `QUAN(16)` |  |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `Product` |  | |  |  | `CHAR(40)` | Material Number |
| `ProductGroup` |  | |  |  | `CHAR(9)` | Material Group |
| `Plant` |  | |  |  | `CHAR(4)` | Plant (Own or External) |
| `OrderType` |  | |  |  | `CHAR(4)` | Sales Document Type |
| `ProductType` |  | |  |  | `CHAR(4)` | Material Type |
| `StockSegment` |  | |  |  | `CHAR(40)` | Requirement Segment |
| `CrossPlantConfigurableProduct` |  | |  |  | `CHAR(40)` | Cross-Plant Configurable Material |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `PurchasingGroup` |  | |  |  | `CHAR(3)` | Purchasing Group |
| `Batch` |  | |  |  | `CHAR(10)` | Batch Number |
| `StorageLocation` |  | |  |  | `CHAR(4)` | Storage Location |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code to Be Billed |
| `SDDocumentReason` |  | |  |  | `CHAR(3)` | Order Reason (Reason for the Business Transaction) |
| `SalesDocumentRjcnReason` |  | |  |  | `CHAR(2)` | Reason for Rejection of Sales Documents |
| `NetPriceAmount` |  | |  |  | `CURR(11)` | Net Price |
| `DocumentCurrency` |  | |  |  | `CUKY(5)` | SD Document Currency |
| `RequestedRqmtQtyInBaseUnit` |  | |  |  | `QUAN(15)` | Requested Order Quantity in Base Unit |
| `RequirementSegment` |  | |  |  | `CHAR(40)` | Requirement Segment |
| `SalesOffice` |  | |  |  | `CHAR(4)` | Sales Office |
| `SalesGroup` |  | |  |  | `CHAR(3)` | Sales Group |
| `SoldToParty` |  | |  |  | `CHAR(10)` | Sold-to Party |
| `FashionCancelDate` |  | |  |  | `DATS(8)` | Cancellation Date |
| `ProductSeasonYear` |  | |  |  | `CHAR(4)` | Season Year |
| `ProductSeason` |  | |  |  | `CHAR(10)` | Season |
| `ProductCollection` |  | |  |  | `CHAR(10)` | Fashion Collection |
| `ProductTheme` |  | |  |  | `CHAR(10)` | Fashion Theme |
| `ProductCharacteristic1` |  | |  |  | `CHAR(18)` | Characteristic Value 1 |
| `ProductCharacteristic2` |  | |  |  | `CHAR(18)` | Characteristic Value 2 |
| `ProductCharacteristic3` |  | |  |  | `CHAR(18)` | Characteristic Value 3 |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARUNANLYTSSALESRETURNS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARUNANLYTSSALESRETURNS')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #CONSUMPTION
@AccessControl: {
  authorizationCheck: #PRIVILEGED_ONLY,
  personalData.blocking: #REQUIRED
}
@AbapCatalog: {
  sqlViewName: 'CARNANLYTSRETSO',
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
@EndUserText.label: 'Return Sales Orders'
@ObjectModel.supportedCapabilities: #ANALYTICAL_QUERY
define view C_ARunAnlytsSalesReturns
  as select from I_ARunAnlytsSalesReturns
{
      RequirementDocumentNumber,
      RequirementDocumentItem,
      SupplyScheduleLine,
      AssignedSupplyType,
      SupAssgmtSource,
      SupplyDeliveryDate,
      @EndUserText.label: 'Delivery Date'
      ProductAvailabilityDate,
      @EndUserText.label: 'Requested Delivery Date'
      RequestedDeliveryDate,
      TotalQuantity,
      OpenSupplyQuantity,
      BaseUnit,
      @EndUserText.label: 'Product'
      Product,
      @EndUserText.label: 'Product Group'
      @AnalyticsDetails.query.display: #KEY_TEXT
      ProductGroup,
      @AnalyticsDetails.query.display: #KEY_TEXT
      @EndUserText.label: 'Plant'
      Plant,
      OrderType,
      @EndUserText.label: 'Product Type'
      ProductType,
      @EndUserText.label: 'Stock Segment'
      @Feature:'SW:RFM_SEGMTN_UI'
      StockSegment,
      @EndUserText.label: 'Generic Article'
      CrossPlantConfigurableProduct,
      @AnalyticsDetails.query.display: #KEY_TEXT
      @EndUserText.label: 'Sales Organization'
      SalesOrganization,
      DistributionChannel,
      Division,
      @AnalyticsDetails.query.display: #KEY_TEXT
      @EndUserText.label: 'Sales District'
      SalesDistrict,
      PurchasingOrganization,
      PurchasingGroup,
      Batch,
      StorageLocation,
      Customer,
      @AnalyticsDetails.query.display: #KEY_TEXT
      @EndUserText.label: 'Company Code'
      CompanyCode,
      SDDocumentReason,
      @EndUserText.label: 'Reason for Rejection'
      SalesDocumentRjcnReason,
      NetPriceAmount,
      DocumentCurrency,
      RequestedRqmtQtyInBaseUnit,
      @EndUserText.label: 'Requirement Segment'
      @Feature:'SW:RFM_SEGMTN_UI'
      RequirementSegment,
      @EndUserText.label: 'Sales Office'
      SalesOffice,
      @EndUserText.label: 'Sales Group'
      SalesGroup,
      @AnalyticsDetails.query.display: #KEY_TEXT
      @EndUserText.label: 'Sold To Party'
      SoldToParty,
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
      ProductCharacteristic3
}
```
