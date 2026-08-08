---
name: C_SALESCONTRACTITMFLFMTQ
description: "This CDS view provides sales contract fulfillment rates by various dimensions such as sales organization, customer, product, and employee responsible. It provides the prerequisites for answering the following business questions: To what extent are my contracts being fulfilled? Which contracts will expire soon? What are my top 10 contracts by target value?"
app_component: SD-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SALESCONTRACTITMFLFMTQ')/$value
semantic_en: "This CDS view provides sales contract fulfillment rates by various dimensions such as sales organization, customer, product, and employee responsible. It provides the prerequisites for answering the following business questions: To what extent are my contracts being fulfilled? Which contracts will expire soon? What are my top 10 contracts by target value?"
semantic_vi: "Sales Contract Fulfillment Rate - Query — CDS view tiêu dùng dựa trên I_SalesContractItemFlfmtCube."
keywords:
  - "Sales Contract Fulfillment Rate - Query"
  - "sales"
  - "contract"
  - "fulfillment"
  - "rate"
  - "query"
  - "item"
  - "organization"
  - "partner"
  - "company"
  - "sold"
  - "party"
tags:
  - SD
  - bo:businesspartner
  - component:SD-ANA-2CL
  - consumption-view
  - contract
  - customer
  - lob:sales & distribution
  - product
  - SD-ANA
  - SD-ANA-2CL
  - bo:companycode
---
# C_SALESCONTRACTITMFLFMTQ

**This CDS view provides sales contract fulfillment rates by various dimensions such as sales organization, customer, product, and employee responsible. It provides the prerequisites for answering the following business questions: To what extent are my contracts being fulfilled? Which contracts will expire soon? What are my top 10 contracts by target value?**

| Property | Value |
|---|---|
| App Component | `SD-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SALESCONTRACTITMFLFMTQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesContract` | ✓ | |  |  | `CHAR(10)` | Sales Contract |
| `SalesContractItem` | ✓ | |  |  | `NUMC(6)` | Sales Contract Item |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `PartnerCompany` |  | |  |  | `CHAR(6)` | Company ID of Trading Partner |
| `SoldToParty` |  | |  |  | `CHAR(10)` | Sold-to Party |
| `ResponsibleEmployee` |  | |  |  | `NUMC(8)` | Employee Responsible |
| `SalesEmployee` |  | |  |  | `NUMC(8)` | Sales Employee |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `SDDocumentRejectionStatus` |  | |  |  | `CHAR(1)` | Rejection Status (Item) |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `SlsContrPeriodElapsedPercent` |  | |  |  | `DEC(9)` | Sales Contract Period Elapsed Percent |
| `SalesContractTargetAmountInDC` |  | |  |  | `CURR(19)` | Target Value of Sales Contracts in Display Currency |
| `SalesContractTargetValue` |  | |  | `SalesContractTargetAmountInDC` | `CURR(19)` | Target Value of Sales Contracts in Display Currency |
| `SalesContractReleasedAmtInDC` |  | |  |  | `CURR(19)` | Released Value in Sales Contracts in Display Currency |
| `ReleasedNetAmount` |  | |  | `SalesContractReleasedAmtInDC` | `CURR(19)` | Released Value in Sales Contracts in Display Currency |
| `SalesContractFulfillmentRate` |  | |  | `1` | `INT1(3)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SALESCONTRACTITMFLFMTQ')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SALESCONTRACTITMFLFMTQ')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Sales Contract Fulfillment Rate - Query'
@VDM.viewType: #CONSUMPTION
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@AbapCatalog: {
   sqlViewName: 'CSDSLSCONTRIQ',
   compiler.compareFilter: true,
   preserveKey: true
}
@ObjectModel: {
  usageType: {
    dataClass:      #MIXED,
    serviceQuality: #D,
    sizeCategory:   #L
  }
}
@Analytics.query: true
@ObjectModel.supportedCapabilities:
   [ #ANALYTICAL_QUERY ]
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@OData.publish: true
@Metadata.ignorePropagatedAnnotations: true

//Select SalesContract, SalesContract Period Eplapsed Percent, caculate SalescContractFulfillmentRate and other Sales Contract Item related fields
define view C_SalesContractItmFlfmtQ
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
  as select from I_SalesContractItemFlfmtCube(P_Date:$parameters.P_Date, P_ExchangeRateType:$parameters.P_ExchangeRateType, P_DisplayCurrency: $parameters.P_DisplayCurrency)
{
      //Key
  key SalesContract,
  key SalesContractItem,

      //Sales Org
      @AnalyticsDetails.query.display: #KEY_TEXT
      SalesOrganization,
      
      //Trading Partner
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
      @AnalyticsDetails.query.display: #KEY_TEXT
      @API.element.releaseState:    #DEPRECATED
      @API.element.successor: 'Product'
      Material,

      @AnalyticsDetails.query.display: #KEY_TEXT
      Product,
      
      //Status
      @AnalyticsDetails.query.display: #KEY_TEXT
      SDDocumentRejectionStatus,
        
      @Semantics.currencyCode: true
      @UI.hidden: true
      DisplayCurrency,

      //KPI:Sales Contract Fulfillment Rate
      @DefaultAggregation: #MAX
      @EndUserText.label: 'Elapsed Time over Contract Period %'
      SlsContrPeriodElapsedPercent,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      SalesContractTargetAmountInDC,

      @API.element.releaseState:    #DEPRECATED
      @API.element.successor: 'SalesContractTargetAmountInDC'
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      @UI.hidden: true
      SalesContractTargetAmountInDC as SalesContractTargetValue,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      SalesContractReleasedAmtInDC,

      @API.element.releaseState:    #DEPRECATED
      @API.element.successor: 'SalesContractReleasedAmtInDC'
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      @UI.hidden: true
      SalesContractReleasedAmtInDC  as ReleasedNetAmount,

      @DefaultAggregation: #FORMULA
      @AnalyticsDetails.query.formula: 'NDIV0( $projection.SalesContractReleasedAmtInDC / $projection.SalesContractTargetAmountInDC )'
      @EndUserText.label: 'Contract Fulfillment Rate'
      1                             as SalesContractFulfillmentRate     


}
```
