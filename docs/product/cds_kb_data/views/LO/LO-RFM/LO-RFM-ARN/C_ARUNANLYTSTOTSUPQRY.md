---
name: C_ARUNANLYTSTOTSUPQRY
description: "Total Supply of all Document Types Query"
app_component: LO-RFM-ARN
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARUNANLYTSTOTSUPQRY')/$value
semantic_en: "Total Supply of all Document Types Query"
semantic_vi: "Total Supply of all Document Types Query — CDS view tiêu dùng dựa trên I_ARunAnlytsTotSupCube."
keywords:
  - "total"
  - "supply"
  - "all"
  - "document"
  - "types"
  - "query"
  - "product"
  - "plant"
  - "batch"
  - "storage"
  - "location"
  - "number"
tags:
  - LO
  - component:LO-RFM-ARN
  - consumption-view
  - document
  - LO-RFM
  - LO-RFM-ARN
  - lob:logistics general
---
# C_ARUNANLYTSTOTSUPQRY

**Total Supply of all Document Types Query**

| Property | Value |
|---|---|
| App Component | `LO-RFM-ARN` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARUNANLYTSTOTSUPQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Product` | ✓ | |  |  | `CHAR(40)` | Material for Stock Mamangement |
| `Plant` | ✓ | |  |  | `CHAR(4)` | Plant |
| `Batch` | ✓ | |  |  | `CHAR(10)` | Batch Number (Stock Identifier) |
| `StorageLocation` | ✓ | |  |  | `CHAR(4)` | Storage Location |
| `SupplyNumber` | ✓ | |  |  | `CHAR(12)` |  |
| `SupplyItem` | ✓ | |  |  | `CHAR(6)` |  |
| `SupplyScheduleLine` | ✓ | |  |  | `CHAR(4)` |  |
| `ProductAvailabilityDate` | ✓ | |  |  | `DATS(8)` |  |
| `AssignedSupplyType` | ✓ | |  |  | `CHAR(1)` |  |
| `RequestedDeliveryDate` |  | |  |  | `DATS(8)` |  |
| `SupAssgmtSource` |  | |  |  | `CHAR(1)` |  |
| `TotalQuantity` |  | |  |  | `QUAN(25)` |  |
| `OpenSupplyQuantity` |  | |  |  | `QUAN(25)` |  |
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
| `ProductGroup` |  | |  |  | `CHAR(9)` | Material Group |
| `ProductType` |  | |  |  | `CHAR(4)` | Material Type |
| `CrossPlantConfigurableProduct` |  | |  |  | `CHAR(40)` | Cross-Plant Configurable Material |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `PurchasingGroup` |  | |  |  | `CHAR(3)` | Purchasing Group |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `NetPriceAmount` |  | |  |  | `CURR(11)` |  |
| `DocumentCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `StockSegment` |  | |  |  | `CHAR(40)` | Stock Segment |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARUNANLYTSTOTSUPQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARUNANLYTSTOTSUPQRY')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #CONSUMPTION
@AccessControl: {
  authorizationCheck: #PRIVILEGED_ONLY,
  personalData.blocking: #REQUIRED
}
@AbapCatalog: {
  sqlViewName: 'CARNANLYTSADSUPQ',
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
@Metadata.ignorePropagatedAnnotations:true
@Analytics.query: true
@EndUserText.label: 'Total Supply of all Document Types Query'
@ObjectModel.supportedCapabilities: #ANALYTICAL_QUERY
define view C_ARunAnlytsTotSupQry
  as select from I_ARunAnlytsTotSupCube
{
      @EndUserText.label: 'Product'
  key Product,
      @EndUserText.label: 'Plant'
  key Plant,
      @EndUserText.label: 'Batch'
  key Batch,
  key StorageLocation,
  key SupplyNumber,
  key SupplyItem,
  key SupplyScheduleLine,
  key ProductAvailabilityDate,
  key AssignedSupplyType,
      RequestedDeliveryDate,
      SupAssgmtSource,
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
      PurchasingOrganization,
      PurchasingGroup,
      @EndUserText.label: 'Sales Organization'
      SalesOrganization,
      DistributionChannel,
      Division,
      @EndUserText.label: 'Sales District'
      SalesDistrict,
      @EndUserText.label: 'Company Code'
      CompanyCode,
      @EndUserText.label: 'Customer'
      Customer,
      NetPriceAmount,
      DocumentCurrency,
      @Feature:'SW:RFM_SEGMTN_UI'
      StockSegment
}
```
