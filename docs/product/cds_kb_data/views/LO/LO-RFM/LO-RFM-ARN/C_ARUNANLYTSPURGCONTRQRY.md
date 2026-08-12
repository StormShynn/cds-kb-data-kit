---
name: C_ARUNANLYTSPURGCONTRQRY
description: "Purchasing Contract Details Query"
app_component: LO-RFM-ARN
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARUNANLYTSPURGCONTRQRY')/$value
semantic_en: "Purchasing Contract Details Query"
semantic_vi: "Purchasing Contract Details Query — CDS view tiêu dùng dựa trên I_ARunAnlytsPurgContrCube."
keywords:
  - "purchasing"
  - "contract"
  - "details"
  - "query"
  - "product"
  - "plant"
  - "batch"
  - "storage"
  - "location"
  - "supply"
  - "number"
tags:
  - LO
  - component:LO-RFM-ARN
  - consumption-view
  - contract
  - LO-RFM
  - LO-RFM-ARN
  - lob:logistics general
---
# C_ARUNANLYTSPURGCONTRQRY

**Purchasing Contract Details Query**

| Property | Value |
|---|---|
| App Component | `LO-RFM-ARN` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARUNANLYTSPURGCONTRQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Product` | ✓ | |  |  | `CHAR(40)` | Material Number |
| `Plant` | ✓ | |  |  | `CHAR(4)` | Plant |
| `Batch` | ✓ | |  |  | `CHAR(10)` | Batch Number |
| `StorageLocation` | ✓ | |  |  | `CHAR(4)` | Storage Location |
| `SupplyNumber` | ✓ | |  |  | `CHAR(12)` |  |
| `SupplyItem` | ✓ | |  |  | `CHAR(5)` |  |
| `SupplyScheduleLine` | ✓ | |  |  | `CHAR(4)` |  |
| `ProductAvailabilityDate` | ✓ | |  |  | `DATS(8)` | Purchasing Document Date |
| `AssignedSupplyType` | ✓ | |  |  | `CHAR(1)` |  |
| `RequestedDeliveryDate` |  | |  |  | `DATS(8)` | Purchasing Document Date |
| `TotalQuantity` |  | |  |  | `QUAN(14)` |  |
| `OpenSupplyQuantity` |  | |  |  | `QUAN(15)` |  |
| `AssignedQuantityInBaseUnit` |  | |  |  | `QUAN(13)` |  |
| `NormalAssignedQuantityInBsUnt` |  | |  |  | `QUAN(13)` |  |
| `PreviewAssignedQuantityInBsUnt` |  | |  |  | `DEC(12)` |  |
| `ARunTmpAssignedQuantityInBsUnt` |  | |  |  | `DEC(12)` |  |
| `ReleasedQuantity` |  | |  |  | `QUAN(13)` | Target Quantity |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Purchase Order Unit of Measure |
| `CalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `CalendarMonthName` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `CalendarWeek` |  | |  |  | `CHAR(63)` |  |
| `CalendarDay` |  | |  |  | `NUMC(2)` | Calendar Day |
| `SupAssgmtSource` |  | |  |  | `CHAR(1)` |  |
| `ProductType` |  | |  |  | `CHAR(4)` | Material Type |
| `ProductGroup` |  | |  |  | `CHAR(9)` | Material Group |
| `CrossPlantConfigurableProduct` |  | |  |  | `CHAR(40)` | Cross-Plant Configurable Material |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization for Intercompany Billing |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel for Intercompany billing |
| `Division` |  | |  |  | `CHAR(2)` | Division for Intercompany Billing |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `Customer` |  | |  |  | `CHAR(10)` |  |
| `CompanyCode` |  | |  |  | `CHAR(4)` |  |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` |  |
| `PurchasingGroup` |  | |  |  | `CHAR(3)` | Purchasing Group |
| `NetPriceAmount` |  | |  |  | `CURR(11)` | Net Price in Purchasing Document (in Document Currency) |
| `DocumentCurrency` |  | |  |  | `CUKY(5)` | Currency Key |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARUNANLYTSPURGCONTRQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARUNANLYTSPURGCONTRQRY')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #CONSUMPTION
@AccessControl: {
  authorizationCheck: #PRIVILEGED_ONLY,
  personalData.blocking: #REQUIRED
}
@AbapCatalog: {
  sqlViewName: 'CARNANLYTSPCQ',
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
@Analytics.query: true
@Metadata.ignorePropagatedAnnotations:true
@EndUserText.label: 'Purchasing Contract Details Query'
@ObjectModel.supportedCapabilities: #ANALYTICAL_QUERY
define view C_ARunAnlytsPurgContrQry
  as select from I_ARunAnlytsPurgContrCube
{
      @EndUserText.label: 'Product'
  key Product,
      @EndUserText.label: 'Plant'
  key Plant,
  key Batch,
  key StorageLocation,
  key SupplyNumber,
  key SupplyItem,
  key SupplyScheduleLine,
  key ProductAvailabilityDate,
  key AssignedSupplyType,
      RequestedDeliveryDate,
      //      @EndUserText.label: 'Total Supply'
      @DefaultAggregation: #SUM
      TotalQuantity,
      //      @EndUserText.label: 'Open Supply'
      @DefaultAggregation: #SUM
      OpenSupplyQuantity,
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
      //      @EndUserText.label: 'Referenced'
      @DefaultAggregation: #SUM
      ReleasedQuantity,
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
      SupAssgmtSource,
      @EndUserText.label: 'Product Type'
      ProductType,
      @EndUserText.label: 'Product Group'
      ProductGroup,
      CrossPlantConfigurableProduct,
      @EndUserText.label: 'Sales Organization'
      SalesOrganization,
      DistributionChannel,
      Division,
      @EndUserText.label: 'Sales District'
      SalesDistrict,
      @EndUserText.label: 'Customer'
      Customer,
      @EndUserText.label: 'Company Code'
      CompanyCode,
      PurchasingOrganization,
      PurchasingGroup,
      NetPriceAmount,
      DocumentCurrency
}
```
