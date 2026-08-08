---
name: C_ARUNANLYTSSUPDMNDOVWQRY
description: "Overview of Supply and Demand Query"
app_component: LO-RFM-ARN
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARUNANLYTSSUPDMNDOVWQRY')/$value
semantic_en: "Overview of Supply and Demand Query"
semantic_vi: "Overview of Supply and Demand Query — CDS view tiêu dùng dựa trên I_ARunAnlytsSupDmndOvwCube."
keywords:
  - "overview"
  - "supply"
  - "and"
  - "demand"
  - "query"
  - "requirement"
  - "document"
  - "number"
  - "item"
  - "prot"
  - "time"
  - "bucket"
  - "product"
  - "availability"
  - "date"
tags:
  - LO
  - component:LO-RFM-ARN
  - consumption-view
  - LO-RFM
  - LO-RFM-ARN
  - lob:logistics general
---
# C_ARUNANLYTSSUPDMNDOVWQRY

**Overview of Supply and Demand Query**

| Property | Value |
|---|---|
| App Component | `LO-RFM-ARN` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARUNANLYTSSUPDMNDOVWQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RequirementDocumentNumber` | ✓ | |  |  | `CHAR(10)` | Sales Document |
| `RequirementDocumentItem` | ✓ | |  |  | `NUMC(6)` | Sales Document Item |
| `SupProtTimeBucketUUID` | ✓ | |  |  | `RAW(16)` |  |
| `ProductAvailabilityDate` | ✓ | |  |  | `DATS(8)` | Product Availability Date |
| `RequirementType` | ✓ | |  |  | `CHAR(2)` |  |
| `SupplyNumber` | ✓ | |  |  | `CHAR(12)` |  |
| `SupplyItem` | ✓ | |  |  | `CHAR(5)` |  |
| `SupplyScheduleLine` | ✓ | |  |  | `CHAR(4)` |  |
| `AssignedSupplyType` | ✓ | |  |  | `CHAR(1)` |  |
| `Product` | ✓ | |  |  | `CHAR(40)` | Material Number |
| `Plant` | ✓ | |  |  | `CHAR(4)` | Plant |
| `Batch` | ✓ | |  |  | `CHAR(10)` | Batch Number |
| `StorageLocation` | ✓ | |  |  | `CHAR(4)` | Storage Location |
| `RequestedDeliveryDate` |  | |  |  | `DATS(8)` | Schedule Line Date |
| `SupAssgmtSource` |  | |  |  | `CHAR(1)` |  |
| `RequestedRqmtQtyInBaseUnit` |  | |  |  | `QUAN(17)` |  |
| `ConfirmedRqmtQtyInBaseUnit` |  | |  |  | `QUAN(15)` |  |
| `DeliveredQuantityInBaseUnit` |  | |  |  | `QUAN(18)` |  |
| `OpenDemandQuantity` |  | |  |  | `QUAN(21)` |  |
| `AssignedQuantityInBaseUnit` |  | |  |  | `QUAN(13)` |  |
| `NormalAssignedQuantityInBsUnt` |  | |  |  | `QUAN(13)` |  |
| `PreviewAssignedQuantityInBsUnt` |  | |  |  | `DEC(12)` |  |
| `ARunTmpAssignedQuantityInBsUnt` |  | |  |  | `DEC(12)` |  |
| `OpenSupplyQuantity` |  | |  |  | `QUAN(25)` |  |
| `AssignedSupplyQtyInBaseUnit` |  | |  |  | `QUAN(25)` |  |
| `NormalSupplyQtyInBaseUnit` |  | |  |  | `QUAN(25)` |  |
| `PreviewSupplyQtyInBaseUnit` |  | |  |  | `QUAN(25)` |  |
| `ARunTmpAssgdSupQtyInBaseUnit` |  | |  |  | `QUAN(25)` |  |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `CalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `CalendarMonthName` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `CalendarWeek` |  | |  |  | `CHAR(63)` |  |
| `CalendarDay` |  | |  |  | `NUMC(2)` | Calendar Day |
| `ProductGroup` |  | |  |  | `CHAR(9)` | Material Group |
| `ProductType` |  | |  |  | `CHAR(4)` | Material Type |
| `CrossPlantConfigurableProduct` |  | |  |  | `CHAR(40)` | Cross-Plant Configurable Material |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `SalesOffice` |  | |  |  | `CHAR(4)` | Sales Office |
| `SalesGroup` |  | |  |  | `CHAR(3)` | Sales Group |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code to Be Billed |
| `SoldToParty` |  | |  |  | `CHAR(10)` | Customer Number |
| `SoldToPartyCountry` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `SoldToPartyRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Customer Number |
| `ShipToCountry` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `CustomerRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `PlantCountry` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `NetPriceAmount` |  | |  |  | `CURR(11)` | Net Price |
| `DocumentCurrency` |  | |  |  | `CUKY(5)` | SD Document Currency |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARUNANLYTSSUPDMNDOVWQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARUNANLYTSSUPDMNDOVWQRY')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ClientHandling.type: #INHERITED
@VDM.viewType: #CONSUMPTION
@AccessControl: {
  authorizationCheck: #PRIVILEGED_ONLY,
  personalData.blocking: #REQUIRED
}
@AbapCatalog: {
  sqlViewName: 'CARNANLYTSADOVWQ',
  compiler.compareFilter: true,
  preserveKey:true
}
@ObjectModel:{
   usageType: {
     dataClass:      #MIXED,
     serviceQuality: #X,
     sizeCategory:   #XXL
   }
}
@Metadata.ignorePropagatedAnnotations:true
@Analytics.query: true
@EndUserText.label: 'Overview of Supply and Demand Query'
@ObjectModel.supportedCapabilities: #ANALYTICAL_QUERY
define view C_ARunAnlytsSupDmndOvwQry
  as select from I_ARunAnlytsSupDmndOvwCube
{
  key RequirementDocumentNumber,
  key RequirementDocumentItem,
  key SupProtTimeBucketUUID,
  key ProductAvailabilityDate,
  key RequirementType,
  key SupplyNumber,
  key SupplyItem,
  key SupplyScheduleLine,
  key AssignedSupplyType,
      @EndUserText.label: 'Product'
  key Product,
      @EndUserText.label: 'Plant'
  key Plant,
  key Batch,
  key StorageLocation,
      RequestedDeliveryDate,
      SupAssgmtSource,
      @EndUserText.label: 'Ordered'
      @DefaultAggregation: #SUM
      RequestedRqmtQtyInBaseUnit,
      @EndUserText.label: 'Confirmed'
      @DefaultAggregation: #SUM
      ConfirmedRqmtQtyInBaseUnit,
      @EndUserText.label: 'Delivered'
      @DefaultAggregation: #SUM
      DeliveredQuantityInBaseUnit,
      @EndUserText.label: 'Open Demand'
      @DefaultAggregation: #SUM
      OpenDemandQuantity,
      @EndUserText.label: 'Total Assigned Quantity'
      @DefaultAggregation: #SUM
      AssignedQuantityInBaseUnit,
      @EndUserText.label: 'Normal Assigned'
      @DefaultAggregation: #SUM
      NormalAssignedQuantityInBsUnt,
      @EndUserText.label: 'Preview Assigned'
      @DefaultAggregation: #SUM
      PreviewAssignedQuantityInBsUnt,
      @EndUserText.label: 'Temporary Assigned'
      @DefaultAggregation: #SUM
      ARunTmpAssignedQuantityInBsUnt,
      @EndUserText.label: 'Open Supply'
      @DefaultAggregation: #SUM
      OpenSupplyQuantity,
      @EndUserText.label: 'Total Assigned(Supply)'
      @DefaultAggregation: #SUM
      AssignedSupplyQtyInBaseUnit,
      @EndUserText.label: 'Normal Assigned(Supply)'
      @DefaultAggregation: #SUM
      NormalSupplyQtyInBaseUnit,
      @EndUserText.label: 'Preview Assigned(Supply)'
      @DefaultAggregation: #SUM
      PreviewSupplyQtyInBaseUnit,
      @EndUserText.label: 'Temporary Assigned(Supply)'
      @DefaultAggregation: #SUM
      ARunTmpAssgdSupQtyInBaseUnit,
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
      @EndUserText.label: 'Product Group'
      ProductGroup,
      @EndUserText.label: 'Product Type'
      ProductType,
      @EndUserText.label: 'Generic Article'
      CrossPlantConfigurableProduct,
      @EndUserText.label: 'Sales Organization'
      SalesOrganization,
      @EndUserText.label: 'Sales Org. Country/Region'
      Country,
      @EndUserText.label: 'Sales Org. Region'
      Region,
      DistributionChannel,
      Division,
      @EndUserText.label: 'Sales District'
      SalesDistrict,
      @EndUserText.label: 'Sales Office'
      SalesOffice,
      @EndUserText.label: 'Sales Group'
      SalesGroup,
      @EndUserText.label: 'Company Code'
      CompanyCode,
      @EndUserText.label: 'Sold To Party'
      SoldToParty,
      @EndUserText.label: 'Sold To Party Country/Region'
      SoldToPartyCountry,
      @EndUserText.label: 'Sold To Party Region'
      SoldToPartyRegion,
      @EndUserText.label: 'Ship To Party'
      ShipToParty,
      @EndUserText.label: 'Ship To Party Country/Region'
      ShipToCountry,
      @EndUserText.label: 'Ship To Party Region'
      CustomerRegion,
      @EndUserText.label: 'Plant Country/Region'
      PlantCountry,
      NetPriceAmount,
      DocumentCurrency
}
```
