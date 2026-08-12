---
name: C_BUSINESSSOLUTIONORDERQRY
description: "This CDS view provides the data to answer the following business questions: What is my solution order volume for a given time period? How many solution orders do I have in a specific lifecycle status, for example, how many are in released status? What is the net value and volume of my solution orders by sales organization? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CRM-S4-ANA-CDS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BUSINESSSOLUTIONORDERQRY')/$value
semantic_en: "This CDS view provides the data to answer the following business questions: What is my solution order volume for a given time period? How many solution orders do I have in a specific lifecycle status, for example, how many are in released status? What is the net value and volume of my solution orders by sales organization? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Business Solution Order - Query — CDS view tiêu dùng dựa trên I_BusinessSolutionOrderCube."
keywords:
  - "business"
  - "solution"
  - "order"
  - "query"
  - "service"
  - "object"
  - "type"
  - "soln"
  - "description"
  - "distribution"
  - "channel"
tags:
  - CRM
  - bo:companycode
  - component:CRM-S4-ANA-CDS-2CL
  - consumption-view
  - CRM-S4
  - CRM-S4-ANA
  - CRM-S4-ANA-CDS
  - CRM-S4-ANA-CDS-2CL
  - order
  - bo:salesorder
---
# C_BUSINESSSOLUTIONORDERQRY

**This CDS view provides the data to answer the following business questions: What is my solution order volume for a given time period? How many solution orders do I have in a specific lifecycle status, for example, how many are in released status? What is the net value and volume of my solution orders by sales organization? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CRM-S4-ANA-CDS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BUSINESSSOLUTIONORDERQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceObjectType` | ✓ | |  |  | `CHAR(10)` | Business Trans. Cat. |
| `BusinessSolutionOrder` | ✓ | |  |  | `CHAR(10)` | Transaction ID |
| `BusSolnOrdType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `BusSolnOrdDescription` |  | |  |  | `CHAR(40)` | Transaction Description |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `SalesOffice` |  | |  |  | `CHAR(4)` | Sales Office |
| `SalesGroup` |  | |  |  | `CHAR(3)` | Sales Group |
| `SoldToParty` |  | |  |  | `CHAR(10)` | Sold-To Party |
| `SoldToPartyCountry` |  | |  |  | `CHAR(3)` | Country/Region |
| `SoldToPartyRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Currency |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` |  |
| `BusSolnOrdStatus` |  | |  |  | `CHAR(4)` | Life Cycle Status |
| `NrOfOpenBusSolnOrders` |  | |  |  | `INT4(10)` |  |
| `NrOfReldBusSolnOrders` |  | |  |  | `INT4(10)` |  |
| `NrOfCmpltdBusSolnOrders` |  | |  |  | `INT4(10)` |  |
| `NrOfCrtedBusSolnOrders` |  | |  |  | `INT4(10)` |  |
| `ServiceDocumentCreationDate` |  | |  |  | `DATS(8)` | Created On |
| `BusSolnOrdCreationQuarter` |  | |  |  | `NUMC(1)` | Calendar Quarter |
| `BusSolnOrdCreationMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `BusSolnOrdCreationYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date for a Business Transaction |
| `ServiceDocNetAmount` |  | |  | `currency_conversion( amount => ServiceDocNetAmount, source_currency => TransactionCurrency, target_currency => $parameters.P_DisplayCurrency, exchange_rate_type => 'M', exchange_rate_date => PostingDate )` | `CURR(15)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BUSINESSSOLUTIONORDERQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BUSINESSSOLUTIONORDERQRY')/$value)*

```abap
@EndUserText.label: 'Business Solution Order - Query'
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM: {
  viewType: #CONSUMPTION,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
  authorizationCheck: #PRIVILEGED_ONLY,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@AbapCatalog: {
  sqlViewName: 'CBUSSOLNORDQRY',
  compiler.compareFilter: true,
  preserveKey: true
}
@ObjectModel: {
   usageType: {
     dataClass:      #MIXED,
     serviceQuality: #D,
     sizeCategory:   #XXL
   },
   supportedCapabilities: [#ANALYTICAL_QUERY],
   modelingPattern: #ANALYTICAL_QUERY
}
@Metadata.ignorePropagatedAnnotations: true
@Analytics.query: true
@OData.publish: true
define view C_BusinessSolutionOrderQry
  with parameters
    @Consumption.defaultValue:'EUR'
    P_DisplayCurrency : vdm_v_display_currency
  as select from I_BusinessSolutionOrderCube(P_DisplayCurrency: $parameters.P_DisplayCurrency)
{

      @AnalyticsDetails.query.hidden: true
  key ServiceObjectType,
      @EndUserText.quickInfo: 'Business Solution Order'
      @ObjectModel.text.element: 'BusSolnOrdDescription'
  key BusinessSolutionOrder,
      @AnalyticsDetails.query.display: #KEY_TEXT
      BusSolnOrdType,

      BusSolnOrdDescription,
      @AnalyticsDetails.query.display: #KEY_TEXT
      DistributionChannel,
      @AnalyticsDetails.query.display: #KEY_TEXT
      Division,
      @AnalyticsDetails.query.display: #KEY_TEXT
      SalesOrganization,
      @AnalyticsDetails.query.display: #KEY_TEXT
      SalesOffice,
      @AnalyticsDetails.query.display: #KEY_TEXT
      SalesGroup,
      @AnalyticsDetails.query.display: #KEY_TEXT
      SoldToParty,
      @AnalyticsDetails.query.display: #KEY_TEXT
      SoldToPartyCountry,
      @AnalyticsDetails.query.display: #KEY_TEXT
      SoldToPartyRegion,
      //      @Semantics.currencyCode:true
      TransactionCurrency,
      @Semantics.currencyCode:true
      DisplayCurrency,
      @AnalyticsDetails.query.display: #KEY_TEXT
      BusSolnOrdStatus,
      
      @EndUserText.label: 'No. of Solution Orders in status Open/ In Process'
      @DefaultAggregation: #SUM
      NrOfOpenBusSolnOrders,
      @EndUserText.label: 'No. of Released Solution Orders'
      @DefaultAggregation: #SUM
      NrOfReldBusSolnOrders,
      @EndUserText.label: 'No. of Completed Solution Orders'
      @DefaultAggregation: #SUM
      NrOfCmpltdBusSolnOrders,
      
      @DefaultAggregation: #SUM
      NrOfCrtedBusSolnOrders,
      @EndUserText.label: 'Order Created On'
      ServiceDocumentCreationDate,
      @Semantics.calendar.quarter
      BusSolnOrdCreationQuarter,
      @Semantics.calendar.month
      BusSolnOrdCreationMonth,
      @Semantics.calendar.year
      BusSolnOrdCreationYear,
      PostingDate,
      @DefaultAggregation: #FORMULA
      @Semantics: { amount : {currencyCode: 'DisplayCurrency'} }
      currency_conversion(  amount =>  ServiceDocNetAmount,
                         source_currency =>  TransactionCurrency,
                         target_currency => $parameters.P_DisplayCurrency,
                         exchange_rate_type => 'M',
                         exchange_rate_date =>  PostingDate
                        ) as ServiceDocNetAmount

}
```
