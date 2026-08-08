---
name: C_SLSQTANCONVERSIONRATEQ
description: "This CDS view provides quotation conversion rates by various dimensions such as sales organization, customer, product, and sales office, among others. It provides the prerequisites for answering the following business questions: What is the proportion of quotations that have been converted into sales orders? What is the net value of converted quotations? What is the net value of a given quotation? Is a given quotation still within its validity period? By how much does actual quotation conversion rate deviate from the predicted rate? What are my top 10 quotations by conversion rate? What are my top 10 quotations by net value?"
app_component: SD-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SLSQTANCONVERSIONRATEQ')/$value
semantic_en: "This CDS view provides quotation conversion rates by various dimensions such as sales organization, customer, product, and sales office, among others. It provides the prerequisites for answering the following business questions: What is the proportion of quotations that have been converted into sales orders? What is the net value of converted quotations? What is the net value of a given quotation? Is a given quotation still within its validity period? By how much does actual quotation conversion rate deviate from the predicted rate? What are my top 10 quotations by conversion rate? What are my top 10 quotations by net value?"
semantic_vi: "Sales Quotation Conversion Rate - Query — CDS view tiêu dùng dựa trên I_SlsQtanConversionRateCube."
keywords:
  - "Sales Quotation Conversion Rate - Query"
  - "sales"
  - "quotation"
  - "conversion"
  - "rate"
  - "query"
  - "item"
  - "organization"
  - "distribution"
  - "channel"
  - "division"
tags:
  - SD
  - bo:businesspartner
  - component:SD-ANA-2CL
  - consumption-view
  - customer
  - lob:sales & distribution
  - order
  - product
  - quotation
  - sales-order
  - SD-ANA
  - SD-ANA-2CL
---
# C_SLSQTANCONVERSIONRATEQ

**This CDS view provides quotation conversion rates by various dimensions such as sales organization, customer, product, and sales office, among others. It provides the prerequisites for answering the following business questions: What is the proportion of quotations that have been converted into sales orders? What is the net value of converted quotations? What is the net value of a given quotation? Is a given quotation still within its validity period? By how much does actual quotation conversion rate deviate from the predicted rate? What are my top 10 quotations by conversion rate? What are my top 10 quotations by net value?**

| Property | Value |
|---|---|
| App Component | `SD-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SLSQTANCONVERSIONRATEQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesQuotation` | ✓ | |  |  | `CHAR(10)` | Sales Quotation |
| `SalesQuotationItem` | ✓ | |  |  | `NUMC(6)` | Sales Quotation Item |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Division |
| `SalesOffice` |  | |  |  | `CHAR(4)` | Sales Office |
| `SalesGroup` |  | |  |  | `CHAR(3)` | Sales Group |
| `PartnerCompany` |  | |  |  | `CHAR(6)` | Company ID of Trading Partner |
| `SoldToParty` |  | |  |  | `CHAR(10)` | Sold-to Party |
| `ResponsibleEmployee` |  | |  |  | `NUMC(8)` | Employee Responsible |
| `SalesEmployee` |  | |  |  | `NUMC(8)` | Sales Employee |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `SalesQuotationNetAmtInDspCrcy` |  | |  |  | `CURR(19)` | Sales Quotation Net Amount In Display Currency |
| `CnvrtdSalesQtanNetAmtInDspCrcy` |  | |  |  | `CURR(19)` | Converted Sales Quoation Net Amount in Display Currency |
| `SalesQuotationConversionRate` |  | |  | `cast (1 as sd_quotation_conversion_rate)` | `DEC(7)` | Sales Quotation Conversion Rate |
| `SlsQtanPeriodElapsedPercent` |  | |  |  | `DEC(9)` | Sales Quotation Period Elapsed Percent |
| `SlsQtanPeriodDueDays` |  | |  | `cast (SlsQtanPeriodDueDays as sls_days_before_expiry)` | `INT4(10)` | Days Before Expiry of Quotation |
| `PrdtvSlsQtanCnvrsnAmtInDspCrcy` |  | |  |  | `CURR(19)` | Predicted Order Value in Display Currency (Deprecated) |
| `PrdtvSlsQtanCnvrsnRate` |  | |  | `cast (1 as sd_qt_predict_conversion_rate )` | `DEC(7)` | Predicted Sales Quotation Conversion Rate (Deprecated) |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SLSQTANCONVERSIONRATEQ')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SLSQTANCONVERSIONRATEQ')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Sales Quotation Conversion Rate - Query'
@VDM.viewType: #CONSUMPTION
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@AbapCatalog: {
  sqlViewName: 'CSDSLSQTANCRQ',
  compiler.compareFilter: true,
  preserveKey: true
}
@ObjectModel: {
  usageType: {
    dataClass:      #MIXED,
    serviceQuality: #X,
    sizeCategory:   #L
  }
}
@Analytics.query: true
@ObjectModel.supportedCapabilities:
   [ #ANALYTICAL_QUERY ]
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@OData.publish: true
@Metadata.ignorePropagatedAnnotations: true

define view C_SlsQtanConversionRateQ
  with parameters
    @Consumption.hidden : true
    @Environment.systemField : #SYSTEM_DATE
    P_Date             : sydate,
    @Consumption.defaultValue: 'M'
    @Consumption.valueHelpDefinition: [{
      entity: {
        name:'I_ExchangeRateType',
        element:'ExchangeRateType'
      }
    }]     
    P_ExchangeRateType : kurst,
    P_DisplayCurrency  : vdm_v_display_currency
  as select from I_SlsQtanConversionRateCube(P_Date:$parameters.P_Date, P_ExchangeRateType:$parameters.P_ExchangeRateType, P_DisplayCurrency: $parameters.P_DisplayCurrency)
{
      //Key
  key SalesQuotation,
  key SalesQuotationItem,

      //Sales Area
      @AnalyticsDetails.query.display: #KEY_TEXT
      SalesOrganization,
      @AnalyticsDetails.query.display: #KEY_TEXT
      DistributionChannel,
      @AnalyticsDetails.query.display: #KEY_TEXT
      OrganizationDivision,
      @AnalyticsDetails.query.display: #KEY_TEXT
      SalesOffice,
      @AnalyticsDetails.query.display: #KEY_TEXT
      SalesGroup,
      @AnalyticsDetails.query.display: #KEY_TEXT
      @Analytics.internalName: #LOCAL
      PartnerCompany, 
      //Partner
      @AnalyticsDetails.query.display: #KEY_TEXT
      SoldToParty,
      @AnalyticsDetails.query.display: #KEY_TEXT
      ResponsibleEmployee,
      @AnalyticsDetails.query.display: #KEY_TEXT
      SalesEmployee,

      //Material
      @UI.hidden: true
      @AnalyticsDetails.query.display: #KEY
      @API.element.releaseState:    #DEPRECATED
      @API.element.successor: 'Product'
      Material,

      @AnalyticsDetails.query.display: #KEY_TEXT
      Product,

      @Semantics.currencyCode: true
      @UI.hidden: true
      DisplayCurrency,

      //KPI: Quotation Conversion Rate
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      SalesQuotationNetAmtInDspCrcy,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      CnvrtdSalesQtanNetAmtInDspCrcy,

      @EndUserText.label: 'Conversion Rate'
      @DefaultAggregation: #FORMULA
      @AnalyticsDetails.query.formula: 'NDIV0( $projection.CnvrtdSalesQtanNetAmtInDspCrcy / $projection.SalesQuotationNetAmtInDspCrcy )'
      //  @EndUserText.label: 'Conversion Rate'
      cast (1 as sd_quotation_conversion_rate)              as SalesQuotationConversionRate,

      @DefaultAggregation: #MAX
      SlsQtanPeriodElapsedPercent,

      @DefaultAggregation: #MAX
      //  @EndUserText.label: 'Days Before Expiry'
      cast (SlsQtanPeriodDueDays as sls_days_before_expiry) as SlsQtanPeriodDueDays,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      PrdtvSlsQtanCnvrsnAmtInDspCrcy,

      //  @DefaultAggregation: #SUM
      //  PrdtvSlsQtanCnvrsnDeltaAmtInDC,

      @DefaultAggregation: #FORMULA
      @AnalyticsDetails.query.formula: 'NDIV0( $projection.PrdtvSlsQtanCnvrsnAmtInDspCrcy / $projection.SalesQuotationNetAmtInDspCrcy )'
      //  @EndUserText.label: 'Predicted Conversion Rate'
      cast (1 as sd_qt_predict_conversion_rate )            as PrdtvSlsQtanCnvrsnRate
}
```
