---
name: C_ARUNANLYTSBLKDSLSORDQUERY
description: Sales Orders with exceptions
app_component: LO-RFM-ARN
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARUNANLYTSBLKDSLSORDQUERY')/$value
semantic_en: Sales Orders with exceptions
semantic_vi: Sales Orders with exceptions — CDS view tiêu dùng dựa trên I_ARunAnlytsBlkdSlsOrdCube.
keywords:
  - sales
  - orders
  - with
  - exceptions
  - requirement
  - document
  - number
  - item
  - issue
  - name
  - order
  - items
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
# C_ARUNANLYTSBLKDSLSORDQUERY

**Sales Orders with exceptions**

| Property | Value |
|---|---|
| App Component | `LO-RFM-ARN` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARUNANLYTSBLKDSLSORDQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RequirementDocumentNumber` | ✓ | |  |  | `CHAR(10)` | Sales Document |
| `RequirementDocumentItem` | ✓ | |  |  | `NUMC(6)` | Sales Document Item |
| `Issue` | ✓ | |  |  | `CHAR(4)` | Issue |
| `IssueName` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `NumberOfSalesOrderItems` |  | |  |  | `INT4(10)` | Item Issues in Order |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `TotActualAmtInDisplayCurrency` |  | |  |  | `CURR(19)` | Net Value in Display Currency |
| `RequirementType` |  | |  |  | `CHAR(2)` |  |
| `RequestedDeliveryDate` |  | |  |  | `DATS(8)` |  |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `CrossPlantConfigurableProduct` |  | |  |  | `CHAR(40)` | Cross-Plant Configurable Material |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Material Group |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code to Be Billed |
| `RequirementSegment` |  | |  |  | `CHAR(40)` | Requirement Segment |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARUNANLYTSBLKDSLSORDQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARUNANLYTSBLKDSLSORDQUERY')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ClientHandling.type: #INHERITED
@VDM.viewType: #CONSUMPTION
@AccessControl: {
  personalData.blocking: #REQUIRED
}
@AbapCatalog: {
  sqlViewName: 'CARNALYTSOBLK',
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
@EndUserText.label: 'Sales Orders with exceptions' 
@ObjectModel.supportedCapabilities: #ANALYTICAL_QUERY
define view C_ARunAnlytsBlkdSlsOrdQuery
  with parameters
    //    @Consumption.defaultValue: 'M'
    //    P_ExchangeRateType : kurst,
    @Consumption.defaultValue: 'USD'
    P_DisplayCurrency : vdm_v_display_currency
  as select from I_ARunAnlytsBlkdSlsOrdCube(
                                            P_DisplayCurrency: $parameters.P_DisplayCurrency
                                          ) as Demand
{
      @EndUserText.label: 'Requirement Document Number'
  key RequirementDocumentNumber,
      @EndUserText.label: 'Requirement Document Item'
  key RequirementDocumentItem,
  key Issue,
      IssueName,
      @EndUserText.label: 'Number of Items'
      @DefaultAggregation: #SUM
      NumberOfSalesOrderItems,
      @Semantics.currencyCode: true
      DisplayCurrency,
      @EndUserText.label: 'Amount'
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      TotActualAmtInDisplayCurrency,
      @EndUserText.label: 'Demand Type'
      @AnalyticsDetails.query.display: #KEY_TEXT
      RequirementType,
      @EndUserText.label: 'Requested Delivery Date'
      RequestedDeliveryDate,
      @EndUserText.label: 'Product'
      @AnalyticsDetails.query.display: #KEY_TEXT
      Material,
      @EndUserText.label: 'Generic Article'
      @AnalyticsDetails.query.display: #KEY_TEXT
      CrossPlantConfigurableProduct,
      @EndUserText.label: 'Product Group'
      @AnalyticsDetails.query.display: #KEY_TEXT
      MaterialGroup,
      @AnalyticsDetails.query.display: #KEY_TEXT
      Plant,
      SalesOrganization,
      @AnalyticsDetails.query.display: #KEY_TEXT
      DistributionChannel,
      @AnalyticsDetails.query.display: #KEY_TEXT
      Division,
      @AnalyticsDetails.query.display: #KEY_TEXT
      SalesDistrict,
      @AnalyticsDetails.query.display: #KEY_TEXT
      @EndUserText.label: 'Customer Group'
      Customer,
      @EndUserText.label: 'Company Code'
      @AnalyticsDetails.query.display: #KEY_TEXT
      CompanyCode,
      @Feature:'SW:RFM_SEGMTN_UI'
      RequirementSegment
}
```
