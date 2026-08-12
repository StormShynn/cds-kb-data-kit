---
name: C_ARUNANLYTSSALESRETURNSQRY
description: "Return Sales Orders"
app_component: LO-RFM-ARN
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARUNANLYTSSALESRETURNSQRY')/$value
semantic_en: "Return Sales Orders"
semantic_vi: "Return Sales Orders — CDS view tiêu dùng dựa trên I_ARunAnlytsSlsOrdRetCube."
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
  - bo:salesorder
---
# C_ARUNANLYTSSALESRETURNSQRY

**Return Sales Orders**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARUNANLYTSSALESRETURNSQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RequirementDocumentNumber` | ✓ | |  |  | `CHAR(10)` | Sales Document |
| `RequirementDocumentItem` | ✓ | |  |  | `NUMC(6)` | Sales Document Item |
| `SupplyScheduleLine` | ✓ | |  |  | `NUMC(4)` | Schedule Line Number |
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
| `NetAmount` |  | |  |  | `CURR(19)` | Net Value in Display Currency |
| `DocumentCurrency` |  | |  |  | `CUKY(5)` | SD Document Currency |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `NmbrOfItemsInOrder` |  | |  |  | `INT4(10)` | Item Issues in Order |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARUNANLYTSSALESRETURNSQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARUNANLYTSSALESRETURNSQRY')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #CONSUMPTION
@AccessControl: {
  authorizationCheck: #PRIVILEGED_ONLY,
  personalData.blocking: #REQUIRED
}
@AbapCatalog: {
  sqlViewName: 'CARNANLYTSRETSOQ',
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
define view C_ARunAnlytsSalesReturnsQry
  with parameters
    @Consumption.defaultValue: 'USD'
    P_DisplayCurrency : vdm_v_display_currency
  as select from I_ARunAnlytsSlsOrdRetCube ( P_DisplayCurrency: $parameters.P_DisplayCurrency)
{
  key RequirementDocumentNumber,
  key RequirementDocumentItem,
  key SupplyScheduleLine,
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
      @EndUserText.label: 'Amount'
      NetAmount,
      DocumentCurrency,
      DisplayCurrency,
      @EndUserText.label: 'Number of Items'
      NmbrOfItemsInOrder
}
```
